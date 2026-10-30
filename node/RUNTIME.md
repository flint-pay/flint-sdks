# Flint Public API runtime guide

Package 8.0.0-beta.1; API 2026-09-07.

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
| appInfo | { name: string; version?: string; url?: string } | none | Append application name/version and optional HTTPS URL to User-Agent, after SDK/runtime/OS details. |
| authMode | string | operation/client selection | Select a declared authentication mode. |
| credentials | credential map | none | Client: mode → scheme → credential. Request: scheme → credential. |
| timeoutMs | number | operation default or 10000 | Per-attempt timeout, including buffered body reads. |
| deadlineMs | number | operation default or 30000 | Overall duration across attempts and waits, not a timestamp. |
| maxAttempts | number | operation policy | Total attempts including the first; capped by the operation limit. |
| transport | typeof fetch | fetch; native HTTP for SSE | Caller-owned transport; honor cancellation, disable redirects and retries. |
| diagnostics | (event: DiagnosticEvent) => void | none | Per-attempt callback with errorName and errorCode. Exceptions are ignored; no bodies or credentials. |
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
| clientRequestId | string | none | Caller correlation: 1-128 visible ASCII characters, no spaces. Forwarded only when the operation declares its request-ID header. |
| apiKey | string or CredentialProvider | inherit client | Request-local authentication shortcut. |
| checkoutToken | string or CredentialProvider | inherit client | Request-local authentication shortcut. |
| customerToken | string or CredentialProvider | inherit client | Request-local authentication shortcut. |
| invoiceToken | string or CredentialProvider | inherit client | Request-local authentication shortcut. |
| onboardingToken | string or CredentialProvider | inherit client | Request-local authentication shortcut. |
| token | string or CredentialProvider | inherit client | Request-local authentication shortcut. |

Timeout precedence is request > client > operation default > global default. Global defaults are timeoutMs 10000 and deadlineMs 30000. A completely read success is returned even if decoding finishes after the deadline.

### Operation defaults

| Operation | timeoutMs | deadlineMs |
| --- | --- | --- |
| orders.applyDiscount | 150000 | 300000 |
| orders.cancelPaymentAttempt | 150000 | 300000 |
| paymentIntents.cancel | 150000 | 300000 |
| paymentIntents.capture | 150000 | 300000 |
| checkoutSessions.close | 150000 | 300000 |
| orders.close | 150000 | 300000 |
| paymentIntents.confirm | 150000 | 300000 |
| checkoutSessions.create | 150000 | 300000 |
| creditNotes.createRefund | 150000 | 300000 |
| invoices.createCheckoutSession | 150000 | 300000 |
| me.createInvoiceCheckoutSession | 150000 | 300000 |
| orders.create | 150000 | 300000 |
| orders.createCharge | 150000 | 300000 |
| orders.createLineItems | 150000 | 300000 |
| orders.createPaymentIntent | 150000 | 300000 |
| paymentIntents.create | 150000 | 300000 |
| refunds.create | 150000 | 300000 |
| orders.deleteCharge | 150000 | 300000 |
| orders.deleteLineItem | 150000 | 300000 |
| orders.pay | 150000 | 300000 |
| orders.removeDiscounts | 150000 | 300000 |
| orders.repriceDiscounts | 150000 | 300000 |
| checkoutSessions.update | 150000 | 300000 |
| orders.update | 150000 | 300000 |
| orders.updateCharge | 150000 | 300000 |
| orders.updateLineItem | 150000 | 300000 |
| paymentIntents.update | 150000 | 300000 |

These defaults are interim until the server publishes an execution bound.

