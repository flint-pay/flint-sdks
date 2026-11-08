[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundWithGiftCardCodesLineItemAllocationsItem

How a refund applied to one order line item: quantity, refunded amount, tax, adjustments, and modifier allocations.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustment_refunds` | Optional | Array of ([RefundWithGiftCardCodesLineItemAllocationsItemAdjustmentRefundsItem](../models/RefundWithGiftCardCodesLineItemAllocationsItemAdjustmentRefundsItem.md#refundwithgiftcardcodeslineitemallocationsitemadjustmentrefundsitem) and [RefundLineItemAdjustmentRefund](../models/RefundLineItemAdjustmentRefund.md#refundlineitemadjustmentrefund)) | Amounts refunded back against adjustments withheld by earlier refunds of this line. |
| `adjustments` | Optional | Array of ([RefundWithGiftCardCodesLineItemAllocationsItemAdjustmentsItem](../models/RefundWithGiftCardCodesLineItemAllocationsItemAdjustmentsItem.md#refundwithgiftcardcodeslineitemallocationsitemadjustmentsitem) and [RefundLineItemAdjustment](../models/RefundLineItemAdjustment.md#refundlineitemadjustment)) | Amounts withheld from this line's refund, such as a restocking fee. |
| `automatic_refund` | Required | [RefundWithGiftCardCodesLineItemAllocationsItemAutomaticRefund](../models/RefundWithGiftCardCodesLineItemAllocationsItemAutomaticRefund.md#refundwithgiftcardcodeslineitemallocationsitemautomaticrefund) | What Flint calculated for the refunded portion of the line before adjustments. The subtotal, discount, tax, and total Flint calculated automatically for a refunded line item. `automatic_refund`: [field definitions](../models/RefundWithGiftCardCodesLineItemAllocationsItem.md#refundwithgiftcardcodeslineitemallocationsitemautomatic_refund). |
| `bundle_id` | Optional | string | ID of the bundle the line was sold from. |
| `categories` | Optional | Array of ([RefundWithGiftCardCodesLineItemAllocationsItemCategoriesItem](../models/RefundWithGiftCardCodesLineItemAllocationsItemCategoriesItem.md#refundwithgiftcardcodeslineitemallocationsitemcategoriesitem) and [CategoryReference](../models/CategoryReference.md#categoryreference)) | Catalog categories of the item. |
| `modifiers` | Optional | Array of ([RefundWithGiftCardCodesLineItemAllocationsItemModifiersItem](../models/RefundWithGiftCardCodesLineItemAllocationsItemModifiersItem.md#refundwithgiftcardcodeslineitemallocationsitemmodifiersitem) and [RefundLineItemModifierAllocation](../models/RefundLineItemModifierAllocation.md#refundlineitemmodifierallocation)) | The part of the refund that applies to each modifier on the line. |
| `order_line_item_id` | Required | string | ID of the order line item this allocation refunded. |
| `product_id` | Optional | string | ID of the catalog product the line was sold from. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `refunded_money` | Required | [RefundWithGiftCardCodesLineItemAllocationsItemRefundedMoney](../models/RefundWithGiftCardCodesLineItemAllocationsItemRefundedMoney.md#refundwithgiftcardcodeslineitemallocationsitemrefundedmoney) | Amount refunded for this line: the automatic refund less adjustments, plus any refunds back against earlier adjustments. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `selected_options` | Optional | Array of ([RefundWithGiftCardCodesLineItemAllocationsItemSelectedOptionsItem](../models/RefundWithGiftCardCodesLineItemAllocationsItemSelectedOptionsItem.md#refundwithgiftcardcodeslineitemallocationsitemselectedoptionsitem) and [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption)) | Variant options selected for the item, such as size and color. |
| `sku` | Optional | string | SKU of the item as sold. |
| `source_type` | Optional | string | Whether the line was sold as a catalog `variant` or a `bundle`. Values: `"variant"`, `"bundle"`. |
| `tax_breakdown_refunds` | Optional | Array of ([RefundWithGiftCardCodesLineItemAllocationsItemTaxBreakdownRefundsItem](../models/RefundWithGiftCardCodesLineItemAllocationsItemTaxBreakdownRefundsItem.md#refundwithgiftcardcodeslineitemallocationsitemtaxbreakdownrefundsitem) and [RefundTaxBreakdownRefund](../models/RefundTaxBreakdownRefund.md#refundtaxbreakdownrefund)) | Tax reversed for each jurisdiction on this line. |
| `tax_refund_mode` | Required | string | Whether Flint calculated the tax refunded (`automatic`) or you set it (`explicit`). Values: `"automatic"`, `"explicit"`. |
| `variant_id` | Optional | string | ID of the catalog variant the line was sold from. |

### RefundWithGiftCardCodesLineItemAllocationsItem.automatic_refund

What Flint calculated for the refunded portion of the line before adjustments. The subtotal, discount, tax, and total Flint calculated automatically for a refunded line item.

Field definitions: [shared fields](RefundLineItemAutomaticRefund.md#refundlineitemautomaticrefund).

