[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkLineItemPatchInputBundle

The `bundle` variant of `PaymentLinkLineItemPatchInput`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allow_quantity_adjustment` | Optional | boolean | Whether the buyer can change the quantity in checkout. |
| `allow_unit_price_adjustment` | Optional | boolean | Whether the buyer sets the unit price. Only `custom_variable` lines allow it. |
| `bundle_id` | Required | string | ID of the catalog bundle a `bundle` line sells. minLength: `1`. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. |
| `default_variant_id` | Optional | string or null | Variant selected when the page opens and used at resolve when the buyer omits a selection. Must be in variant_ids. Omit it to require a buyer selection. Send null to clear it. minLength: `1`. pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |
| `description` | Optional | string | Description of an ad hoc line item. minLength: `1`. maxLength: `2048`. |
| `key` | Optional | string | Keys the resolve override maps. Stable line item key used in checkout overrides. Must not have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when omitted, skipping numbers already used by explicit keys; retained for an existing line item when omitted on update. minLength: `1`. maxLength: `100`. |
| `max_quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `max_unit_price_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `max_unit_price_money`: [field definitions](../models/PaymentLinkLineItem.md#paymentlinklineitemmax_unit_price_money). |
| `min_quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `min_unit_price_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `min_unit_price_money`: [field definitions](../models/PaymentLinkLineItem.md#paymentlinklineitemmin_unit_price_money). |
| `name` | Optional | string | Name of an ad hoc line item. Catalog lines take the catalog name. minLength: `1`. maxLength: `255`. |
| `payment_link_line_item_id` | Optional | string | Stable ID of an existing line item. Omit it to create a new line item. minLength: `1`. Example: `"plli_01KEZF7C004V7GVCCNMYYCBAJS"`. |
| `product_type` | Optional | string | Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does not change tax, delivery, or inventory. On an order line PATCH, omission preserves the classification. Catalog lines use their product's type and reject this input. Values: `"physical"`, `"service"`, `"fee"`, `"digital"`. |
| `quantity` | Optional | integer | Whole-number default quantity; fractional quantities are not supported. Omission uses 1. Must be at least 1 for standard links; event tiers also accept 0. Format: `int32`. Default: `1`. |
| `suggested_unit_price_money_options` | Optional | Array of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Unit prices offered as one-tap choices when the buyer sets the price. `suggested_unit_price_money_options[]`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `tax` | Optional | [OrderLineItemTax](../models/OrderLineItemTax.md#orderlineitemtax) | Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax category and whether it is taxable. `tax`: [field definitions](../models/PaymentLinkLineItemInputBundle.md#paymentlinklineiteminputbundletax). |
| `type` | Required | string | How the line item is defined. Values: `"bundle"`. |
| `unit_price_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Price of one unit of a `custom_fixed` line item. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `unit_price_money`: [field definitions](../models/PaymentLinkLineItem.md#paymentlinklineitemunit_price_money). |
| `variant_id` | Optional | string | ID of the catalog variant a `variant` line sells. minLength: `1`. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |
| `variant_ids` | Optional | Array of string | Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active, sellable variants of one product in one currency. Available only on standard payment links. Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: `1`. maxItems: `100`. uniqueItems: `true`. Items: minLength: `1`. pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

### PaymentLinkLineItemPatchInputBundle.max_unit_price_money

Field definitions: [PaymentLinkLineItem.max_unit_price_money](../models/PaymentLinkLineItem.md#paymentlinklineitemmax_unit_price_money).

### PaymentLinkLineItemPatchInputBundle.min_unit_price_money

Field definitions: [PaymentLinkLineItem.min_unit_price_money](../models/PaymentLinkLineItem.md#paymentlinklineitemmin_unit_price_money).

### PaymentLinkLineItemPatchInputBundle.suggested_unit_price_money_options[]

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### PaymentLinkLineItemPatchInputBundle.tax

Field definitions: [PaymentLinkLineItemInputBundle.tax](../models/PaymentLinkLineItemInputBundle.md#paymentlinklineiteminputbundletax).

### PaymentLinkLineItemPatchInputBundle.unit_price_money

Field definitions: [PaymentLinkLineItem.unit_price_money](../models/PaymentLinkLineItem.md#paymentlinklineitemunit_price_money).

