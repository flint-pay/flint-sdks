[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardLoadCreatedMerchantEvent

The `gift_card_load.created` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [GiftCardLoadCreatedMerchantEventData](../models/GiftCardLoadCreatedMerchantEventData.md#giftcardloadcreatedmerchanteventdata) | `data`: [field definitions](../models/GiftCardLoadCreatedMerchantEvent.md#giftcardloadcreatedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"gift_card_load.created"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [GiftCardLoadCreatedMerchantEventRequest](../models/GiftCardLoadCreatedMerchantEventRequest.md#giftcardloadcreatedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### GiftCardLoadCreatedMerchantEvent.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [GiftCardLoad](../models/GiftCardLoad.md#giftcardload) | Independent funding resource. Value and consideration are separate. External funding and import provenance are merchant-attested; no payment is collected by recording them. Replacement refund lots retain original funding provenance and do not represent new paid funding. `object`: [field definitions](../models/GiftCardLoadCreatedMerchantEvent.md#giftcardloadcreatedmerchanteventdata-fields-1object). |

### GiftCardLoadCreatedMerchantEvent.data fields 1.object

Independent funding resource. Value and consideration are separate. External funding and import provenance are merchant-attested; no payment is collected by recording them. Replacement refund lots retain original funding provenance and do not represent new paid funding.

Field definitions: [shared fields](GiftCardLoad.md#giftcardload).

### GiftCardLoadCreatedMerchantEvent.data fields 1.object.source

Declared alternatives: [GiftCardLoad.source](../models/GiftCardLoad.md#giftcardloadsource).

