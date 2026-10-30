[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ShipmentCreatedMerchantEvent

The `shipment.created` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [ShipmentCreatedMerchantEventData](../models/ShipmentCreatedMerchantEventData.md#shipmentcreatedmerchanteventdata) | `data`: [field definitions](../models/ShipmentCreatedMerchantEvent.md#shipmentcreatedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"shipment.created"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [ShipmentCreatedMerchantEventRequest](../models/ShipmentCreatedMerchantEventRequest.md#shipmentcreatedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### ShipmentCreatedMerchantEvent.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [Shipment](../models/Shipment.md#shipment) | A shipment carrying fulfilled order items. `object`: [field definitions](../models/ShipmentCreatedMerchantEvent.md#shipmentcreatedmerchanteventdata-fields-1object). |

### ShipmentCreatedMerchantEvent.data fields 1.object

A shipment carrying fulfilled order items.

Field definitions: [shared fields](Shipment.md#shipment).

### ShipmentCreatedMerchantEvent.data fields 1.object.metadata

Field definitions: [Shipment.metadata](../models/Shipment.md#shipmentmetadata).

