[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateRefundResultLineItemAllocationsItem

How a refund applied to one order line item: quantity, refunded amount, tax, adjustments, and modifier allocations.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustment_refunds` | Optional | Array of ([CreateRefundResultLineItemAllocationsItemAdjustmentRefundsItem](../models/CreateRefundResultLineItemAllocationsItemAdjustmentRefundsItem.md#createrefundresultlineitemallocationsitemadjustmentrefundsitem) and [RefundLineItemAdjustmentRefund](../models/RefundLineItemAdjustmentRefund.md#refundlineitemadjustmentrefund)) |  |
| `adjustments` | Optional | Array of ([CreateRefundResultLineItemAllocationsItemAdjustmentsItem](../models/CreateRefundResultLineItemAllocationsItemAdjustmentsItem.md#createrefundresultlineitemallocationsitemadjustmentsitem) and [RefundLineItemAdjustment](../models/RefundLineItemAdjustment.md#refundlineitemadjustment)) |  |
| `automatic_refund` | Required | [CreateRefundResultLineItemAllocationsItemAutomaticRefund](../models/CreateRefundResultLineItemAllocationsItemAutomaticRefund.md#createrefundresultlineitemallocationsitemautomaticrefund) | The subtotal, discount, tax, and total Flint calculated automatically for a refunded line item. `automatic_refund`: [field definitions](../models/CreateRefundResultLineItemAllocationsItem.md#createrefundresultlineitemallocationsitemautomatic_refund). |
| `bundle_id` | Optional | string |  |
| `categories` | Optional | Array of ([CreateRefundResultLineItemAllocationsItemCategoriesItem](../models/CreateRefundResultLineItemAllocationsItemCategoriesItem.md#createrefundresultlineitemallocationsitemcategoriesitem) and [CategoryReference](../models/CategoryReference.md#categoryreference)) |  |
| `modifiers` | Optional | Array of ([CreateRefundResultLineItemAllocationsItemModifiersItem](../models/CreateRefundResultLineItemAllocationsItemModifiersItem.md#createrefundresultlineitemallocationsitemmodifiersitem) and [RefundLineItemModifierAllocation](../models/RefundLineItemModifierAllocation.md#refundlineitemmodifierallocation)) |  |
| `order_line_item_id` | Required | string |  |
| `product_id` | Optional | string |  |
| `quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `refunded_money` | Required | [CreateRefundResultLineItemAllocationsItemRefundedMoney](../models/CreateRefundResultLineItemAllocationsItemRefundedMoney.md#createrefundresultlineitemallocationsitemrefundedmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `selected_options` | Optional | Array of ([CreateRefundResultLineItemAllocationsItemSelectedOptionsItem](../models/CreateRefundResultLineItemAllocationsItemSelectedOptionsItem.md#createrefundresultlineitemallocationsitemselectedoptionsitem) and [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption)) |  |
| `sku` | Optional | string |  |
| `source_type` | Optional | string | Values: `"variant"`, `"bundle"`. |
| `tax_breakdown_refunds` | Optional | Array of ([CreateRefundResultLineItemAllocationsItemTaxBreakdownRefundsItem](../models/CreateRefundResultLineItemAllocationsItemTaxBreakdownRefundsItem.md#createrefundresultlineitemallocationsitemtaxbreakdownrefundsitem) and [RefundTaxBreakdownRefund](../models/RefundTaxBreakdownRefund.md#refundtaxbreakdownrefund)) |  |
| `tax_refund_mode` | Required | string | Values: `"automatic"`, `"explicit"`. |
| `variant_id` | Optional | string |  |

### CreateRefundResultLineItemAllocationsItem.automatic_refund

The subtotal, discount, tax, and total Flint calculated automatically for a refunded line item.

Field definitions: [shared fields](RefundLineItemAutomaticRefund.md#refundlineitemautomaticrefund).

