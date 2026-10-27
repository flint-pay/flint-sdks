[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundTaxBreakdownRefundInInput

The tax to refund for one tax breakdown, identified by `tax_breakdown_id`, when setting tax refunds explicitly.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `tax_breakdown_id` | Required | string | minLength: `1`. |
| `tax_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

