[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ProductVariantResponse

A response containing `ProductVariant` data.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [ProductVariant](../models/ProductVariant.md#productvariant) | The requested product variant data. A specific purchasable version of a product. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | Identifier of this API request, useful when contacting support. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

