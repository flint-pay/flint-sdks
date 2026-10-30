[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerInstructionsConfig







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `enabled` | Required | boolean | Whether checkout collects buyer instructions. |
| `label` | Optional | string | Checkout field label, without leading or trailing whitespace. Clients use a delivery-type default when omitted. minLength: `1`. maxLength: `255`. |
| `placeholder` | Optional | string | Checkout field placeholder, without leading or trailing whitespace. Clients use a delivery-type default when omitted. minLength: `1`. maxLength: `500`. |
| `required` | Required | boolean | Whether the buyer must enter instructions before selecting the option. Requires enabled=true. |

### BuyerInstructionsConfig variant 1

anyOf variant 1: Declared schema BuyerInstructionsConfig. Controls buyer instructions for a delivery option. Omit it from a method configuration to disable instruction collection..

No additional constraints.

### BuyerInstructionsConfig variant 2

anyOf variant 2: Declared schema BuyerInstructionsConfigRequest. Controls buyer instructions for a delivery option. Omit it from a method configuration to disable instruction collection..

No additional constraints.

