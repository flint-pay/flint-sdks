[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceInput

A bill issued to a customer.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `cc_emails` | Required | Array of string | Additional recipients copied on the invoice email and every reminder. |
| `closed_at` | Optional | string | When the current closed interval began. Cleared when status returns to open or partially_paid. A direct move between closed statuses preserves this timestamp. Format: `date-time`. |
| `collection` | Required | [InvoiceCollectionInput](../models/InvoiceCollectionInput.md#invoicecollectioninput) | How this invoice is collected, resolved when the draft is written. Send this object back when updating its collection policy. The invoice collection policy resolved at write time. The object can be sent back when updating a draft. |
| `collection_block_status` | Required | string | Whether collection is blocked. While it is inventory_blocked, collection attempts return INVOICE_COLLECTION_BLOCKED. Values: `"none"`, `"inventory_blocked"`, `"resolved"`. |
| `created_at` | Optional | string | When the invoice was created. Format: `date-time`. |
| `credit_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Credit note credit allocated to this invoice, minus reversed allocations. Unallocated credit isn't included. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `currently_due_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The part of the balance due now. Without schedule_entries, it equals outstanding_money. With schedule_entries, it is the outstanding amount of the first entry, in schedule order, whose due time has arrived and that still has a balance, or 0 when there is none. Always 0 unless the invoice is open or partially_paid. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `customer` | Optional | [ExpandedCustomerSummaryInput](../models/ExpandedCustomerSummaryInput.md#expandedcustomersummaryinput) or null | Summary of the billed customer. Returned only with expand=customer. |
| `customer_id` | Optional | string | Customer billed by this invoice. Absent when the invoice has no customer. |
| `delivery_mode` | Optional | string | How issue delivered the invoice. Values: `"email"`, `"caller_managed"`. |
| `due_at` | Optional | string | When payment is due. With payment terms, issue sets it from issued_at and the terms, counted in the invoice's timezone. Absent when the invoice has no due date. Format: `date-time`. |
| `external_reference_id` | Required | string or null | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `footer` | Required | string or null | Fine print at the bottom of the invoice and PDF. It cannot change after issue. |
| `invoice_id` | Required | string | Flint invoice ID. |
| `invoice_number` | Optional | string | Sequential document number assigned when the invoice is issued. Numbering is per merchant, with test and live mode numbered independently. |
| `is_overdue` | Required | boolean | Whether the invoice is open or partially_paid and past due with a balance remaining. Without schedule_entries, due_at has passed and outstanding_money is above zero; with them, at least one entry is overdue. Computed when the invoice is read. |
| `issued_at` | Optional | string | When the invoice was issued. Absent on a draft. Format: `date-time`. |
| `late_fee_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Late fees assessed after issue, minus waivers, including amounts since paid or written off. Itemized in late_fees. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `late_fees` | Required | Array of [InvoiceLateFeeInput](../models/InvoiceLateFeeInput.md#invoicelatefeeinput) | Late fees assessed on this invoice, each with its paid, waived, written-off, and outstanding amounts. late_fee_money is their assessed total minus waivers. |
| `memo` | Required | string or null | Message to the customer, shown on the invoice. It cannot change after issue. |
| `merchant_id` | Required | string | Merchant that owns this invoice. |
| `metadata` | Optional | Map of string | Caller-owned metadata. |
| `order` | Optional | [ExpandedOrderSummaryInput](../models/ExpandedOrderSummaryInput.md#expandedordersummaryinput) or null | Summary of the backing order. Returned only with expand=order. |
| `order_id` | Required | string | The order this invoice bills. Every invoice has one; quick pay creates it. |
| `outstanding_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | What is still owed: total_money + late_fee_money - paid_money - credit_money - written_off_money, never below zero. 0 on paid, credited, uncollectible, and void invoices; equal to total_money on a draft. Refunds don't change it. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `paid_at` | Optional | string | When the invoice most recently became paid. Cleared when status leaves paid and set again on a later paid transition. Format: `date-time`. |
| `paid_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Payments collected toward this invoice, online or as recorded manual payments, minus reversed payments, including payments toward late fees. Never below zero. Refunds don't reduce it; they are in refunded_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `payment_due` | Required | [InvoicePaymentDueInput](../models/InvoicePaymentDueInput.md#invoicepaymentdueinput) | The resolved due-date policy. Send this object back when updating the draft; payment_terms captures the term's current revision again. The invoice due-date policy resolved at write time. The object can be sent back when updating a draft. |
| `payment_terms_snapshot` | Optional | [InvoicePaymentTermsSnapshotInput](../models/InvoicePaymentTermsSnapshotInput.md#invoicepaymenttermssnapshotinput) | The payment term captured on the draft, with its due date rule and late fee policy. Later changes to the payment term don't affect this invoice. The payment terms saved on an invoice: the term's name, version, due date calculation, and late fee policy. |
| `po_number` | Required | string or null | The buyer's purchase order number. |
| `public_url` | Optional | string | The hosted invoice link where the buyer views and pays the invoice. Present after issue on API reads; webhook payloads leave it out. regenerate-public-link replaces it. Anyone with the link can open the invoice, so treat it as a secret. |
| `recipient_email` | Required | string or null | Where invoice email goes. Email delivery requires it at issue. |
| `reference` | Required | string or null | Customer-facing reference shown on the invoice and PDF. It cannot change after issue. |
| `refund_status` | Required | string | How much of the collected money has been refunded. It doesn't change status. Values: `"none"`, `"partially_refunded"`, `"refunded"`. |
| `refunded_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Money refunded to the buyer after collection. Refunds don't reopen the balance; refund_status summarizes them. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `reminders_paused` | Required | boolean | Whether automatic reminders are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it. |
| `reminders_paused_at` | Optional | string | When automatic reminders were paused. Absent while reminders are active. Format: `date-time`. |
| `remit_to_address` | Optional | [AddressInput](../models/AddressInput.md#addressinput) | Where the buyer sends offline payments, shown on the invoice. Defaults to the invoice settings remit-to address. A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients. |
| `schedule_entries` | Required | Array of [InvoiceScheduleEntryInput](../models/InvoiceScheduleEntryInput.md#invoicescheduleentryinput) | The payment schedule, in schedule order. Always [] when the invoice has no schedule and is collected in one balance. |
| `scheduled_issue_at` | Required | string or null | When Flint will issue and deliver this draft. Cleared when the draft is issued or voided, or when you send null. Format: `date-time`. |
| `service_date` | Required | string or null | The calendar service date shown on the invoice, in YYYY-MM-DD format. Format: `date`. |
| `snapshot` | Optional | [InvoiceSnapshotInput](../models/InvoiceSnapshotInput.md#invoicesnapshotinput) | The billing content of the invoice: line items, discounts, charges, tip, tax, and totals. A draft previews the backing order; issue freezes it, and later order changes don't reach an issued invoice. A frozen copy of an issued invoice's content, including line items, charges, discounts, tax identities, and pricing amounts. |
| `status` | Required | string | Current invoice status. paid and credited close the current balance and can reopen to open or partially_paid after a payment or credit allocation reversal; invoice.reopened reports that change. void and uncollectible are final. Refunds change refund_status without reopening the balance. Values: `"draft"`, `"open"`, `"partially_paid"`, `"paid"`, `"void"`, `"uncollectible"`, `"credited"`. |
| `subscription_id` | Required | string or null | Subscription of the backing order, copied when the draft is created. Null for orders without a subscription. |
| `timezone` | Optional | string | IANA time zone for the invoice's calendar dates, such as due dates from payment terms and reminder and late fee day counts. At issue, an invoice without one takes the invoice settings timezone. |
| `total_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | What the issued invoice bills, equal to snapshot.pricing_amounts.total_money. Fixed at issue; a draft previews the backing order total. Late fees are in late_fee_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `uncollectible_at` | Optional | string | When the invoice was marked uncollectible. Format: `date-time`. |
| `updated_at` | Optional | string | When the invoice last changed. Format: `date-time`. |
| `version` | Required | integer string | Current invoice version. Send this as expected_version when updating the draft. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `viewed_at` | Optional | string | When the buyer first opened the invoice through its hosted invoice link. Recorded on a best-effort basis. Format: `date-time`. |
| `voided_at` | Optional | string | When the invoice was voided. Format: `date-time`. |
| `written_off_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The balance written off when the invoice was marked uncollectible, including unpaid late fees. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

