# Flint Public API runtime guide

Package 7.0.0; API 2026-09-07.

[Back to the quickstart](README.md) · [API index](REFERENCE.md) · [Models](MODELS.md)

## Client and request options

Import Client, ClientOptions, RequestOptions and SdkError from Flint; load your application's vendor/autoload.php. Use an explicit sandbox or local mock base URL for examples. HTTP requires allowInsecureHttp: true. No network request is made during client construction.

### ClientOptions

| Field | Type | Default | Meaning |
| --- | --- | --- | --- |
| baseUrl | string | https://api.withflintpay.com | API environment URL. Set explicitly for sandbox or local tests. |
| token | string, CredentialProvider or Closure | none | Legacy credential, or configured token shortcut only. |
| ambientCredentials | boolean | true | Enable configured default credential discovery, when supported. |
| allowedOrigins | list<string> | base URL origin | Allowlisted canonical destination origins. |
| allowInsecureHttp | boolean | false | Permit HTTP for deliberate local tests. |
| authMode | string | operation/client selection | Select a declared authentication mode. |
| credentials | credential map | none | Client: mode → scheme → credential. Request: scheme → credential. |
| timeoutMs | int | 10000 | Per-attempt timeout, including buffered body reads. |
| deadlineMs | int | 30000 | Overall duration across attempts and waits, not a timestamp. |
| maxAttempts | int | operation policy | Total attempts including the first; capped by the operation limit. |
| transport | Closure | cURL | Caller-owned transport; honor cancellation, disable redirects and retries. |
| diagnostics | Closure | none | Per-attempt metadata callback. Exceptions are ignored; no bodies or credentials. |
| redactFields | list<string> | [] | Additional sensitive field names for SDK inspection. |
| credentialCache | object (PSR-16) | null | Optional credential cache for configured discovery; protect as a credential store. |
| apiKey | string, CredentialProvider or Closure | none | Configured authentication shortcut; see Authentication. |
| checkoutToken | string, CredentialProvider or Closure | none | Configured authentication shortcut; see Authentication. |
| customerToken | string, CredentialProvider or Closure | none | Configured authentication shortcut; see Authentication. |
| invoiceToken | string, CredentialProvider or Closure | none | Configured authentication shortcut; see Authentication. |
| onboardingToken | string, CredentialProvider or Closure | none | Configured authentication shortcut; see Authentication. |

### RequestOptions

| Field | Type | Default | Meaning |
| --- | --- | --- | --- |
| authMode | string | inherit client | Select a declared authentication mode. |
| credentials | credential map | inherit client | Client: mode → scheme → credential. Request: scheme → credential. |
| timeoutMs | int | inherit client | Per-attempt timeout, including buffered body reads. |
| deadlineMs | int | inherit client | Overall duration across attempts and waits, not a timestamp. |
| maxAttempts | int | inherit client | Total attempts including the first; capped by the operation limit. |
| headers | array<string, string> | {} | Request-local headers; managed credential/version headers remain controlled. |
| idempotencyKey | string | operation policy | Saved action key; supported only on declared operations. |
| ifMatch | string | none | Declared conditional request header. |
| cancellation | Cancellation | none | Stop local work; remote work may continue. |
| maxPages | int | 1000 | Lazy pagination page cap. |
| maxItems | int | unlimited | Lazy pagination item cap. |
| streamIdleTimeoutMs | int | operation policy or 30000 | Maximum idle duration while consuming SSE. |
| streamLifetimeMs | int | unlimited | Optional total SSE lifetime. |
| client_request_id | string | none | Caller correlation: 1–128 visible ASCII characters, no spaces. Forwarded only when the operation declares its request-ID header. |
| apiKey | string, CredentialProvider or Closure | inherit client | Request-local authentication shortcut. |
| checkoutToken | string, CredentialProvider or Closure | inherit client | Request-local authentication shortcut. |
| customerToken | string, CredentialProvider or Closure | inherit client | Request-local authentication shortcut. |
| invoiceToken | string, CredentialProvider or Closure | inherit client | Request-local authentication shortcut. |
| onboardingToken | string, CredentialProvider or Closure | inherit client | Request-local authentication shortcut. |
| token | string, CredentialProvider or Closure | inherit client | Request-local authentication shortcut. |

