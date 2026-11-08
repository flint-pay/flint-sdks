[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentTermsSnapshotCalculationDaysAfterMonthEnd

How an invoice due date is calculated from payment terms, such as on receipt, net days, or a day of the month.

The `days_after_month_end` variant of `InvoicePaymentTermCalculation`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `day` | Optional | integer | Day of the month. Later days clamp to the last day of the month. Format: `int32`. minimum: `1`. maximum: `31`. |
| `days` | Required | integer | Calendar days after issue for net_days, or after the issue month's last day for days_after_month_end. Required only for those types. Format: `int32`. minimum: `0`. maximum: `365`. |
| `type` | Required | string | How issue calculates the invoice's due date in the invoice timezone. Values: `"days_after_month_end"`. |

