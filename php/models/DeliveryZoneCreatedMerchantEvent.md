[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryZoneCreatedMerchantEvent

The `delivery_zone.created` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [DeliveryZoneCreatedMerchantEventData](../models/DeliveryZoneCreatedMerchantEventData.md#deliveryzonecreatedmerchanteventdata) | `data`: [field definitions](../models/DeliveryZoneCreatedMerchantEvent.md#deliveryzonecreatedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"delivery_zone.created"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [DeliveryZoneCreatedMerchantEventRequest](../models/DeliveryZoneCreatedMerchantEventRequest.md#deliveryzonecreatedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### DeliveryZoneCreatedMerchantEvent.data fields 1

Field definitions: [shared fields](DeliveryZoneActivatedMerchantEvent.md#deliveryzoneactivatedmerchanteventdata-fields-1).

### DeliveryZoneCreatedMerchantEvent.data fields 1.object

Field definitions: [DeliveryZoneActivatedMerchantEvent.data fields 1.object](../models/DeliveryZoneActivatedMerchantEvent.md#deliveryzoneactivatedmerchanteventdata-fields-1object).

