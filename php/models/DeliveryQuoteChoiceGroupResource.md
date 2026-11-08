[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryQuoteChoiceGroupResource

One group of order items in a delivery quote, with the delivery options the buyer can choose, its availability status, and any input still needed.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address_advisories` | Optional | Array of [DeliveryAddressAdvisoryResource](../models/DeliveryAddressAdvisoryResource.md#deliveryaddressadvisoryresource) | Buyer-actionable address verification results that affected this choice group. A suggested_address is an explicit correction the buyer may confirm; Flint does not apply it silently. |
| `allowed_types` | Optional | Array of string |  |
| `availability_status` | Required | string | Values: `"ready"`, `"needs_input"`, `"needs_checkout_context"`, `"unavailable"`. |
| `candidate_outcomes` | Optional | Map of (object and Alternative shapes (see declared variants)) | `candidate_outcomes{}`: [declared alternatives](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomes). |
| `delivery_choice_group_id` | Required | string |  |
| `evaluation_status` | Required | string | Values: `"complete"`, `"incomplete"`, `"degraded"`. |
| `execution_legs` | Optional | Array of [DeliveryQuoteExecutionLegResource](../models/DeliveryQuoteExecutionLegResource.md#deliveryquoteexecutionlegresource) | Where the group's items leave from, one leg per origin Location, when all of its methods leave from the same Locations. Omitted when the origin depends on the chosen method, such as shipping from a warehouse or picking up at a store. Each option then lists its own execution_legs. `execution_legs[]`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesoptionexecution_legs). |
| `input_requirements` | Required | Array of [DeliveryInputRequirement](../models/DeliveryInputRequirement.md#deliveryinputrequirement) | `input_requirements[]`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesinput_requirements). |
| `line_items` | Required | Array of [DeliveryQuoteLineItemResource](../models/DeliveryQuoteLineItemResource.md#deliveryquotelineitemresource) | `line_items[]`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupsline_items). |
| `method_types` | Required | Array of string | Types of the delivery methods that can serve this group's items, each listed once, in the order the methods display. A type is listed before its options are priced, such as a local delivery that waits for the buyer's address, and stays listed while its methods need more input or cannot serve the current input. options lists what the buyer can choose now. A method whose type these items do not allow is left out, and the list is empty when no method can serve them. Items values: `"shipment"`, `"pickup"`, `"local_delivery"`. |
| `options` | Required | Array of [DeliveryOptionProjection](../models/DeliveryOptionProjection.md#deliveryoptionprojection) | `options[]`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesoption). |
| `previously_selected_delivery_method_id` | Optional | string |  |
| `stable_key` | Required | string |  |

### DeliveryQuoteChoiceGroupResource.candidate_outcomes{}

Declared alternatives: [CheckoutSessionResponse.data.delivery.choice_groups[].candidate_outcomes{}](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomes).

### DeliveryQuoteChoiceGroupResource.execution_legs[]

Field definitions: [CheckoutSessionResponse.data.delivery.choice_groups[].candidate_outcomes{}.option.execution_legs[]](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesoptionexecution_legs).

### DeliveryQuoteChoiceGroupResource.input_requirements[]

Field definitions: [CheckoutSessionResponse.data.delivery.choice_groups[].candidate_outcomes{}.input_requirements[]](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesinput_requirements).

### DeliveryQuoteChoiceGroupResource.line_items[]

Field definitions: [CheckoutSessionResponse.data.delivery.choice_groups[].line_items[]](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupsline_items).

### DeliveryQuoteChoiceGroupResource.options[]

Field definitions: [CheckoutSessionResponse.data.delivery.choice_groups[].candidate_outcomes{}.option](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesoption).

