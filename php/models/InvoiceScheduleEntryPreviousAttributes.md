[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceScheduleEntryPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_specification` | Optional | object and Alternative shapes (see declared variants) or null | How the entry's amount is set: a fixed amount, a percent of the invoice total, or the remaining balance. `amount_specification`: [declared alternatives](../models/InvoiceScheduleEntryPreviousAttributes.md#invoicescheduleentrypreviousattributesamount_specification). |
| `credited_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Credit note credit allocated to this entry, minus reversed allocations. |
| `due` | Optional | object and Alternative shapes (see declared variants) or null | When the entry is due. `due`: [declared alternatives](../models/InvoiceScheduleEntryPreviousAttributes.md#invoicescheduleentrypreviousattributesdue). |
| `invoice_schedule_entry_id` | Optional | string or null | Flint invoice schedule entry ID. Kept across draft edits that send it back with the entry. `invoice_schedule_entry_id`: [declared alternatives](../models/InvoiceScheduleEntryPreviousAttributes.md#invoicescheduleentrypreviousattributesinvoice_schedule_entry_id). |
| `kind` | Optional | string or null | The entry's role in the schedule. Values: `"deposit"`, `"installment"`, `"balance"`. `kind`: [declared alternatives](../models/InvoiceScheduleEntryPreviousAttributes.md#invoicescheduleentrypreviousattributeskind). |
| `outstanding_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | What is still owed on this entry, including its unpaid late fee, never below zero. |
| `paid_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Payments applied to this entry, minus reversed payments, including payments toward its late fee. Dispute losses don't reduce it. It can exceed total_money when the entry carries a late fee. |
| `status` | Optional | string or null | The entry's payment status, computed when the invoice is read. It follows the entry's balance and due time, not the invoice's status. Values: `"pending"`, `"due"`, `"partially_satisfied"`, `"satisfied"`, `"overdue"`. `status`: [declared alternatives](../models/InvoiceScheduleEntryPreviousAttributes.md#invoicescheduleentrypreviousattributesstatus). |
| `total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The entry's share of the invoice total, resolved from amount_specification against pricing_amounts.total_money. Recomputed on draft edits and fixed at issue. Excludes late fees. |
| `written_off_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The part of this entry written off when the invoice was marked uncollectible, including its unpaid late fee. |

### InvoiceScheduleEntryPreviousAttributes.amount_specification

How the entry's amount is set: a fixed amount, a percent of the invoice total, or the remaining balance.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Conditional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The amount to collect, in the invoice currency. Required with fixed and not accepted with any other type. |
| `percent` | Conditional | number or null | Percentage of pricing_amounts.total_money to collect, greater than 0 and at most 100, with up to four decimal places. Required with percentage and not accepted with any other type. `percent`: [declared alternatives](../models/InvoiceScheduleEntryPreviousAttributes.md#invoicescheduleentrypreviousattributesamount_specification-variant-1percent). |
| `type` | Conditional | (string or null) | How the entry's amount is set. Values: `"fixed"`, `"percentage"`, `"remaining_balance"`. `type`: [declared alternatives](../models/InvoiceScheduleEntryPreviousAttributes.md#invoicescheduleentrypreviousattributesamount_specification-variant-1type), [declared alternatives](../models/InvoiceScheduleEntryPreviousAttributes.md#invoicescheduleentrypreviousattributesamount_specification-variant-2type), [declared alternatives](../models/InvoiceScheduleEntryPreviousAttributes.md#invoicescheduleentrypreviousattributesamount_specification-variant-3type). |

### InvoiceScheduleEntryPreviousAttributes.amount_specification variant 1: `type` = `"fixed"`

anyOf InvoiceScheduleAmountSpecificationPreviousAttributes; anyOf InvoiceScheduleAmountSpecificationFixedPreviousAttributes.

- Optional: `amount_money`, `percent`, `type`.
- Constraints for `type`: Values: `"fixed"`.

### InvoiceScheduleEntryPreviousAttributes.amount_specification variant 2: `type` = `"percentage"`

anyOf InvoiceScheduleAmountSpecificationPreviousAttributes; anyOf InvoiceScheduleAmountSpecificationPercentagePreviousAttributes.

- Optional: `amount_money`, `percent`, `type`.
- Constraints for `type`: Values: `"percentage"`.

### InvoiceScheduleEntryPreviousAttributes.amount_specification variant 3: `type` = `"remaining_balance"`

anyOf InvoiceScheduleAmountSpecificationPreviousAttributes; anyOf InvoiceScheduleAmountSpecificationRemainingBalancePreviousAttributes.

- Optional: `amount_money`, `percent`, `type`.
- Constraints for `type`: Values: `"remaining_balance"`.

### InvoiceScheduleEntryPreviousAttributes.amount_specification variant 4

anyOf variant 2.

- Undeclared: `amount_money`, `percent`, `type`.
- Value shape: null. How the entry's amount is set: a fixed amount, a percent of the invoice total, or the remaining balance. 

### InvoiceScheduleEntryPreviousAttributes.amount_specification variant 1.percent

### InvoiceScheduleEntryPreviousAttributes.amount_specification variant 1.percent variant 1

anyOf variant 1: Percentage of pricing_amounts.total_money to collect, greater than 0 and at most 100, with up to four decimal places. Required with percentage and not accepted with any other type..

- Value shape: number. Percentage of pricing_amounts.total_money to collect, greater than 0 and at most 100, with up to four decimal places. Required with percentage and not accepted with any other type. Percentage of pricing_amounts.total_money to collect, greater than 0 and at most 100, with up to four decimal places. Required with percentage and not accepted with any other type. multipleOf: `0.0001`. 

### InvoiceScheduleEntryPreviousAttributes.amount_specification variant 1.percent variant 2

anyOf variant 2.

- Value shape: null. Percentage of pricing_amounts.total_money to collect, greater than 0 and at most 100, with up to four decimal places. Required with percentage and not accepted with any other type. 

### InvoiceScheduleEntryPreviousAttributes.amount_specification variant 1.type

### InvoiceScheduleEntryPreviousAttributes.amount_specification variant 1.type variant 1

anyOf group 1 variant 1: How the entry's amount is set..

- Value shape: string. How the entry's amount is set. Values: `"fixed"`, `"percentage"`, `"remaining_balance"`.

### InvoiceScheduleEntryPreviousAttributes.amount_specification variant 1.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the entry's amount is set. 

### InvoiceScheduleEntryPreviousAttributes.amount_specification variant 1.type variant 3, 5

anyOf group 2 variant 1: How the entry's amount is set.; anyOf group 3 variant 1.

- Value shape: string. How the entry's amount is set. Values: `"fixed"`.

### InvoiceScheduleEntryPreviousAttributes.amount_specification variant 2.percent

Declared alternatives: [InvoiceScheduleEntryPreviousAttributes.amount_specification variant 1.percent](../models/InvoiceScheduleEntryPreviousAttributes.md#invoicescheduleentrypreviousattributesamount_specification-variant-1percent).

### InvoiceScheduleEntryPreviousAttributes.amount_specification variant 2.type

### InvoiceScheduleEntryPreviousAttributes.amount_specification variant 2.type variant 1

anyOf group 1 variant 1: How the entry's amount is set..

- Value shape: string. How the entry's amount is set. Values: `"fixed"`, `"percentage"`, `"remaining_balance"`.

### InvoiceScheduleEntryPreviousAttributes.amount_specification variant 2.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the entry's amount is set. 

### InvoiceScheduleEntryPreviousAttributes.amount_specification variant 2.type variant 3, 5

anyOf group 2 variant 1: How the entry's amount is set.; anyOf group 3 variant 1.

- Value shape: string. How the entry's amount is set. Values: `"percentage"`.

### InvoiceScheduleEntryPreviousAttributes.amount_specification variant 3.percent

Declared alternatives: [InvoiceScheduleEntryPreviousAttributes.amount_specification variant 1.percent](../models/InvoiceScheduleEntryPreviousAttributes.md#invoicescheduleentrypreviousattributesamount_specification-variant-1percent).

### InvoiceScheduleEntryPreviousAttributes.amount_specification variant 3.type

### InvoiceScheduleEntryPreviousAttributes.amount_specification variant 3.type variant 1

anyOf group 1 variant 1: How the entry's amount is set..

- Value shape: string. How the entry's amount is set. Values: `"fixed"`, `"percentage"`, `"remaining_balance"`.

### InvoiceScheduleEntryPreviousAttributes.amount_specification variant 3.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the entry's amount is set. 

### InvoiceScheduleEntryPreviousAttributes.amount_specification variant 3.type variant 3, 5

anyOf group 2 variant 1: How the entry's amount is set.; anyOf group 3 variant 1.

- Value shape: string. How the entry's amount is set. Values: `"remaining_balance"`.

### InvoiceScheduleEntryPreviousAttributes.due

When the entry is due.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `due_date` | Conditional | string or null | Calendar due date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Collectible from the start of this date, overdue only after it ends. Always present for date; for at_issue and invoice_due_date, omitted on drafts and resolved at issue to the issue date or invoice due_date. `due_date`: [declared alternatives](../models/InvoiceScheduleEntryPreviousAttributes.md#invoicescheduleentrypreviousattributesdue-variant-1due_date). |
| `type` | Conditional | (string or null) | How the entry's due date is set. Values: `"at_issue"`, `"date"`, `"invoice_due_date"`. `type`: [declared alternatives](../models/InvoiceScheduleEntryPreviousAttributes.md#invoicescheduleentrypreviousattributesdue-variant-1type), [declared alternatives](../models/InvoiceScheduleEntryPreviousAttributes.md#invoicescheduleentrypreviousattributesdue-variant-2type), [declared alternatives](../models/InvoiceScheduleEntryPreviousAttributes.md#invoicescheduleentrypreviousattributesdue-variant-3type). |

### InvoiceScheduleEntryPreviousAttributes.due variant 1: `type` = `"at_issue"`

anyOf InvoiceScheduleDuePreviousAttributes; anyOf InvoiceScheduleDueAtIssuePreviousAttributes.

- Optional: `due_date`, `type`.
- Constraints for `type`: Values: `"at_issue"`.

### InvoiceScheduleEntryPreviousAttributes.due variant 2: `type` = `"date"`

anyOf InvoiceScheduleDuePreviousAttributes; anyOf InvoiceScheduleDueDatePreviousAttributes.

- Optional: `due_date`, `type`.
- Constraints for `type`: Values: `"date"`.

### InvoiceScheduleEntryPreviousAttributes.due variant 3: `type` = `"invoice_due_date"`

anyOf InvoiceScheduleDuePreviousAttributes; anyOf InvoiceScheduleDueInvoiceDueDatePreviousAttributes.

- Optional: `due_date`, `type`.
- Constraints for `type`: Values: `"invoice_due_date"`.

### InvoiceScheduleEntryPreviousAttributes.due variant 4

anyOf variant 2.

- Undeclared: `due_date`, `type`.
- Value shape: null. When the entry is due. 

### InvoiceScheduleEntryPreviousAttributes.due variant 1.due_date

### InvoiceScheduleEntryPreviousAttributes.due variant 1.due_date variant 1

anyOf variant 1: Calendar due date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Collectible from the start of this date, overdue only after it ends. Always present for date; for at_issue and invoice_due_date, omitted on drafts and resolved at issue to the issue date or invoice due_date..

- Value shape: string. Calendar due date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Collectible from the start of this date, overdue only after it ends. Always present for date; for at_issue and invoice_due_date, omitted on drafts and resolved at issue to the issue date or invoice due_date. Calendar due date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Collectible from the start of this date, overdue only after it ends. Always present for date; for at_issue and invoice_due_date, omitted on drafts and resolved at issue to the issue date or invoice due_date. Format: `date`. Example: `"2026-08-02"`. 

### InvoiceScheduleEntryPreviousAttributes.due variant 1.due_date variant 2

anyOf variant 2.

- Value shape: null. Calendar due date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Collectible from the start of this date, overdue only after it ends. Always present for date; for at_issue and invoice_due_date, omitted on drafts and resolved at issue to the issue date or invoice due_date. 

### InvoiceScheduleEntryPreviousAttributes.due variant 1.type

### InvoiceScheduleEntryPreviousAttributes.due variant 1.type variant 1

anyOf group 1 variant 1: How the entry's due date is set..

- Value shape: string. How the entry's due date is set. Values: `"at_issue"`, `"date"`, `"invoice_due_date"`.

### InvoiceScheduleEntryPreviousAttributes.due variant 1.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the entry's due date is set. 

### InvoiceScheduleEntryPreviousAttributes.due variant 1.type variant 3, 5

anyOf group 2 variant 1: How the entry's due date is set.; anyOf group 3 variant 1.

- Value shape: string. How the entry's due date is set. Values: `"at_issue"`.

### InvoiceScheduleEntryPreviousAttributes.due variant 2.due_date

Declared alternatives: [InvoiceScheduleEntryPreviousAttributes.due variant 1.due_date](../models/InvoiceScheduleEntryPreviousAttributes.md#invoicescheduleentrypreviousattributesdue-variant-1due_date).

### InvoiceScheduleEntryPreviousAttributes.due variant 2.type

### InvoiceScheduleEntryPreviousAttributes.due variant 2.type variant 1

anyOf group 1 variant 1: How the entry's due date is set..

- Value shape: string. How the entry's due date is set. Values: `"at_issue"`, `"date"`, `"invoice_due_date"`.

### InvoiceScheduleEntryPreviousAttributes.due variant 2.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the entry's due date is set. 

### InvoiceScheduleEntryPreviousAttributes.due variant 2.type variant 3, 5

anyOf group 2 variant 1: How the entry's due date is set.; anyOf group 3 variant 1.

- Value shape: string. How the entry's due date is set. Values: `"date"`.

### InvoiceScheduleEntryPreviousAttributes.due variant 3.due_date

Declared alternatives: [InvoiceScheduleEntryPreviousAttributes.due variant 1.due_date](../models/InvoiceScheduleEntryPreviousAttributes.md#invoicescheduleentrypreviousattributesdue-variant-1due_date).

### InvoiceScheduleEntryPreviousAttributes.due variant 3.type

### InvoiceScheduleEntryPreviousAttributes.due variant 3.type variant 1

anyOf group 1 variant 1: How the entry's due date is set..

- Value shape: string. How the entry's due date is set. Values: `"at_issue"`, `"date"`, `"invoice_due_date"`.

### InvoiceScheduleEntryPreviousAttributes.due variant 3.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the entry's due date is set. 

### InvoiceScheduleEntryPreviousAttributes.due variant 3.type variant 3, 5

anyOf group 2 variant 1: How the entry's due date is set.; anyOf group 3 variant 1.

- Value shape: string. How the entry's due date is set. Values: `"invoice_due_date"`.

### InvoiceScheduleEntryPreviousAttributes.invoice_schedule_entry_id

### InvoiceScheduleEntryPreviousAttributes.invoice_schedule_entry_id variant 1

anyOf variant 1: Flint invoice schedule entry ID. Kept across draft edits that send it back with the entry..

- Value shape: string. Flint invoice schedule entry ID. Kept across draft edits that send it back with the entry. 

### InvoiceScheduleEntryPreviousAttributes.invoice_schedule_entry_id variant 2

anyOf variant 2.

- Value shape: null. Flint invoice schedule entry ID. Kept across draft edits that send it back with the entry. 

### InvoiceScheduleEntryPreviousAttributes.kind

### InvoiceScheduleEntryPreviousAttributes.kind variant 1

anyOf variant 1: The entry's role in the schedule..

- Value shape: string. The entry's role in the schedule. Values: `"deposit"`, `"installment"`, `"balance"`.

### InvoiceScheduleEntryPreviousAttributes.kind variant 2

anyOf variant 2.

- Value shape: null. The entry's role in the schedule. 

### InvoiceScheduleEntryPreviousAttributes.status

### InvoiceScheduleEntryPreviousAttributes.status variant 1

anyOf variant 1: The entry's payment status, computed when the invoice is read. It follows the entry's balance and due time, not the invoice's status..

- Value shape: string. The entry's payment status, computed when the invoice is read. It follows the entry's balance and due time, not the invoice's status. Values: `"pending"`, `"due"`, `"partially_satisfied"`, `"satisfied"`, `"overdue"`.

### InvoiceScheduleEntryPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. The entry's payment status, computed when the invoice is read. It follows the entry's balance and due time, not the invoice's status. 

