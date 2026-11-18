[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ExpandedInvoiceSummaryPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `collection_block_status` | Optional | string or null | Whether collection is blocked. While it is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Values: `"none"`, `"inventory_blocked"`, `"resolved"`. `collection_block_status`: [declared alternatives](../models/ExpandedInvoiceSummaryPreviousAttributesInput.md#expandedinvoicesummarypreviousattributesinputcollection_block_status). |
| `created_at` | Optional | string or null | When the invoice was created. `created_at`: [declared alternatives](../models/ExpandedInvoiceSummaryPreviousAttributesInput.md#expandedinvoicesummarypreviousattributesinputcreated_at). |
| `customer_id` | Optional | string or null | Customer billed by the invoice. Absent when the invoice has no customer. `customer_id`: [declared alternatives](../models/ExpandedInvoiceSummaryPreviousAttributesInput.md#expandedinvoicesummarypreviousattributesinputcustomer_id). |
| `due_date` | Optional | string or null | Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only after this date ends. Automatic collection runs at the later of issue and the start of this date. With payment terms, issue computes this date from issued_at. Absent when there is no due date. `due_date`: [declared alternatives](../models/ExpandedInvoiceSummaryPreviousAttributesInput.md#expandedinvoicesummarypreviousattributesinputdue_date). |
| `invoice_id` | Optional | string or null | Flint invoice ID. `invoice_id`: [declared alternatives](../models/ExpandedInvoiceSummaryPreviousAttributesInput.md#expandedinvoicesummarypreviousattributesinputinvoice_id). |
| `invoice_number` | Optional | string or null | Sequential document number assigned when the invoice is issued. Absent on a draft. `invoice_number`: [declared alternatives](../models/ExpandedInvoiceSummaryPreviousAttributesInput.md#expandedinvoicesummarypreviousattributesinputinvoice_number). |
| `is_overdue` | Optional | boolean or null | Whether the invoice is open or partially_paid and past due with a balance remaining, as is_overdue on the full Invoice reports it. `is_overdue`: [declared alternatives](../models/ExpandedInvoiceSummaryPreviousAttributesInput.md#expandedinvoicesummarypreviousattributesinputis_overdue). |
| `order_id` | Optional | string or null | The order the invoice bills. `order_id`: [declared alternatives](../models/ExpandedInvoiceSummaryPreviousAttributesInput.md#expandedinvoicesummarypreviousattributesinputorder_id). |
| `pricing_amounts` | Optional | [PricingAmountsPreviousAttributesInput](../models/PricingAmountsPreviousAttributesInput.md#pricingamountspreviousattributesinput) or null | The invoice pricing totals, frozen at issue; a draft previews the backing order. |
| `refund_status` | Optional | string or null | How much of the collected money has been refunded. It doesn't change status. Values: `"none"`, `"partially_refunded"`, `"refunded"`. `refund_status`: [declared alternatives](../models/ExpandedInvoiceSummaryPreviousAttributesInput.md#expandedinvoicesummarypreviousattributesinputrefund_status). |
| `settlement_amounts` | Optional | [InvoiceSettlementAmountsPreviousAttributesInput](../models/InvoiceSettlementAmountsPreviousAttributesInput.md#invoicesettlementamountspreviousattributesinput) or null | The same settlement amounts as the full Invoice. |
| `status` | Optional | string or null | Current invoice status. paid and credited close the current balance and can reopen to open or partially_paid after a payment or credit allocation reversal; invoice.reopened reports that change. An uncollectible invoice accepts manual recovery payments and becomes paid when fully recovered; reversals restore the write-off. voided is final. Refunds change refund_status without reopening the balance. An ACH bank return reverses paid_money and reopens the balance. A lost card chargeback leaves paid_money, the balance, and status unchanged; collecting it again requires a new invoice. Values: `"draft"`, `"open"`, `"partially_paid"`, `"paid"`, `"voided"`, `"uncollectible"`, `"credited"`. `status`: [declared alternatives](../models/ExpandedInvoiceSummaryPreviousAttributesInput.md#expandedinvoicesummarypreviousattributesinputstatus). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. Items values: `"collect"`, `"issue"`, `"mark_uncollectible"`, `"void"`. `supported_actions`: [declared alternatives](../models/ExpandedInvoiceSummaryPreviousAttributesInput.md#expandedinvoicesummarypreviousattributesinputsupported_actions). |
| `updated_at` | Optional | string or null | When the invoice last changed. `updated_at`: [declared alternatives](../models/ExpandedInvoiceSummaryPreviousAttributesInput.md#expandedinvoicesummarypreviousattributesinputupdated_at). |

### ExpandedInvoiceSummaryPreviousAttributesInput.collection_block_status

### ExpandedInvoiceSummaryPreviousAttributesInput.collection_block_status variant 1

anyOf variant 1: Whether collection is blocked. While it is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait..

- Value shape: string. Whether collection is blocked. While it is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Values: `"none"`, `"inventory_blocked"`, `"resolved"`.

### ExpandedInvoiceSummaryPreviousAttributesInput.collection_block_status variant 2

anyOf variant 2.

- Value shape: null. Whether collection is blocked. While it is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. 

### ExpandedInvoiceSummaryPreviousAttributesInput.created_at

### ExpandedInvoiceSummaryPreviousAttributesInput.created_at variant 1

anyOf variant 1: When the invoice was created..

- Value shape: string. When the invoice was created. When the invoice was created. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ExpandedInvoiceSummaryPreviousAttributesInput.created_at variant 2

anyOf variant 2.

- Value shape: null. When the invoice was created. 

### ExpandedInvoiceSummaryPreviousAttributesInput.customer_id

### ExpandedInvoiceSummaryPreviousAttributesInput.customer_id variant 1

anyOf variant 1: Customer billed by the invoice. Absent when the invoice has no customer..

- Value shape: string. Customer billed by the invoice. Absent when the invoice has no customer. Customer billed by the invoice. Absent when the invoice has no customer. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. 

### ExpandedInvoiceSummaryPreviousAttributesInput.customer_id variant 2

anyOf variant 2.

- Value shape: null. Customer billed by the invoice. Absent when the invoice has no customer. 

### ExpandedInvoiceSummaryPreviousAttributesInput.due_date

### ExpandedInvoiceSummaryPreviousAttributesInput.due_date variant 1

anyOf variant 1: Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only after this date ends. Automatic collection runs at the later of issue and the start of this date. With payment terms, issue computes this date from issued_at. Absent when there is no due date..

- Value shape: string. Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only after this date ends. Automatic collection runs at the later of issue and the start of this date. With payment terms, issue computes this date from issued_at. Absent when there is no due date. Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only after this date ends. Automatic collection runs at the later of issue and the start of this date. With payment terms, issue computes this date from issued_at. Absent when there is no due date. Format: `date`. Example: `"2026-08-02"`. 

### ExpandedInvoiceSummaryPreviousAttributesInput.due_date variant 2

anyOf variant 2.

- Value shape: null. Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only after this date ends. Automatic collection runs at the later of issue and the start of this date. With payment terms, issue computes this date from issued_at. Absent when there is no due date. 

### ExpandedInvoiceSummaryPreviousAttributesInput.invoice_id

### ExpandedInvoiceSummaryPreviousAttributesInput.invoice_id variant 1

anyOf variant 1: Flint invoice ID..

- Value shape: string. Flint invoice ID. Flint invoice ID. Example: `"inv_01KEZF7C00A5GEBMWHEAJFSAR4"`. 

### ExpandedInvoiceSummaryPreviousAttributesInput.invoice_id variant 2

anyOf variant 2.

- Value shape: null. Flint invoice ID. 

### ExpandedInvoiceSummaryPreviousAttributesInput.invoice_number

### ExpandedInvoiceSummaryPreviousAttributesInput.invoice_number variant 1

anyOf variant 1: Sequential document number assigned when the invoice is issued. Absent on a draft..

- Value shape: string. Sequential document number assigned when the invoice is issued. Absent on a draft. 

### ExpandedInvoiceSummaryPreviousAttributesInput.invoice_number variant 2

anyOf variant 2.

- Value shape: null. Sequential document number assigned when the invoice is issued. Absent on a draft. 

### ExpandedInvoiceSummaryPreviousAttributesInput.is_overdue

### ExpandedInvoiceSummaryPreviousAttributesInput.is_overdue variant 1

anyOf variant 1: Whether the invoice is open or partially_paid and past due with a balance remaining, as is_overdue on the full Invoice reports it..

- Value shape: boolean. Whether the invoice is open or partially_paid and past due with a balance remaining, as is_overdue on the full Invoice reports it. 

### ExpandedInvoiceSummaryPreviousAttributesInput.is_overdue variant 2

anyOf variant 2.

- Value shape: null. Whether the invoice is open or partially_paid and past due with a balance remaining, as is_overdue on the full Invoice reports it. 

### ExpandedInvoiceSummaryPreviousAttributesInput.order_id

### ExpandedInvoiceSummaryPreviousAttributesInput.order_id variant 1

anyOf variant 1: The order the invoice bills..

- Value shape: string. The order the invoice bills. The order the invoice bills. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### ExpandedInvoiceSummaryPreviousAttributesInput.order_id variant 2

anyOf variant 2.

- Value shape: null. The order the invoice bills. 

### ExpandedInvoiceSummaryPreviousAttributesInput.refund_status

### ExpandedInvoiceSummaryPreviousAttributesInput.refund_status variant 1

anyOf variant 1: How much of the collected money has been refunded. It doesn't change status..

- Value shape: string. How much of the collected money has been refunded. It doesn't change status. Values: `"none"`, `"partially_refunded"`, `"refunded"`.

### ExpandedInvoiceSummaryPreviousAttributesInput.refund_status variant 2

anyOf variant 2.

- Value shape: null. How much of the collected money has been refunded. It doesn't change status. 

### ExpandedInvoiceSummaryPreviousAttributesInput.status

### ExpandedInvoiceSummaryPreviousAttributesInput.status variant 1

anyOf variant 1: Current invoice status. paid and credited close the current balance and can reopen to open or partially_paid after a payment or credit allocation reversal; invoice.reopened reports that change. An uncollectible invoice accepts manual recovery payments and becomes paid when fully recovered; reversals restore the write-off. voided is final. Refunds change refund_status without reopening the balance. An ACH bank return reverses paid_money and reopens the balance. A lost card chargeback leaves paid_money, the balance, and status unchanged; collecting it again requires a new invoice..

- Value shape: string. Current invoice status. paid and credited close the current balance and can reopen to open or partially_paid after a payment or credit allocation reversal; invoice.reopened reports that change. An uncollectible invoice accepts manual recovery payments and becomes paid when fully recovered; reversals restore the write-off. voided is final. Refunds change refund_status without reopening the balance. An ACH bank return reverses paid_money and reopens the balance. A lost card chargeback leaves paid_money, the balance, and status unchanged; collecting it again requires a new invoice. Values: `"draft"`, `"open"`, `"partially_paid"`, `"paid"`, `"voided"`, `"uncollectible"`, `"credited"`.

### ExpandedInvoiceSummaryPreviousAttributesInput.status variant 2

anyOf variant 2.

- Value shape: null. Current invoice status. paid and credited close the current balance and can reopen to open or partially_paid after a payment or credit allocation reversal; invoice.reopened reports that change. An uncollectible invoice accepts manual recovery payments and becomes paid when fully recovered; reversals restore the write-off. voided is final. Refunds change refund_status without reopening the balance. An ACH bank return reverses paid_money and reopens the balance. A lost card chargeback leaves paid_money, the balance, and status unchanged; collecting it again requires a new invoice. 

### ExpandedInvoiceSummaryPreviousAttributesInput.supported_actions

### ExpandedInvoiceSummaryPreviousAttributesInput.supported_actions variant 1

anyOf variant 1: Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available..

- Value shape: Array of string. Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. Items values: `"collect"`, `"issue"`, `"mark_uncollectible"`, `"void"`.

### ExpandedInvoiceSummaryPreviousAttributesInput.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. 

### ExpandedInvoiceSummaryPreviousAttributesInput.updated_at

### ExpandedInvoiceSummaryPreviousAttributesInput.updated_at variant 1

anyOf variant 1: When the invoice last changed..

- Value shape: string. When the invoice last changed. When the invoice last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ExpandedInvoiceSummaryPreviousAttributesInput.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the invoice last changed. 

