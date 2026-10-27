# Flint Public API runtime guide

Package 5.1.0; API 2026-09-07.

[Back to the quickstart](README.md) · [API index](REFERENCE.md) · [Models](MODELS.md)

## Client and request options

Import Client and any types used below from the package root. Use an explicit sandbox or local mock base URL for examples. HTTP requires allowInsecureHttp: true. No network request is made during client construction.

### ClientOptions

| Field | Type | Default | Meaning |
| --- | --- | --- | --- |
| baseUrl | string | https://api.withflintpay.com | API environment URL. Set explicitly for sandbox or local tests. |
| token | string or CredentialProvider | none | Legacy credential, or configured token shortcut only. |
| ambientCredentials | boolean | true | Enable configured default credential discovery, when supported. |
| allowedOrigins | string[] | base URL origin | Allowlisted canonical destination origins. |
| allowInsecureHttp | boolean | false | Permit HTTP for deliberate local tests. |
| authMode | string | operation/client selection | Select a declared authentication mode. |
| credentials | credential map | none | Client: mode → scheme → credential. Request: scheme → credential. |
| timeoutMs | number | 10000 | Per-attempt timeout, including buffered body reads. |
| deadlineMs | number | 30000 | Overall duration across attempts and waits, not a timestamp. |
| maxAttempts | number | operation policy | Total attempts including the first; capped by the operation limit. |
| transport | typeof fetch | fetch; native HTTP for SSE | Caller-owned transport; honor cancellation, disable redirects and retries. |
| diagnostics | (event: DiagnosticEvent) => void | none | Per-attempt metadata callback. Exceptions are ignored; no bodies or credentials. |
| redactFields | string[] | [] | Additional sensitive field names for SDK inspection. |
| apiKey | string or CredentialProvider | none | Configured authentication shortcut; see Authentication. |
| checkoutToken | string or CredentialProvider | none | Configured authentication shortcut; see Authentication. |
| customerToken | string or CredentialProvider | none | Configured authentication shortcut; see Authentication. |
| invoiceToken | string or CredentialProvider | none | Configured authentication shortcut; see Authentication. |
| onboardingToken | string or CredentialProvider | none | Configured authentication shortcut; see Authentication. |

### RequestOptions

| Field | Type | Default | Meaning |
| --- | --- | --- | --- |
| authMode | string | inherit client | Select a declared authentication mode. |
| credentials | credential map | inherit client | Client: mode → scheme → credential. Request: scheme → credential. |
| timeoutMs | number | inherit client | Per-attempt timeout, including buffered body reads. |
| deadlineMs | number | inherit client | Overall duration across attempts and waits, not a timestamp. |
| maxAttempts | number | inherit client | Total attempts including the first; capped by the operation limit. |
| headers | Record<string, string> | {} | Request-local headers; managed credential/version headers remain controlled. |
| idempotencyKey | string | operation policy | Saved action key; supported only on declared operations. |
| ifMatch | string | none | Declared conditional request header. |
| signal | AbortSignal | none | Stop local work; remote work may continue. |
| maxPages | number | 1000 | Lazy pagination page cap. |
| maxItems | number | unlimited | Lazy pagination item cap. |
| streamIdleTimeoutMs | number | operation policy or 30000 | Maximum idle duration while consuming SSE. |
| streamLifetimeMs | number | unlimited | Optional total SSE lifetime. |
| clientRequestId | string | none | Caller correlation: 1–128 visible ASCII characters, no spaces. Forwarded only when the operation declares its request-ID header. |
| apiKey | string or CredentialProvider | inherit client | Request-local authentication shortcut. |
| checkoutToken | string or CredentialProvider | inherit client | Request-local authentication shortcut. |
| customerToken | string or CredentialProvider | inherit client | Request-local authentication shortcut. |
| invoiceToken | string or CredentialProvider | inherit client | Request-local authentication shortcut. |
| onboardingToken | string or CredentialProvider | inherit client | Request-local authentication shortcut. |
| token | string or CredentialProvider | inherit client | Request-local authentication shortcut. |

```typescript
const result = await client.oauth.authorizePartnerInstall({response_type: "code", client_id: "example", redirect_uri: "example", mode: "test", code_challenge: "example", code_challenge_method: "S256", state: "example"}, { timeoutMs: 5000, deadlineMs: 15000, maxAttempts: 1 });
```

## Calling convention

This package configures positional path arguments on selected operations. Their signatures list the argument order; params contain flat body/query/header fields. Pass request options as the last argument, as a plain object. The resource reference shows each exact signature.

