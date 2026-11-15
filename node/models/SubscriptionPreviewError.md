[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPreviewError

An error found while previewing a subscription, with a `code`, message, and the parameter at fault.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string | Stable code for this failure, as an error response would carry it. |
| `details` | Optional | Array of [ErrorDetail](../models/ErrorDetail.md#errordetail) | Individual failures behind this error, as an error response would list them. Omitted when there are none. |
| `message` | Required | string | What is wrong with the proposed subscription. |
| `param` | Optional | string | Request field the failure applies to, as a path in the preview request, such as `subscription.terms.billing_interval`. Omitted when the failure isn't tied to one field. |

