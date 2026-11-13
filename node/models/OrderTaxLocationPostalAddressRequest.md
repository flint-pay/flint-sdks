[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderTaxLocationPostalAddressRequest

A postal code, with an optional country, you supply as an order's tax location.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `country` | Optional | string | ISO 3166-1 alpha-2 country code. External tax accepts any ISO country; automatic tax supports only AT, AU, BE, BG, CA, CY, CZ, DE, DK, EE, ES, FI, FR, GB, GR, HR, HU, IE, IT, LT, LU, LV, MT, NL, NZ, PL, PT, RO, SE, SI, SK, US. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Default: `"US"`. Example: `"US"`. |
| `postal_code` | Required | string | Postal code. A full address in Ireland may omit it; every other address needs one. minLength: `1`. pattern: `\S`. |

