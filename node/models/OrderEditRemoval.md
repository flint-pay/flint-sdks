[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderEditRemoval

The units of one order line that the preview would remove, with their refund.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_line_item_id` | Required | string | The order line the units come off. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Whole line units requested for removal, including all components of a bundle unit. Format: `int64`. |
| `refund_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The part of total_money that would be refunded to the buyer. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `refund_money`: [field definitions](../models/OrderEditRemoval.md#ordereditremovalrefund_money). |
| `removable_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Whole line units currently unassigned across every fulfillment component, before this requested removal. Format: `int64`. |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The value of these units at the price the buyer paid, including their share of discounts and tax. Original quantity and pricing remain unchanged. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `total_money`: [field definitions](../models/OrderEditRemoval.md#ordereditremovaltotal_money). |

### OrderEditRemoval.refund_money

The part of total_money that would be refunded to the buyer. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### OrderEditRemoval.total_money

The value of these units at the price the buyer paid, including their share of discounts and tax. Original quantity and pricing remain unchanged. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

