[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BundleComponentVariantSummary







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `is_available_for_sale` | Required | boolean |  |
| `name` | Optional | string |  |
| `product_id` | Required | string | Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `product_name` | Optional | string |  |
| `selected_options` | Optional | Array of [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption) |  |
| `sku` | Optional | string |  |
| `variant_id` | Required | string | Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

### BundleComponentVariantSummary variant 1

anyOf variant 1: Declared schema BundleComponentVariantSummary. A summary of the variant that fills a bundle component: its names, SKU, selected options, and whether it is available for sale..

- Constraints for `is_available_for_sale`: Whether the component's variant and its product are both active.
- Constraints for `name`: Name of the component's variant, when set.
- Constraints for `product_id`: Identifier of the product this component variant belongs to.
- Constraints for `product_name`: Name of the product the variant belongs to.
- Constraints for `selected_options`: Option names and values selected by the component's variant.
- Constraints for `sku`: Stock keeping unit assigned to the component's variant, when set.
- Constraints for `variant_id`: Identifier of the product variant included in the component.

### BundleComponentVariantSummary variant 2

anyOf variant 2: Declared schema PublicResolvedBundleVariantSummary. A summary of a bundle component's variant, with its product name, variant name, SKU, selected options, and whether it is available for sale..

- Constraints for `is_available_for_sale`: Whether the variant can be sold now.
- Constraints for `name`: Name of the variant.
- Constraints for `product_id`: Identifier of the product this resolved bundle component variant belongs to.
- Constraints for `product_name`: Name of the product the component’s variant belongs to.
- Constraints for `selected_options`: The product options the variant selects, such as size or color.
- Constraints for `sku`: SKU of the variant.
- Constraints for `variant_id`: ID of the variant.

