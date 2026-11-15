[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerExpandedSubscriptionPlanSummaryLineItemsItemVariant

A line item on a subscription plan.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allow_quantity_adjustment` | Optional | boolean | Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan may allow adjustment. Default: `false`. |
| `bundle_id` | Optional | string | ID of the catalog bundle the line sells. Present on a bundle line. |
| `categories` | Optional | Array of ([BuyerExpandedSubscriptionPlanSummaryLineItemsItemVariantCategoriesItem](../models/BuyerExpandedSubscriptionPlanSummaryLineItemsItemVariantCategoriesItem.md#buyerexpandedsubscriptionplansummarylineitemsitemvariantcategoriesitem) and [CategoryReference](../models/CategoryReference.md#categoryreference)) | Catalog categories of the product or bundle, fixed when the line was added. Omitted on custom lines. |
| `description` | Optional | string | Description of the line. A variant line uses the product description and a bundle line uses the bundle description; Flint copied it when the line was added. A custom line uses the description you sent. Omitted when there is none. |
| `image` | Optional | [BuyerExpandedSubscriptionPlanSummaryLineItemsItemVariantImage](../models/BuyerExpandedSubscriptionPlanSummaryLineItemsItemVariantImage.md#buyerexpandedsubscriptionplansummarylineitemsitemvariantimage) | Primary image of the variant (or its product) or bundle, fixed when the line was added. Omitted on custom lines and when the item has no image. An image with its URL, size, and alt text. |
| `max_quantity` | Optional | integer | Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to 9999. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. Default: `9999`. |
| `min_quantity` | Optional | integer | Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. Default: `1`. |
| `name` | Optional | string | Name of the line. A variant line uses the product name, followed by the variant name when the variant has options, and a bundle line uses the bundle name; Flint copied it when the line was added. A custom line uses the name you sent. |
| `product_id` | Optional | string | ID of the product the line's variant belongs to. Present on a variant line; absent on bundle and custom lines, which have no parent product. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `selected_options` | Optional | Array of ([BuyerExpandedSubscriptionPlanSummaryLineItemsItemVariantSelectedOptionsItem](../models/BuyerExpandedSubscriptionPlanSummaryLineItemsItemVariantSelectedOptionsItem.md#buyerexpandedsubscriptionplansummarylineitemsitemvariantselectedoptionsitem) and [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption)) | Option values that identify the variant, such as size and color, fixed when the line was added. Omitted on bundle and custom lines. |
| `sku` | Optional | string | SKU of the variant or bundle, fixed when the line was added. Omitted on custom lines and when the item has no SKU. |
| `subscription_plan_line_item_id` | Required | string | Unique identifier for this subscription plan line item, prefixed `spli_`. |
| `swap_variant_ids` | Required | Array of string | IDs of the variants a subscriber can swap this line to, in the order you set. Empty when none are set, and always empty on bundle and custom lines. maxItems: `25`. uniqueItems: `true`. Items: pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `swap_variants` | Optional | Array of ([BuyerExpandedSubscriptionPlanSummaryLineItemsItemVariantSwapVariantsItem](../models/BuyerExpandedSubscriptionPlanSummaryLineItemsItemVariantSwapVariantsItem.md#buyerexpandedsubscriptionplansummarylineitemsitemvariantswapvariantsitem) and object) | Current sellable alternatives in swap_variant_ids order, excluding the line's own variant and variants priced in a different currency. Present on variant lines, including an empty array. maxItems: `25`. |
| `tax` | Optional | [BuyerExpandedSubscriptionPlanSummaryLineItemsItemVariantTax](../models/BuyerExpandedSubscriptionPlanSummaryLineItemsItemVariantTax.md#buyerexpandedsubscriptionplansummarylineitemsitemvarianttax) | How tax applies to the line. A variant line takes its taxable setting and tax category from the variant, and a bundle line from its components; Flint copied them when the line was added. A taxable variant or bundle line with no tax category gets your default line item tax category, or `general`. A custom line has the tax you sent. A line item's tax category and whether it is taxable. |
| `type` | Required | string | How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. Values: `"variant"`. |
| `unit_price_money` | Optional | [BuyerExpandedSubscriptionPlanSummaryLineItemsItemVariantUnitPriceMoney](../models/BuyerExpandedSubscriptionPlanSummaryLineItemsItemVariantUnitPriceMoney.md#buyerexpandedsubscriptionplansummarylineitemsitemvariantunitpricemoney) | Price of one unit in the plan's currency, before modifiers, discounts, and tax. A variant or bundle line keeps the catalog price from when the line was added. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `variant_id` | Required | string | ID of the catalog variant the line sells. Present on a variant line. |

