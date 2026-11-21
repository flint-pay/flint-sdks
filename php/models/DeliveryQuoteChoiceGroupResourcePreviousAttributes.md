[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryQuoteChoiceGroupResourcePreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address_advisories` | Optional | Array of [DeliveryAddressAdvisoryResourcePreviousAttributes](../models/DeliveryAddressAdvisoryResourcePreviousAttributes.md#deliveryaddressadvisoryresourcepreviousattributes) or null | Buyer-actionable address verification results that affected this choice group. A suggested_address is an explicit correction the buyer may confirm; Flint does not apply it silently. `address_advisories`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributesaddress_advisories). |
| `allowed_types` | Optional | Array of string or null | Delivery types permitted by this group's items. `allowed_types`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributesallowed_types). |
| `availability_status` | Optional | string or null | Whether this group has a delivery option the buyer can choose. Values: `"ready"`, `"needs_input"`, `"unavailable"`. `availability_status`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributesavailability_status). |
| `candidate_outcomes` | Optional | Map of (object and Alternative shapes (see declared variants)) or null | Evaluation result for each candidate delivery method, keyed by its method ID. `candidate_outcomes`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributescandidate_outcomes). |
| `delivery_choice_group_id` | Optional | string or null | Identifier used to choose one option for this group. `delivery_choice_group_id`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributesdelivery_choice_group_id). |
| `evaluation_status` | Optional | string or null | How completely Flint evaluated the group's candidate delivery methods. Values: `"complete"`, `"incomplete"`, `"degraded"`. `evaluation_status`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributesevaluation_status). |
| `execution_legs` | Optional | Array of [DeliveryQuoteExecutionLegResourcePreviousAttributes](../models/DeliveryQuoteExecutionLegResourcePreviousAttributes.md#deliveryquoteexecutionlegresourcepreviousattributes) or null | Where the group's items leave from, one leg per origin Location, when all of its methods leave from the same Locations. Omitted when the origin depends on the chosen method, such as shipping from a warehouse or picking up at a store. Each option then lists its own execution_legs. `execution_legs`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributesexecution_legs). |
| `input_requirements` | Optional | Array of [DeliveryInputRequirementPreviousAttributes](../models/DeliveryInputRequirementPreviousAttributes.md#deliveryinputrequirementpreviousattributes) or null | Inputs this group's delivery methods need before they can be priced or selected. `input_requirements`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributesinput_requirements). |
| `line_items` | Optional | Array of [DeliveryQuoteLineItemResourcePreviousAttributes](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributes) or null | Order line items, or bundle components, this group covers, with the quantity covered. `line_items`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributesline_items). |
| `method_types` | Optional | Array of string or null | Types of the delivery methods that can serve this group's items, each listed once, in the order the methods display. A type is listed before its options are priced, such as a local delivery that waits for the buyer's address, and stays listed while its methods need more input or cannot serve the current input. options lists what the buyer can choose now. A method whose type these items do not allow is left out, and the list is empty when no method can serve them. Items values: `"shipment"`, `"pickup"`, `"local_delivery"`. `method_types`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributesmethod_types). |
| `options` | Optional | Array of [DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitem) or null | Delivery options the buyer can choose now. `options`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributesoptions). |
| `pickup_unavailable` | Optional | boolean or null | The requested pickup Location or the order's fixed inventory Location cannot be served by this group's pickup methods. `pickup_unavailable`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributespickup_unavailable). |
| `previously_selected_delivery_method_id` | Optional | string or null | Method chosen for this group in the previous selection. Omitted when there is none. `previously_selected_delivery_method_id`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributespreviously_selected_delivery_method_id). |
| `stable_key` | Optional | string or null | Identifies the same group across quotes for the same delivery demands and compatible delivery types. It can change when the grouping inputs change. `stable_key`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributesstable_key). |

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.address_advisories

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.address_advisories variant 1

anyOf variant 1: Buyer-actionable address verification results that affected this choice group. A suggested_address is an explicit correction the buyer may confirm; Flint does not apply it silently..

- Value shape: Array of [DeliveryAddressAdvisoryResourcePreviousAttributes](../models/DeliveryAddressAdvisoryResourcePreviousAttributes.md#deliveryaddressadvisoryresourcepreviousattributes). Buyer-actionable address verification results that affected this choice group. A suggested_address is an explicit correction the buyer may confirm; Flint does not apply it silently. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.address_advisories variant 2

anyOf variant 2.

- Value shape: null. Buyer-actionable address verification results that affected this choice group. A suggested_address is an explicit correction the buyer may confirm; Flint does not apply it silently. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.allowed_types

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.allowed_types variant 1

anyOf variant 1: Delivery types permitted by this group's items..

- Value shape: Array of string. Delivery types permitted by this group's items. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.allowed_types variant 2

anyOf variant 2.

- Value shape: null. Delivery types permitted by this group's items. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.availability_status

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.availability_status variant 1

anyOf variant 1: Whether this group has a delivery option the buyer can choose..

- Value shape: string. Whether this group has a delivery option the buyer can choose. Values: `"ready"`, `"needs_input"`, `"unavailable"`.

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.availability_status variant 2

anyOf variant 2.

- Value shape: null. Whether this group has a delivery option the buyer can choose. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1

anyOf variant 1.

- Value shape: Map of (object and Alternative shapes (see declared variants) and object and Alternative shapes (see declared variants)). Evaluation result for each candidate delivery method, keyed by its method ID. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 2

anyOf variant 2.

- Value shape: null. Evaluation result for each candidate delivery method, keyed by its method ID. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address_advisories` | Optional | Array of [DeliveryAddressAdvisoryResourcePreviousAttributes](../models/DeliveryAddressAdvisoryResourcePreviousAttributes.md#deliveryaddressadvisoryresourcepreviousattributes) or null | Address verification results that affected this method. Omitted when there are none. `address_advisories`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributescandidate_outcomes-variant-1-fields-1address_advisories). |
| `expected_amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The delivery charge this method will quote once its input_requirements are met, when the charge does not depend on them. Only present on input_required outcomes with fixed pricing. Pickup candidates report it only when every pickup method that could serve the choice group has fixed pricing and the same amount. Omitted when unknown; never included in order amounts. Pickup-location previews do not carry this field. |
| `failure_category` | Optional | string or null | Why Flint could not calculate the method and the action that can make calculation succeed. - `dependency_failure`: Retry after the dependent service recovers. - `timeout`: Retry after the timed-out dependency recovers. - `malformed_response`: Fix the callback response so it matches the documented response schema, then retry. - `callback_transport_failure`: Restore callback DNS, TLS, network connectivity, and response timing, then retry. - `callback_circuit_open`: Restore the callback and wait for circuit recovery before retrying. - `callback_result_invalid`: Fix the callback result fields or values identified by the callback logs, then retry. - `callback_unavailable`: Retry when callback capacity is available, restore the configured callback endpoint, or choose a non-callback pricing strategy. - `pricing_failure`: Fix the method pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the method schedule, timezone, or requested window, then retry. - `option_lifetime_too_short`: Lower the method's minimum option lifetime below the quote's remaining lifetime. A quote for a cart with tracked inventory lasts just under 5 minutes. - `geography_failure`: Fix the destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix inventory routing or origin assignment, then retry. - `invalid_configuration`: Correct the invalid delivery configuration identified by diagnostics, then retry. - `invalid_buyer_input`: Correct the buyer input identified by the outcome, then retry. - `address_verification_failed`: Correct the address fields rejected by verification, then retry. - `address_could_not_be_verified`: Confirm or correct the address, or retry when address verification is available. Values: [16 declared values](DeliveryCandidateOutcomeResourceInput.md#deliverycandidateoutcomeresourceinput-failure_category-values). `failure_category`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributescandidate_outcomes-variant-1-fields-1failure_category). |
| `input_requirements` | Optional | Array of [DeliveryInputRequirementPreviousAttributes](../models/DeliveryInputRequirementPreviousAttributes.md#deliveryinputrequirementpreviousattributes) or null | Inputs the method needs before Flint can price it. Set only when `type` is `input_required`. `input_requirements`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributescandidate_outcomes-variant-1-fields-1input_requirements). |
| `option` | Optional | Alternative shapes (see declared variants) | The option the method produced. Set only when `type` is `available`. `option`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributescandidate_outcomes-variant-1-fields-1option). |
| `retryable` | Optional | boolean or null | Whether trying again later can succeed. Set only when `type` is `cannot_calculate`. `retryable`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributescandidate_outcomes-variant-1-fields-1retryable). |
| `type` | Optional | (string or null) | What happened when Flint evaluated this delivery method. Values: `"available"`, `"unavailable"`, `"input_required"`, `"cannot_calculate"`, `"requires_checkout_context"`. `type`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributescandidate_outcomes-variant-1-fields-1-variant-1type), [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributescandidate_outcomes-variant-1-fields-1-variant-2type), [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributescandidate_outcomes-variant-1-fields-1-variant-3type), [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributescandidate_outcomes-variant-1-fields-1-variant-4type), [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributescandidate_outcomes-variant-1-fields-1-variant-5type). |
| `unavailable_reason` | Optional | string or null | Why the method is unavailable and the action that can make it eligible. - `automatic_tax_origin_unsupported`: Automatic tax requires a US fulfillment origin. Choose a method that uses a US location, or use external tax. - `dependency_revoked`: The method revision or a dependency was revoked. Publish a corrected revision, rotate the callback signing secret, or choose another method. - `destination_not_served`: Use a destination covered by this method or choose another method. - `pickup_unavailable`: Choose an available pickup method or location. - `no_window_available`: Choose another offered window or a method with availability for the requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the relevant buyer facts or method eligibility rule. - `method_type_not_allowed`: Choose a method type allowed by every line item in the choice group. - `pricing_unavailable`: Add or activate a matching rate, or provide the required caller-supplied price. - `inventory_unavailable`: The origin or pickup location cannot supply the requested inventory. Reduce the quantity, replenish inventory, or choose another origin or method. Values: [9 declared values](#deliveryquotechoicegroupresourcepreviousattributescandidate_outcomes-variant-1-fields-1-unavailable_reason-values). `unavailable_reason`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributescandidate_outcomes-variant-1-fields-1unavailable_reason). |

#### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1 unavailable_reason values

- `"automatic_tax_origin_unsupported"`
- `"dependency_revoked"`
- `"destination_not_served"`
- `"pickup_unavailable"`
- `"no_window_available"`
- `"eligibility_no_match"`
- `"method_type_not_allowed"`
- `"pricing_unavailable"`
- `"inventory_unavailable"`

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1 variant 1: `type` = `"available"`

anyOf DeliveryCandidateOutcomeResourceAvailablePreviousAttributes.

- Constraints for `type`: Values: `"available"`.

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1 variant 2: `type` = `"unavailable"`

anyOf DeliveryCandidateOutcomeResourceUnavailablePreviousAttributes.

- Constraints for `type`: Values: `"unavailable"`.

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1 variant 3: `type` = `"input_required"`

anyOf DeliveryCandidateOutcomeResourceInputRequiredPreviousAttributes.

- Constraints for `type`: Values: `"input_required"`.

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1 variant 4: `type` = `"cannot_calculate"`

anyOf DeliveryCandidateOutcomeResourceCannotCalculatePreviousAttributes.

- Constraints for `type`: Values: `"cannot_calculate"`.

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1 variant 5: `type` = `"requires_checkout_context"`

anyOf DeliveryCandidateOutcomeResourceRequiresCheckoutContextPreviousAttributes.

- Constraints for `type`: Values: `"requires_checkout_context"`.

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.address_advisories

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.address_advisories variant 1

anyOf variant 1: Address verification results that affected this method. Omitted when there are none..

- Value shape: Array of [DeliveryAddressAdvisoryResourcePreviousAttributes](../models/DeliveryAddressAdvisoryResourcePreviousAttributes.md#deliveryaddressadvisoryresourcepreviousattributes). Address verification results that affected this method. Omitted when there are none. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.address_advisories variant 2

anyOf variant 2.

- Value shape: null. Address verification results that affected this method. Omitted when there are none. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.failure_category

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.failure_category variant 1

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

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.failure_category variant 2

anyOf variant 2.

- Value shape: null. Why Flint could not calculate the method and the action that can make calculation succeed. - `dependency_failure`: Retry after the dependent service recovers. - `timeout`: Retry after the timed-out dependency recovers. - `malformed_response`: Fix the callback response so it matches the documented response schema, then retry. - `callback_transport_failure`: Restore callback DNS, TLS, network connectivity, and response timing, then retry. - `callback_circuit_open`: Restore the callback and wait for circuit recovery before retrying. - `callback_result_invalid`: Fix the callback result fields or values identified by the callback logs, then retry. - `callback_unavailable`: Retry when callback capacity is available, restore the configured callback endpoint, or choose a non-callback pricing strategy. - `pricing_failure`: Fix the method pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the method schedule, timezone, or requested window, then retry. - `option_lifetime_too_short`: Lower the method's minimum option lifetime below the quote's remaining lifetime. A quote for a cart with tracked inventory lasts just under 5 minutes. - `geography_failure`: Fix the destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix inventory routing or origin assignment, then retry. - `invalid_configuration`: Correct the invalid delivery configuration identified by diagnostics, then retry. - `invalid_buyer_input`: Correct the buyer input identified by the outcome, then retry. - `address_verification_failed`: Correct the address fields rejected by verification, then retry. - `address_could_not_be_verified`: Confirm or correct the address, or retry when address verification is available. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.input_requirements

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1

anyOf variant 1: Inputs the method needs before Flint can price it. Set only when `type` is `input_required`..

- Value shape: Array of [DeliveryInputRequirementPreviousAttributes](../models/DeliveryInputRequirementPreviousAttributes.md#deliveryinputrequirementpreviousattributes). Inputs the method needs before Flint can price it. Set only when `type` is `input_required`. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.input_requirements variant 2

anyOf variant 2.

- Value shape: null. Inputs the method needs before Flint can price it. Set only when `type` is `input_required`. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `constraint` | Optional | [DeliveryInputConstraintPreviousAttributes](../models/DeliveryInputConstraintPreviousAttributes.md#deliveryinputconstraintpreviousattributes) or null | The rules the input must follow. `constraint`: [declared alternatives](../models/DeliveryInputRequirementPreviousAttributes.md#deliveryinputrequirementpreviousattributesconstraint). |
| `delivery_choice_group_ids` | Optional | Array of string or null | Choice groups that need this input. `delivery_choice_group_ids`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributescandidate_outcomes-variant-1-fields-1input_requirements-variant-1-fields-1delivery_choice_group_ids). |
| `delivery_input_requirement_id` | Optional | string or null | Unique ID of this requirement. `delivery_input_requirement_id`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributescandidate_outcomes-variant-1-fields-1input_requirements-variant-1-fields-1delivery_input_requirement_id). |
| `delivery_method_ids` | Optional | Array of string or null | Delivery methods that need this input. `delivery_method_ids`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributescandidate_outcomes-variant-1-fields-1input_requirements-variant-1-fields-1delivery_method_ids). |
| `delivery_option_ids` | Optional | Array of string or null | Delivery options that need this input. Omitted when the requirement applies to the choice group or method as a whole. `delivery_option_ids`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributescandidate_outcomes-variant-1-fields-1input_requirements-variant-1-fields-1delivery_option_ids). |
| `field_path` | Optional | string or null | Request property to fill in, using the same path as error params. Array templates use [] in place of an index. Values: [21 declared values](DeliveryInputRequirementInput.md#deliveryinputrequirementinput-field_path-values). `field_path`: [declared alternatives](../models/DeliveryInputRequirementPreviousAttributes.md#deliveryinputrequirementpreviousattributesfield_path). |
| `purpose` | Optional | string or null | When the input is needed. Values: `"quote"`, `"selection"`, `"pickup_availability"`. `purpose`: [declared alternatives](../models/DeliveryInputRequirementPreviousAttributes.md#deliveryinputrequirementpreviousattributespurpose). |

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.constraint

Declared alternatives: [DeliveryInputRequirementPreviousAttributes.constraint](../models/DeliveryInputRequirementPreviousAttributes.md#deliveryinputrequirementpreviousattributesconstraint).

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.delivery_choice_group_ids

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.delivery_choice_group_ids variant 1

anyOf variant 1: Choice groups that need this input..

- Value shape: Array of string. Choice groups that need this input. Items: Example: `"dcgrp_01KEZF7C00KYKJQ897HWM86AT8"`. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.delivery_choice_group_ids variant 2

anyOf variant 2.

- Value shape: null. Choice groups that need this input. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.delivery_input_requirement_id

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.delivery_input_requirement_id variant 1

anyOf variant 1: Unique ID of this requirement..

- Value shape: string. Unique ID of this requirement. Unique ID of this requirement. Example: `"req_24c2628d965d791d993ab70c2c9f77882cc189e3039ef9ef68bf935e59717580"`. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.delivery_input_requirement_id variant 2

anyOf variant 2.

- Value shape: null. Unique ID of this requirement. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.delivery_method_ids

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.delivery_method_ids variant 1

anyOf variant 1: Delivery methods that need this input..

- Value shape: Array of string. Delivery methods that need this input. Items: Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.delivery_method_ids variant 2

anyOf variant 2.

- Value shape: null. Delivery methods that need this input. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.delivery_option_ids

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.delivery_option_ids variant 1

anyOf variant 1: Delivery options that need this input. Omitted when the requirement applies to the choice group or method as a whole..

- Value shape: Array of string. Delivery options that need this input. Omitted when the requirement applies to the choice group or method as a whole. Items: Example: `"dopt_01KEZF7C00JM9TDZQZ5KQJ6923"`. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.delivery_option_ids variant 2

anyOf variant 2.

- Value shape: null. Delivery options that need this input. Omitted when the requirement applies to the choice group or method as a whole. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.field_path

Declared alternatives: [DeliveryInputRequirementPreviousAttributes.field_path](../models/DeliveryInputRequirementPreviousAttributes.md#deliveryinputrequirementpreviousattributesfield_path).

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.purpose

Declared alternatives: [DeliveryInputRequirementPreviousAttributes.purpose](../models/DeliveryInputRequirementPreviousAttributes.md#deliveryinputrequirementpreviousattributespurpose).

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.option

The option the method produced. Set only when `type` is `available`.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Conditional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Delivery charge for this option. |
| `arrival_estimate` | Conditional | [DeliveryArrivalEstimatePreviousAttributes](../models/DeliveryArrivalEstimatePreviousAttributes.md#deliveryarrivalestimatepreviousattributes) or null | Estimated arrival dates. Omitted when the method makes no timing promise. `arrival_estimate`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemarrival_estimate). |
| `buyer_instructions` | Conditional | [BuyerInstructionsConfigPreviousAttributes](../models/BuyerInstructionsConfigPreviousAttributes.md#buyerinstructionsconfigpreviousattributes) or null | The instructions field checkout collects for this option: whether it is enabled and required, and its label and placeholder. |
| `charge_tax_category` | Conditional | string or null | Flint charge tax category. Values: `"service_fee"`, `"shipping"`, `"delivery"`, `"handling"`, `"surcharge"`. `charge_tax_category`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemcharge_tax_category). |
| `consumed_by_delivery_selection_id` | Conditional | string or null | ID of the delivery selection that chose this option. Omitted until a selection does. `consumed_by_delivery_selection_id`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributescandidate_outcomes-variant-1-fields-1option-variant-1consumed_by_delivery_selection_id). |
| `delivery_method_id` | Conditional | string or null | ID of the delivery method that produced this option. `delivery_method_id`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributescandidate_outcomes-variant-1-fields-1option-variant-1delivery_method_id). |
| `delivery_method_revision_id` | Conditional | string or null | ID of the method revision this option was priced from. `delivery_method_revision_id`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributescandidate_outcomes-variant-1-fields-1option-variant-1delivery_method_revision_id). |
| `delivery_option_id` | Conditional | string or null | ID to send when choosing this option in a delivery selection. Omitted on delivery previews, whose options cannot be selected. `delivery_option_id`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributescandidate_outcomes-variant-1-fields-1option-variant-1delivery_option_id). |
| `delivery_plan` | Conditional | [DeliveryPlanPreviousAttributes](../models/DeliveryPlanPreviousAttributes.md#deliveryplanpreviousattributes) or null | How the option divides the items into deliveries. `delivery_plan`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemdelivery_plan). |
| `description` | Conditional | string or null | Buyer-visible description of the option. Omitted when the method has none. `description`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemdescription). |
| `display_position` | Conditional | integer or null | Position in which this option displays among the others. Lower values display first. `display_position`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemdisplay_position). |
| `execution_legs` | Conditional | Array of [DeliveryQuoteExecutionLegResourcePreviousAttributes](../models/DeliveryQuoteExecutionLegResourcePreviousAttributes.md#deliveryquoteexecutionlegresourcepreviousattributes) or null | Where this option's items leave from, one leg per origin Location. Under method_origin routing each method uses its own origin, so a pickup option leaves from the chosen store while a shipment option can leave from a warehouse. Selecting the option makes these legs the selection's execution legs. `execution_legs`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemexecution_legs). |
| `expires_at` | Conditional | string or null | Last moment a delivery selection can choose this option: the quote's expires_at, or earlier when the rate the merchant's callback or server returned expires first. Afterward the option is left out of the quote's options and selecting it requires a new quote. Omitted on delivery previews, whose options can't be selected. `expires_at`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributescandidate_outcomes-variant-1-fields-1option-variant-1expires_at). |
| `local_delivery` | Conditional | [DeliveryLocalDeliveryDetailsPreviousAttributes](../models/DeliveryLocalDeliveryDetailsPreviousAttributes.md#deliverylocaldeliverydetailspreviousattributes) or null | Local delivery details. Set only when `type` is `local_delivery`. |
| `name` | Conditional | string or null | Buyer-visible name of the option. `name`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemname). |
| `offered_windows` | Conditional | Array of [DeliveryWindowResourcePreviousAttributes](../models/DeliveryWindowResourcePreviousAttributes.md#deliverywindowresourcepreviousattributes) or null | Delivery windows the buyer can choose from. Omitted when `window_selection` is `none`. `offered_windows`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemoffered_windows). |
| `pickup` | Conditional | [DeliveryPickupDetailsPreviousAttributes](../models/DeliveryPickupDetailsPreviousAttributes.md#deliverypickupdetailspreviousattributes) or null | Pickup details. Set only when `type` is `pickup`. |
| `recipient_requirements` | Conditional | Array of [DeliveryRecipientRequirementPreviousAttributes](../models/DeliveryRecipientRequirementPreviousAttributes.md#deliveryrecipientrequirementpreviousattributes) or null | Recipient fields this option asks for. A selection can leave out required fields, but payment needs them. `recipient_requirements`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemrecipient_requirements). |
| `recommended` | Conditional | boolean or null | Whether Flint recommends this option over the others in the group, based on the methods' `recommendation_priority`. `recommended`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemrecommended). |
| `shipment` | Conditional | [DeliveryShipmentDetailsPreviousAttributes](../models/DeliveryShipmentDetailsPreviousAttributes.md#deliveryshipmentdetailspreviousattributes) or null | Shipment details. Set only when `type` is `shipment`. |
| `taxable` | Conditional | boolean or null | Whether tax applies to the delivery charge. `taxable`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemtaxable). |
| `timezone` | Conditional | string or null | IANA timezone for displaying window_start_at, window_end_at, and any offered windows. `timezone`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributescandidate_outcomes-variant-1-fields-1option-variant-1timezone). |
| `type` | Conditional | string or null | Delivery type of this option. Values: `"shipment"`, `"pickup"`, `"local_delivery"`. `type`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemtype). |
| `window_end_at` | Conditional | string or null | End of the delivery window for this option. Omitted when the option has no single window; see offered_windows. `window_end_at`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributescandidate_outcomes-variant-1-fields-1option-variant-1window_end_at). |
| `window_pricing` | Conditional | string or null | Whether the offered windows cost the same. Values: `"uniform"`, `"varies"`. `window_pricing`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemwindow_pricing). |
| `window_selection` | Conditional | string or null | Whether the buyer chooses a delivery window. Values: `"none"`, `"offered"`. `window_selection`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemwindow_selection). |
| `window_start_at` | Conditional | string or null | Start of the delivery window for this option. Omitted when the option has no single window; see offered_windows. `window_start_at`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributescandidate_outcomes-variant-1-fields-1option-variant-1window_start_at). |

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.option variant 1

anyOf DeliveryOptionProjectionPreviousAttributes.

- Optional: `amount_money`, `arrival_estimate`, `buyer_instructions`, `charge_tax_category`, `consumed_by_delivery_selection_id`, `delivery_method_id`, `delivery_method_revision_id`, `delivery_option_id`, `delivery_plan`, `description`, `display_position`, `execution_legs`, `expires_at`, `local_delivery`, `name`, `offered_windows`, `pickup`, `recipient_requirements`, `recommended`, `shipment`, `taxable`, `timezone`, `type`, `window_end_at`, `window_pricing`, `window_selection`, `window_start_at`.

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.option variant 2

anyOf variant 2.

- Undeclared: `amount_money`, `arrival_estimate`, `buyer_instructions`, `charge_tax_category`, `consumed_by_delivery_selection_id`, `delivery_method_id`, `delivery_method_revision_id`, `delivery_option_id`, `delivery_plan`, `description`, `display_position`, `execution_legs`, `expires_at`, `local_delivery`, `name`, `offered_windows`, `pickup`, `recipient_requirements`, `recommended`, `shipment`, `taxable`, `timezone`, `type`, `window_end_at`, `window_pricing`, `window_selection`, `window_start_at`.
- Value shape: null. The option the method produced. Set only when `type` is `available`. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.option variant 1.arrival_estimate

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.arrival_estimate](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemarrival_estimate).

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.option variant 1.charge_tax_category

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.charge_tax_category](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemcharge_tax_category).

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.option variant 1.consumed_by_delivery_selection_id

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.option variant 1.consumed_by_delivery_selection_id variant 1

anyOf variant 1: ID of the delivery selection that chose this option. Omitted until a selection does..

- Value shape: string. ID of the delivery selection that chose this option. Omitted until a selection does. ID of the delivery selection that chose this option. Omitted until a selection does. Example: `"dsel_01KEZF7C00QC35XBXVXQSCEB2D"`. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.option variant 1.consumed_by_delivery_selection_id variant 2

anyOf variant 2.

- Value shape: null. ID of the delivery selection that chose this option. Omitted until a selection does. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.option variant 1.delivery_method_id

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.option variant 1.delivery_method_id variant 1

anyOf variant 1: ID of the delivery method that produced this option..

- Value shape: string. ID of the delivery method that produced this option. ID of the delivery method that produced this option. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.option variant 1.delivery_method_id variant 2

anyOf variant 2.

- Value shape: null. ID of the delivery method that produced this option. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.option variant 1.delivery_method_revision_id

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.option variant 1.delivery_method_revision_id variant 1

anyOf variant 1: ID of the method revision this option was priced from..

- Value shape: string. ID of the method revision this option was priced from. ID of the method revision this option was priced from. Example: `"dmetr_01KEZF7C001ZF9D92DY1G51GV9"`. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.option variant 1.delivery_method_revision_id variant 2

anyOf variant 2.

- Value shape: null. ID of the method revision this option was priced from. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.option variant 1.delivery_option_id

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.option variant 1.delivery_option_id variant 1

anyOf variant 1: ID to send when choosing this option in a delivery selection. Omitted on delivery previews, whose options cannot be selected..

- Value shape: string. ID to send when choosing this option in a delivery selection. Omitted on delivery previews, whose options cannot be selected. ID to send when choosing this option in a delivery selection. Omitted on delivery previews, whose options cannot be selected. Example: `"dopt_01KEZF7C00JM9TDZQZ5KQJ6923"`. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.option variant 1.delivery_option_id variant 2

anyOf variant 2.

- Value shape: null. ID to send when choosing this option in a delivery selection. Omitted on delivery previews, whose options cannot be selected. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.option variant 1.delivery_plan

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.delivery_plan](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemdelivery_plan).

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.option variant 1.description

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.description](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemdescription).

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.option variant 1.display_position

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.display_position](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemdisplay_position).

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.option variant 1.execution_legs

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.execution_legs](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemexecution_legs).

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.option variant 1.expires_at

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.option variant 1.expires_at variant 1

anyOf variant 1: Last moment a delivery selection can choose this option: the quote's expires_at, or earlier when the rate the merchant's callback or server returned expires first. Afterward the option is left out of the quote's options and selecting it requires a new quote. Omitted on delivery previews, whose options can't be selected..

- Value shape: string. Last moment a delivery selection can choose this option: the quote's expires_at, or earlier when the rate the merchant's callback or server returned expires first. Afterward the option is left out of the quote's options and selecting it requires a new quote. Omitted on delivery previews, whose options can't be selected. Last moment a delivery selection can choose this option: the quote's expires_at, or earlier when the rate the merchant's callback or server returned expires first. Afterward the option is left out of the quote's options and selecting it requires a new quote. Omitted on delivery previews, whose options can't be selected. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.option variant 1.expires_at variant 2

anyOf variant 2.

- Value shape: null. Last moment a delivery selection can choose this option: the quote's expires_at, or earlier when the rate the merchant's callback or server returned expires first. Afterward the option is left out of the quote's options and selecting it requires a new quote. Omitted on delivery previews, whose options can't be selected. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.option variant 1.name

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.name](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemname).

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.option variant 1.offered_windows

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.offered_windows](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemoffered_windows).

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.option variant 1.recipient_requirements

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.recipient_requirements](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemrecipient_requirements).

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.option variant 1.recommended

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.recommended](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemrecommended).

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.option variant 1.taxable

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.taxable](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemtaxable).

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.option variant 1.timezone

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.option variant 1.timezone variant 1

anyOf variant 1: IANA timezone for displaying window_start_at, window_end_at, and any offered windows..

- Value shape: string. IANA timezone for displaying window_start_at, window_end_at, and any offered windows. IANA timezone for displaying window_start_at, window_end_at, and any offered windows. Example: `"America/New_York"`. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.option variant 1.timezone variant 2

anyOf variant 2.

- Value shape: null. IANA timezone for displaying window_start_at, window_end_at, and any offered windows. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.option variant 1.type

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.type](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemtype).

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.option variant 1.window_end_at

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.option variant 1.window_end_at variant 1

anyOf variant 1: End of the delivery window for this option. Omitted when the option has no single window; see offered_windows..

- Value shape: string. End of the delivery window for this option. Omitted when the option has no single window; see offered_windows. End of the delivery window for this option. Omitted when the option has no single window; see offered_windows. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.option variant 1.window_end_at variant 2

anyOf variant 2.

- Value shape: null. End of the delivery window for this option. Omitted when the option has no single window; see offered_windows. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.option variant 1.window_pricing

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.window_pricing](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemwindow_pricing).

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.option variant 1.window_selection

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.window_selection](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemwindow_selection).

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.option variant 1.window_start_at

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.option variant 1.window_start_at variant 1

anyOf variant 1: Start of the delivery window for this option. Omitted when the option has no single window; see offered_windows..

- Value shape: string. Start of the delivery window for this option. Omitted when the option has no single window; see offered_windows. Start of the delivery window for this option. Omitted when the option has no single window; see offered_windows. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.option variant 1.window_start_at variant 2

anyOf variant 2.

- Value shape: null. Start of the delivery window for this option. Omitted when the option has no single window; see offered_windows. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.retryable

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.retryable variant 1

anyOf variant 1: Whether trying again later can succeed. Set only when `type` is `cannot_calculate`..

- Value shape: boolean. Whether trying again later can succeed. Set only when `type` is `cannot_calculate`. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.retryable variant 2

anyOf variant 2.

- Value shape: null. Whether trying again later can succeed. Set only when `type` is `cannot_calculate`. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1 variant 1.type

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1 variant 1.type variant 1

anyOf group 1 variant 1: What happened when Flint evaluated this delivery method..

- Value shape: string. What happened when Flint evaluated this delivery method. Values: `"available"`, `"unavailable"`, `"input_required"`, `"cannot_calculate"`, `"requires_checkout_context"`.

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1 variant 1.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. What happened when Flint evaluated this delivery method. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1 variant 1.type variant 3

anyOf group 2 variant 1: What happened when Flint evaluated this delivery method..

- Value shape: string. What happened when Flint evaluated this delivery method. Values: `"available"`.

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.unavailable_reason

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.unavailable_reason variant 1

anyOf variant 1: Why the method is unavailable and the action that can make it eligible.
- `automatic_tax_origin_unsupported`: Automatic tax requires a US fulfillment origin. Choose a method that uses a US location, or use external tax.
- `dependency_revoked`: The method revision or a dependency was revoked. Publish a corrected revision, rotate the callback signing secret, or choose another method.
- `destination_not_served`: Use a destination covered by this method or choose another method.
- `pickup_unavailable`: Choose an available pickup method or location.
- `no_window_available`: Choose another offered window or a method with availability for the requested time.
- `eligibility_no_match`: Inspect eligibility_mismatches, then change the relevant buyer facts or method eligibility rule.
- `method_type_not_allowed`: Choose a method type allowed by every line item in the choice group.
- `pricing_unavailable`: Add or activate a matching rate, or provide the required caller-supplied price.
- `inventory_unavailable`: The origin or pickup location cannot supply the requested inventory. Reduce the quantity, replenish inventory, or choose another origin or method..

- Value shape: string. Why the method is unavailable and the action that can make it eligible. - `automatic_tax_origin_unsupported`: Automatic tax requires a US fulfillment origin. Choose a method that uses a US location, or use external tax. - `dependency_revoked`: The method revision or a dependency was revoked. Publish a corrected revision, rotate the callback signing secret, or choose another method. - `destination_not_served`: Use a destination covered by this method or choose another method. - `pickup_unavailable`: Choose an available pickup method or location. - `no_window_available`: Choose another offered window or a method with availability for the requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the relevant buyer facts or method eligibility rule. - `method_type_not_allowed`: Choose a method type allowed by every line item in the choice group. - `pricing_unavailable`: Add or activate a matching rate, or provide the required caller-supplied price. - `inventory_unavailable`: The origin or pickup location cannot supply the requested inventory. Reduce the quantity, replenish inventory, or choose another origin or method. Values: `"automatic_tax_origin_unsupported"`, `"dependency_revoked"`, `"destination_not_served"`, `"pickup_unavailable"`, `"no_window_available"`, `"eligibility_no_match"`, `"method_type_not_allowed"`, `"pricing_unavailable"`, `"inventory_unavailable"`.

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.unavailable_reason variant 2

anyOf variant 2.

- Value shape: null. Why the method is unavailable and the action that can make it eligible. - `automatic_tax_origin_unsupported`: Automatic tax requires a US fulfillment origin. Choose a method that uses a US location, or use external tax. - `dependency_revoked`: The method revision or a dependency was revoked. Publish a corrected revision, rotate the callback signing secret, or choose another method. - `destination_not_served`: Use a destination covered by this method or choose another method. - `pickup_unavailable`: Choose an available pickup method or location. - `no_window_available`: Choose another offered window or a method with availability for the requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the relevant buyer facts or method eligibility rule. - `method_type_not_allowed`: Choose a method type allowed by every line item in the choice group. - `pricing_unavailable`: Add or activate a matching rate, or provide the required caller-supplied price. - `inventory_unavailable`: The origin or pickup location cannot supply the requested inventory. Reduce the quantity, replenish inventory, or choose another origin or method. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1 variant 2.type

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1 variant 2.type variant 1

anyOf group 1 variant 1: What happened when Flint evaluated this delivery method..

- Value shape: string. What happened when Flint evaluated this delivery method. Values: `"available"`, `"unavailable"`, `"input_required"`, `"cannot_calculate"`, `"requires_checkout_context"`.

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1 variant 2.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. What happened when Flint evaluated this delivery method. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1 variant 2.type variant 3

anyOf group 2 variant 1: What happened when Flint evaluated this delivery method..

- Value shape: string. What happened when Flint evaluated this delivery method. Values: `"unavailable"`.

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1 variant 3.type

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1 variant 3.type variant 1

anyOf group 1 variant 1: What happened when Flint evaluated this delivery method..

- Value shape: string. What happened when Flint evaluated this delivery method. Values: `"available"`, `"unavailable"`, `"input_required"`, `"cannot_calculate"`, `"requires_checkout_context"`.

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1 variant 3.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. What happened when Flint evaluated this delivery method. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1 variant 3.type variant 3

anyOf group 2 variant 1: What happened when Flint evaluated this delivery method..

- Value shape: string. What happened when Flint evaluated this delivery method. Values: `"input_required"`.

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1 variant 4.type

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1 variant 4.type variant 1

anyOf group 1 variant 1: What happened when Flint evaluated this delivery method..

- Value shape: string. What happened when Flint evaluated this delivery method. Values: `"available"`, `"unavailable"`, `"input_required"`, `"cannot_calculate"`, `"requires_checkout_context"`.

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1 variant 4.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. What happened when Flint evaluated this delivery method. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1 variant 4.type variant 3

anyOf group 2 variant 1: What happened when Flint evaluated this delivery method..

- Value shape: string. What happened when Flint evaluated this delivery method. Values: `"cannot_calculate"`.

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1 variant 5.type

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1 variant 5.type variant 1

anyOf group 1 variant 1: What happened when Flint evaluated this delivery method..

- Value shape: string. What happened when Flint evaluated this delivery method. Values: `"available"`, `"unavailable"`, `"input_required"`, `"cannot_calculate"`, `"requires_checkout_context"`.

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1 variant 5.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. What happened when Flint evaluated this delivery method. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1 variant 5.type variant 3

anyOf group 2 variant 1: What happened when Flint evaluated this delivery method..

- Value shape: string. What happened when Flint evaluated this delivery method. Values: `"requires_checkout_context"`.

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.delivery_choice_group_id

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.delivery_choice_group_id variant 1

anyOf variant 1: Identifier used to choose one option for this group..

- Value shape: string. Identifier used to choose one option for this group. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.delivery_choice_group_id variant 2

anyOf variant 2.

- Value shape: null. Identifier used to choose one option for this group. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.evaluation_status

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.evaluation_status variant 1

anyOf variant 1: How completely Flint evaluated the group's candidate delivery methods..

- Value shape: string. How completely Flint evaluated the group's candidate delivery methods. Values: `"complete"`, `"incomplete"`, `"degraded"`.

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.evaluation_status variant 2

anyOf variant 2.

- Value shape: null. How completely Flint evaluated the group's candidate delivery methods. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.execution_legs

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.execution_legs variant 1

anyOf variant 1: Where the group's items leave from, one leg per origin Location, when all of its methods leave from the same Locations. Omitted when the origin depends on the chosen method, such as shipping from a warehouse or picking up at a store. Each option then lists its own execution_legs..

- Value shape: Array of [DeliveryQuoteExecutionLegResourcePreviousAttributes](../models/DeliveryQuoteExecutionLegResourcePreviousAttributes.md#deliveryquoteexecutionlegresourcepreviousattributes). Where the group's items leave from, one leg per origin Location, when all of its methods leave from the same Locations. Omitted when the origin depends on the chosen method, such as shipping from a warehouse or picking up at a store. Each option then lists its own execution_legs. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.execution_legs variant 2

anyOf variant 2.

- Value shape: null. Where the group's items leave from, one leg per origin Location, when all of its methods leave from the same Locations. Omitted when the origin depends on the chosen method, such as shipping from a warehouse or picking up at a store. Each option then lists its own execution_legs. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.execution_legs variant 1.[] fields 1

Field definitions: [DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.execution_legs variant 1.[] fields 1](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemexecution_legs-variant-1-fields-1).

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.input_requirements

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.input_requirements variant 1

anyOf variant 1: Inputs this group's delivery methods need before they can be priced or selected..

- Value shape: Array of [DeliveryInputRequirementPreviousAttributes](../models/DeliveryInputRequirementPreviousAttributes.md#deliveryinputrequirementpreviousattributes). Inputs this group's delivery methods need before they can be priced or selected. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.input_requirements variant 2

anyOf variant 2.

- Value shape: null. Inputs this group's delivery methods need before they can be priced or selected. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.input_requirements variant 1.[] fields 1

Field definitions: [DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributescandidate_outcomes-variant-1-fields-1input_requirements-variant-1-fields-1).

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.line_items

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.line_items variant 1

anyOf variant 1: Order line items, or bundle components, this group covers, with the quantity covered..

- Value shape: Array of [DeliveryQuoteLineItemResourcePreviousAttributes](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributes). Order line items, or bundle components, this group covers, with the quantity covered. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.line_items variant 2

anyOf variant 2.

- Value shape: null. Order line items, or bundle components, this group covers, with the quantity covered. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.line_items variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_component_id` | Optional | string or null | ID of the bundle component the quantity belongs to. Omitted when the line item is not a bundle. `bundle_component_id`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributesline_items-variant-1-fields-1bundle_component_id). |
| `order_id` | Optional | string or null | ID of the order that owns this line item. Checkout credentials receive only their own session's order ID. `order_id`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributesline_items-variant-1-fields-1order_id). |
| `order_line_item_id` | Optional | string or null | ID of the order line item. `order_line_item_id`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributesline_items-variant-1-fields-1order_line_item_id). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.line_items variant 1.[] fields 1.bundle_component_id

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.line_items variant 1.[] fields 1.bundle_component_id variant 1

