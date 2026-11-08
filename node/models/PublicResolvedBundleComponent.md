[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PublicResolvedBundleComponent

One component of a bundle on a resolved payment link line item, with its variant and quantity.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `position` | Required | integer | Position of the component within the bundle. Format: `int32`. |
| `product_id` | Optional | string | ID of the product the component's variant belongs to. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `variant` | Optional | [PublicResolvedBundleVariantSummary](../models/PublicResolvedBundleVariantSummary.md#publicresolvedbundlevariantsummary) | Summary of the component's variant. A summary of a bundle component's variant, with its name, SKU, selected options, and whether it is available for sale. |
| `variant_id` | Required | string | ID of the component's variant. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

