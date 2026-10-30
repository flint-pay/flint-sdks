[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionUpdatedMerchantEvent

The `promotion.updated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [PromotionUpdatedMerchantEventData](../models/PromotionUpdatedMerchantEventData.md#promotionupdatedmerchanteventdata) | `data`: [field definitions](../models/PromotionUpdatedMerchantEvent.md#promotionupdatedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"promotion.updated"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [PromotionUpdatedMerchantEventRequest](../models/PromotionUpdatedMerchantEventRequest.md#promotionupdatedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### PromotionUpdatedMerchantEvent.data fields 1

Field definitions: [shared fields](PromotionArchivedMerchantEvent.md#promotionarchivedmerchanteventdata-fields-1).

### PromotionUpdatedMerchantEvent.data fields 1.object

Field definitions: [PromotionArchivedMerchantEvent.data fields 1.object](../models/PromotionArchivedMerchantEvent.md#promotionarchivedmerchanteventdata-fields-1object).

