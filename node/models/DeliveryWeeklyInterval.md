[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryWeeklyInterval







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `end_minute` | Required | integer | Minute of the day the span ends, from 0 to 1439, in the schedule's timezone. |
| `end_weekday` | Required | integer | Weekday the span ends, from 0 for Sunday to 6 for Saturday. |
| `start_minute` | Required | integer | Minute of the day the span starts, from 0 to 1439, in the schedule's timezone. |
| `start_weekday` | Required | integer | Weekday the span starts, from 0 for Sunday to 6 for Saturday. |

### DeliveryWeeklyInterval variant 1

anyOf variant 1: Declared schema DeliveryWeeklyInterval. A recurring weekly span, from a start weekday and minute to an end weekday and minute, used in a delivery method's availability schedule..

No additional constraints.

### DeliveryWeeklyInterval variant 2

anyOf variant 2: Declared schema DeliveryWeeklyIntervalRequest. A recurring weekly span, from a start weekday and minute to an end weekday and minute, used in a delivery method's availability schedule..

No additional constraints.

