[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateSubscriptionPlanLineItemRequest

A line item to keep or add when updating a subscription plan. Include `subscription_plan_line_item_id` to keep an existing one.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Conditional | string | minLength: `1`. |
| `description` | Optional | string | minLength: `1`. |
| `modifiers` | Optional | Array of [OrderLineItemModifierRequest](../models/OrderLineItemModifierRequest.md#orderlineitemmodifierrequest) | Items: A modifier selection you supply on a line item: a catalog modifier by ID or a text modifier, with a quantity. `modifiers[]`: [declared alternatives](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmodifiers). |
| `name` | Conditional | string | minLength: `1`. |
| `quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Omission uses 1. Format: `int32`. minimum: `1`. maximum: `9999`. Default: `1`. |
| `subscription_plan_line_item_id` | Optional | string | ID of an existing item on this plan to retain. Omit for a new item. Duplicate IDs and IDs from other plans are rejected. minLength: `1`. |
| `swap_variant_ids` | Optional | Array of string | maxItems: `25`. uniqueItems: `true`. Items: minLength: `1`. pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `tax` | Optional | [OrderLineItemTax](../models/OrderLineItemTax.md#orderlineitemtax) | A line item's tax category and whether it is taxable. |
| `type` | Required | string | Values: `"variant"`, `"bundle"`, `"custom"`. |
| `unit_price_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `unit_price_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `variant_id` | Conditional | string | minLength: `1`. |

### UpdateSubscriptionPlanLineItemRequest variant 1: `type` = `"variant"`

oneOf with type: "variant": The `variant` variant of `UpdateSubscriptionPlanLineItemInput`..

- Condition: not (at least one(present(`bundle_id`); present(`name`); present(`unit_price_money`); present(`description`); present(`tax`))).
- Required: `variant_id`.
- Optional: `bundle_id`, `name`, `unit_price_money`.
- Constraints for `type`: Values: `"variant"`.

### UpdateSubscriptionPlanLineItemRequest variant 2: `type` = `"bundle"`

oneOf with type: "bundle": The `bundle` variant of `UpdateSubscriptionPlanLineItemInput`..

- Condition: not (at least one(present(`variant_id`); present(`name`); present(`unit_price_money`); present(`description`); present(`tax`))).
- Required: `bundle_id`.
- Optional: `name`, `unit_price_money`, `variant_id`.
- Constraints for `type`: Values: `"bundle"`.

### UpdateSubscriptionPlanLineItemRequest variant 3: `type` = `"custom"`

oneOf with type: "custom": The `custom` variant of `UpdateSubscriptionPlanLineItemInput`..

- Condition: not (at least one(present(`variant_id`); present(`bundle_id`))).
- Required: `name`, `unit_price_money`.
- Optional: `bundle_id`, `variant_id`.
- Constraints for `type`: Values: `"custom"`.

### UpdateSubscriptionPlanLineItemRequest.modifiers[]

Declared alternatives: [AddLineItemsRequest.line_items[].modifiers[]](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmodifiers).

### UpdateSubscriptionPlanLineItemRequest.unit_price_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

