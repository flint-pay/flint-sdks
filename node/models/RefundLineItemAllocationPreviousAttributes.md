[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundLineItemAllocationPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustment_refunds` | Optional | Array of [RefundLineItemAdjustmentRefundPreviousAttributes](../models/RefundLineItemAdjustmentRefundPreviousAttributes.md#refundlineitemadjustmentrefundpreviousattributes) or null | Amounts refunded back against adjustments withheld by earlier refunds of this line. `adjustment_refunds`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributesadjustment_refunds). |
| `adjustments` | Optional | Array of [RefundLineItemAdjustmentPreviousAttributes](../models/RefundLineItemAdjustmentPreviousAttributes.md#refundlineitemadjustmentpreviousattributes) or null | Amounts withheld from this line's refund, such as a restocking fee. `adjustments`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributesadjustments). |
| `automatic_refund` | Optional | [RefundLineItemAutomaticRefundPreviousAttributes](../models/RefundLineItemAutomaticRefundPreviousAttributes.md#refundlineitemautomaticrefundpreviousattributes) or null | What Flint calculated for the refunded portion of the line before adjustments. |
| `bundle_id` | Optional | string or null | ID of the bundle the line was sold from. `bundle_id`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesbundle_id). |
| `categories` | Optional | Array of [CategoryReferencePreviousAttributes](../models/CategoryReferencePreviousAttributes.md#categoryreferencepreviousattributes) or null | Catalog categories of the item. `categories`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributescategories). |
| `modifiers` | Optional | Array of [RefundLineItemModifierAllocationPreviousAttributes](../models/RefundLineItemModifierAllocationPreviousAttributes.md#refundlineitemmodifierallocationpreviousattributes) or null | The part of the refund that applies to each modifier on the line. `modifiers`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributesmodifiers). |
| `order_id` | Optional | string or null | ID of the order that owns the refunded line item. `order_id`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributesorder_id). |
| `order_line_item_id` | Optional | string or null | ID of the order line item this allocation refunded. `order_line_item_id`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributesorder_line_item_id). |
| `product_id` | Optional | string or null | ID of the catalog product the line was sold from. `product_id`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributesproduct_id). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity). |
| `refunded_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Amount refunded for this line: the automatic refund less adjustments, plus any refunds back against earlier adjustments. `refunded_money`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributesrefunded_money). |
| `selected_options` | Optional | Array of [SelectedProductOptionPreviousAttributes](../models/SelectedProductOptionPreviousAttributes.md#selectedproductoptionpreviousattributes) or null | Variant options selected for the item, such as size and color. `selected_options`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesselected_options). |
| `sku` | Optional | string or null | SKU of the item as sold. `sku`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributessku). |
| `source_type` | Optional | string or null | Whether the line was sold as a catalog `variant` or a `bundle`. Values: `"variant"`, `"bundle"`. `source_type`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributessource_type). |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefundPreviousAttributes](../models/RefundTaxBreakdownRefundPreviousAttributes.md#refundtaxbreakdownrefundpreviousattributes) or null | Tax reversed for each jurisdiction on this line. `tax_breakdown_refunds`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributestax_breakdown_refunds). |
| `tax_refund_mode` | Optional | string or null | Whether Flint calculated the tax refunded (`automatic`) or you set it (`explicit`). Values: `"automatic"`, `"explicit"`. `tax_refund_mode`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributestax_refund_mode). |
| `variant_id` | Optional | string or null | ID of the catalog variant the line was sold from. `variant_id`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributesvariant_id). |

### RefundLineItemAllocationPreviousAttributes.adjustment_refunds

### RefundLineItemAllocationPreviousAttributes.adjustment_refunds variant 1

anyOf variant 1: Amounts refunded back against adjustments withheld by earlier refunds of this line..

