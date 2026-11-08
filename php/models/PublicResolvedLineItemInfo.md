[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PublicResolvedLineItemInfo

Current catalog details for a payment link line item, such as its name, price, image, available modifiers, and bundle components.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_modifiers` | Optional | Array of [PublicResolvedModifierGroup](../models/PublicResolvedModifierGroup.md#publicresolvedmodifiergroup) | Modifier groups the buyer can choose from for this item. `available_modifiers[]`: [field definitions](../models/PublicPaymentLinkResponse.md#publicpaymentlinkresponsedataresolved_line_itemsavailable_modifiers). |
| `available_variants` | Optional | Array of [PaymentLinkAvailableVariant](../models/PaymentLinkAvailableVariant.md#paymentlinkavailablevariant) | Listed variants that can currently be sold in the line currency, in variant_ids order. Inactive, archived, unsellable, and other-currency variants are omitted. Each variant includes its advisory sold-out state and its own modifiers. Present only on variant_ids lines. `available_variants[]`: [field definitions](../models/PublicPaymentLinkResponse.md#publicpaymentlinkresponsedataresolved_line_itemsavailable_variants). |
| `bundle_components` | Optional | Array of [PublicResolvedBundleComponent](../models/PublicResolvedBundleComponent.md#publicresolvedbundlecomponent) | The components of the bundle. Present for a bundle line item. `bundle_components[]`: [field definitions](../models/PublicPaymentLinkResponse.md#publicpaymentlinkresponsedataresolved_line_itemsbundle_components). |
| `bundle_id` | Optional | string | ID of the bundle this line item sells. |
| `catalog_object_type` | Optional | string | What the line item sells. Values: `"variant"`, `"bundle"`. |
| `image` | Optional | [Image](../models/Image.md#image) | Image of the variant or bundle. An image with its URL, size, and alt text. |
| `is_inventory_tracked` | Optional | boolean | Whether Flint tracks stock for the item. |
| `is_sold_out` | Required | boolean | True when the fixed variant or bundle components cannot be bought at the line minimum quantity from the link inventory_routing_source. The minimum is min_quantity when quantity adjustment is enabled, otherwise quantity. For variant choice lines, true only when every available_variants entry is sold out. Always false for untracked and ad hoc lines. Exposes no stock counts and reserves no stock. |
| `key` | Required | string | Key of the payment link line item this entry describes. |
| `product_id` | Optional | string | ID of the product the variant belongs to. |
| `product_options` | Optional | Array of [PaymentLinkProductOption](../models/PaymentLinkProductOption.md#paymentlinkproductoption) | Active product options for a variant_ids line, in option position order. Values include only those used by available_variants and retain value position order. Empty when the product has no options; omitted on fixed variant and bundle lines. `product_options[]`: [field definitions](../models/PublicPaymentLinkResponse.md#publicpaymentlinkresponsedataresolved_line_itemsproduct_options). |
| `quantity_price_breaks` | Required | Array of [QuantityPriceBreak](../models/QuantityPriceBreak.md#quantitypricebreak) | Default quantity breaks for a fixed variant. Empty for bundles, variant choice lines, and ad hoc lines. Each offered variant on a variant choice line has its own schedule in available_variants. |
| `resolved_description` | Optional | string | Current catalog description of the variant or bundle, as of this read. |
| `resolved_name` | Optional | string | Current catalog name of the variant or bundle, as of this read. |
| `resolved_unit_price_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Current catalog unit price of the variant or bundle, as of this read. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `selected_options` | Optional | Array of [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption) | The product options the variant selects, such as size or color. `selected_options[]`: [field definitions](../models/OrderResponse.md#orderresponsedataline_itemsbundle_componentsvariantselected_options). |
| `variant_id` | Optional | string | ID of the variant this line item sells. |

### PublicResolvedLineItemInfo.available_modifiers[]

Field definitions: [PublicPaymentLinkResponse.data.resolved_line_items[].available_modifiers[]](../models/PublicPaymentLinkResponse.md#publicpaymentlinkresponsedataresolved_line_itemsavailable_modifiers).

### PublicResolvedLineItemInfo.available_variants[]

Field definitions: [PublicPaymentLinkResponse.data.resolved_line_items[].available_variants[]](../models/PublicPaymentLinkResponse.md#publicpaymentlinkresponsedataresolved_line_itemsavailable_variants).

### PublicResolvedLineItemInfo.bundle_components[]

Field definitions: [PublicPaymentLinkResponse.data.resolved_line_items[].bundle_components[]](../models/PublicPaymentLinkResponse.md#publicpaymentlinkresponsedataresolved_line_itemsbundle_components).

### PublicResolvedLineItemInfo.product_options[]

Field definitions: [PublicPaymentLinkResponse.data.resolved_line_items[].product_options[]](../models/PublicPaymentLinkResponse.md#publicpaymentlinkresponsedataresolved_line_itemsproduct_options).

### PublicResolvedLineItemInfo.selected_options[]

Field definitions: [OrderResponse.data.line_items[].bundle_components[].variant.selected_options[]](../models/OrderResponse.md#orderresponsedataline_itemsbundle_componentsvariantselected_options).

