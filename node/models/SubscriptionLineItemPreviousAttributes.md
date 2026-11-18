[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionLineItemPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allow_quantity_adjustment` | Optional | boolean or null | Whether the frozen terms allow the buyer to adjust this line quantity. `allow_quantity_adjustment`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributesallow_quantity_adjustment). |
| `base_subtotal_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Unit price multiplied by this line's `quantity`, before modifiers, discounts, and tax. `base_subtotal_money`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributesbase_subtotal_money). |
| `bundle_components` | Optional | Array of [BundleComponentPreviousAttributes](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributes) or null | Components of a bundle line, recorded when the line joined the subscription. `bundle_components`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributesbundle_components). |
| `bundle_id` | Optional | string or null | ID of the bundle the line bills. Present on `bundle` lines. `bundle_id`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributesbundle_id). |
| `categories` | Optional | Array of [CategoryReferencePreviousAttributes](../models/CategoryReferencePreviousAttributes.md#categoryreferencepreviousattributes) or null | Catalog categories of the item, recorded when the line joined the subscription. `categories`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributescategories). |
| `description` | Optional | string or null | Description of the item, recorded when the line joined the subscription. Omitted when none was recorded. `description`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributesdescription). |
| `image` | Optional | [ImagePreviousAttributes](../models/ImagePreviousAttributes.md#imagepreviousattributes) or null | Image of the item, recorded when the line joined the subscription. |
| `max_quantity` | Optional | integer or null | Maximum buyer quantity, defaulting to 9999 when no bound was recorded. Merchants may set any quantity from 1 to 9999. Whole-number quantity; fractional quantities are not supported. `max_quantity`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributesmax_quantity). |
| `min_quantity` | Optional | integer or null | Minimum buyer quantity, defaulting to 1 when no bound was recorded. Whole-number quantity; fractional quantities are not supported. `min_quantity`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributesmin_quantity). |
| `modifier_total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Sum of the line's modifier totals. `modifier_total_money`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributesmodifier_total_money). |
| `modifiers` | Optional | Array of [OrderLineItemModifierPreviousAttributes](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributes) or null | Modifiers selected on the line, with their prices. `modifiers`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesmodifiers). |
| `name` | Optional | string or null | Name of the item, recorded when the line joined the subscription. Later catalog edits don't change it. `name`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributesname). |
| `product_id` | Optional | string or null | ID of the catalog product the item was sold from. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product. `product_id`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesproduct_id). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesquantity). |
| `selected_options` | Optional | Array of [SelectedProductOptionPreviousAttributes](../models/SelectedProductOptionPreviousAttributes.md#selectedproductoptionpreviousattributes) or null | Variant options selected for the item, such as size and color. `selected_options`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesselected_options). |
| `sku` | Optional | string or null | SKU of the item, recorded when the line joined the subscription. Omitted when the item has none. `sku`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributessku). |
| `subscription_id` | Optional | string or null | Subscription that owns this line, including frozen lines in a scheduled plan change. `subscription_id`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributessubscription_id). |
| `subscription_line_item_id` | Optional | string or null | Unique identifier for this subscription line item, prefixed `sli_`. `subscription_line_item_id`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributessubscription_line_item_id). |
| `subscription_offer_id` | Optional | string or null | ID of the subscription offer the line was bought under. Absent on plan-based subscriptions and on lines added to the subscription directly. `subscription_offer_id`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributessubscription_offer_id). |
| `subscription_plan_line_item_id` | Optional | string or null | ID of the subscription plan line this line was copied from. A variant swap keeps it. Absent on offer-based subscriptions and on lines added to the subscription directly. `subscription_plan_line_item_id`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributessubscription_plan_line_item_id). |
| `subtotal_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Base subtotal plus modifier total, before discounts and tax. `subtotal_money`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributessubtotal_money). |
| `type` | Optional | string or null | Whether the line was sold from a catalog variant, a bundle, or a custom item. Values: `"variant"`, `"bundle"`, `"custom"`. `type`: [declared alternatives](../models/InvoiceLineItemPreviousAttributes.md#invoicelineitempreviousattributestype). |
| `unit_price_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Price of one unit before modifiers, discounts, and tax. A plan line keeps the price its plan set. A line added or swapped takes the variant's catalog price for the subscription's customer at that time, and keeps it until the line changes again. `unit_price_money`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributesunit_price_money). |
| `variant_id` | Optional | string or null | ID of the catalog variant the line bills. Present on `variant` lines; a variant swap replaces it. `variant_id`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributesvariant_id). |

### SubscriptionLineItemPreviousAttributes.allow_quantity_adjustment

### SubscriptionLineItemPreviousAttributes.allow_quantity_adjustment variant 1

anyOf variant 1: Whether the frozen terms allow the buyer to adjust this line quantity..

- Value shape: boolean. Whether the frozen terms allow the buyer to adjust this line quantity. 

### SubscriptionLineItemPreviousAttributes.allow_quantity_adjustment variant 2

anyOf variant 2.

- Value shape: null. Whether the frozen terms allow the buyer to adjust this line quantity. 

### SubscriptionLineItemPreviousAttributes.base_subtotal_money

Unit price multiplied by this line's `quantity`, before modifiers, discounts, and tax.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### SubscriptionLineItemPreviousAttributes.base_subtotal_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### SubscriptionLineItemPreviousAttributes.base_subtotal_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Unit price multiplied by this line's `quantity`, before modifiers, discounts, and tax. 

### SubscriptionLineItemPreviousAttributes.base_subtotal_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### SubscriptionLineItemPreviousAttributes.base_subtotal_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### SubscriptionLineItemPreviousAttributes.bundle_components

### SubscriptionLineItemPreviousAttributes.bundle_components variant 1

anyOf variant 1: Components of a bundle line, recorded when the line joined the subscription..

- Value shape: Array of [BundleComponentPreviousAttributes](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributes). Components of a bundle line, recorded when the line joined the subscription. 

### SubscriptionLineItemPreviousAttributes.bundle_components variant 2

anyOf variant 2.

- Value shape: null. Components of a bundle line, recorded when the line joined the subscription. 

### SubscriptionLineItemPreviousAttributes.bundle_id

### SubscriptionLineItemPreviousAttributes.bundle_id variant 1

anyOf variant 1: ID of the bundle the line bills. Present on `bundle` lines..

- Value shape: string. ID of the bundle the line bills. Present on `bundle` lines. ID of the bundle the line bills. Present on `bundle` lines. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. 

### SubscriptionLineItemPreviousAttributes.bundle_id variant 2

anyOf variant 2.

- Value shape: null. ID of the bundle the line bills. Present on `bundle` lines. 

### SubscriptionLineItemPreviousAttributes.categories

### SubscriptionLineItemPreviousAttributes.categories variant 1

anyOf variant 1: Catalog categories of the item, recorded when the line joined the subscription..

- Value shape: Array of [CategoryReferencePreviousAttributes](../models/CategoryReferencePreviousAttributes.md#categoryreferencepreviousattributes). Catalog categories of the item, recorded when the line joined the subscription. 

### SubscriptionLineItemPreviousAttributes.categories variant 2

anyOf variant 2.

- Value shape: null. Catalog categories of the item, recorded when the line joined the subscription. 

### SubscriptionLineItemPreviousAttributes.description

### SubscriptionLineItemPreviousAttributes.description variant 1

anyOf variant 1: Description of the item, recorded when the line joined the subscription. Omitted when none was recorded..

- Value shape: string. Description of the item, recorded when the line joined the subscription. Omitted when none was recorded. 

### SubscriptionLineItemPreviousAttributes.description variant 2

anyOf variant 2.

- Value shape: null. Description of the item, recorded when the line joined the subscription. Omitted when none was recorded. 

### SubscriptionLineItemPreviousAttributes.max_quantity

### SubscriptionLineItemPreviousAttributes.max_quantity variant 1

anyOf variant 1: Maximum buyer quantity, defaulting to 9999 when no bound was recorded. Merchants may set any quantity from 1 to 9999. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Maximum buyer quantity, defaulting to 9999 when no bound was recorded. Merchants may set any quantity from 1 to 9999. Whole-number quantity; fractional quantities are not supported. Maximum buyer quantity, defaulting to 9999 when no bound was recorded. Merchants may set any quantity from 1 to 9999. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. 

### SubscriptionLineItemPreviousAttributes.max_quantity variant 2

anyOf variant 2.

- Value shape: null. Maximum buyer quantity, defaulting to 9999 when no bound was recorded. Merchants may set any quantity from 1 to 9999. Whole-number quantity; fractional quantities are not supported. 

### SubscriptionLineItemPreviousAttributes.min_quantity

### SubscriptionLineItemPreviousAttributes.min_quantity variant 1

anyOf variant 1: Minimum buyer quantity, defaulting to 1 when no bound was recorded. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Minimum buyer quantity, defaulting to 1 when no bound was recorded. Whole-number quantity; fractional quantities are not supported. Minimum buyer quantity, defaulting to 1 when no bound was recorded. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. 

### SubscriptionLineItemPreviousAttributes.min_quantity variant 2

anyOf variant 2.

- Value shape: null. Minimum buyer quantity, defaulting to 1 when no bound was recorded. Whole-number quantity; fractional quantities are not supported. 

### SubscriptionLineItemPreviousAttributes.modifier_total_money

Sum of the line's modifier totals.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### SubscriptionLineItemPreviousAttributes.modifier_total_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### SubscriptionLineItemPreviousAttributes.modifier_total_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Sum of the line's modifier totals. 

### SubscriptionLineItemPreviousAttributes.modifier_total_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### SubscriptionLineItemPreviousAttributes.modifier_total_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### SubscriptionLineItemPreviousAttributes.modifiers

Declared alternatives: [OrderLineItemPreviousAttributes.modifiers](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesmodifiers).

### SubscriptionLineItemPreviousAttributes.name

### SubscriptionLineItemPreviousAttributes.name variant 1

anyOf variant 1: Name of the item, recorded when the line joined the subscription. Later catalog edits don't change it..

- Value shape: string. Name of the item, recorded when the line joined the subscription. Later catalog edits don't change it. 

### SubscriptionLineItemPreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. Name of the item, recorded when the line joined the subscription. Later catalog edits don't change it. 

### SubscriptionLineItemPreviousAttributes.product_id

Declared alternatives: [OrderLineItemPreviousAttributes.product_id](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesproduct_id).

### SubscriptionLineItemPreviousAttributes.quantity

Declared alternatives: [BundleComponentPreviousAttributes.quantity](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesquantity).

### SubscriptionLineItemPreviousAttributes.selected_options

Declared alternatives: [OrderLineItemPreviousAttributes.selected_options](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesselected_options).

### SubscriptionLineItemPreviousAttributes.sku

### SubscriptionLineItemPreviousAttributes.sku variant 1

anyOf variant 1: SKU of the item, recorded when the line joined the subscription. Omitted when the item has none..

- Value shape: string. SKU of the item, recorded when the line joined the subscription. Omitted when the item has none. 

### SubscriptionLineItemPreviousAttributes.sku variant 2

anyOf variant 2.

- Value shape: null. SKU of the item, recorded when the line joined the subscription. Omitted when the item has none. 

### SubscriptionLineItemPreviousAttributes.subscription_id

### SubscriptionLineItemPreviousAttributes.subscription_id variant 1

anyOf variant 1: Subscription that owns this line, including frozen lines in a scheduled plan change..

- Value shape: string. Subscription that owns this line, including frozen lines in a scheduled plan change. Subscription that owns this line, including frozen lines in a scheduled plan change. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. 

### SubscriptionLineItemPreviousAttributes.subscription_id variant 2

anyOf variant 2.

- Value shape: null. Subscription that owns this line, including frozen lines in a scheduled plan change. 

### SubscriptionLineItemPreviousAttributes.subscription_line_item_id

### SubscriptionLineItemPreviousAttributes.subscription_line_item_id variant 1

anyOf variant 1: Unique identifier for this subscription line item, prefixed `sli_`..

- Value shape: string. Unique identifier for this subscription line item, prefixed `sli_`. Unique identifier for this subscription line item, prefixed `sli_`. Example: `"sli_01KEZF7C00PPWVJ2N321V84ASA"`. 

### SubscriptionLineItemPreviousAttributes.subscription_line_item_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this subscription line item, prefixed `sli_`. 

### SubscriptionLineItemPreviousAttributes.subscription_offer_id

### SubscriptionLineItemPreviousAttributes.subscription_offer_id variant 1

anyOf variant 1: ID of the subscription offer the line was bought under. Absent on plan-based subscriptions and on lines added to the subscription directly..

- Value shape: string. ID of the subscription offer the line was bought under. Absent on plan-based subscriptions and on lines added to the subscription directly. ID of the subscription offer the line was bought under. Absent on plan-based subscriptions and on lines added to the subscription directly. Example: `"soffer_01KEZF7C00KAA9Y1X1KM70YFAA"`. 

### SubscriptionLineItemPreviousAttributes.subscription_offer_id variant 2

anyOf variant 2.

- Value shape: null. ID of the subscription offer the line was bought under. Absent on plan-based subscriptions and on lines added to the subscription directly. 

### SubscriptionLineItemPreviousAttributes.subscription_plan_line_item_id

### SubscriptionLineItemPreviousAttributes.subscription_plan_line_item_id variant 1

anyOf variant 1: ID of the subscription plan line this line was copied from. A variant swap keeps it. Absent on offer-based subscriptions and on lines added to the subscription directly..

- Value shape: string. ID of the subscription plan line this line was copied from. A variant swap keeps it. Absent on offer-based subscriptions and on lines added to the subscription directly. ID of the subscription plan line this line was copied from. A variant swap keeps it. Absent on offer-based subscriptions and on lines added to the subscription directly. Example: `"spli_01KEZF7C00H9FGC2KBRF82H87N"`. 

### SubscriptionLineItemPreviousAttributes.subscription_plan_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the subscription plan line this line was copied from. A variant swap keeps it. Absent on offer-based subscriptions and on lines added to the subscription directly. 

### SubscriptionLineItemPreviousAttributes.subtotal_money

Declared alternatives: [OrderLineItemPreviousAttributes.subtotal_money](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributessubtotal_money).

### SubscriptionLineItemPreviousAttributes.type

Declared alternatives: [InvoiceLineItemPreviousAttributes.type](../models/InvoiceLineItemPreviousAttributes.md#invoicelineitempreviousattributestype).

### SubscriptionLineItemPreviousAttributes.unit_price_money

Price of one unit before modifiers, discounts, and tax. A plan line keeps the price its plan set. A line added or swapped takes the variant's catalog price for the subscription's customer at that time, and keeps it until the line changes again.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### SubscriptionLineItemPreviousAttributes.unit_price_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### SubscriptionLineItemPreviousAttributes.unit_price_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Price of one unit before modifiers, discounts, and tax. A plan line keeps the price its plan set. A line added or swapped takes the variant's catalog price for the subscription's customer at that time, and keeps it until the line changes again. 

### SubscriptionLineItemPreviousAttributes.unit_price_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### SubscriptionLineItemPreviousAttributes.unit_price_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### SubscriptionLineItemPreviousAttributes.variant_id

### SubscriptionLineItemPreviousAttributes.variant_id variant 1

anyOf variant 1: ID of the catalog variant the line bills. Present on `variant` lines; a variant swap replaces it..

- Value shape: string. ID of the catalog variant the line bills. Present on `variant` lines; a variant swap replaces it. ID of the catalog variant the line bills. Present on `variant` lines; a variant swap replaces it. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. 

### SubscriptionLineItemPreviousAttributes.variant_id variant 2

anyOf variant 2.

- Value shape: null. ID of the catalog variant the line bills. Present on `variant` lines; a variant swap replaces it. 

