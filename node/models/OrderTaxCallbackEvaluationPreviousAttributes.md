[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderTaxCallbackEvaluationPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `evaluated_at` | Optional | string or null | When Flint saved your callback's answer for the order's current inputs. A change that recalculates tax with identical inputs after the 15-minute cache updates it; a payment that confirms an unchanged answer doesn't. Payment calls your callback again when it is more than 24 hours old. `evaluated_at`: [declared alternatives](../models/OrderTaxCallbackEvaluationPreviousAttributes.md#ordertaxcallbackevaluationpreviousattributesevaluated_at). |
| `tax_calculation_evaluation_id` | Optional | string or null | The evaluation ID (`tce_...`) Flint sent your callback as `tax_calculation_evaluation_id` and `webhook-id`. Identical inputs keep the same ID. `tax_calculation_evaluation_id`: [declared alternatives](../models/OrderTaxCallbackEvaluationPreviousAttributes.md#ordertaxcallbackevaluationpreviousattributestax_calculation_evaluation_id). |

### OrderTaxCallbackEvaluationPreviousAttributes.evaluated_at

### OrderTaxCallbackEvaluationPreviousAttributes.evaluated_at variant 1

anyOf variant 1: When Flint saved your callback's answer for the order's current inputs. A change that recalculates tax with identical inputs after the 15-minute cache updates it; a payment that confirms an unchanged answer doesn't. Payment calls your callback again when it is more than 24 hours old..

- Value shape: string. When Flint saved your callback's answer for the order's current inputs. A change that recalculates tax with identical inputs after the 15-minute cache updates it; a payment that confirms an unchanged answer doesn't. Payment calls your callback again when it is more than 24 hours old. When Flint saved your callback's answer for the order's current inputs. A change that recalculates tax with identical inputs after the 15-minute cache updates it; a payment that confirms an unchanged answer doesn't. Payment calls your callback again when it is more than 24 hours old. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### OrderTaxCallbackEvaluationPreviousAttributes.evaluated_at variant 2

anyOf variant 2.

- Value shape: null. When Flint saved your callback's answer for the order's current inputs. A change that recalculates tax with identical inputs after the 15-minute cache updates it; a payment that confirms an unchanged answer doesn't. Payment calls your callback again when it is more than 24 hours old. 

### OrderTaxCallbackEvaluationPreviousAttributes.tax_calculation_evaluation_id

### OrderTaxCallbackEvaluationPreviousAttributes.tax_calculation_evaluation_id variant 1

anyOf variant 1: The evaluation ID (`tce_...`) Flint sent your callback as `tax_calculation_evaluation_id` and `webhook-id`. Identical inputs keep the same ID..

- Value shape: string. The evaluation ID (`tce_...`) Flint sent your callback as `tax_calculation_evaluation_id` and `webhook-id`. Identical inputs keep the same ID. The evaluation ID (`tce_...`) Flint sent your callback as `tax_calculation_evaluation_id` and `webhook-id`. Identical inputs keep the same ID. Example: `"tce_01KEZF7C00Z61NNPEAF0CNSXP4"`. 

### OrderTaxCallbackEvaluationPreviousAttributes.tax_calculation_evaluation_id variant 2

anyOf variant 2.

- Value shape: null. The evaluation ID (`tce_...`) Flint sent your callback as `tax_calculation_evaluation_id` and `webhook-id`. Identical inputs keep the same ID. 

