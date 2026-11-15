[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPlanSwapVariant

A variant a subscriber can swap to on a plan line, with its name, options, and price.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `image` | Optional | [Image](../models/Image.md#image) | Primary image of the variant or its product. Omitted when there is none. An image with its URL, size, and alt text. |
| `name` | Required | string | Name of the variant, as the catalog shows it now: the product name, with the variant name when the variant has options. |
| `product_id` | Required | string | Identifier of the product the offered swap variant belongs to. pattern: `^prod_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `selected_options` | Required | Array of [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption) | Option values that identify the variant, such as size and color. |
| `sku` | Optional | string | SKU of the variant. Omitted when it has none. |
| `unit_price_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Current price of one unit of the variant, in the plan's currency. Flint leaves out a variant that has no price or is priced in another currency. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `unit_price_money`: [field definitions](../models/SubscriptionPlanSwapVariant.md#subscriptionplanswapvariantunit_price_money). |
| `variant_id` | Required | string | ID of the variant a subscriber can swap to. pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

### SubscriptionPlanSwapVariant.unit_price_money

Current price of one unit of the variant, in the plan's currency. Flint leaves out a variant that has no price or is priced in another currency. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

