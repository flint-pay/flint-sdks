[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundLineItemAdjustmentIn

An adjustment to apply to a refunded line item, such as a restocking fee or withheld amount, and whether it applies to the gross amount or tax.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustment_type` | Required | string | What kind of adjustment this is. Values: `"restocking_fee"`, `"withheld_amount"`, `"refund_adjustment"`, `"tax_adjustment"`. |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount to withhold from the line's refund. Above zero, in the refund's currency. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/RefundLineItemAdjustmentIn.md#refundlineitemadjustmentinamount_money). |
| `applies_to` | Required | string | Which part of the line the adjustment reduces. Values: `"none"`, `"gross"`, `"tax"`. |
| `reason` | Required | [RefundAdjustmentReason](../models/RefundAdjustmentReason.md#refundadjustmentreason) | Why the amount is withheld. The reason to record for a refund adjustment, as a `code` with an optional description. `reason`: [field definitions](../models/RefundLineItemAdjustmentIn.md#refundlineitemadjustmentinreason). |

### RefundLineItemAdjustmentIn.amount_money

Amount to withhold from the line's refund. Above zero, in the refund's currency. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### RefundLineItemAdjustmentIn.reason

Why the amount is withheld. The reason to record for a refund adjustment, as a `code` with an optional description.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string | Why the adjustment was made. Values: [7 declared values](#refundlineitemadjustmentinreason-code-values). |
| `description` | Optional | string | Note explaining the reason, up to 1,024 characters. Required when `code` is `other`. minLength: `1`. |

#### RefundLineItemAdjustmentIn.reason code values

- `"customer_agreement"`
- `"jurisdiction_specific_rule"`
- `"merchant_policy"`
- `"customer_request"`
- `"restocking_policy"`
- `"manual_tax_correction"`
- `"other"`

