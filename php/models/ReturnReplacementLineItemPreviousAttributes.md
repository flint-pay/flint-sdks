[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnReplacementLineItemPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Optional | string or null | ID of the bundle the replacement line is for. `bundle_id`: [declared alternatives](../models/ReturnReplacementLineItemPreviousAttributes.md#returnreplacementlineitempreviousattributesbundle_id). |
| `description` | Optional | string or null | Description of the replacement item. `description`: [declared alternatives](../models/ReturnReplacementLineItemPreviousAttributes.md#returnreplacementlineitempreviousattributesdescription). |
| `discount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Discount on the replacement units. |
| `name` | Optional | string or null | Name of the replacement item. `name`: [declared alternatives](../models/ReturnReplacementLineItemPreviousAttributes.md#returnreplacementlineitempreviousattributesname). |
| `product_id` | Optional | string or null | The product this replacement variant belongs to. Present whenever variant_id is present; omitted for bundles and custom items. `product_id`: [declared alternatives](../models/ReturnReplacementLineItemPreviousAttributes.md#returnreplacementlineitempreviousattributesproduct_id). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `return_replacement_line_item_id` | Optional | string or null | Unique identifier for this return replacement line item, prefixed `retrepli_`. `return_replacement_line_item_id`: [declared alternatives](../models/ReturnReplacementLineItemPreviousAttributes.md#returnreplacementlineitempreviousattributesreturn_replacement_line_item_id). |
| `return_resolution_id` | Optional | string or null | ID of the resolution the line belongs to. `return_resolution_id`: [declared alternatives](../models/ReturnResolutionLineItemPreviousAttributes.md#returnresolutionlineitempreviousattributesreturn_resolution_id). |
| `sku` | Optional | string or null | SKU of the replacement item. `sku`: [declared alternatives](../models/ReturnReplacementLineItemPreviousAttributes.md#returnreplacementlineitempreviousattributessku). |
| `subtotal_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Subtotal of the replacement units, before discount and tax. |
| `tax_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Tax on the replacement units. |
| `total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Subtotal minus discount, plus tax. |
| `unit_price_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Price of one replacement unit. |
| `variant_id` | Optional | string or null | ID of the variant the replacement line is for. `variant_id`: [declared alternatives](../models/ReturnReplacementLineItemPreviousAttributes.md#returnreplacementlineitempreviousattributesvariant_id). |

### ReturnReplacementLineItemPreviousAttributes.bundle_id

### ReturnReplacementLineItemPreviousAttributes.bundle_id variant 1

anyOf variant 1: ID of the bundle the replacement line is for..

- Value shape: string. ID of the bundle the replacement line is for. 

### ReturnReplacementLineItemPreviousAttributes.bundle_id variant 2

anyOf variant 2.

- Value shape: null. ID of the bundle the replacement line is for. 

### ReturnReplacementLineItemPreviousAttributes.description

### ReturnReplacementLineItemPreviousAttributes.description variant 1

anyOf variant 1: Description of the replacement item..

- Value shape: string. Description of the replacement item. 

### ReturnReplacementLineItemPreviousAttributes.description variant 2

anyOf variant 2.

- Value shape: null. Description of the replacement item. 

### ReturnReplacementLineItemPreviousAttributes.name

### ReturnReplacementLineItemPreviousAttributes.name variant 1

anyOf variant 1: Name of the replacement item..

- Value shape: string. Name of the replacement item. 

### ReturnReplacementLineItemPreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. Name of the replacement item. 

### ReturnReplacementLineItemPreviousAttributes.product_id

### ReturnReplacementLineItemPreviousAttributes.product_id variant 1

anyOf variant 1: The product this replacement variant belongs to. Present whenever variant_id is present; omitted for bundles and custom items..

- Value shape: string. The product this replacement variant belongs to. Present whenever variant_id is present; omitted for bundles and custom items. The product this replacement variant belongs to. Present whenever variant_id is present; omitted for bundles and custom items. pattern: `^prod_[0-9A-HJKMNP-TV-Z]{26}$`. 

### ReturnReplacementLineItemPreviousAttributes.product_id variant 2

anyOf variant 2.

- Value shape: null. The product this replacement variant belongs to. Present whenever variant_id is present; omitted for bundles and custom items. 

### ReturnReplacementLineItemPreviousAttributes.quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### ReturnReplacementLineItemPreviousAttributes.return_replacement_line_item_id

### ReturnReplacementLineItemPreviousAttributes.return_replacement_line_item_id variant 1

anyOf variant 1: Unique identifier for this return replacement line item, prefixed `retrepli_`..

- Value shape: string. Unique identifier for this return replacement line item, prefixed `retrepli_`. 

### ReturnReplacementLineItemPreviousAttributes.return_replacement_line_item_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this return replacement line item, prefixed `retrepli_`. 

### ReturnReplacementLineItemPreviousAttributes.return_resolution_id

Declared alternatives: [ReturnResolutionLineItemPreviousAttributes.return_resolution_id](../models/ReturnResolutionLineItemPreviousAttributes.md#returnresolutionlineitempreviousattributesreturn_resolution_id).

### ReturnReplacementLineItemPreviousAttributes.sku

### ReturnReplacementLineItemPreviousAttributes.sku variant 1

anyOf variant 1: SKU of the replacement item..

- Value shape: string. SKU of the replacement item. 

### ReturnReplacementLineItemPreviousAttributes.sku variant 2

anyOf variant 2.

- Value shape: null. SKU of the replacement item. 

### ReturnReplacementLineItemPreviousAttributes.variant_id

### ReturnReplacementLineItemPreviousAttributes.variant_id variant 1

anyOf variant 1: ID of the variant the replacement line is for..

- Value shape: string. ID of the variant the replacement line is for. 

### ReturnReplacementLineItemPreviousAttributes.variant_id variant 2

anyOf variant 2.

- Value shape: null. ID of the variant the replacement line is for. 

