[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ExpandedSubscriptionPlanSummaryLineItemsItemCustomSwapVariantsItem

A variant a subscriber can swap to on a plan line, with its name, options, and price.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `image` | Optional | [ExpandedSubscriptionPlanSummaryLineItemsItemCustomSwapVariantsItemImage](../models/ExpandedSubscriptionPlanSummaryLineItemsItemCustomSwapVariantsItemImage.md#expandedsubscriptionplansummarylineitemsitemcustomswapvariantsitemimage) | An image with its `url`, `width`, and `height`, and optional `alt` text. |
| `name` | Required | string |  |
| `selected_options` | Required | Array of ([ExpandedSubscriptionPlanSummaryLineItemsItemCustomSwapVariantsItemSelectedOptionsItem](../models/ExpandedSubscriptionPlanSummaryLineItemsItemCustomSwapVariantsItemSelectedOptionsItem.md#expandedsubscriptionplansummarylineitemsitemcustomswapvariantsitemselectedoptionsitem) and [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption)) |  |
| `sku` | Optional | string |  |
| `unit_price_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null |  |
| `variant_id` | Required | string | pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. |

