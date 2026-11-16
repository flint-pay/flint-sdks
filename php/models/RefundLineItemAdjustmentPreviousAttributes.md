[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundLineItemAdjustmentPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustment_type` | Optional | string or null | What kind of adjustment this is. Values: `"restocking_fee"`, `"withheld_amount"`, `"refund_adjustment"`, `"tax_adjustment"`. `adjustment_type`: [declared alternatives](../models/RefundLineItemAdjustmentPreviousAttributes.md#refundlineitemadjustmentpreviousattributesadjustment_type). |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Amount withheld from the line's refund. |
| `applies_to` | Optional | string or null | Which part of the line the adjustment reduces. Values: `"none"`, `"gross"`, `"tax"`. `applies_to`: [declared alternatives](../models/RefundLineItemAdjustmentPreviousAttributes.md#refundlineitemadjustmentpreviousattributesapplies_to). |
| `reason` | Optional | Alternative shapes (see declared variants) | Why the amount was withheld. `reason`: [declared alternatives](../models/RefundLineItemAdjustmentPreviousAttributes.md#refundlineitemadjustmentpreviousattributesreason). |
| `refund_line_item_adjustment_id` | Optional | string or null | Unique identifier for this refund line item adjustment, prefixed `rlia_`. `refund_line_item_adjustment_id`: [declared alternatives](../models/RefundLineItemAdjustmentPreviousAttributes.md#refundlineitemadjustmentpreviousattributesrefund_line_item_adjustment_id). |
| `refunded_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Part of the withheld amount that later refunds have returned. |
| `remaining_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Part of the withheld amount that can still be refunded: `amount_money` less `refunded_money`. |

### RefundLineItemAdjustmentPreviousAttributes.adjustment_type

### RefundLineItemAdjustmentPreviousAttributes.adjustment_type variant 1

anyOf variant 1: What kind of adjustment this is..

- Value shape: string. What kind of adjustment this is. Values: `"restocking_fee"`, `"withheld_amount"`, `"refund_adjustment"`, `"tax_adjustment"`.

### RefundLineItemAdjustmentPreviousAttributes.adjustment_type variant 2

anyOf variant 2.

- Value shape: null. What kind of adjustment this is. 

### RefundLineItemAdjustmentPreviousAttributes.applies_to

### RefundLineItemAdjustmentPreviousAttributes.applies_to variant 1

anyOf variant 1: Which part of the line the adjustment reduces..

- Value shape: string. Which part of the line the adjustment reduces. Values: `"none"`, `"gross"`, `"tax"`.

### RefundLineItemAdjustmentPreviousAttributes.applies_to variant 2

anyOf variant 2.

- Value shape: null. Which part of the line the adjustment reduces. 

### RefundLineItemAdjustmentPreviousAttributes.reason

Why the amount was withheld.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Conditional | string or null | Why the adjustment was made. Values: [7 declared values](#refundlineitemadjustmentpreviousattributesreason-code-values). `code`: [declared alternatives](../models/RefundLineItemAdjustmentPreviousAttributes.md#refundlineitemadjustmentpreviousattributesreason-variant-1code). |
| `description` | Conditional | string or null | Note explaining the reason, up to 1,024 characters. Required when `code` is `other`. `description`: [declared alternatives](../models/RefundLineItemAdjustmentPreviousAttributes.md#refundlineitemadjustmentpreviousattributesreason-variant-1description). |

#### RefundLineItemAdjustmentPreviousAttributes.reason code values

- `"customer_agreement"`
- `"jurisdiction_specific_rule"`
- `"merchant_policy"`
- `"customer_request"`
- `"restocking_policy"`
- `"manual_tax_correction"`
- `"other"`

### RefundLineItemAdjustmentPreviousAttributes.reason variant 1

anyOf RefundAdjustmentReasonPreviousAttributes.

- Optional: `code`, `description`.

### RefundLineItemAdjustmentPreviousAttributes.reason variant 2

anyOf variant 2.

- Undeclared: `code`, `description`.
- Value shape: null. Why the amount was withheld. 

### RefundLineItemAdjustmentPreviousAttributes.reason variant 1.code

### RefundLineItemAdjustmentPreviousAttributes.reason variant 1.code variant 1

anyOf variant 1: Why the adjustment was made..

- Value shape: string. Why the adjustment was made. Values: `"customer_agreement"`, `"jurisdiction_specific_rule"`, `"merchant_policy"`, `"customer_request"`, `"restocking_policy"`, `"manual_tax_correction"`, `"other"`.

### RefundLineItemAdjustmentPreviousAttributes.reason variant 1.code variant 2

anyOf variant 2.

- Value shape: null. Why the adjustment was made. 

### RefundLineItemAdjustmentPreviousAttributes.reason variant 1.description

### RefundLineItemAdjustmentPreviousAttributes.reason variant 1.description variant 1

anyOf variant 1: Note explaining the reason, up to 1,024 characters. Required when `code` is `other`..

- Value shape: string. Note explaining the reason, up to 1,024 characters. Required when `code` is `other`. 

### RefundLineItemAdjustmentPreviousAttributes.reason variant 1.description variant 2

anyOf variant 2.

- Value shape: null. Note explaining the reason, up to 1,024 characters. Required when `code` is `other`. 

### RefundLineItemAdjustmentPreviousAttributes.refund_line_item_adjustment_id

### RefundLineItemAdjustmentPreviousAttributes.refund_line_item_adjustment_id variant 1

anyOf variant 1: Unique identifier for this refund line item adjustment, prefixed `rlia_`..

- Value shape: string. Unique identifier for this refund line item adjustment, prefixed `rlia_`. 

### RefundLineItemAdjustmentPreviousAttributes.refund_line_item_adjustment_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this refund line item adjustment, prefixed `rlia_`. 

