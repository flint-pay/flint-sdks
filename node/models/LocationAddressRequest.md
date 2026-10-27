[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LocationAddressRequest

The street address you supply when creating or updating a merchant location. Send null on an optional field to clear it.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `city` | Required | string | minLength: `1`. |
| `country` | Required | string | Uppercase ISO 3166-1 alpha-2 country code, such as US. Lowercase codes and surrounding whitespace are rejected. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Example: `"US"`. |
| `line1` | Required | string | minLength: `1`. |
| `line2` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `postal_code` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `state` | Optional | string or null | State, province, or region. Send null to clear it. minLength: `1`. |

