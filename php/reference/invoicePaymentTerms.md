[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# invoicePaymentTerms

### invoicePaymentTerms.create

Create invoice payment term for the authenticated merchant.

`POST /v1/invoice-payment-terms`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateInvoicePaymentTermRequestInput](../models/CreateInvoicePaymentTermRequestInput.md#createinvoicepaymenttermrequestinput) | The request body for: Create invoice payment term. |

Body model: [CreateInvoicePaymentTermRequestInput](../models/CreateInvoicePaymentTermRequestInput.md#createinvoicepaymenttermrequestinput).

#### invoicePaymentTerms.create body fields

Field definitions: [shared fields](../models/CreateInvoicePaymentTermRequestInput.md#createinvoicepaymenttermrequestinput). Models: [InvoicePaymentTermCalculationInput](../models/InvoicePaymentTermCalculationInput.md#invoicepaymenttermcalculationinput), [InvoiceLateFeePolicyInput](../models/InvoiceLateFeePolicyInput.md#invoicelatefeepolicyinput).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

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

### invoicePaymentTerms.get

Returns one invoice payment term for the authenticated merchant.

`GET /v1/invoice-payment-terms/{invoice_payment_term_id}`

Signature: `get(string|Model $invoice_payment_term_id, array|Model|null $params = null, ?RequestOptions $options = null)`

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->invoicePaymentTerms->get('example', [], new RequestOptions());
```

[Complete runnable example](../examples/invoicePaymentTerms-get.php)

### invoicePaymentTerms.list

Returns a paginated list of invoice payment terms for the authenticated merchant.

`GET /v1/invoice-payment-terms`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"active"`, `"archived"`. |
| `external_reference_id` | Optional | string | minLength: `1`. maxLength: `255`. |
| `query` | Optional | string |  |

#### Response

Returned payload: [InvoicePaymentTermsListResponse200](../models/InvoicePaymentTermsListResponse200.md#invoicepaymenttermslistresponse200).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`, `listPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->invoicePaymentTerms->list([], new RequestOptions());
```

[Complete runnable example](../examples/invoicePaymentTerms-list.php)

### invoicePaymentTerms.remove

Retires an invoice payment term by setting its status to archived. A default payment term cannot be retired.

`DELETE /v1/invoice-payment-terms/{invoice_payment_term_id}`

Signature: `remove(string|Model $invoice_payment_term_id, array|Model|null $params = null, ?RequestOptions $options = null)`

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `removeWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->invoicePaymentTerms->remove('example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/invoicePaymentTerms-remove.php)

### invoicePaymentTerms.update

Update invoice payment term for the authenticated merchant. Null is rejected for name, calculation, and expected_version; omit them to leave them unchanged. Null clears late_fee_policy or external_reference_id.

`PATCH /v1/invoice-payment-terms/{invoice_payment_term_id}`

Signature: `update(string|Model $invoice_payment_term_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_payment_term_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdateInvoicePaymentTermRequestInput](../models/UpdateInvoicePaymentTermRequestInput.md#updateinvoicepaymenttermrequestinput) | The request body for: Update invoice payment term. minProperties: `1`. |

Body model: [UpdateInvoicePaymentTermRequestInput](../models/UpdateInvoicePaymentTermRequestInput.md#updateinvoicepaymenttermrequestinput).

#### invoicePaymentTerms.update body fields

Field definitions: [shared fields](../models/UpdateInvoicePaymentTermRequestInput.md#updateinvoicepaymenttermrequestinput). Models: [InvoicePaymentTermCalculationInput](../models/InvoicePaymentTermCalculationInput.md#invoicepaymenttermcalculationinput), [InvoiceLateFeePolicyInput](../models/InvoiceLateFeePolicyInput.md#invoicelatefeepolicyinput).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `updateWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->invoicePaymentTerms->update('example', [
  'calculation' => (object) [
    'type' => 'on_receipt',
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/invoicePaymentTerms-update.php)

