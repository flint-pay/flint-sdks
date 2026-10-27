[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceScheduleEntryWrite

One payment schedule entry you supply when creating or updating an invoice. Set its kind, how much it collects, and when it is due.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_specification` | Required | [InvoiceScheduleAmountSpecification](../models/InvoiceScheduleAmountSpecification.md#invoicescheduleamountspecification) | How much a payment schedule entry collects: a fixed amount, a percentage of the invoice total, or the remaining balance. `amount_specification`: [declared alternatives](../models/InvoiceScheduleEntryWrite.md#invoicescheduleentrywrite-variant-1amount_specification), [declared alternatives](../models/InvoiceScheduleEntryWrite.md#invoicescheduleentrywrite-variant-3amount_specification). |
| `due` | Required | [InvoiceScheduleDueWrite](../models/InvoiceScheduleDueWrite.md#invoicescheduleduewrite) | When a payment schedule entry is due, as supplied when creating or updating an invoice: at issue, on a set date, or on the invoice due date. `due`: [declared alternatives](../models/InvoiceScheduleEntryWrite.md#invoicescheduleentrywrite-variant-1due), [declared alternatives](../models/InvoiceScheduleEntryWrite.md#invoicescheduleentrywrite-variant-2due), [declared alternatives](../models/InvoiceScheduleEntryWrite.md#invoicescheduleentrywrite-variant-3due). |
| `invoice_schedule_entry_id` | Optional | string | minLength: `1`. |
| `kind` | Required | string | Values: `"deposit"`, `"installment"`, `"balance"`. |

### InvoiceScheduleEntryWrite variant 1: `kind` = `"deposit"`

oneOf variant 1: The `deposit` variant of `InvoiceScheduleEntryWrite`..

- Constraints for `kind`: Values: `"deposit"`.

### InvoiceScheduleEntryWrite variant 2: `kind` = `"installment"`

oneOf variant 2: The `installment` variant of `InvoiceScheduleEntryWrite`..

- Constraints for `kind`: Values: `"installment"`.

### InvoiceScheduleEntryWrite variant 3: `kind` = `"balance"`

oneOf variant 3: The `balance` variant of `InvoiceScheduleEntryWrite`..

- Constraints for `kind`: Values: `"balance"`.

### InvoiceScheduleEntryWrite variant 1.amount_specification

How much a payment schedule entry collects: a fixed amount, a percentage of the invoice total, or the remaining balance.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `percent` | Conditional | number | multipleOf: `0.0001`. |
| `type` | Required | string | Values: `"fixed"`, `"percentage"`. |

### InvoiceScheduleEntryWrite variant 1.amount_specification variant 1: `type` = `"fixed"`

oneOf variant 1: The `fixed` variant of `InvoiceScheduleAmountSpecification`..

- Condition: not (present(`percent`)).
- Required: `amount_money`.
- Optional: `percent`.
- Constraints for `type`: Values: `"fixed"`.

### InvoiceScheduleEntryWrite variant 1.amount_specification variant 2: `type` = `"percentage"`

oneOf variant 2: The `percentage` variant of `InvoiceScheduleAmountSpecification`..

- Condition: not (present(`amount_money`)).
- Required: `percent`.
- Optional: `amount_money`.
- Constraints for `type`: Values: `"percentage"`.

### InvoiceScheduleEntryWrite variant 1.amount_specification.amount_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### InvoiceScheduleEntryWrite variant 1.due

When a payment schedule entry is due, as supplied when creating or updating an invoice: at issue, on a set date, or on the invoice due date.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `due_at` | Conditional | string | When this entry is due. Required for `date`. Not accepted for `at_issue` or `invoice_due_date`, which Flint resolves when the invoice is issued. Format: `date-time`. minLength: `1`. |
| `type` | Required | string | Values: `"at_issue"`, `"date"`. |

### InvoiceScheduleEntryWrite variant 1.due variant 1: `type` = `"at_issue"`

oneOf variant 1: The `at_issue` variant of `InvoiceScheduleDueWrite`..

- Condition: not (present(`due_at`)).
- Optional: `due_at`.
- Constraints for `type`: Values: `"at_issue"`.

### InvoiceScheduleEntryWrite variant 1.due variant 2: `type` = `"date"`

oneOf variant 2: The `date` variant of `InvoiceScheduleDueWrite`..

- Required: `due_at`.
- Constraints for `type`: Values: `"date"`.

### InvoiceScheduleEntryWrite variant 2.amount_specification

Declared alternatives: [InvoiceScheduleEntryWrite variant 1.amount_specification](../models/InvoiceScheduleEntryWrite.md#invoicescheduleentrywrite-variant-1amount_specification).

### InvoiceScheduleEntryWrite variant 2.due

When a payment schedule entry is due, as supplied when creating or updating an invoice: at issue, on a set date, or on the invoice due date.

Field definitions: [shared fields](InvoiceScheduleDueWriteDateInput.md#invoicescheduleduewritedateinput).

### InvoiceScheduleEntryWrite variant 2.due variant 1: `type` = `"date"`

oneOf variant 2: The `date` variant of `InvoiceScheduleDueWrite`..

No additional constraints.

### InvoiceScheduleEntryWrite variant 3.amount_specification

How much a payment schedule entry collects: a fixed amount, a percentage of the invoice total, or the remaining balance.

Field definitions: [shared fields](InvoiceScheduleAmountSpecificationRemainingBalance.md#invoicescheduleamountspecificationremainingbalance).

### InvoiceScheduleEntryWrite variant 3.amount_specification variant 1: `type` = `"remaining_balance"`

oneOf variant 3: The `remaining_balance` variant of `InvoiceScheduleAmountSpecification`..

- Condition: not (at least one(present(`amount_money`); present(`percent`))).

### InvoiceScheduleEntryWrite variant 3.amount_specification.amount_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### InvoiceScheduleEntryWrite variant 3.due

When a payment schedule entry is due, as supplied when creating or updating an invoice: at issue, on a set date, or on the invoice due date.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `due_at` | Conditional | string | When this entry is due. Required for `date`. Not accepted for `at_issue` or `invoice_due_date`, which Flint resolves when the invoice is issued. Format: `date-time`. minLength: `1`. |
| `type` | Required | string | Values: `"date"`, `"invoice_due_date"`. |

### InvoiceScheduleEntryWrite variant 3.due variant 1: `type` = `"date"`

oneOf variant 2: The `date` variant of `InvoiceScheduleDueWrite`..

- Required: `due_at`.
- Constraints for `type`: Values: `"date"`.

### InvoiceScheduleEntryWrite variant 3.due variant 2: `type` = `"invoice_due_date"`

oneOf variant 3: The `invoice_due_date` variant of `InvoiceScheduleDueWrite`..

- Condition: not (present(`due_at`)).
- Optional: `due_at`.
- Constraints for `type`: Values: `"invoice_due_date"`.

