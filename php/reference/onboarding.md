[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# onboarding

### onboarding.advance

Submits whatever the caller currently knows, re-evaluates onboarding, reconciles onboarding requirements, and returns the next step in the consolidated onboarding state machine. Send an empty JSON object when the current next_step only asks to refresh onboarding requirements. The credential selects the environment; the onboarding session token acts in the merchant's default sandbox.

`POST /v1/onboarding/advance`

Signature: `advance(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [OnboardingAdvanceRequestInput](../models/OnboardingAdvanceRequestInput.md#onboardingadvancerequestinput) | The request body for: Advance onboarding flow. |

Body model: [OnboardingAdvanceRequestInput](../models/OnboardingAdvanceRequestInput.md#onboardingadvancerequestinput).

#### onboarding.advance body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `country` | Optional | string | ISO 3166-1 alpha-2 country code. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Values: `"US"`. |
| `profile` | Optional | [OnboardingProfileRequestInput](../models/OnboardingProfileRequestInput.md#onboardingprofilerequestinput) | Contact and website details you submit for a merchant during onboarding. Send null to clear a field. |
| `requested_capabilities` | Optional | Array of string | Exact initial Flint capability set. Include accept_card_payments and receive_payouts together. Optionally include accept_ach_debit_payments, or omit the field to use the card and payout default set. minItems: `2`. maxItems: `3`. uniqueItems: `true`. Items values: `"accept_card_payments"`, `"receive_payouts"`, `"accept_ach_debit_payments"`. |

#### Response

Returned payload: [OnboardingState](../models/OnboardingState.md#onboardingstate).

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
| 502 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `advanceWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `onboarding`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->onboarding->advance([], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/onboarding-advance.php)

### onboarding.createAPIKey

Creates the first long-lived sandbox API key. The credential selects the environment; the onboarding session token acts in the merchant's default sandbox.

`POST /v1/onboarding/api-key`

Signature: `createAPIKey(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [DeveloperInitialAPIKeyRequestInput](../models/DeveloperInitialAPIKeyRequestInput.md#developerinitialapikeyrequestinput) | The request body for: Create onboarding API key. |

Body model: [DeveloperInitialAPIKeyRequestInput](../models/DeveloperInitialAPIKeyRequestInput.md#developerinitialapikeyrequestinput).

#### onboarding.createAPIKey body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `name` | Required | string | minLength: `1`. maxLength: `100`. |
| `scopes` | Optional | Array of string | Items: minLength: `1`. |

#### Response

Returned payload: [APIKeyWithSecret](../models/APIKeyWithSecret.md#apikeywithsecret).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
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

Complete body and metadata: `createAPIKeyWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `onboarding`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->onboarding->createAPIKey([
  'name' => 'example',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/onboarding-createAPIKey.php)

### onboarding.getState

Returns the consolidated onboarding state machine, including the primary next step for agents or humans. This endpoint is read-only. The credential selects the environment; the onboarding session token acts in the merchant's default sandbox.

`GET /v1/onboarding/state`

Signature: `getState(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

No request fields.

#### Response

Returned payload: [OnboardingState](../models/OnboardingState.md#onboardingstate).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getStateWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `onboarding`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->onboarding->getState([], new RequestOptions());
```

[Complete runnable example](../examples/onboarding-getState.php)

### onboarding.startFlow

Starts the consolidated onboarding flow by emailing a short-lived verification code and returning a temporary verification token.

`POST /v1/onboarding/start`

Signature: `startFlow(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [OnboardingStartRequestInput](../models/OnboardingStartRequestInput.md#onboardingstartrequestinput) | The request body for: Start onboarding flow. |

Body model: [OnboardingStartRequestInput](../models/OnboardingStartRequestInput.md#onboardingstartrequestinput).

#### onboarding.startFlow body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `email` | Required | string | minLength: `1`. |
| `first_name` | Required | string | minLength: `1`. |
| `last_name` | Required | string | minLength: `1`. |

#### Response

Returned payload: [OnboardingStartResult](../models/OnboardingStartResultInput.md#onboardingstartresultinput).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
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

Complete body and metadata: `startFlowWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: none (anonymous). [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->onboarding->startFlow([
  'email' => 'example',
  'first_name' => 'example',
  'last_name' => 'example',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/onboarding-startFlow.php)

### onboarding.verifyEmailCode

Verifies the emailed code, provisions the Flint user and merchant if needed, and returns an onboarding session token. The token expires at onboarding_session_expires_at and cannot be refreshed. Verify the email again to get a new one. Read GET /v1/onboarding/state next.

`POST /v1/onboarding/verify-email`

Signature: `verifyEmailCode(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [OnboardingVerifyEmailRequestInput](../models/OnboardingVerifyEmailRequestInput.md#onboardingverifyemailrequestinput) | The request body for: Verify onboarding email. |

Body model: [OnboardingVerifyEmailRequestInput](../models/OnboardingVerifyEmailRequestInput.md#onboardingverifyemailrequestinput).

#### onboarding.verifyEmailCode body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `merchant_id` | Optional | string | minLength: `1`. |
| `verification_code` | Required | string | minLength: `1`. |
| `verification_token` | Required | string | minLength: `1`. |

#### Response

Returned payload: [OnboardingVerifyEmailResult](../models/OnboardingVerifyEmailResult.md#onboardingverifyemailresult).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 403 | AuthenticationError | authentication |
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

Complete body and metadata: `verifyEmailCodeWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: none (anonymous). [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->onboarding->verifyEmailCode([
  'verification_code' => 'example',
  'verification_token' => 'example',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/onboarding-verifyEmailCode.php)

