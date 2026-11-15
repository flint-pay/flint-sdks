[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPreviewChoiceGroupResource

One group of order items in a delivery options preview, with the options a buyer could choose, its availability status, and any input still needed.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_types` | Optional | Array of string | Delivery types permitted by this group's items. |
| `availability_status` | Required | string | Whether this group has a delivery option available. Values: `"ready"`, `"needs_input"`, `"needs_checkout_context"`, `"unavailable"`. |
| `candidate_outcomes` | Required | Map of (object and Alternative shapes (see declared variants)) | Evaluation result for each candidate delivery method, keyed by its method ID. `candidate_outcomes{}`: [declared alternatives](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomes). |
| `evaluation_status` | Required | string | How completely Flint evaluated the group's candidate delivery methods. Values: `"complete"`, `"incomplete"`, `"degraded"`. |
| `execution_legs` | Optional | Array of [DeliveryQuoteExecutionLegResource](../models/DeliveryQuoteExecutionLegResource.md#deliveryquoteexecutionlegresource) | Where the group's items leave from, one leg per origin Location, when all of its methods leave from the same Locations. Omitted when the origin depends on the chosen method, such as shipping from a warehouse or picking up at a store. Each option then lists its own execution_legs. `execution_legs[]`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesoptionexecution_legs). |
| `input_requirements` | Required | Array of [DeliveryInputRequirement](../models/DeliveryInputRequirement.md#deliveryinputrequirement) | Inputs this group's delivery methods need before they can be priced. `input_requirements[]`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesinput_requirements). |
| `line_items` | Required | Array of [DeliveryQuoteLineItemResource](../models/DeliveryQuoteLineItemResource.md#deliveryquotelineitemresource) | Order line items, or bundle components, this group covers, with the quantity covered. `line_items[]`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupsline_items). |
| `options` | Required | Array of [DeliveryOptionProjection](../models/DeliveryOptionProjection.md#deliveryoptionprojection) | Delivery options available for these items. `options[]`: [field definitions](../models/DeliveryPreviewChoiceGroupResource.md#deliverypreviewchoicegroupresourceoptions). |

### DeliveryPreviewChoiceGroupResource.candidate_outcomes{}

Declared alternatives: [CheckoutSessionResponse.data.delivery.choice_groups[].candidate_outcomes{}](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomes).

### DeliveryPreviewChoiceGroupResource.execution_legs[]

Field definitions: [CheckoutSessionResponse.data.delivery.choice_groups[].candidate_outcomes{}.option.execution_legs[]](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesoptionexecution_legs).

### DeliveryPreviewChoiceGroupResource.input_requirements[]

Field definitions: [CheckoutSessionResponse.data.delivery.choice_groups[].candidate_outcomes{}.input_requirements[]](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesinput_requirements).

### DeliveryPreviewChoiceGroupResource.line_items[]

Field definitions: [CheckoutSessionResponse.data.delivery.choice_groups[].line_items[]](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupsline_items).

### DeliveryPreviewChoiceGroupResource.options[]

A delivery option in a quote or preview: its price, type, timing, delivery plan, execution legs, and shipment, pickup, or local delivery details.

Field definitions: [shared fields](CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesoption).

### DeliveryPreviewChoiceGroupResource.options[].arrival_estimate

Field definitions: [CheckoutSessionResponse.data.delivery.choice_groups[].candidate_outcomes{}.option.arrival_estimate](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesoptionarrival_estimate).

### DeliveryPreviewChoiceGroupResource.options[].delivery_plan

Field definitions: [CheckoutSessionResponse.data.delivery.choice_groups[].candidate_outcomes{}.option.delivery_plan](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesoptiondelivery_plan).

### DeliveryPreviewChoiceGroupResource.options[].execution_legs[]

Field definitions: [CheckoutSessionResponse.data.delivery.choice_groups[].candidate_outcomes{}.option.execution_legs[]](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesoptionexecution_legs).

### DeliveryPreviewChoiceGroupResource.options[].offered_windows[]

Field definitions: [CheckoutSessionResponse.data.delivery.choice_groups[].candidate_outcomes{}.input_requirements[].constraint.offered_windows[]](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesinput_requirementsconstraintoffered_windows).

