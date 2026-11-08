[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# onboarding

### onboarding.advance

Submits whatever the caller currently knows, re-evaluates onboarding, reconciles onboarding requirements, and returns the next step in the consolidated onboarding state machine. Send an empty JSON object when the current next_step only asks to refresh onboarding requirements. The credential selects the environment; the onboarding session token acts in the merchant's default sandbox. A partner install token can't send profile.email, and in live mode works only while its app's merchant_onboarding platform capability is active; otherwise it gets 409 ACTION_NOT_ALLOWED with the reason its platform status gives: platform_onboarding_required, platform_pending_review, platform_rejected, or platform_capability_inactive.

`POST /v1/onboarding/advance`

Signature: `advance(params?: OnboardingAdvanceParams, options?: RequestOptions<"merchant" | "onboarding">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Optional | [OnboardingAdvanceRequestInput](../models/OnboardingAdvanceRequest.md#onboardingadvancerequest) | The request body for: Advance onboarding flow. |

Body model: [OnboardingAdvanceRequestInput](../models/OnboardingAdvanceRequest.md#onboardingadvancerequest).

#### onboarding.advance body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `country` | Optional | string | ISO 3166-1 alpha-2 country code. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Values: `"US"`. |
| `profile` | Optional | [OnboardingProfileRequestInput](../models/OnboardingProfileRequest.md#onboardingprofilerequest) | Contact and website details to record for onboarding. Send only the fields to change. Profile changes return `409 ACTION_NOT_ALLOWED` with reason `managed_externally` while the account is being set up. Once the account is active, support contact and website details can change; changing the email address still returns this error. Contact and website details you submit for a merchant during onboarding. Send null to clear a field. |
| `requested_capabilities` | Optional | Array of string | Exact initial Flint capability set. Include accept_card_payments and receive_payouts together. Optionally include accept_ach_debit_payments, or omit the field to use the card and payout default set. minItems: `2`. maxItems: `3`. uniqueItems: `true`. Items values: `"accept_card_payments"`, `"receive_payouts"`, `"accept_ach_debit_payments"`. |

#### Response

Returned payload: [OnboardingState](../models/OnboardingState.md#onboardingstate).

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
| 502 | ServerError |
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

const result = await client.onboarding.advance(undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/onboarding-advance.mjs)

### onboarding.createAPIKey

Creates the first long-lived sandbox API key. The credential selects the environment; the onboarding session token acts in the merchant's default sandbox.

`POST /v1/onboarding/api-key`

Signature: `createAPIKey(params: OnboardingCreateAPIKeyParams, options?: RequestOptions<"onboarding">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [DeveloperInitialAPIKeyRequestInput](../models/DeveloperInitialAPIKeyRequest.md#developerinitialapikeyrequest) | The request body for: Create onboarding API key. |

Body model: [DeveloperInitialAPIKeyRequestInput](../models/DeveloperInitialAPIKeyRequest.md#developerinitialapikeyrequest).

#### onboarding.createAPIKey body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `name` | Required | string | minLength: `1`. maxLength: `100`. |
| `scopes` | Optional | Array of string | Items: minLength: `1`. |

#### Response

Returned payload: [APIKeyWithSecret](../models/APIKeyWithSecret.md#apikeywithsecret).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
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

Authentication modes: `onboarding`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.onboarding.createAPIKey({name: "First backend integration", scopes: ["commerce.orders.read", "commerce.orders.write", "customers.read", "customers.write"]}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/onboarding-createAPIKey.mjs)

### onboarding.getState

Returns the consolidated onboarding state machine, including the primary next step for agents or humans. This endpoint is read-only. The credential selects the environment; the onboarding session token acts in the merchant's default sandbox.

`GET /v1/onboarding/state`

Signature: `getState(params?: OnboardingGetStateParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "onboarding">>)`

#### Request fields

Field definitions: [shared fields](authContext.md#request-fields).

#### Response

Returned payload: [OnboardingState](../models/OnboardingState.md#onboardingstate).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `onboarding`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.onboarding.getState({}, {  });
```

[Complete runnable example](../examples/onboarding-getState.mjs)

### onboarding.start

Starts the consolidated onboarding flow by accepting a verification email for asynchronous delivery and returning a temporary verification token. Success does not confirm email delivery.

`POST /v1/onboarding/start`

Signature: `start(params: OnboardingStartParams, options?: RequestOptions<never>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [OnboardingStartRequestInput](../models/OnboardingStartRequest.md#onboardingstartrequest) | The request body for: Start onboarding flow. |

Body model: [OnboardingStartRequestInput](../models/OnboardingStartRequest.md#onboardingstartrequest).

#### onboarding.start body fields

Field definitions: [shared fields](../models/OnboardingStartRequest.md#onboardingstartrequest).

#### Response

Returned payload: [OnboardingStartResult](../models/OnboardingStartResult.md#onboardingstartresult).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
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

Authentication modes: none (anonymous). [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.onboarding.start({email: "owner@example.com", first_name: "Jane", last_name: "Doe"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/onboarding-start.mjs)

### onboarding.verifyEmail

Verifies the emailed code, provisions the Flint user and merchant if needed, and returns an onboarding session token. The token expires at onboarding_session_expires_at and cannot be refreshed. Verify the email again to get a new one. Read GET /v1/onboarding/state next.

`POST /v1/onboarding/verify-email`

Signature: `verifyEmail(params: OnboardingVerifyEmailParams, options?: RequestOptions<never>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [OnboardingVerifyEmailRequestInput](../models/OnboardingVerifyEmailRequest.md#onboardingverifyemailrequest) | The request body for: Verify onboarding email. |

Body model: [OnboardingVerifyEmailRequestInput](../models/OnboardingVerifyEmailRequest.md#onboardingverifyemailrequest).

#### onboarding.verifyEmail body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `merchant_id` | Optional | string | ID of the merchant this resource belongs to. minLength: `1`. |
| `verification_code` | Required | string | The code Flint emailed to the address you sent to `POST /v1/onboarding/start`. minLength: `1`. |
| `verification_token` | Required | string | The `verification_token` that `POST /v1/onboarding/start` returned. minLength: `1`. |

#### Response

Returned payload: [OnboardingVerifyEmailResult](../models/OnboardingVerifyEmailResult.md#onboardingverifyemailresult).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 403 | PermissionError |
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

Authentication modes: none (anonymous). [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.onboarding.verifyEmail({verification_code: "482193", verification_token: "example"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/onboarding-verifyEmail.mjs)

