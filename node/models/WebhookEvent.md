[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookEvent

An event prepared for delivery to webhook endpoints.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_request_log_id` | Optional | string |  |
| `api_version` | Required | string | API version of the event data. Stored data follows the same versioning rules as webhook deliveries. Format: `date`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `data` | Optional | object | The delivered envelope's data, including its payload-version-specific shape. Omitted from list responses and from detail responses when the caller lacks read access to the attributed resource or the payload has expired after 14 days. |
| `event_source` | Optional | string | Values: `"merchant"`, `"partner_app"`, `"installed_merchants"`. |
| `event_type` | Required | string | Values: [251 declared values](CreateWebhookTestEventRequest.md#createwebhooktesteventrequest-event_type-values). |
| `merchant_id` | Optional | string |  |
| `mode` | Optional | string | Values: `"test"`, `"live"`. |
| `partner_app_id` | Optional | string |  |
| `payload_version` | Optional | integer | Envelope payload version. Present only while the stored payload is retained. Values: `1`, `2`. |
| `request` | Optional | object or null | Originating merchant request, or null for a background event. The idempotency key is included only on an authorized detail read while the payload is retained. Omitted for partner events. `request`: [field definitions](../models/WebhookEvent.md#webhookeventrequest). |
| `resource_id` | Optional | string |  |
| `resource_type` | Optional | [ResourceType](../models/ResourceType.md#resourcetype) | Public resource type: the resource's ID field name without `_id`. Clients must accept values added in future releases. Values: [141 declared values](APIKey.md#apikeycreated_by-resource_type-values). |
| `source` | Optional | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) | Partner envelope source. Present only for partner events while the stored payload is retained. The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/WebhookEvent.md#webhookeventsource-fields-1). |
| `test` | Required | boolean |  |
| `webhook_event_id` | Required | string |  |

### WebhookEvent.request

Originating merchant request, or null for a background event. The idempotency key is included only on an authorized detail read while the payload is retained. Omitted for partner events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | string |  |
| `idempotency_key` | Optional | string | The Idempotency-Key the originating request sent. Absent when it sent none. |

### WebhookEvent.source fields 1

Partner envelope source. Present only for partner events while the stored payload is retained. The source of a partner webhook event, selected by type.

Field definitions: [shared fields](WebhookEventSource.md#webhookeventsource).

### WebhookEvent.source fields 1 variant 1: `type` = `"partner_app"`

oneOf with type: "partner_app": The partner_app source of a partner webhook event..

- Undeclared: `environment_grant_id`, `mode`, `sandbox_id`.
- Constraints for `type`: Values: `"partner_app"`.

### WebhookEvent.source fields 1 variant 2: `type` = `"installed_merchants"`

oneOf with type: "installed_merchants": The installed_merchants source of a partner webhook event..

- Required: `environment_grant_id`, `mode`.
- Optional: `sandbox_id`.
- Constraints for `type`: Values: `"installed_merchants"`.

