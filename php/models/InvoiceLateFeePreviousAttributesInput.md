[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceLateFeePreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The assessed fee: the policy's fixed amount, or its percent of base_outstanding_money. |
| `assessed_at` | Optional | string or null | When the fee was assessed. `assessed_at`: [declared alternatives](../models/InvoiceLateFeePreviousAttributesInput.md#invoicelatefeepreviousattributesinputassessed_at). |
| `base_outstanding_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The unpaid balance the fee was calculated from, excluding late fees, captured at assessment. |
| `invoice_id` | Optional | string or null | Invoice that owns this late fee. `invoice_id`: [declared alternatives](../models/InvoiceLateFeePreviousAttributesInput.md#invoicelatefeepreviousattributesinputinvoice_id). |
| `invoice_late_fee_id` | Optional | string or null | Flint invoice late fee ID. `invoice_late_fee_id`: [declared alternatives](../models/InvoiceLateFeePreviousAttributesInput.md#invoicelatefeepreviousattributesinputinvoice_late_fee_id). |
| `invoice_schedule_entry_id` | Optional | string or null | The schedule entry this fee applies to. Absent on an invoice without a schedule, where the fee applies to the whole invoice. Each invoice, or each entry, takes at most one fee, even after a waiver. `invoice_schedule_entry_id`: [declared alternatives](../models/InvoiceLateFeePreviousAttributesInput.md#invoicelatefeepreviousattributesinputinvoice_schedule_entry_id). |
| `late_fee_policy` | Optional | ([InvoiceLateFeePolicyPreviousAttributesInput](../models/InvoiceLateFeePolicyPreviousAttributesInput.md#invoicelatefeepolicypreviousattributesinput) or null) or null | The late fee policy from payment_terms_snapshot, copied when the fee was assessed. `null` when no policy was captured. |
| `outstanding_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | What is still owed on this fee: amount_money - paid_money - waived_money - written_off_money, never below zero. |
| `paid_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Payments applied to this fee, minus reversed payments. Dispute losses don't reduce it. |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. Items values: `"waive"`. `supported_actions`: [declared alternatives](../models/InvoiceLateFeePreviousAttributesInput.md#invoicelatefeepreviousattributesinputsupported_actions). |
| `waived_at` | Optional | string or null | When the fee was waived. Absent unless it was waived. `waived_at`: [declared alternatives](../models/InvoiceLateFeePreviousAttributesInput.md#invoicelatefeepreviousattributesinputwaived_at). |
| `waived_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The amount waived. A waiver removes the fee's whole outstanding amount at that time, so it is less than amount_money when part of the fee was already paid. |
| `waiver_reason_message` | Optional | string or null | Why the fee was waived, as given when waiving it. `waiver_reason_message`: [declared alternatives](../models/InvoiceLateFeePreviousAttributesInput.md#invoicelatefeepreviousattributesinputwaiver_reason_message). |
| `written_off_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The part of this fee written off when the invoice was marked uncollectible. |

### InvoiceLateFeePreviousAttributesInput.assessed_at

### InvoiceLateFeePreviousAttributesInput.assessed_at variant 1

anyOf variant 1: When the fee was assessed..

- Value shape: string. When the fee was assessed. When the fee was assessed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### InvoiceLateFeePreviousAttributesInput.assessed_at variant 2

anyOf variant 2.

- Value shape: null. When the fee was assessed. 

### InvoiceLateFeePreviousAttributesInput.invoice_id

### InvoiceLateFeePreviousAttributesInput.invoice_id variant 1

anyOf variant 1: Invoice that owns this late fee..

- Value shape: string. Invoice that owns this late fee. Invoice that owns this late fee. Example: `"inv_01KEZF7C00A5GEBMWHEAJFSAR4"`. 

### InvoiceLateFeePreviousAttributesInput.invoice_id variant 2

anyOf variant 2.

- Value shape: null. Invoice that owns this late fee. 

### InvoiceLateFeePreviousAttributesInput.invoice_late_fee_id

### InvoiceLateFeePreviousAttributesInput.invoice_late_fee_id variant 1

anyOf variant 1: Flint invoice late fee ID..

- Value shape: string. Flint invoice late fee ID. Flint invoice late fee ID. Example: `"inlf_01KEZF7C00NVR97MBH5AHR4W1X"`. 

### InvoiceLateFeePreviousAttributesInput.invoice_late_fee_id variant 2

anyOf variant 2.

- Value shape: null. Flint invoice late fee ID. 

### InvoiceLateFeePreviousAttributesInput.invoice_schedule_entry_id

### InvoiceLateFeePreviousAttributesInput.invoice_schedule_entry_id variant 1

anyOf variant 1: The schedule entry this fee applies to. Absent on an invoice without a schedule, where the fee applies to the whole invoice. Each invoice, or each entry, takes at most one fee, even after a waiver..

- Value shape: string. The schedule entry this fee applies to. Absent on an invoice without a schedule, where the fee applies to the whole invoice. Each invoice, or each entry, takes at most one fee, even after a waiver. The schedule entry this fee applies to. Absent on an invoice without a schedule, where the fee applies to the whole invoice. Each invoice, or each entry, takes at most one fee, even after a waiver. Example: `"invse_01KEZF7C006JCPQBD8VZ0RNT6R"`. 

### InvoiceLateFeePreviousAttributesInput.invoice_schedule_entry_id variant 2

anyOf variant 2.

- Value shape: null. The schedule entry this fee applies to. Absent on an invoice without a schedule, where the fee applies to the whole invoice. Each invoice, or each entry, takes at most one fee, even after a waiver. 

### InvoiceLateFeePreviousAttributesInput.supported_actions

### InvoiceLateFeePreviousAttributesInput.supported_actions variant 1

anyOf variant 1: Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available..

- Value shape: Array of string. Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. Items values: `"waive"`.

### InvoiceLateFeePreviousAttributesInput.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. 

### InvoiceLateFeePreviousAttributesInput.waived_at

### InvoiceLateFeePreviousAttributesInput.waived_at variant 1

anyOf variant 1: When the fee was waived. Absent unless it was waived..

- Value shape: string. When the fee was waived. Absent unless it was waived. When the fee was waived. Absent unless it was waived. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### InvoiceLateFeePreviousAttributesInput.waived_at variant 2

anyOf variant 2.

- Value shape: null. When the fee was waived. Absent unless it was waived. 

### InvoiceLateFeePreviousAttributesInput.waiver_reason_message

### InvoiceLateFeePreviousAttributesInput.waiver_reason_message variant 1

anyOf variant 1: Why the fee was waived, as given when waiving it..

- Value shape: string. Why the fee was waived, as given when waiving it. 

### InvoiceLateFeePreviousAttributesInput.waiver_reason_message variant 2

anyOf variant 2.

- Value shape: null. Why the fee was waived, as given when waiving it. 

