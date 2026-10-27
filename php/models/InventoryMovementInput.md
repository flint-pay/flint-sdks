[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryMovementInput

An immutable record of a single quantity change, including the level state it produced.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `committed_quantity_delta` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `created_by` | Required | [ResourceReferenceInput](../models/ResourceReferenceInput.md#resourcereferenceinput) or null | The credential that recorded this movement. null when Flint recorded it on its own, such as an expired hold or a fulfillment handoff. |
| `damaged_quantity_delta` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `external_actor_id` | Optional | string | Your identifier for the actor who recorded the event. Don't put secrets in this field. maxLength: `255`. |
| `held_quantity_delta` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `idempotency_key` | Optional | string |  |
| `incoming_quantity_delta` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `inventory_item` | Optional | [InventoryItemInput](../models/InventoryItemInput.md#inventoryiteminput) | The inventory item this movement is about. Present only when the list request asked for expand=inventory_item. A stock-keeping unit that inventory quantities are tracked against. Catalog variants reference an inventory item rather than carrying their own counter. |
| `inventory_item_id` | Required | string |  |
| `inventory_level_claim_version` | Required | integer string | Claim version of the inventory level after this movement. Advances when held or committed quantities change. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `0`. |
| `inventory_level_id` | Required | string |  |
| `inventory_level_physical_version` | Required | integer string | Physical version of the inventory level after this movement. Advances when on-hand or condition quantities change. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `0`. |
| `inventory_level_version` | Required | integer string | Version of the inventory level after this movement. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `0`. |
| `inventory_movement_id` | Required | string |  |
| `location_id` | Required | string |  |
| `note` | Optional | string |  |
| `occurred_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `on_hand_quantity_delta` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `quality_control_quantity_delta` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `quarantined_quantity_delta` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `reason` | Optional | string | The adjustment's reason. Present only on adjustment movements; other movement types already describe what happened. Values: `"received"`, `"returned"`, `"sold"`, `"theft"`, `"loss"`, `"condition_changed"`, `"counted"`, `"correction"`. |
| `resulting_inventory_level` | Required | [InventoryLevelInput](../models/InventoryLevelInput.md#inventorylevelinput) | The quantity state of one inventory item at one Location. |
| `return_disposition_id` | Optional | string |  |
| `return_id` | Optional | string |  |
| `safety_stock_quantity_delta` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `source_observation_sequence` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `source_reference` | Required | [ResourceReferenceInput](../models/ResourceReferenceInput.md#resourcereferenceinput) | The GET-able resource whose write recorded this movement. A reference to another resource by `resource_type` and `resource_id`. |
| `source_system` | Required | [InventorySourceSystemInput](../models/InventorySourceSystemInput.md#inventorysourcesysteminput) or null |  |
| `type` | Required | string | Values: [16 declared values](#inventorymovementinput-type-values). |

#### InventoryMovementInput type values

- `"adjustment"`
- `"count_applied"`
- `"reservation_consumed"`
- `"reservation_committed"`
- `"reservation_commitment_released"`
- `"reservation_expired"`
- `"reservation_held"`
- `"reservation_hold_released"`
- `"reservation_reallocated_in"`
- `"reservation_reallocated_out"`
- `"return_received"`
- `"safety_stock_change"`
- `"transfer_departed"`
- `"transfer_received"`
- `"transfer_returned"`
- `"transfer_lost"`

