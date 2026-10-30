[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppInstallCreatedEvent

The `partner_app_install.created` webhook payload for the `partner_app` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/PartnerAppInstallCreatedEvent.md#partnerappinstallcreatedeventdata). |
| `event_type` | Required | string | Values: `"partner_app_install.created"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/EnvironmentGrantCreatedEvent.md#environmentgrantcreatedeventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### PartnerAppInstallCreatedEvent.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [PartnerAppInstall](../models/PartnerAppInstall.md#partnerappinstall) | A merchant's authorization of a partner application. `object`: [field definitions](../models/PartnerAppInstallCreatedEvent.md#partnerappinstallcreatedeventdataobject). |

### PartnerAppInstallCreatedEvent.data.object

A merchant's authorization of a partner application.

Field definitions: [shared fields](PartnerAppInstall.md#partnerappinstall).

### PartnerAppInstallCreatedEvent.source

Declared alternatives: [EnvironmentGrantCreatedEvent.source](../models/EnvironmentGrantCreatedEvent.md#environmentgrantcreatedeventsource).

