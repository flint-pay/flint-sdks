[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkLineItemRequestInput

A line item you add to a payment link when creating it, from a catalog variant, a bundle, or an ad hoc name and price.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allow_quantity_adjustment` | Optional | boolean | Whether the buyer can change the quantity in checkout. |
| `allow_unit_price_adjustment` | Conditional | boolean | Whether the buyer sets the unit price. Only `custom_variable` lines allow it. |
| `bundle_id` | Conditional | string | ID of the catalog bundle a `bundle` line sells. minLength: `1`. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. |
| `default_variant_id` | Optional | string | Variant selected when the page opens and used at resolve when the buyer omits a selection. Must be in variant_ids. Omit it to require a buyer selection. minLength: `1`. pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |
| `description` | Optional | string | Description of an ad hoc line item. minLength: `1`. maxLength: `2048`. |
| `key` | Optional | string | Keys the resolve override maps. Stable line item key used in checkout overrides. Must not have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when omitted, skipping numbers already used by explicit keys; retained for an existing line item when omitted on update. minLength: `1`. maxLength: `100`. |
| `max_quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `max_total_quantity` | Optional | integer | Optional whole-number admission capacity across all orders for an event tier; fractional quantities are not supported. Must be at least 1 and cannot exceed event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it in a line_items replacement removes an existing cap. Format: `int32`. minimum: `1`. |
| `max_unit_price_money` | Optional | Varies by condition | Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `max_unit_price_money`: [field definitions](../models/PaymentLinkLineItemInputCustomVariableInput.md#paymentlinklineiteminputcustomvariableinputmax_unit_price_money). |
| `min_quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `min_unit_price_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `name` | Conditional | string | Name of an ad hoc line item. Catalog lines take the catalog name. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported. minLength: `1`. maxLength: `255`. |
| `product_type` | Optional | string | Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does not change tax, delivery, or inventory. On an order line PATCH, omission preserves the classification. Catalog lines use their product's type and reject this input. Values: `"physical"`, `"service"`, `"fee"`, `"digital"`. |
| `quantity` | Optional | integer | Whole-number default quantity; fractional quantities are not supported. Omission uses 1. Must be at least 1 for standard links; event tiers also accept 0. Format: `int32`. Default: `1`. |
| `suggested_unit_price_money_options` | Optional | Array of [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Unit prices offered as one-tap choices when the buyer sets the price. Use the same currency for the price, bounds, and suggested prices. |
| `tax` | Optional | [OrderLineItemTaxRequestInput](../models/OrderLineItemTaxRequestInput.md#orderlineitemtaxrequestinput) | Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax category and whether it is taxable. |
| `type` | Required | string | How the line item is defined. Values: `"variant"`, `"bundle"`, `"custom_fixed"`, `"custom_variable"`. |
| `unit_price_money` | Conditional | object | Price of one unit of a `custom_fixed` line item. `unit_price_money`: [field definitions](../models/PaymentLinkLineItemInputBundleInput.md#paymentlinklineiteminputbundleinputunit_price_money). |
| `variant_id` | Conditional | string | ID of the catalog variant a `variant` line sells. minLength: `1`. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |
| `variant_ids` | Conditional | Array of string | Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active, sellable variants of one product in one currency. Available only on standard payment links. Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: `1`. maxItems: `100`. uniqueItems: `true`. Items: minLength: `1`. pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

### PaymentLinkLineItemRequestInput variant 1: `type` = `"variant"`

oneOf with type: "variant": The `variant` variant of `PaymentLinkLineItemInput`.; anyOf variant 1.

- Condition: not (at least one(present(`bundle_id`); present(`name`); present(`unit_price_money`); present(`description`); present(`tax`); present(`allow_unit_price_adjustment`); present(`min_unit_price_money`); present(`max_unit_price_money`); present(`suggested_unit_price_money_options`); present(`product_type`); present(`variant_id`, `variant_ids`))).
- Required: `variant_id`.
- Optional: `allow_unit_price_adjustment`, `bundle_id`, `name`, `unit_price_money`, `variant_ids`.
- Constraints for `max_unit_price_money`: [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput).
- Constraints for `type`: Values: `"variant"`.

### PaymentLinkLineItemRequestInput variant 2: `type` = `"variant"`

oneOf with type: "variant": The `variant` variant of `PaymentLinkLineItemInput`.; anyOf variant 2.

- Condition: not (at least one(present(`bundle_id`); present(`name`); present(`unit_price_money`); present(`description`); present(`tax`); present(`allow_unit_price_adjustment`); present(`min_unit_price_money`); present(`max_unit_price_money`); present(`suggested_unit_price_money_options`); present(`product_type`); present(`variant_id`, `variant_ids`))).
- Required: `variant_ids`.
- Optional: `allow_unit_price_adjustment`, `bundle_id`, `name`, `unit_price_money`, `variant_id`.
- Constraints for `max_unit_price_money`: [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput).
- Constraints for `type`: Values: `"variant"`.

### PaymentLinkLineItemRequestInput variant 3: `type` = `"bundle"`

oneOf with type: "bundle": The `bundle` variant of `PaymentLinkLineItemInput`..

- Condition: not (at least one(present(`variant_id`); present(`variant_ids`); present(`default_variant_id`); present(`name`); present(`unit_price_money`); present(`description`); present(`tax`); present(`allow_unit_price_adjustment`); present(`min_unit_price_money`); present(`max_unit_price_money`); present(`suggested_unit_price_money_options`); present(`product_type`))).
- Required: `bundle_id`.
- Optional: `allow_unit_price_adjustment`, `name`, `unit_price_money`, `variant_id`, `variant_ids`.
- Constraints for `max_unit_price_money`: [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput).
- Constraints for `type`: Values: `"bundle"`.

### PaymentLinkLineItemRequestInput variant 4: `allow_unit_price_adjustment` = `false`, `type` = `"custom_fixed"`

oneOf with type: "custom_fixed": The `custom_fixed` variant of `PaymentLinkLineItemInput`..

- Condition: not (at least one(present(`variant_id`); present(`variant_ids`); present(`default_variant_id`); present(`bundle_id`))).
- Required: `name`, `unit_price_money`.
- Optional: `allow_unit_price_adjustment`, `bundle_id`, `variant_id`, `variant_ids`.
- Constraints for `allow_unit_price_adjustment`: Values: `false`.
- Constraints for `max_unit_price_money`: [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput).
- Constraints for `type`: Values: `"custom_fixed"`.

### PaymentLinkLineItemRequestInput variant 5: `allow_unit_price_adjustment` = `true`, `type` = `"custom_variable"`

oneOf with type: "custom_variable": The `custom_variable` variant of `PaymentLinkLineItemInput`..

- Condition: not (at least one(present(`variant_id`); present(`variant_ids`); present(`default_variant_id`); present(`bundle_id`))).
- Required: `allow_unit_price_adjustment`, `name`.
- Optional: `bundle_id`, `unit_price_money`, `variant_id`, `variant_ids`.
- Constraints for `allow_unit_price_adjustment`: Values: `true`.
- Constraints for `max_unit_price_money`: [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) and object.
- Constraints for `type`: Values: `"custom_variable"`.

### PaymentLinkLineItemRequestInput.unit_price_money

Field definitions: [PaymentLinkLineItemInputBundleInput.unit_price_money](../models/PaymentLinkLineItemInputBundleInput.md#paymentlinklineiteminputbundleinputunit_price_money).

### PaymentLinkLineItemRequestInput variant 5.max_unit_price_money

Field definitions: [PaymentLinkLineItemInputCustomVariableInput.max_unit_price_money](../models/PaymentLinkLineItemInputCustomVariableInput.md#paymentlinklineiteminputcustomvariableinputmax_unit_price_money).

