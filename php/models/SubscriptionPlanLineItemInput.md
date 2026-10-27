[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPlanLineItemInput

A line item on a subscription plan, from a variant or bundle, with its quantity, price, and variants a subscriber can swap to.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_components` | Optional | Array of [BundleComponentInput](../models/BundleComponentInput.md#bundlecomponentinput) |  |
| `bundle_id` | Conditional | string |  |
| `categories` | Optional | Array of [CategoryReferenceInput](../models/CategoryReferenceInput.md#categoryreferenceinput) |  |
| `description` | Optional | string |  |
| `image` | Optional | [ImageInput](../models/ImageInput.md#imageinput) | An image with its `url`, `width`, and `height`, and optional `alt` text. |
| `modifiers` | Optional | Array of [OrderLineItemModifierInput](../models/OrderLineItemModifierInput.md#orderlineitemmodifierinput) |  |
| `name` | Conditional | string |  |
| `product_id` | Optional | string |  |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `selected_options` | Optional | Array of [SelectedProductOptionInput](../models/SelectedProductOptionInput.md#selectedproductoptioninput) |  |
| `sku` | Optional | string |  |
| `subscription_plan_line_item_id` | Required | string |  |
| `swap_variant_ids` | Required | Array of string | maxItems: `25`. uniqueItems: `true`. Items: pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `swap_variants` | Optional | Array of [SubscriptionPlanSwapVariantInput](../models/SubscriptionPlanSwapVariantInput.md#subscriptionplanswapvariantinput) | Current sellable alternatives in swap_variant_ids order, excluding the line's own variant and variants priced in a different currency. Present on variant lines, including an empty array. maxItems: `25`. |
| `tax` | Optional | [OrderLineItemTaxInput](../models/OrderLineItemTaxInput.md#orderlineitemtaxinput) | A line item's tax category and whether it is taxable. |
| `unit_price_money` | Conditional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `variant_id` | Conditional | string |  |

### SubscriptionPlanLineItemInput variant 1

oneOf variant 1.

- Condition: not (at least one(present(`bundle_id`))).
- Required: `variant_id`.
- Optional: `bundle_id`, `name`, `unit_price_money`.

### SubscriptionPlanLineItemInput variant 2

oneOf variant 2.

- Condition: not (at least one(present(`variant_id`))).
- Required: `bundle_id`.
- Optional: `name`, `unit_price_money`, `variant_id`.

### SubscriptionPlanLineItemInput variant 3

oneOf variant 3.

- Condition: not (at least one(present(`variant_id`); present(`bundle_id`))).
- Required: `name`, `unit_price_money`.
- Optional: `bundle_id`, `variant_id`.

