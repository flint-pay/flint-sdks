# Flint Public API runtime guide (node)

Package 0.3.0-beta.1; API 2026-09-07.

[Back to the quickstart](README.md) · [API reference](REFERENCE.md)

## Client and request options

Construct a client with baseUrl and, for legacy authenticated operations, token. Composed clients accept authMode and credentials keyed by mode and scheme; requests can select a mode with request-local credentials. A combined scheme set must be complete. The SDK does not discover credentials or read environment variables; the operation example scripts read API_BASE_URL and their named credential variables explicitly. Pass per-request options as the last method argument: a plain object in Node, or RequestOptions in PHP. Defaults are timeoutMs: 10000 per attempt and deadlineMs: 30000 for the overall duration (not an absolute timestamp). Request values override client defaults. maxAttempts defaults to the operation's declared limit, or one when no retries are declared; overrides cannot exceed that limit. Request headers carry tenant context without shared mutable state.

## Authentication

Authentication shortcuts are accepted on both client and request options:

- `apiKey` selects `merchant` and supplies `BearerAuth`.

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

Results expose data, meta and explicit raw response access. JSON raw values are text; PDF data/raw are Uint8Array in Node and binary-safe strings in PHP. SSE data is a closeable iterable carrying event names, IDs, decoded data and rawData. Node metadata uses properties; PHP metadata uses array keys. SdkError exposes kind, outcome, retryAllowed and optional metadata; provider codes use code in Node and errorCode in PHP. outcome is not_sent, response or unknown. Reconcile an unknown mutation outcome with the provider and the original persisted idempotency key before resubmitting.

## Input and response values

Optional properties distinguish omission from null. PHP methods accept associative arrays or presence-aware typed input objects constructed from arrays: omit a key to omit it; include a key with null to clear only where permitted. PHP models expose presence through has()/get() and generated hasField() methods. Use valueOrDefault("field", fallback) for optional values; explicit null stays null. Typed getters unwrap nested values and throw with the field name when a field is omitted. In object/array alternatives, PHP lists (including []) represent JSON arrays; use (object) [] for an empty JSON object.

Numeric enum inputs use exact strings for number/int64/uint64 schemas; membership compares exact values, so equivalent decimal/exponent spellings are accepted. Numeric anyOf branches merge equivalent values exactly and preserve the request token; oneOf still requires exactly one matching branch. Numeric conversions supported only by branches that stop matching fail validation before dispatch. Mutually dependent numeric alternatives use joint matching, limited to 256 combinations per value path; exceeding this limit fails validation.

Large integers (int64) and decimals use exact strings, including numeric JSON wire values. Ambiguous numeric inputs automatically use new ExactNumber("1.2500") and plain strings retain their JSON string meaning. Integer responses accept integral decimal/exponent notation without rounding. Sparse Node input arrays fail before dispatch. Timestamps remain strings. Unknown response fields, enum members, and tagged variants are retained.

PHP response class names include status codes and, for tagged alternatives, branch positions. Adding a status can introduce a new return class even with an identical JSON shape; consult migration notes before upgrading class-based dispatch.

Portable digit/word pattern escapes retain their ASCII ECMAScript meaning in both targets, including inside character classes. Full request encoding checks run locally; server business effects require provider tests.

## Retries and idempotency

Retries count total attempts, include jitter and Retry-After, and never exceed the declared policy. Persist an idempotency key across process restarts and submissions within the server's documented retention/scope. Automatic keys cover one SDK call only. Explicit keys from operation inputs, request headers or idempotencyKey are preserved; conflicting values fail before dispatch. A timeout after dispatch can leave the remote outcome unknown; inspect SdkError.outcome. Disable nested transport/application retries to avoid multiplied attempts. 409/412 are distinct conflicts and never automatically overwritten.

## Timeouts, streaming and cancellation

Timeout is per attempt, including buffered body consumption. For SSE, timeout/deadline bound connection setup; streamIdleTimeoutMs controls idle reads and streamLifetimeMs optionally bounds stream lifetime. Close the returned stream (Result.data in result mode) or the client to release a stream; breaking iteration also closes it. Unknown event names retain raw strings. Reconnect and persist resume cursors explicitly; no yielded event is retried automatically.

Deadline covers attempts and waits; pagination and polling share an overall deadline. Cancellation stops local work, not the remote operation. Node uses AbortSignal. PHP uses a Cancellation token checked during cURL progress and between waits; synchronous calls need an external signal handler to cancel while blocked.

### Pagination and polling

