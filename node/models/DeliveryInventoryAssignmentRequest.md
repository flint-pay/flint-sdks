[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryInventoryAssignmentRequest

Assigns a quantity of an inventory item at a location to a demand when creating a delivery quote.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `demand_key` | Required | string | minLength: `1`. |
| `inventory_item_id` | Required | string | minLength: `1`. |
| `location_id` | Required | string | minLength: `1`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |

