[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# merchantAccountSessions

### merchantAccountSessions.create

Creates an embedded browser handoff for one or more allowlisted account components. An onboarding session is limited to the merchant's default sandbox unless sandbox_id in the JSON body names another sandbox of the same merchant. Live onboarding requires a live API key. A completed retry with the same Idempotency-Key creates a fresh launch session instead of replaying a prior client secret.

`POST /v1/merchant-account-sessions`

Signature:

```typescript
create(params: (InputValue<MerchantAccountSessionCreateRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant" | "merchantKey" | "onboarding">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [MerchantAccountSessionCreateRequestInput](../models/MerchantAccountSessionCreateRequest.md#merchantaccountsessioncreaterequest) | Creates an embedded account session for a non-empty unique set of Flint components. At most one component may use onboarding policy fields. |

Body model: [MerchantAccountSessionCreateRequestInput](../models/MerchantAccountSessionCreateRequest.md#merchantaccountsessioncreaterequest).

#### merchantAccountSessions.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `collection_strategy` | Optional | string | Values: `"upfront"`, `"incremental"`. |
| `components` | Required | Array of string | minItems: `1`. maxItems: `6`. uniqueItems: `true`. Items values: `"account_onboarding"`, `"account_management"`, `"payouts"`, `"balances"`, `"tax_documents"`, `"notification_banner"`. |
| `future_requirements` | Optional | string | Values: `"omit"`, `"include"`. |
| `sandbox_id` | Optional | string | minLength: `1`. |
| `targeted_requirements` | Optional | Array of string | Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. Items values: [32 declared values](../models/MerchantAccountSessionCreateRequest.md#merchantaccountsessioncreaterequest-targeted_requirements--values). |

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `merchantKey`, `onboarding`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.merchantAccountSessions.create({components: ["account_onboarding"]}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/merchantAccountSessions-create.mjs)

### merchantAccountSessions.refresh

Creates a fresh provider session from a signed launch token after rechecking the authenticated principal, merchant environment, account controller, and component grant. An onboarding session can refresh only sandbox launch tokens created by the same user with an onboarding session. The sandbox is pinned by the launch token, using the merchant's default sandbox unless sandbox_id named another sandbox of the same merchant at creation. Live onboarding requires a live API key, and refresh requires the same API key that created the launch token. A completed retry with the same Idempotency-Key creates a fresh launch session instead of replaying a prior client secret.

`POST /v1/merchant-account-sessions/refresh`

Signature:

```typescript
refresh(params: (InputValue<MerchantAccountSessionRefreshRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant" | "merchantKey" | "onboarding">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [MerchantAccountSessionRefreshRequestInput](../models/MerchantAccountSessionRefreshRequest.md#merchantaccountsessionrefreshrequest) | Refreshes a merchant account session from its signed launch token. No create fields are accepted. |

Body model: [MerchantAccountSessionRefreshRequestInput](../models/MerchantAccountSessionRefreshRequest.md#merchantaccountsessionrefreshrequest).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `refreshWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `merchantKey`, `onboarding`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.merchantAccountSessions.refresh({launch_token: "example"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/merchantAccountSessions-refresh.mjs)

