[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnUnverifiedItem

Merchandise received in a return that does not match an expected return line, described by name, SKU, and description.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `description` | Optional | string | Description of the unidentified item. minLength: `1`. |
| `name` | Required | string | Name of the unidentified item. minLength: `1`. |
| `sku` | Optional | string | SKU of the unidentified item. minLength: `1`. |

