[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerCheckoutProblemResourceInput

A checkout problem shown to the buyer, including whether it blocks completion and how to resolve it.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `blocks_completion` | Required | boolean | Whether the checkout cannot complete until the problem is resolved. |
| `code` | Required | string | Which condition affects the checkout. Values: `"delivery_selection_stale"`, `"delivery_selection_invalid"`, `"delivery_unreadable"`, `"payment_in_progress"`. |
| `remediation` | Optional | [BuyerErrorRemediationInput](../models/BuyerErrorRemediationInput.md#buyererrorremediationinput) | What the caller can do about the problem, and whether retrying the same request can help. Guidance for recovering from a payment error: whether and how to retry (`retry`), and optional next steps. |
| `severity` | Required | string | How serious the problem is. Values: `"error"`. |

