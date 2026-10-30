[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryReservationAtRiskMerchantEvent

The `inventory_reservation.at_risk` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [InventoryReservationAtRiskMerchantEventData](../models/InventoryReservationAtRiskMerchantEventData.md#inventoryreservationatriskmerchanteventdata) | `data`: [field definitions](../models/InventoryReservationAtRiskMerchantEvent.md#inventoryreservationatriskmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"inventory_reservation.at_risk"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [InventoryReservationAtRiskMerchantEventRequest](../models/InventoryReservationAtRiskMerchantEventRequest.md#inventoryreservationatriskmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### InventoryReservationAtRiskMerchantEvent.data fields 1

Field definitions: [shared fields](InventoryReservationActionRequiredMerchantEvent.md#inventoryreservationactionrequiredmerchanteventdata-fields-1).

### InventoryReservationAtRiskMerchantEvent.data fields 1.object

Field definitions: [InventoryReservationActionRequiredMerchantEvent.data fields 1.object](../models/InventoryReservationActionRequiredMerchantEvent.md#inventoryreservationactionrequiredmerchanteventdata-fields-1object).

