[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentTermCalculationPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `day` | Optional | integer or null | Day of the month. Later days clamp to the last day of the month. `day`: [declared alternatives](../models/InvoicePaymentTermCalculationDayOfMonthPreviousAttributes.md#invoicepaymenttermcalculationdayofmonthpreviousattributesday). |
| `days` | Optional | integer or null | Calendar days after issue for net_days, or after the issue month's last day for days_after_month_end. Required only for those types. `days`: [declared alternatives](../models/InvoicePaymentTermCalculationDayOfMonthPreviousAttributes.md#invoicepaymenttermcalculationdayofmonthpreviousattributesdays). |
| `type` | Optional | (string or null) | How issue calculates the invoice's due date in the invoice timezone. Values: `"on_receipt"`, `"net_days"`, `"day_of_month"`, `"day_of_next_month"`, `"days_after_month_end"`. `type`: [declared alternatives](../models/InvoicePaymentTermCalculationPreviousAttributes.md#invoicepaymenttermcalculationpreviousattributes-variant-1type), [declared alternatives](../models/InvoicePaymentTermCalculationPreviousAttributes.md#invoicepaymenttermcalculationpreviousattributes-variant-2type), [declared alternatives](../models/InvoicePaymentTermCalculationPreviousAttributes.md#invoicepaymenttermcalculationpreviousattributes-variant-3type), [declared alternatives](../models/InvoicePaymentTermCalculationPreviousAttributes.md#invoicepaymenttermcalculationpreviousattributes-variant-4type), [declared alternatives](../models/InvoicePaymentTermCalculationPreviousAttributes.md#invoicepaymenttermcalculationpreviousattributes-variant-5type). |

### InvoicePaymentTermCalculationPreviousAttributes variant 1: `type` = `"on_receipt"`

anyOf InvoicePaymentTermCalculationOnReceiptPreviousAttributes.

- Constraints for `type`: Values: `"on_receipt"`.

### InvoicePaymentTermCalculationPreviousAttributes variant 2: `type` = `"net_days"`

anyOf InvoicePaymentTermCalculationNetDaysPreviousAttributes.

- Constraints for `type`: Values: `"net_days"`.

### InvoicePaymentTermCalculationPreviousAttributes variant 3: `type` = `"days_after_month_end"`

anyOf InvoicePaymentTermCalculationDaysAfterMonthEndPreviousAttributes.

- Constraints for `type`: Values: `"days_after_month_end"`.

### InvoicePaymentTermCalculationPreviousAttributes variant 4: `type` = `"day_of_month"`

anyOf InvoicePaymentTermCalculationDayOfMonthPreviousAttributes.

- Constraints for `type`: Values: `"day_of_month"`.

### InvoicePaymentTermCalculationPreviousAttributes variant 5: `type` = `"day_of_next_month"`

anyOf InvoicePaymentTermCalculationDayOfNextMonthPreviousAttributes.

- Constraints for `type`: Values: `"day_of_next_month"`.

### InvoicePaymentTermCalculationPreviousAttributes.day

Declared alternatives: [InvoicePaymentTermCalculationDayOfMonthPreviousAttributes.day](../models/InvoicePaymentTermCalculationDayOfMonthPreviousAttributes.md#invoicepaymenttermcalculationdayofmonthpreviousattributesday).

### InvoicePaymentTermCalculationPreviousAttributes.days

Declared alternatives: [InvoicePaymentTermCalculationDayOfMonthPreviousAttributes.days](../models/InvoicePaymentTermCalculationDayOfMonthPreviousAttributes.md#invoicepaymenttermcalculationdayofmonthpreviousattributesdays).

### InvoicePaymentTermCalculationPreviousAttributes variant 1.type

### InvoicePaymentTermCalculationPreviousAttributes variant 1.type variant 1

anyOf group 1 variant 1: How issue calculates the invoice's due date in the invoice timezone..

- Value shape: string. How issue calculates the invoice's due date in the invoice timezone. Values: `"on_receipt"`, `"net_days"`, `"day_of_month"`, `"day_of_next_month"`, `"days_after_month_end"`.

### InvoicePaymentTermCalculationPreviousAttributes variant 1.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. How issue calculates the invoice's due date in the invoice timezone. 

### InvoicePaymentTermCalculationPreviousAttributes variant 1.type variant 3

anyOf group 2 variant 1: How issue calculates the invoice's due date in the invoice timezone..

- Value shape: string. How issue calculates the invoice's due date in the invoice timezone. Values: `"on_receipt"`.

### InvoicePaymentTermCalculationPreviousAttributes variant 2.type

### InvoicePaymentTermCalculationPreviousAttributes variant 2.type variant 1

anyOf group 1 variant 1: How issue calculates the invoice's due date in the invoice timezone..

- Value shape: string. How issue calculates the invoice's due date in the invoice timezone. Values: `"on_receipt"`, `"net_days"`, `"day_of_month"`, `"day_of_next_month"`, `"days_after_month_end"`.

### InvoicePaymentTermCalculationPreviousAttributes variant 2.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. How issue calculates the invoice's due date in the invoice timezone. 

### InvoicePaymentTermCalculationPreviousAttributes variant 2.type variant 3

anyOf group 2 variant 1: How issue calculates the invoice's due date in the invoice timezone..

- Value shape: string. How issue calculates the invoice's due date in the invoice timezone. Values: `"net_days"`.

### InvoicePaymentTermCalculationPreviousAttributes variant 3.type

### InvoicePaymentTermCalculationPreviousAttributes variant 3.type variant 1

anyOf group 1 variant 1: How issue calculates the invoice's due date in the invoice timezone..

- Value shape: string. How issue calculates the invoice's due date in the invoice timezone. Values: `"on_receipt"`, `"net_days"`, `"day_of_month"`, `"day_of_next_month"`, `"days_after_month_end"`.

### InvoicePaymentTermCalculationPreviousAttributes variant 3.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. How issue calculates the invoice's due date in the invoice timezone. 

### InvoicePaymentTermCalculationPreviousAttributes variant 3.type variant 3

anyOf group 2 variant 1: How issue calculates the invoice's due date in the invoice timezone..

- Value shape: string. How issue calculates the invoice's due date in the invoice timezone. Values: `"days_after_month_end"`.

### InvoicePaymentTermCalculationPreviousAttributes variant 4.type

### InvoicePaymentTermCalculationPreviousAttributes variant 4.type variant 1

anyOf group 1 variant 1: How issue calculates the invoice's due date in the invoice timezone..

- Value shape: string. How issue calculates the invoice's due date in the invoice timezone. Values: `"on_receipt"`, `"net_days"`, `"day_of_month"`, `"day_of_next_month"`, `"days_after_month_end"`.

### InvoicePaymentTermCalculationPreviousAttributes variant 4.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. How issue calculates the invoice's due date in the invoice timezone. 

### InvoicePaymentTermCalculationPreviousAttributes variant 4.type variant 3

anyOf group 2 variant 1: How issue calculates the invoice's due date in the invoice timezone..

- Value shape: string. How issue calculates the invoice's due date in the invoice timezone. Values: `"day_of_month"`.

### InvoicePaymentTermCalculationPreviousAttributes variant 5.type

### InvoicePaymentTermCalculationPreviousAttributes variant 5.type variant 1

anyOf group 1 variant 1: How issue calculates the invoice's due date in the invoice timezone..

- Value shape: string. How issue calculates the invoice's due date in the invoice timezone. Values: `"on_receipt"`, `"net_days"`, `"day_of_month"`, `"day_of_next_month"`, `"days_after_month_end"`.

### InvoicePaymentTermCalculationPreviousAttributes variant 5.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. How issue calculates the invoice's due date in the invoice timezone. 

### InvoicePaymentTermCalculationPreviousAttributes variant 5.type variant 3

anyOf group 2 variant 1: How issue calculates the invoice's due date in the invoice timezone..

- Value shape: string. How issue calculates the invoice's due date in the invoice timezone. Values: `"day_of_next_month"`.