Pagination is lazy, supports maxPages/maxItems, and does not guarantee a stable snapshot or durable continuation. Generation rejects incompatible continuation/query representations, including an int64/uint64 continuation with an ordinary integer query parameter. Configured money helpers reject whitespace, including trailing newlines, and excess precision when converting exact major-unit strings to minor units.

## Destinations and API versions

Explicit allowedOrigins govern all destinations, including pagination. HTTPS is required unless allowInsecureHttp is set for local tests. Declared 302/307 responses return Location metadata without following redirects; undeclared redirects are rejected. Authentication is attached only after destination validation. API version headers are pinned when configured; changing them does not update generated types.

## Client lifecycle and transports

Clients perform no network I/O at import/construction. Node clients reuse the runtime's fetch connection pool; injected transports remain caller-owned and must honor AbortSignal and disable redirects/retries. PHP owns a reusable cURL handle, released by close()/destruction; a client supports sequential calls within one PHP execution context. Do not concurrently share a PHP client across threads/fibers. Node requests keep headers/context local and support concurrent calls. No SDK telemetry is sent. Requests use the media type selected by the provider profile. Schema validation counts encoded object properties, including explicit nulls, after optional-field omission. Requests identify the selected package name/version and runtime through an overridable User-Agent header.

## Diagnostics and sensitive data

Diagnostics run once per attempted HTTP request, including transport failures, with operation, request ID, status, timing, attempt count and error kind only; hook failures are ignored. Bodies and credentials are excluded. Raw response text/headers and structured error details are privileged explicit access. Binary/stream result inspection omits raw headers and URLs; event inspection omits payloads.

Node Model.toJSON() returns a defensive copy of the public JSON representation, with exact numbers represented as strings. Rebuilding from that copy treats these as JSON strings in number/string alternatives. To edit a Node input, retain the original input values, including ExactNumber instances, and construct a new model from the updated input. If editing a toJSON() copy, explicitly restore ExactNumber at fields intended to be JSON numbers in ambiguous alternatives. PHP model accessors also return defensive copies; use toInputArray()/toInputValue() to edit and rebuild inputs while preserving exact numeric kinds. Model debug printing redacts declared sensitive fields and additional field names supplied in ClientOptions.redactFields; printing arbitrary raw values is application responsibility. Injected transports are privileged and see credentials/bodies.

## Schema helpers

The package exports serialize(value, schema), new Model(value, schema), and redact(value, schema) for application-supplied schemas. These helpers use the package's local value execution rules and require no generator installation or schema registry service. Generated methods and factories use the codecs included in the package. For a null-only schema, use {"type":"null"}. The legacy form {"type":["null"]} also permits non-null values in Node; PHP rejects them.

## Package upgrades

Review provider release notes before upgrading. Compatibility checks account for public declarations, required response values and PHP class identities. Complex schema changes can still require manual review.

## Webhooks and recovery

Verification uses the configured HMAC-SHA256 signature format, signed headers and original body bytes, with timestamp tolerance and overlapping secrets. Preserve raw request bytes; never verify reserialized JSON. Verification is not durable deduplication. In one database transaction, insert a unique provider event ID and durable work record before acknowledging. Workers should fetch authoritative current state for out-of-order events; commit business side effects idempotently. Unknown event types must not be treated as known success.

## Custom helpers

Custom helpers belong in custom/; they survive regeneration. Multi-call helpers are not atomic and must expose partial completion. See [reference](REFERENCE.md).

## Resume an action with its saved key

Use this only after reconciling the previous outcome and confirming the provider permits resubmission. Read the key and the original input from your saved action; keep both unchanged. The environment variable below stands in for your application's durable action record. Do not generate a new key when retrying that action. This example makes one request attempt.

```typescript
import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  apiKey: process.env.API_KEY ?? '',
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
    "Idempotency-Key": idempotencyKey,
  },
  { maxAttempts: 1 },
);
console.log(result.order_id);
console.log(result.status);
```

## Response return modes

Payload-mode methods return the decoded body, or their explicitly configured payload path, directly. Their WithResponse companions return SdkResponse with body, meta and raw, without unwrapping. Each invocation makes its own request; choose one form per action. Result-mode operations keep their existing data/meta/raw envelope. Pages and Wait helpers always return full Results, and Items helpers yield individual items; pagination and polling paths still address the original body.

```typescript
const response = await client.orders.addChargeWithResponse("example", {charge: {name: "example", type: "service_fee", amount_money: {amount: "0", currency: "USD"}}});
console.log(response.body, response.meta.requestId);
```

