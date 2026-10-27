[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryScheduleWindowRule

Estimate rule for a scheduled-window delivery method, defined by its `availability` schedule.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `availability` | Required | [DeliveryAvailability](../models/DeliveryAvailability.md#deliveryavailability) | When a delivery method can be scheduled: weekly intervals, blackout intervals, lead time, and how far ahead a buyer can book. |

