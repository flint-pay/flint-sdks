# Flint Public API runtime guide (node)

Package 3.0.0-beta.20261006020957; API 2026-09-07.

[Back to the quickstart](README.md) · [API reference](REFERENCE.md)

## Client and request options

The default baseUrl is `https://api.withflintpay.com`; pass baseUrl to select another environment. Legacy authenticated clients accept token. Composed clients accept configured shortcuts or authMode and credentials keyed by mode and scheme; requests can select a mode with request-local credentials. A combined scheme set must be complete. The SDK does not discover credentials or read environment variables; the operation example scripts read API_BASE_URL and their named credential variables explicitly. Pass per-request options as the last method argument: a plain object in Node, or RequestOptions in PHP. Defaults are timeoutMs: 10000 per attempt and deadlineMs: 30000 for the overall duration (not an absolute timestamp). Request values override client defaults. maxAttempts is a positive safe integer budget, capped at the operation limit. Request budgets override client budgets. Without an explicit policy, GET/HEAD/OPTIONS allow three total attempts; other methods allow one. Mutations without an optional key send once. Set maxAttempts: 1 to opt out of retries. Request headers carry tenant context without shared mutable state.

## Authentication

Authentication shortcuts are accepted on both client and request options:

- `apiKey` selects `merchant` and supplies `BearerAuth`.
- `customerToken` selects `customer` and supplies `CustomerSessionBearer`.
- `invoiceToken` selects `invoice` and supplies `InvoiceAccessTokenBearer`.
- `onboardingToken` selects `onboarding` and supplies `OnboardingSessionBearer`.
- `token` selects `merchant` and supplies `BearerAuth`.

Request shortcuts override client authentication for that call. Explicit request modes still work. Use only one shortcut, and do not combine it with authMode or credentials in the same options object.

Set `authMode` to one of the modes below and put its credentials under `credentials[mode]`. Request overrides use the mode’s credential map directly, without the outer mode key. A request credential map replaces the selected mode’s client map; supply every required key.

| Mode | Required credential keys |
| --- | --- |
| `checkout` | `CheckoutSessionIDHeader`, `CheckoutSessionSecretHeader` |
| `customer` | `CustomerSessionBearer` |
| `invoice` | `InvoiceAccessTokenBearer` |
| `merchant` | `BearerAuth` |
| `merchantKey` | `ApiKeyHeader` |
| `onboarding` | `OnboardingSessionBearer` |

TypeScript checks mode names, credential keys, and the modes permitted by each operation. Credentials themselves are never shown in SDK diagnostics.

## Responses and errors

Methods return the decoded body directly by default. A configured payloadPath explicitly selects a nested payload. WithResponse companions expose the full body, meta and raw response. Operations configured with return: result instead return Result, whose data is the complete decoded HTTP response body and meta is HTTP metadata. A provider may also wrap its payload in a data field, making result.data.data the provider payload. For example, create may wrap a payment_intent while get returns that entity directly. The operation examples show the exact access path. The SDK preserves these shapes; do not assume all operations share an envelope.

Results expose data, meta and explicit raw response access. JSON raw values are text; PDF data/raw are Uint8Array in Node and binary-safe strings in PHP. SSE data is a closeable iterable carrying event names, IDs, decoded data and rawData. Node metadata uses properties; PHP metadata uses array keys. SdkError exposes the server message (message in Node, getMessage() in PHP), status, kind, outcome, retryAllowed and optional metadata; provider codes use code in Node and errorCode in PHP. The configured errors.messagePath selects the message (default message); missing, blank or non-string values fall back to API returned HTTP followed by the status code. Error paths traverse JSON objects and array indices; scalar values have no child fields. Server messages and provider codes require original JSON strings; JSON numeric tokens never match string retry codes. Parsed details retain their usual exact numeric representation. HTTP 404 uses kind not_found; HTTP 500–599 uses server. Status is undefined in Node or null in PHP when no response is available. Provider-specific details remain unknown in TypeScript. outcome is not_sent, response or unknown. Reconcile an unknown mutation outcome with the provider and the original persisted idempotency key before resubmitting.

