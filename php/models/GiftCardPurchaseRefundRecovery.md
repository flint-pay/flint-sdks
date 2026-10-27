[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardPurchaseRefundRecovery

Records how value was recovered for a gift card purchase refund, on the original or a replacement card, with the destinations that received it.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `destination` | Required | string | Values: `"original"`, `"replacement"`. |
| `destinations` | Required | Array of [GiftCardPurchaseRefundRecoveryDestination](../models/GiftCardPurchaseRefundRecoveryDestination.md#giftcardpurchaserefundrecoverydestination) |  |

