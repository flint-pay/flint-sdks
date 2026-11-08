[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PriceListCreatedMerchantEvent

The `price_list.created` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [PriceListCreatedMerchantEventData](../models/PriceListCreatedMerchantEventData.md#pricelistcreatedmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/PriceListCreatedMerchantEvent.md#pricelistcreatedmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"price_list.created"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [PriceListCreatedMerchantEventRequest](../models/PriceListCreatedMerchantEventRequest.md#pricelistcreatedmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### PriceListCreatedMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

Field definitions: [shared fields](PriceListArchivedMerchantEvent.md#pricelistarchivedmerchanteventdata-fields-1).

### PriceListCreatedMerchantEvent.data fields 1.object

Field definitions: [PriceListArchivedMerchantEvent.data fields 1.object](../models/PriceListArchivedMerchantEvent.md#pricelistarchivedmerchanteventdata-fields-1object).

