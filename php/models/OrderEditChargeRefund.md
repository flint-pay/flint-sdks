[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderEditChargeRefund

The refund the preview would make for one order charge.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount that would be refunded for this charge. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `order_charge_id` | Required | string | The order charge that would be refunded. |