- Value shape: Array of [RefundLineItemAdjustmentRefundPreviousAttributes](../models/RefundLineItemAdjustmentRefundPreviousAttributes.md#refundlineitemadjustmentrefundpreviousattributes). Amounts refunded back against adjustments withheld by earlier refunds of this line. 

### RefundLineItemAllocationPreviousAttributes.adjustment_refunds variant 2

anyOf variant 2.

- Value shape: null. Amounts refunded back against adjustments withheld by earlier refunds of this line. 

### RefundLineItemAllocationPreviousAttributes.adjustments

### RefundLineItemAllocationPreviousAttributes.adjustments variant 1

anyOf variant 1: Amounts withheld from this line's refund, such as a restocking fee..

- Value shape: Array of [RefundLineItemAdjustmentPreviousAttributes](../models/RefundLineItemAdjustmentPreviousAttributes.md#refundlineitemadjustmentpreviousattributes). Amounts withheld from this line's refund, such as a restocking fee. 

### RefundLineItemAllocationPreviousAttributes.adjustments variant 2

anyOf variant 2.

- Value shape: null. Amounts withheld from this line's refund, such as a restocking fee. 

### RefundLineItemAllocationPreviousAttributes.bundle_id

Declared alternatives: [OrderLineItemPreviousAttributes.bundle_id](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesbundle_id).

### RefundLineItemAllocationPreviousAttributes.categories

Declared alternatives: [OrderLineItemPreviousAttributes.categories](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributescategories).

### RefundLineItemAllocationPreviousAttributes.modifiers

### RefundLineItemAllocationPreviousAttributes.modifiers variant 1

anyOf variant 1: The part of the refund that applies to each modifier on the line..

- Value shape: Array of [RefundLineItemModifierAllocationPreviousAttributes](../models/RefundLineItemModifierAllocationPreviousAttributes.md#refundlineitemmodifierallocationpreviousattributes). The part of the refund that applies to each modifier on the line. 

### RefundLineItemAllocationPreviousAttributes.modifiers variant 2

anyOf variant 2.

- Value shape: null. The part of the refund that applies to each modifier on the line. 

### RefundLineItemAllocationPreviousAttributes.order_id

### RefundLineItemAllocationPreviousAttributes.order_id variant 1

anyOf variant 1: ID of the order that owns the refunded line item..

- Value shape: string. ID of the order that owns the refunded line item. ID of the order that owns the refunded line item. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### RefundLineItemAllocationPreviousAttributes.order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order that owns the refunded line item. 

### RefundLineItemAllocationPreviousAttributes.order_line_item_id

### RefundLineItemAllocationPreviousAttributes.order_line_item_id variant 1

anyOf variant 1: ID of the order line item this allocation refunded..

- Value shape: string. ID of the order line item this allocation refunded. ID of the order line item this allocation refunded. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. 

### RefundLineItemAllocationPreviousAttributes.order_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order line item this allocation refunded. 

### RefundLineItemAllocationPreviousAttributes.product_id

### RefundLineItemAllocationPreviousAttributes.product_id variant 1

anyOf variant 1: ID of the catalog product the line was sold from..

- Value shape: string. ID of the catalog product the line was sold from. ID of the catalog product the line was sold from. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. 

### RefundLineItemAllocationPreviousAttributes.product_id variant 2

anyOf variant 2.

- Value shape: null. ID of the catalog product the line was sold from. 

### RefundLineItemAllocationPreviousAttributes.quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributes.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity).

### RefundLineItemAllocationPreviousAttributes.refunded_money

Amount refunded for this line: the automatic refund less adjustments, plus any refunds back against earlier adjustments.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### RefundLineItemAllocationPreviousAttributes.refunded_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### RefundLineItemAllocationPreviousAttributes.refunded_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Amount refunded for this line: the automatic refund less adjustments, plus any refunds back against earlier adjustments. 

### RefundLineItemAllocationPreviousAttributes.refunded_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### RefundLineItemAllocationPreviousAttributes.refunded_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### RefundLineItemAllocationPreviousAttributes.selected_options

Declared alternatives: [OrderLineItemPreviousAttributes.selected_options](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesselected_options).

### RefundLineItemAllocationPreviousAttributes.sku

Declared alternatives: [OrderLineItemPreviousAttributes.sku](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributessku).

### RefundLineItemAllocationPreviousAttributes.source_type

### RefundLineItemAllocationPreviousAttributes.source_type variant 1

anyOf variant 1: Whether the line was sold as a catalog `variant` or a `bundle`..

- Value shape: string. Whether the line was sold as a catalog `variant` or a `bundle`. Values: `"variant"`, `"bundle"`.

### RefundLineItemAllocationPreviousAttributes.source_type variant 2

anyOf variant 2.

- Value shape: null. Whether the line was sold as a catalog `variant` or a `bundle`. 

### RefundLineItemAllocationPreviousAttributes.tax_breakdown_refunds

### RefundLineItemAllocationPreviousAttributes.tax_breakdown_refunds variant 1

anyOf variant 1: Tax reversed for each jurisdiction on this line..

- Value shape: Array of [RefundTaxBreakdownRefundPreviousAttributes](../models/RefundTaxBreakdownRefundPreviousAttributes.md#refundtaxbreakdownrefundpreviousattributes). Tax reversed for each jurisdiction on this line. 

### RefundLineItemAllocationPreviousAttributes.tax_breakdown_refunds variant 2

anyOf variant 2.

- Value shape: null. Tax reversed for each jurisdiction on this line. 

### RefundLineItemAllocationPreviousAttributes.tax_refund_mode

### RefundLineItemAllocationPreviousAttributes.tax_refund_mode variant 1

anyOf variant 1: Whether Flint calculated the tax refunded (`automatic`) or you set it (`explicit`)..

- Value shape: string. Whether Flint calculated the tax refunded (`automatic`) or you set it (`explicit`). Values: `"automatic"`, `"explicit"`.

### RefundLineItemAllocationPreviousAttributes.tax_refund_mode variant 2

anyOf variant 2.

- Value shape: null. Whether Flint calculated the tax refunded (`automatic`) or you set it (`explicit`). 

### RefundLineItemAllocationPreviousAttributes.variant_id

### RefundLineItemAllocationPreviousAttributes.variant_id variant 1

anyOf variant 1: ID of the catalog variant the line was sold from..

- Value shape: string. ID of the catalog variant the line was sold from. ID of the catalog variant the line was sold from. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. 

### RefundLineItemAllocationPreviousAttributes.variant_id variant 2

anyOf variant 2.

- Value shape: null. ID of the catalog variant the line was sold from. 

