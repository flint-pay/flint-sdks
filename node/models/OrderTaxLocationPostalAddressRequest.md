[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderTaxLocationPostalAddressRequest

A postal code, with an optional country, you supply as an order's tax location.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `country` | Optional | string | ISO 3166-1 alpha-2 country code. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Default: `"US"`. Example: `"US"`. Values: `"US"`. |
| `postal_code` | Required | string | minLength: `1`. pattern: `\S`. |

