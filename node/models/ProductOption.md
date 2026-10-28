[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ProductOption

A choice that defines a product's variants.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string | When this resource was created, as an RFC3339 timestamp. Format: `date-time`. |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/Bundle.md#bundlemetadata). |
| `name` | Required | string | Option name, such as Size or Color. |
| `option_id` | Required | string | Stable identifier of the product option. |
| `position` | Required | integer | Display order among the product's options, starting at zero. Format: `int32`. |
| `product_id` | Required | string | Identifier of the product this option belongs to. |
| `status` | Required | string | Option lifecycle status. Every active variant must select an active value for each active option. Values: `"active"`, `"inactive"`, `"archived"`. |
| `updated_at` | Optional | string | When this resource last changed, as an RFC3339 timestamp. Format: `date-time`. |
| `values` | Optional | Array of [ProductOptionValue](../models/ProductOptionValue.md#productoptionvalue) | Values offered for this option, such as Small, Medium, and Large for Size. |

### ProductOption.metadata

Field definitions: [Bundle.metadata](../models/Bundle.md#bundlemetadata).

