[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundWithGiftCardCodesLineItemAllocationsItemAutomaticRefund

What Flint calculated for the refunded portion of the line before adjustments.

The subtotal, discount, tax, and total Flint calculated automatically for a refunded line item.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `discount_money` | Required | [RefundWithGiftCardCodesLineItemAllocationsItemAutomaticRefundDiscountMoney](../models/RefundWithGiftCardCodesLineItemAllocationsItemAutomaticRefundDiscountMoney.md#refundwithgiftcardcodeslineitemallocationsitemautomaticrefunddiscountmoney) | Discount allocated to the refunded portion. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `subtotal_money` | Required | [RefundWithGiftCardCodesLineItemAllocationsItemAutomaticRefundSubtotalMoney](../models/RefundWithGiftCardCodesLineItemAllocationsItemAutomaticRefundSubtotalMoney.md#refundwithgiftcardcodeslineitemallocationsitemautomaticrefundsubtotalmoney) | Price of the refunded portion before discounts. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `tax_money` | Required | [RefundWithGiftCardCodesLineItemAllocationsItemAutomaticRefundTaxMoney](../models/RefundWithGiftCardCodesLineItemAllocationsItemAutomaticRefundTaxMoney.md#refundwithgiftcardcodeslineitemallocationsitemautomaticrefundtaxmoney) | Tax on the refunded portion. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `total_money` | Required | [RefundWithGiftCardCodesLineItemAllocationsItemAutomaticRefundTotalMoney](../models/RefundWithGiftCardCodesLineItemAllocationsItemAutomaticRefundTotalMoney.md#refundwithgiftcardcodeslineitemallocationsitemautomaticrefundtotalmoney) | What the refunded portion comes to before adjustments. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

