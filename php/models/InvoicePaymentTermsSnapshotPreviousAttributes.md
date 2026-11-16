[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentTermsSnapshotPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Optional | object and Alternative shapes (see declared variants) or null | Rule used to calculate the invoice's due date when it is issued. `calculation`: [declared alternatives](../models/InvoicePaymentTermsSnapshotPreviousAttributes.md#invoicepaymenttermssnapshotpreviousattributescalculation). |
| `invoice_payment_term_id` | Optional | string or null | ID of the payment term captured on this invoice. `invoice_payment_term_id`: [declared alternatives](../models/InvoicePaymentTermsSnapshotPreviousAttributes.md#invoicepaymenttermssnapshotpreviousattributesinvoice_payment_term_id). |
| `late_fee_policy` | Optional | object and Alternative shapes (see declared variants) or null | One-time late fee policy captured with this term. Absent when no late fee policy applies. `late_fee_policy`: [declared alternatives](../models/InvoicePaymentTermsSnapshotPreviousAttributes.md#invoicepaymenttermssnapshotpreviousattributeslate_fee_policy). |
| `name` | Optional | string or null | Name of the payment term shown on invoices. `name`: [declared alternatives](../models/InvoicePaymentTermsSnapshotPreviousAttributes.md#invoicepaymenttermssnapshotpreviousattributesname). |
| `version` | Optional | integer or null | Version of the invoice payment term captured in this snapshot. `version`: [declared alternatives](../models/InvoicePaymentTermsSnapshotPreviousAttributes.md#invoicepaymenttermssnapshotpreviousattributesversion). |

### InvoicePaymentTermsSnapshotPreviousAttributes.calculation

Rule used to calculate the invoice's due date when it is issued.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `day` | Conditional | integer or null | Day of the month. Later days clamp to the last day of the month. `day`: [declared alternatives](../models/InvoicePaymentTermsSnapshotPreviousAttributes.md#invoicepaymenttermssnapshotpreviousattributescalculation-variant-1day). |
| `days` | Conditional | integer or null | Calendar days after issue for net_days, or after the issue month's last day for days_after_month_end. Required only for those types. `days`: [declared alternatives](../models/InvoicePaymentTermsSnapshotPreviousAttributes.md#invoicepaymenttermssnapshotpreviousattributescalculation-variant-1days). |
| `type` | Conditional | (string or null) | How issue calculates the invoice's due date in the invoice timezone. Values: `"on_receipt"`, `"net_days"`, `"day_of_month"`, `"day_of_next_month"`, `"days_after_month_end"`. `type`: [declared alternatives](../models/InvoicePaymentTermsSnapshotPreviousAttributes.md#invoicepaymenttermssnapshotpreviousattributescalculation-variant-1type), [declared alternatives](../models/InvoicePaymentTermsSnapshotPreviousAttributes.md#invoicepaymenttermssnapshotpreviousattributescalculation-variant-2type), [declared alternatives](../models/InvoicePaymentTermsSnapshotPreviousAttributes.md#invoicepaymenttermssnapshotpreviousattributescalculation-variant-3type), [declared alternatives](../models/InvoicePaymentTermsSnapshotPreviousAttributes.md#invoicepaymenttermssnapshotpreviousattributescalculation-variant-4type), [declared alternatives](../models/InvoicePaymentTermsSnapshotPreviousAttributes.md#invoicepaymenttermssnapshotpreviousattributescalculation-variant-5type). |

### InvoicePaymentTermsSnapshotPreviousAttributes.calculation variant 1: `type` = `"on_receipt"`

anyOf InvoicePaymentTermCalculationPreviousAttributes; anyOf InvoicePaymentTermCalculationOnReceiptPreviousAttributes.

- Optional: `day`, `days`, `type`.
- Constraints for `type`: Values: `"on_receipt"`.

### InvoicePaymentTermsSnapshotPreviousAttributes.calculation variant 2: `type` = `"net_days"`

anyOf InvoicePaymentTermCalculationPreviousAttributes; anyOf InvoicePaymentTermCalculationNetDaysPreviousAttributes.

- Optional: `day`, `days`, `type`.
- Constraints for `type`: Values: `"net_days"`.

### InvoicePaymentTermsSnapshotPreviousAttributes.calculation variant 3: `type` = `"days_after_month_end"`

anyOf InvoicePaymentTermCalculationPreviousAttributes; anyOf InvoicePaymentTermCalculationDaysAfterMonthEndPreviousAttributes.

- Optional: `day`, `days`, `type`.
- Constraints for `type`: Values: `"days_after_month_end"`.

### InvoicePaymentTermsSnapshotPreviousAttributes.calculation variant 4: `type` = `"day_of_month"`

anyOf InvoicePaymentTermCalculationPreviousAttributes; anyOf InvoicePaymentTermCalculationDayOfMonthPreviousAttributes.

- Optional: `day`, `days`, `type`.
- Constraints for `type`: Values: `"day_of_month"`.

### InvoicePaymentTermsSnapshotPreviousAttributes.calculation variant 5: `type` = `"day_of_next_month"`

anyOf InvoicePaymentTermCalculationPreviousAttributes; anyOf InvoicePaymentTermCalculationDayOfNextMonthPreviousAttributes.

- Optional: `day`, `days`, `type`.
- Constraints for `type`: Values: `"day_of_next_month"`.

### InvoicePaymentTermsSnapshotPreviousAttributes.calculation variant 6

anyOf variant 2.

- Undeclared: `day`, `days`, `type`.
- Value shape: null. Rule used to calculate the invoice's due date when it is issued. 

### InvoicePaymentTermsSnapshotPreviousAttributes.calculation variant 1.day

### InvoicePaymentTermsSnapshotPreviousAttributes.calculation variant 1.day variant 1

anyOf variant 1: Day of the month. Later days clamp to the last day of the month..

- Value shape: integer. Day of the month. Later days clamp to the last day of the month. Day of the month. Later days clamp to the last day of the month. Format: `int32`. minimum: `1`. maximum: `31`. 

### InvoicePaymentTermsSnapshotPreviousAttributes.calculation variant 1.day variant 2

anyOf variant 2.

- Value shape: null. Day of the month. Later days clamp to the last day of the month. 

### InvoicePaymentTermsSnapshotPreviousAttributes.calculation variant 1.days

### InvoicePaymentTermsSnapshotPreviousAttributes.calculation variant 1.days variant 1

anyOf variant 1: Calendar days after issue for net_days, or after the issue month's last day for days_after_month_end. Required only for those types..

- Value shape: integer. Calendar days after issue for net_days, or after the issue month's last day for days_after_month_end. Required only for those types. Calendar days after issue for net_days, or after the issue month's last day for days_after_month_end. Required only for those types. Format: `int32`. minimum: `0`. maximum: `365`. 

### InvoicePaymentTermsSnapshotPreviousAttributes.calculation variant 1.days variant 2

anyOf variant 2.

- Value shape: null. Calendar days after issue for net_days, or after the issue month's last day for days_after_month_end. Required only for those types. 

### InvoicePaymentTermsSnapshotPreviousAttributes.calculation variant 1.type

### InvoicePaymentTermsSnapshotPreviousAttributes.calculation variant 1.type variant 1

anyOf group 1 variant 1: How issue calculates the invoice's due date in the invoice timezone..

- Value shape: string. How issue calculates the invoice's due date in the invoice timezone. Values: `"on_receipt"`, `"net_days"`, `"day_of_month"`, `"day_of_next_month"`, `"days_after_month_end"`.

### InvoicePaymentTermsSnapshotPreviousAttributes.calculation variant 1.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. How issue calculates the invoice's due date in the invoice timezone. 

### InvoicePaymentTermsSnapshotPreviousAttributes.calculation variant 1.type variant 3

anyOf group 2 variant 1: How issue calculates the invoice's due date in the invoice timezone..

- Value shape: string. How issue calculates the invoice's due date in the invoice timezone. Values: `"on_receipt"`.

### InvoicePaymentTermsSnapshotPreviousAttributes.calculation variant 2.day

Declared alternatives: [InvoicePaymentTermsSnapshotPreviousAttributes.calculation variant 1.day](../models/InvoicePaymentTermsSnapshotPreviousAttributes.md#invoicepaymenttermssnapshotpreviousattributescalculation-variant-1day).

### InvoicePaymentTermsSnapshotPreviousAttributes.calculation variant 2.days

Declared alternatives: [InvoicePaymentTermsSnapshotPreviousAttributes.calculation variant 1.days](../models/InvoicePaymentTermsSnapshotPreviousAttributes.md#invoicepaymenttermssnapshotpreviousattributescalculation-variant-1days).

### InvoicePaymentTermsSnapshotPreviousAttributes.calculation variant 2.type

### InvoicePaymentTermsSnapshotPreviousAttributes.calculation variant 2.type variant 1

anyOf group 1 variant 1: How issue calculates the invoice's due date in the invoice timezone..

- Value shape: string. How issue calculates the invoice's due date in the invoice timezone. Values: `"on_receipt"`, `"net_days"`, `"day_of_month"`, `"day_of_next_month"`, `"days_after_month_end"`.

### InvoicePaymentTermsSnapshotPreviousAttributes.calculation variant 2.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. How issue calculates the invoice's due date in the invoice timezone. 

### InvoicePaymentTermsSnapshotPreviousAttributes.calculation variant 2.type variant 3

anyOf group 2 variant 1: How issue calculates the invoice's due date in the invoice timezone..

- Value shape: string. How issue calculates the invoice's due date in the invoice timezone. Values: `"net_days"`.

### InvoicePaymentTermsSnapshotPreviousAttributes.calculation variant 3.day

Declared alternatives: [InvoicePaymentTermsSnapshotPreviousAttributes.calculation variant 1.day](../models/InvoicePaymentTermsSnapshotPreviousAttributes.md#invoicepaymenttermssnapshotpreviousattributescalculation-variant-1day).

### InvoicePaymentTermsSnapshotPreviousAttributes.calculation variant 3.days

Declared alternatives: [InvoicePaymentTermsSnapshotPreviousAttributes.calculation variant 1.days](../models/InvoicePaymentTermsSnapshotPreviousAttributes.md#invoicepaymenttermssnapshotpreviousattributescalculation-variant-1days).

### InvoicePaymentTermsSnapshotPreviousAttributes.calculation variant 3.type

### InvoicePaymentTermsSnapshotPreviousAttributes.calculation variant 3.type variant 1

anyOf group 1 variant 1: How issue calculates the invoice's due date in the invoice timezone..

- Value shape: string. How issue calculates the invoice's due date in the invoice timezone. Values: `"on_receipt"`, `"net_days"`, `"day_of_month"`, `"day_of_next_month"`, `"days_after_month_end"`.

### InvoicePaymentTermsSnapshotPreviousAttributes.calculation variant 3.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. How issue calculates the invoice's due date in the invoice timezone. 

### InvoicePaymentTermsSnapshotPreviousAttributes.calculation variant 3.type variant 3

anyOf group 2 variant 1: How issue calculates the invoice's due date in the invoice timezone..

- Value shape: string. How issue calculates the invoice's due date in the invoice timezone. Values: `"days_after_month_end"`.

### InvoicePaymentTermsSnapshotPreviousAttributes.calculation variant 4.day

Declared alternatives: [InvoicePaymentTermsSnapshotPreviousAttributes.calculation variant 1.day](../models/InvoicePaymentTermsSnapshotPreviousAttributes.md#invoicepaymenttermssnapshotpreviousattributescalculation-variant-1day).

### InvoicePaymentTermsSnapshotPreviousAttributes.calculation variant 4.days

Declared alternatives: [InvoicePaymentTermsSnapshotPreviousAttributes.calculation variant 1.days](../models/InvoicePaymentTermsSnapshotPreviousAttributes.md#invoicepaymenttermssnapshotpreviousattributescalculation-variant-1days).

### InvoicePaymentTermsSnapshotPreviousAttributes.calculation variant 4.type

### InvoicePaymentTermsSnapshotPreviousAttributes.calculation variant 4.type variant 1

anyOf group 1 variant 1: How issue calculates the invoice's due date in the invoice timezone..

- Value shape: string. How issue calculates the invoice's due date in the invoice timezone. Values: `"on_receipt"`, `"net_days"`, `"day_of_month"`, `"day_of_next_month"`, `"days_after_month_end"`.

### InvoicePaymentTermsSnapshotPreviousAttributes.calculation variant 4.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. How issue calculates the invoice's due date in the invoice timezone. 

### InvoicePaymentTermsSnapshotPreviousAttributes.calculation variant 4.type variant 3

anyOf group 2 variant 1: How issue calculates the invoice's due date in the invoice timezone..

- Value shape: string. How issue calculates the invoice's due date in the invoice timezone. Values: `"day_of_month"`.

### InvoicePaymentTermsSnapshotPreviousAttributes.calculation variant 5.day

Declared alternatives: [InvoicePaymentTermsSnapshotPreviousAttributes.calculation variant 1.day](../models/InvoicePaymentTermsSnapshotPreviousAttributes.md#invoicepaymenttermssnapshotpreviousattributescalculation-variant-1day).

### InvoicePaymentTermsSnapshotPreviousAttributes.calculation variant 5.days

Declared alternatives: [InvoicePaymentTermsSnapshotPreviousAttributes.calculation variant 1.days](../models/InvoicePaymentTermsSnapshotPreviousAttributes.md#invoicepaymenttermssnapshotpreviousattributescalculation-variant-1days).

### InvoicePaymentTermsSnapshotPreviousAttributes.calculation variant 5.type

### InvoicePaymentTermsSnapshotPreviousAttributes.calculation variant 5.type variant 1

anyOf group 1 variant 1: How issue calculates the invoice's due date in the invoice timezone..

- Value shape: string. How issue calculates the invoice's due date in the invoice timezone. Values: `"on_receipt"`, `"net_days"`, `"day_of_month"`, `"day_of_next_month"`, `"days_after_month_end"`.

### InvoicePaymentTermsSnapshotPreviousAttributes.calculation variant 5.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. How issue calculates the invoice's due date in the invoice timezone. 

### InvoicePaymentTermsSnapshotPreviousAttributes.calculation variant 5.type variant 3

anyOf group 2 variant 1: How issue calculates the invoice's due date in the invoice timezone..

- Value shape: string. How issue calculates the invoice's due date in the invoice timezone. Values: `"day_of_next_month"`.

### InvoicePaymentTermsSnapshotPreviousAttributes.invoice_payment_term_id

### InvoicePaymentTermsSnapshotPreviousAttributes.invoice_payment_term_id variant 1

anyOf variant 1: ID of the payment term captured on this invoice..

- Value shape: string. ID of the payment term captured on this invoice. 

### InvoicePaymentTermsSnapshotPreviousAttributes.invoice_payment_term_id variant 2

anyOf variant 2.

- Value shape: null. ID of the payment term captured on this invoice. 

### InvoicePaymentTermsSnapshotPreviousAttributes.late_fee_policy

One-time late fee policy captured with this term. Absent when no late fee policy applies.

Field definitions: [shared fields](InvoiceLateFeePreviousAttributes.md#invoicelatefeepreviousattributeslate_fee_policy).

### InvoicePaymentTermsSnapshotPreviousAttributes.late_fee_policy variant 1: `type` = `"fixed"`

anyOf InvoiceLateFeePolicyPreviousAttributes; anyOf InvoiceLateFeePolicyFixedPreviousAttributes.

- Optional: `amount_money`, `application_mode`, `grace_period_days`, `percent`, `type`.
- Constraints for `type`: Values: `"fixed"`.

### InvoicePaymentTermsSnapshotPreviousAttributes.late_fee_policy variant 2: `type` = `"percentage"`

anyOf InvoiceLateFeePolicyPreviousAttributes; anyOf InvoiceLateFeePolicyPercentagePreviousAttributes.

- Optional: `amount_money`, `application_mode`, `grace_period_days`, `percent`, `type`.
- Constraints for `type`: Values: `"percentage"`.

### InvoicePaymentTermsSnapshotPreviousAttributes.late_fee_policy variant 3

anyOf variant 2.

- Undeclared: `amount_money`, `application_mode`, `grace_period_days`, `percent`, `type`.
- Value shape: null. One-time late fee policy captured with this term. Absent when no late fee policy applies. 

### InvoicePaymentTermsSnapshotPreviousAttributes.late_fee_policy variant 1.application_mode

Declared alternatives: [InvoiceLateFeePreviousAttributes.late_fee_policy variant 1.application_mode](../models/InvoiceLateFeePreviousAttributes.md#invoicelatefeepreviousattributeslate_fee_policy-variant-1application_mode).

### InvoicePaymentTermsSnapshotPreviousAttributes.late_fee_policy variant 1.grace_period_days

Declared alternatives: [InvoiceLateFeePreviousAttributes.late_fee_policy variant 1.grace_period_days](../models/InvoiceLateFeePreviousAttributes.md#invoicelatefeepreviousattributeslate_fee_policy-variant-1grace_period_days).

### InvoicePaymentTermsSnapshotPreviousAttributes.late_fee_policy variant 1.percent

Declared alternatives: [InvoiceLateFeePreviousAttributes.late_fee_policy variant 1.percent](../models/InvoiceLateFeePreviousAttributes.md#invoicelatefeepreviousattributeslate_fee_policy-variant-1percent).

### InvoicePaymentTermsSnapshotPreviousAttributes.late_fee_policy variant 1.type

Declared alternatives: [InvoiceLateFeePreviousAttributes.late_fee_policy variant 1.type](../models/InvoiceLateFeePreviousAttributes.md#invoicelatefeepreviousattributeslate_fee_policy-variant-1type).

### InvoicePaymentTermsSnapshotPreviousAttributes.late_fee_policy variant 2.application_mode

Declared alternatives: [InvoiceLateFeePreviousAttributes.late_fee_policy variant 1.application_mode](../models/InvoiceLateFeePreviousAttributes.md#invoicelatefeepreviousattributeslate_fee_policy-variant-1application_mode).

### InvoicePaymentTermsSnapshotPreviousAttributes.late_fee_policy variant 2.grace_period_days

Declared alternatives: [InvoiceLateFeePreviousAttributes.late_fee_policy variant 1.grace_period_days](../models/InvoiceLateFeePreviousAttributes.md#invoicelatefeepreviousattributeslate_fee_policy-variant-1grace_period_days).

### InvoicePaymentTermsSnapshotPreviousAttributes.late_fee_policy variant 2.percent

Declared alternatives: [InvoiceLateFeePreviousAttributes.late_fee_policy variant 1.percent](../models/InvoiceLateFeePreviousAttributes.md#invoicelatefeepreviousattributeslate_fee_policy-variant-1percent).

### InvoicePaymentTermsSnapshotPreviousAttributes.late_fee_policy variant 2.type

Declared alternatives: [InvoiceLateFeePreviousAttributes.late_fee_policy variant 2.type](../models/InvoiceLateFeePreviousAttributes.md#invoicelatefeepreviousattributeslate_fee_policy-variant-2type).

### InvoicePaymentTermsSnapshotPreviousAttributes.name

### InvoicePaymentTermsSnapshotPreviousAttributes.name variant 1

anyOf variant 1: Name of the payment term shown on invoices..

- Value shape: string. Name of the payment term shown on invoices. 

### InvoicePaymentTermsSnapshotPreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. Name of the payment term shown on invoices. 

### InvoicePaymentTermsSnapshotPreviousAttributes.version

### InvoicePaymentTermsSnapshotPreviousAttributes.version variant 1

anyOf variant 1: Version of the invoice payment term captured in this snapshot..

- Value shape: integer. Version of the invoice payment term captured in this snapshot. Version of the invoice payment term captured in this snapshot. Format: `int32`. 

### InvoicePaymentTermsSnapshotPreviousAttributes.version variant 2

anyOf variant 2.

- Value shape: null. Version of the invoice payment term captured in this snapshot. 

