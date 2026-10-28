[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# invoicePaymentTerms

### invoicePaymentTerms.create

Create invoice payment term for the authenticated merchant.

`POST /v1/invoice-payment-terms`

Signature:

```typescript
create(params: (InputValue<CreateInvoicePaymentTermRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
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

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.invoicePaymentTerms.create({name: "example", calculation: {type: "on_receipt"}}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/invoicePaymentTerms-create.mjs)

### invoicePaymentTerms.get

Returns one invoice payment term for the authenticated merchant.

`GET /v1/invoice-payment-terms/{invoice_payment_term_id}`

Signature: `get(invoice_payment_term_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_payment_term_id` | Required | string |  |

#### Response

Returned payload: [InvoicePaymentTerm](../models/InvoicePaymentTerm.md#invoicepaymentterm).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
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
const result = await client.invoicePaymentTerms.get("example", {}, {  });
```

[Complete runnable example](../examples/invoicePaymentTerms-get.mjs)

### invoicePaymentTerms.list

Returns a paginated list of invoice payment terms for the authenticated merchant. Default order: created_at descending, then invoice_payment_term_id descending.

`GET /v1/invoice-payment-terms`

Signature:

```typescript
list(params?: {
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "status"?: InputValue<Array<"active" | "archived">>;
  "external_reference_id"?: InputValue<string>;
  "query"?: InputValue<string>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"active"`, `"archived"`. |
| `external_reference_id` | Optional | string | minLength: `1`. maxLength: `255`. |
| `query` | Optional | string |  |

#### Response

Returned payload: [InvoicePaymentTermListResponse](../models/InvoicePaymentTermListResponse.md#invoicepaymenttermlistresponse).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
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
const result = await client.invoicePaymentTerms.list({}, {  });
```

[Complete runnable example](../examples/invoicePaymentTerms-list.mjs)

### invoicePaymentTerms.remove

Retires an invoice payment term by setting its status to archived. A default payment term cannot be retired.

`DELETE /v1/invoice-payment-terms/{invoice_payment_term_id}`

Signature:

```typescript
remove(invoice_payment_term_id: InputValue<string>,
 params?: {
  "expected_version"?: InputValue<number>;
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_payment_term_id` | Required | string |  |
| `expected_version` | Optional | integer | Format: `uint32`. minimum: `1`. |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [InvoicePaymentTerm](../models/InvoicePaymentTerm.md#invoicepaymentterm).

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

Complete body and metadata: `removeWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.invoicePaymentTerms.remove("example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/invoicePaymentTerms-remove.mjs)

### invoicePaymentTerms.update

Update invoice payment term for the authenticated merchant. Null is rejected for name, calculation, and expected_version; omit them to leave them unchanged. Null clears late_fee_policy or external_reference_id.

`PATCH /v1/invoice-payment-terms/{invoice_payment_term_id}`

Signature:

```typescript
update(invoice_payment_term_id: InputValue<string>,
 params: (InputValue<UpdateInvoicePaymentTermRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_payment_term_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
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

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `updateWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.invoicePaymentTerms.update("example", {calculation: {type: "on_receipt"}}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/invoicePaymentTerms-update.mjs)

