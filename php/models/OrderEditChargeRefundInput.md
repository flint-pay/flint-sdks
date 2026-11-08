[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderEditChargeRefundInput

The refund the preview would make for one order charge.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The amount that would be refunded for this charge. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `order_charge_id` | Required | string | The order charge that would be refunded. Example: `"och_01KEZF7C00XX8AKACP0GHKFWWT"`. |

