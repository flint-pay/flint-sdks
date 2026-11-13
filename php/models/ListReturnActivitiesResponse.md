[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ListReturnActivitiesResponse

A page of `ReturnActivity` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [ReturnActivity](../models/ReturnActivity.md#returnactivity) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/ListReturnActivitiesResponse.md#listreturnactivitiesresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### ListReturnActivitiesResponse.data[]

One entry in a return's activity history.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `activity_type` | Required | string | What happened, as `&lt;resource>.&lt;action>`. Values: [39 declared values](ReturnActivityInput.md#returnactivityinput-activity_type-values). |
| `actor` | Required | [ReturnActor](../models/ReturnActor.md#returnactor) | Who took the action. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. `actor`: [field definitions](../models/ListReturnActivitiesResponse.md#listreturnactivitiesresponsedataactor). |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `quantity` | Optional | integer | Canceled whole-number quantity; fractional quantities are not supported. Present only for return_line_item.quantity_canceled. Format: `int64`. |
| `reason` | Optional | string | The reason given for the action. When Flint records a failed effect, the failure code, such as `refund_creation_failed`. Values: [54 declared values](ReturnActivityInput.md#returnactivityinput-reason-values). |
| `reason_message` | Optional | string | Free text given with the reason, or the failure message for a failed effect. Can hold staff notes, so only merchant credentials can read it. |
| `resource_id` | Required | string | The ID of the Return or child resource the activity touched, whose type is `resource_type`. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. |
| `resource_type` | Required | string | Type of the resource that changed: the part of `activity_type` before the dot. Example: `"return"`. Values: [153 declared values](APIRequestLogInput.md#apirequestloginput-resource_type-values). |
| `return_activity_id` | Required | string | Stable identifier of the activity. Example: `"retact_01KEZF7C00J26XVS5GK98PQ39D"`. |
| `return_id` | Required | string | The Return this activity belongs to. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. |
| `return_version` | Required | integer | Return version produced by this activity. Format: `int64`. minimum: `0`. |

### ListReturnActivitiesResponse.data[].actor

Who took the action. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.

Field definitions: [shared fields](ReturnActorInput.md#returnactorinput).

### ListReturnActivitiesResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

