[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryReservationResult

inventory_reservation is the primary resource and expected_version target. Stock-moving actions return this result instead of a resource alone.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_levels` | Required | Array of [InventoryLevel](../models/InventoryLevel.md#inventorylevel) | Post-commit state of every level this command touched, so no follow-up read is needed. A replay returns the levels the original command produced. `inventory_levels[]`: [field definitions](../models/InventoryLevelListResponse.md#inventorylevellistresponsedata). |
| `inventory_reservation` | Required | [InventoryReservation](../models/InventoryReservation.md#inventoryreservation) | The inventory reservation. A claim on stock. Quantity moves from held to committed to consumed, and can be released or reallocated. `inventory_reservation`: [field definitions](../models/InventoryReservationResult.md#inventoryreservationresultinventory_reservation). |

### InventoryReservationResult.inventory_levels[]

Field definitions: [InventoryLevelListResponse.data[]](../models/InventoryLevelListResponse.md#inventorylevellistresponsedata).

### InventoryReservationResult.inventory_reservation

The inventory reservation. A claim on stock. Quantity moves from held to committed to consumed, and can be released or reallocated.

Field definitions: [shared fields](InventoryReservationResponse.md#inventoryreservationresponsedata).

### InventoryReservationResult.inventory_reservation.inventory_action_required

Field definitions: [InventoryReservationResponse.data.inventory_action_required](../models/InventoryReservationResponse.md#inventoryreservationresponsedatainventory_action_required).

### InventoryReservationResult.inventory_reservation.inventory_routing_source

Field definitions: [InventoryReservationResponse.data.inventory_routing_source](../models/InventoryReservationResponse.md#inventoryreservationresponsedatainventory_routing_source).

### InventoryReservationResult.inventory_reservation.lines[]

Field definitions: [InventoryReservationResponse.data.lines[]](../models/InventoryReservationResponse.md#inventoryreservationresponsedatalines).

### InventoryReservationResult.inventory_reservation.owner

Declared alternatives: [InventoryReservationResponse.data.owner](../models/InventoryReservationResponse.md#inventoryreservationresponsedataowner).

