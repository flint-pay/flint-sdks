[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## Address

A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `city` | Required | string | City or locality of the address. |
| `country` | Required | string | ISO 3166-1 alpha-2 country code. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. |
| `line1` | Required | string | Street address, including the building number. |
| `line2` | Optional | string | Apartment, suite, floor, or other address details. |
| `postal_code` | Required | string | Postal or ZIP code of the address. |
| `state` | Required | string | State, province, or region of the address. |

