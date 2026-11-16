[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderEditLineAdditionPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Optional | string or null | The catalog bundle, for a bundle line. `bundle_id`: [declared alternatives](../models/OrderEditLineAdditionPreviousAttributes.md#ordereditlineadditionpreviousattributesbundle_id). |
| `discount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Always zero: promotions aren't re-evaluated for added lines. |
| `name` | Optional | string or null | The line's name. `name`: [declared alternatives](../models/OrderEditLineAdditionPreviousAttributes.md#ordereditlineadditionpreviousattributesname). |
| `order_line_item_id` | Optional | string or null | The order line reserved by this edit. While pending, the line isn't on the order yet. `order_line_item_id`: [declared alternatives](../models/OrderEditLineAdditionPreviousAttributes.md#ordereditlineadditionpreviousattributesorder_line_item_id). |
| `product_id` | Optional | string or null | ID of the catalog product the item was sold from. Absent on bundle and custom lines. `product_id`: [declared alternatives](../models/OrderEditLineAdditionPreviousAttributes.md#ordereditlineadditionpreviousattributesproduct_id). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. Units to add. `quantity`: [declared alternatives](../models/OrderEditLineAdditionPreviousAttributes.md#ordereditlineadditionpreviousattributesquantity). |
| `sku` | Optional | string or null | The line's SKU, when it has one. `sku`: [declared alternatives](../models/OrderEditLineAdditionPreviousAttributes.md#ordereditlineadditionpreviousattributessku). |
| `subtotal_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Unit price times quantity, including modifiers. |
| `tax_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Tax on the line, calculated through the order's tax settings. |
| `total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | What the line costs: subtotal_money minus discount_money plus additive tax. |
| `type` | Optional | string or null | The kind of line, as in the request. Values: `"variant"`, `"bundle"`, `"custom"`. `type`: [declared alternatives](../models/OrderEditLineAdditionPreviousAttributes.md#ordereditlineadditionpreviousattributestype). |
| `unit_price_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The unit price from the catalog, price list, customer pricing or request. |
| `variant_id` | Optional | string or null | The catalog variant, for a variant line. `variant_id`: [declared alternatives](../models/OrderEditLineAdditionPreviousAttributes.md#ordereditlineadditionpreviousattributesvariant_id). |

### OrderEditLineAdditionPreviousAttributes.bundle_id

### OrderEditLineAdditionPreviousAttributes.bundle_id variant 1

anyOf variant 1: The catalog bundle, for a bundle line..

- Value shape: string. The catalog bundle, for a bundle line. 

### OrderEditLineAdditionPreviousAttributes.bundle_id variant 2

anyOf variant 2.

- Value shape: null. The catalog bundle, for a bundle line. 

### OrderEditLineAdditionPreviousAttributes.name

### OrderEditLineAdditionPreviousAttributes.name variant 1

anyOf variant 1: The line's name..

- Value shape: string. The line's name. 

### OrderEditLineAdditionPreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. The line's name. 

### OrderEditLineAdditionPreviousAttributes.order_line_item_id

### OrderEditLineAdditionPreviousAttributes.order_line_item_id variant 1

anyOf variant 1: The order line reserved by this edit. While pending, the line isn't on the order yet..

- Value shape: string. The order line reserved by this edit. While pending, the line isn't on the order yet. 

### OrderEditLineAdditionPreviousAttributes.order_line_item_id variant 2

anyOf variant 2.

- Value shape: null. The order line reserved by this edit. While pending, the line isn't on the order yet. 

### OrderEditLineAdditionPreviousAttributes.product_id

### OrderEditLineAdditionPreviousAttributes.product_id variant 1

anyOf variant 1: ID of the catalog product the item was sold from. Absent on bundle and custom lines..

- Value shape: string. ID of the catalog product the item was sold from. Absent on bundle and custom lines. 

### OrderEditLineAdditionPreviousAttributes.product_id variant 2

anyOf variant 2.

- Value shape: null. ID of the catalog product the item was sold from. Absent on bundle and custom lines. 

### OrderEditLineAdditionPreviousAttributes.quantity

### OrderEditLineAdditionPreviousAttributes.quantity variant 1

anyOf variant 1: Whole-number quantity; fractional quantities are not supported. Units to add..

- Value shape: integer. Whole-number quantity; fractional quantities are not supported. Units to add. Whole-number quantity; fractional quantities are not supported. Units to add. Format: `int64`. minimum: `1`. 

### OrderEditLineAdditionPreviousAttributes.quantity variant 2

anyOf variant 2.

- Value shape: null. Whole-number quantity; fractional quantities are not supported. Units to add. 

### OrderEditLineAdditionPreviousAttributes.sku

### OrderEditLineAdditionPreviousAttributes.sku variant 1

anyOf variant 1: The line's SKU, when it has one..

- Value shape: string. The line's SKU, when it has one. 

### OrderEditLineAdditionPreviousAttributes.sku variant 2

anyOf variant 2.

- Value shape: null. The line's SKU, when it has one. 

### OrderEditLineAdditionPreviousAttributes.type

### OrderEditLineAdditionPreviousAttributes.type variant 1

anyOf variant 1: The kind of line, as in the request..

- Value shape: string. The kind of line, as in the request. Values: `"variant"`, `"bundle"`, `"custom"`.

### OrderEditLineAdditionPreviousAttributes.type variant 2

anyOf variant 2.

- Value shape: null. The kind of line, as in the request. 

### OrderEditLineAdditionPreviousAttributes.variant_id

### OrderEditLineAdditionPreviousAttributes.variant_id variant 1

anyOf variant 1: The catalog variant, for a variant line..

- Value shape: string. The catalog variant, for a variant line. 

### OrderEditLineAdditionPreviousAttributes.variant_id variant 2

anyOf variant 2.

- Value shape: null. The catalog variant, for a variant line. 

