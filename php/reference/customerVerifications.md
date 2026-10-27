[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# customerVerifications

### customerVerifications.confirm

Confirms the Flint-sent code and returns a verification that can link guest purchases for its customer. A confirmed verification expires in 15 minutes and can be redeemed once.

`POST /v1/customer-verifications/{customer_verification_id}/confirm`

Signature: `confirm(string|Model $customer_verification_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_verification_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [ConfirmCustomerVerificationRequestInput](../models/ConfirmCustomerVerificationRequestInput.md#confirmcustomerverificationrequestinput) | The request body for: Confirm a customer email verification. |

Body model: [ConfirmCustomerVerificationRequestInput](../models/ConfirmCustomerVerificationRequestInput.md#confirmcustomerverificationrequestinput).

#### customerVerifications.confirm body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string | minLength: `1`. pattern: `^[0-9]{6}$`. |

#### Response

Returned payload: [CustomerVerification](../models/CustomerVerificationInput.md#customerverificationinput).

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

Complete body and metadata: `confirmWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->customerVerifications->confirm('example', [
  'code' => '123456',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/customerVerifications-confirm.php)

### customerVerifications.create

Sends a Flint verification code to the customer's current email for linking guest purchases. A customer without an email returns 409 ACTION_NOT_ALLOWED. Set purpose to link_guest_purchases; email is the only channel and the default. Confirm the code before linking purchases. To prove an email inside a checkout, use POST /v1/checkout-sessions/{checkout_session_id}/customer-verifications.

`POST /v1/customer-verifications`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateCustomerVerificationRequestInput](../models/CreateCustomerVerificationRequestInput.md#createcustomerverificationrequestinput) | The request body for: Create a customer email verification. |

Body model: [CreateCustomerVerificationRequestInput](../models/CreateCustomerVerificationRequestInput.md#createcustomerverificationrequestinput).

#### customerVerifications.create body fields

Field definitions: [shared fields](../models/CreateCustomerVerificationRequestInput.md#createcustomerverificationrequestinput).

#### Response

Returned payload: [CustomerVerification](../models/CustomerVerificationInput.md#customerverificationinput).

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

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->customerVerifications->create([
  'customer_id' => 'example',
  'purpose' => 'link_guest_purchases',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/customerVerifications-create.php)

