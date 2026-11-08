[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderEditLineRemovalInput

Removed whole units of an order line and their refund amount frozen at commit. The enclosing edit identifies the order.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_line_item_id` | Required | string | The original order line whose units were removed. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Whole line units removed, without changing the original line quantity. Format: `int64`. minimum: `1`. |
| `refund_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Refund for these units, including their original discount and tax shares, frozen when the edit committed. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

