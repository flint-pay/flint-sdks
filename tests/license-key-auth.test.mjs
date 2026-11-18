import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import test from 'node:test';
import { Client } from '../node/index.js';

const productId = 'prod_01KEZF7C00BVSHCNWVH528HB66';
const licenseId = 'lk_01KEZF7C000QD7VJ83G43V0NSN';
const activationId = 'lka_01KEZF7C00NZEZVCZW3SRDMHTZ';
const input = { key: 'EXAMPLE-LICENSE-KEY-DO-NOT-USE', product_ids: [productId] };
const activation = {
  created_at: '2026-08-02T16:00:00Z',
  fingerprint: null,
  last_validated_at: null,
  license_key_activation_id: activationId,
  license_key_id: licenseId,
  name: 'Example desktop',
  product_id: productId,
  released_at: null,
  status: 'active',
  supported_actions: ['release'],
  variant_id: 'var_01KEZF7C004GSH2KT8CNYVMHGX',
};
const calls = [
  { resource: 'licenseKeys', method: 'validate', path: '/v1/license-keys/validate',
    args: [input], data: { is_valid: true }, status: 200 },
  { resource: 'licenseKeyActivations', method: 'create', path: '/v1/license-key-activations',
    args: [{ ...input, name: activation.name }], data: activation, status: 201 },
  { resource: 'licenseKeyActivations', method: 'release', path: `/v1/license-key-activations/${activationId}/release`,
    args: [activationId, input],
    data: { ...activation, status: 'released', released_at: activation.created_at, supported_actions: [] }, status: 200 },
].map(call => ({
  ...call,
  body: JSON.stringify({ data: call.data, request_id: 'req_01KWM6WAHG3N9Q8T2V5XRZ7C4D' }),
}));
const apiKey = 'synthetic-merchant-key';

for (const credential of [undefined, apiKey]) {
  test(`Node license key app operations with ${credential ? 'a merchant API key' : 'no credential'}`, async () => {
    for (const { resource, method, path, args, body, status } of calls) {
      let requests = 0;
      const client = new Client({
        ambientCredentials: false,
        ...(credential ? { apiKey: credential } : {}),
        transport: async (url, init) => {
          requests++;
          assert.equal(url.pathname, path);
          assert.equal(init.method, 'POST');
          assert.equal(init.headers.authorization, credential ? 'Bearer ' + credential : undefined);
          assert.deepEqual(JSON.parse(init.body), args.at(-1));
          return new Response(body, { status, headers: { 'content-type': 'application/json' } });
        },
      });
      try {
        const result = await client[resource][method](...args);
        assert.equal(result.lastResponse.status, status);
        assert.equal(requests, 1);
      } finally {
        await client.close();
      }
    }
  });
}

test('PHP license key app operations with and without a merchant API key', () => {
  execFileSync('php', ['-r', String.raw`
require 'php/src/autoload.php';
foreach ([null, $argv[2]] as $credential) {
    foreach (json_decode($argv[1], true, 512, JSON_THROW_ON_ERROR) as $call) {
        $requests = 0;
        $transport = function (array $request) use ($call, $credential, &$requests): array {
            $requests++;
            $headers = array_change_key_case($request['headers']);
            $expectedAuth = $credential === null ? null : 'Bearer ' . $credential;
            if (($headers['authorization'] ?? null) !== $expectedAuth) {
                throw new \RuntimeException('Unexpected authorization for ' . $call['method']);
            }
            $body = json_decode($request['body'], true, 512, JSON_THROW_ON_ERROR);
            if ($request['method'] !== 'POST' || parse_url($request['url'], PHP_URL_PATH) !== $call['path']
                || $body != $call['args'][count($call['args']) - 1]) {
                throw new \RuntimeException('Unexpected request for ' . $call['method']);
            }
            return ['status' => $call['status'], 'body' => $call['body'],
                'headers' => ['content-type' => 'application/json']];
        };
        $options = ['ambientCredentials' => false, 'transport' => $transport];
        if ($credential !== null) $options['apiKey'] = $credential;
        $client = new \Flint\Client(new \Flint\ClientOptions(...$options));
        try {
            $resource = $call['resource'];
            $method = $call['method'];
            $client->$resource->$method(...$call['args']);
            if ($requests !== 1) throw new \RuntimeException('Expected one request');
        } finally {
            $client->close();
        }
    }
}
`, JSON.stringify(calls), apiKey], { cwd: new URL('..', import.meta.url), timeout: 30000 });
});
