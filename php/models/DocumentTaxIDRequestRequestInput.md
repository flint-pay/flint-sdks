[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DocumentTaxIDRequestRequestInput

A tax identifier printed on documents, with its country, optional region, identifier type, and value. Flint does not verify the value.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `country` | Required | string | Two-letter ISO 3166-1 alpha-2 country code. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Example: `"US"`. |
| `document_tax_id` | Optional | string | Server-generated identity of an existing entry. Omit when adding an entry. minLength: `1`. pattern: `^dti_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `identifier_type` | Required | string | Provider-independent identifier type, for example vat, gst, or ein. This is an open vocabulary. minLength: `1`. maxLength: `64`. pattern: `^[a-z][a-z0-9_]*$`. |
| `region` | Optional | string | minLength: `1`. maxLength: `64`. |
| `value` | Required | string | Full identifier printed on documents. Not verified by Flint. minLength: `1`. maxLength: `255`. |

