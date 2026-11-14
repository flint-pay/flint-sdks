[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderTaxLocationFullAddressRequestInput

A full street address you supply as an order's tax location.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `city` | Required | string | City. minLength: `1`. pattern: `\S`. |
| `country` | Required | string | ISO 3166-1 alpha-2 country code. External tax accepts any ISO country; automatic tax supports only AT, AU, BE, BG, CA, CY, CZ, DE, DK, EE, ES, FI, FR, GB, GR, HR, HU, IE, IT, LT, LU, LV, MT, NL, NZ, PL, PT, RO, SE, SI, SK, US. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Example: `"US"`. |
| `line1` | Required | string | First line of the street address. minLength: `1`. pattern: `\S`. |
| `line2` | Optional | string | Second line of the street address, such as an apartment or suite. minLength: `1`. |
| `postal_code` | Optional | string | Postal code. A full address in Ireland may omit it; every other address needs one. minLength: `1`. pattern: `\S`. |
| `state` | Optional | string | State or province code, such as `WA` or `ON`. Required for US and Canadian full addresses; omit it elsewhere when the address has none. minLength: `1`. pattern: `\S`. |

