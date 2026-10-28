[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## Webhook_modifier_set_created_installed_merchantsInput

The `modifier_set.created` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhookb8e1ba81d204PayloadInput.md#incomingwebhookb8e1ba81d204payloadinputdata). |
| `event_type` | Required | string | Values: `"modifier_set.created"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-2source). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### Webhook_modifier_set_created_installed_merchantsInput.data

Field definitions: [IncomingWebhookb8e1ba81d204PayloadInput.data](../models/IncomingWebhookb8e1ba81d204PayloadInput.md#incomingwebhookb8e1ba81d204payloadinputdata).

### Webhook_modifier_set_created_installed_merchantsInput.source

Declared alternatives: [IncomingWebhook019a504a3353PayloadInput variant 2.source](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-2source).

