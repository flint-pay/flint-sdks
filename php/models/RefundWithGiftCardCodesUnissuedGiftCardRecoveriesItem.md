[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundWithGiftCardCodesUnissuedGiftCardRecoveriesItem

Details of a gift card purchase refunded before the card was issued, including the amounts recovered.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string | The order the gift card was sold on. |
| `order_line_item_id` | Required | string | The gift card line item the cash paid for. Name it in a `line_items` entry of the new refund. |
| `payment_intent_id` | Required | string | The payment the returned cash belongs to. Name it in the new refund. |
| `purchase_refund_allocation_id` | Required | string | ID of the gift card purchase refund allocation whose cash came back after it failed. |
| `returned_amount_money` | Required | [RefundWithGiftCardCodesUnissuedGiftCardRecoveriesItemReturnedAmountMoney](../models/RefundWithGiftCardCodesUnissuedGiftCardRecoveriesItemReturnedAmountMoney.md#refundwithgiftcardcodesunissuedgiftcardrecoveriesitemreturnedamountmoney) | Cash that came back and funded no gift card. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `settlement_allocation_id` | Required | string | ID of the settlement allocation this entry draws on. Entries that share one describe the same pool, so their amounts aren't additive. |
| `source_pending_amount_money` | Required | [RefundWithGiftCardCodesUnissuedGiftCardRecoveriesItemSourcePendingAmountMoney](../models/RefundWithGiftCardCodesUnissuedGiftCardRecoveriesItemSourcePendingAmountMoney.md#refundwithgiftcardcodesunissuedgiftcardrecoveriesitemsourcependingamountmoney) | Cash on the whole settlement allocation that pending refunds hold. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `source_remaining_amount_money` | Required | [RefundWithGiftCardCodesUnissuedGiftCardRecoveriesItemSourceRemainingAmountMoney](../models/RefundWithGiftCardCodesUnissuedGiftCardRecoveriesItemSourceRemainingAmountMoney.md#refundwithgiftcardcodesunissuedgiftcardrecoveriesitemsourceremainingamountmoney) | Cash left on the whole settlement allocation, including cash that pending refunds hold. Subtract `source_pending_amount_money` to find what you can refund now. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

