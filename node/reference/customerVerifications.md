[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# customerVerifications

### customerVerifications.confirm

Confirms the Flint-sent code and returns a verification that can link guest purchases for its customer. A confirmed verification expires in 15 minutes and can be redeemed once.

`POST /v1/customer-verifications/{customer_verification_id}/confirm`

Signature: `confirm(customer_verification_id: InputValue<string>, params: CustomerVerificationsConfirmParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_verification_id` | Required | string | Flint customer verification ID. |
| `body` | Required | [ConfirmCustomerVerificationRequestInput](../models/ConfirmCustomerVerificationRequestInput.md#confirmcustomerverificationrequestinput) | The request body for: Confirm a customer email verification. |

Body model: [ConfirmCustomerVerificationRequestInput](../models/ConfirmCustomerVerificationRequestInput.md#confirmcustomerverificationrequestinput).

#### customerVerifications.confirm body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string | minLength: `1`. pattern: `^[0-9]{6}$`. |

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
| 410 | ApiError |
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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.customerVerifications.confirm("cver_01ARZ3NDEKTSV4RRFFQ69G5FAV", {code: "123456"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/customerVerifications-confirm.mjs)

### customerVerifications.create

Sends a Flint verification code to the customer's current email for linking guest purchases. A customer without an email returns 409 ACTION_NOT_ALLOWED. Set purpose to link_guest_purchases; email is the only channel and the default. Confirm the code before linking purchases. To prove an email inside a checkout, use POST /v1/checkout-sessions/{checkout_session_id}/customer-verifications.

`POST /v1/customer-verifications`

Signature: `create(params: CustomerVerificationsCreateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateCustomerVerificationRequestInput](../models/CreateCustomerVerificationRequest.md#createcustomerverificationrequest) | The request body for: Create a customer email verification. |

Body model: [CreateCustomerVerificationRequestInput](../models/CreateCustomerVerificationRequest.md#createcustomerverificationrequest).

#### customerVerifications.create body fields

Field definitions: [shared fields](../models/CreateCustomerVerificationRequest.md#createcustomerverificationrequest).

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
| 410 | ApiError |
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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.customerVerifications.create({customer_id: "cus_01ARZ3NDEKTSV4RRFFQ69G5FAV", purpose: "link_guest_purchases"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/customerVerifications-create.mjs)

