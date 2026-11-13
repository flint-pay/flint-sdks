[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMerchantDiagnosticInput

A merchant-only diagnostic explaining why a delivery method produced no option, with its outcome, recommended action, and eligibility mismatches.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string | Stable reason the method did not produce an option. - `eligibility_no_match`: The configured eligibility expression excluded the method. - `method_unavailable`: The method was unavailable for this evaluation. - `input_required`: The buyer or caller must provide more information to evaluate the method. - `checkout_context_required`: A checkout session is required to evaluate the method. - `dependency_failure`: Flint could not check whether the method is available. - `dependency_revoked`: The method revision or a dependency was revoked. Publish a corrected revision, rotate the callback signing secret, or choose another method. Values: `"eligibility_no_match"`, `"method_unavailable"`, `"input_required"`, `"checkout_context_required"`, `"dependency_failure"`, `"dependency_revoked"`. |
| `delivery_method_id` | Optional | string | ID of the method that was evaluated. Omitted when the diagnostic is about a Location. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `delivery_method_revision_id` | Optional | string | ID of the method revision that was evaluated. Omitted when the diagnostic is about a Location. Example: `"dmetr_01KEZF7C001ZF9D92DY1G51GV9"`. |
| `diagnostic_id` | Required | string | ID to quote when you ask Flint about this diagnostic. Example: `"ddiag_01KEZF7C002JPVD08857RGDGPC"`. |
| `eligibility_mismatches` | Optional | Array of [DeliveryEligibilityMismatchInput](../models/DeliveryEligibilityMismatchInput.md#deliveryeligibilitymismatchinput) | Configured eligibility predicates that conclusively rejected the method. Present only for eligibility_no_match. |
| `occurred_at` | Required | string | Time Flint recorded this diagnostic. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `outcome` | Required | string | What happened when Flint evaluated the method or Location. Values: `"unavailable"`, `"input_required"`, `"cannot_calculate"`, `"requires_checkout_context"`. |
| `recommended_action` | Required | string | What the merchant can do to get an option. Values: `"review_configuration"`, `"provide_input"`, `"create_checkout"`, `"retry"`. |
| `retryable` | Required | boolean | Whether trying again later can succeed. |
| `scope` | Required | string | What the diagnostic is about. Values: `"method"`. |
| `summary` | Required | string | Plain-language explanation for the merchant. |

