[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppInstallPermissionsUpdatedEvent

The `partner_app_install.permissions_updated` webhook payload for the `partner_app` event source.

Fields shared by partner webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [PartnerAppInstallPermissionsUpdatedEventData](../models/PartnerAppInstallPermissionsUpdatedEventData.md#partnerappinstallpermissionsupdatedeventdata) | `data`: [field definitions](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1). |
| `event_type` | Required | string | Values: `"partner_app_install.permissions_updated"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | Alternative shapes (see declared variants) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/EnvironmentGrantCreatedEvent.md#environmentgrantcreatedeventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1

Field definitions: [shared fields](PartnerAppInstallCreatedEvent.md#partnerappinstallcreatedeventdata-fields-1).

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.object

Field definitions: [PartnerAppInstallCreatedEvent.data fields 1.object](../models/PartnerAppInstallCreatedEvent.md#partnerappinstallcreatedeventdata-fields-1object).

### PartnerAppInstallPermissionsUpdatedEvent.source

Declared alternatives: [EnvironmentGrantCreatedEvent.source](../models/EnvironmentGrantCreatedEvent.md#environmentgrantcreatedeventsource).

