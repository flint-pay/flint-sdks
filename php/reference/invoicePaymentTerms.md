[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# invoicePaymentTerms

### invoicePaymentTerms.create

Create invoice payment term for the authenticated merchant.

`POST /v1/invoice-payment-terms`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateInvoicePaymentTermRequestInput](../models/CreateInvoicePaymentTermRequestInput.md#createinvoicepaymenttermrequestinput) | The request body for: Create invoice payment term. |

Body model: [CreateInvoicePaymentTermRequestInput](../models/CreateInvoicePaymentTermRequestInput.md#createinvoicepaymenttermrequestinput).

#### invoicePaymentTerms.create body fields

Field definitions: [shared fields](../models/CreateInvoicePaymentTermRequestInput.md#createinvoicepaymenttermrequestinput). Models: [InvoicePaymentTermCalculationInput](../models/InvoicePaymentTermCalculationInput.md#invoicepaymenttermcalculationinput), [InvoiceLateFeePolicyInput](../models/InvoiceLateFeePolicyInput.md#invoicelatefeepolicyinput).

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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->invoicePaymentTerms->create([
  'name' => 'example',
  'calculation' => (object) [
    'type' => 'on_receipt',
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/invoicePaymentTerms-create.php)

### invoicePaymentTerms.delete

Retires an invoice payment term by setting its status to archived. A default payment term cannot be retired.

`DELETE /v1/invoice-payment-terms/{invoice_payment_term_id}`

Signature: `delete(string|Model $invoice_payment_term_id, array|Model|null $params = null, ?RequestOptions $options = null)`

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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->invoicePaymentTerms->delete('ipt_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/invoicePaymentTerms-delete.php)

### invoicePaymentTerms.get

Returns one invoice payment term for the authenticated merchant.

`GET /v1/invoice-payment-terms/{invoice_payment_term_id}`

Signature: `get(string|Model $invoice_payment_term_id, array|Model|null $params = null, ?RequestOptions $options = null)`

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

```php
$result = $client->invoicePaymentTerms->get('ipt_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/invoicePaymentTerms-get.php)

### invoicePaymentTerms.list

Returns a paginated list of invoice payment terms for the authenticated merchant. Default order: created_at descending, then invoice_payment_term_id descending.

`GET /v1/invoice-payment-terms`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

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

```php
$result = $client->invoicePaymentTerms->list([], new RequestOptions());
```

[Complete runnable example](../examples/invoicePaymentTerms-list.php)

### invoicePaymentTerms.update

Update invoice payment term for the authenticated merchant. Null is rejected for name, calculation, and expected_version; omit them to leave them unchanged. Null clears late_fee_policy or external_reference_id.

`PATCH /v1/invoice-payment-terms/{invoice_payment_term_id}`

Signature: `update(string|Model $invoice_payment_term_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_payment_term_id` | Required | string | Flint invoice payment term ID. |
| `body` | Required | [UpdateInvoicePaymentTermRequestInput](../models/UpdateInvoicePaymentTermRequestInput.md#updateinvoicepaymenttermrequestinput) | The request body for: Update invoice payment term. minProperties: `1`. |

Body model: [UpdateInvoicePaymentTermRequestInput](../models/UpdateInvoicePaymentTermRequestInput.md#updateinvoicepaymenttermrequestinput).

#### invoicePaymentTerms.update body fields

Field definitions: [shared fields](../models/UpdateInvoicePaymentTermRequestInput.md#updateinvoicepaymenttermrequestinput). Models: [InvoicePaymentTermCalculationInput](../models/InvoicePaymentTermCalculationInput.md#invoicepaymenttermcalculationinput), [InvoiceLateFeePolicyInput](../models/InvoiceLateFeePolicyInput.md#invoicelatefeepolicyinput).

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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->invoicePaymentTerms->update('ipt_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'name' => 'Net 30',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/invoicePaymentTerms-update.php)

