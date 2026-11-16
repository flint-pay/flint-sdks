[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderEditLineRemovalPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_line_item_id` | Optional | string or null | The original order line whose units were removed. `order_line_item_id`: [declared alternatives](../models/OrderEditLineRemovalPreviousAttributesInput.md#ordereditlineremovalpreviousattributesinputorder_line_item_id). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. Whole line units removed, without changing the original line quantity. `quantity`: [declared alternatives](../models/OrderEditLineRemovalPreviousAttributesInput.md#ordereditlineremovalpreviousattributesinputquantity). |
| `refund_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The part of total_money refunded to the buyer, frozen when the edit was created. |
| `total_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The value of these units, including their original discount and tax shares, frozen when the edit was created. The order no longer owes it. |

### OrderEditLineRemovalPreviousAttributesInput.order_line_item_id

### OrderEditLineRemovalPreviousAttributesInput.order_line_item_id variant 1

anyOf variant 1: The original order line whose units were removed..

- Value shape: string. The original order line whose units were removed. The original order line whose units were removed. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. 

### OrderEditLineRemovalPreviousAttributesInput.order_line_item_id variant 2

anyOf variant 2.

- Value shape: null. The original order line whose units were removed. 

### OrderEditLineRemovalPreviousAttributesInput.quantity

### OrderEditLineRemovalPreviousAttributesInput.quantity variant 1

anyOf variant 1: Whole-number quantity; fractional quantities are not supported. Whole line units removed, without changing the original line quantity..

- Value shape: integer. Whole-number quantity; fractional quantities are not supported. Whole line units removed, without changing the original line quantity. Whole-number quantity; fractional quantities are not supported. Whole line units removed, without changing the original line quantity. Format: `int64`. minimum: `1`. 

### OrderEditLineRemovalPreviousAttributesInput.quantity variant 2

anyOf variant 2.

- Value shape: null. Whole-number quantity; fractional quantities are not supported. Whole line units removed, without changing the original line quantity. 

