import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { Client } from '../node/index.js';
const read = path => JSON.parse(readFileSync(new URL(path, import.meta.url), 'utf8'));
const approved = read('./release-names.json');
const exclusions = read('./operation-exclusions.json');
const common = read('../spec/profiles/full-common-sdk.json');
const api = read('../spec/openapi.json');
const selected = Object.values(api.paths).flatMap(item => Object.values(item).flatMap(op => op?.operationId && !exclusions[op.operationId] ? [op.operationId] : []));

test('Node and PHP expose the approved path-derived release names without compatibility aliases', t => {
  const client = new Client({ ambientCredentials: false });
  t.after(() => client.close());
  const php = new Map();
  const directory = new URL('../php/src/descriptors/resources/', import.meta.url);
  for (const name of readdirSync(directory).filter(name => name.endsWith('.json')))
    for (const op of JSON.parse(readFileSync(new URL(name, directory), 'utf8')).operations)
      php.set(op.id, `${op.resource}.${op.method}`);
  for (const id of selected) {
    assert.ok(approved[id], `Add an independently reviewed name for ${id}`);
    const [resource, method] = approved[id].split('.');
    assert.equal(typeof client[resource]?.[method], 'function', `${id}: ${approved[id]}`);
    assert.equal(php.get(id), approved[id], id);
    assert.equal(common.operations[id]?.aliases, undefined, id);
    assert.equal(client[resource]?.[method + 'WithResponse'], undefined, id);
  }
  execFileSync('php', ['-r', String.raw`
require 'php/src/autoload.php';
$client = new \Flint\Client(new \Flint\ClientOptions(ambientCredentials: false));
foreach (json_decode($argv[1], true, 512, JSON_THROW_ON_ERROR) as $name) {
    [$resource, $method] = explode('.', $name);
    if (!method_exists($client->$resource, $method)) throw new \RuntimeException($name);
    if (method_exists($client->$resource, $method . 'WithResponse')) throw new \RuntimeException('Removed companion: '.$name);
}
$client->close();
`, JSON.stringify(selected.map(id => approved[id]))], { cwd: new URL('..', import.meta.url) });
});
