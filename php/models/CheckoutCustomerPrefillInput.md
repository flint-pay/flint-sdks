[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutCustomerPrefillInput

Details the buyer's checkout can prefill from the customer it acts for.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_address` | Optional | [AddressInput](../models/AddressInput.md#addressinput) | The customer's default billing address. Omitted when the customer has none. A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients. |
| `email` | Required | string | The customer's email. |
| `shipping_address` | Optional | [AddressInput](../models/AddressInput.md#addressinput) | The customer's default shipping address. Omitted when the customer has none. A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients. |
| `shipping_recipient_name` | Optional | string | Recipient name saved with the customer's default shipping address. Present only with `shipping_address`; omitted when that address was set on the customer without a saved recipient. |

