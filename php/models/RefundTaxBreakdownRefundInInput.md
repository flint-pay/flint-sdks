[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundTaxBreakdownRefundInInput

The tax to refund for one tax breakdown, identified by `tax_breakdown_id`, when setting tax refunds explicitly.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `tax_breakdown_id` | Required | string | ID of the tax breakdown (one jurisdiction's tax) to refund. minLength: `1`. Example: `"txb_01KEZF7C00SHMN8QWCA8PT1HSB"`. |
| `tax_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Tax to refund for this breakdown. Used when you set the tax refund yourself. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

