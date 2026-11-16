[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceLateFeePolicyPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Fixed fee in the invoice currency. Required for fixed and omitted for percentage. |
| `application_mode` | Optional | string or null | Whether Flint applies the one-time fee automatically after the grace period. Omission defaults to manual. Frozen when the invoice is issued. Values: `"manual"`, `"automatic"`. `application_mode`: [declared alternatives](../models/InvoiceLateFeePolicyFixedPreviousAttributesInput.md#invoicelatefeepolicyfixedpreviousattributesinputapplication_mode). |
| `grace_period_days` | Optional | integer or null | Calendar days from the start of due_date in the invoice timezone (UTC when absent) before a late fee is eligible. Never eligible before the due date ends. An on_receipt term requires at least 1 day. `grace_period_days`: [declared alternatives](../models/InvoiceLateFeePolicyFixedPreviousAttributesInput.md#invoicelatefeepolicyfixedpreviousattributesinputgrace_period_days). |
| `percent` | Optional | number or null | Percentage applied to the fee base_outstanding_money. `percent`: [declared alternatives](../models/InvoiceLateFeePolicyFixedPreviousAttributesInput.md#invoicelatefeepolicyfixedpreviousattributesinputpercent). |
| `type` | Optional | (string or null) | How the one-time late fee is calculated. Values: `"fixed"`, `"percentage"`. `type`: [declared alternatives](../models/InvoiceLateFeePolicyPreviousAttributesInput.md#invoicelatefeepolicypreviousattributesinput-variant-1type), [declared alternatives](../models/InvoiceLateFeePolicyPreviousAttributesInput.md#invoicelatefeepolicypreviousattributesinput-variant-2type). |

### InvoiceLateFeePolicyPreviousAttributesInput variant 1: `type` = `"fixed"`

anyOf InvoiceLateFeePolicyFixedPreviousAttributes.

- Constraints for `type`: Values: `"fixed"`.

### InvoiceLateFeePolicyPreviousAttributesInput variant 2: `type` = `"percentage"`

anyOf InvoiceLateFeePolicyPercentagePreviousAttributes.

- Constraints for `type`: Values: `"percentage"`.

### InvoiceLateFeePolicyPreviousAttributesInput.application_mode

Declared alternatives: [InvoiceLateFeePolicyFixedPreviousAttributesInput.application_mode](../models/InvoiceLateFeePolicyFixedPreviousAttributesInput.md#invoicelatefeepolicyfixedpreviousattributesinputapplication_mode).

### InvoiceLateFeePolicyPreviousAttributesInput.grace_period_days

Declared alternatives: [InvoiceLateFeePolicyFixedPreviousAttributesInput.grace_period_days](../models/InvoiceLateFeePolicyFixedPreviousAttributesInput.md#invoicelatefeepolicyfixedpreviousattributesinputgrace_period_days).

### InvoiceLateFeePolicyPreviousAttributesInput.percent

Declared alternatives: [InvoiceLateFeePolicyFixedPreviousAttributesInput.percent](../models/InvoiceLateFeePolicyFixedPreviousAttributesInput.md#invoicelatefeepolicyfixedpreviousattributesinputpercent).

### InvoiceLateFeePolicyPreviousAttributesInput variant 1.type

### InvoiceLateFeePolicyPreviousAttributesInput variant 1.type variant 1

anyOf group 1 variant 1: How the one-time late fee is calculated..

- Value shape: string. How the one-time late fee is calculated. Values: `"fixed"`, `"percentage"`.

### InvoiceLateFeePolicyPreviousAttributesInput variant 1.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. How the one-time late fee is calculated. 

### InvoiceLateFeePolicyPreviousAttributesInput variant 1.type variant 3

anyOf group 2 variant 1: How the one-time late fee is calculated..

- Value shape: string. How the one-time late fee is calculated. Values: `"fixed"`.

### InvoiceLateFeePolicyPreviousAttributesInput variant 2.type

### InvoiceLateFeePolicyPreviousAttributesInput variant 2.type variant 1

anyOf group 1 variant 1: How the one-time late fee is calculated..

- Value shape: string. How the one-time late fee is calculated. Values: `"fixed"`, `"percentage"`.

### InvoiceLateFeePolicyPreviousAttributesInput variant 2.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. How the one-time late fee is calculated. 

### InvoiceLateFeePolicyPreviousAttributesInput variant 2.type variant 3

anyOf group 2 variant 1: How the one-time late fee is calculated..

- Value shape: string. How the one-time late fee is calculated. Values: `"percentage"`.

