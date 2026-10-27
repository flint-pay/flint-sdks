[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundLineItemAllocation

How a refund applied to one order line item: quantity, refunded amount, tax, adjustments, and modifier allocations.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustment_refunds` | Optional | Array of [RefundLineItemAdjustmentRefund](../models/RefundLineItemAdjustmentRefund.md#refundlineitemadjustmentrefund) |  |
| `adjustments` | Optional | Array of [RefundLineItemAdjustment](../models/RefundLineItemAdjustment.md#refundlineitemadjustment) |  |
| `automatic_refund` | Required | [RefundLineItemAutomaticRefund](../models/RefundLineItemAutomaticRefund.md#refundlineitemautomaticrefund) | The subtotal, discount, tax, and total Flint calculated automatically for a refunded line item. |
| `bundle_id` | Optional | string |  |
| `categories` | Optional | Array of [CategoryReference](../models/CategoryReference.md#categoryreference) |  |
| `modifiers` | Optional | Array of [RefundLineItemModifierAllocation](../models/RefundLineItemModifierAllocation.md#refundlineitemmodifierallocation) |  |
| `order_line_item_id` | Required | string |  |
| `product_id` | Optional | string |  |
| `quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `refunded_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `refunded_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `selected_options` | Optional | Array of [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption) |  |
| `sku` | Optional | string |  |
| `source_type` | Optional | string | Values: `"variant"`, `"bundle"`. |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefund](../models/RefundTaxBreakdownRefund.md#refundtaxbreakdownrefund) |  |
| `tax_refund_mode` | Required | string | Values: `"automatic"`, `"explicit"`. |
| `variant_id` | Optional | string |  |

### RefundLineItemAllocation.refunded_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

