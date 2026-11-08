[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardPurchaseRefundRecovery

Records how value was recovered for a gift card purchase refund, on the original or a replacement card, with the destinations that received it.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `destination` | Required | string | Where the restored value went. Values: `"original"`, `"replacement"`. |
| `destinations` | Required | Array of [GiftCardPurchaseRefundRecoveryDestination](../models/GiftCardPurchaseRefundRecoveryDestination.md#giftcardpurchaserefundrecoverydestination) | The cards and loads that received the restored value. |

