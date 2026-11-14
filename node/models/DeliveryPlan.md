[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPlan

Whether a delivery option is fulfilled in one delivery or several, with the first arrival time, completion time, and delivery count.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `complete_by_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `first_arrival_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `planned_delivery_count` | Optional | integer | Number of deliveries the plan makes. |
| `type` | Required | string | Whether the items arrive together. Values: `"single_delivery"`, `"multiple_deliveries"`. |

