[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryCountLine

One item's line in an inventory count, with the quantities Flint expected, the quantities counted, and the variance applied.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `captured_physical_version` | Required | integer string | Physical version accepted with the latest saved observation. Meaningful once counted_on_hand_quantity is present. Applying the count requires the same physical version. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `0`. |
| `counted_damaged_quantity` | Optional | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `counted_on_hand_quantity` | Optional | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `counted_quality_control_quantity` | Optional | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `counted_quarantined_quantity` | Optional | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `damaged_variance` | Optional | integer string | The difference this line applied to the damaged quantity. Present once the count is applied. A draft or canceled count omits it. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `expected_damaged_quantity` | Optional | integer string | The damaged quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `expected_on_hand_quantity` | Optional | integer string | The on-hand quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `expected_quality_control_quantity` | Optional | integer string | The quality-control quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `expected_quarantined_quantity` | Optional | integer string | The quarantined quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `inventory_count_line_id` | Required | string |  |
| `inventory_item_id` | Required | string |  |
| `inventory_movement_id` | Optional | string |  |
| `on_hand_variance` | Optional | integer string | The difference this line applied to the on-hand quantity. Present once the count is applied. A draft or canceled count omits it. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `quality_control_variance` | Optional | integer string | The difference this line applied to the quality-control quantity. Present once the count is applied. A draft or canceled count omits it. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `quarantined_variance` | Optional | integer string | The difference this line applied to the quarantined quantity. Present once the count is applied. A draft or canceled count omits it. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `source_observation_sequence` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `0`. |

