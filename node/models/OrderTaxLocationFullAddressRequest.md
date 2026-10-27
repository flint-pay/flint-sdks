[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderTaxLocationFullAddressRequest

A full street address you supply as an order's tax location.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `city` | Required | string | minLength: `1`. pattern: `\S`. |
| `country` | Required | string | ISO 3166-1 alpha-2 country code. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Example: `"US"`. Values: `"US"`. |
| `line1` | Required | string | minLength: `1`. pattern: `\S`. |
| `line2` | Optional | string | minLength: `1`. |
| `postal_code` | Required | string | minLength: `1`. pattern: `\S`. |
| `state` | Required | string | minLength: `1`. pattern: `\S`. |

