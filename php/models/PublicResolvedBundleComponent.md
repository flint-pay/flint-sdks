[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PublicResolvedBundleComponent

One component of a bundle on a resolved payment link line item, with its variant and quantity.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `position` | Required | integer | Format: `int32`. |
| `product_id` | Optional | string |  |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `variant` | Optional | [PublicResolvedBundleVariantSummary](../models/PublicResolvedBundleVariantSummary.md#publicresolvedbundlevariantsummary) | A summary of a bundle component's variant, with its name, SKU, selected options, and whether it is available for sale. |
| `variant_id` | Required | string |  |

