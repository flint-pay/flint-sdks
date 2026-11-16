[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMerchantDiagnosticPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Optional | string or null | Stable reason the method did not produce an option. - `eligibility_no_match`: The configured eligibility expression excluded the method. - `method_unavailable`: The method was unavailable for this evaluation. - `input_required`: The buyer or caller must provide more information to evaluate the method. - `checkout_context_required`: A checkout session is required to evaluate the method. - `dependency_failure`: Flint could not check whether the method is available. - `dependency_revoked`: The method revision or a dependency was revoked. Publish a corrected revision, rotate the callback signing secret, or choose another method. Values: `"eligibility_no_match"`, `"method_unavailable"`, `"input_required"`, `"checkout_context_required"`, `"dependency_failure"`, `"dependency_revoked"`. `code`: [declared alternatives](../models/DeliveryMerchantDiagnosticPreviousAttributes.md#deliverymerchantdiagnosticpreviousattributescode). |
| `delivery_method_id` | Optional | string or null | ID of the method that was evaluated. Omitted when the diagnostic is about a Location. `delivery_method_id`: [declared alternatives](../models/DeliveryMerchantDiagnosticPreviousAttributes.md#deliverymerchantdiagnosticpreviousattributesdelivery_method_id). |
| `delivery_method_revision_id` | Optional | string or null | ID of the method revision that was evaluated. Omitted when the diagnostic is about a Location. `delivery_method_revision_id`: [declared alternatives](../models/DeliveryMerchantDiagnosticPreviousAttributes.md#deliverymerchantdiagnosticpreviousattributesdelivery_method_revision_id). |
| `diagnostic_id` | Optional | string or null | ID to quote when you ask Flint about this diagnostic. `diagnostic_id`: [declared alternatives](../models/DeliveryMerchantDiagnosticPreviousAttributes.md#deliverymerchantdiagnosticpreviousattributesdiagnostic_id). |
| `eligibility_mismatches` | Optional | Array of [DeliveryEligibilityMismatchPreviousAttributes](../models/DeliveryEligibilityMismatchPreviousAttributes.md#deliveryeligibilitymismatchpreviousattributes) or null | Configured eligibility predicates that conclusively rejected the method. Present only for eligibility_no_match. `eligibility_mismatches`: [declared alternatives](../models/DeliveryMerchantDiagnosticPreviousAttributes.md#deliverymerchantdiagnosticpreviousattributeseligibility_mismatches). |
| `occurred_at` | Optional | string or null | Time Flint recorded this diagnostic. `occurred_at`: [declared alternatives](../models/DeliveryMerchantDiagnosticPreviousAttributes.md#deliverymerchantdiagnosticpreviousattributesoccurred_at). |
| `outcome` | Optional | string or null | What happened when Flint evaluated the method or Location. Values: `"unavailable"`, `"input_required"`, `"cannot_calculate"`, `"requires_checkout_context"`. `outcome`: [declared alternatives](../models/DeliveryMerchantDiagnosticPreviousAttributes.md#deliverymerchantdiagnosticpreviousattributesoutcome). |
| `recommended_action` | Optional | string or null | What the merchant can do to get an option. Values: `"review_configuration"`, `"provide_input"`, `"create_checkout"`, `"retry"`. `recommended_action`: [declared alternatives](../models/DeliveryMerchantDiagnosticPreviousAttributes.md#deliverymerchantdiagnosticpreviousattributesrecommended_action). |
| `retryable` | Optional | boolean or null | Whether trying again later can succeed. `retryable`: [declared alternatives](../models/DeliveryMerchantDiagnosticPreviousAttributes.md#deliverymerchantdiagnosticpreviousattributesretryable). |
| `scope` | Optional | string or null | What the diagnostic is about. Values: `"method"`. `scope`: [declared alternatives](../models/DeliveryMerchantDiagnosticPreviousAttributes.md#deliverymerchantdiagnosticpreviousattributesscope). |
| `summary` | Optional | string or null | Plain-language explanation for the merchant. `summary`: [declared alternatives](../models/DeliveryMerchantDiagnosticPreviousAttributes.md#deliverymerchantdiagnosticpreviousattributessummary). |

### DeliveryMerchantDiagnosticPreviousAttributes.code

### DeliveryMerchantDiagnosticPreviousAttributes.code variant 1

anyOf variant 1: Stable reason the method did not produce an option.
- `eligibility_no_match`: The configured eligibility expression excluded the method.
- `method_unavailable`: The method was unavailable for this evaluation.
- `input_required`: The buyer or caller must provide more information to evaluate the method.
- `checkout_context_required`: A checkout session is required to evaluate the method.
- `dependency_failure`: Flint could not check whether the method is available.
- `dependency_revoked`: The method revision or a dependency was revoked. Publish a corrected revision, rotate the callback signing secret, or choose another method..

- Value shape: string. Stable reason the method did not produce an option. - `eligibility_no_match`: The configured eligibility expression excluded the method. - `method_unavailable`: The method was unavailable for this evaluation. - `input_required`: The buyer or caller must provide more information to evaluate the method. - `checkout_context_required`: A checkout session is required to evaluate the method. - `dependency_failure`: Flint could not check whether the method is available. - `dependency_revoked`: The method revision or a dependency was revoked. Publish a corrected revision, rotate the callback signing secret, or choose another method. Values: `"eligibility_no_match"`, `"method_unavailable"`, `"input_required"`, `"checkout_context_required"`, `"dependency_failure"`, `"dependency_revoked"`.

### DeliveryMerchantDiagnosticPreviousAttributes.code variant 2

anyOf variant 2.

- Value shape: null. Stable reason the method did not produce an option. - `eligibility_no_match`: The configured eligibility expression excluded the method. - `method_unavailable`: The method was unavailable for this evaluation. - `input_required`: The buyer or caller must provide more information to evaluate the method. - `checkout_context_required`: A checkout session is required to evaluate the method. - `dependency_failure`: Flint could not check whether the method is available. - `dependency_revoked`: The method revision or a dependency was revoked. Publish a corrected revision, rotate the callback signing secret, or choose another method. 

### DeliveryMerchantDiagnosticPreviousAttributes.delivery_method_id

### DeliveryMerchantDiagnosticPreviousAttributes.delivery_method_id variant 1

anyOf variant 1: ID of the method that was evaluated. Omitted when the diagnostic is about a Location..

- Value shape: string. ID of the method that was evaluated. Omitted when the diagnostic is about a Location. 

### DeliveryMerchantDiagnosticPreviousAttributes.delivery_method_id variant 2

anyOf variant 2.

- Value shape: null. ID of the method that was evaluated. Omitted when the diagnostic is about a Location. 

### DeliveryMerchantDiagnosticPreviousAttributes.delivery_method_revision_id

### DeliveryMerchantDiagnosticPreviousAttributes.delivery_method_revision_id variant 1

anyOf variant 1: ID of the method revision that was evaluated. Omitted when the diagnostic is about a Location..

- Value shape: string. ID of the method revision that was evaluated. Omitted when the diagnostic is about a Location. 

### DeliveryMerchantDiagnosticPreviousAttributes.delivery_method_revision_id variant 2

anyOf variant 2.

- Value shape: null. ID of the method revision that was evaluated. Omitted when the diagnostic is about a Location. 

### DeliveryMerchantDiagnosticPreviousAttributes.diagnostic_id

### DeliveryMerchantDiagnosticPreviousAttributes.diagnostic_id variant 1

anyOf variant 1: ID to quote when you ask Flint about this diagnostic..

- Value shape: string. ID to quote when you ask Flint about this diagnostic. 

### DeliveryMerchantDiagnosticPreviousAttributes.diagnostic_id variant 2

anyOf variant 2.

- Value shape: null. ID to quote when you ask Flint about this diagnostic. 

### DeliveryMerchantDiagnosticPreviousAttributes.eligibility_mismatches

### DeliveryMerchantDiagnosticPreviousAttributes.eligibility_mismatches variant 1

anyOf variant 1: Configured eligibility predicates that conclusively rejected the method. Present only for eligibility_no_match..

- Value shape: Array of [DeliveryEligibilityMismatchPreviousAttributes](../models/DeliveryEligibilityMismatchPreviousAttributes.md#deliveryeligibilitymismatchpreviousattributes). Configured eligibility predicates that conclusively rejected the method. Present only for eligibility_no_match. 

### DeliveryMerchantDiagnosticPreviousAttributes.eligibility_mismatches variant 2

anyOf variant 2.

- Value shape: null. Configured eligibility predicates that conclusively rejected the method. Present only for eligibility_no_match. 

### DeliveryMerchantDiagnosticPreviousAttributes.occurred_at

### DeliveryMerchantDiagnosticPreviousAttributes.occurred_at variant 1

anyOf variant 1: Time Flint recorded this diagnostic..

- Value shape: string. Time Flint recorded this diagnostic. Time Flint recorded this diagnostic. Format: `date-time`. 

### DeliveryMerchantDiagnosticPreviousAttributes.occurred_at variant 2

anyOf variant 2.

- Value shape: null. Time Flint recorded this diagnostic. 

### DeliveryMerchantDiagnosticPreviousAttributes.outcome

### DeliveryMerchantDiagnosticPreviousAttributes.outcome variant 1

anyOf variant 1: What happened when Flint evaluated the method or Location..

- Value shape: string. What happened when Flint evaluated the method or Location. Values: `"unavailable"`, `"input_required"`, `"cannot_calculate"`, `"requires_checkout_context"`.

### DeliveryMerchantDiagnosticPreviousAttributes.outcome variant 2

anyOf variant 2.

- Value shape: null. What happened when Flint evaluated the method or Location. 

### DeliveryMerchantDiagnosticPreviousAttributes.recommended_action

### DeliveryMerchantDiagnosticPreviousAttributes.recommended_action variant 1

anyOf variant 1: What the merchant can do to get an option..

- Value shape: string. What the merchant can do to get an option. Values: `"review_configuration"`, `"provide_input"`, `"create_checkout"`, `"retry"`.

### DeliveryMerchantDiagnosticPreviousAttributes.recommended_action variant 2

anyOf variant 2.

- Value shape: null. What the merchant can do to get an option. 

### DeliveryMerchantDiagnosticPreviousAttributes.retryable

### DeliveryMerchantDiagnosticPreviousAttributes.retryable variant 1

anyOf variant 1: Whether trying again later can succeed..

- Value shape: boolean. Whether trying again later can succeed. 

### DeliveryMerchantDiagnosticPreviousAttributes.retryable variant 2

anyOf variant 2.

- Value shape: null. Whether trying again later can succeed. 

### DeliveryMerchantDiagnosticPreviousAttributes.scope

### DeliveryMerchantDiagnosticPreviousAttributes.scope variant 1

anyOf variant 1: What the diagnostic is about..

- Value shape: string. What the diagnostic is about. Values: `"method"`.

### DeliveryMerchantDiagnosticPreviousAttributes.scope variant 2

anyOf variant 2.

- Value shape: null. What the diagnostic is about. 

### DeliveryMerchantDiagnosticPreviousAttributes.summary

### DeliveryMerchantDiagnosticPreviousAttributes.summary variant 1

anyOf variant 1: Plain-language explanation for the merchant..

- Value shape: string. Plain-language explanation for the merchant. 

### DeliveryMerchantDiagnosticPreviousAttributes.summary variant 2

anyOf variant 2.

- Value shape: null. Plain-language explanation for the merchant. 

