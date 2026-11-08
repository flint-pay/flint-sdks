[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkLineItemPatchInputVariantInput

The `variant` variant of `PaymentLinkLineItemPatchInput`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allow_quantity_adjustment` | Optional | boolean | Whether the buyer can change the quantity in checkout. |
| `allow_unit_price_adjustment` | Optional | boolean | Whether the buyer sets the unit price. Only `custom_variable` lines allow it. |
| `bundle_id` | Optional | string | ID of the catalog bundle a `bundle` line sells. minLength: `1`. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. |
| `default_variant_id` | Optional | string or null | Variant selected when the page opens and used at resolve when the buyer omits a selection. Must be in variant_ids. Omit it to require a buyer selection. Send null to clear it. minLength: `1`. pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |
| `description` | Optional | string | Description of an ad hoc line item. minLength: `1`. maxLength: `2048`. |
| `key` | Optional | string | Keys the resolve override maps. Stable line item key used in checkout overrides. Must not have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when omitted, skipping numbers already used by explicit keys; retained for an existing line item when omitted on update. minLength: `1`. maxLength: `100`. |
| `max_quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `max_unit_price_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `min_quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `min_unit_price_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `name` | Optional | string | Name of an ad hoc line item. Catalog lines take the catalog name. minLength: `1`. maxLength: `255`. |
| `payment_link_line_item_id` | Optional | string | Stable ID of an existing line item. Omit it to create a new line item. minLength: `1`. Example: `"plli_01KEZF7C004V7GVCCNMYYCBAJS"`. |
| `quantity` | Optional | integer | Whole-number default quantity; fractional quantities are not supported. Omission uses 1. Must be at least 1 for standard links; event tiers also accept 0. Format: `int32`. Default: `1`. |
| `suggested_unit_price_money_options` | Optional | Array of [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Unit prices offered as one-tap choices when the buyer sets the price. |
| `tax` | Optional | [OrderLineItemTaxRequestInput](../models/OrderLineItemTaxRequestInput.md#orderlineitemtaxrequestinput) | Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax category and whether it is taxable. |
| `type` | Required | string | How the line item is defined. Values: `"variant"`. |
| `unit_price_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Price of one unit of a `custom_fixed` line item. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `variant_id` | Conditional | string | ID of the catalog variant a `variant` line sells. minLength: `1`. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |
| `variant_ids` | Conditional | Array of string | Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active, sellable variants of one product in one currency. Available only on standard payment links. Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: `1`. maxItems: `100`. uniqueItems: `true`. Items: minLength: `1`. pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

### PaymentLinkLineItemPatchInputVariantInput variant 1: `type` = `"variant"`

anyOf variant 1.

- Condition: not (at least one(present(`bundle_id`); present(`name`); present(`unit_price_money`); present(`description`); present(`tax`); present(`allow_unit_price_adjustment`); present(`min_unit_price_money`); present(`max_unit_price_money`); present(`suggested_unit_price_money_options`); present(`variant_id`, `variant_ids`))).
- Required: `variant_id`.
- Optional: `variant_ids`.

### PaymentLinkLineItemPatchInputVariantInput variant 2: `type` = `"variant"`

anyOf variant 2.

- Condition: not (at least one(present(`bundle_id`); present(`name`); present(`unit_price_money`); present(`description`); present(`tax`); present(`allow_unit_price_adjustment`); present(`min_unit_price_money`); present(`max_unit_price_money`); present(`suggested_unit_price_money_options`); present(`variant_id`, `variant_ids`))).
- Required: `variant_ids`.
- Optional: `variant_id`.

