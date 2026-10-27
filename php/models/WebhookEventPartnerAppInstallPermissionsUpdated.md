[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookEventPartnerAppInstallPermissionsUpdated

The `partner_app_install.permissions_updated` webhook payload for the `partner_app` event source.

Fields shared by partner webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [WebhookEventPartnerAppInstallPermissionsUpdatedData](../models/WebhookEventPartnerAppInstallPermissionsUpdatedData.md#webhookeventpartnerappinstallpermissionsupdateddata) | `data`: [field definitions](../models/WebhookEventPartnerAppInstallPermissionsUpdated.md#webhookeventpartnerappinstallpermissionsupdateddata-fields-1). |
| `event_type` | Required | string | Values: `"partner_app_install.permissions_updated"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | Alternative shapes (see declared variants) and object | `source`: [declared alternatives](../models/WebhookEventEnvironmentGrantCreated.md#webhookeventenvironmentgrantcreatedsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### WebhookEventPartnerAppInstallPermissionsUpdated.data fields 1

Field definitions: [shared fields](WebhookEventPartnerAppInstallCreated.md#webhookeventpartnerappinstallcreateddata-fields-1).

### WebhookEventPartnerAppInstallPermissionsUpdated.data fields 1.object

Field definitions: [WebhookEventPartnerAppInstallCreated.data fields 1.object](../models/WebhookEventPartnerAppInstallCreated.md#webhookeventpartnerappinstallcreateddata-fields-1object).

### WebhookEventPartnerAppInstallPermissionsUpdated.source

Declared alternatives: [WebhookEventEnvironmentGrantCreated.source](../models/WebhookEventEnvironmentGrantCreated.md#webhookeventenvironmentgrantcreatedsource).

