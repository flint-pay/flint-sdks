[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryCandidateOutcomeResourceAvailablePreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address_advisories` | Optional | Array of [DeliveryAddressAdvisoryResourcePreviousAttributes](../models/DeliveryAddressAdvisoryResourcePreviousAttributes.md#deliveryaddressadvisoryresourcepreviousattributes) or null | Address verification results that affected this method. Omitted when there are none. `address_advisories`: [declared alternatives](../models/DeliveryCandidateOutcomeResourceAvailablePreviousAttributes.md#deliverycandidateoutcomeresourceavailablepreviousattributesaddress_advisories). |
| `expected_amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The delivery charge this method will quote once its input_requirements are met, when the charge does not depend on them. Only present on input_required outcomes with fixed pricing. Pickup candidates report it only when every pickup method that could serve the choice group has fixed pricing and the same amount. Omitted when unknown; never included in order amounts. Pickup-location previews do not carry this field. `expected_amount_money`: [declared alternatives](../models/DeliveryCandidateOutcomeResourceAvailablePreviousAttributes.md#deliverycandidateoutcomeresourceavailablepreviousattributesexpected_amount_money). |
| `failure_category` | Optional | string or null | Why Flint could not calculate the method and the action that can make calculation succeed. - `dependency_failure`: Retry after the dependent service recovers. - `timeout`: Retry after the timed-out dependency recovers. - `malformed_response`: Fix the callback response so it matches the documented response schema, then retry. - `callback_transport_failure`: Restore callback DNS, TLS, network connectivity, and response timing, then retry. - `callback_circuit_open`: Restore the callback and wait for circuit recovery before retrying. - `callback_result_invalid`: Fix the callback result fields or values identified by the callback logs, then retry. - `callback_unavailable`: Retry when callback capacity is available, restore the configured callback endpoint, or choose a non-callback pricing strategy. - `pricing_failure`: Fix the method pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the method schedule, timezone, or requested window, then retry. - `option_lifetime_too_short`: Lower the method's minimum option lifetime below the quote's remaining lifetime. A quote for a cart with tracked inventory lasts just under 5 minutes. - `geography_failure`: Fix the destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix inventory routing or origin assignment, then retry. - `invalid_configuration`: Correct the invalid delivery configuration identified by diagnostics, then retry. - `invalid_buyer_input`: Correct the buyer input identified by the outcome, then retry. - `address_verification_failed`: Correct the address fields rejected by verification, then retry. - `address_could_not_be_verified`: Confirm or correct the address, or retry when address verification is available. Values: [16 declared values](DeliveryCandidateOutcomeResource.md#deliverycandidateoutcomeresource-failure_category-values). `failure_category`: [declared alternatives](../models/DeliveryCandidateOutcomeResourceAvailablePreviousAttributes.md#deliverycandidateoutcomeresourceavailablepreviousattributesfailure_category). |
| `input_requirements` | Optional | Array of [DeliveryInputRequirementPreviousAttributes](../models/DeliveryInputRequirementPreviousAttributes.md#deliveryinputrequirementpreviousattributes) or null | Inputs the method needs before Flint can price it. Set only when `type` is `input_required`. `input_requirements`: [declared alternatives](../models/DeliveryCandidateOutcomeResourceAvailablePreviousAttributes.md#deliverycandidateoutcomeresourceavailablepreviousattributesinput_requirements). |
| `option` | Optional | [DeliveryOptionProjectionPreviousAttributes](../models/DeliveryOptionProjectionPreviousAttributes.md#deliveryoptionprojectionpreviousattributes) or null | The option the method produced. Set only when `type` is `available`. |
| `retryable` | Optional | boolean or null | Whether trying again later can succeed. Set only when `type` is `cannot_calculate`. `retryable`: [declared alternatives](../models/DeliveryCandidateOutcomeResourceAvailablePreviousAttributes.md#deliverycandidateoutcomeresourceavailablepreviousattributesretryable). |
| `type` | Optional | string or null | What happened when Flint evaluated this delivery method. Values: `"available"`. `type`: [declared alternatives](../models/DeliveryCandidateOutcomeResourceAvailablePreviousAttributes.md#deliverycandidateoutcomeresourceavailablepreviousattributestype). |
| `unavailable_reason` | Optional | string or null | Why the method is unavailable and the action that can make it eligible. - `dependency_revoked`: The method revision or a dependency was revoked. Publish a corrected revision, rotate the callback signing secret, or choose another method. - `destination_not_served`: Use a destination covered by this method or choose another method. - `pickup_unavailable`: Choose an available pickup method or location. - `no_window_available`: Choose another offered window or a method with availability for the requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the relevant buyer facts or method eligibility rule. - `method_type_not_allowed`: Choose a method type allowed by every line item in the choice group. - `pricing_unavailable`: Add or activate a matching rate, or provide the required caller-supplied price. - `inventory_unavailable`: The origin or pickup location cannot supply the requested inventory. Reduce the quantity, replenish inventory, or choose another origin or method. Values: [8 declared values](#deliverycandidateoutcomeresourceavailablepreviousattributes-unavailable_reason-values). `unavailable_reason`: [declared alternatives](../models/DeliveryCandidateOutcomeResourceAvailablePreviousAttributes.md#deliverycandidateoutcomeresourceavailablepreviousattributesunavailable_reason). |

#### DeliveryCandidateOutcomeResourceAvailablePreviousAttributes unavailable_reason values

- `"dependency_revoked"`
- `"destination_not_served"`
- `"pickup_unavailable"`
- `"no_window_available"`
- `"eligibility_no_match"`
- `"method_type_not_allowed"`
- `"pricing_unavailable"`
- `"inventory_unavailable"`

### DeliveryCandidateOutcomeResourceAvailablePreviousAttributes.address_advisories

### DeliveryCandidateOutcomeResourceAvailablePreviousAttributes.address_advisories variant 1

anyOf variant 1: Address verification results that affected this method. Omitted when there are none..

- Value shape: Array of [DeliveryAddressAdvisoryResourcePreviousAttributes](../models/DeliveryAddressAdvisoryResourcePreviousAttributes.md#deliveryaddressadvisoryresourcepreviousattributes). Address verification results that affected this method. Omitted when there are none. 

### DeliveryCandidateOutcomeResourceAvailablePreviousAttributes.address_advisories variant 2

anyOf variant 2.

- Value shape: null. Address verification results that affected this method. Omitted when there are none. 

### DeliveryCandidateOutcomeResourceAvailablePreviousAttributes.expected_amount_money

The delivery charge this method will quote once its input_requirements are met, when the charge does not depend on them. Only present on input_required outcomes with fixed pricing. Pickup candidates report it only when every pickup method that could serve the choice group has fixed pricing and the same amount. Omitted when unknown; never included in order amounts. Pickup-location previews do not carry this field.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### DeliveryCandidateOutcomeResourceAvailablePreviousAttributes.expected_amount_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### DeliveryCandidateOutcomeResourceAvailablePreviousAttributes.expected_amount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The delivery charge this method will quote once its input_requirements are met, when the charge does not depend on them. Only present on input_required outcomes with fixed pricing. Pickup candidates report it only when every pickup method that could serve the choice group has fixed pricing and the same amount. Omitted when unknown; never included in order amounts. Pickup-location previews do not carry this field. 

### DeliveryCandidateOutcomeResourceAvailablePreviousAttributes.expected_amount_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### DeliveryCandidateOutcomeResourceAvailablePreviousAttributes.expected_amount_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### DeliveryCandidateOutcomeResourceAvailablePreviousAttributes.failure_category

### DeliveryCandidateOutcomeResourceAvailablePreviousAttributes.failure_category variant 1

anyOf variant 1: Why Flint could not calculate the method and the action that can make calculation succeed.
- `dependency_failure`: Retry after the dependent service recovers.
- `timeout`: Retry after the timed-out dependency recovers.
- `malformed_response`: Fix the callback response so it matches the documented response schema, then retry.
- `callback_transport_failure`: Restore callback DNS, TLS, network connectivity, and response timing, then retry.
- `callback_circuit_open`: Restore the callback and wait for circuit recovery before retrying.
- `callback_result_invalid`: Fix the callback result fields or values identified by the callback logs, then retry.
- `callback_unavailable`: Retry when callback capacity is available, restore the configured callback endpoint, or choose a non-callback pricing strategy.
- `pricing_failure`: Fix the method pricing configuration or matching rate, then retry.
- `schedule_failure`: Fix the method schedule, timezone, or requested window, then retry.
- `option_lifetime_too_short`: Lower the method's minimum option lifetime below the quote's remaining lifetime. A quote for a cart with tracked inventory lasts just under 5 minutes.
- `geography_failure`: Fix the destination, origin, or geographic configuration, then retry.
- `routing_failure`: Fix inventory routing or origin assignment, then retry.
- `invalid_configuration`: Correct the invalid delivery configuration identified by diagnostics, then retry.
- `invalid_buyer_input`: Correct the buyer input identified by the outcome, then retry.
- `address_verification_failed`: Correct the address fields rejected by verification, then retry.
- `address_could_not_be_verified`: Confirm or correct the address, or retry when address verification is available..

- Value shape: string. Why Flint could not calculate the method and the action that can make calculation succeed. - `dependency_failure`: Retry after the dependent service recovers. - `timeout`: Retry after the timed-out dependency recovers. - `malformed_response`: Fix the callback response so it matches the documented response schema, then retry. - `callback_transport_failure`: Restore callback DNS, TLS, network connectivity, and response timing, then retry. - `callback_circuit_open`: Restore the callback and wait for circuit recovery before retrying. - `callback_result_invalid`: Fix the callback result fields or values identified by the callback logs, then retry. - `callback_unavailable`: Retry when callback capacity is available, restore the configured callback endpoint, or choose a non-callback pricing strategy. - `pricing_failure`: Fix the method pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the method schedule, timezone, or requested window, then retry. - `option_lifetime_too_short`: Lower the method's minimum option lifetime below the quote's remaining lifetime. A quote for a cart with tracked inventory lasts just under 5 minutes. - `geography_failure`: Fix the destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix inventory routing or origin assignment, then retry. - `invalid_configuration`: Correct the invalid delivery configuration identified by diagnostics, then retry. - `invalid_buyer_input`: Correct the buyer input identified by the outcome, then retry. - `address_verification_failed`: Correct the address fields rejected by verification, then retry. - `address_could_not_be_verified`: Confirm or correct the address, or retry when address verification is available. Values: `"dependency_failure"`, `"timeout"`, `"malformed_response"`, `"callback_transport_failure"`, `"callback_circuit_open"`, `"callback_result_invalid"`, `"callback_unavailable"`, `"pricing_failure"`, `"schedule_failure"`, `"option_lifetime_too_short"`, `"geography_failure"`, `"routing_failure"`, `"invalid_configuration"`, `"invalid_buyer_input"`, `"address_verification_failed"`, `"address_could_not_be_verified"`.

### DeliveryCandidateOutcomeResourceAvailablePreviousAttributes.failure_category variant 2

anyOf variant 2.

- Value shape: null. Why Flint could not calculate the method and the action that can make calculation succeed. - `dependency_failure`: Retry after the dependent service recovers. - `timeout`: Retry after the timed-out dependency recovers. - `malformed_response`: Fix the callback response so it matches the documented response schema, then retry. - `callback_transport_failure`: Restore callback DNS, TLS, network connectivity, and response timing, then retry. - `callback_circuit_open`: Restore the callback and wait for circuit recovery before retrying. - `callback_result_invalid`: Fix the callback result fields or values identified by the callback logs, then retry. - `callback_unavailable`: Retry when callback capacity is available, restore the configured callback endpoint, or choose a non-callback pricing strategy. - `pricing_failure`: Fix the method pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the method schedule, timezone, or requested window, then retry. - `option_lifetime_too_short`: Lower the method's minimum option lifetime below the quote's remaining lifetime. A quote for a cart with tracked inventory lasts just under 5 minutes. - `geography_failure`: Fix the destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix inventory routing or origin assignment, then retry. - `invalid_configuration`: Correct the invalid delivery configuration identified by diagnostics, then retry. - `invalid_buyer_input`: Correct the buyer input identified by the outcome, then retry. - `address_verification_failed`: Correct the address fields rejected by verification, then retry. - `address_could_not_be_verified`: Confirm or correct the address, or retry when address verification is available. 

### DeliveryCandidateOutcomeResourceAvailablePreviousAttributes.input_requirements

### DeliveryCandidateOutcomeResourceAvailablePreviousAttributes.input_requirements variant 1

anyOf variant 1: Inputs the method needs before Flint can price it. Set only when `type` is `input_required`..

- Value shape: Array of [DeliveryInputRequirementPreviousAttributes](../models/DeliveryInputRequirementPreviousAttributes.md#deliveryinputrequirementpreviousattributes). Inputs the method needs before Flint can price it. Set only when `type` is `input_required`. 

### DeliveryCandidateOutcomeResourceAvailablePreviousAttributes.input_requirements variant 2

anyOf variant 2.

- Value shape: null. Inputs the method needs before Flint can price it. Set only when `type` is `input_required`. 

### DeliveryCandidateOutcomeResourceAvailablePreviousAttributes.retryable

### DeliveryCandidateOutcomeResourceAvailablePreviousAttributes.retryable variant 1

anyOf variant 1: Whether trying again later can succeed. Set only when `type` is `cannot_calculate`..

- Value shape: boolean. Whether trying again later can succeed. Set only when `type` is `cannot_calculate`. 

### DeliveryCandidateOutcomeResourceAvailablePreviousAttributes.retryable variant 2

anyOf variant 2.

- Value shape: null. Whether trying again later can succeed. Set only when `type` is `cannot_calculate`. 

### DeliveryCandidateOutcomeResourceAvailablePreviousAttributes.type

### DeliveryCandidateOutcomeResourceAvailablePreviousAttributes.type variant 1

anyOf variant 1: What happened when Flint evaluated this delivery method..

- Value shape: string. What happened when Flint evaluated this delivery method. Values: `"available"`.

### DeliveryCandidateOutcomeResourceAvailablePreviousAttributes.type variant 2

anyOf variant 2.

- Value shape: null. What happened when Flint evaluated this delivery method. 

### DeliveryCandidateOutcomeResourceAvailablePreviousAttributes.unavailable_reason

### DeliveryCandidateOutcomeResourceAvailablePreviousAttributes.unavailable_reason variant 1

anyOf variant 1: Why the method is unavailable and the action that can make it eligible.
- `dependency_revoked`: The method revision or a dependency was revoked. Publish a corrected revision, rotate the callback signing secret, or choose another method.
- `destination_not_served`: Use a destination covered by this method or choose another method.
- `pickup_unavailable`: Choose an available pickup method or location.
- `no_window_available`: Choose another offered window or a method with availability for the requested time.
- `eligibility_no_match`: Inspect eligibility_mismatches, then change the relevant buyer facts or method eligibility rule.
- `method_type_not_allowed`: Choose a method type allowed by every line item in the choice group.
- `pricing_unavailable`: Add or activate a matching rate, or provide the required caller-supplied price.
- `inventory_unavailable`: The origin or pickup location cannot supply the requested inventory. Reduce the quantity, replenish inventory, or choose another origin or method..

- Value shape: string. Why the method is unavailable and the action that can make it eligible. - `dependency_revoked`: The method revision or a dependency was revoked. Publish a corrected revision, rotate the callback signing secret, or choose another method. - `destination_not_served`: Use a destination covered by this method or choose another method. - `pickup_unavailable`: Choose an available pickup method or location. - `no_window_available`: Choose another offered window or a method with availability for the requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the relevant buyer facts or method eligibility rule. - `method_type_not_allowed`: Choose a method type allowed by every line item in the choice group. - `pricing_unavailable`: Add or activate a matching rate, or provide the required caller-supplied price. - `inventory_unavailable`: The origin or pickup location cannot supply the requested inventory. Reduce the quantity, replenish inventory, or choose another origin or method. Values: `"dependency_revoked"`, `"destination_not_served"`, `"pickup_unavailable"`, `"no_window_available"`, `"eligibility_no_match"`, `"method_type_not_allowed"`, `"pricing_unavailable"`, `"inventory_unavailable"`.

### DeliveryCandidateOutcomeResourceAvailablePreviousAttributes.unavailable_reason variant 2

anyOf variant 2.

- Value shape: null. Why the method is unavailable and the action that can make it eligible. - `dependency_revoked`: The method revision or a dependency was revoked. Publish a corrected revision, rotate the callback signing secret, or choose another method. - `destination_not_served`: Use a destination covered by this method or choose another method. - `pickup_unavailable`: Choose an available pickup method or location. - `no_window_available`: Choose another offered window or a method with availability for the requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the relevant buyer facts or method eligibility rule. - `method_type_not_allowed`: Choose a method type allowed by every line item in the choice group. - `pricing_unavailable`: Add or activate a matching rate, or provide the required caller-supplied price. - `inventory_unavailable`: The origin or pickup location cannot supply the requested inventory. Reduce the quantity, replenish inventory, or choose another origin or method. 

