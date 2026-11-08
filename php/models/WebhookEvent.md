[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookEvent

An event prepared for delivery to webhook endpoints.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_request_log_id` | Optional | string | ID of the API request log associated with the event. Omitted when none is associated. |
| `api_version` | Required | string | API version of the event data. Stored data follows the same versioning rules as webhook deliveries. Format: `date`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `data` | Optional | object | The delivered envelope's data, including its payload-version-specific shape. Omitted from list responses and from detail responses when the caller lacks read access to the attributed resource or the payload has expired after 14 days. |
| `event_source` | Optional | string | Envelope discriminator identifying merchant events, partner app lifecycle events, or events forwarded from installed merchants. Values: `"merchant"`, `"partner_app"`, `"installed_merchants"`. |
| `event_type` | Required | string | Type of event Flint recorded, using the current event type name. Values: [275 declared values](CreateWebhookTestEventRequestInput.md#createwebhooktesteventrequestinput-event_type-values). |
| `merchant_id` | Optional | string | ID of the merchant this resource belongs to. |
| `mode` | Optional | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `partner_app_id` | Optional | string | ID of the partner app that owns this partner event. Omitted for merchant events. |
| `payload_version` | Optional | integer | Envelope payload version. Present only while the stored payload is retained. Values: `1`, `2`. |
| `request` | Optional | [WebhookEventRequest](../models/WebhookEventRequest.md#webhookeventrequest) or null | Originating request. `null` when the event is synthetic or no originating request ID is recorded. The idempotency key is included only on an authorized detail read while the payload is retained. Omitted for partner events. |
| `resource_id` | Optional | string | ID of the resource affected by the event. Omitted when no resource ID is attributed. |
| `resource_type` | Optional | string | Public resource type affected by the event. Omitted when no public resource type is attributed. Values: [146 declared values](APIRequestLogInput.md#apirequestloginput-resource_type-values). |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `source` | Optional | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) | Partner envelope source. Present only for partner events while the stored payload is retained. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/WebhookEventResponse.md#webhookeventresponsedatasource). |
| `test` | Required | boolean | Whether this is a synthetic event created to test an endpoint; independent of live or test mode. |
| `webhook_event_id` | Required | string | Unique identifier for this webhook event, prefixed `whev_`. |

### WebhookEvent.source fields 1

Field definitions: [WebhookEventResponse.data.source](../models/WebhookEventResponse.md#webhookeventresponsedatasource).

