[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# paymentMethodDomains

### paymentMethodDomains.create

Registers one exact domain or subdomain for Apple Pay and Google Pay in the selected Flint environment, then validates its wallet readiness.

`POST /v1/payment-method-domains`

Signature: `create(params: PaymentMethodDomainsCreateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreatePaymentMethodDomainRequestInput](../models/CreatePaymentMethodDomainRequest.md#createpaymentmethoddomainrequest) | The request body for: Register payment method domain. |

Body model: [CreatePaymentMethodDomainRequestInput](../models/CreatePaymentMethodDomainRequest.md#createpaymentmethoddomainrequest).

#### paymentMethodDomains.create body fields

Field definitions: [shared fields](../models/CreatePaymentMethodDomainRequest.md#createpaymentmethoddomainrequest).

#### Response

Returned payload: [PaymentMethodDomain](../models/PaymentMethodDomain.md#paymentmethoddomain).

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
| 504 | ServerError |

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

const result = await client.paymentMethodDomains.create({domain_name: "payments.example.invalid"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/paymentMethodDomains-create.mjs)

### paymentMethodDomains.get

Returns one environment-scoped payment method domain and its Apple Pay and Google Pay readiness.

`GET /v1/payment-method-domains/{payment_method_domain_id}`

Signature:

```typescript
get(payment_method_domain_id: InputValue<string>,
 params?: PaymentMethodDomainsGetParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_method_domain_id` | Required | string | Flint payment method domain ID. |

#### Response

Returned payload: [PaymentMethodDomain](../models/PaymentMethodDomain.md#paymentmethoddomain).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 410 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.paymentMethodDomains.get("pmdom_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/paymentMethodDomains-get.mjs)

### paymentMethodDomains.list

Returns payment method domains ordered by payment_method_domain_id ascending in the selected Flint environment. Page tokens are opaque, bind to the list parameters, and return a validation error when invalid or mismatched. Default order: payment_method_domain_id ascending; this key uniquely orders the results.

`GET /v1/payment-method-domains`

Signature: `list(params?: PaymentMethodDomainsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `status` | Optional | Array of string or string | Filter by status. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"active"`, `"inactive"`. Values: `"active"`, `"inactive"`. |
| `domain_name` | Optional | string | Exact hostname filter after trimming whitespace and converting to lowercase. Accepts an ASCII fully-qualified hostname without a URL, port, wildcard, or IP address. Matches the entire stored domain name. minLength: `1`. maxLength: `253`. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |

#### Response

Returned payload: [PaymentMethodDomainListResponse](../models/PaymentMethodDomainListResponse.md#paymentmethoddomainlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 410 | ApiError |
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

```typescript
const result = await client.paymentMethodDomains.list({}, {  });
```

[Complete runnable example](../examples/paymentMethodDomains-list.mjs)

### paymentMethodDomains.update

Turns the domain on or off. Reads never check again with the provider; they return the last result. Sending status active registers the hostname on your current payment account, turns it on, and checks again any wallet that isn't active, so send it to check a domain again. Sending status inactive turns wallet buttons off for the hostname.

`PATCH /v1/payment-method-domains/{payment_method_domain_id}`

Signature: `update(payment_method_domain_id: InputValue<string>, params: PaymentMethodDomainsUpdateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_method_domain_id` | Required | string | Flint payment method domain ID. |
| `body` | Required | [UpdatePaymentMethodDomainRequestInput](../models/UpdatePaymentMethodDomainRequest.md#updatepaymentmethoddomainrequest) | The request body for: Update payment method domain. |

Body model: [UpdatePaymentMethodDomainRequestInput](../models/UpdatePaymentMethodDomainRequest.md#updatepaymentmethoddomainrequest).

#### paymentMethodDomains.update body fields

Field definitions: [shared fields](../models/UpdatePaymentMethodDomainRequest.md#updatepaymentmethoddomainrequest).

#### Response

Returned payload: [PaymentMethodDomain](../models/PaymentMethodDomain.md#paymentmethoddomain).

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
| 504 | ServerError |

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

const result = await client.paymentMethodDomains.update("pmdom_01ARZ3NDEKTSV4RRFFQ69G5FAV", {status: "active"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/paymentMethodDomains-update.mjs)

