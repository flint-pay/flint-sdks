[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardRedemptionUpdatedMerchantEvent

The `gift_card_redemption.updated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [GiftCardRedemptionUpdatedMerchantEventData](../models/GiftCardRedemptionUpdatedMerchantEventData.md#giftcardredemptionupdatedmerchanteventdata) | `data`: [field definitions](../models/GiftCardRedemptionUpdatedMerchantEvent.md#giftcardredemptionupdatedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"gift_card_redemption.updated"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [GiftCardRedemptionUpdatedMerchantEventRequest](../models/GiftCardRedemptionUpdatedMerchantEventRequest.md#giftcardredemptionupdatedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### GiftCardRedemptionUpdatedMerchantEvent.data fields 1

Field definitions: [shared fields](GiftCardRedemptionCreatedMerchantEvent.md#giftcardredemptioncreatedmerchanteventdata-fields-1).

### GiftCardRedemptionUpdatedMerchantEvent.data fields 1.object

Field definitions: [GiftCardRedemptionCreatedMerchantEvent.data fields 1.object](../models/GiftCardRedemptionCreatedMerchantEvent.md#giftcardredemptioncreatedmerchanteventdata-fields-1object).

