[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutProblemResource

A problem with a checkout session, such as a stale delivery selection, with its `code`, whether it blocks completion, and remediation.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `blocks_completion` | Required | boolean | Whether the checkout cannot complete until the problem is resolved. |
| `code` | Required | string | Which condition affects the checkout. Values: `"delivery_selection_stale"`, `"delivery_selection_invalid"`, `"delivery_unreadable"`, `"payment_in_progress"`. |
| `remediation` | Optional | [ErrorRemediation](../models/ErrorRemediation.md#errorremediation) | What the caller can do about the problem, and whether retrying the same request can help. Recovery guidance for an error: whether and how to `retry`, plus next steps and suggested actions. |
| `severity` | Required | string | How serious the problem is. Values: `"error"`. |

