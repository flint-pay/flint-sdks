[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutSessionTax

Tax settings of a checkout session: whether it collects tax and any tax location the merchant fixed.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `enabled` | Optional | boolean | Whether the session collects tax, as set when it was created. |
| `location_fixed_by_merchant` | Optional | [Address](../models/Address.md#address) | The tax location your order already held when this session was created over it. Hosted checkout shows it and does not ask the buyer for another. Omitted when the buyer may give or change the location. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. |

