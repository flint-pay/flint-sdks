[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PublicResolvedBundleVariantSummary

A summary of a bundle component's variant, with its name, SKU, selected options, and whether it is available for sale.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `is_available_for_sale` | Required | boolean | Whether the variant can be sold now. |
| `name` | Optional | string | Name of the variant. |
| `product_id` | Required | string | Identifier of the product this resolved bundle component variant belongs to. |
| `selected_options` | Optional | Array of [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption) | The product options the variant selects, such as size or color. `selected_options[]`: [field definitions](../models/OrderResponse.md#orderresponsedataline_itemsbundle_componentsvariantselected_options). |
| `sku` | Optional | string | SKU of the variant. |
| `variant_id` | Required | string | ID of the variant. |

### PublicResolvedBundleVariantSummary.selected_options[]

Field definitions: [OrderResponse.data.line_items[].bundle_components[].variant.selected_options[]](../models/OrderResponse.md#orderresponsedataline_itemsbundle_componentsvariantselected_options).

