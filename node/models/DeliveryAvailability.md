[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryAvailability







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `blackout_intervals` | Optional | Array of [DeliveryBlackoutInterval](../models/DeliveryBlackoutInterval.md#deliveryblackoutinterval) | Local date-time spans in which no window is offered. `blackout_intervals[]`: [field definitions](../models/DeliveryAvailability.md#deliveryavailability-variant-1blackout_intervals), [field definitions](../models/CreateDeliveryMethodRequest.md#createdeliverymethodrequest-variant-1configurationestimateschedule_windowavailabilityblackout_intervals). |
| `dst_disambiguation` | Optional | string | Which of the two instants a local time means when a clock change makes it happen twice. Defaults to `earlier`. Default: `"earlier"`. Values: `"earlier"`, `"later"`. |
| `maximum_scheduling_horizon_days` | Required | integer | How many days ahead windows are offered, from 1 to 365. |
| `preparation_lead_time_seconds` | Required | integer | Notice the merchant needs before a window starts, in seconds. A buyer can choose a window until this long before it starts. Quotes offer only windows that can still be chosen, so a window already under way is not offered. Format: `int64`. |
| `same_day_cutoff_minute` | Optional | integer | Minute of the day, from 0 to 1439 in the schedule's timezone, after which today's windows are no longer offered. Omit it to apply no cutoff. |
| `timezone` | Required | string | Uses an IANA time zone name. minLength: `1`. |
| `weekly_intervals` | Required | Array of [DeliveryWeeklyInterval](../models/DeliveryWeeklyInterval.md#deliveryweeklyinterval) | One to 100 weekly spans in which windows are offered. They cannot overlap. `weekly_intervals[]`: [field definitions](../models/DeliveryAvailability.md#deliveryavailability-variant-1weekly_intervals), [field definitions](../models/CreateDeliveryMethodRequest.md#createdeliverymethodrequest-variant-1configurationestimateschedule_windowavailabilityweekly_intervals). |

### DeliveryAvailability variant 1

anyOf variant 1: Declared schema DeliveryAvailability. When a delivery method can be scheduled: weekly intervals, blackout intervals, lead time, and how far ahead a buyer can book..

No additional constraints.

### DeliveryAvailability variant 2

anyOf variant 2: Declared schema DeliveryAvailabilityRequest. When a delivery method can be scheduled: weekly intervals, blackout intervals, lead time, and how far ahead a buyer can book..

No additional constraints.

### DeliveryAvailability variant 1.blackout_intervals[]

A local start and end time during which a delivery schedule offers no windows.

Field definitions: [shared fields](DeliveryBlackoutInterval.md#deliveryblackoutinterval).

### DeliveryAvailability variant 1.weekly_intervals[]

A recurring weekly span, from a start weekday and minute to an end weekday and minute, used in a delivery method's availability schedule.

Field definitions: [shared fields](DeliveryWeeklyInterval.md#deliveryweeklyinterval).

### DeliveryAvailability variant 2.blackout_intervals[]

Field definitions: [CreateDeliveryMethodRequest variant 1.configuration.estimate.schedule_window.availability.blackout_intervals[]](../models/CreateDeliveryMethodRequest.md#createdeliverymethodrequest-variant-1configurationestimateschedule_windowavailabilityblackout_intervals).

### DeliveryAvailability variant 2.weekly_intervals[]

Field definitions: [CreateDeliveryMethodRequest variant 1.configuration.estimate.schedule_window.availability.weekly_intervals[]](../models/CreateDeliveryMethodRequest.md#createdeliverymethodrequest-variant-1configurationestimateschedule_windowavailabilityweekly_intervals).

