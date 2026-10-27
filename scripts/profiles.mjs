// Derive the retry and idempotency settings in spec/profiles/full-common-sdk.json from
// the pinned OpenAPI export, following the Idempotency and Errors sections of Flint's
// public API contract (docs/public-api-contract.md in flint-pay/flint):
//
// - Each route has one idempotency class. `required` routes declare a required
//   Idempotency-Key header, `optional` routes an optional one, and `none` routes none.
// - Optional writes get an SDK-minted `flint-sdk-` key before the first attempt, reused
//   on every retry of that call. Required writes never get a minted key: the caller saves
//   one as the command's durable identity. None routes send no key.
// - Only GETs and keyed writes retry, at most 3 attempts. A retry happens when no response
//   arrived, when the error's `remediation.retry` is `same_request`, or when a response
//   without a Flint error envelope has status 429, 500, 502, 503 or 504. Waits honor
//   Retry-After and otherwise back off exponentially with jitter. Writes on `none` routes
//   are sent once.
//
// Run `npm run profiles` after updating spec/openapi.json; `npm run profiles -- --check`
// and the SDK commands fail when the committed profile is stale.
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { formatted } from "./packages.mjs";

export const PROFILE_PATH = "spec/profiles/full-common-sdk.json";
export const AUTO_KEY_PREFIX = "flint-sdk-";
export const IDEMPOTENCY_HEADER = "Idempotency-Key";
export const RETRY_VALUE = "same_request";
// Statuses retried when the response has no Flint error envelope, such as a proxy page.
export const ENVELOPELESS_RETRY_STATUSES = [429, 500, 502, 503, 504];
export const MAX_ATTEMPTS = 3;
export const BASE_DELAY_MS = 500;
export const MAX_DELAY_MS = 5000;
const SAFE_VERBS = ["get", "head", "options"];
const WRITE_VERBS = ["post", "put", "patch", "delete"];
const RETENTION = {
  optional:
    "At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request.",
  required:
    "As long as the command's effects exist. The key is the command's durable identity: save it before the first attempt and reuse it to retry or recover. Never reuse it for a new business intent.",
};
const SCOPE =
  "Authenticated context, environment, HTTP endpoint and caller key; the canonical request fingerprint includes target resource IDs and request parameters.";

const fail = (message) => {
  throw new Error(`Cannot derive SDK retry settings: ${message}`);
};

export function operations(api) {
  const result = [];
  for (const [path, item] of Object.entries(api.paths ?? {}))
    for (const [verb, operation] of Object.entries(item)) {
      if (!operation || typeof operation !== "object" || !operation.operationId)
        continue;
      if (![...SAFE_VERBS, ...WRITE_VERBS].includes(verb))
        fail(`unsupported method ${verb} for ${operation.operationId}`);
      result.push({ path, verb, operation });
    }
  return result;
}

/** The route's idempotency class, read from its Idempotency-Key declaration. */
export function idempotencyClass(verb, operation) {
  // A referenced parameter could hide the header, so the class would read as none.
  if ((operation.parameters ?? []).some((parameter) => parameter.$ref))
    fail(`${operation.operationId} uses a referenced parameter`);
  const headers = (operation.parameters ?? []).filter(
    (parameter) =>
      parameter.in === "header" &&
      parameter.name?.toLowerCase() === IDEMPOTENCY_HEADER.toLowerCase(),
  );
  if (headers.length > 1)
    fail(`${operation.operationId} declares ${IDEMPOTENCY_HEADER} twice`);
  const [header] = headers;
  if (!header) return "none";
  if (header.name !== IDEMPOTENCY_HEADER)
    fail(`${operation.operationId} spells the header ${header.name}`);
  if (SAFE_VERBS.includes(verb))
    fail(`${operation.operationId} is a ${verb} with an idempotency header`);
  const maxLength = header.schema?.maxLength;
  if (
    header.schema?.type !== "string" ||
    (maxLength !== undefined &&
      maxLength <
        AUTO_KEY_PREFIX.length + "00000000-0000-4000-8000-000000000000".length)
  )
    fail(`${operation.operationId} header cannot carry an SDK-minted key`);
  return header.required === true ? "required" : "optional";
}

/** Whether the contract lets an SDK resend this call without risking a second execution. */
export const replaySafe = (verb, cls) =>
  SAFE_VERBS.includes(verb) || cls !== "none";

