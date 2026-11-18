[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPlanLineItemBundlePreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allow_quantity_adjustment` | Optional | boolean or null | Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan may allow adjustment. `allow_quantity_adjustment`: [declared alternatives](../models/SubscriptionPlanLineItemBundlePreviousAttributes.md#subscriptionplanlineitembundlepreviousattributesallow_quantity_adjustment). |
| `bundle_components` | Optional | Array of [BundleComponentPreviousAttributes](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributes) or null | Components of the bundle, fixed when the line was added. Omitted on variant and custom lines. `bundle_components`: [declared alternatives](../models/SubscriptionPlanLineItemBundlePreviousAttributes.md#subscriptionplanlineitembundlepreviousattributesbundle_components). |
| `bundle_id` | Optional | string or null | ID of the catalog bundle the line sells. Present on a bundle line. `bundle_id`: [declared alternatives](../models/SubscriptionPlanLineItemBundlePreviousAttributes.md#subscriptionplanlineitembundlepreviousattributesbundle_id). |
| `categories` | Optional | Array of [CategoryReferencePreviousAttributes](../models/CategoryReferencePreviousAttributes.md#categoryreferencepreviousattributes) or null | Catalog categories of the product or bundle, fixed when the line was added. Omitted on custom lines. `categories`: [declared alternatives](../models/SubscriptionPlanLineItemBundlePreviousAttributes.md#subscriptionplanlineitembundlepreviousattributescategories). |
| `description` | Optional | string or null | Description of the line. A variant line uses the product description and a bundle line uses the bundle description; Flint copied it when the line was added. A custom line uses the description you sent. Omitted when there is none. `description`: [declared alternatives](../models/SubscriptionPlanLineItemBundlePreviousAttributes.md#subscriptionplanlineitembundlepreviousattributesdescription). |
| `image` | Optional | [ImagePreviousAttributes](../models/ImagePreviousAttributes.md#imagepreviousattributes) or null | Primary image of the variant (or its product) or bundle, fixed when the line was added. Omitted on custom lines and when the item has no image. |
| `max_quantity` | Optional | integer or null | Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to 9999. Whole-number quantity; fractional quantities are not supported. `max_quantity`: [declared alternatives](../models/SubscriptionPlanLineItemBundlePreviousAttributes.md#subscriptionplanlineitembundlepreviousattributesmax_quantity). |
| `min_quantity` | Optional | integer or null | Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity. Whole-number quantity; fractional quantities are not supported. `min_quantity`: [declared alternatives](../models/SubscriptionPlanLineItemBundlePreviousAttributes.md#subscriptionplanlineitembundlepreviousattributesmin_quantity). |
| `modifiers` | Optional | Array of [OrderLineItemModifierPreviousAttributes](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributes) or null | Modifiers chosen for the line, with their prices, fixed when the line was added or last changed. Omitted when the line has none. `modifiers`: [declared alternatives](../models/SubscriptionPlanLineItemBundlePreviousAttributes.md#subscriptionplanlineitembundlepreviousattributesmodifiers). |
| `name` | Optional | string or null | Name of the line. A variant line uses the product name, followed by the variant name when the variant has options, and a bundle line uses the bundle name; Flint copied it when the line was added. A custom line uses the name you sent. `name`: [declared alternatives](../models/SubscriptionPlanLineItemBundlePreviousAttributes.md#subscriptionplanlineitembundlepreviousattributesname). |
| `product_id` | Optional | string or null | ID of the product the line's variant belongs to. Present on a variant line; absent on bundle and custom lines, which have no parent product. `product_id`: [declared alternatives](../models/SubscriptionPlanLineItemBundlePreviousAttributes.md#subscriptionplanlineitembundlepreviousattributesproduct_id). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesquantity). |
| `selected_options` | Optional | Array of [SelectedProductOptionPreviousAttributes](../models/SelectedProductOptionPreviousAttributes.md#selectedproductoptionpreviousattributes) or null | Option values that identify the variant, such as size and color, fixed when the line was added. Omitted on bundle and custom lines. `selected_options`: [declared alternatives](../models/SubscriptionPlanLineItemBundlePreviousAttributes.md#subscriptionplanlineitembundlepreviousattributesselected_options). |
| `sku` | Optional | string or null | SKU of the variant or bundle, fixed when the line was added. Omitted on custom lines and when the item has no SKU. `sku`: [declared alternatives](../models/SubscriptionPlanLineItemBundlePreviousAttributes.md#subscriptionplanlineitembundlepreviousattributessku). |
| `subscription_plan_line_item_id` | Optional | string or null | Unique identifier for this subscription plan line item, prefixed `spli_`. `subscription_plan_line_item_id`: [declared alternatives](../models/SubscriptionPlanLineItemBundlePreviousAttributes.md#subscriptionplanlineitembundlepreviousattributessubscription_plan_line_item_id). |
| `swap_variant_ids` | Optional | Array of string or null | IDs of the variants a subscriber can swap this line to, in the order you set. Empty when none are set, and always empty on bundle and custom lines. `swap_variant_ids`: [declared alternatives](../models/SubscriptionPlanLineItemBundlePreviousAttributes.md#subscriptionplanlineitembundlepreviousattributesswap_variant_ids). |
| `swap_variants` | Optional | Array of [SubscriptionPlanSwapVariantPreviousAttributes](../models/SubscriptionPlanSwapVariantPreviousAttributes.md#subscriptionplanswapvariantpreviousattributes) or null | Current sellable alternatives in swap_variant_ids order, excluding the line's own variant and variants priced in a different currency. Present on variant lines, including an empty array. `swap_variants`: [declared alternatives](../models/SubscriptionPlanLineItemBundlePreviousAttributes.md#subscriptionplanlineitembundlepreviousattributesswap_variants). |
| `tax` | Optional | [OrderLineItemTaxPreviousAttributes](../models/OrderLineItemTaxPreviousAttributes.md#orderlineitemtaxpreviousattributes) or null | How tax applies to the line. A variant line takes its taxable setting and tax category from the variant, and a bundle line from its components; Flint copied them when the line was added. A taxable variant or bundle line with no tax category gets your default line item tax category, or `general`. A custom line has the tax you sent. |
| `type` | Optional | (string or null) | How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. Values: `"bundle"`. `type`: [declared alternatives](../models/SubscriptionPlanLineItemBundlePreviousAttributes.md#subscriptionplanlineitembundlepreviousattributestype). |
| `unit_price_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Price of one unit in the plan's currency, before modifiers, discounts, and tax. A variant or bundle line keeps the catalog price from when the line was added. `unit_price_money`: [declared alternatives](../models/SubscriptionPlanLineItemBundlePreviousAttributes.md#subscriptionplanlineitembundlepreviousattributesunit_price_money). |
| `variant_id` | Optional | string or null | ID of the catalog variant the line sells. Present on a variant line. `variant_id`: [declared alternatives](../models/SubscriptionPlanLineItemBundlePreviousAttributes.md#subscriptionplanlineitembundlepreviousattributesvariant_id). |

### SubscriptionPlanLineItemBundlePreviousAttributes.allow_quantity_adjustment

### SubscriptionPlanLineItemBundlePreviousAttributes.allow_quantity_adjustment variant 1

anyOf variant 1: Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan may allow adjustment..

- Value shape: boolean. Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan may allow adjustment. Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan may allow adjustment. Default: `false`. 

### SubscriptionPlanLineItemBundlePreviousAttributes.allow_quantity_adjustment variant 2

anyOf variant 2.

- Value shape: null. Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan may allow adjustment. 

### SubscriptionPlanLineItemBundlePreviousAttributes.bundle_components

### SubscriptionPlanLineItemBundlePreviousAttributes.bundle_components variant 1

anyOf variant 1: Components of the bundle, fixed when the line was added. Omitted on variant and custom lines..

- Value shape: Array of [BundleComponentPreviousAttributes](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributes). Components of the bundle, fixed when the line was added. Omitted on variant and custom lines. 

### SubscriptionPlanLineItemBundlePreviousAttributes.bundle_components variant 2

anyOf variant 2.

- Value shape: null. Components of the bundle, fixed when the line was added. Omitted on variant and custom lines. 

### SubscriptionPlanLineItemBundlePreviousAttributes.bundle_id

### SubscriptionPlanLineItemBundlePreviousAttributes.bundle_id variant 1

anyOf variant 1: ID of the catalog bundle the line sells. Present on a bundle line..

- Value shape: string. ID of the catalog bundle the line sells. Present on a bundle line. ID of the catalog bundle the line sells. Present on a bundle line. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. 

### SubscriptionPlanLineItemBundlePreviousAttributes.bundle_id variant 2

anyOf variant 2.

- Value shape: null. ID of the catalog bundle the line sells. Present on a bundle line. 

### SubscriptionPlanLineItemBundlePreviousAttributes.categories

### SubscriptionPlanLineItemBundlePreviousAttributes.categories variant 1

anyOf variant 1: Catalog categories of the product or bundle, fixed when the line was added. Omitted on custom lines..

- Value shape: Array of [CategoryReferencePreviousAttributes](../models/CategoryReferencePreviousAttributes.md#categoryreferencepreviousattributes). Catalog categories of the product or bundle, fixed when the line was added. Omitted on custom lines. 

### SubscriptionPlanLineItemBundlePreviousAttributes.categories variant 2

anyOf variant 2.

- Value shape: null. Catalog categories of the product or bundle, fixed when the line was added. Omitted on custom lines. 

### SubscriptionPlanLineItemBundlePreviousAttributes.description

### SubscriptionPlanLineItemBundlePreviousAttributes.description variant 1

anyOf variant 1: Description of the line. A variant line uses the product description and a bundle line uses the bundle description; Flint copied it when the line was added. A custom line uses the description you sent. Omitted when there is none..

- Value shape: string. Description of the line. A variant line uses the product description and a bundle line uses the bundle description; Flint copied it when the line was added. A custom line uses the description you sent. Omitted when there is none. 

### SubscriptionPlanLineItemBundlePreviousAttributes.description variant 2

anyOf variant 2.

- Value shape: null. Description of the line. A variant line uses the product description and a bundle line uses the bundle description; Flint copied it when the line was added. A custom line uses the description you sent. Omitted when there is none. 

### SubscriptionPlanLineItemBundlePreviousAttributes.max_quantity

### SubscriptionPlanLineItemBundlePreviousAttributes.max_quantity variant 1

anyOf variant 1: Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to 9999. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to 9999. Whole-number quantity; fractional quantities are not supported. Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to 9999. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. Default: `9999`. 

### SubscriptionPlanLineItemBundlePreviousAttributes.max_quantity variant 2

anyOf variant 2.

- Value shape: null. Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to 9999. Whole-number quantity; fractional quantities are not supported. 

### SubscriptionPlanLineItemBundlePreviousAttributes.min_quantity

### SubscriptionPlanLineItemBundlePreviousAttributes.min_quantity variant 1

anyOf variant 1: Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity. Whole-number quantity; fractional quantities are not supported. Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. Default: `1`. 

### SubscriptionPlanLineItemBundlePreviousAttributes.min_quantity variant 2

anyOf variant 2.

- Value shape: null. Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity. Whole-number quantity; fractional quantities are not supported. 

### SubscriptionPlanLineItemBundlePreviousAttributes.modifiers

### SubscriptionPlanLineItemBundlePreviousAttributes.modifiers variant 1

anyOf variant 1: Modifiers chosen for the line, with their prices, fixed when the line was added or last changed. Omitted when the line has none..

- Value shape: Array of [OrderLineItemModifierPreviousAttributes](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributes). Modifiers chosen for the line, with their prices, fixed when the line was added or last changed. Omitted when the line has none. 

### SubscriptionPlanLineItemBundlePreviousAttributes.modifiers variant 2

anyOf variant 2.

- Value shape: null. Modifiers chosen for the line, with their prices, fixed when the line was added or last changed. Omitted when the line has none. 

### SubscriptionPlanLineItemBundlePreviousAttributes.name

### SubscriptionPlanLineItemBundlePreviousAttributes.name variant 1

anyOf variant 1: Name of the line. A variant line uses the product name, followed by the variant name when the variant has options, and a bundle line uses the bundle name; Flint copied it when the line was added. A custom line uses the name you sent..

- Value shape: string. Name of the line. A variant line uses the product name, followed by the variant name when the variant has options, and a bundle line uses the bundle name; Flint copied it when the line was added. A custom line uses the name you sent. 

### SubscriptionPlanLineItemBundlePreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. Name of the line. A variant line uses the product name, followed by the variant name when the variant has options, and a bundle line uses the bundle name; Flint copied it when the line was added. A custom line uses the name you sent. 

### SubscriptionPlanLineItemBundlePreviousAttributes.product_id

### SubscriptionPlanLineItemBundlePreviousAttributes.product_id variant 1

anyOf variant 1: ID of the product the line's variant belongs to. Present on a variant line; absent on bundle and custom lines, which have no parent product..

- Value shape: string. ID of the product the line's variant belongs to. Present on a variant line; absent on bundle and custom lines, which have no parent product. ID of the product the line's variant belongs to. Present on a variant line; absent on bundle and custom lines, which have no parent product. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. 

### SubscriptionPlanLineItemBundlePreviousAttributes.product_id variant 2

anyOf variant 2.

- Value shape: null. ID of the product the line's variant belongs to. Present on a variant line; absent on bundle and custom lines, which have no parent product. 

### SubscriptionPlanLineItemBundlePreviousAttributes.quantity

Declared alternatives: [BundleComponentPreviousAttributes.quantity](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesquantity).

### SubscriptionPlanLineItemBundlePreviousAttributes.selected_options

### SubscriptionPlanLineItemBundlePreviousAttributes.selected_options variant 1

anyOf variant 1: Option values that identify the variant, such as size and color, fixed when the line was added. Omitted on bundle and custom lines..

- Value shape: Array of [SelectedProductOptionPreviousAttributes](../models/SelectedProductOptionPreviousAttributes.md#selectedproductoptionpreviousattributes). Option values that identify the variant, such as size and color, fixed when the line was added. Omitted on bundle and custom lines. 

### SubscriptionPlanLineItemBundlePreviousAttributes.selected_options variant 2

anyOf variant 2.

- Value shape: null. Option values that identify the variant, such as size and color, fixed when the line was added. Omitted on bundle and custom lines. 

### SubscriptionPlanLineItemBundlePreviousAttributes.sku

### SubscriptionPlanLineItemBundlePreviousAttributes.sku variant 1

anyOf variant 1: SKU of the variant or bundle, fixed when the line was added. Omitted on custom lines and when the item has no SKU..

- Value shape: string. SKU of the variant or bundle, fixed when the line was added. Omitted on custom lines and when the item has no SKU. 

### SubscriptionPlanLineItemBundlePreviousAttributes.sku variant 2

anyOf variant 2.

- Value shape: null. SKU of the variant or bundle, fixed when the line was added. Omitted on custom lines and when the item has no SKU. 

### SubscriptionPlanLineItemBundlePreviousAttributes.subscription_plan_line_item_id

### SubscriptionPlanLineItemBundlePreviousAttributes.subscription_plan_line_item_id variant 1

anyOf variant 1: Unique identifier for this subscription plan line item, prefixed `spli_`..

- Value shape: string. Unique identifier for this subscription plan line item, prefixed `spli_`. Unique identifier for this subscription plan line item, prefixed `spli_`. Example: `"spli_01KEZF7C00H9FGC2KBRF82H87N"`. 

### SubscriptionPlanLineItemBundlePreviousAttributes.subscription_plan_line_item_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this subscription plan line item, prefixed `spli_`. 

### SubscriptionPlanLineItemBundlePreviousAttributes.swap_variant_ids

### SubscriptionPlanLineItemBundlePreviousAttributes.swap_variant_ids variant 1

anyOf variant 1: IDs of the variants a subscriber can swap this line to, in the order you set. Empty when none are set, and always empty on bundle and custom lines..

- Value shape: Array of string. IDs of the variants a subscriber can swap this line to, in the order you set. Empty when none are set, and always empty on bundle and custom lines. IDs of the variants a subscriber can swap this line to, in the order you set. Empty when none are set, and always empty on bundle and custom lines. maxItems: `25`. uniqueItems: `true`. Items: pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. 

### SubscriptionPlanLineItemBundlePreviousAttributes.swap_variant_ids variant 2

anyOf variant 2.

- Value shape: null. IDs of the variants a subscriber can swap this line to, in the order you set. Empty when none are set, and always empty on bundle and custom lines. 

### SubscriptionPlanLineItemBundlePreviousAttributes.swap_variants

### SubscriptionPlanLineItemBundlePreviousAttributes.swap_variants variant 1

anyOf variant 1: Current sellable alternatives in swap_variant_ids order, excluding the line's own variant and variants priced in a different currency. Present on variant lines, including an empty array..

- Value shape: Array of [SubscriptionPlanSwapVariantPreviousAttributes](../models/SubscriptionPlanSwapVariantPreviousAttributes.md#subscriptionplanswapvariantpreviousattributes). Current sellable alternatives in swap_variant_ids order, excluding the line's own variant and variants priced in a different currency. Present on variant lines, including an empty array. Current sellable alternatives in swap_variant_ids order, excluding the line's own variant and variants priced in a different currency. Present on variant lines, including an empty array. maxItems: `25`. 

### SubscriptionPlanLineItemBundlePreviousAttributes.swap_variants variant 2

anyOf variant 2.

- Value shape: null. Current sellable alternatives in swap_variant_ids order, excluding the line's own variant and variants priced in a different currency. Present on variant lines, including an empty array. 

### SubscriptionPlanLineItemBundlePreviousAttributes.type

### SubscriptionPlanLineItemBundlePreviousAttributes.type variant 1

anyOf group 1 variant 1: How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line..

- Value shape: string. How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. Values: `"bundle"`.

### SubscriptionPlanLineItemBundlePreviousAttributes.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. 

### SubscriptionPlanLineItemBundlePreviousAttributes.type variant 3

anyOf group 2 variant 1: How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line..

- Value shape: string. How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. Values: `"bundle"`.

### SubscriptionPlanLineItemBundlePreviousAttributes.unit_price_money

Price of one unit in the plan's currency, before modifiers, discounts, and tax. A variant or bundle line keeps the catalog price from when the line was added.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### SubscriptionPlanLineItemBundlePreviousAttributes.unit_price_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### SubscriptionPlanLineItemBundlePreviousAttributes.unit_price_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Price of one unit in the plan's currency, before modifiers, discounts, and tax. A variant or bundle line keeps the catalog price from when the line was added. 

### SubscriptionPlanLineItemBundlePreviousAttributes.unit_price_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### SubscriptionPlanLineItemBundlePreviousAttributes.unit_price_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### SubscriptionPlanLineItemBundlePreviousAttributes.variant_id

### SubscriptionPlanLineItemBundlePreviousAttributes.variant_id variant 1

anyOf variant 1: ID of the catalog variant the line sells. Present on a variant line..

- Value shape: string. ID of the catalog variant the line sells. Present on a variant line. ID of the catalog variant the line sells. Present on a variant line. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. 

### SubscriptionPlanLineItemBundlePreviousAttributes.variant_id variant 2

anyOf variant 2.

- Value shape: null. ID of the catalog variant the line sells. Present on a variant line. 

