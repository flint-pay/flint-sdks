[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateInvoiceRequestInput

The request body for: Update invoice.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `cc_emails` | Optional | Array of string | Items: minLength: `1`. |
| `collection` | Optional | [InvoiceCollectionRequestInput](../models/InvoiceCollectionRequestInput.md#invoicecollectionrequestinput) | How an invoice is collected, used when creating or updating an invoice: a `mode`, an optional saved payment method, and a payment policy. |
| `expected_version` | Optional | integer string | Invoice version last read. Required when schedule_entries is present. Required when any of these fields is present: schedule_entries. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `footer` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `memo` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `metadata` | Optional | Map of (string or null) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `payment_due` | Optional | [InvoicePaymentDueRequestInput](../models/InvoicePaymentDueRequestInput.md#invoicepaymentduerequestinput) | When an invoice is due, used when creating or updating an invoice: no due date, a fixed time, payment terms, or a default. |
| `po_number` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `recipient_email` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `reference` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `reminders_paused` | Optional | boolean | Pauses (true) or resumes (false) the automatic reminder cadence. Accepted only on an open or partially paid invoice with a balance remaining, and only alone or with expected_version: every other field is draft-only. While paused, manual send-reminder calls still work, and invoice.overdue and invoice.late_fee_due still fire. On resume, reminder times that passed while paused do not fire. Sending the current value succeeds without changing the invoice. |
| `remit_to_address` | Optional | [AddressRequestInput](../models/AddressRequestInput.md#addressrequestinput) | A postal address you supply when creating or updating a customer, invoice, fulfillment, or delivery selection. Send null for `line2` to clear it. |
| `schedule_entries` | Optional | Array of [InvoiceScheduleEntryWriteInput](../models/InvoiceScheduleEntryWriteInput.md#invoicescheduleentrywriteinput) | Complete draft payment schedule with at most 14 entries. Validation errors identify the entry by index, such as schedule_entries[3].kind. Enum values are case-sensitive and must not contain surrounding whitespace. Omission preserves the current or default schedule; [] clears the authored schedule. Null is not accepted. On PATCH, include invoice_schedule_entry_id to retain an entry and expected_version to detect concurrent edits. maxItems: `14`. |
| `scheduled_issue_at` | Optional | string or null | RFC3339 timestamp. Send null to clear it. Format: `date-time`. minLength: `1`. |
| `service_date` | Optional | string or null | Calendar date in YYYY-MM-DD format. Send null to clear it. Format: `date`. minLength: `1`. |

