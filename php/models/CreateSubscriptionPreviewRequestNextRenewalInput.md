[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateSubscriptionPreviewRequestNextRenewalInput

The `next_renewal` variant of `CreateSubscriptionPreviewRequest`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `mode` | Required | string | Values: `"next_renewal"`. |
| `subscription_id` | Required | string | minLength: `1`. pattern: `^sub_[0-9A-HJKMNP-TV-Z]{26}$`. |

