[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryMovement

An immutable record of a single quantity change, including the level state it produced.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `backordered_quantity_delta` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `committed_quantity_delta` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `created_by` | Required | [ResourceReference](../models/ResourceReference.md#resourcereference) or null | The credential that recorded this movement. `null` when Flint recorded it on its own, such as an expired hold or a fulfillment handoff. |
| `damaged_quantity_delta` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `external_actor_id` | Optional | string | Your identifier for the actor who recorded the event. Don't put secrets in this field. maxLength: `255`. |
| `held_quantity_delta` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `idempotency_key` | Optional | string | The Idempotency-Key of the request that created this resource; on a movement, of the command that wrote it. Omitted when that request had no key. |
| `incoming_quantity_delta` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `inventory_item` | Optional | [InventoryItem](../models/InventoryItem.md#inventoryitem) | The inventory item this movement is about. Present only when the list request asked for expand=inventory_item. A stock-keeping unit that inventory quantities are tracked against. Catalog variants reference an inventory item rather than carrying their own counter. `inventory_item`: [field definitions](../models/InventoryMovementResponse.md#inventorymovementresponsedatainventory_item). |
| `inventory_item_id` | Required | string | ID of the inventory item the stock is for. |
| `inventory_level_claim_version` | Required | integer | Claim version of the inventory level after this movement. Advances when held or committed quantities change. Format: `int64`. minimum: `0`. |
| `inventory_level_id` | Required | string | ID of the inventory level this movement changed. |
| `inventory_level_physical_version` | Required | integer | Physical version of the inventory level after this movement. Advances when on-hand or condition quantities change. Format: `int64`. minimum: `0`. |
| `inventory_level_version` | Required | integer | Version of the inventory level after this movement. Format: `int64`. minimum: `1`. |
| `inventory_movement_id` | Required | string | Unique identifier for this inventory movement, prefixed `invm_`. |
| `location_id` | Required | string | ID of the Location that holds the stock. |
| `note` | Optional | string | Note recorded with the command that wrote this movement. Absent when it had none. |
| `occurred_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `on_hand_quantity_delta` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `quality_control_quantity_delta` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `quarantined_quantity_delta` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `reason` | Optional | string | The adjustment's reason. Present only on adjustment movements; other movement types already describe what happened. Values: `"received"`, `"returned"`, `"sold"`, `"theft"`, `"loss"`, `"condition_changed"`, `"counted"`, `"correction"`. |
| `resulting_inventory_level` | Required | [InventoryLevel](../models/InventoryLevel.md#inventorylevel) | The inventory level as it stood after this movement. The quantity state of one inventory item at one Location. `resulting_inventory_level`: [field definitions](../models/InventoryMovementResponse.md#inventorymovementresponsedataresulting_inventory_level). |
| `return_disposition_id` | Optional | string | ID of the Return disposition whose receipt wrote this movement. Absent on other movements. |
| `return_id` | Optional | string | ID of the Return whose receipt wrote this movement. Absent on other movements. |
| `safety_stock_quantity_delta` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `source_observation_sequence` | Optional | integer | Format: `int64`. minimum: `0`. |
| `source_reference` | Required | [ResourceReference](../models/ResourceReference.md#resourcereference) | The GET-able resource whose write recorded this movement. A reference to another resource by `resource_type` and `resource_id`. `source_reference`: [field definitions](../models/InventoryMovementResponse.md#inventorymovementresponsedatasource_reference). |
| `source_system` | Required | [InventorySourceSystem](../models/InventorySourceSystem.md#inventorysourcesystem) or null | System the change came from, such as a point-of-sale or warehouse system. `null` when the request named no source system. |
| `type` | Required | string | What caused this movement. Values: [16 declared values](InventoryMovementInput.md#inventorymovementinput-type-values). |

### InventoryMovement.inventory_item

Field definitions: [InventoryMovementResponse.data.inventory_item](../models/InventoryMovementResponse.md#inventorymovementresponsedatainventory_item).

### InventoryMovement.resulting_inventory_level

Field definitions: [InventoryMovementResponse.data.resulting_inventory_level](../models/InventoryMovementResponse.md#inventorymovementresponsedataresulting_inventory_level).

### InventoryMovement.source_reference

Field definitions: [InventoryMovementResponse.data.source_reference](../models/InventoryMovementResponse.md#inventorymovementresponsedatasource_reference).

