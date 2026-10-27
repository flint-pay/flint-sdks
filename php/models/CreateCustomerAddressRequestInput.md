[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateCustomerAddressRequestInput

The request body for: Create a customer address; Create an address for the current buyer.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | [PostalAddressInput](../models/PostalAddressInput.md#postaladdressinput) | A postal address for a customer, with line 1, optional line 2, city, state, postal code, and country. |
| `is_default_billing` | Optional | boolean |  |
| `is_default_shipping` | Optional | boolean |  |
| `label` | Optional | string | Limited to 100 characters (Unicode code points), counted before surrounding whitespace is trimmed. minLength: `1`. maxLength: `100`. |
| `phone` | Optional | string | E.164 phone number. Limited to 30 characters (Unicode code points), counted before surrounding whitespace is trimmed. minLength: `1`. maxLength: `30`. |
| `recipient_name` | Required | string | Limited to 255 characters (Unicode code points), counted before surrounding whitespace is trimmed. minLength: `1`. maxLength: `255`. |

