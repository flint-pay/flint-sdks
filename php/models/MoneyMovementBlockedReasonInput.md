[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MoneyMovementBlockedReasonInput

Why a money movement action is blocked, with an error code, a message, next steps, and who can resolve it.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string | Code of the error the blocked action would return. |
| `message` | Optional | string | Why the action is blocked. |
| `next_steps` | Optional | string | What to do to unblock the action. |
| `param` | Optional | string | The request field the block concerns. |
| `resolution_owner` | Optional | string | Who can resolve the block. Values: `"merchant"`, `"flint"`, `"integrator"`, `"buyer"`. |
| `retryable` | Optional | boolean | Whether trying the action again after the block clears can succeed. |

