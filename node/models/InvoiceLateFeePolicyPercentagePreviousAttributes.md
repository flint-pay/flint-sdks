[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceLateFeePolicyPercentagePreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Fixed fee in the invoice currency. Required for fixed and omitted for percentage. `amount_money`: [declared alternatives](../models/InvoiceLateFeePolicyFixedPreviousAttributes.md#invoicelatefeepolicyfixedpreviousattributesamount_money). |
| `application_mode` | Optional | string or null | Whether Flint applies the one-time fee automatically after the grace period. Omission defaults to manual. Frozen when the invoice is issued. Values: `"manual"`, `"automatic"`. `application_mode`: [declared alternatives](../models/InvoiceLateFeePolicyFixedPreviousAttributes.md#invoicelatefeepolicyfixedpreviousattributesapplication_mode). |
| `grace_period_days` | Optional | integer or null | Calendar days from the start of due_date in the invoice timezone (UTC when absent) before a late fee is eligible. Never eligible before the due date ends. An on_receipt term requires at least 1 day. `grace_period_days`: [declared alternatives](../models/InvoiceLateFeePolicyFixedPreviousAttributes.md#invoicelatefeepolicyfixedpreviousattributesgrace_period_days). |
| `percent` | Optional | number or null | Percentage applied to the fee base_outstanding_money. `percent`: [declared alternatives](../models/InvoiceLateFeePolicyFixedPreviousAttributes.md#invoicelatefeepolicyfixedpreviousattributespercent). |
| `type` | Optional | string or null | How the one-time late fee is calculated. Values: `"percentage"`. `type`: [declared alternatives](../models/InvoiceLateFeePolicyPercentagePreviousAttributes.md#invoicelatefeepolicypercentagepreviousattributestype). |

### InvoiceLateFeePolicyPercentagePreviousAttributes.amount_money

Declared alternatives: [InvoiceLateFeePolicyFixedPreviousAttributes.amount_money](../models/InvoiceLateFeePolicyFixedPreviousAttributes.md#invoicelatefeepolicyfixedpreviousattributesamount_money).

### InvoiceLateFeePolicyPercentagePreviousAttributes.application_mode

Declared alternatives: [InvoiceLateFeePolicyFixedPreviousAttributes.application_mode](../models/InvoiceLateFeePolicyFixedPreviousAttributes.md#invoicelatefeepolicyfixedpreviousattributesapplication_mode).

### InvoiceLateFeePolicyPercentagePreviousAttributes.grace_period_days

Declared alternatives: [InvoiceLateFeePolicyFixedPreviousAttributes.grace_period_days](../models/InvoiceLateFeePolicyFixedPreviousAttributes.md#invoicelatefeepolicyfixedpreviousattributesgrace_period_days).

### InvoiceLateFeePolicyPercentagePreviousAttributes.percent

Declared alternatives: [InvoiceLateFeePolicyFixedPreviousAttributes.percent](../models/InvoiceLateFeePolicyFixedPreviousAttributes.md#invoicelatefeepolicyfixedpreviousattributespercent).

### InvoiceLateFeePolicyPercentagePreviousAttributes.type

### InvoiceLateFeePolicyPercentagePreviousAttributes.type variant 1

anyOf variant 1: How the one-time late fee is calculated..

- Value shape: string. How the one-time late fee is calculated. Values: `"percentage"`.

### InvoiceLateFeePolicyPercentagePreviousAttributes.type variant 2

anyOf variant 2.

- Value shape: null. How the one-time late fee is calculated. 

