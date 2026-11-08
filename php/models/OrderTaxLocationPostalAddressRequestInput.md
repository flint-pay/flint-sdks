[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderTaxLocationPostalAddressRequestInput

A postal code, with an optional country, you supply as an order's tax location.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `country` | Optional | string | ISO 3166-1 alpha-2 country code. External tax accepts any ISO country; automatic tax supports only CA, US. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Default: `"US"`. Example: `"US"`. |
| `postal_code` | Required | string | Postal code. minLength: `1`. pattern: `\S`. |