```php
$result = $client->oauth->authorizePartnerInstall([
  'response_type' => 'code',
  'client_id' => 'example',
  'redirect_uri' => 'example',
  'mode' => 'test',
  'code_challenge' => 'example',
  'code_challenge_method' => 'S256',
  'state' => 'example',
], new RequestOptions(timeoutMs: 5000, deadlineMs: 15000, maxAttempts: 1));
```

## Calling convention

This package configures positional path arguments on selected operations. Their signatures list the argument order; params contain flat body/query/header fields. Pass request options as the last argument, as a RequestOptions instance. The resource reference shows each exact signature.

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

Credentials themselves are never shown in SDK diagnostics.

Here credential is a nonempty value loaded from your secret store:

```php
$client = new Client(new ClientOptions(
  baseUrl: $baseUrl,
  authMode: 'checkout',
  credentials: ['checkout' => ['CheckoutSessionBearer' => $credential]],
));
```

Credentials accept strings, CredentialProvider objects with getCredential(): Credential, or closures returning a string or Credential. A Credential holds a value and optional DateTimeInterface expiry.

Providers resolve on every request attempt; the application owns caching and expiry. A replay-safe HTTP 401 invalidates providers implementing invalidate() and retries once, adding at most one attempt beyond the ordinary budget, even with maxAttempts: 1. The idempotency key is preserved. String credentials and closures never trigger this refresh retry. Provider exceptions become authentication errors without retaining potentially sensitive causes.

Default credential discovery is lazy: explicit credentials, then configured API key/access token environment variables (both set is ambiguous_credentials), then configured workload identity. Set ambientCredentials: false to disable it. defaultCredentials() and workloadIdentityCredentials(options) return providers supporting token, token_file and github_actions sources and cached refresh.

## Responses and errors

Payload methods return the decoded body or configured payload path directly. WithResponse companions return SdkResponse with body, meta and raw without unwrapping. Each invocation makes its own request; choose one form per action. Result-mode methods return Result with data (the complete body), meta and raw. API envelopes remain inside that body. Pagination Pages and polling Wait follow the base return mode; their WithResponse companions expose the complete body and metadata. Items yields individual items.

Metadata uses array keys, and binary bodies are binary-safe strings. Raw JSON is buffered text and may contain sensitive data.

### Errors

```php
use Flint\Errors\NotFoundError;
/** @param callable(): mixed $request */
function handleSdkRequest(callable $request): void {
    try {
        $request(); // Pass a closure that calls a resource method.
    } catch (NotFoundError $error) {
        error_log($error->getMessage());
    }
}
```

## Error reference

Every class below extends `SdkError`. Subclasses live in the `Errors` namespace.

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
| errorCode | Provider or stable local reason; distinct from HTTP status. |
| details | Structured provider/runtime details when available. |
| meta['requestId'] | Server request ID for support and correlation; may be absent. |
| idempotencyKey | Resolved key; persist it with the action. |
| retryAfterMs | Valid server Retry-After, in milliseconds. |
| outcome | not_sent: no dispatch; response: an HTTP response; unknown: remote completion uncertain. |
| status | HTTP status, or null without a response. |
| retryAllowed | Whether the failure permits another replay-safe attempt. |
| raw | Original buffered body for explicit recovery; may contain sensitive data. |

An unknown outcome requires reconciliation using the original action and saved key before resubmission. An automatic key protects one SDK call only; persist an application key for recovery across calls.

### Provider error codes

