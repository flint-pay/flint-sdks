[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BundleResponse

A response containing `Bundle` data.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [Bundle](../models/Bundle.md#bundle) | The requested bundle data. A group of items sold together. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | Identifier of this API request, useful when contacting support. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

