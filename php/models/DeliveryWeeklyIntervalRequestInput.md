[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryWeeklyIntervalRequestInput

A recurring weekly span, from a start weekday and minute to an end weekday and minute, used in a delivery method's availability schedule.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `end_minute` | Required | integer |  |
| `end_weekday` | Required | integer |  |
| `start_minute` | Required | integer |  |
| `start_weekday` | Required | integer |  |

