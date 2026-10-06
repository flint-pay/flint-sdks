import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = (path) => JSON.parse(readFileSync(new URL(path, import.meta.url), 'utf8'));

test('each standalone authentication profile binds only complete alternatives from the pinned API', () => {
  const api = read('../spec/openapi.json');
  const operations = new Map(Object.values(api.paths).flatMap((item) =>
    Object.values(item).flatMap((operation) => operation.operationId ? [[operation.operationId, operation]] : []),
  ));
  for (const path of read('../sdk.json').profiles) {
    const profile = read('../' + path);
    const included = new Set(profile.include);
    for (const [name, mode] of Object.entries(profile.auth.modes)) {
      for (const id of mode.operations) {
        assert.ok(included.has(id), `${path}: ${name} binds an excluded operation ${id}`);
        const operation = operations.get(id);
        assert.ok(operation, `${path}: ${id} is absent from the pinned API`);
        assert.ok(
          (operation.security ?? api.security ?? []).some((alternative) =>
            Object.keys(alternative).sort().join(',') === [...mode.schemes].sort().join(','),
          ),
          `${path}: ${id} does not accept the ${name} credential alternative`,
        );
      }
    }
  }
});
