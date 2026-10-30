[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionCreatedMerchantEvent

The `promotion.created` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [PromotionCreatedMerchantEventData](../models/PromotionCreatedMerchantEventData.md#promotioncreatedmerchanteventdata) | `data`: [field definitions](../models/PromotionCreatedMerchantEvent.md#promotioncreatedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"promotion.created"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [PromotionCreatedMerchantEventRequest](../models/PromotionCreatedMerchantEventRequest.md#promotioncreatedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### PromotionCreatedMerchantEvent.data fields 1

Field definitions: [shared fields](PromotionArchivedMerchantEvent.md#promotionarchivedmerchanteventdata-fields-1).

### PromotionCreatedMerchantEvent.data fields 1.object

Field definitions: [PromotionArchivedMerchantEvent.data fields 1.object](../models/PromotionArchivedMerchantEvent.md#promotionarchivedmerchanteventdata-fields-1object).

