[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkLineItemVariantPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allow_quantity_adjustment` | Optional | boolean or null | Whether the buyer can change the quantity in checkout. `allow_quantity_adjustment`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributesInput.md#paymentlinklineitembundlepreviousattributesinputallow_quantity_adjustment). |
| `allow_unit_price_adjustment` | Optional | boolean or null | Whether the buyer sets the unit price. Only `custom_variable` lines allow it. `allow_unit_price_adjustment`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributesInput.md#paymentlinklineitembundlepreviousattributesinputallow_unit_price_adjustment). |
| `bundle_id` | Optional | string or null | ID of the catalog bundle a `bundle` line sells. `bundle_id`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributesInput.md#paymentlinklineitembundlepreviousattributesinputbundle_id). |
| `default_variant_id` | Optional | string or null | Variant selected when the page opens and used at resolve when the buyer omits a selection. Must be in variant_ids. Omit it to require a buyer selection. `default_variant_id`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributesInput.md#paymentlinklineitembundlepreviousattributesinputdefault_variant_id). |
| `description` | Optional | string or null | Description of an ad hoc line item. `description`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributesInput.md#paymentlinklineitembundlepreviousattributesinputdescription). |
| `is_catalog_item_unavailable` | Optional | boolean or null | True when the referenced variant or bundle cannot be sold, or no listed variant in variant_ids can be sold in the line currency. Always false on ad hoc line items. `is_catalog_item_unavailable`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributesInput.md#paymentlinklineitembundlepreviousattributesinputis_catalog_item_unavailable). |
| `key` | Optional | string or null | Keys the resolve override maps. Stable line item key used in checkout overrides. Must not have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when omitted, skipping numbers already used by explicit keys; retained for an existing line item when omitted on update. `key`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributesInput.md#paymentlinklineitembundlepreviousattributesinputkey). |
| `max_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `max_quantity`: [declared alternatives](../models/BundleComponentPreviousAttributesInput.md#bundlecomponentpreviousattributesinputquantity). |
| `max_unit_price_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. |
| `min_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `min_quantity`: [declared alternatives](../models/BundleComponentPreviousAttributesInput.md#bundlecomponentpreviousattributesinputquantity). |
| `min_unit_price_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. |
| `name` | Optional | string or null | Name of an ad hoc line item. Catalog lines take the catalog name. `name`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributesInput.md#paymentlinklineitembundlepreviousattributesinputname). |
| `payment_link_line_item_id` | Optional | string or null | Unique identifier for this payment link line item, prefixed `plli_`. `payment_link_line_item_id`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributesInput.md#paymentlinklineitembundlepreviousattributesinputpayment_link_line_item_id). |
| `product_id` | Optional | string or null | Parent catalog context only. The product that the variants in variant_ids belong to. Present only on buyer choice lines; refused on input. `product_id`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributesInput.md#paymentlinklineitembundlepreviousattributesinputproduct_id). |
| `product_type` | Optional | string or null or null | Classification configured on a custom line for ACH debit. Null when unclassified or catalog-backed; catalog lines get their product classification when checkout starts. Values: `"physical"`, `"service"`, `"fee"`, `"digital"`, `"gift_card"`, `null`. `product_type`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributesInput.md#paymentlinklineitembundlepreviousattributesinputproduct_type). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/BundleComponentPreviousAttributesInput.md#bundlecomponentpreviousattributesinputquantity). |
| `resolved_name` | Optional | string or null | Current catalog name of the referenced variant or bundle, or the product name for variant_ids lines. A variant reads as the product name, plus the variant name when the variant is a named option combination. This is the catalog value at read time, not a stored snapshot: checkout resolves it again when a buyer opens the link. Absent on ad-hoc line items and when the catalog object no longer exists. `resolved_name`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributesInput.md#paymentlinklineitembundlepreviousattributesinputresolved_name). |
| `resolved_price_range` | Optional | [ProductPriceRangePreviousAttributesInput](../models/ProductPriceRangePreviousAttributesInput.md#productpricerangepreviousattributesinput) or null | Current lowest and highest catalog unit prices among listed variants that can be sold in the line currency. Computed at read time, not stored. Omitted when no listed variant can be sold. |
| `resolved_unit_price_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Current catalog unit price of the referenced variant or bundle. For a fixed variant this is the base price that applies below the first quantity price break. This is the catalog value at read time, not a stored snapshot: checkout resolves the price again when a buyer opens the link, so the amount a buyer pays can differ. Absent on ad-hoc line items, variant_ids lines, and when the catalog object no longer exists. |
| `suggested_unit_price_money_options` | Optional | Array of [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Unit prices offered as one-tap choices when the buyer sets the price. `suggested_unit_price_money_options`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributesInput.md#paymentlinklineitembundlepreviousattributesinputsuggested_unit_price_money_options). |
| `tax` | Optional | [OrderLineItemTaxPreviousAttributesInput](../models/OrderLineItemTaxPreviousAttributesInput.md#orderlineitemtaxpreviousattributesinput) or null | Tax settings for an ad hoc line item. Catalog lines use the catalog's. |
| `type` | Optional | (string or null) | How the line item is defined. Values: `"variant"`. `type`: [declared alternatives](../models/PaymentLinkLineItemVariantPreviousAttributesInput.md#paymentlinklineitemvariantpreviousattributesinputtype). |
| `unit_price_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Price of one unit of a `custom_fixed` line item. |
| `variant_id` | Optional | string or null | ID of the catalog variant a `variant` line sells. `variant_id`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributesInput.md#paymentlinklineitembundlepreviousattributesinputvariant_id). |
| `variant_ids` | Optional | Array of string or null | Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active, sellable variants of one product in one currency. Available only on standard payment links. Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. `variant_ids`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributesInput.md#paymentlinklineitembundlepreviousattributesinputvariant_ids). |

### PaymentLinkLineItemVariantPreviousAttributesInput variant 1, 2: `type` = `"variant"`

anyOf variant 1; anyOf variant 2.

No additional constraints.

### PaymentLinkLineItemVariantPreviousAttributesInput.allow_quantity_adjustment

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributesInput.allow_quantity_adjustment](../models/PaymentLinkLineItemBundlePreviousAttributesInput.md#paymentlinklineitembundlepreviousattributesinputallow_quantity_adjustment).

### PaymentLinkLineItemVariantPreviousAttributesInput.allow_unit_price_adjustment

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributesInput.allow_unit_price_adjustment](../models/PaymentLinkLineItemBundlePreviousAttributesInput.md#paymentlinklineitembundlepreviousattributesinputallow_unit_price_adjustment).

### PaymentLinkLineItemVariantPreviousAttributesInput.bundle_id

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributesInput.bundle_id](../models/PaymentLinkLineItemBundlePreviousAttributesInput.md#paymentlinklineitembundlepreviousattributesinputbundle_id).

### PaymentLinkLineItemVariantPreviousAttributesInput.default_variant_id

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributesInput.default_variant_id](../models/PaymentLinkLineItemBundlePreviousAttributesInput.md#paymentlinklineitembundlepreviousattributesinputdefault_variant_id).

### PaymentLinkLineItemVariantPreviousAttributesInput.description

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributesInput.description](../models/PaymentLinkLineItemBundlePreviousAttributesInput.md#paymentlinklineitembundlepreviousattributesinputdescription).

### PaymentLinkLineItemVariantPreviousAttributesInput.is_catalog_item_unavailable

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributesInput.is_catalog_item_unavailable](../models/PaymentLinkLineItemBundlePreviousAttributesInput.md#paymentlinklineitembundlepreviousattributesinputis_catalog_item_unavailable).

### PaymentLinkLineItemVariantPreviousAttributesInput.key

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributesInput.key](../models/PaymentLinkLineItemBundlePreviousAttributesInput.md#paymentlinklineitembundlepreviousattributesinputkey).

### PaymentLinkLineItemVariantPreviousAttributesInput.max_quantity

Declared alternatives: [BundleComponentPreviousAttributesInput.quantity](../models/BundleComponentPreviousAttributesInput.md#bundlecomponentpreviousattributesinputquantity).

### PaymentLinkLineItemVariantPreviousAttributesInput.min_quantity

Declared alternatives: [BundleComponentPreviousAttributesInput.quantity](../models/BundleComponentPreviousAttributesInput.md#bundlecomponentpreviousattributesinputquantity).

### PaymentLinkLineItemVariantPreviousAttributesInput.name

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributesInput.name](../models/PaymentLinkLineItemBundlePreviousAttributesInput.md#paymentlinklineitembundlepreviousattributesinputname).

### PaymentLinkLineItemVariantPreviousAttributesInput.payment_link_line_item_id

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributesInput.payment_link_line_item_id](../models/PaymentLinkLineItemBundlePreviousAttributesInput.md#paymentlinklineitembundlepreviousattributesinputpayment_link_line_item_id).

### PaymentLinkLineItemVariantPreviousAttributesInput.product_id

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributesInput.product_id](../models/PaymentLinkLineItemBundlePreviousAttributesInput.md#paymentlinklineitembundlepreviousattributesinputproduct_id).

### PaymentLinkLineItemVariantPreviousAttributesInput.product_type

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributesInput.product_type](../models/PaymentLinkLineItemBundlePreviousAttributesInput.md#paymentlinklineitembundlepreviousattributesinputproduct_type).

### PaymentLinkLineItemVariantPreviousAttributesInput.quantity

Declared alternatives: [BundleComponentPreviousAttributesInput.quantity](../models/BundleComponentPreviousAttributesInput.md#bundlecomponentpreviousattributesinputquantity).

### PaymentLinkLineItemVariantPreviousAttributesInput.resolved_name

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributesInput.resolved_name](../models/PaymentLinkLineItemBundlePreviousAttributesInput.md#paymentlinklineitembundlepreviousattributesinputresolved_name).

### PaymentLinkLineItemVariantPreviousAttributesInput.suggested_unit_price_money_options

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributesInput.suggested_unit_price_money_options](../models/PaymentLinkLineItemBundlePreviousAttributesInput.md#paymentlinklineitembundlepreviousattributesinputsuggested_unit_price_money_options).

### PaymentLinkLineItemVariantPreviousAttributesInput.type

### PaymentLinkLineItemVariantPreviousAttributesInput.type variant 1

anyOf group 1 variant 1: How the line item is defined..

- Value shape: string. How the line item is defined. Values: `"variant"`.

### PaymentLinkLineItemVariantPreviousAttributesInput.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. How the line item is defined. 

### PaymentLinkLineItemVariantPreviousAttributesInput.type variant 3

anyOf group 2 variant 1.

- Value shape: string. How the line item is defined. Values: `"variant"`.

### PaymentLinkLineItemVariantPreviousAttributesInput.variant_id

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributesInput.variant_id](../models/PaymentLinkLineItemBundlePreviousAttributesInput.md#paymentlinklineitembundlepreviousattributesinputvariant_id).

### PaymentLinkLineItemVariantPreviousAttributesInput.variant_ids

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributesInput.variant_ids](../models/PaymentLinkLineItemBundlePreviousAttributesInput.md#paymentlinklineitembundlepreviousattributesinputvariant_ids).

