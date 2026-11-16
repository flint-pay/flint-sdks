[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPlanLineItemPreviousAttributesInput



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
| `type` | Optional | (string or null) | How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. Values: `"variant"`, `"bundle"`, `"custom"`. `type`: [declared alternatives](../models/SubscriptionPlanLineItemPreviousAttributesInput.md#subscriptionplanlineitempreviousattributesinput-variant-1type), [declared alternatives](../models/SubscriptionPlanLineItemPreviousAttributesInput.md#subscriptionplanlineitempreviousattributesinput-variant-2type), [declared alternatives](../models/SubscriptionPlanLineItemPreviousAttributesInput.md#subscriptionplanlineitempreviousattributesinput-variant-3type). |
| `unit_price_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Price of one unit in the plan's currency, before modifiers, discounts, and tax. A variant or bundle line keeps the catalog price from when the line was added. |
| `variant_id` | Optional | string or null | ID of the catalog variant the line sells. Present on a variant line. `variant_id`: [declared alternatives](../models/SubscriptionPlanLineItemBundlePreviousAttributesInput.md#subscriptionplanlineitembundlepreviousattributesinputvariant_id). |

### SubscriptionPlanLineItemPreviousAttributesInput variant 1: `type` = `"variant"`

anyOf SubscriptionPlanLineItemVariantPreviousAttributes.

- Constraints for `type`: Values: `"variant"`.

### SubscriptionPlanLineItemPreviousAttributesInput variant 2: `type` = `"bundle"`

anyOf SubscriptionPlanLineItemBundlePreviousAttributes.

- Constraints for `type`: Values: `"bundle"`.

### SubscriptionPlanLineItemPreviousAttributesInput variant 3: `type` = `"custom"`

anyOf SubscriptionPlanLineItemCustomPreviousAttributes.

- Constraints for `type`: Values: `"custom"`.

### SubscriptionPlanLineItemPreviousAttributesInput.allow_quantity_adjustment

Declared alternatives: [SubscriptionPlanLineItemBundlePreviousAttributesInput.allow_quantity_adjustment](../models/SubscriptionPlanLineItemBundlePreviousAttributesInput.md#subscriptionplanlineitembundlepreviousattributesinputallow_quantity_adjustment).

### SubscriptionPlanLineItemPreviousAttributesInput.bundle_components

Declared alternatives: [SubscriptionPlanLineItemBundlePreviousAttributesInput.bundle_components](../models/SubscriptionPlanLineItemBundlePreviousAttributesInput.md#subscriptionplanlineitembundlepreviousattributesinputbundle_components).

### SubscriptionPlanLineItemPreviousAttributesInput.bundle_id

Declared alternatives: [SubscriptionPlanLineItemBundlePreviousAttributesInput.bundle_id](../models/SubscriptionPlanLineItemBundlePreviousAttributesInput.md#subscriptionplanlineitembundlepreviousattributesinputbundle_id).

### SubscriptionPlanLineItemPreviousAttributesInput.categories

Declared alternatives: [SubscriptionPlanLineItemBundlePreviousAttributesInput.categories](../models/SubscriptionPlanLineItemBundlePreviousAttributesInput.md#subscriptionplanlineitembundlepreviousattributesinputcategories).

### SubscriptionPlanLineItemPreviousAttributesInput.description

Declared alternatives: [SubscriptionPlanLineItemBundlePreviousAttributesInput.description](../models/SubscriptionPlanLineItemBundlePreviousAttributesInput.md#subscriptionplanlineitembundlepreviousattributesinputdescription).

### SubscriptionPlanLineItemPreviousAttributesInput.max_quantity

Declared alternatives: [SubscriptionPlanLineItemBundlePreviousAttributesInput.max_quantity](../models/SubscriptionPlanLineItemBundlePreviousAttributesInput.md#subscriptionplanlineitembundlepreviousattributesinputmax_quantity).

### SubscriptionPlanLineItemPreviousAttributesInput.min_quantity

Declared alternatives: [SubscriptionPlanLineItemBundlePreviousAttributesInput.min_quantity](../models/SubscriptionPlanLineItemBundlePreviousAttributesInput.md#subscriptionplanlineitembundlepreviousattributesinputmin_quantity).

### SubscriptionPlanLineItemPreviousAttributesInput.modifiers

Declared alternatives: [SubscriptionPlanLineItemBundlePreviousAttributesInput.modifiers](../models/SubscriptionPlanLineItemBundlePreviousAttributesInput.md#subscriptionplanlineitembundlepreviousattributesinputmodifiers).

### SubscriptionPlanLineItemPreviousAttributesInput.name

Declared alternatives: [SubscriptionPlanLineItemBundlePreviousAttributesInput.name](../models/SubscriptionPlanLineItemBundlePreviousAttributesInput.md#subscriptionplanlineitembundlepreviousattributesinputname).

### SubscriptionPlanLineItemPreviousAttributesInput.product_id

Declared alternatives: [SubscriptionPlanLineItemBundlePreviousAttributesInput.product_id](../models/SubscriptionPlanLineItemBundlePreviousAttributesInput.md#subscriptionplanlineitembundlepreviousattributesinputproduct_id).

### SubscriptionPlanLineItemPreviousAttributesInput.quantity

Declared alternatives: [BundleComponentPreviousAttributesInput.quantity](../models/BundleComponentPreviousAttributesInput.md#bundlecomponentpreviousattributesinputquantity).

### SubscriptionPlanLineItemPreviousAttributesInput.selected_options

Declared alternatives: [SubscriptionPlanLineItemBundlePreviousAttributesInput.selected_options](../models/SubscriptionPlanLineItemBundlePreviousAttributesInput.md#subscriptionplanlineitembundlepreviousattributesinputselected_options).

### SubscriptionPlanLineItemPreviousAttributesInput.sku

Declared alternatives: [SubscriptionPlanLineItemBundlePreviousAttributesInput.sku](../models/SubscriptionPlanLineItemBundlePreviousAttributesInput.md#subscriptionplanlineitembundlepreviousattributesinputsku).

### SubscriptionPlanLineItemPreviousAttributesInput.subscription_plan_line_item_id

Declared alternatives: [SubscriptionPlanLineItemBundlePreviousAttributesInput.subscription_plan_line_item_id](../models/SubscriptionPlanLineItemBundlePreviousAttributesInput.md#subscriptionplanlineitembundlepreviousattributesinputsubscription_plan_line_item_id).

### SubscriptionPlanLineItemPreviousAttributesInput.swap_variant_ids

Declared alternatives: [SubscriptionPlanLineItemBundlePreviousAttributesInput.swap_variant_ids](../models/SubscriptionPlanLineItemBundlePreviousAttributesInput.md#subscriptionplanlineitembundlepreviousattributesinputswap_variant_ids).

### SubscriptionPlanLineItemPreviousAttributesInput.swap_variants

Declared alternatives: [SubscriptionPlanLineItemBundlePreviousAttributesInput.swap_variants](../models/SubscriptionPlanLineItemBundlePreviousAttributesInput.md#subscriptionplanlineitembundlepreviousattributesinputswap_variants).

### SubscriptionPlanLineItemPreviousAttributesInput variant 1.type

### SubscriptionPlanLineItemPreviousAttributesInput variant 1.type variant 1

anyOf group 1 variant 1: How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line..

- Value shape: string. How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. Values: `"variant"`, `"bundle"`, `"custom"`.

### SubscriptionPlanLineItemPreviousAttributesInput variant 1.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. 

### SubscriptionPlanLineItemPreviousAttributesInput variant 1.type variant 3

anyOf group 2 variant 1: How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line..

- Value shape: string. How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. Values: `"variant"`.

### SubscriptionPlanLineItemPreviousAttributesInput variant 1.type variant 5

anyOf group 3 variant 1: How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line..

- Value shape: string. How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. Values: `"variant"`.

### SubscriptionPlanLineItemPreviousAttributesInput.variant_id

Declared alternatives: [SubscriptionPlanLineItemBundlePreviousAttributesInput.variant_id](../models/SubscriptionPlanLineItemBundlePreviousAttributesInput.md#subscriptionplanlineitembundlepreviousattributesinputvariant_id).

### SubscriptionPlanLineItemPreviousAttributesInput variant 2.type

### SubscriptionPlanLineItemPreviousAttributesInput variant 2.type variant 1

anyOf group 1 variant 1: How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line..

- Value shape: string. How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. Values: `"variant"`, `"bundle"`, `"custom"`.

### SubscriptionPlanLineItemPreviousAttributesInput variant 2.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. 

### SubscriptionPlanLineItemPreviousAttributesInput variant 2.type variant 3

anyOf group 2 variant 1: How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line..

- Value shape: string. How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. Values: `"bundle"`.

### SubscriptionPlanLineItemPreviousAttributesInput variant 2.type variant 5

anyOf group 3 variant 1: How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line..

- Value shape: string. How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. Values: `"bundle"`.

### SubscriptionPlanLineItemPreviousAttributesInput variant 3.type

### SubscriptionPlanLineItemPreviousAttributesInput variant 3.type variant 1

anyOf group 1 variant 1: How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line..

- Value shape: string. How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. Values: `"variant"`, `"bundle"`, `"custom"`.

### SubscriptionPlanLineItemPreviousAttributesInput variant 3.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. 

### SubscriptionPlanLineItemPreviousAttributesInput variant 3.type variant 3

anyOf group 2 variant 1: How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line..

- Value shape: string. How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. Values: `"custom"`.

### SubscriptionPlanLineItemPreviousAttributesInput variant 3.type variant 5

anyOf group 3 variant 1: How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line..

- Value shape: string. How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. Values: `"custom"`.

