[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderLineItemFulfillmentRequirementsPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `components` | Optional | Array of [OrderLineItemFulfillmentComponentPreviousAttributes](../models/OrderLineItemFulfillmentComponentPreviousAttributes.md#orderlineitemfulfillmentcomponentpreviousattributes) or null | Fulfillment requirements for each bundle component. Present for bundle lines. `components`: [declared alternatives](../models/OrderLineItemFulfillmentRequirementsPreviousAttributes.md#orderlineitemfulfillmentrequirementspreviousattributescomponents). |
| `direct` | Optional | [OrderLineItemFulfillmentProfilePreviousAttributes](../models/OrderLineItemFulfillmentProfilePreviousAttributes.md#orderlineitemfulfillmentprofilepreviousattributes) or null | Fulfillment requirements for a single item. Present for non-bundle lines. |

### OrderLineItemFulfillmentRequirementsPreviousAttributes.components

### OrderLineItemFulfillmentRequirementsPreviousAttributes.components variant 1

anyOf variant 1: Fulfillment requirements for each bundle component. Present for bundle lines..

- Value shape: Array of [OrderLineItemFulfillmentComponentPreviousAttributes](../models/OrderLineItemFulfillmentComponentPreviousAttributes.md#orderlineitemfulfillmentcomponentpreviousattributes). Fulfillment requirements for each bundle component. Present for bundle lines. 

### OrderLineItemFulfillmentRequirementsPreviousAttributes.components variant 2

anyOf variant 2.

- Value shape: null. Fulfillment requirements for each bundle component. Present for bundle lines. 

### OrderLineItemFulfillmentRequirementsPreviousAttributes.components variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_component_id` | Optional | string or null | ID of the bundle component these requirements apply to. `bundle_component_id`: [declared alternatives](../models/OrderLineItemFulfillmentRequirementsPreviousAttributes.md#orderlineitemfulfillmentrequirementspreviousattributescomponents-variant-1-fields-1bundle_component_id). |
| `profile` | Optional | [OrderLineItemFulfillmentProfilePreviousAttributes](../models/OrderLineItemFulfillmentProfilePreviousAttributes.md#orderlineitemfulfillmentprofilepreviousattributes) or null | Fulfillment requirements for this component. |
| `quantity_per_line_item_unit` | Optional | integer or null | Number of this component per unit of the order line item; fractional quantities are not supported. `quantity_per_line_item_unit`: [declared alternatives](../models/OrderLineItemFulfillmentComponentPreviousAttributes.md#orderlineitemfulfillmentcomponentpreviousattributesquantity_per_line_item_unit). |

### OrderLineItemFulfillmentRequirementsPreviousAttributes.components variant 1.[] fields 1.bundle_component_id

### OrderLineItemFulfillmentRequirementsPreviousAttributes.components variant 1.[] fields 1.bundle_component_id variant 1

anyOf variant 1: ID of the bundle component these requirements apply to..

- Value shape: string. ID of the bundle component these requirements apply to. ID of the bundle component these requirements apply to. Example: `"bunc_01KEZF7C00CQASEZGAPEANTGD1"`. 

### OrderLineItemFulfillmentRequirementsPreviousAttributes.components variant 1.[] fields 1.bundle_component_id variant 2

anyOf variant 2.

- Value shape: null. ID of the bundle component these requirements apply to. 

### OrderLineItemFulfillmentRequirementsPreviousAttributes.components variant 1.[] fields 1.quantity_per_line_item_unit

Declared alternatives: [OrderLineItemFulfillmentComponentPreviousAttributes.quantity_per_line_item_unit](../models/OrderLineItemFulfillmentComponentPreviousAttributes.md#orderlineitemfulfillmentcomponentpreviousattributesquantity_per_line_item_unit).

