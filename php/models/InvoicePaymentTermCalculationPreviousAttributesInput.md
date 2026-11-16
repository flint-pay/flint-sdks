[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentTermCalculationPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `day` | Optional | integer or null | Day of the month. Later days clamp to the last day of the month. `day`: [declared alternatives](../models/InvoicePaymentTermCalculationDayOfMonthPreviousAttributesInput.md#invoicepaymenttermcalculationdayofmonthpreviousattributesinputday). |
| `days` | Optional | integer or null | Calendar days after issue for net_days, or after the issue month's last day for days_after_month_end. Required only for those types. `days`: [declared alternatives](../models/InvoicePaymentTermCalculationDayOfMonthPreviousAttributesInput.md#invoicepaymenttermcalculationdayofmonthpreviousattributesinputdays). |
| `type` | Optional | (string or null) | How issue calculates the invoice's due date in the invoice timezone. Values: `"on_receipt"`, `"net_days"`, `"day_of_month"`, `"day_of_next_month"`, `"days_after_month_end"`. `type`: [declared alternatives](../models/InvoicePaymentTermCalculationPreviousAttributesInput.md#invoicepaymenttermcalculationpreviousattributesinput-variant-1type), [declared alternatives](../models/InvoicePaymentTermCalculationPreviousAttributesInput.md#invoicepaymenttermcalculationpreviousattributesinput-variant-2type), [declared alternatives](../models/InvoicePaymentTermCalculationPreviousAttributesInput.md#invoicepaymenttermcalculationpreviousattributesinput-variant-3type), [declared alternatives](../models/InvoicePaymentTermCalculationPreviousAttributesInput.md#invoicepaymenttermcalculationpreviousattributesinput-variant-4type), [declared alternatives](../models/InvoicePaymentTermCalculationPreviousAttributesInput.md#invoicepaymenttermcalculationpreviousattributesinput-variant-5type). |

### InvoicePaymentTermCalculationPreviousAttributesInput variant 1: `type` = `"on_receipt"`

anyOf InvoicePaymentTermCalculationOnReceiptPreviousAttributes.

- Constraints for `type`: Values: `"on_receipt"`.

### InvoicePaymentTermCalculationPreviousAttributesInput variant 2: `type` = `"net_days"`

anyOf InvoicePaymentTermCalculationNetDaysPreviousAttributes.

- Constraints for `type`: Values: `"net_days"`.

### InvoicePaymentTermCalculationPreviousAttributesInput variant 3: `type` = `"days_after_month_end"`

anyOf InvoicePaymentTermCalculationDaysAfterMonthEndPreviousAttributes.

- Constraints for `type`: Values: `"days_after_month_end"`.

### InvoicePaymentTermCalculationPreviousAttributesInput variant 4: `type` = `"day_of_month"`

anyOf InvoicePaymentTermCalculationDayOfMonthPreviousAttributes.

- Constraints for `type`: Values: `"day_of_month"`.

### InvoicePaymentTermCalculationPreviousAttributesInput variant 5: `type` = `"day_of_next_month"`

anyOf InvoicePaymentTermCalculationDayOfNextMonthPreviousAttributes.

- Constraints for `type`: Values: `"day_of_next_month"`.

### InvoicePaymentTermCalculationPreviousAttributesInput.day

Declared alternatives: [InvoicePaymentTermCalculationDayOfMonthPreviousAttributesInput.day](../models/InvoicePaymentTermCalculationDayOfMonthPreviousAttributesInput.md#invoicepaymenttermcalculationdayofmonthpreviousattributesinputday).

### InvoicePaymentTermCalculationPreviousAttributesInput.days

Declared alternatives: [InvoicePaymentTermCalculationDayOfMonthPreviousAttributesInput.days](../models/InvoicePaymentTermCalculationDayOfMonthPreviousAttributesInput.md#invoicepaymenttermcalculationdayofmonthpreviousattributesinputdays).

### InvoicePaymentTermCalculationPreviousAttributesInput variant 1.type

### InvoicePaymentTermCalculationPreviousAttributesInput variant 1.type variant 1

anyOf group 1 variant 1: How issue calculates the invoice's due date in the invoice timezone..

- Value shape: string. How issue calculates the invoice's due date in the invoice timezone. Values: `"on_receipt"`, `"net_days"`, `"day_of_month"`, `"day_of_next_month"`, `"days_after_month_end"`.

### InvoicePaymentTermCalculationPreviousAttributesInput variant 1.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. How issue calculates the invoice's due date in the invoice timezone. 

### InvoicePaymentTermCalculationPreviousAttributesInput variant 1.type variant 3

anyOf group 2 variant 1: How issue calculates the invoice's due date in the invoice timezone..

- Value shape: string. How issue calculates the invoice's due date in the invoice timezone. Values: `"on_receipt"`.

### InvoicePaymentTermCalculationPreviousAttributesInput variant 2.type

### InvoicePaymentTermCalculationPreviousAttributesInput variant 2.type variant 1

anyOf group 1 variant 1: How issue calculates the invoice's due date in the invoice timezone..

- Value shape: string. How issue calculates the invoice's due date in the invoice timezone. Values: `"on_receipt"`, `"net_days"`, `"day_of_month"`, `"day_of_next_month"`, `"days_after_month_end"`.

### InvoicePaymentTermCalculationPreviousAttributesInput variant 2.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. How issue calculates the invoice's due date in the invoice timezone. 

### InvoicePaymentTermCalculationPreviousAttributesInput variant 2.type variant 3

anyOf group 2 variant 1: How issue calculates the invoice's due date in the invoice timezone..

- Value shape: string. How issue calculates the invoice's due date in the invoice timezone. Values: `"net_days"`.

### InvoicePaymentTermCalculationPreviousAttributesInput variant 3.type

### InvoicePaymentTermCalculationPreviousAttributesInput variant 3.type variant 1

anyOf group 1 variant 1: How issue calculates the invoice's due date in the invoice timezone..

- Value shape: string. How issue calculates the invoice's due date in the invoice timezone. Values: `"on_receipt"`, `"net_days"`, `"day_of_month"`, `"day_of_next_month"`, `"days_after_month_end"`.

### InvoicePaymentTermCalculationPreviousAttributesInput variant 3.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. How issue calculates the invoice's due date in the invoice timezone. 

### InvoicePaymentTermCalculationPreviousAttributesInput variant 3.type variant 3

anyOf group 2 variant 1: How issue calculates the invoice's due date in the invoice timezone..

- Value shape: string. How issue calculates the invoice's due date in the invoice timezone. Values: `"days_after_month_end"`.

### InvoicePaymentTermCalculationPreviousAttributesInput variant 4.type

### InvoicePaymentTermCalculationPreviousAttributesInput variant 4.type variant 1

anyOf group 1 variant 1: How issue calculates the invoice's due date in the invoice timezone..

- Value shape: string. How issue calculates the invoice's due date in the invoice timezone. Values: `"on_receipt"`, `"net_days"`, `"day_of_month"`, `"day_of_next_month"`, `"days_after_month_end"`.

### InvoicePaymentTermCalculationPreviousAttributesInput variant 4.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. How issue calculates the invoice's due date in the invoice timezone. 

### InvoicePaymentTermCalculationPreviousAttributesInput variant 4.type variant 3

anyOf group 2 variant 1: How issue calculates the invoice's due date in the invoice timezone..

- Value shape: string. How issue calculates the invoice's due date in the invoice timezone. Values: `"day_of_month"`.

### InvoicePaymentTermCalculationPreviousAttributesInput variant 5.type

### InvoicePaymentTermCalculationPreviousAttributesInput variant 5.type variant 1

anyOf group 1 variant 1: How issue calculates the invoice's due date in the invoice timezone..

- Value shape: string. How issue calculates the invoice's due date in the invoice timezone. Values: `"on_receipt"`, `"net_days"`, `"day_of_month"`, `"day_of_next_month"`, `"days_after_month_end"`.

### InvoicePaymentTermCalculationPreviousAttributesInput variant 5.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. How issue calculates the invoice's due date in the invoice timezone. 

### InvoicePaymentTermCalculationPreviousAttributesInput variant 5.type variant 3

anyOf group 2 variant 1: How issue calculates the invoice's due date in the invoice timezone..

- Value shape: string. How issue calculates the invoice's due date in the invoice timezone. Values: `"day_of_next_month"`.

