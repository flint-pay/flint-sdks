[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReportListResponse

A page of `Report` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of (object and Alternative shapes (see declared variants)) | Resource, collection, or operation result returned by this request. `data[]`: [declared alternatives](../models/ReportListResponse.md#reportlistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### ReportListResponse.data[]

A report generated from the merchant's activity.

Field definitions: [shared fields](ReportResponse.md#reportresponsedata).

### ReportListResponse.data[] variant 1: `status` = `"pending"`

oneOf with status: "pending": A report generated from the merchant's activity..

- Condition: not (at least one(present(`download`); present(`failure_reason`))).
- Optional: `download`, `failure_reason`.
- Constraints for `status`: Values: `"pending"`.

### ReportListResponse.data[] variant 2: `status` = `"succeeded"`

oneOf with status: "succeeded": A report generated from the merchant's activity..

- Condition: not (present(`failure_reason`)).
- Required: `download`.
- Optional: `failure_reason`.
- Constraints for `status`: Values: `"succeeded"`.

### ReportListResponse.data[] variant 3: `status` = `"failed"`

oneOf with status: "failed": A report generated from the merchant's activity..

- Condition: not (present(`download`)).
- Required: `failure_reason`.
- Optional: `download`.
- Constraints for `status`: Values: `"failed"`.

### ReportListResponse.data[].download

Field definitions: [ReportResponse.data.download](../models/ReportResponse.md#reportresponsedatadownload).

### ReportListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

