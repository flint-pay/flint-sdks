[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentTermCalculationOnReceiptPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `day` | Optional | integer or null | Day of the month. Later days clamp to the last day of the month. `day`: [declared alternatives](../models/InvoicePaymentTermCalculationDayOfMonthPreviousAttributes.md#invoicepaymenttermcalculationdayofmonthpreviousattributesday). |
| `days` | Optional | integer or null | Calendar days after issue for net_days, or after the issue month's last day for days_after_month_end. Required only for those types. `days`: [declared alternatives](../models/InvoicePaymentTermCalculationDayOfMonthPreviousAttributes.md#invoicepaymenttermcalculationdayofmonthpreviousattributesdays). |
| `type` | Optional | string or null | How issue calculates the invoice's due date in the invoice timezone. Values: `"on_receipt"`. `type`: [declared alternatives](../models/InvoicePaymentTermCalculationOnReceiptPreviousAttributes.md#invoicepaymenttermcalculationonreceiptpreviousattributestype). |

### InvoicePaymentTermCalculationOnReceiptPreviousAttributes.day

Declared alternatives: [InvoicePaymentTermCalculationDayOfMonthPreviousAttributes.day](../models/InvoicePaymentTermCalculationDayOfMonthPreviousAttributes.md#invoicepaymenttermcalculationdayofmonthpreviousattributesday).

### InvoicePaymentTermCalculationOnReceiptPreviousAttributes.days

Declared alternatives: [InvoicePaymentTermCalculationDayOfMonthPreviousAttributes.days](../models/InvoicePaymentTermCalculationDayOfMonthPreviousAttributes.md#invoicepaymenttermcalculationdayofmonthpreviousattributesdays).

### InvoicePaymentTermCalculationOnReceiptPreviousAttributes.type

### InvoicePaymentTermCalculationOnReceiptPreviousAttributes.type variant 1

anyOf variant 1: How issue calculates the invoice's due date in the invoice timezone..

- Value shape: string. How issue calculates the invoice's due date in the invoice timezone. Values: `"on_receipt"`.

### InvoicePaymentTermCalculationOnReceiptPreviousAttributes.type variant 2

anyOf variant 2.

- Value shape: null. How issue calculates the invoice's due date in the invoice timezone. 

