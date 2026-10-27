[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateCustomerAddressRequestInput

The request body for: Update a customer address; Update one of the current buyer's addresses.

minProperties: `1`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [PostalAddressInput](../models/PostalAddressInput.md#postaladdressinput) | Replaces the whole postal address. Send every field you want to keep; omitted optional fields such as line2 are removed. A postal address for a customer, with line 1, optional line 2, city, state, postal code, and country. |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `label` | Optional | string or null | Limited to 100 characters (Unicode code points), counted before surrounding whitespace is trimmed. Send null to clear it. minLength: `1`. maxLength: `100`. |
| `phone` | Optional | string or null | E.164 phone number. Limited to 30 characters (Unicode code points), counted before surrounding whitespace is trimmed. Send null to clear it. minLength: `1`. maxLength: `30`. |
| `recipient_name` | Optional | string | Limited to 255 characters (Unicode code points), counted before surrounding whitespace is trimmed. minLength: `1`. maxLength: `255`. |

