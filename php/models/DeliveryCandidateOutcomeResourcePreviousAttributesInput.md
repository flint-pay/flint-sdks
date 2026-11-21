[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryCandidateOutcomeResourcePreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address_advisories` | Optional | Array of [DeliveryAddressAdvisoryResourcePreviousAttributesInput](../models/DeliveryAddressAdvisoryResourcePreviousAttributesInput.md#deliveryaddressadvisoryresourcepreviousattributesinput) or null | Address verification results that affected this method. Omitted when there are none. `address_advisories`: [declared alternatives](../models/DeliveryCandidateOutcomeResourceAvailablePreviousAttributesInput.md#deliverycandidateoutcomeresourceavailablepreviousattributesinputaddress_advisories). |
| `expected_amount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The delivery charge this method will quote once its input_requirements are met, when the charge does not depend on them. Only present on input_required outcomes with fixed pricing. Pickup candidates report it only when every pickup method that could serve the choice group has fixed pricing and the same amount. Omitted when unknown; never included in order amounts. Pickup-location previews do not carry this field. |
| `failure_category` | Optional | string or null | Why Flint could not calculate the method and the action that can make calculation succeed. - `dependency_failure`: Retry after the dependent service recovers. - `timeout`: Retry after the timed-out dependency recovers. - `malformed_response`: Fix the callback response so it matches the documented response schema, then retry. - `callback_transport_failure`: Restore callback DNS, TLS, network connectivity, and response timing, then retry. - `callback_circuit_open`: Restore the callback and wait for circuit recovery before retrying. - `callback_result_invalid`: Fix the callback result fields or values identified by the callback logs, then retry. - `callback_unavailable`: Retry when callback capacity is available, restore the configured callback endpoint, or choose a non-callback pricing strategy. - `pricing_failure`: Fix the method pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the method schedule, timezone, or requested window, then retry. - `option_lifetime_too_short`: Lower the method's minimum option lifetime below the quote's remaining lifetime. A quote for a cart with tracked inventory lasts just under 5 minutes. - `geography_failure`: Fix the destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix inventory routing or origin assignment, then retry. - `invalid_configuration`: Correct the invalid delivery configuration identified by diagnostics, then retry. - `invalid_buyer_input`: Correct the buyer input identified by the outcome, then retry. - `address_verification_failed`: Correct the address fields rejected by verification, then retry. - `address_could_not_be_verified`: Confirm or correct the address, or retry when address verification is available. Values: [16 declared values](DeliveryCandidateOutcomeResourceInput.md#deliverycandidateoutcomeresourceinput-failure_category-values). `failure_category`: [declared alternatives](../models/DeliveryCandidateOutcomeResourceAvailablePreviousAttributesInput.md#deliverycandidateoutcomeresourceavailablepreviousattributesinputfailure_category). |
| `input_requirements` | Optional | Array of [DeliveryInputRequirementPreviousAttributesInput](../models/DeliveryInputRequirementPreviousAttributesInput.md#deliveryinputrequirementpreviousattributesinput) or null | Inputs the method needs before Flint can price it. Set only when `type` is `input_required`. `input_requirements`: [declared alternatives](../models/DeliveryCandidateOutcomeResourceAvailablePreviousAttributesInput.md#deliverycandidateoutcomeresourceavailablepreviousattributesinputinput_requirements). |
| `option` | Optional | [DeliveryOptionProjectionPreviousAttributesInput](../models/DeliveryOptionProjectionPreviousAttributesInput.md#deliveryoptionprojectionpreviousattributesinput) or null | The option the method produced. Set only when `type` is `available`. |
| `retryable` | Optional | boolean or null | Whether trying again later can succeed. Set only when `type` is `cannot_calculate`. `retryable`: [declared alternatives](../models/DeliveryCandidateOutcomeResourceAvailablePreviousAttributesInput.md#deliverycandidateoutcomeresourceavailablepreviousattributesinputretryable). |
| `type` | Optional | (string or null) | What happened when Flint evaluated this delivery method. Values: `"available"`, `"unavailable"`, `"input_required"`, `"cannot_calculate"`, `"requires_checkout_context"`. `type`: [declared alternatives](../models/DeliveryCandidateOutcomeResourcePreviousAttributesInput.md#deliverycandidateoutcomeresourcepreviousattributesinput-variant-1type), [declared alternatives](../models/DeliveryCandidateOutcomeResourcePreviousAttributesInput.md#deliverycandidateoutcomeresourcepreviousattributesinput-variant-2type), [declared alternatives](../models/DeliveryCandidateOutcomeResourcePreviousAttributesInput.md#deliverycandidateoutcomeresourcepreviousattributesinput-variant-3type), [declared alternatives](../models/DeliveryCandidateOutcomeResourcePreviousAttributesInput.md#deliverycandidateoutcomeresourcepreviousattributesinput-variant-4type), [declared alternatives](../models/DeliveryCandidateOutcomeResourcePreviousAttributesInput.md#deliverycandidateoutcomeresourcepreviousattributesinput-variant-5type). |
| `unavailable_reason` | Optional | string or null | Why the method is unavailable and the action that can make it eligible. - `automatic_tax_origin_unsupported`: Automatic tax requires a US fulfillment origin. Choose a method that uses a US location, or use external tax. - `dependency_revoked`: The method revision or a dependency was revoked. Publish a corrected revision, rotate the callback signing secret, or choose another method. - `destination_not_served`: Use a destination covered by this method or choose another method. - `pickup_unavailable`: Choose an available pickup method or location. - `no_window_available`: Choose another offered window or a method with availability for the requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the relevant buyer facts or method eligibility rule. - `method_type_not_allowed`: Choose a method type allowed by every line item in the choice group. - `pricing_unavailable`: Add or activate a matching rate, or provide the required caller-supplied price. - `inventory_unavailable`: The origin or pickup location cannot supply the requested inventory. Reduce the quantity, replenish inventory, or choose another origin or method. Values: [9 declared values](#deliverycandidateoutcomeresourcepreviousattributesinput-unavailable_reason-values). `unavailable_reason`: [declared alternatives](../models/DeliveryCandidateOutcomeResourceAvailablePreviousAttributesInput.md#deliverycandidateoutcomeresourceavailablepreviousattributesinputunavailable_reason). |

#### DeliveryCandidateOutcomeResourcePreviousAttributesInput unavailable_reason values

- `"automatic_tax_origin_unsupported"`
- `"dependency_revoked"`
- `"destination_not_served"`
- `"pickup_unavailable"`
- `"no_window_available"`
- `"eligibility_no_match"`
- `"method_type_not_allowed"`
- `"pricing_unavailable"`
- `"inventory_unavailable"`

### DeliveryCandidateOutcomeResourcePreviousAttributesInput variant 1: `type` = `"available"`

anyOf DeliveryCandidateOutcomeResourceAvailablePreviousAttributes.

- Constraints for `type`: Values: `"available"`.

### DeliveryCandidateOutcomeResourcePreviousAttributesInput variant 2: `type` = `"unavailable"`

anyOf DeliveryCandidateOutcomeResourceUnavailablePreviousAttributes.

- Constraints for `type`: Values: `"unavailable"`.

### DeliveryCandidateOutcomeResourcePreviousAttributesInput variant 3: `type` = `"input_required"`

anyOf DeliveryCandidateOutcomeResourceInputRequiredPreviousAttributes.

- Constraints for `type`: Values: `"input_required"`.

### DeliveryCandidateOutcomeResourcePreviousAttributesInput variant 4: `type` = `"cannot_calculate"`

anyOf DeliveryCandidateOutcomeResourceCannotCalculatePreviousAttributes.

- Constraints for `type`: Values: `"cannot_calculate"`.

### DeliveryCandidateOutcomeResourcePreviousAttributesInput variant 5: `type` = `"requires_checkout_context"`

anyOf DeliveryCandidateOutcomeResourceRequiresCheckoutContextPreviousAttributes.

- Constraints for `type`: Values: `"requires_checkout_context"`.

### DeliveryCandidateOutcomeResourcePreviousAttributesInput.address_advisories

Declared alternatives: [DeliveryCandidateOutcomeResourceAvailablePreviousAttributesInput.address_advisories](../models/DeliveryCandidateOutcomeResourceAvailablePreviousAttributesInput.md#deliverycandidateoutcomeresourceavailablepreviousattributesinputaddress_advisories).

### DeliveryCandidateOutcomeResourcePreviousAttributesInput.failure_category

Declared alternatives: [DeliveryCandidateOutcomeResourceAvailablePreviousAttributesInput.failure_category](../models/DeliveryCandidateOutcomeResourceAvailablePreviousAttributesInput.md#deliverycandidateoutcomeresourceavailablepreviousattributesinputfailure_category).

### DeliveryCandidateOutcomeResourcePreviousAttributesInput.input_requirements

Declared alternatives: [DeliveryCandidateOutcomeResourceAvailablePreviousAttributesInput.input_requirements](../models/DeliveryCandidateOutcomeResourceAvailablePreviousAttributesInput.md#deliverycandidateoutcomeresourceavailablepreviousattributesinputinput_requirements).

### DeliveryCandidateOutcomeResourcePreviousAttributesInput.retryable

Declared alternatives: [DeliveryCandidateOutcomeResourceAvailablePreviousAttributesInput.retryable](../models/DeliveryCandidateOutcomeResourceAvailablePreviousAttributesInput.md#deliverycandidateoutcomeresourceavailablepreviousattributesinputretryable).

### DeliveryCandidateOutcomeResourcePreviousAttributesInput variant 1.type

### DeliveryCandidateOutcomeResourcePreviousAttributesInput variant 1.type variant 1

anyOf group 1 variant 1: What happened when Flint evaluated this delivery method..

- Value shape: string. What happened when Flint evaluated this delivery method. Values: `"available"`, `"unavailable"`, `"input_required"`, `"cannot_calculate"`, `"requires_checkout_context"`.

### DeliveryCandidateOutcomeResourcePreviousAttributesInput variant 1.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. What happened when Flint evaluated this delivery method. 

### DeliveryCandidateOutcomeResourcePreviousAttributesInput variant 1.type variant 3

anyOf group 2 variant 1: What happened when Flint evaluated this delivery method..

- Value shape: string. What happened when Flint evaluated this delivery method. Values: `"available"`.

### DeliveryCandidateOutcomeResourcePreviousAttributesInput.unavailable_reason

Declared alternatives: [DeliveryCandidateOutcomeResourceAvailablePreviousAttributesInput.unavailable_reason](../models/DeliveryCandidateOutcomeResourceAvailablePreviousAttributesInput.md#deliverycandidateoutcomeresourceavailablepreviousattributesinputunavailable_reason).

### DeliveryCandidateOutcomeResourcePreviousAttributesInput variant 2.type

### DeliveryCandidateOutcomeResourcePreviousAttributesInput variant 2.type variant 1

anyOf group 1 variant 1: What happened when Flint evaluated this delivery method..

- Value shape: string. What happened when Flint evaluated this delivery method. Values: `"available"`, `"unavailable"`, `"input_required"`, `"cannot_calculate"`, `"requires_checkout_context"`.

### DeliveryCandidateOutcomeResourcePreviousAttributesInput variant 2.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. What happened when Flint evaluated this delivery method. 

### DeliveryCandidateOutcomeResourcePreviousAttributesInput variant 2.type variant 3

anyOf group 2 variant 1: What happened when Flint evaluated this delivery method..

- Value shape: string. What happened when Flint evaluated this delivery method. Values: `"unavailable"`.

### DeliveryCandidateOutcomeResourcePreviousAttributesInput variant 3.type

### DeliveryCandidateOutcomeResourcePreviousAttributesInput variant 3.type variant 1

anyOf group 1 variant 1: What happened when Flint evaluated this delivery method..

- Value shape: string. What happened when Flint evaluated this delivery method. Values: `"available"`, `"unavailable"`, `"input_required"`, `"cannot_calculate"`, `"requires_checkout_context"`.

### DeliveryCandidateOutcomeResourcePreviousAttributesInput variant 3.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. What happened when Flint evaluated this delivery method. 

### DeliveryCandidateOutcomeResourcePreviousAttributesInput variant 3.type variant 3

anyOf group 2 variant 1: What happened when Flint evaluated this delivery method..

- Value shape: string. What happened when Flint evaluated this delivery method. Values: `"input_required"`.

### DeliveryCandidateOutcomeResourcePreviousAttributesInput variant 4.type

### DeliveryCandidateOutcomeResourcePreviousAttributesInput variant 4.type variant 1

anyOf group 1 variant 1: What happened when Flint evaluated this delivery method..

- Value shape: string. What happened when Flint evaluated this delivery method. Values: `"available"`, `"unavailable"`, `"input_required"`, `"cannot_calculate"`, `"requires_checkout_context"`.

### DeliveryCandidateOutcomeResourcePreviousAttributesInput variant 4.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. What happened when Flint evaluated this delivery method. 

### DeliveryCandidateOutcomeResourcePreviousAttributesInput variant 4.type variant 3

anyOf group 2 variant 1: What happened when Flint evaluated this delivery method..

- Value shape: string. What happened when Flint evaluated this delivery method. Values: `"cannot_calculate"`.

### DeliveryCandidateOutcomeResourcePreviousAttributesInput variant 5.type

### DeliveryCandidateOutcomeResourcePreviousAttributesInput variant 5.type variant 1

anyOf group 1 variant 1: What happened when Flint evaluated this delivery method..

- Value shape: string. What happened when Flint evaluated this delivery method. Values: `"available"`, `"unavailable"`, `"input_required"`, `"cannot_calculate"`, `"requires_checkout_context"`.

### DeliveryCandidateOutcomeResourcePreviousAttributesInput variant 5.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. What happened when Flint evaluated this delivery method. 

### DeliveryCandidateOutcomeResourcePreviousAttributesInput variant 5.type variant 3

anyOf group 2 variant 1: What happened when Flint evaluated this delivery method..

- Value shape: string. What happened when Flint evaluated this delivery method. Values: `"requires_checkout_context"`.

