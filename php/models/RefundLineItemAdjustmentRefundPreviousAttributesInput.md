[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundLineItemAdjustmentRefundPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Amount refunded back against the adjustment. |
| `original_refund_line_item_adjustment_id` | Optional | string or null | ID of the adjustment this amount was refunded against. `original_refund_line_item_adjustment_id`: [declared alternatives](../models/RefundLineItemAdjustmentRefundPreviousAttributesInput.md#refundlineitemadjustmentrefundpreviousattributesinputoriginal_refund_line_item_adjustment_id). |
| `refund_line_item_adjustment_refund_id` | Optional | string or null | Unique identifier for this refund line item adjustment refund, prefixed `rliar_`. `refund_line_item_adjustment_refund_id`: [declared alternatives](../models/RefundLineItemAdjustmentRefundPreviousAttributesInput.md#refundlineitemadjustmentrefundpreviousattributesinputrefund_line_item_adjustment_refund_id). |

### RefundLineItemAdjustmentRefundPreviousAttributesInput.original_refund_line_item_adjustment_id

### RefundLineItemAdjustmentRefundPreviousAttributesInput.original_refund_line_item_adjustment_id variant 1

anyOf variant 1: ID of the adjustment this amount was refunded against..

- Value shape: string. ID of the adjustment this amount was refunded against. ID of the adjustment this amount was refunded against. Example: `"rlia_01KEZF7C00GA968004EWM2QQBC"`. 

### RefundLineItemAdjustmentRefundPreviousAttributesInput.original_refund_line_item_adjustment_id variant 2

anyOf variant 2.

- Value shape: null. ID of the adjustment this amount was refunded against. 

### RefundLineItemAdjustmentRefundPreviousAttributesInput.refund_line_item_adjustment_refund_id

### RefundLineItemAdjustmentRefundPreviousAttributesInput.refund_line_item_adjustment_refund_id variant 1

anyOf variant 1: Unique identifier for this refund line item adjustment refund, prefixed `rliar_`..

- Value shape: string. Unique identifier for this refund line item adjustment refund, prefixed `rliar_`. Unique identifier for this refund line item adjustment refund, prefixed `rliar_`. Example: `"rliar_01KEZF7C003HSYWXKXGJVRAKZD"`. 

### RefundLineItemAdjustmentRefundPreviousAttributesInput.refund_line_item_adjustment_refund_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this refund line item adjustment refund, prefixed `rliar_`. 

