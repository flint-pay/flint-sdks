[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## Address







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `city` | Required | string |  |
| `country` | Required | string | Example: `"US"`. |
| `line1` | Required | string |  |
| `line2` | Optional | string |  |
| `postal_code` | Required | string |  |
| `state` | Required | string |  |

### Address variant 1

anyOf variant 1: Declared schema Address. A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients..

- Constraints for `city`: City or locality of the address.
- Constraints for `country`: ISO 3166-1 alpha-2 country code. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`.
- Constraints for `line1`: Street address, including the building number.
- Constraints for `line2`: Apartment, suite, floor, or other address details.
- Constraints for `postal_code`: Postal or ZIP code of the address.
- Constraints for `state`: State, province, or region of the address.

### Address variant 2

anyOf variant 2: Declared schema PostalAddress. A postal address for a customer, with line 1, optional line 2, city, state, postal code, and country..

- Constraints for `city`: Limited to 255 characters (Unicode code points) on input, counted before surrounding whitespace is trimmed. minLength: `1`. maxLength: `255`.
- Constraints for `country`: ISO 3166-1 alpha-2 country code. Surrounding whitespace is trimmed and letters are converted to uppercase before validation. The normalized code has 2 ASCII characters; no length limit applies before trimming. minLength: `2`.
- Constraints for `line1`: Limited to 255 characters (Unicode code points) on input, counted before surrounding whitespace is trimmed. minLength: `1`. maxLength: `255`.
- Constraints for `line2`: Limited to 255 characters (Unicode code points) on input, counted before surrounding whitespace is trimmed. minLength: `1`. maxLength: `255`.
- Constraints for `postal_code`: Limited to 32 characters (Unicode code points) on input, counted before surrounding whitespace is trimmed. minLength: `1`. maxLength: `32`.
- Constraints for `state`: Limited to 255 characters (Unicode code points) on input, counted before surrounding whitespace is trimmed. maxLength: `255`.

