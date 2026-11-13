[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryWindowTimeCondition

Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on the listed `weekdays`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `end_minute` | Optional | integer | Minute of the day at which matching stops, counted from midnight in the window's timezone, from 1 to 1440 and after `start_minute`. The minute itself does not match. Send it with `start_minute`. |
| `start_minute` | Optional | integer | First minute of the day that matches, counted from midnight in the window's timezone, from 0 to 1439. Send it with `end_minute`. |
| `weekdays` | Optional | Array of string | Lowercase weekday names, such as `monday`, with no duplicates. Omit it to match every weekday. Items: minLength: `1`. |