## Authentication

Authentication shortcuts are accepted on both client and request options:

- `apiKey` selects `merchant` and supplies `BearerAuth`.
- `checkoutToken` selects `checkout` and supplies `CheckoutSessionBearer`.
- `customerToken` selects `customer` and supplies `CustomerSessionBearer`.
- `invoiceToken` selects `invoice` and supplies `InvoiceAccessTokenBearer`.
- `onboardingToken` selects `onboarding` and supplies `OnboardingSessionBearer`.
- `token` selects `merchant` and supplies `BearerAuth`.

Request shortcuts override client authentication for that call. Explicit request modes still work. Use only one shortcut, and do not combine it with authMode or credentials in the same options object.

Set `authMode` to one of the modes below and put its credentials under `credentials[mode]`. Request overrides use the mode’s credential map directly, without the outer mode key. A request credential map replaces the selected mode’s client map; supply every required key.

| Mode | Required credential keys |
| --- | --- |
| `checkout` | `CheckoutSessionBearer` |
| `customer` | `CustomerSessionBearer` |
| `invoice` | `InvoiceAccessTokenBearer` |
| `merchant` | `BearerAuth` |
| `onboarding` | `OnboardingSessionBearer` |

TypeScript checks mode names, credential keys, and the modes permitted by each operation. Credentials themselves are never shown in SDK diagnostics.

Here credential is a nonempty value loaded from your secret store:

```typescript
const client = new Client({
  baseUrl,
  authMode: "checkout",
  credentials: { ["checkout"]: { ["CheckoutSessionBearer"]: credential } },
});
```

Credentials accept strings or CredentialProvider objects. getCredential() returns a Promise of { value: string, expiresAt?: Date }; optional invalidate() clears application caches.

Providers resolve on every request attempt; the application owns caching and expiry. A replay-safe HTTP 401 invalidates providers implementing invalidate() and retries once, adding at most one attempt beyond the ordinary budget, even with maxAttempts: 1. The idempotency key is preserved. String credentials never trigger this refresh retry. Provider exceptions become authentication errors without retaining potentially sensitive causes.

Default credential discovery is lazy: explicit credentials, then configured API key/access token environment variables (both set is ambiguous_credentials), then configured workload identity. Set ambientCredentials: false to disable it. defaultCredentials() and workloadIdentityCredentials(options) return providers supporting token, token_file and github_actions sources and cached refresh.

## Responses and errors

Payload methods return the decoded body or configured payload path directly. WithResponse companions return SdkResponse with body, meta and raw without unwrapping. Each invocation makes its own request; choose one form per action. Result-mode methods return Result with data (the complete body), meta and raw. API envelopes remain inside that body. Pagination Pages and polling Wait follow the base return mode; their WithResponse companions expose the complete body and metadata. Items yields individual items.

Metadata uses properties, and binary bodies are Uint8Array. Raw JSON is buffered text and may contain sensitive data.

### Errors

```typescript
import { errors } from '@flintpay/node';
async function handleSdkRequest(request) {
  try {
    return await request(); // Pass a function that calls a resource method.
  } catch (error) {
    if (error instanceof errors.NotFoundError) console.error(error.message);
    else throw error;
  }
}
```

## Error reference

Every class below extends `SdkError`. Import subclasses through `errors`.

| Status or trigger | Kind | Class | Action |
| --- | --- | --- | --- |
| 400, 422 | validation | ValidationError | Fix the input; do not retry unchanged. |
| 401, 403 | authentication | AuthenticationError | Fix credentials or permissions. |
| 404 | not_found | NotFoundError | Check the identifier and environment. |
| 409, 412 | conflict | ConflictError | Read current state and reconcile; 412 never retries. |
| 429 | rate_limit | RateLimitError | Honor retryAfterMs within the retry budget. |
| 500–599 | server | ServerError | Retry only when replay-safe; reconcile unknown mutations. |
| Other HTTP errors | api | ApiError | Inspect the provider code and correct the request. |
| No HTTP response | transport | ConnectionError | Retry when allowed; reconcile unknown outcomes. |
| Attempt timeout | timeout | TimeoutError | Retry only when replay-safe; reconcile unknown outcomes. |
| Overall deadline | deadline | DeadlineError | Reconcile before starting another call. |
| Local cancellation | cancelled | CancelledError | Remote work may continue; reconcile its state. |
| Invalid response | protocol | ProtocolError | Inspect raw explicitly; do not blindly resubmit. |
| Rejected destination | destination | DestinationError | Fix baseUrl or allowedOrigins. |

