[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LineItemInventorySnapshotInput

Whether an order line item tracks inventory, and the inventory item quantities each unit demands.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `demands` | Required | Array of [LineItemInventoryDemandInput](../models/LineItemInventoryDemandInput.md#lineiteminventorydemandinput) |  |
| `inventory_tracking` | Required | string | Values: `"not_tracked"`, `"tracked"`. |

