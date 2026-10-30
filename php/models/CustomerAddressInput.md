[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerAddressInput

An address saved on a customer's profile.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | [AddressInput](../models/AddressInput.md#addressinput) | A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `customer_address_id` | Required | string |  |
| `customer_id` | Required | string |  |
| `is_default_billing` | Required | boolean |  |
| `is_default_shipping` | Required | boolean |  |
| `label` | Optional | string | Limited to 100 characters (Unicode code points). maxLength: `100`. |
| `phone` | Optional | string | E.164 phone number. Limited to 30 characters (Unicode code points). maxLength: `30`. |
| `recipient_name` | Required | string | Limited to 255 characters (Unicode code points). maxLength: `255`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer | Format: `uint64`. minimum: `1`. |

