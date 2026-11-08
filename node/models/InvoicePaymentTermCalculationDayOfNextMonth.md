[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentTermCalculationDayOfNextMonth







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `day` | Required | integer | Day of the month. Later days clamp to the last day of the month. Format: `int32`. minimum: `1`. maximum: `31`. |
| `days` | Optional | integer | Calendar days after issue for net_days, or after the issue month's last day for days_after_month_end. Required only for those types. Format: `int32`. minimum: `0`. maximum: `365`. |
| `type` | Required | string | How issue calculates the invoice's due date in the invoice timezone. Values: `"day_of_next_month"`. |

### InvoicePaymentTermCalculationDayOfNextMonth variant 1: `type` = `"day_of_next_month"`

anyOf InvoicePaymentTermCalculationDayOfNextMonth: Declared schema InvoicePaymentTermCalculationDayOfNextMonth. The `day_of_next_month` variant of `InvoicePaymentTermCalculation`..

- Condition: not (present(`days`)).

### InvoicePaymentTermCalculationDayOfNextMonth variant 2: `type` = `"day_of_next_month"`

anyOf InvoicePaymentTermCalculationDayOfNextMonth: Declared schema InvoicePaymentTermCalculationDayOfNextMonthRequest. The `day_of_next_month` variant of `InvoicePaymentTermCalculation`..

- Condition: not (present(`days`)).

