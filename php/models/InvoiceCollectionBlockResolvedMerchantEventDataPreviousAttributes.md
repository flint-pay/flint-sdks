[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `cc_emails` | Optional | Array of string or null | Additional recipients copied on the invoice email and every reminder. `cc_emails`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributescc_emails). |
| `closed_at` | Optional | string or null | When the current closed interval began. Cleared when status returns to open or partially_paid. A direct move between closed statuses preserves this timestamp. `closed_at`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesclosed_at). |
| `collection` | Optional | object and ([InvoiceCollectionBuyerInitiated](../models/InvoiceCollectionBuyerInitiated.md#invoicecollectionbuyerinitiated) or [InvoiceCollectionAutomatic](../models/InvoiceCollectionAutomatic.md#invoicecollectionautomatic) or [InvoiceCollectionExternal](../models/InvoiceCollectionExternal.md#invoicecollectionexternal)) or null | How this invoice is collected, resolved when the draft is written. Send this object back when updating its collection policy. `collection`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributescollection). |
| `collection_block_status` | Optional | string or null | Whether collection is blocked. While it is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Values: `"none"`, `"inventory_blocked"`, `"resolved"`. `collection_block_status`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributescollection_block_status). |
| `created_at` | Optional | string or null | When the invoice was created. `created_at`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributescreated_at). |
| `customer` | Optional | [ExpandedCustomerSummary](../models/ExpandedCustomerSummary.md#expandedcustomersummary) or null or null | Summary of the billed customer. Returned only with expand=customer. Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. |
| `customer_id` | Optional | string or null | Customer billed by this invoice. Absent when the invoice has no customer. `customer_id`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributescustomer_id). |
| `delivery_mode` | Optional | string or null | How issue delivered the invoice. Values: `"email"`, `"caller_managed"`. `delivery_mode`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesdelivery_mode). |
| `due_date` | Optional | string or null | Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only after this date ends. Automatic collection runs at the later of issue and the start of this date. With payment terms, issue computes this date from issued_at. Absent when there is no due date. `due_date`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesdue_date). |
| `external_reference_id` | Optional | string or null or null | Caller-owned identifier for this resource in an external system. Use it as your sync key: it isn't printed on the invoice. `null` when unset. `external_reference_id`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesexternal_reference_id). |
| `footer` | Optional | string or null or null | Fine print at the bottom of the invoice and PDF. It cannot change after issue. `null` when unset. `footer`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesfooter). |
| `invoice_id` | Optional | string or null | Flint invoice ID. `invoice_id`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesinvoice_id). |
| `invoice_number` | Optional | string or null | Sequential document number assigned when the invoice is issued. Numbering is per merchant, with test and live mode numbered independently. `invoice_number`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesinvoice_number). |
| `is_overdue` | Optional | boolean or null | Whether the invoice is open or partially_paid and past due with a balance remaining. Without schedule_entries, the due_date has ended in timezone (UTC when absent) and outstanding_money is above zero; with them, at least one entry is overdue. Computed when the invoice is read. `is_overdue`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesis_overdue). |
| `issued_at` | Optional | string or null | When the invoice was issued. Absent on a draft. `issued_at`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesissued_at). |
| `late_fees` | Optional | Array of [InvoiceLateFee](../models/InvoiceLateFee.md#invoicelatefee) or null | Late fees assessed on this invoice, each with its paid, waived, written-off, and outstanding amounts. settlement_amounts.late_fee_money is their assessed total minus waivers. `late_fees`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributeslate_fees). |
| `memo` | Optional | string or null or null | Message to the customer, printed on the invoice and PDF. It cannot change after issue. `null` when unset. `memo`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesmemo). |
| `merchant_id` | Optional | string or null | Merchant that owns this invoice. `merchant_id`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesmerchant_id). |
| `metadata` | Optional | Map of string or null | Caller-owned metadata. `metadata`: [declared alternatives](../models/DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.md#deliverylocationsetarchivedmerchanteventdatapreviousattributesmetadata). |
| `order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null or null | Summary of the backing order. Returned only with expand=order. Present only when `expand` includes `order`; `null` when expanded and there is no related order. |
| `order_id` | Optional | string or null | The order this invoice bills. Every invoice has one; quick pay creates it. `order_id`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesorder_id). |
| `paid_at` | Optional | string or null | When the invoice most recently became paid. Cleared when status leaves paid and set again on a later paid transition. `paid_at`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributespaid_at). |
| `payment_due` | Optional | object and ([InvoicePaymentDueNone](../models/InvoicePaymentDueNone.md#invoicepaymentduenone) or [InvoicePaymentDueDate](../models/InvoicePaymentDueDate.md#invoicepaymentduedate) or [InvoicePaymentDuePaymentTerms](../models/InvoicePaymentDuePaymentTerms.md#invoicepaymentduepaymentterms)) or null | The resolved due-date policy. Send this object back when updating the draft; payment_terms captures the term's current revision again. `payment_due`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributespayment_due). |
| `payment_terms_snapshot` | Optional | [InvoicePaymentTermsSnapshot](../models/InvoicePaymentTermsSnapshot.md#invoicepaymenttermssnapshot) or null | The payment term captured on the draft, with its due date rule and late fee policy. Later changes to the payment term don't affect this invoice. |
| `po_number` | Optional | string or null or null | The buyer's purchase order number, printed on the invoice and PDF. It cannot change after issue. `null` when unset. `po_number`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributespo_number). |
| `pricing_amounts` | Optional | [PricingAmounts](../models/PricingAmounts.md#pricingamounts) or null | The invoice pricing totals, frozen at issue. A draft previews the backing order. total_money excludes late fees, which are in settlement_amounts.late_fee_money. |
| `recipient_email` | Optional | string or null or null | Where Flint emails the invoice and its reminders. Email delivery requires it at issue. `null` when unset. `recipient_email`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesrecipient_email). |
| `reference` | Optional | string or null or null | Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase order number goes in po_number. It cannot change after issue. `null` when unset. `reference`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesreference). |
| `refund_status` | Optional | string or null | How much of the collected money has been refunded. It doesn't change status. Values: `"none"`, `"partially_refunded"`, `"refunded"`. `refund_status`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesrefund_status). |
| `reminders_paused` | Optional | boolean or null | Whether automatic reminders are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it. `reminders_paused`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesreminders_paused). |
| `reminders_paused_at` | Optional | string or null | When automatic reminders were paused. Absent while reminders are active. `reminders_paused_at`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesreminders_paused_at). |
| `remit_to_address` | Optional | [Address](../models/Address.md#address) or null | Where the buyer sends offline payments, shown on the invoice. Defaults to the invoice settings remit-to address. |
| `schedule_entries` | Optional | Array of [InvoiceScheduleEntry](../models/InvoiceScheduleEntry.md#invoicescheduleentry) or null | The payment schedule, in schedule order. Always [] when the invoice has no schedule and is collected in one balance. `schedule_entries`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesschedule_entries). |
| `scheduled_issue_at` | Optional | string or null or null | When Flint will issue and deliver this draft. `null` when no issue is scheduled. Cleared when the draft is issued or voided, or when you send null. `scheduled_issue_at`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesscheduled_issue_at). |
| `service_date` | Optional | string or null or null | The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it as written, without timezone conversion. `null` when unset. `service_date`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesservice_date). |
| `settlement_amounts` | Optional | [InvoiceSettlementAmounts](../models/InvoiceSettlementAmounts.md#invoicesettlementamounts) or null | Payments, refunds, write-offs, allocated credit notes, late fees, and the remaining invoice balance. What is still owed: pricing_amounts.total_money + late_fee_money - paid_money - credited_money - written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided invoices; equal to pricing_amounts.total_money on a draft. Refunds and dispute losses don't change it. |
| `snapshot` | Optional | [InvoiceSnapshot](../models/InvoiceSnapshot.md#invoicesnapshot) or null | The billing content of the invoice: line items, discounts, charges, tip, and tax. A draft previews the backing order; issue freezes it, and later order changes don't reach an issued invoice. |
| `status` | Optional | string or null | Current invoice status. paid and credited close the current balance and can reopen to open or partially_paid after a payment or credit allocation reversal; invoice.reopened reports that change. An uncollectible invoice accepts manual recovery payments and becomes paid when fully recovered; reversals restore the write-off. voided is final. Refunds change refund_status without reopening the balance. A lost dispute leaves paid_money, the balance, and status unchanged; collecting it again requires a new invoice. Values: `"draft"`, `"open"`, `"partially_paid"`, `"paid"`, `"voided"`, `"uncollectible"`, `"credited"`. `status`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesstatus). |
| `subscription_id` | Optional | string or null or null | The subscription the backing order belongs to, copied when the draft is created and never changed. `null` when the order isn't part of a subscription. `subscription_id`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessubscription_id). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. Items values: `"collect"`, `"issue"`, `"mark_uncollectible"`, `"void"`. `supported_actions`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessupported_actions). |
| `timezone` | Optional | string or null | IANA time zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken from the merchant's timezone when the draft is written, or UTC when unset. Later merchant changes do not alter this invoice's calendar. `timezone`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributestimezone). |
| `uncollectible_at` | Optional | string or null | When the invoice was marked uncollectible. `uncollectible_at`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesuncollectible_at). |
| `updated_at` | Optional | string or null | When the invoice last changed. `updated_at`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesupdated_at). |
| `version` | Optional | integer or null | Current invoice version. Send this as expected_version when updating the draft. `version`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesversion). |
| `viewed_at` | Optional | string or null | When the buyer first opened the invoice through its hosted invoice link. Recorded on a best-effort basis. `viewed_at`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesviewed_at). |
| `voided_at` | Optional | string or null | When the invoice was voided. `voided_at`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesvoided_at). |

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.cc_emails

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.cc_emails variant 1

anyOf variant 1: Additional recipients copied on the invoice email and every reminder..

- Value shape: Array of string. Additional recipients copied on the invoice email and every reminder. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.cc_emails variant 2

anyOf variant 2.

- Value shape: null. Additional recipients copied on the invoice email and every reminder. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.closed_at

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.closed_at variant 1

anyOf variant 1: When the current closed interval began. Cleared when status returns to open or partially_paid. A direct move between closed statuses preserves this timestamp..

- Value shape: string. When the current closed interval began. Cleared when status returns to open or partially_paid. A direct move between closed statuses preserves this timestamp. When the current closed interval began. Cleared when status returns to open or partially_paid. A direct move between closed statuses preserves this timestamp. Format: `date-time`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.closed_at variant 2

anyOf variant 2.

- Value shape: null. When the current closed interval began. Cleared when status returns to open or partially_paid. A direct move between closed statuses preserves this timestamp. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.collection

How this invoice is collected, resolved when the draft is written. Send this object back when updating its collection policy.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `mode` | Conditional | string | How the invoice is collected, resolved when the draft was written. Values: `"buyer_initiated"`, `"automatic"`, `"external"`. |
| `payment_method_id` | Conditional | Varies by condition | The saved card Flint charges. Present only with automatic. `null` when the draft will use the customer's default card, selected at issue. After issue it is the selected card. |
| `payment_policy` | Conditional | [InvoicePaymentPolicy](../models/InvoicePaymentPolicy.md#invoicepaymentpolicy) | The payment options the hosted invoice page offers. Present only with buyer_initiated. Which payment options an invoice accepts, any per-option total limits, and whether to show a cost comparison. |

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.collection variant 1: `mode` = `"buyer_initiated"`

anyOf InvoiceCollection: How this invoice is collected, resolved when the draft is written. Send this object back when updating its collection policy.; oneOf with mode: "buyer_initiated": The `buyer_initiated` variant of `InvoiceCollection`..

- Condition: not (present(`payment_method_id`)).
- Required: `mode`, `payment_policy`.
- Optional: `payment_method_id`.
- Constraints for `mode`: Values: `"buyer_initiated"`.
- Constraints for `payment_method_id`: string or null.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.collection variant 2: `mode` = `"automatic"`

anyOf InvoiceCollection: How this invoice is collected, resolved when the draft is written. Send this object back when updating its collection policy.; oneOf with mode: "automatic": The `automatic` variant of `InvoiceCollection`..

- Condition: not (present(`payment_policy`)).
- Required: `mode`, `payment_method_id`.
- Optional: `payment_policy`.
- Constraints for `mode`: Values: `"automatic"`.
- Constraints for `payment_method_id`: (string or null).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.collection variant 3: `mode` = `"external"`

anyOf InvoiceCollection: How this invoice is collected, resolved when the draft is written. Send this object back when updating its collection policy.; oneOf with mode: "external": The `external` variant of `InvoiceCollection`..

- Condition: not (at least one(present(`payment_method_id`); present(`payment_policy`))).
- Required: `mode`.
- Optional: `payment_method_id`, `payment_policy`.
- Constraints for `mode`: Values: `"external"`.
- Constraints for `payment_method_id`: string or null.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.collection variant 4

anyOf variant 2.

- Undeclared: `mode`, `payment_method_id`, `payment_policy`.
- Value shape: null. How this invoice is collected, resolved when the draft is written. Send this object back when updating its collection policy. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.collection_block_status

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.collection_block_status variant 1

anyOf variant 1: Whether collection is blocked. While it is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait..

- Value shape: string. Whether collection is blocked. While it is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Values: `"none"`, `"inventory_blocked"`, `"resolved"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.collection_block_status variant 2

anyOf variant 2.

- Value shape: null. Whether collection is blocked. While it is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.created_at

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.created_at variant 1

anyOf variant 1: When the invoice was created..

- Value shape: string. When the invoice was created. When the invoice was created. Format: `date-time`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When the invoice was created. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.customer_id

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.customer_id variant 1

anyOf variant 1: Customer billed by this invoice. Absent when the invoice has no customer..

- Value shape: string. Customer billed by this invoice. Absent when the invoice has no customer. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.customer_id variant 2

anyOf variant 2.

- Value shape: null. Customer billed by this invoice. Absent when the invoice has no customer. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.delivery_mode

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.delivery_mode variant 1

anyOf variant 1: How issue delivered the invoice..

- Value shape: string. How issue delivered the invoice. Values: `"email"`, `"caller_managed"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.delivery_mode variant 2

anyOf variant 2.

- Value shape: null. How issue delivered the invoice. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.due_date

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.due_date variant 1

anyOf variant 1: Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only after this date ends. Automatic collection runs at the later of issue and the start of this date. With payment terms, issue computes this date from issued_at. Absent when there is no due date..

- Value shape: string. Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only after this date ends. Automatic collection runs at the later of issue and the start of this date. With payment terms, issue computes this date from issued_at. Absent when there is no due date. Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only after this date ends. Automatic collection runs at the later of issue and the start of this date. With payment terms, issue computes this date from issued_at. Absent when there is no due date. Format: `date`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.due_date variant 2

anyOf variant 2.

- Value shape: null. Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only after this date ends. Automatic collection runs at the later of issue and the start of this date. With payment terms, issue computes this date from issued_at. Absent when there is no due date. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.external_reference_id

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.external_reference_id variant 1

anyOf variant 1: Caller-owned identifier for this resource in an external system. Use it as your sync key: it isn't printed on the invoice. `null` when unset..

- Value shape: (string or null). Caller-owned identifier for this resource in an external system. Use it as your sync key: it isn't printed on the invoice. `null` when unset. Caller-owned identifier for this resource in an external system. Use it as your sync key: it isn't printed on the invoice. `null` when unset. minLength: `1`. maxLength: `255`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.external_reference_id variant 2

anyOf variant 2.

- Value shape: null. Caller-owned identifier for this resource in an external system. Use it as your sync key: it isn't printed on the invoice. `null` when unset. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.footer

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.footer variant 1

anyOf variant 1: Fine print at the bottom of the invoice and PDF. It cannot change after issue. `null` when unset..

- Value shape: (string or null). Fine print at the bottom of the invoice and PDF. It cannot change after issue. `null` when unset. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.footer variant 2

anyOf variant 2.

- Value shape: null. Fine print at the bottom of the invoice and PDF. It cannot change after issue. `null` when unset. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.invoice_id

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.invoice_id variant 1

anyOf variant 1: Flint invoice ID..

- Value shape: string. Flint invoice ID. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.invoice_id variant 2

anyOf variant 2.

- Value shape: null. Flint invoice ID. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.invoice_number

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.invoice_number variant 1

anyOf variant 1: Sequential document number assigned when the invoice is issued. Numbering is per merchant, with test and live mode numbered independently..

- Value shape: string. Sequential document number assigned when the invoice is issued. Numbering is per merchant, with test and live mode numbered independently. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.invoice_number variant 2

anyOf variant 2.

- Value shape: null. Sequential document number assigned when the invoice is issued. Numbering is per merchant, with test and live mode numbered independently. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.is_overdue

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.is_overdue variant 1

anyOf variant 1: Whether the invoice is open or partially_paid and past due with a balance remaining. Without schedule_entries, the due_date has ended in timezone (UTC when absent) and outstanding_money is above zero; with them, at least one entry is overdue. Computed when the invoice is read..

- Value shape: boolean. Whether the invoice is open or partially_paid and past due with a balance remaining. Without schedule_entries, the due_date has ended in timezone (UTC when absent) and outstanding_money is above zero; with them, at least one entry is overdue. Computed when the invoice is read. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.is_overdue variant 2

anyOf variant 2.

- Value shape: null. Whether the invoice is open or partially_paid and past due with a balance remaining. Without schedule_entries, the due_date has ended in timezone (UTC when absent) and outstanding_money is above zero; with them, at least one entry is overdue. Computed when the invoice is read. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.issued_at

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.issued_at variant 1

anyOf variant 1: When the invoice was issued. Absent on a draft..

- Value shape: string. When the invoice was issued. Absent on a draft. When the invoice was issued. Absent on a draft. Format: `date-time`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.issued_at variant 2

anyOf variant 2.

- Value shape: null. When the invoice was issued. Absent on a draft. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.late_fees

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.late_fees variant 1

anyOf variant 1: Late fees assessed on this invoice, each with its paid, waived, written-off, and outstanding amounts. settlement_amounts.late_fee_money is their assessed total minus waivers..

- Value shape: Array of [InvoiceLateFee](../models/InvoiceLateFee.md#invoicelatefee). Late fees assessed on this invoice, each with its paid, waived, written-off, and outstanding amounts. settlement_amounts.late_fee_money is their assessed total minus waivers. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.late_fees variant 2

anyOf variant 2.

- Value shape: null. Late fees assessed on this invoice, each with its paid, waived, written-off, and outstanding amounts. settlement_amounts.late_fee_money is their assessed total minus waivers. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.late_fees variant 1.[] fields 1

Field definitions: [InvoiceResponse.data.late_fees[]](../models/InvoiceResponse.md#invoiceresponsedatalate_fees).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.memo

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.memo variant 1

anyOf variant 1: Message to the customer, printed on the invoice and PDF. It cannot change after issue. `null` when unset..

- Value shape: (string or null). Message to the customer, printed on the invoice and PDF. It cannot change after issue. `null` when unset. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.memo variant 2

anyOf variant 2.

- Value shape: null. Message to the customer, printed on the invoice and PDF. It cannot change after issue. `null` when unset. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.merchant_id

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.merchant_id variant 1

anyOf variant 1: Merchant that owns this invoice..

- Value shape: string. Merchant that owns this invoice. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.merchant_id variant 2

anyOf variant 2.

- Value shape: null. Merchant that owns this invoice. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.metadata

Declared alternatives: [DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.metadata](../models/DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.md#deliverylocationsetarchivedmerchanteventdatapreviousattributesmetadata).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.order_id

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.order_id variant 1

anyOf variant 1: The order this invoice bills. Every invoice has one; quick pay creates it..

- Value shape: string. The order this invoice bills. Every invoice has one; quick pay creates it. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.order_id variant 2

anyOf variant 2.

- Value shape: null. The order this invoice bills. Every invoice has one; quick pay creates it. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.paid_at

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.paid_at variant 1

anyOf variant 1: When the invoice most recently became paid. Cleared when status leaves paid and set again on a later paid transition..

- Value shape: string. When the invoice most recently became paid. Cleared when status leaves paid and set again on a later paid transition. When the invoice most recently became paid. Cleared when status leaves paid and set again on a later paid transition. Format: `date-time`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.paid_at variant 2

anyOf variant 2.

- Value shape: null. When the invoice most recently became paid. Cleared when status leaves paid and set again on a later paid transition. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_due

The resolved due-date policy. Send this object back when updating the draft; payment_terms captures the term's current revision again.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `due_date` | Conditional | string | Calendar due date in YYYY-MM-DD format, interpreted in the invoice timezone (UTC when absent). Present only with date. The top-level due_date is the effective due date for every type. Format: `date`. |
| `invoice_payment_term_id` | Conditional | string | The payment term applied, captured in payment_terms_snapshot. Present only with payment_terms. |
| `type` | Conditional | string | How the due date was set. Values: `"none"`, `"date"`, `"payment_terms"`. |

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_due variant 1: `type` = `"none"`

anyOf InvoicePaymentDue: The resolved due-date policy. Send this object back when updating the draft; payment_terms captures the term's current revision again.; oneOf with type: "none": The `none` variant of `InvoicePaymentDue`..

- Condition: not (at least one(present(`due_date`); present(`invoice_payment_term_id`))).
- Required: `type`.
- Optional: `due_date`, `invoice_payment_term_id`.
- Constraints for `type`: Values: `"none"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_due variant 2: `type` = `"date"`

anyOf InvoicePaymentDue: The resolved due-date policy. Send this object back when updating the draft; payment_terms captures the term's current revision again.; oneOf with type: "date": The `date` variant of `InvoicePaymentDue`..

- Condition: not (present(`invoice_payment_term_id`)).
- Required: `due_date`, `type`.
- Optional: `invoice_payment_term_id`.
- Constraints for `type`: Values: `"date"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_due variant 3: `type` = `"payment_terms"`

anyOf InvoicePaymentDue: The resolved due-date policy. Send this object back when updating the draft; payment_terms captures the term's current revision again.; oneOf with type: "payment_terms": The `payment_terms` variant of `InvoicePaymentDue`..

- Condition: not (present(`due_date`)).
- Required: `invoice_payment_term_id`, `type`.
- Optional: `due_date`.
- Constraints for `type`: Values: `"payment_terms"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_due variant 4

anyOf variant 2.

- Undeclared: `due_date`, `invoice_payment_term_id`, `type`.
- Value shape: null. The resolved due-date policy. Send this object back when updating the draft; payment_terms captures the term's current revision again. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.po_number

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.po_number variant 1

anyOf variant 1: The buyer's purchase order number, printed on the invoice and PDF. It cannot change after issue. `null` when unset..

- Value shape: (string or null). The buyer's purchase order number, printed on the invoice and PDF. It cannot change after issue. `null` when unset. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.po_number variant 2

anyOf variant 2.

- Value shape: null. The buyer's purchase order number, printed on the invoice and PDF. It cannot change after issue. `null` when unset. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.recipient_email

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.recipient_email variant 1

anyOf variant 1: Where Flint emails the invoice and its reminders. Email delivery requires it at issue. `null` when unset..

- Value shape: (string or null). Where Flint emails the invoice and its reminders. Email delivery requires it at issue. `null` when unset. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.recipient_email variant 2

anyOf variant 2.

- Value shape: null. Where Flint emails the invoice and its reminders. Email delivery requires it at issue. `null` when unset. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.reference

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.reference variant 1

anyOf variant 1: Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase order number goes in po_number. It cannot change after issue. `null` when unset..

- Value shape: (string or null). Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase order number goes in po_number. It cannot change after issue. `null` when unset. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.reference variant 2

anyOf variant 2.

- Value shape: null. Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase order number goes in po_number. It cannot change after issue. `null` when unset. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.refund_status

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.refund_status variant 1

anyOf variant 1: How much of the collected money has been refunded. It doesn't change status..

- Value shape: string. How much of the collected money has been refunded. It doesn't change status. Values: `"none"`, `"partially_refunded"`, `"refunded"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.refund_status variant 2

anyOf variant 2.

- Value shape: null. How much of the collected money has been refunded. It doesn't change status. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.reminders_paused

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.reminders_paused variant 1

anyOf variant 1: Whether automatic reminders are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it..

- Value shape: boolean. Whether automatic reminders are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.reminders_paused variant 2

anyOf variant 2.

- Value shape: null. Whether automatic reminders are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.reminders_paused_at

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.reminders_paused_at variant 1

anyOf variant 1: When automatic reminders were paused. Absent while reminders are active..

- Value shape: string. When automatic reminders were paused. Absent while reminders are active. When automatic reminders were paused. Absent while reminders are active. Format: `date-time`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.reminders_paused_at variant 2

anyOf variant 2.

- Value shape: null. When automatic reminders were paused. Absent while reminders are active. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.schedule_entries

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.schedule_entries variant 1

anyOf variant 1: The payment schedule, in schedule order. Always [] when the invoice has no schedule and is collected in one balance..

- Value shape: Array of [InvoiceScheduleEntry](../models/InvoiceScheduleEntry.md#invoicescheduleentry). The payment schedule, in schedule order. Always [] when the invoice has no schedule and is collected in one balance. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.schedule_entries variant 2

anyOf variant 2.

- Value shape: null. The payment schedule, in schedule order. Always [] when the invoice has no schedule and is collected in one balance. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.schedule_entries variant 1.[] fields 1

Field definitions: [InvoiceResponse.data.schedule_entries[]](../models/InvoiceResponse.md#invoiceresponsedataschedule_entries).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.scheduled_issue_at

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.scheduled_issue_at variant 1

anyOf variant 1: When Flint will issue and deliver this draft. `null` when no issue is scheduled. Cleared when the draft is issued or voided, or when you send null..

- Value shape: (string or null). When Flint will issue and deliver this draft. `null` when no issue is scheduled. Cleared when the draft is issued or voided, or when you send null. When Flint will issue and deliver this draft. `null` when no issue is scheduled. Cleared when the draft is issued or voided, or when you send null. Format: `date-time`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.scheduled_issue_at variant 2

anyOf variant 2.

- Value shape: null. When Flint will issue and deliver this draft. `null` when no issue is scheduled. Cleared when the draft is issued or voided, or when you send null. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.service_date

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.service_date variant 1

anyOf variant 1: The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it as written, without timezone conversion. `null` when unset..

- Value shape: (string or null). The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it as written, without timezone conversion. `null` when unset. The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it as written, without timezone conversion. `null` when unset. Format: `date`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.service_date variant 2

anyOf variant 2.

- Value shape: null. The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it as written, without timezone conversion. `null` when unset. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.status

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.status variant 1

anyOf variant 1: Current invoice status. paid and credited close the current balance and can reopen to open or partially_paid after a payment or credit allocation reversal; invoice.reopened reports that change. An uncollectible invoice accepts manual recovery payments and becomes paid when fully recovered; reversals restore the write-off. voided is final. Refunds change refund_status without reopening the balance. A lost dispute leaves paid_money, the balance, and status unchanged; collecting it again requires a new invoice..

- Value shape: string. Current invoice status. paid and credited close the current balance and can reopen to open or partially_paid after a payment or credit allocation reversal; invoice.reopened reports that change. An uncollectible invoice accepts manual recovery payments and becomes paid when fully recovered; reversals restore the write-off. voided is final. Refunds change refund_status without reopening the balance. A lost dispute leaves paid_money, the balance, and status unchanged; collecting it again requires a new invoice. Values: `"draft"`, `"open"`, `"partially_paid"`, `"paid"`, `"voided"`, `"uncollectible"`, `"credited"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Current invoice status. paid and credited close the current balance and can reopen to open or partially_paid after a payment or credit allocation reversal; invoice.reopened reports that change. An uncollectible invoice accepts manual recovery payments and becomes paid when fully recovered; reversals restore the write-off. voided is final. Refunds change refund_status without reopening the balance. A lost dispute leaves paid_money, the balance, and status unchanged; collecting it again requires a new invoice. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.subscription_id

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.subscription_id variant 1

anyOf variant 1: The subscription the backing order belongs to, copied when the draft is created and never changed. `null` when the order isn't part of a subscription..

- Value shape: (string or null). The subscription the backing order belongs to, copied when the draft is created and never changed. `null` when the order isn't part of a subscription. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.subscription_id variant 2

anyOf variant 2.

- Value shape: null. The subscription the backing order belongs to, copied when the draft is created and never changed. `null` when the order isn't part of a subscription. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.supported_actions

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.supported_actions variant 1

anyOf variant 1: Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available..

- Value shape: Array of string. Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. Items values: `"collect"`, `"issue"`, `"mark_uncollectible"`, `"void"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.timezone

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.timezone variant 1

anyOf variant 1: IANA time zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken from the merchant's timezone when the draft is written, or UTC when unset. Later merchant changes do not alter this invoice's calendar..

- Value shape: string. IANA time zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken from the merchant's timezone when the draft is written, or UTC when unset. Later merchant changes do not alter this invoice's calendar. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.timezone variant 2

anyOf variant 2.

- Value shape: null. IANA time zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken from the merchant's timezone when the draft is written, or UTC when unset. Later merchant changes do not alter this invoice's calendar. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.uncollectible_at

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.uncollectible_at variant 1

anyOf variant 1: When the invoice was marked uncollectible..

- Value shape: string. When the invoice was marked uncollectible. When the invoice was marked uncollectible. Format: `date-time`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.uncollectible_at variant 2

anyOf variant 2.

- Value shape: null. When the invoice was marked uncollectible. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.updated_at

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.updated_at](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesupdated_at).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.version

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.version variant 1

anyOf variant 1: Current invoice version. Send this as expected_version when updating the draft..

- Value shape: integer. Current invoice version. Send this as expected_version when updating the draft. Current invoice version. Send this as expected_version when updating the draft. Format: `int64`. minimum: `1`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.version variant 2

anyOf variant 2.

- Value shape: null. Current invoice version. Send this as expected_version when updating the draft. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.viewed_at

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.viewed_at variant 1

anyOf variant 1: When the buyer first opened the invoice through its hosted invoice link. Recorded on a best-effort basis..

- Value shape: string. When the buyer first opened the invoice through its hosted invoice link. Recorded on a best-effort basis. When the buyer first opened the invoice through its hosted invoice link. Recorded on a best-effort basis. Format: `date-time`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.viewed_at variant 2

anyOf variant 2.

- Value shape: null. When the buyer first opened the invoice through its hosted invoice link. Recorded on a best-effort basis. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.voided_at

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.voided_at variant 1

anyOf variant 1: When the invoice was voided..

- Value shape: string. When the invoice was voided. When the invoice was voided. Format: `date-time`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.voided_at variant 2

anyOf variant 2.

- Value shape: null. When the invoice was voided. 

