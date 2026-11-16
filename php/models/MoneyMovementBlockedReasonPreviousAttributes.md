[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MoneyMovementBlockedReasonPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Optional | string or null | Code of the error the blocked action would return. `code`: [declared alternatives](../models/MoneyMovementBlockedReasonPreviousAttributes.md#moneymovementblockedreasonpreviousattributescode). |
| `message` | Optional | string or null | Why the action is blocked. `message`: [declared alternatives](../models/MoneyMovementBlockedReasonPreviousAttributes.md#moneymovementblockedreasonpreviousattributesmessage). |
| `next_steps` | Optional | string or null | What to do to unblock the action. `next_steps`: [declared alternatives](../models/MoneyMovementBlockedReasonPreviousAttributes.md#moneymovementblockedreasonpreviousattributesnext_steps). |
| `param` | Optional | string or null | The request field the block concerns. `param`: [declared alternatives](../models/MoneyMovementBlockedReasonPreviousAttributes.md#moneymovementblockedreasonpreviousattributesparam). |
| `resolution_owner` | Optional | string or null | Who can resolve the block. Values: `"merchant"`, `"flint"`, `"integrator"`, `"buyer"`. `resolution_owner`: [declared alternatives](../models/MoneyMovementBlockedReasonPreviousAttributes.md#moneymovementblockedreasonpreviousattributesresolution_owner). |
| `retryable` | Optional | boolean or null | Whether trying the action again after the block clears can succeed. `retryable`: [declared alternatives](../models/MoneyMovementBlockedReasonPreviousAttributes.md#moneymovementblockedreasonpreviousattributesretryable). |

### MoneyMovementBlockedReasonPreviousAttributes.code

### MoneyMovementBlockedReasonPreviousAttributes.code variant 1

anyOf variant 1: Code of the error the blocked action would return..

- Value shape: string. Code of the error the blocked action would return. 

### MoneyMovementBlockedReasonPreviousAttributes.code variant 2

anyOf variant 2.

- Value shape: null. Code of the error the blocked action would return. 

### MoneyMovementBlockedReasonPreviousAttributes.message

### MoneyMovementBlockedReasonPreviousAttributes.message variant 1

anyOf variant 1: Why the action is blocked..

- Value shape: string. Why the action is blocked. 

### MoneyMovementBlockedReasonPreviousAttributes.message variant 2

anyOf variant 2.

- Value shape: null. Why the action is blocked. 

### MoneyMovementBlockedReasonPreviousAttributes.next_steps

### MoneyMovementBlockedReasonPreviousAttributes.next_steps variant 1

anyOf variant 1: What to do to unblock the action..

- Value shape: string. What to do to unblock the action. 

### MoneyMovementBlockedReasonPreviousAttributes.next_steps variant 2

anyOf variant 2.

- Value shape: null. What to do to unblock the action. 

### MoneyMovementBlockedReasonPreviousAttributes.param

### MoneyMovementBlockedReasonPreviousAttributes.param variant 1

anyOf variant 1: The request field the block concerns..

- Value shape: string. The request field the block concerns. 

### MoneyMovementBlockedReasonPreviousAttributes.param variant 2

anyOf variant 2.

- Value shape: null. The request field the block concerns. 

### MoneyMovementBlockedReasonPreviousAttributes.resolution_owner

### MoneyMovementBlockedReasonPreviousAttributes.resolution_owner variant 1

anyOf variant 1: Who can resolve the block..

- Value shape: string. Who can resolve the block. Values: `"merchant"`, `"flint"`, `"integrator"`, `"buyer"`.

### MoneyMovementBlockedReasonPreviousAttributes.resolution_owner variant 2

anyOf variant 2.

- Value shape: null. Who can resolve the block. 

### MoneyMovementBlockedReasonPreviousAttributes.retryable

### MoneyMovementBlockedReasonPreviousAttributes.retryable variant 1

anyOf variant 1: Whether trying the action again after the block clears can succeed..

- Value shape: boolean. Whether trying the action again after the block clears can succeed. 

### MoneyMovementBlockedReasonPreviousAttributes.retryable variant 2

anyOf variant 2.

- Value shape: null. Whether trying the action again after the block clears can succeed. 

