[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookEventPartnerAppInstallUpdated

The `partner_app_install.updated` webhook payload for the `partner_app` event source.

Fields shared by partner webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [WebhookEventPartnerAppInstallUpdatedData](../models/WebhookEventPartnerAppInstallUpdatedData.md#webhookeventpartnerappinstallupdateddata) | `data`: [field definitions](../models/WebhookEventPartnerAppInstallUpdated.md#webhookeventpartnerappinstallupdateddata-fields-1). |
| `event_type` | Required | string | Values: `"partner_app_install.updated"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | Alternative shapes (see declared variants) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/WebhookEventEnvironmentGrantCreated.md#webhookeventenvironmentgrantcreatedsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### WebhookEventPartnerAppInstallUpdated.data fields 1

Field definitions: [shared fields](WebhookEventPartnerAppInstallCreated.md#webhookeventpartnerappinstallcreateddata-fields-1).

### WebhookEventPartnerAppInstallUpdated.data fields 1.object

Field definitions: [WebhookEventPartnerAppInstallCreated.data fields 1.object](../models/WebhookEventPartnerAppInstallCreated.md#webhookeventpartnerappinstallcreateddata-fields-1object).

### WebhookEventPartnerAppInstallUpdated.source

Declared alternatives: [WebhookEventEnvironmentGrantCreated.source](../models/WebhookEventEnvironmentGrantCreated.md#webhookeventenvironmentgrantcreatedsource).

