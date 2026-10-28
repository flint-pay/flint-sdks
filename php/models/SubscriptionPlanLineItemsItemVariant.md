[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPlanLineItemsItemVariant

A line item on a subscription plan, from a variant or bundle, with its quantity, price, and variants a subscriber can swap to.

The `variant` variant of `SubscriptionPlanLineItem`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_components` | Optional | Array of ([SubscriptionPlanLineItemsItemVariantBundleComponentsItem](../models/SubscriptionPlanLineItemsItemVariantBundleComponentsItem.md#subscriptionplanlineitemsitemvariantbundlecomponentsitem) and [BundleComponent](../models/BundleComponent.md#bundlecomponent)) |  |
| `bundle_id` | Optional | string |  |
| `categories` | Optional | Array of ([SubscriptionPlanLineItemsItemVariantCategoriesItem](../models/SubscriptionPlanLineItemsItemVariantCategoriesItem.md#subscriptionplanlineitemsitemvariantcategoriesitem) and [CategoryReference](../models/CategoryReference.md#categoryreference)) |  |
| `description` | Optional | string |  |
| `image` | Optional | [SubscriptionPlanLineItemsItemVariantImage](../models/SubscriptionPlanLineItemsItemVariantImage.md#subscriptionplanlineitemsitemvariantimage) | An image with its `url`, `width`, and `height`, and optional `alt` text. |
| `modifiers` | Optional | Array of ([SubscriptionPlanLineItemsItemVariantModifiersItem](../models/SubscriptionPlanLineItemsItemVariantModifiersItem.md#subscriptionplanlineitemsitemvariantmodifiersitem) and [OrderLineItemModifier](../models/OrderLineItemModifier.md#orderlineitemmodifier)) |  |
| `name` | Optional | string |  |
| `product_id` | Optional | string |  |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `selected_options` | Optional | Array of ([SubscriptionPlanLineItemsItemVariantSelectedOptionsItem](../models/SubscriptionPlanLineItemsItemVariantSelectedOptionsItem.md#subscriptionplanlineitemsitemvariantselectedoptionsitem) and [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption)) |  |
| `sku` | Optional | string |  |
| `subscription_plan_line_item_id` | Required | string |  |
| `swap_variant_ids` | Required | Array of string | maxItems: `25`. uniqueItems: `true`. Items: pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `swap_variants` | Optional | Array of ([SubscriptionPlanLineItemsItemVariantSwapVariantsItem](../models/SubscriptionPlanLineItemsItemVariantSwapVariantsItem.md#subscriptionplanlineitemsitemvariantswapvariantsitem) and object) | Current sellable alternatives in swap_variant_ids order, excluding the line's own variant and variants priced in a different currency. Present on variant lines, including an empty array. maxItems: `25`. |
| `tax` | Optional | [SubscriptionPlanLineItemsItemVariantTax](../models/SubscriptionPlanLineItemsItemVariantTax.md#subscriptionplanlineitemsitemvarianttax) | A line item's tax category and whether it is taxable. |
| `type` | Required | string | Values: `"variant"`. |
| `unit_price_money` | Optional | [SubscriptionPlanLineItemsItemVariantUnitPriceMoney](../models/SubscriptionPlanLineItemsItemVariantUnitPriceMoney.md#subscriptionplanlineitemsitemvariantunitpricemoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `variant_id` | Required | string |  |

