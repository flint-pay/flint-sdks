[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnReplacementLineItemPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Optional | string or null | ID of the bundle the replacement line is for. `bundle_id`: [declared alternatives](../models/ReturnReplacementLineItemPreviousAttributesInput.md#returnreplacementlineitempreviousattributesinputbundle_id). |
| `description` | Optional | string or null | Description of the replacement item. `description`: [declared alternatives](../models/ReturnReplacementLineItemPreviousAttributesInput.md#returnreplacementlineitempreviousattributesinputdescription). |
| `discount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Discount on the replacement units. |
| `name` | Optional | string or null | Name of the replacement item. `name`: [declared alternatives](../models/ReturnReplacementLineItemPreviousAttributesInput.md#returnreplacementlineitempreviousattributesinputname). |
| `product_id` | Optional | string or null | The product this replacement variant belongs to. Present whenever variant_id is present; omitted for bundles and custom items. `product_id`: [declared alternatives](../models/ReturnReplacementLineItemPreviousAttributesInput.md#returnreplacementlineitempreviousattributesinputproduct_id). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity). |
| `return_replacement_line_item_id` | Optional | string or null | Unique identifier for this return replacement line item, prefixed `retrepli_`. `return_replacement_line_item_id`: [declared alternatives](../models/ReturnReplacementLineItemPreviousAttributesInput.md#returnreplacementlineitempreviousattributesinputreturn_replacement_line_item_id). |
| `return_resolution_id` | Optional | string or null | ID of the resolution the line belongs to. `return_resolution_id`: [declared alternatives](../models/ReturnReplacementLineItemPreviousAttributesInput.md#returnreplacementlineitempreviousattributesinputreturn_resolution_id). |
| `sku` | Optional | string or null | SKU of the replacement item. `sku`: [declared alternatives](../models/ReturnReplacementLineItemPreviousAttributesInput.md#returnreplacementlineitempreviousattributesinputsku). |
| `subtotal_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Subtotal of the replacement units, before discount and tax. |
| `tax_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Tax on the replacement units. |
| `total_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Subtotal minus discount, plus tax. |
| `unit_price_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Price of one replacement unit. |
| `variant_id` | Optional | string or null | ID of the variant the replacement line is for. `variant_id`: [declared alternatives](../models/ReturnReplacementLineItemPreviousAttributesInput.md#returnreplacementlineitempreviousattributesinputvariant_id). |

### ReturnReplacementLineItemPreviousAttributesInput.bundle_id

### ReturnReplacementLineItemPreviousAttributesInput.bundle_id variant 1

anyOf variant 1: ID of the bundle the replacement line is for..

- Value shape: string. ID of the bundle the replacement line is for. ID of the bundle the replacement line is for. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. 

### ReturnReplacementLineItemPreviousAttributesInput.bundle_id variant 2

anyOf variant 2.

- Value shape: null. ID of the bundle the replacement line is for. 

### ReturnReplacementLineItemPreviousAttributesInput.description

### ReturnReplacementLineItemPreviousAttributesInput.description variant 1

anyOf variant 1: Description of the replacement item..

- Value shape: string. Description of the replacement item. 

### ReturnReplacementLineItemPreviousAttributesInput.description variant 2

anyOf variant 2.

- Value shape: null. Description of the replacement item. 

### ReturnReplacementLineItemPreviousAttributesInput.name

### ReturnReplacementLineItemPreviousAttributesInput.name variant 1

anyOf variant 1: Name of the replacement item..

- Value shape: string. Name of the replacement item. 

### ReturnReplacementLineItemPreviousAttributesInput.name variant 2

anyOf variant 2.

- Value shape: null. Name of the replacement item. 

### ReturnReplacementLineItemPreviousAttributesInput.product_id

### ReturnReplacementLineItemPreviousAttributesInput.product_id variant 1

anyOf variant 1: The product this replacement variant belongs to. Present whenever variant_id is present; omitted for bundles and custom items..

- Value shape: string. The product this replacement variant belongs to. Present whenever variant_id is present; omitted for bundles and custom items. The product this replacement variant belongs to. Present whenever variant_id is present; omitted for bundles and custom items. pattern: `^prod_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. 

### ReturnReplacementLineItemPreviousAttributesInput.product_id variant 2

anyOf variant 2.

- Value shape: null. The product this replacement variant belongs to. Present whenever variant_id is present; omitted for bundles and custom items. 

### ReturnReplacementLineItemPreviousAttributesInput.quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributesInput.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity).

### ReturnReplacementLineItemPreviousAttributesInput.return_replacement_line_item_id

### ReturnReplacementLineItemPreviousAttributesInput.return_replacement_line_item_id variant 1

anyOf variant 1: Unique identifier for this return replacement line item, prefixed `retrepli_`..

- Value shape: string. Unique identifier for this return replacement line item, prefixed `retrepli_`. Unique identifier for this return replacement line item, prefixed `retrepli_`. Example: `"retrepli_01KEZF7C00F6P8VWG80G0JC8W2"`. 

### ReturnReplacementLineItemPreviousAttributesInput.return_replacement_line_item_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this return replacement line item, prefixed `retrepli_`. 

### ReturnReplacementLineItemPreviousAttributesInput.return_resolution_id

### ReturnReplacementLineItemPreviousAttributesInput.return_resolution_id variant 1

anyOf variant 1: ID of the resolution the line belongs to..

- Value shape: string. ID of the resolution the line belongs to. ID of the resolution the line belongs to. Example: `"retres_01KEZF7C00C7RZJN31W9SGMEQ3"`. 

### ReturnReplacementLineItemPreviousAttributesInput.return_resolution_id variant 2

anyOf variant 2.

- Value shape: null. ID of the resolution the line belongs to. 

### ReturnReplacementLineItemPreviousAttributesInput.sku

### ReturnReplacementLineItemPreviousAttributesInput.sku variant 1

anyOf variant 1: SKU of the replacement item..

- Value shape: string. SKU of the replacement item. 

### ReturnReplacementLineItemPreviousAttributesInput.sku variant 2

anyOf variant 2.

- Value shape: null. SKU of the replacement item. 

### ReturnReplacementLineItemPreviousAttributesInput.variant_id

### ReturnReplacementLineItemPreviousAttributesInput.variant_id variant 1

anyOf variant 1: ID of the variant the replacement line is for..

- Value shape: string. ID of the variant the replacement line is for. ID of the variant the replacement line is for. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. 

### ReturnReplacementLineItemPreviousAttributesInput.variant_id variant 2

anyOf variant 2.

- Value shape: null. ID of the variant the replacement line is for. 

