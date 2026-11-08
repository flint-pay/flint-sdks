[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryInventoryAssignmentRequestInput

Assigns a quantity of an inventory item at a location to a demand when creating a delivery quote.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `demand_key` | Required | string | minLength: `1`. |
| `inventory_item_id` | Required | string | minLength: `1`. Example: `"invi_01KEZF7C00A6YEM25MTHW2MPZY"`. |
| `location_id` | Required | string | minLength: `1`. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |

