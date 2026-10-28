[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerExpandedSubscriptionPlanSummaryLineItemsItemBundle

A line item of a subscription plan as a buyer sees it: the product, bundle, or variant, quantity, unit price, and swap variants.

The `bundle` variant of `BuyerSubscriptionPlanLineItem`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Required | string |  |
| `categories` | Optional | Array of ([BuyerExpandedSubscriptionPlanSummaryLineItemsItemBundleCategoriesItem](../models/BuyerExpandedSubscriptionPlanSummaryLineItemsItemBundleCategoriesItem.md#buyerexpandedsubscriptionplansummarylineitemsitembundlecategoriesitem) and [CategoryReference](../models/CategoryReference.md#categoryreference)) |  |
| `description` | Optional | string |  |
| `image` | Optional | [BuyerExpandedSubscriptionPlanSummaryLineItemsItemBundleImage](../models/BuyerExpandedSubscriptionPlanSummaryLineItemsItemBundleImage.md#buyerexpandedsubscriptionplansummarylineitemsitembundleimage) | An image with its `url`, `width`, and `height`, and optional `alt` text. |
| `name` | Optional | string |  |
| `product_id` | Optional | string |  |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `selected_options` | Optional | Array of ([BuyerExpandedSubscriptionPlanSummaryLineItemsItemBundleSelectedOptionsItem](../models/BuyerExpandedSubscriptionPlanSummaryLineItemsItemBundleSelectedOptionsItem.md#buyerexpandedsubscriptionplansummarylineitemsitembundleselectedoptionsitem) and [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption)) |  |
| `sku` | Optional | string |  |
| `subscription_plan_line_item_id` | Required | string |  |
| `swap_variant_ids` | Required | Array of string | maxItems: `25`. uniqueItems: `true`. Items: pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `swap_variants` | Optional | Array of ([BuyerExpandedSubscriptionPlanSummaryLineItemsItemBundleSwapVariantsItem](../models/BuyerExpandedSubscriptionPlanSummaryLineItemsItemBundleSwapVariantsItem.md#buyerexpandedsubscriptionplansummarylineitemsitembundleswapvariantsitem) and object) | Current sellable alternatives in swap_variant_ids order, excluding the line's own variant and variants priced in a different currency. Present on variant lines, including an empty array. maxItems: `25`. |
| `tax` | Optional | [BuyerExpandedSubscriptionPlanSummaryLineItemsItemBundleTax](../models/BuyerExpandedSubscriptionPlanSummaryLineItemsItemBundleTax.md#buyerexpandedsubscriptionplansummarylineitemsitembundletax) | A line item's tax category and whether it is taxable. |
| `type` | Required | string | Values: `"bundle"`. |
| `unit_price_money` | Optional | [BuyerExpandedSubscriptionPlanSummaryLineItemsItemBundleUnitPriceMoney](../models/BuyerExpandedSubscriptionPlanSummaryLineItemsItemBundleUnitPriceMoney.md#buyerexpandedsubscriptionplansummarylineitemsitembundleunitpricemoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `variant_id` | Optional | string |  |

