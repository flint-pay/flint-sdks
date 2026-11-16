[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundLineItemAllocationPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustment_refunds` | Optional | Array of [RefundLineItemAdjustmentRefundPreviousAttributes](../models/RefundLineItemAdjustmentRefundPreviousAttributes.md#refundlineitemadjustmentrefundpreviousattributes) or null | Amounts refunded back against adjustments withheld by earlier refunds of this line. `adjustment_refunds`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributesadjustment_refunds). |
| `adjustments` | Optional | Array of [RefundLineItemAdjustmentPreviousAttributes](../models/RefundLineItemAdjustmentPreviousAttributes.md#refundlineitemadjustmentpreviousattributes) or null | Amounts withheld from this line's refund, such as a restocking fee. `adjustments`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributesadjustments). |
| `automatic_refund` | Optional | [RefundLineItemAutomaticRefundPreviousAttributes](../models/RefundLineItemAutomaticRefundPreviousAttributes.md#refundlineitemautomaticrefundpreviousattributes) or null | What Flint calculated for the refunded portion of the line before adjustments. |
| `bundle_id` | Optional | string or null | ID of the bundle the line was sold from. `bundle_id`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributesbundle_id). |
| `categories` | Optional | Array of [CategoryReferencePreviousAttributes](../models/CategoryReferencePreviousAttributes.md#categoryreferencepreviousattributes) or null | Catalog categories of the item. `categories`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributescategories). |
| `modifiers` | Optional | Array of [RefundLineItemModifierAllocationPreviousAttributes](../models/RefundLineItemModifierAllocationPreviousAttributes.md#refundlineitemmodifierallocationpreviousattributes) or null | The part of the refund that applies to each modifier on the line. `modifiers`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributesmodifiers). |
| `order_id` | Optional | string or null | ID of the order that owns the refunded line item. `order_id`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributesorder_id). |
| `order_line_item_id` | Optional | string or null | ID of the order line item this allocation refunded. `order_line_item_id`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributesorder_line_item_id). |
| `product_id` | Optional | string or null | ID of the catalog product the line was sold from. `product_id`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributesproduct_id). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `refunded_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Amount refunded for this line: the automatic refund less adjustments, plus any refunds back against earlier adjustments. |
| `selected_options` | Optional | Array of [SelectedProductOptionPreviousAttributes](../models/SelectedProductOptionPreviousAttributes.md#selectedproductoptionpreviousattributes) or null | Variant options selected for the item, such as size and color. `selected_options`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributesselected_options). |
| `sku` | Optional | string or null | SKU of the item as sold. `sku`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributessku). |
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

### RefundLineItemAllocationPreviousAttributes.adjustment_refunds variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Amount refunded back against the adjustment. |
| `original_refund_line_item_adjustment_id` | Optional | string or null | ID of the adjustment this amount was refunded against. `original_refund_line_item_adjustment_id`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributesadjustment_refunds-variant-1-fields-1original_refund_line_item_adjustment_id). |
| `refund_line_item_adjustment_refund_id` | Optional | string or null | Unique identifier for this refund line item adjustment refund, prefixed `rliar_`. `refund_line_item_adjustment_refund_id`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributesadjustment_refunds-variant-1-fields-1refund_line_item_adjustment_refund_id). |

### RefundLineItemAllocationPreviousAttributes.adjustment_refunds variant 1.[] fields 1.original_refund_line_item_adjustment_id

### RefundLineItemAllocationPreviousAttributes.adjustment_refunds variant 1.[] fields 1.original_refund_line_item_adjustment_id variant 1

anyOf variant 1: ID of the adjustment this amount was refunded against..

- Value shape: string. ID of the adjustment this amount was refunded against. ID of the adjustment this amount was refunded against. Example: `"rlia_01KEZF7C00GA968004EWM2QQBC"`. 

