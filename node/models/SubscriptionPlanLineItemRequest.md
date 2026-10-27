[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPlanLineItemRequest

A line item to put on a new subscription plan, from a variant, a bundle, or a custom name and price.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Conditional | string | minLength: `1`. |
| `description` | Optional | string | minLength: `1`. |
| `modifiers` | Optional | Array of [OrderLineItemModifierRequest](../models/OrderLineItemModifierRequest.md#orderlineitemmodifierrequest) | Items: A modifier selection you supply on a line item: a catalog modifier by ID or a text modifier, with a quantity. `modifiers[]`: [declared alternatives](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmodifiers). |
| `name` | Conditional | string | minLength: `1`. |
| `quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. Default: `1`. |
| `swap_variant_ids` | Optional | Array of string | maxItems: `25`. uniqueItems: `true`. Items: minLength: `1`. pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `tax` | Optional | [OrderLineItemTax](../models/OrderLineItemTax.md#orderlineitemtax) | A line item's tax category and whether it is taxable. |
| `unit_price_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `unit_price_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `variant_id` | Conditional | string | minLength: `1`. |

### SubscriptionPlanLineItemRequest variant 1

oneOf variant 1.

- Condition: not (at least one(present(`bundle_id`); present(`name`); present(`unit_price_money`); present(`description`); present(`tax`))).
- Required: `variant_id`.
- Optional: `bundle_id`, `name`, `unit_price_money`.

### SubscriptionPlanLineItemRequest variant 2

oneOf variant 2.

- Condition: not (at least one(present(`variant_id`); present(`name`); present(`unit_price_money`); present(`description`); present(`tax`))).
- Required: `bundle_id`.
- Optional: `name`, `unit_price_money`, `variant_id`.

### SubscriptionPlanLineItemRequest variant 3

oneOf variant 3.

- Condition: not (at least one(present(`variant_id`); present(`bundle_id`))).
- Required: `name`, `unit_price_money`.
- Optional: `bundle_id`, `variant_id`.

### SubscriptionPlanLineItemRequest.modifiers[]

Declared alternatives: [AddLineItemsRequest.line_items[].modifiers[]](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmodifiers).

### SubscriptionPlanLineItemRequest.unit_price_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