anyOf variant 1: ID of the bundle component the quantity belongs to. Omitted when the line item is not a bundle..

- Value shape: string. ID of the bundle component the quantity belongs to. Omitted when the line item is not a bundle. ID of the bundle component the quantity belongs to. Omitted when the line item is not a bundle. Example: `"bunc_01KEZF7C00CQASEZGAPEANTGD1"`. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.line_items variant 1.[] fields 1.bundle_component_id variant 2

anyOf variant 2.

- Value shape: null. ID of the bundle component the quantity belongs to. Omitted when the line item is not a bundle. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.line_items variant 1.[] fields 1.order_id

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.line_items variant 1.[] fields 1.order_id variant 1

anyOf variant 1: ID of the order that owns this line item. Checkout credentials receive only their own session's order ID..

- Value shape: string. ID of the order that owns this line item. Checkout credentials receive only their own session's order ID. ID of the order that owns this line item. Checkout credentials receive only their own session's order ID. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.line_items variant 1.[] fields 1.order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order that owns this line item. Checkout credentials receive only their own session's order ID. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.line_items variant 1.[] fields 1.order_line_item_id

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.line_items variant 1.[] fields 1.order_line_item_id variant 1

anyOf variant 1: ID of the order line item..

- Value shape: string. ID of the order line item. ID of the order line item. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.line_items variant 1.[] fields 1.order_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order line item. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.line_items variant 1.[] fields 1.quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.method_types

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.method_types variant 1

