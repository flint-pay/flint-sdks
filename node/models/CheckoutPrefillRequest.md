[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutPrefillRequest

Contact details and addresses to fill in for the buyer, who can change them. For a customer with saved addresses, Flint fills in any address you leave out, and reads include it. With quick_pay or subscription_plan and automatic tax on, a prefilled address sets the order's tax location. Not changed by what the buyer types; for that, read buyer_contact. customer_prefill is what the checkout credential reads from the customer record.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_address` | Optional | [AddressRequest](../models/AddressRequest.md#addressrequest) | The billing address to fill in. A complete postal address. State and postal_code are required for US addresses and optional for other countries. Send null or omit line2, state, and postal_code when the address has none. |
| `email` | Optional | string | The buyer's email address to fill in. minLength: `1`. |
| `phone` | Optional | string | The buyer's phone number to fill in. minLength: `1`. |
| `shipping_address` | Optional | [AddressRequest](../models/AddressRequest.md#addressrequest) | The shipping address to fill in. A complete postal address. State and postal_code are required for US addresses and optional for other countries. Send null or omit line2, state, and postal_code when the address has none. |
| `shipping_recipient_name` | Optional | string | The name of the person receiving the delivery, to fill in with the shipping address. minLength: `1`. maxLength: `200`. |

