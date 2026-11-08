[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PackageItemListResponse

A page of `PackageItem` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [PackageItem](../models/PackageItem.md#packageitem) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/PackageItemListResponse.md#packageitemlistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### PackageItemListResponse.data[]

An order item assigned to a package.

Field definitions: [shared fields](PackageItemResponse.md#packageitemresponsedata).

### PackageItemListResponse.data[].metadata

Field definitions: [PackageItemResponse.data.metadata](../models/PackageItemResponse.md#packageitemresponsedatametadata).

### PackageItemListResponse.data[].order

Declared alternatives: [DisputeResponse.data.order](../models/DisputeResponse.md#disputeresponsedataorder).

### PackageItemListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

