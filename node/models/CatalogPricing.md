[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CatalogPricing

The source of a catalog variant line's selected net unit price.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `minimum_quantity` | Required | integer or null | Minimum quantity of the applied break. Null when the base price applies. Format: `int64`. |
| `price_list_id` | Required | string or null | Price list providing the selected schedule. Null when the variant's default schedule applies. Example: `"prl_01KEZF7C00EH39P59GN3XMGS2Q"`. |
| `source` | Required | string | Source of the selected schedule. New source values may be added. Values: `"variant"`, `"price_list"`. |

