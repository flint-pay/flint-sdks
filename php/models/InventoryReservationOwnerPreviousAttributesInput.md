[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryReservationOwnerPreviousAttributesInput

Who holds an inventory reservation: either a merchant claim identified by your `key`, or an order.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `key` | Conditional | string or null | Your identifier for the claim that holds the stock. `key`: [declared alternatives](../models/InventoryReservationOwnerMerchantPreviousAttributesInput.md#inventoryreservationownermerchantpreviousattributesinputkey). |
| `type` | Optional | string or null | Who holds the reservation. `type`: [declared alternatives](../models/InventoryReservationOwnerMerchantPreviousAttributesInput.md#inventoryreservationownermerchantpreviousattributesinputtype), [declared alternatives](../models/InventoryReservationOwnerOrderPreviousAttributesInput.md#inventoryreservationownerorderpreviousattributesinputtype). |
| `order_id` | Conditional | string or null | The order Flint holds the stock for. Absent only on a closed reservation whose order Flint can no longer identify. `order_id`: [declared alternatives](../models/InventoryReservationOwnerOrderPreviousAttributesInput.md#inventoryreservationownerorderpreviousattributesinputorder_id). |

### InventoryReservationOwnerPreviousAttributesInput variant 1: `type` = `"merchant"`

anyOf InventoryReservationOwnerMerchantPreviousAttributes.

- Optional: `key`.
- Undeclared: `order_id`.
- Constraints for `type`: Values: `"merchant"`.

### InventoryReservationOwnerPreviousAttributesInput variant 2: `type` = `"order"`

anyOf InventoryReservationOwnerOrderPreviousAttributes.

- Optional: `order_id`.
- Undeclared: `key`.
- Constraints for `type`: Values: `"order"`.

### InventoryReservationOwnerPreviousAttributesInput variant 1.key

Declared alternatives: [InventoryReservationOwnerMerchantPreviousAttributesInput.key](../models/InventoryReservationOwnerMerchantPreviousAttributesInput.md#inventoryreservationownermerchantpreviousattributesinputkey).

### InventoryReservationOwnerPreviousAttributesInput variant 1.type

Declared alternatives: [InventoryReservationOwnerMerchantPreviousAttributesInput.type](../models/InventoryReservationOwnerMerchantPreviousAttributesInput.md#inventoryreservationownermerchantpreviousattributesinputtype).

### InventoryReservationOwnerPreviousAttributesInput variant 2.order_id

Declared alternatives: [InventoryReservationOwnerOrderPreviousAttributesInput.order_id](../models/InventoryReservationOwnerOrderPreviousAttributesInput.md#inventoryreservationownerorderpreviousattributesinputorder_id).

### InventoryReservationOwnerPreviousAttributesInput variant 2.type

Declared alternatives: [InventoryReservationOwnerOrderPreviousAttributesInput.type](../models/InventoryReservationOwnerOrderPreviousAttributesInput.md#inventoryreservationownerorderpreviousattributesinputtype).

