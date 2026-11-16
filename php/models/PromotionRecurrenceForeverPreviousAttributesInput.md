[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionRecurrenceForeverPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `period_count` | Optional | integer or null | Number of charged payments for repeating recurrence. Omit for once and forever. `period_count`: [declared alternatives](../models/PromotionRecurrenceForeverPreviousAttributesInput.md#promotionrecurrenceforeverpreviousattributesinputperiod_count). |
| `type` | Optional | (string or null) and Alternative shapes (see declared variants) | Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating. Apply the promotion to every charged subscription payment. Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating. Apply the promotion to every charged subscription payment. Values: `"forever"`. `type`: [declared alternatives](../models/PromotionRecurrenceForeverPreviousAttributesInput.md#promotionrecurrenceforeverpreviousattributesinputtype). |

### PromotionRecurrenceForeverPreviousAttributesInput.period_count

### PromotionRecurrenceForeverPreviousAttributesInput.period_count variant 1

anyOf variant 1: Number of charged payments for repeating recurrence. Omit for once and forever..

- Value shape: integer. Number of charged payments for repeating recurrence. Omit for once and forever. Number of charged payments for repeating recurrence. Omit for once and forever. minimum: `1`. 

### PromotionRecurrenceForeverPreviousAttributesInput.period_count variant 2

anyOf variant 2.

- Value shape: null. Number of charged payments for repeating recurrence. Omit for once and forever. 

### PromotionRecurrenceForeverPreviousAttributesInput.type

### PromotionRecurrenceForeverPreviousAttributesInput.type variant 1

anyOf group 1 variant 1: Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating..

- Value shape: string. Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating. Apply the promotion to every charged subscription payment. Values: `"forever"`.

### PromotionRecurrenceForeverPreviousAttributesInput.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating. Apply the promotion to every charged subscription payment. 

### PromotionRecurrenceForeverPreviousAttributesInput.type variant 3

anyOf group 2 variant 1: Apply the promotion to every charged subscription payment..

- Value shape: any. Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating. Apply the promotion to every charged subscription payment. Values: `"forever"`.

