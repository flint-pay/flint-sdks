[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionRecurrencePreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `period_count` | Optional | integer or null | Number of charged payments for repeating recurrence. Omit for once and forever. `period_count`: [declared alternatives](../models/PromotionRecurrenceForeverPreviousAttributes.md#promotionrecurrenceforeverpreviousattributesperiod_count). |
| `type` | Optional | (string or null) and Alternative shapes (see declared variants) | Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating. Values: `"once"`, `"repeating"`, `"forever"`. `type`: [declared alternatives](../models/PromotionRecurrencePreviousAttributes.md#promotionrecurrencepreviousattributes-variant-1type), [declared alternatives](../models/PromotionRecurrencePreviousAttributes.md#promotionrecurrencepreviousattributes-variant-2type), [declared alternatives](../models/PromotionRecurrencePreviousAttributes.md#promotionrecurrencepreviousattributes-variant-3type). |

### PromotionRecurrencePreviousAttributes variant 1: `type` = `"once"`

anyOf PromotionRecurrenceOncePreviousAttributes.

- Constraints for `type`: Apply the promotion to the first charged subscription payment. Values: `"once"`.

### PromotionRecurrencePreviousAttributes variant 2: `type` = `"repeating"`

anyOf PromotionRecurrenceRepeatingPreviousAttributes.

- Constraints for `type`: Apply the promotion to period_count charged subscription payments. Values: `"repeating"`.

### PromotionRecurrencePreviousAttributes variant 3: `type` = `"forever"`

anyOf PromotionRecurrenceForeverPreviousAttributes.

- Constraints for `type`: Apply the promotion to every charged subscription payment. Values: `"forever"`.

### PromotionRecurrencePreviousAttributes.period_count

Declared alternatives: [PromotionRecurrenceForeverPreviousAttributes.period_count](../models/PromotionRecurrenceForeverPreviousAttributes.md#promotionrecurrenceforeverpreviousattributesperiod_count).

### PromotionRecurrencePreviousAttributes variant 1.type

### PromotionRecurrencePreviousAttributes variant 1.type variant 1

anyOf group 1 variant 1: Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating..

- Value shape: string. Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating. Apply the promotion to the first charged subscription payment. Values: `"once"`, `"repeating"`, `"forever"`.

### PromotionRecurrencePreviousAttributes variant 1.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating. Apply the promotion to the first charged subscription payment. 

### PromotionRecurrencePreviousAttributes variant 1.type variant 3

anyOf group 2 variant 1: Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating..

- Value shape: string. Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating. Apply the promotion to the first charged subscription payment. Values: `"once"`.

### PromotionRecurrencePreviousAttributes variant 1.type variant 5

anyOf group 3 variant 1: Apply the promotion to the first charged subscription payment..

- Value shape: any. Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating. Apply the promotion to the first charged subscription payment. Values: `"once"`.

### PromotionRecurrencePreviousAttributes variant 2.type

### PromotionRecurrencePreviousAttributes variant 2.type variant 1

anyOf group 1 variant 1: Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating..

- Value shape: string. Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating. Apply the promotion to period_count charged subscription payments. Values: `"once"`, `"repeating"`, `"forever"`.

### PromotionRecurrencePreviousAttributes variant 2.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating. Apply the promotion to period_count charged subscription payments. 

### PromotionRecurrencePreviousAttributes variant 2.type variant 3

anyOf group 2 variant 1: Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating..

- Value shape: string. Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating. Apply the promotion to period_count charged subscription payments. Values: `"repeating"`.

### PromotionRecurrencePreviousAttributes variant 2.type variant 5

anyOf group 3 variant 1: Apply the promotion to period_count charged subscription payments..

- Value shape: any. Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating. Apply the promotion to period_count charged subscription payments. Values: `"repeating"`.

### PromotionRecurrencePreviousAttributes variant 3.type

### PromotionRecurrencePreviousAttributes variant 3.type variant 1

anyOf group 1 variant 1: Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating..

- Value shape: string. Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating. Apply the promotion to every charged subscription payment. Values: `"once"`, `"repeating"`, `"forever"`.

### PromotionRecurrencePreviousAttributes variant 3.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating. Apply the promotion to every charged subscription payment. 

### PromotionRecurrencePreviousAttributes variant 3.type variant 3

anyOf group 2 variant 1: Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating..

- Value shape: string. Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating. Apply the promotion to every charged subscription payment. Values: `"forever"`.

### PromotionRecurrencePreviousAttributes variant 3.type variant 5

anyOf group 3 variant 1: Apply the promotion to every charged subscription payment..

- Value shape: any. Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating. Apply the promotion to every charged subscription payment. Values: `"forever"`.

