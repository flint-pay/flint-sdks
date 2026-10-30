[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardUpdatedMerchantEvent

The `gift_card.updated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [GiftCardUpdatedMerchantEventData](../models/GiftCardUpdatedMerchantEventData.md#giftcardupdatedmerchanteventdata) | `data`: [field definitions](../models/GiftCardUpdatedMerchantEvent.md#giftcardupdatedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"gift_card.updated"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [GiftCardUpdatedMerchantEventRequest](../models/GiftCardUpdatedMerchantEventRequest.md#giftcardupdatedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### GiftCardUpdatedMerchantEvent.data fields 1

Field definitions: [shared fields](GiftCardCreatedMerchantEvent.md#giftcardcreatedmerchanteventdata-fields-1).

### GiftCardUpdatedMerchantEvent.data fields 1.object

Field definitions: [GiftCardCreatedMerchantEvent.data fields 1.object](../models/GiftCardCreatedMerchantEvent.md#giftcardcreatedmerchanteventdata-fields-1object).

