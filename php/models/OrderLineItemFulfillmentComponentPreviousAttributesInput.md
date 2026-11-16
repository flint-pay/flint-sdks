[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderLineItemFulfillmentComponentPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_component_id` | Optional | string or null | ID of the bundle component these requirements apply to. `bundle_component_id`: [declared alternatives](../models/OrderLineItemFulfillmentComponentPreviousAttributesInput.md#orderlineitemfulfillmentcomponentpreviousattributesinputbundle_component_id). |
| `profile` | Optional | [OrderLineItemFulfillmentProfilePreviousAttributesInput](../models/OrderLineItemFulfillmentProfilePreviousAttributesInput.md#orderlineitemfulfillmentprofilepreviousattributesinput) or null | Fulfillment requirements for this component. |
| `quantity_per_line_item_unit` | Optional | integer or null | Number of this component per unit of the order line item; fractional quantities are not supported. `quantity_per_line_item_unit`: [declared alternatives](../models/OrderLineItemFulfillmentComponentPreviousAttributesInput.md#orderlineitemfulfillmentcomponentpreviousattributesinputquantity_per_line_item_unit). |

### OrderLineItemFulfillmentComponentPreviousAttributesInput.bundle_component_id

### OrderLineItemFulfillmentComponentPreviousAttributesInput.bundle_component_id variant 1

anyOf variant 1: ID of the bundle component these requirements apply to..

- Value shape: string. ID of the bundle component these requirements apply to. ID of the bundle component these requirements apply to. Example: `"bunc_01KEZF7C00CQASEZGAPEANTGD1"`. 

### OrderLineItemFulfillmentComponentPreviousAttributesInput.bundle_component_id variant 2

anyOf variant 2.

- Value shape: null. ID of the bundle component these requirements apply to. 

### OrderLineItemFulfillmentComponentPreviousAttributesInput.quantity_per_line_item_unit

### OrderLineItemFulfillmentComponentPreviousAttributesInput.quantity_per_line_item_unit variant 1

anyOf variant 1: Number of this component per unit of the order line item; fractional quantities are not supported..

- Value shape: integer. Number of this component per unit of the order line item; fractional quantities are not supported. Number of this component per unit of the order line item; fractional quantities are not supported. Format: `int64`. 

### OrderLineItemFulfillmentComponentPreviousAttributesInput.quantity_per_line_item_unit variant 2

anyOf variant 2.

- Value shape: null. Number of this component per unit of the order line item; fractional quantities are not supported. 

