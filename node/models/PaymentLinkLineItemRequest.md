[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkLineItemRequest

A line item you add to a payment link when creating it, from a catalog variant, a bundle, or an ad hoc name and price.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allow_quantity_adjustment` | Optional | boolean |  |
| `allow_unit_price_adjustment` | Conditional | boolean |  |
| `bundle_id` | Conditional | string | minLength: `1`. |
| `default_variant_id` | Optional | string | Variant selected when the page opens and used at resolve when the buyer omits a selection. Must be in variant_ids. Omit it to require a buyer selection. minLength: `1`. pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `description` | Optional | string | minLength: `1`. maxLength: `2048`. |
| `key` | Optional | string | Keys the resolve override maps. Stable line item key used in checkout overrides. Must not have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when omitted, skipping numbers already used by explicit keys; retained for an existing line item when omitted on update. minLength: `1`. maxLength: `100`. |
| `max_quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `max_unit_price_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `max_unit_price_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `min_quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `min_unit_price_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `min_unit_price_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `name` | Conditional | string | minLength: `1`. maxLength: `255`. |
| `quantity` | Optional | integer | Whole-number default quantity; fractional quantities are not supported. Omission uses 1. Must be at least 1 for standard links; event tiers also accept 0. Format: `int32`. Default: `1`. |
| `suggested_unit_price_money_options` | Optional | Array of [MoneyValue](../models/MoneyValue.md#moneyvalue) | `suggested_unit_price_money_options[]`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `tax` | Optional | [OrderLineItemTax](../models/OrderLineItemTax.md#orderlineitemtax) | A line item's tax category and whether it is taxable. |
| `type` | Required | string | Values: `"variant"`, `"bundle"`, `"custom_fixed"`, `"custom_variable"`. |
| `unit_price_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `unit_price_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `variant_id` | Conditional | string | minLength: `1`. |
| `variant_ids` | Conditional | Array of string | Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active, sellable variants of one product in one currency. Available only on standard payment links. Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: `1`. maxItems: `100`. uniqueItems: `true`. Items: minLength: `1`. pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. |

### PaymentLinkLineItemRequest variant 1: `type` = `"variant"`

oneOf with type: "variant": The `variant` variant of `PaymentLinkLineItemInput`.; anyOf variant 1.

- Condition: not (at least one(present(`bundle_id`); present(`name`); present(`unit_price_money`); present(`description`); present(`tax`); present(`allow_unit_price_adjustment`); present(`min_unit_price_money`); present(`max_unit_price_money`); present(`suggested_unit_price_money_options`); present(`variant_id`, `variant_ids`))).
- Required: `variant_id`.
- Optional: `allow_unit_price_adjustment`, `bundle_id`, `name`, `unit_price_money`, `variant_ids`.
- Constraints for `type`: Values: `"variant"`.

### PaymentLinkLineItemRequest variant 2: `type` = `"variant"`

oneOf with type: "variant": The `variant` variant of `PaymentLinkLineItemInput`.; anyOf variant 2.

- Condition: not (at least one(present(`bundle_id`); present(`name`); present(`unit_price_money`); present(`description`); present(`tax`); present(`allow_unit_price_adjustment`); present(`min_unit_price_money`); present(`max_unit_price_money`); present(`suggested_unit_price_money_options`); present(`variant_id`, `variant_ids`))).
- Required: `variant_ids`.
- Optional: `allow_unit_price_adjustment`, `bundle_id`, `name`, `unit_price_money`, `variant_id`.
- Constraints for `type`: Values: `"variant"`.

### PaymentLinkLineItemRequest variant 3: `type` = `"bundle"`

oneOf with type: "bundle": The `bundle` variant of `PaymentLinkLineItemInput`..

- Condition: not (at least one(present(`variant_id`); present(`variant_ids`); present(`default_variant_id`); present(`name`); present(`unit_price_money`); present(`description`); present(`tax`); present(`allow_unit_price_adjustment`); present(`min_unit_price_money`); present(`max_unit_price_money`); present(`suggested_unit_price_money_options`))).
- Required: `bundle_id`.
- Optional: `allow_unit_price_adjustment`, `name`, `unit_price_money`, `variant_id`, `variant_ids`.
- Constraints for `type`: Values: `"bundle"`.

### PaymentLinkLineItemRequest variant 4: `allow_unit_price_adjustment` = `false`, `type` = `"custom_fixed"`

oneOf with type: "custom_fixed": The `custom_fixed` variant of `PaymentLinkLineItemInput`..

- Condition: not (at least one(present(`variant_id`); present(`variant_ids`); present(`default_variant_id`); present(`bundle_id`))).
- Required: `name`, `unit_price_money`.
- Optional: `allow_unit_price_adjustment`, `bundle_id`, `variant_id`, `variant_ids`.
- Constraints for `allow_unit_price_adjustment`: Values: `false`.
- Constraints for `type`: Values: `"custom_fixed"`.

### PaymentLinkLineItemRequest variant 5: `allow_unit_price_adjustment` = `true`, `type` = `"custom_variable"`

oneOf with type: "custom_variable": The `custom_variable` variant of `PaymentLinkLineItemInput`..

- Condition: not (at least one(present(`variant_id`); present(`variant_ids`); present(`default_variant_id`); present(`bundle_id`))).
- Required: `allow_unit_price_adjustment`, `name`.
- Optional: `bundle_id`, `unit_price_money`, `variant_id`, `variant_ids`.
- Constraints for `allow_unit_price_adjustment`: Values: `true`.
- Constraints for `type`: Values: `"custom_variable"`.

### PaymentLinkLineItemRequest.max_unit_price_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### PaymentLinkLineItemRequest.min_unit_price_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### PaymentLinkLineItemRequest.suggested_unit_price_money_options[]

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### PaymentLinkLineItemRequest.unit_price_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

