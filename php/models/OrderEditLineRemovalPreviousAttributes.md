[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderEditLineRemovalPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_line_item_id` | Optional | string or null | The original order line whose units were removed. `order_line_item_id`: [declared alternatives](../models/OrderEditLineRemovalPreviousAttributes.md#ordereditlineremovalpreviousattributesorder_line_item_id). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. Whole line units removed, without changing the original line quantity. `quantity`: [declared alternatives](../models/OrderEditLineRemovalPreviousAttributes.md#ordereditlineremovalpreviousattributesquantity). |
| `refund_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The part of total_money refunded to the buyer, frozen when the edit was created. |
| `total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The value of these units, including their original discount and tax shares, frozen when the edit was created. The order no longer owes it. |

### OrderEditLineRemovalPreviousAttributes.order_line_item_id

### OrderEditLineRemovalPreviousAttributes.order_line_item_id variant 1

anyOf variant 1: The original order line whose units were removed..

- Value shape: string. The original order line whose units were removed. 

### OrderEditLineRemovalPreviousAttributes.order_line_item_id variant 2

anyOf variant 2.

- Value shape: null. The original order line whose units were removed. 

### OrderEditLineRemovalPreviousAttributes.quantity

### OrderEditLineRemovalPreviousAttributes.quantity variant 1

anyOf variant 1: Whole-number quantity; fractional quantities are not supported. Whole line units removed, without changing the original line quantity..

- Value shape: integer. Whole-number quantity; fractional quantities are not supported. Whole line units removed, without changing the original line quantity. Whole-number quantity; fractional quantities are not supported. Whole line units removed, without changing the original line quantity. Format: `int64`. minimum: `1`. 

### OrderEditLineRemovalPreviousAttributes.quantity variant 2

anyOf variant 2.

- Value shape: null. Whole-number quantity; fractional quantities are not supported. Whole line units removed, without changing the original line quantity. 

