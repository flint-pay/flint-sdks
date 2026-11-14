[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryAvailabilityInput

When a delivery method can be scheduled: weekly intervals, blackout intervals, lead time, and how far ahead a buyer can book.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `blackout_intervals` | Optional | Array of [DeliveryBlackoutIntervalInput](../models/DeliveryBlackoutIntervalInput.md#deliveryblackoutintervalinput) | Local date-time spans in which no window is offered. |
| `dst_disambiguation` | Optional | string | Which of the two instants a local time means when a clock change makes it happen twice. Defaults to `earlier`. Default: `"earlier"`. Values: `"earlier"`, `"later"`. |
| `maximum_scheduling_horizon_days` | Required | integer | How many days ahead windows are offered, from 1 to 365. |
| `preparation_lead_time_seconds` | Required | integer | Notice the merchant needs before a window starts, in seconds. A buyer can choose a window until this long before it starts. Quotes offer only windows that can still be chosen, so a window already under way is not offered. Format: `int64`. |
| `same_day_cutoff_minute` | Optional | integer | Minute of the day, from 0 to 1439 in the schedule's timezone, after which today's windows are no longer offered. Omit it to apply no cutoff. |
| `timezone` | Required | string | Uses an IANA time zone name. minLength: `1`. |
| `weekly_intervals` | Required | Array of [DeliveryWeeklyIntervalInput](../models/DeliveryWeeklyIntervalInput.md#deliveryweeklyintervalinput) | One to 100 weekly spans in which windows are offered. They cannot overlap. |