| Field | Meaning |
| --- | --- |
| code | Provider or stable local reason; distinct from HTTP status. |
| details | Structured provider/runtime details when available. |
| meta.requestId | Server request ID for support and correlation; may be absent. |
| idempotencyKey | Resolved key; persist it with the action. |
| retryAfterMs | Valid server Retry-After, in milliseconds. |
| outcome | not_sent: no dispatch; response: an HTTP response; unknown: remote completion uncertain. |
| status | HTTP status, or undefined without a response. |
| retryAllowed | Whether the failure permits another replay-safe attempt. |
| raw | Original buffered body for explicit recovery; may contain sensitive data. |

An unknown outcome requires reconciliation using the original action and saved key before resubmission. An automatic key protects one SDK call only; persist an application key for recovery across calls.

### Provider error codes

See the [declared provider error-code values](ERRORS.md#provider-error-codes).

### Undeclared and invalid responses

Exact HTTP status declarations take precedence, followed by a declared `default`. If neither exists for an actual 2xx response, the SDK reuses the sole declared JSON 2xx response, including its response decoder. Metadata retains the actual status. Multiple JSON success declarations remain ambiguous, even when their schemas match; binary, streaming, empty and redirect responses are never inferred.

Required fields and value types remain enforced. Schema failures are non-retryable `protocol` errors with `outcome: response`; the top-level message includes codec diagnostics such as `response.entity.id: required field is missing`, and the original cause remains available. The server may already have completed the action. Buffered JSON response failures and payload-extraction errors retain `raw` for explicit recovery; raw bodies are omitted from ordinary error inspection and diagnostics.

Inside a catch block, a synthetic create response with a top-level string `id` can be recovered as below. Use the actual endpoint's ID path and reconcile its state before continuing. This parses an unvalidated body only to recover the ID; it does not restore the SDK's typed guarantees or justify resubmitting the mutation.

```js
if (error instanceof SdkError && error.kind === "protocol" &&
    error.status >= 200 && error.status < 300 && error.raw) {
  let body;
  try { body = JSON.parse(error.raw); } catch { throw error; }
  const entityId = typeof body?.id === "string" ? body.id : undefined;
  if (!entityId) throw error;
  // Reconcile this entity ID with the provider; do not submit another create.
} else {
  throw error;
}
```

## Retries and idempotency

Without a declared policy, GET/HEAD/OPTIONS allow three total attempts for transport failures and HTTP 408, 429, 500, 502, 503 and 504. Other methods send once. Explicit operation policies replace those defaults; maxAttempts caps total attempts including the first. Mutations with optional idempotency keys send once when no key is supplied. HTTP 412 never retries.

Backoff waits uniformly between half and all of baseDelayMs * 2^(attempt - 1), capped by maxDelayMs when declared. Retry-After is a minimum wait. Nonnegative decimal seconds or canonical GMT HTTP dates are accepted; malformed values are ignored. If the next wait exceeds the deadline, the last error is returned unchanged.

The response field `error.remediation.retry` controls body-driven retries for declared retry values: "same_request". A string signal overrides status and code rules; otherwise statuses apply.

### Idempotency

| Policy | Header | Retention | Scope |
| --- | --- | --- | --- |
| 1 | `Idempotency-Key` | As long as the command's effects exist. The key is the command's durable identity: save it before the first attempt and reuse it to retry or recover. Never reuse it for a new business intent. | Authenticated context, environment, HTTP endpoint and caller key; the canonical request fingerprint includes target resource IDs and request parameters. |
| 2 | `Idempotency-Key` | At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request. | Authenticated context, environment, HTTP endpoint and caller key; the canonical request fingerprint includes target resource IDs and request parameters. |

Only operations declaring idempotency accept idempotencyKey. Persist a key with the original input before the first attempt and reuse it for the same action. When automatic keys are enabled, the SDK creates one per call and reuses it across attempts; automatic keys do not span separate calls. Resolved keys are exposed on errors and response metadata, including not_sent failures after key resolution.

An outcome of unknown means remote completion is uncertain. Reconcile the action with the provider using the saved key before resubmitting. Cancellation and timeouts cannot undo remote work.


## Resume an action with its saved key

Use this only after reconciling the previous outcome and confirming the provider permits resubmission. Read the key and the original input from your saved action; keep both unchanged. The environment variable below stands in for your application's durable action record. Do not generate a new key when retrying that action. This example makes one request attempt.

```typescript
import { Client } from "@flintpay/node";
const baseUrl = process.env.API_BASE_URL;
if (!baseUrl) throw new Error("Set API_BASE_URL to your sandbox or local mock URL");
const client = new Client({
  baseUrl,
  allowInsecureHttp: ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const idempotencyKey = process.env.API_IDEMPOTENCY_KEY;
if (!idempotencyKey) throw new Error("Set API_IDEMPOTENCY_KEY to the key saved with this action");
const result = await client.giftCardAdjustments.create(
  "example",
  {
    amount_money: {
      amount: "100",
      currency: "USD",
    },
    reason: "complimentary",
  },
  { idempotencyKey: idempotencyKey, maxAttempts: 1 },
);
console.log(result.gift_card.gift_card_id);
console.log(result.gift_card.merchant_id);
```

## Pagination and polling

```typescript
for await (const item of client.apiKeys.listItems({}, { maxItems: 100 })) {
  console.log(item);
}
```

Pagination is lazy and defaults to at most 1000 pages. maxPages and maxItems cap work. Repeated continuations (including cursor cycles) and two consecutive empty pages still advertising a continuation raise protocol errors. An isolated or terminal empty page is valid. Iteration does not guarantee a stable snapshot or durable continuation. Each page gets a fresh deadline; processing yielded values does not consume it. Polling shares an overall deadline. Per-operation references list helper names and terminal states.

## Timeouts, streaming and cancellation

Timeout is per attempt, including buffered body consumption. Deadline covers attempts and retry waits for one call. Overall deadlines use DeadlineError with retryAllowed false. For SSE these limits bound setup; streamIdleTimeoutMs controls idle reads and streamLifetimeMs optionally caps lifetime. Malformed known events raise ProtocolError with code sse_invalid_event and details containing eventId and one-based position. Close streams or the client to release resources; breaking iteration also closes a stream. Resume cursors and reconnection belong to the application.

Use AbortSignal for cancellation. Unconsumed default SSE sockets and timers do not keep Node alive; iteration retains the connection until close.

## Webhooks and recovery

Import verifyWebhook from the webhooks subpath to verify without client options, a base URL, API credentials or operation descriptors. The package-root export remains available. Client.verifyWebhook delegates to the same verifier. Call verifyWebhook(rawBody, headers, secrets, nowSeconds?) with original request bytes and `webhook-signature`, `webhook-timestamp`, `webhook-id`. This package uses standard-webhooks HMAC-SHA256 signing and a 300-second timestamp tolerance. Secrets must use the whsec_ prefix and canonical base64 encoding of exactly 32 key bytes. Pass one secret string or an array of active secrets during rotation. nowSeconds is an optional Unix time override in seconds for deterministic tests; normally omit it. Millisecond-scale values raise an input error explaining the conversion. Node accepts original Buffer, Uint8Array or ArrayBuffer bytes. 

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
app.post("/webhooks", express.raw({ type: "application/json" }), (req, res, next) => {
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
import type { VerifiedWebhook, KnownWebhookEvent } from '@flintpay/node';

function handleKnown(event: KnownWebhookEvent): void {
  // Switch on the configured event-type field to handle each declared event.
}

const verified: VerifiedWebhook = client.verifyWebhook(rawBody, headers, [currentSecret, previousSecret]);
if (verified.known) {
  const event = verified.event; // KnownWebhookEvent
  handleKnown(event);
} else {
  const event = verified.event; // unknown: validate before accessing fields.
}
```

The package root and webhooks subpath export these types, together with one WebhookEvent<EventName> type per declared event. Event names use PascalCase in the WebhookEvent<EventName> type. For an envelope with a data field, use that event type's ['data'] indexed access for its payload. A top-level typeField supports exhaustive switch narrowing with a never default. Dotted typeField paths require the named type or Extract<KnownWebhookEvent, { meta: { name: 'entity.updated' } }> (adapt that path and literal to your configuration). When no events are declared, KnownWebhookEvent is never.

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

Never verify JSON.stringify(parsedBody): verification authenticates the original bytes, including whitespace and numeric spelling. A mismatch cannot distinguish a wrong secret from altered bytes. Repeated signature values are supported; timestamp and ID headers must each contain a single value.

known is true only for a registered event name whose payload matches a declared envelope. Authenticated unknown names return known: false with reason: unknown_event; declared names with unmatched envelopes use reason: unmatched_envelope. Known deliveries have no reason; nested response types retain their documented uncertainty. Malformed declared payloads produce a protocol error.

Verification does not deduplicate deliveries. The optional examples/webhook-inbox files demonstrate durable inbox/outbox processing: commit the event ID and work record before acknowledging, reconcile out-of-order deliveries, and apply side effects idempotently. Unknown names and unmatched envelopes remain pending for review.

## PDF downloads and declared redirects

PDF results are buffered bytes. Set API_DOWNLOAD_PATH to choose the file written by the PDF example. Redirect results expose HTTP metadata and the optional Location without following it. Each recipe makes one SDK call.

### creditNotes.getPDF

```typescript
import { Client } from "@flintpay/node";
const baseUrl = process.env.API_BASE_URL;
if (!baseUrl) throw new Error("Set API_BASE_URL to your sandbox or local mock URL");
const client = new Client({
  baseUrl,
  allowInsecureHttp: ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.creditNotes.getPDF(
  "example"
);
// Choose a destination path; PDF bytes must not be decoded as text.
const resultPath = process.env.API_DOWNLOAD_PATH ?? "download.pdf";
await (await import("node:fs/promises")).writeFile(resultPath, result.data);
console.log("Saved", result.data.byteLength, "bytes to", resultPath);
console.log(result.meta.requestId);
```

### oauth.authorizePartnerInstall

```typescript
import { Client } from "@flintpay/node";
const baseUrl = process.env.API_BASE_URL;
if (!baseUrl) throw new Error("Set API_BASE_URL to your sandbox or local mock URL");
const client = new Client({
  baseUrl,
  allowInsecureHttp: ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.oauth.authorizePartnerInstall(
  {
    response_type: "code",
    client_id: "example",
    redirect_uri: "example",
    mode: "test",
    code_challenge: "example",
    code_challenge_method: "S256",
    state: "example",
  }
);
// Location may be relative or use another origin. The SDK does not follow it.
// Validate the destination before a separate download; do not forward API credentials.
console.log(result.meta.status, result.data.location ?? "No Location header");
console.log(result.meta.requestId);
```

## Destinations and API versions

baseUrl must omit a path already present at the start of an operation path. allowedOrigins applies to all destinations, including pagination; use canonical origin strings with default ports omitted. HTTPS is required unless allowInsecureHttp is enabled for local tests. Declared 302/307 responses return Location metadata without following redirects; undeclared redirects fail. Credential and pinned API-version headers are controlled by client configuration. Request correlation is independent of the server's request ID.

## Client lifecycle and transports

Buffered requests use fetch; default SSE uses native HTTP/HTTPS. Request state stays local, so calls may run concurrently. Injected transports use the fetch signature, must honor AbortSignal, and disable redirects and retries.

Injected transports are caller-owned and privileged: they see credentials and bodies. Here baseUrl selects your environment:

```typescript
const client = new Client({
  baseUrl,
  transport: (url, init) => fetch(url, init),
  diagnostics: (event) => console.log(event.operation, event.attempt),
});
```

## Diagnostics and sensitive data

No SDK telemetry is sent. Diagnostics receive per-attempt operation, request ID, status, timing, attempt count and error kind only. Hook failures are ignored. Ordinary error inspection omits raw bodies, response headers, URLs and unsanitized causes; explicit raw access requires application redaction. redactFields adds sensitive model field names.

## Input and response values

### Numbers and dates

int64/uint64 responses are integer strings. Their TypeScript type is `${bigint}`; inputs also accept bigint. Decimal fields retain exact numeric strings; ambiguous numeric inputs use ExactNumber. Plain numbers use finite native floating-point precision. Integer responses accept integral decimal/exponent tokens without rounding. Exact numeric enum membership compares mathematical values. Mutually dependent numeric alternatives are matched jointly with a limit of 256 combinations per value path; exceeding the limit fails validation. Date-time inputs accept strings or Date; native dates serialize to UTC without mutation and responses remain strings.

### Objects and models

Request enums are closed; response enums retain unknown strings. Shaped TypeScript objects have no implicit index signature. Response values preserve unknown fields and tagged variants; malformed known values fail decoding. Narrow unknown branches before access. Model.toJSON() returns a defensive copy; retain original ExactNumber inputs when editing ambiguous numeric values. Resource subpaths export scoped clients with the same methods.

## Custom helpers

Keep application helpers in custom/; regeneration preserves them. Multi-call helpers must expose partial completion.
