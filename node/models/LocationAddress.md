[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LocationAddress

The street address of a merchant location.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `city` | Required | string |  |
| `country` | Required | string | Uppercase ISO 3166-1 alpha-2 country code, such as US. Lowercase codes and surrounding whitespace are rejected. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Example: `"US"`. |
| `line1` | Required | string |  |
| `line2` | Optional | string |  |
| `postal_code` | Optional | string |  |
| `state` | Optional | string | State, province, or region. |