Exact HTTP status declarations take precedence, followed by a declared `default`. If neither exists for an actual 2xx response, the SDK reuses the sole declared JSON 2xx response, including its codec and PHP model class. Metadata retains the actual status. Multiple JSON success declarations remain ambiguous, even when their schemas match; binary, streaming, empty and redirect responses are never inferred.

Required fields and value types remain enforced. Schema failures are non-retryable `protocol` errors with `outcome: response`; the top-level message includes codec diagnostics such as `response.payment.id: required field is missing`, and the original cause remains available. The server may already have created the payment. Buffered JSON response failures and payload-extraction errors retain `raw` for explicit recovery; raw bodies are omitted from ordinary error inspection and diagnostics.

Inside a catch block, a synthetic create response with a top-level string `id` can be recovered as below. Use the actual endpoint's ID path and reconcile its state before continuing. This parses an unvalidated body only to recover the ID; it does not restore the SDK's typed guarantees or justify resubmitting the mutation.

```js
if (error instanceof SdkError && error.kind === 'protocol' &&
    error.status >= 200 && error.status < 300 && error.raw) {
  let body;
  try { body = JSON.parse(error.raw); } catch { throw error; }
  const paymentId = typeof body?.id === 'string' ? body.id : undefined;
  if (!paymentId) throw error;
  // Reconcile this payment ID with the provider; do not submit another create.
} else {
  throw error;
}
```

## PDF downloads and declared redirects

PDF results are buffered bytes. Set API_DOWNLOAD_PATH to choose the file written by the PDF example. Redirect results expose HTTP metadata and the optional Location without following it. Each recipe makes one SDK call.

### creditNotes.getPDF

```typescript
import { Client } from '@flintpay/node';
const clientBaseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const client = new Client({
  baseUrl: clientBaseUrl,
  token: process.env.API_TOKEN ?? '',
});
const result = await client.creditNotes.getPDF(
  "example"
);
// Choose a destination path; PDF bytes must not be decoded as text.
const resultPath = process.env.API_DOWNLOAD_PATH ?? 'download.pdf';
await (await import('node:fs/promises')).writeFile(resultPath, result.data);
console.log('Saved', result.data.byteLength, 'bytes to', resultPath);
console.log(result.meta.requestId);
```

### oauth.authorizePartnerInstall

```typescript
import { Client } from '@flintpay/node';
const clientBaseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const client = new Client({
  baseUrl: clientBaseUrl,
  token: process.env.API_TOKEN ?? '',
});
const result = await client.oauth.authorizePartnerInstall(
  {
    response_type: "code",
    client_id: "example",
    redirect_uri: "example",
    mode: "test",
    state: "example",
  }
);
// Location may be relative or use another origin. The SDK does not follow it.
// Validate the destination before a separate download; do not forward API credentials.
console.log(result.meta.status, result.data.location ?? 'No Location header');
console.log(result.meta.requestId);
```

## Input and response values

Plain number, float and double fields use finite native numbers (PHP int/float inputs and float outputs), with ordinary floating-point precision. Exact decimal fields require format: decimal; int64/uint64 also retain exact strings. Date-time inputs accept strings or Date in Node and DateTimeInterface in PHP. Native dates serialize to UTC ISO 8601 with milliseconds without mutation; responses remain strings. Invalid Node dates are rejected.

Shaped TypeScript objects have no implicit index signature: misspelled input literals and response fields are errors. Explicitly open objects and dictionaries remain open; variables can still carry extra keys under structural typing. Runtime request rules are unchanged and unknown response fields are preserved, requiring explicit narrowing or a dictionary assertion to inspect them. Unknown object variants require a known-variant guard. Simple nullable wrappers preserve the known branch or null: TypeScript permits optional field access and PHP getters hydrate the existing named entity. Unknown fields and enum members are retained; malformed known values fail response decoding.

Optional properties distinguish omission from null. PHP methods accept associative arrays or presence-aware typed input objects constructed from arrays: omit a key to omit it; include a key with null to clear only where permitted. PHP models expose presence through has()/get() and generated hasField() methods. Use valueOrDefault("field", fallback) for optional values; explicit null stays null. Response getters return generated entities for declared nested objects, lists of entities, and typed PHP arrays for dictionaries. Generated getters, get(), and property access return the same public values. Getters throw with the field name when a field is omitted. toArray() and jsonSerialize() retain raw normalized objects and lists, including empty JSON objects. In object/array alternatives, PHP lists (including []) represent JSON arrays; use (object) [] for an empty JSON object.

