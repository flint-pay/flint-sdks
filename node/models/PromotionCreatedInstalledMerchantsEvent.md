[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionCreatedInstalledMerchantsEvent

The `promotion.created` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/PromotionArchivedInstalledMerchantsEvent.md#promotionarchivedinstalledmerchantseventdata). |
| `event_type` | Required | string | Values: `"promotion.created"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### PromotionCreatedInstalledMerchantsEvent.data

Field definitions: [PromotionArchivedInstalledMerchantsEvent.data](../models/PromotionArchivedInstalledMerchantsEvent.md#promotionarchivedinstalledmerchantseventdata).

### PromotionCreatedInstalledMerchantsEvent.source

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.source](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource).

