[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PublicResolvedBundleComponent

One component of a bundle on a resolved payment link line item, with its variant and quantity.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `position` | Required | integer | Position of the component within the bundle. Format: `int32`. |
| `product_id` | Optional | string | ID of the product the component's variant belongs to. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `variant` | Optional | [BundleComponentVariantSummary](../models/BundleComponentVariantSummary.md#bundlecomponentvariantsummary) | Summary of the component's variant. A summary of a bundle component's variant, with its product name, variant name, SKU, selected options, and whether it is available for sale. `variant`: [field definitions](../models/PublicResolvedBundleComponent.md#publicresolvedbundlecomponentvariant). |
| `variant_id` | Required | string | ID of the component's variant. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

### PublicResolvedBundleComponent.variant

Summary of the component's variant. A summary of a bundle component's variant, with its product name, variant name, SKU, selected options, and whether it is available for sale.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `is_available_for_sale` | Required | boolean | Whether the variant can be sold now. |
| `name` | Optional | string | Name of the variant. |
| `product_id` | Required | string | Identifier of the product this resolved bundle component variant belongs to. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `product_name` | Optional | string | Name of the product the component’s variant belongs to. |
| `selected_options` | Optional | Array of [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption) | The product options the variant selects, such as size or color. |
| `sku` | Optional | string | SKU of the variant. |
| `variant_id` | Required | string | ID of the variant. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