Exact numeric enum inputs use strings for decimal/int64/uint64 schemas; membership compares exact values, so equivalent decimal/exponent spellings are accepted. Numeric anyOf branches merge equivalent values exactly and preserve the request token; oneOf still requires exactly one matching branch. Numeric conversions supported only by branches that stop matching fail validation before dispatch. Mutually dependent numeric alternatives use joint matching, limited to 256 combinations per value path; exceeding this limit fails validation.

Large integers (int64) and decimals use exact strings, including numeric JSON wire values. Ambiguous numeric inputs automatically use new ExactNumber("1.2500") and plain strings retain their JSON string meaning. Integer responses accept integral decimal/exponent notation without rounding. Sparse Node input arrays fail before dispatch. Timestamp responses remain strings. Unknown response fields, enum members, and tagged variants are retained.

PHP response wrapper class names include status codes and, for tagged alternatives, branch positions. Nested entities reuse configured component names; inline entities use their owning model and property path. Getters normalize wire names: request_id becomes getRequestId() and hasRequestId(). Webhook class names use event names, for example WebhookEventPaymentIntentSucceeded. This replaces underscore getters and numbered webhook classes without aliases; update class checks and dictionary access when upgrading. Adding a status can introduce a new return class even with an identical JSON shape; consult migration notes before upgrading class-based dispatch.

Portable digit/word pattern escapes retain their ASCII ECMAScript meaning in both targets, including inside character classes. Full request encoding checks run locally; server business effects require provider tests.

## Retries and idempotency

Retries count total attempts, include jitter and Retry-After, and never exceed the effective policy. Without a declared retry policy, GET/HEAD/OPTIONS retry transport failures and HTTP 408, 429, 500, 502, 503 and 504, with three total attempts and a 100 ms exponential jitter base. Explicit policies replace these defaults. Mutation retries require both declared retry and idempotency support plus a valid key; without an optional key the call sends once. Required keys remain required. idempotencyKey is supported only on operations declaring that capability; TypeScript method options enforce this, and PHP validates it at runtime. Persist an idempotency key across process restarts and submissions within the server's documented retention/scope. Automatic keys cover one SDK call only and can satisfy required idempotency headers; generated keys must pass the declared header validation. Explicit keys from operation inputs, request headers or idempotencyKey are preserved; conflicting values fail before dispatch. A timeout after dispatch can leave the remote outcome unknown; inspect SdkError.outcome. Disable nested transport/application retries to avoid multiplied attempts. 409/412 are distinct conflicts and never automatically overwritten.

## Timeouts, streaming and cancellation

Timeout is per attempt, including buffered body consumption. For SSE, timeout/deadline bound connection setup; streamIdleTimeoutMs controls idle reads and streamLifetimeMs optionally bounds stream lifetime. Close the returned stream (Result.data in result mode) or the client to release a stream; breaking iteration also closes it. Unknown event names retain raw strings. Reconnect and persist resume cursors explicitly; no yielded event is retried automatically.

Deadline covers attempts and retry waits for each request. Each pagination page gets a fresh deadline, including decoding; time spent processing yielded values does not consume it. Pagination has no overall iterator deadline; use cancellation or maxPages/maxItems to bound iteration. Polling shares an overall deadline. Cancellation stops local work, not the remote operation. Node uses AbortSignal. PHP uses a Cancellation token checked during cURL progress and between waits; synchronous calls need an external signal handler to cancel while blocked.

### Pagination and polling

Pagination is lazy, supports maxPages/maxItems, and does not guarantee a stable snapshot or durable continuation. Generation rejects incompatible continuation/query representations, including an int64/uint64 continuation with an ordinary integer query parameter. Configured money helpers reject whitespace, including trailing newlines, and excess precision when converting exact major-unit strings to minor units.

## Destinations and API versions

