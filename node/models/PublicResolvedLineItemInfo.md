[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PublicResolvedLineItemInfo

Current catalog details for a payment link line item, such as its name, price, image, available modifiers, and bundle components.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_modifiers` | Optional | Array of [PublicResolvedModifierGroup](../models/PublicResolvedModifierGroup.md#publicresolvedmodifiergroup) |  |
| `available_variants` | Optional | Array of [PaymentLinkAvailableVariant](../models/PaymentLinkAvailableVariant.md#paymentlinkavailablevariant) | Listed variants that can currently be sold in the line currency, in variant_ids order. Inactive, archived, unsellable, and other-currency variants are omitted. Each variant includes its advisory sold-out state and its own modifiers. Present only on variant_ids lines. |
| `bundle_components` | Optional | Array of [PublicResolvedBundleComponent](../models/PublicResolvedBundleComponent.md#publicresolvedbundlecomponent) |  |
| `bundle_id` | Optional | string |  |
| `catalog_object_type` | Optional | string | Values: `"variant"`, `"bundle"`. |
| `image` | Optional | [Image](../models/Image.md#image) | An image with its `url`, `width`, and `height`, and optional `alt` text. |
| `is_inventory_tracked` | Optional | boolean |  |
| `is_sold_out` | Required | boolean | True when the fixed variant or bundle components cannot be bought at the line minimum quantity from the link inventory_routing_source. The minimum is min_quantity when quantity adjustment is enabled, otherwise quantity. For variant choice lines, true only when every available_variants entry is sold out. Always false for untracked and ad hoc lines. Exposes no stock counts and reserves no stock. |
| `key` | Required | string |  |
| `product_id` | Optional | string |  |
| `product_options` | Optional | Array of [PaymentLinkProductOption](../models/PaymentLinkProductOption.md#paymentlinkproductoption) | Active product options for a variant_ids line, in option position order. Values include only those used by available_variants and retain value position order. Empty when the product has no options; omitted on fixed variant and bundle lines. |
| `resolved_description` | Optional | string |  |
| `resolved_name` | Optional | string |  |
| `resolved_unit_price_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `resolved_unit_price_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `selected_options` | Optional | Array of [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption) |  |
| `variant_id` | Optional | string |  |

### PublicResolvedLineItemInfo.resolved_unit_price_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

