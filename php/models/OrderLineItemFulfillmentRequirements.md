[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderLineItemFulfillmentRequirements

Fulfillment requirements for an order line item, given for a single item or for each component of a bundle.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `components` | Optional | Array of [OrderLineItemFulfillmentComponent](../models/OrderLineItemFulfillmentComponent.md#orderlineitemfulfillmentcomponent) | Fulfillment requirements for each bundle component. Present for bundle lines. |
| `direct` | Optional | [OrderLineItemFulfillmentProfile](../models/OrderLineItemFulfillmentProfile.md#orderlineitemfulfillmentprofile) | Fulfillment requirements for a single item. Present for non-bundle lines. Whether an order line item requires fulfillment, and the fulfillment types it allows. |

