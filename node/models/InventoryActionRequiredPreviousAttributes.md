[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryActionRequiredPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_reservation_line_ids` | Optional | Array of string or null | IDs of the reservation lines that need action. `inventory_reservation_line_ids`: [declared alternatives](../models/InventoryActionRequiredPreviousAttributes.md#inventoryactionrequiredpreviousattributesinventory_reservation_line_ids). |
| `reason` | Optional | string or null | Why the reservation needs action. Values: `"inventory_shortage"`, `"hold_expired"`, `"payment_pending"`, `"other"`. `reason`: [declared alternatives](../models/InventoryActionRequiredPreviousAttributes.md#inventoryactionrequiredpreviousattributesreason). |

### InventoryActionRequiredPreviousAttributes.inventory_reservation_line_ids

### InventoryActionRequiredPreviousAttributes.inventory_reservation_line_ids variant 1

anyOf variant 1: IDs of the reservation lines that need action..

- Value shape: Array of string. IDs of the reservation lines that need action. Items: Example: `"invrln_01KEZF7C002JCDA729XDSNWGY5"`. 

### InventoryActionRequiredPreviousAttributes.inventory_reservation_line_ids variant 2

anyOf variant 2.

- Value shape: null. IDs of the reservation lines that need action. 

### InventoryActionRequiredPreviousAttributes.reason

### InventoryActionRequiredPreviousAttributes.reason variant 1

anyOf variant 1: Why the reservation needs action..

- Value shape: string. Why the reservation needs action. Values: `"inventory_shortage"`, `"hold_expired"`, `"payment_pending"`, `"other"`.

### InventoryActionRequiredPreviousAttributes.reason variant 2

anyOf variant 2.

- Value shape: null. Why the reservation needs action. 

