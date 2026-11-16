[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceLateFeePolicyFixedPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Fixed fee in the invoice currency. Required for fixed and omitted for percentage. |
| `application_mode` | Optional | string or null | Whether Flint applies the one-time fee automatically after the grace period. Omission defaults to manual. Frozen when the invoice is issued. Values: `"manual"`, `"automatic"`. `application_mode`: [declared alternatives](../models/InvoiceLateFeePolicyFixedPreviousAttributesInput.md#invoicelatefeepolicyfixedpreviousattributesinputapplication_mode). |
| `grace_period_days` | Optional | integer or null | Calendar days from the start of due_date in the invoice timezone (UTC when absent) before a late fee is eligible. Never eligible before the due date ends. An on_receipt term requires at least 1 day. `grace_period_days`: [declared alternatives](../models/InvoiceLateFeePolicyFixedPreviousAttributesInput.md#invoicelatefeepolicyfixedpreviousattributesinputgrace_period_days). |
| `percent` | Optional | number or null | Percentage applied to the fee base_outstanding_money. `percent`: [declared alternatives](../models/InvoiceLateFeePolicyFixedPreviousAttributesInput.md#invoicelatefeepolicyfixedpreviousattributesinputpercent). |
| `type` | Optional | string or null | How the one-time late fee is calculated. Values: `"fixed"`. `type`: [declared alternatives](../models/InvoiceLateFeePolicyFixedPreviousAttributesInput.md#invoicelatefeepolicyfixedpreviousattributesinputtype). |

### InvoiceLateFeePolicyFixedPreviousAttributesInput.application_mode

### InvoiceLateFeePolicyFixedPreviousAttributesInput.application_mode variant 1

anyOf variant 1: Whether Flint applies the one-time fee automatically after the grace period. Omission defaults to manual. Frozen when the invoice is issued..

- Value shape: string. Whether Flint applies the one-time fee automatically after the grace period. Omission defaults to manual. Frozen when the invoice is issued. Whether Flint applies the one-time fee automatically after the grace period. Omission defaults to manual. Frozen when the invoice is issued. Default: `"manual"`. Values: `"manual"`, `"automatic"`.

### InvoiceLateFeePolicyFixedPreviousAttributesInput.application_mode variant 2

anyOf variant 2.

- Value shape: null. Whether Flint applies the one-time fee automatically after the grace period. Omission defaults to manual. Frozen when the invoice is issued. 

### InvoiceLateFeePolicyFixedPreviousAttributesInput.grace_period_days

### InvoiceLateFeePolicyFixedPreviousAttributesInput.grace_period_days variant 1

anyOf variant 1: Calendar days from the start of due_date in the invoice timezone (UTC when absent) before a late fee is eligible. Never eligible before the due date ends. An on_receipt term requires at least 1 day..

- Value shape: integer. Calendar days from the start of due_date in the invoice timezone (UTC when absent) before a late fee is eligible. Never eligible before the due date ends. An on_receipt term requires at least 1 day. Calendar days from the start of due_date in the invoice timezone (UTC when absent) before a late fee is eligible. Never eligible before the due date ends. An on_receipt term requires at least 1 day. Format: `int32`. minimum: `0`. maximum: `365`. 

### InvoiceLateFeePolicyFixedPreviousAttributesInput.grace_period_days variant 2

anyOf variant 2.

- Value shape: null. Calendar days from the start of due_date in the invoice timezone (UTC when absent) before a late fee is eligible. Never eligible before the due date ends. An on_receipt term requires at least 1 day. 

### InvoiceLateFeePolicyFixedPreviousAttributesInput.percent

### InvoiceLateFeePolicyFixedPreviousAttributesInput.percent variant 1

anyOf variant 1: Percentage applied to the fee base_outstanding_money..

- Value shape: number. Percentage applied to the fee base_outstanding_money. Percentage applied to the fee base_outstanding_money. maximum: `100`. exclusiveMinimum: `0`. multipleOf: `0.0001`. 

### InvoiceLateFeePolicyFixedPreviousAttributesInput.percent variant 2

anyOf variant 2.

- Value shape: null. Percentage applied to the fee base_outstanding_money. 

### InvoiceLateFeePolicyFixedPreviousAttributesInput.type

### InvoiceLateFeePolicyFixedPreviousAttributesInput.type variant 1

anyOf variant 1: How the one-time late fee is calculated..

- Value shape: string. How the one-time late fee is calculated. Values: `"fixed"`.

### InvoiceLateFeePolicyFixedPreviousAttributesInput.type variant 2

anyOf variant 2.

- Value shape: null. How the one-time late fee is calculated. 

