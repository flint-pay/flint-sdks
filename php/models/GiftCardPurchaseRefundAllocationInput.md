[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardPurchaseRefundAllocationInput

An entry in a gift card load's purchase refunds.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `consideration_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The part of the amount the buyer paid that this refund or reversal returns. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `order_manual_reversal_id` | Optional | string | ID of the manual payment reversal. Set when this entry reverses a manual payment instead of refunding a payment. Example: `"omp_01KEZF7C007J18203RBJKB9TYE"`. |
| `purchase_refund_allocation_id` | Required | string | ID of this entry in the load's purchase refunds. Example: `"gcpra_01KEZF7C00HJZ2YP6AENMZK5KA"`. |
| `recovery` | Optional | [GiftCardPurchaseRefundRecoveryInput](../models/GiftCardPurchaseRefundRecoveryInput.md#giftcardpurchaserefundrecoveryinput) | How the value was restored after the refund failed. `null` when no recovery happened. Records how value was recovered for a gift card purchase refund, on the original or a replacement card, with the destinations that received it. |
| `refund_id` | Required | string or null | ID of the refund. `null` when the entry reverses a manual payment, which has no refund. Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. |
| `status` | Required | string | Whether the refund has succeeded, failed, or is still pending. Values: `"pending"`, `"succeeded"`, `"failed"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `value_allocations` | Optional | Array of [GiftCardPurchaseRefundValueAllocationInput](../models/GiftCardPurchaseRefundValueAllocationInput.md#giftcardpurchaserefundvalueallocationinput) | Actual value lots reserved or reversed for this original cash refund. Omitted when all value remains on the original load. |
| `value_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The unspent face value this entry removes from the load. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `int64`. |

