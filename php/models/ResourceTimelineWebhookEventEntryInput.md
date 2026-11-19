[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResourceTimelineWebhookEventEntryInput

A webhook event recorded in this resource's timeline.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actor` | Required | [ReturnActorInput](../models/ReturnActorInput.md#returnactorinput) or null | Who caused the change, captured with the event. Null when the event predates actor attribution, its payload has been redacted, its resource type does not record an actor, or attribution is unavailable. Uses the same actor model as returns. |
| `api_request_log_id` | Optional | string | ID of the API request log associated with this event. Omitted when no request log is associated. Example: `"rlog_01KEZF7C008XJCH6BHA224X46F"`. |
| `attributed_resource` | Optional | [ResourceReferenceInput](../models/ResourceReferenceInput.md#resourcereferenceinput) | The activation this entry refers to. Present for license key activation entries. A reference to another resource by `resource_type` and `resource_id`. |
| `entry_type` | Required | string | Always `webhook_event` for this kind of entry. Values: `"webhook_event"`. |
| `event_type` | Required | string | Type of webhook event recorded for this resource. Values: [305 declared values](CreateWebhookTestEventRequestInput.md#createwebhooktesteventrequestinput-event_type-values). |
| `initiator` | Optional | [PaymentActivityActorInput](../models/PaymentActivityActorInput.md#paymentactivityactorinput) | The merchant identity associated with a product event's API request, when available. The label reflects the identity's current name. The merchant identity that initiated the action. Labels are recorded with the activity and do not change when the identity is renamed or removed. |
| `occurred_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `request_id` | Optional | string | Records created before server-minted request IDs keep their original ID. maxLength: `128`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |
| `resource_timeline_entry_id` | Required | string | ID of this timeline entry. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |
| `webhook_event_id` | Required | string | ID of the event being delivered. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

