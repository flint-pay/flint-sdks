[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryScheduleWindowRuleRequestInput

Scheduled-window estimate rule you supply for a delivery method, defined by its `availability` schedule.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `availability` | Required | [DeliveryAvailabilityRequestRequestInput](../models/DeliveryAvailabilityRequestRequestInput.md#deliveryavailabilityrequestrequestinput) | When a delivery method can be scheduled: weekly intervals, blackout intervals, lead time, and how far ahead a buyer can book. |

