[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# paymentMethodDomains

### paymentMethodDomains.create

Registers one exact domain or subdomain for Apple Pay and Google Pay in the selected Flint environment, then validates its wallet readiness.

`POST /v1/payment-method-domains`

Signature:

```typescript
create(params: (InputValue<CreatePaymentMethodDomainRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreatePaymentMethodDomainRequestInput](../models/CreatePaymentMethodDomainRequest.md#createpaymentmethoddomainrequest) | The request body for: Register payment method domain. |

Body model: [CreatePaymentMethodDomainRequestInput](../models/CreatePaymentMethodDomainRequest.md#createpaymentmethoddomainrequest).

#### paymentMethodDomains.create body fields

Field definitions: [shared fields](../models/CreatePaymentMethodDomainRequest.md#createpaymentmethoddomainrequest).

#### Response

Returned payload: [PaymentMethodDomain](../models/PaymentMethodDomain.md#paymentmethoddomain).

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
| 504 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.paymentMethodDomains.create({domain_name: "payments.example.invalid"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/paymentMethodDomains-create.mjs)

### paymentMethodDomains.get

Returns one environment-scoped payment method domain and its Apple Pay and Google Pay readiness.

`GET /v1/payment-method-domains/{payment_method_domain_id}`

Signature: `get(payment_method_domain_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_method_domain_id` | Required | string |  |

#### Response

Returned payload: [PaymentMethodDomain](../models/PaymentMethodDomain.md#paymentmethoddomain).

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

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.paymentMethodDomains.get("example", {}, {  });
```

[Complete runnable example](../examples/paymentMethodDomains-get.mjs)

### paymentMethodDomains.list

Returns payment method domains ordered by payment_method_domain_id ascending in the selected Flint environment. Page tokens are opaque, bind to the list parameters, and return a validation error when invalid or mismatched.

`GET /v1/payment-method-domains`

Signature:

```typescript
list(params?: {
  "domain_name"?: InputValue<string>;
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `domain_name` | Optional | string | minLength: `1`. maxLength: `253`. |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |

#### Response

Returned payload: [PaymentMethodDomainListResponse](../models/PaymentMethodDomainListResponse.md#paymentmethoddomainlistresponse).

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

Complete body and metadata: `listWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`, `listPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.paymentMethodDomains.list({}, {  });
```

[Complete runnable example](../examples/paymentMethodDomains-list.mjs)

### paymentMethodDomains.update

Sets the domain registration status. Activating the domain also validates Apple Pay and Google Pay readiness.

`PATCH /v1/payment-method-domains/{payment_method_domain_id}`

Signature:

```typescript
update(payment_method_domain_id: InputValue<string>,
 params: (InputValue<UpdatePaymentMethodDomainRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_method_domain_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdatePaymentMethodDomainRequestInput](../models/UpdatePaymentMethodDomainRequest.md#updatepaymentmethoddomainrequest) | The request body for: Update payment method domain. |

Body model: [UpdatePaymentMethodDomainRequestInput](../models/UpdatePaymentMethodDomainRequest.md#updatepaymentmethoddomainrequest).

#### paymentMethodDomains.update body fields

Field definitions: [shared fields](../models/UpdatePaymentMethodDomainRequest.md#updatepaymentmethoddomainrequest).

#### Response

Returned payload: [PaymentMethodDomain](../models/PaymentMethodDomain.md#paymentmethoddomain).

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
| 504 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `updateWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.paymentMethodDomains.update("example", {status: "active"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/paymentMethodDomains-update.mjs)

