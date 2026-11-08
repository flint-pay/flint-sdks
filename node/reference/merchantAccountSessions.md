[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# merchantAccountSessions

### merchantAccountSessions.create

Creates an embedded browser handoff for one or more allowlisted account components. The credential selects the environment; the onboarding session token acts in the merchant's default sandbox. A partner install token works in live mode only while its app's merchant_onboarding platform capability is active; otherwise it gets 409 ACTION_NOT_ALLOWED with the reason its platform status gives: platform_onboarding_required, platform_pending_review, platform_rejected, or platform_capability_inactive. A same-key, same-input retry replays the encrypted original result for 24 hours, including its original credentials and expiries. Replay may return an expired credential. Use a new key for a new launch or refresh.

`POST /v1/merchant-account-sessions`

Signature: `create(params: MerchantAccountSessionsCreateParams, options?: RequestOptions<"merchant" | "onboarding">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [MerchantAccountSessionCreateRequestInput](../models/MerchantAccountSessionCreateRequest.md#merchantaccountsessioncreaterequest) | Creates an embedded account session for a non-empty unique set of Flint components. At most one component may use onboarding policy fields. |

Body model: [MerchantAccountSessionCreateRequestInput](../models/MerchantAccountSessionCreateRequest.md#merchantaccountsessioncreaterequest).

#### merchantAccountSessions.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `collection_strategy` | Optional | string | Which requirements the session collects. If omitted, `incremental` for an account that hasn't finished onboarding, otherwise `upfront`. Only `account_onboarding` and `account_management` take it. Values: `"upfront"`, `"incremental"`. |
| `components` | Required | Array of string | The embedded components the session opens, such as `account_onboarding`. Send each component once. A partner app install token can open only `account_onboarding` and `notification_banner`; another component returns `400 INVALID_REQUEST` with detail `NOT_ALLOWED`. With an API key or CLI login, `payments` also requires `payments.payment_intents.read` and `payments.disputes.write`; without them the request returns `403 INSUFFICIENT_SCOPE`. minItems: `1`. maxItems: `7`. uniqueItems: `true`. Items values: `"account_onboarding"`, `"account_management"`, `"payouts"`, `"balances"`, `"tax_documents"`, `"notification_banner"`, `"payments"`. |
| `future_requirements` | Optional | string | Whether the session also collects requirements that will apply later. If omitted, `omit` while onboarding isn't finished or while something is due, otherwise `include`. Only `account_onboarding` and `account_management` take it. Values: `"omit"`, `"include"`. |
| `targeted_requirements` | Optional | Array of string | Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. At most 100 codes, each up to 255 UTF-8 bytes after trimming surrounding whitespace. Only `account_onboarding` takes them. maxItems: `100`. Items values: [32 declared values](../models/MerchantAccountSessionCreateRequest.md#merchantaccountsessioncreaterequest-targeted_requirements--values). |

#### Response

Returned payload: [MerchantAccountSession](../models/MerchantAccountSession.md#merchantaccountsession).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 413 | ApiError |
| 415 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `onboarding`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.merchantAccountSessions.create({collection_strategy: "upfront", components: ["account_onboarding"], future_requirements: "include"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/merchantAccountSessions-create.mjs)

### merchantAccountSessions.refresh

Creates a fresh provider session from a signed launch token after rechecking the authenticated principal, merchant environment, account controller, and component grant. An onboarding session can refresh only sandbox launch tokens created by the same user with an onboarding session. The sandbox is pinned by the launch token, which is the merchant's default sandbox for an onboarding session. Live onboarding requires a live API key or live CLI login. A partner install token works in live mode only while its app's merchant_onboarding platform capability is active; otherwise it gets 409 ACTION_NOT_ALLOWED with the reason its platform status gives: platform_onboarding_required, platform_pending_review, platform_rejected, or platform_capability_inactive. Refresh requires the same credential that created the launch token. For an install token, that is any access token for the same environment grant and consent; revoking the install or grant, or authorizing again, ends the launch token. A same-key, same-input retry replays the encrypted original result for 24 hours, including its original credentials and expiries. Replay may return an expired credential. Use a new key for a new launch or refresh.

`POST /v1/merchant-account-session-refreshes`

Signature: `refresh(params: MerchantAccountSessionsRefreshParams, options?: RequestOptions<"merchant" | "onboarding">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [MerchantAccountSessionRefreshRequestInput](../models/MerchantAccountSessionRefreshRequest.md#merchantaccountsessionrefreshrequest) | Refreshes a merchant account session from its signed launch token. No create fields are accepted. |

Body model: [MerchantAccountSessionRefreshRequestInput](../models/MerchantAccountSessionRefreshRequest.md#merchantaccountsessionrefreshrequest).

#### merchantAccountSessions.refresh body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `launch_token` | Required | string | The `launch_token` of the session to refresh. The response carries a new token to use for the next refresh. minLength: `1`. |

#### Response

Returned payload: [MerchantAccountSession](../models/MerchantAccountSession.md#merchantaccountsession).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 413 | ApiError |
| 415 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `onboarding`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.merchantAccountSessions.refresh({launch_token: "aslaunch_v1.example"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/merchantAccountSessions-refresh.mjs)

