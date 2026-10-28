[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateInvoiceRequest

The request body for: Create invoice.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `cc_emails` | Optional | Array of string | Additional addresses copied on the invoice email and every reminder. Items: minLength: `1`. |
| `collection` | Optional | [InvoiceCollectionRequest](../models/InvoiceCollectionRequest.md#invoicecollectionrequest) | How the invoice is collected. Omit it to use merchant_default. The invoice's collection object returns the resolved mode, and you can send it back unchanged on update. How an invoice is collected, used when creating or updating an invoice: a `mode`, an optional saved payment method, and a payment policy. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. Use it as your sync key: it isn't printed on the invoice, and GET /v1/invoices filters on it by exact match. minLength: `1`. maxLength: `255`. |
| `footer` | Optional | string | Fine print at the bottom of the invoice and PDF. Omit it to use the invoice settings default_footer. minLength: `1`. |
| `issue` | Optional | [CreateInvoiceIssueRequest](../models/CreateInvoiceIssueRequest.md#createinvoiceissuerequest) | Issue the invoice immediately after creating it. An empty object uses merchant_default delivery. Cannot be combined with a scheduled_issue_at timestamp. Options for issuing an invoice as you create it. `delivery_mode` chooses how the invoice reaches its recipient. |
| `memo` | Optional | string | Message to the customer, printed on the invoice and PDF. Omit it to use the invoice settings default_memo. minLength: `1`. |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. `metadata`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmetadata). |
| `order_id` | Conditional | string | The open order to bill. It must have no payments, refunds, or other active invoice. Send exactly one of order_id or quick_pay. minLength: `1`. |
| `payment_due` | Optional | [InvoicePaymentDueRequest](../models/InvoicePaymentDueRequest.md#invoicepaymentduerequest) | When the invoice is due. Omit it to use merchant_default. The invoice's payment_due object returns the resolved type, and you can send it back unchanged on update. Default: `{"type":"merchant_default"}`. When an invoice is due, used when creating or updating an invoice: no due date, a fixed time, payment terms, or a default. |
| `po_number` | Optional | string | The buyer's purchase order number, printed on the invoice and PDF. minLength: `1`. |
| `quick_pay` | Conditional | [CreateInvoiceQuickPayRequest](../models/CreateInvoiceQuickPayRequest.md#createinvoicequickpayrequest) | Order details for an invoice with no existing order. Flint creates the backing order from them. Send exactly one of order_id or quick_pay. Inline order details for creating an invoice as `quick_pay`: line items, discounts, notes, customer, tip, and inventory routing. |
| `recipient_email` | Optional | string | Where Flint emails the invoice and its reminders. Required at issue when delivery resolves to email, and when you schedule the issue. minLength: `1`. |
| `reference` | Optional | string | Your reference for the invoice, printed on the invoice and PDF. Put the buyer's purchase order number in po_number instead. minLength: `1`. |
| `remit_to_address` | Optional | [AddressRequest](../models/AddressRequest.md#addressrequest) | Where the buyer sends offline payments, printed on the invoice. Omit it to use the invoice settings remit-to address. A complete postal address. State and postal_code are required for US addresses and optional for other countries. Send null or omit line2, state, and postal_code when the address has none. |
| `schedule_entries` | Optional | Array of [InvoiceScheduleEntryWrite](../models/InvoiceScheduleEntryWrite.md#invoicescheduleentrywrite) | Complete draft payment schedule with at most 14 entries. Validation errors identify the entry by index, such as schedule_entries[3].kind. Enum values are case-sensitive and must not contain surrounding whitespace. Omission preserves the current or default schedule; [] clears the authored schedule. Null is not accepted. On PATCH, include invoice_schedule_entry_id to retain an entry and expected_version to detect concurrent edits. maxItems: `14`. |
| `scheduled_issue_at` | Optional | string or null | When Flint issues and delivers this draft, as an RFC 3339 timestamp in the future. A scheduled issue delivers by email, so the draft needs recipient_email. Cannot be combined with issue. null is the same as omitting it. Format: `date-time`. minLength: `1`. |
| `service_date` | Optional | string | The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it as written, without timezone conversion. Format: `date`. minLength: `1`. |
| `type` | Required | string | Selects the type branch. Values: `"order"`, `"quick_pay"`. |

### CreateInvoiceRequest variant 1: `type` = `"order"`

oneOf variant 1: The `order` variant of `CreateInvoiceRequest`..

- Condition: not (present(`issue`, `scheduled_issue_at`) and `scheduled_issue_at`: string).
- Condition: not (at least one(present(`quick_pay`))).
- Required: `order_id`.
- Optional: `quick_pay`.
- Constraints for `type`: Values: `"order"`.

### CreateInvoiceRequest variant 2: `type` = `"quick_pay"`

oneOf variant 2: The `quick_pay` variant of `CreateInvoiceRequest`..

- Condition: not (present(`issue`, `scheduled_issue_at`) and `scheduled_issue_at`: string).
- Condition: not (at least one(present(`order_id`))).
- Required: `quick_pay`.
- Optional: `order_id`.
- Constraints for `type`: Values: `"quick_pay"`.

### CreateInvoiceRequest.metadata

Field definitions: [AddLineItemsRequest.line_items[].metadata](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmetadata).

