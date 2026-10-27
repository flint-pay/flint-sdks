[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantBillingInvoice

A Flint invoice for the merchant's Flint subscription.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `credit_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `due_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `invoice_number` | Required | string |  |
| `issued_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `line_items` | Required | Array of [MerchantBillingInvoiceLineItem](../models/MerchantBillingInvoiceLineItem.md#merchantbillinginvoicelineitem) | Invoice-owned line items. Subscription totals sum to subtotal_money; credit totals sum to credit_money. |
| `merchant_billing_invoice_id` | Required | string |  |
| `outstanding_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `paid_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `period_end_at` | Required | string | Exclusive invoice billing period end as an RFC 3339 UTC instant. Format: `date-time`. |
| `period_start_at` | Required | string | Inclusive invoice billing period start as an RFC 3339 UTC instant. Format: `date-time`. |
| `status` | Required | string | Values: `"draft"`, `"open"`, `"collecting"`, `"paid"`, `"delinquent"`, `"void"`, `"written_off"`. |
| `subtotal_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `voided_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |

