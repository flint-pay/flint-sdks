[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# invoices

### invoices.cancelPaymentAttempt

Cancels an active invoice payment attempt and its payment intent. A processing ACH debit can be canceled only until the payment processor sends it to the bank; after that the request returns 409 ACTION_NOT_ALLOWED with reason in_progress and the attempt stays processing. Safe to retry with the same Idempotency-Key. Accepts an empty body or {}.

`POST /v1/invoices/{invoice_id}/payment-attempts/{invoice_payment_attempt_id}/cancel`

Signature:

```text
cancelPaymentAttempt(string|
  Model $invoice_id,
 string|
  Model $invoice_payment_attempt_id,
 array|
  Model|
  null $params = null,
 ?RequestOptions $options = null)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string | Flint invoice ID. |
| `invoice_payment_attempt_id` | Required | string | Flint invoice payment attempt ID. |

#### Response

Returned payload: [InvoicePaymentAttempt](../models/InvoicePaymentAttempt.md#invoicepaymentattempt).

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
| 502 | ServerError |
| 503 | ServerError |
| 504 | ServerError |

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

$result = $client->invoices->cancelPaymentAttempt('inv_01ARZ3NDEKTSV4RRFFQ69G5FAV', 'invpa_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/invoices-cancelPaymentAttempt.php)

### invoices.collect

Charges the invoice's saved payment method or the supplied saved payment method. This command requires a caller-chosen Idempotency-Key that is reused for retries of the same collection request.

`POST /v1/invoices/{invoice_id}/collect`

Signature: `collect(string|Model $invoice_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string | Flint invoice ID. |
| `body` | Required | [CollectInvoiceRequestInput](../models/CollectInvoiceRequestInput.md#collectinvoicerequestinput) | The request body for: Collect invoice. |

Body model: [CollectInvoiceRequestInput](../models/CollectInvoiceRequestInput.md#collectinvoicerequestinput).

#### invoices.collect body fields

Field definitions: [shared fields](../models/CollectInvoiceRequestInput.md#collectinvoicerequestinput).

#### Response

Returned payload: [CollectInvoiceResult](../models/CollectInvoiceResult.md#collectinvoiceresult).

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
| 502 | ServerError |
| 503 | ServerError |
| 504 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key required, [As long as the command's effects exist. The key is the command's durable identity: save it before the first attempt and reuse it to retry or recover. Never reuse it for a new business intent retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->invoices->collect('inv_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/invoices-collect.php)

### invoices.create

Creates an invoice draft from exactly one source: order_id for an order-backed invoice, or quick_pay for an invoice with a new backing order. Include issue to issue it immediately, using merchant_default delivery when issue is empty. Idempotency-Key is required for every request because issuing an automatic-collection invoice can charge the buyer. Replays preserve the original invoice result and recover its current public_url only within 24 hours of the original request; later replays omit public_url. Use GET /v1/invoices/{invoice_id} for the current invoice. If Flint returns IDEMPOTENCY_RECOVERY_REQUIRED, contact Flint support with the original Idempotency-Key and request ID. Never retry with a new key.

`POST /v1/invoices`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateInvoiceRequestInput](../models/CreateInvoiceRequestInput.md#createinvoicerequestinput) | The request body for: Create invoice. |

Body model: [CreateInvoiceRequestInput](../models/CreateInvoiceRequestInput.md#createinvoicerequestinput).

#### invoices.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `cc_emails` | Optional | Array of string | Additional addresses copied on the invoice email and every reminder. Items: minLength: `1`. |
| `collection` | Optional | [InvoiceCollectionRequestInput](../models/InvoiceCollectionRequestInput.md#invoicecollectionrequestinput) | How the invoice is collected. Omit it to use merchant_default. The invoice's collection object returns the resolved mode, and you can send it back unchanged on update. How an invoice is collected, used when creating or updating an invoice: a `mode`, an optional saved payment method, and a payment policy. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. Use it as your sync key: it isn't printed on the invoice, and GET /v1/invoices filters on it by exact match. minLength: `1`. maxLength: `255`. |
| `footer` | Optional | string | Fine print at the bottom of the invoice and PDF. Omit it to use the invoice settings default_footer. minLength: `1`. |
| `issue` | Optional | [CreateInvoiceIssueRequestInput](../models/CreateInvoiceIssueRequestInput.md#createinvoiceissuerequestinput) | Issue the invoice immediately after creating it. An empty object uses merchant_default delivery. Cannot be combined with a scheduled_issue_at timestamp. Options for issuing an invoice as you create it. `delivery_mode` chooses how the invoice reaches its recipient. |
| `memo` | Optional | string | Message to the customer, printed on the invoice and PDF. Omit it to use the invoice settings default_memo. minLength: `1`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `order_id` | Optional | string | The open order to bill. It must have no payments, refunds, or other active invoice. Send exactly one of order_id or quick_pay. minLength: `1`. |
| `payment_due` | Optional | [InvoicePaymentDueRequestInput](../models/InvoicePaymentDueRequestInput.md#invoicepaymentduerequestinput) | When the invoice is due. Omit it to use merchant_default. The invoice's payment_due object returns the resolved type, and you can send it back unchanged on update. Default: `{"type":"merchant_default"}`. When an invoice is due, used when creating or updating an invoice: no due date, a fixed time, payment terms, or a default. |
| `po_number` | Optional | string | The buyer's purchase order number, printed on the invoice and PDF. minLength: `1`. |
| `quick_pay` | Optional | [CreateInvoiceQuickPayRequestInput](../models/CreateInvoiceQuickPayRequestInput.md#createinvoicequickpayrequestinput) | Order details for an invoice with no existing order. Flint creates the backing order from them. Send exactly one of order_id or quick_pay. Inline order details for creating an invoice as `quick_pay`: line items, discounts, notes, customer, tip, and inventory routing. |
| `recipient_email` | Optional | string | Where Flint emails the invoice and its reminders. Required at issue when delivery resolves to email, and when you schedule the issue. minLength: `1`. |
| `reference` | Optional | string | Your reference for the invoice, printed on the invoice and PDF. Put the buyer's purchase order number in po_number instead. minLength: `1`. |
| `remit_to_address` | Optional | [AddressRequestInput](../models/AddressRequestInput.md#addressrequestinput) | Where the buyer sends offline payments, printed on the invoice. Omit it to use the invoice settings remit-to address. A complete postal address. State and postal_code are required for US addresses and optional for other countries. Send null or omit line2, state, and postal_code when the address has none. |
| `schedule_entries` | Optional | Array of [InvoiceScheduleEntryWriteInput](../models/InvoiceScheduleEntryWriteInput.md#invoicescheduleentrywriteinput) | Complete draft payment schedule with at most 14 entries. Validation errors identify the entry by index, such as schedule_entries[3].kind. Enum values are case-sensitive and must not contain surrounding whitespace. Omission preserves the current or default schedule; [] clears the authored schedule. Null is not accepted. On PATCH, include invoice_schedule_entry_id to retain an entry and expected_version to detect concurrent edits. maxItems: `14`. |
| `scheduled_issue_at` | Optional | string or null | When Flint issues and delivers this draft, as an RFC 3339 timestamp in the future. A scheduled issue delivers by email, so the draft needs recipient_email. Cannot be combined with issue. null is the same as omitting it. Format: `date-time`. minLength: `1`. |
| `service_date` | Optional | string | The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it as written, without timezone conversion. Format: `date`. minLength: `1`. |
| `type` | Required | string | Selects the type branch. Values: `"order"`, `"quick_pay"`. |

#### invoices.create with `type: "order"`

The `order` variant of `CreateInvoiceRequest`.

Body model: [CreateInvoiceRequestOrderInput](../models/CreateInvoiceRequestOrderInput.md#createinvoicerequestorderinput).

#### invoices.create with `type: "quick_pay"`

The `quick_pay` variant of `CreateInvoiceRequest`.

Body model: [CreateInvoiceRequestQuickPayInput](../models/CreateInvoiceRequestQuickPayInput.md#createinvoicerequestquickpayinput).

#### Response

Returned payload: [Invoice](../models/Invoice.md#invoice).

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
| 502 | ServerError |
| 503 | ServerError |
| 504 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key required, [As long as the command's effects exist. The key is the command's durable identity: save it before the first attempt and reuse it to retry or recover. Never reuse it for a new business intent retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->invoices->create([
  'type' => 'order',
  'order_id' => 'ord_01ARZ3NDEKTSV4RRFFQ69G5FAV',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/invoices-create.php)

### invoices.createCheckoutSession

Returns the current open invoice checkout session and aligned card attempt when they still match the invoice balance and collection run. A newly created session and attempt share the fixed expiration of the active invoice public-link generation. Unexpired sessions are reused regardless of remaining lifetime; active payment work returns a resolving conflict instead of creating competing collection. When the invoice's order has items to deliver, a new session offers the delivery methods in settings.checkout.default_delivery_method_ids, and the request returns 409 ACTION_NOT_ALLOWED with reason configuration_required when those methods cannot deliver every item. return_url sets where the checkout sends the buyer after paying. A reused session takes a new return_url only until a payment starts on it, and keeps the one it has after that.

`POST /v1/invoices/{invoice_id}/checkout-sessions`

Signature: `createCheckoutSession(string|Model $invoice_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string | Flint invoice ID. |
| `body` | Optional | [InvoiceCheckoutSessionRequestInput](../models/InvoiceCheckoutSessionRequestInput.md#invoicecheckoutsessionrequestinput) | The request body for: Create an invoice checkout session for the current buyer; Get or create invoice checkout collection. |

#### Response

Returned payload: [InvoiceCheckoutSessionResult](../models/InvoiceCheckoutSessionResult.md#invoicecheckoutsessionresult).

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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->invoices->createCheckoutSession('inv_01ARZ3NDEKTSV4RRFFQ69G5FAV', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/invoices-createCheckoutSession.php)

### invoices.createLateFee

Assesses the frozen late fee policy once per invoice or overdue schedule entry. The issued document remains unchanged.

`POST /v1/invoices/{invoice_id}/late-fees`

Signature: `createLateFee(string|Model $invoice_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string | Invoice ID. |
| `body` | Required | [AssessInvoiceLateFeeRequestInput](../models/AssessInvoiceLateFeeRequestInput.md#assessinvoicelatefeerequestinput) | The request body for: Assess an invoice late fee. |

Body model: [AssessInvoiceLateFeeRequestInput](../models/AssessInvoiceLateFeeRequestInput.md#assessinvoicelatefeerequestinput).

#### invoices.createLateFee body fields

Field definitions: [shared fields](../models/AssessInvoiceLateFeeRequestInput.md#assessinvoicelatefeerequestinput).

#### Response

Returned payload: [Invoice](../models/Invoice.md#invoice).

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

$result = $client->invoices->createLateFee('inv_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/invoices-createLateFee.php)

### invoices.createManualPayment

Applies an offline/manual payment to an issued invoice. Recording is rejected with OPERATION_IN_PROGRESS while an online payment is still resolving; an idle open checkout does not block. A payment that clears the balance invalidates the open checkout session. Safe to retry with the same Idempotency-Key.

`POST /v1/invoices/{invoice_id}/manual-payments`

Signature: `createManualPayment(string|Model $invoice_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string | Flint invoice ID. |
| `body` | Required | [CreateInvoiceManualPaymentRequestInput](../models/CreateInvoiceManualPaymentRequestInput.md#createinvoicemanualpaymentrequestinput) | The request body for: Create invoice manual payment. |

Body model: [CreateInvoiceManualPaymentRequestInput](../models/CreateInvoiceManualPaymentRequestInput.md#createinvoicemanualpaymentrequestinput).

#### invoices.createManualPayment body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantTaxCalculationComponentsItemFlatMoney.md#deliverypreviewresponsedatadeliveryoptionslineitemsitemvarianttaxcalculationcomponentsitemflatmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `expected_version` | Optional | integer | Expected version of the invoice. Format: `int64`. minimum: `1`. |
| `note` | Optional | string | minLength: `1`. maxLength: `4096`. |
| `payment_reference` | Optional | string | Caller-owned check, wire, or bank reference, stored unmodified. minLength: `1`. maxLength: `255`. |
| `received_at` | Optional | string | When the payment was received. Defaults to now. Format: `date-time`. minLength: `1`. |

#### Response

Returned payload: [InvoiceManualPaymentResult](../models/InvoiceManualPaymentResult.md#invoicemanualpaymentresult).

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

Idempotent: key required, [As long as the command's effects exist. The key is the command's durable identity: save it before the first attempt and reuse it to retry or recover. Never reuse it for a new business intent retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->invoices->createManualPayment('inv_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'amount_money' => (object) [
    'amount' => '100',
    'currency' => 'USD',
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/invoices-createManualPayment.php)

### invoices.get

Returns a single invoice by ID.

`GET /v1/invoices/{invoice_id}`

Signature: `get(string|Model $invoice_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string | Flint invoice ID. |
| `expand` | Optional | Array of string or string | Supported expansions: customer, order. Expansion requires commerce.invoices.read plus the read scope for each expanded resource. Limits: at most 10 unique expand paths per request. Repeat expand, for example expand=customer&expand=order, or pass one comma-separated value. Items values: `"customer"`, `"order"`. Values: `"customer"`, `"order"`. |

#### Response

Returned payload: [Invoice](../models/Invoice.md#invoice).

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
$result = $client->invoices->get('inv_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/invoices-get.php)

### invoices.getManualPayment

Returns one recorded or reversed manual payment for the invoice.

`GET /v1/invoices/{invoice_id}/manual-payments/{invoice_manual_payment_id}`

Signature:

```text
getManualPayment(string|
  Model $invoice_id,
 string|
  Model $invoice_manual_payment_id,
 array|
  Model|
  null $params = null,
 ?RequestOptions $options = null)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string | Flint invoice ID. |
| `invoice_manual_payment_id` | Required | string | Flint invoice manual payment ID. |

#### Response

Returned payload: [InvoiceManualPayment](../models/InvoiceManualPayment.md#invoicemanualpayment).

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
$result = $client->invoices->getManualPayment('inv_01ARZ3NDEKTSV4RRFFQ69G5FAV', 'omp_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/invoices-getManualPayment.php)

### invoices.getPaymentAttempt

Returns one card or ACH collection attempt for the invoice.

`GET /v1/invoices/{invoice_id}/payment-attempts/{invoice_payment_attempt_id}`

Signature:

```text
getPaymentAttempt(string|
  Model $invoice_id,
 string|
  Model $invoice_payment_attempt_id,
 array|
  Model|
  null $params = null,
 ?RequestOptions $options = null)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string | Flint invoice ID. |
| `invoice_payment_attempt_id` | Required | string | Flint invoice payment attempt ID. |

#### Response

Returned payload: [InvoicePaymentAttempt](../models/InvoicePaymentAttempt.md#invoicepaymentattempt).

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
$result = $client->invoices->getPaymentAttempt('inv_01ARZ3NDEKTSV4RRFFQ69G5FAV', 'invpa_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/invoices-getPaymentAttempt.php)

### invoices.getPDF

Downloads the merchant-authenticated PDF artifact generated from the invoice snapshot.

`GET /v1/invoices/{invoice_id}/pdf`

Signature: `getPDF(string|Model $invoice_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string | Flint invoice ID. |

#### Response

Response body (inside Result.data): null.

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

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->invoices->getPDF('inv_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/invoices-getPDF.php)

### invoices.issue

Issues the invoice, creates the buyer-access link, and uses the selected delivery mode. Safe to retry with the same Idempotency-Key.

`POST /v1/invoices/{invoice_id}/issue`

Signature: `issue(string|Model $invoice_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string | Flint invoice ID. |
| `body` | Required | [IssueInvoiceRequestInput](../models/IssueInvoiceRequestInput.md#issueinvoicerequestinput) | The request body for: Issue invoice. |

Body model: [IssueInvoiceRequestInput](../models/IssueInvoiceRequestInput.md#issueinvoicerequestinput).

#### invoices.issue body fields

Field definitions: [shared fields](../models/IssueInvoiceRequestInput.md#issueinvoicerequestinput).

#### Response

Returned payload: [Invoice](../models/Invoice.md#invoice).

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
| 502 | ServerError |
| 503 | ServerError |
| 504 | ServerError |

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

$result = $client->invoices->issue('inv_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'delivery_mode' => 'email',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/invoices-issue.php)

### invoices.list

Returns a paginated list of invoices for the authenticated merchant. Default order: created_at descending, then invoice_id descending.

`GET /v1/invoices`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `status` | Optional | Array of string or string | Filter by invoice status. Repeat the parameter or pass comma-separated values to match multiple statuses. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"draft"`, `"open"`, `"partially_paid"`, `"paid"`, `"void"`, `"uncollectible"`, `"credited"`. Values: `"draft"`, `"open"`, `"partially_paid"`, `"paid"`, `"void"`, `"uncollectible"`, `"credited"`. |
| `idempotency_key` | Optional | string | Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is exact and case-sensitive. Returns current authorized resources, not the recorded response. A pending resource does not prove that the operation succeeded, and an empty list does not prove that it had no effect. minLength: `1`. maxLength: `255`. |
| `customer_id` | Optional | string | Filter by Flint customer ID. |
| `order_id` | Optional | string | Filter by Flint order ID. |
| `subscription_id` | Optional | string | Exact-match filter on the backing order subscription ID. |
| `external_reference_id` | Optional | string | Exact-match filter on the caller-owned external reference ID. minLength: `1`. maxLength: `255`. |
| `invoice_number` | Optional | string | Exact, byte-sensitive whole invoice number. Preserves casing, accents, and whitespace; drafts without a number do not match. minLength: `1`. maxLength: `255`. |
| `collection_mode` | Optional | Array of string or string | Filter by the effective collection mode. Repeat the parameter or pass comma-separated values to match multiple modes. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"buyer_initiated"`, `"automatic"`, `"external"`. Values: `"buyer_initiated"`, `"automatic"`, `"external"`. |
| `issued_after` | Optional | string | Inclusive lower bound on issued_at. Format: `date-time`. |
| `issued_before` | Optional | string | Exclusive upper bound on issued_at. Format: `date-time`. |
| `updated_after` | Optional | string | Inclusive lower bound on updated_at. Format: `date-time`. |
| `updated_before` | Optional | string | Exclusive upper bound on updated_at. Format: `date-time`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `due_after` | Optional | string | Inclusive lower bound on due_at. Format: `date-time`. |
| `due_before` | Optional | string | Exclusive upper bound on due_at. Format: `date-time`. |
| `is_overdue` | Optional | boolean | Filter by whether the invoice is overdue. |
| `has_outstanding_balance` | Optional | boolean | Filter by whether outstanding_money is greater than zero. |
| `sort_by` | Optional | string | Field to sort by. Defaults to created_at; ties are broken by invoice_id. Default: `"created_at"`. Values: `"created_at"`, `"updated_at"`, `"due_at"`, `"invoice_number"`, `"outstanding_money"`. |
| `sort_direction` | Optional | string | Sort direction. Defaults to desc. Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `query` | Optional | string | Search across invoice_id, invoice_number, external_reference_id, recipient_email, reference, po_number, and the customer name and email on the invoice. Text fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the start and need the type prefix, such as inv_01. |
| `expand` | Optional | Array of string or string | Supported expansions: customer, order. Include the requested related resources using scoped batch reads for this page. Each relationship requires its existing target read scopes. Expansion changes the representation without changing pagination tokens. Limits: at most 10 unique expand paths per request. Repeat expand, for example expand=customer&expand=order, or pass one comma-separated value. Items values: `"customer"`, `"order"`. Values: `"customer"`, `"order"`. |

#### Response

Returned payload: [InvoiceListResponse](../models/InvoiceListResponse.md#invoicelistresponse).

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
$result = $client->invoices->list([], new RequestOptions());
```

[Complete runnable example](../examples/invoices-list.php)

### invoices.listActivities

Returns a read-only history of an invoice for timelines and debugging, newest first. Use sort_direction=asc for chronological order. Read the invoice and the resources each row references for authoritative state. Default order: created_at descending, then invoice_activity_id descending.

`GET /v1/invoices/{invoice_id}/activities`

Signature: `listActivities(string|Model $invoice_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string | Flint invoice ID. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `sort_direction` | Optional | string | Sort direction. Defaults to desc. Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `activity_type` | Optional | Array of string or string | Filter by activity_type. The output-only catch-all other is not accepted. Repeat the parameter or pass comma-separated values to OR multiple types. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: [25 declared values](#invoiceslistactivities-input-activity_type--values). Values: [25 declared values](#invoiceslistactivities-input-activity_type--values). |

#### invoices.listActivities input activity_type [] values

- `"draft_created"`
- `"issued"`
- `"sent"`
- `"delivery_sent"`
- `"reminder_sent"`
- `"viewed"`
- `"payment_attempt_started"`
- `"payment_applied"`
- `"manual_payment_recorded"`
- `"manual_payment_reversed"`
- `"refund_succeeded"`
- `"voided"`
- `"token_regenerated"`
- `"collection_blocked"`
- `"collection_block_resolved"`
- `"updated"`
- `"marked_uncollectible"`
- `"payment_processing"`
- `"issue_failed"`
- `"overdue"`
- `"reminder_due"`
- `"late_fee_due"`
- `"late_fee_assessed"`
- `"late_fee_waived"`
- `"credited"`

#### Response

Returned payload: [InvoiceActivityListResponse](../models/InvoiceActivityListResponse.md#invoiceactivitylistresponse).

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

Pagination: `listActivitiesItems`, `listActivitiesPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->invoices->listActivities('inv_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/invoices-listActivities.php)

### invoices.listDeliveryAttempts

Returns email delivery attempts for send and reminder actions. Default order: created_at descending, then invoice_delivery_attempt_id ascending.

`GET /v1/invoices/{invoice_id}/delivery-attempts`

Signature: `listDeliveryAttempts(string|Model $invoice_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string | Flint invoice ID. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |

#### Response

Returned payload: [InvoiceDeliveryAttemptListResponse](../models/InvoiceDeliveryAttemptListResponse.md#invoicedeliveryattemptlistresponse).

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

Pagination: `listDeliveryAttemptsItems`, `listDeliveryAttemptsPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->invoices->listDeliveryAttempts('inv_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/invoices-listDeliveryAttempts.php)

### invoices.listManualPayments

Lists every manual payment, including reversed payments. Default order: received_at descending, then invoice_manual_payment_id descending.

`GET /v1/invoices/{invoice_id}/manual-payments`

Signature: `listManualPayments(string|Model $invoice_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string | Flint invoice ID. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `idempotency_key` | Optional | string | Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is exact and case-sensitive. Returns current authorized resources, not the recorded response. A pending resource does not prove that the operation succeeded, and an empty list does not prove that it had no effect. minLength: `1`. maxLength: `255`. |

#### Response

Returned payload: [InvoiceManualPaymentListResponse](../models/InvoiceManualPaymentListResponse.md#invoicemanualpaymentlistresponse).

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

Pagination: `listManualPaymentsItems`, `listManualPaymentsPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->invoices->listManualPayments('inv_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/invoices-listManualPayments.php)

### invoices.listPaymentAttempts

Lists card and ACH collection attempts for an invoice in reverse chronological order. Default order: started_at descending, then invoice_payment_attempt_id descending.

`GET /v1/invoices/{invoice_id}/payment-attempts`

Signature: `listPaymentAttempts(string|Model $invoice_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

Field definitions: [shared fields](#request-fields-14).

#### Response

Returned payload: [InvoicePaymentAttemptListResponse](../models/InvoicePaymentAttemptListResponse.md#invoicepaymentattemptlistresponse).

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

Pagination: `listPaymentAttemptsItems`, `listPaymentAttemptsPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->invoices->listPaymentAttempts('inv_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/invoices-listPaymentAttempts.php)

### invoices.markUncollectible

Closes the outstanding balance as a write-off and releases the order's invoice collection authority. Safe to retry with the same Idempotency-Key.

`POST /v1/invoices/{invoice_id}/mark-uncollectible`

Signature: `markUncollectible(string|Model $invoice_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string | Flint invoice ID. |
| `body` | Optional | [ResourceVersionRequestInput](../models/ResourceVersionRequestInput.md#resourceversionrequestinput) | The request body for: Mark invoice uncollectible; Regenerate invoice public link; Resume one of the current buyer's subscriptions; Resume subscription; Reverse credit note allocation; Void credit note; Void invoice. |

#### Response

Returned payload: [Invoice](../models/Invoice.md#invoice).

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

$result = $client->invoices->markUncollectible('inv_01ARZ3NDEKTSV4RRFFQ69G5FAV', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/invoices-markUncollectible.php)

### invoices.regeneratePublicLink

Revokes the current buyer-access link and all checkout credentials derived from it, then returns a new public_url. The current checkout session and its payment lineage are preserved. Returns 409 ACTION_NOT_ALLOWED with details[0].reason in_progress when the invoice's customer is being deleted or has been deleted. Safe to retry with the same Idempotency-Key.

`POST /v1/invoices/{invoice_id}/regenerate-public-link`

Signature: `regeneratePublicLink(string|Model $invoice_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

Field definitions: [shared fields](#request-fields-16). Models: [ResourceVersionRequestInput](../models/ResourceVersionRequestInput.md#resourceversionrequestinput).

#### Response

Returned payload: [Invoice](../models/Invoice.md#invoice).

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

$result = $client->invoices->regeneratePublicLink('inv_01ARZ3NDEKTSV4RRFFQ69G5FAV', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/invoices-regeneratePublicLink.php)

### invoices.reverseManualPayment

Reverses the named manual payment in full and returns its amount to the invoice balance. To correct an amount, reverse the payment and record the correct payment. Retries with the same Idempotency-Key replay the result; retries without a key return 409 once the payment is reversed.

`POST /v1/invoices/{invoice_id}/manual-payments/{invoice_manual_payment_id}/reverse`

Signature:

```text
reverseManualPayment(string|
  Model $invoice_id,
 string|
  Model $invoice_manual_payment_id,
 array|
  Model $params,
 ?RequestOptions $options = null)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string | Flint invoice ID. |
| `invoice_manual_payment_id` | Required | string | Flint invoice manual payment ID. |
| `body` | Required | [ReverseInvoiceManualPaymentRequestInput](../models/ReverseInvoiceManualPaymentRequestInput.md#reverseinvoicemanualpaymentrequestinput) | The request body for: Reverse manual invoice payment. |

Body model: [ReverseInvoiceManualPaymentRequestInput](../models/ReverseInvoiceManualPaymentRequestInput.md#reverseinvoicemanualpaymentrequestinput).

#### invoices.reverseManualPayment body fields

Field definitions: [shared fields](../models/ReverseInvoiceManualPaymentRequestInput.md#reverseinvoicemanualpaymentrequestinput).

#### Response

Returned payload: [InvoiceManualPaymentResult](../models/InvoiceManualPaymentResult.md#invoicemanualpaymentresult).

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

$result = $client->invoices->reverseManualPayment('inv_01ARZ3NDEKTSV4RRFFQ69G5FAV', 'omp_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'reversal_note' => 'Payment returned by bank',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/invoices-reverseManualPayment.php)

### invoices.sendReminder

Attempts a reminder email for an already issued collectible invoice. Safe to retry with the same Idempotency-Key. Accepts an empty body or {}.

`POST /v1/invoices/{invoice_id}/send-reminder`

Signature: `sendReminder(string|Model $invoice_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string | Flint invoice ID. |

#### Response

Returned payload: [Invoice](../models/Invoice.md#invoice).

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
| 504 | ServerError |

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

$result = $client->invoices->sendReminder('inv_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/invoices-sendReminder.php)

### invoices.update

Updates mutable fields on a draft invoice. Null is rejected for cc_emails, collection, payment_due, schedule_entries, reminders_paused, and expected_version; omit them to leave them unchanged. Send [] to clear cc_emails or the authored schedule. After issue, the only writable field is reminders_paused, which pauses or resumes automatic reminders on an open or partially paid invoice.

`PATCH /v1/invoices/{invoice_id}`

Signature: `update(string|Model $invoice_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string | Flint invoice ID. |
| `body` | Required | [UpdateInvoiceRequestInput](../models/UpdateInvoiceRequestInput.md#updateinvoicerequestinput) | The request body for: Update invoice. |

Body model: [UpdateInvoiceRequestInput](../models/UpdateInvoiceRequestInput.md#updateinvoicerequestinput).

#### invoices.update body fields

Field definitions: [shared fields](../models/UpdateInvoiceRequestInput.md#updateinvoicerequestinput). Models: [InvoiceCollectionRequestInput](../models/InvoiceCollectionRequestInput.md#invoicecollectionrequestinput), [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput), [InvoicePaymentDueRequestInput](../models/InvoicePaymentDueRequestInput.md#invoicepaymentduerequestinput), [AddressRequestInput](../models/AddressRequestInput.md#addressrequestinput), [InvoiceScheduleEntryWriteInput](../models/InvoiceScheduleEntryWriteInput.md#invoicescheduleentrywriteinput).

#### Response

Returned payload: [Invoice](../models/Invoice.md#invoice).

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

$result = $client->invoices->update('inv_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'memo' => 'Updated delivery instructions',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/invoices-update.php)

### invoices.void

Voids an unpaid invoice so the associated order can be edited or collected again. An invoice with an issued credit note against it cannot be voided until that credit note is voided.

`POST /v1/invoices/{invoice_id}/void`

Signature: `void(string|Model $invoice_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

Field definitions: [shared fields](#request-fields-16). Models: [ResourceVersionRequestInput](../models/ResourceVersionRequestInput.md#resourceversionrequestinput).

#### Response

Returned payload: [Invoice](../models/Invoice.md#invoice).

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

$result = $client->invoices->void('inv_01ARZ3NDEKTSV4RRFFQ69G5FAV', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/invoices-void.php)

### invoices.waiveLateFee

Waives the unpaid remainder of an assessed late fee. Collected money is not refunded. The reason is visible only to the merchant.

`POST /v1/invoices/{invoice_id}/late-fees/{invoice_late_fee_id}/waive`

Signature: `waiveLateFee(string|Model $invoice_id, string|Model $invoice_late_fee_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string | Invoice ID. |
| `invoice_late_fee_id` | Required | string | Invoice late fee ID. |
| `body` | Required | [WaiveInvoiceLateFeeRequestInput](../models/WaiveInvoiceLateFeeRequestInput.md#waiveinvoicelatefeerequestinput) | The request body for: Waive an unpaid invoice late fee. |

Body model: [WaiveInvoiceLateFeeRequestInput](../models/WaiveInvoiceLateFeeRequestInput.md#waiveinvoicelatefeerequestinput).

#### invoices.waiveLateFee body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `reason_message` | Required | string | Your note explaining this action. minLength: `1`. maxLength: `4096`. |

#### Response

Returned payload: [Invoice](../models/Invoice.md#invoice).

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

$result = $client->invoices->waiveLateFee('inv_01ARZ3NDEKTSV4RRFFQ69G5FAV', 'inlf_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'reason_message' => 'Courtesy waiver',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/invoices-waiveLateFee.php)

