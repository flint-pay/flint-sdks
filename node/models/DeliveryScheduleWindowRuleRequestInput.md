[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryScheduleWindowRuleRequestInput

Request input. Response: [DeliveryScheduleWindowRule](../models/DeliveryScheduleWindowRule.md#deliveryschedulewindowrule).

Scheduled-window estimate rule you supply for a delivery method, defined by its `availability` schedule.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `availability` | Required | [DeliveryAvailabilityInput](../models/DeliveryAvailabilityInput.md#deliveryavailabilityinput) | When a delivery method can be scheduled: weekly intervals, blackout intervals, lead time, and how far ahead a buyer can book. |