anyOf variant 1: Types of the delivery methods that can serve this group's items, each listed once, in the order the methods display. A type is listed before its options are priced, such as a local delivery that waits for the buyer's address, and stays listed while its methods need more input or cannot serve the current input. options lists what the buyer can choose now. A method whose type these items do not allow is left out, and the list is empty when no method can serve them..

- Value shape: Array of string. Types of the delivery methods that can serve this group's items, each listed once, in the order the methods display. A type is listed before its options are priced, such as a local delivery that waits for the buyer's address, and stays listed while its methods need more input or cannot serve the current input. options lists what the buyer can choose now. A method whose type these items do not allow is left out, and the list is empty when no method can serve them. Items values: `"shipment"`, `"pickup"`, `"local_delivery"`.

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.method_types variant 2

anyOf variant 2.

- Value shape: null. Types of the delivery methods that can serve this group's items, each listed once, in the order the methods display. A type is listed before its options are priced, such as a local delivery that waits for the buyer's address, and stays listed while its methods need more input or cannot serve the current input. options lists what the buyer can choose now. A method whose type these items do not allow is left out, and the list is empty when no method can serve them. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.options

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.options variant 1

anyOf variant 1: Delivery options the buyer can choose now..

- Value shape: Array of ([DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitem) and object). Delivery options the buyer can choose now. Items: A delivery option in a quote or preview: its price, type, timing, delivery plan, execution legs, and shipment, pickup, or local delivery details. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.options variant 2

