[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# paymentMethods

### paymentMethods.get

Returns a single payment method by ID.

`GET /v1/payment-methods/{payment_method_id}`

Signature:

```typescript
get(payment_method_id: InputValue<string>,
 params?: {
  "expand"?: InputValue<Array<"customer">>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_method_id` | Required | string |  |
| `expand` | Optional | Array of string | Items values: `"customer"`. |

#### Response

Returned payload: [PaymentMethod](../models/PaymentMethod.md#paymentmethod).

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

Complete body and metadata: `getWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `checkout`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.paymentMethods.get("example", {}, {  });
```

[Complete runnable example](../examples/paymentMethods-get.mjs)

### paymentMethods.list

Lists payment methods in every status except archived, newest first. Filter by status=active for the cards you can charge. Optionally filter to a customer. Filter by usage off_session to list the payment methods a subscription, automatic invoice, or default payment method can use.

`GET /v1/payment-methods`

Signature:

```typescript
list(params?: {
  "customer_id"?: InputValue<string>;
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "type"?: InputValue<Array<"card">>;
  "status"?: InputValue<Array<"active" | "pending" | "expired" | "archived" | "failed">>;
  "usage"?: InputValue<Array<"on_session" | "off_session">>;
  "created_after"?: InputValue<string | globalThis.Date>;
  "created_before"?: InputValue<string | globalThis.Date>;
  "expand"?: InputValue<Array<"customer">>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Optional | string |  |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `type` | Optional | Array of string | minItems: `1`. Items values: `"card"`. |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"active"`, `"pending"`, `"expired"`, `"archived"`, `"failed"`. |
| `usage` | Optional | Array of string | minItems: `1`. Items values: `"on_session"`, `"off_session"`. |
| `created_after` | Optional | string | Format: `date-time`. |
| `created_before` | Optional | string | Format: `date-time`. |
| `expand` | Optional | Array of string | Items values: `"customer"`. |

#### Response

Returned payload: [PaymentMethodListResponse](../models/PaymentMethodListResponse.md#paymentmethodlistresponse).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `checkout`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`, `listPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.paymentMethods.list({}, {  });
```

[Complete runnable example](../examples/paymentMethods-list.mjs)

### paymentMethods.remove

Deletes a saved payment method so it can no longer be used for future payments. Returns the payment method with status archived, including when it was already archived.

`DELETE /v1/payment-methods/{payment_method_id}`

Signature: `remove(payment_method_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string> }, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_method_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [PaymentMethod](../models/PaymentMethod.md#paymentmethod).

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
| 502 | ServerError | server |
| 503 | ServerError | server |
| 504 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `removeWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.paymentMethods.remove("example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/paymentMethods-remove.mjs)

### paymentMethods.save

Initiates saving a payment method and returns the client setup payload needed to complete setup on the frontend.

`POST /v1/payment-methods`

Signature: `save(params: (InputValue<SavePaymentMethodRequestInput>) & { "Idempotency-Key"?: InputValue<string> }, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [SavePaymentMethodRequestInput](../models/SavePaymentMethodRequest.md#savepaymentmethodrequest) | The request body for: Create a payment method. |

Body model: [SavePaymentMethodRequestInput](../models/SavePaymentMethodRequest.md#savepaymentmethodrequest).

#### paymentMethods.save body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string | minLength: `1`. |
| `type` | Optional | string | Values: `"card"`. |

#### Response

Returned payload: [PaymentMethodWithSetup](../models/PaymentMethodWithSetup.md#paymentmethodwithsetup).

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
| 502 | ServerError | server |
| 503 | ServerError | server |
| 504 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `saveWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.paymentMethods.save({customer_id: "example"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/paymentMethods-save.mjs)

