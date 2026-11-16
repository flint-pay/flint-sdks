[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionSchedulePreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `ends_at` | Optional | string or null | Time after which the promotion can no longer apply, as an absolute RFC3339 timestamp. Omitted when it has no end time. `ends_at`: [declared alternatives](../models/PromotionSchedulePreviousAttributes.md#promotionschedulepreviousattributesends_at). |
| `starts_at` | Optional | string or null | Earliest time the promotion can apply, as an absolute RFC3339 timestamp. Omitted when it has no start time. `starts_at`: [declared alternatives](../models/PromotionSchedulePreviousAttributes.md#promotionschedulepreviousattributesstarts_at). |
| `timezone` | Optional | string or null | IANA zone the schedule was entered in, used for display. starts_at and ends_at are absolute timestamps, so this does not change when the promotion starts or ends. `timezone`: [declared alternatives](../models/PromotionSchedulePreviousAttributes.md#promotionschedulepreviousattributestimezone). |

### PromotionSchedulePreviousAttributes.ends_at

### PromotionSchedulePreviousAttributes.ends_at variant 1

anyOf variant 1: Time after which the promotion can no longer apply, as an absolute RFC3339 timestamp. Omitted when it has no end time..

- Value shape: string. Time after which the promotion can no longer apply, as an absolute RFC3339 timestamp. Omitted when it has no end time. Time after which the promotion can no longer apply, as an absolute RFC3339 timestamp. Omitted when it has no end time. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. 

### PromotionSchedulePreviousAttributes.ends_at variant 2

anyOf variant 2.

- Value shape: null. Time after which the promotion can no longer apply, as an absolute RFC3339 timestamp. Omitted when it has no end time. 

### PromotionSchedulePreviousAttributes.starts_at

### PromotionSchedulePreviousAttributes.starts_at variant 1

anyOf variant 1: Earliest time the promotion can apply, as an absolute RFC3339 timestamp. Omitted when it has no start time..

- Value shape: string. Earliest time the promotion can apply, as an absolute RFC3339 timestamp. Omitted when it has no start time. Earliest time the promotion can apply, as an absolute RFC3339 timestamp. Omitted when it has no start time. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. 

### PromotionSchedulePreviousAttributes.starts_at variant 2

anyOf variant 2.

- Value shape: null. Earliest time the promotion can apply, as an absolute RFC3339 timestamp. Omitted when it has no start time. 

### PromotionSchedulePreviousAttributes.timezone

### PromotionSchedulePreviousAttributes.timezone variant 1

anyOf variant 1: IANA zone the schedule was entered in, used for display. starts_at and ends_at are absolute timestamps, so this does not change when the promotion starts or ends..

- Value shape: string. IANA zone the schedule was entered in, used for display. starts_at and ends_at are absolute timestamps, so this does not change when the promotion starts or ends. IANA zone the schedule was entered in, used for display. starts_at and ends_at are absolute timestamps, so this does not change when the promotion starts or ends. minLength: `1`. maxLength: `255`. 

### PromotionSchedulePreviousAttributes.timezone variant 2

anyOf variant 2.

- Value shape: null. IANA zone the schedule was entered in, used for display. starts_at and ends_at are absolute timestamps, so this does not change when the promotion starts or ends. 

