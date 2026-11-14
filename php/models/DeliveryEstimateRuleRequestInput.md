[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryEstimateRuleRequestInput

The timing estimate rule you supply for a delivery method, chosen by `type`: none, a transit time, or a schedule window.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `schedule_window` | Optional | [DeliveryScheduleWindowRuleRequestInput](../models/DeliveryScheduleWindowRuleRequestInput.md#deliveryschedulewindowrulerequestinput) | Weekly schedule of delivery windows. Set only when `type` is `schedule_window`. Scheduled-window estimate rule you supply for a delivery method, defined by its `availability` schedule. |
| `transit_time` | Optional | [DeliveryTransitTimeRuleRequestInput](../models/DeliveryTransitTimeRuleRequestInput.md#deliverytransittimerulerequestinput) | Handling and transit time. Set only when `type` is `transit_time`. Estimate rule giving a delivery method's handling time and transit time as ranges of business days. |
| `type` | Required | string | How Flint estimates timing. Set the property named by this value. Values: `"none"`, `"transit_time"`, `"schedule_window"`. |

