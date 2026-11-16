[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionEndAfterDatePreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `end_date` | Optional | string or null | Last local calendar date allowed by the automatic end condition, in YYYY-MM-DD format. `end_date`: [declared alternatives](../models/SubscriptionEndAfterDatePreviousAttributes.md#subscriptionendafterdatepreviousattributesend_date). |
| `timezone` | Optional | string or null | IANA timezone saved with the end date. `timezone`: [declared alternatives](../models/SubscriptionEndAfterDatePreviousAttributes.md#subscriptionendafterdatepreviousattributestimezone). |
| `type` | Optional | string or null | How this automatic end is measured. Values: `"date"`. `type`: [declared alternatives](../models/SubscriptionEndAfterDatePreviousAttributes.md#subscriptionendafterdatepreviousattributestype). |

### SubscriptionEndAfterDatePreviousAttributes.end_date

### SubscriptionEndAfterDatePreviousAttributes.end_date variant 1

anyOf variant 1: Last local calendar date allowed by the automatic end condition, in YYYY-MM-DD format..

- Value shape: string. Last local calendar date allowed by the automatic end condition, in YYYY-MM-DD format. Last local calendar date allowed by the automatic end condition, in YYYY-MM-DD format. Format: `date`. Example: `"2026-08-02"`. 

### SubscriptionEndAfterDatePreviousAttributes.end_date variant 2

anyOf variant 2.

- Value shape: null. Last local calendar date allowed by the automatic end condition, in YYYY-MM-DD format. 

### SubscriptionEndAfterDatePreviousAttributes.timezone

### SubscriptionEndAfterDatePreviousAttributes.timezone variant 1

anyOf variant 1: IANA timezone saved with the end date..

- Value shape: string. IANA timezone saved with the end date. 

### SubscriptionEndAfterDatePreviousAttributes.timezone variant 2

anyOf variant 2.

- Value shape: null. IANA timezone saved with the end date. 

### SubscriptionEndAfterDatePreviousAttributes.type

### SubscriptionEndAfterDatePreviousAttributes.type variant 1

anyOf variant 1: How this automatic end is measured..

- Value shape: string. How this automatic end is measured. Values: `"date"`.

### SubscriptionEndAfterDatePreviousAttributes.type variant 2

anyOf variant 2.

- Value shape: null. How this automatic end is measured. 

