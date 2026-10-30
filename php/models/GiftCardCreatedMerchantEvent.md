[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardCreatedMerchantEvent

The `gift_card.created` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [GiftCardCreatedMerchantEventData](../models/GiftCardCreatedMerchantEventData.md#giftcardcreatedmerchanteventdata) | `data`: [field definitions](../models/GiftCardCreatedMerchantEvent.md#giftcardcreatedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"gift_card.created"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [GiftCardCreatedMerchantEventRequest](../models/GiftCardCreatedMerchantEventRequest.md#giftcardcreatedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### GiftCardCreatedMerchantEvent.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [GiftCard](../models/GiftCard.md#giftcard) | Merchant-issued purchased gift card. Posted balance includes reserved value; available value is balance minus reservations. Frozen value remains part of outstanding liability. Gift cards are independent resources and cannot be transferred across merchants or currencies. `object`: [field definitions](../models/GiftCardCreatedMerchantEvent.md#giftcardcreatedmerchanteventdata-fields-1object). |

### GiftCardCreatedMerchantEvent.data fields 1.object

Merchant-issued purchased gift card. Posted balance includes reserved value; available value is balance minus reservations. Frozen value remains part of outstanding liability. Gift cards are independent resources and cannot be transferred across merchants or currencies.

Field definitions: [shared fields](GiftCardResponse.md#giftcardresponsedata).

