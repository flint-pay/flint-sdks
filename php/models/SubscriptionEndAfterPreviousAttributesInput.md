[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionEndAfterPreviousAttributesInput

The subscription's automatic end condition, measured by charged billing cycles or a saved local calendar date.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `cycle_count` | Conditional | integer or null | Total charged billing cycles, including imported completed cycles. `cycle_count`: [declared alternatives](../models/SubscriptionEndAfterCyclesPreviousAttributesInput.md#subscriptionendaftercyclespreviousattributesinputcycle_count). |
| `type` | Optional | string or null | How this automatic end is measured. `type`: [declared alternatives](../models/SubscriptionEndAfterCyclesPreviousAttributesInput.md#subscriptionendaftercyclespreviousattributesinputtype), [declared alternatives](../models/SubscriptionEndAfterDatePreviousAttributesInput.md#subscriptionendafterdatepreviousattributesinputtype). |
| `end_date` | Conditional | string or null | Last local calendar date allowed by the automatic end condition, in YYYY-MM-DD format. `end_date`: [declared alternatives](../models/SubscriptionEndAfterDatePreviousAttributesInput.md#subscriptionendafterdatepreviousattributesinputend_date). |
| `timezone` | Conditional | string or null | IANA timezone saved with the end date. `timezone`: [declared alternatives](../models/SubscriptionEndAfterDatePreviousAttributesInput.md#subscriptionendafterdatepreviousattributesinputtimezone). |

### SubscriptionEndAfterPreviousAttributesInput variant 1: `type` = `"cycles"`

anyOf SubscriptionEndAfterCyclesPreviousAttributes.

- Optional: `cycle_count`.
- Undeclared: `end_date`, `timezone`.
- Constraints for `type`: Values: `"cycles"`.

### SubscriptionEndAfterPreviousAttributesInput variant 2: `type` = `"date"`

anyOf SubscriptionEndAfterDatePreviousAttributes.

- Optional: `end_date`, `timezone`.
- Undeclared: `cycle_count`.
- Constraints for `type`: Values: `"date"`.

### SubscriptionEndAfterPreviousAttributesInput variant 1.cycle_count

Declared alternatives: [SubscriptionEndAfterCyclesPreviousAttributesInput.cycle_count](../models/SubscriptionEndAfterCyclesPreviousAttributesInput.md#subscriptionendaftercyclespreviousattributesinputcycle_count).

### SubscriptionEndAfterPreviousAttributesInput variant 1.type

Declared alternatives: [SubscriptionEndAfterCyclesPreviousAttributesInput.type](../models/SubscriptionEndAfterCyclesPreviousAttributesInput.md#subscriptionendaftercyclespreviousattributesinputtype).

### SubscriptionEndAfterPreviousAttributesInput variant 2.end_date

Declared alternatives: [SubscriptionEndAfterDatePreviousAttributesInput.end_date](../models/SubscriptionEndAfterDatePreviousAttributesInput.md#subscriptionendafterdatepreviousattributesinputend_date).

### SubscriptionEndAfterPreviousAttributesInput variant 2.timezone

Declared alternatives: [SubscriptionEndAfterDatePreviousAttributesInput.timezone](../models/SubscriptionEndAfterDatePreviousAttributesInput.md#subscriptionendafterdatepreviousattributesinputtimezone).

### SubscriptionEndAfterPreviousAttributesInput variant 2.type

Declared alternatives: [SubscriptionEndAfterDatePreviousAttributesInput.type](../models/SubscriptionEndAfterDatePreviousAttributesInput.md#subscriptionendafterdatepreviousattributesinputtype).

