[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkLineItemBundlePreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allow_quantity_adjustment` | Optional | boolean or null | Whether the buyer can change the quantity in checkout. `allow_quantity_adjustment`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesallow_quantity_adjustment). |
| `allow_unit_price_adjustment` | Optional | boolean or null | Whether the buyer sets the unit price. Only `custom_variable` lines allow it. `allow_unit_price_adjustment`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesallow_unit_price_adjustment). |
| `bundle_id` | Optional | string or null | ID of the catalog bundle a `bundle` line sells. `bundle_id`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesbundle_id). |
| `default_variant_id` | Optional | string or null | Variant selected when the page opens and used at resolve when the buyer omits a selection. Must be in variant_ids. Omit it to require a buyer selection. `default_variant_id`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesdefault_variant_id). |
| `description` | Optional | string or null | Description of an ad hoc line item. `description`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesdescription). |
| `is_catalog_item_unavailable` | Optional | boolean or null | True when the referenced variant or bundle cannot be sold, or no listed variant in variant_ids can be sold in the line currency. Always false on ad hoc line items. `is_catalog_item_unavailable`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesis_catalog_item_unavailable). |
| `is_sold_out` | Optional | boolean or null | Public event read: true when the tier or event has no capacity left. `is_sold_out`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesis_sold_out). |
| `key` | Optional | string or null | Keys the resolve override maps. Stable line item key used in checkout overrides. Must not have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when omitted, skipping numbers already used by explicit keys; retained for an existing line item when omitted on update. `key`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributeskey). |
| `max_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `max_quantity`: [declared alternatives](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesquantity). |
| `max_total_quantity` | Optional | integer or null | Optional whole-number admission capacity across all orders for an event tier; fractional quantities are not supported. Must be at least 1 and cannot exceed event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it in a line_items replacement removes an existing cap. `max_total_quantity`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesmax_total_quantity). |
| `max_unit_price_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum. `max_unit_price_money`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesmax_unit_price_money). |
| `min_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `min_quantity`: [declared alternatives](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesquantity). |
| `min_unit_price_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. `min_unit_price_money`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesmin_unit_price_money). |
| `name` | Optional | string or null | Name of an ad hoc line item. Catalog lines take the catalog name. `name`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesname). |
| `payment_link_line_item_id` | Optional | string or null | Unique identifier for this payment link line item, prefixed `plli_`. `payment_link_line_item_id`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributespayment_link_line_item_id). |
| `product_id` | Optional | string or null | Parent catalog context only. The product that the variants in variant_ids belong to. Present only on buyer choice lines; refused on input. `product_id`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesproduct_id). |
| `product_type` | Optional | string or null | Classification configured on a custom line for ACH debit. Null when unclassified or catalog-backed; catalog lines get their product classification when checkout starts. Values: `"physical"`, `"service"`, `"fee"`, `"digital"`, `"gift_card"`, `null`. `product_type`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesproduct_type). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesquantity). |
| `remaining_quantity` | Optional | integer or null | Public event read: whole-number admissions left after sales and payment holds; fractional quantities are not supported. This quantity is bounded by both the tier and event caps. Omitted when neither is capped. `remaining_quantity`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesremaining_quantity). |
| `resolved_name` | Optional | string or null | Current catalog name of the referenced variant or bundle, or the product name for variant_ids lines. A variant reads as the product name, plus the variant name when the variant is a named option combination. This is the catalog value at read time, not a stored snapshot: checkout resolves it again when a buyer opens the link. Absent on ad-hoc line items and when the catalog object no longer exists. `resolved_name`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesresolved_name). |
| `resolved_price_range` | Optional | [ProductPriceRangePreviousAttributes](../models/ProductPriceRangePreviousAttributes.md#productpricerangepreviousattributes) or null | Current lowest and highest catalog unit prices among listed variants that can be sold in the line currency. Computed at read time, not stored. Omitted when no listed variant can be sold. |
| `resolved_unit_price_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Current catalog unit price of the referenced variant or bundle. For a fixed variant this is the base price that applies below the first quantity price break. This is the catalog value at read time, not a stored snapshot: checkout resolves the price again when a buyer opens the link, so the amount a buyer pays can differ. Absent on ad-hoc line items, variant_ids lines, and when the catalog object no longer exists. `resolved_unit_price_money`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesresolved_unit_price_money). |
| `suggested_unit_price_money_options` | Optional | Array of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Unit prices offered as one-tap choices when the buyer sets the price. Use the same currency for the price, bounds, and suggested prices. `suggested_unit_price_money_options`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributessuggested_unit_price_money_options). |
| `tax` | Optional | [OrderLineItemTaxPreviousAttributes](../models/OrderLineItemTaxPreviousAttributes.md#orderlineitemtaxpreviousattributes) or null | Tax settings for an ad hoc line item. Catalog lines use the catalog's. |
| `type` | Optional | (string or null) | How the line item is defined. Values: `"bundle"`. `type`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributestype). |
| `unit_price_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Price of one unit of a `custom_fixed` line item. `unit_price_money`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesunit_price_money). |
| `variant_id` | Optional | string or null | ID of the catalog variant a `variant` line sells. `variant_id`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesvariant_id). |
| `variant_ids` | Optional | Array of string or null | Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active, sellable variants of one product in one currency. Available only on standard payment links. Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. `variant_ids`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesvariant_ids). |

### PaymentLinkLineItemBundlePreviousAttributes.allow_quantity_adjustment

### PaymentLinkLineItemBundlePreviousAttributes.allow_quantity_adjustment variant 1

anyOf variant 1: Whether the buyer can change the quantity in checkout..

- Value shape: boolean. Whether the buyer can change the quantity in checkout. 

### PaymentLinkLineItemBundlePreviousAttributes.allow_quantity_adjustment variant 2

anyOf variant 2.

- Value shape: null. Whether the buyer can change the quantity in checkout. 

### PaymentLinkLineItemBundlePreviousAttributes.allow_unit_price_adjustment

### PaymentLinkLineItemBundlePreviousAttributes.allow_unit_price_adjustment variant 1

anyOf variant 1: Whether the buyer sets the unit price. Only `custom_variable` lines allow it..

- Value shape: boolean. Whether the buyer sets the unit price. Only `custom_variable` lines allow it. 

### PaymentLinkLineItemBundlePreviousAttributes.allow_unit_price_adjustment variant 2

anyOf variant 2.

- Value shape: null. Whether the buyer sets the unit price. Only `custom_variable` lines allow it. 

### PaymentLinkLineItemBundlePreviousAttributes.bundle_id

### PaymentLinkLineItemBundlePreviousAttributes.bundle_id variant 1

anyOf variant 1: ID of the catalog bundle a `bundle` line sells..

- Value shape: string. ID of the catalog bundle a `bundle` line sells. ID of the catalog bundle a `bundle` line sells. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. 

### PaymentLinkLineItemBundlePreviousAttributes.bundle_id variant 2

anyOf variant 2.

- Value shape: null. ID of the catalog bundle a `bundle` line sells. 

### PaymentLinkLineItemBundlePreviousAttributes.default_variant_id

### PaymentLinkLineItemBundlePreviousAttributes.default_variant_id variant 1

anyOf variant 1: Variant selected when the page opens and used at resolve when the buyer omits a selection. Must be in variant_ids. Omit it to require a buyer selection..

- Value shape: string. Variant selected when the page opens and used at resolve when the buyer omits a selection. Must be in variant_ids. Omit it to require a buyer selection. Variant selected when the page opens and used at resolve when the buyer omits a selection. Must be in variant_ids. Omit it to require a buyer selection. pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. 

### PaymentLinkLineItemBundlePreviousAttributes.default_variant_id variant 2

anyOf variant 2.

- Value shape: null. Variant selected when the page opens and used at resolve when the buyer omits a selection. Must be in variant_ids. Omit it to require a buyer selection. 

### PaymentLinkLineItemBundlePreviousAttributes.description

### PaymentLinkLineItemBundlePreviousAttributes.description variant 1

anyOf variant 1: Description of an ad hoc line item..

- Value shape: string. Description of an ad hoc line item. 

### PaymentLinkLineItemBundlePreviousAttributes.description variant 2

anyOf variant 2.

- Value shape: null. Description of an ad hoc line item. 

### PaymentLinkLineItemBundlePreviousAttributes.is_catalog_item_unavailable

### PaymentLinkLineItemBundlePreviousAttributes.is_catalog_item_unavailable variant 1

anyOf variant 1: True when the referenced variant or bundle cannot be sold, or no listed variant in variant_ids can be sold in the line currency. Always false on ad hoc line items..

- Value shape: boolean. True when the referenced variant or bundle cannot be sold, or no listed variant in variant_ids can be sold in the line currency. Always false on ad hoc line items. 

### PaymentLinkLineItemBundlePreviousAttributes.is_catalog_item_unavailable variant 2

anyOf variant 2.

- Value shape: null. True when the referenced variant or bundle cannot be sold, or no listed variant in variant_ids can be sold in the line currency. Always false on ad hoc line items. 

### PaymentLinkLineItemBundlePreviousAttributes.is_sold_out

### PaymentLinkLineItemBundlePreviousAttributes.is_sold_out variant 1

anyOf variant 1: Public event read: true when the tier or event has no capacity left..

- Value shape: boolean. Public event read: true when the tier or event has no capacity left. 

### PaymentLinkLineItemBundlePreviousAttributes.is_sold_out variant 2

anyOf variant 2.

- Value shape: null. Public event read: true when the tier or event has no capacity left. 

### PaymentLinkLineItemBundlePreviousAttributes.key

### PaymentLinkLineItemBundlePreviousAttributes.key variant 1

anyOf variant 1: Keys the resolve override maps. Stable line item key used in checkout overrides. Must not have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when omitted, skipping numbers already used by explicit keys; retained for an existing line item when omitted on update..

- Value shape: string. Keys the resolve override maps. Stable line item key used in checkout overrides. Must not have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when omitted, skipping numbers already used by explicit keys; retained for an existing line item when omitted on update. 

### PaymentLinkLineItemBundlePreviousAttributes.key variant 2

anyOf variant 2.

- Value shape: null. Keys the resolve override maps. Stable line item key used in checkout overrides. Must not have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when omitted, skipping numbers already used by explicit keys; retained for an existing line item when omitted on update. 

### PaymentLinkLineItemBundlePreviousAttributes.max_quantity

Declared alternatives: [BundleComponentPreviousAttributes.quantity](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesquantity).

### PaymentLinkLineItemBundlePreviousAttributes.max_total_quantity

### PaymentLinkLineItemBundlePreviousAttributes.max_total_quantity variant 1

anyOf variant 1: Optional whole-number admission capacity across all orders for an event tier; fractional quantities are not supported. Must be at least 1 and cannot exceed event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it in a line_items replacement removes an existing cap..

- Value shape: integer. Optional whole-number admission capacity across all orders for an event tier; fractional quantities are not supported. Must be at least 1 and cannot exceed event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it in a line_items replacement removes an existing cap. Optional whole-number admission capacity across all orders for an event tier; fractional quantities are not supported. Must be at least 1 and cannot exceed event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it in a line_items replacement removes an existing cap. Format: `int32`. minimum: `1`. 

### PaymentLinkLineItemBundlePreviousAttributes.max_total_quantity variant 2

anyOf variant 2.

- Value shape: null. Optional whole-number admission capacity across all orders for an event tier; fractional quantities are not supported. Must be at least 1 and cannot exceed event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it in a line_items replacement removes an existing cap. 

### PaymentLinkLineItemBundlePreviousAttributes.max_unit_price_money

Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### PaymentLinkLineItemBundlePreviousAttributes.max_unit_price_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### PaymentLinkLineItemBundlePreviousAttributes.max_unit_price_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum. 

### PaymentLinkLineItemBundlePreviousAttributes.max_unit_price_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### PaymentLinkLineItemBundlePreviousAttributes.max_unit_price_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### PaymentLinkLineItemBundlePreviousAttributes.min_quantity

Declared alternatives: [BundleComponentPreviousAttributes.quantity](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesquantity).

### PaymentLinkLineItemBundlePreviousAttributes.min_unit_price_money

Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### PaymentLinkLineItemBundlePreviousAttributes.min_unit_price_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### PaymentLinkLineItemBundlePreviousAttributes.min_unit_price_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. 

### PaymentLinkLineItemBundlePreviousAttributes.min_unit_price_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### PaymentLinkLineItemBundlePreviousAttributes.min_unit_price_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### PaymentLinkLineItemBundlePreviousAttributes.name

### PaymentLinkLineItemBundlePreviousAttributes.name variant 1

anyOf variant 1: Name of an ad hoc line item. Catalog lines take the catalog name..

- Value shape: string. Name of an ad hoc line item. Catalog lines take the catalog name. 

### PaymentLinkLineItemBundlePreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. Name of an ad hoc line item. Catalog lines take the catalog name. 

### PaymentLinkLineItemBundlePreviousAttributes.payment_link_line_item_id

### PaymentLinkLineItemBundlePreviousAttributes.payment_link_line_item_id variant 1

anyOf variant 1: Unique identifier for this payment link line item, prefixed `plli_`..

- Value shape: string. Unique identifier for this payment link line item, prefixed `plli_`. Unique identifier for this payment link line item, prefixed `plli_`. Example: `"plli_01KEZF7C004V7GVCCNMYYCBAJS"`. 

### PaymentLinkLineItemBundlePreviousAttributes.payment_link_line_item_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this payment link line item, prefixed `plli_`. 

### PaymentLinkLineItemBundlePreviousAttributes.product_id

### PaymentLinkLineItemBundlePreviousAttributes.product_id variant 1

anyOf variant 1: Parent catalog context only. The product that the variants in variant_ids belong to. Present only on buyer choice lines; refused on input..

- Value shape: string. Parent catalog context only. The product that the variants in variant_ids belong to. Present only on buyer choice lines; refused on input. Parent catalog context only. The product that the variants in variant_ids belong to. Present only on buyer choice lines; refused on input. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. 

### PaymentLinkLineItemBundlePreviousAttributes.product_id variant 2

anyOf variant 2.

- Value shape: null. Parent catalog context only. The product that the variants in variant_ids belong to. Present only on buyer choice lines; refused on input. 

### PaymentLinkLineItemBundlePreviousAttributes.product_type

### PaymentLinkLineItemBundlePreviousAttributes.product_type variant 1

anyOf variant 1: Classification configured on a custom line for ACH debit. Null when unclassified or catalog-backed; catalog lines get their product classification when checkout starts..

- Value shape: string. Classification configured on a custom line for ACH debit. Null when unclassified or catalog-backed; catalog lines get their product classification when checkout starts. Values: `"physical"`, `"service"`, `"fee"`, `"digital"`, `"gift_card"`, `null`.

### PaymentLinkLineItemBundlePreviousAttributes.product_type variant 2

anyOf variant 2.

- Value shape: null. Classification configured on a custom line for ACH debit. Null when unclassified or catalog-backed; catalog lines get their product classification when checkout starts. 

### PaymentLinkLineItemBundlePreviousAttributes.quantity

Declared alternatives: [BundleComponentPreviousAttributes.quantity](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesquantity).

### PaymentLinkLineItemBundlePreviousAttributes.remaining_quantity

### PaymentLinkLineItemBundlePreviousAttributes.remaining_quantity variant 1

anyOf variant 1: Public event read: whole-number admissions left after sales and payment holds; fractional quantities are not supported. This quantity is bounded by both the tier and event caps. Omitted when neither is capped..

- Value shape: integer. Public event read: whole-number admissions left after sales and payment holds; fractional quantities are not supported. This quantity is bounded by both the tier and event caps. Omitted when neither is capped. Public event read: whole-number admissions left after sales and payment holds; fractional quantities are not supported. This quantity is bounded by both the tier and event caps. Omitted when neither is capped. Format: `int32`. 

### PaymentLinkLineItemBundlePreviousAttributes.remaining_quantity variant 2

anyOf variant 2.

- Value shape: null. Public event read: whole-number admissions left after sales and payment holds; fractional quantities are not supported. This quantity is bounded by both the tier and event caps. Omitted when neither is capped. 

### PaymentLinkLineItemBundlePreviousAttributes.resolved_name

### PaymentLinkLineItemBundlePreviousAttributes.resolved_name variant 1

anyOf variant 1: Current catalog name of the referenced variant or bundle, or the product name for variant_ids lines. A variant reads as the product name, plus the variant name when the variant is a named option combination. This is the catalog value at read time, not a stored snapshot: checkout resolves it again when a buyer opens the link. Absent on ad-hoc line items and when the catalog object no longer exists..

- Value shape: string. Current catalog name of the referenced variant or bundle, or the product name for variant_ids lines. A variant reads as the product name, plus the variant name when the variant is a named option combination. This is the catalog value at read time, not a stored snapshot: checkout resolves it again when a buyer opens the link. Absent on ad-hoc line items and when the catalog object no longer exists. 

### PaymentLinkLineItemBundlePreviousAttributes.resolved_name variant 2

anyOf variant 2.

- Value shape: null. Current catalog name of the referenced variant or bundle, or the product name for variant_ids lines. A variant reads as the product name, plus the variant name when the variant is a named option combination. This is the catalog value at read time, not a stored snapshot: checkout resolves it again when a buyer opens the link. Absent on ad-hoc line items and when the catalog object no longer exists. 

### PaymentLinkLineItemBundlePreviousAttributes.resolved_unit_price_money

Current catalog unit price of the referenced variant or bundle. For a fixed variant this is the base price that applies below the first quantity price break. This is the catalog value at read time, not a stored snapshot: checkout resolves the price again when a buyer opens the link, so the amount a buyer pays can differ. Absent on ad-hoc line items, variant_ids lines, and when the catalog object no longer exists.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### PaymentLinkLineItemBundlePreviousAttributes.resolved_unit_price_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### PaymentLinkLineItemBundlePreviousAttributes.resolved_unit_price_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Current catalog unit price of the referenced variant or bundle. For a fixed variant this is the base price that applies below the first quantity price break. This is the catalog value at read time, not a stored snapshot: checkout resolves the price again when a buyer opens the link, so the amount a buyer pays can differ. Absent on ad-hoc line items, variant_ids lines, and when the catalog object no longer exists. 

### PaymentLinkLineItemBundlePreviousAttributes.resolved_unit_price_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### PaymentLinkLineItemBundlePreviousAttributes.resolved_unit_price_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### PaymentLinkLineItemBundlePreviousAttributes.suggested_unit_price_money_options

### PaymentLinkLineItemBundlePreviousAttributes.suggested_unit_price_money_options variant 1

anyOf variant 1: Unit prices offered as one-tap choices when the buyer sets the price. Use the same currency for the price, bounds, and suggested prices..

- Value shape: Array of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes). Unit prices offered as one-tap choices when the buyer sets the price. Use the same currency for the price, bounds, and suggested prices. 

### PaymentLinkLineItemBundlePreviousAttributes.suggested_unit_price_money_options variant 2

anyOf variant 2.

- Value shape: null. Unit prices offered as one-tap choices when the buyer sets the price. Use the same currency for the price, bounds, and suggested prices. 

### PaymentLinkLineItemBundlePreviousAttributes.suggested_unit_price_money_options variant 1.[] fields 1

Field definitions: [CheckoutTipConfigPreviousAttributes.smart_tip_money_options variant 1.[] fields 1](../models/CheckoutTipConfigPreviousAttributes.md#checkouttipconfigpreviousattributessmart_tip_money_options-variant-1-fields-1).

### PaymentLinkLineItemBundlePreviousAttributes.type

### PaymentLinkLineItemBundlePreviousAttributes.type variant 1

anyOf group 1 variant 1: How the line item is defined..

- Value shape: string. How the line item is defined. Values: `"bundle"`.

### PaymentLinkLineItemBundlePreviousAttributes.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. How the line item is defined. 

### PaymentLinkLineItemBundlePreviousAttributes.type variant 3

anyOf group 2 variant 1.

- Value shape: string. How the line item is defined. Values: `"bundle"`.

### PaymentLinkLineItemBundlePreviousAttributes.unit_price_money

Price of one unit of a `custom_fixed` line item.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### PaymentLinkLineItemBundlePreviousAttributes.unit_price_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### PaymentLinkLineItemBundlePreviousAttributes.unit_price_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Price of one unit of a `custom_fixed` line item. 

### PaymentLinkLineItemBundlePreviousAttributes.unit_price_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### PaymentLinkLineItemBundlePreviousAttributes.unit_price_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### PaymentLinkLineItemBundlePreviousAttributes.variant_id

### PaymentLinkLineItemBundlePreviousAttributes.variant_id variant 1

anyOf variant 1: ID of the catalog variant a `variant` line sells..

- Value shape: string. ID of the catalog variant a `variant` line sells. ID of the catalog variant a `variant` line sells. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. 

### PaymentLinkLineItemBundlePreviousAttributes.variant_id variant 2

anyOf variant 2.

- Value shape: null. ID of the catalog variant a `variant` line sells. 

### PaymentLinkLineItemBundlePreviousAttributes.variant_ids

### PaymentLinkLineItemBundlePreviousAttributes.variant_ids variant 1

anyOf variant 1: Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active, sellable variants of one product in one currency. Available only on standard payment links. Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields..

- Value shape: Array of string. Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active, sellable variants of one product in one currency. Available only on standard payment links. Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active, sellable variants of one product in one currency. Available only on standard payment links. Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: `1`. maxItems: `100`. uniqueItems: `true`. Items: pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. 

### PaymentLinkLineItemBundlePreviousAttributes.variant_ids variant 2

anyOf variant 2.

- Value shape: null. Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active, sellable variants of one product in one currency. Available only on standard payment links. Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. 

