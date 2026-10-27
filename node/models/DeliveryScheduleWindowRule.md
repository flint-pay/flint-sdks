[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryScheduleWindowRule







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `availability` | Required | [DeliveryAvailability](../models/DeliveryAvailability.md#deliveryavailability) | When a delivery method can be scheduled: weekly intervals, blackout intervals, lead time, and how far ahead a buyer can book. |

### DeliveryScheduleWindowRule variant 1

anyOf variant 1: Declared schema DeliveryScheduleWindowRule. Estimate rule for a scheduled-window delivery method, defined by its `availability` schedule..

No additional constraints.

### DeliveryScheduleWindowRule variant 2

anyOf variant 2: Declared schema DeliveryScheduleWindowRuleRequest. Scheduled-window estimate rule you supply for a delivery method, defined by its `availability` schedule..

No additional constraints.

