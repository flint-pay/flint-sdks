[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderLineItemFulfillmentRequirements

Fulfillment requirements for an order line item, given for a single item or for each component of a bundle.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `components` | Optional | Array of [OrderLineItemFulfillmentComponent](../models/OrderLineItemFulfillmentComponent.md#orderlineitemfulfillmentcomponent) | Fulfillment requirements for each bundle component. Present for bundle lines. `components[]`: [field definitions](../models/OrderLineItemFulfillmentRequirements.md#orderlineitemfulfillmentrequirementscomponents). |
| `direct` | Optional | [OrderLineItemFulfillmentProfile](../models/OrderLineItemFulfillmentProfile.md#orderlineitemfulfillmentprofile) | Fulfillment requirements for a single item. Present for non-bundle lines. Whether an order line item requires fulfillment, and the fulfillment types it allows. |

### OrderLineItemFulfillmentRequirements.components[]

Fulfillment requirements for one component of a bundle line item, with the component quantity per unit.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_component_id` | Required | string | ID of the bundle component these requirements apply to. Example: `"bunc_01KEZF7C00CQASEZGAPEANTGD1"`. |
| `profile` | Required | [OrderLineItemFulfillmentProfile](../models/OrderLineItemFulfillmentProfile.md#orderlineitemfulfillmentprofile) or null | Fulfillment requirements for this component. |
| `quantity_per_line_item_unit` | Required | integer | Number of this component per unit of the order line item; fractional quantities are not supported. Format: `int64`. |

