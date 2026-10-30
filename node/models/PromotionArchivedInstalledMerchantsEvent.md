[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionArchivedInstalledMerchantsEvent

The `promotion.archived` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/PromotionArchivedInstalledMerchantsEvent.md#promotionarchivedinstalledmerchantseventdata). |
| `event_type` | Required | string | Values: `"promotion.archived"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### PromotionArchivedInstalledMerchantsEvent.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [Promotion](../models/Promotion.md#promotion) | Promotion evaluation order: manual discounts stay, do not count toward the cap, and are ignored by combines_with. Frozen subscription-term promotions are admitted first and are exempt from exclusivity, combines_with, and the cap. Candidates include codes being applied, existing promotion discounts, and qualifying automatic promotions. Each exclusivity group keeps its highest-priority member, then the larger standalone discount, earlier created_at, and lower promotion_id. Remaining candidates rank by standalone discount, then earlier created_at and lower promotion_id; each is admitted unless max_promotions_per_order is reached or both promotions do not allow each other's discount class. Admitted promotions price line item first, then order, then service charge. A zero-value promotion is dropped and selection runs again. `object`: [field definitions](../models/PromotionArchivedInstalledMerchantsEvent.md#promotionarchivedinstalledmerchantseventdataobject). |

### PromotionArchivedInstalledMerchantsEvent.data.object

Promotion evaluation order: manual discounts stay, do not count toward the cap, and are ignored by combines_with. Frozen subscription-term promotions are admitted first and are exempt from exclusivity, combines_with, and the cap. Candidates include codes being applied, existing promotion discounts, and qualifying automatic promotions. Each exclusivity group keeps its highest-priority member, then the larger standalone discount, earlier created_at, and lower promotion_id. Remaining candidates rank by standalone discount, then earlier created_at and lower promotion_id; each is admitted unless max_promotions_per_order is reached or both promotions do not allow each other's discount class. Admitted promotions price line item first, then order, then service charge. A zero-value promotion is dropped and selection runs again.

Field definitions: [shared fields](Promotion.md#promotion).

### PromotionArchivedInstalledMerchantsEvent.data.object.metadata

Field definitions: [Promotion.metadata](../models/Promotion.md#promotionmetadata).

### PromotionArchivedInstalledMerchantsEvent.data.object.schedule

Field definitions: [Promotion.schedule fields 1](../models/Promotion.md#promotionschedule-fields-1).

### PromotionArchivedInstalledMerchantsEvent.source

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.source](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource).

