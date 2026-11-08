[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundLineItemAdjustment

An adjustment on a refunded line item, such as a restocking fee.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustment_type` | Required | string | What kind of adjustment this is. Values: `"restocking_fee"`, `"withheld_amount"`, `"refund_adjustment"`, `"tax_adjustment"`. |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount withheld from the line's refund. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/RefundLineItemAdjustment.md#refundlineitemadjustmentamount_money). |
| `applies_to` | Required | string | Which part of the line the adjustment reduces. Values: `"none"`, `"gross"`, `"tax"`. |
| `reason` | Required | [RefundAdjustmentReason](../models/RefundAdjustmentReason.md#refundadjustmentreason) | Why the amount was withheld. The reason recorded for a refund line item adjustment, as a `code` with an optional description. `reason`: [field definitions](../models/RefundLineItemAdjustment.md#refundlineitemadjustmentreason). |
| `refund_line_item_adjustment_id` | Required | string | Unique identifier for this refund line item adjustment, prefixed `rlia_`. Example: `"rlia_01KEZF7C00GA968004EWM2QQBC"`. |
| `refunded_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Part of the withheld amount that later refunds have returned. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `refunded_money`: [field definitions](../models/RefundLineItemAdjustment.md#refundlineitemadjustmentrefunded_money). |
| `remaining_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Part of the withheld amount that can still be refunded: `amount_money` less `refunded_money`. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `remaining_money`: [field definitions](../models/RefundLineItemAdjustment.md#refundlineitemadjustmentremaining_money). |

### RefundLineItemAdjustment.amount_money

Amount withheld from the line's refund. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### RefundLineItemAdjustment.reason

Why the amount was withheld. The reason recorded for a refund line item adjustment, as a `code` with an optional description.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string | Why the adjustment was made. Values: [7 declared values](#refundlineitemadjustmentreason-code-values). |
| `description` | Optional | string | Note explaining the reason, up to 1,024 characters. Required when `code` is `other`. |

#### RefundLineItemAdjustment.reason code values

- `"customer_agreement"`
- `"jurisdiction_specific_rule"`
- `"merchant_policy"`
- `"customer_request"`
- `"restocking_policy"`
- `"manual_tax_correction"`
- `"other"`

### RefundLineItemAdjustment.refunded_money

Part of the withheld amount that later refunds have returned. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### RefundLineItemAdjustment.remaining_money

Part of the withheld amount that can still be refunded: `amount_money` less `refunded_money`. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

