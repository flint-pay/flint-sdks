[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ProductOptionListResponse

A page of `ProductOption` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [ProductOption](../models/ProductOption.md#productoption) | The requested product option data. `data[]`: [field definitions](../models/ProductResponse.md#productresponsedataoptions). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Token for the next page. Omitted when there are no more results. |
| `request_id` | Required | string | Identifier of this API request, useful when contacting support. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### ProductOptionListResponse.data[]

Field definitions: [ProductResponse.data.options[]](../models/ProductResponse.md#productresponsedataoptions).

### ProductOptionListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

