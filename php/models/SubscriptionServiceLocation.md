[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionServiceLocation

The address where a subscription's service is delivered, with the saved customer address it came from.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [Address](../models/Address.md#address) | A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients. `address`: [field definitions](../models/CustomersCreateResponse200.md#customerscreateresponse200databilling_address). |
| `customer_address_id` | Optional | string |  |

### SubscriptionServiceLocation.address

Field definitions: [CustomersCreateResponse200.data.billing_address](../models/CustomersCreateResponse200.md#customerscreateresponse200databilling_address).

