[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentTermCalculationDayOfMonthPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `day` | Optional | integer or null | Day of the month. Later days clamp to the last day of the month. `day`: [declared alternatives](../models/InvoicePaymentTermCalculationDayOfMonthPreviousAttributesInput.md#invoicepaymenttermcalculationdayofmonthpreviousattributesinputday). |
| `days` | Optional | integer or null | Calendar days after issue for net_days, or after the issue month's last day for days_after_month_end. Required only for those types. `days`: [declared alternatives](../models/InvoicePaymentTermCalculationDayOfMonthPreviousAttributesInput.md#invoicepaymenttermcalculationdayofmonthpreviousattributesinputdays). |
| `type` | Optional | string or null | How issue calculates the invoice's due date in the invoice timezone. Values: `"day_of_month"`. `type`: [declared alternatives](../models/InvoicePaymentTermCalculationDayOfMonthPreviousAttributesInput.md#invoicepaymenttermcalculationdayofmonthpreviousattributesinputtype). |

### InvoicePaymentTermCalculationDayOfMonthPreviousAttributesInput.day

### InvoicePaymentTermCalculationDayOfMonthPreviousAttributesInput.day variant 1

anyOf variant 1: Day of the month. Later days clamp to the last day of the month..

- Value shape: integer. Day of the month. Later days clamp to the last day of the month. Day of the month. Later days clamp to the last day of the month. Format: `int32`. minimum: `1`. maximum: `31`. 

### InvoicePaymentTermCalculationDayOfMonthPreviousAttributesInput.day variant 2

anyOf variant 2.

- Value shape: null. Day of the month. Later days clamp to the last day of the month. 

### InvoicePaymentTermCalculationDayOfMonthPreviousAttributesInput.days

### InvoicePaymentTermCalculationDayOfMonthPreviousAttributesInput.days variant 1

anyOf variant 1: Calendar days after issue for net_days, or after the issue month's last day for days_after_month_end. Required only for those types..

- Value shape: integer. Calendar days after issue for net_days, or after the issue month's last day for days_after_month_end. Required only for those types. Calendar days after issue for net_days, or after the issue month's last day for days_after_month_end. Required only for those types. Format: `int32`. minimum: `0`. maximum: `365`. 

### InvoicePaymentTermCalculationDayOfMonthPreviousAttributesInput.days variant 2

anyOf variant 2.

- Value shape: null. Calendar days after issue for net_days, or after the issue month's last day for days_after_month_end. Required only for those types. 

### InvoicePaymentTermCalculationDayOfMonthPreviousAttributesInput.type

### InvoicePaymentTermCalculationDayOfMonthPreviousAttributesInput.type variant 1

anyOf variant 1: How issue calculates the invoice's due date in the invoice timezone..

- Value shape: string. How issue calculates the invoice's due date in the invoice timezone. Values: `"day_of_month"`.

### InvoicePaymentTermCalculationDayOfMonthPreviousAttributesInput.type variant 2

anyOf variant 2.

- Value shape: null. How issue calculates the invoice's due date in the invoice timezone. 

