[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ExpandedInvoiceSummaryPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `collection_block_status` | Optional | string or null | Whether collection is blocked. While it is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Values: `"none"`, `"inventory_blocked"`, `"resolved"`. `collection_block_status`: [declared alternatives](../models/ExpandedInvoiceSummaryPreviousAttributes.md#expandedinvoicesummarypreviousattributescollection_block_status). |
| `created_at` | Optional | string or null | When the invoice was created. `created_at`: [declared alternatives](../models/ExpandedInvoiceSummaryPreviousAttributes.md#expandedinvoicesummarypreviousattributescreated_at). |
| `customer_id` | Optional | string or null | Customer billed by the invoice. Absent when the invoice has no customer. `customer_id`: [declared alternatives](../models/ExpandedInvoiceSummaryPreviousAttributes.md#expandedinvoicesummarypreviousattributescustomer_id). |
| `due_date` | Optional | string or null | Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only after this date ends. Automatic collection runs at the later of issue and the start of this date. With payment terms, issue computes this date from issued_at. Absent when there is no due date. `due_date`: [declared alternatives](../models/ExpandedInvoiceSummaryPreviousAttributes.md#expandedinvoicesummarypreviousattributesdue_date). |
| `invoice_id` | Optional | string or null | Flint invoice ID. `invoice_id`: [declared alternatives](../models/ExpandedInvoiceSummaryPreviousAttributes.md#expandedinvoicesummarypreviousattributesinvoice_id). |
| `invoice_number` | Optional | string or null | Sequential document number assigned when the invoice is issued. Absent on a draft. `invoice_number`: [declared alternatives](../models/ExpandedInvoiceSummaryPreviousAttributes.md#expandedinvoicesummarypreviousattributesinvoice_number). |
| `is_overdue` | Optional | boolean or null | Whether the invoice is open or partially_paid and past due with a balance remaining, as is_overdue on the full Invoice reports it. `is_overdue`: [declared alternatives](../models/ExpandedInvoiceSummaryPreviousAttributes.md#expandedinvoicesummarypreviousattributesis_overdue). |
| `order_id` | Optional | string or null | The order the invoice bills. `order_id`: [declared alternatives](../models/ExpandedInvoiceSummaryPreviousAttributes.md#expandedinvoicesummarypreviousattributesorder_id). |
| `pricing_amounts` | Optional | [PricingAmountsPreviousAttributes](../models/PricingAmountsPreviousAttributes.md#pricingamountspreviousattributes) or null | The invoice pricing totals, frozen at issue; a draft previews the backing order. |
| `refund_status` | Optional | string or null | How much of the collected money has been refunded. It doesn't change status. Values: `"none"`, `"partially_refunded"`, `"refunded"`. `refund_status`: [declared alternatives](../models/ExpandedInvoiceSummaryPreviousAttributes.md#expandedinvoicesummarypreviousattributesrefund_status). |
| `settlement_amounts` | Optional | [InvoiceSettlementAmountsPreviousAttributes](../models/InvoiceSettlementAmountsPreviousAttributes.md#invoicesettlementamountspreviousattributes) or null | The same settlement amounts as the full Invoice. |
| `status` | Optional | string or null | Current invoice status. paid and credited close the current balance and can reopen to open or partially_paid after a payment or credit allocation reversal; invoice.reopened reports that change. An uncollectible invoice accepts manual recovery payments and becomes paid when fully recovered; reversals restore the write-off. voided is final. Refunds change refund_status without reopening the balance. A lost dispute leaves paid_money, the balance, and status unchanged; collecting it again requires a new invoice. Values: `"draft"`, `"open"`, `"partially_paid"`, `"paid"`, `"voided"`, `"uncollectible"`, `"credited"`. `status`: [declared alternatives](../models/ExpandedInvoiceSummaryPreviousAttributes.md#expandedinvoicesummarypreviousattributesstatus). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. Items values: `"collect"`, `"issue"`, `"mark_uncollectible"`, `"void"`. `supported_actions`: [declared alternatives](../models/ExpandedInvoiceSummaryPreviousAttributes.md#expandedinvoicesummarypreviousattributessupported_actions). |
| `updated_at` | Optional | string or null | When the invoice last changed. `updated_at`: [declared alternatives](../models/ExpandedInvoiceSummaryPreviousAttributes.md#expandedinvoicesummarypreviousattributesupdated_at). |

### ExpandedInvoiceSummaryPreviousAttributes.collection_block_status

### ExpandedInvoiceSummaryPreviousAttributes.collection_block_status variant 1

anyOf variant 1: Whether collection is blocked. While it is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait..

- Value shape: string. Whether collection is blocked. While it is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Values: `"none"`, `"inventory_blocked"`, `"resolved"`.

### ExpandedInvoiceSummaryPreviousAttributes.collection_block_status variant 2

anyOf variant 2.

- Value shape: null. Whether collection is blocked. While it is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. 

### ExpandedInvoiceSummaryPreviousAttributes.created_at

### ExpandedInvoiceSummaryPreviousAttributes.created_at variant 1

anyOf variant 1: When the invoice was created..

- Value shape: string. When the invoice was created. When the invoice was created. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ExpandedInvoiceSummaryPreviousAttributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When the invoice was created. 

### ExpandedInvoiceSummaryPreviousAttributes.customer_id

### ExpandedInvoiceSummaryPreviousAttributes.customer_id variant 1

anyOf variant 1: Customer billed by the invoice. Absent when the invoice has no customer..

- Value shape: string. Customer billed by the invoice. Absent when the invoice has no customer. Customer billed by the invoice. Absent when the invoice has no customer. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. 

### ExpandedInvoiceSummaryPreviousAttributes.customer_id variant 2

anyOf variant 2.

- Value shape: null. Customer billed by the invoice. Absent when the invoice has no customer. 

### ExpandedInvoiceSummaryPreviousAttributes.due_date

### ExpandedInvoiceSummaryPreviousAttributes.due_date variant 1

anyOf variant 1: Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only after this date ends. Automatic collection runs at the later of issue and the start of this date. With payment terms, issue computes this date from issued_at. Absent when there is no due date..

- Value shape: string. Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only after this date ends. Automatic collection runs at the later of issue and the start of this date. With payment terms, issue computes this date from issued_at. Absent when there is no due date. Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only after this date ends. Automatic collection runs at the later of issue and the start of this date. With payment terms, issue computes this date from issued_at. Absent when there is no due date. Format: `date`. Example: `"2026-08-02"`. 

### ExpandedInvoiceSummaryPreviousAttributes.due_date variant 2

anyOf variant 2.

- Value shape: null. Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only after this date ends. Automatic collection runs at the later of issue and the start of this date. With payment terms, issue computes this date from issued_at. Absent when there is no due date. 

### ExpandedInvoiceSummaryPreviousAttributes.invoice_id

### ExpandedInvoiceSummaryPreviousAttributes.invoice_id variant 1

anyOf variant 1: Flint invoice ID..

- Value shape: string. Flint invoice ID. Flint invoice ID. Example: `"inv_01KEZF7C00A5GEBMWHEAJFSAR4"`. 

### ExpandedInvoiceSummaryPreviousAttributes.invoice_id variant 2

anyOf variant 2.

- Value shape: null. Flint invoice ID. 

### ExpandedInvoiceSummaryPreviousAttributes.invoice_number

### ExpandedInvoiceSummaryPreviousAttributes.invoice_number variant 1

anyOf variant 1: Sequential document number assigned when the invoice is issued. Absent on a draft..

- Value shape: string. Sequential document number assigned when the invoice is issued. Absent on a draft. 

### ExpandedInvoiceSummaryPreviousAttributes.invoice_number variant 2

anyOf variant 2.

- Value shape: null. Sequential document number assigned when the invoice is issued. Absent on a draft. 

### ExpandedInvoiceSummaryPreviousAttributes.is_overdue

### ExpandedInvoiceSummaryPreviousAttributes.is_overdue variant 1

anyOf variant 1: Whether the invoice is open or partially_paid and past due with a balance remaining, as is_overdue on the full Invoice reports it..

- Value shape: boolean. Whether the invoice is open or partially_paid and past due with a balance remaining, as is_overdue on the full Invoice reports it. 

### ExpandedInvoiceSummaryPreviousAttributes.is_overdue variant 2

anyOf variant 2.

- Value shape: null. Whether the invoice is open or partially_paid and past due with a balance remaining, as is_overdue on the full Invoice reports it. 

### ExpandedInvoiceSummaryPreviousAttributes.order_id

### ExpandedInvoiceSummaryPreviousAttributes.order_id variant 1

anyOf variant 1: The order the invoice bills..

- Value shape: string. The order the invoice bills. The order the invoice bills. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### ExpandedInvoiceSummaryPreviousAttributes.order_id variant 2

anyOf variant 2.

- Value shape: null. The order the invoice bills. 

### ExpandedInvoiceSummaryPreviousAttributes.refund_status

### ExpandedInvoiceSummaryPreviousAttributes.refund_status variant 1

anyOf variant 1: How much of the collected money has been refunded. It doesn't change status..

- Value shape: string. How much of the collected money has been refunded. It doesn't change status. Values: `"none"`, `"partially_refunded"`, `"refunded"`.

### ExpandedInvoiceSummaryPreviousAttributes.refund_status variant 2

anyOf variant 2.

- Value shape: null. How much of the collected money has been refunded. It doesn't change status. 

### ExpandedInvoiceSummaryPreviousAttributes.status

### ExpandedInvoiceSummaryPreviousAttributes.status variant 1

anyOf variant 1: Current invoice status. paid and credited close the current balance and can reopen to open or partially_paid after a payment or credit allocation reversal; invoice.reopened reports that change. An uncollectible invoice accepts manual recovery payments and becomes paid when fully recovered; reversals restore the write-off. voided is final. Refunds change refund_status without reopening the balance. A lost dispute leaves paid_money, the balance, and status unchanged; collecting it again requires a new invoice..

- Value shape: string. Current invoice status. paid and credited close the current balance and can reopen to open or partially_paid after a payment or credit allocation reversal; invoice.reopened reports that change. An uncollectible invoice accepts manual recovery payments and becomes paid when fully recovered; reversals restore the write-off. voided is final. Refunds change refund_status without reopening the balance. A lost dispute leaves paid_money, the balance, and status unchanged; collecting it again requires a new invoice. Values: `"draft"`, `"open"`, `"partially_paid"`, `"paid"`, `"voided"`, `"uncollectible"`, `"credited"`.

### ExpandedInvoiceSummaryPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Current invoice status. paid and credited close the current balance and can reopen to open or partially_paid after a payment or credit allocation reversal; invoice.reopened reports that change. An uncollectible invoice accepts manual recovery payments and becomes paid when fully recovered; reversals restore the write-off. voided is final. Refunds change refund_status without reopening the balance. A lost dispute leaves paid_money, the balance, and status unchanged; collecting it again requires a new invoice. 

### ExpandedInvoiceSummaryPreviousAttributes.supported_actions

### ExpandedInvoiceSummaryPreviousAttributes.supported_actions variant 1

anyOf variant 1: Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available..

- Value shape: Array of string. Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. Items values: `"collect"`, `"issue"`, `"mark_uncollectible"`, `"void"`.

### ExpandedInvoiceSummaryPreviousAttributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. 

### ExpandedInvoiceSummaryPreviousAttributes.updated_at

### ExpandedInvoiceSummaryPreviousAttributes.updated_at variant 1

anyOf variant 1: When the invoice last changed..

- Value shape: string. When the invoice last changed. When the invoice last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ExpandedInvoiceSummaryPreviousAttributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the invoice last changed. 

