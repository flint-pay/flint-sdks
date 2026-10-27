[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutCustomerPrefill

Details the buyer's checkout can prefill from the customer it acts for.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_address` | Optional | [Address](../models/Address.md#address) | The customer's default billing address. Omitted when the customer has none. A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients. `billing_address`: [field definitions](../models/CheckoutCustomerPrefill.md#checkoutcustomerprefillbilling_address). |
| `email` | Required | string | The customer's email. |
| `shipping_address` | Optional | [Address](../models/Address.md#address) | The customer's default shipping address. Omitted when the customer has none. A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients. `shipping_address`: [field definitions](../models/CheckoutCustomerPrefill.md#checkoutcustomerprefillshipping_address). |
| `shipping_recipient_name` | Optional | string | Recipient name saved with the customer's default shipping address. Present only with `shipping_address`; omitted when that address was set on the customer without a saved recipient. |

### CheckoutCustomerPrefill.billing_address

The customer's default billing address. Omitted when the customer has none. A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients.

Field definitions: [shared fields](BuyerCustomer.md#buyercustomerbilling_address).

### CheckoutCustomerPrefill.shipping_address

The customer's default shipping address. Omitted when the customer has none. A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients.

Field definitions: [shared fields](BuyerCustomer.md#buyercustomerbilling_address).

