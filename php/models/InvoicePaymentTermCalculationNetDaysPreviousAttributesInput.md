[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentTermCalculationNetDaysPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `day` | Optional | integer or null | Day of the month. Later days clamp to the last day of the month. `day`: [declared alternatives](../models/InvoicePaymentTermCalculationDayOfMonthPreviousAttributesInput.md#invoicepaymenttermcalculationdayofmonthpreviousattributesinputday). |
| `days` | Optional | integer or null | Calendar days after issue for net_days, or after the issue month's last day for days_after_month_end. Required only for those types. `days`: [declared alternatives](../models/InvoicePaymentTermCalculationDayOfMonthPreviousAttributesInput.md#invoicepaymenttermcalculationdayofmonthpreviousattributesinputdays). |
| `type` | Optional | string or null | How issue calculates the invoice's due date in the invoice timezone. Values: `"net_days"`. `type`: [declared alternatives](../models/InvoicePaymentTermCalculationNetDaysPreviousAttributesInput.md#invoicepaymenttermcalculationnetdayspreviousattributesinputtype). |

### InvoicePaymentTermCalculationNetDaysPreviousAttributesInput.day

Declared alternatives: [InvoicePaymentTermCalculationDayOfMonthPreviousAttributesInput.day](../models/InvoicePaymentTermCalculationDayOfMonthPreviousAttributesInput.md#invoicepaymenttermcalculationdayofmonthpreviousattributesinputday).

### InvoicePaymentTermCalculationNetDaysPreviousAttributesInput.days

Declared alternatives: [InvoicePaymentTermCalculationDayOfMonthPreviousAttributesInput.days](../models/InvoicePaymentTermCalculationDayOfMonthPreviousAttributesInput.md#invoicepaymenttermcalculationdayofmonthpreviousattributesinputdays).

### InvoicePaymentTermCalculationNetDaysPreviousAttributesInput.type

### InvoicePaymentTermCalculationNetDaysPreviousAttributesInput.type variant 1

anyOf variant 1: How issue calculates the invoice's due date in the invoice timezone..

- Value shape: string. How issue calculates the invoice's due date in the invoice timezone. Values: `"net_days"`.

### InvoicePaymentTermCalculationNetDaysPreviousAttributesInput.type variant 2

anyOf variant 2.

- Value shape: null. How issue calculates the invoice's due date in the invoice timezone. 

