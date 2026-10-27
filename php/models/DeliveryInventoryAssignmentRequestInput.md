[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryInventoryAssignmentRequestInput

Assigns a quantity of an inventory item at a location to a demand when creating a delivery quote.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `demand_key` | Required | string | minLength: `1`. |
| `inventory_item_id` | Required | string | minLength: `1`. |
| `location_id` | Required | string | minLength: `1`. |
| `quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |

