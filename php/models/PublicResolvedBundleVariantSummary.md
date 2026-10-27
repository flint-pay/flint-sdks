[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PublicResolvedBundleVariantSummary

A summary of a bundle component's variant, with its name, SKU, selected options, and whether it is available for sale.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_for_sale` | Required | boolean |  |
| `name` | Optional | string |  |
| `selected_options` | Optional | Array of [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption) |  |
| `sku` | Optional | string |  |
| `variant_id` | Required | string |  |

