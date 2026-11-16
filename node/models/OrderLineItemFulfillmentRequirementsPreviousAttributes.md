[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderLineItemFulfillmentRequirementsPreviousAttributes







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

