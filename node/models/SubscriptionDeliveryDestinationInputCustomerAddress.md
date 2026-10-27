[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionDeliveryDestinationInputCustomerAddress

The `customer_address` variant of `SubscriptionDeliveryDestinationInput`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_address_id` | Required | string | minLength: `1`. pattern: `^caddr_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `type` | Required | string | Values: `"customer_address"`. |

