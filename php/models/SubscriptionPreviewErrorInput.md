[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPreviewErrorInput

An error found while previewing a subscription, with a `code`, message, and the parameter at fault.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string |  |
| `details` | Optional | Array of [ErrorDetailInput](../models/ErrorDetailInput.md#errordetailinput) |  |
| `message` | Required | string |  |
| `param` | Optional | string |  |

