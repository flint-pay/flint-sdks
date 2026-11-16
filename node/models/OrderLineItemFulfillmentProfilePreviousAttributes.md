[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderLineItemFulfillmentProfilePreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_types` | Optional | Array of string or null | Fulfillment types allowed for this item. Empty when fulfillment is not required. Items values: `"shipment"`, `"pickup"`, `"local_delivery"`, `"digital"`, `"service"`. `allowed_types`: [declared alternatives](../models/OrderLineItemFulfillmentProfilePreviousAttributes.md#orderlineitemfulfillmentprofilepreviousattributesallowed_types). |
| `requirement` | Optional | string or null | Whether this item requires fulfillment. Values: `"none"`, `"required"`. `requirement`: [declared alternatives](../models/OrderLineItemFulfillmentProfilePreviousAttributes.md#orderlineitemfulfillmentprofilepreviousattributesrequirement). |

### OrderLineItemFulfillmentProfilePreviousAttributes.allowed_types

### OrderLineItemFulfillmentProfilePreviousAttributes.allowed_types variant 1

anyOf variant 1: Fulfillment types allowed for this item. Empty when fulfillment is not required..

- Value shape: Array of string. Fulfillment types allowed for this item. Empty when fulfillment is not required. Items values: `"shipment"`, `"pickup"`, `"local_delivery"`, `"digital"`, `"service"`.

### OrderLineItemFulfillmentProfilePreviousAttributes.allowed_types variant 2

anyOf variant 2.

- Value shape: null. Fulfillment types allowed for this item. Empty when fulfillment is not required. 

### OrderLineItemFulfillmentProfilePreviousAttributes.requirement

### OrderLineItemFulfillmentProfilePreviousAttributes.requirement variant 1

anyOf variant 1: Whether this item requires fulfillment..

- Value shape: string. Whether this item requires fulfillment. Values: `"none"`, `"required"`.

### OrderLineItemFulfillmentProfilePreviousAttributes.requirement variant 2

anyOf variant 2.

- Value shape: null. Whether this item requires fulfillment. 

