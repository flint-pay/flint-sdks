[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentTermCalculation

How an invoice due date is calculated from payment terms, such as on receipt, net days, or a day of the month.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `day` | Conditional | integer | Day of the month. Later days clamp to the last day of the month. Format: `int32`. minimum: `1`. maximum: `31`. |
| `days` | Conditional | integer | Format: `int32`. minimum: `0`. maximum: `365`. |
| `type` | Required | string | Values: `"on_receipt"`, `"net_days"`, `"day_of_month"`, `"day_of_next_month"`, `"days_after_month_end"`. |

### InvoicePaymentTermCalculation variant 1: `type` = `"on_receipt"`

oneOf variant 1: The `on_receipt` variant of `InvoicePaymentTermCalculation`..

- Condition: not (at least one(present(`days`); present(`day`))).
- Optional: `day`, `days`.
- Constraints for `type`: Values: `"on_receipt"`.

### InvoicePaymentTermCalculation variant 2: `type` = `"net_days"`

oneOf variant 2: The `net_days` variant of `InvoicePaymentTermCalculation`..

- Condition: not (present(`day`)).
- Required: `days`.
- Optional: `day`.
- Constraints for `type`: Values: `"net_days"`.

### InvoicePaymentTermCalculation variant 3: `type` = `"days_after_month_end"`

oneOf variant 3: The `days_after_month_end` variant of `InvoicePaymentTermCalculation`..

- Condition: not (present(`day`)).
- Required: `days`.
- Optional: `day`.
- Constraints for `type`: Values: `"days_after_month_end"`.

### InvoicePaymentTermCalculation variant 4: `type` = `"day_of_month"`

oneOf variant 4: The `day_of_month` variant of `InvoicePaymentTermCalculation`..

- Condition: not (present(`days`)).
- Required: `day`.
- Optional: `days`.
- Constraints for `type`: Values: `"day_of_month"`.

### InvoicePaymentTermCalculation variant 5: `type` = `"day_of_next_month"`

oneOf variant 5: The `day_of_next_month` variant of `InvoicePaymentTermCalculation`..

- Condition: not (present(`days`)).
- Required: `day`.
- Optional: `days`.
- Constraints for `type`: Values: `"day_of_next_month"`.

