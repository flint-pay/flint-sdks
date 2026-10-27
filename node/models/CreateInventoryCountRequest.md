[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateInventoryCountRequest

The request body for: Create inventory count.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_item_ids` | Required | Array of string | minItems: `1`. maxItems: `100`. Items: minLength: `1`. |
| `location_id` | Required | string | minLength: `1`. |