anyOf variant 2.

- Value shape: null. Delivery options the buyer can choose now. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.options variant 1.[] fields 1

A delivery option in a quote or preview: its price, type, timing, delivery plan, execution legs, and shipment, pickup, or local delivery details.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Delivery charge for this option. |
| `arrival_estimate` | Optional | [DeliveryArrivalEstimatePreviousAttributes](../models/DeliveryArrivalEstimatePreviousAttributes.md#deliveryarrivalestimatepreviousattributes) or null | Estimated arrival dates. Omitted when the method makes no timing promise. `arrival_estimate`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemarrival_estimate). |
| `buyer_instructions` | Optional | [BuyerInstructionsConfigPreviousAttributes](../models/BuyerInstructionsConfigPreviousAttributes.md#buyerinstructionsconfigpreviousattributes) or null | The instructions field checkout collects for this option: whether it is enabled and required, and its label and placeholder. |
| `charge_tax_category` | Optional | string or null | Flint charge tax category. Values: `"service_fee"`, `"shipping"`, `"delivery"`, `"handling"`, `"surcharge"`. `charge_tax_category`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemcharge_tax_category). |
| `consumed_by_delivery_selection_id` | Optional | string or null | ID of the delivery selection that chose this option. Omitted until a selection does. `consumed_by_delivery_selection_id`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributescandidate_outcomes-variant-1-fields-1option-variant-1consumed_by_delivery_selection_id). |
| `delivery_method_id` | Optional | string or null | ID of the delivery method that produced this option. `delivery_method_id`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributescandidate_outcomes-variant-1-fields-1option-variant-1delivery_method_id). |
| `delivery_method_revision_id` | Optional | string or null | ID of the method revision this option was priced from. `delivery_method_revision_id`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributescandidate_outcomes-variant-1-fields-1option-variant-1delivery_method_revision_id). |
| `delivery_option_id` | Optional | string or null | ID to send when choosing this option in a delivery selection. Omitted on delivery previews, whose options cannot be selected. `delivery_option_id`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributescandidate_outcomes-variant-1-fields-1option-variant-1delivery_option_id). |
| `delivery_plan` | Optional | [DeliveryPlanPreviousAttributes](../models/DeliveryPlanPreviousAttributes.md#deliveryplanpreviousattributes) or null | How the option divides the items into deliveries. `delivery_plan`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemdelivery_plan). |
| `description` | Optional | string or null | Buyer-visible description of the option. Omitted when the method has none. `description`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemdescription). |
| `display_position` | Optional | integer or null | Position in which this option displays among the others. Lower values display first. `display_position`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemdisplay_position). |
| `execution_legs` | Optional | Array of [DeliveryQuoteExecutionLegResourcePreviousAttributes](../models/DeliveryQuoteExecutionLegResourcePreviousAttributes.md#deliveryquoteexecutionlegresourcepreviousattributes) or null | Where this option's items leave from, one leg per origin Location. Under method_origin routing each method uses its own origin, so a pickup option leaves from the chosen store while a shipment option can leave from a warehouse. Selecting the option makes these legs the selection's execution legs. `execution_legs`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemexecution_legs). |
| `expires_at` | Optional | string or null | Last moment a delivery selection can choose this option: the quote's expires_at, or earlier when the rate the merchant's callback or server returned expires first. Afterward the option is left out of the quote's options and selecting it requires a new quote. Omitted on delivery previews, whose options can't be selected. `expires_at`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributescandidate_outcomes-variant-1-fields-1option-variant-1expires_at). |
| `local_delivery` | Optional | [DeliveryLocalDeliveryDetailsPreviousAttributes](../models/DeliveryLocalDeliveryDetailsPreviousAttributes.md#deliverylocaldeliverydetailspreviousattributes) or null | Local delivery details. Set only when `type` is `local_delivery`. |
| `name` | Optional | string or null | Buyer-visible name of the option. `name`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemname). |
| `offered_windows` | Optional | Array of [DeliveryWindowResourcePreviousAttributes](../models/DeliveryWindowResourcePreviousAttributes.md#deliverywindowresourcepreviousattributes) or null | Delivery windows the buyer can choose from. Omitted when `window_selection` is `none`. `offered_windows`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemoffered_windows). |
| `pickup` | Optional | [DeliveryPickupDetailsPreviousAttributes](../models/DeliveryPickupDetailsPreviousAttributes.md#deliverypickupdetailspreviousattributes) or null | Pickup details. Set only when `type` is `pickup`. |
| `recipient_requirements` | Optional | Array of [DeliveryRecipientRequirementPreviousAttributes](../models/DeliveryRecipientRequirementPreviousAttributes.md#deliveryrecipientrequirementpreviousattributes) or null | Recipient fields this option asks for. A selection can leave out required fields, but payment needs them. `recipient_requirements`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemrecipient_requirements). |
| `recommended` | Optional | boolean or null | Whether Flint recommends this option over the others in the group, based on the methods' `recommendation_priority`. `recommended`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemrecommended). |
| `shipment` | Optional | [DeliveryShipmentDetailsPreviousAttributes](../models/DeliveryShipmentDetailsPreviousAttributes.md#deliveryshipmentdetailspreviousattributes) or null | Shipment details. Set only when `type` is `shipment`. |
| `taxable` | Optional | boolean or null | Whether tax applies to the delivery charge. `taxable`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemtaxable). |
| `timezone` | Optional | string or null | IANA timezone for displaying window_start_at, window_end_at, and any offered windows. `timezone`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributescandidate_outcomes-variant-1-fields-1option-variant-1timezone). |
| `type` | Optional | string or null | Delivery type of this option. Values: `"shipment"`, `"pickup"`, `"local_delivery"`. `type`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemtype). |
| `window_end_at` | Optional | string or null | End of the delivery window for this option. Omitted when the option has no single window; see offered_windows. `window_end_at`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributescandidate_outcomes-variant-1-fields-1option-variant-1window_end_at). |
| `window_pricing` | Optional | string or null | Whether the offered windows cost the same. Values: `"uniform"`, `"varies"`. `window_pricing`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemwindow_pricing). |
| `window_selection` | Optional | string or null | Whether the buyer chooses a delivery window. Values: `"none"`, `"offered"`. `window_selection`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemwindow_selection). |
| `window_start_at` | Optional | string or null | Start of the delivery window for this option. Omitted when the option has no single window; see offered_windows. `window_start_at`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributescandidate_outcomes-variant-1-fields-1option-variant-1window_start_at). |

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.options variant 1.[] fields 1.arrival_estimate

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.arrival_estimate](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemarrival_estimate).

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.options variant 1.[] fields 1.charge_tax_category

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.charge_tax_category](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemcharge_tax_category).

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.options variant 1.[] fields 1.consumed_by_delivery_selection_id

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.option variant 1.consumed_by_delivery_selection_id](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributescandidate_outcomes-variant-1-fields-1option-variant-1consumed_by_delivery_selection_id).

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.options variant 1.[] fields 1.delivery_method_id

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.option variant 1.delivery_method_id](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributescandidate_outcomes-variant-1-fields-1option-variant-1delivery_method_id).

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.options variant 1.[] fields 1.delivery_method_revision_id

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.option variant 1.delivery_method_revision_id](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributescandidate_outcomes-variant-1-fields-1option-variant-1delivery_method_revision_id).

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.options variant 1.[] fields 1.delivery_option_id

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.option variant 1.delivery_option_id](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributescandidate_outcomes-variant-1-fields-1option-variant-1delivery_option_id).

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.options variant 1.[] fields 1.delivery_plan

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.delivery_plan](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemdelivery_plan).

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.options variant 1.[] fields 1.description

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.description](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemdescription).

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.options variant 1.[] fields 1.display_position

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.display_position](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemdisplay_position).

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.options variant 1.[] fields 1.execution_legs

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.execution_legs](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemexecution_legs).

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.options variant 1.[] fields 1.expires_at

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.option variant 1.expires_at](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributescandidate_outcomes-variant-1-fields-1option-variant-1expires_at).

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.options variant 1.[] fields 1.name

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.name](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemname).

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.options variant 1.[] fields 1.offered_windows

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.offered_windows](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemoffered_windows).

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.options variant 1.[] fields 1.recipient_requirements

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.recipient_requirements](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemrecipient_requirements).

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.options variant 1.[] fields 1.recommended

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.recommended](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemrecommended).

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.options variant 1.[] fields 1.taxable

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.taxable](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemtaxable).

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.options variant 1.[] fields 1.timezone

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.option variant 1.timezone](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributescandidate_outcomes-variant-1-fields-1option-variant-1timezone).

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.options variant 1.[] fields 1.type

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.type](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemtype).

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.options variant 1.[] fields 1.window_end_at

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.option variant 1.window_end_at](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributescandidate_outcomes-variant-1-fields-1option-variant-1window_end_at).

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.options variant 1.[] fields 1.window_pricing

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.window_pricing](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemwindow_pricing).

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.options variant 1.[] fields 1.window_selection

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.window_selection](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemwindow_selection).

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.options variant 1.[] fields 1.window_start_at

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.option variant 1.window_start_at](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributescandidate_outcomes-variant-1-fields-1option-variant-1window_start_at).

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.pickup_unavailable

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.pickup_unavailable variant 1

