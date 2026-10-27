[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPreviewError

An error found while previewing a subscription, with a `code`, message, and the parameter at fault.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string |  |
| `details` | Optional | Array of [ErrorDetail](../models/ErrorDetail.md#errordetail) |  |
| `message` | Required | string |  |
| `param` | Optional | string |  |

