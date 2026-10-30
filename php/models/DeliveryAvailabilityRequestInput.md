[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryAvailabilityRequestInput

When a delivery method can be scheduled: weekly intervals, blackout intervals, lead time, and how far ahead a buyer can book.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `blackout_intervals` | Optional | Array of [DeliveryBlackoutIntervalRequestInput](../models/DeliveryBlackoutIntervalRequestInput.md#deliveryblackoutintervalrequestinput) |  |
| `dst_disambiguation` | Optional | string | Default: `"earlier"`. Values: `"earlier"`, `"later"`. |
| `maximum_scheduling_horizon_days` | Required | integer |  |
| `preparation_lead_time_seconds` | Required | integer | Notice the merchant needs before a window starts, in seconds. A buyer can choose a window until this long before it starts. Quotes offer only windows that can still be chosen, so a window already under way is not offered. Format: `int64`. |
| `same_day_cutoff_minute` | Optional | integer |  |
| `timezone` | Required | string | minLength: `1`. |
| `weekly_intervals` | Required | Array of [DeliveryWeeklyIntervalRequestInput](../models/DeliveryWeeklyIntervalRequestInput.md#deliveryweeklyintervalrequestinput) |  |

