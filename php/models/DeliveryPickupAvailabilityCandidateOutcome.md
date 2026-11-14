[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPickupAvailabilityCandidateOutcome

Whether pickup is available at one location, chosen by `type`, with the reason when it is unavailable or cannot be calculated.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address_advisories` | Optional | Array of [DeliveryAddressAdvisoryResource](../models/DeliveryAddressAdvisoryResource.md#deliveryaddressadvisoryresource) | Address verification results that affected this method. Omitted when there are none. |
| `failure_category` | Optional | string | Why Flint could not calculate pickup availability and the action that can make calculation succeed. - `eligibility_context_invalid`: Create a new checkout session, then create a new quote. - `eligibility_dependency_failure`: Retry after the eligibility dependency recovers. - `pickup_method_unavailable`: Activate or choose an available pickup method. - `inventory_dependency_failure`: Retry after inventory availability and routing recover. Values: `"eligibility_context_invalid"`, `"eligibility_dependency_failure"`, `"pickup_method_unavailable"`, `"inventory_dependency_failure"`. |
| `input_requirements` | Optional | Array of [DeliveryInputRequirement](../models/DeliveryInputRequirement.md#deliveryinputrequirement) | Inputs the method needs before Flint can price it. Set only when `type` is `input_required`. `input_requirements[]`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesinput_requirements). |
| `retryable` | Optional | boolean | Whether trying again later can succeed. Set only when `type` is `cannot_calculate`. |
| `type` | Required | string | What happened when Flint evaluated this delivery method. Values: `"available"`, `"unavailable"`, `"input_required"`, `"cannot_calculate"`. |
| `unavailable_reason` | Optional | string | Why pickup is unavailable and the action that can make it eligible. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the relevant buyer facts or method eligibility rule. - `inventory_unavailable`: The origin or pickup location cannot supply the requested inventory. Reduce the quantity, replenish inventory, or choose another origin or method. Values: `"eligibility_no_match"`, `"inventory_unavailable"`. |

### DeliveryPickupAvailabilityCandidateOutcome.input_requirements[]

Field definitions: [CheckoutSessionResponse.data.delivery.choice_groups[].candidate_outcomes{}.input_requirements[]](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesinput_requirements).

