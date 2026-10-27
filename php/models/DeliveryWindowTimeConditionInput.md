[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryWindowTimeConditionInput

Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on the listed `weekdays`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `end_minute` | Optional | integer |  |
| `start_minute` | Optional | integer |  |
| `weekdays` | Optional | Array of string | Items: minLength: `1`. |

