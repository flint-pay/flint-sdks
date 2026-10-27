[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentTermsSnapshot

The payment terms saved on an invoice: the term's name, version, due date calculation, and late fee policy.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Required | object and ([InvoicePaymentTermCalculationOnReceipt](../models/InvoicePaymentTermCalculationOnReceipt.md#invoicepaymenttermcalculationonreceipt) or [InvoicePaymentTermCalculationNetDays](../models/InvoicePaymentTermCalculationNetDays.md#invoicepaymenttermcalculationnetdays) or [InvoicePaymentTermCalculationDaysAfterMonthEnd](../models/InvoicePaymentTermCalculationDaysAfterMonthEnd.md#invoicepaymenttermcalculationdaysaftermonthend) or [InvoicePaymentTermCalculationDayOfMonth](../models/InvoicePaymentTermCalculationDayOfMonth.md#invoicepaymenttermcalculationdayofmonth) or [InvoicePaymentTermCalculationDayOfNextMonth](../models/InvoicePaymentTermCalculationDayOfNextMonth.md#invoicepaymenttermcalculationdayofnextmonth)) | How an invoice due date is calculated from payment terms, such as on receipt, net days, or a day of the month. `calculation`: [declared alternatives](../models/InvoicePaymentTermsSnapshot.md#invoicepaymenttermssnapshotcalculation). |
| `invoice_payment_term_id` | Required | string |  |
| `late_fee_policy` | Optional | object and Alternative shapes (see declared variants) | A late fee for overdue invoices: a fixed amount or a percentage, a grace period in days, and whether Flint applies it automatically. `late_fee_policy`: [declared alternatives](../models/InvoicePaymentTermsSnapshot.md#invoicepaymenttermssnapshotlate_fee_policy). |
| `name` | Required | string |  |
| `version` | Required | integer | Version of the invoice payment term captured in this snapshot. Format: `int32`. |

### InvoicePaymentTermsSnapshot.calculation

How an invoice due date is calculated from payment terms, such as on receipt, net days, or a day of the month.

Field definitions: [shared fields](InvoicePaymentTermCalculationInput.md#invoicepaymenttermcalculationinput).

### InvoicePaymentTermsSnapshot.calculation variant 1: `type` = `"on_receipt"`

oneOf variant 1: The `on_receipt` variant of `InvoicePaymentTermCalculation`..

- Condition: not (at least one(present(`days`); present(`day`))).
- Optional: `day`, `days`.
- Constraints for `type`: Values: `"on_receipt"`.

### InvoicePaymentTermsSnapshot.calculation variant 2: `type` = `"net_days"`

oneOf variant 2: The `net_days` variant of `InvoicePaymentTermCalculation`..

- Condition: not (present(`day`)).
- Required: `days`.
- Optional: `day`.
- Constraints for `type`: Values: `"net_days"`.

### InvoicePaymentTermsSnapshot.calculation variant 3: `type` = `"days_after_month_end"`

oneOf variant 3: The `days_after_month_end` variant of `InvoicePaymentTermCalculation`..

- Condition: not (present(`day`)).
- Required: `days`.
- Optional: `day`.
- Constraints for `type`: Values: `"days_after_month_end"`.

### InvoicePaymentTermsSnapshot.calculation variant 4: `type` = `"day_of_month"`

oneOf variant 4: The `day_of_month` variant of `InvoicePaymentTermCalculation`..

- Condition: not (present(`days`)).
- Required: `day`.
- Optional: `days`.
- Constraints for `type`: Values: `"day_of_month"`.

### InvoicePaymentTermsSnapshot.calculation variant 5: `type` = `"day_of_next_month"`

oneOf variant 5: The `day_of_next_month` variant of `InvoicePaymentTermCalculation`..

- Condition: not (present(`days`)).
- Required: `day`.
- Optional: `days`.
- Constraints for `type`: Values: `"day_of_next_month"`.

### InvoicePaymentTermsSnapshot.late_fee_policy

A late fee for overdue invoices: a fixed amount or a percentage, a grace period in days, and whether Flint applies it automatically.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `application_mode` | Optional | string | Whether Flint applies the one-time fee automatically after the grace period. Omission defaults to manual. Frozen when the invoice is issued. Default: `"manual"`. Values: `"manual"`, `"automatic"`. |
| `grace_period_days` | Required | integer | Format: `int32`. minimum: `0`. maximum: `365`. |
| `percent` | Conditional | number | Percentage applied to the fee base_outstanding_money. maximum: `100`. exclusiveMinimum: `0`. multipleOf: `0.0001`. |
| `type` | Required | string | Values: `"fixed"`, `"percentage"`. |

### InvoicePaymentTermsSnapshot.late_fee_policy variant 1: `type` = `"fixed"`

oneOf variant 1: The `fixed` variant of `InvoiceLateFeePolicy`..

- Condition: not (present(`percent`)).
- Required: `amount_money`.
- Optional: `percent`.
- Constraints for `type`: Values: `"fixed"`.

### InvoicePaymentTermsSnapshot.late_fee_policy variant 2: `type` = `"percentage"`

oneOf variant 2: The `percentage` variant of `InvoiceLateFeePolicy`..

- Condition: not (present(`amount_money`)).
- Required: `percent`.
- Optional: `amount_money`.
- Constraints for `type`: Values: `"percentage"`.

