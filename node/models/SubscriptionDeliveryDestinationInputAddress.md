[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionDeliveryDestinationInputAddress

The `address` variant of `SubscriptionDeliveryDestinationInput`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | [OrderDeliveryDestinationAddressRequest](../models/OrderDeliveryDestinationAddressRequest.md#orderdeliverydestinationaddressrequest) | The delivery address you supply on an order. Postal code and state are required for US addresses. |
| `type` | Required | string | Values: `"address"`. |

