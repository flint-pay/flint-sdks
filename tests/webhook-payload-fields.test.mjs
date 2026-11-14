import test from "node:test";
import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import {
  mkdirSync,
  mkdtempSync,
  readFileSync,
  writeFileSync,
  rmSync,
} from "node:fs";
import { join, resolve } from "node:path";

const sourceRoot = resolve(import.meta.dirname, "..");
const root = resolve(process.env.FLINT_SDK_TEST_ROOT ?? sourceRoot);
const exec = promisify(execFile);
const api = JSON.parse(
  readFileSync(join(sourceRoot, "spec/openapi.json"), "utf8"),
);
const pascal = (value) =>
  value
    .split(/[._]/)
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join("");
const cases = Object.entries(
  api["x-flint-webhooks"].event_payload_schemas,
).flatMap(([event, payload]) => {
  const object = payload.properties.object;
  const omitted = object["x-flint-webhook-omitted-fields"] ?? [];
  if (!omitted.length) return [];
  const component = object.allOf[0].$ref.split("/").at(-1);
  const resource = component.startsWith("Webhook")
    ? component.slice("Webhook".length)
    : component;
  const getFields = omitted.filter((key) =>
    Object.hasOwn(api.components.schemas[resource].properties, key),
  );
  return [
    {
      event: pascal(event),
      resource,
      omitted,
      getFields,
      previous: Boolean(payload.properties.previous_attributes),
    },
  ];
});
assert.ok(
  cases.length > 0,
  "the pinned contract must include webhook omissions",
);

test("TypeScript webhook snapshots and previous attributes exclude GET-only fields", async () => {
  mkdirSync(join(root, ".context"), { recursive: true });
  const directory = mkdtempSync(join(root, ".context/webhook-fields-"));
  try {
    const fixture = join(directory, "consumer.mts");
    const imports = [
      ...new Set(
        cases.flatMap(({ event, resource }) => [event + "Event", resource]),
      ),
    ];
    const checks = cases.map(
      ({ event, resource, omitted, getFields, previous }, index) => {
        const keys = omitted.map(JSON.stringify).join(" | ");
        const getKeys = getFields.map(JSON.stringify).join(" | ");
        return `type Data${index} = NonNullable<${event}Event["data"]>;
type Object${index} = NonNullable<Data${index}["object"]>;
type Snapshot${index} = Assert<Missing<Object${index}, ${keys}>>;
${getKeys ? `type GET${index} = Assert<${getKeys} extends DeclaredKeys<${resource}> ? true : false>;` : ""}
${previous ? `type Previous${index} = Assert<Missing<NonNullable<Data${index}["previous_attributes"]>, ${keys}>>;` : ""}`;
      },
    );
    writeFileSync(
      fixture,
      `import type { ${imports.join(", ")} } from "../../node/index.js";
type Assert<T extends true> = T;
// Envelopes permit future keys. Inspect the explicitly declared resource fields.
type Declared<T> = { [K in keyof T as string extends K ? never : number extends K ? never : K]: T[K] };
type DeclaredKeys<T> = T extends unknown ? keyof Declared<T> : never;
type Missing<T, K extends PropertyKey> = Extract<K, DeclaredKeys<T>> extends never ? true : false;
${checks.join("\n")}
declare const intent: NonNullable<NonNullable<PaymentIntentCanceledEvent["data"]>["object"]>;
const status: string = intent.status;
`,
    );
    await exec(
      process.execPath,
      [
        join(
          sourceRoot,
          ".tools/sdk-generator/node_modules/typescript/bin/tsc",
        ),
        "--strict",
        "--noEmit",
        "--skipLibCheck",
        "--target",
        "ES2022",
        "--module",
        "NodeNext",
        "--moduleResolution",
        "NodeNext",
        fixture,
      ],
      { cwd: root, timeout: 120000 },
    );
  } finally {
    rmSync(directory, { recursive: true, force: true });
  }
});

test("PHP webhook models exclude GET-only getters while GET models keep them", async () => {
  const script = String.raw`
require 'php/src/autoload.php';
$cases = json_decode($argv[1], true, 512, JSON_THROW_ON_ERROR);
foreach ($cases as $case) {
    $method = new \ReflectionMethod('Flint\\' . $case['event'] . 'MerchantEventData', 'getObject');
    $object = $method->getReturnType()->getName();
    foreach ($case['omitted'] as $field) {
        $getter = 'get' . str_replace('_', '', ucwords($field, '_'));
        if (method_exists($object, $getter)) throw new \RuntimeException($object . ' advertises ' . $getter);
        if (in_array($field, $case['getFields'], true) && !method_exists('Flint\\' . $case['resource'], $getter)) {
            throw new \RuntimeException($case['resource'] . ' lost ' . $getter);
        }
    }
}
echo 'ok';
`;
  const { stdout } = await exec("php", ["-r", script, JSON.stringify(cases)], {
    cwd: root,
    timeout: 30000,
  });
  assert.equal(stdout, "ok");
});
