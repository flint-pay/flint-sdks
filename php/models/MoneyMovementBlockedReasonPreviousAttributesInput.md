[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MoneyMovementBlockedReasonPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Optional | string or null | Code of the error the blocked action would return. `code`: [declared alternatives](../models/MoneyMovementBlockedReasonPreviousAttributesInput.md#moneymovementblockedreasonpreviousattributesinputcode). |
| `message` | Optional | string or null | Why the action is blocked. `message`: [declared alternatives](../models/MoneyMovementBlockedReasonPreviousAttributesInput.md#moneymovementblockedreasonpreviousattributesinputmessage). |
| `next_steps` | Optional | string or null | What to do to unblock the action. `next_steps`: [declared alternatives](../models/MoneyMovementBlockedReasonPreviousAttributesInput.md#moneymovementblockedreasonpreviousattributesinputnext_steps). |
| `param` | Optional | string or null | The request field the block concerns. `param`: [declared alternatives](../models/MoneyMovementBlockedReasonPreviousAttributesInput.md#moneymovementblockedreasonpreviousattributesinputparam). |
| `resolution_owner` | Optional | string or null | Who can resolve the block. Values: `"merchant"`, `"flint"`, `"integrator"`, `"buyer"`. `resolution_owner`: [declared alternatives](../models/MoneyMovementBlockedReasonPreviousAttributesInput.md#moneymovementblockedreasonpreviousattributesinputresolution_owner). |
| `retryable` | Optional | boolean or null | Whether trying the action again after the block clears can succeed. `retryable`: [declared alternatives](../models/MoneyMovementBlockedReasonPreviousAttributesInput.md#moneymovementblockedreasonpreviousattributesinputretryable). |

### MoneyMovementBlockedReasonPreviousAttributesInput.code

### MoneyMovementBlockedReasonPreviousAttributesInput.code variant 1

anyOf variant 1: Code of the error the blocked action would return..

- Value shape: string. Code of the error the blocked action would return. 

### MoneyMovementBlockedReasonPreviousAttributesInput.code variant 2

anyOf variant 2.

- Value shape: null. Code of the error the blocked action would return. 

### MoneyMovementBlockedReasonPreviousAttributesInput.message

### MoneyMovementBlockedReasonPreviousAttributesInput.message variant 1

anyOf variant 1: Why the action is blocked..

- Value shape: string. Why the action is blocked. 

### MoneyMovementBlockedReasonPreviousAttributesInput.message variant 2

anyOf variant 2.

- Value shape: null. Why the action is blocked. 

### MoneyMovementBlockedReasonPreviousAttributesInput.next_steps

### MoneyMovementBlockedReasonPreviousAttributesInput.next_steps variant 1

anyOf variant 1: What to do to unblock the action..

- Value shape: string. What to do to unblock the action. 

### MoneyMovementBlockedReasonPreviousAttributesInput.next_steps variant 2

anyOf variant 2.

- Value shape: null. What to do to unblock the action. 

### MoneyMovementBlockedReasonPreviousAttributesInput.param

### MoneyMovementBlockedReasonPreviousAttributesInput.param variant 1

anyOf variant 1: The request field the block concerns..

- Value shape: string. The request field the block concerns. 

### MoneyMovementBlockedReasonPreviousAttributesInput.param variant 2

anyOf variant 2.

- Value shape: null. The request field the block concerns. 

### MoneyMovementBlockedReasonPreviousAttributesInput.resolution_owner

### MoneyMovementBlockedReasonPreviousAttributesInput.resolution_owner variant 1

anyOf variant 1: Who can resolve the block..

- Value shape: string. Who can resolve the block. Values: `"merchant"`, `"flint"`, `"integrator"`, `"buyer"`.

### MoneyMovementBlockedReasonPreviousAttributesInput.resolution_owner variant 2

anyOf variant 2.

- Value shape: null. Who can resolve the block. 

### MoneyMovementBlockedReasonPreviousAttributesInput.retryable

### MoneyMovementBlockedReasonPreviousAttributesInput.retryable variant 1

anyOf variant 1: Whether trying the action again after the block clears can succeed..

- Value shape: boolean. Whether trying the action again after the block clears can succeed. 

### MoneyMovementBlockedReasonPreviousAttributesInput.retryable variant 2

anyOf variant 2.

- Value shape: null. Whether trying the action again after the block clears can succeed. 

