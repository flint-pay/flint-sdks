[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderTaxLocationFullAddressRequestInput

A full street address you supply as an order's tax location.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `city` | Required | string | City. minLength: `1`. pattern: `\S`. |
| `country` | Required | string | ISO 3166-1 alpha-2 country code. External tax accepts any ISO country; automatic tax supports only CA, US. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Example: `"US"`. |
| `line1` | Required | string | First line of the street address. minLength: `1`. pattern: `\S`. |
| `line2` | Optional | string | Second line of the street address, such as an apartment or suite. minLength: `1`. |
| `postal_code` | Required | string | Postal code. minLength: `1`. pattern: `\S`. |
| `state` | Required | string | Two-letter US state code, such as `WA`. minLength: `1`. pattern: `\S`. |

