[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnActivity

One entry in a Return's merchant activity history.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `activity_type` | Required | string | Values: [39 declared values](ReturnActivityInput.md#returnactivityinput-activity_type-values). |
| `actor` | Required | [ReturnActor](../models/ReturnActor.md#returnactor) | Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `quantity` | Optional | integer string | Canceled whole-number quantity; fractional quantities are not supported. Present only for return_line_item.quantity_canceled. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `reason` | Optional | string | Values: [56 declared values](ReturnActivityInput.md#returnactivityinput-reason-values). |
| `reason_message` | Optional | string |  |
| `resource_id` | Required | string |  |
| `resource_type` | Required | string | Public resource type: the resource's ID field name without `_id`. Clients must accept values added in future releases. Values: [135 declared values](APIRequestLogInput.md#apirequestloginput-resource_type-values). `resource_type`: [field definitions](../models/DeveloperGetCurrentAPIKeyRequestLogResponse200.md#developergetcurrentapikeyrequestlogresponse200dataresource_type). |
| `return_activity_id` | Required | string |  |
| `return_id` | Required | string |  |
| `return_version` | Required | integer string | Return version produced by this activity. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `0`. |

### ReturnActivity.resource_type

Field definitions: [DeveloperGetCurrentAPIKeyRequestLogResponse200.data.resource_type](../models/DeveloperGetCurrentAPIKeyRequestLogResponse200.md#developergetcurrentapikeyrequestlogresponse200dataresource_type).

