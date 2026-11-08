[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentTermCalculationNetDays







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `day` | Optional | integer | Day of the month. Later days clamp to the last day of the month. Format: `int32`. minimum: `1`. maximum: `31`. |
| `days` | Required | integer | Calendar days after issue for net_days, or after the issue month's last day for days_after_month_end. Required only for those types. Format: `int32`. minimum: `0`. maximum: `365`. |
| `type` | Required | string | How issue calculates the invoice's due date in the invoice timezone. Values: `"net_days"`. |

### InvoicePaymentTermCalculationNetDays variant 1: `type` = `"net_days"`

anyOf InvoicePaymentTermCalculationNetDays: Declared schema InvoicePaymentTermCalculationNetDays. The `net_days` variant of `InvoicePaymentTermCalculation`..

- Condition: not (present(`day`)).

### InvoicePaymentTermCalculationNetDays variant 2: `type` = `"net_days"`

anyOf InvoicePaymentTermCalculationNetDays: Declared schema InvoicePaymentTermCalculationNetDaysRequest. The `net_days` variant of `InvoicePaymentTermCalculation`..

- Condition: not (present(`day`)).

