[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionServiceLocationInputCustomerAddress







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_address_id` | Required | string |  |
| `type` | Required | string | Values: `"customer_address"`. |

### SubscriptionServiceLocationInputCustomerAddress variant 1: `type` = `"customer_address"`

anyOf variant 1: Declared schema SubscriptionDeliveryDestinationInputCustomerAddress. The `customer_address` variant of `SubscriptionDeliveryDestinationInput`..

- Constraints for `customer_address_id`: minLength: `1`. pattern: `^caddr_[0-9A-HJKMNP-TV-Z]{26}$`.

### SubscriptionServiceLocationInputCustomerAddress variant 2: `type` = `"customer_address"`

anyOf variant 2: Declared schema SubscriptionServiceLocationInputCustomerAddress. The `customer_address` variant of `SubscriptionServiceLocationInput`..

- Constraints for `customer_address_id`: minLength: `1`.

