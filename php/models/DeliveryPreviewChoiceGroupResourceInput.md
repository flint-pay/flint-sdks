[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPreviewChoiceGroupResourceInput

One group of order items in a delivery options preview, with the options a buyer could choose, its availability status, and any input still needed.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_types` | Optional | Array of string |  |
| `availability_status` | Required | string | Values: `"ready"`, `"needs_input"`, `"needs_checkout_context"`, `"unavailable"`. |
| `candidate_outcomes` | Required | Map of [DeliveryCandidateOutcomeResourceInput](../models/DeliveryCandidateOutcomeResourceInput.md#deliverycandidateoutcomeresourceinput) |  |
| `evaluation_status` | Required | string | Values: `"complete"`, `"incomplete"`, `"degraded"`. |
| `execution_legs` | Optional | Array of [DeliveryQuoteExecutionLegResourceInput](../models/DeliveryQuoteExecutionLegResourceInput.md#deliveryquoteexecutionlegresourceinput) | Where the group's items leave from, one leg per origin Location, when all of its methods leave from the same Locations. Omitted when the origin depends on the chosen method, such as shipping from a warehouse or picking up at a store. Each option then lists its own execution_legs. |
| `input_requirements` | Required | Array of [DeliveryInputRequirementInput](../models/DeliveryInputRequirementInput.md#deliveryinputrequirementinput) |  |
| `line_items` | Required | Array of [DeliveryQuoteLineItemResourceInput](../models/DeliveryQuoteLineItemResourceInput.md#deliveryquotelineitemresourceinput) |  |
| `options` | Required | Array of [DeliveryOptionProjectionInput](../models/DeliveryOptionProjectionInput.md#deliveryoptionprojectioninput) |  |

