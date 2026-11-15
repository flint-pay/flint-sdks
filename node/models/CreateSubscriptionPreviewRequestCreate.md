[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateSubscriptionPreviewRequestCreate

The `create` variant of `CreateSubscriptionPreviewRequest`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `mode` | Required | string | Selects the create preview. Values: `"create"`. |
| `subscription` | Required | [CreateSubscriptionRequest](../models/CreateSubscriptionRequest.md#createsubscriptionrequest) | The subscription to validate and price, in the same shape as the body of Create subscription. The request body for: Create subscription. |

