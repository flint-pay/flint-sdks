[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardPurchaseRefundAllocationInput

An entry in a gift card load's purchase refunds.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `consideration_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `order_manual_reversal_id` | Optional | string |  |
| `purchase_refund_allocation_id` | Required | string |  |
| `recovery` | Optional | [GiftCardPurchaseRefundRecoveryInput](../models/GiftCardPurchaseRefundRecoveryInput.md#giftcardpurchaserefundrecoveryinput) | Records how value was recovered for a gift card purchase refund, on the original or a replacement card, with the destinations that received it. |
| `refund_id` | Required | string or null |  |
| `status` | Required | string | Values: `"pending"`, `"succeeded"`, `"failed"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `value_allocations` | Optional | Array of [GiftCardPurchaseRefundValueAllocationInput](../models/GiftCardPurchaseRefundValueAllocationInput.md#giftcardpurchaserefundvalueallocationinput) | Actual value lots reserved or reversed for this original cash refund. Omitted when all value remains on the original load. |
| `value_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `version` | Required | integer | Format: `int64`. |

