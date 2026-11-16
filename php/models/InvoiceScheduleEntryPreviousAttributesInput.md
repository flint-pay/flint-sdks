[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceScheduleEntryPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_specification` | Optional | [InvoiceScheduleAmountSpecificationPreviousAttributesInput](../models/InvoiceScheduleAmountSpecificationPreviousAttributesInput.md#invoicescheduleamountspecificationpreviousattributesinput) or null | How the entry's amount is set: a fixed amount, a percent of the invoice total, or the remaining balance. |
| `credited_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Credit note credit allocated to this entry, minus reversed allocations. |
| `due` | Optional | [InvoiceScheduleDuePreviousAttributesInput](../models/InvoiceScheduleDuePreviousAttributesInput.md#invoicescheduleduepreviousattributesinput) or null | When the entry is due. |
| `invoice_schedule_entry_id` | Optional | string or null | Flint invoice schedule entry ID. Kept across draft edits that send it back with the entry. `invoice_schedule_entry_id`: [declared alternatives](../models/InvoiceScheduleEntryPreviousAttributesInput.md#invoicescheduleentrypreviousattributesinputinvoice_schedule_entry_id). |
| `kind` | Optional | string or null | The entry's role in the schedule. Values: `"deposit"`, `"installment"`, `"balance"`. `kind`: [declared alternatives](../models/InvoiceScheduleEntryPreviousAttributesInput.md#invoicescheduleentrypreviousattributesinputkind). |
| `outstanding_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | What is still owed on this entry, including its unpaid late fee, never below zero. |
| `paid_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Payments applied to this entry, minus reversed payments, including payments toward its late fee. Dispute losses don't reduce it. It can exceed total_money when the entry carries a late fee. |
| `status` | Optional | string or null | The entry's payment status, computed when the invoice is read. It follows the entry's balance and due time, not the invoice's status. Values: `"pending"`, `"due"`, `"partially_satisfied"`, `"satisfied"`, `"overdue"`. `status`: [declared alternatives](../models/InvoiceScheduleEntryPreviousAttributesInput.md#invoicescheduleentrypreviousattributesinputstatus). |
| `total_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The entry's share of the invoice total, resolved from amount_specification against pricing_amounts.total_money. Recomputed on draft edits and fixed at issue. Excludes late fees. |
| `written_off_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The part of this entry written off when the invoice was marked uncollectible, including its unpaid late fee. |

### InvoiceScheduleEntryPreviousAttributesInput.invoice_schedule_entry_id

### InvoiceScheduleEntryPreviousAttributesInput.invoice_schedule_entry_id variant 1

anyOf variant 1: Flint invoice schedule entry ID. Kept across draft edits that send it back with the entry..

- Value shape: string. Flint invoice schedule entry ID. Kept across draft edits that send it back with the entry. Flint invoice schedule entry ID. Kept across draft edits that send it back with the entry. Example: `"invse_01KEZF7C006JCPQBD8VZ0RNT6R"`. 

### InvoiceScheduleEntryPreviousAttributesInput.invoice_schedule_entry_id variant 2

anyOf variant 2.

- Value shape: null. Flint invoice schedule entry ID. Kept across draft edits that send it back with the entry. 

### InvoiceScheduleEntryPreviousAttributesInput.kind

### InvoiceScheduleEntryPreviousAttributesInput.kind variant 1

anyOf variant 1: The entry's role in the schedule..

- Value shape: string. The entry's role in the schedule. Values: `"deposit"`, `"installment"`, `"balance"`.

### InvoiceScheduleEntryPreviousAttributesInput.kind variant 2

anyOf variant 2.

- Value shape: null. The entry's role in the schedule. 

### InvoiceScheduleEntryPreviousAttributesInput.status

### InvoiceScheduleEntryPreviousAttributesInput.status variant 1

anyOf variant 1: The entry's payment status, computed when the invoice is read. It follows the entry's balance and due time, not the invoice's status..

- Value shape: string. The entry's payment status, computed when the invoice is read. It follows the entry's balance and due time, not the invoice's status. Values: `"pending"`, `"due"`, `"partially_satisfied"`, `"satisfied"`, `"overdue"`.

### InvoiceScheduleEntryPreviousAttributesInput.status variant 2

anyOf variant 2.

- Value shape: null. The entry's payment status, computed when the invoice is read. It follows the entry's balance and due time, not the invoice's status. 

