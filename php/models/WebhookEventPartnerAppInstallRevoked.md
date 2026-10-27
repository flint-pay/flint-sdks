[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookEventPartnerAppInstallRevoked

The `partner_app_install.revoked` webhook payload for the `partner_app` event source.

Fields shared by partner webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [WebhookEventPartnerAppInstallRevokedData](../models/WebhookEventPartnerAppInstallRevokedData.md#webhookeventpartnerappinstallrevokeddata) | `data`: [field definitions](../models/WebhookEventPartnerAppInstallRevoked.md#webhookeventpartnerappinstallrevokeddata-fields-1). |
| `event_type` | Required | string | Values: `"partner_app_install.revoked"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | Alternative shapes (see declared variants) and object | `source`: [declared alternatives](../models/WebhookEventEnvironmentGrantCreated.md#webhookeventenvironmentgrantcreatedsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### WebhookEventPartnerAppInstallRevoked.data fields 1

Field definitions: [shared fields](WebhookEventPartnerAppInstallCreated.md#webhookeventpartnerappinstallcreateddata-fields-1).

### WebhookEventPartnerAppInstallRevoked.data fields 1.object

Field definitions: [WebhookEventPartnerAppInstallCreated.data fields 1.object](../models/WebhookEventPartnerAppInstallCreated.md#webhookeventpartnerappinstallcreateddata-fields-1object).

### WebhookEventPartnerAppInstallRevoked.source

Declared alternatives: [WebhookEventEnvironmentGrantCreated.source](../models/WebhookEventEnvironmentGrantCreated.md#webhookeventenvironmentgrantcreatedsource).

