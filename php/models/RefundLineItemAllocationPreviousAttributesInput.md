[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundLineItemAllocationPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustment_refunds` | Optional | Array of [RefundLineItemAdjustmentRefundPreviousAttributesInput](../models/RefundLineItemAdjustmentRefundPreviousAttributesInput.md#refundlineitemadjustmentrefundpreviousattributesinput) or null | Amounts refunded back against adjustments withheld by earlier refunds of this line. `adjustment_refunds`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributesInput.md#refundlineitemallocationpreviousattributesinputadjustment_refunds). |
| `adjustments` | Optional | Array of [RefundLineItemAdjustmentPreviousAttributesInput](../models/RefundLineItemAdjustmentPreviousAttributesInput.md#refundlineitemadjustmentpreviousattributesinput) or null | Amounts withheld from this line's refund, such as a restocking fee. `adjustments`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributesInput.md#refundlineitemallocationpreviousattributesinputadjustments). |
| `automatic_refund` | Optional | [RefundLineItemAutomaticRefundPreviousAttributesInput](../models/RefundLineItemAutomaticRefundPreviousAttributesInput.md#refundlineitemautomaticrefundpreviousattributesinput) or null | What Flint calculated for the refunded portion of the line before adjustments. |
| `bundle_id` | Optional | string or null | ID of the bundle the line was sold from. `bundle_id`: [declared alternatives](../models/OrderLineItemPreviousAttributesInput.md#orderlineitempreviousattributesinputbundle_id). |
| `categories` | Optional | Array of [CategoryReferencePreviousAttributesInput](../models/CategoryReferencePreviousAttributesInput.md#categoryreferencepreviousattributesinput) or null | Catalog categories of the item. `categories`: [declared alternatives](../models/OrderLineItemPreviousAttributesInput.md#orderlineitempreviousattributesinputcategories). |
| `modifiers` | Optional | Array of [RefundLineItemModifierAllocationPreviousAttributesInput](../models/RefundLineItemModifierAllocationPreviousAttributesInput.md#refundlineitemmodifierallocationpreviousattributesinput) or null | The part of the refund that applies to each modifier on the line. `modifiers`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributesInput.md#refundlineitemallocationpreviousattributesinputmodifiers). |
| `order_id` | Optional | string or null | ID of the order that owns the refunded line item. `order_id`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributesInput.md#refundlineitemallocationpreviousattributesinputorder_id). |
| `order_line_item_id` | Optional | string or null | ID of the order line item this allocation refunded. `order_line_item_id`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributesInput.md#refundlineitemallocationpreviousattributesinputorder_line_item_id). |
| `product_id` | Optional | string or null | ID of the catalog product the line was sold from. `product_id`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributesInput.md#refundlineitemallocationpreviousattributesinputproduct_id). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity). |
| `refunded_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Amount refunded for this line: the automatic refund less adjustments, plus any refunds back against earlier adjustments. |
| `selected_options` | Optional | Array of [SelectedProductOptionPreviousAttributesInput](../models/SelectedProductOptionPreviousAttributesInput.md#selectedproductoptionpreviousattributesinput) or null | Variant options selected for the item, such as size and color. `selected_options`: [declared alternatives](../models/OrderLineItemPreviousAttributesInput.md#orderlineitempreviousattributesinputselected_options). |
| `sku` | Optional | string or null | SKU of the item as sold. `sku`: [declared alternatives](../models/OrderLineItemPreviousAttributesInput.md#orderlineitempreviousattributesinputsku). |
| `source_type` | Optional | string or null | Whether the line was sold as a catalog `variant` or a `bundle`. Values: `"variant"`, `"bundle"`. `source_type`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributesInput.md#refundlineitemallocationpreviousattributesinputsource_type). |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefundPreviousAttributesInput](../models/RefundTaxBreakdownRefundPreviousAttributesInput.md#refundtaxbreakdownrefundpreviousattributesinput) or null | Tax reversed for each jurisdiction on this line. `tax_breakdown_refunds`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributesInput.md#refundlineitemallocationpreviousattributesinputtax_breakdown_refunds). |
| `tax_refund_mode` | Optional | string or null | Whether Flint calculated the tax refunded (`automatic`) or you set it (`explicit`). Values: `"automatic"`, `"explicit"`. `tax_refund_mode`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributesInput.md#refundlineitemallocationpreviousattributesinputtax_refund_mode). |
| `variant_id` | Optional | string or null | ID of the catalog variant the line was sold from. `variant_id`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributesInput.md#refundlineitemallocationpreviousattributesinputvariant_id). |

### RefundLineItemAllocationPreviousAttributesInput.adjustment_refunds

### RefundLineItemAllocationPreviousAttributesInput.adjustment_refunds variant 1

anyOf variant 1: Amounts refunded back against adjustments withheld by earlier refunds of this line..

- Value shape: Array of [RefundLineItemAdjustmentRefundPreviousAttributesInput](../models/RefundLineItemAdjustmentRefundPreviousAttributesInput.md#refundlineitemadjustmentrefundpreviousattributesinput). Amounts refunded back against adjustments withheld by earlier refunds of this line. 

### RefundLineItemAllocationPreviousAttributesInput.adjustment_refunds variant 2

anyOf variant 2.

- Value shape: null. Amounts refunded back against adjustments withheld by earlier refunds of this line. 

### RefundLineItemAllocationPreviousAttributesInput.adjustments

### RefundLineItemAllocationPreviousAttributesInput.adjustments variant 1

anyOf variant 1: Amounts withheld from this line's refund, such as a restocking fee..

- Value shape: Array of [RefundLineItemAdjustmentPreviousAttributesInput](../models/RefundLineItemAdjustmentPreviousAttributesInput.md#refundlineitemadjustmentpreviousattributesinput). Amounts withheld from this line's refund, such as a restocking fee. 

### RefundLineItemAllocationPreviousAttributesInput.adjustments variant 2

anyOf variant 2.

- Value shape: null. Amounts withheld from this line's refund, such as a restocking fee. 

### RefundLineItemAllocationPreviousAttributesInput.bundle_id

Declared alternatives: [OrderLineItemPreviousAttributesInput.bundle_id](../models/OrderLineItemPreviousAttributesInput.md#orderlineitempreviousattributesinputbundle_id).

### RefundLineItemAllocationPreviousAttributesInput.categories

Declared alternatives: [OrderLineItemPreviousAttributesInput.categories](../models/OrderLineItemPreviousAttributesInput.md#orderlineitempreviousattributesinputcategories).

### RefundLineItemAllocationPreviousAttributesInput.modifiers

### RefundLineItemAllocationPreviousAttributesInput.modifiers variant 1

anyOf variant 1: The part of the refund that applies to each modifier on the line..

- Value shape: Array of [RefundLineItemModifierAllocationPreviousAttributesInput](../models/RefundLineItemModifierAllocationPreviousAttributesInput.md#refundlineitemmodifierallocationpreviousattributesinput). The part of the refund that applies to each modifier on the line. 

### RefundLineItemAllocationPreviousAttributesInput.modifiers variant 2

anyOf variant 2.

- Value shape: null. The part of the refund that applies to each modifier on the line. 

### RefundLineItemAllocationPreviousAttributesInput.order_id

### RefundLineItemAllocationPreviousAttributesInput.order_id variant 1

anyOf variant 1: ID of the order that owns the refunded line item..

- Value shape: string. ID of the order that owns the refunded line item. ID of the order that owns the refunded line item. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### RefundLineItemAllocationPreviousAttributesInput.order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order that owns the refunded line item. 

### RefundLineItemAllocationPreviousAttributesInput.order_line_item_id

### RefundLineItemAllocationPreviousAttributesInput.order_line_item_id variant 1

anyOf variant 1: ID of the order line item this allocation refunded..

- Value shape: string. ID of the order line item this allocation refunded. ID of the order line item this allocation refunded. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. 

### RefundLineItemAllocationPreviousAttributesInput.order_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order line item this allocation refunded. 

### RefundLineItemAllocationPreviousAttributesInput.product_id

### RefundLineItemAllocationPreviousAttributesInput.product_id variant 1

anyOf variant 1: ID of the catalog product the line was sold from..

- Value shape: string. ID of the catalog product the line was sold from. ID of the catalog product the line was sold from. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. 

### RefundLineItemAllocationPreviousAttributesInput.product_id variant 2

anyOf variant 2.

- Value shape: null. ID of the catalog product the line was sold from. 

### RefundLineItemAllocationPreviousAttributesInput.quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributesInput.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity).

### RefundLineItemAllocationPreviousAttributesInput.selected_options

Declared alternatives: [OrderLineItemPreviousAttributesInput.selected_options](../models/OrderLineItemPreviousAttributesInput.md#orderlineitempreviousattributesinputselected_options).

### RefundLineItemAllocationPreviousAttributesInput.sku

Declared alternatives: [OrderLineItemPreviousAttributesInput.sku](../models/OrderLineItemPreviousAttributesInput.md#orderlineitempreviousattributesinputsku).

### RefundLineItemAllocationPreviousAttributesInput.source_type

### RefundLineItemAllocationPreviousAttributesInput.source_type variant 1

anyOf variant 1: Whether the line was sold as a catalog `variant` or a `bundle`..

- Value shape: string. Whether the line was sold as a catalog `variant` or a `bundle`. Values: `"variant"`, `"bundle"`.

### RefundLineItemAllocationPreviousAttributesInput.source_type variant 2

anyOf variant 2.

- Value shape: null. Whether the line was sold as a catalog `variant` or a `bundle`. 

### RefundLineItemAllocationPreviousAttributesInput.tax_breakdown_refunds

### RefundLineItemAllocationPreviousAttributesInput.tax_breakdown_refunds variant 1

anyOf variant 1: Tax reversed for each jurisdiction on this line..

- Value shape: Array of [RefundTaxBreakdownRefundPreviousAttributesInput](../models/RefundTaxBreakdownRefundPreviousAttributesInput.md#refundtaxbreakdownrefundpreviousattributesinput). Tax reversed for each jurisdiction on this line. 

### RefundLineItemAllocationPreviousAttributesInput.tax_breakdown_refunds variant 2

anyOf variant 2.

- Value shape: null. Tax reversed for each jurisdiction on this line. 

### RefundLineItemAllocationPreviousAttributesInput.tax_refund_mode

### RefundLineItemAllocationPreviousAttributesInput.tax_refund_mode variant 1

anyOf variant 1: Whether Flint calculated the tax refunded (`automatic`) or you set it (`explicit`)..

- Value shape: string. Whether Flint calculated the tax refunded (`automatic`) or you set it (`explicit`). Values: `"automatic"`, `"explicit"`.

### RefundLineItemAllocationPreviousAttributesInput.tax_refund_mode variant 2

anyOf variant 2.

- Value shape: null. Whether Flint calculated the tax refunded (`automatic`) or you set it (`explicit`). 

### RefundLineItemAllocationPreviousAttributesInput.variant_id

### RefundLineItemAllocationPreviousAttributesInput.variant_id variant 1

anyOf variant 1: ID of the catalog variant the line was sold from..

- Value shape: string. ID of the catalog variant the line was sold from. ID of the catalog variant the line was sold from. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. 

### RefundLineItemAllocationPreviousAttributesInput.variant_id variant 2

anyOf variant 2.

- Value shape: null. ID of the catalog variant the line was sold from. 

