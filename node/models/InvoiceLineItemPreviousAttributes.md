[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceLineItemPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `base_subtotal_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | unit_price_money × quantity. `base_subtotal_money`: [declared alternatives](../models/InvoiceLineItemPreviousAttributes.md#invoicelineitempreviousattributesbase_subtotal_money). |
| `bundle_components` | Optional | Array of [BundleComponentPreviousAttributes](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributes) or null | The items inside a bundle line, as billed. `bundle_components`: [declared alternatives](../models/InvoiceLineItemPreviousAttributes.md#invoicelineitempreviousattributesbundle_components). |
| `bundle_id` | Optional | string or null | The catalog bundle the line was sold from. Absent unless type is bundle. `bundle_id`: [declared alternatives](../models/InvoiceLineItemPreviousAttributes.md#invoicelineitempreviousattributesbundle_id). |
| `categories` | Optional | Array of [CategoryReferencePreviousAttributes](../models/CategoryReferencePreviousAttributes.md#categoryreferencepreviousattributes) or null | The catalog categories of the line's item when it was billed. `categories`: [declared alternatives](../models/InvoiceLineItemPreviousAttributes.md#invoicelineitempreviousattributescategories). |
| `description` | Optional | string or null | Line item description as billed. `description`: [declared alternatives](../models/InvoiceLineItemPreviousAttributes.md#invoicelineitempreviousattributesdescription). |
| `discount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | This line's share of order and line-item discounts. `discount_money`: [declared alternatives](../models/InvoiceLineItemPreviousAttributes.md#invoicelineitempreviousattributesdiscount_money). |
| `image` | Optional | [ImagePreviousAttributes](../models/ImagePreviousAttributes.md#imagepreviousattributes) or null | Line item image. |
| `invoice_line_item_id` | Optional | string or null | Flint invoice line item ID, stable across draft edits and issue while the backing order line keeps its ID. Credit notes credit lines by this ID. `invoice_line_item_id`: [declared alternatives](../models/InvoiceLineItemPreviousAttributes.md#invoicelineitempreviousattributesinvoice_line_item_id). |
| `modifier_total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Total of the line's modifiers. `modifier_total_money`: [declared alternatives](../models/InvoiceLineItemPreviousAttributes.md#invoicelineitempreviousattributesmodifier_total_money). |
| `modifiers` | Optional | Array of [OrderLineItemModifierPreviousAttributes](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributes) or null | The line's modifiers, as billed. `modifiers`: [declared alternatives](../models/InvoiceLineItemPreviousAttributes.md#invoicelineitempreviousattributesmodifiers). |
| `name` | Optional | string or null | Line item name as billed. `name`: [declared alternatives](../models/InvoiceLineItemPreviousAttributes.md#invoicelineitempreviousattributesname). |
| `order_id` | Optional | string or null | Order that owns the backing order_line_item_id. `order_id`: [declared alternatives](../models/InvoiceLineItemPreviousAttributes.md#invoicelineitempreviousattributesorder_id). |
| `order_line_item_id` | Optional | string or null | The backing order's line item. Tax rows in snapshot.tax_breakdowns reference the line by this ID. `order_line_item_id`: [declared alternatives](../models/InvoiceLineItemPreviousAttributes.md#invoicelineitempreviousattributesorder_line_item_id). |
| `product_id` | Optional | string or null | Parent product of the line's variant. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product. `product_id`: [declared alternatives](../models/InvoiceLineItemPreviousAttributes.md#invoicelineitempreviousattributesproduct_id). |
| `product_type` | Optional | string or null | Product classification frozen on this line. Null when the line is unclassified. Custom lines accept physical, digital, service, or fee; catalog lines use the product's type when added. Unclassified non-goods lines keep ACH debit unavailable. Issued invoices retain their frozen classification; void and reissue to change it. Values: `"physical"`, `"service"`, `"fee"`, `"digital"`, `"gift_card"`, `null`. `product_type`: [declared alternatives](../models/InvoiceLineItemPreviousAttributes.md#invoicelineitempreviousattributesproduct_type). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity). |
| `selected_options` | Optional | Array of [SelectedProductOptionPreviousAttributes](../models/SelectedProductOptionPreviousAttributes.md#selectedproductoptionpreviousattributes) or null | The product options chosen for the line, as billed. `selected_options`: [declared alternatives](../models/InvoiceLineItemPreviousAttributes.md#invoicelineitempreviousattributesselected_options). |
| `sku` | Optional | string or null | Stock keeping unit as billed. `sku`: [declared alternatives](../models/InvoiceLineItemPreviousAttributes.md#invoicelineitempreviousattributessku). |
| `subtotal_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | base_subtotal_money + modifier_total_money. For a tax-inclusive price, it includes the tax. `subtotal_money`: [declared alternatives](../models/InvoiceLineItemPreviousAttributes.md#invoicelineitempreviousattributessubtotal_money). |
| `tax_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Tax on this line. Its rows in snapshot.tax_breakdowns give the rate and price_mode. For a tax-inclusive price, the tax is already inside subtotal_money. `tax_money`: [declared alternatives](../models/InvoiceLineItemPreviousAttributes.md#invoicelineitempreviousattributestax_money). |
| `total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | What the line bills. For a tax-inclusive price, subtotal_money - discount_money; otherwise subtotal_money - discount_money + tax_money. In both cases the tax-exclusive value is total_money - tax_money. `total_money`: [declared alternatives](../models/InvoiceLineItemPreviousAttributes.md#invoicelineitempreviousattributestotal_money). |
| `type` | Optional | string or null | Whether the line was sold from a catalog variant, a bundle, or a custom item. Values: `"variant"`, `"bundle"`, `"custom"`. `type`: [declared alternatives](../models/InvoiceLineItemPreviousAttributes.md#invoicelineitempreviousattributestype). |
| `unit_price_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Price of one unit, before modifiers and discounts. `unit_price_money`: [declared alternatives](../models/InvoiceLineItemPreviousAttributes.md#invoicelineitempreviousattributesunit_price_money). |
| `variant_id` | Optional | string or null | The catalog variant the line was sold from. Absent unless type is variant. `variant_id`: [declared alternatives](../models/InvoiceLineItemPreviousAttributes.md#invoicelineitempreviousattributesvariant_id). |

### InvoiceLineItemPreviousAttributes.base_subtotal_money

unit_price_money × quantity.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### InvoiceLineItemPreviousAttributes.base_subtotal_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### InvoiceLineItemPreviousAttributes.base_subtotal_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. unit_price_money × quantity. 

### InvoiceLineItemPreviousAttributes.base_subtotal_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### InvoiceLineItemPreviousAttributes.base_subtotal_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### InvoiceLineItemPreviousAttributes.bundle_components

### InvoiceLineItemPreviousAttributes.bundle_components variant 1

anyOf variant 1: The items inside a bundle line, as billed..

- Value shape: Array of [BundleComponentPreviousAttributes](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributes). The items inside a bundle line, as billed. 

### InvoiceLineItemPreviousAttributes.bundle_components variant 2

anyOf variant 2.

- Value shape: null. The items inside a bundle line, as billed. 

### InvoiceLineItemPreviousAttributes.bundle_id

### InvoiceLineItemPreviousAttributes.bundle_id variant 1

anyOf variant 1: The catalog bundle the line was sold from. Absent unless type is bundle..

- Value shape: string. The catalog bundle the line was sold from. Absent unless type is bundle. The catalog bundle the line was sold from. Absent unless type is bundle. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. 

### InvoiceLineItemPreviousAttributes.bundle_id variant 2

anyOf variant 2.

- Value shape: null. The catalog bundle the line was sold from. Absent unless type is bundle. 

### InvoiceLineItemPreviousAttributes.categories

### InvoiceLineItemPreviousAttributes.categories variant 1

anyOf variant 1: The catalog categories of the line's item when it was billed..

- Value shape: Array of [CategoryReferencePreviousAttributes](../models/CategoryReferencePreviousAttributes.md#categoryreferencepreviousattributes). The catalog categories of the line's item when it was billed. 

### InvoiceLineItemPreviousAttributes.categories variant 2

anyOf variant 2.

- Value shape: null. The catalog categories of the line's item when it was billed. 

### InvoiceLineItemPreviousAttributes.description

### InvoiceLineItemPreviousAttributes.description variant 1

anyOf variant 1: Line item description as billed..

- Value shape: string. Line item description as billed. 

### InvoiceLineItemPreviousAttributes.description variant 2

anyOf variant 2.

- Value shape: null. Line item description as billed. 

### InvoiceLineItemPreviousAttributes.discount_money

This line's share of order and line-item discounts.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### InvoiceLineItemPreviousAttributes.discount_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### InvoiceLineItemPreviousAttributes.discount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. This line's share of order and line-item discounts. 

### InvoiceLineItemPreviousAttributes.discount_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### InvoiceLineItemPreviousAttributes.discount_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### InvoiceLineItemPreviousAttributes.invoice_line_item_id

### InvoiceLineItemPreviousAttributes.invoice_line_item_id variant 1

anyOf variant 1: Flint invoice line item ID, stable across draft edits and issue while the backing order line keeps its ID. Credit notes credit lines by this ID..

- Value shape: string. Flint invoice line item ID, stable across draft edits and issue while the backing order line keeps its ID. Credit notes credit lines by this ID. Flint invoice line item ID, stable across draft edits and issue while the backing order line keeps its ID. Credit notes credit lines by this ID. Example: `"invli_01KEZF7C00H767MAT1DY7ZWSVW"`. 

### InvoiceLineItemPreviousAttributes.invoice_line_item_id variant 2

anyOf variant 2.

- Value shape: null. Flint invoice line item ID, stable across draft edits and issue while the backing order line keeps its ID. Credit notes credit lines by this ID. 

### InvoiceLineItemPreviousAttributes.modifier_total_money

Total of the line's modifiers.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### InvoiceLineItemPreviousAttributes.modifier_total_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### InvoiceLineItemPreviousAttributes.modifier_total_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Total of the line's modifiers. 

### InvoiceLineItemPreviousAttributes.modifier_total_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### InvoiceLineItemPreviousAttributes.modifier_total_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### InvoiceLineItemPreviousAttributes.modifiers

### InvoiceLineItemPreviousAttributes.modifiers variant 1

anyOf variant 1: The line's modifiers, as billed..

- Value shape: Array of [OrderLineItemModifierPreviousAttributes](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributes). The line's modifiers, as billed. 

### InvoiceLineItemPreviousAttributes.modifiers variant 2

anyOf variant 2.

- Value shape: null. The line's modifiers, as billed. 

### InvoiceLineItemPreviousAttributes.name

### InvoiceLineItemPreviousAttributes.name variant 1

anyOf variant 1: Line item name as billed..

- Value shape: string. Line item name as billed. 

### InvoiceLineItemPreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. Line item name as billed. 

### InvoiceLineItemPreviousAttributes.order_id

### InvoiceLineItemPreviousAttributes.order_id variant 1

anyOf variant 1: Order that owns the backing order_line_item_id..

- Value shape: string. Order that owns the backing order_line_item_id. Order that owns the backing order_line_item_id. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### InvoiceLineItemPreviousAttributes.order_id variant 2

anyOf variant 2.

- Value shape: null. Order that owns the backing order_line_item_id. 

### InvoiceLineItemPreviousAttributes.order_line_item_id

### InvoiceLineItemPreviousAttributes.order_line_item_id variant 1

anyOf variant 1: The backing order's line item. Tax rows in snapshot.tax_breakdowns reference the line by this ID..

- Value shape: string. The backing order's line item. Tax rows in snapshot.tax_breakdowns reference the line by this ID. The backing order's line item. Tax rows in snapshot.tax_breakdowns reference the line by this ID. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. 

### InvoiceLineItemPreviousAttributes.order_line_item_id variant 2

anyOf variant 2.

- Value shape: null. The backing order's line item. Tax rows in snapshot.tax_breakdowns reference the line by this ID. 

### InvoiceLineItemPreviousAttributes.product_id

### InvoiceLineItemPreviousAttributes.product_id variant 1

anyOf variant 1: Parent product of the line's variant. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product..

- Value shape: string. Parent product of the line's variant. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product. Parent product of the line's variant. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. 

### InvoiceLineItemPreviousAttributes.product_id variant 2

anyOf variant 2.

- Value shape: null. Parent product of the line's variant. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product. 

### InvoiceLineItemPreviousAttributes.product_type

### InvoiceLineItemPreviousAttributes.product_type variant 1

anyOf variant 1: Product classification frozen on this line. Null when the line is unclassified. Custom lines accept physical, digital, service, or fee; catalog lines use the product's type when added. Unclassified non-goods lines keep ACH debit unavailable. Issued invoices retain their frozen classification; void and reissue to change it..

- Value shape: string. Product classification frozen on this line. Null when the line is unclassified. Custom lines accept physical, digital, service, or fee; catalog lines use the product's type when added. Unclassified non-goods lines keep ACH debit unavailable. Issued invoices retain their frozen classification; void and reissue to change it. Values: `"physical"`, `"service"`, `"fee"`, `"digital"`, `"gift_card"`, `null`.

### InvoiceLineItemPreviousAttributes.product_type variant 2

anyOf variant 2.

- Value shape: null. Product classification frozen on this line. Null when the line is unclassified. Custom lines accept physical, digital, service, or fee; catalog lines use the product's type when added. Unclassified non-goods lines keep ACH debit unavailable. Issued invoices retain their frozen classification; void and reissue to change it. 

### InvoiceLineItemPreviousAttributes.quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributes.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity).

### InvoiceLineItemPreviousAttributes.selected_options

### InvoiceLineItemPreviousAttributes.selected_options variant 1

anyOf variant 1: The product options chosen for the line, as billed..

- Value shape: Array of [SelectedProductOptionPreviousAttributes](../models/SelectedProductOptionPreviousAttributes.md#selectedproductoptionpreviousattributes). The product options chosen for the line, as billed. 

### InvoiceLineItemPreviousAttributes.selected_options variant 2

anyOf variant 2.

- Value shape: null. The product options chosen for the line, as billed. 

### InvoiceLineItemPreviousAttributes.sku

### InvoiceLineItemPreviousAttributes.sku variant 1

anyOf variant 1: Stock keeping unit as billed..

- Value shape: string. Stock keeping unit as billed. 

### InvoiceLineItemPreviousAttributes.sku variant 2

anyOf variant 2.

- Value shape: null. Stock keeping unit as billed. 

### InvoiceLineItemPreviousAttributes.subtotal_money

base_subtotal_money + modifier_total_money. For a tax-inclusive price, it includes the tax.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### InvoiceLineItemPreviousAttributes.subtotal_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### InvoiceLineItemPreviousAttributes.subtotal_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. base_subtotal_money + modifier_total_money. For a tax-inclusive price, it includes the tax. 

### InvoiceLineItemPreviousAttributes.subtotal_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### InvoiceLineItemPreviousAttributes.subtotal_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### InvoiceLineItemPreviousAttributes.tax_money

Tax on this line. Its rows in snapshot.tax_breakdowns give the rate and price_mode. For a tax-inclusive price, the tax is already inside subtotal_money.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### InvoiceLineItemPreviousAttributes.tax_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### InvoiceLineItemPreviousAttributes.tax_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Tax on this line. Its rows in snapshot.tax_breakdowns give the rate and price_mode. For a tax-inclusive price, the tax is already inside subtotal_money. 

### InvoiceLineItemPreviousAttributes.tax_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### InvoiceLineItemPreviousAttributes.tax_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### InvoiceLineItemPreviousAttributes.total_money

What the line bills. For a tax-inclusive price, subtotal_money - discount_money; otherwise subtotal_money - discount_money + tax_money. In both cases the tax-exclusive value is total_money - tax_money.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### InvoiceLineItemPreviousAttributes.total_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### InvoiceLineItemPreviousAttributes.total_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. What the line bills. For a tax-inclusive price, subtotal_money - discount_money; otherwise subtotal_money - discount_money + tax_money. In both cases the tax-exclusive value is total_money - tax_money. 

### InvoiceLineItemPreviousAttributes.total_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### InvoiceLineItemPreviousAttributes.total_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### InvoiceLineItemPreviousAttributes.type

### InvoiceLineItemPreviousAttributes.type variant 1

anyOf variant 1: Whether the line was sold from a catalog variant, a bundle, or a custom item..

- Value shape: string. Whether the line was sold from a catalog variant, a bundle, or a custom item. Values: `"variant"`, `"bundle"`, `"custom"`.

### InvoiceLineItemPreviousAttributes.type variant 2

anyOf variant 2.

- Value shape: null. Whether the line was sold from a catalog variant, a bundle, or a custom item. 

### InvoiceLineItemPreviousAttributes.unit_price_money

Price of one unit, before modifiers and discounts.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### InvoiceLineItemPreviousAttributes.unit_price_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### InvoiceLineItemPreviousAttributes.unit_price_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Price of one unit, before modifiers and discounts. 

### InvoiceLineItemPreviousAttributes.unit_price_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### InvoiceLineItemPreviousAttributes.unit_price_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### InvoiceLineItemPreviousAttributes.variant_id

### InvoiceLineItemPreviousAttributes.variant_id variant 1

anyOf variant 1: The catalog variant the line was sold from. Absent unless type is variant..

- Value shape: string. The catalog variant the line was sold from. Absent unless type is variant. The catalog variant the line was sold from. Absent unless type is variant. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. 

### InvoiceLineItemPreviousAttributes.variant_id variant 2

anyOf variant 2.

- Value shape: null. The catalog variant the line was sold from. Absent unless type is variant. 

