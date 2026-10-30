[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryZoneUpdatedMerchantEvent

The `delivery_zone.updated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [DeliveryZoneUpdatedMerchantEventData](../models/DeliveryZoneUpdatedMerchantEventData.md#deliveryzoneupdatedmerchanteventdata) | `data`: [field definitions](../models/DeliveryZoneUpdatedMerchantEvent.md#deliveryzoneupdatedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"delivery_zone.updated"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [DeliveryZoneUpdatedMerchantEventRequest](../models/DeliveryZoneUpdatedMerchantEventRequest.md#deliveryzoneupdatedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### DeliveryZoneUpdatedMerchantEvent.data fields 1

Field definitions: [shared fields](DeliveryZoneActivatedMerchantEvent.md#deliveryzoneactivatedmerchanteventdata-fields-1).

### DeliveryZoneUpdatedMerchantEvent.data fields 1.object

Field definitions: [DeliveryZoneActivatedMerchantEvent.data fields 1.object](../models/DeliveryZoneActivatedMerchantEvent.md#deliveryzoneactivatedmerchanteventdata-fields-1object).

