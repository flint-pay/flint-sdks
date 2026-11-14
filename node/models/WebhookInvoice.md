[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookInvoice

The resource snapshot, without expansions. Webhooks omit these fields: `public_url`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `cc_emails` | Required | Array of string | Additional recipients copied on the invoice email and every reminder. |
| `closed_at` | Optional | string | When the current closed interval began. Cleared when status returns to open or partially_paid. A direct move between closed statuses preserves this timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `collection` | Required | [InvoiceCollection](../models/InvoiceCollection.md#invoicecollection) | How this invoice is collected, resolved when the draft is written. Send this object back when updating its collection policy. The invoice collection policy resolved at write time. The object can be sent back when updating a draft. |
| `collection_block_status` | Required | string | Whether collection is blocked. While it is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Values: `"none"`, `"inventory_blocked"`, `"resolved"`. |
| `created_at` | Required | string | When the invoice was created. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `credit_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Credit note credit allocated to this invoice, minus reversed allocations. Unallocated credit isn't included. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `credit_money`: [field definitions](../models/BuyerInvoice.md#buyerinvoicecredit_money). |
| `currently_due_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The part of the balance due now. Without schedule_entries, it equals outstanding_money. With schedule_entries, it is the outstanding amount of the first entry, in schedule order, whose due date has started and that still has a balance, or 0 when there is none. It is the amount the next collect call or checkout session charges. To total everything overdue, add the outstanding_money of the entries whose status is overdue. Always 0 unless the invoice is open or partially_paid. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `currently_due_money`: [field definitions](../models/BuyerInvoice.md#buyerinvoicecurrently_due_money). |
| `customer` | Optional | [ExpandedCustomerSummary](../models/ExpandedCustomerSummary.md#expandedcustomersummary) or null | Summary of the billed customer. Returned only with expand=customer. Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. |
| `customer_id` | Optional | string | Customer billed by this invoice. Absent when the invoice has no customer. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `delivery_mode` | Optional | string | How issue delivered the invoice. Values: `"email"`, `"caller_managed"`. |
| `due_date` | Optional | string | Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only after this date ends. Automatic collection runs at the later of issue and the start of this date. With payment terms, issue computes this date from issued_at. Absent when there is no due date. Format: `date`. Example: `"2026-08-02"`. |
| `external_reference_id` | Required | string or null | Caller-owned identifier for this resource in an external system. Use it as your sync key: it isn't printed on the invoice. `null` when unset. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `footer` | Required | string or null | Fine print at the bottom of the invoice and PDF. It cannot change after issue. `null` when unset. |
| `invoice_id` | Required | string | Flint invoice ID. Example: `"inv_01KEZF7C00A5GEBMWHEAJFSAR4"`. |
| `invoice_number` | Optional | string | Sequential document number assigned when the invoice is issued. Numbering is per merchant, with test and live mode numbered independently. |
| `is_overdue` | Required | boolean | Whether the invoice is open or partially_paid and past due with a balance remaining. Without schedule_entries, the due_date has ended in timezone (UTC when absent) and outstanding_money is above zero; with them, at least one entry is overdue. Computed when the invoice is read. |
| `issued_at` | Optional | string | When the invoice was issued. Absent on a draft. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `late_fee_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Late fees assessed after issue, minus waivers, including amounts since paid or written off. Itemized in late_fees. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `late_fee_money`: [field definitions](../models/BuyerInvoice.md#buyerinvoicelate_fee_money). |
| `late_fees` | Required | Array of [InvoiceLateFee](../models/InvoiceLateFee.md#invoicelatefee) | Late fees assessed on this invoice, each with its paid, waived, written-off, and outstanding amounts. late_fee_money is their assessed total minus waivers. |
| `memo` | Required | string or null | Message to the customer, printed on the invoice and PDF. It cannot change after issue. `null` when unset. |
| `merchant_id` | Required | string | Merchant that owns this invoice. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/DeliveryLocationSet.md#deliverylocationsetmetadata). |
| `order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null | Summary of the backing order. Returned only with expand=order. Present only when `expand` includes `order`; `null` when expanded and there is no related order. |
| `order_id` | Required | string | The order this invoice bills. Every invoice has one; quick pay creates it. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `outstanding_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | What is still owed: pricing_amounts.total_money + late_fee_money - paid_money - credit_money - written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided invoices; equal to pricing_amounts.total_money on a draft. Refunds and dispute losses don't change it. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `outstanding_money`: [field definitions](../models/Invoice.md#invoiceoutstanding_money). |
| `paid_at` | Optional | string | When the invoice most recently became paid. Cleared when status leaves paid and set again on a later paid transition. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `paid_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Payments collected toward this invoice, online or as recorded manual payments, minus reversed payments, including payments toward late fees. Never below zero. Disputes, including losses, don't reduce it. Refunds don't reduce it; they are in refunded_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `paid_money`: [field definitions](../models/BuyerInvoice.md#buyerinvoicepaid_money). |
| `payment_due` | Required | [InvoicePaymentDue](../models/InvoicePaymentDue.md#invoicepaymentdue) | The resolved due-date policy. Send this object back when updating the draft; payment_terms captures the term's current revision again. The invoice due-date policy resolved at write time. The object can be sent back when updating a draft. |
| `payment_terms_snapshot` | Optional | [InvoicePaymentTermsSnapshot](../models/InvoicePaymentTermsSnapshot.md#invoicepaymenttermssnapshot) | The payment term captured on the draft, with its due date rule and late fee policy. Later changes to the payment term don't affect this invoice. The payment terms saved on an invoice: the term's name, version, due date calculation, and late fee policy. |
| `po_number` | Required | string or null | The buyer's purchase order number, printed on the invoice and PDF. It cannot change after issue. `null` when unset. |
| `pricing_amounts` | Required | [PricingAmounts](../models/PricingAmounts.md#pricingamounts) | The invoice pricing totals, frozen at issue. A draft previews the backing order. total_money excludes late fees, which are in late_fee_money. The money totals for an order or invoice: subtotal, discounts, charges, tax, requested tip, and total. |
| `recipient_email` | Required | string or null | Where Flint emails the invoice and its reminders. Email delivery requires it at issue. `null` when unset. |
| `reference` | Required | string or null | Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase order number goes in po_number. It cannot change after issue. `null` when unset. |
| `refund_status` | Required | string | How much of the collected money has been refunded. It doesn't change status. Values: `"none"`, `"partially_refunded"`, `"refunded"`. |
| `refunded_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Money refunded to the buyer after collection. Refunds don't reopen the balance; refund_status summarizes them. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `refunded_money`: [field definitions](../models/BuyerInvoice.md#buyerinvoicerefunded_money). |
| `reminders_paused` | Required | boolean | Whether automatic reminders are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it. |
| `reminders_paused_at` | Optional | string | When automatic reminders were paused. Absent while reminders are active. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `remit_to_address` | Optional | [Address](../models/Address.md#address) | Where the buyer sends offline payments, shown on the invoice. Defaults to the invoice settings remit-to address. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. |
| `schedule_entries` | Required | Array of [InvoiceScheduleEntry](../models/InvoiceScheduleEntry.md#invoicescheduleentry) | The payment schedule, in schedule order. Always [] when the invoice has no schedule and is collected in one balance. |
| `scheduled_issue_at` | Required | string or null | When Flint will issue and deliver this draft. `null` when no issue is scheduled. Cleared when the draft is issued or voided, or when you send null. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `service_date` | Required | string or null | The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it as written, without timezone conversion. `null` when unset. Format: `date`. Example: `"2026-08-02"`. |
| `snapshot` | Optional | [InvoiceSnapshot](../models/InvoiceSnapshot.md#invoicesnapshot) | The billing content of the invoice: line items, discounts, charges, tip, and tax. A draft previews the backing order; issue freezes it, and later order changes don't reach an issued invoice. A frozen copy of an issued invoice's content, including line items, charges, discounts, tax identities, and pricing amounts. |
| `status` | Required | string | Current invoice status. paid and credited close the current balance and can reopen to open or partially_paid after a payment or credit allocation reversal; invoice.reopened reports that change. An uncollectible invoice accepts manual recovery payments and becomes paid when fully recovered; reversals restore the write-off. voided is final. Refunds change refund_status without reopening the balance. A lost dispute leaves paid_money, the balance, and status unchanged; collecting it again requires a new invoice. Values: `"draft"`, `"open"`, `"partially_paid"`, `"paid"`, `"voided"`, `"uncollectible"`, `"credited"`. |
| `subscription_id` | Required | string or null | The subscription the backing order belongs to, copied when the draft is created and never changed. `null` when the order isn't part of a subscription. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. |
| `supported_actions` | Required | Array of string | Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. Items values: `"collect"`, `"issue"`, `"mark_uncollectible"`, `"void"`. |
| `timezone` | Optional | string | IANA time zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken from the merchant's timezone when the draft is written, or UTC when unset. Later merchant changes do not alter this invoice's calendar. |
| `uncollectible_at` | Optional | string | When the invoice was marked uncollectible. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `updated_at` | Required | string | When the invoice last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Current invoice version. Send this as expected_version when updating the draft. Format: `int64`. minimum: `1`. |
| `viewed_at` | Optional | string | When the buyer first opened the invoice through its hosted invoice link. Recorded on a best-effort basis. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `voided_at` | Optional | string | When the invoice was voided. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `written_off_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The balance written off when the invoice was marked uncollectible, including unpaid late fees. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `written_off_money`: [field definitions](../models/Invoice.md#invoicewritten_off_money). |

### WebhookInvoice.credit_money

Field definitions: [BuyerInvoice.credit_money](../models/BuyerInvoice.md#buyerinvoicecredit_money).

### WebhookInvoice.currently_due_money

Field definitions: [BuyerInvoice.currently_due_money](../models/BuyerInvoice.md#buyerinvoicecurrently_due_money).

### WebhookInvoice.late_fee_money

Field definitions: [BuyerInvoice.late_fee_money](../models/BuyerInvoice.md#buyerinvoicelate_fee_money).

### WebhookInvoice.metadata

Field definitions: [DeliveryLocationSet.metadata](../models/DeliveryLocationSet.md#deliverylocationsetmetadata).

### WebhookInvoice.outstanding_money

Field definitions: [Invoice.outstanding_money](../models/Invoice.md#invoiceoutstanding_money).

### WebhookInvoice.paid_money

Field definitions: [BuyerInvoice.paid_money](../models/BuyerInvoice.md#buyerinvoicepaid_money).

### WebhookInvoice.refunded_money

Field definitions: [BuyerInvoice.refunded_money](../models/BuyerInvoice.md#buyerinvoicerefunded_money).

### WebhookInvoice.written_off_money

Field definitions: [Invoice.written_off_money](../models/Invoice.md#invoicewritten_off_money).

