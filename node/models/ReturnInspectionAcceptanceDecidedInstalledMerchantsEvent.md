[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent

The `return_inspection.acceptance_decided` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.md#returninspectionacceptancedecidedinstalledmerchantseventdata). |
| `event_type` | Required | string | Values: `"return_inspection.acceptance_decided"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [ReturnInspection](../models/ReturnInspection.md#returninspection) | An assessment of the condition of returned items. `object`: [field definitions](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.md#returninspectionacceptancedecidedinstalledmerchantseventdataobject). |

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.object

An assessment of the condition of returned items.

Field definitions: [shared fields](ReturnInspection.md#returninspection).

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.source

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.source](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource).

