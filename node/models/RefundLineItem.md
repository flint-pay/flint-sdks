[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundLineItem

An order line item to refund, with the quantity or amount, tax handling, and any adjustments such as a restocking fee.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustment_refunds` | Optional | Array of [RefundLineItemAdjustmentRefundIn](../models/RefundLineItemAdjustmentRefundIn.md#refundlineitemadjustmentrefundin) | Amounts to refund back against adjustments withheld by earlier refunds of this line. Each uses the adjustment's remaining value, not the line's again. |
| `amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount to refund for this line before `refund_adjustments`. Send `quantity` or `amount_money`, not both. With neither, Flint refunds what remains of the line. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/RefundLineItem.md#refundlineitemamount_money). |
| `order_line_item_id` | Required | string | ID of the order line item to refund. minLength: `1`. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. |
| `quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `refund_adjustments` | Optional | Array of [RefundLineItemAdjustmentIn](../models/RefundLineItemAdjustmentIn.md#refundlineitemadjustmentin) | Amounts to withhold from this line's refund, such as a restocking fee. Together they must be less than the amount the line would otherwise refund. |
| `tax_adjustment_audit` | Optional | [RefundAdjustmentAudit](../models/RefundAdjustmentAudit.md#refundadjustmentaudit) | Who made the adjustment and where it came from, kept for your audit trail. Required when `tax_refund_mode` is `explicit`, and not allowed otherwise. Who made a manual tax adjustment on a refund line item and where it came from, for audit purposes. |
| `tax_adjustment_reason` | Optional | [RefundAdjustmentReason](../models/RefundAdjustmentReason.md#refundadjustmentreason) | Why you are refunding less tax than calculated. Required when `tax_refund_mode` is `explicit`, and not allowed otherwise. The reason to record for a refund adjustment, as a `code` with an optional description. `tax_adjustment_reason`: [field definitions](../models/RefundLineItem.md#refundlineitemtax_adjustment_reason). |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefundIn](../models/RefundTaxBreakdownRefundIn.md#refundtaxbreakdownrefundin) | Tax to refund for each jurisdiction on the line. Required with `tax_refund_mode` `explicit` when the line has jurisdiction breakdowns. |
| `tax_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Tax to refund for this line. Required when `tax_refund_mode` is `explicit`, and not allowed otherwise. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `tax_money`: [field definitions](../models/RefundLineItem.md#refundlineitemtax_money). |
| `tax_refund_mode` | Optional | string | Whether Flint calculates the tax refunded (`automatic`, the default) or you set it with `tax_money` (`explicit`). Values: `"automatic"`, `"explicit"`. |

### RefundLineItem.amount_money

Amount to refund for this line before `refund_adjustments`. Send `quantity` or `amount_money`, not both. With neither, Flint refunds what remains of the line. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### RefundLineItem.tax_adjustment_reason

Why you are refunding less tax than calculated. Required when `tax_refund_mode` is `explicit`, and not allowed otherwise. The reason to record for a refund adjustment, as a `code` with an optional description.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string | Why the adjustment was made. Values: [7 declared values](#refundlineitemtax_adjustment_reason-code-values). |
| `description` | Optional | string | Note explaining the reason, up to 1,024 characters. Required when `code` is `other`. minLength: `1`. |

#### RefundLineItem.tax_adjustment_reason code values

- `"customer_agreement"`
- `"jurisdiction_specific_rule"`
- `"merchant_policy"`
- `"customer_request"`
- `"restocking_policy"`
- `"manual_tax_correction"`
- `"other"`

### RefundLineItem.tax_money

Tax to refund for this line. Required when `tax_refund_mode` is `explicit`, and not allowed otherwise. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

