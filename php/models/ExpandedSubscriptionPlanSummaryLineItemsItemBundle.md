[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ExpandedSubscriptionPlanSummaryLineItemsItemBundle

A line item on a subscription plan.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allow_quantity_adjustment` | Optional | boolean | Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan may allow adjustment. Default: `false`. |
| `bundle_components` | Optional | Array of ([ExpandedSubscriptionPlanSummaryLineItemsItemBundleBundleComponentsItem](../models/ExpandedSubscriptionPlanSummaryLineItemsItemBundleBundleComponentsItem.md#expandedsubscriptionplansummarylineitemsitembundlebundlecomponentsitem) and [BundleComponent](../models/BundleComponent.md#bundlecomponent)) |  |
| `bundle_id` | Required | string |  |
| `categories` | Optional | Array of ([ExpandedSubscriptionPlanSummaryLineItemsItemBundleCategoriesItem](../models/ExpandedSubscriptionPlanSummaryLineItemsItemBundleCategoriesItem.md#expandedsubscriptionplansummarylineitemsitembundlecategoriesitem) and [CategoryReference](../models/CategoryReference.md#categoryreference)) |  |
| `description` | Optional | string |  |
| `image` | Optional | [ExpandedSubscriptionPlanSummaryLineItemsItemBundleImage](../models/ExpandedSubscriptionPlanSummaryLineItemsItemBundleImage.md#expandedsubscriptionplansummarylineitemsitembundleimage) | An image with its URL, size, and alt text. |
| `max_quantity` | Optional | integer | Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to 9999. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. Default: `9999`. |
| `min_quantity` | Optional | integer | Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. Default: `1`. |
| `modifiers` | Optional | Array of ([ExpandedSubscriptionPlanSummaryLineItemsItemBundleModifiersItem](../models/ExpandedSubscriptionPlanSummaryLineItemsItemBundleModifiersItem.md#expandedsubscriptionplansummarylineitemsitembundlemodifiersitem) and [OrderLineItemModifier](../models/OrderLineItemModifier.md#orderlineitemmodifier)) |  |
| `name` | Optional | string |  |
| `product_id` | Optional | string |  |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `selected_options` | Optional | Array of ([ExpandedSubscriptionPlanSummaryLineItemsItemBundleSelectedOptionsItem](../models/ExpandedSubscriptionPlanSummaryLineItemsItemBundleSelectedOptionsItem.md#expandedsubscriptionplansummarylineitemsitembundleselectedoptionsitem) and [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption)) |  |
| `sku` | Optional | string |  |
| `subscription_plan_line_item_id` | Required | string | Unique identifier for this subscription plan line item, prefixed `spli_`. |
| `swap_variant_ids` | Required | Array of string | maxItems: `25`. uniqueItems: `true`. Items: pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `swap_variants` | Optional | Array of ([ExpandedSubscriptionPlanSummaryLineItemsItemBundleSwapVariantsItem](../models/ExpandedSubscriptionPlanSummaryLineItemsItemBundleSwapVariantsItem.md#expandedsubscriptionplansummarylineitemsitembundleswapvariantsitem) and object) | Current sellable alternatives in swap_variant_ids order, excluding the line's own variant and variants priced in a different currency. Present on variant lines, including an empty array. maxItems: `25`. |
| `tax` | Optional | [ExpandedSubscriptionPlanSummaryLineItemsItemBundleTax](../models/ExpandedSubscriptionPlanSummaryLineItemsItemBundleTax.md#expandedsubscriptionplansummarylineitemsitembundletax) | A line item's tax category and whether it is taxable. |
| `type` | Required | string | Values: `"bundle"`. |
| `unit_price_money` | Optional | [ExpandedSubscriptionPlanSummaryLineItemsItemBundleUnitPriceMoney](../models/ExpandedSubscriptionPlanSummaryLineItemsItemBundleUnitPriceMoney.md#expandedsubscriptionplansummarylineitemsitembundleunitpricemoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `variant_id` | Optional | string |  |

