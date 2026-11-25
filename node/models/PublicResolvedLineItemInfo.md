[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PublicResolvedLineItemInfo

Current catalog details for a payment link line item, such as its name, price, image, available modifiers, and bundle components.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_modifiers` | Optional | Array of [PublicResolvedModifierGroup](../models/PublicResolvedModifierGroup.md#publicresolvedmodifiergroup) | Modifier groups the buyer can choose from for this item. |
| `available_variants` | Optional | Array of [PublicCatalogVariant](../models/PublicCatalogVariant.md#publiccatalogvariant) | Listed variants that can currently be sold in the line currency, in variant_ids order. Inactive, archived, unsellable, and other-currency variants are omitted. Each variant includes its advisory sold-out state and its own modifiers. Present only on variant_ids lines. |
| `bundle_components` | Optional | Array of [PublicResolvedBundleComponent](../models/PublicResolvedBundleComponent.md#publicresolvedbundlecomponent) | The components of the bundle. Present for a bundle line item. |
| `bundle_id` | Optional | string | ID of the bundle this line item sells. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. |
| `catalog_object_type` | Optional | string | What the line item sells. Values: `"variant"`, `"bundle"`. |
| `compare_at_price_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Current catalog reference unit price for sale display. Null when no variant compare-at price is set. Does not affect the amount charged. `compare_at_price_money`: [declared alternatives](../models/PublicCatalogVariant.md#publiccatalogvariantcompare_at_price_money). |
| `image` | Optional | [Image](../models/Image.md#image) | Image of the variant or bundle. An image with its URL, size, and alt text. |
| `is_inventory_tracked` | Optional | boolean | Whether Flint tracks stock for the item. |
| `is_sold_out` | Required | boolean | True when the link inventory_routing_source cannot supply the fixed variant or bundle components at the line minimum quantity. Offered delivery methods affect availability for items that need a delivery quote. If no quote is needed, stock alone decides. Separate bundle components can use different fulfillment methods. Shipping can use remaining backorder capacity for a fixed variant. Pickup requires physical stock. The minimum is min_quantity when quantity adjustment is enabled, otherwise quantity. For variant choice lines, true only when every available_variants entry is sold out. Always false for untracked and ad hoc lines. Exposes no stock counts and reserves no stock. |
| `key` | Required | string | Key of the payment link line item this entry describes. |
| `product_id` | Optional | string | ID of the product the variant belongs to. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `product_options` | Optional | Array of [PublicCatalogOption](../models/PublicCatalogOption.md#publiccatalogoption) | Active product options for a variant_ids line, in option position order. Values include only those used by available_variants and retain value position order. Empty when the product has no options; omitted on fixed variant and bundle lines. |
| `quantity_price_breaks` | Required | Array of [QuantityPriceBreak](../models/QuantityPriceBreak.md#quantitypricebreak) | Default quantity breaks for a fixed variant. Empty for bundles, variant choice lines, and ad hoc lines. Each offered variant on a variant choice line has its own schedule in available_variants. `quantity_price_breaks[]`: [field definitions](../models/PriceListPrice.md#pricelistpricequantity_price_breaks). |
| `resolved_description` | Optional | string | Current catalog description of the variant or bundle, as of this read. |
| `resolved_name` | Optional | string | Current catalog name of the variant or bundle, as of this read. |
| `resolved_unit_price_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Current catalog unit price of the variant or bundle, as of this read. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `resolved_unit_price_money`: [field definitions](../models/PublicResolvedLineItemInfo.md#publicresolvedlineiteminforesolved_unit_price_money). |
| `selected_options` | Optional | Array of [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption) | The product options the variant selects, such as size or color. |
| `variant_id` | Optional | string | ID of the variant this line item sells. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

### PublicResolvedLineItemInfo.compare_at_price_money

Declared alternatives: [PublicCatalogVariant.compare_at_price_money](../models/PublicCatalogVariant.md#publiccatalogvariantcompare_at_price_money).

### PublicResolvedLineItemInfo.quantity_price_breaks[]

Field definitions: [PriceListPrice.quantity_price_breaks[]](../models/PriceListPrice.md#pricelistpricequantity_price_breaks).

### PublicResolvedLineItemInfo.resolved_unit_price_money

Current catalog unit price of the variant or bundle, as of this read. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

