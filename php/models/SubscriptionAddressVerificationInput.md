[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionAddressVerificationInput

The verification state of a subscription's delivery address: `verified`, `unverified`, `needs_review`, or `unverifiable`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `state` | Required | string | How far verification of the address got. Each value says what it means. Values: `"verified"`, `"unverified"`, `"needs_review"`, `"unverifiable"`. |

