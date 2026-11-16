[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryReservationOwnerOrderPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Optional | string or null | The order Flint holds the stock for. Absent only on a closed reservation whose order Flint can no longer identify. `order_id`: [declared alternatives](../models/InventoryReservationOwnerOrderPreviousAttributes.md#inventoryreservationownerorderpreviousattributesorder_id). |
| `type` | Optional | string or null | Who holds the reservation. Values: `"order"`. `type`: [declared alternatives](../models/InventoryReservationOwnerOrderPreviousAttributes.md#inventoryreservationownerorderpreviousattributestype). |

### InventoryReservationOwnerOrderPreviousAttributes.order_id

### InventoryReservationOwnerOrderPreviousAttributes.order_id variant 1

anyOf variant 1: The order Flint holds the stock for. Absent only on a closed reservation whose order Flint can no longer identify..

- Value shape: string. The order Flint holds the stock for. Absent only on a closed reservation whose order Flint can no longer identify. The order Flint holds the stock for. Absent only on a closed reservation whose order Flint can no longer identify. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### InventoryReservationOwnerOrderPreviousAttributes.order_id variant 2

anyOf variant 2.

- Value shape: null. The order Flint holds the stock for. Absent only on a closed reservation whose order Flint can no longer identify. 

### InventoryReservationOwnerOrderPreviousAttributes.type

### InventoryReservationOwnerOrderPreviousAttributes.type variant 1

anyOf variant 1: Who holds the reservation..

- Value shape: string. Who holds the reservation. Values: `"order"`.

### InventoryReservationOwnerOrderPreviousAttributes.type variant 2

anyOf variant 2.

- Value shape: null. Who holds the reservation. 

