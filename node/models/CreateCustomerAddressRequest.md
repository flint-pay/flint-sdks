[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateCustomerAddressRequest

The request body for: Create a customer address; Create an address for the current buyer.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | [Address](../models/Address.md#address) | A postal address for a customer, with line 1, optional line 2, city, state, postal code, and country. `address`: [field definitions](../models/CreateCustomerAddressRequest.md#createcustomeraddressrequestaddress). |
| `is_default_billing` | Optional | boolean |  |
| `is_default_shipping` | Optional | boolean |  |
| `label` | Optional | string | Limited to 100 characters (Unicode code points), counted before surrounding whitespace is trimmed. minLength: `1`. maxLength: `100`. |
| `phone` | Optional | string | E.164 phone number. Limited to 30 characters (Unicode code points), counted before surrounding whitespace is trimmed. minLength: `1`. maxLength: `30`. |
| `recipient_name` | Required | string | Limited to 255 characters (Unicode code points), counted before surrounding whitespace is trimmed. minLength: `1`. maxLength: `255`. |

### CreateCustomerAddressRequest.address

A postal address for a customer, with line 1, optional line 2, city, state, postal code, and country.

Field definitions: [shared fields](PostalAddressInput.md#postaladdressinput).

