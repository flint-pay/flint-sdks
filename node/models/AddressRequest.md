[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## AddressRequest

A postal address you supply when creating or updating a customer, invoice, fulfillment, or delivery selection. Send null for `line2` to clear it.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `city` | Required | string | minLength: `1`. |
| `country` | Required | string | ISO 3166-1 alpha-2 country code. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Example: `"US"`. |
| `line1` | Required | string | minLength: `1`. |
| `line2` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `postal_code` | Required | string |  |
| `state` | Required | string |  |

