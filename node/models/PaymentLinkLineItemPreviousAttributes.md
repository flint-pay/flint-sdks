[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkLineItemPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allow_quantity_adjustment` | Optional | boolean or null | Whether the buyer can change the quantity in checkout. `allow_quantity_adjustment`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesallow_quantity_adjustment). |
| `allow_unit_price_adjustment` | Optional | Varies by condition | Whether the buyer sets the unit price. Only `custom_variable` lines allow it. `allow_unit_price_adjustment`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesallow_unit_price_adjustment), [declared alternatives](../models/PaymentLinkLineItemCustomFixedPreviousAttributes.md#paymentlinklineitemcustomfixedpreviousattributesallow_unit_price_adjustment), [declared alternatives](../models/PaymentLinkLineItemCustomVariablePreviousAttributes.md#paymentlinklineitemcustomvariablepreviousattributesallow_unit_price_adjustment). |
| `bundle_id` | Optional | string or null | ID of the catalog bundle a `bundle` line sells. `bundle_id`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesbundle_id). |
| `default_variant_id` | Optional | string or null | Variant selected when the page opens and used at resolve when the buyer omits a selection. Must be in variant_ids. Omit it to require a buyer selection. `default_variant_id`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesdefault_variant_id). |
| `description` | Optional | string or null | Description of an ad hoc line item. `description`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesdescription). |
| `is_catalog_item_unavailable` | Optional | boolean or null | True when the referenced variant or bundle cannot be sold, or no listed variant in variant_ids can be sold in the line currency. Always false on ad hoc line items. `is_catalog_item_unavailable`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesis_catalog_item_unavailable). |
| `key` | Optional | string or null | Keys the resolve override maps. Stable line item key used in checkout overrides. Must not have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when omitted, skipping numbers already used by explicit keys; retained for an existing line item when omitted on update. `key`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributeskey). |
| `max_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `max_quantity`: [declared alternatives](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesquantity). |
| `max_unit_price_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. `max_unit_price_money`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesmax_unit_price_money). |
| `min_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `min_quantity`: [declared alternatives](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesquantity). |
| `min_unit_price_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. `min_unit_price_money`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesmin_unit_price_money). |
| `name` | Optional | string or null | Name of an ad hoc line item. Catalog lines take the catalog name. `name`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesname). |
| `payment_link_line_item_id` | Optional | string or null | Unique identifier for this payment link line item, prefixed `plli_`. `payment_link_line_item_id`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributespayment_link_line_item_id). |
| `product_id` | Optional | string or null | Parent catalog context only. The product that the variants in variant_ids belong to. Present only on buyer choice lines; refused on input. `product_id`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesproduct_id). |
| `product_type` | Optional | string or null | Classification configured on a custom line for ACH debit. Null when unclassified or catalog-backed; catalog lines get their product classification when checkout starts. Values: `"physical"`, `"service"`, `"fee"`, `"digital"`, `"gift_card"`, `null`. `product_type`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesproduct_type). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesquantity). |
| `resolved_name` | Optional | string or null | Current catalog name of the referenced variant or bundle, or the product name for variant_ids lines. A variant reads as the product name, plus the variant name when the variant is a named option combination. This is the catalog value at read time, not a stored snapshot: checkout resolves it again when a buyer opens the link. Absent on ad-hoc line items and when the catalog object no longer exists. `resolved_name`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesresolved_name). |
| `resolved_price_range` | Optional | [ProductPriceRangePreviousAttributes](../models/ProductPriceRangePreviousAttributes.md#productpricerangepreviousattributes) or null | Current lowest and highest catalog unit prices among listed variants that can be sold in the line currency. Computed at read time, not stored. Omitted when no listed variant can be sold. |
| `resolved_unit_price_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Current catalog unit price of the referenced variant or bundle. For a fixed variant this is the base price that applies below the first quantity price break. This is the catalog value at read time, not a stored snapshot: checkout resolves the price again when a buyer opens the link, so the amount a buyer pays can differ. Absent on ad-hoc line items, variant_ids lines, and when the catalog object no longer exists. `resolved_unit_price_money`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesresolved_unit_price_money). |
| `suggested_unit_price_money_options` | Optional | Array of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Unit prices offered as one-tap choices when the buyer sets the price. `suggested_unit_price_money_options`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributessuggested_unit_price_money_options). |
| `tax` | Optional | [OrderLineItemTaxPreviousAttributes](../models/OrderLineItemTaxPreviousAttributes.md#orderlineitemtaxpreviousattributes) or null | Tax settings for an ad hoc line item. Catalog lines use the catalog's. |
| `type` | Optional | (string or null) | How the line item is defined. Values: `"variant"`, `"bundle"`, `"custom_fixed"`, `"custom_variable"`. `type`: [declared alternatives](../models/PaymentLinkLineItemPreviousAttributes.md#paymentlinklineitempreviousattributes-variant-1type), [declared alternatives](../models/PaymentLinkLineItemPreviousAttributes.md#paymentlinklineitempreviousattributes-variant-3type), [declared alternatives](../models/PaymentLinkLineItemPreviousAttributes.md#paymentlinklineitempreviousattributes-variant-4type), [declared alternatives](../models/PaymentLinkLineItemPreviousAttributes.md#paymentlinklineitempreviousattributes-variant-5type). |
| `unit_price_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Price of one unit of a `custom_fixed` line item. `unit_price_money`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesunit_price_money). |
| `variant_id` | Optional | string or null | ID of the catalog variant a `variant` line sells. `variant_id`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesvariant_id). |
| `variant_ids` | Optional | Array of string or null | Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active, sellable variants of one product in one currency. Available only on standard payment links. Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. `variant_ids`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesvariant_ids). |

### PaymentLinkLineItemPreviousAttributes variant 1, 2: `type` = `"variant"`

anyOf PaymentLinkLineItemVariantPreviousAttributes; anyOf variant 1; anyOf PaymentLinkLineItemVariantPreviousAttributes; anyOf variant 2.

- Constraints for `allow_unit_price_adjustment`: boolean or null.
- Constraints for `type`: Values: `"variant"`.

### PaymentLinkLineItemPreviousAttributes variant 3: `type` = `"bundle"`

anyOf PaymentLinkLineItemBundlePreviousAttributes.

- Constraints for `allow_unit_price_adjustment`: boolean or null.
- Constraints for `type`: Values: `"bundle"`.

### PaymentLinkLineItemPreviousAttributes variant 4: `allow_unit_price_adjustment` = `false`, `type` = `"custom_fixed"`

anyOf PaymentLinkLineItemCustomFixedPreviousAttributes.

- Constraints for `allow_unit_price_adjustment`: (boolean or null). Values: `false`.
- Constraints for `type`: Values: `"custom_fixed"`.

### PaymentLinkLineItemPreviousAttributes variant 5: `allow_unit_price_adjustment` = `true`, `type` = `"custom_variable"`

anyOf PaymentLinkLineItemCustomVariablePreviousAttributes.

- Constraints for `allow_unit_price_adjustment`: (boolean or null). Values: `true`.
- Constraints for `type`: Values: `"custom_variable"`.

### PaymentLinkLineItemPreviousAttributes.allow_quantity_adjustment

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributes.allow_quantity_adjustment](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesallow_quantity_adjustment).

### PaymentLinkLineItemPreviousAttributes variant 1.allow_unit_price_adjustment

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributes.allow_unit_price_adjustment](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesallow_unit_price_adjustment).

### PaymentLinkLineItemPreviousAttributes.bundle_id

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributes.bundle_id](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesbundle_id).

### PaymentLinkLineItemPreviousAttributes.default_variant_id

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributes.default_variant_id](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesdefault_variant_id).

### PaymentLinkLineItemPreviousAttributes.description

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributes.description](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesdescription).

### PaymentLinkLineItemPreviousAttributes.is_catalog_item_unavailable

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributes.is_catalog_item_unavailable](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesis_catalog_item_unavailable).

### PaymentLinkLineItemPreviousAttributes.key

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributes.key](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributeskey).

### PaymentLinkLineItemPreviousAttributes.max_quantity

Declared alternatives: [BundleComponentPreviousAttributes.quantity](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesquantity).

### PaymentLinkLineItemPreviousAttributes.max_unit_price_money

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributes.max_unit_price_money](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesmax_unit_price_money).

### PaymentLinkLineItemPreviousAttributes.min_quantity

Declared alternatives: [BundleComponentPreviousAttributes.quantity](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesquantity).

### PaymentLinkLineItemPreviousAttributes.min_unit_price_money

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributes.min_unit_price_money](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesmin_unit_price_money).

### PaymentLinkLineItemPreviousAttributes.name

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributes.name](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesname).

### PaymentLinkLineItemPreviousAttributes.payment_link_line_item_id

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributes.payment_link_line_item_id](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributespayment_link_line_item_id).

### PaymentLinkLineItemPreviousAttributes.product_id

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributes.product_id](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesproduct_id).

### PaymentLinkLineItemPreviousAttributes.product_type

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributes.product_type](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesproduct_type).

### PaymentLinkLineItemPreviousAttributes.quantity

Declared alternatives: [BundleComponentPreviousAttributes.quantity](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesquantity).

### PaymentLinkLineItemPreviousAttributes.resolved_name

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributes.resolved_name](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesresolved_name).

### PaymentLinkLineItemPreviousAttributes.resolved_unit_price_money

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributes.resolved_unit_price_money](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesresolved_unit_price_money).

### PaymentLinkLineItemPreviousAttributes.suggested_unit_price_money_options

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributes.suggested_unit_price_money_options](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributessuggested_unit_price_money_options).

### PaymentLinkLineItemPreviousAttributes variant 1.type

### PaymentLinkLineItemPreviousAttributes variant 1.type variant 1

anyOf group 1 variant 1: How the line item is defined..

- Value shape: string. How the line item is defined. Values: `"variant"`, `"bundle"`, `"custom_fixed"`, `"custom_variable"`.

### PaymentLinkLineItemPreviousAttributes variant 1.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the line item is defined. 

### PaymentLinkLineItemPreviousAttributes variant 1.type variant 3

anyOf group 2 variant 1: How the line item is defined..

- Value shape: string. How the line item is defined. Values: `"variant"`.

### PaymentLinkLineItemPreviousAttributes variant 1.type variant 5

anyOf group 3 variant 1.

- Value shape: string. How the line item is defined. Values: `"variant"`.

### PaymentLinkLineItemPreviousAttributes.unit_price_money

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributes.unit_price_money](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesunit_price_money).

### PaymentLinkLineItemPreviousAttributes.variant_id

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributes.variant_id](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesvariant_id).

### PaymentLinkLineItemPreviousAttributes.variant_ids

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributes.variant_ids](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesvariant_ids).

### PaymentLinkLineItemPreviousAttributes variant 2.allow_unit_price_adjustment

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributes.allow_unit_price_adjustment](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesallow_unit_price_adjustment).

### PaymentLinkLineItemPreviousAttributes variant 2.type

Declared alternatives: [PaymentLinkLineItemPreviousAttributes variant 1.type](../models/PaymentLinkLineItemPreviousAttributes.md#paymentlinklineitempreviousattributes-variant-1type).

### PaymentLinkLineItemPreviousAttributes variant 3.allow_unit_price_adjustment

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributes.allow_unit_price_adjustment](../models/PaymentLinkLineItemBundlePreviousAttributes.md#paymentlinklineitembundlepreviousattributesallow_unit_price_adjustment).

### PaymentLinkLineItemPreviousAttributes variant 3.type

### PaymentLinkLineItemPreviousAttributes variant 3.type variant 1

anyOf group 1 variant 1: How the line item is defined..

- Value shape: string. How the line item is defined. Values: `"variant"`, `"bundle"`, `"custom_fixed"`, `"custom_variable"`.

### PaymentLinkLineItemPreviousAttributes variant 3.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the line item is defined. 

### PaymentLinkLineItemPreviousAttributes variant 3.type variant 3

anyOf group 2 variant 1: How the line item is defined..

- Value shape: string. How the line item is defined. Values: `"bundle"`.

### PaymentLinkLineItemPreviousAttributes variant 3.type variant 5

anyOf group 3 variant 1.

- Value shape: string. How the line item is defined. Values: `"bundle"`.

### PaymentLinkLineItemPreviousAttributes variant 4.allow_unit_price_adjustment

Declared alternatives: [PaymentLinkLineItemCustomFixedPreviousAttributes.allow_unit_price_adjustment](../models/PaymentLinkLineItemCustomFixedPreviousAttributes.md#paymentlinklineitemcustomfixedpreviousattributesallow_unit_price_adjustment).

### PaymentLinkLineItemPreviousAttributes variant 4.type

### PaymentLinkLineItemPreviousAttributes variant 4.type variant 1

anyOf group 1 variant 1: How the line item is defined..

- Value shape: string. How the line item is defined. Values: `"variant"`, `"bundle"`, `"custom_fixed"`, `"custom_variable"`.

### PaymentLinkLineItemPreviousAttributes variant 4.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the line item is defined. 

### PaymentLinkLineItemPreviousAttributes variant 4.type variant 3

anyOf group 2 variant 1: How the line item is defined..

- Value shape: string. How the line item is defined. Values: `"custom_fixed"`.

### PaymentLinkLineItemPreviousAttributes variant 4.type variant 5

anyOf group 3 variant 1.

- Value shape: string. How the line item is defined. Values: `"custom_fixed"`.

### PaymentLinkLineItemPreviousAttributes variant 5.allow_unit_price_adjustment

Declared alternatives: [PaymentLinkLineItemCustomVariablePreviousAttributes.allow_unit_price_adjustment](../models/PaymentLinkLineItemCustomVariablePreviousAttributes.md#paymentlinklineitemcustomvariablepreviousattributesallow_unit_price_adjustment).

### PaymentLinkLineItemPreviousAttributes variant 5.type

### PaymentLinkLineItemPreviousAttributes variant 5.type variant 1

anyOf group 1 variant 1: How the line item is defined..

- Value shape: string. How the line item is defined. Values: `"variant"`, `"bundle"`, `"custom_fixed"`, `"custom_variable"`.

### PaymentLinkLineItemPreviousAttributes variant 5.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the line item is defined. 

### PaymentLinkLineItemPreviousAttributes variant 5.type variant 3

anyOf group 2 variant 1: How the line item is defined..

- Value shape: string. How the line item is defined. Values: `"custom_variable"`.

### PaymentLinkLineItemPreviousAttributes variant 5.type variant 5

anyOf group 3 variant 1.

- Value shape: string. How the line item is defined. Values: `"custom_variable"`.

