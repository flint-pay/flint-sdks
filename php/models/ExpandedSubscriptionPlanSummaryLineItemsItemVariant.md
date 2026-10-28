[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ExpandedSubscriptionPlanSummaryLineItemsItemVariant

A line item on a subscription plan, from a variant or bundle, with its quantity, price, and variants a subscriber can swap to.

The `variant` variant of `SubscriptionPlanLineItem`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_components` | Optional | Array of ([ExpandedSubscriptionPlanSummaryLineItemsItemVariantBundleComponentsItem](../models/ExpandedSubscriptionPlanSummaryLineItemsItemVariantBundleComponentsItem.md#expandedsubscriptionplansummarylineitemsitemvariantbundlecomponentsitem) and [BundleComponent](../models/BundleComponent.md#bundlecomponent)) |  |
| `bundle_id` | Optional | string |  |
| `categories` | Optional | Array of ([ExpandedSubscriptionPlanSummaryLineItemsItemVariantCategoriesItem](../models/ExpandedSubscriptionPlanSummaryLineItemsItemVariantCategoriesItem.md#expandedsubscriptionplansummarylineitemsitemvariantcategoriesitem) and [CategoryReference](../models/CategoryReference.md#categoryreference)) |  |
| `description` | Optional | string |  |
| `image` | Optional | [ExpandedSubscriptionPlanSummaryLineItemsItemVariantImage](../models/ExpandedSubscriptionPlanSummaryLineItemsItemVariantImage.md#expandedsubscriptionplansummarylineitemsitemvariantimage) | An image with its `url`, `width`, and `height`, and optional `alt` text. |
| `modifiers` | Optional | Array of ([ExpandedSubscriptionPlanSummaryLineItemsItemVariantModifiersItem](../models/ExpandedSubscriptionPlanSummaryLineItemsItemVariantModifiersItem.md#expandedsubscriptionplansummarylineitemsitemvariantmodifiersitem) and [OrderLineItemModifier](../models/OrderLineItemModifier.md#orderlineitemmodifier)) |  |
| `name` | Optional | string |  |
| `product_id` | Optional | string |  |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `selected_options` | Optional | Array of ([ExpandedSubscriptionPlanSummaryLineItemsItemVariantSelectedOptionsItem](../models/ExpandedSubscriptionPlanSummaryLineItemsItemVariantSelectedOptionsItem.md#expandedsubscriptionplansummarylineitemsitemvariantselectedoptionsitem) and [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption)) |  |
| `sku` | Optional | string |  |
| `subscription_plan_line_item_id` | Required | string |  |
| `swap_variant_ids` | Required | Array of string | maxItems: `25`. uniqueItems: `true`. Items: pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `swap_variants` | Optional | Array of ([ExpandedSubscriptionPlanSummaryLineItemsItemVariantSwapVariantsItem](../models/ExpandedSubscriptionPlanSummaryLineItemsItemVariantSwapVariantsItem.md#expandedsubscriptionplansummarylineitemsitemvariantswapvariantsitem) and object) | Current sellable alternatives in swap_variant_ids order, excluding the line's own variant and variants priced in a different currency. Present on variant lines, including an empty array. maxItems: `25`. |
| `tax` | Optional | [ExpandedSubscriptionPlanSummaryLineItemsItemVariantTax](../models/ExpandedSubscriptionPlanSummaryLineItemsItemVariantTax.md#expandedsubscriptionplansummarylineitemsitemvarianttax) | A line item's tax category and whether it is taxable. |
| `type` | Required | string | Values: `"variant"`. |
| `unit_price_money` | Optional | [ExpandedSubscriptionPlanSummaryLineItemsItemVariantUnitPriceMoney](../models/ExpandedSubscriptionPlanSummaryLineItemsItemVariantUnitPriceMoney.md#expandedsubscriptionplansummarylineitemsitemvariantunitpricemoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `variant_id` | Required | string |  |

