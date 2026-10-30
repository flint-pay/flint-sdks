[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardPurchaseRefundAllocation

An entry in a gift card load's purchase refunds.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `consideration_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `order_manual_reversal_id` | Optional | string |  |
| `purchase_refund_allocation_id` | Required | string |  |
| `recovery` | Optional | [GiftCardPurchaseRefundRecovery](../models/GiftCardPurchaseRefundRecovery.md#giftcardpurchaserefundrecovery) | Records how value was recovered for a gift card purchase refund, on the original or a replacement card, with the destinations that received it. |
| `refund_id` | Required | string or null |  |
| `status` | Required | string | Values: `"pending"`, `"succeeded"`, `"failed"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `value_allocations` | Optional | Array of [GiftCardPurchaseRefundValueAllocation](../models/GiftCardPurchaseRefundValueAllocation.md#giftcardpurchaserefundvalueallocation) | Actual value lots reserved or reversed for this original cash refund. Omitted when all value remains on the original load. |
| `value_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `version` | Required | integer | Format: `int64`. |

