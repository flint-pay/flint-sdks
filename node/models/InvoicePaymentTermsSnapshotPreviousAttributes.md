[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentTermsSnapshotPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Optional | [InvoicePaymentTermCalculationPreviousAttributes](../models/InvoicePaymentTermCalculationPreviousAttributes.md#invoicepaymenttermcalculationpreviousattributes) or null | Rule used to calculate the invoice's due date when it is issued. |
| `invoice_payment_term_id` | Optional | string or null | ID of the payment term captured on this invoice. `invoice_payment_term_id`: [declared alternatives](../models/InvoicePaymentTermsSnapshotPreviousAttributes.md#invoicepaymenttermssnapshotpreviousattributesinvoice_payment_term_id). |
| `late_fee_policy` | Optional | [InvoiceLateFeePolicyPreviousAttributes](../models/InvoiceLateFeePolicyPreviousAttributes.md#invoicelatefeepolicypreviousattributes) or null | One-time late fee policy captured with this term. Absent when no late fee policy applies. |
| `name` | Optional | string or null | Name of the payment term shown on invoices. `name`: [declared alternatives](../models/InvoicePaymentTermsSnapshotPreviousAttributes.md#invoicepaymenttermssnapshotpreviousattributesname). |
| `version` | Optional | integer or null | Version of the invoice payment term captured in this snapshot. `version`: [declared alternatives](../models/InvoicePaymentTermsSnapshotPreviousAttributes.md#invoicepaymenttermssnapshotpreviousattributesversion). |

### InvoicePaymentTermsSnapshotPreviousAttributes.invoice_payment_term_id

### InvoicePaymentTermsSnapshotPreviousAttributes.invoice_payment_term_id variant 1

anyOf variant 1: ID of the payment term captured on this invoice..

- Value shape: string. ID of the payment term captured on this invoice. ID of the payment term captured on this invoice. Example: `"ipt_01KEZF7C0064N1V301BBMQ37R4"`. 

### InvoicePaymentTermsSnapshotPreviousAttributes.invoice_payment_term_id variant 2

anyOf variant 2.

- Value shape: null. ID of the payment term captured on this invoice. 

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

