[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryAdjustmentSetLineRequestInput

One line of an inventory adjustment that sets absolute quantities for an item at a Location. Omitted quantities stay unchanged.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `damaged_quantity` | Conditional | integer | Absolute damaged quantity to record. Omit to leave it unchanged. Whole-number quantity; fractional quantities are not supported. Format: `int64`. minimum: `0`. |
| `expected_physical_version` | Optional | integer | Refuse the line unless the level's `physical_version` still equals this value. A level that doesn't exist yet has physical version 0. Holds and commitments do not change it. Format: `int64`. minimum: `0`. |
| `inventory_item_id` | Required | string | minLength: `1`. |
| `location_id` | Required | string | minLength: `1`. |
| `on_hand_quantity` | Conditional | integer | Absolute on-hand quantity to record. Omit to leave it unchanged. Whole-number quantity; fractional quantities are not supported. Format: `int64`. minimum: `0`. |
| `quality_control_quantity` | Conditional | integer | Absolute quality-control quantity to record. Omit to leave it unchanged. Whole-number quantity; fractional quantities are not supported. Format: `int64`. minimum: `0`. |
| `quarantined_quantity` | Conditional | integer | Absolute quarantined quantity to record. Omit to leave it unchanged. Whole-number quantity; fractional quantities are not supported. Format: `int64`. minimum: `0`. |
| `source_observation_sequence` | Optional | integer | Monotonic sequence of this observation in the source system. Flint refuses a value that is not greater than the last accepted one for the same source, item, and Location. Format: `int64`. minimum: `1`. |

### InventoryAdjustmentSetLineRequestInput variant 1

anyOf variant 1.

- Required: `on_hand_quantity`.
- Optional: `damaged_quantity`, `quality_control_quantity`, `quarantined_quantity`.

### InventoryAdjustmentSetLineRequestInput variant 2

anyOf variant 2.

- Required: `quality_control_quantity`.
- Optional: `damaged_quantity`, `on_hand_quantity`, `quarantined_quantity`.

### InventoryAdjustmentSetLineRequestInput variant 3

anyOf variant 3.

- Required: `damaged_quantity`.
- Optional: `on_hand_quantity`, `quality_control_quantity`, `quarantined_quantity`.

### InventoryAdjustmentSetLineRequestInput variant 4

anyOf variant 4.

- Required: `quarantined_quantity`.
- Optional: `damaged_quantity`, `on_hand_quantity`, `quality_control_quantity`.

