[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## EnvironmentGrantCreatedEvent

The `environment_grant.created` webhook payload for the `partner_app` event source.

Fields shared by partner webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [EnvironmentGrantCreatedEventData](../models/EnvironmentGrantCreatedEventData.md#environmentgrantcreatedeventdata) | `data`: [field definitions](../models/EnvironmentGrantCreatedEvent.md#environmentgrantcreatedeventdata-fields-1). |
| `event_type` | Required | string | Values: `"environment_grant.created"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | Alternative shapes (see declared variants) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/EnvironmentGrantCreatedEvent.md#environmentgrantcreatedeventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### EnvironmentGrantCreatedEvent.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [PartnerEnvironmentGrant](../models/PartnerEnvironmentGrant.md#partnerenvironmentgrant) | A partner application's authorization to access an environment. `object`: [field definitions](../models/EnvironmentGrantCreatedEvent.md#environmentgrantcreatedeventdata-fields-1object). |

### EnvironmentGrantCreatedEvent.data fields 1.object

A partner application's authorization to access an environment.

Field definitions: [shared fields](PartnerEnvironmentGrant.md#partnerenvironmentgrant).

### EnvironmentGrantCreatedEvent.source

The source of a partner webhook event, selected by type.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `merchant_id` | Required | string |  |
| `partner_app_install_id` | Required | string |  |
| `type` | Required | string | Values: `"partner_app"`. |

### EnvironmentGrantCreatedEvent.source variant 1: `type` = `"partner_app"`

oneOf with type: "partner_app": The partner_app source of a partner webhook event..

No additional constraints.

