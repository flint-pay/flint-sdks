[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookEventType

A webhook event type, with a description and the event sources where it is valid.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `description` | Required | string | Concise semantics for the state transition or event occurrence. |
| `event_sources` | Required | Array of string | Event source buckets where this event type is valid. Items values: `"merchant"`, `"partner_app"`, `"installed_merchants"`. |
| `event_type` | Required | string | Webhook event type string accepted by compatible endpoint enabled_events values and webhook event filters. Values: [245 declared values](CreateWebhookTestEventRequestInput.md#createwebhooktesteventrequestinput-event_type-values). |
| `kind` | Required | string | Whether the event records a resource snapshot or asks you to fetch current state. Values: `"snapshot"`, `"notification"`. |
| `previous_names` | Required | Array of string | Previous names of this type, retained permanently for reading stored events. Inputs accept only the current event_type. Empty when the type has never been renamed. |
| `resource_type` | Required | string | Public resource type: the resource's ID field name without `_id`. Clients must accept values added in future releases. Values: [135 declared values](APIRequestLogInput.md#apirequestloginput-resource_type-values). `resource_type`: [field definitions](../models/DeveloperGetCurrentAPIKeyRequestLogResponse200.md#developergetcurrentapikeyrequestlogresponse200dataresource_type). |

### WebhookEventType.resource_type

Field definitions: [DeveloperGetCurrentAPIKeyRequestLogResponse200.data.resource_type](../models/DeveloperGetCurrentAPIKeyRequestLogResponse200.md#developergetcurrentapikeyrequestlogresponse200dataresource_type).

