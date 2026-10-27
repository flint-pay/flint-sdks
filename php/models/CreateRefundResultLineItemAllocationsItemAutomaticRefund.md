[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateRefundResultLineItemAllocationsItemAutomaticRefund

The subtotal, discount, tax, and total Flint calculated automatically for a refunded line item.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `discount_money` | Required | [CreateRefundResultLineItemAllocationsItemAutomaticRefundDiscountMoney](../models/CreateRefundResultLineItemAllocationsItemAutomaticRefundDiscountMoney.md#createrefundresultlineitemallocationsitemautomaticrefunddiscountmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `subtotal_money` | Required | [CreateRefundResultLineItemAllocationsItemAutomaticRefundSubtotalMoney](../models/CreateRefundResultLineItemAllocationsItemAutomaticRefundSubtotalMoney.md#createrefundresultlineitemallocationsitemautomaticrefundsubtotalmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `tax_money` | Required | [CreateRefundResultLineItemAllocationsItemAutomaticRefundTaxMoney](../models/CreateRefundResultLineItemAllocationsItemAutomaticRefundTaxMoney.md#createrefundresultlineitemallocationsitemautomaticrefundtaxmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `total_money` | Required | [CreateRefundResultLineItemAllocationsItemAutomaticRefundTotalMoney](../models/CreateRefundResultLineItemAllocationsItemAutomaticRefundTotalMoney.md#createrefundresultlineitemallocationsitemautomaticrefundtotalmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

