[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPlanSwapVariantInput

A variant a subscriber can swap to on a plan line, with its name, options, and price.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `image` | Optional | [ImageInput](../models/ImageInput.md#imageinput) | An image with its URL, size, and alt text. |
| `name` | Required | string |  |
| `product_id` | Required | string | Identifier of the product the offered swap variant belongs to. pattern: `^prod_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `selected_options` | Required | Array of [SelectedProductOptionInput](../models/SelectedProductOptionInput.md#selectedproductoptioninput) |  |
| `sku` | Optional | string |  |
| `unit_price_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) or null |  |
| `variant_id` | Required | string | pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

