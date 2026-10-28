[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryEstimateRuleRequestInput

The timing estimate rule you supply for a delivery method, chosen by `type`: none, a transit time, or a schedule window.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `schedule_window` | Optional | [DeliveryScheduleWindowRuleRequestInput](../models/DeliveryScheduleWindowRuleRequestInput.md#deliveryschedulewindowrulerequestinput) | Scheduled-window estimate rule you supply for a delivery method, defined by its `availability` schedule. |
| `transit_time` | Optional | [DeliveryTransitTimeRuleRequestRequestInput](../models/DeliveryTransitTimeRuleRequestRequestInput.md#deliverytransittimerulerequestrequestinput) | Estimate rule giving a delivery method's handling time and transit time as ranges of business days. |
| `type` | Required | string | Values: `"none"`, `"transit_time"`, `"schedule_window"`. |

