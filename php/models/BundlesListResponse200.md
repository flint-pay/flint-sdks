[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BundlesListResponse200

A page of `Bundle` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [Bundle](../models/Bundle.md#bundle) | The requested bundle data. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `next_page_token` | Optional | string | Token for the next page. Omitted when there are no more results. |
| `request_id` | Optional | string | Identifier of this API request, useful when contacting support. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

