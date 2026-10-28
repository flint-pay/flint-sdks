[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerExpandedSubscriptionPlanSummaryLineItemsItemVariant

A line item of a subscription plan as a buyer sees it: the product, bundle, or variant, quantity, unit price, and swap variants.

The `variant` variant of `BuyerSubscriptionPlanLineItem`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Optional | string |  |
| `categories` | Optional | Array of ([BuyerExpandedSubscriptionPlanSummaryLineItemsItemVariantCategoriesItem](../models/BuyerExpandedSubscriptionPlanSummaryLineItemsItemVariantCategoriesItem.md#buyerexpandedsubscriptionplansummarylineitemsitemvariantcategoriesitem) and [CategoryReference](../models/CategoryReference.md#categoryreference)) |  |
| `description` | Optional | string |  |
| `image` | Optional | [BuyerExpandedSubscriptionPlanSummaryLineItemsItemVariantImage](../models/BuyerExpandedSubscriptionPlanSummaryLineItemsItemVariantImage.md#buyerexpandedsubscriptionplansummarylineitemsitemvariantimage) | An image with its `url`, `width`, and `height`, and optional `alt` text. |
| `name` | Optional | string |  |
| `product_id` | Optional | string |  |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `selected_options` | Optional | Array of ([BuyerExpandedSubscriptionPlanSummaryLineItemsItemVariantSelectedOptionsItem](../models/BuyerExpandedSubscriptionPlanSummaryLineItemsItemVariantSelectedOptionsItem.md#buyerexpandedsubscriptionplansummarylineitemsitemvariantselectedoptionsitem) and [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption)) |  |
| `sku` | Optional | string |  |
| `subscription_plan_line_item_id` | Required | string |  |
| `swap_variant_ids` | Required | Array of string | maxItems: `25`. uniqueItems: `true`. Items: pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `swap_variants` | Optional | Array of ([BuyerExpandedSubscriptionPlanSummaryLineItemsItemVariantSwapVariantsItem](../models/BuyerExpandedSubscriptionPlanSummaryLineItemsItemVariantSwapVariantsItem.md#buyerexpandedsubscriptionplansummarylineitemsitemvariantswapvariantsitem) and object) | Current sellable alternatives in swap_variant_ids order, excluding the line's own variant and variants priced in a different currency. Present on variant lines, including an empty array. maxItems: `25`. |
| `tax` | Optional | [BuyerExpandedSubscriptionPlanSummaryLineItemsItemVariantTax](../models/BuyerExpandedSubscriptionPlanSummaryLineItemsItemVariantTax.md#buyerexpandedsubscriptionplansummarylineitemsitemvarianttax) | A line item's tax category and whether it is taxable. |
| `type` | Required | string | Values: `"variant"`. |
| `unit_price_money` | Optional | [BuyerExpandedSubscriptionPlanSummaryLineItemsItemVariantUnitPriceMoney](../models/BuyerExpandedSubscriptionPlanSummaryLineItemsItemVariantUnitPriceMoney.md#buyerexpandedsubscriptionplansummarylineitemsitemvariantunitpricemoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `variant_id` | Required | string |  |

