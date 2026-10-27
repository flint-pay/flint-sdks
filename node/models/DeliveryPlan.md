[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPlan

Whether a delivery option is fulfilled in one delivery or several, with the first arrival time, completion time, and delivery count.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `complete_by_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `first_arrival_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `planned_delivery_count` | Optional | integer |  |
| `type` | Required | string | Values: `"single_delivery"`, `"multiple_deliveries"`. |

