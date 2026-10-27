[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionSchedulePatchInput

Send only fields to change. Omitted fields keep their stored values. null clears nullable subfields. An empty object is invalid.

minProperties: `1`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `ends_at` | Optional | string or null | Time after which the promotion can no longer apply, as an absolute RFC3339 timestamp. Omission keeps the stored value; null clears it. Format: `date-time`. minLength: `1`. |
| `starts_at` | Optional | string or null | Earliest time the promotion can apply, as an absolute RFC3339 timestamp. Omission keeps the stored value; null clears it. Format: `date-time`. minLength: `1`. |
| `timezone` | Optional | string or null | IANA zone the schedule was entered in, used for display. starts_at and ends_at are absolute timestamps, so this does not change when the promotion starts or ends. Send null to clear it. minLength: `1`. maxLength: `255`. |

