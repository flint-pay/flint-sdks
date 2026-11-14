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

Sends a Flint verification code to the customer's current email for linking guest purchases. A customer without an email fails with `ACTION_NOT_ALLOWED`. Set purpose to link_guest_purchases; email is the only channel and the default. Confirm the code before linking purchases. Read its current status with GET /v1/customer-verifications/{customer_verification_id}. To prove an email inside a checkout, use POST /v1/checkout-sessions/{checkout_session_id}/customer-verifications.

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

### customerVerifications.get

Returns one customer verification in any status. Status and supported_actions are computed when read. Flint deletes a verification 8 days after its code and proof expire; customer deletion also removes it.

`GET /v1/customer-verifications/{customer_verification_id}`

Signature: `get(string|Model $customer_verification_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_verification_id` | Required | string | Flint customer verification ID. |

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
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->customerVerifications->get('cver_01KEZF7C00E7S01991S7457CVK', [], new RequestOptions());
```

[Complete runnable example](../examples/customerVerifications-get.php)

### customerVerifications.list

Lists every status for the required customer_id. Status and supported_actions are computed when read. Flint deletes a verification 8 days after its code and proof expire; customer deletion also removes it. Default order: created_at descending, then customer_verification_id descending.

`GET /v1/customer-verifications`

Signature: `list(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string | Required exact customer ID. An unknown or inaccessible customer returns an empty page. pattern: `^cus_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |

#### Response

Returned payload: [CustomerVerificationListResponse](../models/CustomerVerificationListResponse.md#customerverificationlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 409 | ConflictError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->customerVerifications->list([
  'customer_id' => 'cus_01KEZF7C006X9JK6NZNA2SM9XD',
], new RequestOptions());
```

[Complete runnable example](../examples/customerVerifications-list.php)

