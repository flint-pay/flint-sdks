[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardLoadCreatedMerchantEvent

The `gift_card_load.created` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [GiftCardLoadCreatedMerchantEventData](../models/GiftCardLoadCreatedMerchantEventData.md#giftcardloadcreatedmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/GiftCardLoadCreatedMerchantEvent.md#giftcardloadcreatedmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"gift_card_load.created"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [GiftCardLoadCreatedMerchantEventRequest](../models/GiftCardLoadCreatedMerchantEventRequest.md#giftcardloadcreatedmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### GiftCardLoadCreatedMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/GiftCardLoadCreatedMerchantEvent.md#giftcardloadcreatedmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. |

### GiftCardLoadCreatedMerchantEvent.data fields 1.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](GiftCardLoad.md#giftcardload).

### GiftCardLoadCreatedMerchantEvent.data fields 1.object.funding_disputes[]

Field definitions: [CreateGiftCardResultResponse.data.gift_card_load.funding_disputes[]](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_loadfunding_disputes).

### GiftCardLoadCreatedMerchantEvent.data fields 1.object.purchase_refund_value_holds[]

Field definitions: [CreateGiftCardResultResponse.data.gift_card_load.purchase_refund_value_holds[]](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_loadpurchase_refund_value_holds).

### GiftCardLoadCreatedMerchantEvent.data fields 1.object.purchase_refunds[]

Field definitions: [CreateGiftCardResultResponse.data.gift_card_load.purchase_refunds[]](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_loadpurchase_refunds).

### GiftCardLoadCreatedMerchantEvent.data fields 1.object.purchase_restoration

Field definitions: [CreateGiftCardResultResponse.data.gift_card_load.purchase_restoration](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_loadpurchase_restoration).

### GiftCardLoadCreatedMerchantEvent.data fields 1.object.refund_provenance

Field definitions: [CreateGiftCardResultResponse.data.gift_card_load.refund_provenance](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_loadrefund_provenance).

### GiftCardLoadCreatedMerchantEvent.data fields 1.object.source

Declared alternatives: [CreateGiftCardResultResponse.data.gift_card_load.source](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_loadsource).

