[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMerchantDiagnosticInput

A merchant-only diagnostic explaining why a delivery method produced no option, with its outcome, recommended action, and eligibility mismatches.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string | Stable reason the method did not produce an option. - `eligibility_no_match`: The configured eligibility expression excluded the method. - `method_unavailable`: The method was unavailable for this evaluation. - `input_required`: The buyer or caller must provide more information to evaluate the method. - `checkout_context_required`: A checkout session is required to evaluate the method. - `dependency_failure`: Flint could not check whether the method is available. Values: `"eligibility_no_match"`, `"method_unavailable"`, `"input_required"`, `"checkout_context_required"`, `"dependency_failure"`. |
| `delivery_method_id` | Optional | string |  |
| `delivery_method_revision_id` | Optional | string |  |
| `diagnostic_id` | Required | string |  |
| `eligibility_mismatches` | Optional | Array of [DeliveryEligibilityMismatchInput](../models/DeliveryEligibilityMismatchInput.md#deliveryeligibilitymismatchinput) | Configured eligibility predicates that conclusively rejected the method. Present only for eligibility_no_match. |
| `occurred_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `outcome` | Required | string | Values: `"unavailable"`, `"input_required"`, `"cannot_calculate"`, `"requires_checkout_context"`. |
| `recommended_action` | Required | string | Values: `"review_configuration"`, `"provide_input"`, `"create_checkout"`, `"retry"`. |
| `retryable` | Required | boolean |  |
| `scope` | Required | string | Values: `"method"`. |
| `summary` | Required | string |  |

