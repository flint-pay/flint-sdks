[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceLateFeePolicyFixedPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Fixed fee in the invoice currency. Required for fixed and omitted for percentage. `amount_money`: [declared alternatives](../models/InvoiceLateFeePolicyFixedPreviousAttributes.md#invoicelatefeepolicyfixedpreviousattributesamount_money). |
| `application_mode` | Optional | string or null | Whether Flint applies the one-time fee automatically after the grace period. Omission defaults to manual. Frozen when the invoice is issued. Values: `"manual"`, `"automatic"`. `application_mode`: [declared alternatives](../models/InvoiceLateFeePolicyFixedPreviousAttributes.md#invoicelatefeepolicyfixedpreviousattributesapplication_mode). |
| `grace_period_days` | Optional | integer or null | Calendar days from the start of due_date in the invoice timezone (UTC when absent) before a late fee is eligible. Never eligible before the due date ends. An on_receipt term requires at least 1 day. `grace_period_days`: [declared alternatives](../models/InvoiceLateFeePolicyFixedPreviousAttributes.md#invoicelatefeepolicyfixedpreviousattributesgrace_period_days). |
| `percent` | Optional | number or null | Percentage applied to the fee base_outstanding_money. `percent`: [declared alternatives](../models/InvoiceLateFeePolicyFixedPreviousAttributes.md#invoicelatefeepolicyfixedpreviousattributespercent). |
| `type` | Optional | string or null | How the one-time late fee is calculated. Values: `"fixed"`. `type`: [declared alternatives](../models/InvoiceLateFeePolicyFixedPreviousAttributes.md#invoicelatefeepolicyfixedpreviousattributestype). |

### InvoiceLateFeePolicyFixedPreviousAttributes.amount_money

Fixed fee in the invoice currency. Required for fixed and omitted for percentage.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### InvoiceLateFeePolicyFixedPreviousAttributes.amount_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### InvoiceLateFeePolicyFixedPreviousAttributes.amount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Fixed fee in the invoice currency. Required for fixed and omitted for percentage. 

### InvoiceLateFeePolicyFixedPreviousAttributes.amount_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### InvoiceLateFeePolicyFixedPreviousAttributes.amount_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### InvoiceLateFeePolicyFixedPreviousAttributes.application_mode

### InvoiceLateFeePolicyFixedPreviousAttributes.application_mode variant 1

anyOf variant 1: Whether Flint applies the one-time fee automatically after the grace period. Omission defaults to manual. Frozen when the invoice is issued..

- Value shape: string. Whether Flint applies the one-time fee automatically after the grace period. Omission defaults to manual. Frozen when the invoice is issued. Whether Flint applies the one-time fee automatically after the grace period. Omission defaults to manual. Frozen when the invoice is issued. Default: `"manual"`. Values: `"manual"`, `"automatic"`.

### InvoiceLateFeePolicyFixedPreviousAttributes.application_mode variant 2

anyOf variant 2.

- Value shape: null. Whether Flint applies the one-time fee automatically after the grace period. Omission defaults to manual. Frozen when the invoice is issued. 

### InvoiceLateFeePolicyFixedPreviousAttributes.grace_period_days

### InvoiceLateFeePolicyFixedPreviousAttributes.grace_period_days variant 1

anyOf variant 1: Calendar days from the start of due_date in the invoice timezone (UTC when absent) before a late fee is eligible. Never eligible before the due date ends. An on_receipt term requires at least 1 day..

- Value shape: integer. Calendar days from the start of due_date in the invoice timezone (UTC when absent) before a late fee is eligible. Never eligible before the due date ends. An on_receipt term requires at least 1 day. Calendar days from the start of due_date in the invoice timezone (UTC when absent) before a late fee is eligible. Never eligible before the due date ends. An on_receipt term requires at least 1 day. Format: `int32`. minimum: `0`. maximum: `365`. 

### InvoiceLateFeePolicyFixedPreviousAttributes.grace_period_days variant 2

anyOf variant 2.

- Value shape: null. Calendar days from the start of due_date in the invoice timezone (UTC when absent) before a late fee is eligible. Never eligible before the due date ends. An on_receipt term requires at least 1 day. 

### InvoiceLateFeePolicyFixedPreviousAttributes.percent

### InvoiceLateFeePolicyFixedPreviousAttributes.percent variant 1

anyOf variant 1: Percentage applied to the fee base_outstanding_money..

- Value shape: number. Percentage applied to the fee base_outstanding_money. Percentage applied to the fee base_outstanding_money. maximum: `100`. exclusiveMinimum: `0`. multipleOf: `0.0001`. 

### InvoiceLateFeePolicyFixedPreviousAttributes.percent variant 2

anyOf variant 2.

- Value shape: null. Percentage applied to the fee base_outstanding_money. 

### InvoiceLateFeePolicyFixedPreviousAttributes.type

### InvoiceLateFeePolicyFixedPreviousAttributes.type variant 1

anyOf variant 1: How the one-time late fee is calculated..

- Value shape: string. How the one-time late fee is calculated. Values: `"fixed"`.

### InvoiceLateFeePolicyFixedPreviousAttributes.type variant 2

anyOf variant 2.

- Value shape: null. How the one-time late fee is calculated. 

