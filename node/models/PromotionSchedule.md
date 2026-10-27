[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionSchedule

When a promotion is active, with a start time, an end time, and the time zone it was entered in.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `ends_at` | Optional | string | Time after which the promotion can no longer apply, as an absolute RFC3339 timestamp. Omitted when it has no end time. Format: `date-time`. minLength: `1`. |
| `starts_at` | Optional | string | Earliest time the promotion can apply, as an absolute RFC3339 timestamp. Omitted when it has no start time. Format: `date-time`. minLength: `1`. |
| `timezone` | Optional | string | IANA zone the schedule was entered in, used for display. starts_at and ends_at are absolute timestamps, so this does not change when the promotion starts or ends. minLength: `1`. maxLength: `255`. |

