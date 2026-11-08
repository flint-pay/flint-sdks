[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutPrefillRequestInput

Contact details and addresses to fill in for the buyer, who can change them. For a customer with saved addresses, Flint fills in any address you leave out, and reads include it. With quick_pay or subscription_plan and automatic tax on, a prefilled address sets the order's tax location. Not changed by what the buyer types; for that, read buyer_contact. customer_prefill is what the checkout credential reads from the customer record.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_address` | Optional | [AddressRequestInput](../models/AddressRequestInput.md#addressrequestinput) | The billing address to fill in. A complete postal address. State and postal_code are required for US addresses and optional for other countries. Send null or omit line2, state, and postal_code when the address has none. |
| `email` | Optional | string | The buyer's email address to fill in. minLength: `1`. |
| `phone` | Optional | string | The buyer's phone number to fill in. minLength: `1`. |
| `shipping_address` | Optional | [AddressRequestInput](../models/AddressRequestInput.md#addressrequestinput) | The shipping address to fill in. A complete postal address. State and postal_code are required for US addresses and optional for other countries. Send null or omit line2, state, and postal_code when the address has none. |