```typescript
const result = await client.analytics.getOverview({period_start_at: "2026-01-01T00:00:00Z"}, { timeoutMs: 5000, deadlineMs: 15000, maxAttempts: 1 });
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

A credential option is passed when its key is present, including a shortcut or an entry in credentials. Passing undefined, null, an empty string or a blank string throws ConfigurationError with code credential_missing, outcome not_sent and param naming the option. Client credentials are checked during construction; request credentials are checked when the call starts. A request credential map or shortcut replaces the client credential for that call. Omit credential options to allow default discovery.

Credential providers resolve on every request attempt; the application owns caching and expiry. A replay-safe HTTP 401 invalidates credential providers implementing invalidate() and retries once, adding at most one attempt beyond the ordinary budget, even with maxAttempts: 1. The idempotency key is preserved. String credentials never trigger this refresh retry. Credential provider exceptions become authentication errors without retaining potentially sensitive causes.

Default credential discovery is lazy and runs only when no credential option is passed on either the client or the request, and ambientCredentials is not false. It tries configured API key/access token environment variables (setting both throws ConfigurationError with code credential_conflict), then configured workload identity. Set ambientCredentials: false to disable it. defaultCredentials() and workloadIdentityCredentials(options) return credential providers supporting token, token_file and github_actions sources and cached refresh.

For a multi-tenant application, pass the tenant credential explicitly and disable ambient discovery:

```typescript
const client = new Client({ apiKey: tenant.flintKey, ambientCredentials: false });
```

## Responses and errors

Payload methods return the decoded object or configured payload object directly, with lastResponse carrying status, headers, requestId, requestIds, idempotencyKey, attempts, durationMs and the complete decoded body. The lastResponse property is non-enumerable and non-writable. Pages carry response info and Wait carries the last poll; Items yields items without response info. Result-mode methods keep data and raw, with lastResponse.

ResponseInfo uses properties, and binary bodies are Uint8Array. Raw JSON is buffered text and may contain sensitive data.

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

Every error extends `SdkError`. Import subclasses through `errors`. API classes follow HTTP status alone, never the error code. Constructors accept a message and an init object.

| Status or trigger | Class | Parent | Action |
| --- | --- | --- | --- |
| 400, 422 | InvalidRequestError | ApiError | Fix the request. |
| 401 | AuthenticationError | ApiError | Fix credentials. |
| 403 | PermissionError | ApiError | Check permissions. |
| 404 | NotFoundError | ApiError | Check the identifier and environment. |
| 409, 412 | ConflictError | ApiError | Read current state and reconcile. |
| 429 | RateLimitError | ApiError | Honor retryAfterMs. |
| 500-599 | ServerError | ApiError | Retry only when allowed. |
| Other error statuses | ApiError | SdkError | Inspect status and code. |
| No usable response | ConnectionError | SdkError | Reconcile unknown outcomes. |
| Attempt timeout or overall deadline | TimeoutError | ConnectionError | Reconcile before resubmitting. |
| Invalid call input | InvalidInputError | SdkError | Fix the input. |
| Invalid options, credentials or destination | ConfigurationError | SdkError | Fix configuration. |
| Caller cancellation | CancelledError | SdkError | Remote work may continue. |
| Unusable success response | UnexpectedResponseError | SdkError | Inspect raw explicitly. |
| Rejected webhook | WebhookVerificationError | SdkError | Check the delivery and verification arguments. |
| Pagination limit | PaginationLimitError | SdkError | Resume pagination explicitly. |

| Field | Meaning |
| --- | --- |
| code | Error code from Flint. |
| status | HTTP status, absent without a response. |
| operation | SDK method for the call. |
| outcome | not_sent, response or unknown. Reconcile unknown outcomes before resubmitting. |
| retryAllowed | Whether another replay-safe attempt is allowed. |
| requestId | Last response request ID. |
| requestIds | Request IDs received across attempts, in order. |
| idempotencyKey | Resolved key; persist it with the action. |
| attempts | Number of attempts, including credential retries. |
| durationMs | Whole-call duration. |
| retryAfterMs | Valid Retry-After in milliseconds. |
| headers | Last response headers; excluded from inspection. |
| raw | Buffered body for explicit recovery; excluded from inspection. |

API errors also expose type, param, errorSource, docUrl, requestLogUrl, remediation and details (always an array). Object values keep wire names; remediation.retry is same_request, after_refresh or none. The redacted decoded body is available through body and excluded from inspection. Envelope paths are documented in [ERRORS.md](ERRORS.md). Local InvalidInputError uses code INVALID_REQUEST and details entries with code REQUIRED, INVALID_VALUE, UNKNOWN_FIELD or NOT_ALLOWED plus param. ConfigurationError has no param. Its code is credential_missing, credential_invalid, credential_conflict, credential_provider_failed, auth_mode_not_permitted, workload_identity_failed, invalid_option, invalid_destination or operation_unavailable. Workload identity failures retain their reason in workloadIdentity.reason. PaginationLimitError uses code pagination_limit_exceeded and exposes nextPageToken and pages when the implicit 1000-page cap is reached with a continuation. An explicit maxPages stops quietly; a terminal page 1000 succeeds. Params follow API JSON paths; query arrays use the bare parameter name. Local messages suggest a unique nearby name and show received values only for non-sensitive enum mismatches. An automatic key protects one SDK call only; persist an application key for recovery across calls.

| outcome | Meaning |
| --- | --- |
| not_sent | No final answer and no attempt may have run. |
| response | The final answered error settles the call, including a recorded error replayed after a timeout. |
| unknown | The call ends in progress, on an uncertain write answer, or without an answer after an attempt may have run. |

A write is any method other than GET or HEAD. A write ending on a 5xx, IDEMPOTENCY_RECOVERY_REQUIRED or reason outcome_unknown is unknown; reads report response for those answers. Configured in-progress codes are unknown for both. A no-answer attempt, a 5xx or an in-progress answer may have run. A refused connection on a retry does not erase that uncertainty.

When the next wait would pass the deadline, the last error is preserved, including its retryAfterMs. Caller retryAllowed is independent of the remaining automatic retry budget: for a GET/HEAD or a keyed write, unknown outcomes and connection, timeout or cancellation errors allow a same-key retry, as do configured retry signals and envelope-less retry statuses. HTTP 401 and 412, local errors, unusable successes and calls without replay protection do not. Never generate a fresh key to retry an unknown action.

### Flint error codes

See the [declared error-code values](ERRORS.md#flint-error-codes).

### Undeclared and invalid responses

Exact HTTP status declarations take precedence, followed by a declared `default`. If neither exists for an actual 2xx response, the SDK reuses the sole declared JSON 2xx response, including its response decoder. Metadata retains the actual status. Multiple JSON success declarations remain ambiguous, even when their schemas match; binary, streaming, empty and redirect responses are never inferred.

Required fields and value types remain enforced. Schema failures are non-retryable `UnexpectedResponseError` errors with `outcome: response`; the top-level message includes codec diagnostics such as `response.entity.id: required field is missing`, and the original cause remains available. The server may already have completed the action. Buffered JSON response failures and payload-extraction errors retain `raw` for explicit recovery; raw bodies are omitted from ordinary error inspection and diagnostics.

Inside a catch block, a synthetic create response with a top-level string `id` can be recovered as below. Use the actual endpoint's ID path and reconcile its state before continuing. This parses an unvalidated body only to recover the ID; it does not restore the SDK's typed guarantees or justify resubmitting the mutation.

```js
if (error instanceof SdkError && error instanceof errors.UnexpectedResponseError &&
    error.status >= 200 && error.status < 300 && error.raw) {
  let body;
  try { body = JSON.parse(error.raw); } catch { throw error; }
  const entityId = typeof body?.id === "string" ? body.id : undefined;
  if (!entityId) throw error;
  // Reconcile this entity ID with Flint; do not submit another create.
} else {
  throw error;
}
```

## Retries and idempotency

Reads (GET, HEAD and OPTIONS) allow up to 3 total attempts for transport failures and HTTP 429, 500, 502, 503 and 504. 300 write operations create `Idempotency-Key` automatically when you supply none, beginning with `flint-sdk-` and allow up to 3 total attempts for transport failures and HTTP 429, 500, 502, 503 and 504. 33 write operations accept `idempotencyKey` and send once until you supply a key; with a key, they allow up to 3 total attempts for transport failures and HTTP 429, 500, 502, 503 and 504. 9 write operations declare no idempotency key and always send once. maxAttempts caps total attempts including the first. HTTP 412 never retries.

Backoff waits uniformly between half and all of baseDelayMs * 2^(attempt - 1), capped by maxDelayMs when declared. Retry-After is a minimum wait. Nonnegative decimal seconds or canonical GMT HTTP dates are accepted; malformed values are ignored. If the next wait exceeds the deadline, the last error is returned unchanged.

The response field `remediation.retry` controls body-driven retries for declared retry values: "same_request". A string signal overrides status and code rules; otherwise statuses apply.

### Idempotency

| Retention class | Header | Retention | Scope |
| --- | --- | --- | --- |
| At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention | `Idempotency-Key` | At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request. | Authenticated context, environment, HTTP endpoint and caller key; the canonical request fingerprint includes target resource IDs and request parameters. |
| As long as the command's effects exist. The key is the command's durable identity: save it before the first attempt and reuse it to retry or recover. Never reuse it for a new business intent retention | `Idempotency-Key` | As long as the command's effects exist. The key is the command's durable identity: save it before the first attempt and reuse it to retry or recover. Never reuse it for a new business intent. | Authenticated context, environment, HTTP endpoint and caller key; the canonical request fingerprint includes target resource IDs and request parameters. |

Only operations declaring idempotency accept idempotencyKey. Persist a key with the original input before the first attempt and reuse it for the same action. When automatic keys are enabled, the SDK creates one per call and reuses it across attempts; automatic keys do not span separate calls. Resolved keys are exposed on errors and response metadata, including not_sent failures after key resolution.

An outcome of unknown means remote completion is uncertain. Reconcile the action with Flint using the saved key before resubmitting. Cancellation and timeouts cannot undo remote work.


## Resume an action with its saved key

Use this only after reconciling the previous outcome and confirming Flint permits resubmission. Read the key and the original input from your saved action; keep both unchanged. The environment variable below stands in for your application's durable action record. Do not generate a new key when retrying that action. This example makes one request attempt.

```typescript
import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const idempotencyKey = process.env.API_IDEMPOTENCY_KEY;
if (!idempotencyKey) throw new Error("Set API_IDEMPOTENCY_KEY to the key saved with this action");
const result = await client.disputes.accept(
  "du_01ARZ3NDEKTSV4RRFFQ69G5FAV",
  {},
  { idempotencyKey: idempotencyKey, maxAttempts: 1 },
);
console.log(result.dispute_id);
console.log(result.merchant_id);
```

## Pagination and polling

```typescript
for await (const item of client.apiKeys.listItems({}, { maxItems: 100 })) {
  console.log(item);
}
```

Pagination is lazy. If page 1000 still has a continuation, the implicit cap throws PaginationLimitError (code pagination_limit_exceeded) with nextPageToken and pages. A terminal page 1000 succeeds. An explicit maxPages stops quietly; maxItems also caps work. Repeated continuations (including cursor cycles) and two consecutive empty pages still advertising a continuation raise protocol errors. An isolated or terminal empty page is valid. Iteration does not guarantee a stable snapshot or durable continuation. Each page gets a fresh deadline; processing yielded values does not consume it. Polling shares an overall deadline. Per-operation references list helper names and terminal states.

## Timeouts, streaming and cancellation

Timeout is per attempt, including buffered body consumption. Deadline covers attempts and retry waits for one call. Overall deadlines use TimeoutError with retryAllowed false. For SSE these limits bound setup; streamIdleTimeoutMs controls idle reads and streamLifetimeMs optionally caps lifetime. Malformed known events raise UnexpectedResponseError with code invalid_event and event containing id and one-based position. Close streams or the client to release resources; breaking iteration also closes a stream. Resume cursors and reconnection belong to the application.

Use AbortSignal for cancellation. Unconsumed default SSE sockets and timers do not keep Node alive; iteration retains the connection until close.

## Webhooks and recovery

### JWT delivery verification

Use verifyWebhookAsync from the package root or webhooks subpath, or client.verifyWebhookAsync with the original raw body and your receiving endpoint IDs. The result adds signingMethod: 'jwt' | 'hmac' to the existing verified result.

This package expects authorization: Bearer with algorithm ES256, exact typ flint-webhook+jwt, issuer from the configured API base URL origin without a trailing slash, and a matching endpoint audience. It checks iat/exp with a maximum 300-second lifetime and 60-second leeway, requires a jti that is not blank, and compares body_sha256 to the SHA-256 of the exact body in constant time before JSON parsing. The protected header must contain only alg, kid and typ, so token-supplied keys and key URLs (jku, x5u, jwk, x5c) and crit headers are rejected. Duplicate JSON members, a sub claim, a non-string aud and non-integer iat or exp are rejected; other claims are ignored.

```js
import { verifyWebhookAsync } from '@flintpay/node/webhooks';
const verified = await verifyWebhookAsync(rawBody, headers, {
  endpointIds: ['whep_01J8Z3Y7Q5K2M9X4N6R8T0V2WB'],
  baseUrl: 'https://api.withflintpay.com',
});
// Or await client.verifyWebhookAsync(rawBody, headers, { endpointIds: ['whep_01J8Z3Y7Q5K2M9X4N6R8T0V2WB'] });
```

Options: endpointIds (string or string[]), secrets (string or string[]), jwks ({ keys: object[] }), baseUrl, fetch, nowSeconds. The client defaults baseUrl and fetch from its configured base URL and transport. At least one of endpoint IDs or secrets is required. Standalone calls with issuer baseUrl require baseUrl. Time overrides use Unix seconds and are intended for tests.

A bearer token plus endpoint IDs always selects JWT, with no HMAC fallback on failure. Otherwise, secrets and complete HMAC headers select HMAC. Missing signing headers produce webhook_missing_header. The synchronous verifyWebhook remains HMAC-only.

Trusted keys come from the issuer plus /.well-known/jwks.json. Keys whose kid differs from the token's are ignored, whatever their type; the selected key must be an EC P-256 key with alg absent or ES256 and use absent or sig, else the token fails with webhook_invalid_token. A malformed fetched set or a repeated kid produces webhook_jwks_unavailable. Explicit jwks bypasses fetching entirely. The key cache shares in-flight requests per URL. Cache-Control max-age is clamped to 300..86400 seconds (900 when absent). Unknown kid refreshes are limited to once per minute per URL; failures can use the last successful set for up to 24 hours after fetching, retrying at most once a minute. Fetches have a 5-second timeout and a 256 KiB response cap. Respond with 5xx for webhook_jwks_unavailable so Flint retries.

### Fetch

The request body must not have been consumed. Pass the SDK client and the IDs of your receiving webhook endpoints to this helper:

```js
export async function verifyWebhookRequest(client, request, endpointIds) {
  const rawBody = new Uint8Array(await request.arrayBuffer());
  return client.verifyWebhookAsync(rawBody, request.headers, { endpointIds });
}
```

### Express

Register this route before app.use(express.json()). req.headers is accepted directly. Supply client and endpointIds from your application configuration:

```js
app.post("/webhooks", express.raw({ type: "application/json" }), async (req, res, next) => {
  try {
    const verified = await client.verifyWebhookAsync(req.body, req.headers, { endpointIds });
    // Persist verified.event and verified.known in your durable inbox before acknowledging.
    // Leave unknown events pending for review.
    receiveVerified(verified, req, res, next);
  } catch (error) {
    next(error);
  }
});
app.use(express.json());
```

### HMAC verification and secret rotation

Endpoints whose `signing_methods` include `hmac` also send `webhook-signature`, `webhook-timestamp`, `webhook-id`. Pass `secrets` to verify those deliveries by shared secret. Import verifyWebhook from the webhooks subpath to verify without client options, a base URL, API credentials or operation descriptors. The package-root export remains available. Client.verifyWebhook delegates to the same verifier. Call verifyWebhook(rawBody, headers, secrets, nowSeconds?) with original request bytes and `webhook-signature`, `webhook-timestamp`, `webhook-id`. This package uses standard-webhooks HMAC-SHA256 signing and a 300-second timestamp tolerance. Secrets must use the whsec_ prefix and canonical base64 encoding of exactly 32 key bytes. Pass one secret string or an array of active secrets during rotation. nowSeconds is an optional Unix time override in seconds for deterministic tests; normally omit it. Millisecond-scale values raise an input error explaining the conversion. Node accepts original Buffer, Uint8Array or ArrayBuffer bytes. 

```ts
import type { VerifiedWebhook, KnownWebhookEvent } from '@flintpay/node';

