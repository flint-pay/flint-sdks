[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundLineItemInput

An order line item to refund, with the quantity or amount, tax handling, and any adjustments such as a restocking fee.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustment_refunds` | Optional | Array of [RefundLineItemAdjustmentRefundInInput](../models/RefundLineItemAdjustmentRefundInInput.md#refundlineitemadjustmentrefundininput) |  |
| `amount_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `order_line_item_id` | Required | string | minLength: `1`. |
| `quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `refund_adjustments` | Optional | Array of [RefundLineItemAdjustmentInInput](../models/RefundLineItemAdjustmentInInput.md#refundlineitemadjustmentininput) |  |
| `tax_adjustment_audit` | Optional | [RefundAdjustmentAuditInput](../models/RefundAdjustmentAuditInput.md#refundadjustmentauditinput) | Who made a manual tax adjustment on a refund line item and where it came from, for audit purposes. |
| `tax_adjustment_reason` | Optional | [RefundAdjustmentReasonRequestInput](../models/RefundAdjustmentReasonRequestInput.md#refundadjustmentreasonrequestinput) | The reason to record for a refund adjustment, as a `code` with an optional description. |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefundInInput](../models/RefundTaxBreakdownRefundInInput.md#refundtaxbreakdownrefundininput) |  |
| `tax_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `tax_refund_mode` | Optional | string | Values: `"automatic"`, `"explicit"`. |