export function idempotencySetting(cls) {
  if (cls === "none") return false;
  return cls === "optional"
    ? { auto: true, autoKeyPrefix: AUTO_KEY_PREFIX }
    : { auto: false, retention: RETENTION.required };
}

export function retrySetting(verb, cls) {
  return replaySafe(verb, cls)
    ? { maxAttempts: MAX_ATTEMPTS }
    : { maxAttempts: 1, statuses: [], transport: false };
}

function resolveSchema(api, schema) {
  const seen = new Set();
  while (schema?.$ref) {
    if (
      seen.has(schema.$ref) ||
      !schema.$ref.startsWith("#/components/schemas/")
    )
      fail(`cannot resolve ${schema.$ref}`);
    seen.add(schema.$ref);
    schema = api.components?.schemas?.[schema.$ref.slice(21)];
  }
  const variants = (schema?.anyOf ?? schema?.oneOf ?? []).filter(
    (variant) => variant.type !== "null",
  );
  return variants.length === 1 ? resolveSchema(api, variants[0]) : schema;
}

/** The error-body path whose closed retry enum carries `same_request`. */
export function retrySignalPath(api, codePath) {
  const envelope = api.components?.schemas?.ErrorEnvelope;
  if (!envelope) fail("the export has no ErrorEnvelope schema");
  const found = [];
  const walk = (schema, path, depth) => {
    schema = resolveSchema(api, schema);
    if (!schema || depth > 4) return;
    if (
      schema.type === "string" &&
      schema["x-flint-enum-vocabulary"] === "error_retry" &&
      schema.enum?.includes(RETRY_VALUE)
    )
      found.push(path.join("."));
    for (const [name, property] of Object.entries(schema.properties ?? {}))
      walk(property, [...path, name], depth + 1);
  };
  walk(envelope, [], 0);
  if (found.length !== 1)
    fail(
      `expected one error_retry field in ErrorEnvelope, found ${found.length}`,
    );
  const [path] = found;
  if (path.split(".")[0] !== codePath.split(".")[0])
    fail(`retry signal ${path} is outside the error object at ${codePath}`);
  return path;
}

/** Returns the profile with derived retry and idempotency settings. */
export function deriveProfile(api, profile) {
  const {
    idempotency: _i,
    retry: _r,
    ...otherDefaults
  } = profile.defaults ?? {};
  const derived = {
    ...profile,
    errors: {
      ...profile.errors,
      retry: {
        path: retrySignalPath(
          api,
          profile.errors?.codePath ?? fail("errors.codePath is unset"),
        ),
        retryValues: [RETRY_VALUE],
      },
    },
    defaults: {
      idempotency: {
        header: IDEMPOTENCY_HEADER,
        retention: RETENTION.optional,
        scope: SCOPE,
      },
      retry: {
        maxAttempts: MAX_ATTEMPTS,
        statuses: ENVELOPELESS_RETRY_STATUSES,
        transport: true,
        baseDelayMs: BASE_DELAY_MS,
        maxDelayMs: MAX_DELAY_MS,
      },
      ...otherDefaults,
    },
    operations: { ...profile.operations },
  };
  const seen = new Set();
  for (const { verb, operation } of operations(api)) {
    const id = operation.operationId;
    seen.add(id);
    const cls = idempotencyClass(verb, operation);
    // Assigning existing keys keeps their position, so regeneration diffs stay small.
    derived.operations[id] = Object.assign(
      { ...derived.operations[id] },
      {
        idempotency: idempotencySetting(cls),
        retry: retrySetting(verb, cls),
      },
    );
  }
  for (const id of Object.keys(derived.operations))
    if (!seen.has(id)) fail(`profile operation ${id} is not in the export`);
  return derived;
}

if (
  process.argv[1] &&
  resolve(process.argv[1]) === fileURLToPath(import.meta.url)
) {
  process.chdir(resolve(dirname(fileURLToPath(import.meta.url)), ".."));
  const check = process.argv.includes("--check");
  try {
    const current = readFileSync(PROFILE_PATH, "utf8");
    const next = formatted(
      deriveProfile(
        JSON.parse(readFileSync("spec/openapi.json", "utf8")),
        JSON.parse(current),
      ),
    );
    if (next === current) console.log(`${PROFILE_PATH} is current.`);
    else if (check)
      throw new Error(
        `${PROFILE_PATH} is stale. Run npm run profiles and commit.`,
      );
    else {
      writeFileSync(PROFILE_PATH, next);
      console.log(`Updated ${PROFILE_PATH}.`);
    }
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
