[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerExpandedSubscriptionPlanSummaryLineItemsItemCustom

A line item of a subscription plan as a buyer sees it: the product, bundle, or variant, quantity, unit price, and swap variants.

The `custom` variant of `BuyerSubscriptionPlanLineItem`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Optional | string |  |
| `categories` | Optional | Array of ([BuyerExpandedSubscriptionPlanSummaryLineItemsItemCustomCategoriesItem](../models/BuyerExpandedSubscriptionPlanSummaryLineItemsItemCustomCategoriesItem.md#buyerexpandedsubscriptionplansummarylineitemsitemcustomcategoriesitem) and [CategoryReference](../models/CategoryReference.md#categoryreference)) |  |
| `description` | Optional | string |  |
| `image` | Optional | [BuyerExpandedSubscriptionPlanSummaryLineItemsItemCustomImage](../models/BuyerExpandedSubscriptionPlanSummaryLineItemsItemCustomImage.md#buyerexpandedsubscriptionplansummarylineitemsitemcustomimage) | An image with its `url`, `width`, and `height`, and optional `alt` text. |
| `name` | Required | string |  |
| `product_id` | Optional | string |  |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `selected_options` | Optional | Array of ([BuyerExpandedSubscriptionPlanSummaryLineItemsItemCustomSelectedOptionsItem](../models/BuyerExpandedSubscriptionPlanSummaryLineItemsItemCustomSelectedOptionsItem.md#buyerexpandedsubscriptionplansummarylineitemsitemcustomselectedoptionsitem) and [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption)) |  |
| `sku` | Optional | string |  |
| `subscription_plan_line_item_id` | Required | string |  |
| `swap_variant_ids` | Required | Array of string | maxItems: `25`. uniqueItems: `true`. Items: pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `swap_variants` | Optional | Array of ([BuyerExpandedSubscriptionPlanSummaryLineItemsItemCustomSwapVariantsItem](../models/BuyerExpandedSubscriptionPlanSummaryLineItemsItemCustomSwapVariantsItem.md#buyerexpandedsubscriptionplansummarylineitemsitemcustomswapvariantsitem) and object) | Current sellable alternatives in swap_variant_ids order, excluding the line's own variant and variants priced in a different currency. Present on variant lines, including an empty array. maxItems: `25`. |
| `tax` | Optional | [BuyerExpandedSubscriptionPlanSummaryLineItemsItemCustomTax](../models/BuyerExpandedSubscriptionPlanSummaryLineItemsItemCustomTax.md#buyerexpandedsubscriptionplansummarylineitemsitemcustomtax) | A line item's tax category and whether it is taxable. |
| `type` | Required | string | Values: `"custom"`. |
| `unit_price_money` | Required | [BuyerExpandedSubscriptionPlanSummaryLineItemsItemCustomUnitPriceMoney](../models/BuyerExpandedSubscriptionPlanSummaryLineItemsItemCustomUnitPriceMoney.md#buyerexpandedsubscriptionplansummarylineitemsitemcustomunitpricemoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `variant_id` | Optional | string |  |

