[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderEditLineAdditionInput

An order line added by the enclosing edit, with its value frozen at commit.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_line_item_id` | Required | string | The order line created by this edit. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. |
| `quantity` | Required | integer | Whole-number quantity added; fractional quantities are not supported. Format: `int64`. minimum: `1`. |
| `total_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The cost of these added units, including additive tax, frozen when the edit committed. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

