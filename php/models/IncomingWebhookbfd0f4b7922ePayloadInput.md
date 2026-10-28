[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IncomingWebhookbfd0f4b7922ePayloadInput

The `partner_app_install.revoked` webhook payload for the `partner_app` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhook275a5e442d58PayloadInput.md#incomingwebhook275a5e442d58payloadinputdata). |
| `event_type` | Required | string | Values: `"partner_app_install.revoked"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/IncomingWebhook078273f39700PayloadInput.md#incomingwebhook078273f39700payloadinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### IncomingWebhookbfd0f4b7922ePayloadInput.data

Field definitions: [IncomingWebhook275a5e442d58PayloadInput.data](../models/IncomingWebhook275a5e442d58PayloadInput.md#incomingwebhook275a5e442d58payloadinputdata).

### IncomingWebhookbfd0f4b7922ePayloadInput.source

Declared alternatives: [IncomingWebhook078273f39700PayloadInput.source](../models/IncomingWebhook078273f39700PayloadInput.md#incomingwebhook078273f39700payloadinputsource).

