[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutCustomerPrefill

Details the buyer's checkout can prefill from the customer it acts for.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_address` | Optional | [Address](../models/Address.md#address) | The customer's default billing address. Omitted when the customer has none. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. `billing_address`: [field definitions](../models/CheckoutCustomerPrefill.md#checkoutcustomerprefillbilling_address). |
| `email` | Required | string | The customer's email. |
| `shipping_address` | Optional | [Address](../models/Address.md#address) | The customer's default shipping address. Omitted when the customer has none. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. `shipping_address`: [field definitions](../models/CheckoutCustomerPrefill.md#checkoutcustomerprefillshipping_address). |
| `shipping_recipient_name` | Optional | string | Recipient name of the customer's default shipping address. Present whenever `shipping_address` is. |

### CheckoutCustomerPrefill.billing_address

The customer's default billing address. Omitted when the customer has none. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country.

Field definitions: [shared fields](AddressInput.md#addressinput).

### CheckoutCustomerPrefill.shipping_address

The customer's default shipping address. Omitted when the customer has none. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country.

Field definitions: [shared fields](AddressInput.md#addressinput).

