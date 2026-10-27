[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ChangeMeSubscriptionDeliveryRequest

The request body for: Update subscription delivery.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery` | Required | [SubscriptionDeliveryRequest](../models/SubscriptionDeliveryRequest.md#subscriptiondeliveryrequest) | The delivery preference to set on a subscription: delivery method, type, destination, and recipient. |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |

