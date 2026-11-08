[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundLineItemInput

An order line item to refund, with the quantity or amount, tax handling, and any adjustments such as a restocking fee.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustment_refunds` | Optional | Array of [RefundLineItemAdjustmentRefundInInput](../models/RefundLineItemAdjustmentRefundInInput.md#refundlineitemadjustmentrefundininput) | Amounts to refund back against adjustments withheld by earlier refunds of this line. Each uses the adjustment's remaining value, not the line's again. |
| `amount_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Amount to refund for this line before `refund_adjustments`. Send `quantity` or `amount_money`, not both. With neither, Flint refunds what remains of the line. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `order_line_item_id` | Required | string | ID of the order line item to refund. minLength: `1`. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. |
| `quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `refund_adjustments` | Optional | Array of [RefundLineItemAdjustmentInInput](../models/RefundLineItemAdjustmentInInput.md#refundlineitemadjustmentininput) | Amounts to withhold from this line's refund, such as a restocking fee. Together they must be less than the amount the line would otherwise refund. |
| `tax_adjustment_audit` | Optional | [RefundAdjustmentAuditInput](../models/RefundAdjustmentAuditInput.md#refundadjustmentauditinput) | Who made the adjustment and where it came from, kept for your audit trail. Required when `tax_refund_mode` is `explicit`, and not allowed otherwise. Who made a manual tax adjustment on a refund line item and where it came from, for audit purposes. |
| `tax_adjustment_reason` | Optional | [RefundAdjustmentReasonRequestInput](../models/RefundAdjustmentReasonRequestInput.md#refundadjustmentreasonrequestinput) | Why you are refunding less tax than calculated. Required when `tax_refund_mode` is `explicit`, and not allowed otherwise. The reason to record for a refund adjustment, as a `code` with an optional description. |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefundInInput](../models/RefundTaxBreakdownRefundInInput.md#refundtaxbreakdownrefundininput) | Tax to refund for each jurisdiction on the line. Required with `tax_refund_mode` `explicit` when the line has jurisdiction breakdowns. |
| `tax_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Tax to refund for this line. Required when `tax_refund_mode` is `explicit`, and not allowed otherwise. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `tax_refund_mode` | Optional | string | Whether Flint calculates the tax refunded (`automatic`, the default) or you set it with `tax_money` (`explicit`). Values: `"automatic"`, `"explicit"`. |

