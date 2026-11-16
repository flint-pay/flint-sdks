[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryAvailabilityPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `blackout_intervals` | Optional | Array of [DeliveryBlackoutIntervalPreviousAttributes](../models/DeliveryBlackoutIntervalPreviousAttributes.md#deliveryblackoutintervalpreviousattributes) or null | Local date-time spans in which no window is offered. `blackout_intervals`: [declared alternatives](../models/DeliveryAvailabilityPreviousAttributes.md#deliveryavailabilitypreviousattributesblackout_intervals). |
| `dst_disambiguation` | Optional | string or null | Which of the two instants a local time means when a clock change makes it happen twice. Defaults to `earlier`. Values: `"earlier"`, `"later"`. `dst_disambiguation`: [declared alternatives](../models/DeliveryAvailabilityPreviousAttributes.md#deliveryavailabilitypreviousattributesdst_disambiguation). |
| `maximum_scheduling_horizon_days` | Optional | integer or null | How many days ahead windows are offered, from 1 to 365. `maximum_scheduling_horizon_days`: [declared alternatives](../models/DeliveryAvailabilityPreviousAttributes.md#deliveryavailabilitypreviousattributesmaximum_scheduling_horizon_days). |
| `preparation_lead_time_seconds` | Optional | integer or null | Notice the merchant needs before a window starts, in seconds. A buyer can choose a window until this long before it starts. Quotes offer only windows that can still be chosen, so a window already under way is not offered. `preparation_lead_time_seconds`: [declared alternatives](../models/DeliveryAvailabilityPreviousAttributes.md#deliveryavailabilitypreviousattributespreparation_lead_time_seconds). |
| `same_day_cutoff_minute` | Optional | integer or null | Minute of the day, from 0 to 1439 in the schedule's timezone, after which today's windows are no longer offered. Omit it to apply no cutoff. `same_day_cutoff_minute`: [declared alternatives](../models/DeliveryAvailabilityPreviousAttributes.md#deliveryavailabilitypreviousattributessame_day_cutoff_minute). |
| `timezone` | Optional | string or null | Uses an IANA time zone name. `timezone`: [declared alternatives](../models/DeliveryAvailabilityPreviousAttributes.md#deliveryavailabilitypreviousattributestimezone). |
| `weekly_intervals` | Optional | Array of [DeliveryWeeklyIntervalPreviousAttributes](../models/DeliveryWeeklyIntervalPreviousAttributes.md#deliveryweeklyintervalpreviousattributes) or null | One to 100 weekly spans in which windows are offered. They cannot overlap. `weekly_intervals`: [declared alternatives](../models/DeliveryAvailabilityPreviousAttributes.md#deliveryavailabilitypreviousattributesweekly_intervals). |

### DeliveryAvailabilityPreviousAttributes.blackout_intervals

### DeliveryAvailabilityPreviousAttributes.blackout_intervals variant 1

anyOf variant 1: Local date-time spans in which no window is offered..

- Value shape: Array of [DeliveryBlackoutIntervalPreviousAttributes](../models/DeliveryBlackoutIntervalPreviousAttributes.md#deliveryblackoutintervalpreviousattributes). Local date-time spans in which no window is offered. 

### DeliveryAvailabilityPreviousAttributes.blackout_intervals variant 2

anyOf variant 2.

- Value shape: null. Local date-time spans in which no window is offered. 

### DeliveryAvailabilityPreviousAttributes.dst_disambiguation

### DeliveryAvailabilityPreviousAttributes.dst_disambiguation variant 1

anyOf variant 1: Which of the two instants a local time means when a clock change makes it happen twice. Defaults to `earlier`..

- Value shape: string. Which of the two instants a local time means when a clock change makes it happen twice. Defaults to `earlier`. Which of the two instants a local time means when a clock change makes it happen twice. Defaults to `earlier`. Default: `"earlier"`. Values: `"earlier"`, `"later"`.

### DeliveryAvailabilityPreviousAttributes.dst_disambiguation variant 2

anyOf variant 2.

- Value shape: null. Which of the two instants a local time means when a clock change makes it happen twice. Defaults to `earlier`. 

### DeliveryAvailabilityPreviousAttributes.maximum_scheduling_horizon_days

### DeliveryAvailabilityPreviousAttributes.maximum_scheduling_horizon_days variant 1

anyOf variant 1: How many days ahead windows are offered, from 1 to 365..

- Value shape: integer. How many days ahead windows are offered, from 1 to 365. 

### DeliveryAvailabilityPreviousAttributes.maximum_scheduling_horizon_days variant 2

anyOf variant 2.

- Value shape: null. How many days ahead windows are offered, from 1 to 365. 

### DeliveryAvailabilityPreviousAttributes.preparation_lead_time_seconds

### DeliveryAvailabilityPreviousAttributes.preparation_lead_time_seconds variant 1

anyOf variant 1: Notice the merchant needs before a window starts, in seconds. A buyer can choose a window until this long before it starts. Quotes offer only windows that can still be chosen, so a window already under way is not offered..

- Value shape: integer. Notice the merchant needs before a window starts, in seconds. A buyer can choose a window until this long before it starts. Quotes offer only windows that can still be chosen, so a window already under way is not offered. Notice the merchant needs before a window starts, in seconds. A buyer can choose a window until this long before it starts. Quotes offer only windows that can still be chosen, so a window already under way is not offered. Format: `int64`. 

### DeliveryAvailabilityPreviousAttributes.preparation_lead_time_seconds variant 2

anyOf variant 2.

- Value shape: null. Notice the merchant needs before a window starts, in seconds. A buyer can choose a window until this long before it starts. Quotes offer only windows that can still be chosen, so a window already under way is not offered. 

### DeliveryAvailabilityPreviousAttributes.same_day_cutoff_minute

### DeliveryAvailabilityPreviousAttributes.same_day_cutoff_minute variant 1

anyOf variant 1: Minute of the day, from 0 to 1439 in the schedule's timezone, after which today's windows are no longer offered. Omit it to apply no cutoff..

- Value shape: integer. Minute of the day, from 0 to 1439 in the schedule's timezone, after which today's windows are no longer offered. Omit it to apply no cutoff. 

### DeliveryAvailabilityPreviousAttributes.same_day_cutoff_minute variant 2

anyOf variant 2.

- Value shape: null. Minute of the day, from 0 to 1439 in the schedule's timezone, after which today's windows are no longer offered. Omit it to apply no cutoff. 

### DeliveryAvailabilityPreviousAttributes.timezone

### DeliveryAvailabilityPreviousAttributes.timezone variant 1

anyOf variant 1: Uses an IANA time zone name..

- Value shape: string. Uses an IANA time zone name. Uses an IANA time zone name. minLength: `1`. 

### DeliveryAvailabilityPreviousAttributes.timezone variant 2

anyOf variant 2.

- Value shape: null. Uses an IANA time zone name. 

### DeliveryAvailabilityPreviousAttributes.weekly_intervals

### DeliveryAvailabilityPreviousAttributes.weekly_intervals variant 1

anyOf variant 1: One to 100 weekly spans in which windows are offered. They cannot overlap..

- Value shape: Array of [DeliveryWeeklyIntervalPreviousAttributes](../models/DeliveryWeeklyIntervalPreviousAttributes.md#deliveryweeklyintervalpreviousattributes). One to 100 weekly spans in which windows are offered. They cannot overlap. 

### DeliveryAvailabilityPreviousAttributes.weekly_intervals variant 2

anyOf variant 2.

- Value shape: null. One to 100 weekly spans in which windows are offered. They cannot overlap. 

