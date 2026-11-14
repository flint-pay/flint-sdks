[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderTaxCallbackEvaluationInput

The tax calculation callback evaluation an order's tax uses.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `evaluated_at` | Required | string | When Flint saved your callback's answer for the order's current inputs. A change that recalculates tax with identical inputs after the 15-minute cache updates it; a payment that confirms an unchanged answer doesn't. Payment calls your callback again when it is more than 24 hours old. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `tax_calculation_evaluation_id` | Required | string | The evaluation ID (`tce_...`) Flint sent your callback as `tax_calculation_evaluation_id` and `webhook-id`. Identical inputs keep the same ID. Example: `"tce_01KEZF7C00Z61NNPEAF0CNSXP4"`. |