Explicit allowedOrigins govern all destinations, including pagination. HTTP/HTTPS scheme and host capitalization are ignored, and default ports are normalized; other ports remain distinct origins. Supply explicit allowedOrigins as canonical origin strings with default ports omitted. HTTPS is required, including on anonymous APIs, unless allowInsecureHttp is set for deliberate local tests. HTTP rejection names that option; a rejected origin names allowedOrigins. Declared 302/307 responses return Location metadata without following redirects; undeclared redirects are rejected. Authentication is attached only after destination validation. API version headers are pinned when configured; changing them does not update generated types. Required version headers are supplied by the pin. Required conditional headers may be supplied through ifMatch or request headers without duplicating them in the input. Effective managed header values are validated before dispatch.

## Client lifecycle and transports

Clients perform no network I/O at import/construction. Node clients reuse the runtime's fetch connection pool; injected transports remain caller-owned and must honor AbortSignal and disable redirects/retries. PHP owns a reusable cURL handle, released by close()/destruction; a client supports sequential calls within one PHP execution context. Do not concurrently share a PHP client across threads/fibers. Node requests keep headers/context local and support concurrent calls. No SDK telemetry is sent. Requests use the media type selected by the provider profile. Schema validation counts encoded object properties, including explicit nulls, after optional-field omission. Requests identify the selected package name/version and runtime through an overridable User-Agent header.

## Diagnostics and sensitive data

Diagnostics run once per attempted HTTP request, including transport failures, with operation, request ID, status, timing, attempt count and error kind only; hook failures are ignored. Bodies and credentials are excluded. Error inspection includes the message, status, provider code, redacted details and stack frames; PHP debug traces omit arguments. Message extraction, provider codes and details honor schema and redactFields redaction. Raw response text and headers require explicit access. Binary/stream result inspection omits raw headers and URLs; event inspection omits payloads.

Node Model.toJSON() returns a defensive copy of the public JSON representation, with exact numbers represented as strings. Rebuilding from that copy treats these as JSON strings in number/string alternatives. To edit a Node input, retain the original input values, including ExactNumber instances, and construct a new model from the updated input. If editing a toJSON() copy, explicitly restore ExactNumber at fields intended to be JSON numbers in ambiguous alternatives. PHP model accessors also return defensive copies; use toInputArray()/toInputValue() to edit and rebuild inputs while preserving exact numeric kinds. Model debug printing redacts declared sensitive fields and additional field names supplied in ClientOptions.redactFields; printing arbitrary raw values is application responsibility. Injected transports are privileged and see credentials/bodies.

## Schema helpers

The package exports serialize(value, schema), new Model(value, schema), and redact(value, schema) for application-supplied schemas. These helpers use the package's local value execution rules and require no generator installation or schema registry service. Generated clients defer descriptor loading until first use and reuse validated descriptors across clients. Node resource subpaths (resources/RESOURCE) export scoped clients with the same resource methods. PHP uses class-based Composer autoloading and individual class files; including vendor/autoload.php does not eagerly include SDK implementation files. Generated methods and factories use the codecs included in the package. For a null-only schema, use {"type":"null"}. The legacy form {"type":["null"]} also permits non-null values in Node; PHP rejects them.

## Package upgrades

Review provider release notes before upgrading. Compatibility checks account for public declarations, required response values and PHP class identities. Complex schema changes can still require manual review.

## Webhooks and recovery

Call verifyWebhook(rawBody, headers, secrets, nowSeconds?) with original request bytes and `webhook-signature`, `webhook-timestamp`, `webhook-id`. This package uses standard-webhooks HMAC-SHA256 signing and a 300-second timestamp tolerance. Secrets must use the whsec_ prefix and canonical base64 encoding of exactly 32 key bytes. Pass one secret string or an array of active secrets during rotation. nowSeconds is an optional Unix time override for deterministic tests; normally omit it.

### Fetch

The request body must not have been consumed. Pass the SDK client and your configured signing secret to this helper:

```js
export async function verifyWebhookRequest(client, request, secrets) {
  const rawBody = new Uint8Array(await request.arrayBuffer());
  return client.verifyWebhook(rawBody, request.headers, secrets);
}
```

### Express

Register this route before app.use(express.json()). req.headers is accepted directly. Supply client and webhookSecret from your application configuration:

```js
app.post('/webhooks', express.raw({ type: 'application/json' }), (req, res, next) => {
  try {
    const verified = client.verifyWebhook(req.body, req.headers, webhookSecret);
    // Persist verified.event and verified.known in your durable inbox before acknowledging.
    // Leave unknown events pending for review.
    receiveVerified(verified, req, res, next);
  } catch (error) {
    next(error);
  }
});
app.use(express.json());
```

