[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionServiceLocationInputCustomerAddress







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_address_id` | Required | string | Example: `"caddr_01KEZF7C00K2Q127FBJAXWB0FP"`. |
| `type` | Required | string | Values: `"customer_address"`. |

### SubscriptionServiceLocationInputCustomerAddress variant 1: `type` = `"customer_address"`

anyOf SubscriptionDeliveryDestinationInputCustomerAddress: Declared schema SubscriptionDeliveryDestinationInputCustomerAddress. The `customer_address` variant of `SubscriptionDeliveryDestinationInput`..

- Constraints for `customer_address_id`: ID of the customer's saved address. Flint copies it, so later edits to the saved address don't change the subscription. minLength: `1`. pattern: `^caddr_[0-9A-HJKMNP-TV-Z]{26}$`.
- Constraints for `type`: Selects one of the customer's saved addresses as the destination. Values: `"customer_address"`.

### SubscriptionServiceLocationInputCustomerAddress variant 2: `type` = `"customer_address"`

anyOf SubscriptionServiceLocationInputCustomerAddress: Declared schema SubscriptionServiceLocationInputCustomerAddress. The `customer_address` variant of `SubscriptionServiceLocationInput`..

- Constraints for `customer_address_id`: minLength: `1`.

