[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ExpandedInvoiceSummary

An invoice's summary fields, including status, due date, and paid, outstanding, and refunded amounts, returned when the invoice is expanded.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `collection_block_status` | Optional | string | Whether collection is blocked. While it is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Values: `"none"`, `"inventory_blocked"`, `"resolved"`. |
| `created_at` | Optional | string | When the invoice was created. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `customer_id` | Optional | string | Customer billed by the invoice. Absent when the invoice has no customer. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `due_date` | Optional | string | Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only after this date ends. Automatic collection runs at the later of issue and the start of this date. With payment terms, issue computes this date from issued_at. Absent when there is no due date. Format: `date`. Example: `"2026-08-02"`. |
| `invoice_id` | Required | string | Flint invoice ID. Example: `"inv_01KEZF7C00A5GEBMWHEAJFSAR4"`. |
| `invoice_number` | Optional | string | Sequential document number assigned when the invoice is issued. Absent on a draft. |
| `is_overdue` | Required | boolean | Whether the invoice is open or partially_paid and past due with a balance remaining, as is_overdue on the full Invoice reports it. |
| `order_id` | Optional | string | The order the invoice bills. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `outstanding_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | What is still owed, as outstanding_money on the full Invoice reports it: never below zero, 0 on paid, credited, uncollectible, and voided invoices, and equal to total_money on a draft. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `outstanding_money`: [field definitions](../models/ExpandedInvoiceSummary.md#expandedinvoicesummaryoutstanding_money). |
| `paid_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Payments collected toward this invoice, online or as recorded manual payments, minus reversed payments, including payments toward late fees. Never below zero. Disputes, including losses, don't reduce it. Refunds don't reduce it; they are in refunded_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `paid_money`: [field definitions](../models/BuyerInvoice.md#buyerinvoicepaid_money). |
| `refund_status` | Optional | string | How much of the collected money has been refunded. It doesn't change status. Values: `"none"`, `"partially_refunded"`, `"refunded"`. |
| `refunded_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Money refunded to the buyer after collection. Refunds don't reopen the balance; refund_status summarizes them. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `refunded_money`: [field definitions](../models/BuyerInvoice.md#buyerinvoicerefunded_money). |
| `status` | Required | string | Current invoice status. paid and credited close the current balance and can reopen to open or partially_paid after a payment or credit allocation reversal; invoice.reopened reports that change. An uncollectible invoice accepts manual recovery payments and becomes paid when fully recovered; reversals restore the write-off. voided is final. Refunds change refund_status without reopening the balance. A lost dispute leaves paid_money, the balance, and status unchanged; collecting it again requires a new invoice. Values: `"draft"`, `"open"`, `"partially_paid"`, `"paid"`, `"voided"`, `"uncollectible"`, `"credited"`. |
| `supported_actions` | Required | Array of string | Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. Items values: `"collect"`, `"issue"`, `"mark_uncollectible"`, `"void"`. |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The invoice document total, equal to snapshot.pricing_amounts.total_money. Fixed at issue; a draft previews the backing order total. Late fees are in late_fee_money on the full invoice. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `total_money`: [field definitions](../models/ExpandedInvoiceSummary.md#expandedinvoicesummarytotal_money). |
| `updated_at` | Optional | string | When the invoice last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

### ExpandedInvoiceSummary.outstanding_money

What is still owed, as outstanding_money on the full Invoice reports it: never below zero, 0 on paid, credited, uncollectible, and voided invoices, and equal to total_money on a draft. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### ExpandedInvoiceSummary.paid_money

Field definitions: [BuyerInvoice.paid_money](../models/BuyerInvoice.md#buyerinvoicepaid_money).

### ExpandedInvoiceSummary.refunded_money

Field definitions: [BuyerInvoice.refunded_money](../models/BuyerInvoice.md#buyerinvoicerefunded_money).

### ExpandedInvoiceSummary.total_money

The invoice document total, equal to snapshot.pricing_amounts.total_money. Fixed at issue; a draft previews the backing order total. Late fees are in late_fee_money on the full invoice. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

