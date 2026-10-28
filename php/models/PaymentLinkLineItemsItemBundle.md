[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkLineItemsItemBundle

A line item on a payment link, sold from a catalog variant, a bundle, or an ad hoc name and price, with quantity and price rules.

The `bundle` variant of `PaymentLinkLineItem`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allow_quantity_adjustment` | Optional | boolean |  |
| `allow_unit_price_adjustment` | Optional | boolean |  |
| `bundle_id` | Required | string |  |
| `default_variant_id` | Optional | string | Variant selected when the page opens and used at resolve when the buyer omits a selection. Must be in variant_ids. Omit it to require a buyer selection. pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `description` | Optional | string |  |
| `is_catalog_item_unavailable` | Required | boolean | True when the referenced variant or bundle cannot be sold, or no listed variant in variant_ids can be sold in the line currency. Always false on ad hoc line items. |
| `key` | Optional | string | Keys the resolve override maps. Stable line item key used in checkout overrides. Must not have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when omitted, skipping numbers already used by explicit keys; retained for an existing line item when omitted on update. |
| `max_quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `max_unit_price_money` | Optional | [PaymentLinkLineItemsItemBundleMaxUnitPriceMoney](../models/PaymentLinkLineItemsItemBundleMaxUnitPriceMoney.md#paymentlinklineitemsitembundlemaxunitpricemoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `min_quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `min_unit_price_money` | Optional | [PaymentLinkLineItemsItemBundleMinUnitPriceMoney](../models/PaymentLinkLineItemsItemBundleMinUnitPriceMoney.md#paymentlinklineitemsitembundleminunitpricemoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `name` | Optional | string |  |
| `payment_link_line_item_id` | Required | string |  |
| `product_id` | Optional | string | Parent catalog context only. The product that the variants in variant_ids belong to. Present only on buyer choice lines; refused on input. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `resolved_name` | Optional | string | Current catalog name of the referenced variant or bundle, or the product name for variant_ids lines. A variant reads as the product name, plus the variant name when the variant is a named option combination. This is the catalog value at read time, not a stored snapshot: checkout resolves it again when a buyer opens the link. Absent on ad-hoc line items and when the catalog object no longer exists. |
| `resolved_price_range` | Optional | [PaymentLinkLineItemsItemBundleResolvedPriceRange](../models/PaymentLinkLineItemsItemBundleResolvedPriceRange.md#paymentlinklineitemsitembundleresolvedpricerange) | Current lowest and highest catalog unit prices among listed variants that can be sold in the line currency. Computed at read time, not stored. Omitted when no listed variant can be sold. The lowest and highest unit prices across a product's variants. `resolved_price_range`: [field definitions](../models/PaymentLinkLineItemsItemBundle.md#paymentlinklineitemsitembundleresolved_price_range). |
| `resolved_unit_price_money` | Optional | [PaymentLinkLineItemsItemBundleResolvedUnitPriceMoney](../models/PaymentLinkLineItemsItemBundleResolvedUnitPriceMoney.md#paymentlinklineitemsitembundleresolvedunitpricemoney) | Current catalog unit price of the referenced variant or bundle. This is the catalog value at read time, not a stored snapshot: checkout resolves the price again when a buyer opens the link, so the amount a buyer pays can differ. Absent on ad-hoc line items, variant_ids lines, and when the catalog object no longer exists. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `suggested_unit_price_money_options` | Optional | Array of ([PaymentLinkLineItemsItemBundleSuggestedUnitPriceMoneyOptionsItem](../models/PaymentLinkLineItemsItemBundleSuggestedUnitPriceMoneyOptionsItem.md#paymentlinklineitemsitembundlesuggestedunitpricemoneyoptionsitem) and [MoneyValue](../models/MoneyValue.md#moneyvalue)) |  |
| `tax` | Optional | [PaymentLinkLineItemsItemBundleTax](../models/PaymentLinkLineItemsItemBundleTax.md#paymentlinklineitemsitembundletax) | A line item's tax category and whether it is taxable. |
| `type` | Required | string | Values: `"bundle"`. |
| `unit_price_money` | Optional | [PaymentLinkLineItemsItemBundleUnitPriceMoney](../models/PaymentLinkLineItemsItemBundleUnitPriceMoney.md#paymentlinklineitemsitembundleunitpricemoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `variant_id` | Optional | string |  |
| `variant_ids` | Optional | Array of string | Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active, sellable variants of one product in one currency. Available only on standard payment links. Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: `1`. maxItems: `100`. uniqueItems: `true`. Items: pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. |

### PaymentLinkLineItemsItemBundle.resolved_price_range

Current lowest and highest catalog unit prices among listed variants that can be sold in the line currency. Computed at read time, not stored. Omitted when no listed variant can be sold. The lowest and highest unit prices across a product's variants.

Field definitions: [shared fields](ProductPriceRange.md#productpricerange).

