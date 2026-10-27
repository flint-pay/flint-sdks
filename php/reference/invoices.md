[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# invoices

### invoices.assessLateFee

Assesses the frozen late fee policy once per invoice or overdue schedule entry. The issued document remains unchanged.

`POST /v1/invoices/{invoice_id}/late-fees`

Signature: `assessLateFee(string|Model $invoice_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [AssessInvoiceLateFeeRequestInput](../models/AssessInvoiceLateFeeRequestInput.md#assessinvoicelatefeerequestinput) | The request body for: Assess an invoice late fee. |

Body model: [AssessInvoiceLateFeeRequestInput](../models/AssessInvoiceLateFeeRequestInput.md#assessinvoicelatefeerequestinput).

#### invoices.assessLateFee body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_schedule_entry_id` | Optional | string | minLength: `1`. |

#### Response

Returned payload: [Invoice](../models/Invoice.md#invoice).

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

Complete body and metadata: `assessLateFeeWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->invoices->assessLateFee('example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/invoices-assessLateFee.php)

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
| `invoice_id` | Required | string |  |
| `invoice_payment_attempt_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [InvoicePaymentAttempt](../models/InvoicePaymentAttempt.md#invoicepaymentattempt).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `cancelPaymentAttemptWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->invoices->cancelPaymentAttempt('example', 'example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/invoices-cancelPaymentAttempt.php)

### invoices.collect

Charges the invoice's saved payment method or the supplied saved payment method. This command requires a caller-chosen Idempotency-Key that is reused for retries of the same collection request.

`POST /v1/invoices/{invoice_id}/collect`

Signature: `collect(string|Model $invoice_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CollectInvoiceRequestInput](../models/CollectInvoiceRequestInput.md#collectinvoicerequestinput) | The request body for: Collect invoice. |

Body model: [CollectInvoiceRequestInput](../models/CollectInvoiceRequestInput.md#collectinvoicerequestinput).

#### invoices.collect body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_schedule_entry_id` | Optional | string | minLength: `1`. |
| `payment_method_id` | Optional | string | minLength: `1`. |

#### Response

Returned payload: [CollectInvoiceResult](../models/CollectInvoiceResult.md#collectinvoiceresult).

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
| 502 | ServerError | server |
| 503 | ServerError | server |
| 504 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `collectWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key required — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->invoices->collect('example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/invoices-collect.php)

### invoices.create

Creates an invoice draft from exactly one source: order_id for an order-backed invoice, or quick_pay for an invoice with a new backing order. Include issue to issue it immediately, using merchant_default delivery when issue is empty. Idempotency-Key is required for every request because issuing an automatic-collection invoice can charge the buyer. Replays preserve the original invoice result and recover its current public_url only within 24 hours of the original request; later replays omit public_url. Use GET /v1/invoices/{invoice_id} for the current invoice. If Flint returns IDEMPOTENCY_RECOVERY_REQUIRED, contact Flint support with the original Idempotency-Key and request ID. Never retry with a new key.

`POST /v1/invoices`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | Alternative shapes (see declared variants) and [CreateInvoiceRequestInput](../models/CreateInvoiceRequestInput.md#createinvoicerequestinput) | The request body for: Create invoice. |

#### invoices.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `cc_emails` | Optional | Array of string | Additional addresses copied on the invoice email and every reminder. Items: minLength: `1`. |
| `collection` | Optional | [InvoiceCollectionRequestInput](../models/InvoiceCollectionRequestInput.md#invoicecollectionrequestinput) | How the invoice is collected. Omit it to use merchant_default. The invoice's collection object returns the resolved mode, and you can send it back unchanged on update. How an invoice is collected, used when creating or updating an invoice: a `mode`, an optional saved payment method, and a payment policy. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. Use it as your sync key: it isn't printed on the invoice, and GET /v1/invoices filters on it by exact match. minLength: `1`. maxLength: `255`. |
| `footer` | Optional | string | Fine print at the bottom of the invoice and PDF. Omit it to use the invoice settings default_footer. minLength: `1`. |
| `issue` | Optional | [CreateInvoiceIssueRequestInput](../models/CreateInvoiceIssueRequestInput.md#createinvoiceissuerequestinput) | Issue the invoice immediately after creating it. An empty object uses merchant_default delivery. Cannot be combined with a scheduled_issue_at timestamp. Options for issuing an invoice as you create it. `delivery_mode` chooses how the invoice reaches its recipient. |
| `memo` | Optional | string | Message to the customer, printed on the invoice and PDF. Omit it to use the invoice settings default_memo. minLength: `1`. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `order_id` | Optional | string | The open order to bill. It must have no payments, refunds, or other active invoice. Send exactly one of order_id or quick_pay. minLength: `1`. |
| `payment_due` | Optional | [InvoicePaymentDueRequestInput](../models/InvoicePaymentDueRequestInput.md#invoicepaymentduerequestinput) | When the invoice is due. Omit it to use merchant_default. The invoice's payment_due object returns the resolved type, and you can send it back unchanged on update. Default: `{"type":"merchant_default"}`. When an invoice is due, used when creating or updating an invoice: no due date, a fixed time, payment terms, or a default. |
| `po_number` | Optional | string | The buyer's purchase order number, printed on the invoice and PDF. minLength: `1`. |
| `quick_pay` | Optional | [CreateInvoiceQuickPayRequestInput](../models/CreateInvoiceQuickPayRequestInput.md#createinvoicequickpayrequestinput) | Order details for an invoice with no existing order. Flint creates the backing order from them. Send exactly one of order_id or quick_pay. Inline order details for creating an invoice as `quick_pay`: line items, discounts, notes, customer, tip, and inventory routing. |
| `recipient_email` | Optional | string | Where Flint emails the invoice and its reminders. Required at issue when delivery resolves to email, and when you schedule the issue. minLength: `1`. |
| `reference` | Optional | string | Your reference for the invoice, printed on the invoice and PDF. Put the buyer's purchase order number in po_number instead. minLength: `1`. |
| `remit_to_address` | Optional | [AddressRequestInput](../models/AddressRequestInput.md#addressrequestinput) | Where the buyer sends offline payments, printed on the invoice. Omit it to use the invoice settings remit-to address. A postal address you supply when creating or updating a customer, invoice, fulfillment, or delivery selection. Send null for `line2` to clear it. |
| `schedule_entries` | Optional | Array of [InvoiceScheduleEntryWriteInput](../models/InvoiceScheduleEntryWriteInput.md#invoicescheduleentrywriteinput) | Complete draft payment schedule with at most 14 entries. Validation errors identify the entry by index, such as schedule_entries[3].kind. Enum values are case-sensitive and must not contain surrounding whitespace. Omission preserves the current or default schedule; [] clears the authored schedule. Null is not accepted. On PATCH, include invoice_schedule_entry_id to retain an entry and expected_version to detect concurrent edits. maxItems: `14`. |
| `scheduled_issue_at` | Optional | string or null | When Flint issues and delivers this draft, as an RFC 3339 timestamp in the future. A scheduled issue delivers by email, so the draft needs recipient_email. Cannot be combined with issue. null is the same as omitting it. Format: `date-time`. minLength: `1`. |
| `service_date` | Optional | string | The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it as written, without timezone conversion. Format: `date`. minLength: `1`. |

#### invoices.create body oneOf variant 1



#### invoices.create body oneOf variant 1 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `cc_emails` | Optional | Array of string | Additional addresses copied on the invoice email and every reminder. Items: minLength: `1`. |
| `collection` | Optional | [InvoiceCollectionRequestInput](../models/InvoiceCollectionRequestInput.md#invoicecollectionrequestinput) | How the invoice is collected. Omit it to use merchant_default. The invoice's collection object returns the resolved mode, and you can send it back unchanged on update. How an invoice is collected, used when creating or updating an invoice: a `mode`, an optional saved payment method, and a payment policy. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. Use it as your sync key: it isn't printed on the invoice, and GET /v1/invoices filters on it by exact match. minLength: `1`. maxLength: `255`. |
| `footer` | Optional | string | Fine print at the bottom of the invoice and PDF. Omit it to use the invoice settings default_footer. minLength: `1`. |
| `issue` | Optional | [CreateInvoiceIssueRequestInput](../models/CreateInvoiceIssueRequestInput.md#createinvoiceissuerequestinput) | Issue the invoice immediately after creating it. An empty object uses merchant_default delivery. Cannot be combined with a scheduled_issue_at timestamp. Options for issuing an invoice as you create it. `delivery_mode` chooses how the invoice reaches its recipient. |
| `memo` | Optional | string | Message to the customer, printed on the invoice and PDF. Omit it to use the invoice settings default_memo. minLength: `1`. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `order_id` | Required | string | The open order to bill. It must have no payments, refunds, or other active invoice. Send exactly one of order_id or quick_pay. minLength: `1`. |
| `payment_due` | Optional | [InvoicePaymentDueRequestInput](../models/InvoicePaymentDueRequestInput.md#invoicepaymentduerequestinput) | When the invoice is due. Omit it to use merchant_default. The invoice's payment_due object returns the resolved type, and you can send it back unchanged on update. Default: `{"type":"merchant_default"}`. When an invoice is due, used when creating or updating an invoice: no due date, a fixed time, payment terms, or a default. |
| `po_number` | Optional | string | The buyer's purchase order number, printed on the invoice and PDF. minLength: `1`. |
| `quick_pay` | Optional | [CreateInvoiceQuickPayRequestInput](../models/CreateInvoiceQuickPayRequestInput.md#createinvoicequickpayrequestinput) | Order details for an invoice with no existing order. Flint creates the backing order from them. Send exactly one of order_id or quick_pay. Inline order details for creating an invoice as `quick_pay`: line items, discounts, notes, customer, tip, and inventory routing. |
| `recipient_email` | Optional | string | Where Flint emails the invoice and its reminders. Required at issue when delivery resolves to email, and when you schedule the issue. minLength: `1`. |
| `reference` | Optional | string | Your reference for the invoice, printed on the invoice and PDF. Put the buyer's purchase order number in po_number instead. minLength: `1`. |
| `remit_to_address` | Optional | [AddressRequestInput](../models/AddressRequestInput.md#addressrequestinput) | Where the buyer sends offline payments, printed on the invoice. Omit it to use the invoice settings remit-to address. A postal address you supply when creating or updating a customer, invoice, fulfillment, or delivery selection. Send null for `line2` to clear it. |
| `schedule_entries` | Optional | Array of [InvoiceScheduleEntryWriteInput](../models/InvoiceScheduleEntryWriteInput.md#invoicescheduleentrywriteinput) | Complete draft payment schedule with at most 14 entries. Validation errors identify the entry by index, such as schedule_entries[3].kind. Enum values are case-sensitive and must not contain surrounding whitespace. Omission preserves the current or default schedule; [] clears the authored schedule. Null is not accepted. On PATCH, include invoice_schedule_entry_id to retain an entry and expected_version to detect concurrent edits. maxItems: `14`. |
| `scheduled_issue_at` | Optional | string or null | When Flint issues and delivers this draft, as an RFC 3339 timestamp in the future. A scheduled issue delivers by email, so the draft needs recipient_email. Cannot be combined with issue. null is the same as omitting it. Format: `date-time`. minLength: `1`. |
| `service_date` | Optional | string | The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it as written, without timezone conversion. Format: `date`. minLength: `1`. |

#### invoices.create body oneOf variant 2



#### invoices.create body oneOf variant 2 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `cc_emails` | Optional | Array of string | Additional addresses copied on the invoice email and every reminder. Items: minLength: `1`. |
| `collection` | Optional | [InvoiceCollectionRequestInput](../models/InvoiceCollectionRequestInput.md#invoicecollectionrequestinput) | How the invoice is collected. Omit it to use merchant_default. The invoice's collection object returns the resolved mode, and you can send it back unchanged on update. How an invoice is collected, used when creating or updating an invoice: a `mode`, an optional saved payment method, and a payment policy. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. Use it as your sync key: it isn't printed on the invoice, and GET /v1/invoices filters on it by exact match. minLength: `1`. maxLength: `255`. |
| `footer` | Optional | string | Fine print at the bottom of the invoice and PDF. Omit it to use the invoice settings default_footer. minLength: `1`. |
| `issue` | Optional | [CreateInvoiceIssueRequestInput](../models/CreateInvoiceIssueRequestInput.md#createinvoiceissuerequestinput) | Issue the invoice immediately after creating it. An empty object uses merchant_default delivery. Cannot be combined with a scheduled_issue_at timestamp. Options for issuing an invoice as you create it. `delivery_mode` chooses how the invoice reaches its recipient. |
| `memo` | Optional | string | Message to the customer, printed on the invoice and PDF. Omit it to use the invoice settings default_memo. minLength: `1`. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `order_id` | Optional | string | The open order to bill. It must have no payments, refunds, or other active invoice. Send exactly one of order_id or quick_pay. minLength: `1`. |
| `payment_due` | Optional | [InvoicePaymentDueRequestInput](../models/InvoicePaymentDueRequestInput.md#invoicepaymentduerequestinput) | When the invoice is due. Omit it to use merchant_default. The invoice's payment_due object returns the resolved type, and you can send it back unchanged on update. Default: `{"type":"merchant_default"}`. When an invoice is due, used when creating or updating an invoice: no due date, a fixed time, payment terms, or a default. |
| `po_number` | Optional | string | The buyer's purchase order number, printed on the invoice and PDF. minLength: `1`. |
| `quick_pay` | Required | [CreateInvoiceQuickPayRequestInput](../models/CreateInvoiceQuickPayRequestInput.md#createinvoicequickpayrequestinput) | Order details for an invoice with no existing order. Flint creates the backing order from them. Send exactly one of order_id or quick_pay. Inline order details for creating an invoice as `quick_pay`: line items, discounts, notes, customer, tip, and inventory routing. |
| `recipient_email` | Optional | string | Where Flint emails the invoice and its reminders. Required at issue when delivery resolves to email, and when you schedule the issue. minLength: `1`. |
| `reference` | Optional | string | Your reference for the invoice, printed on the invoice and PDF. Put the buyer's purchase order number in po_number instead. minLength: `1`. |
| `remit_to_address` | Optional | [AddressRequestInput](../models/AddressRequestInput.md#addressrequestinput) | Where the buyer sends offline payments, printed on the invoice. Omit it to use the invoice settings remit-to address. A postal address you supply when creating or updating a customer, invoice, fulfillment, or delivery selection. Send null for `line2` to clear it. |
| `schedule_entries` | Optional | Array of [InvoiceScheduleEntryWriteInput](../models/InvoiceScheduleEntryWriteInput.md#invoicescheduleentrywriteinput) | Complete draft payment schedule with at most 14 entries. Validation errors identify the entry by index, such as schedule_entries[3].kind. Enum values are case-sensitive and must not contain surrounding whitespace. Omission preserves the current or default schedule; [] clears the authored schedule. Null is not accepted. On PATCH, include invoice_schedule_entry_id to retain an entry and expected_version to detect concurrent edits. maxItems: `14`. |
| `scheduled_issue_at` | Optional | string or null | When Flint issues and delivers this draft, as an RFC 3339 timestamp in the future. A scheduled issue delivers by email, so the draft needs recipient_email. Cannot be combined with issue. null is the same as omitting it. Format: `date-time`. minLength: `1`. |
| `service_date` | Optional | string | The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it as written, without timezone conversion. Format: `date`. minLength: `1`. |

Body model: [CreateInvoiceRequestInput](../models/CreateInvoiceRequestInput.md#createinvoicerequestinput).

Fields: [invoices.create body fields](#invoicescreate-body-fields).

#### invoices.create body oneOf variant 1



Fields: [invoices.create body oneOf variant 1 fields](#invoicescreate-body-oneof-variant-1-fields).

#### invoices.create body oneOf variant 2



Fields: [invoices.create body oneOf variant 2 fields](#invoicescreate-body-oneof-variant-2-fields).

#### Response

Returned payload: [Invoice](../models/Invoice.md#invoice).

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
| 502 | ServerError | server |
| 503 | ServerError | server |
| 504 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key required — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->invoices->create([
  'order_id' => 'example',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/invoices-create.php)

### invoices.get

Returns a single invoice by ID.

`GET /v1/invoices/{invoice_id}`

Signature: `get(string|Model $invoice_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string |  |
| `expand` | Optional | Array of string | Items values: `"customer"`, `"order"`. |

#### Response

Returned payload: [Invoice](../models/Invoice.md#invoice).

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

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->invoices->get('example', [], new RequestOptions());
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
| `invoice_id` | Required | string |  |
| `invoice_manual_payment_id` | Required | string |  |

#### Response

Returned payload: [InvoiceManualPayment](../models/InvoiceManualPayment.md#invoicemanualpayment).

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

Complete body and metadata: `getManualPaymentWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->invoices->getManualPayment('example', 'example', [], new RequestOptions());
```

[Complete runnable example](../examples/invoices-getManualPayment.php)

### invoices.getOrCreateCheckoutSession

Returns the current open invoice checkout session and aligned card attempt when they still match the invoice balance and collection run. A newly created session and attempt share the fixed expiration of the active invoice public-link generation. Unexpired sessions are reused regardless of remaining lifetime; active payment work returns a resolving conflict instead of creating competing collection. When the invoice's order has items to deliver, a new session offers the delivery methods in settings.checkout.default_delivery_method_ids, and the request fails with a validation error when those methods cannot deliver every item. return_url sets where the checkout sends the buyer after paying. A reused session takes a new return_url only until a payment starts on it, and keeps the one it has after that.

`POST /v1/invoices/{invoice_id}/checkout-session`

Signature: `getOrCreateCheckoutSession(string|Model $invoice_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Optional | [InvoiceCheckoutSessionRequestInput](../models/InvoiceCheckoutSessionRequestInput.md#invoicecheckoutsessionrequestinput) | The request body for: Create an invoice checkout session for the current buyer; Get or create invoice checkout collection. |

#### Response

Returned payload: [InvoiceCheckoutSessionResult](../models/InvoiceCheckoutSessionResult.md#invoicecheckoutsessionresult).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getOrCreateCheckoutSessionWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->invoices->getOrCreateCheckoutSession('example', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/invoices-getOrCreateCheckoutSession.php)

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
| `invoice_id` | Required | string |  |
| `invoice_payment_attempt_id` | Required | string |  |

#### Response

Returned payload: [InvoicePaymentAttempt](../models/InvoicePaymentAttempt.md#invoicepaymentattempt).

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

Complete body and metadata: `getPaymentAttemptWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->invoices->getPaymentAttempt('example', 'example', [], new RequestOptions());
```

[Complete runnable example](../examples/invoices-getPaymentAttempt.php)

### invoices.getPDF

Downloads the merchant-authenticated PDF artifact generated from the invoice snapshot.

`GET /v1/invoices/{invoice_id}/pdf`

Signature: `getPDF(string|Model $invoice_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string |  |

#### Response

Response body (inside Result.data): null.

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

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->invoices->getPDF('example', [], new RequestOptions());
```

[Complete runnable example](../examples/invoices-getPDF.php)

### invoices.issue

Issues the invoice, creates the buyer-access link, and uses the selected delivery mode. Safe to retry with the same Idempotency-Key.

`POST /v1/invoices/{invoice_id}/issue`

Signature: `issue(string|Model $invoice_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [IssueInvoiceRequestInput](../models/IssueInvoiceRequestInput.md#issueinvoicerequestinput) | The request body for: Issue invoice. |

Body model: [IssueInvoiceRequestInput](../models/IssueInvoiceRequestInput.md#issueinvoicerequestinput).

#### invoices.issue body fields

Field definitions: [shared fields](../models/IssueInvoiceRequestInput.md#issueinvoicerequestinput).

#### Response

Returned payload: [Invoice](../models/Invoice.md#invoice).

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
| 502 | ServerError | server |
| 503 | ServerError | server |
| 504 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `issueWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->invoices->issue('example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/invoices-issue.php)

### invoices.list

Returns a paginated list of invoices for the authenticated merchant.

`GET /v1/invoices`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"draft"`, `"open"`, `"partially_paid"`, `"paid"`, `"void"`, `"uncollectible"`, `"credited"`. |
| `idempotency_key` | Optional | string | minLength: `1`. maxLength: `255`. |
| `customer_id` | Optional | string |  |
| `order_id` | Optional | string |  |
| `subscription_id` | Optional | string |  |
| `external_reference_id` | Optional | string | minLength: `1`. maxLength: `255`. |
| `invoice_number` | Optional | string | minLength: `1`. maxLength: `255`. |
| `collection_mode` | Optional | Array of string | minItems: `1`. Items values: `"buyer_initiated"`, `"automatic"`, `"external"`. |
| `issued_after` | Optional | string | Format: `date-time`. |
| `issued_before` | Optional | string | Format: `date-time`. |
| `updated_after` | Optional | string | Format: `date-time`. |
| `updated_before` | Optional | string | Format: `date-time`. |
| `created_after` | Optional | string | Format: `date-time`. |
| `created_before` | Optional | string | Format: `date-time`. |
| `due_after` | Optional | string | Format: `date-time`. |
| `due_before` | Optional | string | Format: `date-time`. |
| `is_overdue` | Optional | boolean |  |
| `has_outstanding_balance` | Optional | boolean |  |
| `sort_by` | Optional | string | Default: `"created_at"`. Values: `"created_at"`, `"updated_at"`, `"due_at"`, `"invoice_number"`, `"outstanding_money"`. |
| `sort_direction` | Optional | string | Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `query` | Optional | string |  |
| `expand` | Optional | Array of string | Items values: `"customer"`, `"order"`. |

#### Response

Returned payload: [InvoicesListResponse200](../models/InvoicesListResponse200.md#invoiceslistresponse200).

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

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`, `listPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->invoices->list([], new RequestOptions());
```

[Complete runnable example](../examples/invoices-list.php)

### invoices.listActivities

Returns a read-only history of an invoice for timelines and debugging, newest first. Use sort_direction=asc for chronological order. Read the invoice and the resources each row references for authoritative state.

`GET /v1/invoices/{invoice_id}/activities`

Signature: `listActivities(string|Model $invoice_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string |  |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `sort_direction` | Optional | string | Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `activity_type` | Optional | Array of string | minItems: `1`. Items values: [25 declared values](#invoiceslistactivities-input-activity_type--values). |

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

Returned payload: [InvoicesListActivitiesResponse200](../models/InvoicesListActivitiesResponse200.md#invoiceslistactivitiesresponse200).

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

Complete body and metadata: `listActivitiesWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listActivitiesItems`, `listActivitiesPages`, `listActivitiesPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->invoices->listActivities('example', [], new RequestOptions());
```

[Complete runnable example](../examples/invoices-listActivities.php)

### invoices.listDeliveryAttempts

Returns email delivery attempts for send and reminder actions.

`GET /v1/invoices/{invoice_id}/delivery-attempts`

Signature: `listDeliveryAttempts(string|Model $invoice_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string |  |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |

#### Response

Returned payload: [InvoicesListDeliveryAttemptsResponse200](../models/InvoicesListDeliveryAttemptsResponse200.md#invoiceslistdeliveryattemptsresponse200).

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

Complete body and metadata: `listDeliveryAttemptsWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listDeliveryAttemptsItems`, `listDeliveryAttemptsPages`, `listDeliveryAttemptsPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->invoices->listDeliveryAttempts('example', [], new RequestOptions());
```

[Complete runnable example](../examples/invoices-listDeliveryAttempts.php)

### invoices.listManualPayments

Lists every manual payment, including reversed payments, ordered by received_at descending with invoice_manual_payment_id descending as the tiebreaker.

`GET /v1/invoices/{invoice_id}/manual-payments`

Signature: `listManualPayments(string|Model $invoice_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string |  |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `idempotency_key` | Optional | string | minLength: `1`. maxLength: `255`. |

#### Response

Returned payload: [InvoicesListManualPaymentsResponse200](../models/InvoicesListManualPaymentsResponse200.md#invoiceslistmanualpaymentsresponse200).

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

Complete body and metadata: `listManualPaymentsWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listManualPaymentsItems`, `listManualPaymentsPages`, `listManualPaymentsPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->invoices->listManualPayments('example', [], new RequestOptions());
```

[Complete runnable example](../examples/invoices-listManualPayments.php)

### invoices.listPaymentAttempts

Lists card and ACH collection attempts for an invoice in reverse chronological order.

`GET /v1/invoices/{invoice_id}/payment-attempts`

Signature: `listPaymentAttempts(string|Model $invoice_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

Field definitions: [shared fields](#request-fields-13).

#### Response

Returned payload: [InvoicesListPaymentAttemptsResponse200](../models/InvoicesListPaymentAttemptsResponse200.md#invoiceslistpaymentattemptsresponse200).

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

Complete body and metadata: `listPaymentAttemptsWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listPaymentAttemptsItems`, `listPaymentAttemptsPages`, `listPaymentAttemptsPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->invoices->listPaymentAttempts('example', [], new RequestOptions());
```

[Complete runnable example](../examples/invoices-listPaymentAttempts.php)

### invoices.markUncollectible

Closes the outstanding balance as a write-off and releases the order's invoice collection authority. Safe to retry with the same Idempotency-Key.

`POST /v1/invoices/{invoice_id}/mark-uncollectible`

Signature: `markUncollectible(string|Model $invoice_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Optional | [ResourceVersionRequestInput](../models/ResourceVersionRequestInput.md#resourceversionrequestinput) | The request body for: Mark invoice uncollectible; Reactivate a subscription; Reactivate one of the current buyer's subscriptions; Regenerate invoice public link; Resume one of the current buyer's subscriptions; Resume subscription; Reverse credit note allocation; Void credit note; Void invoice. |

#### Response

Returned payload: [Invoice](../models/Invoice.md#invoice).

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

Complete body and metadata: `markUncollectibleWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->invoices->markUncollectible('example', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/invoices-markUncollectible.php)

### invoices.recordManualPayment

Applies an offline/manual payment to an issued invoice. Recording is rejected with INVOICE_PAYMENT_RESOLVING while an online payment is still resolving; an idle open checkout does not block. A payment that clears the balance invalidates the open checkout session. Safe to retry with the same Idempotency-Key.

`POST /v1/invoices/{invoice_id}/manual-payments`

Signature: `recordManualPayment(string|Model $invoice_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateInvoiceManualPaymentRequestInput](../models/CreateInvoiceManualPaymentRequestInput.md#createinvoicemanualpaymentrequestinput) | The request body for: Create invoice manual payment. |

Body model: [CreateInvoiceManualPaymentRequestInput](../models/CreateInvoiceManualPaymentRequestInput.md#createinvoicemanualpaymentrequestinput).

#### invoices.recordManualPayment body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/CreditNoteLineItemCorrectionQuantityAmountMoney.md#creditnotelineitemcorrectionquantityamountmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `expected_version` | Optional | integer string | Expected version of the invoice. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `note` | Optional | string | minLength: `1`. maxLength: `4096`. |
| `payment_reference` | Optional | string | Caller-owned check, wire, or bank reference, stored unmodified. minLength: `1`. maxLength: `255`. |
| `received_at` | Optional | string | When the payment was received. Defaults to now. Format: `date-time`. minLength: `1`. |

#### Response

Returned payload: [InvoiceManualPaymentResult](../models/InvoiceManualPaymentResult.md#invoicemanualpaymentresult).

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

Complete body and metadata: `recordManualPaymentWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key required — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->invoices->recordManualPayment('example', [
  'amount_money' => (object) [
    'amount' => '100',
    'currency' => 'USD',
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/invoices-recordManualPayment.php)

### invoices.regeneratePublicLink

Revokes the current buyer-access link and all checkout credentials derived from it, then returns a new public_url. The current checkout session and its payment lineage are preserved. Returns 409 CUSTOMER_DELETION_PROCESSING if the customer is being deleted or was deleted. Safe to retry with the same Idempotency-Key.

`POST /v1/invoices/{invoice_id}/regenerate-public-link`

Signature: `regeneratePublicLink(string|Model $invoice_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

Field definitions: [shared fields](#request-fields-15). Models: [ResourceVersionRequestInput](../models/ResourceVersionRequestInput.md#resourceversionrequestinput).

#### Response

Returned payload: [Invoice](../models/Invoice.md#invoice).

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

Complete body and metadata: `regeneratePublicLinkWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->invoices->regeneratePublicLink('example', null, new RequestOptions(idempotencyKey: $idempotencyKey));
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
| `invoice_id` | Required | string |  |
| `invoice_manual_payment_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [ReverseInvoiceManualPaymentRequestInput](../models/ReverseInvoiceManualPaymentRequestInput.md#reverseinvoicemanualpaymentrequestinput) | The request body for: Reverse manual invoice payment. |

Body model: [ReverseInvoiceManualPaymentRequestInput](../models/ReverseInvoiceManualPaymentRequestInput.md#reverseinvoicemanualpaymentrequestinput).

#### invoices.reverseManualPayment body fields

Field definitions: [shared fields](../models/ReverseInvoiceManualPaymentRequestInput.md#reverseinvoicemanualpaymentrequestinput).

#### Response

Returned payload: [InvoiceManualPaymentResult](../models/InvoiceManualPaymentResult.md#invoicemanualpaymentresult).

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

Complete body and metadata: `reverseManualPaymentWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->invoices->reverseManualPayment('example', 'example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/invoices-reverseManualPayment.php)

### invoices.sendReminder

Attempts a reminder email for an already issued collectible invoice. Safe to retry with the same Idempotency-Key. Accepts an empty body or {}.

`POST /v1/invoices/{invoice_id}/send-reminder`

Signature: `sendReminder(string|Model $invoice_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [Invoice](../models/Invoice.md#invoice).

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
| 504 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `sendReminderWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->invoices->sendReminder('example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/invoices-sendReminder.php)

### invoices.update

Updates mutable fields on a draft invoice. Null is rejected for cc_emails, collection, payment_due, schedule_entries, reminders_paused, and expected_version; omit them to leave them unchanged. Send [] to clear cc_emails or the authored schedule. After issue, the only writable field is reminders_paused, which pauses or resumes automatic reminders on an open or partially paid invoice.

`PATCH /v1/invoices/{invoice_id}`

Signature: `update(string|Model $invoice_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdateInvoiceRequestInput](../models/UpdateInvoiceRequestInput.md#updateinvoicerequestinput) | The request body for: Update invoice. |

Body model: [UpdateInvoiceRequestInput](../models/UpdateInvoiceRequestInput.md#updateinvoicerequestinput).

#### invoices.update body fields

Field definitions: [shared fields](../models/UpdateInvoiceRequestInput.md#updateinvoicerequestinput). Models: [InvoiceCollectionRequestInput](../models/InvoiceCollectionRequestInput.md#invoicecollectionrequestinput), [InvoicePaymentDueRequestInput](../models/InvoicePaymentDueRequestInput.md#invoicepaymentduerequestinput), [AddressRequestInput](../models/AddressRequestInput.md#addressrequestinput), [InvoiceScheduleEntryWriteInput](../models/InvoiceScheduleEntryWriteInput.md#invoicescheduleentrywriteinput).

#### Response

Returned payload: [Invoice](../models/Invoice.md#invoice).

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

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->invoices->update('example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/invoices-update.php)

### invoices.voidResource

Voids an unpaid invoice so the associated order can be edited or collected again. An invoice with an issued credit note against it cannot be voided until that credit note is voided.

`POST /v1/invoices/{invoice_id}/void`

Signature: `voidResource(string|Model $invoice_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

Field definitions: [shared fields](#request-fields-15). Models: [ResourceVersionRequestInput](../models/ResourceVersionRequestInput.md#resourceversionrequestinput).

#### Response

Returned payload: [Invoice](../models/Invoice.md#invoice).

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

Complete body and metadata: `voidResourceWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->invoices->voidResource('example', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/invoices-voidResource.php)

### invoices.waiveLateFee

Waives the unpaid remainder of an assessed late fee. Collected money is not refunded. The reason is visible only to the merchant.

`POST /v1/invoices/{invoice_id}/late-fees/{invoice_late_fee_id}/waive`

Signature: `waiveLateFee(string|Model $invoice_id, string|Model $invoice_late_fee_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string |  |
| `invoice_late_fee_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [WaiveInvoiceLateFeeRequestInput](../models/WaiveInvoiceLateFeeRequestInput.md#waiveinvoicelatefeerequestinput) | The request body for: Waive an unpaid invoice late fee. |

Body model: [WaiveInvoiceLateFeeRequestInput](../models/WaiveInvoiceLateFeeRequestInput.md#waiveinvoicelatefeerequestinput).

#### invoices.waiveLateFee body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `reason_message` | Required | string | Your note explaining this action. minLength: `1`. maxLength: `4096`. |

#### Response

Returned payload: [Invoice](../models/Invoice.md#invoice).

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

Complete body and metadata: `waiveLateFeeWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->invoices->waiveLateFee('example', 'example', [
  'reason_message' => 'example',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/invoices-waiveLateFee.php)

