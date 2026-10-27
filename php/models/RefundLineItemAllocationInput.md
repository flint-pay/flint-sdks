[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundLineItemAllocationInput

How a refund applied to one order line item: quantity, refunded amount, tax, adjustments, and modifier allocations.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustment_refunds` | Optional | Array of [RefundLineItemAdjustmentRefundInput](../models/RefundLineItemAdjustmentRefundInput.md#refundlineitemadjustmentrefundinput) |  |
| `adjustments` | Optional | Array of [RefundLineItemAdjustmentInput](../models/RefundLineItemAdjustmentInput.md#refundlineitemadjustmentinput) |  |
| `automatic_refund` | Required | [RefundLineItemAutomaticRefundInput](../models/RefundLineItemAutomaticRefundInput.md#refundlineitemautomaticrefundinput) | The subtotal, discount, tax, and total Flint calculated automatically for a refunded line item. |
| `bundle_id` | Optional | string |  |
| `categories` | Optional | Array of [CategoryReferenceInput](../models/CategoryReferenceInput.md#categoryreferenceinput) |  |
| `modifiers` | Optional | Array of [RefundLineItemModifierAllocationInput](../models/RefundLineItemModifierAllocationInput.md#refundlineitemmodifierallocationinput) |  |
| `order_line_item_id` | Required | string |  |
| `product_id` | Optional | string |  |
| `quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `refunded_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `selected_options` | Optional | Array of [SelectedProductOptionInput](../models/SelectedProductOptionInput.md#selectedproductoptioninput) |  |
| `sku` | Optional | string |  |
| `source_type` | Optional | string | Values: `"variant"`, `"bundle"`. |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefundInput](../models/RefundTaxBreakdownRefundInput.md#refundtaxbreakdownrefundinput) |  |
| `tax_refund_mode` | Required | string | Values: `"automatic"`, `"explicit"`. |
| `variant_id` | Optional | string |  |

