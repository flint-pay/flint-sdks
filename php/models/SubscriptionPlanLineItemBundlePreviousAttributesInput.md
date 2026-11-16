[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPlanLineItemBundlePreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allow_quantity_adjustment` | Optional | boolean or null | Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan may allow adjustment. `allow_quantity_adjustment`: [declared alternatives](../models/SubscriptionPlanLineItemBundlePreviousAttributesInput.md#subscriptionplanlineitembundlepreviousattributesinputallow_quantity_adjustment). |
| `bundle_components` | Optional | Array of [BundleComponentPreviousAttributesInput](../models/BundleComponentPreviousAttributesInput.md#bundlecomponentpreviousattributesinput) or null | Components of the bundle, fixed when the line was added. Omitted on variant and custom lines. `bundle_components`: [declared alternatives](../models/SubscriptionPlanLineItemBundlePreviousAttributesInput.md#subscriptionplanlineitembundlepreviousattributesinputbundle_components). |
| `bundle_id` | Optional | string or null | ID of the catalog bundle the line sells. Present on a bundle line. `bundle_id`: [declared alternatives](../models/SubscriptionPlanLineItemBundlePreviousAttributesInput.md#subscriptionplanlineitembundlepreviousattributesinputbundle_id). |
| `categories` | Optional | Array of [CategoryReferencePreviousAttributesInput](../models/CategoryReferencePreviousAttributesInput.md#categoryreferencepreviousattributesinput) or null | Catalog categories of the product or bundle, fixed when the line was added. Omitted on custom lines. `categories`: [declared alternatives](../models/SubscriptionPlanLineItemBundlePreviousAttributesInput.md#subscriptionplanlineitembundlepreviousattributesinputcategories). |
| `description` | Optional | string or null | Description of the line. A variant line uses the product description and a bundle line uses the bundle description; Flint copied it when the line was added. A custom line uses the description you sent. Omitted when there is none. `description`: [declared alternatives](../models/SubscriptionPlanLineItemBundlePreviousAttributesInput.md#subscriptionplanlineitembundlepreviousattributesinputdescription). |
| `image` | Optional | [ImagePreviousAttributesInput](../models/ImagePreviousAttributesInput.md#imagepreviousattributesinput) or null | Primary image of the variant (or its product) or bundle, fixed when the line was added. Omitted on custom lines and when the item has no image. |
| `max_quantity` | Optional | integer or null | Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to 9999. Whole-number quantity; fractional quantities are not supported. `max_quantity`: [declared alternatives](../models/SubscriptionPlanLineItemBundlePreviousAttributesInput.md#subscriptionplanlineitembundlepreviousattributesinputmax_quantity). |
| `min_quantity` | Optional | integer or null | Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity. Whole-number quantity; fractional quantities are not supported. `min_quantity`: [declared alternatives](../models/SubscriptionPlanLineItemBundlePreviousAttributesInput.md#subscriptionplanlineitembundlepreviousattributesinputmin_quantity). |
| `modifiers` | Optional | Array of [OrderLineItemModifierPreviousAttributesInput](../models/OrderLineItemModifierPreviousAttributesInput.md#orderlineitemmodifierpreviousattributesinput) or null | Modifiers chosen for the line, with their prices, fixed when the line was added or last changed. Omitted when the line has none. `modifiers`: [declared alternatives](../models/SubscriptionPlanLineItemBundlePreviousAttributesInput.md#subscriptionplanlineitembundlepreviousattributesinputmodifiers). |
| `name` | Optional | string or null | Name of the line. A variant line uses the product name, followed by the variant name when the variant has options, and a bundle line uses the bundle name; Flint copied it when the line was added. A custom line uses the name you sent. `name`: [declared alternatives](../models/SubscriptionPlanLineItemBundlePreviousAttributesInput.md#subscriptionplanlineitembundlepreviousattributesinputname). |
| `product_id` | Optional | string or null | ID of the product the line's variant belongs to. Present on a variant line; absent on bundle and custom lines, which have no parent product. `product_id`: [declared alternatives](../models/SubscriptionPlanLineItemBundlePreviousAttributesInput.md#subscriptionplanlineitembundlepreviousattributesinputproduct_id). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/BundleComponentPreviousAttributesInput.md#bundlecomponentpreviousattributesinputquantity). |
| `selected_options` | Optional | Array of [SelectedProductOptionPreviousAttributesInput](../models/SelectedProductOptionPreviousAttributesInput.md#selectedproductoptionpreviousattributesinput) or null | Option values that identify the variant, such as size and color, fixed when the line was added. Omitted on bundle and custom lines. `selected_options`: [declared alternatives](../models/SubscriptionPlanLineItemBundlePreviousAttributesInput.md#subscriptionplanlineitembundlepreviousattributesinputselected_options). |
| `sku` | Optional | string or null | SKU of the variant or bundle, fixed when the line was added. Omitted on custom lines and when the item has no SKU. `sku`: [declared alternatives](../models/SubscriptionPlanLineItemBundlePreviousAttributesInput.md#subscriptionplanlineitembundlepreviousattributesinputsku). |
| `subscription_plan_line_item_id` | Optional | string or null | Unique identifier for this subscription plan line item, prefixed `spli_`. `subscription_plan_line_item_id`: [declared alternatives](../models/SubscriptionPlanLineItemBundlePreviousAttributesInput.md#subscriptionplanlineitembundlepreviousattributesinputsubscription_plan_line_item_id). |
| `swap_variant_ids` | Optional | Array of string or null | IDs of the variants a subscriber can swap this line to, in the order you set. Empty when none are set, and always empty on bundle and custom lines. `swap_variant_ids`: [declared alternatives](../models/SubscriptionPlanLineItemBundlePreviousAttributesInput.md#subscriptionplanlineitembundlepreviousattributesinputswap_variant_ids). |
| `swap_variants` | Optional | Array of [SubscriptionPlanSwapVariantPreviousAttributesInput](../models/SubscriptionPlanSwapVariantPreviousAttributesInput.md#subscriptionplanswapvariantpreviousattributesinput) or null | Current sellable alternatives in swap_variant_ids order, excluding the line's own variant and variants priced in a different currency. Present on variant lines, including an empty array. `swap_variants`: [declared alternatives](../models/SubscriptionPlanLineItemBundlePreviousAttributesInput.md#subscriptionplanlineitembundlepreviousattributesinputswap_variants). |
| `tax` | Optional | [OrderLineItemTaxPreviousAttributesInput](../models/OrderLineItemTaxPreviousAttributesInput.md#orderlineitemtaxpreviousattributesinput) or null | How tax applies to the line. A variant line takes its taxable setting and tax category from the variant, and a bundle line from its components; Flint copied them when the line was added. A taxable variant or bundle line with no tax category gets your default line item tax category, or `general`. A custom line has the tax you sent. |
| `type` | Optional | (string or null) | How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. Values: `"bundle"`. `type`: [declared alternatives](../models/SubscriptionPlanLineItemBundlePreviousAttributesInput.md#subscriptionplanlineitembundlepreviousattributesinputtype). |
| `unit_price_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Price of one unit in the plan's currency, before modifiers, discounts, and tax. A variant or bundle line keeps the catalog price from when the line was added. |
| `variant_id` | Optional | string or null | ID of the catalog variant the line sells. Present on a variant line. `variant_id`: [declared alternatives](../models/SubscriptionPlanLineItemBundlePreviousAttributesInput.md#subscriptionplanlineitembundlepreviousattributesinputvariant_id). |

### SubscriptionPlanLineItemBundlePreviousAttributesInput.allow_quantity_adjustment

### SubscriptionPlanLineItemBundlePreviousAttributesInput.allow_quantity_adjustment variant 1

anyOf variant 1: Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan may allow adjustment..

- Value shape: boolean. Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan may allow adjustment. Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan may allow adjustment. Default: `false`. 

### SubscriptionPlanLineItemBundlePreviousAttributesInput.allow_quantity_adjustment variant 2

anyOf variant 2.

- Value shape: null. Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan may allow adjustment. 

### SubscriptionPlanLineItemBundlePreviousAttributesInput.bundle_components

### SubscriptionPlanLineItemBundlePreviousAttributesInput.bundle_components variant 1

anyOf variant 1: Components of the bundle, fixed when the line was added. Omitted on variant and custom lines..

- Value shape: Array of [BundleComponentPreviousAttributesInput](../models/BundleComponentPreviousAttributesInput.md#bundlecomponentpreviousattributesinput). Components of the bundle, fixed when the line was added. Omitted on variant and custom lines. 

### SubscriptionPlanLineItemBundlePreviousAttributesInput.bundle_components variant 2

anyOf variant 2.

- Value shape: null. Components of the bundle, fixed when the line was added. Omitted on variant and custom lines. 

### SubscriptionPlanLineItemBundlePreviousAttributesInput.bundle_id

### SubscriptionPlanLineItemBundlePreviousAttributesInput.bundle_id variant 1

anyOf variant 1: ID of the catalog bundle the line sells. Present on a bundle line..

- Value shape: string. ID of the catalog bundle the line sells. Present on a bundle line. ID of the catalog bundle the line sells. Present on a bundle line. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. 

### SubscriptionPlanLineItemBundlePreviousAttributesInput.bundle_id variant 2

anyOf variant 2.

- Value shape: null. ID of the catalog bundle the line sells. Present on a bundle line. 

### SubscriptionPlanLineItemBundlePreviousAttributesInput.categories

### SubscriptionPlanLineItemBundlePreviousAttributesInput.categories variant 1

anyOf variant 1: Catalog categories of the product or bundle, fixed when the line was added. Omitted on custom lines..

- Value shape: Array of [CategoryReferencePreviousAttributesInput](../models/CategoryReferencePreviousAttributesInput.md#categoryreferencepreviousattributesinput). Catalog categories of the product or bundle, fixed when the line was added. Omitted on custom lines. 

### SubscriptionPlanLineItemBundlePreviousAttributesInput.categories variant 2

anyOf variant 2.

- Value shape: null. Catalog categories of the product or bundle, fixed when the line was added. Omitted on custom lines. 

### SubscriptionPlanLineItemBundlePreviousAttributesInput.description

### SubscriptionPlanLineItemBundlePreviousAttributesInput.description variant 1

anyOf variant 1: Description of the line. A variant line uses the product description and a bundle line uses the bundle description; Flint copied it when the line was added. A custom line uses the description you sent. Omitted when there is none..

- Value shape: string. Description of the line. A variant line uses the product description and a bundle line uses the bundle description; Flint copied it when the line was added. A custom line uses the description you sent. Omitted when there is none. 

### SubscriptionPlanLineItemBundlePreviousAttributesInput.description variant 2

anyOf variant 2.

- Value shape: null. Description of the line. A variant line uses the product description and a bundle line uses the bundle description; Flint copied it when the line was added. A custom line uses the description you sent. Omitted when there is none. 

### SubscriptionPlanLineItemBundlePreviousAttributesInput.max_quantity

### SubscriptionPlanLineItemBundlePreviousAttributesInput.max_quantity variant 1

anyOf variant 1: Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to 9999. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to 9999. Whole-number quantity; fractional quantities are not supported. Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to 9999. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. Default: `9999`. 

### SubscriptionPlanLineItemBundlePreviousAttributesInput.max_quantity variant 2

anyOf variant 2.

- Value shape: null. Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to 9999. Whole-number quantity; fractional quantities are not supported. 

### SubscriptionPlanLineItemBundlePreviousAttributesInput.min_quantity

### SubscriptionPlanLineItemBundlePreviousAttributesInput.min_quantity variant 1

anyOf variant 1: Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity. Whole-number quantity; fractional quantities are not supported. Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. Default: `1`. 

### SubscriptionPlanLineItemBundlePreviousAttributesInput.min_quantity variant 2

anyOf variant 2.

- Value shape: null. Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity. Whole-number quantity; fractional quantities are not supported. 

### SubscriptionPlanLineItemBundlePreviousAttributesInput.modifiers

### SubscriptionPlanLineItemBundlePreviousAttributesInput.modifiers variant 1

anyOf variant 1: Modifiers chosen for the line, with their prices, fixed when the line was added or last changed. Omitted when the line has none..

- Value shape: Array of [OrderLineItemModifierPreviousAttributesInput](../models/OrderLineItemModifierPreviousAttributesInput.md#orderlineitemmodifierpreviousattributesinput). Modifiers chosen for the line, with their prices, fixed when the line was added or last changed. Omitted when the line has none. 

### SubscriptionPlanLineItemBundlePreviousAttributesInput.modifiers variant 2

anyOf variant 2.

- Value shape: null. Modifiers chosen for the line, with their prices, fixed when the line was added or last changed. Omitted when the line has none. 

### SubscriptionPlanLineItemBundlePreviousAttributesInput.name

### SubscriptionPlanLineItemBundlePreviousAttributesInput.name variant 1

anyOf variant 1: Name of the line. A variant line uses the product name, followed by the variant name when the variant has options, and a bundle line uses the bundle name; Flint copied it when the line was added. A custom line uses the name you sent..

- Value shape: string. Name of the line. A variant line uses the product name, followed by the variant name when the variant has options, and a bundle line uses the bundle name; Flint copied it when the line was added. A custom line uses the name you sent. 

### SubscriptionPlanLineItemBundlePreviousAttributesInput.name variant 2

anyOf variant 2.

- Value shape: null. Name of the line. A variant line uses the product name, followed by the variant name when the variant has options, and a bundle line uses the bundle name; Flint copied it when the line was added. A custom line uses the name you sent. 

### SubscriptionPlanLineItemBundlePreviousAttributesInput.product_id

### SubscriptionPlanLineItemBundlePreviousAttributesInput.product_id variant 1

anyOf variant 1: ID of the product the line's variant belongs to. Present on a variant line; absent on bundle and custom lines, which have no parent product..

- Value shape: string. ID of the product the line's variant belongs to. Present on a variant line; absent on bundle and custom lines, which have no parent product. ID of the product the line's variant belongs to. Present on a variant line; absent on bundle and custom lines, which have no parent product. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. 

### SubscriptionPlanLineItemBundlePreviousAttributesInput.product_id variant 2

anyOf variant 2.

- Value shape: null. ID of the product the line's variant belongs to. Present on a variant line; absent on bundle and custom lines, which have no parent product. 

### SubscriptionPlanLineItemBundlePreviousAttributesInput.quantity

Declared alternatives: [BundleComponentPreviousAttributesInput.quantity](../models/BundleComponentPreviousAttributesInput.md#bundlecomponentpreviousattributesinputquantity).

### SubscriptionPlanLineItemBundlePreviousAttributesInput.selected_options

### SubscriptionPlanLineItemBundlePreviousAttributesInput.selected_options variant 1

anyOf variant 1: Option values that identify the variant, such as size and color, fixed when the line was added. Omitted on bundle and custom lines..

- Value shape: Array of [SelectedProductOptionPreviousAttributesInput](../models/SelectedProductOptionPreviousAttributesInput.md#selectedproductoptionpreviousattributesinput). Option values that identify the variant, such as size and color, fixed when the line was added. Omitted on bundle and custom lines. 

### SubscriptionPlanLineItemBundlePreviousAttributesInput.selected_options variant 2

anyOf variant 2.

- Value shape: null. Option values that identify the variant, such as size and color, fixed when the line was added. Omitted on bundle and custom lines. 

### SubscriptionPlanLineItemBundlePreviousAttributesInput.sku

### SubscriptionPlanLineItemBundlePreviousAttributesInput.sku variant 1

anyOf variant 1: SKU of the variant or bundle, fixed when the line was added. Omitted on custom lines and when the item has no SKU..

- Value shape: string. SKU of the variant or bundle, fixed when the line was added. Omitted on custom lines and when the item has no SKU. 

### SubscriptionPlanLineItemBundlePreviousAttributesInput.sku variant 2

anyOf variant 2.

- Value shape: null. SKU of the variant or bundle, fixed when the line was added. Omitted on custom lines and when the item has no SKU. 

### SubscriptionPlanLineItemBundlePreviousAttributesInput.subscription_plan_line_item_id

### SubscriptionPlanLineItemBundlePreviousAttributesInput.subscription_plan_line_item_id variant 1

anyOf variant 1: Unique identifier for this subscription plan line item, prefixed `spli_`..

- Value shape: string. Unique identifier for this subscription plan line item, prefixed `spli_`. Unique identifier for this subscription plan line item, prefixed `spli_`. Example: `"spli_01KEZF7C00H9FGC2KBRF82H87N"`. 

### SubscriptionPlanLineItemBundlePreviousAttributesInput.subscription_plan_line_item_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this subscription plan line item, prefixed `spli_`. 

### SubscriptionPlanLineItemBundlePreviousAttributesInput.swap_variant_ids

### SubscriptionPlanLineItemBundlePreviousAttributesInput.swap_variant_ids variant 1

anyOf variant 1: IDs of the variants a subscriber can swap this line to, in the order you set. Empty when none are set, and always empty on bundle and custom lines..

- Value shape: Array of string. IDs of the variants a subscriber can swap this line to, in the order you set. Empty when none are set, and always empty on bundle and custom lines. IDs of the variants a subscriber can swap this line to, in the order you set. Empty when none are set, and always empty on bundle and custom lines. maxItems: `25`. uniqueItems: `true`. Items: pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. 

### SubscriptionPlanLineItemBundlePreviousAttributesInput.swap_variant_ids variant 2

anyOf variant 2.

- Value shape: null. IDs of the variants a subscriber can swap this line to, in the order you set. Empty when none are set, and always empty on bundle and custom lines. 

### SubscriptionPlanLineItemBundlePreviousAttributesInput.swap_variants

### SubscriptionPlanLineItemBundlePreviousAttributesInput.swap_variants variant 1

anyOf variant 1: Current sellable alternatives in swap_variant_ids order, excluding the line's own variant and variants priced in a different currency. Present on variant lines, including an empty array..

- Value shape: Array of [SubscriptionPlanSwapVariantPreviousAttributesInput](../models/SubscriptionPlanSwapVariantPreviousAttributesInput.md#subscriptionplanswapvariantpreviousattributesinput). Current sellable alternatives in swap_variant_ids order, excluding the line's own variant and variants priced in a different currency. Present on variant lines, including an empty array. Current sellable alternatives in swap_variant_ids order, excluding the line's own variant and variants priced in a different currency. Present on variant lines, including an empty array. maxItems: `25`. 

### SubscriptionPlanLineItemBundlePreviousAttributesInput.swap_variants variant 2

anyOf variant 2.

- Value shape: null. Current sellable alternatives in swap_variant_ids order, excluding the line's own variant and variants priced in a different currency. Present on variant lines, including an empty array. 

### SubscriptionPlanLineItemBundlePreviousAttributesInput.type

### SubscriptionPlanLineItemBundlePreviousAttributesInput.type variant 1

anyOf group 1 variant 1: How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line..

- Value shape: string. How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. Values: `"bundle"`.

### SubscriptionPlanLineItemBundlePreviousAttributesInput.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. 

### SubscriptionPlanLineItemBundlePreviousAttributesInput.type variant 3

anyOf group 2 variant 1: How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line..

- Value shape: string. How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. Values: `"bundle"`.

### SubscriptionPlanLineItemBundlePreviousAttributesInput.variant_id

### SubscriptionPlanLineItemBundlePreviousAttributesInput.variant_id variant 1

anyOf variant 1: ID of the catalog variant the line sells. Present on a variant line..

- Value shape: string. ID of the catalog variant the line sells. Present on a variant line. ID of the catalog variant the line sells. Present on a variant line. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. 

### SubscriptionPlanLineItemBundlePreviousAttributesInput.variant_id variant 2

anyOf variant 2.

- Value shape: null. ID of the catalog variant the line sells. Present on a variant line. 

