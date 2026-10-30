[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryMovement

An immutable record of a single quantity change, including the level state it produced.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `committed_quantity_delta` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `created_by` | Required | [ResourceReference](../models/ResourceReference.md#resourcereference) or null | The credential that recorded this movement. null when Flint recorded it on its own, such as an expired hold or a fulfillment handoff. `created_by`: [declared alternatives](../models/InventoryMovement.md#inventorymovementcreated_by). |
| `damaged_quantity_delta` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `external_actor_id` | Optional | string | Your identifier for the actor who recorded the event. Don't put secrets in this field. maxLength: `255`. |
| `held_quantity_delta` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `idempotency_key` | Optional | string | The Idempotency-Key of the request that created this resource; on a movement, of the command that wrote it. Omitted when that request had no key. |
| `incoming_quantity_delta` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `inventory_item` | Optional | [InventoryItem](../models/InventoryItem.md#inventoryitem) | The inventory item this movement is about. Present only when the list request asked for expand=inventory_item. A stock-keeping unit that inventory quantities are tracked against. Catalog variants reference an inventory item rather than carrying their own counter. |
| `inventory_item_id` | Required | string |  |
| `inventory_level_claim_version` | Required | integer | Claim version of the inventory level after this movement. Advances when held or committed quantities change. Format: `int64`. minimum: `0`. |
| `inventory_level_id` | Required | string |  |
| `inventory_level_physical_version` | Required | integer | Physical version of the inventory level after this movement. Advances when on-hand or condition quantities change. Format: `int64`. minimum: `0`. |
| `inventory_level_version` | Required | integer | Version of the inventory level after this movement. Format: `int64`. minimum: `1`. |
| `inventory_movement_id` | Required | string |  |
| `location_id` | Required | string |  |
| `note` | Optional | string |  |
| `occurred_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `on_hand_quantity_delta` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `quality_control_quantity_delta` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `quarantined_quantity_delta` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `reason` | Optional | string | The adjustment's reason. Present only on adjustment movements; other movement types already describe what happened. Values: `"received"`, `"returned"`, `"sold"`, `"theft"`, `"loss"`, `"condition_changed"`, `"counted"`, `"correction"`. |
| `resulting_inventory_level` | Required | [InventoryLevel](../models/InventoryLevel.md#inventorylevel) | The quantity state of one inventory item at one Location. |
| `return_disposition_id` | Optional | string |  |
| `return_id` | Optional | string |  |
| `safety_stock_quantity_delta` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `source_observation_sequence` | Optional | integer | Format: `int64`. minimum: `0`. |
| `source_reference` | Required | [ResourceReference](../models/ResourceReference.md#resourcereference) | The GET-able resource whose write recorded this movement. A reference to another resource by `resource_type` and `resource_id`. `source_reference`: [field definitions](../models/InventoryMovement.md#inventorymovementsource_reference). |
| `source_system` | Required | [InventorySourceSystem](../models/InventorySourceSystem.md#inventorysourcesystem) or null |  |
| `type` | Required | string | Values: [16 declared values](#inventorymovement-type-values). |

#### InventoryMovement type values

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

### InventoryMovement.created_by

The credential that recorded this movement. null when Flint recorded it on its own, such as an expired hold or a fulfillment handoff.

Field definitions: [shared fields](CheckoutDeliveryPinnedDependency.md#checkoutdeliverypinneddependencydependency).

### InventoryMovement.created_by variant 1

anyOf ResourceReference: A reference to another resource by `resource_type` and `resource_id`..

- Required: `resource_id`, `resource_type`.

### InventoryMovement.created_by variant 2

anyOf variant 2.

- Undeclared: `resource_id`, `resource_type`.
- Value shape: null. The credential that recorded this movement. null when Flint recorded it on its own, such as an expired hold or a fulfillment handoff. 

### InventoryMovement.source_reference

The GET-able resource whose write recorded this movement. A reference to another resource by `resource_type` and `resource_id`.

Field definitions: [shared fields](APIRequestLog.md#apirequestlogcaller).

