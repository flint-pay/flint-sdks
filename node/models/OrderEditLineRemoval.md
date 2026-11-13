[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderEditLineRemoval

Removed whole units of an order line and their refund amount frozen at commit. The enclosing edit identifies the order.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_line_item_id` | Required | string | The original order line whose units were removed. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Whole line units removed, without changing the original line quantity. Format: `int64`. minimum: `1`. |
| `refund_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The part of total_money refunded to the buyer, frozen when the edit committed. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `refund_money`: [field definitions](../models/OrderEditLineRemoval.md#ordereditlineremovalrefund_money). |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The value of these units, including their original discount and tax shares, frozen when the edit committed. The order no longer owes it. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `total_money`: [field definitions](../models/OrderEditLineRemoval.md#ordereditlineremovaltotal_money). |

### OrderEditLineRemoval.refund_money

The part of total_money refunded to the buyer, frozen when the edit committed. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### OrderEditLineRemoval.total_money

The value of these units, including their original discount and tax shares, frozen when the edit committed. The order no longer owes it. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