### Rotation and narrowing

```ts
const verified = client.verifyWebhook(rawBody, headers, [currentSecret, previousSecret]);
if (verified.known) {
  const event = verified.event; // Declared event union; narrow by the configured event-type field.
} else {
  const event = verified.event; // unknown: validate before accessing fields.
}
```

### Failures and recovery

Import SdkError from this package. SdkError uses code for these stable reasons:

| Kind | Code | Action |
| --- | --- | --- |
| validation | webhook_invalid_input | Supply original bytes and supported header/time values. |
| validation | webhook_invalid_secret | Supply at least one correctly formatted nonempty secret. |
| authentication | webhook_missing_header | Forward all configured signing headers. |
| authentication | webhook_invalid_timestamp | Supply one integer timestamp in seconds. |
| authentication | webhook_timestamp_out_of_tolerance | Check the clock and delivery age. |
| authentication | webhook_invalid_signature | Check the secret and original bytes. |
| protocol | webhook_invalid_json | The authenticated body is not valid UTF-8 JSON. |

```js
try {
  const verified = client.verifyWebhook(rawBody, headers, webhookSecret);
} catch (error) {
  if (!(error instanceof SdkError)) throw error;
  // Record only error.kind and error.code; avoid logging request bodies or secrets.
  // webhook_timestamp_out_of_tolerance: check the clock and delivery age.
  // webhook_invalid_signature: check the secret and original request bytes.
  throw error; // Let your HTTP adapter choose the failure response.
}
```

Never verify JSON.stringify(parsedBody) or json_encode(parsedBody): verification authenticates the original bytes, including whitespace and numeric spelling. A mismatch cannot distinguish a wrong secret from altered bytes. Repeated signature values are supported; timestamp and ID headers must each contain a single value.

known is true only for a registered event name whose payload matches a declared envelope. Authenticated unknown names and unmatched variants return known: false; nested response types retain their documented uncertainty. Malformed declared payloads produce a protocol error.

Verification does not deduplicate deliveries. The optional examples/webhook-inbox files demonstrate durable inbox/outbox processing: commit the event ID and work record before acknowledging, reconcile out-of-order deliveries, and apply side effects idempotently. Unknown names and unmatched envelopes remain pending for review.

## Custom helpers

Custom helpers belong in custom/; they survive regeneration. Multi-call helpers are not atomic and must expose partial completion. See [reference](REFERENCE.md).

## Resume an action with its saved key

Use this only after reconciling the previous outcome and confirming the provider permits resubmission. Read the key and the original input from your saved action; keep both unchanged. The environment variable below stands in for your application's durable action record. Do not generate a new key when retrying that action. This example makes one request attempt.

```typescript
import { Client } from '@flintpay/node';
const clientBaseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const client = new Client({
  baseUrl: clientBaseUrl,
  token: process.env.API_TOKEN ?? '',
});
const idempotencyKey = process.env.API_IDEMPOTENCY_KEY;
if (!idempotencyKey) throw new Error('Set API_IDEMPOTENCY_KEY to the key saved with this action');
const result = await client.orders.addCharge(
  "example",
  {
    charge: {
      name: "example",
      type: "service_fee",
      amount_money: {
        amount: "0",
        currency: "USD",
      },
    },
  },
  { idempotencyKey: idempotencyKey, maxAttempts: 1 },
);
console.log(result.order_id);
console.log(result.status);
```

## Response return modes

Payload-mode methods return the decoded body, or their explicitly configured payload path, directly. Their WithResponse companions return SdkResponse with body, meta and raw, without unwrapping. Each invocation makes its own request; choose one form per action. Result-mode operations keep their existing data/meta/raw envelope. Pages and Wait follow the base method return mode: payload values in payload mode, full Results in result mode. Payload-mode PagesWithResponse and WaitWithResponse expose complete bodies, metadata and raw access. Items helpers yield individual items; pagination and polling paths still address the original body.

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const response = await client.orders.addChargeWithResponse("example", {charge: {name: "example", type: "service_fee", amount_money: {amount: "0", currency: "USD"}}}, { idempotencyKey: idempotencyKey });
console.log(response.body, response.meta.requestId);
```

