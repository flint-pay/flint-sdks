[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantBillingInvoiceResponse

A response containing `MerchantBillingInvoice` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [MerchantBillingInvoice](../models/MerchantBillingInvoice.md#merchantbillinginvoice) | Resource, collection, or operation result returned by this request. A Flint invoice for the merchant's Flint subscription. `data`: [field definitions](../models/MerchantBillingInvoiceResponse.md#merchantbillinginvoiceresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### MerchantBillingInvoiceResponse.data

Resource, collection, or operation result returned by this request. A Flint invoice for the merchant's Flint subscription.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `applied_credit_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Credit applied to the invoice: the sum of its credit line items. Never more than subtotal_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `created_at` | Required | string | When Flint created the invoice. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `due_at` | Required | string | When payment of the invoice is due. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `invoice_number` | Required | string | Unique invoice number; don't parse it. New numbers use FLINT-{account code}-{0001}, sequential per billing account; existing numbers are retained. |
| `issued_at` | Required | string | When Flint issued the invoice. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `line_items` | Required | Array of [MerchantBillingInvoiceLineItem](../models/MerchantBillingInvoiceLineItem.md#merchantbillinginvoicelineitem) | Invoice-owned line items. Subscription totals sum to subtotal_money; credit totals sum to applied_credit_money. `line_items[]`: [field definitions](../models/MerchantBillingInvoiceResponse.md#merchantbillinginvoiceresponsedataline_items). |
| `merchant_billing_invoice_id` | Required | string | Stable identifier of the invoice. Example: `"msinv_01KEZF7C00MB754KPEPACGRMNP"`. |
| `outstanding_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Part of total_money Flint still has to collect. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `paid_at` | Optional | string | When the invoice was paid. Removed if a reversed collection reopens it. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `period_end_at` | Required | string | Exclusive invoice billing period end as an RFC 3339 UTC instant. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `period_start_at` | Required | string | Inclusive invoice billing period start as an RFC 3339 UTC instant. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `status` | Required | string | Collection state of the invoice: open, paid, or written_off. Flint issues an invoice as open and marks it paid once collected; a reversed collection returns it to open, and written_off means Flint stopped collecting it. Values: `"open"`, `"paid"`, `"written_off"`. |
| `subtotal_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Sum of the subscription line items, before credit. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | What the invoice charges: subtotal_money minus applied_credit_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `updated_at` | Required | string | When the invoice last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

### MerchantBillingInvoiceResponse.data.line_items[]

One line on a merchant billing invoice, either a subscription charge or a credit, with quantity, unit price, and total.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | When Flint added this line to the invoice. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `merchant_billing_invoice_line_item_id` | Required | string | Stable identifier of this line item. Example: `"msinvl_01KEZF7C00YB825JWZ87C5HDF0"`. |
| `name` | Required | string | Name of the subscription charge or credit. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Unsigned line total, calculated as quantity multiplied by unit_price_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `type` | Required | string | Whether the line adds a subscription charge or applies credit. Values: `"subscription"`, `"credit"`. |
| `unit_price_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Unsigned price of one unit. total_money is quantity times this amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

### MerchantBillingInvoiceResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

