[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentTermCalculationNetDaysPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `day` | Optional | integer or null | Day of the month. Later days clamp to the last day of the month. `day`: [declared alternatives](../models/InvoicePaymentTermCalculationDayOfMonthPreviousAttributes.md#invoicepaymenttermcalculationdayofmonthpreviousattributesday). |
| `days` | Optional | integer or null | Calendar days after issue for net_days, or after the issue month's last day for days_after_month_end. Required only for those types. `days`: [declared alternatives](../models/InvoicePaymentTermCalculationDayOfMonthPreviousAttributes.md#invoicepaymenttermcalculationdayofmonthpreviousattributesdays). |
| `type` | Optional | string or null | How issue calculates the invoice's due date in the invoice timezone. Values: `"net_days"`. `type`: [declared alternatives](../models/InvoicePaymentTermCalculationNetDaysPreviousAttributes.md#invoicepaymenttermcalculationnetdayspreviousattributestype). |

### InvoicePaymentTermCalculationNetDaysPreviousAttributes.day

Declared alternatives: [InvoicePaymentTermCalculationDayOfMonthPreviousAttributes.day](../models/InvoicePaymentTermCalculationDayOfMonthPreviousAttributes.md#invoicepaymenttermcalculationdayofmonthpreviousattributesday).

### InvoicePaymentTermCalculationNetDaysPreviousAttributes.days

Declared alternatives: [InvoicePaymentTermCalculationDayOfMonthPreviousAttributes.days](../models/InvoicePaymentTermCalculationDayOfMonthPreviousAttributes.md#invoicepaymenttermcalculationdayofmonthpreviousattributesdays).

### InvoicePaymentTermCalculationNetDaysPreviousAttributes.type

### InvoicePaymentTermCalculationNetDaysPreviousAttributes.type variant 1

anyOf variant 1: How issue calculates the invoice's due date in the invoice timezone..

- Value shape: string. How issue calculates the invoice's due date in the invoice timezone. Values: `"net_days"`.

### InvoicePaymentTermCalculationNetDaysPreviousAttributes.type variant 2

anyOf variant 2.

- Value shape: null. How issue calculates the invoice's due date in the invoice timezone. 

