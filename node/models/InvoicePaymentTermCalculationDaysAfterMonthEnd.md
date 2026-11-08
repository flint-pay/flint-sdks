[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentTermCalculationDaysAfterMonthEnd







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `day` | Optional | integer | Day of the month. Later days clamp to the last day of the month. Format: `int32`. minimum: `1`. maximum: `31`. |
| `days` | Required | integer | Calendar days after issue for net_days, or after the issue month's last day for days_after_month_end. Required only for those types. Format: `int32`. minimum: `0`. maximum: `365`. |
| `type` | Required | string | How issue calculates the invoice's due date in the invoice timezone. Values: `"days_after_month_end"`. |

### InvoicePaymentTermCalculationDaysAfterMonthEnd variant 1: `type` = `"days_after_month_end"`

anyOf InvoicePaymentTermCalculationDaysAfterMonthEnd: Declared schema InvoicePaymentTermCalculationDaysAfterMonthEnd. The `days_after_month_end` variant of `InvoicePaymentTermCalculation`..

- Condition: not (present(`day`)).

### InvoicePaymentTermCalculationDaysAfterMonthEnd variant 2: `type` = `"days_after_month_end"`

anyOf InvoicePaymentTermCalculationDaysAfterMonthEnd: Declared schema InvoicePaymentTermCalculationDaysAfterMonthEndRequest. The `days_after_month_end` variant of `InvoicePaymentTermCalculation`..

- Condition: not (present(`day`)).

