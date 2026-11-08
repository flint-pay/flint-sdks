[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentTermCalculationRequestInput

Request input. Response: [InvoicePaymentTermCalculation](../models/InvoicePaymentTermCalculation.md#invoicepaymenttermcalculation).

How an invoice due date is calculated from payment terms, such as on receipt, net days, or a day of the month.





Field definitions: [shared fields](InvoicePaymentTermCalculation.md#invoicepaymenttermcalculation).

### InvoicePaymentTermCalculationRequestInput variant 1: `type` = `"on_receipt"`

oneOf with type: "on_receipt": The `on_receipt` variant of `InvoicePaymentTermCalculation`..

- Condition: not (at least one(present(`days`); present(`day`))).
- Optional: `day`, `days`.
- Constraints for `type`: Values: `"on_receipt"`.

### InvoicePaymentTermCalculationRequestInput variant 2: `type` = `"net_days"`

oneOf with type: "net_days": The `net_days` variant of `InvoicePaymentTermCalculation`..

- Condition: not (present(`day`)).
- Required: `days`.
- Optional: `day`.
- Constraints for `type`: Values: `"net_days"`.

### InvoicePaymentTermCalculationRequestInput variant 3: `type` = `"days_after_month_end"`

oneOf with type: "days_after_month_end": The `days_after_month_end` variant of `InvoicePaymentTermCalculation`..

- Condition: not (present(`day`)).
- Required: `days`.
- Optional: `day`.
- Constraints for `type`: Values: `"days_after_month_end"`.

### InvoicePaymentTermCalculationRequestInput variant 4: `type` = `"day_of_month"`

oneOf with type: "day_of_month": The `day_of_month` variant of `InvoicePaymentTermCalculation`..

- Condition: not (present(`days`)).
- Required: `day`.
- Optional: `days`.
- Constraints for `type`: Values: `"day_of_month"`.

### InvoicePaymentTermCalculationRequestInput variant 5: `type` = `"day_of_next_month"`

oneOf with type: "day_of_next_month": The `day_of_next_month` variant of `InvoicePaymentTermCalculation`..

- Condition: not (present(`days`)).
- Required: `day`.
- Optional: `days`.
- Constraints for `type`: Values: `"day_of_next_month"`.

