[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionDeliveryMethodSummary

A short summary of a subscription's delivery method: name, description, type, and whether its price is fixed or quoted.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `description` | Optional | string | Buyer-facing description of the delivery method. Omitted when the method has none. |
| `name` | Optional | string | Buyer-facing name of the delivery method. |
| `price_type` | Optional | string | Whether the method charges a flat price or Flint works the price out for each delivery. Values: `"fixed"`, `"quoted"`. |
| `type` | Optional | string | How the method delivers the items. Values: `"shipment"`, `"local_delivery"`. |

