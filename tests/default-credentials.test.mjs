import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import {
  Client,
  defaultCredentials,
  workloadIdentityCredentials,
} from "../node/index.js";

test("published Node client discovers merchant credentials and preserves explicit isolation", async () => {
  const names = [
    "FLINT_API_KEY",
    "FLINT_ACCESS_TOKEN",
    "FLINT_WORKLOAD_IDENTITY_ID",
  ];
  const saved = Object.fromEntries(
    names.map((name) => [name, process.env[name]]),
  );
  try {
    for (const name of names) delete process.env[name];
    process.env.FLINT_API_KEY = "synthetic-default-api-key";
    assert.equal(
      (await defaultCredentials().getCredential()).value,
      "synthetic-default-api-key",
    );
    assert.equal(
      typeof workloadIdentityCredentials({
        workloadIdentityId: "wid_synthetic",
      }).getCredential,
      "function",
    );
    const seen = [];
    const transport = async (_url, init) => {
      seen.push(init.headers.authorization);
      return new Response("%PDF-1.7 synthetic", {
        headers: { "content-type": "application/pdf" },
      });
    };
    await new Client({ transport }).invoices.getPDF("inv_synthetic");
    await new Client({
      transport,
      apiKey: "synthetic-explicit-key",
    }).invoices.getPDF("inv_synthetic");
    await assert.rejects(
      new Client({ transport, ambientCredentials: false }).invoices.getPDF(
        "inv_synthetic",
      ),
    );
    process.env.FLINT_ACCESS_TOKEN = "synthetic-access-token";
    await assert.rejects(
      new Client({ transport }).invoices.getPDF("inv_synthetic"),
      (error) => error.code === "ambiguous_credentials",
    );
    assert.deepEqual(seen, [
      "Bearer synthetic-default-api-key",
      "Bearer synthetic-explicit-key",
    ]);
  } finally {
    for (const [name, value] of Object.entries(saved)) {
      if (value === undefined) delete process.env[name];
      else process.env[name] = value;
    }
  }
});

test("published PHP client discovers merchant credentials and exports providers through its root autoloader", () => {
  const source = `require getcwd().'/php/src/autoload.php';
if (\\Flint\\defaultCredentials()->getCredential()->value !== 'synthetic-default-api-key') exit(2);
if (!(\\Flint\\workloadIdentityCredentials(['workloadIdentityId'=>'wid_synthetic']) instanceof \\Flint\\CredentialProvider)) exit(3);
$seen = [];
$transport = function ($request) use (&$seen) {
    $seen[] = $request['headers']['authorization'];
    return ['status'=>200, 'headers'=>['content-type'=>'application/pdf'], 'body'=>'%PDF-1.7 synthetic'];
};
(new \\Flint\\Client(new \\Flint\\ClientOptions(transport: $transport)))->invoices->getPDF('inv_synthetic');
(new \\Flint\\Client(new \\Flint\\ClientOptions(transport: $transport, apiKey: 'synthetic-explicit-key')))->invoices->getPDF('inv_synthetic');
try { (new \\Flint\\Client(new \\Flint\\ClientOptions(transport: $transport, ambientCredentials: false)))->invoices->getPDF('inv_synthetic'); exit(4); } catch (\\Flint\\SdkError $e) {}
putenv('FLINT_ACCESS_TOKEN=synthetic-access-token');
try { (new \\Flint\\Client(new \\Flint\\ClientOptions(transport: $transport)))->invoices->getPDF('inv_synthetic'); exit(5); } catch (\\Flint\\SdkError $e) { if ($e->errorCode !== 'ambiguous_credentials') exit(6); }
if ($seen !== ['Bearer synthetic-default-api-key', 'Bearer synthetic-explicit-key']) exit(7);
echo 'ok';`;
  const result = spawnSync("php", ["-r", source], {
    encoding: "utf8",
    env: {
      ...process.env,
      FLINT_API_KEY: "synthetic-default-api-key",
      FLINT_ACCESS_TOKEN: "",
      FLINT_WORKLOAD_IDENTITY_ID: "",
    },
  });
  assert.equal(result.status, 0, result.stderr);
  assert.equal(result.stdout, "ok");
});
