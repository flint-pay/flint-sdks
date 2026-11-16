[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerInstructionsConfigPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `enabled` | Optional | boolean or null | Whether checkout collects buyer instructions. `enabled`: [declared alternatives](../models/BuyerInstructionsConfigPreviousAttributes.md#buyerinstructionsconfigpreviousattributesenabled). |
| `label` | Optional | string or null | Checkout field label, without leading or trailing whitespace. Clients use a delivery-type default when omitted. `label`: [declared alternatives](../models/BuyerInstructionsConfigPreviousAttributes.md#buyerinstructionsconfigpreviousattributeslabel). |
| `placeholder` | Optional | string or null | Checkout field placeholder, without leading or trailing whitespace. Clients use a delivery-type default when omitted. `placeholder`: [declared alternatives](../models/BuyerInstructionsConfigPreviousAttributes.md#buyerinstructionsconfigpreviousattributesplaceholder). |
| `required` | Optional | boolean or null | Whether the buyer must enter instructions before selecting the option. Requires enabled=true. `required`: [declared alternatives](../models/BuyerInstructionsConfigPreviousAttributes.md#buyerinstructionsconfigpreviousattributesrequired). |

### BuyerInstructionsConfigPreviousAttributes.enabled

### BuyerInstructionsConfigPreviousAttributes.enabled variant 1

anyOf variant 1: Whether checkout collects buyer instructions..

- Value shape: boolean. Whether checkout collects buyer instructions. 

### BuyerInstructionsConfigPreviousAttributes.enabled variant 2

anyOf variant 2.

- Value shape: null. Whether checkout collects buyer instructions. 

### BuyerInstructionsConfigPreviousAttributes.label

### BuyerInstructionsConfigPreviousAttributes.label variant 1

anyOf variant 1: Checkout field label, without leading or trailing whitespace. Clients use a delivery-type default when omitted..

- Value shape: string. Checkout field label, without leading or trailing whitespace. Clients use a delivery-type default when omitted. Checkout field label, without leading or trailing whitespace. Clients use a delivery-type default when omitted. minLength: `1`. maxLength: `255`. 

### BuyerInstructionsConfigPreviousAttributes.label variant 2

anyOf variant 2.

- Value shape: null. Checkout field label, without leading or trailing whitespace. Clients use a delivery-type default when omitted. 

### BuyerInstructionsConfigPreviousAttributes.placeholder

### BuyerInstructionsConfigPreviousAttributes.placeholder variant 1

anyOf variant 1: Checkout field placeholder, without leading or trailing whitespace. Clients use a delivery-type default when omitted..

- Value shape: string. Checkout field placeholder, without leading or trailing whitespace. Clients use a delivery-type default when omitted. Checkout field placeholder, without leading or trailing whitespace. Clients use a delivery-type default when omitted. minLength: `1`. maxLength: `500`. 

### BuyerInstructionsConfigPreviousAttributes.placeholder variant 2

anyOf variant 2.

- Value shape: null. Checkout field placeholder, without leading or trailing whitespace. Clients use a delivery-type default when omitted. 

### BuyerInstructionsConfigPreviousAttributes.required

### BuyerInstructionsConfigPreviousAttributes.required variant 1

anyOf variant 1: Whether the buyer must enter instructions before selecting the option. Requires enabled=true..

- Value shape: boolean. Whether the buyer must enter instructions before selecting the option. Requires enabled=true. 

### BuyerInstructionsConfigPreviousAttributes.required variant 2

anyOf variant 2.

- Value shape: null. Whether the buyer must enter instructions before selecting the option. Requires enabled=true. 

