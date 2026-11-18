[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnReplacementLineItemPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Optional | string or null | ID of the bundle the replacement line is for. `bundle_id`: [declared alternatives](../models/ReturnReplacementLineItemPreviousAttributes.md#returnreplacementlineitempreviousattributesbundle_id). |
| `description` | Optional | string or null | Description of the replacement item. `description`: [declared alternatives](../models/ReturnReplacementLineItemPreviousAttributes.md#returnreplacementlineitempreviousattributesdescription). |
| `discount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Discount on the replacement units. `discount_money`: [declared alternatives](../models/ReturnReplacementLineItemPreviousAttributes.md#returnreplacementlineitempreviousattributesdiscount_money). |
| `name` | Optional | string or null | Name of the replacement item. `name`: [declared alternatives](../models/ReturnReplacementLineItemPreviousAttributes.md#returnreplacementlineitempreviousattributesname). |
| `product_id` | Optional | string or null | The product this replacement variant belongs to. Present whenever variant_id is present; omitted for bundles and custom items. `product_id`: [declared alternatives](../models/ReturnReplacementLineItemPreviousAttributes.md#returnreplacementlineitempreviousattributesproduct_id). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity). |
| `return_replacement_line_item_id` | Optional | string or null | Unique identifier for this return replacement line item, prefixed `retrepli_`. `return_replacement_line_item_id`: [declared alternatives](../models/ReturnReplacementLineItemPreviousAttributes.md#returnreplacementlineitempreviousattributesreturn_replacement_line_item_id). |
| `return_resolution_id` | Optional | string or null | ID of the resolution the line belongs to. `return_resolution_id`: [declared alternatives](../models/ReturnReplacementLineItemPreviousAttributes.md#returnreplacementlineitempreviousattributesreturn_resolution_id). |
| `sku` | Optional | string or null | SKU of the replacement item. `sku`: [declared alternatives](../models/ReturnReplacementLineItemPreviousAttributes.md#returnreplacementlineitempreviousattributessku). |
| `subtotal_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Subtotal of the replacement units, before discount and tax. `subtotal_money`: [declared alternatives](../models/ReturnReplacementLineItemPreviousAttributes.md#returnreplacementlineitempreviousattributessubtotal_money). |
| `tax_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Tax on the replacement units. `tax_money`: [declared alternatives](../models/ReturnReplacementLineItemPreviousAttributes.md#returnreplacementlineitempreviousattributestax_money). |
| `total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Subtotal minus discount, plus tax. `total_money`: [declared alternatives](../models/ReturnLineItemValuePreviousAttributes.md#returnlineitemvaluepreviousattributestotal_money). |
| `unit_price_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Price of one replacement unit. `unit_price_money`: [declared alternatives](../models/ReturnReplacementLineItemPreviousAttributes.md#returnreplacementlineitempreviousattributesunit_price_money). |
| `variant_id` | Optional | string or null | ID of the variant the replacement line is for. `variant_id`: [declared alternatives](../models/ReturnReplacementLineItemPreviousAttributes.md#returnreplacementlineitempreviousattributesvariant_id). |

### ReturnReplacementLineItemPreviousAttributes.bundle_id

### ReturnReplacementLineItemPreviousAttributes.bundle_id variant 1

anyOf variant 1: ID of the bundle the replacement line is for..

- Value shape: string. ID of the bundle the replacement line is for. ID of the bundle the replacement line is for. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. 

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

### ReturnReplacementLineItemPreviousAttributes.discount_money

Discount on the replacement units.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### ReturnReplacementLineItemPreviousAttributes.discount_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### ReturnReplacementLineItemPreviousAttributes.discount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Discount on the replacement units. 

### ReturnReplacementLineItemPreviousAttributes.discount_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### ReturnReplacementLineItemPreviousAttributes.discount_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

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

- Value shape: string. The product this replacement variant belongs to. Present whenever variant_id is present; omitted for bundles and custom items. The product this replacement variant belongs to. Present whenever variant_id is present; omitted for bundles and custom items. pattern: `^prod_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. 

### ReturnReplacementLineItemPreviousAttributes.product_id variant 2

anyOf variant 2.

- Value shape: null. The product this replacement variant belongs to. Present whenever variant_id is present; omitted for bundles and custom items. 

### ReturnReplacementLineItemPreviousAttributes.quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributes.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity).

### ReturnReplacementLineItemPreviousAttributes.return_replacement_line_item_id

### ReturnReplacementLineItemPreviousAttributes.return_replacement_line_item_id variant 1

anyOf variant 1: Unique identifier for this return replacement line item, prefixed `retrepli_`..

- Value shape: string. Unique identifier for this return replacement line item, prefixed `retrepli_`. Unique identifier for this return replacement line item, prefixed `retrepli_`. Example: `"retrepli_01KEZF7C00F6P8VWG80G0JC8W2"`. 

### ReturnReplacementLineItemPreviousAttributes.return_replacement_line_item_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this return replacement line item, prefixed `retrepli_`. 

### ReturnReplacementLineItemPreviousAttributes.return_resolution_id

### ReturnReplacementLineItemPreviousAttributes.return_resolution_id variant 1

anyOf variant 1: ID of the resolution the line belongs to..

- Value shape: string. ID of the resolution the line belongs to. ID of the resolution the line belongs to. Example: `"retres_01KEZF7C00C7RZJN31W9SGMEQ3"`. 

### ReturnReplacementLineItemPreviousAttributes.return_resolution_id variant 2

anyOf variant 2.

- Value shape: null. ID of the resolution the line belongs to. 

### ReturnReplacementLineItemPreviousAttributes.sku

### ReturnReplacementLineItemPreviousAttributes.sku variant 1

anyOf variant 1: SKU of the replacement item..

- Value shape: string. SKU of the replacement item. 

### ReturnReplacementLineItemPreviousAttributes.sku variant 2

anyOf variant 2.

- Value shape: null. SKU of the replacement item. 

### ReturnReplacementLineItemPreviousAttributes.subtotal_money

Subtotal of the replacement units, before discount and tax.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### ReturnReplacementLineItemPreviousAttributes.subtotal_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### ReturnReplacementLineItemPreviousAttributes.subtotal_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Subtotal of the replacement units, before discount and tax. 

### ReturnReplacementLineItemPreviousAttributes.subtotal_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### ReturnReplacementLineItemPreviousAttributes.subtotal_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### ReturnReplacementLineItemPreviousAttributes.tax_money

Tax on the replacement units.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### ReturnReplacementLineItemPreviousAttributes.tax_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### ReturnReplacementLineItemPreviousAttributes.tax_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Tax on the replacement units. 

### ReturnReplacementLineItemPreviousAttributes.tax_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### ReturnReplacementLineItemPreviousAttributes.tax_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### ReturnReplacementLineItemPreviousAttributes.total_money

Declared alternatives: [ReturnLineItemValuePreviousAttributes.total_money](../models/ReturnLineItemValuePreviousAttributes.md#returnlineitemvaluepreviousattributestotal_money).

### ReturnReplacementLineItemPreviousAttributes.unit_price_money

Price of one replacement unit.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### ReturnReplacementLineItemPreviousAttributes.unit_price_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### ReturnReplacementLineItemPreviousAttributes.unit_price_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Price of one replacement unit. 

### ReturnReplacementLineItemPreviousAttributes.unit_price_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### ReturnReplacementLineItemPreviousAttributes.unit_price_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### ReturnReplacementLineItemPreviousAttributes.variant_id

### ReturnReplacementLineItemPreviousAttributes.variant_id variant 1

anyOf variant 1: ID of the variant the replacement line is for..

- Value shape: string. ID of the variant the replacement line is for. ID of the variant the replacement line is for. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. 

### ReturnReplacementLineItemPreviousAttributes.variant_id variant 2

anyOf variant 2.

- Value shape: null. ID of the variant the replacement line is for. 

