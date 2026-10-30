[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionCodeArchivedMerchantEvent

The `promotion_code.archived` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [PromotionCodeArchivedMerchantEventData](../models/PromotionCodeArchivedMerchantEventData.md#promotioncodearchivedmerchanteventdata) | `data`: [field definitions](../models/PromotionCodeArchivedMerchantEvent.md#promotioncodearchivedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"promotion_code.archived"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [PromotionCodeArchivedMerchantEventRequest](../models/PromotionCodeArchivedMerchantEventRequest.md#promotioncodearchivedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### PromotionCodeArchivedMerchantEvent.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [PromotionCode](../models/PromotionCode.md#promotioncode) | A code a buyer enters to claim a promotion. `object`: [field definitions](../models/PromotionCodeArchivedMerchantEvent.md#promotioncodearchivedmerchanteventdata-fields-1object). |

### PromotionCodeArchivedMerchantEvent.data fields 1.object

A code a buyer enters to claim a promotion.

Field definitions: [shared fields](PromotionCode.md#promotioncode).

### PromotionCodeArchivedMerchantEvent.data fields 1.object.metadata

Field definitions: [PromotionCode.metadata](../models/PromotionCode.md#promotioncodemetadata).

