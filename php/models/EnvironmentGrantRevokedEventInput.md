[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## EnvironmentGrantRevokedEventInput

The `environment_grant.revoked` webhook payload for the `partner_app` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/EnvironmentGrantCreatedEventInput.md#environmentgrantcreatedeventinputdata). |
| `event_type` | Required | string | Values: `"environment_grant.revoked"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/EnvironmentGrantCreatedEventInput.md#environmentgrantcreatedeventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### EnvironmentGrantRevokedEventInput.data

Field definitions: [EnvironmentGrantCreatedEventInput.data](../models/EnvironmentGrantCreatedEventInput.md#environmentgrantcreatedeventinputdata).

### EnvironmentGrantRevokedEventInput.source

Declared alternatives: [EnvironmentGrantCreatedEventInput.source](../models/EnvironmentGrantCreatedEventInput.md#environmentgrantcreatedeventinputsource).

