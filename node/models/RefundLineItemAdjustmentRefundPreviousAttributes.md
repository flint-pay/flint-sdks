[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundLineItemAdjustmentRefundPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Amount refunded back against the adjustment. `amount_money`: [declared alternatives](../models/RefundLineItemAdjustmentRefundPreviousAttributes.md#refundlineitemadjustmentrefundpreviousattributesamount_money). |
| `original_refund_line_item_adjustment_id` | Optional | string or null | ID of the adjustment this amount was refunded against. `original_refund_line_item_adjustment_id`: [declared alternatives](../models/RefundLineItemAdjustmentRefundPreviousAttributes.md#refundlineitemadjustmentrefundpreviousattributesoriginal_refund_line_item_adjustment_id). |
| `refund_line_item_adjustment_refund_id` | Optional | string or null | Unique identifier for this refund line item adjustment refund, prefixed `rliar_`. `refund_line_item_adjustment_refund_id`: [declared alternatives](../models/RefundLineItemAdjustmentRefundPreviousAttributes.md#refundlineitemadjustmentrefundpreviousattributesrefund_line_item_adjustment_refund_id). |

### RefundLineItemAdjustmentRefundPreviousAttributes.amount_money

Amount refunded back against the adjustment.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### RefundLineItemAdjustmentRefundPreviousAttributes.amount_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### RefundLineItemAdjustmentRefundPreviousAttributes.amount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Amount refunded back against the adjustment. 

### RefundLineItemAdjustmentRefundPreviousAttributes.amount_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### RefundLineItemAdjustmentRefundPreviousAttributes.amount_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### RefundLineItemAdjustmentRefundPreviousAttributes.original_refund_line_item_adjustment_id

### RefundLineItemAdjustmentRefundPreviousAttributes.original_refund_line_item_adjustment_id variant 1

anyOf variant 1: ID of the adjustment this amount was refunded against..

- Value shape: string. ID of the adjustment this amount was refunded against. ID of the adjustment this amount was refunded against. Example: `"rlia_01KEZF7C00GA968004EWM2QQBC"`. 

### RefundLineItemAdjustmentRefundPreviousAttributes.original_refund_line_item_adjustment_id variant 2

anyOf variant 2.

- Value shape: null. ID of the adjustment this amount was refunded against. 

### RefundLineItemAdjustmentRefundPreviousAttributes.refund_line_item_adjustment_refund_id

### RefundLineItemAdjustmentRefundPreviousAttributes.refund_line_item_adjustment_refund_id variant 1

anyOf variant 1: Unique identifier for this refund line item adjustment refund, prefixed `rliar_`..

- Value shape: string. Unique identifier for this refund line item adjustment refund, prefixed `rliar_`. Unique identifier for this refund line item adjustment refund, prefixed `rliar_`. Example: `"rliar_01KEZF7C003HSYWXKXGJVRAKZD"`. 

### RefundLineItemAdjustmentRefundPreviousAttributes.refund_line_item_adjustment_refund_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this refund line item adjustment refund, prefixed `rliar_`. 

