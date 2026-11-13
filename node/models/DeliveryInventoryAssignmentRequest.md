[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryInventoryAssignmentRequest

Assigns a quantity of an inventory item at a location to a demand when creating a delivery quote.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `demand_key` | Required | string | Key of the inventory demand this assignment serves. minLength: `1`. |
| `inventory_item_id` | Required | string | ID of the inventory item assigned. minLength: `1`. Example: `"invi_01KEZF7C00A6YEM25MTHW2MPZY"`. |
| `location_id` | Required | string | ID of the Location the stock is assigned from. minLength: `1`. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |

