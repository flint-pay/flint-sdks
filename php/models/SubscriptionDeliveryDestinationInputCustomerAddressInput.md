[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionDeliveryDestinationInputCustomerAddressInput

The `customer_address` variant of `SubscriptionDeliveryDestinationInput`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_address_id` | Required | string | minLength: `1`. pattern: `^caddr_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `type` | Required | string | Values: `"customer_address"`. |

