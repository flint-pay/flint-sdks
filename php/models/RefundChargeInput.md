[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundChargeInput

An order charge to refund when creating a refund, with an optional amount to refund.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `order_charge_id` | Required | string | minLength: `1`. |

