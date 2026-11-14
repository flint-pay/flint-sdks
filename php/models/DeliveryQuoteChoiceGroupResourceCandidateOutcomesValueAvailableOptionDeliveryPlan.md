[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOptionDeliveryPlan

How the option divides the items into deliveries.

Whether a delivery option is fulfilled in one delivery or several, with the first arrival time, completion time, and delivery count.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `complete_by_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `first_arrival_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `planned_delivery_count` | Optional | integer | Number of deliveries the plan makes. |
| `type` | Required | string | Whether the items arrive together. Values: `"single_delivery"`, `"multiple_deliveries"`. |

