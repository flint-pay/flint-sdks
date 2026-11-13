[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryBlackoutIntervalRequestInput

A local start and end time during which a delivery schedule offers no windows.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `end_local` | Required | string | Local date and time the blackout ends, as `YYYY-MM-DDTHH:MM:SS` in the schedule's timezone. minLength: `1`. |
| `start_local` | Required | string | Local date and time the blackout starts, as `YYYY-MM-DDTHH:MM:SS` in the schedule's timezone. minLength: `1`. |

