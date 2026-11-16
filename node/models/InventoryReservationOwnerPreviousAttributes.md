[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryReservationOwnerPreviousAttributes

Who holds an inventory reservation: either a merchant claim identified by your `key`, or an order.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `key` | Conditional | string or null | Your identifier for the claim that holds the stock. `key`: [declared alternatives](../models/InventoryReservationOwnerMerchantPreviousAttributes.md#inventoryreservationownermerchantpreviousattributeskey). |
| `type` | Optional | string or null | Who holds the reservation. `type`: [declared alternatives](../models/InventoryReservationOwnerMerchantPreviousAttributes.md#inventoryreservationownermerchantpreviousattributestype), [declared alternatives](../models/InventoryReservationOwnerOrderPreviousAttributes.md#inventoryreservationownerorderpreviousattributestype). |
| `order_id` | Conditional | string or null | The order Flint holds the stock for. Absent only on a closed reservation whose order Flint can no longer identify. `order_id`: [declared alternatives](../models/InventoryReservationOwnerOrderPreviousAttributes.md#inventoryreservationownerorderpreviousattributesorder_id). |

### InventoryReservationOwnerPreviousAttributes variant 1: `type` = `"merchant"`

anyOf InventoryReservationOwnerMerchantPreviousAttributes.

- Optional: `key`.
- Undeclared: `order_id`.
- Constraints for `type`: Values: `"merchant"`.

### InventoryReservationOwnerPreviousAttributes variant 2: `type` = `"order"`

anyOf InventoryReservationOwnerOrderPreviousAttributes.

- Optional: `order_id`.
- Undeclared: `key`.
- Constraints for `type`: Values: `"order"`.

### InventoryReservationOwnerPreviousAttributes variant 1.key

Declared alternatives: [InventoryReservationOwnerMerchantPreviousAttributes.key](../models/InventoryReservationOwnerMerchantPreviousAttributes.md#inventoryreservationownermerchantpreviousattributeskey).

### InventoryReservationOwnerPreviousAttributes variant 1.type

Declared alternatives: [InventoryReservationOwnerMerchantPreviousAttributes.type](../models/InventoryReservationOwnerMerchantPreviousAttributes.md#inventoryreservationownermerchantpreviousattributestype).

### InventoryReservationOwnerPreviousAttributes variant 2.order_id

Declared alternatives: [InventoryReservationOwnerOrderPreviousAttributes.order_id](../models/InventoryReservationOwnerOrderPreviousAttributes.md#inventoryreservationownerorderpreviousattributesorder_id).

### InventoryReservationOwnerPreviousAttributes variant 2.type

Declared alternatives: [InventoryReservationOwnerOrderPreviousAttributes.type](../models/InventoryReservationOwnerOrderPreviousAttributes.md#inventoryreservationownerorderpreviousattributestype).

