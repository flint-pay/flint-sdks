[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LineItemInventorySnapshot

Whether an order line item tracks inventory, and the inventory item quantities each unit demands.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `demands` | Required | Array of [LineItemInventoryDemand](../models/LineItemInventoryDemand.md#lineiteminventorydemand) |  |
| `inventory_tracking` | Required | string | Values: `"not_tracked"`, `"tracked"`. |

