[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerCheckoutProblemResource

A checkout problem shown to the buyer, including whether it blocks completion and how to resolve it.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `blocks_completion` | Required | boolean | Whether the checkout cannot complete until the problem is resolved. |
| `code` | Required | string | Which condition affects the checkout. Values: `"delivery_selection_stale"`, `"delivery_selection_invalid"`, `"delivery_unreadable"`, `"payment_in_progress"`. |
| `remediation` | Optional | [BuyerErrorRemediation](../models/BuyerErrorRemediation.md#buyererrorremediation) | What the caller can do about the problem, and whether retrying the same request can help. Guidance for recovering from a payment error: whether and how to retry (`retry`), and optional next steps. |
| `severity` | Required | string | How serious the problem is. Values: `"error"`. |

