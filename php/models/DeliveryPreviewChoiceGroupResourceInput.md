[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPreviewChoiceGroupResourceInput

One group of order items in a delivery options preview, with the options a buyer could choose, its availability status, and any input still needed.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_types` | Optional | Array of string | Delivery types permitted by this group's items. |
| `availability_status` | Required | string | Whether this group has a delivery option available. Values: `"ready"`, `"needs_input"`, `"needs_checkout_context"`, `"unavailable"`. |
| `candidate_outcomes` | Required | Map of [DeliveryCandidateOutcomeResourceInput](../models/DeliveryCandidateOutcomeResourceInput.md#deliverycandidateoutcomeresourceinput) | Evaluation result for each candidate delivery method, keyed by its method ID. |
| `evaluation_status` | Required | string | How completely Flint evaluated the group's candidate delivery methods. Values: `"complete"`, `"incomplete"`, `"degraded"`. |
| `execution_legs` | Optional | Array of [DeliveryQuoteExecutionLegResourceInput](../models/DeliveryQuoteExecutionLegResourceInput.md#deliveryquoteexecutionlegresourceinput) | Where the group's items leave from, one leg per origin Location, when all of its methods leave from the same Locations. Omitted when the origin depends on the chosen method, such as shipping from a warehouse or picking up at a store. Each option then lists its own execution_legs. |
| `input_requirements` | Required | Array of [DeliveryInputRequirementInput](../models/DeliveryInputRequirementInput.md#deliveryinputrequirementinput) | Inputs this group's delivery methods need before they can be priced. |
| `line_items` | Required | Array of [DeliveryQuoteLineItemResourceInput](../models/DeliveryQuoteLineItemResourceInput.md#deliveryquotelineitemresourceinput) | Order line items, or bundle components, this group covers, with the quantity covered. |
| `options` | Required | Array of [DeliveryOptionProjectionInput](../models/DeliveryOptionProjectionInput.md#deliveryoptionprojectioninput) | Delivery options available for these items. |

