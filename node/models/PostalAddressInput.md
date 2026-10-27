[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PostalAddressInput

Request input. Response: [Address](../models/Address.md#address).

A postal address for a customer, with line 1, optional line 2, city, state, postal code, and country.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `city` | Required | string | Limited to 255 characters (Unicode code points) on input, counted before surrounding whitespace is trimmed. minLength: `1`. maxLength: `255`. |
| `country` | Required | string | ISO 3166-1 alpha-2 country code. Surrounding whitespace is trimmed and letters are converted to uppercase before validation. The normalized code has 2 ASCII characters; no length limit applies before trimming. minLength: `2`. Example: `"US"`. |
| `line1` | Required | string | Limited to 255 characters (Unicode code points) on input, counted before surrounding whitespace is trimmed. minLength: `1`. maxLength: `255`. |
| `line2` | Optional | string | Limited to 255 characters (Unicode code points) on input, counted before surrounding whitespace is trimmed. minLength: `1`. maxLength: `255`. |
| `postal_code` | Required | string | Limited to 32 characters (Unicode code points) on input, counted before surrounding whitespace is trimmed. minLength: `1`. maxLength: `32`. |
| `state` | Required | string | Limited to 255 characters (Unicode code points) on input, counted before surrounding whitespace is trimmed. maxLength: `255`. |

