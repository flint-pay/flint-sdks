[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPlanLineItemsItemBundleSwapVariantsItem

A variant a subscriber can swap to on a plan line, with its name, options, and price.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `image` | Optional | [SubscriptionPlanLineItemsItemBundleSwapVariantsItemImage](../models/SubscriptionPlanLineItemsItemBundleSwapVariantsItemImage.md#subscriptionplanlineitemsitembundleswapvariantsitemimage) | An image with its `url`, `width`, and `height`, and optional `alt` text. |
| `name` | Required | string |  |
| `selected_options` | Required | Array of ([SubscriptionPlanLineItemsItemBundleSwapVariantsItemSelectedOptionsItem](../models/SubscriptionPlanLineItemsItemBundleSwapVariantsItemSelectedOptionsItem.md#subscriptionplanlineitemsitembundleswapvariantsitemselectedoptionsitem) and [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption)) |  |
| `sku` | Optional | string |  |
| `unit_price_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null |  |
| `variant_id` | Required | string | pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. |

