[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateCustomerAddressRequestInput

The request body for: Update a customer address; Update one of the current buyer's addresses.

minProperties: `1`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [AddressRequestInput](../models/AddressRequestInput.md#addressrequestinput) | Replaces the whole postal address. Send every field you want to keep; omitted optional fields such as line2 are removed. A complete postal address. State and postal_code are required for US addresses and optional for other countries. Send null or omit line2, state, and postal_code when the address has none. |
| `expected_version` | Optional | integer | Format: `uint64`. minimum: `1`. |
| `is_default_billing` | Optional | boolean | Set true to make this the default billing address and remove that default from any other saved address. Set false to clear this default if this address holds it; no other address becomes the default. |
| `is_default_shipping` | Optional | boolean | Set true to make this the default shipping address and remove that default from any other saved address. Set false to clear this default if this address holds it; no other address becomes the default. |
| `label` | Optional | string or null | Limited to 100 characters (Unicode code points), counted before surrounding whitespace is trimmed. Send null to clear it. minLength: `1`. maxLength: `100`. |
| `phone` | Optional | string or null | E.164 phone number. Limited to 30 characters (Unicode code points), counted before surrounding whitespace is trimmed. Send null to clear it. minLength: `1`. maxLength: `30`. |
| `recipient_name` | Optional | string | Limited to 255 characters (Unicode code points), counted before surrounding whitespace is trimmed. minLength: `1`. maxLength: `255`. |

