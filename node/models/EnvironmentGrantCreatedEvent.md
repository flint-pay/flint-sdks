[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## EnvironmentGrantCreatedEvent

The `environment_grant.created` webhook payload for the `partner_app` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/EnvironmentGrantCreatedEvent.md#environmentgrantcreatedeventdata). |
| `event_type` | Required | string | Values: `"environment_grant.created"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/EnvironmentGrantCreatedEvent.md#environmentgrantcreatedeventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### EnvironmentGrantCreatedEvent.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [PartnerEnvironmentGrant](../models/PartnerEnvironmentGrant.md#partnerenvironmentgrant) | A partner application's authorization to access an environment. `object`: [field definitions](../models/EnvironmentGrantCreatedEvent.md#environmentgrantcreatedeventdataobject). |

### EnvironmentGrantCreatedEvent.data.object

A partner application's authorization to access an environment.

Field definitions: [shared fields](PartnerEnvironmentGrant.md#partnerenvironmentgrant).

### EnvironmentGrantCreatedEvent.data.object.granted_permissions[]

One permission a partner app can request, with a title, a description, and the Flint scopes it grants.

Field definitions: [shared fields](PartnerAppPermissionManifestEntryRequestInput.md#partnerapppermissionmanifestentryrequestinput).

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

