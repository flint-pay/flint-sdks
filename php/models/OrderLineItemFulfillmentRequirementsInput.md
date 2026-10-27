[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderLineItemFulfillmentRequirementsInput

Fulfillment requirements for an order line item, given for a single item or for each component of a bundle.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `components` | Optional | Array of [OrderLineItemFulfillmentComponentInput](../models/OrderLineItemFulfillmentComponentInput.md#orderlineitemfulfillmentcomponentinput) | Fulfillment requirements for each bundle component. Present for bundle lines. |
| `direct` | Optional | [OrderLineItemFulfillmentProfileInput](../models/OrderLineItemFulfillmentProfileInput.md#orderlineitemfulfillmentprofileinput) | Fulfillment requirements for a single item. Present for non-bundle lines. Whether an order line item requires fulfillment, and the fulfillment types it allows. |

