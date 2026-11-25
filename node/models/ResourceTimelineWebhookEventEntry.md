[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResourceTimelineWebhookEventEntry

A webhook event recorded in this resource's timeline.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actor` | Required | [ReturnActor](../models/ReturnActor.md#returnactor) or null | Who caused the change, captured with the event. Null when the event predates actor attribution, its payload has been redacted, its resource type does not record an actor, or attribution is unavailable. Uses the same actor model as returns. |
| `api_request_log_id` | Optional | string | ID of the API request log associated with this event. Omitted when no request log is associated. Example: `"rlog_01KEZF7C008XJCH6BHA224X46F"`. |
| `attributed_resource` | Optional | [ResourceReference](../models/ResourceReference.md#resourcereference) | The related activation, product variant, or return resolution described by this event. A reference to another resource by `resource_type` and `resource_id`. `attributed_resource`: [field definitions](../models/ResourceTimelineEntry.md#resourcetimelineentry-variant-2attributed_resource). |
| `changes` | Optional | Array of [ResourceTimelineFieldChange](../models/ResourceTimelineFieldChange.md#resourcetimelinefieldchange) | Recorded before-and-after values for selected product, delivery option, and return fields. A null value means the field was unset. |
| `entry_type` | Required | string | Always `webhook_event` for this kind of entry. Values: `"webhook_event"`. |
| `event_type` | Required | string | Type of webhook event recorded for this resource. Values: [308 declared values](CreateWebhookTestEventRequest.md#createwebhooktesteventrequest-event_type-values). |
| `initiator` | Optional | [PaymentActivityActor](../models/PaymentActivityActor.md#paymentactivityactor) | The teammate, API key, or app that initiated the change, when recorded and visible under request-log permissions. The label reflects its current name when available. The teammate, API key, or app that initiated the action. |
| `occurred_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `request_id` | Optional | string | Records created before server-minted request IDs keep their original ID. maxLength: `128`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |
| `resource_timeline_entry_id` | Required | string | ID of this timeline entry. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |
| `webhook_event_id` | Required | string | ID of the event being delivered. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### ResourceTimelineWebhookEventEntry.attributed_resource

Field definitions: [ResourceTimelineEntry variant 2.attributed_resource](../models/ResourceTimelineEntry.md#resourcetimelineentry-variant-2attributed_resource).

