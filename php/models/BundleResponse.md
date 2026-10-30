[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BundleResponse

A response containing `Bundle` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [Bundle](../models/Bundle.md#bundle) | The requested bundle data. Several variants sold as one line at the bundle's price. A bundle line takes its components' shared taxability and tax category; all components must share both stored values. An unset category uses the merchant default and equals only another unset category. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | Identifier of this API request, useful when contacting support. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

