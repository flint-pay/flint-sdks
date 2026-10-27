[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateCustomerAddressRequest

The request body for: Update a customer address; Update one of the current buyer's addresses. minProperties: `1`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [Address](../models/Address.md#address) | Replaces the whole postal address. Send every field you want to keep; omitted optional fields such as line2 are removed. A postal address for a customer, with line 1, optional line 2, city, state, postal code, and country. `address`: [field definitions](../models/UpdateCustomerAddressRequest.md#updatecustomeraddressrequestaddress). |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `label` | Optional | string or null | Limited to 100 characters (Unicode code points), counted before surrounding whitespace is trimmed. Send null to clear it. minLength: `1`. maxLength: `100`. |
| `phone` | Optional | string or null | E.164 phone number. Limited to 30 characters (Unicode code points), counted before surrounding whitespace is trimmed. Send null to clear it. minLength: `1`. maxLength: `30`. |
| `recipient_name` | Optional | string | Limited to 255 characters (Unicode code points), counted before surrounding whitespace is trimmed. minLength: `1`. maxLength: `255`. |

### UpdateCustomerAddressRequest.address

Replaces the whole postal address. Send every field you want to keep; omitted optional fields such as line2 are removed. A postal address for a customer, with line 1, optional line 2, city, state, postal code, and country.

Field definitions: [shared fields](PostalAddressInput.md#postaladdressinput).

