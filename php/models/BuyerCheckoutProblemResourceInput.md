[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerCheckoutProblemResourceInput

A checkout problem shown to the buyer, including whether it blocks completion and how to resolve it.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `blocks_completion` | Required | boolean |  |
| `code` | Required | string | Values: `"delivery_selection_stale"`, `"delivery_selection_invalid"`, `"delivery_unreadable"`, `"payment_in_progress"`. |
| `remediation` | Optional | [BuyerErrorRemediationInput](../models/BuyerErrorRemediationInput.md#buyererrorremediationinput) | Guidance for recovering from a payment error: whether and how to retry (`retry`), and optional next steps. |
| `severity` | Required | string | Values: `"error"`. |

