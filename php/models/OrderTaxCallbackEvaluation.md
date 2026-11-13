[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderTaxCallbackEvaluation

The tax calculation callback evaluation an order's tax uses.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `evaluated_at` | Required | string | When Flint saved your callback's answer for the order's current inputs. A change that recalculates tax with identical inputs after the 15-minute cache updates it; a payment that confirms an unchanged answer doesn't. Payment calls your callback again when it is more than 24 hours old. Format: `date-time`. |
| `tax_calculation_evaluation_id` | Required | string | The evaluation ID (`tce_...`) Flint sent your callback as `tax_calculation_evaluation_id` and `webhook-id`. Identical inputs keep the same ID. |

