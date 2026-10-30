[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardLoadUpdatedMerchantEvent

The `gift_card_load.updated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [GiftCardLoadUpdatedMerchantEventData](../models/GiftCardLoadUpdatedMerchantEventData.md#giftcardloadupdatedmerchanteventdata) | `data`: [field definitions](../models/GiftCardLoadUpdatedMerchantEvent.md#giftcardloadupdatedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"gift_card_load.updated"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [GiftCardLoadUpdatedMerchantEventRequest](../models/GiftCardLoadUpdatedMerchantEventRequest.md#giftcardloadupdatedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### GiftCardLoadUpdatedMerchantEvent.data fields 1

Field definitions: [shared fields](GiftCardLoadCreatedMerchantEvent.md#giftcardloadcreatedmerchanteventdata-fields-1).

### GiftCardLoadUpdatedMerchantEvent.data fields 1.object

Field definitions: [GiftCardLoadCreatedMerchantEvent.data fields 1.object](../models/GiftCardLoadCreatedMerchantEvent.md#giftcardloadcreatedmerchanteventdata-fields-1object).

