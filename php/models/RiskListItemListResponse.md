[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskListItemListResponse

A page of `RiskListItem` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [RiskListItem](../models/RiskListItem.md#risklistitem) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/RiskListItemListResponse.md#risklistitemlistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### RiskListItemListResponse.data[]

One value in a payment risk list.

Field definitions: [shared fields](RiskListItemResponse.md#risklistitemresponsedata).

### RiskListItemListResponse.data[].created_by

Declared alternatives: [RiskListItemResponse.data.created_by](../models/RiskListItemResponse.md#risklistitemresponsedatacreated_by).

### RiskListItemListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

