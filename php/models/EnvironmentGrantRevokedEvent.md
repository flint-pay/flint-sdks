[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## EnvironmentGrantRevokedEvent

The `environment_grant.revoked` webhook payload for the `partner_app` event source.

Fields shared by partner webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [EnvironmentGrantRevokedEventData](../models/EnvironmentGrantRevokedEventData.md#environmentgrantrevokedeventdata) | `data`: [field definitions](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdata-fields-1). |
| `event_type` | Required | string | Values: `"environment_grant.revoked"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | Alternative shapes (see declared variants) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/EnvironmentGrantCreatedEvent.md#environmentgrantcreatedeventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### EnvironmentGrantRevokedEvent.data fields 1

Field definitions: [shared fields](EnvironmentGrantCreatedEvent.md#environmentgrantcreatedeventdata-fields-1).

### EnvironmentGrantRevokedEvent.data fields 1.object

Field definitions: [EnvironmentGrantCreatedEvent.data fields 1.object](../models/EnvironmentGrantCreatedEvent.md#environmentgrantcreatedeventdata-fields-1object).

### EnvironmentGrantRevokedEvent.source

Declared alternatives: [EnvironmentGrantCreatedEvent.source](../models/EnvironmentGrantCreatedEvent.md#environmentgrantcreatedeventsource).