anyOf variant 1: The requested pickup Location or the order's fixed inventory Location cannot be served by this group's pickup methods..

- Value shape: boolean. The requested pickup Location or the order's fixed inventory Location cannot be served by this group's pickup methods. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.pickup_unavailable variant 2

anyOf variant 2.

- Value shape: null. The requested pickup Location or the order's fixed inventory Location cannot be served by this group's pickup methods. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.previously_selected_delivery_method_id

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.previously_selected_delivery_method_id variant 1

anyOf variant 1: Method chosen for this group in the previous selection. Omitted when there is none..

- Value shape: string. Method chosen for this group in the previous selection. Omitted when there is none. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.previously_selected_delivery_method_id variant 2

anyOf variant 2.

- Value shape: null. Method chosen for this group in the previous selection. Omitted when there is none. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.stable_key

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.stable_key variant 1

anyOf variant 1: Identifies the same group across quotes for the same delivery demands and compatible delivery types. It can change when the grouping inputs change..

- Value shape: string. Identifies the same group across quotes for the same delivery demands and compatible delivery types. It can change when the grouping inputs change. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.stable_key variant 2

anyOf variant 2.

- Value shape: null. Identifies the same group across quotes for the same delivery demands and compatible delivery types. It can change when the grouping inputs change. 

