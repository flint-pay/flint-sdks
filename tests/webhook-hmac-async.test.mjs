import test from "node:test";
import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { createHmac, randomBytes } from "node:crypto";
import { resolve } from "node:path";
import { promisify } from "node:util";
import { Client, verifyWebhookAsync } from "../node/index.js";
import { verifyWebhookAsync as verifyFromSubpath } from "../node/webhooks.js";

// Flint sends standard-webhooks HMAC deliveries without an Authorization
// header until JWT signing is enabled (FLI-521). The async verifiers must keep
// accepting those deliveries when callers pass their HMAC secrets, including
// alongside endpoint IDs for the JWT migration.

const exec = promisify(execFile);
const root = resolve(import.meta.dirname, "..");
const key = randomBytes(32);
const secret = "whsec_" + key.toString("base64");
const now = 1_700_000_000;
const id = "msg_hmac_async";
const body = Buffer.from(
  JSON.stringify({ id: "evt_hmac_async", event_type: "synthetic.unknown", data: {} }),
);
const signature = createHmac("sha256", key)
  .update(`${id}.${now}.`)
  .update(body)
  .digest("base64");
const headers = {
  "webhook-id": id,
  "webhook-timestamp": String(now),
  "webhook-signature": `v1,${signature}`,
};
const tampered = { ...headers, "webhook-signature": `v1,${Buffer.alloc(32).toString("base64")}` };

test("verifyWebhookAsync accepts HMAC-only deliveries with secrets in Node", async () => {
  const client = new Client({ baseUrl: "https://api.example.invalid" });
  const verifiers = [
    (h, o) => verifyWebhookAsync(body, h, { baseUrl: "https://api.example.invalid", ...o }),
    (h, o) => verifyFromSubpath(body, h, { baseUrl: "https://api.example.invalid", ...o }),
    (h, o) => client.verifyWebhookAsync(body, h, o),
  ];
  for (const verify of verifiers) {
    for (const options of [
      { secrets: secret, nowSeconds: now },
      { secrets: [secret], endpointIds: ["whep_example"], nowSeconds: now },
    ]) {
      const verified = await verify(headers, options);
      assert.equal(verified.signingMethod, "hmac");
      assert.equal(verified.event.id, "evt_hmac_async");
      await assert.rejects(verify(tampered, options), { code: "webhook_invalid_signature" });
    }
    await assert.rejects(verify(headers, { endpointIds: ["whep_example"], nowSeconds: now }), {
      code: "webhook_missing_header",
    });
  }
});

test("Webhooks::verifyDelivery accepts HMAC-only deliveries with secrets in PHP", async () => {
  const php = String.raw`
require 'php/src/autoload.php';
$input = json_decode($argv[1], true);
$rows = [];
foreach ([['secrets' => $input['secret']], ['secrets' => [$input['secret']], 'endpoint_ids' => ['whep_example']]] as $options) {
    $options['now_seconds'] = $input['now'];
    $options['base_url'] = 'https://api.example.invalid';
    foreach ([$input['headers'], $input['tampered']] as $headers) {
        try {
            $verified = \Flint\Webhooks::verifyDelivery($input['body'], $headers, $options);
            $rows[] = $verified['signing_method'];
        } catch (\Flint\SdkError $error) {
            $rows[] = $error->code;
        }
    }
}
echo json_encode($rows);
`;
  const { stdout } = await exec(
    "php",
    [
      "-r",
      php,
      JSON.stringify({ secret, now, headers, tampered, body: body.toString() }),
    ],
    { cwd: root },
  );
  assert.deepEqual(JSON.parse(stdout), [
    "hmac",
    "webhook_invalid_signature",
    "hmac",
    "webhook_invalid_signature",
  ]);
});
