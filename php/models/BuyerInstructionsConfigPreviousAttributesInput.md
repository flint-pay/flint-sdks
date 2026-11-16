[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerInstructionsConfigPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `enabled` | Optional | boolean or null | Whether checkout collects buyer instructions. `enabled`: [declared alternatives](../models/BuyerInstructionsConfigPreviousAttributesInput.md#buyerinstructionsconfigpreviousattributesinputenabled). |
| `label` | Optional | string or null | Checkout field label, without leading or trailing whitespace. Clients use a delivery-type default when omitted. `label`: [declared alternatives](../models/BuyerInstructionsConfigPreviousAttributesInput.md#buyerinstructionsconfigpreviousattributesinputlabel). |
| `placeholder` | Optional | string or null | Checkout field placeholder, without leading or trailing whitespace. Clients use a delivery-type default when omitted. `placeholder`: [declared alternatives](../models/BuyerInstructionsConfigPreviousAttributesInput.md#buyerinstructionsconfigpreviousattributesinputplaceholder). |
| `required` | Optional | boolean or null | Whether the buyer must enter instructions before selecting the option. Requires enabled=true. `required`: [declared alternatives](../models/BuyerInstructionsConfigPreviousAttributesInput.md#buyerinstructionsconfigpreviousattributesinputrequired). |

### BuyerInstructionsConfigPreviousAttributesInput.enabled

### BuyerInstructionsConfigPreviousAttributesInput.enabled variant 1

anyOf variant 1: Whether checkout collects buyer instructions..

- Value shape: boolean. Whether checkout collects buyer instructions. 

### BuyerInstructionsConfigPreviousAttributesInput.enabled variant 2

anyOf variant 2.

- Value shape: null. Whether checkout collects buyer instructions. 

### BuyerInstructionsConfigPreviousAttributesInput.label

### BuyerInstructionsConfigPreviousAttributesInput.label variant 1

anyOf variant 1: Checkout field label, without leading or trailing whitespace. Clients use a delivery-type default when omitted..

- Value shape: string. Checkout field label, without leading or trailing whitespace. Clients use a delivery-type default when omitted. Checkout field label, without leading or trailing whitespace. Clients use a delivery-type default when omitted. minLength: `1`. maxLength: `255`. 

### BuyerInstructionsConfigPreviousAttributesInput.label variant 2

anyOf variant 2.

- Value shape: null. Checkout field label, without leading or trailing whitespace. Clients use a delivery-type default when omitted. 

### BuyerInstructionsConfigPreviousAttributesInput.placeholder

### BuyerInstructionsConfigPreviousAttributesInput.placeholder variant 1

anyOf variant 1: Checkout field placeholder, without leading or trailing whitespace. Clients use a delivery-type default when omitted..

- Value shape: string. Checkout field placeholder, without leading or trailing whitespace. Clients use a delivery-type default when omitted. Checkout field placeholder, without leading or trailing whitespace. Clients use a delivery-type default when omitted. minLength: `1`. maxLength: `500`. 

### BuyerInstructionsConfigPreviousAttributesInput.placeholder variant 2

anyOf variant 2.

- Value shape: null. Checkout field placeholder, without leading or trailing whitespace. Clients use a delivery-type default when omitted. 

### BuyerInstructionsConfigPreviousAttributesInput.required

### BuyerInstructionsConfigPreviousAttributesInput.required variant 1

anyOf variant 1: Whether the buyer must enter instructions before selecting the option. Requires enabled=true..

- Value shape: boolean. Whether the buyer must enter instructions before selecting the option. Requires enabled=true. 

### BuyerInstructionsConfigPreviousAttributesInput.required variant 2

anyOf variant 2.

- Value shape: null. Whether the buyer must enter instructions before selecting the option. Requires enabled=true. 

