[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryRoutingSourcePreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_allocation_policy_id` | Optional | string or null | ID of the allocation policy that routes demand. `inventory_allocation_policy_id`: [declared alternatives](../models/InventoryRoutingSourcePreviousAttributesInput.md#inventoryroutingsourcepreviousattributesinputinventory_allocation_policy_id). |
| `inventory_allocation_policy_revision_id` | Optional | string or null | ID of the allocation policy revision that routes demand. `inventory_allocation_policy_revision_id`: [declared alternatives](../models/InventoryRoutingSourcePreviousAttributesInput.md#inventoryroutingsourcepreviousattributesinputinventory_allocation_policy_revision_id). |
| `location_id` | Optional | string or null | ID of the fixed Location that serves all demand. `location_id`: [declared alternatives](../models/InventoryRoutingSourcePreviousAttributesInput.md#inventoryroutingsourcepreviousattributesinputlocation_id). |
| `type` | Optional | string or null | How Flint routes demand to Locations. Values: `"fixed_location"`, `"policy"`, `"policy_revision"`. `type`: [declared alternatives](../models/InventoryRoutingSourcePreviousAttributesInput.md#inventoryroutingsourcepreviousattributesinputtype). |

### InventoryRoutingSourcePreviousAttributesInput.inventory_allocation_policy_id

### InventoryRoutingSourcePreviousAttributesInput.inventory_allocation_policy_id variant 1

anyOf variant 1: ID of the allocation policy that routes demand..

- Value shape: string. ID of the allocation policy that routes demand. ID of the allocation policy that routes demand. Example: `"invp_01KEZF7C0076BZX855WAGC5SQK"`. 

### InventoryRoutingSourcePreviousAttributesInput.inventory_allocation_policy_id variant 2

anyOf variant 2.

- Value shape: null. ID of the allocation policy that routes demand. 

### InventoryRoutingSourcePreviousAttributesInput.inventory_allocation_policy_revision_id

### InventoryRoutingSourcePreviousAttributesInput.inventory_allocation_policy_revision_id variant 1

anyOf variant 1: ID of the allocation policy revision that routes demand..

- Value shape: string. ID of the allocation policy revision that routes demand. ID of the allocation policy revision that routes demand. Example: `"invpv_01KEZF7C00JSFTTBKC1JY614JJ"`. 

### InventoryRoutingSourcePreviousAttributesInput.inventory_allocation_policy_revision_id variant 2

anyOf variant 2.

- Value shape: null. ID of the allocation policy revision that routes demand. 

### InventoryRoutingSourcePreviousAttributesInput.location_id

### InventoryRoutingSourcePreviousAttributesInput.location_id variant 1

anyOf variant 1: ID of the fixed Location that serves all demand..

- Value shape: string. ID of the fixed Location that serves all demand. ID of the fixed Location that serves all demand. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### InventoryRoutingSourcePreviousAttributesInput.location_id variant 2

anyOf variant 2.

- Value shape: null. ID of the fixed Location that serves all demand. 

### InventoryRoutingSourcePreviousAttributesInput.type

### InventoryRoutingSourcePreviousAttributesInput.type variant 1

anyOf variant 1: How Flint routes demand to Locations..

- Value shape: string. How Flint routes demand to Locations. Values: `"fixed_location"`, `"policy"`, `"policy_revision"`.

### InventoryRoutingSourcePreviousAttributesInput.type variant 2

anyOf variant 2.

- Value shape: null. How Flint routes demand to Locations. 

