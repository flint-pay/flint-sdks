[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryCountObservationRequest

A counted quantity for one item in an inventory count, with the physical version it was read at.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `counted_damaged_quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. When omitted, keeps the line's expected_damaged_quantity from the same locked physical snapshot whose version was checked; the saved line reports that value as counted. Format: `int64`. minimum: `0`. |
| `counted_on_hand_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. minimum: `0`. |
| `counted_quality_control_quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. When omitted, keeps the line's expected_quality_control_quantity from the same locked physical snapshot whose version was checked; the saved line reports that value as counted. Format: `int64`. minimum: `0`. |
| `counted_quarantined_quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. When omitted, keeps the line's expected_quarantined_quantity from the same locked physical snapshot whose version was checked; the saved line reports that value as counted. Format: `int64`. minimum: `0`. |
| `expected_physical_version` | Required | integer | Physical version read before counting this item. Zero is valid for a missing level. Recount after physical stock changes, even when the count is unchanged; never refresh only the token. Format: `int64`. minimum: `0`. |
| `inventory_item_id` | Required | string | minLength: `1`. |
| `source_observation_sequence` | Optional | integer | Format: `int64`. minimum: `0`. |

