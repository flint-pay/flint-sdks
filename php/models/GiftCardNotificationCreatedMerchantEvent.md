[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardNotificationCreatedMerchantEvent

The `gift_card_notification.created` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [GiftCardNotificationCreatedMerchantEventData](../models/GiftCardNotificationCreatedMerchantEventData.md#giftcardnotificationcreatedmerchanteventdata) | `data`: [field definitions](../models/GiftCardNotificationCreatedMerchantEvent.md#giftcardnotificationcreatedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"gift_card_notification.created"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [GiftCardNotificationCreatedMerchantEventRequest](../models/GiftCardNotificationCreatedMerchantEventRequest.md#giftcardnotificationcreatedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### GiftCardNotificationCreatedMerchantEvent.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [GiftCardNotification](../models/GiftCardNotification.md#giftcardnotification) | A message sent to a gift card recipient. `object`: [field definitions](../models/GiftCardNotificationCreatedMerchantEvent.md#giftcardnotificationcreatedmerchanteventdata-fields-1object). |

### GiftCardNotificationCreatedMerchantEvent.data fields 1.object

A message sent to a gift card recipient.

Field definitions: [shared fields](GiftCardNotification.md#giftcardnotification).

