[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantBillingInvoiceInput

A Flint invoice for the merchant's Flint subscription.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | When Flint created the invoice. Format: `date-time`. |
| `credit_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Credit applied to the invoice: the sum of its credit line items. Never more than subtotal_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `due_at` | Required | string | When payment of the invoice is due. Format: `date-time`. |
| `invoice_number` | Required | string | Human-readable invoice number. |
| `issued_at` | Optional | string | When Flint issued the invoice. Format: `date-time`. |
| `line_items` | Required | Array of [MerchantBillingInvoiceLineItemInput](../models/MerchantBillingInvoiceLineItemInput.md#merchantbillinginvoicelineiteminput) | Invoice-owned line items. Subscription totals sum to subtotal_money; credit totals sum to credit_money. |
| `merchant_billing_invoice_id` | Required | string | Stable identifier of the invoice. |
| `outstanding_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Part of total_money Flint still has to collect. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `paid_at` | Optional | string | When the invoice was paid. Removed if a reversed collection reopens it. Format: `date-time`. |
| `period_end_at` | Required | string | Exclusive invoice billing period end as an RFC 3339 UTC instant. Format: `date-time`. |
| `period_start_at` | Required | string | Inclusive invoice billing period start as an RFC 3339 UTC instant. Format: `date-time`. |
| `status` | Required | string | Collection state of the invoice. Flint issues an invoice as open and marks it paid once collected; a reversed collection returns it to open, and written_off means Flint stopped collecting it. Values: `"draft"`, `"open"`, `"collecting"`, `"paid"`, `"delinquent"`, `"void"`, `"written_off"`. |
| `subtotal_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Sum of the subscription line items, before credit. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `total_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | What the invoice charges: subtotal_money minus credit_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `updated_at` | Required | string | When the invoice last changed. Format: `date-time`. |
| `voided_at` | Optional | string | When the invoice was voided. Absent on invoices that weren't. Format: `date-time`. |

