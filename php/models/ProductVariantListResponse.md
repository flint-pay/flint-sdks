[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ProductVariantListResponse

A page of `ProductVariant` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [ProductVariant](../models/ProductVariant.md#productvariant) | The requested product variant data. `data[]`: [field definitions](../models/ProductResponse.md#productresponsedatavariants). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Token for the next page. Omitted when there are no more results. |
| `request_id` | Required | string | Identifier of this API request, useful when contacting support. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### ProductVariantListResponse.data[]

Field definitions: [ProductResponse.data.variants[]](../models/ProductResponse.md#productresponsedatavariants).

### ProductVariantListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

