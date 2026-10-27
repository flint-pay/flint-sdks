[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPlanLineItemRequestInput

A line item to put on a new subscription plan, from a variant, a bundle, or a custom name and price.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Conditional | string | minLength: `1`. |
| `description` | Optional | string | minLength: `1`. |
| `modifiers` | Optional | Array of [OrderLineItemModifierRequestInput](../models/OrderLineItemModifierRequestInput.md#orderlineitemmodifierrequestinput) | Items: A modifier selection you supply on a line item: a catalog modifier by ID or a text modifier, with a quantity. `modifiers[]`: [declared alternatives](../models/CreateOrderLineItemInput.md#createorderlineiteminputmodifiers). |
| `name` | Conditional | string | minLength: `1`. |
| `quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. Default: `1`. |
| `swap_variant_ids` | Optional | Array of string | maxItems: `25`. uniqueItems: `true`. Items: minLength: `1`. pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `tax` | Optional | [OrderLineItemTaxInput](../models/OrderLineItemTaxInput.md#orderlineitemtaxinput) | A line item's tax category and whether it is taxable. |
| `unit_price_money` | Conditional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `variant_id` | Conditional | string | minLength: `1`. |

### SubscriptionPlanLineItemRequestInput variant 1

oneOf variant 1.

- Condition: not (at least one(present(`bundle_id`); present(`name`); present(`unit_price_money`); present(`description`); present(`tax`))).
- Required: `variant_id`.
- Optional: `bundle_id`, `name`, `unit_price_money`.

### SubscriptionPlanLineItemRequestInput variant 2

oneOf variant 2.

- Condition: not (at least one(present(`variant_id`); present(`name`); present(`unit_price_money`); present(`description`); present(`tax`))).
- Required: `bundle_id`.
- Optional: `name`, `unit_price_money`, `variant_id`.

### SubscriptionPlanLineItemRequestInput variant 3

oneOf variant 3.

- Condition: not (at least one(present(`variant_id`); present(`bundle_id`))).
- Required: `name`, `unit_price_money`.
- Optional: `bundle_id`, `variant_id`.

### SubscriptionPlanLineItemRequestInput.modifiers[]

Declared alternatives: [CreateOrderLineItemInput.modifiers[]](../models/CreateOrderLineItemInput.md#createorderlineiteminputmodifiers).

