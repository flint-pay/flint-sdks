[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionRecurrenceRepeatingPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `period_count` | Optional | integer or null | Number of charged payments for repeating recurrence. Omit for once and forever. `period_count`: [declared alternatives](../models/PromotionRecurrenceForeverPreviousAttributes.md#promotionrecurrenceforeverpreviousattributesperiod_count). |
| `type` | Optional | (string or null) and Alternative shapes (see declared variants) | Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating. Apply the promotion to period_count charged subscription payments. Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating. Apply the promotion to period_count charged subscription payments. Values: `"repeating"`. `type`: [declared alternatives](../models/PromotionRecurrenceRepeatingPreviousAttributes.md#promotionrecurrencerepeatingpreviousattributestype). |

### PromotionRecurrenceRepeatingPreviousAttributes.period_count

Declared alternatives: [PromotionRecurrenceForeverPreviousAttributes.period_count](../models/PromotionRecurrenceForeverPreviousAttributes.md#promotionrecurrenceforeverpreviousattributesperiod_count).

### PromotionRecurrenceRepeatingPreviousAttributes.type

### PromotionRecurrenceRepeatingPreviousAttributes.type variant 1

anyOf group 1 variant 1: Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating..

- Value shape: string. Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating. Apply the promotion to period_count charged subscription payments. Values: `"repeating"`.

### PromotionRecurrenceRepeatingPreviousAttributes.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating. Apply the promotion to period_count charged subscription payments. 

### PromotionRecurrenceRepeatingPreviousAttributes.type variant 3

anyOf group 2 variant 1: Apply the promotion to period_count charged subscription payments..

- Value shape: any. Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating. Apply the promotion to period_count charged subscription payments. Values: `"repeating"`.

