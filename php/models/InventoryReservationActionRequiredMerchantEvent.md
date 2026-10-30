[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryReservationActionRequiredMerchantEvent

The `inventory_reservation.action_required` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [InventoryReservationActionRequiredMerchantEventData](../models/InventoryReservationActionRequiredMerchantEventData.md#inventoryreservationactionrequiredmerchanteventdata) | `data`: [field definitions](../models/InventoryReservationActionRequiredMerchantEvent.md#inventoryreservationactionrequiredmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"inventory_reservation.action_required"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [InventoryReservationActionRequiredMerchantEventRequest](../models/InventoryReservationActionRequiredMerchantEventRequest.md#inventoryreservationactionrequiredmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### InventoryReservationActionRequiredMerchantEvent.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [InventoryReservation](../models/InventoryReservation.md#inventoryreservation) | A claim on stock. Quantity moves from held to committed to consumed, and can be released or reallocated. `object`: [field definitions](../models/InventoryReservationActionRequiredMerchantEvent.md#inventoryreservationactionrequiredmerchanteventdata-fields-1object). |

### InventoryReservationActionRequiredMerchantEvent.data fields 1.object

A claim on stock. Quantity moves from held to committed to consumed, and can be released or reallocated.

Field definitions: [shared fields](InventoryReservation.md#inventoryreservation).

### InventoryReservationActionRequiredMerchantEvent.data fields 1.object.owner

Declared alternatives: [InventoryReservation.owner](../models/InventoryReservation.md#inventoryreservationowner).

