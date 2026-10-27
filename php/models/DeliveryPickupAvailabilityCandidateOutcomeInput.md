[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPickupAvailabilityCandidateOutcomeInput

Whether pickup is available at one location, chosen by `type`, with the reason when it is unavailable or cannot be calculated.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address_advisories` | Optional | Array of [DeliveryAddressAdvisoryResourceInput](../models/DeliveryAddressAdvisoryResourceInput.md#deliveryaddressadvisoryresourceinput) |  |
| `failure_category` | Optional | string | Why Flint could not calculate pickup availability and the action that can make calculation succeed. - `eligibility_context_invalid`: Create a new checkout session, then create a new quote. - `eligibility_dependency_failure`: Retry after the eligibility dependency recovers. - `pickup_method_unavailable`: Activate or choose an available pickup method. - `inventory_dependency_failure`: Retry after inventory availability and routing recover. Values: `"eligibility_context_invalid"`, `"eligibility_dependency_failure"`, `"pickup_method_unavailable"`, `"inventory_dependency_failure"`. |
| `input_requirements` | Optional | Array of [DeliveryInputRequirementInput](../models/DeliveryInputRequirementInput.md#deliveryinputrequirementinput) |  |
| `retryable` | Optional | boolean |  |
| `type` | Required | string | Values: `"available"`, `"unavailable"`, `"input_required"`, `"cannot_calculate"`. |
| `unavailable_reason` | Optional | string | Why pickup is unavailable and the action that can make it eligible. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the relevant buyer facts or method eligibility rule. - `inventory_insufficient`: Reduce the requested quantity, replenish inventory, or choose another pickup location. Values: `"eligibility_no_match"`, `"inventory_insufficient"`. |

