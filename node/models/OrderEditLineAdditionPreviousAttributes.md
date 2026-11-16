[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderEditLineAdditionPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Optional | string or null | The catalog bundle, for a bundle line. `bundle_id`: [declared alternatives](../models/OrderEditLineAdditionPreviousAttributes.md#ordereditlineadditionpreviousattributesbundle_id). |
| `discount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Always zero: promotions aren't re-evaluated for added lines. `discount_money`: [declared alternatives](../models/OrderEditLineAdditionPreviousAttributes.md#ordereditlineadditionpreviousattributesdiscount_money). |
| `name` | Optional | string or null | The line's name. `name`: [declared alternatives](../models/OrderEditLineAdditionPreviousAttributes.md#ordereditlineadditionpreviousattributesname). |
| `order_line_item_id` | Optional | string or null | The order line reserved by this edit. While pending, the line isn't on the order yet. `order_line_item_id`: [declared alternatives](../models/OrderEditLineAdditionPreviousAttributes.md#ordereditlineadditionpreviousattributesorder_line_item_id). |
| `product_id` | Optional | string or null | ID of the catalog product the item was sold from. Absent on bundle and custom lines. `product_id`: [declared alternatives](../models/OrderEditLineAdditionPreviousAttributes.md#ordereditlineadditionpreviousattributesproduct_id). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. Units to add. `quantity`: [declared alternatives](../models/OrderEditLineAdditionPreviousAttributes.md#ordereditlineadditionpreviousattributesquantity). |
| `sku` | Optional | string or null | The line's SKU, when it has one. `sku`: [declared alternatives](../models/OrderEditLineAdditionPreviousAttributes.md#ordereditlineadditionpreviousattributessku). |
| `subtotal_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Unit price times quantity, including modifiers. `subtotal_money`: [declared alternatives](../models/OrderEditLineAdditionPreviousAttributes.md#ordereditlineadditionpreviousattributessubtotal_money). |
| `tax_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Tax on the line, calculated through the order's tax settings. `tax_money`: [declared alternatives](../models/OrderEditLineAdditionPreviousAttributes.md#ordereditlineadditionpreviousattributestax_money). |
| `total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | What the line costs: subtotal_money minus discount_money plus additive tax. `total_money`: [declared alternatives](../models/OrderEditLineAdditionPreviousAttributes.md#ordereditlineadditionpreviousattributestotal_money). |
| `type` | Optional | string or null | The kind of line, as in the request. Values: `"variant"`, `"bundle"`, `"custom"`. `type`: [declared alternatives](../models/OrderEditLineAdditionPreviousAttributes.md#ordereditlineadditionpreviousattributestype). |
| `unit_price_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The unit price from the catalog, price list, customer pricing or request. `unit_price_money`: [declared alternatives](../models/OrderEditLineAdditionPreviousAttributes.md#ordereditlineadditionpreviousattributesunit_price_money). |
| `variant_id` | Optional | string or null | The catalog variant, for a variant line. `variant_id`: [declared alternatives](../models/OrderEditLineAdditionPreviousAttributes.md#ordereditlineadditionpreviousattributesvariant_id). |

### OrderEditLineAdditionPreviousAttributes.bundle_id

### OrderEditLineAdditionPreviousAttributes.bundle_id variant 1

anyOf variant 1: The catalog bundle, for a bundle line..

- Value shape: string. The catalog bundle, for a bundle line. The catalog bundle, for a bundle line. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. 

### OrderEditLineAdditionPreviousAttributes.bundle_id variant 2

anyOf variant 2.

- Value shape: null. The catalog bundle, for a bundle line. 

### OrderEditLineAdditionPreviousAttributes.discount_money

Always zero: promotions aren't re-evaluated for added lines.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### OrderEditLineAdditionPreviousAttributes.discount_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### OrderEditLineAdditionPreviousAttributes.discount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Always zero: promotions aren't re-evaluated for added lines. 

### OrderEditLineAdditionPreviousAttributes.discount_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### OrderEditLineAdditionPreviousAttributes.discount_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

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

- Value shape: string. The order line reserved by this edit. While pending, the line isn't on the order yet. The order line reserved by this edit. While pending, the line isn't on the order yet. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. 

### OrderEditLineAdditionPreviousAttributes.order_line_item_id variant 2

anyOf variant 2.

- Value shape: null. The order line reserved by this edit. While pending, the line isn't on the order yet. 

### OrderEditLineAdditionPreviousAttributes.product_id

### OrderEditLineAdditionPreviousAttributes.product_id variant 1

anyOf variant 1: ID of the catalog product the item was sold from. Absent on bundle and custom lines..

- Value shape: string. ID of the catalog product the item was sold from. Absent on bundle and custom lines. ID of the catalog product the item was sold from. Absent on bundle and custom lines. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. 

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

### OrderEditLineAdditionPreviousAttributes.subtotal_money

Unit price times quantity, including modifiers.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### OrderEditLineAdditionPreviousAttributes.subtotal_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### OrderEditLineAdditionPreviousAttributes.subtotal_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Unit price times quantity, including modifiers. 

### OrderEditLineAdditionPreviousAttributes.subtotal_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### OrderEditLineAdditionPreviousAttributes.subtotal_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### OrderEditLineAdditionPreviousAttributes.tax_money

Tax on the line, calculated through the order's tax settings.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### OrderEditLineAdditionPreviousAttributes.tax_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### OrderEditLineAdditionPreviousAttributes.tax_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Tax on the line, calculated through the order's tax settings. 

### OrderEditLineAdditionPreviousAttributes.tax_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### OrderEditLineAdditionPreviousAttributes.tax_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### OrderEditLineAdditionPreviousAttributes.total_money

What the line costs: subtotal_money minus discount_money plus additive tax.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### OrderEditLineAdditionPreviousAttributes.total_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### OrderEditLineAdditionPreviousAttributes.total_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. What the line costs: subtotal_money minus discount_money plus additive tax. 

### OrderEditLineAdditionPreviousAttributes.total_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### OrderEditLineAdditionPreviousAttributes.total_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### OrderEditLineAdditionPreviousAttributes.type

### OrderEditLineAdditionPreviousAttributes.type variant 1

anyOf variant 1: The kind of line, as in the request..

- Value shape: string. The kind of line, as in the request. Values: `"variant"`, `"bundle"`, `"custom"`.

### OrderEditLineAdditionPreviousAttributes.type variant 2

anyOf variant 2.

- Value shape: null. The kind of line, as in the request. 

### OrderEditLineAdditionPreviousAttributes.unit_price_money

The unit price from the catalog, price list, customer pricing or request.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### OrderEditLineAdditionPreviousAttributes.unit_price_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### OrderEditLineAdditionPreviousAttributes.unit_price_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The unit price from the catalog, price list, customer pricing or request. 

### OrderEditLineAdditionPreviousAttributes.unit_price_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### OrderEditLineAdditionPreviousAttributes.unit_price_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### OrderEditLineAdditionPreviousAttributes.variant_id

### OrderEditLineAdditionPreviousAttributes.variant_id variant 1

anyOf variant 1: The catalog variant, for a variant line..

- Value shape: string. The catalog variant, for a variant line. The catalog variant, for a variant line. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. 

### OrderEditLineAdditionPreviousAttributes.variant_id variant 2

anyOf variant 2.

- Value shape: null. The catalog variant, for a variant line. 

