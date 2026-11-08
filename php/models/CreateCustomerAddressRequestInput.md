[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateCustomerAddressRequestInput

The request body for: Create a customer address; Create an address for the current buyer.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | [AddressRequestInput](../models/AddressRequestInput.md#addressrequestinput) | The postal address to save. A complete postal address. State and postal_code are required for US addresses and optional for other countries. Send null or omit line2, state, and postal_code when the address has none. |
| `is_default_billing` | Optional | boolean | Set true to make this the default billing address and remove that default from any other saved address. Defaults to false. |
| `is_default_shipping` | Optional | boolean | Set true to make this the default shipping address and remove that default from any other saved address. Defaults to false. |
| `label` | Optional | string | Limited to 100 characters (Unicode code points), counted before surrounding whitespace is trimmed. minLength: `1`. maxLength: `100`. |
| `phone` | Optional | string | E.164 phone number. Limited to 30 characters (Unicode code points), counted before surrounding whitespace is trimmed. minLength: `1`. maxLength: `30`. |
| `recipient_name` | Required | string | Limited to 255 characters (Unicode code points), counted before surrounding whitespace is trimmed. minLength: `1`. maxLength: `255`. |

