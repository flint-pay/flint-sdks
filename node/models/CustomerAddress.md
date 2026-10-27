[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerAddress

An address saved on a customer's profile.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | [Address](../models/Address.md#address) | A postal address for a customer, with line 1, optional line 2, city, state, postal code, and country. `address`: [field definitions](../models/CreateCustomerAddressRequest.md#createcustomeraddressrequestaddress). |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `customer_address_id` | Required | string |  |
| `customer_id` | Required | string |  |
| `is_default_billing` | Required | boolean |  |
| `is_default_shipping` | Required | boolean |  |
| `label` | Optional | string | Limited to 100 characters (Unicode code points). maxLength: `100`. |
| `phone` | Optional | string | E.164 phone number. Limited to 30 characters (Unicode code points). maxLength: `30`. |
| `recipient_name` | Required | string | Limited to 255 characters (Unicode code points). maxLength: `255`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |

### CustomerAddress.address

Field definitions: [CreateCustomerAddressRequest.address](../models/CreateCustomerAddressRequest.md#createcustomeraddressrequestaddress).

