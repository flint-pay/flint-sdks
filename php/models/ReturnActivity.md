[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnActivity

One entry in a return's activity history.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `activity_type` | Required | string | What happened, as `&lt;resource>.&lt;action>`. Values: [39 declared values](ReturnActivityInput.md#returnactivityinput-activity_type-values). |
| `actor` | Required | [ReturnActor](../models/ReturnActor.md#returnactor) | Who took the action. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. `actor`: [field definitions](../models/ListReturnActivitiesResponse.md#listreturnactivitiesresponsedataactor). |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `quantity` | Optional | integer | Canceled whole-number quantity; fractional quantities are not supported. Present only for return_line_item.quantity_canceled. Format: `int64`. |
| `reason` | Optional | string | The reason given for the action. When Flint records a failed effect, the failure code, such as `refund_creation_failed`. Values: [54 declared values](ReturnActivityInput.md#returnactivityinput-reason-values). |
| `reason_message` | Optional | string | Free text given with the reason, or the failure message for a failed effect. Can hold staff notes, so only merchant credentials can read it. |
| `resource_id` | Required | string | The ID of the Return or child resource the activity touched, whose type is `resource_type`. |
| `resource_type` | Required | string | Type of the resource that changed: the part of `activity_type` before the dot. Values: [153 declared values](APIRequestLogInput.md#apirequestloginput-resource_type-values). |
| `return_activity_id` | Required | string | Stable identifier of the activity. |
| `return_id` | Required | string | The Return this activity belongs to. |
| `return_version` | Required | integer | Return version produced by this activity. Format: `int64`. minimum: `0`. |

### ReturnActivity.actor

Field definitions: [ListReturnActivitiesResponse.data[].actor](../models/ListReturnActivitiesResponse.md#listreturnactivitiesresponsedataactor).

