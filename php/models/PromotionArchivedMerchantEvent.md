[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionArchivedMerchantEvent

The `promotion.archived` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [PromotionArchivedMerchantEventData](../models/PromotionArchivedMerchantEventData.md#promotionarchivedmerchanteventdata) | `data`: [field definitions](../models/PromotionArchivedMerchantEvent.md#promotionarchivedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"promotion.archived"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [PromotionArchivedMerchantEventRequest](../models/PromotionArchivedMerchantEventRequest.md#promotionarchivedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### PromotionArchivedMerchantEvent.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [Promotion](../models/Promotion.md#promotion) | Promotion evaluation order: manual discounts stay, do not count toward the cap, and are ignored by combines_with. Frozen subscription-term promotions are admitted first and are exempt from exclusivity, combines_with, and the cap. Candidates include codes being applied, existing promotion discounts, and qualifying automatic promotions. Each exclusivity group keeps its highest-priority member, then the larger standalone discount, earlier created_at, and lower promotion_id. Remaining candidates rank by standalone discount, then earlier created_at and lower promotion_id; each is admitted unless max_promotions_per_order is reached or both promotions do not allow each other's discount class. Admitted promotions price line item first, then order, then service charge. A zero-value promotion is dropped and selection runs again. `object`: [field definitions](../models/PromotionArchivedMerchantEvent.md#promotionarchivedmerchanteventdata-fields-1object). |

### PromotionArchivedMerchantEvent.data fields 1.object

Promotion evaluation order: manual discounts stay, do not count toward the cap, and are ignored by combines_with. Frozen subscription-term promotions are admitted first and are exempt from exclusivity, combines_with, and the cap. Candidates include codes being applied, existing promotion discounts, and qualifying automatic promotions. Each exclusivity group keeps its highest-priority member, then the larger standalone discount, earlier created_at, and lower promotion_id. Remaining candidates rank by standalone discount, then earlier created_at and lower promotion_id; each is admitted unless max_promotions_per_order is reached or both promotions do not allow each other's discount class. Admitted promotions price line item first, then order, then service charge. A zero-value promotion is dropped and selection runs again.

Field definitions: [shared fields](Promotion.md#promotion).

### PromotionArchivedMerchantEvent.data fields 1.object.application_method

Declared alternatives: [Promotion.application_method](../models/Promotion.md#promotionapplication_method).

### PromotionArchivedMerchantEvent.data fields 1.object.eligibility_rules

Declared alternatives: [Promotion.eligibility_rules](../models/Promotion.md#promotioneligibility_rules).

### PromotionArchivedMerchantEvent.data fields 1.object.metadata

Field definitions: [Promotion.metadata](../models/Promotion.md#promotionmetadata).

