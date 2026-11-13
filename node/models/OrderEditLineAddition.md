[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderEditLineAddition

An order line added by the enclosing edit, with its value frozen at commit.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_line_item_id` | Required | string | The order line created by this edit. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. |
| `quantity` | Required | integer | Whole-number quantity added; fractional quantities are not supported. Format: `int64`. minimum: `1`. |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The cost of these added units, including additive tax, frozen when the edit committed. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `total_money`: [field definitions](../models/OrderEditLineAddition.md#ordereditlineadditiontotal_money). |

### OrderEditLineAddition.total_money

The cost of these added units, including additive tax, frozen when the edit committed. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

