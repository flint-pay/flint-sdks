[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderLineItemFulfillmentRequirementsPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `components` | Optional | Array of [OrderLineItemFulfillmentComponentPreviousAttributesInput](../models/OrderLineItemFulfillmentComponentPreviousAttributesInput.md#orderlineitemfulfillmentcomponentpreviousattributesinput) or null | Fulfillment requirements for each bundle component. Present for bundle lines. `components`: [declared alternatives](../models/OrderLineItemFulfillmentRequirementsPreviousAttributesInput.md#orderlineitemfulfillmentrequirementspreviousattributesinputcomponents). |
| `direct` | Optional | [OrderLineItemFulfillmentProfilePreviousAttributesInput](../models/OrderLineItemFulfillmentProfilePreviousAttributesInput.md#orderlineitemfulfillmentprofilepreviousattributesinput) or null | Fulfillment requirements for a single item. Present for non-bundle lines. |

### OrderLineItemFulfillmentRequirementsPreviousAttributesInput.components

### OrderLineItemFulfillmentRequirementsPreviousAttributesInput.components variant 1

anyOf variant 1: Fulfillment requirements for each bundle component. Present for bundle lines..

- Value shape: Array of [OrderLineItemFulfillmentComponentPreviousAttributesInput](../models/OrderLineItemFulfillmentComponentPreviousAttributesInput.md#orderlineitemfulfillmentcomponentpreviousattributesinput). Fulfillment requirements for each bundle component. Present for bundle lines. 

### OrderLineItemFulfillmentRequirementsPreviousAttributesInput.components variant 2

anyOf variant 2.

- Value shape: null. Fulfillment requirements for each bundle component. Present for bundle lines. 

