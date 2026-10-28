[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## AddressRequestInput

A complete postal address. State and postal_code are required for US addresses and optional for other countries. Send null or omit line2, state, and postal_code when the address has none.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `city` | Required | string | Nonempty after surrounding whitespace is trimmed. Limits count Unicode code points after trimming. minLength: `1`. maxLength: `100`. pattern: `\S`. |
| `country` | Required | string | A real ISO 3166-1 alpha-2 country code. Lowercase codes and surrounding whitespace are rejected. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Example: `"US"`. |
| `line1` | Required | string | Nonempty after surrounding whitespace is trimmed. Limits count Unicode code points after trimming. minLength: `1`. maxLength: `255`. pattern: `\S`. |
| `line2` | Optional | string or null | Nonempty after surrounding whitespace is trimmed. Limits count Unicode code points after trimming. Send null or omit it when the address has none. minLength: `1`. maxLength: `255`. pattern: `\S`. |
| `postal_code` | Optional | string or null | Nonempty after surrounding whitespace is trimmed. Limits count Unicode code points after trimming. Send null or omit it when the address has none. Required for US addresses. minLength: `1`. maxLength: `20`. pattern: `\S`. |
| `state` | Optional | string or null | Nonempty after surrounding whitespace is trimmed. Limits count Unicode code points after trimming. Send null or omit it when the address has none. Required for US addresses. minLength: `1`. maxLength: `100`. pattern: `\S`. |