function handleKnown(event: KnownWebhookEvent): void {
  // Switch on the configured event-type field to handle each declared event.
}

const verified: VerifiedWebhook = await client.verifyWebhookAsync(rawBody, headers, { endpointIds, secrets: [currentSecret, previousSecret] });
if (verified.known) {
  const event = verified.event; // KnownWebhookEvent
  handleKnown(event);
} else {
  const event = verified.event; // unknown: validate before accessing fields.
}
```

The package root and webhooks subpath export these types, together with one <EventName>Event type per declared event. Event names use PascalCase in the <EventName>Event type. For an envelope with a data field, use that event type's ['data'] indexed access for its payload. A top-level typeField supports exhaustive switch narrowing with a never default. Dotted typeField paths require the named type or Extract<KnownWebhookEvent, { meta: { name: 'entity.updated' } }> (adapt that path and literal to your configuration). When no events are declared, KnownWebhookEvent is never.

### Failures and recovery

Import SdkError from this package. SdkError uses code for these stable reasons:

| Class | Code | Action |
| --- | --- | --- |
| WebhookVerificationError | webhook_invalid_input | Supply original bytes and supported header/time values. |
| WebhookVerificationError | webhook_invalid_secret | Supply at least one correctly formatted nonempty secret. |
| WebhookVerificationError | webhook_missing_header | Forward all configured signing headers. |
| WebhookVerificationError | webhook_invalid_timestamp | Supply one integer timestamp in seconds. |
| WebhookVerificationError | webhook_timestamp_out_of_tolerance | Check the clock and delivery age. |
| WebhookVerificationError | webhook_invalid_signature | Check the secret and original bytes. |
| WebhookVerificationError | webhook_invalid_token | Reject malformed JWTs, wrong algorithm/type/issuer, signatures, or a kid naming an unusable key. |
| WebhookVerificationError | webhook_invalid_audience | Check receiving endpoint IDs. |
| WebhookVerificationError | webhook_token_expired | Check token timestamps, lifetime, leeway and the server clock. |
| WebhookVerificationError | webhook_body_mismatch | Preserve the exact original bytes. |
| WebhookVerificationError | webhook_unknown_key | The trusted set has no matching key. |
| WebhookVerificationError | webhook_jwks_unavailable | Keys could not be fetched, or the fetched set is malformed or repeats the token's kid. Answer 5xx so Flint retries. |
| WebhookVerificationError | webhook_invalid_json | The authenticated body is not valid UTF-8 JSON. |

```js
try {
  const verified = await client.verifyWebhookAsync(rawBody, headers, { endpointIds });
} catch (error) {
  if (!(error instanceof SdkError)) throw error;
  // Record only error.name and error.code; avoid logging request bodies or secrets.
  // webhook_timestamp_out_of_tolerance: check the clock and delivery age.
  // webhook_invalid_signature: check the secret and original request bytes.
  throw error; // Let your HTTP adapter choose the failure response.
}
```

Never verify JSON.stringify(parsedBody): verification authenticates the original bytes, including whitespace and numeric spelling. Preserve raw request bytes before parsing. For HMAC, repeated signature values are supported; timestamp and ID headers must each contain a single value.

known is true only for a registered event name whose payload matches a declared envelope. Authenticated unknown names return known: false with reason: unknown_event; declared names with unmatched envelopes use reason: unmatched_envelope. Known deliveries have no reason; nested response types retain their documented uncertainty. Malformed declared payloads produce a protocol error.

Verification does not deduplicate deliveries. The optional examples/webhook-inbox files demonstrate durable inbox/outbox processing: commit the event ID and work record before acknowledging, reconcile out-of-order deliveries, and apply side effects idempotently. Unknown names and unmatched envelopes remain pending for review.

## PDF downloads and declared redirects

PDF results are buffered bytes. Set API_DOWNLOAD_PATH to choose the file written by the PDF example. Redirect results expose HTTP metadata and the optional Location without following it. Each recipe makes one SDK call.

### creditNotes.getPDF

```typescript
import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.creditNotes.getPDF(
  "cn_01ARZ3NDEKTSV4RRFFQ69G5FAV"
);
// Choose a destination path; PDF bytes must not be decoded as text.
const resultPath = process.env.API_DOWNLOAD_PATH ?? "download.pdf";
await (await import("node:fs/promises")).writeFile(resultPath, result.data);
console.log("Saved", result.data.byteLength, "bytes to", resultPath);
console.log(result.lastResponse.requestId);
```

### reportDownloads.get

```typescript
import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.reportDownloads.get(
  "rdl_01ARZ3NDEKTSV4RRFFQ69G5FAV"
);
// Location may be relative or use another origin. The SDK does not follow it.
// Validate the destination before a separate download; do not forward API credentials.
console.log(result.lastResponse.status, result.data.location ?? "No Location header");
console.log(result.lastResponse.requestId);
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

Integer counters such as version use number with a safe range of ±(2^53 − 1); values outside that range fail without rounding. Integers inside exact components (Money) remain exact strings (TypeScript `${bigint}`; inputs also accept bigint). Money amounts stay exact strings when their component is listed. Sum money amounts with `BigInt(a.amount) + BigInt(b.amount)`. Decimal fields retain exact numeric strings; ambiguous numeric inputs use ExactNumber. Plain numbers use finite native floating-point precision. Integer responses accept integral decimal/exponent tokens without rounding. Exact numeric enum membership compares mathematical values. Mutually dependent numeric alternatives are matched jointly with a limit of 256 combinations per value path; exceeding the limit fails validation. Date-time inputs accept strings or Date; native dates serialize to UTC without mutation and responses remain strings.

### Objects and models

Request enums are closed; response enums retain unknown strings. Shaped TypeScript objects have no implicit index signature. Response values preserve unknown fields and tagged variants; malformed known values fail decoding. Narrow unknown branches before access. Model.toJSON() returns a defensive copy; retain original ExactNumber inputs when editing ambiguous numeric values. Resource subpaths export scoped clients with the same methods.

## Custom helpers

Keep application helpers in custom/; regeneration preserves them. Multi-call helpers must expose partial completion.
