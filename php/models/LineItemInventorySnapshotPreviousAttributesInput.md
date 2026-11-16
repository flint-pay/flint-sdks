[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LineItemInventorySnapshotPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `demands` | Optional | Array of [LineItemInventoryDemandPreviousAttributesInput](../models/LineItemInventoryDemandPreviousAttributesInput.md#lineiteminventorydemandpreviousattributesinput) or null | The inventory items and quantities each unit of the line item uses. `demands`: [declared alternatives](../models/LineItemInventorySnapshotPreviousAttributesInput.md#lineiteminventorysnapshotpreviousattributesinputdemands). |
| `inventory_tracking` | Optional | string or null | Whether the line item draws on tracked stock. Values: `"not_tracked"`, `"tracked"`. `inventory_tracking`: [declared alternatives](../models/LineItemInventorySnapshotPreviousAttributesInput.md#lineiteminventorysnapshotpreviousattributesinputinventory_tracking). |

### LineItemInventorySnapshotPreviousAttributesInput.demands

### LineItemInventorySnapshotPreviousAttributesInput.demands variant 1

anyOf variant 1: The inventory items and quantities each unit of the line item uses..

- Value shape: Array of [LineItemInventoryDemandPreviousAttributesInput](../models/LineItemInventoryDemandPreviousAttributesInput.md#lineiteminventorydemandpreviousattributesinput). The inventory items and quantities each unit of the line item uses. 

### LineItemInventorySnapshotPreviousAttributesInput.demands variant 2

anyOf variant 2.

- Value shape: null. The inventory items and quantities each unit of the line item uses. 

### LineItemInventorySnapshotPreviousAttributesInput.inventory_tracking

### LineItemInventorySnapshotPreviousAttributesInput.inventory_tracking variant 1

anyOf variant 1: Whether the line item draws on tracked stock..

- Value shape: string. Whether the line item draws on tracked stock. Values: `"not_tracked"`, `"tracked"`.

### LineItemInventorySnapshotPreviousAttributesInput.inventory_tracking variant 2

anyOf variant 2.

- Value shape: null. Whether the line item draws on tracked stock. 

