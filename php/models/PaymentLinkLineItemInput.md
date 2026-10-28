[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkLineItemInput

A line item on a payment link, sold from a catalog variant, a bundle, or an ad hoc name and price, with quantity and price rules.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allow_quantity_adjustment` | Optional | boolean |  |
| `allow_unit_price_adjustment` | Conditional | boolean |  |
| `bundle_id` | Conditional | string |  |
| `default_variant_id` | Optional | string | Variant selected when the page opens and used at resolve when the buyer omits a selection. Must be in variant_ids. Omit it to require a buyer selection. pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `description` | Optional | string |  |
| `is_catalog_item_unavailable` | Required | boolean | True when the referenced variant or bundle cannot be sold, or no listed variant in variant_ids can be sold in the line currency. Always false on ad hoc line items. |
| `key` | Optional | string | Keys the resolve override maps. Stable line item key used in checkout overrides. Must not have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when omitted, skipping numbers already used by explicit keys; retained for an existing line item when omitted on update. |
| `max_quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `max_unit_price_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `min_quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `min_unit_price_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `name` | Conditional | string |  |
| `payment_link_line_item_id` | Required | string |  |
| `product_id` | Optional | string | Parent catalog context only. The product that the variants in variant_ids belong to. Present only on buyer choice lines; refused on input. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `resolved_name` | Optional | string | Current catalog name of the referenced variant or bundle, or the product name for variant_ids lines. A variant reads as the product name, plus the variant name when the variant is a named option combination. This is the catalog value at read time, not a stored snapshot: checkout resolves it again when a buyer opens the link. Absent on ad-hoc line items and when the catalog object no longer exists. |
| `resolved_price_range` | Optional | [ProductPriceRangeInput](../models/ProductPriceRangeInput.md#productpricerangeinput) | Current lowest and highest catalog unit prices among listed variants that can be sold in the line currency. Computed at read time, not stored. Omitted when no listed variant can be sold. The lowest and highest unit prices across a product's variants. |
| `resolved_unit_price_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Current catalog unit price of the referenced variant or bundle. This is the catalog value at read time, not a stored snapshot: checkout resolves the price again when a buyer opens the link, so the amount a buyer pays can differ. Absent on ad-hoc line items, variant_ids lines, and when the catalog object no longer exists. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `suggested_unit_price_money_options` | Optional | Array of [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) |  |
| `tax` | Optional | [OrderLineItemTaxInput](../models/OrderLineItemTaxInput.md#orderlineitemtaxinput) | A line item's tax category and whether it is taxable. |
| `type` | Required | string | Values: `"variant"`, `"bundle"`, `"custom_fixed"`, `"custom_variable"`. |
| `unit_price_money` | Conditional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `variant_id` | Conditional | string |  |
| `variant_ids` | Conditional | Array of string | Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active, sellable variants of one product in one currency. Available only on standard payment links. Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: `1`. maxItems: `100`. uniqueItems: `true`. Items: pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. |

### PaymentLinkLineItemInput variant 1: `type` = `"variant"`

oneOf variant 1: The `variant` variant of `PaymentLinkLineItem`.; anyOf variant 1.

- Condition: not (at least one(present(`bundle_id`); present(`variant_id`, `variant_ids`))).
- Required: `variant_id`.
- Optional: `allow_unit_price_adjustment`, `bundle_id`, `name`, `unit_price_money`, `variant_ids`.
- Constraints for `type`: Values: `"variant"`.

### PaymentLinkLineItemInput variant 2: `type` = `"variant"`

oneOf variant 1: The `variant` variant of `PaymentLinkLineItem`.; anyOf variant 2.

- Condition: not (at least one(present(`bundle_id`); present(`variant_id`, `variant_ids`))).
- Required: `variant_ids`.
- Optional: `allow_unit_price_adjustment`, `bundle_id`, `name`, `unit_price_money`, `variant_id`.
- Constraints for `type`: Values: `"variant"`.

### PaymentLinkLineItemInput variant 3: `type` = `"bundle"`

oneOf variant 2: The `bundle` variant of `PaymentLinkLineItem`..

- Condition: not (at least one(present(`variant_id`); present(`variant_ids`); present(`default_variant_id`))).
- Required: `bundle_id`.
- Optional: `allow_unit_price_adjustment`, `name`, `unit_price_money`, `variant_id`, `variant_ids`.
- Constraints for `type`: Values: `"bundle"`.

### PaymentLinkLineItemInput variant 4: `allow_unit_price_adjustment` = `false`, `type` = `"custom_fixed"`

oneOf variant 3: The `custom_fixed` variant of `PaymentLinkLineItem`..

- Condition: not (at least one(present(`variant_id`); present(`variant_ids`); present(`default_variant_id`); present(`bundle_id`))).
- Required: `name`, `unit_price_money`.
- Optional: `allow_unit_price_adjustment`, `bundle_id`, `variant_id`, `variant_ids`.
- Constraints for `allow_unit_price_adjustment`: Values: `false`.
- Constraints for `type`: Values: `"custom_fixed"`.

### PaymentLinkLineItemInput variant 5: `allow_unit_price_adjustment` = `true`, `type` = `"custom_variable"`

oneOf variant 4: The `custom_variable` variant of `PaymentLinkLineItem`..

- Condition: not (at least one(present(`variant_id`); present(`variant_ids`); present(`default_variant_id`); present(`bundle_id`))).
- Required: `allow_unit_price_adjustment`, `name`.
- Optional: `bundle_id`, `unit_price_money`, `variant_id`, `variant_ids`.
- Constraints for `allow_unit_price_adjustment`: Values: `true`.
- Constraints for `type`: Values: `"custom_variable"`.

