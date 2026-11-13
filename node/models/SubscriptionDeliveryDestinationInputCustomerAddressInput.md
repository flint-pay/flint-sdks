[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionDeliveryDestinationInputCustomerAddressInput

Request input. Response: [SubscriptionServiceLocationInputCustomerAddress](../models/SubscriptionServiceLocationInputCustomerAddress.md#subscriptionservicelocationinputcustomeraddress).

The `customer_address` variant of `SubscriptionDeliveryDestinationInput`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_address_id` | Required | string | ID of the customer's saved address. Flint copies it, so later edits to the saved address don't change the subscription. minLength: `1`. pattern: `^caddr_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"caddr_01KEZF7C00K2Q127FBJAXWB0FP"`. |
| `type` | Required | string | Selects one of the customer's saved addresses as the destination. Values: `"customer_address"`. |

