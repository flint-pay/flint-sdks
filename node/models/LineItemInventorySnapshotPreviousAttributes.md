[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LineItemInventorySnapshotPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `demands` | Optional | Array of [LineItemInventoryDemandPreviousAttributes](../models/LineItemInventoryDemandPreviousAttributes.md#lineiteminventorydemandpreviousattributes) or null | The inventory items and quantities each unit of the line item uses. `demands`: [declared alternatives](../models/LineItemInventorySnapshotPreviousAttributes.md#lineiteminventorysnapshotpreviousattributesdemands). |
| `inventory_tracking` | Optional | string or null | Whether the line item draws on tracked stock. Values: `"not_tracked"`, `"tracked"`. `inventory_tracking`: [declared alternatives](../models/LineItemInventorySnapshotPreviousAttributes.md#lineiteminventorysnapshotpreviousattributesinventory_tracking). |

### LineItemInventorySnapshotPreviousAttributes.demands

### LineItemInventorySnapshotPreviousAttributes.demands variant 1

anyOf variant 1: The inventory items and quantities each unit of the line item uses..

- Value shape: Array of [LineItemInventoryDemandPreviousAttributes](../models/LineItemInventoryDemandPreviousAttributes.md#lineiteminventorydemandpreviousattributes). The inventory items and quantities each unit of the line item uses. 

### LineItemInventorySnapshotPreviousAttributes.demands variant 2

anyOf variant 2.

- Value shape: null. The inventory items and quantities each unit of the line item uses. 

### LineItemInventorySnapshotPreviousAttributes.inventory_tracking

### LineItemInventorySnapshotPreviousAttributes.inventory_tracking variant 1

anyOf variant 1: Whether the line item draws on tracked stock..

- Value shape: string. Whether the line item draws on tracked stock. Values: `"not_tracked"`, `"tracked"`.

### LineItemInventorySnapshotPreviousAttributes.inventory_tracking variant 2

anyOf variant 2.

- Value shape: null. Whether the line item draws on tracked stock. 

