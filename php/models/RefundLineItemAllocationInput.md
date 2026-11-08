[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundLineItemAllocationInput

How a refund applied to one order line item: quantity, refunded amount, tax, adjustments, and modifier allocations.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustment_refunds` | Optional | Array of [RefundLineItemAdjustmentRefundInput](../models/RefundLineItemAdjustmentRefundInput.md#refundlineitemadjustmentrefundinput) | Amounts refunded back against adjustments withheld by earlier refunds of this line. |
| `adjustments` | Optional | Array of [RefundLineItemAdjustmentInput](../models/RefundLineItemAdjustmentInput.md#refundlineitemadjustmentinput) | Amounts withheld from this line's refund, such as a restocking fee. |
| `automatic_refund` | Required | [RefundLineItemAutomaticRefundInput](../models/RefundLineItemAutomaticRefundInput.md#refundlineitemautomaticrefundinput) | What Flint calculated for the refunded portion of the line before adjustments. The subtotal, discount, tax, and total Flint calculated automatically for a refunded line item. |
| `bundle_id` | Optional | string | ID of the bundle the line was sold from. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. |
| `categories` | Optional | Array of [CategoryReferenceInput](../models/CategoryReferenceInput.md#categoryreferenceinput) | Catalog categories of the item. |
| `modifiers` | Optional | Array of [RefundLineItemModifierAllocationInput](../models/RefundLineItemModifierAllocationInput.md#refundlineitemmodifierallocationinput) | The part of the refund that applies to each modifier on the line. |
| `order_line_item_id` | Required | string | ID of the order line item this allocation refunded. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. |
| `product_id` | Optional | string | ID of the catalog product the line was sold from. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `refunded_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Amount refunded for this line: the automatic refund less adjustments, plus any refunds back against earlier adjustments. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `selected_options` | Optional | Array of [SelectedProductOptionInput](../models/SelectedProductOptionInput.md#selectedproductoptioninput) | Variant options selected for the item, such as size and color. |
| `sku` | Optional | string | SKU of the item as sold. |
| `source_type` | Optional | string | Whether the line was sold as a catalog `variant` or a `bundle`. Values: `"variant"`, `"bundle"`. |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefundInput](../models/RefundTaxBreakdownRefundInput.md#refundtaxbreakdownrefundinput) | Tax reversed for each jurisdiction on this line. |
| `tax_refund_mode` | Required | string | Whether Flint calculated the tax refunded (`automatic`) or you set it (`explicit`). Values: `"automatic"`, `"explicit"`. |
| `variant_id` | Optional | string | ID of the catalog variant the line was sold from. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

