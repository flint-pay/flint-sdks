[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionAddressVerification

The verification state of a subscription's delivery address: `verified`, `unverified`, `needs_review`, or `unverifiable`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `state` | Required | string | How far verification of the address got. Each value says what it means. Values: `"verified"`, `"unverified"`, `"needs_review"`, `"unverifiable"`. |

