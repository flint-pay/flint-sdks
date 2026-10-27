[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerCheckoutProblemResource

A checkout problem shown to the buyer, including whether it blocks completion and how to resolve it.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `blocks_completion` | Required | boolean |  |
| `code` | Required | string | Values: `"delivery_selection_stale"`, `"delivery_selection_invalid"`, `"delivery_unreadable"`, `"payment_in_progress"`. |
| `remediation` | Optional | [BuyerErrorRemediation](../models/BuyerErrorRemediation.md#buyererrorremediation) | Guidance for recovering from a payment error: whether and how to retry (`retry`), and optional next steps. |
| `severity` | Required | string | Values: `"error"`. |

