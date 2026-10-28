[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryAvailabilityRequestRequestInput

Request input. Response: [DeliveryAvailability](../models/DeliveryAvailability.md#deliveryavailability).

When a delivery method can be scheduled: weekly intervals, blackout intervals, lead time, and how far ahead a buyer can book.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `blackout_intervals` | Optional | Array of [DeliveryBlackoutIntervalRequestRequestInput](../models/DeliveryBlackoutIntervalRequestRequestInput.md#deliveryblackoutintervalrequestrequestinput) |  |
| `dst_disambiguation` | Optional | string | Default: `"earlier"`. Values: `"earlier"`, `"later"`. |
| `maximum_scheduling_horizon_days` | Required | integer |  |
| `preparation_lead_time_seconds` | Required | integer string | Notice the merchant needs before a window starts, in seconds. A buyer can choose a window until this long before it starts. Quotes offer only windows that can still be chosen, so a window already under way is not offered. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `same_day_cutoff_minute` | Optional | integer |  |
| `timezone` | Required | string | minLength: `1`. |
| `weekly_intervals` | Required | Array of [DeliveryWeeklyIntervalRequestRequestInput](../models/DeliveryWeeklyIntervalRequestRequestInput.md#deliveryweeklyintervalrequestrequestinput) |  |

