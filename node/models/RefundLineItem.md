[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundLineItem

An order line item to refund, with the quantity or amount, tax handling, and any adjustments such as a restocking fee.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustment_refunds` | Optional | Array of [RefundLineItemAdjustmentRefundIn](../models/RefundLineItemAdjustmentRefundIn.md#refundlineitemadjustmentrefundin) |  |
| `amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `order_line_item_id` | Required | string | minLength: `1`. |
| `quantity` | Optional | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `refund_adjustments` | Optional | Array of [RefundLineItemAdjustmentIn](../models/RefundLineItemAdjustmentIn.md#refundlineitemadjustmentin) |  |
| `tax_adjustment_audit` | Optional | [RefundAdjustmentAudit](../models/RefundAdjustmentAudit.md#refundadjustmentaudit) | Who made a manual tax adjustment on a refund line item and where it came from, for audit purposes. |
| `tax_adjustment_reason` | Optional | [RefundAdjustmentReason](../models/RefundAdjustmentReason.md#refundadjustmentreason) | The reason to record for a refund adjustment, as a `code` with an optional description. `tax_adjustment_reason`: [field definitions](../models/RefundLineItem.md#refundlineitemtax_adjustment_reason). |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefundIn](../models/RefundTaxBreakdownRefundIn.md#refundtaxbreakdownrefundin) |  |
| `tax_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `tax_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `tax_refund_mode` | Optional | string | Values: `"automatic"`, `"explicit"`. |

### RefundLineItem.amount_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### RefundLineItem.tax_adjustment_reason

The reason to record for a refund adjustment, as a `code` with an optional description.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string | Values: [7 declared values](#refundlineitemtax_adjustment_reason-code-values). |
| `description` | Optional | string | minLength: `1`. |

#### RefundLineItem.tax_adjustment_reason code values

- `"customer_agreement"`
- `"jurisdiction_specific_rule"`
- `"merchant_policy"`
- `"customer_request"`
- `"restocking_policy"`
- `"manual_tax_correction"`
- `"other"`

### RefundLineItem.tax_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

