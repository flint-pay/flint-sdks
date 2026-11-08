[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PublicResolvedBundleVariantSummary

A summary of a bundle component's variant, with its name, SKU, selected options, and whether it is available for sale.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `is_available_for_sale` | Required | boolean | Whether the variant can be sold now. |
| `name` | Optional | string | Name of the variant. |
| `product_id` | Required | string | Identifier of the product this resolved bundle component variant belongs to. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `selected_options` | Optional | Array of [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption) | The product options the variant selects, such as size or color. |
| `sku` | Optional | string | SKU of the variant. |
| `variant_id` | Required | string | ID of the variant. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

