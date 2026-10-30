[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppInstallUpdatedEvent

The `partner_app_install.updated` webhook payload for the `partner_app` event source.

Fields shared by partner webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [PartnerAppInstallUpdatedEventData](../models/PartnerAppInstallUpdatedEventData.md#partnerappinstallupdatedeventdata) | `data`: [field definitions](../models/PartnerAppInstallUpdatedEvent.md#partnerappinstallupdatedeventdata-fields-1). |
| `event_type` | Required | string | Values: `"partner_app_install.updated"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | Alternative shapes (see declared variants) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/EnvironmentGrantCreatedEvent.md#environmentgrantcreatedeventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### PartnerAppInstallUpdatedEvent.data fields 1

Field definitions: [shared fields](PartnerAppInstallCreatedEvent.md#partnerappinstallcreatedeventdata-fields-1).

### PartnerAppInstallUpdatedEvent.data fields 1.object

Field definitions: [PartnerAppInstallCreatedEvent.data fields 1.object](../models/PartnerAppInstallCreatedEvent.md#partnerappinstallcreatedeventdata-fields-1object).

### PartnerAppInstallUpdatedEvent.source

Declared alternatives: [EnvironmentGrantCreatedEvent.source](../models/EnvironmentGrantCreatedEvent.md#environmentgrantcreatedeventsource).

