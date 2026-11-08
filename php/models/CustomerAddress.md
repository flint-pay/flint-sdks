[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerAddress

An address saved on a customer's profile.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | [Address](../models/Address.md#address) | The postal address. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. `address`: [field definitions](../models/CustomerAddressResponse.md#customeraddressresponsedataaddress). |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `customer_address_id` | Required | string | Unique identifier for this customer address, prefixed `caddr_`. |
| `customer_id` | Required | string | ID of the customer this address belongs to. |
| `is_default_billing` | Required | boolean | Whether this is the customer's default billing address. At most one saved address holds each default. |
| `is_default_shipping` | Required | boolean | Whether this is the customer's default shipping address. At most one saved address holds each default. |
| `label` | Optional | string | Limited to 100 characters (Unicode code points). maxLength: `100`. |
| `phone` | Optional | string | E.164 phone number. Limited to 30 characters (Unicode code points). maxLength: `30`. |
| `recipient_name` | Required | string | Limited to 255 characters (Unicode code points). maxLength: `255`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `uint64`. minimum: `1`. |

### CustomerAddress.address

Field definitions: [CustomerAddressResponse.data.address](../models/CustomerAddressResponse.md#customeraddressresponsedataaddress).

