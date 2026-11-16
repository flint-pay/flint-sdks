[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantBillingInvoiceIssuedEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `applied_credit_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Credit applied to the invoice: the sum of its credit line items. Never more than subtotal_money. |
| `created_at` | Optional | string or null | When Flint created the invoice. `created_at`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributescreated_at). |
| `due_at` | Optional | string or null | When payment of the invoice is due. `due_at`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesdue_at). |
| `invoice_number` | Optional | string or null | Unique invoice number; don't parse it. New numbers use FLINT-{account code}-{0001}, sequential per billing account; existing numbers are retained. `invoice_number`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesinvoice_number). |
| `issued_at` | Optional | string or null | When Flint issued the invoice. `issued_at`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesissued_at). |
| `line_items` | Optional | Array of [MerchantBillingInvoiceLineItemPreviousAttributes](../models/MerchantBillingInvoiceLineItemPreviousAttributes.md#merchantbillinginvoicelineitempreviousattributes) or null | Invoice-owned line items. Subscription totals sum to subtotal_money; credit totals sum to applied_credit_money. `line_items`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items). |
| `merchant_billing_invoice_id` | Optional | string or null | Stable identifier of the invoice. `merchant_billing_invoice_id`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesmerchant_billing_invoice_id). |
| `outstanding_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Part of total_money Flint still has to collect. |
| `paid_at` | Optional | string or null | When the invoice was paid. Removed if a reversed collection reopens it. `paid_at`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributespaid_at). |
| `period_end_at` | Optional | string or null | Exclusive invoice billing period end as an RFC 3339 UTC instant. `period_end_at`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesperiod_end_at). |
| `period_start_at` | Optional | string or null | Inclusive invoice billing period start as an RFC 3339 UTC instant. `period_start_at`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesperiod_start_at). |
| `status` | Optional | string or null | Collection state of the invoice: open, paid, or written_off. Flint issues an invoice as open and marks it paid once collected; a reversed collection returns it to open, and written_off means Flint stopped collecting it. Values: `"open"`, `"paid"`, `"written_off"`. `status`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesstatus). |
| `subtotal_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Sum of the subscription line items, before credit. |
| `total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | What the invoice charges: subtotal_money minus applied_credit_money. |
| `updated_at` | Optional | string or null | When the invoice last changed. `updated_at`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesupdated_at). |

### MerchantBillingInvoiceIssuedEventDataPreviousAttributes.created_at

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.created_at](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributescreated_at).

### MerchantBillingInvoiceIssuedEventDataPreviousAttributes.due_at

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.due_at](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesdue_at).

### MerchantBillingInvoiceIssuedEventDataPreviousAttributes.invoice_number

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.invoice_number](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesinvoice_number).

### MerchantBillingInvoiceIssuedEventDataPreviousAttributes.issued_at

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.issued_at](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesissued_at).

### MerchantBillingInvoiceIssuedEventDataPreviousAttributes.line_items

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items).

### MerchantBillingInvoiceIssuedEventDataPreviousAttributes.merchant_billing_invoice_id

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.merchant_billing_invoice_id](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesmerchant_billing_invoice_id).

### MerchantBillingInvoiceIssuedEventDataPreviousAttributes.paid_at

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.paid_at](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributespaid_at).

### MerchantBillingInvoiceIssuedEventDataPreviousAttributes.period_end_at

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.period_end_at](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesperiod_end_at).

### MerchantBillingInvoiceIssuedEventDataPreviousAttributes.period_start_at

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.period_start_at](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesperiod_start_at).

### MerchantBillingInvoiceIssuedEventDataPreviousAttributes.status

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.status](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesstatus).

### MerchantBillingInvoiceIssuedEventDataPreviousAttributes.updated_at

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.updated_at](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesupdated_at).

