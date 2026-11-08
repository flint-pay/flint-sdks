[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryCountLine

One item's line in an inventory count, with the quantities Flint expected, the quantities counted, and the variance applied.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `captured_physical_version` | Required | integer | Physical version accepted with the latest saved observation. Meaningful once counted_on_hand_quantity is present. Applying the count requires the same physical version. Format: `int64`. minimum: `0`. |
| `counted_damaged_quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `counted_on_hand_quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `counted_quality_control_quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `counted_quarantined_quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `damaged_variance` | Optional | integer | The difference this line applied to the damaged quantity. Present once the count is applied. A draft or canceled count omits it. Format: `int64`. |
| `expected_damaged_quantity` | Optional | integer | The damaged quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `expected_on_hand_quantity` | Optional | integer | The on-hand quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `expected_quality_control_quantity` | Optional | integer | The quality-control quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `expected_quarantined_quantity` | Optional | integer | The quarantined quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `inventory_count_line_id` | Required | string | Unique identifier for this inventory count line, prefixed `invcln_`. Example: `"invcln_01KEZF7C00BJK1S36219KK040Q"`. |
| `inventory_item_id` | Required | string | ID of the inventory item counted. Example: `"invi_01KEZF7C00A6YEM25MTHW2MPZY"`. |
| `inventory_movement_id` | Optional | string | Movement this line wrote when the count was applied. Absent on a draft or canceled count. Example: `"invm_01KEZF7C00DYPFT9PS0NZY805Z"`. |
| `on_hand_variance` | Optional | integer | The difference this line applied to the on-hand quantity. Present once the count is applied. A draft or canceled count omits it. Format: `int64`. |
| `physical_version` | Required | integer or null | Live physical version of the level, read alongside expected quantities on draft lines. Evidence of current stock, not a fence captured at count creation. `null` when the count is applied or canceled. Format: `uint64`. minimum: `0`. maximum: `9007199254740991`. |
| `quality_control_variance` | Optional | integer | The difference this line applied to the quality-control quantity. Present once the count is applied. A draft or canceled count omits it. Format: `int64`. |
| `quarantined_variance` | Optional | integer | The difference this line applied to the quarantined quantity. Present once the count is applied. A draft or canceled count omits it. Format: `int64`. |
| `source_observation_sequence` | Optional | integer | Format: `int64`. minimum: `0`. |

