[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MoneyMovementBlockedReason

Why a money movement action is blocked, with an error code, a message, next steps, and who can resolve it.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string |  |
| `message` | Optional | string |  |
| `next_steps` | Optional | string |  |
| `param` | Optional | string |  |
| `resolution_owner` | Optional | string | Values: `"merchant"`, `"flint"`, `"integrator"`, `"buyer"`. |
| `retryable` | Optional | boolean |  |

