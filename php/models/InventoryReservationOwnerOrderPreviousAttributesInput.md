[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryReservationOwnerOrderPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Optional | string or null | The order Flint holds the stock for. Absent only on a closed reservation whose order Flint can no longer identify. `order_id`: [declared alternatives](../models/InventoryReservationOwnerOrderPreviousAttributesInput.md#inventoryreservationownerorderpreviousattributesinputorder_id). |
| `type` | Optional | string or null | Who holds the reservation. Values: `"order"`. `type`: [declared alternatives](../models/InventoryReservationOwnerOrderPreviousAttributesInput.md#inventoryreservationownerorderpreviousattributesinputtype). |

### InventoryReservationOwnerOrderPreviousAttributesInput.order_id

### InventoryReservationOwnerOrderPreviousAttributesInput.order_id variant 1

anyOf variant 1: The order Flint holds the stock for. Absent only on a closed reservation whose order Flint can no longer identify..

- Value shape: string. The order Flint holds the stock for. Absent only on a closed reservation whose order Flint can no longer identify. The order Flint holds the stock for. Absent only on a closed reservation whose order Flint can no longer identify. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### InventoryReservationOwnerOrderPreviousAttributesInput.order_id variant 2

anyOf variant 2.

- Value shape: null. The order Flint holds the stock for. Absent only on a closed reservation whose order Flint can no longer identify. 

### InventoryReservationOwnerOrderPreviousAttributesInput.type

### InventoryReservationOwnerOrderPreviousAttributesInput.type variant 1

anyOf variant 1: Who holds the reservation..

- Value shape: string. Who holds the reservation. Values: `"order"`.

### InventoryReservationOwnerOrderPreviousAttributesInput.type variant 2

anyOf variant 2.

- Value shape: null. Who holds the reservation. 

