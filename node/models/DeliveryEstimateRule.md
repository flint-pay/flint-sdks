[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryEstimateRule







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `schedule_window` | Optional | [DeliveryScheduleWindowRule](../models/DeliveryScheduleWindowRule.md#deliveryschedulewindowrule) | `schedule_window`: [field definitions](../models/DeliveryEstimateRule.md#deliveryestimaterule-variant-1schedule_window), [field definitions](../models/CreateDeliveryMethodRequest.md#createdeliverymethodrequest-variant-1configurationestimateschedule_window). |
| `transit_time` | Optional | [DeliveryTransitTimeRule](../models/DeliveryTransitTimeRule.md#deliverytransittimerule) | `transit_time`: [field definitions](../models/DeliveryEstimateRule.md#deliveryestimaterule-variant-1transit_time), [field definitions](../models/CreateDeliveryMethodRequest.md#createdeliverymethodrequest-variant-1configurationestimatetransit_time). |
| `type` | Required | string | Values: `"none"`, `"transit_time"`, `"schedule_window"`. |

### DeliveryEstimateRule variant 1

anyOf variant 1: Declared schema DeliveryEstimateRule. How a delivery method estimates timing, chosen by `type`: no estimate, a transit time, or a schedule window..

No additional constraints.

### DeliveryEstimateRule variant 2

anyOf variant 2: Declared schema DeliveryEstimateRuleRequest. The timing estimate rule you supply for a delivery method, chosen by `type`: none, a transit time, or a schedule window..

No additional constraints.

### DeliveryEstimateRule variant 1.schedule_window

Estimate rule for a scheduled-window delivery method, defined by its `availability` schedule.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `availability` | Required | [DeliveryAvailability](../models/DeliveryAvailability.md#deliveryavailability) | When a delivery method can be scheduled: weekly intervals, blackout intervals, lead time, and how far ahead a buyer can book. `availability`: [field definitions](../models/DeliveryEstimateRule.md#deliveryestimaterule-variant-1schedule_windowavailability). |

### DeliveryEstimateRule variant 1.schedule_window.availability

When a delivery method can be scheduled: weekly intervals, blackout intervals, lead time, and how far ahead a buyer can book.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `blackout_intervals` | Optional | Array of [DeliveryBlackoutInterval](../models/DeliveryBlackoutInterval.md#deliveryblackoutinterval) | `blackout_intervals[]`: [field definitions](../models/DeliveryAvailability.md#deliveryavailability-variant-1blackout_intervals). |
| `dst_disambiguation` | Optional | string | Default: `"earlier"`. Values: `"earlier"`, `"later"`. |
| `maximum_scheduling_horizon_days` | Required | integer |  |
| `preparation_lead_time_seconds` | Required | integer string | Notice the merchant needs before a window starts, in seconds. A buyer can choose a window until this long before it starts. Quotes offer only windows that can still be chosen, so a window already under way is not offered. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `same_day_cutoff_minute` | Optional | integer |  |
| `timezone` | Required | string | minLength: `1`. |
| `weekly_intervals` | Required | Array of [DeliveryWeeklyInterval](../models/DeliveryWeeklyInterval.md#deliveryweeklyinterval) | `weekly_intervals[]`: [field definitions](../models/DeliveryAvailability.md#deliveryavailability-variant-1weekly_intervals). |

### DeliveryEstimateRule variant 1.schedule_window.availability.blackout_intervals[]

Field definitions: [DeliveryAvailability variant 1.blackout_intervals[]](../models/DeliveryAvailability.md#deliveryavailability-variant-1blackout_intervals).

### DeliveryEstimateRule variant 1.schedule_window.availability.weekly_intervals[]

Field definitions: [DeliveryAvailability variant 1.weekly_intervals[]](../models/DeliveryAvailability.md#deliveryavailability-variant-1weekly_intervals).

### DeliveryEstimateRule variant 1.transit_time

Estimate rule giving a delivery method's handling time and transit time as ranges of business days.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `handling_days` | Required | [DeliveryBusinessDayRange](../models/DeliveryBusinessDayRange.md#deliverybusinessdayrange) | A minimum and maximum number of business days, used in transit time estimates. `handling_days`: [field definitions](../models/DeliveryEstimateRule.md#deliveryestimaterule-variant-1transit_timehandling_days). |
| `transit_days` | Required | [DeliveryBusinessDayRange](../models/DeliveryBusinessDayRange.md#deliverybusinessdayrange) | A minimum and maximum number of business days, used in transit time estimates. `transit_days`: [field definitions](../models/DeliveryEstimateRule.md#deliveryestimaterule-variant-1transit_timehandling_days). |

### DeliveryEstimateRule variant 1.transit_time.handling_days

A minimum and maximum number of business days, used in transit time estimates.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `maximum` | Required | integer |  |
| `minimum` | Required | integer |  |

### DeliveryEstimateRule variant 1.transit_time.transit_days

Field definitions: [DeliveryEstimateRule variant 1.transit_time.handling_days](../models/DeliveryEstimateRule.md#deliveryestimaterule-variant-1transit_timehandling_days).

### DeliveryEstimateRule variant 2.schedule_window

Field definitions: [CreateDeliveryMethodRequest variant 1.configuration.estimate.schedule_window](../models/CreateDeliveryMethodRequest.md#createdeliverymethodrequest-variant-1configurationestimateschedule_window).

### DeliveryEstimateRule variant 2.transit_time

Field definitions: [CreateDeliveryMethodRequest variant 1.configuration.estimate.transit_time](../models/CreateDeliveryMethodRequest.md#createdeliverymethodrequest-variant-1configurationestimatetransit_time).

