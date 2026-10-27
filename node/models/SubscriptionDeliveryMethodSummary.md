[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionDeliveryMethodSummary

A short summary of a subscription's delivery method: name, description, type, and whether its price is fixed or quoted.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `description` | Optional | string |  |
| `name` | Optional | string |  |
| `price_type` | Optional | string | Values: `"fixed"`, `"quoted"`. |
| `type` | Optional | string | Values: `"shipment"`, `"local_delivery"`. |

