[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryActionRequiredPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_reservation_line_ids` | Optional | Array of string or null | IDs of the reservation lines that need action. `inventory_reservation_line_ids`: [declared alternatives](../models/InventoryActionRequiredPreviousAttributesInput.md#inventoryactionrequiredpreviousattributesinputinventory_reservation_line_ids). |
| `reason` | Optional | string or null | Why the reservation needs action. Values: `"inventory_shortage"`, `"hold_expired"`, `"payment_pending"`, `"other"`. `reason`: [declared alternatives](../models/InventoryActionRequiredPreviousAttributesInput.md#inventoryactionrequiredpreviousattributesinputreason). |

### InventoryActionRequiredPreviousAttributesInput.inventory_reservation_line_ids

### InventoryActionRequiredPreviousAttributesInput.inventory_reservation_line_ids variant 1

anyOf variant 1: IDs of the reservation lines that need action..

- Value shape: Array of string. IDs of the reservation lines that need action. Items: Example: `"invrln_01KEZF7C002JCDA729XDSNWGY5"`. 

### InventoryActionRequiredPreviousAttributesInput.inventory_reservation_line_ids variant 2

anyOf variant 2.

- Value shape: null. IDs of the reservation lines that need action. 

### InventoryActionRequiredPreviousAttributesInput.reason

### InventoryActionRequiredPreviousAttributesInput.reason variant 1

anyOf variant 1: Why the reservation needs action..

- Value shape: string. Why the reservation needs action. Values: `"inventory_shortage"`, `"hold_expired"`, `"payment_pending"`, `"other"`.

### InventoryActionRequiredPreviousAttributesInput.reason variant 2

anyOf variant 2.

- Value shape: null. Why the reservation needs action. 

