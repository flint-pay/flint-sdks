[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IncomingWebhookf2be10231857Payload







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhookf2be10231857Payload.md#incomingwebhookf2be10231857payloaddata). |
| `event_type` | Required | string | Values: `"report.succeeded"`. |
| `merchant_id` | Conditional | string |  |
| `mode` | Conditional | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Conditional | object or null | `request`: [field definitions](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |
| `partner_app_id` | Conditional | string |  |
| `source` | Conditional | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-2source). |

### IncomingWebhookf2be10231857Payload variant 1: `event_type` = `"report.succeeded"`

oneOf variant 1: The `report.succeeded` webhook payload for the `merchant` event source..

- Condition: not (present(`partner_app_id`)).
- Required: `merchant_id`, `mode`, `request`.
- Undeclared: `partner_app_id`, `source`.
- Constraints for `event_type`: Values: `"report.succeeded"`.

### IncomingWebhookf2be10231857Payload variant 2: `event_type` = `"report.succeeded"`

oneOf variant 2: The `report.succeeded` webhook payload for the `installed_merchants` event source..

- Condition: not (present(`merchant_id`)).
- Required: `partner_app_id`, `source`.
- Undeclared: `merchant_id`, `mode`, `request`.
- Constraints for `event_type`: Values: `"report.succeeded"`.

### IncomingWebhookf2be10231857Payload.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [Report](../models/Report.md#report) | A report generated from the merchant's activity. `object`: [declared alternatives](../models/IncomingWebhookf2be10231857Payload.md#incomingwebhookf2be10231857payloaddataobject). |

### IncomingWebhookf2be10231857Payload.data.object

A report generated from the merchant's activity.

Field definitions: [shared fields](Report.md#report).

### IncomingWebhookf2be10231857Payload.data.object variant 1: `status` = `"pending"`

oneOf variant 1: A report generated from the merchant's activity..

- Condition: not (at least one(present(`download`); present(`failure_reason`))).
- Optional: `download`, `failure_reason`.
- Constraints for `status`: Values: `"pending"`.

### IncomingWebhookf2be10231857Payload.data.object variant 2: `status` = `"succeeded"`

oneOf variant 2: A report generated from the merchant's activity..

- Condition: not (present(`failure_reason`)).
- Required: `download`.
- Optional: `failure_reason`.
- Constraints for `status`: Values: `"succeeded"`.

### IncomingWebhookf2be10231857Payload.data.object variant 3: `status` = `"failed"`

oneOf variant 3: A report generated from the merchant's activity..

- Condition: not (present(`download`)).
- Required: `failure_reason`.
- Optional: `download`.
- Constraints for `status`: Values: `"failed"`.

### IncomingWebhookf2be10231857Payload variant 1.request

Field definitions: [IncomingWebhook019a504a3353Payload variant 1.request](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request).

### IncomingWebhookf2be10231857Payload variant 2.source

Declared alternatives: [IncomingWebhook019a504a3353Payload variant 2.source](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-2source).

