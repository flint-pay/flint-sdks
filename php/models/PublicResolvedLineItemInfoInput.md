[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PublicResolvedLineItemInfoInput

Current catalog details for a payment link line item, such as its name, price, image, available modifiers, and bundle components.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_modifiers` | Optional | Array of [PublicResolvedModifierGroupInput](../models/PublicResolvedModifierGroupInput.md#publicresolvedmodifiergroupinput) | Modifier groups the buyer can choose from for this item. |
| `available_variants` | Optional | Array of [PaymentLinkAvailableVariantInput](../models/PaymentLinkAvailableVariantInput.md#paymentlinkavailablevariantinput) | Listed variants that can currently be sold in the line currency, in variant_ids order. Inactive, archived, unsellable, and other-currency variants are omitted. Each variant includes its advisory sold-out state and its own modifiers. Present only on variant_ids lines. |
| `bundle_components` | Optional | Array of [PublicResolvedBundleComponentInput](../models/PublicResolvedBundleComponentInput.md#publicresolvedbundlecomponentinput) | The components of the bundle. Present for a bundle line item. |
| `bundle_id` | Optional | string | ID of the bundle this line item sells. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. |
| `catalog_object_type` | Optional | string | What the line item sells. Values: `"variant"`, `"bundle"`. |
| `image` | Optional | [ImageInput](../models/ImageInput.md#imageinput) | Image of the variant or bundle. An image with its URL, size, and alt text. |
| `is_inventory_tracked` | Optional | boolean | Whether Flint tracks stock for the item. |
| `is_sold_out` | Required | boolean | True when the fixed variant or bundle components cannot be bought at the line minimum quantity from the link inventory_routing_source. The minimum is min_quantity when quantity adjustment is enabled, otherwise quantity. For variant choice lines, true only when every available_variants entry is sold out. Always false for untracked and ad hoc lines. Exposes no stock counts and reserves no stock. |
| `key` | Required | string | Key of the payment link line item this entry describes. |
| `product_id` | Optional | string | ID of the product the variant belongs to. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `product_options` | Optional | Array of [PaymentLinkProductOptionInput](../models/PaymentLinkProductOptionInput.md#paymentlinkproductoptioninput) | Active product options for a variant_ids line, in option position order. Values include only those used by available_variants and retain value position order. Empty when the product has no options; omitted on fixed variant and bundle lines. |
| `quantity_price_breaks` | Required | Array of [QuantityPriceBreakInput](../models/QuantityPriceBreakInput.md#quantitypricebreakinput) | Default quantity breaks for a fixed variant. Empty for bundles, variant choice lines, and ad hoc lines. Each offered variant on a variant choice line has its own schedule in available_variants. |
| `resolved_description` | Optional | string | Current catalog description of the variant or bundle, as of this read. |
| `resolved_name` | Optional | string | Current catalog name of the variant or bundle, as of this read. |
| `resolved_unit_price_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Current catalog unit price of the variant or bundle, as of this read. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `selected_options` | Optional | Array of [SelectedProductOptionInput](../models/SelectedProductOptionInput.md#selectedproductoptioninput) | The product options the variant selects, such as size or color. |
| `variant_id` | Optional | string | ID of the variant this line item sells. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

