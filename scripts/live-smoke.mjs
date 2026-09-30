import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { readFile, mkdir, writeFile } from "node:fs/promises";
import { homedir } from "node:os";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { promisify } from "node:util";

const exec = promisify(execFile);
const root = resolve(import.meta.dirname, "..");
const output = resolve(process.env.FLINT_SDK_OUTPUT ?? root);
const baseUrl =
  process.env.FLINT_TEST_BASE_URL ?? "https://api.staging.withflintpay.com";
assert.equal(new URL(baseUrl).origin, "https://api.staging.withflintpay.com");
const profileArg = process.argv.indexOf("--profile");
const profile =
  profileArg >= 0
    ? process.argv[profileArg + 1]
    : (process.env.FLINT_TEST_PROFILE ?? "staging");
let apiKey = process.env.FLINT_TEST_API_KEY;
let expected;
if (!apiKey) {
  const config = JSON.parse(
    await readFile(
      resolve(homedir(), "Library/Application Support/flint/config.json"),
      "utf8",
    ),
  );
  expected = config.profiles[profile];
  assert.equal(
    expected?.environment,
    "sandbox",
    "The CLI profile must select a sandbox",
  );
  const result = await exec("security", [
    "find-generic-password",
    "-s",
    "flint-cli",
    "-a",
    profile,
    "-w",
  ]);
  apiKey = result.stdout.trim();
  // Match zalando/go-keyring's macOS storage format used by the Flint CLI.
  if (apiKey.startsWith("go-keyring-base64:"))
    apiKey = Buffer.from(
      apiKey.slice("go-keyring-base64:".length),
      "base64",
    ).toString("utf8");
  else if (apiKey.startsWith("go-keyring-encoded:"))
    apiKey = Buffer.from(
      apiKey.slice("go-keyring-encoded:".length),
      "hex",
    ).toString("utf8");
  assert.ok(
    !apiKey.startsWith("{"),
    "This CLI profile contains a browser session. Supply FLINT_TEST_API_KEY or select an API-key profile with --profile.",
  );
}
assert.ok(
  apiKey,
  "FLINT_TEST_API_KEY or a sandbox CLI keychain profile is required",
);
const { Client, SdkError } = await import(
  pathToFileURL(resolve(output, "node/index.js"))
);
const client = new Client({
  baseUrl,
  apiKey,
  maxAttempts: 1,
  deadlineMs: 20_000,
});
const results = [];
async function scenario(name, run) {
  try {
    const detail = await run();
    results.push({ name, status: "PASS", ...detail });
  } catch (error) {
    results.push({
      name,
      status: "FAIL",
      kind: error instanceof SdkError ? error.kind : error.name,
      httpStatus: error instanceof SdkError ? error.status : undefined,
      code: error instanceof SdkError ? error.code : undefined,
    });
    throw error;
  }
}
try {
  await scenario("sandbox authentication and identity", async () => {
    const auth = await client.developer.getAuthContext();
    assert.equal(auth.environment, "sandbox");
    assert.ok(auth.merchant_id && auth.sandbox_id);
    if (expected) {
      assert.equal(auth.merchant_id, expected.merchant_id);
      assert.equal(auth.sandbox_id, expected.sandbox_id);
    }
    return { environment: auth.environment };
  });
  for (const [resource, idField] of [
    ["customers", "customer_id"],
    ["orders", "order_id"],
    ["paymentIntents", "payment_intent_id"],
    ["invoices", "invoice_id"],
  ]) {
    await scenario(`${resource}: list, cursor, metadata and get`, async () => {
      const page = await client[resource].list({ page_size: 1 });
      assert.ok(Array.isArray(page.data));
      assert.ok(
        page.next_page_token === undefined ||
          typeof page.next_page_token === "string",
      );
      const full = await client[resource].listWithResponse({ page_size: 1 });
      assert.ok(Array.isArray(full.body.data));
      assert.equal(full.meta.status, 200);
      assert.equal(typeof full.raw, "string");
      let cursorFollowed = false;
      if (page.next_page_token) {
        const next = await client[resource].list({
          page_size: 1,
          page_token: page.next_page_token,
        });
        assert.ok(Array.isArray(next.data));
        if (next.data.length && page.data.length)
          assert.notEqual(next.data[0][idField], page.data[0][idField]);
        cursorFollowed = true;
      }
      const pages = await Array.fromAsync(
        client[resource].listPages({ page_size: 1 }, { maxPages: 2 }),
      );
      assert.ok(pages.length >= 1 && pages.length <= 2);
      for (const p of pages) assert.ok(Array.isArray(p.data));
      let getChecked = false;
      if (page.data.length) {
        const entity = await client[resource].get(page.data[0][idField]);
        assert.equal(entity[idField], page.data[0][idField]);
        assert.equal(entity.data, undefined);
        const fullEntity = await client[resource].getWithResponse(page.data[0][idField]);
        assert.equal(fullEntity.body.data[idField], entity[idField]);
        getChecked = true;
      }
      return { itemsOnFirstPage: page.data.length, cursorFollowed, getChecked };
    });
  }
  await scenario(
    "invalid credentials produce an authentication error",
    async () => {
      const bad = new Client({
        baseUrl,
        apiKey: "flint_test_invalid_sdk_smoke",
        maxAttempts: 1,
      });
      try {
        await assert.rejects(
          bad.customers.list({ page_size: 1 }),
          (e) => e instanceof SdkError && e.status === 401,
        );
      } finally {
        await bad.close();
      }
      return {};
    },
  );
  await scenario("PHP default transport: list, metadata and get", async () => {
    const php = await exec(
      "php",
      [resolve(root, "scripts/live-smoke.php"), output],
      {
        env: {
          ...process.env,
          FLINT_TEST_API_KEY: apiKey,
          FLINT_TEST_BASE_URL: baseUrl,
        },
        timeout: 120_000,
        maxBuffer: 16_384,
      },
    );
    return JSON.parse(php.stdout);
  });
} catch {
  process.exitCode = 1;
} finally {
  await client.close();
  await mkdir(resolve(root, ".context"), { recursive: true, mode: 0o700 });
  const report = {
    at: new Date().toISOString(),
    baseUrl,
    readOnly: true,
    results,
  };
  await writeFile(
    resolve(root, ".context/live-smoke.json"),
    JSON.stringify(report, null, 2) + "\n",
    { mode: 0o600 },
  );
  console.log(JSON.stringify(report, null, 2));
}
