[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentTermCalculationDayOfNextMonthPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `day` | Optional | integer or null | Day of the month. Later days clamp to the last day of the month. `day`: [declared alternatives](../models/InvoicePaymentTermCalculationDayOfMonthPreviousAttributes.md#invoicepaymenttermcalculationdayofmonthpreviousattributesday). |
| `days` | Optional | integer or null | Calendar days after issue for net_days, or after the issue month's last day for days_after_month_end. Required only for those types. `days`: [declared alternatives](../models/InvoicePaymentTermCalculationDayOfMonthPreviousAttributes.md#invoicepaymenttermcalculationdayofmonthpreviousattributesdays). |
| `type` | Optional | string or null | How issue calculates the invoice's due date in the invoice timezone. Values: `"day_of_next_month"`. `type`: [declared alternatives](../models/InvoicePaymentTermCalculationDayOfNextMonthPreviousAttributes.md#invoicepaymenttermcalculationdayofnextmonthpreviousattributestype). |

### InvoicePaymentTermCalculationDayOfNextMonthPreviousAttributes.day

Declared alternatives: [InvoicePaymentTermCalculationDayOfMonthPreviousAttributes.day](../models/InvoicePaymentTermCalculationDayOfMonthPreviousAttributes.md#invoicepaymenttermcalculationdayofmonthpreviousattributesday).

### InvoicePaymentTermCalculationDayOfNextMonthPreviousAttributes.days

Declared alternatives: [InvoicePaymentTermCalculationDayOfMonthPreviousAttributes.days](../models/InvoicePaymentTermCalculationDayOfMonthPreviousAttributes.md#invoicepaymenttermcalculationdayofmonthpreviousattributesdays).

### InvoicePaymentTermCalculationDayOfNextMonthPreviousAttributes.type

### InvoicePaymentTermCalculationDayOfNextMonthPreviousAttributes.type variant 1

anyOf variant 1: How issue calculates the invoice's due date in the invoice timezone..

- Value shape: string. How issue calculates the invoice's due date in the invoice timezone. Values: `"day_of_next_month"`.

### InvoicePaymentTermCalculationDayOfNextMonthPreviousAttributes.type variant 2

anyOf variant 2.

- Value shape: null. How issue calculates the invoice's due date in the invoice timezone. 

