[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LineItemInventorySnapshot

Whether an order line item tracks inventory, and the inventory item quantities each unit demands.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `demands` | Required | Array of [LineItemInventoryDemand](../models/LineItemInventoryDemand.md#lineiteminventorydemand) | The inventory items and quantities each unit of the line item uses. `demands[]`: [field definitions](../models/LineItemInventorySnapshot.md#lineiteminventorysnapshotdemands). |
| `inventory_tracking` | Required | string | Whether the line item draws on tracked stock. Values: `"not_tracked"`, `"tracked"`. |

### LineItemInventorySnapshot.demands[]

The quantity of one inventory item that each unit of an order line item uses.

Field definitions: [shared fields](LineItemInventoryDemandInput.md#lineiteminventorydemandinput).

