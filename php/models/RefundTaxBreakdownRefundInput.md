[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundTaxBreakdownRefundInput

The tax refunded for one tax breakdown on an order.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_charge_id` | Optional | string | ID of the order charge whose tax this reverses. Present only in the refund's top-level `tax_breakdown_refunds`. Example: `"och_01KEZF7C00XX8AKACP0GHKFWWT"`. |
| `tax_breakdown_id` | Required | string | ID of the tax breakdown (one jurisdiction's tax) this entry reverses. Example: `"txb_01KEZF7C00SHMN8QWCA8PT1HSB"`. |
| `tax_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Tax reversed for this breakdown. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

