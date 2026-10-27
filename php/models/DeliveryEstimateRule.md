[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryEstimateRule

How a delivery method estimates timing, chosen by `type`: no estimate, a transit time, or a schedule window.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `schedule_window` | Optional | [DeliveryScheduleWindowRule](../models/DeliveryScheduleWindowRule.md#deliveryschedulewindowrule) | Estimate rule for a scheduled-window delivery method, defined by its `availability` schedule. |
| `transit_time` | Optional | [DeliveryTransitTimeRule](../models/DeliveryTransitTimeRule.md#deliverytransittimerule) | Estimate rule giving a delivery method's handling time and transit time as ranges of business days. |
| `type` | Required | string | Values: `"none"`, `"transit_time"`, `"schedule_window"`. |

