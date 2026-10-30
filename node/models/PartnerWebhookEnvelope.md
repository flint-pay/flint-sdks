[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerWebhookEnvelope

Fields shared by partner webhook payloads.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/MerchantWebhookEnvelope.md#merchantwebhookenvelopedata). |
| `event_type` | Required | string | Values: [251 declared values](CreateWebhookTestEventRequest.md#createwebhooktesteventrequest-event_type-values). |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/PartnerWebhookEnvelope.md#partnerwebhookenvelopesource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### PartnerWebhookEnvelope.data

Field definitions: [MerchantWebhookEnvelope.data](../models/MerchantWebhookEnvelope.md#merchantwebhookenvelopedata).

### PartnerWebhookEnvelope.source

The source of a partner webhook event, selected by type.

Field definitions: [shared fields](WebhookEventSource.md#webhookeventsource).

### PartnerWebhookEnvelope.source variant 1: `type` = `"partner_app"`

oneOf with type: "partner_app": The partner_app source of a partner webhook event..

- Undeclared: `environment_grant_id`, `mode`, `sandbox_id`.
- Constraints for `type`: Values: `"partner_app"`.

### PartnerWebhookEnvelope.source variant 2: `type` = `"installed_merchants"`

oneOf with type: "installed_merchants": The installed_merchants source of a partner webhook event..

- Required: `environment_grant_id`, `mode`.
- Optional: `sandbox_id`.
- Constraints for `type`: Values: `"installed_merchants"`.

