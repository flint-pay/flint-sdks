[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryAvailability







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `blackout_intervals` | Optional | Array of [DeliveryBlackoutInterval](../models/DeliveryBlackoutInterval.md#deliveryblackoutinterval) | `blackout_intervals[]`: [field definitions](../models/DeliveryAvailability.md#deliveryavailability-variant-1blackout_intervals), [field definitions](../models/CreateDeliveryMethodRequest.md#createdeliverymethodrequest-variant-1configurationestimateschedule_windowavailabilityblackout_intervals). |
| `dst_disambiguation` | Optional | string | Default: `"earlier"`. Values: `"earlier"`, `"later"`. |
| `maximum_scheduling_horizon_days` | Required | integer |  |
| `preparation_lead_time_seconds` | Required | integer string | Notice the merchant needs before a window starts, in seconds. A buyer can choose a window until this long before it starts. Quotes offer only windows that can still be chosen, so a window already under way is not offered. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `same_day_cutoff_minute` | Optional | integer |  |
| `timezone` | Required | string | minLength: `1`. |
| `weekly_intervals` | Required | Array of [DeliveryWeeklyInterval](../models/DeliveryWeeklyInterval.md#deliveryweeklyinterval) | `weekly_intervals[]`: [field definitions](../models/DeliveryAvailability.md#deliveryavailability-variant-1weekly_intervals), [field definitions](../models/CreateDeliveryMethodRequest.md#createdeliverymethodrequest-variant-1configurationestimateschedule_windowavailabilityweekly_intervals). |

### DeliveryAvailability variant 1

anyOf variant 1: Declared schema DeliveryAvailability. When a delivery method can be scheduled: weekly intervals, blackout intervals, lead time, and how far ahead a buyer can book..

No additional constraints.

### DeliveryAvailability variant 2

anyOf variant 2: Declared schema DeliveryAvailabilityRequestRequest. When a delivery method can be scheduled: weekly intervals, blackout intervals, lead time, and how far ahead a buyer can book..

No additional constraints.

### DeliveryAvailability variant 1.blackout_intervals[]

A local start and end time during which a delivery schedule offers no windows.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `end_local` | Required | string | minLength: `1`. |
| `start_local` | Required | string | minLength: `1`. |

### DeliveryAvailability variant 1.weekly_intervals[]

A recurring weekly span, from a start weekday and minute to an end weekday and minute, used in a delivery method's availability schedule.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `end_minute` | Required | integer |  |
| `end_weekday` | Required | integer |  |
| `start_minute` | Required | integer |  |
| `start_weekday` | Required | integer |  |

### DeliveryAvailability variant 2.blackout_intervals[]

Field definitions: [CreateDeliveryMethodRequest variant 1.configuration.estimate.schedule_window.availability.blackout_intervals[]](../models/CreateDeliveryMethodRequest.md#createdeliverymethodrequest-variant-1configurationestimateschedule_windowavailabilityblackout_intervals).

### DeliveryAvailability variant 2.weekly_intervals[]

Field definitions: [CreateDeliveryMethodRequest variant 1.configuration.estimate.schedule_window.availability.weekly_intervals[]](../models/CreateDeliveryMethodRequest.md#createdeliverymethodrequest-variant-1configurationestimateschedule_windowavailabilityweekly_intervals).

