[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResourceTimelineEntriesItemWebhookEvent

One entry in a resource timeline. The `entry_type` selects which of the request, webhook, or image fields are present.

A webhook event recorded in this resource's timeline.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actor` | Required | [ReturnActor](../models/ReturnActor.md#returnactor) or null | Who caused the change, captured with the event. Null when the event predates actor attribution, its payload has been redacted, its resource type does not record an actor, or attribution is unavailable. Uses the same actor model as returns. |
| `api_request_log_id` | Optional | string | ID of the API request log associated with this event. Omitted when no request log is associated. |
| `attributed_resource` | Optional | [ResourceReference](../models/ResourceReference.md#resourcereference) | The activation this entry refers to. Present for license key activation entries. A reference to another resource by `resource_type` and `resource_id`. `attributed_resource`: [field definitions](../models/ResourceTimelineResponse.md#resourcetimelineresponsedataentries-variant-2attributed_resource). |
| `entry_type` | Required | string | Always `webhook_event` for this kind of entry. Values: `"webhook_event"`. |
| `event_type` | Required | string | Type of webhook event recorded for this resource. Values: [305 declared values](CreateWebhookTestEventRequestInput.md#createwebhooktesteventrequestinput-event_type-values). |
| `initiator` | Optional | [PaymentActivityActor](../models/PaymentActivityActor.md#paymentactivityactor) | The merchant identity associated with a product event's API request, when available. The label reflects the identity's current name. The merchant identity that initiated the action. Labels are recorded with the activity and do not change when the identity is renamed or removed. `initiator`: [field definitions](../models/ResourceTimelineResponse.md#resourcetimelineresponsedataentries-variant-2initiator). |
| `occurred_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `request_id` | Optional | string | Records created before server-minted request IDs keep their original ID. maxLength: `128`. |
| `resource_timeline_entry_id` | Required | string | ID of this timeline entry. |
| `webhook_event_id` | Required | string | ID of the event being delivered. |

### ResourceTimelineEntriesItemWebhookEvent.attributed_resource

Field definitions: [ResourceTimelineResponse.data.entries[] variant 2.attributed_resource](../models/ResourceTimelineResponse.md#resourcetimelineresponsedataentries-variant-2attributed_resource).

### ResourceTimelineEntriesItemWebhookEvent.initiator

Field definitions: [ResourceTimelineResponse.data.entries[] variant 2.initiator](../models/ResourceTimelineResponse.md#resourcetimelineresponsedataentries-variant-2initiator).

