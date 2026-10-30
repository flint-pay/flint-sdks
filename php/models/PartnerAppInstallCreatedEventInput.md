[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppInstallCreatedEventInput

The `partner_app_install.created` webhook payload for the `partner_app` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/PartnerAppInstallCreatedEventInput.md#partnerappinstallcreatedeventinputdata). |
| `event_type` | Required | string | Values: `"partner_app_install.created"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/EnvironmentGrantCreatedEventInput.md#environmentgrantcreatedeventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### PartnerAppInstallCreatedEventInput.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [PartnerAppInstallInput](../models/PartnerAppInstallInput.md#partnerappinstallinput) | A merchant's authorization of a partner application. `object`: [field definitions](../models/PartnerAppInstallCreatedEventInput.md#partnerappinstallcreatedeventinputdataobject). |

### PartnerAppInstallCreatedEventInput.data.object

A merchant's authorization of a partner application.

Field definitions: [shared fields](PartnerAppInstallInput.md#partnerappinstallinput).

### PartnerAppInstallCreatedEventInput.source

Declared alternatives: [EnvironmentGrantCreatedEventInput.source](../models/EnvironmentGrantCreatedEventInput.md#environmentgrantcreatedeventinputsource).

