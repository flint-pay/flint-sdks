[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# customerVerifications

### customerVerifications.confirm

Confirms the Flint-sent code and returns a verification that can link guest purchases for its customer. A confirmed verification expires in 15 minutes and can be redeemed once.

`POST /v1/customer-verifications/{customer_verification_id}/confirm`

Signature: `confirm(string|Model $customer_verification_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_verification_id` | Required | string | Flint customer verification ID. |
| `body` | Required | [ConfirmCustomerVerificationRequestInput](../models/ConfirmCustomerVerificationRequestInput.md#confirmcustomerverificationrequestinput) | The request body for: Confirm a customer email verification. |

Body model: [ConfirmCustomerVerificationRequestInput](../models/ConfirmCustomerVerificationRequestInput.md#confirmcustomerverificationrequestinput).

#### customerVerifications.confirm body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string | The six-digit code Flint sent to the customer's email. minLength: `1`. pattern: `^[0-9]{6}$`. |

#### Response

Returned payload: [CustomerVerification](../models/CustomerVerification.md#customerverification).

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

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->customerVerifications->confirm('cver_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'code' => '123456',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/customerVerifications-confirm.php)

### customerVerifications.create

Sends a Flint verification code to the customer's current email for linking guest purchases. A customer without an email fails with `ACTION_NOT_ALLOWED`. Set purpose to link_guest_purchases; email is the only channel and the default. Confirm the code before linking purchases. To prove an email inside a checkout, use POST /v1/checkout-sessions/{checkout_session_id}/customer-verifications.

`POST /v1/customer-verifications`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateCustomerVerificationRequestInput](../models/CreateCustomerVerificationRequestInput.md#createcustomerverificationrequestinput) | The request body for: Create a customer email verification. |

Body model: [CreateCustomerVerificationRequestInput](../models/CreateCustomerVerificationRequestInput.md#createcustomerverificationrequestinput).

#### customerVerifications.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `channel` | Optional | string | Defaults to email when omitted. Explicit null and an empty value are not accepted. Default: `"email"`. Values: `"email"`. |
| `customer_id` | Required | string | ID of the customer whose email to verify. The code goes to this customer's current email. minLength: `1`. |
| `purpose` | Required | string | What the verification is for. It can only be used for that purpose. Values: `"link_guest_purchases"`. |

#### Response

Returned payload: [CustomerVerification](../models/CustomerVerification.md#customerverification).

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

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->customerVerifications->create([
  'channel' => 'email',
  'customer_id' => 'cus_01KEZF7C003ACYXT6Q5EQZ78EE',
  'purpose' => 'link_guest_purchases',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/customerVerifications-create.php)

