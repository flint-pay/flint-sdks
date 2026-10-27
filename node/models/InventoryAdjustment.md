[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryAdjustment

A recorded stock change with its reason and the quantity changes Flint computed.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `external_actor_id` | Optional | string | Your identifier for the actor who recorded the event. Don't put secrets in this field. maxLength: `255`. |
| `idempotency_key` | Required | string |  |
| `inventory_adjustment_id` | Required | string |  |
| `lines` | Required | Array of [InventoryAdjustmentLine](../models/InventoryAdjustmentLine.md#inventoryadjustmentline) |  |
| `note` | Optional | string |  |
| `occurred_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `reason` | Required | string | Values: `"received"`, `"returned"`, `"sold"`, `"theft"`, `"loss"`, `"condition_changed"`, `"counted"`, `"correction"`. |
| `source_system` | Required | [InventorySourceSystem](../models/InventorySourceSystem.md#inventorysourcesystem) or null |  |

