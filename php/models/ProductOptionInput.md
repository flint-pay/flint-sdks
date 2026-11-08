[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ProductOptionInput

A choice that defines a product's variants.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string | When this resource was created, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `metadata` | Optional | [MetadataMapInput](../models/MetadataMapInput.md#metadatamapinput) | Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. |
| `name` | Required | string | Option name, such as Size or Color. |
| `option_id` | Required | string | Stable identifier of the product option. Example: `"opt_01KEZF7C008R5Q9BG9B4B4KQH8"`. |
| `position` | Required | integer | Display order among the product's options, starting at zero. Format: `int32`. |
| `product_id` | Required | string | Identifier of the product this option belongs to. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `status` | Required | string | Option lifecycle status. Every active variant must select an active value for each active option. Values: `"active"`, `"inactive"`, `"archived"`. |
| `updated_at` | Optional | string | When this resource last changed, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `values` | Optional | Array of [ProductOptionValueInput](../models/ProductOptionValueInput.md#productoptionvalueinput) | Values offered for this option, such as Small, Medium, and Large for Size. |

