[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CategoryListResponse

A page of `Category` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [Category](../models/Category.md#category) | The requested category data. `data[]`: [field definitions](../models/CategoryListResponse.md#categorylistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Token for the next page. Omitted when there are no more results. |
| `request_id` | Required | string | Identifier of this API request, useful when contacting support. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### CategoryListResponse.data[]

A catalog grouping used to organize items.

Field definitions: [shared fields](CategoryResponse.md#categoryresponsedata).

### CategoryListResponse.data[].metadata

Field definitions: [BundleResponse.data.metadata](../models/BundleResponse.md#bundleresponsedatametadata).

### CategoryListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

