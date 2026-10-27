[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutProblemResourceInput

A problem with a checkout session, such as a stale delivery selection, with its `code`, whether it blocks completion, and remediation.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `blocks_completion` | Required | boolean |  |
| `code` | Required | string | Values: `"delivery_selection_stale"`, `"delivery_selection_invalid"`, `"delivery_unreadable"`, `"payment_in_progress"`. |
| `remediation` | Optional | [ErrorRemediationInput](../models/ErrorRemediationInput.md#errorremediationinput) | Recovery guidance for an error: whether and how to `retry`, plus next steps and suggested actions. |
| `severity` | Required | string | Values: `"error"`. |

