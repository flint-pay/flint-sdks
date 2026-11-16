[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryAvailabilityPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `blackout_intervals` | Optional | Array of [DeliveryBlackoutIntervalPreviousAttributesInput](../models/DeliveryBlackoutIntervalPreviousAttributesInput.md#deliveryblackoutintervalpreviousattributesinput) or null | Local date-time spans in which no window is offered. `blackout_intervals`: [declared alternatives](../models/DeliveryAvailabilityPreviousAttributesInput.md#deliveryavailabilitypreviousattributesinputblackout_intervals). |
| `dst_disambiguation` | Optional | string or null | Which of the two instants a local time means when a clock change makes it happen twice. Defaults to `earlier`. Values: `"earlier"`, `"later"`. `dst_disambiguation`: [declared alternatives](../models/DeliveryAvailabilityPreviousAttributesInput.md#deliveryavailabilitypreviousattributesinputdst_disambiguation). |
| `maximum_scheduling_horizon_days` | Optional | integer or null | How many days ahead windows are offered, from 1 to 365. `maximum_scheduling_horizon_days`: [declared alternatives](../models/DeliveryAvailabilityPreviousAttributesInput.md#deliveryavailabilitypreviousattributesinputmaximum_scheduling_horizon_days). |
| `preparation_lead_time_seconds` | Optional | integer or null | Notice the merchant needs before a window starts, in seconds. A buyer can choose a window until this long before it starts. Quotes offer only windows that can still be chosen, so a window already under way is not offered. `preparation_lead_time_seconds`: [declared alternatives](../models/DeliveryAvailabilityPreviousAttributesInput.md#deliveryavailabilitypreviousattributesinputpreparation_lead_time_seconds). |
| `same_day_cutoff_minute` | Optional | integer or null | Minute of the day, from 0 to 1439 in the schedule's timezone, after which today's windows are no longer offered. Omit it to apply no cutoff. `same_day_cutoff_minute`: [declared alternatives](../models/DeliveryAvailabilityPreviousAttributesInput.md#deliveryavailabilitypreviousattributesinputsame_day_cutoff_minute). |
| `timezone` | Optional | string or null | Uses an IANA time zone name. `timezone`: [declared alternatives](../models/DeliveryAvailabilityPreviousAttributesInput.md#deliveryavailabilitypreviousattributesinputtimezone). |
| `weekly_intervals` | Optional | Array of [DeliveryWeeklyIntervalPreviousAttributesInput](../models/DeliveryWeeklyIntervalPreviousAttributesInput.md#deliveryweeklyintervalpreviousattributesinput) or null | One to 100 weekly spans in which windows are offered. They cannot overlap. `weekly_intervals`: [declared alternatives](../models/DeliveryAvailabilityPreviousAttributesInput.md#deliveryavailabilitypreviousattributesinputweekly_intervals). |

### DeliveryAvailabilityPreviousAttributesInput.blackout_intervals

### DeliveryAvailabilityPreviousAttributesInput.blackout_intervals variant 1

anyOf variant 1: Local date-time spans in which no window is offered..

- Value shape: Array of [DeliveryBlackoutIntervalPreviousAttributesInput](../models/DeliveryBlackoutIntervalPreviousAttributesInput.md#deliveryblackoutintervalpreviousattributesinput). Local date-time spans in which no window is offered. 

### DeliveryAvailabilityPreviousAttributesInput.blackout_intervals variant 2

anyOf variant 2.

- Value shape: null. Local date-time spans in which no window is offered. 

### DeliveryAvailabilityPreviousAttributesInput.dst_disambiguation

### DeliveryAvailabilityPreviousAttributesInput.dst_disambiguation variant 1

anyOf variant 1: Which of the two instants a local time means when a clock change makes it happen twice. Defaults to `earlier`..

- Value shape: string. Which of the two instants a local time means when a clock change makes it happen twice. Defaults to `earlier`. Which of the two instants a local time means when a clock change makes it happen twice. Defaults to `earlier`. Default: `"earlier"`. Values: `"earlier"`, `"later"`.

### DeliveryAvailabilityPreviousAttributesInput.dst_disambiguation variant 2

anyOf variant 2.

- Value shape: null. Which of the two instants a local time means when a clock change makes it happen twice. Defaults to `earlier`. 

### DeliveryAvailabilityPreviousAttributesInput.maximum_scheduling_horizon_days

### DeliveryAvailabilityPreviousAttributesInput.maximum_scheduling_horizon_days variant 1

anyOf variant 1: How many days ahead windows are offered, from 1 to 365..

- Value shape: integer. How many days ahead windows are offered, from 1 to 365. 

### DeliveryAvailabilityPreviousAttributesInput.maximum_scheduling_horizon_days variant 2

anyOf variant 2.

- Value shape: null. How many days ahead windows are offered, from 1 to 365. 

### DeliveryAvailabilityPreviousAttributesInput.preparation_lead_time_seconds

### DeliveryAvailabilityPreviousAttributesInput.preparation_lead_time_seconds variant 1

anyOf variant 1: Notice the merchant needs before a window starts, in seconds. A buyer can choose a window until this long before it starts. Quotes offer only windows that can still be chosen, so a window already under way is not offered..

- Value shape: integer. Notice the merchant needs before a window starts, in seconds. A buyer can choose a window until this long before it starts. Quotes offer only windows that can still be chosen, so a window already under way is not offered. Notice the merchant needs before a window starts, in seconds. A buyer can choose a window until this long before it starts. Quotes offer only windows that can still be chosen, so a window already under way is not offered. Format: `int64`. 

### DeliveryAvailabilityPreviousAttributesInput.preparation_lead_time_seconds variant 2

anyOf variant 2.

- Value shape: null. Notice the merchant needs before a window starts, in seconds. A buyer can choose a window until this long before it starts. Quotes offer only windows that can still be chosen, so a window already under way is not offered. 

### DeliveryAvailabilityPreviousAttributesInput.same_day_cutoff_minute

### DeliveryAvailabilityPreviousAttributesInput.same_day_cutoff_minute variant 1

anyOf variant 1: Minute of the day, from 0 to 1439 in the schedule's timezone, after which today's windows are no longer offered. Omit it to apply no cutoff..

- Value shape: integer. Minute of the day, from 0 to 1439 in the schedule's timezone, after which today's windows are no longer offered. Omit it to apply no cutoff. 

### DeliveryAvailabilityPreviousAttributesInput.same_day_cutoff_minute variant 2

anyOf variant 2.

- Value shape: null. Minute of the day, from 0 to 1439 in the schedule's timezone, after which today's windows are no longer offered. Omit it to apply no cutoff. 

### DeliveryAvailabilityPreviousAttributesInput.timezone

### DeliveryAvailabilityPreviousAttributesInput.timezone variant 1

anyOf variant 1: Uses an IANA time zone name..

- Value shape: string. Uses an IANA time zone name. Uses an IANA time zone name. minLength: `1`. 

### DeliveryAvailabilityPreviousAttributesInput.timezone variant 2

anyOf variant 2.

- Value shape: null. Uses an IANA time zone name. 

### DeliveryAvailabilityPreviousAttributesInput.weekly_intervals

### DeliveryAvailabilityPreviousAttributesInput.weekly_intervals variant 1

anyOf variant 1: One to 100 weekly spans in which windows are offered. They cannot overlap..

- Value shape: Array of [DeliveryWeeklyIntervalPreviousAttributesInput](../models/DeliveryWeeklyIntervalPreviousAttributesInput.md#deliveryweeklyintervalpreviousattributesinput). One to 100 weekly spans in which windows are offered. They cannot overlap. 

### DeliveryAvailabilityPreviousAttributesInput.weekly_intervals variant 2

anyOf variant 2.

- Value shape: null. One to 100 weekly spans in which windows are offered. They cannot overlap. 

