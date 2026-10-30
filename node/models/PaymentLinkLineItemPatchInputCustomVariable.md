[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkLineItemPatchInputCustomVariable

The `custom_variable` variant of `PaymentLinkLineItemPatchInput`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allow_quantity_adjustment` | Optional | boolean |  |
| `allow_unit_price_adjustment` | Required | boolean | Values: `true`. |
| `bundle_id` | Optional | string | minLength: `1`. |
| `default_variant_id` | Optional | string or null | Variant selected when the page opens and used at resolve when the buyer omits a selection. Must be in variant_ids. Omit it to require a buyer selection. Send null to clear it. minLength: `1`. pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `description` | Optional | string | minLength: `1`. maxLength: `2048`. |
| `key` | Optional | string | Keys the resolve override maps. Stable line item key used in checkout overrides. Must not have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when omitted, skipping numbers already used by explicit keys; retained for an existing line item when omitted on update. minLength: `1`. maxLength: `100`. |
| `max_quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `max_unit_price_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `max_unit_price_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `min_quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `min_unit_price_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `min_unit_price_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `name` | Required | string | minLength: `1`. maxLength: `255`. |
| `payment_link_line_item_id` | Optional | string | Stable ID of an existing line item. Omit it to create a new line item. minLength: `1`. |
| `quantity` | Optional | integer | Whole-number default quantity; fractional quantities are not supported. Omission uses 1. Must be at least 1 for standard links; event tiers also accept 0. Format: `int32`. Default: `1`. |
| `suggested_unit_price_money_options` | Optional | Array of [MoneyValue](../models/MoneyValue.md#moneyvalue) | `suggested_unit_price_money_options[]`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `tax` | Optional | [OrderLineItemTax](../models/OrderLineItemTax.md#orderlineitemtax) | A line item's tax category and whether it is taxable. |
| `type` | Required | string | Values: `"custom_variable"`. |
| `unit_price_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `unit_price_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `variant_id` | Optional | string | minLength: `1`. |
| `variant_ids` | Optional | Array of string | Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active, sellable variants of one product in one currency. Available only on standard payment links. Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: `1`. maxItems: `100`. uniqueItems: `true`. Items: minLength: `1`. pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. |

### PaymentLinkLineItemPatchInputCustomVariable.max_unit_price_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### PaymentLinkLineItemPatchInputCustomVariable.min_unit_price_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### PaymentLinkLineItemPatchInputCustomVariable.suggested_unit_price_money_options[]

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### PaymentLinkLineItemPatchInputCustomVariable.unit_price_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

