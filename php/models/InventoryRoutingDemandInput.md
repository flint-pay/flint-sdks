[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryRoutingDemandInput

Stock you ask to reserve for one item: the item and quantity, plus optional Location limits and splitting behavior.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_location_ids` | Optional | Array of string | Items: minLength: `1`. |
| `demand_key` | Optional | string | Your identifier for this demand. Defaults to inventory_item_id. Required on every demand when an inventory_item_id occurs more than once. minLength: `1`. |
| `forced_location_id` | Optional | string | minLength: `1`. |
| `inventory_item_id` | Required | string | minLength: `1`. |
| `quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `splitting_behavior` | Optional | string | Optional demand constraint intersected with the routing source rule. Omission uses split_when_required and leaves the routing source rule in control. Values: `"single_location"`, `"split_when_required"`. |