See the [declared provider error-code values](ERRORS.md#provider-error-codes).

### Undeclared and invalid responses

Exact HTTP status declarations take precedence, followed by a declared `default`. If neither exists for an actual 2xx response, the SDK reuses the sole declared JSON 2xx response, including its response decoder. Metadata retains the actual status. Multiple JSON success declarations remain ambiguous, even when their schemas match; binary, streaming, empty and redirect responses are never inferred.

Required fields and value types remain enforced. Schema failures are non-retryable `protocol` errors with `outcome: response`; the top-level message includes codec diagnostics such as `response.entity.id: required field is missing`, and the original cause remains available. The server may already have completed the action. Buffered JSON response failures and payload-extraction errors retain `raw` for explicit recovery; raw bodies are omitted from ordinary error inspection and diagnostics.

Inside a catch block, a synthetic create response with a top-level string `id` can be recovered as below. Use the actual endpoint's ID path and reconcile its state before continuing. This parses an unvalidated body only to recover the ID; it does not restore the SDK's typed guarantees or justify resubmitting the mutation.

```php
if ($error instanceof SdkError && $error->kind === 'protocol' &&
    $error->status >= 200 && $error->status < 300 && $error->raw !== null) {
    try {
        $body = json_decode($error->raw, true, 512, JSON_THROW_ON_ERROR | JSON_BIGINT_AS_STRING);
    } catch (\JsonException) {
        throw $error;
    }
    $entityId = is_array($body) && is_string($body['id'] ?? null) ? $body['id'] : null;
    if ($entityId === null) throw $error;
    // Reconcile this entity ID with the provider; do not submit another create.
} else {
    throw $error;
}
```

## Retries and idempotency

Without a declared policy, GET/HEAD/OPTIONS allow three total attempts for transport failures and HTTP 408, 429, 500, 502, 503 and 504. Other methods send once. Explicit operation policies replace those defaults; maxAttempts caps total attempts including the first. Mutations with optional idempotency keys send once when no key is supplied. HTTP 412 never retries.

Backoff waits uniformly between half and all of baseDelayMs * 2^(attempt - 1), capped by maxDelayMs when declared. Retry-After is a minimum wait. Nonnegative decimal seconds or canonical GMT HTTP dates are accepted; malformed values are ignored. If the next wait exceeds the deadline, the last error is returned unchanged.

The response field `error.remediation.retry` controls body-driven retries for declared retry values: "same_request". A string signal overrides status and code rules; otherwise statuses apply.

### Idempotency

| Policy | Header | Retention | Scope |
| --- | --- | --- | --- |
| 1 | `Idempotency-Key` | At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request. | Authenticated context, environment, HTTP endpoint and caller key; the canonical request fingerprint includes target resource IDs and request parameters. |
| 2 | `Idempotency-Key` | As long as the command's effects exist. The key is the command's durable identity: save it before the first attempt and reuse it to retry or recover. Never reuse it for a new business intent. | Authenticated context, environment, HTTP endpoint and caller key; the canonical request fingerprint includes target resource IDs and request parameters. |

Only operations declaring idempotency accept idempotencyKey. Persist a key with the original input before the first attempt and reuse it for the same action. When automatic keys are enabled, the SDK creates one per call and reuses it across attempts; automatic keys do not span separate calls. Resolved keys are exposed on errors and response metadata, including not_sent failures after key resolution.

An outcome of unknown means remote completion is uncertain. Reconcile the action with the provider using the saved key before resubmitting. Cancellation and timeouts cannot undo remote work.


## Resume an action with its saved key

Use this only after reconciling the previous outcome and confirming the provider permits resubmission. Read the key and the original input from your saved action; keep both unchanged. The environment variable below stands in for your application's durable action record. Do not generate a new key when retrying that action. This example makes one request attempt.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$baseUrl = getenv('API_BASE_URL');
if ($baseUrl === false || $baseUrl === '') throw new \RuntimeException('Set API_BASE_URL to your sandbox or local mock URL');
$client = new Client(new ClientOptions(
  baseUrl: $baseUrl,
  allowInsecureHttp: in_array(parse_url($baseUrl, PHP_URL_HOST), ['localhost', '127.0.0.1'], true) && parse_url($baseUrl, PHP_URL_SCHEME) === 'http',
));
$idempotencyKey = getenv('API_IDEMPOTENCY_KEY');
if (!$idempotencyKey) throw new \RuntimeException('Set API_IDEMPOTENCY_KEY to the key saved with this action');
$result = $client->disputes->accept('example', [], new RequestOptions(idempotencyKey: $idempotencyKey, maxAttempts: 1));
echo $result->dispute_id . PHP_EOL;
echo $result->merchant_id . PHP_EOL;
$client->close();
```

## Pagination and polling

```php
foreach ($client->apiKeys->listItems([], new RequestOptions(maxItems: 100)) as $item) {
  // Process each item.
}
```

Pagination is lazy and defaults to at most 1000 pages. maxPages and maxItems cap work. Repeated continuations (including cursor cycles) and two consecutive empty pages still advertising a continuation raise protocol errors. An isolated or terminal empty page is valid. Iteration does not guarantee a stable snapshot or durable continuation. Each page gets a fresh deadline; processing yielded values does not consume it. Polling shares an overall deadline. Per-operation references list helper names and terminal states.

## Timeouts, streaming and cancellation

Timeout is per attempt, including buffered body consumption. Deadline covers attempts and retry waits for one call. Overall deadlines use DeadlineError with retryAllowed false. For SSE these limits bound setup; streamIdleTimeoutMs controls idle reads and streamLifetimeMs optionally caps lifetime. Malformed known events raise ProtocolError with code sse_invalid_event and details containing eventId and one-based position. Close streams or the client to release resources; breaking iteration also closes a stream. Resume cursors and reconnection belong to the application.

Use Cancellation for cooperative cancellation. Synchronous transports must honor cancellation while blocked. cURL checks it during progress and between waits.

## Webhooks and recovery

### JWT delivery verification

Use Webhooks::verifyDelivery or Client::verifyWebhookDelivery with the original raw body and your receiving endpoint IDs. The result adds signing_method: 'jwt' | 'hmac' to the existing verified result.

This package expects authorization: Bearer with algorithm ES256, exact typ flint-webhook+jwt, issuer from the configured API base URL origin without a trailing slash, and a matching endpoint audience. It checks iat/exp with a maximum 300-second lifetime and 60-second leeway, requires a jti that is not blank, and compares body_sha256 to the SHA-256 of the exact body in constant time before JSON parsing. The protected header must contain only alg, kid and typ, so token-supplied keys and key URLs (jku, x5u, jwk, x5c) and crit headers are rejected. Duplicate JSON members, a sub claim, a non-string aud and non-integer iat or exp are rejected; other claims are ignored.

```php
// $cache is your application's PSR-16 cache.
use Flint\Webhooks;
$verified = Webhooks::verifyDelivery($rawBody, $headers, [
    'endpoint_ids' => ['whep_example'],
    'base_url' => 'https://api.example.com',
    'cache' => $cache,
]);
// Persist the delivery and durable work before acknowledging it.
```

Options: endpoint_ids (string or list), secrets (string or list), jwks (keys array), base_url, now_seconds, cache (optional PSR-16), http_client (optional PSR-18), request_factory (PSR-17, required with http_client). PHP requires ext-openssl; PSR packages are optional Composer suggestions, checked only when supplied. Without http_client, verification uses the SDK transport. The client defaults base_url. At least one of endpoint IDs or secrets is required. Standalone calls with issuer baseUrl require base_url. Time overrides use Unix seconds and are intended for tests.

A bearer token plus endpoint IDs always selects JWT, with no HMAC fallback on failure. Otherwise, secrets and complete HMAC headers select HMAC. Missing signing headers produce webhook_missing_header. The synchronous Webhooks::verify remains HMAC-only.

Trusted keys come from the issuer plus /.well-known/jwks.json. Keys whose kid differs from the token's are ignored, whatever their type; the selected key must be an EC P-256 key with alg absent or ES256 and use absent or sig, else the token fails with webhook_invalid_token. A malformed fetched set or a repeated kid produces webhook_jwks_unavailable. Explicit jwks bypasses fetching entirely. The key cache shares in-flight requests per URL. Cache-Control max-age is clamped to 300..86400 seconds (900 when absent). Unknown kid refreshes are limited to once per minute per URL; failures can use the last successful set for up to 24 hours after fetching, retrying at most once a minute. Fetches have a 5-second timeout and a 256 KiB response cap. The key cache uses the cache option, else APCu when enabled, else a per-process static cache. Under PHP-FPM, pass cache or enable APCu so workers share keys, refresh limits and stale-key reuse. The cache is a trust store: anyone who can write to it can inject keys. APCu is shared by every pool under one PHP-FPM master, so hosts running mutually untrusted applications should pass their own cache. Single-flight is per process. PSR-18 has no portable timeout or redirect controls: configure injected clients for at most five seconds and no redirects. Fiber schedulers must resume waiting callers, which yield a monotonic deadline in milliseconds. Apache needs CGIPassAuth On, or an equivalent rewrite, to pass the Authorization header to PHP. Respond with 5xx for webhook_jwks_unavailable so the provider retries.

Use Flint\Webhooks::verify($rawBody, $headers, $secrets, $nowSeconds = null) to verify without client options, a base URL or API credentials. Client::verifyWebhook delegates to the same verifier. The static method keeps mixed arguments so invalid inputs produce SDK error subclasses. Call verifyWebhook($rawBody, $headers, $secrets, $nowSeconds = null) with original request bytes and `webhook-signature`, `webhook-timestamp`, `webhook-id`. This package uses standard-webhooks HMAC-SHA256 signing and a 300-second timestamp tolerance. Secrets must use the whsec_ prefix and canonical base64 encoding of exactly 32 key bytes. Pass one secret string or an array of active secrets during rotation. nowSeconds is an optional Unix time override in seconds for deterministic tests; normally omit it. Millisecond-scale values raise an input error explaining the conversion. PHP emits event classes for supported single object envelopes. Multi-variant or ambiguous event schemas verify and validate normally but return stdClass values (with arrays for JSON lists), even when known is true. Check the event name and payload fields before using these values; known does not guarantee a generated PHP class. 

### PSR-7

Load Composer's vendor/autoload.php in your application. Pass an unmodified request body and getHeaders() arrays directly:

```php
use Flint\Client;

function verifyWebhookRequest(Client $client, object $request, string|array $secrets): array
{
    return $client->verifyWebhook((string) $request->getBody(), $request->getHeaders(), $secrets);
}
```

For a native PHP handler, read php://input before parsing JSON:

```php
$rawBody = file_get_contents('php://input');
$verified = $client->verifyWebhook($rawBody, getallheaders(), $webhookSecret);
// For rotation, pass [$currentSecret, $previousSecret] instead.
if ($verified['known']) {
    $event = $verified['event'];
    // Persist and process the matched event idempotently.
} else {
    // Persist for review; do not assume a declared model or payload shape.
}
```

### Failures and recovery

SdkError uses errorCode for these stable reasons:

| Kind | Code | Action |
| --- | --- | --- |
| validation | webhook_invalid_input | Supply original bytes and supported header/time values. |
| validation | webhook_invalid_secret | Supply at least one correctly formatted nonempty secret. |
| authentication | webhook_missing_header | Forward all configured signing headers. |
| authentication | webhook_invalid_timestamp | Supply one integer timestamp in seconds. |
| authentication | webhook_timestamp_out_of_tolerance | Check the clock and delivery age. |
| authentication | webhook_invalid_signature | Check the secret and original bytes. |
| authentication | webhook_invalid_token | Reject malformed JWTs, wrong algorithm/type/issuer, signatures, or a kid naming an unusable key. |
| authentication | webhook_invalid_audience | Check receiving endpoint IDs. |
| authentication | webhook_token_expired | Check token timestamps, lifetime, leeway and the server clock. |
| authentication | webhook_body_mismatch | Preserve the exact original bytes. |
| authentication | webhook_unknown_key | The trusted set has no matching key. |
| transport | webhook_jwks_unavailable | Keys could not be fetched, or the fetched set is malformed or repeats the token's kid. Answer 5xx so the provider retries. |
| protocol | webhook_invalid_json | The authenticated body is not valid UTF-8 JSON. |

```php
try {
    $verified = $client->verifyWebhook($rawBody, $headers, $webhookSecret);
} catch (\Flint\SdkError $error) {
    // Record only $error->kind and $error->errorCode; omit bodies and secrets.
    // webhook_timestamp_out_of_tolerance: check the clock and delivery age.
    // webhook_invalid_signature: check the secret and original request bytes.
    throw $error;
}
```

Never verify json_encode($parsedBody): verification authenticates the original bytes, including whitespace and numeric spelling. Preserve raw request bytes before parsing. For HMAC, repeated signature values are supported; timestamp and ID headers must each contain a single value.

known is true only for a registered event name whose payload matches a declared envelope. Authenticated unknown names return known: false with reason: unknown_event; declared names with unmatched envelopes use reason: unmatched_envelope. Known deliveries have no reason; nested response types retain their documented uncertainty. Malformed declared payloads produce a protocol error.

Verification does not deduplicate deliveries. The optional examples/webhook-inbox files demonstrate durable inbox/outbox processing: commit the event ID and work record before acknowledging, reconcile out-of-order deliveries, and apply side effects idempotently. Unknown names and unmatched envelopes remain pending for review.

## PDF downloads and declared redirects

PDF results are buffered bytes. Set API_DOWNLOAD_PATH to choose the file written by the PDF example. Redirect results expose HTTP metadata and the optional Location without following it. Each recipe makes one SDK call.

### creditNotes.getPDF

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$baseUrl = getenv('API_BASE_URL');
if ($baseUrl === false || $baseUrl === '') throw new \RuntimeException('Set API_BASE_URL to your sandbox or local mock URL');
$client = new Client(new ClientOptions(
  baseUrl: $baseUrl,
  allowInsecureHttp: in_array(parse_url($baseUrl, PHP_URL_HOST), ['localhost', '127.0.0.1'], true) && parse_url($baseUrl, PHP_URL_SCHEME) === 'http',
));
$result = $client->creditNotes->getPDF('example');
// Choose a destination path; PHP strings preserve every PDF byte.
$resultPath = getenv('API_DOWNLOAD_PATH') ?: 'download.pdf';
if (file_put_contents($resultPath, $result->data) === false) throw new \RuntimeException('Could not save PDF');
echo 'Saved ' . strlen($result->data) . ' bytes to ' . $resultPath . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
```

### oauth.authorizePartnerInstall

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$baseUrl = getenv('API_BASE_URL');
if ($baseUrl === false || $baseUrl === '') throw new \RuntimeException('Set API_BASE_URL to your sandbox or local mock URL');
$client = new Client(new ClientOptions(
  baseUrl: $baseUrl,
  allowInsecureHttp: in_array(parse_url($baseUrl, PHP_URL_HOST), ['localhost', '127.0.0.1'], true) && parse_url($baseUrl, PHP_URL_SCHEME) === 'http',
));
$result = $client->oauth->authorizePartnerInstall([
  'response_type' => 'code',
  'client_id' => 'example',
  'redirect_uri' => 'example',
  'mode' => 'test',
  'code_challenge' => 'example',
  'code_challenge_method' => 'S256',
  'state' => 'example',
]);
// Location may be relative or use another origin. The SDK does not follow it.
// Validate the destination before a separate download; do not forward API credentials.
echo $result->meta['status'] . ' ' . ($result->data->location ?? 'No Location header') . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
```

## Destinations and API versions

baseUrl must omit a path already present at the start of an operation path. allowedOrigins applies to all destinations, including pagination; use canonical origin strings with default ports omitted. HTTPS is required unless allowInsecureHttp is enabled for local tests. Declared 302/307 responses return Location metadata without following redirects; undeclared redirects fail. Credential and pinned API-version headers are controlled by client configuration. Request correlation is independent of the server's request ID.

## Client lifecycle and transports

The client owns a reusable cURL handle; call close() when finished. Share it sequentially within one execution context. Injected transports receive {url, method, headers, body, timeoutMs, cancellation} and return {status, headers, body}; they must disable redirects/retries and honor cancellation/timeouts. Streaming transports return a ByteStream in the stream field, with read(): ?string and close(): void.

Injected transports are caller-owned and privileged: they see credentials and bodies. Here baseUrl selects your environment:

```php
$client = new Client(new ClientOptions(
  baseUrl: $baseUrl,
  transport: static function (array $request): array {
    // Delegate to your HTTP adapter; it must honor timeoutMs/cancellation.
    return applicationHttpAdapter($request);
  },
  diagnostics: static function (array $event): void {
    error_log((string) ($event['operation'] ?? ''));
  },
));
```

## Diagnostics and sensitive data

No SDK telemetry is sent. Diagnostics receive per-attempt operation, request ID, status, timing, attempt count and error kind only. Hook failures are ignored. Ordinary error inspection omits raw bodies, response headers, URLs and unsanitized causes; explicit raw access requires application redaction. redactFields adds sensitive model field names.

## Input and response values

### Numbers and dates

int64/uint64 responses are integer strings. Integer inputs use decimal digits with an optional minus sign, never fractional or exponent spellings. Decimal fields retain exact numeric strings; ambiguous numeric inputs use ExactNumber. Plain numbers use finite native floating-point precision. Integer responses accept integral decimal/exponent tokens without rounding. Exact numeric enum membership compares mathematical values. Mutually dependent numeric alternatives are matched jointly with a limit of 256 combinations per value path; exceeding the limit fails validation. Date-time inputs accept strings or DateTimeInterface; native dates serialize to UTC without mutation and responses remain strings.

### Inputs and models

Methods accept associative arrays or generated input classes. Omit a key to omit a field; explicit null is permitted only where declared. Response getters hydrate nested entities and lists. Omitted optional response fields return null; has() distinguishes omission from present-null. Missing required fields fail decoding with ProtocolError; omitted input fields throw on access. Properties are read-only. toArray()/jsonSerialize() preserve normalized wire shapes; toInputArray()/toInputValue() support rebuilding inputs. Accessors memoize hydrated children; untyped objects remain defensive copies. Getters normalize wire names, such as request_id → getRequestId(). Known verified webhook events use generated event classes.

## Custom helpers

Keep application helpers in custom/; regeneration preserves them. Multi-call helpers must expose partial completion.
