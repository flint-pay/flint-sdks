[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryCandidateOutcomeResourceInput

The result of evaluating one delivery method for a choice group, selected by `type`: available with an option, unavailable, input required, cannot calculate, or requires checkout context.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address_advisories` | Optional | Array of [DeliveryAddressAdvisoryResourceInput](../models/DeliveryAddressAdvisoryResourceInput.md#deliveryaddressadvisoryresourceinput) |  |
| `failure_category` | Conditional | string | Why Flint could not calculate the method and the action that can make calculation succeed. - `dependency_failure`: Retry after the dependent service recovers. - `timeout`: Retry after the timed-out dependency recovers. - `malformed_response`: Fix the callback response so it matches the documented response schema, then retry. - `callback_transport_failure`: Restore callback DNS, TLS, network connectivity, and response timing, then retry. - `callback_circuit_open`: Restore the callback and wait for circuit recovery before retrying. - `callback_result_invalid`: Fix the callback result fields or values identified by the callback logs, then retry. - `callback_unavailable`: Retry when callback capacity is available, restore the configured callback endpoint, or choose a non-callback pricing strategy. - `pricing_failure`: Fix the method pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the method schedule, timezone, or requested window, then retry. - `option_lifetime_too_short`: Lower the method's minimum option lifetime below the quote's remaining lifetime. A quote for a cart with tracked inventory lasts just under 5 minutes. - `geography_failure`: Fix the destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix inventory routing or origin assignment, then retry. - `invalid_configuration`: Correct the invalid delivery configuration identified by diagnostics, then retry. - `invalid_buyer_input`: Correct the buyer input identified by the outcome, then retry. - `address_verification_failed`: Correct the address fields rejected by verification, then retry. - `address_could_not_be_verified`: Confirm or correct the address, or retry when address verification is available. Values: [16 declared values](#deliverycandidateoutcomeresourceinput-failure_category-values). |
| `input_requirements` | Conditional | Array of [DeliveryInputRequirementInput](../models/DeliveryInputRequirementInput.md#deliveryinputrequirementinput) |  |
| `option` | Conditional | [DeliveryOptionProjectionInput](../models/DeliveryOptionProjectionInput.md#deliveryoptionprojectioninput) | A delivery option in a quote or preview: its price, type, timing, delivery plan, execution legs, and shipment, pickup, or local delivery details. |
| `retryable` | Conditional | boolean |  |
| `type` | Required | string | Values: `"available"`, `"unavailable"`, `"input_required"`, `"cannot_calculate"`, `"requires_checkout_context"`. |
| `unavailable_reason` | Conditional | string | Why the method is unavailable and the action that can make it eligible. - `destination_not_served`: Use a destination covered by this method or choose another method. - `pickup_unavailable`: Choose an available pickup method or location. - `no_window_available`: Choose another offered window or a method with availability for the requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the relevant buyer facts or method eligibility rule. - `method_type_not_allowed`: Choose a method type allowed by every line item in the choice group. - `pricing_unavailable`: Add or activate a matching rate, or provide the required caller-supplied price. - `inventory_unavailable`: Choose an origin or method backed by available inventory. Values: [7 declared values](#deliverycandidateoutcomeresourceinput-unavailable_reason-values). |

#### DeliveryCandidateOutcomeResourceInput failure_category values

- `"dependency_failure"`
- `"timeout"`
- `"malformed_response"`
- `"callback_transport_failure"`
- `"callback_circuit_open"`
- `"callback_result_invalid"`
- `"callback_unavailable"`
- `"pricing_failure"`
- `"schedule_failure"`
- `"option_lifetime_too_short"`
- `"geography_failure"`
- `"routing_failure"`
- `"invalid_configuration"`
- `"invalid_buyer_input"`
- `"address_verification_failed"`
- `"address_could_not_be_verified"`

#### DeliveryCandidateOutcomeResourceInput unavailable_reason values

- `"destination_not_served"`
- `"pickup_unavailable"`
- `"no_window_available"`
- `"eligibility_no_match"`
- `"method_type_not_allowed"`
- `"pricing_unavailable"`
- `"inventory_unavailable"`

### DeliveryCandidateOutcomeResourceInput variant 1: `type` = `"available"`

oneOf variant 1: The `available` variant of `DeliveryCandidateOutcomeResource`..

- Required: `option`.
- Optional: `failure_category`, `input_requirements`, `retryable`, `unavailable_reason`.
- Constraints for `type`: Values: `"available"`.

### DeliveryCandidateOutcomeResourceInput variant 2: `type` = `"unavailable"`

oneOf variant 2: The `unavailable` variant of `DeliveryCandidateOutcomeResource`..

- Required: `unavailable_reason`.
- Optional: `failure_category`, `input_requirements`, `option`, `retryable`.
- Constraints for `type`: Values: `"unavailable"`.

### DeliveryCandidateOutcomeResourceInput variant 3: `type` = `"input_required"`

oneOf variant 3: The `input_required` variant of `DeliveryCandidateOutcomeResource`..

- Required: `input_requirements`.
- Optional: `failure_category`, `option`, `retryable`, `unavailable_reason`.
- Constraints for `type`: Values: `"input_required"`.

### DeliveryCandidateOutcomeResourceInput variant 4: `type` = `"cannot_calculate"`

oneOf variant 4: The `cannot_calculate` variant of `DeliveryCandidateOutcomeResource`..

- Required: `failure_category`, `retryable`.
- Optional: `input_requirements`, `option`, `unavailable_reason`.
- Constraints for `type`: Values: `"cannot_calculate"`.

### DeliveryCandidateOutcomeResourceInput variant 5: `type` = `"requires_checkout_context"`

oneOf variant 5: The `requires_checkout_context` variant of `DeliveryCandidateOutcomeResource`..

- Optional: `failure_category`, `input_requirements`, `option`, `retryable`, `unavailable_reason`.
- Constraints for `type`: Values: `"requires_checkout_context"`.

