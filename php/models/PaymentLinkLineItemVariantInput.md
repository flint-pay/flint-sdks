[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkLineItemVariantInput

A line item on a payment link.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allow_quantity_adjustment` | Optional | boolean | Whether the buyer can change the quantity in checkout. |
| `allow_unit_price_adjustment` | Optional | boolean | Whether the buyer sets the unit price. Only `custom_variable` lines allow it. |
| `bundle_id` | Optional | string | ID of the catalog bundle a `bundle` line sells. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. |
| `default_variant_id` | Optional | string | Variant selected when the page opens and used at resolve when the buyer omits a selection. Must be in variant_ids. Omit it to require a buyer selection. pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |
| `description` | Optional | string | Description of an ad hoc line item. |
| `is_catalog_item_unavailable` | Required | boolean | True when the referenced variant or bundle cannot be sold, or no listed variant in variant_ids can be sold in the line currency. Always false on ad hoc line items. |
| `key` | Optional | string | Keys the resolve override maps. Stable line item key used in checkout overrides. Must not have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when omitted, skipping numbers already used by explicit keys; retained for an existing line item when omitted on update. |
| `max_quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `max_unit_price_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `min_quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `min_unit_price_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `name` | Optional | string | Name of an ad hoc line item. Catalog lines take the catalog name. |
| `payment_link_line_item_id` | Required | string | Unique identifier for this payment link line item, prefixed `plli_`. Example: `"plli_01KEZF7C004V7GVCCNMYYCBAJS"`. |
| `product_id` | Optional | string | Parent catalog context only. The product that the variants in variant_ids belong to. Present only on buyer choice lines; refused on input. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `resolved_name` | Optional | string | Current catalog name of the referenced variant or bundle, or the product name for variant_ids lines. A variant reads as the product name, plus the variant name when the variant is a named option combination. This is the catalog value at read time, not a stored snapshot: checkout resolves it again when a buyer opens the link. Absent on ad-hoc line items and when the catalog object no longer exists. |
| `resolved_price_range` | Optional | [ProductPriceRangeInput](../models/ProductPriceRangeInput.md#productpricerangeinput) | Current lowest and highest catalog unit prices among listed variants that can be sold in the line currency. Computed at read time, not stored. Omitted when no listed variant can be sold. The lowest and highest unit prices across a product's variants. |
| `resolved_unit_price_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Current catalog unit price of the referenced variant or bundle. For a fixed variant this is the base price that applies below the first quantity price break. This is the catalog value at read time, not a stored snapshot: checkout resolves the price again when a buyer opens the link, so the amount a buyer pays can differ. Absent on ad-hoc line items, variant_ids lines, and when the catalog object no longer exists. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `suggested_unit_price_money_options` | Optional | Array of [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Unit prices offered as one-tap choices when the buyer sets the price. |
| `tax` | Optional | [OrderLineItemTaxInput](../models/OrderLineItemTaxInput.md#orderlineitemtaxinput) | Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax category and whether it is taxable. |
| `type` | Required | string | How the line item is defined. Values: `"variant"`. |
| `unit_price_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Price of one unit of a `custom_fixed` line item. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `variant_id` | Conditional | string | ID of the catalog variant a `variant` line sells. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |
| `variant_ids` | Conditional | Array of string | Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active, sellable variants of one product in one currency. Available only on standard payment links. Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: `1`. maxItems: `100`. uniqueItems: `true`. Items: pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

### PaymentLinkLineItemVariantInput variant 1: `type` = `"variant"`

anyOf variant 1.

- Condition: not (at least one(present(`bundle_id`); present(`variant_id`, `variant_ids`))).
- Required: `variant_id`.
- Optional: `variant_ids`.

### PaymentLinkLineItemVariantInput variant 2: `type` = `"variant"`

anyOf variant 2.

- Condition: not (at least one(present(`bundle_id`); present(`variant_id`, `variant_ids`))).
- Required: `variant_ids`.
- Optional: `variant_id`.

