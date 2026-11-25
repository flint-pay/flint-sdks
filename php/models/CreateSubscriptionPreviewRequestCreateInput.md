[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateSubscriptionPreviewRequestCreateInput

The `create` variant of `CreateSubscriptionPreviewRequest`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `mode` | Required | string | Selects the create preview. Values: `"create"`. |
| `subscription` | Required | [SubscriptionCreatePreviewRequestInput](../models/SubscriptionCreatePreviewRequestInput.md#subscriptioncreatepreviewrequestinput) | The subscription to validate and price, in the same shape as the body of Create subscription. Subscription terms and billing settings to preview. |

