import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
const root = new URL('..', import.meta.url);
const json = (path) => JSON.parse(readFileSync(new URL(path, root), 'utf8'));
const api = json('spec/openapi.json');
const common = json('spec/profiles/full-common-sdk.json');
const config = json('sdk.json');
const exclusions = json('tests/operation-exclusions.json');
const operations = new Map(Object.values(api.paths).flatMap(item => Object.values(item).flatMap(op => op?.operationId ? [[op.operationId, op]] : [])));

test('every pinned operation is selected or explicitly excluded with a reason', () => {
  const selected = new Set(config.profiles.flatMap(path => json(path).include));
  assert.deepEqual([...operations.keys()].filter(id => !selected.has(id)).sort(), Object.keys(exclusions).sort());
  for (const id of selected) {
    assert.ok(operations.has(id), `Selected operation is absent: ${id}`);
    assert.notEqual(common.operations[id]?.hidden, true, `Selected operation is hidden: ${id}`);
  }
  for (const [id, reason] of Object.entries(exclusions)) {
    assert.ok(operations.has(id), `Stale exclusion: ${id}`);
    assert.ok(reason.length > 20, `Missing exclusion reason: ${id}`);
    assert.equal(common.operations[id]?.hidden, true, `Excluded operation must stay hidden: ${id}`);
    if (id !== 'authorizePartnerInstall')
      assert.ok(operations.get(id).requestBody.content['application/x-www-form-urlencoded'], id);
  }
});

test('all pinned API tags have reference URLs', () => {
  for (const [id, op] of operations)
    for (const tag of op.tags ?? []) assert.ok(common.documentation.tagSlugs[tag], `${id}: unmapped tag ${tag}`);
});

test('generated packages use only current example host configuration', () => {
  const walk = directory => {
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      const path = join(directory, entry.name);
      if (entry.isDirectory()) walk(path);
      else if (entry.isFile()) assert.doesNotMatch(readFileSync(path, 'utf8'), /api\.staging\.withflintpay\.com|API_BASE_URL/, path);
    }
  };
  for (const target of ['node', 'php']) walk(new URL(target, root).pathname);
});
