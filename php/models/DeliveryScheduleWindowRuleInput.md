[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryScheduleWindowRuleInput

Estimate rule for a scheduled-window delivery method, defined by its `availability` schedule.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `availability` | Required | [DeliveryAvailabilityInput](../models/DeliveryAvailabilityInput.md#deliveryavailabilityinput) | When a delivery method can be scheduled: weekly intervals, blackout intervals, lead time, and how far ahead a buyer can book. |

