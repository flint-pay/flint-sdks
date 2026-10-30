[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateInvoiceRequest

The request body for: Update invoice.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `cc_emails` | Optional | Array of string | Additional addresses copied on the invoice email and every reminder. Send the complete list; [] removes every address. Items: minLength: `1`. |
| `collection` | Optional | [InvoiceCollectionRequest](../models/InvoiceCollectionRequest.md#invoicecollectionrequest) | How the invoice is collected. Send the invoice's collection object back unchanged, or a new one. merchant_default resolves again from invoice settings when the draft is written. How an invoice is collected, used when creating or updating an invoice: a `mode`, an optional saved payment method, and a payment policy. |
| `expected_version` | Optional | integer | Invoice version last read. Required when schedule_entries is present. Required when any of these fields is present: schedule_entries. Format: `int64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Use it as your sync key: it isn't printed on the invoice, and GET /v1/invoices filters on it by exact match. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `footer` | Optional | string or null | Fine print at the bottom of the invoice and PDF. Send null to clear it. minLength: `1`. |
| `memo` | Optional | string or null | Message to the customer, printed on the invoice and PDF. Send null to clear it. minLength: `1`. |
| `metadata` | Optional | [MetadataPatchRequest](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `payment_due` | Optional | [InvoicePaymentDueRequest](../models/InvoicePaymentDueRequest.md#invoicepaymentduerequest) | When the invoice is due. Send the invoice's payment_due object back unchanged, or a new one. Sending payment_terms captures the term's current revision again. When an invoice is due, used when creating or updating an invoice: no due date, a fixed time, payment terms, or a default. |
| `po_number` | Optional | string or null | The buyer's purchase order number, printed on the invoice and PDF. Send null to clear it. minLength: `1`. |
| `recipient_email` | Optional | string or null | Where Flint emails the invoice and its reminders. Required at issue when delivery resolves to email, and when you schedule the issue. Send null to clear it. minLength: `1`. |
| `reference` | Optional | string or null | Your reference for the invoice, printed on the invoice and PDF. Put the buyer's purchase order number in po_number instead. Send null to clear it. minLength: `1`. |
| `reminders_paused` | Optional | boolean | Pauses (true) or resumes (false) the automatic reminder cadence. Accepted only on an open or partially paid invoice with a balance remaining, and only alone or with expected_version: every other field is draft-only. While paused, manual send-reminder calls still work, and invoice.overdue and invoice.late_fee_due still fire. On resume, reminder times that passed while paused do not fire. Sending the current value succeeds without changing the invoice. |
| `remit_to_address` | Optional | [AddressRequest](../models/AddressRequest.md#addressrequest) | Where the buyer sends offline payments, printed on the invoice. Omit it to use the invoice settings remit-to address. A complete postal address. State and postal_code are required for US addresses and optional for other countries. Send null or omit line2, state, and postal_code when the address has none. |
| `schedule_entries` | Optional | Array of [InvoiceScheduleEntryWrite](../models/InvoiceScheduleEntryWrite.md#invoicescheduleentrywrite) | Complete draft payment schedule with at most 14 entries. Validation errors identify the entry by index, such as schedule_entries[3].kind. Enum values are case-sensitive and must not contain surrounding whitespace. Omission preserves the current or default schedule; [] clears the authored schedule. Null is not accepted. On PATCH, include invoice_schedule_entry_id to retain an entry and expected_version to detect concurrent edits. maxItems: `14`. |
| `scheduled_issue_at` | Optional | string or null | When Flint issues and delivers this draft, as an RFC 3339 timestamp in the future. A scheduled issue delivers by email, so the draft needs recipient_email. Clearing it cancels the scheduled issue. Send null to clear it. Format: `date-time`. minLength: `1`. |
| `service_date` | Optional | string or null | The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it as written, without timezone conversion. Send null to clear it. Format: `date`. minLength: `1`. |

