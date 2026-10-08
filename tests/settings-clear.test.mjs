import test from 'node:test';
import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { Client, makeUpdateSettingsRequest } from '../node/index.js';

const exec = promisify(execFile);
const expected = { customer_account: null, expected_version: '1' };
const response = '{"data":{"settings_id":"set_clear_test","settings_scope":"merchant","version":1}}';

test('Node settings clear factory retains null and sends one request', async (t) => {
  const model = makeUpdateSettingsRequest(expected);
  assert.deepEqual(model.toJSON(), expected);
  const requests = [];
  const client = new Client({
    baseUrl: 'https://api.example.invalid',
    apiKey: 'settings-clear-test',
    transport: async (_input, init) => {
      requests.push(JSON.parse(init.body));
      return new Response(response, { status: 200, headers: { 'content-type': 'application/json' } });
    },
  });
  t.after(() => client.close());
  const settings = await client.settings.update(model.toJSON());
  assert.equal(settings.version, '1');
  assert.equal(Object.hasOwn(settings, 'customer_account'), false);
  assert.deepEqual(requests, [{ customer_account: null, expected_version: 1 }]);
  for (const invalid of [false, 0, 'invalid', []]) {
    assert.throws(() => makeUpdateSettingsRequest({ customer_account: invalid }), error => error.kind === 'validation');
    await assert.rejects(client.settings.update({ customer_account: invalid }), error => error.kind === 'validation');
  }
  assert.equal(requests.length, 1);
});

test('PHP settings clear input retains null and sends one request', async () => {
  const php = String.raw`
require 'php/src/Runtime.php';
require 'php/src/Client.php';
$input = new \Flint\SettingsUpdateInput(['body' => ['customer_account' => null, 'expected_version' => '1']]);
$serialized = json_decode(json_encode($input, JSON_THROW_ON_ERROR), true, 512, JSON_THROW_ON_ERROR);
if ($serialized !== ['body' => ['customer_account' => null, 'expected_version' => '1']]) throw new \RuntimeException('Input lost explicit null');
$requests = [];
$transport = function (array $request) use (&$requests): array {
  $requests[] = json_decode($request['body'], true, 512, JSON_THROW_ON_ERROR);
  return ['status' => 200, 'headers' => ['content-type' => 'application/json'], 'body' => '${response}'];
};
$client = new \Flint\Client(new \Flint\ClientOptions(baseUrl: 'https://api.example.invalid', apiKey: 'settings-clear-test', transport: $transport));
try {
  $settings = $client->settings->update(['customer_account' => null, 'expected_version' => '1']);
  if ($settings->getVersion() !== '1' || $settings->hasCustomerAccount()) throw new \RuntimeException('Clear response was not preserved');
  if ($requests !== [['customer_account' => null, 'expected_version' => 1]]) throw new \RuntimeException('Clear did not reach transport exactly once');
  foreach ([false, 0, 'invalid', []] as $invalid) {
    $rejected = false;
    try { $client->settings->update(['customer_account' => $invalid]); }
    catch (\Flint\SdkError $error) { $rejected = $error->kind === 'validation'; }
    if (!$rejected) throw new \RuntimeException('Invalid account reached transport');
  }
  if (count($requests) !== 1) throw new \RuntimeException('Invalid inputs reached transport');
} finally { $client->close(); }
`;
  await exec('php', ['-r', php], { cwd: new URL('..', import.meta.url), timeout: 30000 });
});
