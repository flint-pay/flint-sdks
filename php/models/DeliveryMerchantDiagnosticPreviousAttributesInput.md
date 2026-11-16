[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMerchantDiagnosticPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Optional | string or null | Stable reason the method did not produce an option. - `eligibility_no_match`: The configured eligibility expression excluded the method. - `method_unavailable`: The method was unavailable for this evaluation. - `input_required`: The buyer or caller must provide more information to evaluate the method. - `checkout_context_required`: A checkout session is required to evaluate the method. - `dependency_failure`: Flint could not check whether the method is available. - `dependency_revoked`: The method revision or a dependency was revoked. Publish a corrected revision, rotate the callback signing secret, or choose another method. Values: `"eligibility_no_match"`, `"method_unavailable"`, `"input_required"`, `"checkout_context_required"`, `"dependency_failure"`, `"dependency_revoked"`. `code`: [declared alternatives](../models/DeliveryMerchantDiagnosticPreviousAttributesInput.md#deliverymerchantdiagnosticpreviousattributesinputcode). |
| `delivery_method_id` | Optional | string or null | ID of the method that was evaluated. Omitted when the diagnostic is about a Location. `delivery_method_id`: [declared alternatives](../models/DeliveryMerchantDiagnosticPreviousAttributesInput.md#deliverymerchantdiagnosticpreviousattributesinputdelivery_method_id). |
| `delivery_method_revision_id` | Optional | string or null | ID of the method revision that was evaluated. Omitted when the diagnostic is about a Location. `delivery_method_revision_id`: [declared alternatives](../models/DeliveryMerchantDiagnosticPreviousAttributesInput.md#deliverymerchantdiagnosticpreviousattributesinputdelivery_method_revision_id). |
| `diagnostic_id` | Optional | string or null | ID to quote when you ask Flint about this diagnostic. `diagnostic_id`: [declared alternatives](../models/DeliveryMerchantDiagnosticPreviousAttributesInput.md#deliverymerchantdiagnosticpreviousattributesinputdiagnostic_id). |
| `eligibility_mismatches` | Optional | Array of [DeliveryEligibilityMismatchPreviousAttributesInput](../models/DeliveryEligibilityMismatchPreviousAttributesInput.md#deliveryeligibilitymismatchpreviousattributesinput) or null | Configured eligibility predicates that conclusively rejected the method. Present only for eligibility_no_match. `eligibility_mismatches`: [declared alternatives](../models/DeliveryMerchantDiagnosticPreviousAttributesInput.md#deliverymerchantdiagnosticpreviousattributesinputeligibility_mismatches). |
| `occurred_at` | Optional | string or null | Time Flint recorded this diagnostic. `occurred_at`: [declared alternatives](../models/DeliveryMerchantDiagnosticPreviousAttributesInput.md#deliverymerchantdiagnosticpreviousattributesinputoccurred_at). |
| `outcome` | Optional | string or null | What happened when Flint evaluated the method or Location. Values: `"unavailable"`, `"input_required"`, `"cannot_calculate"`, `"requires_checkout_context"`. `outcome`: [declared alternatives](../models/DeliveryMerchantDiagnosticPreviousAttributesInput.md#deliverymerchantdiagnosticpreviousattributesinputoutcome). |
| `recommended_action` | Optional | string or null | What the merchant can do to get an option. Values: `"review_configuration"`, `"provide_input"`, `"create_checkout"`, `"retry"`. `recommended_action`: [declared alternatives](../models/DeliveryMerchantDiagnosticPreviousAttributesInput.md#deliverymerchantdiagnosticpreviousattributesinputrecommended_action). |
| `retryable` | Optional | boolean or null | Whether trying again later can succeed. `retryable`: [declared alternatives](../models/DeliveryMerchantDiagnosticPreviousAttributesInput.md#deliverymerchantdiagnosticpreviousattributesinputretryable). |
| `scope` | Optional | string or null | What the diagnostic is about. Values: `"method"`. `scope`: [declared alternatives](../models/DeliveryMerchantDiagnosticPreviousAttributesInput.md#deliverymerchantdiagnosticpreviousattributesinputscope). |
| `summary` | Optional | string or null | Plain-language explanation for the merchant. `summary`: [declared alternatives](../models/DeliveryMerchantDiagnosticPreviousAttributesInput.md#deliverymerchantdiagnosticpreviousattributesinputsummary). |

### DeliveryMerchantDiagnosticPreviousAttributesInput.code

### DeliveryMerchantDiagnosticPreviousAttributesInput.code variant 1

anyOf variant 1: Stable reason the method did not produce an option.
- `eligibility_no_match`: The configured eligibility expression excluded the method.
- `method_unavailable`: The method was unavailable for this evaluation.
- `input_required`: The buyer or caller must provide more information to evaluate the method.
- `checkout_context_required`: A checkout session is required to evaluate the method.
- `dependency_failure`: Flint could not check whether the method is available.
- `dependency_revoked`: The method revision or a dependency was revoked. Publish a corrected revision, rotate the callback signing secret, or choose another method..

- Value shape: string. Stable reason the method did not produce an option. - `eligibility_no_match`: The configured eligibility expression excluded the method. - `method_unavailable`: The method was unavailable for this evaluation. - `input_required`: The buyer or caller must provide more information to evaluate the method. - `checkout_context_required`: A checkout session is required to evaluate the method. - `dependency_failure`: Flint could not check whether the method is available. - `dependency_revoked`: The method revision or a dependency was revoked. Publish a corrected revision, rotate the callback signing secret, or choose another method. Values: `"eligibility_no_match"`, `"method_unavailable"`, `"input_required"`, `"checkout_context_required"`, `"dependency_failure"`, `"dependency_revoked"`.

### DeliveryMerchantDiagnosticPreviousAttributesInput.code variant 2

anyOf variant 2.

- Value shape: null. Stable reason the method did not produce an option. - `eligibility_no_match`: The configured eligibility expression excluded the method. - `method_unavailable`: The method was unavailable for this evaluation. - `input_required`: The buyer or caller must provide more information to evaluate the method. - `checkout_context_required`: A checkout session is required to evaluate the method. - `dependency_failure`: Flint could not check whether the method is available. - `dependency_revoked`: The method revision or a dependency was revoked. Publish a corrected revision, rotate the callback signing secret, or choose another method. 

### DeliveryMerchantDiagnosticPreviousAttributesInput.delivery_method_id

### DeliveryMerchantDiagnosticPreviousAttributesInput.delivery_method_id variant 1

anyOf variant 1: ID of the method that was evaluated. Omitted when the diagnostic is about a Location..

- Value shape: string. ID of the method that was evaluated. Omitted when the diagnostic is about a Location. ID of the method that was evaluated. Omitted when the diagnostic is about a Location. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. 

### DeliveryMerchantDiagnosticPreviousAttributesInput.delivery_method_id variant 2

anyOf variant 2.

- Value shape: null. ID of the method that was evaluated. Omitted when the diagnostic is about a Location. 

### DeliveryMerchantDiagnosticPreviousAttributesInput.delivery_method_revision_id

### DeliveryMerchantDiagnosticPreviousAttributesInput.delivery_method_revision_id variant 1

anyOf variant 1: ID of the method revision that was evaluated. Omitted when the diagnostic is about a Location..

- Value shape: string. ID of the method revision that was evaluated. Omitted when the diagnostic is about a Location. ID of the method revision that was evaluated. Omitted when the diagnostic is about a Location. Example: `"dmetr_01KEZF7C001ZF9D92DY1G51GV9"`. 

### DeliveryMerchantDiagnosticPreviousAttributesInput.delivery_method_revision_id variant 2

anyOf variant 2.

- Value shape: null. ID of the method revision that was evaluated. Omitted when the diagnostic is about a Location. 

### DeliveryMerchantDiagnosticPreviousAttributesInput.diagnostic_id

### DeliveryMerchantDiagnosticPreviousAttributesInput.diagnostic_id variant 1

anyOf variant 1: ID to quote when you ask Flint about this diagnostic..

- Value shape: string. ID to quote when you ask Flint about this diagnostic. ID to quote when you ask Flint about this diagnostic. Example: `"ddiag_01KEZF7C002JPVD08857RGDGPC"`. 

### DeliveryMerchantDiagnosticPreviousAttributesInput.diagnostic_id variant 2

anyOf variant 2.

- Value shape: null. ID to quote when you ask Flint about this diagnostic. 

### DeliveryMerchantDiagnosticPreviousAttributesInput.eligibility_mismatches

### DeliveryMerchantDiagnosticPreviousAttributesInput.eligibility_mismatches variant 1

anyOf variant 1: Configured eligibility predicates that conclusively rejected the method. Present only for eligibility_no_match..

- Value shape: Array of [DeliveryEligibilityMismatchPreviousAttributesInput](../models/DeliveryEligibilityMismatchPreviousAttributesInput.md#deliveryeligibilitymismatchpreviousattributesinput). Configured eligibility predicates that conclusively rejected the method. Present only for eligibility_no_match. 

### DeliveryMerchantDiagnosticPreviousAttributesInput.eligibility_mismatches variant 2

anyOf variant 2.

- Value shape: null. Configured eligibility predicates that conclusively rejected the method. Present only for eligibility_no_match. 

### DeliveryMerchantDiagnosticPreviousAttributesInput.occurred_at

### DeliveryMerchantDiagnosticPreviousAttributesInput.occurred_at variant 1

anyOf variant 1: Time Flint recorded this diagnostic..

- Value shape: string. Time Flint recorded this diagnostic. Time Flint recorded this diagnostic. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### DeliveryMerchantDiagnosticPreviousAttributesInput.occurred_at variant 2

anyOf variant 2.

- Value shape: null. Time Flint recorded this diagnostic. 

### DeliveryMerchantDiagnosticPreviousAttributesInput.outcome

### DeliveryMerchantDiagnosticPreviousAttributesInput.outcome variant 1

anyOf variant 1: What happened when Flint evaluated the method or Location..

- Value shape: string. What happened when Flint evaluated the method or Location. Values: `"unavailable"`, `"input_required"`, `"cannot_calculate"`, `"requires_checkout_context"`.

### DeliveryMerchantDiagnosticPreviousAttributesInput.outcome variant 2

anyOf variant 2.

- Value shape: null. What happened when Flint evaluated the method or Location. 

### DeliveryMerchantDiagnosticPreviousAttributesInput.recommended_action

### DeliveryMerchantDiagnosticPreviousAttributesInput.recommended_action variant 1

anyOf variant 1: What the merchant can do to get an option..

- Value shape: string. What the merchant can do to get an option. Values: `"review_configuration"`, `"provide_input"`, `"create_checkout"`, `"retry"`.

### DeliveryMerchantDiagnosticPreviousAttributesInput.recommended_action variant 2

anyOf variant 2.

- Value shape: null. What the merchant can do to get an option. 

### DeliveryMerchantDiagnosticPreviousAttributesInput.retryable

### DeliveryMerchantDiagnosticPreviousAttributesInput.retryable variant 1

anyOf variant 1: Whether trying again later can succeed..

- Value shape: boolean. Whether trying again later can succeed. 

### DeliveryMerchantDiagnosticPreviousAttributesInput.retryable variant 2

anyOf variant 2.

- Value shape: null. Whether trying again later can succeed. 

### DeliveryMerchantDiagnosticPreviousAttributesInput.scope

### DeliveryMerchantDiagnosticPreviousAttributesInput.scope variant 1

anyOf variant 1: What the diagnostic is about..

- Value shape: string. What the diagnostic is about. Values: `"method"`.

### DeliveryMerchantDiagnosticPreviousAttributesInput.scope variant 2

anyOf variant 2.

- Value shape: null. What the diagnostic is about. 

### DeliveryMerchantDiagnosticPreviousAttributesInput.summary

### DeliveryMerchantDiagnosticPreviousAttributesInput.summary variant 1

anyOf variant 1: Plain-language explanation for the merchant..

- Value shape: string. Plain-language explanation for the merchant. 

### DeliveryMerchantDiagnosticPreviousAttributesInput.summary variant 2

anyOf variant 2.

- Value shape: null. Plain-language explanation for the merchant. 

