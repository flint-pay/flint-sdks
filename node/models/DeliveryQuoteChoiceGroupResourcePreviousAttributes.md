[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryQuoteChoiceGroupResourcePreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address_advisories` | Optional | Array of [DeliveryAddressAdvisoryResourcePreviousAttributes](../models/DeliveryAddressAdvisoryResourcePreviousAttributes.md#deliveryaddressadvisoryresourcepreviousattributes) or null | Buyer-actionable address verification results that affected this choice group. A suggested_address is an explicit correction the buyer may confirm; Flint does not apply it silently. `address_advisories`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributesaddress_advisories). |
| `allowed_types` | Optional | Array of string or null | Delivery types permitted by this group's items. `allowed_types`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributesallowed_types). |
| `availability_status` | Optional | string or null | Whether this group has a delivery option the buyer can choose. Values: `"ready"`, `"needs_input"`, `"unavailable"`. `availability_status`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributesavailability_status). |
| `candidate_outcomes` | Optional | Map of [DeliveryCandidateOutcomeResourcePreviousAttributes](../models/DeliveryCandidateOutcomeResourcePreviousAttributes.md#deliverycandidateoutcomeresourcepreviousattributes) or null | Evaluation result for each candidate delivery method, keyed by its method ID. `candidate_outcomes`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributescandidate_outcomes). |
| `delivery_choice_group_id` | Optional | string or null | Identifier used to choose one option for this group. `delivery_choice_group_id`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributesdelivery_choice_group_id). |
| `evaluation_status` | Optional | string or null | How completely Flint evaluated the group's candidate delivery methods. Values: `"complete"`, `"incomplete"`, `"degraded"`. `evaluation_status`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributesevaluation_status). |
| `execution_legs` | Optional | Array of [DeliveryQuoteExecutionLegResourcePreviousAttributes](../models/DeliveryQuoteExecutionLegResourcePreviousAttributes.md#deliveryquoteexecutionlegresourcepreviousattributes) or null | Where the group's items leave from, one leg per origin Location, when all of its methods leave from the same Locations. Omitted when the origin depends on the chosen method, such as shipping from a warehouse or picking up at a store. Each option then lists its own execution_legs. `execution_legs`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributesexecution_legs). |
| `input_requirements` | Optional | Array of [DeliveryInputRequirementPreviousAttributes](../models/DeliveryInputRequirementPreviousAttributes.md#deliveryinputrequirementpreviousattributes) or null | Inputs this group's delivery methods need before they can be priced or selected. `input_requirements`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributesinput_requirements). |
| `line_items` | Optional | Array of [DeliveryQuoteLineItemResourcePreviousAttributes](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributes) or null | Order line items, or bundle components, this group covers, with the quantity covered. `line_items`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributesline_items). |
| `method_types` | Optional | Array of string or null | Types of the delivery methods that can serve this group's items, each listed once, in the order the methods display. A type is listed before its options are priced, such as a local delivery that waits for the buyer's address, and stays listed while its methods need more input or cannot serve the current input. options lists what the buyer can choose now. A method whose type these items do not allow is left out, and the list is empty when no method can serve them. Items values: `"shipment"`, `"pickup"`, `"local_delivery"`. `method_types`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributesmethod_types). |
| `options` | Optional | Array of [DeliveryOptionProjectionPreviousAttributes](../models/DeliveryOptionProjectionPreviousAttributes.md#deliveryoptionprojectionpreviousattributes) or null | Delivery options the buyer can choose now. `options`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributesoptions). |
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

- Value shape: (Map of ([DeliveryCandidateOutcomeResourcePreviousAttributes](../models/DeliveryCandidateOutcomeResourcePreviousAttributes.md#deliverycandidateoutcomeresourcepreviousattributes) and ([DeliveryCandidateOutcomeResourceAvailablePreviousAttributes](../models/DeliveryCandidateOutcomeResourceAvailablePreviousAttributes.md#deliverycandidateoutcomeresourceavailablepreviousattributes) or [DeliveryCandidateOutcomeResourceUnavailablePreviousAttributes](../models/DeliveryCandidateOutcomeResourceUnavailablePreviousAttributes.md#deliverycandidateoutcomeresourceunavailablepreviousattributes) or [DeliveryCandidateOutcomeResourceInputRequiredPreviousAttributes](../models/DeliveryCandidateOutcomeResourceInputRequiredPreviousAttributes.md#deliverycandidateoutcomeresourceinputrequiredpreviousattributes) or [DeliveryCandidateOutcomeResourceCannotCalculatePreviousAttributes](../models/DeliveryCandidateOutcomeResourceCannotCalculatePreviousAttributes.md#deliverycandidateoutcomeresourcecannotcalculatepreviousattributes) or [DeliveryCandidateOutcomeResourceRequiresCheckoutContextPreviousAttributes](../models/DeliveryCandidateOutcomeResourceRequiresCheckoutContextPreviousAttributes.md#deliverycandidateoutcomeresourcerequirescheckoutcontextpreviousattributes)))). Evaluation result for each candidate delivery method, keyed by its method ID. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 2

anyOf variant 2.

- Value shape: null. Evaluation result for each candidate delivery method, keyed by its method ID. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.delivery_choice_group_id

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.delivery_choice_group_id variant 1

anyOf variant 1: Identifier used to choose one option for this group..

- Value shape: string. Identifier used to choose one option for this group. Identifier used to choose one option for this group. Example: `"dcgrp_01KEZF7C00KYKJQ897HWM86AT8"`. 

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

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.input_requirements

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.input_requirements variant 1

anyOf variant 1: Inputs this group's delivery methods need before they can be priced or selected..

- Value shape: Array of [DeliveryInputRequirementPreviousAttributes](../models/DeliveryInputRequirementPreviousAttributes.md#deliveryinputrequirementpreviousattributes). Inputs this group's delivery methods need before they can be priced or selected. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.input_requirements variant 2

anyOf variant 2.

- Value shape: null. Inputs this group's delivery methods need before they can be priced or selected. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.line_items

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.line_items variant 1

anyOf variant 1: Order line items, or bundle components, this group covers, with the quantity covered..

- Value shape: Array of [DeliveryQuoteLineItemResourcePreviousAttributes](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributes). Order line items, or bundle components, this group covers, with the quantity covered. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.line_items variant 2

anyOf variant 2.

- Value shape: null. Order line items, or bundle components, this group covers, with the quantity covered. 

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

- Value shape: Array of [DeliveryOptionProjectionPreviousAttributes](../models/DeliveryOptionProjectionPreviousAttributes.md#deliveryoptionprojectionpreviousattributes). Delivery options the buyer can choose now. Items: A delivery option in a quote or preview: its price, type, timing, delivery plan, execution legs, and shipment, pickup, or local delivery details. 

### DeliveryQuoteChoiceGroupResourcePreviousAttributes.options variant 2

anyOf variant 2.

- Value shape: null. Delivery options the buyer can choose now. 

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

- Value shape: string. Method chosen for this group in the previous selection. Omitted when there is none. Method chosen for this group in the previous selection. Omitted when there is none. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. 

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

