[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookEvent

An event prepared for delivery to webhook endpoints.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_request_log_id` | Optional | string |  |
| `api_version` | Required | string | API version of the event data. Stored data follows the same versioning rules as webhook deliveries. Format: `date`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `data` | Optional | object | The delivered envelope's data, including its payload-version-specific shape. Omitted from list responses and from detail responses when the caller lacks read access to the attributed resource or the payload has expired after 14 days. |
| `event_source` | Optional | string | Values: `"merchant"`, `"partner_app"`, `"installed_merchants"`. |
| `event_type` | Required | string | Values: [245 declared values](CreateWebhookTestEventRequestInput.md#createwebhooktesteventrequestinput-event_type-values). |
| `merchant_id` | Optional | string |  |
| `mode` | Optional | string | Values: `"test"`, `"live"`. |
| `partner_app_id` | Optional | string |  |
| `payload_version` | Optional | integer | Envelope payload version. Present only while the stored payload is retained. Values: `1`, `2`. |
| `request` | Optional | [WebhookEventRequest](../models/WebhookEventRequest.md#webhookeventrequest) or null | Originating merchant request, or null for a background event. The idempotency key is included only on an authorized detail read while the payload is retained. Omitted for partner events. |
| `resource_id` | Optional | string |  |
| `resource_type` | Optional | string | Public resource type: the resource's ID field name without `_id`. Clients must accept values added in future releases. Values: [134 declared values](APIRequestLogInput.md#apirequestloginput-resource_type-values). `resource_type`: [field definitions](../models/DeveloperGetCurrentAPIKeyRequestLogResponse200.md#developergetcurrentapikeyrequestlogresponse200dataresource_type). |
| `source` | Optional | object and Alternative shapes (see declared variants) | Partner envelope source. Present only for partner events while the stored payload is retained. `source`: [declared alternatives](../models/WebhookEventsGetResponse200.md#webhookeventsgetresponse200datasource). |
| `test` | Required | boolean |  |
| `webhook_event_id` | Required | string |  |

### WebhookEvent.resource_type

Field definitions: [DeveloperGetCurrentAPIKeyRequestLogResponse200.data.resource_type](../models/DeveloperGetCurrentAPIKeyRequestLogResponse200.md#developergetcurrentapikeyrequestlogresponse200dataresource_type).

### WebhookEvent.source

Declared alternatives: [WebhookEventsGetResponse200.data.source](../models/WebhookEventsGetResponse200.md#webhookeventsgetresponse200datasource).

