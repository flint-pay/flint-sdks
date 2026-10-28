[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPlanLineItemsItemCustom

A line item on a subscription plan, from a variant or bundle, with its quantity, price, and variants a subscriber can swap to.

The `custom` variant of `SubscriptionPlanLineItem`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_components` | Optional | Array of ([SubscriptionPlanLineItemsItemCustomBundleComponentsItem](../models/SubscriptionPlanLineItemsItemCustomBundleComponentsItem.md#subscriptionplanlineitemsitemcustombundlecomponentsitem) and [BundleComponent](../models/BundleComponent.md#bundlecomponent)) |  |
| `bundle_id` | Optional | string |  |
| `categories` | Optional | Array of ([SubscriptionPlanLineItemsItemCustomCategoriesItem](../models/SubscriptionPlanLineItemsItemCustomCategoriesItem.md#subscriptionplanlineitemsitemcustomcategoriesitem) and [CategoryReference](../models/CategoryReference.md#categoryreference)) |  |
| `description` | Optional | string |  |
| `image` | Optional | [SubscriptionPlanLineItemsItemCustomImage](../models/SubscriptionPlanLineItemsItemCustomImage.md#subscriptionplanlineitemsitemcustomimage) | An image with its `url`, `width`, and `height`, and optional `alt` text. |
| `modifiers` | Optional | Array of ([SubscriptionPlanLineItemsItemCustomModifiersItem](../models/SubscriptionPlanLineItemsItemCustomModifiersItem.md#subscriptionplanlineitemsitemcustommodifiersitem) and [OrderLineItemModifier](../models/OrderLineItemModifier.md#orderlineitemmodifier)) |  |
| `name` | Required | string |  |
| `product_id` | Optional | string |  |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `selected_options` | Optional | Array of ([SubscriptionPlanLineItemsItemCustomSelectedOptionsItem](../models/SubscriptionPlanLineItemsItemCustomSelectedOptionsItem.md#subscriptionplanlineitemsitemcustomselectedoptionsitem) and [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption)) |  |
| `sku` | Optional | string |  |
| `subscription_plan_line_item_id` | Required | string |  |
| `swap_variant_ids` | Required | Array of string | maxItems: `25`. uniqueItems: `true`. Items: pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `swap_variants` | Optional | Array of ([SubscriptionPlanLineItemsItemCustomSwapVariantsItem](../models/SubscriptionPlanLineItemsItemCustomSwapVariantsItem.md#subscriptionplanlineitemsitemcustomswapvariantsitem) and object) | Current sellable alternatives in swap_variant_ids order, excluding the line's own variant and variants priced in a different currency. Present on variant lines, including an empty array. maxItems: `25`. |
| `tax` | Optional | [SubscriptionPlanLineItemsItemCustomTax](../models/SubscriptionPlanLineItemsItemCustomTax.md#subscriptionplanlineitemsitemcustomtax) | A line item's tax category and whether it is taxable. |
| `type` | Required | string | Values: `"custom"`. |
| `unit_price_money` | Required | [SubscriptionPlanLineItemsItemCustomUnitPriceMoney](../models/SubscriptionPlanLineItemsItemCustomUnitPriceMoney.md#subscriptionplanlineitemsitemcustomunitpricemoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `variant_id` | Optional | string |  |

