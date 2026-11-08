[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateInventoryCountRequest

The request body for: Create inventory count.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_item_ids` | Required | Array of string | IDs of the inventory items to count at the Location, from 1 to 100. minItems: `1`. maxItems: `100`. Items: minLength: `1`. Example: `"invi_01KEZF7C00A6YEM25MTHW2MPZY"`. |
| `location_id` | Required | string | ID of the Location whose stock is counted. minLength: `1`. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |

