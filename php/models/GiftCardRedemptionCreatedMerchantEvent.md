[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardRedemptionCreatedMerchantEvent

The `gift_card_redemption.created` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [GiftCardRedemptionCreatedMerchantEventData](../models/GiftCardRedemptionCreatedMerchantEventData.md#giftcardredemptioncreatedmerchanteventdata) | `data`: [field definitions](../models/GiftCardRedemptionCreatedMerchantEvent.md#giftcardredemptioncreatedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"gift_card_redemption.created"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [GiftCardRedemptionCreatedMerchantEventRequest](../models/GiftCardRedemptionCreatedMerchantEventRequest.md#giftcardredemptioncreatedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### GiftCardRedemptionCreatedMerchantEvent.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [GiftCardRedemption](../models/GiftCardRedemption.md#giftcardredemption) | Independent redemption resource. Operational reservations are separate from immutable posted transactions. Refund captured value with `POST /v1/refunds`, using a `tender_allocations` entry with `tender_type` `gift_card_redemption` and this redemption's ID. Refunds keep the redemption `captured` and increase `refunded_money`. `object`: [field definitions](../models/GiftCardRedemptionCreatedMerchantEvent.md#giftcardredemptioncreatedmerchanteventdata-fields-1object). |

### GiftCardRedemptionCreatedMerchantEvent.data fields 1.object

Independent redemption resource. Operational reservations are separate from immutable posted transactions. Refund captured value with `POST /v1/refunds`, using a `tender_allocations` entry with `tender_type` `gift_card_redemption` and this redemption's ID. Refunds keep the redemption `captured` and increase `refunded_money`.

Field definitions: [shared fields](GiftCardRedemption.md#giftcardredemption).

