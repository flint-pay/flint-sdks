[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPlanLineItemPreviousAttributes







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
| `type` | Optional | (string or null) | How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. Values: `"variant"`, `"bundle"`, `"custom"`. `type`: [declared alternatives](../models/SubscriptionPlanLineItemPreviousAttributes.md#subscriptionplanlineitempreviousattributes-variant-1type), [declared alternatives](../models/SubscriptionPlanLineItemPreviousAttributes.md#subscriptionplanlineitempreviousattributes-variant-2type), [declared alternatives](../models/SubscriptionPlanLineItemPreviousAttributes.md#subscriptionplanlineitempreviousattributes-variant-3type). |
| `unit_price_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Price of one unit in the plan's currency, before modifiers, discounts, and tax. A variant or bundle line keeps the catalog price from when the line was added. `unit_price_money`: [declared alternatives](../models/SubscriptionPlanLineItemBundlePreviousAttributes.md#subscriptionplanlineitembundlepreviousattributesunit_price_money). |
| `variant_id` | Optional | string or null | ID of the catalog variant the line sells. Present on a variant line. `variant_id`: [declared alternatives](../models/SubscriptionPlanLineItemBundlePreviousAttributes.md#subscriptionplanlineitembundlepreviousattributesvariant_id). |

### SubscriptionPlanLineItemPreviousAttributes variant 1: `type` = `"variant"`

anyOf SubscriptionPlanLineItemVariantPreviousAttributes.

- Constraints for `type`: Values: `"variant"`.

### SubscriptionPlanLineItemPreviousAttributes variant 2: `type` = `"bundle"`

anyOf SubscriptionPlanLineItemBundlePreviousAttributes.

- Constraints for `type`: Values: `"bundle"`.

### SubscriptionPlanLineItemPreviousAttributes variant 3: `type` = `"custom"`

anyOf SubscriptionPlanLineItemCustomPreviousAttributes.

- Constraints for `type`: Values: `"custom"`.

### SubscriptionPlanLineItemPreviousAttributes.allow_quantity_adjustment

Declared alternatives: [SubscriptionPlanLineItemBundlePreviousAttributes.allow_quantity_adjustment](../models/SubscriptionPlanLineItemBundlePreviousAttributes.md#subscriptionplanlineitembundlepreviousattributesallow_quantity_adjustment).

### SubscriptionPlanLineItemPreviousAttributes.bundle_components

Declared alternatives: [SubscriptionPlanLineItemBundlePreviousAttributes.bundle_components](../models/SubscriptionPlanLineItemBundlePreviousAttributes.md#subscriptionplanlineitembundlepreviousattributesbundle_components).

### SubscriptionPlanLineItemPreviousAttributes.bundle_id

Declared alternatives: [SubscriptionPlanLineItemBundlePreviousAttributes.bundle_id](../models/SubscriptionPlanLineItemBundlePreviousAttributes.md#subscriptionplanlineitembundlepreviousattributesbundle_id).

### SubscriptionPlanLineItemPreviousAttributes.categories

Declared alternatives: [SubscriptionPlanLineItemBundlePreviousAttributes.categories](../models/SubscriptionPlanLineItemBundlePreviousAttributes.md#subscriptionplanlineitembundlepreviousattributescategories).

### SubscriptionPlanLineItemPreviousAttributes.description

Declared alternatives: [SubscriptionPlanLineItemBundlePreviousAttributes.description](../models/SubscriptionPlanLineItemBundlePreviousAttributes.md#subscriptionplanlineitembundlepreviousattributesdescription).

### SubscriptionPlanLineItemPreviousAttributes.max_quantity

Declared alternatives: [SubscriptionPlanLineItemBundlePreviousAttributes.max_quantity](../models/SubscriptionPlanLineItemBundlePreviousAttributes.md#subscriptionplanlineitembundlepreviousattributesmax_quantity).

### SubscriptionPlanLineItemPreviousAttributes.min_quantity

Declared alternatives: [SubscriptionPlanLineItemBundlePreviousAttributes.min_quantity](../models/SubscriptionPlanLineItemBundlePreviousAttributes.md#subscriptionplanlineitembundlepreviousattributesmin_quantity).

### SubscriptionPlanLineItemPreviousAttributes.modifiers

Declared alternatives: [SubscriptionPlanLineItemBundlePreviousAttributes.modifiers](../models/SubscriptionPlanLineItemBundlePreviousAttributes.md#subscriptionplanlineitembundlepreviousattributesmodifiers).

### SubscriptionPlanLineItemPreviousAttributes.name

Declared alternatives: [SubscriptionPlanLineItemBundlePreviousAttributes.name](../models/SubscriptionPlanLineItemBundlePreviousAttributes.md#subscriptionplanlineitembundlepreviousattributesname).

### SubscriptionPlanLineItemPreviousAttributes.product_id

Declared alternatives: [SubscriptionPlanLineItemBundlePreviousAttributes.product_id](../models/SubscriptionPlanLineItemBundlePreviousAttributes.md#subscriptionplanlineitembundlepreviousattributesproduct_id).

### SubscriptionPlanLineItemPreviousAttributes.quantity

Declared alternatives: [BundleComponentPreviousAttributes.quantity](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesquantity).

### SubscriptionPlanLineItemPreviousAttributes.selected_options

Declared alternatives: [SubscriptionPlanLineItemBundlePreviousAttributes.selected_options](../models/SubscriptionPlanLineItemBundlePreviousAttributes.md#subscriptionplanlineitembundlepreviousattributesselected_options).

### SubscriptionPlanLineItemPreviousAttributes.sku

Declared alternatives: [SubscriptionPlanLineItemBundlePreviousAttributes.sku](../models/SubscriptionPlanLineItemBundlePreviousAttributes.md#subscriptionplanlineitembundlepreviousattributessku).

### SubscriptionPlanLineItemPreviousAttributes.subscription_plan_line_item_id

Declared alternatives: [SubscriptionPlanLineItemBundlePreviousAttributes.subscription_plan_line_item_id](../models/SubscriptionPlanLineItemBundlePreviousAttributes.md#subscriptionplanlineitembundlepreviousattributessubscription_plan_line_item_id).

### SubscriptionPlanLineItemPreviousAttributes.swap_variant_ids

Declared alternatives: [SubscriptionPlanLineItemBundlePreviousAttributes.swap_variant_ids](../models/SubscriptionPlanLineItemBundlePreviousAttributes.md#subscriptionplanlineitembundlepreviousattributesswap_variant_ids).

### SubscriptionPlanLineItemPreviousAttributes.swap_variants

Declared alternatives: [SubscriptionPlanLineItemBundlePreviousAttributes.swap_variants](../models/SubscriptionPlanLineItemBundlePreviousAttributes.md#subscriptionplanlineitembundlepreviousattributesswap_variants).

### SubscriptionPlanLineItemPreviousAttributes variant 1.type

### SubscriptionPlanLineItemPreviousAttributes variant 1.type variant 1

anyOf group 1 variant 1: How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line..

- Value shape: string. How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. Values: `"variant"`, `"bundle"`, `"custom"`.

### SubscriptionPlanLineItemPreviousAttributes variant 1.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. 

### SubscriptionPlanLineItemPreviousAttributes variant 1.type variant 3

anyOf group 2 variant 1: How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line..

- Value shape: string. How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. Values: `"variant"`.

### SubscriptionPlanLineItemPreviousAttributes variant 1.type variant 5

anyOf group 3 variant 1: How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line..

- Value shape: string. How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. Values: `"variant"`.

### SubscriptionPlanLineItemPreviousAttributes.unit_price_money

Declared alternatives: [SubscriptionPlanLineItemBundlePreviousAttributes.unit_price_money](../models/SubscriptionPlanLineItemBundlePreviousAttributes.md#subscriptionplanlineitembundlepreviousattributesunit_price_money).

### SubscriptionPlanLineItemPreviousAttributes.variant_id

Declared alternatives: [SubscriptionPlanLineItemBundlePreviousAttributes.variant_id](../models/SubscriptionPlanLineItemBundlePreviousAttributes.md#subscriptionplanlineitembundlepreviousattributesvariant_id).

### SubscriptionPlanLineItemPreviousAttributes variant 2.type

### SubscriptionPlanLineItemPreviousAttributes variant 2.type variant 1

anyOf group 1 variant 1: How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line..

- Value shape: string. How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. Values: `"variant"`, `"bundle"`, `"custom"`.

### SubscriptionPlanLineItemPreviousAttributes variant 2.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. 

### SubscriptionPlanLineItemPreviousAttributes variant 2.type variant 3

anyOf group 2 variant 1: How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line..

- Value shape: string. How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. Values: `"bundle"`.

### SubscriptionPlanLineItemPreviousAttributes variant 2.type variant 5

anyOf group 3 variant 1: How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line..

- Value shape: string. How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. Values: `"bundle"`.

### SubscriptionPlanLineItemPreviousAttributes variant 3.type

### SubscriptionPlanLineItemPreviousAttributes variant 3.type variant 1

anyOf group 1 variant 1: How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line..

- Value shape: string. How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. Values: `"variant"`, `"bundle"`, `"custom"`.

### SubscriptionPlanLineItemPreviousAttributes variant 3.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. 

### SubscriptionPlanLineItemPreviousAttributes variant 3.type variant 3

anyOf group 2 variant 1: How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line..

- Value shape: string. How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. Values: `"custom"`.

### SubscriptionPlanLineItemPreviousAttributes variant 3.type variant 5

anyOf group 3 variant 1: How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line..

- Value shape: string. How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. Values: `"custom"`.

