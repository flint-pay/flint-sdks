[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateInvoiceRequestInput

The request body for: Create invoice.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `cc_emails` | Optional | Array of string | Items: minLength: `1`. |
| `collection` | Optional | [InvoiceCollectionRequestInput](../models/InvoiceCollectionRequestInput.md#invoicecollectionrequestinput) | How an invoice is collected, used when creating or updating an invoice: a `mode`, an optional saved payment method, and a payment policy. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `footer` | Optional | string | minLength: `1`. |
| `issue` | Optional | [CreateInvoiceIssueRequestInput](../models/CreateInvoiceIssueRequestInput.md#createinvoiceissuerequestinput) | Issue the invoice immediately after creating it. An empty object uses merchant_default delivery. Cannot be combined with a scheduled_issue_at timestamp. Options for issuing an invoice as you create it. `delivery_mode` chooses how the invoice reaches its recipient. |
| `memo` | Optional | string | minLength: `1`. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `order_id` | Conditional | string | minLength: `1`. |
| `payment_due` | Optional | [InvoicePaymentDueRequestInput](../models/InvoicePaymentDueRequestInput.md#invoicepaymentduerequestinput) | When an invoice is due, used when creating or updating an invoice: no due date, a fixed time, payment terms, or a default. Default: `{"type":"merchant_default"}`. When an invoice is due, used when creating or updating an invoice: no due date, a fixed time, payment terms, or a default. |
| `po_number` | Optional | string | minLength: `1`. |
| `quick_pay` | Conditional | [CreateInvoiceQuickPayRequestInput](../models/CreateInvoiceQuickPayRequestInput.md#createinvoicequickpayrequestinput) | Inline order details for creating an invoice as `quick_pay`: line items, discounts, notes, customer, tip, and inventory routing. |
| `recipient_email` | Optional | string | minLength: `1`. |
| `reference` | Optional | string | minLength: `1`. |
| `remit_to_address` | Optional | [AddressRequestInput](../models/AddressRequestInput.md#addressrequestinput) | A postal address you supply when creating or updating a customer, invoice, fulfillment, or delivery selection. Send null for `line2` to clear it. |
| `schedule_entries` | Optional | Array of [InvoiceScheduleEntryWriteInput](../models/InvoiceScheduleEntryWriteInput.md#invoicescheduleentrywriteinput) | Complete draft payment schedule with at most 14 entries. Validation errors identify the entry by index, such as schedule_entries[3].kind. Enum values are case-sensitive and must not contain surrounding whitespace. Omission preserves the current or default schedule; [] clears the authored schedule. Null is not accepted. On PATCH, include invoice_schedule_entry_id to retain an entry and expected_version to detect concurrent edits. maxItems: `14`. |
| `scheduled_issue_at` | Optional | string or null | RFC3339 timestamp. Send null to clear it. Format: `date-time`. minLength: `1`. |
| `service_date` | Optional | string | Calendar date in YYYY-MM-DD format. Format: `date`. minLength: `1`. |

### CreateInvoiceRequestInput variant 1

oneOf variant 1.

- Condition: not (present(`issue`, `scheduled_issue_at`) and `scheduled_issue_at`: string).
- Condition: not (at least one(present(`quick_pay`))).
- Required: `order_id`.
- Optional: `quick_pay`.

### CreateInvoiceRequestInput variant 2

oneOf variant 2.

- Condition: not (present(`issue`, `scheduled_issue_at`) and `scheduled_issue_at`: string).
- Condition: not (at least one(present(`order_id`))).
- Required: `quick_pay`.
- Optional: `order_id`.

