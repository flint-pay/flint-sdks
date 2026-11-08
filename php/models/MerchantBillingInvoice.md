[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantBillingInvoice

A Flint invoice for the merchant's Flint subscription.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `applied_credit_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Credit applied to the invoice: the sum of its credit line items. Never more than subtotal_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `created_at` | Required | string | When Flint created the invoice. Format: `date-time`. |
| `due_at` | Required | string | When payment of the invoice is due. Format: `date-time`. |
| `invoice_number` | Required | string | Unique invoice number; don't parse it. New numbers use FLINT-{account code}-{0001}, sequential per billing account; existing numbers are retained. |
| `issued_at` | Required | string | When Flint issued the invoice. Format: `date-time`. |
| `line_items` | Required | Array of [MerchantBillingInvoiceLineItem](../models/MerchantBillingInvoiceLineItem.md#merchantbillinginvoicelineitem) | Invoice-owned line items. Subscription totals sum to subtotal_money; credit totals sum to applied_credit_money. `line_items[]`: [field definitions](../models/MerchantBillingInvoiceResponse.md#merchantbillinginvoiceresponsedataline_items). |
| `merchant_billing_invoice_id` | Required | string | Stable identifier of the invoice. |
| `outstanding_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Part of total_money Flint still has to collect. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `paid_at` | Optional | string | When the invoice was paid. Removed if a reversed collection reopens it. Format: `date-time`. |
| `period_end_at` | Required | string | Exclusive invoice billing period end as an RFC 3339 UTC instant. Format: `date-time`. |
| `period_start_at` | Required | string | Inclusive invoice billing period start as an RFC 3339 UTC instant. Format: `date-time`. |
| `status` | Required | string | Collection state of the invoice: open, paid, or written_off. Flint issues an invoice as open and marks it paid once collected; a reversed collection returns it to open, and written_off means Flint stopped collecting it. Values: `"open"`, `"paid"`, `"written_off"`. |
| `subtotal_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Sum of the subscription line items, before credit. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | What the invoice charges: subtotal_money minus applied_credit_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `updated_at` | Required | string | When the invoice last changed. Format: `date-time`. |

### MerchantBillingInvoice.line_items[]

Field definitions: [MerchantBillingInvoiceResponse.data.line_items[]](../models/MerchantBillingInvoiceResponse.md#merchantbillinginvoiceresponsedataline_items).

