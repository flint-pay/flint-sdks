[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateSubscriptionPreviewRequestNextRenewal







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `mode` | Required | string | Values: `"next_renewal"`. |
| `subscription_id` | Required | string | minLength: `1`. pattern: `^sub_[0-9A-HJKMNP-TV-Z]{26}$`. |

### CreateSubscriptionPreviewRequestNextRenewal variant 1: `mode` = `"next_renewal"`

anyOf variant 1: Declared schema CreateMeSubscriptionPreviewRequestNextRenewal. The `next_renewal` variant of `CreateMeSubscriptionPreviewRequest`..

No additional constraints.

### CreateSubscriptionPreviewRequestNextRenewal variant 2: `mode` = `"next_renewal"`

anyOf variant 2: Declared schema CreateSubscriptionPreviewRequestNextRenewal. The `next_renewal` variant of `CreateSubscriptionPreviewRequest`..

No additional constraints.

