[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkLineItemVariantPreviousAttributes







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
| `type` | Optional | (string or null) | How the line item is defined. Values: `"variant"`. `type`: [declared alternatives](../models/PaymentLinkLineItemVariantPreviousAttributes.md#paymentlinklineitemvariantpreviousattributestype). |
| `unit_price_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Price of one unit of a `custom_fixed` line item. `unit_price_money`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesunit_price_money). |
| `variant_id` | Optional | string or null | ID of the catalog variant a `variant` line sells. `variant_id`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesvariant_id). |
| `variant_ids` | Optional | Array of string or null | Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active, sellable variants of one product in one currency. Available only on standard payment links. Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. `variant_ids`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesvariant_ids). |

### PaymentLinkLineItemVariantPreviousAttributes variant 1, 2: `type` = `"variant"`

anyOf variant 1; anyOf variant 2.

No additional constraints.

### PaymentLinkLineItemVariantPreviousAttributes.allow_quantity_adjustment

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributes.allow_quantity_adjustment](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesallow_quantity_adjustment).

### PaymentLinkLineItemVariantPreviousAttributes.allow_unit_price_adjustment

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributes.allow_unit_price_adjustment](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesallow_unit_price_adjustment).

### PaymentLinkLineItemVariantPreviousAttributes.bundle_id

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributes.bundle_id](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesbundle_id).

### PaymentLinkLineItemVariantPreviousAttributes.default_variant_id

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributes.default_variant_id](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesdefault_variant_id).

### PaymentLinkLineItemVariantPreviousAttributes.description

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributes.description](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesdescription).

### PaymentLinkLineItemVariantPreviousAttributes.is_catalog_item_unavailable

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributes.is_catalog_item_unavailable](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesis_catalog_item_unavailable).

### PaymentLinkLineItemVariantPreviousAttributes.is_sold_out

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributes.is_sold_out](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesis_sold_out).

### PaymentLinkLineItemVariantPreviousAttributes.key

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributes.key](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributeskey).

### PaymentLinkLineItemVariantPreviousAttributes.max_quantity

Declared alternatives: [BundleComponentPreviousAttributes.quantity](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesquantity).

### PaymentLinkLineItemVariantPreviousAttributes.max_total_quantity

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributes.max_total_quantity](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesmax_total_quantity).

### PaymentLinkLineItemVariantPreviousAttributes.max_unit_price_money

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributes.max_unit_price_money](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesmax_unit_price_money).

### PaymentLinkLineItemVariantPreviousAttributes.min_quantity

Declared alternatives: [BundleComponentPreviousAttributes.quantity](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesquantity).

### PaymentLinkLineItemVariantPreviousAttributes.min_unit_price_money

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributes.min_unit_price_money](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesmin_unit_price_money).

### PaymentLinkLineItemVariantPreviousAttributes.name

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributes.name](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesname).

### PaymentLinkLineItemVariantPreviousAttributes.payment_link_line_item_id

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributes.payment_link_line_item_id](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributespayment_link_line_item_id).

### PaymentLinkLineItemVariantPreviousAttributes.product_id

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributes.product_id](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesproduct_id).

### PaymentLinkLineItemVariantPreviousAttributes.product_type

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributes.product_type](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesproduct_type).

### PaymentLinkLineItemVariantPreviousAttributes.quantity

Declared alternatives: [BundleComponentPreviousAttributes.quantity](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesquantity).

### PaymentLinkLineItemVariantPreviousAttributes.remaining_quantity

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributes.remaining_quantity](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesremaining_quantity).

### PaymentLinkLineItemVariantPreviousAttributes.resolved_name

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributes.resolved_name](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesresolved_name).

### PaymentLinkLineItemVariantPreviousAttributes.resolved_unit_price_money

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributes.resolved_unit_price_money](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesresolved_unit_price_money).

### PaymentLinkLineItemVariantPreviousAttributes.suggested_unit_price_money_options

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributes.suggested_unit_price_money_options](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributessuggested_unit_price_money_options).

### PaymentLinkLineItemVariantPreviousAttributes.type

### PaymentLinkLineItemVariantPreviousAttributes.type variant 1

anyOf group 1 variant 1: How the line item is defined..

- Value shape: string. How the line item is defined. Values: `"variant"`.

### PaymentLinkLineItemVariantPreviousAttributes.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. How the line item is defined. 

### PaymentLinkLineItemVariantPreviousAttributes.type variant 3

anyOf group 2 variant 1.

- Value shape: string. How the line item is defined. Values: `"variant"`.

### PaymentLinkLineItemVariantPreviousAttributes.unit_price_money

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributes.unit_price_money](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesunit_price_money).

### PaymentLinkLineItemVariantPreviousAttributes.variant_id

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributes.variant_id](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesvariant_id).

### PaymentLinkLineItemVariantPreviousAttributes.variant_ids

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributes.variant_ids](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesvariant_ids).

