[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderEditLineRemoval

Removed whole units of an order line and their refund amount frozen at commit. The enclosing edit identifies the order.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_line_item_id` | Required | string | The original order line whose units were removed. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Whole line units removed, without changing the original line quantity. Format: `int64`. minimum: `1`. |
| `refund_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Refund for these units, including their original discount and tax shares, frozen when the edit committed. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

