[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutTaxLocationInput

A tax location: country and postal code, with address lines, city, and state when set.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `city` | Optional | string | City of the tax location, when set. |
| `country` | Required | string | ISO 3166-1 alpha-2 country code. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Example: `"US"`. |
| `line1` | Optional | string | First line of the tax location's address, when set. |
| `line2` | Optional | string | Second line of the tax location's address, when set. |
| `postal_code` | Required | string | Postal code used to calculate tax. |
| `state` | Optional | string | State, province, or region of the tax location, when set. |

