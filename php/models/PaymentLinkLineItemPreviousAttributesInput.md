[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkLineItemPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allow_quantity_adjustment` | Optional | boolean or null | Whether the buyer can change the quantity in checkout. `allow_quantity_adjustment`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributesInput.md#paymentlinklineitembundlepreviousattributesinputallow_quantity_adjustment). |
| `allow_unit_price_adjustment` | Optional | Varies by condition | Whether the buyer sets the unit price. Only `custom_variable` lines allow it. `allow_unit_price_adjustment`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributesInput.md#paymentlinklineitembundlepreviousattributesinputallow_unit_price_adjustment), [declared alternatives](../models/PaymentLinkLineItemCustomFixedPreviousAttributesInput.md#paymentlinklineitemcustomfixedpreviousattributesinputallow_unit_price_adjustment), [declared alternatives](../models/PaymentLinkLineItemCustomVariablePreviousAttributesInput.md#paymentlinklineitemcustomvariablepreviousattributesinputallow_unit_price_adjustment). |
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
| `product_type` | Optional | string or null | Classification configured on a custom line for ACH debit. Null when unclassified or catalog-backed; catalog lines get their product classification when checkout starts. Values: `"physical"`, `"service"`, `"fee"`, `"digital"`, `"gift_card"`, `null`. `product_type`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributesInput.md#paymentlinklineitembundlepreviousattributesinputproduct_type). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/BundleComponentPreviousAttributesInput.md#bundlecomponentpreviousattributesinputquantity). |
| `resolved_name` | Optional | string or null | Current catalog name of the referenced variant or bundle, or the product name for variant_ids lines. A variant reads as the product name, plus the variant name when the variant is a named option combination. This is the catalog value at read time, not a stored snapshot: checkout resolves it again when a buyer opens the link. Absent on ad-hoc line items and when the catalog object no longer exists. `resolved_name`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributesInput.md#paymentlinklineitembundlepreviousattributesinputresolved_name). |
| `resolved_price_range` | Optional | [ProductPriceRangePreviousAttributesInput](../models/ProductPriceRangePreviousAttributesInput.md#productpricerangepreviousattributesinput) or null | Current lowest and highest catalog unit prices among listed variants that can be sold in the line currency. Computed at read time, not stored. Omitted when no listed variant can be sold. |
| `resolved_unit_price_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Current catalog unit price of the referenced variant or bundle. For a fixed variant this is the base price that applies below the first quantity price break. This is the catalog value at read time, not a stored snapshot: checkout resolves the price again when a buyer opens the link, so the amount a buyer pays can differ. Absent on ad-hoc line items, variant_ids lines, and when the catalog object no longer exists. |
| `suggested_unit_price_money_options` | Optional | Array of [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Unit prices offered as one-tap choices when the buyer sets the price. `suggested_unit_price_money_options`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributesInput.md#paymentlinklineitembundlepreviousattributesinputsuggested_unit_price_money_options). |
| `tax` | Optional | [OrderLineItemTaxPreviousAttributesInput](../models/OrderLineItemTaxPreviousAttributesInput.md#orderlineitemtaxpreviousattributesinput) or null | Tax settings for an ad hoc line item. Catalog lines use the catalog's. |
| `type` | Optional | (string or null) | How the line item is defined. Values: `"variant"`, `"bundle"`, `"custom_fixed"`, `"custom_variable"`. `type`: [declared alternatives](../models/PaymentLinkLineItemPreviousAttributesInput.md#paymentlinklineitempreviousattributesinput-variant-1type), [declared alternatives](../models/PaymentLinkLineItemPreviousAttributesInput.md#paymentlinklineitempreviousattributesinput-variant-3type), [declared alternatives](../models/PaymentLinkLineItemPreviousAttributesInput.md#paymentlinklineitempreviousattributesinput-variant-4type), [declared alternatives](../models/PaymentLinkLineItemPreviousAttributesInput.md#paymentlinklineitempreviousattributesinput-variant-5type). |
| `unit_price_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Price of one unit of a `custom_fixed` line item. |
| `variant_id` | Optional | string or null | ID of the catalog variant a `variant` line sells. `variant_id`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributesInput.md#paymentlinklineitembundlepreviousattributesinputvariant_id). |
| `variant_ids` | Optional | Array of string or null | Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active, sellable variants of one product in one currency. Available only on standard payment links. Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. `variant_ids`: [declared alternatives](../models/PaymentLinkLineItemBundlePreviousAttributesInput.md#paymentlinklineitembundlepreviousattributesinputvariant_ids). |

### PaymentLinkLineItemPreviousAttributesInput variant 1, 2: `type` = `"variant"`

anyOf PaymentLinkLineItemVariantPreviousAttributes; anyOf variant 1; anyOf PaymentLinkLineItemVariantPreviousAttributes; anyOf variant 2.

- Constraints for `allow_unit_price_adjustment`: boolean or null.
- Constraints for `type`: Values: `"variant"`.

### PaymentLinkLineItemPreviousAttributesInput variant 3: `type` = `"bundle"`

anyOf PaymentLinkLineItemBundlePreviousAttributes.

- Constraints for `allow_unit_price_adjustment`: boolean or null.
- Constraints for `type`: Values: `"bundle"`.

### PaymentLinkLineItemPreviousAttributesInput variant 4: `allow_unit_price_adjustment` = `false`, `type` = `"custom_fixed"`

anyOf PaymentLinkLineItemCustomFixedPreviousAttributes.

- Constraints for `allow_unit_price_adjustment`: (boolean or null). Values: `false`.
- Constraints for `type`: Values: `"custom_fixed"`.

### PaymentLinkLineItemPreviousAttributesInput variant 5: `allow_unit_price_adjustment` = `true`, `type` = `"custom_variable"`

anyOf PaymentLinkLineItemCustomVariablePreviousAttributes.

- Constraints for `allow_unit_price_adjustment`: (boolean or null). Values: `true`.
- Constraints for `type`: Values: `"custom_variable"`.

### PaymentLinkLineItemPreviousAttributesInput.allow_quantity_adjustment

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributesInput.allow_quantity_adjustment](../models/PaymentLinkLineItemBundlePreviousAttributesInput.md#paymentlinklineitembundlepreviousattributesinputallow_quantity_adjustment).

### PaymentLinkLineItemPreviousAttributesInput variant 1.allow_unit_price_adjustment

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributesInput.allow_unit_price_adjustment](../models/PaymentLinkLineItemBundlePreviousAttributesInput.md#paymentlinklineitembundlepreviousattributesinputallow_unit_price_adjustment).

### PaymentLinkLineItemPreviousAttributesInput.bundle_id

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributesInput.bundle_id](../models/PaymentLinkLineItemBundlePreviousAttributesInput.md#paymentlinklineitembundlepreviousattributesinputbundle_id).

### PaymentLinkLineItemPreviousAttributesInput.default_variant_id

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributesInput.default_variant_id](../models/PaymentLinkLineItemBundlePreviousAttributesInput.md#paymentlinklineitembundlepreviousattributesinputdefault_variant_id).

### PaymentLinkLineItemPreviousAttributesInput.description

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributesInput.description](../models/PaymentLinkLineItemBundlePreviousAttributesInput.md#paymentlinklineitembundlepreviousattributesinputdescription).

### PaymentLinkLineItemPreviousAttributesInput.is_catalog_item_unavailable

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributesInput.is_catalog_item_unavailable](../models/PaymentLinkLineItemBundlePreviousAttributesInput.md#paymentlinklineitembundlepreviousattributesinputis_catalog_item_unavailable).

### PaymentLinkLineItemPreviousAttributesInput.key

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributesInput.key](../models/PaymentLinkLineItemBundlePreviousAttributesInput.md#paymentlinklineitembundlepreviousattributesinputkey).

### PaymentLinkLineItemPreviousAttributesInput.max_quantity

Declared alternatives: [BundleComponentPreviousAttributesInput.quantity](../models/BundleComponentPreviousAttributesInput.md#bundlecomponentpreviousattributesinputquantity).

### PaymentLinkLineItemPreviousAttributesInput.min_quantity

Declared alternatives: [BundleComponentPreviousAttributesInput.quantity](../models/BundleComponentPreviousAttributesInput.md#bundlecomponentpreviousattributesinputquantity).

### PaymentLinkLineItemPreviousAttributesInput.name

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributesInput.name](../models/PaymentLinkLineItemBundlePreviousAttributesInput.md#paymentlinklineitembundlepreviousattributesinputname).

### PaymentLinkLineItemPreviousAttributesInput.payment_link_line_item_id

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributesInput.payment_link_line_item_id](../models/PaymentLinkLineItemBundlePreviousAttributesInput.md#paymentlinklineitembundlepreviousattributesinputpayment_link_line_item_id).

### PaymentLinkLineItemPreviousAttributesInput.product_id

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributesInput.product_id](../models/PaymentLinkLineItemBundlePreviousAttributesInput.md#paymentlinklineitembundlepreviousattributesinputproduct_id).

### PaymentLinkLineItemPreviousAttributesInput.product_type

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributesInput.product_type](../models/PaymentLinkLineItemBundlePreviousAttributesInput.md#paymentlinklineitembundlepreviousattributesinputproduct_type).

### PaymentLinkLineItemPreviousAttributesInput.quantity

Declared alternatives: [BundleComponentPreviousAttributesInput.quantity](../models/BundleComponentPreviousAttributesInput.md#bundlecomponentpreviousattributesinputquantity).

### PaymentLinkLineItemPreviousAttributesInput.resolved_name

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributesInput.resolved_name](../models/PaymentLinkLineItemBundlePreviousAttributesInput.md#paymentlinklineitembundlepreviousattributesinputresolved_name).

### PaymentLinkLineItemPreviousAttributesInput.suggested_unit_price_money_options

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributesInput.suggested_unit_price_money_options](../models/PaymentLinkLineItemBundlePreviousAttributesInput.md#paymentlinklineitembundlepreviousattributesinputsuggested_unit_price_money_options).

### PaymentLinkLineItemPreviousAttributesInput variant 1.type

### PaymentLinkLineItemPreviousAttributesInput variant 1.type variant 1

anyOf group 1 variant 1: How the line item is defined..

- Value shape: string. How the line item is defined. Values: `"variant"`, `"bundle"`, `"custom_fixed"`, `"custom_variable"`.

### PaymentLinkLineItemPreviousAttributesInput variant 1.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the line item is defined. 

### PaymentLinkLineItemPreviousAttributesInput variant 1.type variant 3

anyOf group 2 variant 1: How the line item is defined..

- Value shape: string. How the line item is defined. Values: `"variant"`.

### PaymentLinkLineItemPreviousAttributesInput variant 1.type variant 5

anyOf group 3 variant 1.

- Value shape: string. How the line item is defined. Values: `"variant"`.

### PaymentLinkLineItemPreviousAttributesInput.variant_id

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributesInput.variant_id](../models/PaymentLinkLineItemBundlePreviousAttributesInput.md#paymentlinklineitembundlepreviousattributesinputvariant_id).

### PaymentLinkLineItemPreviousAttributesInput.variant_ids

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributesInput.variant_ids](../models/PaymentLinkLineItemBundlePreviousAttributesInput.md#paymentlinklineitembundlepreviousattributesinputvariant_ids).

### PaymentLinkLineItemPreviousAttributesInput variant 2.allow_unit_price_adjustment

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributesInput.allow_unit_price_adjustment](../models/PaymentLinkLineItemBundlePreviousAttributesInput.md#paymentlinklineitembundlepreviousattributesinputallow_unit_price_adjustment).

### PaymentLinkLineItemPreviousAttributesInput variant 2.type

Declared alternatives: [PaymentLinkLineItemPreviousAttributesInput variant 1.type](../models/PaymentLinkLineItemPreviousAttributesInput.md#paymentlinklineitempreviousattributesinput-variant-1type).

### PaymentLinkLineItemPreviousAttributesInput variant 3.allow_unit_price_adjustment

Declared alternatives: [PaymentLinkLineItemBundlePreviousAttributesInput.allow_unit_price_adjustment](../models/PaymentLinkLineItemBundlePreviousAttributesInput.md#paymentlinklineitembundlepreviousattributesinputallow_unit_price_adjustment).

### PaymentLinkLineItemPreviousAttributesInput variant 3.type

### PaymentLinkLineItemPreviousAttributesInput variant 3.type variant 1

anyOf group 1 variant 1: How the line item is defined..

- Value shape: string. How the line item is defined. Values: `"variant"`, `"bundle"`, `"custom_fixed"`, `"custom_variable"`.

### PaymentLinkLineItemPreviousAttributesInput variant 3.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the line item is defined. 

### PaymentLinkLineItemPreviousAttributesInput variant 3.type variant 3

anyOf group 2 variant 1: How the line item is defined..

- Value shape: string. How the line item is defined. Values: `"bundle"`.

### PaymentLinkLineItemPreviousAttributesInput variant 3.type variant 5

anyOf group 3 variant 1.

- Value shape: string. How the line item is defined. Values: `"bundle"`.

### PaymentLinkLineItemPreviousAttributesInput variant 4.allow_unit_price_adjustment

Declared alternatives: [PaymentLinkLineItemCustomFixedPreviousAttributesInput.allow_unit_price_adjustment](../models/PaymentLinkLineItemCustomFixedPreviousAttributesInput.md#paymentlinklineitemcustomfixedpreviousattributesinputallow_unit_price_adjustment).

### PaymentLinkLineItemPreviousAttributesInput variant 4.type

### PaymentLinkLineItemPreviousAttributesInput variant 4.type variant 1

anyOf group 1 variant 1: How the line item is defined..

- Value shape: string. How the line item is defined. Values: `"variant"`, `"bundle"`, `"custom_fixed"`, `"custom_variable"`.

### PaymentLinkLineItemPreviousAttributesInput variant 4.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the line item is defined. 

### PaymentLinkLineItemPreviousAttributesInput variant 4.type variant 3

anyOf group 2 variant 1: How the line item is defined..

- Value shape: string. How the line item is defined. Values: `"custom_fixed"`.

### PaymentLinkLineItemPreviousAttributesInput variant 4.type variant 5

anyOf group 3 variant 1.

- Value shape: string. How the line item is defined. Values: `"custom_fixed"`.

### PaymentLinkLineItemPreviousAttributesInput variant 5.allow_unit_price_adjustment

Declared alternatives: [PaymentLinkLineItemCustomVariablePreviousAttributesInput.allow_unit_price_adjustment](../models/PaymentLinkLineItemCustomVariablePreviousAttributesInput.md#paymentlinklineitemcustomvariablepreviousattributesinputallow_unit_price_adjustment).

### PaymentLinkLineItemPreviousAttributesInput variant 5.type

### PaymentLinkLineItemPreviousAttributesInput variant 5.type variant 1

anyOf group 1 variant 1: How the line item is defined..

- Value shape: string. How the line item is defined. Values: `"variant"`, `"bundle"`, `"custom_fixed"`, `"custom_variable"`.

### PaymentLinkLineItemPreviousAttributesInput variant 5.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the line item is defined. 

### PaymentLinkLineItemPreviousAttributesInput variant 5.type variant 3

anyOf group 2 variant 1: How the line item is defined..

- Value shape: string. How the line item is defined. Values: `"custom_variable"`.

### PaymentLinkLineItemPreviousAttributesInput variant 5.type variant 5

anyOf group 3 variant 1.

- Value shape: string. How the line item is defined. Values: `"custom_variable"`.

