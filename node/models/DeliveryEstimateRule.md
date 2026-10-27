[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryEstimateRule







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `schedule_window` | Optional | [DeliveryScheduleWindowRule](../models/DeliveryScheduleWindowRule.md#deliveryschedulewindowrule) | `schedule_window`: [field definitions](../models/DeliveryEstimateRule.md#deliveryestimaterule-variant-1schedule_window), [field definitions](../models/CreateDeliveryMethodRequest.md#createdeliverymethodrequest-variant-1configurationestimateschedule_window). |
| `transit_time` | Optional | [DeliveryTransitTimeRule](../models/DeliveryTransitTimeRule.md#deliverytransittimerule) | Estimate rule giving a delivery method's handling time and transit time as ranges of business days. |
| `type` | Required | string | Values: `"none"`, `"transit_time"`, `"schedule_window"`. |

### DeliveryEstimateRule variant 1

anyOf variant 1: Declared schema DeliveryEstimateRule. How a delivery method estimates timing, chosen by `type`: no estimate, a transit time, or a schedule window..

No additional constraints.

### DeliveryEstimateRule variant 2

anyOf variant 2: Declared schema DeliveryEstimateRuleRequest. The timing estimate rule you supply for a delivery method, chosen by `type`: none, a transit time, or a schedule window..

No additional constraints.

### DeliveryEstimateRule variant 1.schedule_window

Estimate rule for a scheduled-window delivery method, defined by its `availability` schedule.

Field definitions: [shared fields](DeliveryScheduleWindowRule.md#deliveryschedulewindowrule).

### DeliveryEstimateRule variant 2.schedule_window

Field definitions: [CreateDeliveryMethodRequest variant 1.configuration.estimate.schedule_window](../models/CreateDeliveryMethodRequest.md#createdeliverymethodrequest-variant-1configurationestimateschedule_window).

