[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryQuoteChoiceGroupResourcePreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address_advisories` | Optional | Array of [DeliveryAddressAdvisoryResourcePreviousAttributesInput](../models/DeliveryAddressAdvisoryResourcePreviousAttributesInput.md#deliveryaddressadvisoryresourcepreviousattributesinput) or null | Buyer-actionable address verification results that affected this choice group. A suggested_address is an explicit correction the buyer may confirm; Flint does not apply it silently. `address_advisories`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesInput.md#deliveryquotechoicegroupresourcepreviousattributesinputaddress_advisories). |
| `allowed_types` | Optional | Array of string or null | Delivery types permitted by this group's items. `allowed_types`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesInput.md#deliveryquotechoicegroupresourcepreviousattributesinputallowed_types). |
| `availability_status` | Optional | string or null | Whether this group has a delivery option the buyer can choose. Values: `"ready"`, `"needs_input"`, `"unavailable"`. `availability_status`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesInput.md#deliveryquotechoicegroupresourcepreviousattributesinputavailability_status). |
| `candidate_outcomes` | Optional | Map of [DeliveryCandidateOutcomeResourcePreviousAttributesInput](../models/DeliveryCandidateOutcomeResourcePreviousAttributesInput.md#deliverycandidateoutcomeresourcepreviousattributesinput) or null | Evaluation result for each candidate delivery method, keyed by its method ID. `candidate_outcomes`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesInput.md#deliveryquotechoicegroupresourcepreviousattributesinputcandidate_outcomes). |
| `delivery_choice_group_id` | Optional | string or null | Identifier used to choose one option for this group. `delivery_choice_group_id`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesInput.md#deliveryquotechoicegroupresourcepreviousattributesinputdelivery_choice_group_id). |
| `evaluation_status` | Optional | string or null | How completely Flint evaluated the group's candidate delivery methods. Values: `"complete"`, `"incomplete"`, `"degraded"`. `evaluation_status`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesInput.md#deliveryquotechoicegroupresourcepreviousattributesinputevaluation_status). |
| `execution_legs` | Optional | Array of [DeliveryQuoteExecutionLegResourcePreviousAttributesInput](../models/DeliveryQuoteExecutionLegResourcePreviousAttributesInput.md#deliveryquoteexecutionlegresourcepreviousattributesinput) or null | Where the group's items leave from, one leg per origin Location, when all of its methods leave from the same Locations. Omitted when the origin depends on the chosen method, such as shipping from a warehouse or picking up at a store. Each option then lists its own execution_legs. `execution_legs`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesInput.md#deliveryquotechoicegroupresourcepreviousattributesinputexecution_legs). |
| `input_requirements` | Optional | Array of [DeliveryInputRequirementPreviousAttributesInput](../models/DeliveryInputRequirementPreviousAttributesInput.md#deliveryinputrequirementpreviousattributesinput) or null | Inputs this group's delivery methods need before they can be priced or selected. `input_requirements`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesInput.md#deliveryquotechoicegroupresourcepreviousattributesinputinput_requirements). |
| `line_items` | Optional | Array of [DeliveryQuoteLineItemResourcePreviousAttributesInput](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinput) or null | Order line items, or bundle components, this group covers, with the quantity covered. `line_items`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesInput.md#deliveryquotechoicegroupresourcepreviousattributesinputline_items). |
| `method_types` | Optional | Array of string or null | Types of the delivery methods that can serve this group's items, each listed once, in the order the methods display. A type is listed before its options are priced, such as a local delivery that waits for the buyer's address, and stays listed while its methods need more input or cannot serve the current input. options lists what the buyer can choose now. A method whose type these items do not allow is left out, and the list is empty when no method can serve them. Items values: `"shipment"`, `"pickup"`, `"local_delivery"`. `method_types`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesInput.md#deliveryquotechoicegroupresourcepreviousattributesinputmethod_types). |
| `options` | Optional | Array of [DeliveryOptionProjectionPreviousAttributesInput](../models/DeliveryOptionProjectionPreviousAttributesInput.md#deliveryoptionprojectionpreviousattributesinput) or null | Delivery options the buyer can choose now. `options`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesInput.md#deliveryquotechoicegroupresourcepreviousattributesinputoptions). |
| `pickup_unavailable` | Optional | boolean or null | The requested pickup Location or the order's fixed inventory Location cannot be served by this group's pickup methods. `pickup_unavailable`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesInput.md#deliveryquotechoicegroupresourcepreviousattributesinputpickup_unavailable). |
| `previously_selected_delivery_method_id` | Optional | string or null | Method chosen for this group in the previous selection. Omitted when there is none. `previously_selected_delivery_method_id`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesInput.md#deliveryquotechoicegroupresourcepreviousattributesinputpreviously_selected_delivery_method_id). |
| `stable_key` | Optional | string or null | Identifies the same group across quotes for the same delivery demands and compatible delivery types. It can change when the grouping inputs change. `stable_key`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesInput.md#deliveryquotechoicegroupresourcepreviousattributesinputstable_key). |

### DeliveryQuoteChoiceGroupResourcePreviousAttributesInput.address_advisories

### DeliveryQuoteChoiceGroupResourcePreviousAttributesInput.address_advisories variant 1

anyOf variant 1: Buyer-actionable address verification results that affected this choice group. A suggested_address is an explicit correction the buyer may confirm; Flint does not apply it silently..

- Value shape: Array of [DeliveryAddressAdvisoryResourcePreviousAttributesInput](../models/DeliveryAddressAdvisoryResourcePreviousAttributesInput.md#deliveryaddressadvisoryresourcepreviousattributesinput). Buyer-actionable address verification results that affected this choice group. A suggested_address is an explicit correction the buyer may confirm; Flint does not apply it silently. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesInput.address_advisories variant 2

anyOf variant 2.

- Value shape: null. Buyer-actionable address verification results that affected this choice group. A suggested_address is an explicit correction the buyer may confirm; Flint does not apply it silently. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesInput.allowed_types

### DeliveryQuoteChoiceGroupResourcePreviousAttributesInput.allowed_types variant 1

anyOf variant 1: Delivery types permitted by this group's items..

- Value shape: Array of string. Delivery types permitted by this group's items. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesInput.allowed_types variant 2

anyOf variant 2.

- Value shape: null. Delivery types permitted by this group's items. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesInput.availability_status

### DeliveryQuoteChoiceGroupResourcePreviousAttributesInput.availability_status variant 1

anyOf variant 1: Whether this group has a delivery option the buyer can choose..

- Value shape: string. Whether this group has a delivery option the buyer can choose. Values: `"ready"`, `"needs_input"`, `"unavailable"`.

### DeliveryQuoteChoiceGroupResourcePreviousAttributesInput.availability_status variant 2

anyOf variant 2.

- Value shape: null. Whether this group has a delivery option the buyer can choose. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesInput.candidate_outcomes

### DeliveryQuoteChoiceGroupResourcePreviousAttributesInput.candidate_outcomes variant 1

anyOf variant 1.

- Value shape: (Map of ([DeliveryCandidateOutcomeResourcePreviousAttributesInput](../models/DeliveryCandidateOutcomeResourcePreviousAttributesInput.md#deliverycandidateoutcomeresourcepreviousattributesinput) and ([DeliveryCandidateOutcomeResourceAvailablePreviousAttributesInput](../models/DeliveryCandidateOutcomeResourceAvailablePreviousAttributesInput.md#deliverycandidateoutcomeresourceavailablepreviousattributesinput) or [DeliveryCandidateOutcomeResourceUnavailablePreviousAttributesInput](../models/DeliveryCandidateOutcomeResourceUnavailablePreviousAttributesInput.md#deliverycandidateoutcomeresourceunavailablepreviousattributesinput) or [DeliveryCandidateOutcomeResourceInputRequiredPreviousAttributesInput](../models/DeliveryCandidateOutcomeResourceInputRequiredPreviousAttributesInput.md#deliverycandidateoutcomeresourceinputrequiredpreviousattributesinput) or [DeliveryCandidateOutcomeResourceCannotCalculatePreviousAttributesInput](../models/DeliveryCandidateOutcomeResourceCannotCalculatePreviousAttributesInput.md#deliverycandidateoutcomeresourcecannotcalculatepreviousattributesinput) or [DeliveryCandidateOutcomeResourceRequiresCheckoutContextPreviousAttributesInput](../models/DeliveryCandidateOutcomeResourceRequiresCheckoutContextPreviousAttributesInput.md#deliverycandidateoutcomeresourcerequirescheckoutcontextpreviousattributesinput)))). Evaluation result for each candidate delivery method, keyed by its method ID. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesInput.candidate_outcomes variant 2

anyOf variant 2.

- Value shape: null. Evaluation result for each candidate delivery method, keyed by its method ID. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesInput.delivery_choice_group_id

### DeliveryQuoteChoiceGroupResourcePreviousAttributesInput.delivery_choice_group_id variant 1

anyOf variant 1: Identifier used to choose one option for this group..

- Value shape: string. Identifier used to choose one option for this group. Identifier used to choose one option for this group. Example: `"dcgrp_01KEZF7C00KYKJQ897HWM86AT8"`. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesInput.delivery_choice_group_id variant 2

anyOf variant 2.

- Value shape: null. Identifier used to choose one option for this group. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesInput.evaluation_status

### DeliveryQuoteChoiceGroupResourcePreviousAttributesInput.evaluation_status variant 1

anyOf variant 1: How completely Flint evaluated the group's candidate delivery methods..

- Value shape: string. How completely Flint evaluated the group's candidate delivery methods. Values: `"complete"`, `"incomplete"`, `"degraded"`.

### DeliveryQuoteChoiceGroupResourcePreviousAttributesInput.evaluation_status variant 2

anyOf variant 2.

- Value shape: null. How completely Flint evaluated the group's candidate delivery methods. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesInput.execution_legs

### DeliveryQuoteChoiceGroupResourcePreviousAttributesInput.execution_legs variant 1

anyOf variant 1: Where the group's items leave from, one leg per origin Location, when all of its methods leave from the same Locations. Omitted when the origin depends on the chosen method, such as shipping from a warehouse or picking up at a store. Each option then lists its own execution_legs..

- Value shape: Array of [DeliveryQuoteExecutionLegResourcePreviousAttributesInput](../models/DeliveryQuoteExecutionLegResourcePreviousAttributesInput.md#deliveryquoteexecutionlegresourcepreviousattributesinput). Where the group's items leave from, one leg per origin Location, when all of its methods leave from the same Locations. Omitted when the origin depends on the chosen method, such as shipping from a warehouse or picking up at a store. Each option then lists its own execution_legs. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesInput.execution_legs variant 2

anyOf variant 2.

- Value shape: null. Where the group's items leave from, one leg per origin Location, when all of its methods leave from the same Locations. Omitted when the origin depends on the chosen method, such as shipping from a warehouse or picking up at a store. Each option then lists its own execution_legs. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesInput.input_requirements

### DeliveryQuoteChoiceGroupResourcePreviousAttributesInput.input_requirements variant 1

anyOf variant 1: Inputs this group's delivery methods need before they can be priced or selected..

- Value shape: Array of [DeliveryInputRequirementPreviousAttributesInput](../models/DeliveryInputRequirementPreviousAttributesInput.md#deliveryinputrequirementpreviousattributesinput). Inputs this group's delivery methods need before they can be priced or selected. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesInput.input_requirements variant 2

anyOf variant 2.

- Value shape: null. Inputs this group's delivery methods need before they can be priced or selected. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesInput.line_items

### DeliveryQuoteChoiceGroupResourcePreviousAttributesInput.line_items variant 1

anyOf variant 1: Order line items, or bundle components, this group covers, with the quantity covered..

- Value shape: Array of [DeliveryQuoteLineItemResourcePreviousAttributesInput](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinput). Order line items, or bundle components, this group covers, with the quantity covered. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesInput.line_items variant 2

anyOf variant 2.

- Value shape: null. Order line items, or bundle components, this group covers, with the quantity covered. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesInput.method_types

### DeliveryQuoteChoiceGroupResourcePreviousAttributesInput.method_types variant 1

anyOf variant 1: Types of the delivery methods that can serve this group's items, each listed once, in the order the methods display. A type is listed before its options are priced, such as a local delivery that waits for the buyer's address, and stays listed while its methods need more input or cannot serve the current input. options lists what the buyer can choose now. A method whose type these items do not allow is left out, and the list is empty when no method can serve them..

- Value shape: Array of string. Types of the delivery methods that can serve this group's items, each listed once, in the order the methods display. A type is listed before its options are priced, such as a local delivery that waits for the buyer's address, and stays listed while its methods need more input or cannot serve the current input. options lists what the buyer can choose now. A method whose type these items do not allow is left out, and the list is empty when no method can serve them. Items values: `"shipment"`, `"pickup"`, `"local_delivery"`.

### DeliveryQuoteChoiceGroupResourcePreviousAttributesInput.method_types variant 2

anyOf variant 2.

- Value shape: null. Types of the delivery methods that can serve this group's items, each listed once, in the order the methods display. A type is listed before its options are priced, such as a local delivery that waits for the buyer's address, and stays listed while its methods need more input or cannot serve the current input. options lists what the buyer can choose now. A method whose type these items do not allow is left out, and the list is empty when no method can serve them. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesInput.options

### DeliveryQuoteChoiceGroupResourcePreviousAttributesInput.options variant 1

anyOf variant 1: Delivery options the buyer can choose now..

- Value shape: Array of [DeliveryOptionProjectionPreviousAttributesInput](../models/DeliveryOptionProjectionPreviousAttributesInput.md#deliveryoptionprojectionpreviousattributesinput). Delivery options the buyer can choose now. Items: A delivery option in a quote or preview: its price, type, timing, delivery plan, execution legs, and shipment, pickup, or local delivery details. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesInput.options variant 2

anyOf variant 2.

- Value shape: null. Delivery options the buyer can choose now. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesInput.pickup_unavailable

### DeliveryQuoteChoiceGroupResourcePreviousAttributesInput.pickup_unavailable variant 1

anyOf variant 1: The requested pickup Location or the order's fixed inventory Location cannot be served by this group's pickup methods..

- Value shape: boolean. The requested pickup Location or the order's fixed inventory Location cannot be served by this group's pickup methods. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesInput.pickup_unavailable variant 2

anyOf variant 2.

- Value shape: null. The requested pickup Location or the order's fixed inventory Location cannot be served by this group's pickup methods. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesInput.previously_selected_delivery_method_id

### DeliveryQuoteChoiceGroupResourcePreviousAttributesInput.previously_selected_delivery_method_id variant 1

anyOf variant 1: Method chosen for this group in the previous selection. Omitted when there is none..

- Value shape: string. Method chosen for this group in the previous selection. Omitted when there is none. Method chosen for this group in the previous selection. Omitted when there is none. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesInput.previously_selected_delivery_method_id variant 2

anyOf variant 2.

- Value shape: null. Method chosen for this group in the previous selection. Omitted when there is none. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesInput.stable_key

### DeliveryQuoteChoiceGroupResourcePreviousAttributesInput.stable_key variant 1

anyOf variant 1: Identifies the same group across quotes for the same delivery demands and compatible delivery types. It can change when the grouping inputs change..

- Value shape: string. Identifies the same group across quotes for the same delivery demands and compatible delivery types. It can change when the grouping inputs change. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributesInput.stable_key variant 2

anyOf variant 2.

- Value shape: null. Identifies the same group across quotes for the same delivery demands and compatible delivery types. It can change when the grouping inputs change. 

