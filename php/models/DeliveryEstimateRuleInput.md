[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryEstimateRuleInput

How a delivery method estimates timing, chosen by `type`: no estimate, a transit time, or a schedule window.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `schedule_window` | Optional | [DeliveryScheduleWindowRuleInput](../models/DeliveryScheduleWindowRuleInput.md#deliveryschedulewindowruleinput) | Estimate rule for a scheduled-window delivery method, defined by its `availability` schedule. |
| `transit_time` | Optional | [DeliveryTransitTimeRuleInput](../models/DeliveryTransitTimeRuleInput.md#deliverytransittimeruleinput) | Estimate rule giving a delivery method's handling time and transit time as ranges of business days. |
| `type` | Required | string | Values: `"none"`, `"transit_time"`, `"schedule_window"`. |

