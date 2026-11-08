[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundLineItemAllocation

How a refund applied to one order line item: quantity, refunded amount, tax, adjustments, and modifier allocations.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustment_refunds` | Optional | Array of [RefundLineItemAdjustmentRefund](../models/RefundLineItemAdjustmentRefund.md#refundlineitemadjustmentrefund) | Amounts refunded back against adjustments withheld by earlier refunds of this line. `adjustment_refunds[]`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefundsline_item_allocationsadjustment_refunds). |
| `adjustments` | Optional | Array of [RefundLineItemAdjustment](../models/RefundLineItemAdjustment.md#refundlineitemadjustment) | Amounts withheld from this line's refund, such as a restocking fee. `adjustments[]`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefundsline_item_allocationsadjustments). |
| `automatic_refund` | Required | [RefundLineItemAutomaticRefund](../models/RefundLineItemAutomaticRefund.md#refundlineitemautomaticrefund) | What Flint calculated for the refunded portion of the line before adjustments. The subtotal, discount, tax, and total Flint calculated automatically for a refunded line item. |
| `bundle_id` | Optional | string | ID of the bundle the line was sold from. |
| `categories` | Optional | Array of [CategoryReference](../models/CategoryReference.md#categoryreference) | Catalog categories of the item. `categories[]`: [field definitions](../models/OrderResponse.md#orderresponsedataline_itemscategories). |
| `modifiers` | Optional | Array of [RefundLineItemModifierAllocation](../models/RefundLineItemModifierAllocation.md#refundlineitemmodifierallocation) | The part of the refund that applies to each modifier on the line. `modifiers[]`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefundsline_item_allocationsmodifiers). |
| `order_line_item_id` | Required | string | ID of the order line item this allocation refunded. |
| `product_id` | Optional | string | ID of the catalog product the line was sold from. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `refunded_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount refunded for this line: the automatic refund less adjustments, plus any refunds back against earlier adjustments. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `selected_options` | Optional | Array of [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption) | Variant options selected for the item, such as size and color. `selected_options[]`: [field definitions](../models/OrderResponse.md#orderresponsedataline_itemsbundle_componentsvariantselected_options). |
| `sku` | Optional | string | SKU of the item as sold. |
| `source_type` | Optional | string | Whether the line was sold as a catalog `variant` or a `bundle`. Values: `"variant"`, `"bundle"`. |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefund](../models/RefundTaxBreakdownRefund.md#refundtaxbreakdownrefund) | Tax reversed for each jurisdiction on this line. `tax_breakdown_refunds[]`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefundsline_item_allocationstax_breakdown_refunds). |
| `tax_refund_mode` | Required | string | Whether Flint calculated the tax refunded (`automatic`) or you set it (`explicit`). Values: `"automatic"`, `"explicit"`. |
| `variant_id` | Optional | string | ID of the catalog variant the line was sold from. |

### RefundLineItemAllocation.adjustment_refunds[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].refunds[].line_item_allocations[].adjustment_refunds[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefundsline_item_allocationsadjustment_refunds).

### RefundLineItemAllocation.adjustments[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].refunds[].line_item_allocations[].adjustments[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefundsline_item_allocationsadjustments).

### RefundLineItemAllocation.categories[]

Field definitions: [OrderResponse.data.line_items[].categories[]](../models/OrderResponse.md#orderresponsedataline_itemscategories).

### RefundLineItemAllocation.modifiers[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].refunds[].line_item_allocations[].modifiers[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefundsline_item_allocationsmodifiers).

### RefundLineItemAllocation.selected_options[]

Field definitions: [OrderResponse.data.line_items[].bundle_components[].variant.selected_options[]](../models/OrderResponse.md#orderresponsedataline_itemsbundle_componentsvariantselected_options).

### RefundLineItemAllocation.tax_breakdown_refunds[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].refunds[].line_item_allocations[].tax_breakdown_refunds[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefundsline_item_allocationstax_breakdown_refunds).

