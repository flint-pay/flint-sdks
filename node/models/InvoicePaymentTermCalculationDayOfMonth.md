[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentTermCalculationDayOfMonth







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `day` | Required | integer | Day of the month. Later days clamp to the last day of the month. Format: `int32`. minimum: `1`. maximum: `31`. |
| `days` | Optional | integer | Calendar days after issue for net_days, or after the issue month's last day for days_after_month_end. Required only for those types. Format: `int32`. minimum: `0`. maximum: `365`. |
| `type` | Required | string | How issue calculates the invoice's due date in the invoice timezone. Values: `"day_of_month"`. |

### InvoicePaymentTermCalculationDayOfMonth variant 1: `type` = `"day_of_month"`

anyOf InvoicePaymentTermCalculationDayOfMonth: Declared schema InvoicePaymentTermCalculationDayOfMonth. The `day_of_month` variant of `InvoicePaymentTermCalculation`..

- Condition: not (present(`days`)).

### InvoicePaymentTermCalculationDayOfMonth variant 2: `type` = `"day_of_month"`

anyOf InvoicePaymentTermCalculationDayOfMonth: Declared schema InvoicePaymentTermCalculationDayOfMonthRequest. The `day_of_month` variant of `InvoicePaymentTermCalculation`..

- Condition: not (present(`days`)).

