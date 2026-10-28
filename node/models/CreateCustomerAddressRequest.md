[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateCustomerAddressRequest

The request body for: Create a customer address; Create an address for the current buyer.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | [AddressRequest](../models/AddressRequest.md#addressrequest) | A complete postal address. State and postal_code are required for US addresses and optional for other countries. Send null or omit line2, state, and postal_code when the address has none. |
| `is_default_billing` | Optional | boolean |  |
| `is_default_shipping` | Optional | boolean |  |
| `label` | Optional | string | Limited to 100 characters (Unicode code points), counted before surrounding whitespace is trimmed. minLength: `1`. maxLength: `100`. |
| `phone` | Optional | string | E.164 phone number. Limited to 30 characters (Unicode code points), counted before surrounding whitespace is trimmed. minLength: `1`. maxLength: `30`. |
| `recipient_name` | Required | string | Limited to 255 characters (Unicode code points), counted before surrounding whitespace is trimmed. minLength: `1`. maxLength: `255`. |

