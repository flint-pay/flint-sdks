[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskListListResponse

A page of `RiskList` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [RiskList](../models/RiskList.md#risklist) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/RiskListListResponse.md#risklistlistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### RiskListListResponse.data[]

A collection of values used in payment risk rules.

Field definitions: [shared fields](RiskListResourceResponse.md#risklistresourceresponsedata).

### RiskListListResponse.data[].created_by

Declared alternatives: [RiskListResourceResponse.data.created_by](../models/RiskListResourceResponse.md#risklistresourceresponsedatacreated_by).

### RiskListListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

