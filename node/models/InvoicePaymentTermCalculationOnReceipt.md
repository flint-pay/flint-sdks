[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentTermCalculationOnReceipt







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `day` | Optional | integer | Day of the month. Later days clamp to the last day of the month. Format: `int32`. minimum: `1`. maximum: `31`. |
| `days` | Optional | integer | Calendar days after issue for net_days, or after the issue month's last day for days_after_month_end. Required only for those types. Format: `int32`. minimum: `0`. maximum: `365`. |
| `type` | Required | string | How issue calculates the invoice's due date in the invoice timezone. Values: `"on_receipt"`. |

### InvoicePaymentTermCalculationOnReceipt variant 1: `type` = `"on_receipt"`

anyOf InvoicePaymentTermCalculationOnReceipt: Declared schema InvoicePaymentTermCalculationOnReceipt. The `on_receipt` variant of `InvoicePaymentTermCalculation`..

- Condition: not (at least one(present(`days`); present(`day`))).

### InvoicePaymentTermCalculationOnReceipt variant 2: `type` = `"on_receipt"`

anyOf InvoicePaymentTermCalculationOnReceipt: Declared schema InvoicePaymentTermCalculationOnReceiptRequest. The `on_receipt` variant of `InvoicePaymentTermCalculation`..

- Condition: not (at least one(present(`days`); present(`day`))).

