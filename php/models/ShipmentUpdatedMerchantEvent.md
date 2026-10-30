[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ShipmentUpdatedMerchantEvent

The `shipment.updated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [ShipmentUpdatedMerchantEventData](../models/ShipmentUpdatedMerchantEventData.md#shipmentupdatedmerchanteventdata) | `data`: [field definitions](../models/ShipmentUpdatedMerchantEvent.md#shipmentupdatedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"shipment.updated"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [ShipmentUpdatedMerchantEventRequest](../models/ShipmentUpdatedMerchantEventRequest.md#shipmentupdatedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### ShipmentUpdatedMerchantEvent.data fields 1

Field definitions: [shared fields](ShipmentCreatedMerchantEvent.md#shipmentcreatedmerchanteventdata-fields-1).

### ShipmentUpdatedMerchantEvent.data fields 1.object

Field definitions: [ShipmentCreatedMerchantEvent.data fields 1.object](../models/ShipmentCreatedMerchantEvent.md#shipmentcreatedmerchanteventdata-fields-1object).