### RefundLineItemAllocationPreviousAttributes.adjustment_refunds variant 1.[] fields 1.original_refund_line_item_adjustment_id variant 2

anyOf variant 2.

- Value shape: null. ID of the adjustment this amount was refunded against. 

### RefundLineItemAllocationPreviousAttributes.adjustment_refunds variant 1.[] fields 1.refund_line_item_adjustment_refund_id

### RefundLineItemAllocationPreviousAttributes.adjustment_refunds variant 1.[] fields 1.refund_line_item_adjustment_refund_id variant 1

anyOf variant 1: Unique identifier for this refund line item adjustment refund, prefixed `rliar_`..

- Value shape: string. Unique identifier for this refund line item adjustment refund, prefixed `rliar_`. Unique identifier for this refund line item adjustment refund, prefixed `rliar_`. Example: `"rliar_01KEZF7C003HSYWXKXGJVRAKZD"`. 

### RefundLineItemAllocationPreviousAttributes.adjustment_refunds variant 1.[] fields 1.refund_line_item_adjustment_refund_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this refund line item adjustment refund, prefixed `rliar_`. 

### RefundLineItemAllocationPreviousAttributes.adjustments

### RefundLineItemAllocationPreviousAttributes.adjustments variant 1

anyOf variant 1: Amounts withheld from this line's refund, such as a restocking fee..

