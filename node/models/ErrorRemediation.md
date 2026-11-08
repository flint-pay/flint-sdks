[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ErrorRemediation

Recovery guidance for an error: whether and how to `retry`, plus next steps and suggested actions.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `next_actions` | Optional | Array of [NextAction](../models/NextAction.md#nextaction) | Suggested actions for resolving the error, including the target resource and any required input. |
| `next_steps` | Optional | string | What to change or check before attempting the operation again. |
| `retry` | Required | string | Whether sending this request again can succeed, and how. It depends only on code and details[0].reason; the errors reference lists the value for each. Values: `"same_request"`, `"after_refresh"`, `"none"`. |

