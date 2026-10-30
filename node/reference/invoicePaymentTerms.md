[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# invoicePaymentTerms

### invoicePaymentTerms.create

Create invoice payment term for the authenticated merchant.

`POST /v1/invoice-payment-terms`

Signature: `create(params: InvoicePaymentTermsCreateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateInvoicePaymentTermRequestInput](../models/CreateInvoicePaymentTermRequest.md#createinvoicepaymenttermrequest) | The request body for: Create invoice payment term. |

Body model: [CreateInvoicePaymentTermRequestInput](../models/CreateInvoicePaymentTermRequest.md#createinvoicepaymenttermrequest).

#### invoicePaymentTerms.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Required | [InvoicePaymentTermCalculationInput](../models/InvoicePaymentTermCalculation.md#invoicepaymenttermcalculation) | How an invoice due date is calculated from payment terms, such as on receipt, net days, or a day of the month. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `late_fee_policy` | Optional | [InvoiceLateFeePolicyInput](../models/InvoiceLateFeePolicy.md#invoicelatefeepolicy) | A late fee for overdue invoices: a fixed amount or a percentage, a grace period in days, and whether Flint applies it automatically. |
| `name` | Required | string | minLength: `1`. |

#### Response

Returned payload: [InvoicePaymentTerm](../models/InvoicePaymentTerm.md#invoicepaymentterm).

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

const result = await client.invoicePaymentTerms.create({name: "example", calculation: {type: "on_receipt"}}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/invoicePaymentTerms-create.mjs)

### invoicePaymentTerms.delete

Retires an invoice payment term by setting its status to archived. A default payment term cannot be retired.

`DELETE /v1/invoice-payment-terms/{invoice_payment_term_id}`

Signature: `delete(invoice_payment_term_id: InputValue<string>, params?: InvoicePaymentTermsDeleteParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_payment_term_id` | Required | string | Flint invoice payment term ID. |
| `expected_version` | Optional | integer | Optional version last read by the caller. Format: `uint32`. minimum: `1`. |

#### Response

Returned payload: [InvoicePaymentTerm](../models/InvoicePaymentTerm.md#invoicepaymentterm).

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

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.invoicePaymentTerms.delete("ipt_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/invoicePaymentTerms-delete.mjs)

### invoicePaymentTerms.get

Returns one invoice payment term for the authenticated merchant.

`GET /v1/invoice-payment-terms/{invoice_payment_term_id}`

Signature:

```typescript
get(invoice_payment_term_id: InputValue<string>,
 params?: InvoicePaymentTermsGetParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_payment_term_id` | Required | string | Flint invoice payment term ID. |

#### Response

Returned payload: [InvoicePaymentTerm](../models/InvoicePaymentTerm.md#invoicepaymentterm).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
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
const result = await client.invoicePaymentTerms.get("ipt_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/invoicePaymentTerms-get.mjs)

### invoicePaymentTerms.list

Returns a paginated list of invoice payment terms for the authenticated merchant. Default order: created_at descending, then invoice_payment_term_id descending.

`GET /v1/invoice-payment-terms`

Signature: `list(params?: InvoicePaymentTermsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `status` | Optional | Array of string or string | Filter by status. Repeat the parameter or send comma-separated values to match any of several. Omitted, the list leaves out archived rows; name archived to include them. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"active"`, `"archived"`. Values: `"active"`, `"archived"`. |
| `external_reference_id` | Optional | string | Exact-match filter on the caller-owned external reference ID. minLength: `1`. maxLength: `255`. |
| `query` | Optional | string | Search across invoice payment term ID, external reference ID, and name. Text fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the start and need the type prefix, such as ipt_01. |

#### Response

Returned payload: [InvoicePaymentTermListResponse](../models/InvoicePaymentTermListResponse.md#invoicepaymenttermlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
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
const result = await client.invoicePaymentTerms.list({}, {  });
```

[Complete runnable example](../examples/invoicePaymentTerms-list.mjs)

### invoicePaymentTerms.update

Update invoice payment term for the authenticated merchant. Null is rejected for name, calculation, and expected_version; omit them to leave them unchanged. Null clears late_fee_policy or external_reference_id.

`PATCH /v1/invoice-payment-terms/{invoice_payment_term_id}`

Signature: `update(invoice_payment_term_id: InputValue<string>, params: InvoicePaymentTermsUpdateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_payment_term_id` | Required | string | Flint invoice payment term ID. |
| `body` | Required | [UpdateInvoicePaymentTermRequestInput](../models/UpdateInvoicePaymentTermRequest.md#updateinvoicepaymenttermrequest) | The request body for: Update invoice payment term. minProperties: `1`. |

Body model: [UpdateInvoicePaymentTermRequestInput](../models/UpdateInvoicePaymentTermRequest.md#updateinvoicepaymenttermrequest).

#### invoicePaymentTerms.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Optional | [InvoicePaymentTermCalculationInput](../models/InvoicePaymentTermCalculation.md#invoicepaymenttermcalculation) | How an invoice due date is calculated from payment terms, such as on receipt, net days, or a day of the month. |
| `expected_version` | Optional | integer | Optional version last read by the caller. Format: `uint32`. minimum: `1`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `late_fee_policy` | Optional | [InvoiceLateFeePolicyInput](../models/InvoiceLateFeePolicy.md#invoicelatefeepolicy) or null |  |
| `name` | Optional | string | minLength: `1`. |

#### Response

Returned payload: [InvoicePaymentTerm](../models/InvoicePaymentTerm.md#invoicepaymentterm).

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

const result = await client.invoicePaymentTerms.update("ipt_01ARZ3NDEKTSV4RRFFQ69G5FAV", {name: "Net 30"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/invoicePaymentTerms-update.mjs)