- Value shape: Array of [RefundLineItemAdjustmentPreviousAttributes](../models/RefundLineItemAdjustmentPreviousAttributes.md#refundlineitemadjustmentpreviousattributes). Amounts withheld from this line's refund, such as a restocking fee. 

### RefundLineItemAllocationPreviousAttributes.adjustments variant 2

anyOf variant 2.

- Value shape: null. Amounts withheld from this line's refund, such as a restocking fee. 

### RefundLineItemAllocationPreviousAttributes.adjustments variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustment_type` | Optional | string or null | What kind of adjustment this is. Values: `"restocking_fee"`, `"withheld_amount"`, `"refund_adjustment"`, `"tax_adjustment"`. `adjustment_type`: [declared alternatives](../models/RefundLineItemAdjustmentPreviousAttributes.md#refundlineitemadjustmentpreviousattributesadjustment_type). |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Amount withheld from the line's refund. |
| `applies_to` | Optional | string or null | Which part of the line the adjustment reduces. Values: `"none"`, `"gross"`, `"tax"`. `applies_to`: [declared alternatives](../models/RefundLineItemAdjustmentPreviousAttributes.md#refundlineitemadjustmentpreviousattributesapplies_to). |
| `reason` | Optional | [RefundAdjustmentReasonPreviousAttributes](../models/RefundAdjustmentReasonPreviousAttributes.md#refundadjustmentreasonpreviousattributes) or null | Why the amount was withheld. |
| `refund_line_item_adjustment_id` | Optional | string or null | Unique identifier for this refund line item adjustment, prefixed `rlia_`. `refund_line_item_adjustment_id`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributesadjustments-variant-1-fields-1refund_line_item_adjustment_id). |
| `refunded_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Part of the withheld amount that later refunds have returned. |
| `remaining_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Part of the withheld amount that can still be refunded: `amount_money` less `refunded_money`. |

### RefundLineItemAllocationPreviousAttributes.adjustments variant 1.[] fields 1.adjustment_type

Declared alternatives: [RefundLineItemAdjustmentPreviousAttributes.adjustment_type](../models/RefundLineItemAdjustmentPreviousAttributes.md#refundlineitemadjustmentpreviousattributesadjustment_type).

### RefundLineItemAllocationPreviousAttributes.adjustments variant 1.[] fields 1.applies_to

Declared alternatives: [RefundLineItemAdjustmentPreviousAttributes.applies_to](../models/RefundLineItemAdjustmentPreviousAttributes.md#refundlineitemadjustmentpreviousattributesapplies_to).

### RefundLineItemAllocationPreviousAttributes.adjustments variant 1.[] fields 1.refund_line_item_adjustment_id

### RefundLineItemAllocationPreviousAttributes.adjustments variant 1.[] fields 1.refund_line_item_adjustment_id variant 1

anyOf variant 1: Unique identifier for this refund line item adjustment, prefixed `rlia_`..

- Value shape: string. Unique identifier for this refund line item adjustment, prefixed `rlia_`. Unique identifier for this refund line item adjustment, prefixed `rlia_`. Example: `"rlia_01KEZF7C00GA968004EWM2QQBC"`. 

### RefundLineItemAllocationPreviousAttributes.adjustments variant 1.[] fields 1.refund_line_item_adjustment_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this refund line item adjustment, prefixed `rlia_`. 

### RefundLineItemAllocationPreviousAttributes.bundle_id

### RefundLineItemAllocationPreviousAttributes.bundle_id variant 1

anyOf variant 1: ID of the bundle the line was sold from..

- Value shape: string. ID of the bundle the line was sold from. 

### RefundLineItemAllocationPreviousAttributes.bundle_id variant 2

anyOf variant 2.

- Value shape: null. ID of the bundle the line was sold from. 

### RefundLineItemAllocationPreviousAttributes.categories

### RefundLineItemAllocationPreviousAttributes.categories variant 1

anyOf variant 1: Catalog categories of the item..

- Value shape: Array of [CategoryReferencePreviousAttributes](../models/CategoryReferencePreviousAttributes.md#categoryreferencepreviousattributes). Catalog categories of the item. 

### RefundLineItemAllocationPreviousAttributes.categories variant 2

anyOf variant 2.

- Value shape: null. Catalog categories of the item. 

### RefundLineItemAllocationPreviousAttributes.categories variant 1.[] fields 1

Field definitions: [BundleArchivedMerchantEventDataPreviousAttributes.categories variant 1.[] fields 1](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributescategories-variant-1-fields-1).

### RefundLineItemAllocationPreviousAttributes.modifiers

### RefundLineItemAllocationPreviousAttributes.modifiers variant 1

anyOf variant 1: The part of the refund that applies to each modifier on the line..

- Value shape: Array of [RefundLineItemModifierAllocationPreviousAttributes](../models/RefundLineItemModifierAllocationPreviousAttributes.md#refundlineitemmodifierallocationpreviousattributes). The part of the refund that applies to each modifier on the line. 

### RefundLineItemAllocationPreviousAttributes.modifiers variant 2

anyOf variant 2.

- Value shape: null. The part of the refund that applies to each modifier on the line. 

### RefundLineItemAllocationPreviousAttributes.modifiers variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allocation_basis` | Optional | string or null | Whether the line item was refunded by quantity or by amount. Values: `"quantity"`, `"amount"`. `allocation_basis`: [declared alternatives](../models/RefundLineItemModifierAllocationPreviousAttributes.md#refundlineitemmodifierallocationpreviousattributesallocation_basis). |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Part of the line's refund that applies to this modifier. |
| `modifier_group_name` | Optional | string or null | Name of the modifier group the modifier belongs to. `modifier_group_name`: [declared alternatives](../models/RefundLineItemModifierAllocationPreviousAttributes.md#refundlineitemmodifierallocationpreviousattributesmodifier_group_name). |
| `name` | Optional | string or null | Name of the selected modifier recorded on the order line item. `name`: [declared alternatives](../models/RefundLineItemModifierAllocationPreviousAttributes.md#refundlineitemmodifierallocationpreviousattributesname). |
| `order_line_item_modifier_id` | Optional | string or null | ID of the modifier on the order line item that this part of the refund applies to. `order_line_item_modifier_id`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributesmodifiers-variant-1-fields-1order_line_item_modifier_id). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `refund_line_item_modifier_allocation_id` | Optional | string or null | Unique identifier for this modifier's share of the refund, prefixed rlima_. `refund_line_item_modifier_allocation_id`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributesmodifiers-variant-1-fields-1refund_line_item_modifier_allocation_id). |
| `show_on_fulfillment` | Optional | boolean or null | Whether this selection appears in fulfillment details, recorded when selected. `show_on_fulfillment`: [declared alternatives](../models/RefundLineItemModifierAllocationPreviousAttributes.md#refundlineitemmodifierallocationpreviousattributesshow_on_fulfillment). |
| `show_on_receipt` | Optional | boolean or null | Whether this selection appears on buyer receipts, recorded when selected. `show_on_receipt`: [declared alternatives](../models/RefundLineItemModifierAllocationPreviousAttributes.md#refundlineitemmodifierallocationpreviousattributesshow_on_receipt). |
| `source_type` | Optional | string or null | Whether the selection is a catalog list modifier or buyer-entered text. Values: `"catalog_modifier"`, `"text"`. `source_type`: [declared alternatives](../models/RefundLineItemModifierAllocationPreviousAttributes.md#refundlineitemmodifierallocationpreviousattributessource_type). |
| `text_value` | Optional | string or null | Buyer-entered text recorded for a text modifier selection. `text_value`: [declared alternatives](../models/RefundLineItemModifierAllocationPreviousAttributes.md#refundlineitemmodifierallocationpreviousattributestext_value). |

### RefundLineItemAllocationPreviousAttributes.modifiers variant 1.[] fields 1.allocation_basis

Declared alternatives: [RefundLineItemModifierAllocationPreviousAttributes.allocation_basis](../models/RefundLineItemModifierAllocationPreviousAttributes.md#refundlineitemmodifierallocationpreviousattributesallocation_basis).

### RefundLineItemAllocationPreviousAttributes.modifiers variant 1.[] fields 1.modifier_group_name

Declared alternatives: [RefundLineItemModifierAllocationPreviousAttributes.modifier_group_name](../models/RefundLineItemModifierAllocationPreviousAttributes.md#refundlineitemmodifierallocationpreviousattributesmodifier_group_name).

### RefundLineItemAllocationPreviousAttributes.modifiers variant 1.[] fields 1.name

Declared alternatives: [RefundLineItemModifierAllocationPreviousAttributes.name](../models/RefundLineItemModifierAllocationPreviousAttributes.md#refundlineitemmodifierallocationpreviousattributesname).

### RefundLineItemAllocationPreviousAttributes.modifiers variant 1.[] fields 1.order_line_item_modifier_id

### RefundLineItemAllocationPreviousAttributes.modifiers variant 1.[] fields 1.order_line_item_modifier_id variant 1

anyOf variant 1: ID of the modifier on the order line item that this part of the refund applies to..

- Value shape: string. ID of the modifier on the order line item that this part of the refund applies to. ID of the modifier on the order line item that this part of the refund applies to. Example: `"olim_01KEZF7C00YP0WSZGRAD25EB1Z"`. 

### RefundLineItemAllocationPreviousAttributes.modifiers variant 1.[] fields 1.order_line_item_modifier_id variant 2

anyOf variant 2.

- Value shape: null. ID of the modifier on the order line item that this part of the refund applies to. 

### RefundLineItemAllocationPreviousAttributes.modifiers variant 1.[] fields 1.quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### RefundLineItemAllocationPreviousAttributes.modifiers variant 1.[] fields 1.refund_line_item_modifier_allocation_id

### RefundLineItemAllocationPreviousAttributes.modifiers variant 1.[] fields 1.refund_line_item_modifier_allocation_id variant 1

anyOf variant 1: Unique identifier for this modifier's share of the refund, prefixed rlima_..

- Value shape: string. Unique identifier for this modifier's share of the refund, prefixed rlima_. Unique identifier for this modifier's share of the refund, prefixed rlima_. Example: `"rlima_01KEZF7C00SRZH0NHAKJB05NEM"`. 

### RefundLineItemAllocationPreviousAttributes.modifiers variant 1.[] fields 1.refund_line_item_modifier_allocation_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this modifier's share of the refund, prefixed rlima_. 

### RefundLineItemAllocationPreviousAttributes.modifiers variant 1.[] fields 1.show_on_fulfillment

Declared alternatives: [RefundLineItemModifierAllocationPreviousAttributes.show_on_fulfillment](../models/RefundLineItemModifierAllocationPreviousAttributes.md#refundlineitemmodifierallocationpreviousattributesshow_on_fulfillment).

### RefundLineItemAllocationPreviousAttributes.modifiers variant 1.[] fields 1.show_on_receipt

Declared alternatives: [RefundLineItemModifierAllocationPreviousAttributes.show_on_receipt](../models/RefundLineItemModifierAllocationPreviousAttributes.md#refundlineitemmodifierallocationpreviousattributesshow_on_receipt).

### RefundLineItemAllocationPreviousAttributes.modifiers variant 1.[] fields 1.source_type

Declared alternatives: [RefundLineItemModifierAllocationPreviousAttributes.source_type](../models/RefundLineItemModifierAllocationPreviousAttributes.md#refundlineitemmodifierallocationpreviousattributessource_type).

### RefundLineItemAllocationPreviousAttributes.modifiers variant 1.[] fields 1.text_value

Declared alternatives: [RefundLineItemModifierAllocationPreviousAttributes.text_value](../models/RefundLineItemModifierAllocationPreviousAttributes.md#refundlineitemmodifierallocationpreviousattributestext_value).

### RefundLineItemAllocationPreviousAttributes.order_id

### RefundLineItemAllocationPreviousAttributes.order_id variant 1

anyOf variant 1: ID of the order that owns the refunded line item..

- Value shape: string. ID of the order that owns the refunded line item. 

### RefundLineItemAllocationPreviousAttributes.order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order that owns the refunded line item. 

### RefundLineItemAllocationPreviousAttributes.order_line_item_id

### RefundLineItemAllocationPreviousAttributes.order_line_item_id variant 1

anyOf variant 1: ID of the order line item this allocation refunded..

- Value shape: string. ID of the order line item this allocation refunded. 

### RefundLineItemAllocationPreviousAttributes.order_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order line item this allocation refunded. 

### RefundLineItemAllocationPreviousAttributes.product_id

### RefundLineItemAllocationPreviousAttributes.product_id variant 1

anyOf variant 1: ID of the catalog product the line was sold from..

- Value shape: string. ID of the catalog product the line was sold from. 

### RefundLineItemAllocationPreviousAttributes.product_id variant 2

anyOf variant 2.

- Value shape: null. ID of the catalog product the line was sold from. 

### RefundLineItemAllocationPreviousAttributes.quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### RefundLineItemAllocationPreviousAttributes.selected_options

### RefundLineItemAllocationPreviousAttributes.selected_options variant 1

anyOf variant 1: Variant options selected for the item, such as size and color..

- Value shape: Array of [SelectedProductOptionPreviousAttributes](../models/SelectedProductOptionPreviousAttributes.md#selectedproductoptionpreviousattributes). Variant options selected for the item, such as size and color. 

### RefundLineItemAllocationPreviousAttributes.selected_options variant 2

anyOf variant 2.

- Value shape: null. Variant options selected for the item, such as size and color. 

### RefundLineItemAllocationPreviousAttributes.selected_options variant 1.[] fields 1

Field definitions: [BundleComponentVariantSummaryPreviousAttributes.selected_options variant 1.[] fields 1](../models/BundleComponentVariantSummaryPreviousAttributes.md#bundlecomponentvariantsummarypreviousattributesselected_options-variant-1-fields-1).

### RefundLineItemAllocationPreviousAttributes.sku

### RefundLineItemAllocationPreviousAttributes.sku variant 1

anyOf variant 1: SKU of the item as sold..

- Value shape: string. SKU of the item as sold. 

### RefundLineItemAllocationPreviousAttributes.sku variant 2

anyOf variant 2.

- Value shape: null. SKU of the item as sold. 

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

### RefundLineItemAllocationPreviousAttributes.tax_breakdown_refunds variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_charge_id` | Optional | string or null | ID of the order charge whose tax this reverses. Present only in the refund's top-level `tax_breakdown_refunds`. `order_charge_id`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributestax_breakdown_refunds-variant-1-fields-1order_charge_id). |
| `order_id` | Optional | string or null | ID of the order that owns this tax breakdown and its line item or charge, when present. `order_id`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributestax_breakdown_refunds-variant-1-fields-1order_id). |
| `tax_breakdown_id` | Optional | string or null | ID of the tax breakdown (one jurisdiction's tax) this entry reverses. `tax_breakdown_id`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributestax_breakdown_refunds-variant-1-fields-1tax_breakdown_id). |
| `tax_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Tax reversed for this breakdown. |

### RefundLineItemAllocationPreviousAttributes.tax_breakdown_refunds variant 1.[] fields 1.order_charge_id

### RefundLineItemAllocationPreviousAttributes.tax_breakdown_refunds variant 1.[] fields 1.order_charge_id variant 1

anyOf variant 1: ID of the order charge whose tax this reverses. Present only in the refund's top-level `tax_breakdown_refunds`..

- Value shape: string. ID of the order charge whose tax this reverses. Present only in the refund's top-level `tax_breakdown_refunds`. ID of the order charge whose tax this reverses. Present only in the refund's top-level `tax_breakdown_refunds`. Example: `"och_01KEZF7C00XX8AKACP0GHKFWWT"`. 

### RefundLineItemAllocationPreviousAttributes.tax_breakdown_refunds variant 1.[] fields 1.order_charge_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order charge whose tax this reverses. Present only in the refund's top-level `tax_breakdown_refunds`. 

### RefundLineItemAllocationPreviousAttributes.tax_breakdown_refunds variant 1.[] fields 1.order_id

### RefundLineItemAllocationPreviousAttributes.tax_breakdown_refunds variant 1.[] fields 1.order_id variant 1

anyOf variant 1: ID of the order that owns this tax breakdown and its line item or charge, when present..

- Value shape: string. ID of the order that owns this tax breakdown and its line item or charge, when present. ID of the order that owns this tax breakdown and its line item or charge, when present. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### RefundLineItemAllocationPreviousAttributes.tax_breakdown_refunds variant 1.[] fields 1.order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order that owns this tax breakdown and its line item or charge, when present. 

### RefundLineItemAllocationPreviousAttributes.tax_breakdown_refunds variant 1.[] fields 1.tax_breakdown_id

### RefundLineItemAllocationPreviousAttributes.tax_breakdown_refunds variant 1.[] fields 1.tax_breakdown_id variant 1

anyOf variant 1: ID of the tax breakdown (one jurisdiction's tax) this entry reverses..

- Value shape: string. ID of the tax breakdown (one jurisdiction's tax) this entry reverses. ID of the tax breakdown (one jurisdiction's tax) this entry reverses. Example: `"txb_01KEZF7C00SHMN8QWCA8PT1HSB"`. 

### RefundLineItemAllocationPreviousAttributes.tax_breakdown_refunds variant 1.[] fields 1.tax_breakdown_id variant 2

anyOf variant 2.

- Value shape: null. ID of the tax breakdown (one jurisdiction's tax) this entry reverses. 

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

- Value shape: string. ID of the catalog variant the line was sold from. 

### RefundLineItemAllocationPreviousAttributes.variant_id variant 2

anyOf variant 2.

- Value shape: null. ID of the catalog variant the line was sold from. 

