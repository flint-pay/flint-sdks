[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceScheduleEntryPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_specification` | Optional | [InvoiceScheduleAmountSpecificationPreviousAttributes](../models/InvoiceScheduleAmountSpecificationPreviousAttributes.md#invoicescheduleamountspecificationpreviousattributes) or null | How the entry's amount is set: a fixed amount, a percent of the invoice total, or the remaining balance. |
| `credited_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Credit note credit allocated to this entry, minus reversed allocations. `credited_money`: [declared alternatives](../models/InvoiceScheduleEntryPreviousAttributes.md#invoicescheduleentrypreviousattributescredited_money). |
| `due` | Optional | [InvoiceScheduleDuePreviousAttributes](../models/InvoiceScheduleDuePreviousAttributes.md#invoicescheduleduepreviousattributes) or null | When the entry is due. |
| `invoice_schedule_entry_id` | Optional | string or null | Flint invoice schedule entry ID. Kept across draft edits that send it back with the entry. `invoice_schedule_entry_id`: [declared alternatives](../models/InvoiceScheduleEntryPreviousAttributes.md#invoicescheduleentrypreviousattributesinvoice_schedule_entry_id). |
| `kind` | Optional | string or null | The entry's role in the schedule. Values: `"deposit"`, `"installment"`, `"balance"`. `kind`: [declared alternatives](../models/InvoiceScheduleEntryPreviousAttributes.md#invoicescheduleentrypreviousattributeskind). |
| `outstanding_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | What is still owed on this entry, including its unpaid late fee, never below zero. `outstanding_money`: [declared alternatives](../models/InvoiceScheduleEntryPreviousAttributes.md#invoicescheduleentrypreviousattributesoutstanding_money). |
| `paid_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Payments applied to this entry, minus reversed payments, including payments toward its late fee. Dispute losses don't reduce it. It can exceed total_money when the entry carries a late fee. `paid_money`: [declared alternatives](../models/InvoiceScheduleEntryPreviousAttributes.md#invoicescheduleentrypreviousattributespaid_money). |
| `status` | Optional | string or null | The entry's payment status, computed when the invoice is read. It follows the entry's balance and due time, not the invoice's status. Values: `"pending"`, `"due"`, `"partially_satisfied"`, `"satisfied"`, `"overdue"`. `status`: [declared alternatives](../models/InvoiceScheduleEntryPreviousAttributes.md#invoicescheduleentrypreviousattributesstatus). |
| `total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The entry's share of the invoice total, resolved from amount_specification against pricing_amounts.total_money. Recomputed on draft edits and fixed at issue. Excludes late fees. `total_money`: [declared alternatives](../models/InvoiceScheduleEntryPreviousAttributes.md#invoicescheduleentrypreviousattributestotal_money). |
| `written_off_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The part of this entry written off when the invoice was marked uncollectible, including its unpaid late fee. `written_off_money`: [declared alternatives](../models/InvoiceScheduleEntryPreviousAttributes.md#invoicescheduleentrypreviousattributeswritten_off_money). |

### InvoiceScheduleEntryPreviousAttributes.credited_money

Credit note credit allocated to this entry, minus reversed allocations.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### InvoiceScheduleEntryPreviousAttributes.credited_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### InvoiceScheduleEntryPreviousAttributes.credited_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Credit note credit allocated to this entry, minus reversed allocations. 

### InvoiceScheduleEntryPreviousAttributes.credited_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### InvoiceScheduleEntryPreviousAttributes.credited_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### InvoiceScheduleEntryPreviousAttributes.invoice_schedule_entry_id

### InvoiceScheduleEntryPreviousAttributes.invoice_schedule_entry_id variant 1

anyOf variant 1: Flint invoice schedule entry ID. Kept across draft edits that send it back with the entry..

- Value shape: string. Flint invoice schedule entry ID. Kept across draft edits that send it back with the entry. Flint invoice schedule entry ID. Kept across draft edits that send it back with the entry. Example: `"invse_01KEZF7C006JCPQBD8VZ0RNT6R"`. 

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

### InvoiceScheduleEntryPreviousAttributes.outstanding_money

What is still owed on this entry, including its unpaid late fee, never below zero.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### InvoiceScheduleEntryPreviousAttributes.outstanding_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### InvoiceScheduleEntryPreviousAttributes.outstanding_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. What is still owed on this entry, including its unpaid late fee, never below zero. 

### InvoiceScheduleEntryPreviousAttributes.outstanding_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### InvoiceScheduleEntryPreviousAttributes.outstanding_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### InvoiceScheduleEntryPreviousAttributes.paid_money

Payments applied to this entry, minus reversed payments, including payments toward its late fee. Dispute losses don't reduce it. It can exceed total_money when the entry carries a late fee.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### InvoiceScheduleEntryPreviousAttributes.paid_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### InvoiceScheduleEntryPreviousAttributes.paid_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Payments applied to this entry, minus reversed payments, including payments toward its late fee. Dispute losses don't reduce it. It can exceed total_money when the entry carries a late fee. 

### InvoiceScheduleEntryPreviousAttributes.paid_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### InvoiceScheduleEntryPreviousAttributes.paid_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### InvoiceScheduleEntryPreviousAttributes.status

### InvoiceScheduleEntryPreviousAttributes.status variant 1

anyOf variant 1: The entry's payment status, computed when the invoice is read. It follows the entry's balance and due time, not the invoice's status..

- Value shape: string. The entry's payment status, computed when the invoice is read. It follows the entry's balance and due time, not the invoice's status. Values: `"pending"`, `"due"`, `"partially_satisfied"`, `"satisfied"`, `"overdue"`.

### InvoiceScheduleEntryPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. The entry's payment status, computed when the invoice is read. It follows the entry's balance and due time, not the invoice's status. 

### InvoiceScheduleEntryPreviousAttributes.total_money

The entry's share of the invoice total, resolved from amount_specification against pricing_amounts.total_money. Recomputed on draft edits and fixed at issue. Excludes late fees.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### InvoiceScheduleEntryPreviousAttributes.total_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### InvoiceScheduleEntryPreviousAttributes.total_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The entry's share of the invoice total, resolved from amount_specification against pricing_amounts.total_money. Recomputed on draft edits and fixed at issue. Excludes late fees. 

### InvoiceScheduleEntryPreviousAttributes.total_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### InvoiceScheduleEntryPreviousAttributes.total_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### InvoiceScheduleEntryPreviousAttributes.written_off_money

The part of this entry written off when the invoice was marked uncollectible, including its unpaid late fee.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### InvoiceScheduleEntryPreviousAttributes.written_off_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### InvoiceScheduleEntryPreviousAttributes.written_off_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The part of this entry written off when the invoice was marked uncollectible, including its unpaid late fee. 

### InvoiceScheduleEntryPreviousAttributes.written_off_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### InvoiceScheduleEntryPreviousAttributes.written_off_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

