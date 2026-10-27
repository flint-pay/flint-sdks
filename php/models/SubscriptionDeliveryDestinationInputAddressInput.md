[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionDeliveryDestinationInputAddressInput

The `address` variant of `SubscriptionDeliveryDestinationInput`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | [OrderDeliveryDestinationAddressRequestInput](../models/OrderDeliveryDestinationAddressRequestInput.md#orderdeliverydestinationaddressrequestinput) | The delivery address you supply on an order. Postal code and state are required for US addresses. |
| `type` | Required | string | Values: `"address"`. |

