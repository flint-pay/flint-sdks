[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryEstimateRule







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `schedule_window` | Optional | [DeliveryScheduleWindowRule](../models/DeliveryScheduleWindowRule.md#deliveryschedulewindowrule) | Weekly schedule of delivery windows. Set only when `type` is `schedule_window`. `schedule_window`: [field definitions](../models/DeliveryEstimateRule.md#deliveryestimaterule-variant-1schedule_window), [field definitions](../models/CreateDeliveryMethodRequest.md#createdeliverymethodrequest-variant-1configurationestimateschedule_window). |
| `transit_time` | Optional | [DeliveryTransitTimeRule](../models/DeliveryTransitTimeRule.md#deliverytransittimerule) | Handling and transit time. Set only when `type` is `transit_time`. `transit_time`: [field definitions](../models/DeliveryEstimateRule.md#deliveryestimaterule-variant-1transit_time), [field definitions](../models/CreateDeliveryMethodRequest.md#createdeliverymethodrequest-variant-1configurationestimatetransit_time). |
| `type` | Required | string | How Flint estimates timing. Set the property named by this value. Values: `"none"`, `"transit_time"`, `"schedule_window"`. |

### DeliveryEstimateRule variant 1

anyOf variant 1: Declared schema DeliveryEstimateRule. How a delivery method estimates timing, chosen by `type`: no estimate, a transit time, or a schedule window..

No additional constraints.

### DeliveryEstimateRule variant 2

anyOf variant 2: Declared schema DeliveryEstimateRuleRequest. The timing estimate rule you supply for a delivery method, chosen by `type`: none, a transit time, or a schedule window..

No additional constraints.

### DeliveryEstimateRule variant 1.schedule_window

Weekly schedule of delivery windows. Set only when `type` is `schedule_window`. Estimate rule for a scheduled-window delivery method, defined by its `availability` schedule.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `availability` | Required | [DeliveryAvailability](../models/DeliveryAvailability.md#deliveryavailability) | When windows can be offered. When a delivery method can be scheduled: weekly intervals, blackout intervals, lead time, and how far ahead a buyer can book. `availability`: [field definitions](../models/DeliveryEstimateRule.md#deliveryestimaterule-variant-1schedule_windowavailability). |

### DeliveryEstimateRule variant 1.schedule_window.availability

When windows can be offered. When a delivery method can be scheduled: weekly intervals, blackout intervals, lead time, and how far ahead a buyer can book.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `blackout_intervals` | Optional | Array of [DeliveryBlackoutInterval](../models/DeliveryBlackoutInterval.md#deliveryblackoutinterval) | Local date-time spans in which no window is offered. `blackout_intervals[]`: [field definitions](../models/DeliveryAvailability.md#deliveryavailability-variant-1blackout_intervals). |
| `dst_disambiguation` | Optional | string | Which of the two instants a local time means when a clock change makes it happen twice. Defaults to `earlier`. Default: `"earlier"`. Values: `"earlier"`, `"later"`. |
| `maximum_scheduling_horizon_days` | Required | integer | How many days ahead windows are offered, from 1 to 365. |
| `preparation_lead_time_seconds` | Required | integer | Notice the merchant needs before a window starts, in seconds. A buyer can choose a window until this long before it starts. Quotes offer only windows that can still be chosen, so a window already under way is not offered. Format: `int64`. |
| `same_day_cutoff_minute` | Optional | integer | Minute of the day, from 0 to 1439 in the schedule's timezone, after which today's windows are no longer offered. Omit it to apply no cutoff. |
| `timezone` | Required | string | Uses an IANA time zone name. minLength: `1`. |
| `weekly_intervals` | Required | Array of [DeliveryWeeklyInterval](../models/DeliveryWeeklyInterval.md#deliveryweeklyinterval) | One to 100 weekly spans in which windows are offered. They cannot overlap. `weekly_intervals[]`: [field definitions](../models/DeliveryAvailability.md#deliveryavailability-variant-1weekly_intervals). |

### DeliveryEstimateRule variant 1.schedule_window.availability.blackout_intervals[]

Field definitions: [DeliveryAvailability variant 1.blackout_intervals[]](../models/DeliveryAvailability.md#deliveryavailability-variant-1blackout_intervals).

### DeliveryEstimateRule variant 1.schedule_window.availability.weekly_intervals[]

Field definitions: [DeliveryAvailability variant 1.weekly_intervals[]](../models/DeliveryAvailability.md#deliveryavailability-variant-1weekly_intervals).

### DeliveryEstimateRule variant 1.transit_time

Handling and transit time. Set only when `type` is `transit_time`. Estimate rule giving a delivery method's handling time and transit time as ranges of business days.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `handling_days` | Required | [DeliveryBusinessDayRange](../models/DeliveryBusinessDayRange.md#deliverybusinessdayrange) | Business days the merchant needs to prepare the order. A minimum and maximum number of business days, used in transit time estimates. `handling_days`: [field definitions](../models/DeliveryEstimateRule.md#deliveryestimaterule-variant-1transit_timehandling_days). |
| `transit_days` | Required | [DeliveryBusinessDayRange](../models/DeliveryBusinessDayRange.md#deliverybusinessdayrange) | Business days the order spends in transit. A minimum and maximum number of business days, used in transit time estimates. `transit_days`: [field definitions](../models/DeliveryEstimateRule.md#deliveryestimaterule-variant-1transit_timetransit_days). |

### DeliveryEstimateRule variant 1.transit_time.handling_days

Business days the merchant needs to prepare the order. A minimum and maximum number of business days, used in transit time estimates.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `maximum` | Required | integer | Most business days, from `minimum` to 365. |
| `minimum` | Required | integer | Fewest business days, from 0. |

### DeliveryEstimateRule variant 1.transit_time.transit_days

Business days the order spends in transit. A minimum and maximum number of business days, used in transit time estimates.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `maximum` | Required | integer | Most business days, from `minimum` to 365. |
| `minimum` | Required | integer | Fewest business days, from 0. |

### DeliveryEstimateRule variant 2.schedule_window

Field definitions: [CreateDeliveryMethodRequest variant 1.configuration.estimate.schedule_window](../models/CreateDeliveryMethodRequest.md#createdeliverymethodrequest-variant-1configurationestimateschedule_window).

### DeliveryEstimateRule variant 2.transit_time

Field definitions: [CreateDeliveryMethodRequest variant 1.configuration.estimate.transit_time](../models/CreateDeliveryMethodRequest.md#createdeliverymethodrequest-variant-1configurationestimatetransit_time).

