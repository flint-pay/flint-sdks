[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderEditLineAdditionPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Optional | string or null | The catalog bundle, for a bundle line. `bundle_id`: [declared alternatives](../models/OrderEditLineAdditionPreviousAttributesInput.md#ordereditlineadditionpreviousattributesinputbundle_id). |
| `discount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Always zero: promotions aren't re-evaluated for added lines. |
| `name` | Optional | string or null | The line's name. `name`: [declared alternatives](../models/OrderEditLineAdditionPreviousAttributesInput.md#ordereditlineadditionpreviousattributesinputname). |
| `order_line_item_id` | Optional | string or null | The order line reserved by this edit. While pending, the line isn't on the order yet. `order_line_item_id`: [declared alternatives](../models/OrderEditLineAdditionPreviousAttributesInput.md#ordereditlineadditionpreviousattributesinputorder_line_item_id). |
| `product_id` | Optional | string or null | ID of the catalog product the item was sold from. Absent on bundle and custom lines. `product_id`: [declared alternatives](../models/OrderEditLineAdditionPreviousAttributesInput.md#ordereditlineadditionpreviousattributesinputproduct_id). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. Units to add. `quantity`: [declared alternatives](../models/OrderEditLineAdditionPreviousAttributesInput.md#ordereditlineadditionpreviousattributesinputquantity). |
| `sku` | Optional | string or null | The line's SKU, when it has one. `sku`: [declared alternatives](../models/OrderEditLineAdditionPreviousAttributesInput.md#ordereditlineadditionpreviousattributesinputsku). |
| `subtotal_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Unit price times quantity, including modifiers. |
| `tax_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Tax on the line, calculated through the order's tax settings. |
| `total_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | What the line costs: subtotal_money minus discount_money plus additive tax. |
| `type` | Optional | string or null | The kind of line, as in the request. Values: `"variant"`, `"bundle"`, `"custom"`. `type`: [declared alternatives](../models/OrderEditLineAdditionPreviousAttributesInput.md#ordereditlineadditionpreviousattributesinputtype). |
| `unit_price_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The unit price from the catalog, price list, customer pricing or request. |
| `variant_id` | Optional | string or null | The catalog variant, for a variant line. `variant_id`: [declared alternatives](../models/OrderEditLineAdditionPreviousAttributesInput.md#ordereditlineadditionpreviousattributesinputvariant_id). |

### OrderEditLineAdditionPreviousAttributesInput.bundle_id

### OrderEditLineAdditionPreviousAttributesInput.bundle_id variant 1

anyOf variant 1: The catalog bundle, for a bundle line..

- Value shape: string. The catalog bundle, for a bundle line. The catalog bundle, for a bundle line. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. 

### OrderEditLineAdditionPreviousAttributesInput.bundle_id variant 2

anyOf variant 2.

- Value shape: null. The catalog bundle, for a bundle line. 

### OrderEditLineAdditionPreviousAttributesInput.name

### OrderEditLineAdditionPreviousAttributesInput.name variant 1

anyOf variant 1: The line's name..

- Value shape: string. The line's name. 

### OrderEditLineAdditionPreviousAttributesInput.name variant 2

anyOf variant 2.

- Value shape: null. The line's name. 

### OrderEditLineAdditionPreviousAttributesInput.order_line_item_id

### OrderEditLineAdditionPreviousAttributesInput.order_line_item_id variant 1

anyOf variant 1: The order line reserved by this edit. While pending, the line isn't on the order yet..

- Value shape: string. The order line reserved by this edit. While pending, the line isn't on the order yet. The order line reserved by this edit. While pending, the line isn't on the order yet. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. 

### OrderEditLineAdditionPreviousAttributesInput.order_line_item_id variant 2

anyOf variant 2.

- Value shape: null. The order line reserved by this edit. While pending, the line isn't on the order yet. 

### OrderEditLineAdditionPreviousAttributesInput.product_id

### OrderEditLineAdditionPreviousAttributesInput.product_id variant 1

anyOf variant 1: ID of the catalog product the item was sold from. Absent on bundle and custom lines..

- Value shape: string. ID of the catalog product the item was sold from. Absent on bundle and custom lines. ID of the catalog product the item was sold from. Absent on bundle and custom lines. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. 

### OrderEditLineAdditionPreviousAttributesInput.product_id variant 2

anyOf variant 2.

- Value shape: null. ID of the catalog product the item was sold from. Absent on bundle and custom lines. 

### OrderEditLineAdditionPreviousAttributesInput.quantity

### OrderEditLineAdditionPreviousAttributesInput.quantity variant 1

anyOf variant 1: Whole-number quantity; fractional quantities are not supported. Units to add..

- Value shape: integer. Whole-number quantity; fractional quantities are not supported. Units to add. Whole-number quantity; fractional quantities are not supported. Units to add. Format: `int64`. minimum: `1`. 

### OrderEditLineAdditionPreviousAttributesInput.quantity variant 2

anyOf variant 2.

- Value shape: null. Whole-number quantity; fractional quantities are not supported. Units to add. 

### OrderEditLineAdditionPreviousAttributesInput.sku

### OrderEditLineAdditionPreviousAttributesInput.sku variant 1

anyOf variant 1: The line's SKU, when it has one..

- Value shape: string. The line's SKU, when it has one. 

### OrderEditLineAdditionPreviousAttributesInput.sku variant 2

anyOf variant 2.

- Value shape: null. The line's SKU, when it has one. 

### OrderEditLineAdditionPreviousAttributesInput.type

### OrderEditLineAdditionPreviousAttributesInput.type variant 1

anyOf variant 1: The kind of line, as in the request..

- Value shape: string. The kind of line, as in the request. Values: `"variant"`, `"bundle"`, `"custom"`.

### OrderEditLineAdditionPreviousAttributesInput.type variant 2

anyOf variant 2.

- Value shape: null. The kind of line, as in the request. 

### OrderEditLineAdditionPreviousAttributesInput.variant_id

### OrderEditLineAdditionPreviousAttributesInput.variant_id variant 1

anyOf variant 1: The catalog variant, for a variant line..

- Value shape: string. The catalog variant, for a variant line. The catalog variant, for a variant line. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. 

### OrderEditLineAdditionPreviousAttributesInput.variant_id variant 2

anyOf variant 2.

- Value shape: null. The catalog variant, for a variant line. 

