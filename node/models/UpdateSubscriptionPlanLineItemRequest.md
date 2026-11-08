[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateSubscriptionPlanLineItemRequest

A line item to keep or add when updating a subscription plan. Include `subscription_plan_line_item_id` to keep an existing one.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allow_quantity_adjustment` | Optional | boolean | Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan may allow adjustment. Default: `false`. |
| `bundle_id` | Conditional | string | minLength: `1`. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. |
| `description` | Optional | string | minLength: `1`. |
| `max_quantity` | Optional | integer | Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to 9999. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. Default: `9999`. |
| `min_quantity` | Optional | integer | Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. Default: `1`. |
| `modifiers` | Optional | Array of [OrderLineItemModifierRequest](../models/OrderLineItemModifierRequest.md#orderlineitemmodifierrequest) | Items: A modifier selection you supply on a line item: a catalog modifier by ID or a text modifier, with a quantity. `modifiers[]`: [declared alternatives](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmodifiers). |
| `name` | Conditional | string | minLength: `1`. |
| `quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Omission uses 1. Format: `int32`. minimum: `1`. maximum: `9999`. Default: `1`. |
| `subscription_plan_line_item_id` | Optional | string | ID of an existing item on this plan to retain. Omit for a new item. Duplicate IDs and IDs from other plans are rejected. minLength: `1`. Example: `"spli_01KEZF7C00H9FGC2KBRF82H87N"`. |
| `swap_variant_ids` | Optional | Array of string | maxItems: `25`. uniqueItems: `true`. Items: minLength: `1`. pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |
| `tax` | Optional | [OrderLineItemTax](../models/OrderLineItemTax.md#orderlineitemtax) | A line item's tax category and whether it is taxable. `tax`: [field definitions](../models/SubscriptionPlanLineItemInputBundle.md#subscriptionplanlineiteminputbundletax). |
| `type` | Required | string | Values: `"variant"`, `"bundle"`, `"custom"`. |
| `unit_price_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `unit_price_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `variant_id` | Conditional | string | minLength: `1`. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

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

### UpdateSubscriptionPlanLineItemRequest.tax

Field definitions: [SubscriptionPlanLineItemInputBundle.tax](../models/SubscriptionPlanLineItemInputBundle.md#subscriptionplanlineiteminputbundletax).

### UpdateSubscriptionPlanLineItemRequest.unit_price_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

