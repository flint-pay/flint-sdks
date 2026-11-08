[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPlanSwapVariant

A variant a subscriber can swap to on a plan line, with its name, options, and price.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `image` | Optional | [Image](../models/Image.md#image) | An image with its URL, size, and alt text. |
| `name` | Required | string |  |
| `product_id` | Required | string | Identifier of the product the offered swap variant belongs to. pattern: `^prod_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `selected_options` | Required | Array of [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption) |  |
| `sku` | Optional | string |  |
| `unit_price_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | `unit_price_money`: [declared alternatives](../models/SubscriptionPlanSwapVariant.md#subscriptionplanswapvariantunit_price_money). |
| `variant_id` | Required | string | pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

### SubscriptionPlanSwapVariant.unit_price_money

Field definitions: [shared fields](PromotionRuleValue.md#promotionrulevalue).

### SubscriptionPlanSwapVariant.unit_price_money variant 1

anyOf MoneyValue: Monetary amount represented as integer minor units plus an ISO 4217 currency code..

- Required: `amount`, `currency`.

### SubscriptionPlanSwapVariant.unit_price_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null.  

