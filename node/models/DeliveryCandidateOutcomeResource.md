[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryCandidateOutcomeResource

The result of evaluating one delivery method for a choice group, selected by `type`: available with an option, unavailable, input required, cannot calculate, or requires checkout context.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address_advisories` | Optional | Array of [DeliveryAddressAdvisoryResource](../models/DeliveryAddressAdvisoryResource.md#deliveryaddressadvisoryresource) | Address verification results that affected this method. Omitted when there are none. |
| `expected_amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The delivery charge this method will quote once its input_requirements are met, when the charge does not depend on them. Only present on input_required outcomes with fixed pricing. Pickup candidates report it only when every pickup method that could serve the choice group has fixed pricing and the same amount. Omitted when unknown; never included in order amounts. Pickup-location previews do not carry this field. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `expected_amount_money`: [field definitions](../models/DeliveryCandidateOutcomeResource.md#deliverycandidateoutcomeresourceexpected_amount_money). |
| `failure_category` | Conditional | string | Why Flint could not calculate the method and the action that can make calculation succeed. - `dependency_failure`: Retry after the dependent service recovers. - `timeout`: Retry after the timed-out dependency recovers. - `malformed_response`: Fix the callback response so it matches the documented response schema, then retry. - `callback_transport_failure`: Restore callback DNS, TLS, network connectivity, and response timing, then retry. - `callback_circuit_open`: Restore the callback and wait for circuit recovery before retrying. - `callback_result_invalid`: Fix the callback result fields or values identified by the callback logs, then retry. - `callback_unavailable`: Retry when callback capacity is available, restore the configured callback endpoint, or choose a non-callback pricing strategy. - `pricing_failure`: Fix the method pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the method schedule, timezone, or requested window, then retry. - `option_lifetime_too_short`: Lower the method's minimum option lifetime below the quote's remaining lifetime. A quote for a cart with tracked inventory lasts just under 5 minutes. - `geography_failure`: Fix the destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix inventory routing or origin assignment, then retry. - `invalid_configuration`: Correct the invalid delivery configuration identified by diagnostics, then retry. - `invalid_buyer_input`: Correct the buyer input identified by the outcome, then retry. - `address_verification_failed`: Correct the address fields rejected by verification, then retry. - `address_could_not_be_verified`: Confirm or correct the address, or retry when address verification is available. Values: [16 declared values](#deliverycandidateoutcomeresource-failure_category-values). |
| `input_requirements` | Conditional | Array of [DeliveryInputRequirement](../models/DeliveryInputRequirement.md#deliveryinputrequirement) | Inputs the method needs before Flint can price it. Set only when `type` is `input_required`. |
| `option` | Conditional | [DeliveryOptionProjection](../models/DeliveryOptionProjection.md#deliveryoptionprojection) | The option the method produced. Set only when `type` is `available`. A delivery option in a quote or preview: its price, type, timing, delivery plan, execution legs, and shipment, pickup, or local delivery details. |
| `retryable` | Conditional | boolean | Whether trying again later can succeed. Set only when `type` is `cannot_calculate`. |
| `type` | Required | string | What happened when Flint evaluated this delivery method. Values: `"available"`, `"unavailable"`, `"input_required"`, `"cannot_calculate"`, `"requires_checkout_context"`. |
| `unavailable_reason` | Conditional | string | Why the method is unavailable and the action that can make it eligible. - `dependency_revoked`: The method revision or a dependency was revoked. Publish a corrected revision, rotate the callback signing secret, or choose another method. - `destination_not_served`: Use a destination covered by this method or choose another method. - `pickup_unavailable`: Choose an available pickup method or location. - `no_window_available`: Choose another offered window or a method with availability for the requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the relevant buyer facts or method eligibility rule. - `method_type_not_allowed`: Choose a method type allowed by every line item in the choice group. - `pricing_unavailable`: Add or activate a matching rate, or provide the required caller-supplied price. - `inventory_unavailable`: The origin or pickup location cannot supply the requested inventory. Reduce the quantity, replenish inventory, or choose another origin or method. Values: [8 declared values](#deliverycandidateoutcomeresource-unavailable_reason-values). |

#### DeliveryCandidateOutcomeResource failure_category values

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

#### DeliveryCandidateOutcomeResource unavailable_reason values

- `"dependency_revoked"`
- `"destination_not_served"`
- `"pickup_unavailable"`
- `"no_window_available"`
- `"eligibility_no_match"`
- `"method_type_not_allowed"`
- `"pricing_unavailable"`
- `"inventory_unavailable"`

### DeliveryCandidateOutcomeResource variant 1: `type` = `"available"`

oneOf with type: "available": The `available` variant of `DeliveryCandidateOutcomeResource`..

- Condition: not (present(`expected_amount_money`)).
- Required: `option`.
- Optional: `failure_category`, `input_requirements`, `retryable`, `unavailable_reason`.
- Constraints for `type`: Values: `"available"`.

### DeliveryCandidateOutcomeResource variant 2: `type` = `"unavailable"`

oneOf with type: "unavailable": The `unavailable` variant of `DeliveryCandidateOutcomeResource`..

- Condition: not (present(`expected_amount_money`)).
- Required: `unavailable_reason`.
- Optional: `failure_category`, `input_requirements`, `option`, `retryable`.
- Constraints for `type`: Values: `"unavailable"`.

### DeliveryCandidateOutcomeResource variant 3: `type` = `"input_required"`

oneOf with type: "input_required": The `input_required` variant of `DeliveryCandidateOutcomeResource`..

- Required: `input_requirements`.
- Optional: `failure_category`, `option`, `retryable`, `unavailable_reason`.
- Constraints for `type`: Values: `"input_required"`.

### DeliveryCandidateOutcomeResource variant 4: `type` = `"cannot_calculate"`

oneOf with type: "cannot_calculate": The `cannot_calculate` variant of `DeliveryCandidateOutcomeResource`..

- Condition: not (present(`expected_amount_money`)).
- Required: `failure_category`, `retryable`.
- Optional: `input_requirements`, `option`, `unavailable_reason`.
- Constraints for `type`: Values: `"cannot_calculate"`.

### DeliveryCandidateOutcomeResource variant 5: `type` = `"requires_checkout_context"`

oneOf with type: "requires_checkout_context": The `requires_checkout_context` variant of `DeliveryCandidateOutcomeResource`..

- Condition: not (present(`expected_amount_money`)).
- Optional: `failure_category`, `input_requirements`, `option`, `retryable`, `unavailable_reason`.
- Constraints for `type`: Values: `"requires_checkout_context"`.

### DeliveryCandidateOutcomeResource.expected_amount_money

The delivery charge this method will quote once its input_requirements are met, when the charge does not depend on them. Only present on input_required outcomes with fixed pricing. Pickup candidates report it only when every pickup method that could serve the choice group has fixed pricing and the same amount. Omitted when unknown; never included in order amounts. Pickup-location previews do not carry this field. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

