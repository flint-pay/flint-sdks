[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionServiceLocation

The address where a subscription's service is delivered, with the saved customer address it came from.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [Address](../models/Address.md#address) | A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients. `address`: [field definitions](../models/BuyerCustomer.md#buyercustomerbilling_address). |
| `customer_address_id` | Optional | string |  |

### SubscriptionServiceLocation.address

Field definitions: [BuyerCustomer.billing_address](../models/BuyerCustomer.md#buyercustomerbilling_address).

