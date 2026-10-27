[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# merchantAccountSessions

### merchantAccountSessions.create

Creates an embedded browser handoff for one or more allowlisted account components. The credential selects the environment; the onboarding session token acts in the merchant's default sandbox. A same-key, same-input retry replays the encrypted original result for 24 hours, including its original credentials and expiries. Replay may return an expired credential. Use a new key for a new launch or refresh.

`POST /v1/merchant-account-sessions`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [MerchantAccountSessionCreateRequestInput](../models/MerchantAccountSessionCreateRequestInput.md#merchantaccountsessioncreaterequestinput) | Creates an embedded account session for a non-empty unique set of Flint components. At most one component may use onboarding policy fields. |

Body model: [MerchantAccountSessionCreateRequestInput](../models/MerchantAccountSessionCreateRequestInput.md#merchantaccountsessioncreaterequestinput).

#### merchantAccountSessions.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `collection_strategy` | Optional | string | Values: `"upfront"`, `"incremental"`. |
| `components` | Required | Array of string | minItems: `1`. maxItems: `6`. uniqueItems: `true`. Items values: `"account_onboarding"`, `"account_management"`, `"payouts"`, `"balances"`, `"tax_documents"`, `"notification_banner"`. |
| `future_requirements` | Optional | string | Values: `"omit"`, `"include"`. |
| `targeted_requirements` | Optional | Array of string | Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. Items values: [32 declared values](../models/MerchantAccountSessionCreateRequestInput.md#merchantaccountsessioncreaterequestinput-targeted_requirements--values). |

#### Response

Returned payload: [MerchantAccountSession](../models/MerchantAccountSession.md#merchantaccountsession).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 415 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `onboarding`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->merchantAccountSessions->create([
  'components' => [
    'account_onboarding',
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/merchantAccountSessions-create.php)

### merchantAccountSessions.refresh

Creates a fresh provider session from a signed launch token after rechecking the authenticated principal, merchant environment, account controller, and component grant. An onboarding session can refresh only sandbox launch tokens created by the same user with an onboarding session. The sandbox is pinned by the launch token, which is the merchant's default sandbox for an onboarding session. Live onboarding requires a live API key or live CLI login, and refresh requires the same credential that created the launch token. A same-key, same-input retry replays the encrypted original result for 24 hours, including its original credentials and expiries. Replay may return an expired credential. Use a new key for a new launch or refresh.

`POST /v1/merchant-account-session-refreshes`

Signature: `refresh(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [MerchantAccountSessionRefreshRequestInput](../models/MerchantAccountSessionRefreshRequestInput.md#merchantaccountsessionrefreshrequestinput) | Refreshes a merchant account session from its signed launch token. No create fields are accepted. |

Body model: [MerchantAccountSessionRefreshRequestInput](../models/MerchantAccountSessionRefreshRequestInput.md#merchantaccountsessionrefreshrequestinput).

#### merchantAccountSessions.refresh body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `launch_token` | Required | string | minLength: `1`. |

#### Response

Returned payload: [MerchantAccountSession](../models/MerchantAccountSession.md#merchantaccountsession).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 415 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `refreshWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `onboarding`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->merchantAccountSessions->refresh([
  'launch_token' => 'example',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/merchantAccountSessions-refresh.php)

