[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPlanSwapVariantInput

A variant a subscriber can swap to on a plan line, with its name, options, and price.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `image` | Optional | [ImageInput](../models/ImageInput.md#imageinput) | An image with its `url`, `width`, and `height`, and optional `alt` text. |
| `name` | Required | string |  |
| `selected_options` | Required | Array of [SelectedProductOptionInput](../models/SelectedProductOptionInput.md#selectedproductoptioninput) |  |
| `sku` | Optional | string |  |
| `unit_price_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) or null |  |
| `variant_id` | Required | string | pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. |

