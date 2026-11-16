[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundLineItemAdjustmentPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustment_type` | Optional | string or null | What kind of adjustment this is. Values: `"restocking_fee"`, `"withheld_amount"`, `"refund_adjustment"`, `"tax_adjustment"`. `adjustment_type`: [declared alternatives](../models/RefundLineItemAdjustmentPreviousAttributesInput.md#refundlineitemadjustmentpreviousattributesinputadjustment_type). |
| `amount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Amount withheld from the line's refund. |
| `applies_to` | Optional | string or null | Which part of the line the adjustment reduces. Values: `"none"`, `"gross"`, `"tax"`. `applies_to`: [declared alternatives](../models/RefundLineItemAdjustmentPreviousAttributesInput.md#refundlineitemadjustmentpreviousattributesinputapplies_to). |
| `reason` | Optional | [RefundAdjustmentReasonPreviousAttributesInput](../models/RefundAdjustmentReasonPreviousAttributesInput.md#refundadjustmentreasonpreviousattributesinput) or null | Why the amount was withheld. |
| `refund_line_item_adjustment_id` | Optional | string or null | Unique identifier for this refund line item adjustment, prefixed `rlia_`. `refund_line_item_adjustment_id`: [declared alternatives](../models/RefundLineItemAdjustmentPreviousAttributesInput.md#refundlineitemadjustmentpreviousattributesinputrefund_line_item_adjustment_id). |
| `refunded_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Part of the withheld amount that later refunds have returned. |
| `remaining_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Part of the withheld amount that can still be refunded: `amount_money` less `refunded_money`. |

### RefundLineItemAdjustmentPreviousAttributesInput.adjustment_type

### RefundLineItemAdjustmentPreviousAttributesInput.adjustment_type variant 1

anyOf variant 1: What kind of adjustment this is..

- Value shape: string. What kind of adjustment this is. Values: `"restocking_fee"`, `"withheld_amount"`, `"refund_adjustment"`, `"tax_adjustment"`.

### RefundLineItemAdjustmentPreviousAttributesInput.adjustment_type variant 2

anyOf variant 2.

- Value shape: null. What kind of adjustment this is. 

### RefundLineItemAdjustmentPreviousAttributesInput.applies_to

### RefundLineItemAdjustmentPreviousAttributesInput.applies_to variant 1

anyOf variant 1: Which part of the line the adjustment reduces..

- Value shape: string. Which part of the line the adjustment reduces. Values: `"none"`, `"gross"`, `"tax"`.

### RefundLineItemAdjustmentPreviousAttributesInput.applies_to variant 2

anyOf variant 2.

- Value shape: null. Which part of the line the adjustment reduces. 

### RefundLineItemAdjustmentPreviousAttributesInput.refund_line_item_adjustment_id

### RefundLineItemAdjustmentPreviousAttributesInput.refund_line_item_adjustment_id variant 1

anyOf variant 1: Unique identifier for this refund line item adjustment, prefixed `rlia_`..

- Value shape: string. Unique identifier for this refund line item adjustment, prefixed `rlia_`. Unique identifier for this refund line item adjustment, prefixed `rlia_`. Example: `"rlia_01KEZF7C00GA968004EWM2QQBC"`. 

### RefundLineItemAdjustmentPreviousAttributesInput.refund_line_item_adjustment_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this refund line item adjustment, prefixed `rlia_`. 

