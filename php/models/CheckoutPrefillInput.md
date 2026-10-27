[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutPrefillInput

Contact details and addresses to fill in for the buyer, who can change them. For a customer with saved addresses, Flint fills in any address you leave out, and reads include it. With quick_pay or subscription_plan and automatic tax on, a prefilled address sets the order's tax location. Not changed by what the buyer types; for that, read buyer_contact. customer_prefill is what the checkout credential reads from the customer record.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_address` | Optional | [AddressInput](../models/AddressInput.md#addressinput) | A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients. |
| `email` | Optional | string |  |
| `phone` | Optional | string |  |
| `shipping_address` | Optional | [AddressInput](../models/AddressInput.md#addressinput) | A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients. |

