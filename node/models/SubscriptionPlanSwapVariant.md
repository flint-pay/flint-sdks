[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPlanSwapVariant

A variant a subscriber can swap to on a plan line, with its name, options, and price.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `image` | Optional | [Image](../models/Image.md#image) | An image with its `url`, `width`, and `height`, and optional `alt` text. |
| `name` | Required | string |  |
| `selected_options` | Required | Array of [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption) |  |
| `sku` | Optional | string |  |
| `unit_price_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | `unit_price_money`: [declared alternatives](../models/GiftCardLoad.md#giftcardloadconsideration_money). |
| `variant_id` | Required | string | pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. |

### SubscriptionPlanSwapVariant.unit_price_money

Declared alternatives: [GiftCardLoad.consideration_money](../models/GiftCardLoad.md#giftcardloadconsideration_money).

