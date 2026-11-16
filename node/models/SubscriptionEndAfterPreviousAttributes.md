[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionEndAfterPreviousAttributes

The subscription's automatic end condition, measured by charged billing cycles or a saved local calendar date.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `cycle_count` | Conditional | integer or null | Total charged billing cycles, including imported completed cycles. `cycle_count`: [declared alternatives](../models/SubscriptionEndAfterCyclesPreviousAttributes.md#subscriptionendaftercyclespreviousattributescycle_count). |
| `type` | Optional | string or null | How this automatic end is measured. `type`: [declared alternatives](../models/SubscriptionEndAfterCyclesPreviousAttributes.md#subscriptionendaftercyclespreviousattributestype), [declared alternatives](../models/SubscriptionEndAfterDatePreviousAttributes.md#subscriptionendafterdatepreviousattributestype). |
| `end_date` | Conditional | string or null | Last local calendar date allowed by the automatic end condition, in YYYY-MM-DD format. `end_date`: [declared alternatives](../models/SubscriptionEndAfterDatePreviousAttributes.md#subscriptionendafterdatepreviousattributesend_date). |
| `timezone` | Conditional | string or null | IANA timezone saved with the end date. `timezone`: [declared alternatives](../models/SubscriptionEndAfterDatePreviousAttributes.md#subscriptionendafterdatepreviousattributestimezone). |

### SubscriptionEndAfterPreviousAttributes variant 1: `type` = `"cycles"`

anyOf SubscriptionEndAfterCyclesPreviousAttributes.

- Optional: `cycle_count`.
- Undeclared: `end_date`, `timezone`.
- Constraints for `type`: Values: `"cycles"`.

### SubscriptionEndAfterPreviousAttributes variant 2: `type` = `"date"`

anyOf SubscriptionEndAfterDatePreviousAttributes.

- Optional: `end_date`, `timezone`.
- Undeclared: `cycle_count`.
- Constraints for `type`: Values: `"date"`.

### SubscriptionEndAfterPreviousAttributes variant 1.cycle_count

Declared alternatives: [SubscriptionEndAfterCyclesPreviousAttributes.cycle_count](../models/SubscriptionEndAfterCyclesPreviousAttributes.md#subscriptionendaftercyclespreviousattributescycle_count).

### SubscriptionEndAfterPreviousAttributes variant 1.type

Declared alternatives: [SubscriptionEndAfterCyclesPreviousAttributes.type](../models/SubscriptionEndAfterCyclesPreviousAttributes.md#subscriptionendaftercyclespreviousattributestype).

### SubscriptionEndAfterPreviousAttributes variant 2.end_date

Declared alternatives: [SubscriptionEndAfterDatePreviousAttributes.end_date](../models/SubscriptionEndAfterDatePreviousAttributes.md#subscriptionendafterdatepreviousattributesend_date).

### SubscriptionEndAfterPreviousAttributes variant 2.timezone

Declared alternatives: [SubscriptionEndAfterDatePreviousAttributes.timezone](../models/SubscriptionEndAfterDatePreviousAttributes.md#subscriptionendafterdatepreviousattributestimezone).

### SubscriptionEndAfterPreviousAttributes variant 2.type

Declared alternatives: [SubscriptionEndAfterDatePreviousAttributes.type](../models/SubscriptionEndAfterDatePreviousAttributes.md#subscriptionendafterdatepreviousattributestype).

