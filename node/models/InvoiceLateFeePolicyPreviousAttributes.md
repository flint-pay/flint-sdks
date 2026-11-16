[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceLateFeePolicyPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Fixed fee in the invoice currency. Required for fixed and omitted for percentage. `amount_money`: [declared alternatives](../models/InvoiceLateFeePolicyFixedPreviousAttributes.md#invoicelatefeepolicyfixedpreviousattributesamount_money). |
| `application_mode` | Optional | string or null | Whether Flint applies the one-time fee automatically after the grace period. Omission defaults to manual. Frozen when the invoice is issued. Values: `"manual"`, `"automatic"`. `application_mode`: [declared alternatives](../models/InvoiceLateFeePolicyFixedPreviousAttributes.md#invoicelatefeepolicyfixedpreviousattributesapplication_mode). |
| `grace_period_days` | Optional | integer or null | Calendar days from the start of due_date in the invoice timezone (UTC when absent) before a late fee is eligible. Never eligible before the due date ends. An on_receipt term requires at least 1 day. `grace_period_days`: [declared alternatives](../models/InvoiceLateFeePolicyFixedPreviousAttributes.md#invoicelatefeepolicyfixedpreviousattributesgrace_period_days). |
| `percent` | Optional | number or null | Percentage applied to the fee base_outstanding_money. `percent`: [declared alternatives](../models/InvoiceLateFeePolicyFixedPreviousAttributes.md#invoicelatefeepolicyfixedpreviousattributespercent). |
| `type` | Optional | (string or null) | How the one-time late fee is calculated. Values: `"fixed"`, `"percentage"`. `type`: [declared alternatives](../models/InvoiceLateFeePolicyPreviousAttributes.md#invoicelatefeepolicypreviousattributes-variant-1type), [declared alternatives](../models/InvoiceLateFeePolicyPreviousAttributes.md#invoicelatefeepolicypreviousattributes-variant-2type). |

### InvoiceLateFeePolicyPreviousAttributes variant 1: `type` = `"fixed"`

anyOf InvoiceLateFeePolicyFixedPreviousAttributes.

- Constraints for `type`: Values: `"fixed"`.

### InvoiceLateFeePolicyPreviousAttributes variant 2: `type` = `"percentage"`

anyOf InvoiceLateFeePolicyPercentagePreviousAttributes.

- Constraints for `type`: Values: `"percentage"`.

### InvoiceLateFeePolicyPreviousAttributes.amount_money

Declared alternatives: [InvoiceLateFeePolicyFixedPreviousAttributes.amount_money](../models/InvoiceLateFeePolicyFixedPreviousAttributes.md#invoicelatefeepolicyfixedpreviousattributesamount_money).

### InvoiceLateFeePolicyPreviousAttributes.application_mode

Declared alternatives: [InvoiceLateFeePolicyFixedPreviousAttributes.application_mode](../models/InvoiceLateFeePolicyFixedPreviousAttributes.md#invoicelatefeepolicyfixedpreviousattributesapplication_mode).

### InvoiceLateFeePolicyPreviousAttributes.grace_period_days

Declared alternatives: [InvoiceLateFeePolicyFixedPreviousAttributes.grace_period_days](../models/InvoiceLateFeePolicyFixedPreviousAttributes.md#invoicelatefeepolicyfixedpreviousattributesgrace_period_days).

### InvoiceLateFeePolicyPreviousAttributes.percent

Declared alternatives: [InvoiceLateFeePolicyFixedPreviousAttributes.percent](../models/InvoiceLateFeePolicyFixedPreviousAttributes.md#invoicelatefeepolicyfixedpreviousattributespercent).

### InvoiceLateFeePolicyPreviousAttributes variant 1.type

### InvoiceLateFeePolicyPreviousAttributes variant 1.type variant 1

anyOf group 1 variant 1: How the one-time late fee is calculated..

- Value shape: string. How the one-time late fee is calculated. Values: `"fixed"`, `"percentage"`.

### InvoiceLateFeePolicyPreviousAttributes variant 1.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. How the one-time late fee is calculated. 

### InvoiceLateFeePolicyPreviousAttributes variant 1.type variant 3

anyOf group 2 variant 1: How the one-time late fee is calculated..

- Value shape: string. How the one-time late fee is calculated. Values: `"fixed"`.

### InvoiceLateFeePolicyPreviousAttributes variant 2.type

### InvoiceLateFeePolicyPreviousAttributes variant 2.type variant 1

anyOf group 1 variant 1: How the one-time late fee is calculated..

- Value shape: string. How the one-time late fee is calculated. Values: `"fixed"`, `"percentage"`.

### InvoiceLateFeePolicyPreviousAttributes variant 2.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. How the one-time late fee is calculated. 

### InvoiceLateFeePolicyPreviousAttributes variant 2.type variant 3

anyOf group 2 variant 1: How the one-time late fee is calculated..

- Value shape: string. How the one-time late fee is calculated. Values: `"percentage"`.

