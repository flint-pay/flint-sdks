[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceLateFeePreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The assessed fee: the policy's fixed amount, or its percent of base_outstanding_money. |
| `assessed_at` | Optional | string or null | When the fee was assessed. `assessed_at`: [declared alternatives](../models/InvoiceLateFeePreviousAttributes.md#invoicelatefeepreviousattributesassessed_at). |
| `base_outstanding_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The unpaid balance the fee was calculated from, excluding late fees, captured at assessment. |
| `invoice_id` | Optional | string or null | Invoice that owns this late fee. `invoice_id`: [declared alternatives](../models/InvoiceLateFeePreviousAttributes.md#invoicelatefeepreviousattributesinvoice_id). |
| `invoice_late_fee_id` | Optional | string or null | Flint invoice late fee ID. `invoice_late_fee_id`: [declared alternatives](../models/InvoiceLateFeePreviousAttributes.md#invoicelatefeepreviousattributesinvoice_late_fee_id). |
| `invoice_schedule_entry_id` | Optional | string or null | The schedule entry this fee applies to. Absent on an invoice without a schedule, where the fee applies to the whole invoice. Each invoice, or each entry, takes at most one fee, even after a waiver. `invoice_schedule_entry_id`: [declared alternatives](../models/InvoiceLateFeePreviousAttributes.md#invoicelatefeepreviousattributesinvoice_schedule_entry_id). |
| `late_fee_policy` | Optional | (object and Alternative shapes (see declared variants) or null) or null | The late fee policy from payment_terms_snapshot, copied when the fee was assessed. `null` when no policy was captured. `late_fee_policy`: [declared alternatives](../models/InvoiceLateFeePreviousAttributes.md#invoicelatefeepreviousattributeslate_fee_policy). |
| `outstanding_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | What is still owed on this fee: amount_money - paid_money - waived_money - written_off_money, never below zero. |
| `paid_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Payments applied to this fee, minus reversed payments. Dispute losses don't reduce it. |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. Items values: `"waive"`. `supported_actions`: [declared alternatives](../models/InvoiceLateFeePreviousAttributes.md#invoicelatefeepreviousattributessupported_actions). |
| `waived_at` | Optional | string or null | When the fee was waived. Absent unless it was waived. `waived_at`: [declared alternatives](../models/InvoiceLateFeePreviousAttributes.md#invoicelatefeepreviousattributeswaived_at). |
| `waived_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The amount waived. A waiver removes the fee's whole outstanding amount at that time, so it is less than amount_money when part of the fee was already paid. |
| `waiver_reason_message` | Optional | string or null | Why the fee was waived, as given when waiving it. `waiver_reason_message`: [declared alternatives](../models/InvoiceLateFeePreviousAttributes.md#invoicelatefeepreviousattributeswaiver_reason_message). |
| `written_off_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The part of this fee written off when the invoice was marked uncollectible. |

### InvoiceLateFeePreviousAttributes.assessed_at

### InvoiceLateFeePreviousAttributes.assessed_at variant 1

anyOf variant 1: When the fee was assessed..

- Value shape: string. When the fee was assessed. When the fee was assessed. Format: `date-time`. 

### InvoiceLateFeePreviousAttributes.assessed_at variant 2

anyOf variant 2.

- Value shape: null. When the fee was assessed. 

### InvoiceLateFeePreviousAttributes.invoice_id

### InvoiceLateFeePreviousAttributes.invoice_id variant 1

anyOf variant 1: Invoice that owns this late fee..

- Value shape: string. Invoice that owns this late fee. 

### InvoiceLateFeePreviousAttributes.invoice_id variant 2

anyOf variant 2.

- Value shape: null. Invoice that owns this late fee. 

### InvoiceLateFeePreviousAttributes.invoice_late_fee_id

### InvoiceLateFeePreviousAttributes.invoice_late_fee_id variant 1

anyOf variant 1: Flint invoice late fee ID..

- Value shape: string. Flint invoice late fee ID. 

### InvoiceLateFeePreviousAttributes.invoice_late_fee_id variant 2

anyOf variant 2.

- Value shape: null. Flint invoice late fee ID. 

### InvoiceLateFeePreviousAttributes.invoice_schedule_entry_id

### InvoiceLateFeePreviousAttributes.invoice_schedule_entry_id variant 1

anyOf variant 1: The schedule entry this fee applies to. Absent on an invoice without a schedule, where the fee applies to the whole invoice. Each invoice, or each entry, takes at most one fee, even after a waiver..

- Value shape: string. The schedule entry this fee applies to. Absent on an invoice without a schedule, where the fee applies to the whole invoice. Each invoice, or each entry, takes at most one fee, even after a waiver. 

### InvoiceLateFeePreviousAttributes.invoice_schedule_entry_id variant 2

anyOf variant 2.

- Value shape: null. The schedule entry this fee applies to. Absent on an invoice without a schedule, where the fee applies to the whole invoice. Each invoice, or each entry, takes at most one fee, even after a waiver. 

### InvoiceLateFeePreviousAttributes.late_fee_policy

The late fee policy from payment_terms_snapshot, copied when the fee was assessed. `null` when no policy was captured.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Conditional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Fixed fee in the invoice currency. Required for fixed and omitted for percentage. |
| `application_mode` | Conditional | string or null | Whether Flint applies the one-time fee automatically after the grace period. Omission defaults to manual. Frozen when the invoice is issued. Values: `"manual"`, `"automatic"`. `application_mode`: [declared alternatives](../models/InvoiceLateFeePreviousAttributes.md#invoicelatefeepreviousattributeslate_fee_policy-variant-1application_mode). |
| `grace_period_days` | Conditional | integer or null | Calendar days from the start of due_date in the invoice timezone (UTC when absent) before a late fee is eligible. Never eligible before the due date ends. An on_receipt term requires at least 1 day. `grace_period_days`: [declared alternatives](../models/InvoiceLateFeePreviousAttributes.md#invoicelatefeepreviousattributeslate_fee_policy-variant-1grace_period_days). |
| `percent` | Conditional | number or null | Percentage applied to the fee base_outstanding_money. `percent`: [declared alternatives](../models/InvoiceLateFeePreviousAttributes.md#invoicelatefeepreviousattributeslate_fee_policy-variant-1percent). |
| `type` | Conditional | (string or null) | How the one-time late fee is calculated. Values: `"fixed"`, `"percentage"`. `type`: [declared alternatives](../models/InvoiceLateFeePreviousAttributes.md#invoicelatefeepreviousattributeslate_fee_policy-variant-1type), [declared alternatives](../models/InvoiceLateFeePreviousAttributes.md#invoicelatefeepreviousattributeslate_fee_policy-variant-2type). |

### InvoiceLateFeePreviousAttributes.late_fee_policy variant 1: `type` = `"fixed"`

anyOf variant 1: The late fee policy from payment_terms_snapshot, copied when the fee was assessed. `null` when no policy was captured.; anyOf InvoiceLateFeePolicyPreviousAttributes; anyOf InvoiceLateFeePolicyFixedPreviousAttributes.

- Optional: `amount_money`, `application_mode`, `grace_period_days`, `percent`, `type`.
- Constraints for `type`: Values: `"fixed"`.

### InvoiceLateFeePreviousAttributes.late_fee_policy variant 2: `type` = `"percentage"`

anyOf variant 1: The late fee policy from payment_terms_snapshot, copied when the fee was assessed. `null` when no policy was captured.; anyOf InvoiceLateFeePolicyPreviousAttributes; anyOf InvoiceLateFeePolicyPercentagePreviousAttributes.

- Optional: `amount_money`, `application_mode`, `grace_period_days`, `percent`, `type`.
- Constraints for `type`: Values: `"percentage"`.

### InvoiceLateFeePreviousAttributes.late_fee_policy variant 3, 4

anyOf variant 1: The late fee policy from payment_terms_snapshot, copied when the fee was assessed. `null` when no policy was captured.; anyOf variant 2; anyOf variant 2.

- Undeclared: `amount_money`, `application_mode`, `grace_period_days`, `percent`, `type`.
- Value shape: null. The late fee policy from payment_terms_snapshot, copied when the fee was assessed. `null` when no policy was captured. 

### InvoiceLateFeePreviousAttributes.late_fee_policy variant 1.application_mode

### InvoiceLateFeePreviousAttributes.late_fee_policy variant 1.application_mode variant 1

anyOf variant 1: Whether Flint applies the one-time fee automatically after the grace period. Omission defaults to manual. Frozen when the invoice is issued..

- Value shape: string. Whether Flint applies the one-time fee automatically after the grace period. Omission defaults to manual. Frozen when the invoice is issued. Whether Flint applies the one-time fee automatically after the grace period. Omission defaults to manual. Frozen when the invoice is issued. Default: `"manual"`. Values: `"manual"`, `"automatic"`.

### InvoiceLateFeePreviousAttributes.late_fee_policy variant 1.application_mode variant 2

anyOf variant 2.

- Value shape: null. Whether Flint applies the one-time fee automatically after the grace period. Omission defaults to manual. Frozen when the invoice is issued. 

### InvoiceLateFeePreviousAttributes.late_fee_policy variant 1.grace_period_days

### InvoiceLateFeePreviousAttributes.late_fee_policy variant 1.grace_period_days variant 1

anyOf variant 1: Calendar days from the start of due_date in the invoice timezone (UTC when absent) before a late fee is eligible. Never eligible before the due date ends. An on_receipt term requires at least 1 day..

- Value shape: integer. Calendar days from the start of due_date in the invoice timezone (UTC when absent) before a late fee is eligible. Never eligible before the due date ends. An on_receipt term requires at least 1 day. Calendar days from the start of due_date in the invoice timezone (UTC when absent) before a late fee is eligible. Never eligible before the due date ends. An on_receipt term requires at least 1 day. Format: `int32`. minimum: `0`. maximum: `365`. 

### InvoiceLateFeePreviousAttributes.late_fee_policy variant 1.grace_period_days variant 2

anyOf variant 2.

- Value shape: null. Calendar days from the start of due_date in the invoice timezone (UTC when absent) before a late fee is eligible. Never eligible before the due date ends. An on_receipt term requires at least 1 day. 

### InvoiceLateFeePreviousAttributes.late_fee_policy variant 1.percent

### InvoiceLateFeePreviousAttributes.late_fee_policy variant 1.percent variant 1

anyOf variant 1: Percentage applied to the fee base_outstanding_money..

- Value shape: number. Percentage applied to the fee base_outstanding_money. Percentage applied to the fee base_outstanding_money. maximum: `100`. exclusiveMinimum: `0`. multipleOf: `0.0001`. 

### InvoiceLateFeePreviousAttributes.late_fee_policy variant 1.percent variant 2

anyOf variant 2.

- Value shape: null. Percentage applied to the fee base_outstanding_money. 

### InvoiceLateFeePreviousAttributes.late_fee_policy variant 1.type

### InvoiceLateFeePreviousAttributes.late_fee_policy variant 1.type variant 1

anyOf group 1 variant 1: How the one-time late fee is calculated..

- Value shape: string. How the one-time late fee is calculated. Values: `"fixed"`, `"percentage"`.

### InvoiceLateFeePreviousAttributes.late_fee_policy variant 1.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. How the one-time late fee is calculated. 

### InvoiceLateFeePreviousAttributes.late_fee_policy variant 1.type variant 3

anyOf group 2 variant 1: How the one-time late fee is calculated..

- Value shape: string. How the one-time late fee is calculated. Values: `"fixed"`.

### InvoiceLateFeePreviousAttributes.late_fee_policy variant 2.application_mode

Declared alternatives: [InvoiceLateFeePreviousAttributes.late_fee_policy variant 1.application_mode](../models/InvoiceLateFeePreviousAttributes.md#invoicelatefeepreviousattributeslate_fee_policy-variant-1application_mode).

### InvoiceLateFeePreviousAttributes.late_fee_policy variant 2.grace_period_days

Declared alternatives: [InvoiceLateFeePreviousAttributes.late_fee_policy variant 1.grace_period_days](../models/InvoiceLateFeePreviousAttributes.md#invoicelatefeepreviousattributeslate_fee_policy-variant-1grace_period_days).

### InvoiceLateFeePreviousAttributes.late_fee_policy variant 2.percent

Declared alternatives: [InvoiceLateFeePreviousAttributes.late_fee_policy variant 1.percent](../models/InvoiceLateFeePreviousAttributes.md#invoicelatefeepreviousattributeslate_fee_policy-variant-1percent).

### InvoiceLateFeePreviousAttributes.late_fee_policy variant 2.type

### InvoiceLateFeePreviousAttributes.late_fee_policy variant 2.type variant 1

anyOf group 1 variant 1: How the one-time late fee is calculated..

- Value shape: string. How the one-time late fee is calculated. Values: `"fixed"`, `"percentage"`.

### InvoiceLateFeePreviousAttributes.late_fee_policy variant 2.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. How the one-time late fee is calculated. 

### InvoiceLateFeePreviousAttributes.late_fee_policy variant 2.type variant 3

anyOf group 2 variant 1: How the one-time late fee is calculated..

- Value shape: string. How the one-time late fee is calculated. Values: `"percentage"`.

### InvoiceLateFeePreviousAttributes.supported_actions

### InvoiceLateFeePreviousAttributes.supported_actions variant 1

anyOf variant 1: Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available..

- Value shape: Array of string. Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. Items values: `"waive"`.

### InvoiceLateFeePreviousAttributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. 

### InvoiceLateFeePreviousAttributes.waived_at

### InvoiceLateFeePreviousAttributes.waived_at variant 1

anyOf variant 1: When the fee was waived. Absent unless it was waived..

- Value shape: string. When the fee was waived. Absent unless it was waived. When the fee was waived. Absent unless it was waived. Format: `date-time`. 

### InvoiceLateFeePreviousAttributes.waived_at variant 2

anyOf variant 2.

- Value shape: null. When the fee was waived. Absent unless it was waived. 

### InvoiceLateFeePreviousAttributes.waiver_reason_message

### InvoiceLateFeePreviousAttributes.waiver_reason_message variant 1

anyOf variant 1: Why the fee was waived, as given when waiving it..

- Value shape: string. Why the fee was waived, as given when waiving it. 

### InvoiceLateFeePreviousAttributes.waiver_reason_message variant 2

anyOf variant 2.

- Value shape: null. Why the fee was waived, as given when waiving it. 

