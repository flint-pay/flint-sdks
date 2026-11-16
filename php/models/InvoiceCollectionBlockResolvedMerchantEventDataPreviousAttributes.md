[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `cc_emails` | Optional | Array of string or null | Additional recipients copied on the invoice email and every reminder. `cc_emails`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributescc_emails). |
| `closed_at` | Optional | string or null | When the current closed interval began. Cleared when status returns to open or partially_paid. A direct move between closed statuses preserves this timestamp. `closed_at`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesclosed_at). |
| `collection` | Optional | object and Alternative shapes (see declared variants) or null | How this invoice is collected, resolved when the draft is written. Send this object back when updating its collection policy. `collection`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributescollection). |
| `collection_block_status` | Optional | string or null | Whether collection is blocked. While it is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Values: `"none"`, `"inventory_blocked"`, `"resolved"`. `collection_block_status`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinvoice-variant-1collection_block_status). |
| `created_at` | Optional | string or null | When the invoice was created. `created_at`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributescreated_at). |
| `customer` | Optional | Alternative shapes (see declared variants) or null | Summary of the billed customer. Returned only with expand=customer. Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. `customer`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributescustomer). |
| `customer_id` | Optional | string or null | Customer billed by this invoice. Absent when the invoice has no customer. `customer_id`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributescustomer_id). |
| `delivery_mode` | Optional | string or null | How issue delivered the invoice. Values: `"email"`, `"caller_managed"`. `delivery_mode`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesdelivery_mode). |
| `due_date` | Optional | string or null | Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only after this date ends. Automatic collection runs at the later of issue and the start of this date. With payment terms, issue computes this date from issued_at. Absent when there is no due date. `due_date`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesdue_date). |
| `external_reference_id` | Optional | string or null or null | Caller-owned identifier for this resource in an external system. Use it as your sync key: it isn't printed on the invoice. `null` when unset. `external_reference_id`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesexternal_reference_id). |
| `footer` | Optional | string or null or null | Fine print at the bottom of the invoice and PDF. It cannot change after issue. `null` when unset. `footer`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesfooter). |
| `invoice_id` | Optional | string or null | Flint invoice ID. `invoice_id`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesinvoice_id). |
| `invoice_number` | Optional | string or null | Sequential document number assigned when the invoice is issued. Numbering is per merchant, with test and live mode numbered independently. `invoice_number`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesinvoice_number). |
| `is_overdue` | Optional | boolean or null | Whether the invoice is open or partially_paid and past due with a balance remaining. Without schedule_entries, the due_date has ended in timezone (UTC when absent) and outstanding_money is above zero; with them, at least one entry is overdue. Computed when the invoice is read. `is_overdue`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesis_overdue). |
| `issued_at` | Optional | string or null | When the invoice was issued. Absent on a draft. `issued_at`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesissued_at). |
| `late_fees` | Optional | Array of [InvoiceLateFeePreviousAttributes](../models/InvoiceLateFeePreviousAttributes.md#invoicelatefeepreviousattributes) or null | Late fees assessed on this invoice, each with its paid, waived, written-off, and outstanding amounts. settlement_amounts.late_fee_money is their assessed total minus waivers. `late_fees`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributeslate_fees). |
| `memo` | Optional | string or null or null | Message to the customer, printed on the invoice and PDF. It cannot change after issue. `null` when unset. `memo`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesmemo). |
| `merchant_id` | Optional | string or null | Merchant that owns this invoice. `merchant_id`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesmerchant_id). |
| `metadata` | Optional | Map of string or null | Caller-owned metadata. `metadata`: [declared alternatives](../models/DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.md#deliverylocationsetarchivedmerchanteventdatapreviousattributesmetadata). |
| `order` | Optional | Alternative shapes (see declared variants) or null | Summary of the backing order. Returned only with expand=order. Present only when `expand` includes `order`; `null` when expanded and there is no related order. `order`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesorder). |
| `order_id` | Optional | string or null | The order this invoice bills. Every invoice has one; quick pay creates it. `order_id`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesorder_id). |
| `paid_at` | Optional | string or null | When the invoice most recently became paid. Cleared when status leaves paid and set again on a later paid transition. `paid_at`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributespaid_at). |
| `payment_due` | Optional | object and Alternative shapes (see declared variants) or null | The resolved due-date policy. Send this object back when updating the draft; payment_terms captures the term's current revision again. `payment_due`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributespayment_due). |
| `payment_terms_snapshot` | Optional | Alternative shapes (see declared variants) | The payment term captured on the draft, with its due date rule and late fee policy. Later changes to the payment term don't affect this invoice. `payment_terms_snapshot`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributespayment_terms_snapshot). |
| `po_number` | Optional | string or null or null | The buyer's purchase order number, printed on the invoice and PDF. It cannot change after issue. `null` when unset. `po_number`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributespo_number). |
| `pricing_amounts` | Optional | Alternative shapes (see declared variants) | The invoice pricing totals, frozen at issue. A draft previews the backing order. total_money excludes late fees, which are in settlement_amounts.late_fee_money. `pricing_amounts`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributespricing_amounts). |
| `recipient_email` | Optional | string or null or null | Where Flint emails the invoice and its reminders. Email delivery requires it at issue. `null` when unset. `recipient_email`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesrecipient_email). |
| `reference` | Optional | string or null or null | Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase order number goes in po_number. It cannot change after issue. `null` when unset. `reference`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesreference). |
| `refund_status` | Optional | string or null | How much of the collected money has been refunded. It doesn't change status. Values: `"none"`, `"partially_refunded"`, `"refunded"`. `refund_status`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinvoice-variant-1refund_status). |
| `reminders_paused` | Optional | boolean or null | Whether automatic reminders are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it. `reminders_paused`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesreminders_paused). |
| `reminders_paused_at` | Optional | string or null | When automatic reminders were paused. Absent while reminders are active. `reminders_paused_at`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesreminders_paused_at). |
| `remit_to_address` | Optional | Alternative shapes (see declared variants) | Where the buyer sends offline payments, shown on the invoice. Defaults to the invoice settings remit-to address. `remit_to_address`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesremit_to_address). |
| `schedule_entries` | Optional | Array of [InvoiceScheduleEntryPreviousAttributes](../models/InvoiceScheduleEntryPreviousAttributes.md#invoicescheduleentrypreviousattributes) or null | The payment schedule, in schedule order. Always [] when the invoice has no schedule and is collected in one balance. `schedule_entries`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesschedule_entries). |
| `scheduled_issue_at` | Optional | string or null or null | When Flint will issue and deliver this draft. `null` when no issue is scheduled. Cleared when the draft is issued or voided, or when you send null. `scheduled_issue_at`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesscheduled_issue_at). |
| `service_date` | Optional | string or null or null | The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it as written, without timezone conversion. `null` when unset. `service_date`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesservice_date). |
| `settlement_amounts` | Optional | Alternative shapes (see declared variants) | Payments, refunds, write-offs, allocated credit notes, late fees, and the remaining invoice balance. What is still owed: pricing_amounts.total_money + late_fee_money - paid_money - credited_money - written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided invoices; equal to pricing_amounts.total_money on a draft. Refunds and dispute losses don't change it. `settlement_amounts`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessettlement_amounts). |
| `snapshot` | Optional | Alternative shapes (see declared variants) | The billing content of the invoice: line items, discounts, charges, tip, and tax. A draft previews the backing order; issue freezes it, and later order changes don't reach an issued invoice. `snapshot`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot). |
| `status` | Optional | string or null | Current invoice status. paid and credited close the current balance and can reopen to open or partially_paid after a payment or credit allocation reversal; invoice.reopened reports that change. An uncollectible invoice accepts manual recovery payments and becomes paid when fully recovered; reversals restore the write-off. voided is final. Refunds change refund_status without reopening the balance. A lost dispute leaves paid_money, the balance, and status unchanged; collecting it again requires a new invoice. Values: `"draft"`, `"open"`, `"partially_paid"`, `"paid"`, `"voided"`, `"uncollectible"`, `"credited"`. `status`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinvoice-variant-1status). |
| `subscription_id` | Optional | string or null or null | The subscription the backing order belongs to, copied when the draft is created and never changed. `null` when the order isn't part of a subscription. `subscription_id`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessubscription_id). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. Items values: `"collect"`, `"issue"`, `"mark_uncollectible"`, `"void"`. `supported_actions`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinvoice-variant-1supported_actions). |
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
| `mode` | Conditional | (string or null) | How the invoice is collected, resolved when the draft was written. Values: `"buyer_initiated"`, `"automatic"`, `"external"`. `mode`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributescollection-variant-1mode), [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributescollection-variant-2mode), [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributescollection-variant-3mode). |
| `payment_method_id` | Conditional | Varies by condition | The saved card Flint charges. Present only with automatic. `null` when the draft will use the customer's default card, selected at issue. After issue it is the selected card. `payment_method_id`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributescollection-variant-1payment_method_id), [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributescollection-variant-2payment_method_id). |
| `payment_policy` | Conditional | Alternative shapes (see declared variants) | The payment options the hosted invoice page offers. Present only with buyer_initiated. `payment_policy`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributescollection-variant-1payment_policy). |

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.collection variant 1: `mode` = `"buyer_initiated"`

anyOf InvoiceCollectionPreviousAttributes; anyOf InvoiceCollectionBuyerInitiatedPreviousAttributes.

- Optional: `mode`, `payment_method_id`, `payment_policy`.
- Constraints for `mode`: Values: `"buyer_initiated"`.
- Constraints for `payment_method_id`: string or null or null.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.collection variant 2: `mode` = `"automatic"`

anyOf InvoiceCollectionPreviousAttributes; anyOf InvoiceCollectionAutomaticPreviousAttributes.

- Optional: `mode`, `payment_method_id`, `payment_policy`.
- Constraints for `mode`: Values: `"automatic"`.
- Constraints for `payment_method_id`: (string or null or null).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.collection variant 3: `mode` = `"external"`

anyOf InvoiceCollectionPreviousAttributes; anyOf InvoiceCollectionExternalPreviousAttributes.

- Optional: `mode`, `payment_method_id`, `payment_policy`.
- Constraints for `mode`: Values: `"external"`.
- Constraints for `payment_method_id`: string or null or null.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.collection variant 4

anyOf variant 2.

- Undeclared: `mode`, `payment_method_id`, `payment_policy`.
- Value shape: null. How this invoice is collected, resolved when the draft is written. Send this object back when updating its collection policy. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.collection variant 1.mode

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.collection variant 1.mode variant 1

anyOf group 1 variant 1: How the invoice is collected, resolved when the draft was written..

- Value shape: string. How the invoice is collected, resolved when the draft was written. Values: `"buyer_initiated"`, `"automatic"`, `"external"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.collection variant 1.mode variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the invoice is collected, resolved when the draft was written. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.collection variant 1.mode variant 3, 5

anyOf group 2 variant 1: How the invoice is collected, resolved when the draft was written.; anyOf group 3 variant 1.

- Value shape: string. How the invoice is collected, resolved when the draft was written. Values: `"buyer_initiated"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.collection variant 1.payment_method_id

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.collection variant 1.payment_method_id variant 1

anyOf variant 1: The saved card Flint charges. Present only with automatic. `null` when the draft will use the customer's default card, selected at issue. After issue it is the selected card..

- Value shape: (string or null). The saved card Flint charges. Present only with automatic. `null` when the draft will use the customer's default card, selected at issue. After issue it is the selected card. The saved card Flint charges. Present only with automatic. `null` when the draft will use the customer's default card, selected at issue. After issue it is the selected card. Example: `"pm_01KEZF7C0034B248TXXE4NXYFZ"`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.collection variant 1.payment_method_id variant 2

anyOf variant 2.

- Value shape: null. The saved card Flint charges. Present only with automatic. `null` when the draft will use the customer's default card, selected at issue. After issue it is the selected card. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.collection variant 1.payment_policy

The payment options the hosted invoice page offers. Present only with buyer_initiated.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `enabled_payment_options` | Conditional | Array of string or null | The payment options the buyer can use on the hosted invoice page. Send at least one. Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`. `enabled_payment_options`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributescollection-variant-1payment_policy-variant-1enabled_payment_options). |
| `payment_option_limits` | Conditional | Array of object or null | Caps by payment option and currency. Flint doesn't offer an option when the invoice total in that currency is above its max_total_money. `payment_option_limits`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributescollection-variant-1payment_policy-variant-1payment_option_limits). |
| `show_cost_comparison` | Conditional | boolean or null | Whether the buyer's invoice shows the estimated savings of a lower-cost payment option. Requires ach_debit and at least one of card, apple_pay, or google_pay. `show_cost_comparison`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributescollection-variant-1payment_policy-variant-1show_cost_comparison). |

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.collection variant 1.payment_policy variant 1

anyOf InvoicePaymentPolicyPreviousAttributes.

- Optional: `enabled_payment_options`, `payment_option_limits`, `show_cost_comparison`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.collection variant 1.payment_policy variant 2

anyOf variant 2.

- Undeclared: `enabled_payment_options`, `payment_option_limits`, `show_cost_comparison`.
- Value shape: null. The payment options the hosted invoice page offers. Present only with buyer_initiated. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.collection variant 1.payment_policy variant 1.enabled_payment_options

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.collection variant 1.payment_policy variant 1.enabled_payment_options variant 1

anyOf variant 1: The payment options the buyer can use on the hosted invoice page. Send at least one..

- Value shape: Array of string. The payment options the buyer can use on the hosted invoice page. Send at least one. The payment options the buyer can use on the hosted invoice page. Send at least one. maxItems: `5`. uniqueItems: `true`. Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.collection variant 1.payment_policy variant 1.enabled_payment_options variant 2

anyOf variant 2.

- Value shape: null. The payment options the buyer can use on the hosted invoice page. Send at least one. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.collection variant 1.payment_policy variant 1.payment_option_limits

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.collection variant 1.payment_policy variant 1.payment_option_limits variant 1

anyOf variant 1: Caps by payment option and currency. Flint doesn't offer an option when the invoice total in that currency is above its max_total_money..

- Value shape: Array of object. Caps by payment option and currency. Flint doesn't offer an option when the invoice total in that currency is above its max_total_money. Caps by payment option and currency. Flint doesn't offer an option when the invoice total in that currency is above its max_total_money. maxItems: `100`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.collection variant 1.payment_policy variant 1.payment_option_limits variant 2

anyOf variant 2.

- Value shape: null. Caps by payment option and currency. Flint doesn't offer an option when the invoice total in that currency is above its max_total_money. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.collection variant 1.payment_policy variant 1.payment_option_limits variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `max_total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The largest invoice total, in this currency, for which Flint offers the option. |
| `payment_option` | Optional | string or null | The payment option this cap applies to. Values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`. `payment_option`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributescollection-variant-1payment_policy-variant-1payment_option_limits-variant-1-fields-1payment_option). |

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.collection variant 1.payment_policy variant 1.payment_option_limits variant 1.[] fields 1.payment_option

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.collection variant 1.payment_policy variant 1.payment_option_limits variant 1.[] fields 1.payment_option variant 1

anyOf variant 1: The payment option this cap applies to..

- Value shape: string. The payment option this cap applies to. Values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.collection variant 1.payment_policy variant 1.payment_option_limits variant 1.[] fields 1.payment_option variant 2

anyOf variant 2.

- Value shape: null. The payment option this cap applies to. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.collection variant 1.payment_policy variant 1.show_cost_comparison

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.collection variant 1.payment_policy variant 1.show_cost_comparison variant 1

anyOf variant 1: Whether the buyer's invoice shows the estimated savings of a lower-cost payment option. Requires ach_debit and at least one of card, apple_pay, or google_pay..

- Value shape: boolean. Whether the buyer's invoice shows the estimated savings of a lower-cost payment option. Requires ach_debit and at least one of card, apple_pay, or google_pay. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.collection variant 1.payment_policy variant 1.show_cost_comparison variant 2

anyOf variant 2.

- Value shape: null. Whether the buyer's invoice shows the estimated savings of a lower-cost payment option. Requires ach_debit and at least one of card, apple_pay, or google_pay. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.collection variant 2.mode

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.collection variant 2.mode variant 1

anyOf group 1 variant 1: How the invoice is collected, resolved when the draft was written..

- Value shape: string. How the invoice is collected, resolved when the draft was written. Values: `"buyer_initiated"`, `"automatic"`, `"external"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.collection variant 2.mode variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the invoice is collected, resolved when the draft was written. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.collection variant 2.mode variant 3, 5

anyOf group 2 variant 1: How the invoice is collected, resolved when the draft was written.; anyOf group 3 variant 1.

- Value shape: string. How the invoice is collected, resolved when the draft was written. Values: `"automatic"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.collection variant 2.payment_method_id

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.collection variant 2.payment_method_id variant 1, 3

anyOf group 1 variant 1: The saved card Flint charges. Present only with automatic. `null` when the draft will use the customer's default card, selected at issue. After issue it is the selected card.; anyOf group 2 variant 1.

- Value shape: (string or null). The saved card Flint charges. Present only with automatic. `null` when the draft will use the customer's default card, selected at issue. After issue it is the selected card. The saved card Flint charges. Present only with automatic. `null` when the draft will use the customer's default card, selected at issue. After issue it is the selected card. Example: `"pm_01KEZF7C0034B248TXXE4NXYFZ"`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.collection variant 2.payment_method_id variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. The saved card Flint charges. Present only with automatic. `null` when the draft will use the customer's default card, selected at issue. After issue it is the selected card. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.collection variant 2.payment_policy

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.collection variant 1.payment_policy](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributescollection-variant-1payment_policy).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.collection variant 3.mode

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.collection variant 3.mode variant 1

anyOf group 1 variant 1: How the invoice is collected, resolved when the draft was written..

- Value shape: string. How the invoice is collected, resolved when the draft was written. Values: `"buyer_initiated"`, `"automatic"`, `"external"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.collection variant 3.mode variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the invoice is collected, resolved when the draft was written. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.collection variant 3.mode variant 3, 5

anyOf group 2 variant 1: How the invoice is collected, resolved when the draft was written.; anyOf group 3 variant 1.

- Value shape: string. How the invoice is collected, resolved when the draft was written. Values: `"external"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.collection variant 3.payment_method_id

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.collection variant 1.payment_method_id](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributescollection-variant-1payment_method_id).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.collection variant 3.payment_policy

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.collection variant 1.payment_policy](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributescollection-variant-1payment_policy).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.collection_block_status

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.collection_block_status](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinvoice-variant-1collection_block_status).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.created_at

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.created_at variant 1

anyOf variant 1: When the invoice was created..

- Value shape: string. When the invoice was created. When the invoice was created. Format: `date-time`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When the invoice was created. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.customer

Summary of the billed customer. Returned only with expand=customer. Present only when `expand` includes `customer`; `null` when expanded and there is no related customer.

Field definitions: [shared fields](BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributescustomer).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.customer variant 1

anyOf variant 1: Summary of the billed customer. Returned only with expand=customer. Present only when `expand` includes `customer`; `null` when expanded and there is no related customer.; anyOf ExpandedCustomerSummaryPreviousAttributes.

- Optional: `created_at`, `customer_id`, `email`, `name`, `phone`, `status`, `updated_at`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.customer variant 2, 3

anyOf variant 1: Summary of the billed customer. Returned only with expand=customer. Present only when `expand` includes `customer`; `null` when expanded and there is no related customer.; anyOf variant 2; anyOf variant 2.

- Undeclared: `created_at`, `customer_id`, `email`, `name`, `phone`, `status`, `updated_at`.
- Value shape: null. Summary of the billed customer. Returned only with expand=customer. Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.customer variant 1.created_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.customer variant 1.customer_id

Declared alternatives: [BuyerRefundPreviousAttributes.customer variant 1.customer_id](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributescustomer-variant-1customer_id).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.customer variant 1.email

Declared alternatives: [BuyerRefundPreviousAttributes.customer variant 1.email](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributescustomer-variant-1email).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.customer variant 1.name

Declared alternatives: [BuyerRefundPreviousAttributes.customer variant 1.name](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributescustomer-variant-1name).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.customer variant 1.phone

Declared alternatives: [BuyerRefundPreviousAttributes.customer variant 1.phone](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributescustomer-variant-1phone).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.customer variant 1.status

Declared alternatives: [BuyerRefundPreviousAttributes.customer variant 1.status](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributescustomer-variant-1status).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.customer variant 1.updated_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

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

- Value shape: Array of [InvoiceLateFeePreviousAttributes](../models/InvoiceLateFeePreviousAttributes.md#invoicelatefeepreviousattributes). Late fees assessed on this invoice, each with its paid, waived, written-off, and outstanding amounts. settlement_amounts.late_fee_money is their assessed total minus waivers. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.late_fees variant 2

anyOf variant 2.

- Value shape: null. Late fees assessed on this invoice, each with its paid, waived, written-off, and outstanding amounts. settlement_amounts.late_fee_money is their assessed total minus waivers. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.late_fees variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The assessed fee: the policy's fixed amount, or its percent of base_outstanding_money. |
| `assessed_at` | Optional | string or null | When the fee was assessed. `assessed_at`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributeslate_fees-variant-1-fields-1assessed_at). |
| `base_outstanding_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The unpaid balance the fee was calculated from, excluding late fees, captured at assessment. |
| `invoice_id` | Optional | string or null | Invoice that owns this late fee. `invoice_id`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributeslate_fees-variant-1-fields-1invoice_id). |
| `invoice_late_fee_id` | Optional | string or null | Flint invoice late fee ID. `invoice_late_fee_id`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributeslate_fees-variant-1-fields-1invoice_late_fee_id). |
| `invoice_schedule_entry_id` | Optional | string or null | The schedule entry this fee applies to. Absent on an invoice without a schedule, where the fee applies to the whole invoice. Each invoice, or each entry, takes at most one fee, even after a waiver. `invoice_schedule_entry_id`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributeslate_fees-variant-1-fields-1invoice_schedule_entry_id). |
| `late_fee_policy` | Optional | (object and Alternative shapes (see declared variants) or null) or null | The late fee policy from payment_terms_snapshot, copied when the fee was assessed. `null` when no policy was captured. `late_fee_policy`: [declared alternatives](../models/InvoiceLateFeePreviousAttributes.md#invoicelatefeepreviousattributeslate_fee_policy). |
| `outstanding_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | What is still owed on this fee: amount_money - paid_money - waived_money - written_off_money, never below zero. |
| `paid_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Payments applied to this fee, minus reversed payments. Dispute losses don't reduce it. |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. Items values: `"waive"`. `supported_actions`: [declared alternatives](../models/InvoiceLateFeePreviousAttributes.md#invoicelatefeepreviousattributessupported_actions). |
| `waived_at` | Optional | string or null | When the fee was waived. Absent unless it was waived. `waived_at`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributeslate_fees-variant-1-fields-1waived_at). |
| `waived_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The amount waived. A waiver removes the fee's whole outstanding amount at that time, so it is less than amount_money when part of the fee was already paid. |
| `waiver_reason_message` | Optional | string or null | Why the fee was waived, as given when waiving it. `waiver_reason_message`: [declared alternatives](../models/InvoiceLateFeePreviousAttributes.md#invoicelatefeepreviousattributeswaiver_reason_message). |
| `written_off_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The part of this fee written off when the invoice was marked uncollectible. |

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.late_fees variant 1.[] fields 1.assessed_at

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.late_fees variant 1.[] fields 1.assessed_at variant 1

anyOf variant 1: When the fee was assessed..

- Value shape: string. When the fee was assessed. When the fee was assessed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.late_fees variant 1.[] fields 1.assessed_at variant 2

anyOf variant 2.

- Value shape: null. When the fee was assessed. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.late_fees variant 1.[] fields 1.invoice_id

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.late_fees variant 1.[] fields 1.invoice_id variant 1

anyOf variant 1: Invoice that owns this late fee..

- Value shape: string. Invoice that owns this late fee. Invoice that owns this late fee. Example: `"inv_01KEZF7C00A5GEBMWHEAJFSAR4"`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.late_fees variant 1.[] fields 1.invoice_id variant 2

anyOf variant 2.

- Value shape: null. Invoice that owns this late fee. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.late_fees variant 1.[] fields 1.invoice_late_fee_id

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.late_fees variant 1.[] fields 1.invoice_late_fee_id variant 1

anyOf variant 1: Flint invoice late fee ID..

- Value shape: string. Flint invoice late fee ID. Flint invoice late fee ID. Example: `"inlf_01KEZF7C00NVR97MBH5AHR4W1X"`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.late_fees variant 1.[] fields 1.invoice_late_fee_id variant 2

anyOf variant 2.

- Value shape: null. Flint invoice late fee ID. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.late_fees variant 1.[] fields 1.invoice_schedule_entry_id

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.late_fees variant 1.[] fields 1.invoice_schedule_entry_id variant 1

anyOf variant 1: The schedule entry this fee applies to. Absent on an invoice without a schedule, where the fee applies to the whole invoice. Each invoice, or each entry, takes at most one fee, even after a waiver..

- Value shape: string. The schedule entry this fee applies to. Absent on an invoice without a schedule, where the fee applies to the whole invoice. Each invoice, or each entry, takes at most one fee, even after a waiver. The schedule entry this fee applies to. Absent on an invoice without a schedule, where the fee applies to the whole invoice. Each invoice, or each entry, takes at most one fee, even after a waiver. Example: `"invse_01KEZF7C006JCPQBD8VZ0RNT6R"`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.late_fees variant 1.[] fields 1.invoice_schedule_entry_id variant 2

anyOf variant 2.

- Value shape: null. The schedule entry this fee applies to. Absent on an invoice without a schedule, where the fee applies to the whole invoice. Each invoice, or each entry, takes at most one fee, even after a waiver. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.late_fees variant 1.[] fields 1.late_fee_policy

Declared alternatives: [InvoiceLateFeePreviousAttributes.late_fee_policy](../models/InvoiceLateFeePreviousAttributes.md#invoicelatefeepreviousattributeslate_fee_policy).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.late_fees variant 1.[] fields 1.supported_actions

Declared alternatives: [InvoiceLateFeePreviousAttributes.supported_actions](../models/InvoiceLateFeePreviousAttributes.md#invoicelatefeepreviousattributessupported_actions).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.late_fees variant 1.[] fields 1.waived_at

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.late_fees variant 1.[] fields 1.waived_at variant 1

anyOf variant 1: When the fee was waived. Absent unless it was waived..

- Value shape: string. When the fee was waived. Absent unless it was waived. When the fee was waived. Absent unless it was waived. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.late_fees variant 1.[] fields 1.waived_at variant 2

anyOf variant 2.

- Value shape: null. When the fee was waived. Absent unless it was waived. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.late_fees variant 1.[] fields 1.waiver_reason_message

Declared alternatives: [InvoiceLateFeePreviousAttributes.waiver_reason_message](../models/InvoiceLateFeePreviousAttributes.md#invoicelatefeepreviousattributeswaiver_reason_message).

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

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.order

Summary of the backing order. Returned only with expand=order. Present only when `expand` includes `order`; `null` when expanded and there is no related order.

Field definitions: [shared fields](BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.order variant 1

anyOf variant 1: Summary of the backing order. Returned only with expand=order. Present only when `expand` includes `order`; `null` when expanded and there is no related order.; anyOf ExpandedOrderSummaryPreviousAttributes.

- Optional: `buyer_contact`, `closed_at`, `closed_reason`, `created_at`, `customer_id`, `deferred_promotions`, `fulfillment_status`, `governing_delivery_selection_id`, `order_id`, `order_number`, `paid_at`, `payment_intent_ids`, `payment_status`, `pricing_amounts`, `refund_status`, `settlement_amounts`, `status`, `supported_actions`, `updated_at`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.order variant 2, 3

anyOf variant 1: Summary of the backing order. Returned only with expand=order. Present only when `expand` includes `order`; `null` when expanded and there is no related order.; anyOf variant 2; anyOf variant 2.

- Undeclared: `buyer_contact`, `closed_at`, `closed_reason`, `created_at`, `customer_id`, `deferred_promotions`, `fulfillment_status`, `governing_delivery_selection_id`, `order_id`, `order_number`, `paid_at`, `payment_intent_ids`, `payment_status`, `pricing_amounts`, `refund_status`, `settlement_amounts`, `status`, `supported_actions`, `updated_at`.
- Value shape: null. Summary of the backing order. Returned only with expand=order. Present only when `expand` includes `order`; `null` when expanded and there is no related order. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.order variant 1.buyer_contact

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.buyer_contact](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1buyer_contact).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.order variant 1.closed_at

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.closed_at](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1closed_at).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.order variant 1.closed_reason

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.closed_reason](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1closed_reason).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.order variant 1.created_at

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.created_at](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1created_at).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.order variant 1.customer_id

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.customer_id](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1customer_id).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.order variant 1.deferred_promotions

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.deferred_promotions](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1deferred_promotions).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.order variant 1.fulfillment_status

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.fulfillment_status](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1fulfillment_status).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.order variant 1.governing_delivery_selection_id

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.governing_delivery_selection_id](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1governing_delivery_selection_id).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.order variant 1.order_id

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.order_id](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1order_id).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.order variant 1.order_number

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.order_number](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1order_number).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.order variant 1.paid_at

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.paid_at](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1paid_at).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.order variant 1.payment_intent_ids

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.payment_intent_ids](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1payment_intent_ids).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.order variant 1.payment_status

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.payment_status](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1payment_status).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.order variant 1.pricing_amounts

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.pricing_amounts](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1pricing_amounts).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.order variant 1.refund_status

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.refund_status](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1refund_status).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.order variant 1.settlement_amounts

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.settlement_amounts](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1settlement_amounts).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.order variant 1.status

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.status](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1status).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.order variant 1.supported_actions

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.supported_actions](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1supported_actions).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.order variant 1.updated_at

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.updated_at](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1updated_at).

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
| `due_date` | Conditional | string or null | Calendar due date in YYYY-MM-DD format, interpreted in the invoice timezone (UTC when absent). Present only with date. The top-level due_date is the effective due date for every type. `due_date`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributespayment_due-variant-1due_date). |
| `invoice_payment_term_id` | Conditional | string or null | The payment term applied, captured in payment_terms_snapshot. Present only with payment_terms. `invoice_payment_term_id`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributespayment_due-variant-1invoice_payment_term_id). |
| `type` | Conditional | (string or null) | How the due date was set. Values: `"none"`, `"date"`, `"payment_terms"`. `type`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributespayment_due-variant-1type), [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributespayment_due-variant-2type), [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributespayment_due-variant-3type). |

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_due variant 1: `type` = `"none"`

anyOf InvoicePaymentDuePreviousAttributes; anyOf InvoicePaymentDueNonePreviousAttributes.

- Optional: `due_date`, `invoice_payment_term_id`, `type`.
- Constraints for `type`: Values: `"none"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_due variant 2: `type` = `"date"`

anyOf InvoicePaymentDuePreviousAttributes; anyOf InvoicePaymentDueDatePreviousAttributes.

- Optional: `due_date`, `invoice_payment_term_id`, `type`.
- Constraints for `type`: Values: `"date"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_due variant 3: `type` = `"payment_terms"`

anyOf InvoicePaymentDuePreviousAttributes; anyOf InvoicePaymentDuePaymentTermsPreviousAttributes.

- Optional: `due_date`, `invoice_payment_term_id`, `type`.
- Constraints for `type`: Values: `"payment_terms"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_due variant 4

anyOf variant 2.

- Undeclared: `due_date`, `invoice_payment_term_id`, `type`.
- Value shape: null. The resolved due-date policy. Send this object back when updating the draft; payment_terms captures the term's current revision again. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_due variant 1.due_date

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_due variant 1.due_date variant 1

anyOf variant 1: Calendar due date in YYYY-MM-DD format, interpreted in the invoice timezone (UTC when absent). Present only with date. The top-level due_date is the effective due date for every type..

- Value shape: string. Calendar due date in YYYY-MM-DD format, interpreted in the invoice timezone (UTC when absent). Present only with date. The top-level due_date is the effective due date for every type. Calendar due date in YYYY-MM-DD format, interpreted in the invoice timezone (UTC when absent). Present only with date. The top-level due_date is the effective due date for every type. Format: `date`. Example: `"2026-08-02"`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_due variant 1.due_date variant 2

anyOf variant 2.

- Value shape: null. Calendar due date in YYYY-MM-DD format, interpreted in the invoice timezone (UTC when absent). Present only with date. The top-level due_date is the effective due date for every type. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_due variant 1.invoice_payment_term_id

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_due variant 1.invoice_payment_term_id variant 1

anyOf variant 1: The payment term applied, captured in payment_terms_snapshot. Present only with payment_terms..

- Value shape: string. The payment term applied, captured in payment_terms_snapshot. Present only with payment_terms. The payment term applied, captured in payment_terms_snapshot. Present only with payment_terms. Example: `"ipt_01KEZF7C0064N1V301BBMQ37R4"`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_due variant 1.invoice_payment_term_id variant 2

anyOf variant 2.

- Value shape: null. The payment term applied, captured in payment_terms_snapshot. Present only with payment_terms. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_due variant 1.type

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_due variant 1.type variant 1

anyOf group 1 variant 1: How the due date was set..

- Value shape: string. How the due date was set. Values: `"none"`, `"date"`, `"payment_terms"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_due variant 1.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the due date was set. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_due variant 1.type variant 3, 5

anyOf group 2 variant 1: How the due date was set.; anyOf group 3 variant 1.

- Value shape: string. How the due date was set. Values: `"none"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_due variant 2.due_date

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_due variant 1.due_date](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributespayment_due-variant-1due_date).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_due variant 2.invoice_payment_term_id

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_due variant 1.invoice_payment_term_id](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributespayment_due-variant-1invoice_payment_term_id).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_due variant 2.type

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_due variant 2.type variant 1

anyOf group 1 variant 1: How the due date was set..

- Value shape: string. How the due date was set. Values: `"none"`, `"date"`, `"payment_terms"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_due variant 2.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the due date was set. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_due variant 2.type variant 3, 5

anyOf group 2 variant 1: How the due date was set.; anyOf group 3 variant 1.

- Value shape: string. How the due date was set. Values: `"date"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_due variant 3.due_date

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_due variant 1.due_date](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributespayment_due-variant-1due_date).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_due variant 3.invoice_payment_term_id

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_due variant 1.invoice_payment_term_id](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributespayment_due-variant-1invoice_payment_term_id).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_due variant 3.type

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_due variant 3.type variant 1

anyOf group 1 variant 1: How the due date was set..

- Value shape: string. How the due date was set. Values: `"none"`, `"date"`, `"payment_terms"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_due variant 3.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the due date was set. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_due variant 3.type variant 3, 5

anyOf group 2 variant 1: How the due date was set.; anyOf group 3 variant 1.

- Value shape: string. How the due date was set. Values: `"payment_terms"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot

The payment term captured on the draft, with its due date rule and late fee policy. Later changes to the payment term don't affect this invoice.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Conditional | object and Alternative shapes (see declared variants) or null | Rule used to calculate the invoice's due date when it is issued. `calculation`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributespayment_terms_snapshot-variant-1calculation). |
| `invoice_payment_term_id` | Conditional | string or null | ID of the payment term captured on this invoice. `invoice_payment_term_id`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributespayment_terms_snapshot-variant-1invoice_payment_term_id). |
| `late_fee_policy` | Conditional | object and Alternative shapes (see declared variants) or null | One-time late fee policy captured with this term. Absent when no late fee policy applies. `late_fee_policy`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributespayment_terms_snapshot-variant-1late_fee_policy). |
| `name` | Conditional | string or null | Name of the payment term shown on invoices. `name`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributespayment_terms_snapshot-variant-1name). |
| `version` | Conditional | integer or null | Version of the invoice payment term captured in this snapshot. `version`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributespayment_terms_snapshot-variant-1version). |

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1

anyOf InvoicePaymentTermsSnapshotPreviousAttributes.

- Optional: `calculation`, `invoice_payment_term_id`, `late_fee_policy`, `name`, `version`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 2

anyOf variant 2.

- Undeclared: `calculation`, `invoice_payment_term_id`, `late_fee_policy`, `name`, `version`.
- Value shape: null. The payment term captured on the draft, with its due date rule and late fee policy. Later changes to the payment term don't affect this invoice. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.calculation

Rule used to calculate the invoice's due date when it is issued.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `day` | Conditional | integer or null | Day of the month. Later days clamp to the last day of the month. `day`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributespayment_terms_snapshot-variant-1calculation-variant-1day). |
| `days` | Conditional | integer or null | Calendar days after issue for net_days, or after the issue month's last day for days_after_month_end. Required only for those types. `days`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributespayment_terms_snapshot-variant-1calculation-variant-1days). |
| `type` | Conditional | (string or null) | How issue calculates the invoice's due date in the invoice timezone. Values: `"on_receipt"`, `"net_days"`, `"day_of_month"`, `"day_of_next_month"`, `"days_after_month_end"`. `type`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributespayment_terms_snapshot-variant-1calculation-variant-1type), [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributespayment_terms_snapshot-variant-1calculation-variant-2type), [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributespayment_terms_snapshot-variant-1calculation-variant-3type), [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributespayment_terms_snapshot-variant-1calculation-variant-4type), [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributespayment_terms_snapshot-variant-1calculation-variant-5type). |

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.calculation variant 1: `type` = `"on_receipt"`

anyOf InvoicePaymentTermCalculationPreviousAttributes; anyOf InvoicePaymentTermCalculationOnReceiptPreviousAttributes.

- Optional: `day`, `days`, `type`.
- Constraints for `type`: Values: `"on_receipt"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.calculation variant 2: `type` = `"net_days"`

anyOf InvoicePaymentTermCalculationPreviousAttributes; anyOf InvoicePaymentTermCalculationNetDaysPreviousAttributes.

- Optional: `day`, `days`, `type`.
- Constraints for `type`: Values: `"net_days"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.calculation variant 3: `type` = `"days_after_month_end"`

anyOf InvoicePaymentTermCalculationPreviousAttributes; anyOf InvoicePaymentTermCalculationDaysAfterMonthEndPreviousAttributes.

- Optional: `day`, `days`, `type`.
- Constraints for `type`: Values: `"days_after_month_end"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.calculation variant 4: `type` = `"day_of_month"`

anyOf InvoicePaymentTermCalculationPreviousAttributes; anyOf InvoicePaymentTermCalculationDayOfMonthPreviousAttributes.

- Optional: `day`, `days`, `type`.
- Constraints for `type`: Values: `"day_of_month"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.calculation variant 5: `type` = `"day_of_next_month"`

anyOf InvoicePaymentTermCalculationPreviousAttributes; anyOf InvoicePaymentTermCalculationDayOfNextMonthPreviousAttributes.

- Optional: `day`, `days`, `type`.
- Constraints for `type`: Values: `"day_of_next_month"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.calculation variant 6

anyOf variant 2.

- Undeclared: `day`, `days`, `type`.
- Value shape: null. Rule used to calculate the invoice's due date when it is issued. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.calculation variant 1.day

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.calculation variant 1.day variant 1

anyOf variant 1: Day of the month. Later days clamp to the last day of the month..

- Value shape: integer. Day of the month. Later days clamp to the last day of the month. Day of the month. Later days clamp to the last day of the month. Format: `int32`. minimum: `1`. maximum: `31`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.calculation variant 1.day variant 2

anyOf variant 2.

- Value shape: null. Day of the month. Later days clamp to the last day of the month. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.calculation variant 1.days

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.calculation variant 1.days variant 1

anyOf variant 1: Calendar days after issue for net_days, or after the issue month's last day for days_after_month_end. Required only for those types..

- Value shape: integer. Calendar days after issue for net_days, or after the issue month's last day for days_after_month_end. Required only for those types. Calendar days after issue for net_days, or after the issue month's last day for days_after_month_end. Required only for those types. Format: `int32`. minimum: `0`. maximum: `365`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.calculation variant 1.days variant 2

anyOf variant 2.

- Value shape: null. Calendar days after issue for net_days, or after the issue month's last day for days_after_month_end. Required only for those types. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.calculation variant 1.type

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.calculation variant 1.type variant 1

anyOf group 1 variant 1: How issue calculates the invoice's due date in the invoice timezone..

- Value shape: string. How issue calculates the invoice's due date in the invoice timezone. Values: `"on_receipt"`, `"net_days"`, `"day_of_month"`, `"day_of_next_month"`, `"days_after_month_end"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.calculation variant 1.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. How issue calculates the invoice's due date in the invoice timezone. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.calculation variant 1.type variant 3

anyOf group 2 variant 1: How issue calculates the invoice's due date in the invoice timezone..

- Value shape: string. How issue calculates the invoice's due date in the invoice timezone. Values: `"on_receipt"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.calculation variant 2.day

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.calculation variant 1.day](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributespayment_terms_snapshot-variant-1calculation-variant-1day).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.calculation variant 2.days

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.calculation variant 1.days](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributespayment_terms_snapshot-variant-1calculation-variant-1days).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.calculation variant 2.type

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.calculation variant 2.type variant 1

anyOf group 1 variant 1: How issue calculates the invoice's due date in the invoice timezone..

- Value shape: string. How issue calculates the invoice's due date in the invoice timezone. Values: `"on_receipt"`, `"net_days"`, `"day_of_month"`, `"day_of_next_month"`, `"days_after_month_end"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.calculation variant 2.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. How issue calculates the invoice's due date in the invoice timezone. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.calculation variant 2.type variant 3

anyOf group 2 variant 1: How issue calculates the invoice's due date in the invoice timezone..

- Value shape: string. How issue calculates the invoice's due date in the invoice timezone. Values: `"net_days"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.calculation variant 3.day

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.calculation variant 1.day](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributespayment_terms_snapshot-variant-1calculation-variant-1day).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.calculation variant 3.days

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.calculation variant 1.days](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributespayment_terms_snapshot-variant-1calculation-variant-1days).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.calculation variant 3.type

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.calculation variant 3.type variant 1

anyOf group 1 variant 1: How issue calculates the invoice's due date in the invoice timezone..

- Value shape: string. How issue calculates the invoice's due date in the invoice timezone. Values: `"on_receipt"`, `"net_days"`, `"day_of_month"`, `"day_of_next_month"`, `"days_after_month_end"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.calculation variant 3.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. How issue calculates the invoice's due date in the invoice timezone. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.calculation variant 3.type variant 3

anyOf group 2 variant 1: How issue calculates the invoice's due date in the invoice timezone..

- Value shape: string. How issue calculates the invoice's due date in the invoice timezone. Values: `"days_after_month_end"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.calculation variant 4.day

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.calculation variant 1.day](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributespayment_terms_snapshot-variant-1calculation-variant-1day).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.calculation variant 4.days

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.calculation variant 1.days](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributespayment_terms_snapshot-variant-1calculation-variant-1days).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.calculation variant 4.type

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.calculation variant 4.type variant 1

anyOf group 1 variant 1: How issue calculates the invoice's due date in the invoice timezone..

- Value shape: string. How issue calculates the invoice's due date in the invoice timezone. Values: `"on_receipt"`, `"net_days"`, `"day_of_month"`, `"day_of_next_month"`, `"days_after_month_end"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.calculation variant 4.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. How issue calculates the invoice's due date in the invoice timezone. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.calculation variant 4.type variant 3

anyOf group 2 variant 1: How issue calculates the invoice's due date in the invoice timezone..

- Value shape: string. How issue calculates the invoice's due date in the invoice timezone. Values: `"day_of_month"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.calculation variant 5.day

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.calculation variant 1.day](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributespayment_terms_snapshot-variant-1calculation-variant-1day).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.calculation variant 5.days

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.calculation variant 1.days](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributespayment_terms_snapshot-variant-1calculation-variant-1days).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.calculation variant 5.type

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.calculation variant 5.type variant 1

anyOf group 1 variant 1: How issue calculates the invoice's due date in the invoice timezone..

- Value shape: string. How issue calculates the invoice's due date in the invoice timezone. Values: `"on_receipt"`, `"net_days"`, `"day_of_month"`, `"day_of_next_month"`, `"days_after_month_end"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.calculation variant 5.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. How issue calculates the invoice's due date in the invoice timezone. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.calculation variant 5.type variant 3

anyOf group 2 variant 1: How issue calculates the invoice's due date in the invoice timezone..

- Value shape: string. How issue calculates the invoice's due date in the invoice timezone. Values: `"day_of_next_month"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.invoice_payment_term_id

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.invoice_payment_term_id variant 1

anyOf variant 1: ID of the payment term captured on this invoice..

- Value shape: string. ID of the payment term captured on this invoice. ID of the payment term captured on this invoice. Example: `"ipt_01KEZF7C0064N1V301BBMQ37R4"`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.invoice_payment_term_id variant 2

anyOf variant 2.

- Value shape: null. ID of the payment term captured on this invoice. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.late_fee_policy

One-time late fee policy captured with this term. Absent when no late fee policy applies.

Field definitions: [shared fields](InvoiceLateFeePreviousAttributes.md#invoicelatefeepreviousattributeslate_fee_policy).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.late_fee_policy variant 1: `type` = `"fixed"`

anyOf InvoiceLateFeePolicyPreviousAttributes; anyOf InvoiceLateFeePolicyFixedPreviousAttributes.

- Optional: `amount_money`, `application_mode`, `grace_period_days`, `percent`, `type`.
- Constraints for `type`: Values: `"fixed"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.late_fee_policy variant 2: `type` = `"percentage"`

anyOf InvoiceLateFeePolicyPreviousAttributes; anyOf InvoiceLateFeePolicyPercentagePreviousAttributes.

- Optional: `amount_money`, `application_mode`, `grace_period_days`, `percent`, `type`.
- Constraints for `type`: Values: `"percentage"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.late_fee_policy variant 3

anyOf variant 2.

- Undeclared: `amount_money`, `application_mode`, `grace_period_days`, `percent`, `type`.
- Value shape: null. One-time late fee policy captured with this term. Absent when no late fee policy applies. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.late_fee_policy variant 1.application_mode

Declared alternatives: [InvoiceLateFeePreviousAttributes.late_fee_policy variant 1.application_mode](../models/InvoiceLateFeePreviousAttributes.md#invoicelatefeepreviousattributeslate_fee_policy-variant-1application_mode).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.late_fee_policy variant 1.grace_period_days

Declared alternatives: [InvoiceLateFeePreviousAttributes.late_fee_policy variant 1.grace_period_days](../models/InvoiceLateFeePreviousAttributes.md#invoicelatefeepreviousattributeslate_fee_policy-variant-1grace_period_days).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.late_fee_policy variant 1.percent

Declared alternatives: [InvoiceLateFeePreviousAttributes.late_fee_policy variant 1.percent](../models/InvoiceLateFeePreviousAttributes.md#invoicelatefeepreviousattributeslate_fee_policy-variant-1percent).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.late_fee_policy variant 1.type

Declared alternatives: [InvoiceLateFeePreviousAttributes.late_fee_policy variant 1.type](../models/InvoiceLateFeePreviousAttributes.md#invoicelatefeepreviousattributeslate_fee_policy-variant-1type).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.late_fee_policy variant 2.application_mode

Declared alternatives: [InvoiceLateFeePreviousAttributes.late_fee_policy variant 1.application_mode](../models/InvoiceLateFeePreviousAttributes.md#invoicelatefeepreviousattributeslate_fee_policy-variant-1application_mode).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.late_fee_policy variant 2.grace_period_days

Declared alternatives: [InvoiceLateFeePreviousAttributes.late_fee_policy variant 1.grace_period_days](../models/InvoiceLateFeePreviousAttributes.md#invoicelatefeepreviousattributeslate_fee_policy-variant-1grace_period_days).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.late_fee_policy variant 2.percent

Declared alternatives: [InvoiceLateFeePreviousAttributes.late_fee_policy variant 1.percent](../models/InvoiceLateFeePreviousAttributes.md#invoicelatefeepreviousattributeslate_fee_policy-variant-1percent).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.late_fee_policy variant 2.type

Declared alternatives: [InvoiceLateFeePreviousAttributes.late_fee_policy variant 2.type](../models/InvoiceLateFeePreviousAttributes.md#invoicelatefeepreviousattributeslate_fee_policy-variant-2type).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.name

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.name variant 1

anyOf variant 1: Name of the payment term shown on invoices..

- Value shape: string. Name of the payment term shown on invoices. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.name variant 2

anyOf variant 2.

- Value shape: null. Name of the payment term shown on invoices. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.version

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.version variant 1

anyOf variant 1: Version of the invoice payment term captured in this snapshot..

- Value shape: integer. Version of the invoice payment term captured in this snapshot. Version of the invoice payment term captured in this snapshot. Format: `int32`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.version variant 2

anyOf variant 2.

- Value shape: null. Version of the invoice payment term captured in this snapshot. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.po_number

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.po_number variant 1

anyOf variant 1: The buyer's purchase order number, printed on the invoice and PDF. It cannot change after issue. `null` when unset..

- Value shape: (string or null). The buyer's purchase order number, printed on the invoice and PDF. It cannot change after issue. `null` when unset. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.po_number variant 2

anyOf variant 2.

- Value shape: null. The buyer's purchase order number, printed on the invoice and PDF. It cannot change after issue. `null` when unset. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.pricing_amounts

The invoice pricing totals, frozen at issue. A draft previews the backing order. total_money excludes late fees, which are in settlement_amounts.late_fee_money.

Field definitions: [shared fields](BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1pricing_amounts).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.pricing_amounts variant 1

anyOf PricingAmountsPreviousAttributes.

- Optional: `additive_tax_money`, `charge_money`, `discount_money`, `inclusive_tax_money`, `requested_tip_money`, `subtotal_money`, `tax_money`, `total_money`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.pricing_amounts variant 2

anyOf variant 2.

- Undeclared: `additive_tax_money`, `charge_money`, `discount_money`, `inclusive_tax_money`, `requested_tip_money`, `subtotal_money`, `tax_money`, `total_money`.
- Value shape: null. The invoice pricing totals, frozen at issue. A draft previews the backing order. total_money excludes late fees, which are in settlement_amounts.late_fee_money. 

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

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.refund_status](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinvoice-variant-1refund_status).

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

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.remit_to_address

Where the buyer sends offline payments, shown on the invoice. Defaults to the invoice settings remit-to address.

Field definitions: [shared fields](TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.remit_to_address variant 1

anyOf AddressPreviousAttributes.

- Optional: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.remit_to_address variant 2

anyOf variant 2.

- Undeclared: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.
- Value shape: null. Where the buyer sends offline payments, shown on the invoice. Defaults to the invoice settings remit-to address. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.remit_to_address variant 1.city

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.city](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1city).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.remit_to_address variant 1.country

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.country](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1country).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.remit_to_address variant 1.line1

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line1](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line1).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.remit_to_address variant 1.line2

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line2](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line2).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.remit_to_address variant 1.postal_code

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.postal_code](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1postal_code).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.remit_to_address variant 1.state

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.state](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1state).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.schedule_entries

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.schedule_entries variant 1

anyOf variant 1: The payment schedule, in schedule order. Always [] when the invoice has no schedule and is collected in one balance..

- Value shape: Array of [InvoiceScheduleEntryPreviousAttributes](../models/InvoiceScheduleEntryPreviousAttributes.md#invoicescheduleentrypreviousattributes). The payment schedule, in schedule order. Always [] when the invoice has no schedule and is collected in one balance. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.schedule_entries variant 2

anyOf variant 2.

- Value shape: null. The payment schedule, in schedule order. Always [] when the invoice has no schedule and is collected in one balance. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.schedule_entries variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_specification` | Optional | object and Alternative shapes (see declared variants) or null | How the entry's amount is set: a fixed amount, a percent of the invoice total, or the remaining balance. `amount_specification`: [declared alternatives](../models/InvoiceScheduleEntryPreviousAttributes.md#invoicescheduleentrypreviousattributesamount_specification). |
| `credited_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Credit note credit allocated to this entry, minus reversed allocations. |
| `due` | Optional | object and Alternative shapes (see declared variants) or null | When the entry is due. `due`: [declared alternatives](../models/InvoiceScheduleEntryPreviousAttributes.md#invoicescheduleentrypreviousattributesdue). |
| `invoice_schedule_entry_id` | Optional | string or null | Flint invoice schedule entry ID. Kept across draft edits that send it back with the entry. `invoice_schedule_entry_id`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesschedule_entries-variant-1-fields-1invoice_schedule_entry_id). |
| `kind` | Optional | string or null | The entry's role in the schedule. Values: `"deposit"`, `"installment"`, `"balance"`. `kind`: [declared alternatives](../models/InvoiceScheduleEntryPreviousAttributes.md#invoicescheduleentrypreviousattributeskind). |
| `outstanding_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | What is still owed on this entry, including its unpaid late fee, never below zero. |
| `paid_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Payments applied to this entry, minus reversed payments, including payments toward its late fee. Dispute losses don't reduce it. It can exceed total_money when the entry carries a late fee. |
| `status` | Optional | string or null | The entry's payment status, computed when the invoice is read. It follows the entry's balance and due time, not the invoice's status. Values: `"pending"`, `"due"`, `"partially_satisfied"`, `"satisfied"`, `"overdue"`. `status`: [declared alternatives](../models/InvoiceScheduleEntryPreviousAttributes.md#invoicescheduleentrypreviousattributesstatus). |
| `total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The entry's share of the invoice total, resolved from amount_specification against pricing_amounts.total_money. Recomputed on draft edits and fixed at issue. Excludes late fees. |
| `written_off_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The part of this entry written off when the invoice was marked uncollectible, including its unpaid late fee. |

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.schedule_entries variant 1.[] fields 1.amount_specification

Declared alternatives: [InvoiceScheduleEntryPreviousAttributes.amount_specification](../models/InvoiceScheduleEntryPreviousAttributes.md#invoicescheduleentrypreviousattributesamount_specification).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.schedule_entries variant 1.[] fields 1.due

Declared alternatives: [InvoiceScheduleEntryPreviousAttributes.due](../models/InvoiceScheduleEntryPreviousAttributes.md#invoicescheduleentrypreviousattributesdue).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.schedule_entries variant 1.[] fields 1.invoice_schedule_entry_id

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.schedule_entries variant 1.[] fields 1.invoice_schedule_entry_id variant 1

anyOf variant 1: Flint invoice schedule entry ID. Kept across draft edits that send it back with the entry..

- Value shape: string. Flint invoice schedule entry ID. Kept across draft edits that send it back with the entry. Flint invoice schedule entry ID. Kept across draft edits that send it back with the entry. Example: `"invse_01KEZF7C006JCPQBD8VZ0RNT6R"`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.schedule_entries variant 1.[] fields 1.invoice_schedule_entry_id variant 2

anyOf variant 2.

- Value shape: null. Flint invoice schedule entry ID. Kept across draft edits that send it back with the entry. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.schedule_entries variant 1.[] fields 1.kind

Declared alternatives: [InvoiceScheduleEntryPreviousAttributes.kind](../models/InvoiceScheduleEntryPreviousAttributes.md#invoicescheduleentrypreviousattributeskind).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.schedule_entries variant 1.[] fields 1.status

Declared alternatives: [InvoiceScheduleEntryPreviousAttributes.status](../models/InvoiceScheduleEntryPreviousAttributes.md#invoicescheduleentrypreviousattributesstatus).

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

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.settlement_amounts

Payments, refunds, write-offs, allocated credit notes, late fees, and the remaining invoice balance. What is still owed: pricing_amounts.total_money + late_fee_money - paid_money - credited_money - written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided invoices; equal to pricing_amounts.total_money on a draft. Refunds and dispute losses don't change it.

Field definitions: [shared fields](CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinvoice-variant-1settlement_amounts).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.settlement_amounts variant 1

anyOf InvoiceSettlementAmountsPreviousAttributes.

- Optional: `credited_money`, `currently_due_money`, `late_fee_money`, `net_collected_money`, `outstanding_money`, `paid_money`, `refunded_money`, `written_off_money`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.settlement_amounts variant 2

anyOf variant 2.

- Undeclared: `credited_money`, `currently_due_money`, `late_fee_money`, `net_collected_money`, `outstanding_money`, `paid_money`, `refunded_money`, `written_off_money`.
- Value shape: null. Payments, refunds, write-offs, allocated credit notes, late fees, and the remaining invoice balance. What is still owed: pricing_amounts.total_money + late_fee_money - paid_money - credited_money - written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided invoices; equal to pricing_amounts.total_money on a draft. Refunds and dispute losses don't change it. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot

The billing content of the invoice: line items, discounts, charges, tip, and tax. A draft previews the backing order; issue freezes it, and later order changes don't reach an issued invoice.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_address` | Conditional | Alternative shapes (see declared variants) | Billing address captured on the invoice. Kept after the customer is deleted, because an issued invoice must keep it. `billing_address`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1billing_address). |
| `buyer_note` | Conditional | string or null | The backing order's buyer note, captured on the invoice. `buyer_note`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1buyer_note). |
| `buyer_tax_identity` | Conditional | Alternative shapes (see declared variants) or null | Buyer tax identity for this invoice. Drafts preview the customer's current identity. Issue freezes the identity, which later profile edits and customer deletion preserve. `null` when no buyer tax identity is available, including after customer deletion while the invoice is a draft. `buyer_tax_identity`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1buyer_tax_identity). |
| `charges` | Conditional | Array of [OrderChargePreviousAttributes](../models/OrderChargePreviousAttributes.md#orderchargepreviousattributes) or null | The backing order's service charges, frozen at issue. `charges`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1charges). |
| `customer_display_name` | Conditional | string or null | Buyer name captured on the invoice. Kept after the customer is deleted, because an issued invoice must keep it. `customer_display_name`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1customer_display_name). |
| `customer_email` | Conditional | string or null | Buyer email captured on the invoice. `customer_email`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1customer_email). |
| `discounts` | Conditional | Array of object or null | The discounts applied to the backing order, frozen at issue. `discounts`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1discounts). |
| `internal_note` | Conditional | string or null | The backing order's internal note, captured on the invoice. Merchant reads only; buyer reads leave it out. `internal_note`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1internal_note). |
| `line_items` | Conditional | Array of object or null | The billed line items, frozen at issue. A draft previews the backing order's lines. `line_items`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1line_items). |
| `merchant_display_name` | Conditional | string or null | Your business name as shown on the invoice. A draft shows your current name; issue freezes it. `merchant_display_name`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1merchant_display_name). |
| `requested_tip` | Conditional | Alternative shapes (see declared variants) | The tip requested on the backing order, frozen at issue. Absent when none was requested. `requested_tip`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1requested_tip). |
| `seller_tax_identity` | Conditional | Alternative shapes (see declared variants) or null | Identity frozen on the source invoice at issue. Later profile edits do not change this document. `null` when no seller tax identity was captured. `seller_tax_identity`: [declared alternatives](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesseller_tax_identity). |
| `tax_breakdowns` | Conditional | Array of (object and Alternative shapes (see declared variants)) or null | Tax jurisdiction rows for this invoice. A draft previews the backing order's current rows; issue freezes them, and the API, hosted invoice, and PDF share the frozen rows. External tax produces these rows, and so does automatic tax outside the US, one per national or provincial tax. US automatic tax doesn't, so a US automatic-tax invoice reports its tax in pricing_amounts and each line's tax_money. On a newly issued external-tax invoice, rows sum to Invoice.pricing_amounts.tax_money, and rows with price_mode inclusive sum to Invoice.pricing_amounts.inclusive_tax_money. A row's order_line_item_id matches the same field on InvoiceLineItem; order_charge_id names a charge in charges. Always [] when no tax rows apply. Some older external-tax invoices have no frozen rows. `tax_breakdowns`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1tax_breakdowns). |
| `tax_currency_conversions` | Conditional | Array of [TaxCurrencyConversionPreviousAttributes](../models/TaxCurrencyConversionPreviousAttributes.md#taxcurrencyconversionpreviousattributes) or null | VAT stated in the currency of the country that charges it, one entry per currency, frozen at issue. EU member states require their national currency and the UK requires sterling. Each entry gives the converted VAT, the converted taxable amount, and the rate with its source and date. Present for VAT above zero charged by an EU member state or the UK; always [] otherwise, including reverse charge, invoices in that currency already, and invoices issued before conversions were recorded. The invoice PDF prints the same figures. `tax_currency_conversions`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1tax_currency_conversions). |
| `tax_exemption` | Conditional | Alternative shapes (see declared variants) | Exemption assessment captured on this invoice. A draft previews the backing order's assessment; issue freezes it. Omitted when no assessment was recorded, including on older invoices. Buyer views omit evidence_reference. An exemption and a reverse charge never apply to the same invoice: when an exemption applies, Flint calculates no tax, so tax_reverse_charge is null. `tax_exemption`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1tax_exemption). |
| `tax_reverse_charge` | Conditional | Alternative shapes (see declared variants) or null | The order's reverse charge, frozen when the invoice is issued: the buyer accounts for the tax, and documents print "Reverse charge" with the buyer's tax ID. `null` when no reverse charge applies, including when an exemption applies: Flint calculates no tax for an exempt sale, so the two never appear on the same invoice. Drafts preview the order's current value. `tax_reverse_charge`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1tax_reverse_charge). |

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1

anyOf InvoiceSnapshotPreviousAttributes.

- Optional: `billing_address`, `buyer_note`, `buyer_tax_identity`, `charges`, `customer_display_name`, `customer_email`, `discounts`, `internal_note`, `line_items`, `merchant_display_name`, `requested_tip`, `seller_tax_identity`, `tax_breakdowns`, `tax_currency_conversions`, `tax_exemption`, `tax_reverse_charge`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 2

anyOf variant 2.

- Undeclared: `billing_address`, `buyer_note`, `buyer_tax_identity`, `charges`, `customer_display_name`, `customer_email`, `discounts`, `internal_note`, `line_items`, `merchant_display_name`, `requested_tip`, `seller_tax_identity`, `tax_breakdowns`, `tax_currency_conversions`, `tax_exemption`, `tax_reverse_charge`.
- Value shape: null. The billing content of the invoice: line items, discounts, charges, tip, and tax. A draft previews the backing order; issue freezes it, and later order changes don't reach an issued invoice. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.billing_address

Billing address captured on the invoice. Kept after the customer is deleted, because an issued invoice must keep it.

Field definitions: [shared fields](TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.billing_address variant 1

anyOf AddressPreviousAttributes.

- Optional: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.billing_address variant 2

anyOf variant 2.

- Undeclared: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.
- Value shape: null. Billing address captured on the invoice. Kept after the customer is deleted, because an issued invoice must keep it. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.billing_address variant 1.city

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.city](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1city).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.billing_address variant 1.country

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.country](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1country).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.billing_address variant 1.line1

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line1](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line1).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.billing_address variant 1.line2

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line2](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line2).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.billing_address variant 1.postal_code

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.postal_code](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1postal_code).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.billing_address variant 1.state

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.state](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1state).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.buyer_note

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.buyer_note variant 1

anyOf variant 1: The backing order's buyer note, captured on the invoice..

- Value shape: string. The backing order's buyer note, captured on the invoice. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.buyer_note variant 2

anyOf variant 2.

- Value shape: null. The backing order's buyer note, captured on the invoice. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.buyer_tax_identity

Buyer tax identity for this invoice. Drafts preview the customer's current identity. Issue freezes the identity, which later profile edits and customer deletion preserve. `null` when no buyer tax identity is available, including after customer deletion while the invoice is a draft.

Field definitions: [shared fields](CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesbuyer_tax_identity).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.buyer_tax_identity variant 1

anyOf variant 1: Buyer tax identity for this invoice. Drafts preview the customer's current identity. Issue freezes the identity, which later profile edits and customer deletion preserve. `null` when no buyer tax identity is available, including after customer deletion while the invoice is a draft.; anyOf TaxIdentityPreviousAttributes.

- Optional: `legal_name`, `registered_address`, `tax_ids`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.buyer_tax_identity variant 2, 3

anyOf variant 1: Buyer tax identity for this invoice. Drafts preview the customer's current identity. Issue freezes the identity, which later profile edits and customer deletion preserve. `null` when no buyer tax identity is available, including after customer deletion while the invoice is a draft.; anyOf variant 2; anyOf variant 2.

- Undeclared: `legal_name`, `registered_address`, `tax_ids`.
- Value shape: null. Buyer tax identity for this invoice. Drafts preview the customer's current identity. Issue freezes the identity, which later profile edits and customer deletion preserve. `null` when no buyer tax identity is available, including after customer deletion while the invoice is a draft. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.buyer_tax_identity variant 1.legal_name

Declared alternatives: [CreditNoteIssuedMerchantEventDataPreviousAttributes.buyer_tax_identity variant 1.legal_name](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesbuyer_tax_identity-variant-1legal_name).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.buyer_tax_identity variant 1.registered_address

Declared alternatives: [CreditNoteIssuedMerchantEventDataPreviousAttributes.buyer_tax_identity variant 1.registered_address](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesbuyer_tax_identity-variant-1registered_address).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.buyer_tax_identity variant 1.tax_ids

Declared alternatives: [CreditNoteIssuedMerchantEventDataPreviousAttributes.buyer_tax_identity variant 1.tax_ids](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesbuyer_tax_identity-variant-1tax_ids).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1

anyOf variant 1: The backing order's service charges, frozen at issue..

- Value shape: Array of [OrderChargePreviousAttributes](../models/OrderChargePreviousAttributes.md#orderchargepreviousattributes). The backing order's service charges, frozen at issue. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 2

anyOf variant 2.

- Value shape: null. The backing order's service charges, frozen at issue. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Fixed charge amount before charge discounts and tax. Percentage charges use percent instead. |
| `applied_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Resolved charge amount after charge discounts and before additive tax. |
| `calculation_basis` | Optional | string or null | The amount a percent charge is calculated from. Values: `"subtotal_pre_discount"`, `"subtotal_post_discount"`. `calculation_basis`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1charges-variant-1-fields-1calculation_basis). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `description` | Optional | string or null | Optional description of the charge. `description`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1charges-variant-1-fields-1description). |
| `fulfillment_id` | Optional | string or null | ID of the fulfillment this charge belongs to, such as a shipping fee on its shipment. `fulfillment_id`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1charges-variant-1-fields-1fulfillment_id). |
| `metadata` | Optional | Map of string or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. `metadata`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata). |
| `name` | Optional | string or null | What the buyer sees for this charge at checkout and on receipts. `name`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1charges-variant-1-fields-1name). |
| `order_charge_id` | Optional | string or null | Unique identifier for this order charge, prefixed `och_`. `order_charge_id`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1charges-variant-1-fields-1order_charge_id). |
| `order_id` | Optional | string or null | Order that owns this charge, including the source order of an invoice snapshot. `order_id`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1charges-variant-1-fields-1order_id). |
| `percent` | Optional | number or null | Percentage points of the base `calculation_basis` names, such as `3` for 3%. Fixed charges use `amount_money` instead. `percent`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1charges-variant-1-fields-1percent). |
| `refunded_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Charge amount already refunded. |
| `tax` | Optional | Alternative shapes (see declared variants) | How tax applies to this charge. `tax`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1charges-variant-1-fields-1tax). |
| `tax_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Tax calculated for the charge, including any tax already included in its price. |
| `total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Applied charge amount plus tax that is not already included in the price. |
| `type` | Optional | string or null | What the charge is for. It classifies the charge in reporting and sets its default tax category. Values: [17 declared values](BuyerOrderChargeInput.md#buyerorderchargeinput-type-values). `type`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1charges-variant-1-fields-1type). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.calculation_basis

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.calculation_basis variant 1

anyOf variant 1: The amount a percent charge is calculated from..

- Value shape: string. The amount a percent charge is calculated from. Values: `"subtotal_pre_discount"`, `"subtotal_post_discount"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.calculation_basis variant 2

anyOf variant 2.

- Value shape: null. The amount a percent charge is calculated from. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.created_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.description

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.description variant 1

anyOf variant 1: Optional description of the charge..

- Value shape: string. Optional description of the charge. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.description variant 2

anyOf variant 2.

- Value shape: null. Optional description of the charge. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.fulfillment_id

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.fulfillment_id variant 1

anyOf variant 1: ID of the fulfillment this charge belongs to, such as a shipping fee on its shipment..

- Value shape: string. ID of the fulfillment this charge belongs to, such as a shipping fee on its shipment. ID of the fulfillment this charge belongs to, such as a shipping fee on its shipment. Example: `"ful_01KEZF7C00F24WVSTTWR1FQX5T"`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.fulfillment_id variant 2

anyOf variant 2.

- Value shape: null. ID of the fulfillment this charge belongs to, such as a shipping fee on its shipment. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.metadata

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.metadata](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.name

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.name variant 1

anyOf variant 1: What the buyer sees for this charge at checkout and on receipts..

- Value shape: string. What the buyer sees for this charge at checkout and on receipts. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.name variant 2

anyOf variant 2.

- Value shape: null. What the buyer sees for this charge at checkout and on receipts. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.order_charge_id

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.order_charge_id variant 1

anyOf variant 1: Unique identifier for this order charge, prefixed `och_`..

- Value shape: string. Unique identifier for this order charge, prefixed `och_`. Unique identifier for this order charge, prefixed `och_`. Example: `"och_01KEZF7C00XX8AKACP0GHKFWWT"`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.order_charge_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this order charge, prefixed `och_`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.order_id

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.order_id variant 1

anyOf variant 1: Order that owns this charge, including the source order of an invoice snapshot..

- Value shape: string. Order that owns this charge, including the source order of an invoice snapshot. Order that owns this charge, including the source order of an invoice snapshot. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.order_id variant 2

anyOf variant 2.

- Value shape: null. Order that owns this charge, including the source order of an invoice snapshot. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.percent

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.percent variant 1

anyOf variant 1: Percentage points of the base `calculation_basis` names, such as `3` for 3%. Fixed charges use `amount_money` instead..

- Value shape: number. Percentage points of the base `calculation_basis` names, such as `3` for 3%. Fixed charges use `amount_money` instead. Percentage points of the base `calculation_basis` names, such as `3` for 3%. Fixed charges use `amount_money` instead. multipleOf: `0.0001`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.percent variant 2

anyOf variant 2.

- Value shape: null. Percentage points of the base `calculation_basis` names, such as `3` for 3%. Fixed charges use `amount_money` instead. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.tax

How tax applies to this charge.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Conditional | Alternative shapes (see declared variants) | The tax you supply for this charge. Used when the order's tax `mode` is `external`. `calculation`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1charges-variant-1-fields-1tax-variant-1calculation). |
| `charge_tax_category` | Conditional | string or null | Tax category of the charge, which decides its automatic tax: service_fee, shipping, delivery, handling, and surcharge are taxed at the general rate at the charge location, including the store for pickup. A taxable charge without a category fails with `INVALID_REQUEST` and a `NOT_ALLOWED` detail on the charge. Omitted, the charge takes delivery from delivery_fee, shipping from shipping_fee, service_fee from service_fee, and handling from handling_fee; other types take none. The default follows type and is not returned. Values: `"service_fee"`, `"shipping"`, `"delivery"`, `"handling"`, `"surcharge"`. `charge_tax_category`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1charges-variant-1-fields-1tax-variant-1charge_tax_category). |
| `taxable` | Conditional | boolean or null | Whether the charge is subject to tax. `taxable`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1charges-variant-1-fields-1tax-variant-1taxable). |

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.tax variant 1

anyOf OrderCalculatedChargeTaxPreviousAttributes.

- Optional: `calculation`, `charge_tax_category`, `taxable`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.tax variant 2

anyOf variant 2.

- Undeclared: `calculation`, `charge_tax_category`, `taxable`.
- Value shape: null. How tax applies to this charge. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.tax variant 1.calculation

The tax you supply for this charge. Used when the order's tax `mode` is `external`.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `components` | Conditional | Array of object or null | The tax for this line item or charge, one component per jurisdiction and tax type. Each is a `percentage` tax. `components`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1charges-variant-1-fields-1tax-variant-1calculation-variant-1components). |
| `price_mode` | Conditional | string or null | Whether the price this tax applies to already includes the tax. Values: `"additive"`, `"inclusive"`. `price_mode`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1charges-variant-1-fields-1tax-variant-1calculation-variant-1price_mode). |

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.tax variant 1.calculation variant 1

anyOf TaxCalculationRequestPreviousAttributes.

- Optional: `components`, `price_mode`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.tax variant 1.calculation variant 2

anyOf variant 2.

- Undeclared: `components`, `price_mode`.
- Value shape: null. The tax you supply for this charge. Used when the order's tax `mode` is `external`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.tax variant 1.calculation variant 1.components

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.tax variant 1.calculation variant 1.components variant 1

anyOf variant 1: The tax for this line item or charge, one component per jurisdiction and tax type. Each is a `percentage` tax..

- Value shape: Array of object. The tax for this line item or charge, one component per jurisdiction and tax type. Each is a `percentage` tax. The tax for this line item or charge, one component per jurisdiction and tax type. Each is a `percentage` tax. minItems: `1`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.tax variant 1.calculation variant 1.components variant 2

anyOf variant 2.

- Value shape: null. The tax for this line item or charge, one component per jurisdiction and tax type. Each is a `percentage` tax. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.tax variant 1.calculation variant 1.components variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation_type` | Optional | string or null | How the tax is figured: a percentage of the taxable amount, or a fixed amount. Values: `"percentage"`. `calculation_type`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1charges-variant-1-fields-1tax-variant-1calculation-variant-1components-variant-1-fields-1calculation_type). |
| `flat_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The fixed tax amount in the order currency. Send it with a `flat_amount` component; a `percentage` component doesn't take it. |
| `jurisdiction` | Optional | Alternative shapes (see declared variants) | The taxing jurisdiction this component's tax is owed to. `jurisdiction`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1charges-variant-1-fields-1tax-variant-1calculation-variant-1components-variant-1-fields-1jurisdiction). |
| `percent` | Optional | number or null | Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%. Send it with a `percentage` component; a `flat_amount` component doesn't take it. `percent`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1charges-variant-1-fields-1tax-variant-1calculation-variant-1components-variant-1-fields-1percent). |
| `tax_type` | Optional | string or null | The kind of tax this component collects. Values: `"sales_tax"`, `"use_tax"`, `"vat"`, `"gst"`, `"hst"`, `"pst"`, `"qst"`. `tax_type`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1charges-variant-1-fields-1tax-variant-1calculation-variant-1components-variant-1-fields-1tax_type). |
| `taxability_reason` | Optional | string or null | Optional reverse-charge treatment. Requires percent 0 and a non-US jurisdiction. Values: `"reverse_charge"`. `taxability_reason`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1charges-variant-1-fields-1tax-variant-1calculation-variant-1components-variant-1-fields-1taxability_reason). |

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.tax variant 1.calculation variant 1.components variant 1.[] fields 1.calculation_type

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.tax variant 1.calculation variant 1.components variant 1.[] fields 1.calculation_type variant 1

anyOf variant 1: How the tax is figured: a percentage of the taxable amount, or a fixed amount..

- Value shape: string. How the tax is figured: a percentage of the taxable amount, or a fixed amount. Values: `"percentage"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.tax variant 1.calculation variant 1.components variant 1.[] fields 1.calculation_type variant 2

anyOf variant 2.

- Value shape: null. How the tax is figured: a percentage of the taxable amount, or a fixed amount. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.tax variant 1.calculation variant 1.components variant 1.[] fields 1.jurisdiction

The taxing jurisdiction this component's tax is owed to.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Conditional | string or null | Stable opaque Flint jurisdiction key used for equality and report grouping. `code`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1charges-variant-1-fields-1tax-variant-1calculation-variant-1components-variant-1-fields-1jurisdiction-variant-1code). |
| `country` | Conditional | string or null | ISO 3166-1 alpha-2 country code. `country`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1charges-variant-1-fields-1tax-variant-1calculation-variant-1components-variant-1-fields-1jurisdiction-variant-1country). |
| `level` | Conditional | string or null | The level of government that imposes the tax. Values: `"state"`, `"county"`, `"city"`, `"district"`, `"country"`, `"province"`. `level`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1charges-variant-1-fields-1tax-variant-1calculation-variant-1components-variant-1-fields-1jurisdiction-variant-1level). |
| `name` | Conditional | string or null | Name of the jurisdiction, up to 200 characters. `name`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1charges-variant-1-fields-1tax-variant-1calculation-variant-1components-variant-1-fields-1jurisdiction-variant-1name). |
| `state` | Conditional | string or null | Two-letter US state at every level. Elsewhere, the ISO 3166-2 suffix (1 to 3 uppercase letters or digits), required below country level and omitted at country level. `state`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1charges-variant-1-fields-1tax-variant-1calculation-variant-1components-variant-1-fields-1jurisdiction-variant-1state). |

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.tax variant 1.calculation variant 1.components variant 1.[] fields 1.jurisdiction variant 1

anyOf TaxJurisdictionPreviousAttributes.

- Optional: `code`, `country`, `level`, `name`, `state`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.tax variant 1.calculation variant 1.components variant 1.[] fields 1.jurisdiction variant 2

anyOf variant 2.

- Undeclared: `code`, `country`, `level`, `name`, `state`.
- Value shape: null. The taxing jurisdiction this component's tax is owed to. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.tax variant 1.calculation variant 1.components variant 1.[] fields 1.jurisdiction variant 1.code

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.tax variant 1.calculation variant 1.components variant 1.[] fields 1.jurisdiction variant 1.code variant 1

anyOf variant 1: Stable opaque Flint jurisdiction key used for equality and report grouping..

- Value shape: string. Stable opaque Flint jurisdiction key used for equality and report grouping. Stable opaque Flint jurisdiction key used for equality and report grouping. minLength: `1`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.tax variant 1.calculation variant 1.components variant 1.[] fields 1.jurisdiction variant 1.code variant 2

anyOf variant 2.

- Value shape: null. Stable opaque Flint jurisdiction key used for equality and report grouping. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.tax variant 1.calculation variant 1.components variant 1.[] fields 1.jurisdiction variant 1.country

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.tax variant 1.calculation variant 1.components variant 1.[] fields 1.jurisdiction variant 1.country variant 1

anyOf variant 1: ISO 3166-1 alpha-2 country code..

- Value shape: string. ISO 3166-1 alpha-2 country code. ISO 3166-1 alpha-2 country code. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.tax variant 1.calculation variant 1.components variant 1.[] fields 1.jurisdiction variant 1.country variant 2

anyOf variant 2.

- Value shape: null. ISO 3166-1 alpha-2 country code. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.tax variant 1.calculation variant 1.components variant 1.[] fields 1.jurisdiction variant 1.level

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.tax variant 1.calculation variant 1.components variant 1.[] fields 1.jurisdiction variant 1.level variant 1

anyOf variant 1: The level of government that imposes the tax..

- Value shape: string. The level of government that imposes the tax. Values: `"state"`, `"county"`, `"city"`, `"district"`, `"country"`, `"province"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.tax variant 1.calculation variant 1.components variant 1.[] fields 1.jurisdiction variant 1.level variant 2

anyOf variant 2.

- Value shape: null. The level of government that imposes the tax. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.tax variant 1.calculation variant 1.components variant 1.[] fields 1.jurisdiction variant 1.name

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.tax variant 1.calculation variant 1.components variant 1.[] fields 1.jurisdiction variant 1.name variant 1

anyOf variant 1: Name of the jurisdiction, up to 200 characters..

- Value shape: string. Name of the jurisdiction, up to 200 characters. Name of the jurisdiction, up to 200 characters. minLength: `1`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.tax variant 1.calculation variant 1.components variant 1.[] fields 1.jurisdiction variant 1.name variant 2

anyOf variant 2.

- Value shape: null. Name of the jurisdiction, up to 200 characters. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.tax variant 1.calculation variant 1.components variant 1.[] fields 1.jurisdiction variant 1.state

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.tax variant 1.calculation variant 1.components variant 1.[] fields 1.jurisdiction variant 1.state variant 1

anyOf variant 1: Two-letter US state at every level. Elsewhere, the ISO 3166-2 suffix (1 to 3 uppercase letters or digits), required below country level and omitted at country level..

- Value shape: string. Two-letter US state at every level. Elsewhere, the ISO 3166-2 suffix (1 to 3 uppercase letters or digits), required below country level and omitted at country level. Two-letter US state at every level. Elsewhere, the ISO 3166-2 suffix (1 to 3 uppercase letters or digits), required below country level and omitted at country level. minLength: `1`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.tax variant 1.calculation variant 1.components variant 1.[] fields 1.jurisdiction variant 1.state variant 2

anyOf variant 2.

- Value shape: null. Two-letter US state at every level. Elsewhere, the ISO 3166-2 suffix (1 to 3 uppercase letters or digits), required below country level and omitted at country level. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.tax variant 1.calculation variant 1.components variant 1.[] fields 1.percent

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.tax variant 1.calculation variant 1.components variant 1.[] fields 1.percent variant 1

anyOf variant 1: Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%. Send it with a `percentage` component; a `flat_amount` component doesn't take it..

- Value shape: number. Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%. Send it with a `percentage` component; a `flat_amount` component doesn't take it. Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%. Send it with a `percentage` component; a `flat_amount` component doesn't take it. minimum: `0`. maximum: `100`. multipleOf: `0.0001`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.tax variant 1.calculation variant 1.components variant 1.[] fields 1.percent variant 2

anyOf variant 2.

- Value shape: null. Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%. Send it with a `percentage` component; a `flat_amount` component doesn't take it. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.tax variant 1.calculation variant 1.components variant 1.[] fields 1.tax_type

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.tax variant 1.calculation variant 1.components variant 1.[] fields 1.tax_type variant 1

anyOf variant 1: The kind of tax this component collects..

- Value shape: string. The kind of tax this component collects. Values: `"sales_tax"`, `"use_tax"`, `"vat"`, `"gst"`, `"hst"`, `"pst"`, `"qst"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.tax variant 1.calculation variant 1.components variant 1.[] fields 1.tax_type variant 2

anyOf variant 2.

- Value shape: null. The kind of tax this component collects. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.tax variant 1.calculation variant 1.components variant 1.[] fields 1.taxability_reason

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.tax variant 1.calculation variant 1.components variant 1.[] fields 1.taxability_reason variant 1

anyOf variant 1: Optional reverse-charge treatment. Requires percent 0 and a non-US jurisdiction..

- Value shape: string. Optional reverse-charge treatment. Requires percent 0 and a non-US jurisdiction. Values: `"reverse_charge"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.tax variant 1.calculation variant 1.components variant 1.[] fields 1.taxability_reason variant 2

anyOf variant 2.

- Value shape: null. Optional reverse-charge treatment. Requires percent 0 and a non-US jurisdiction. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.tax variant 1.calculation variant 1.price_mode

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.tax variant 1.calculation variant 1.price_mode variant 1

anyOf variant 1: Whether the price this tax applies to already includes the tax..

- Value shape: string. Whether the price this tax applies to already includes the tax. Values: `"additive"`, `"inclusive"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.tax variant 1.calculation variant 1.price_mode variant 2

anyOf variant 2.

- Value shape: null. Whether the price this tax applies to already includes the tax. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.tax variant 1.charge_tax_category

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.tax variant 1.charge_tax_category variant 1

anyOf variant 1: Tax category of the charge, which decides its automatic tax: service_fee, shipping, delivery, handling, and surcharge are taxed at the general rate at the charge location, including the store for pickup. A taxable charge without a category fails with `INVALID_REQUEST` and a `NOT_ALLOWED` detail on the charge. Omitted, the charge takes delivery from delivery_fee, shipping from shipping_fee, service_fee from service_fee, and handling from handling_fee; other types take none. The default follows type and is not returned..

- Value shape: string. Tax category of the charge, which decides its automatic tax: service_fee, shipping, delivery, handling, and surcharge are taxed at the general rate at the charge location, including the store for pickup. A taxable charge without a category fails with `INVALID_REQUEST` and a `NOT_ALLOWED` detail on the charge. Omitted, the charge takes delivery from delivery_fee, shipping from shipping_fee, service_fee from service_fee, and handling from handling_fee; other types take none. The default follows type and is not returned. Values: `"service_fee"`, `"shipping"`, `"delivery"`, `"handling"`, `"surcharge"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.tax variant 1.charge_tax_category variant 2

anyOf variant 2.

- Value shape: null. Tax category of the charge, which decides its automatic tax: service_fee, shipping, delivery, handling, and surcharge are taxed at the general rate at the charge location, including the store for pickup. A taxable charge without a category fails with `INVALID_REQUEST` and a `NOT_ALLOWED` detail on the charge. Omitted, the charge takes delivery from delivery_fee, shipping from shipping_fee, service_fee from service_fee, and handling from handling_fee; other types take none. The default follows type and is not returned. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.tax variant 1.taxable

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.tax variant 1.taxable variant 1

anyOf variant 1: Whether the charge is subject to tax..

- Value shape: boolean. Whether the charge is subject to tax. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.tax variant 1.taxable variant 2

anyOf variant 2.

- Value shape: null. Whether the charge is subject to tax. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.type

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.type variant 1

anyOf variant 1: What the charge is for. It classifies the charge in reporting and sets its default tax category..

- Value shape: string. What the charge is for. It classifies the charge in reporting and sets its default tax category. Values: `"service_fee"`, `"delivery_fee"`, `"shipping_fee"`, `"handling_fee"`, `"packaging_fee"`, `"small_order_fee"`, `"service_area_fee"`, `"setup_fee"`, `"installation_fee"`, `"cleaning_fee"`, `"booking_fee"`, `"reservation_fee"`, `"ticket_fee"`, `"fulfillment_fee"`, `"restocking_fee"`, `"rush_fee"`, `"other"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.type variant 2

anyOf variant 2.

- Value shape: null. What the charge is for. It classifies the charge in reporting and sets its default tax category. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.updated_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.customer_display_name

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.customer_display_name variant 1

anyOf variant 1: Buyer name captured on the invoice. Kept after the customer is deleted, because an issued invoice must keep it..

- Value shape: string. Buyer name captured on the invoice. Kept after the customer is deleted, because an issued invoice must keep it. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.customer_display_name variant 2

anyOf variant 2.

- Value shape: null. Buyer name captured on the invoice. Kept after the customer is deleted, because an issued invoice must keep it. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.customer_email

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.customer_email variant 1

anyOf variant 1: Buyer email captured on the invoice..

- Value shape: string. Buyer email captured on the invoice. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.customer_email variant 2

anyOf variant 2.

- Value shape: null. Buyer email captured on the invoice. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.discounts

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.discounts variant 1

anyOf variant 1: The discounts applied to the backing order, frozen at issue..

- Value shape: Array of object. The discounts applied to the backing order, frozen at issue. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.discounts variant 2

anyOf variant 2.

- Value shape: null. The discounts applied to the backing order, frozen at issue. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.discounts variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Discount amount before limits apply, such as 20% of $100 resolving to $20. |
| `applied_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Amount the discount took off. It is less than `amount_money` when a limit applies, such as a discount that would take the order below zero. |
| `customer_facing_name` | Optional | string or null | Name the buyer sees for the discount. `customer_facing_name`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1discounts-variant-1-fields-1customer_facing_name). |
| `discount_class` | Optional | string or null | Which part of the order the discount reduces. Values: `"order"`, `"line_item"`. `discount_class`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1discounts-variant-1-fields-1discount_class). |
| `promotion_code` | Optional | string or null | Promotion code used to create this discount. Present only when `source` is `promotion` and a code was used. `promotion_code`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1discounts-variant-1-fields-1promotion_code). |
| `promotion_id` | Optional | string or null | ID of the promotion that supplied this discount. Absent for a manual discount. `promotion_id`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1discounts-variant-1-fields-1promotion_id). |
| `source` | Optional | string or null | Where the discount came from. Values: `"manual"`, `"promotion"`, `"plan_change_credit"`, `"proration"`, `"prepaid_delivery"`. `source`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1discounts-variant-1-fields-1source). |

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.discounts variant 1.[] fields 1.customer_facing_name

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.discounts variant 1.[] fields 1.customer_facing_name variant 1

anyOf variant 1: Name the buyer sees for the discount..

- Value shape: string. Name the buyer sees for the discount. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.discounts variant 1.[] fields 1.customer_facing_name variant 2

anyOf variant 2.

- Value shape: null. Name the buyer sees for the discount. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.discounts variant 1.[] fields 1.discount_class

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.discounts variant 1.[] fields 1.discount_class variant 1

anyOf variant 1: Which part of the order the discount reduces..

- Value shape: string. Which part of the order the discount reduces. Values: `"order"`, `"line_item"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.discounts variant 1.[] fields 1.discount_class variant 2

anyOf variant 2.

- Value shape: null. Which part of the order the discount reduces. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.discounts variant 1.[] fields 1.promotion_code

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.discounts variant 1.[] fields 1.promotion_code variant 1

anyOf variant 1: Promotion code used to create this discount. Present only when `source` is `promotion` and a code was used..

- Value shape: string. Promotion code used to create this discount. Present only when `source` is `promotion` and a code was used. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.discounts variant 1.[] fields 1.promotion_code variant 2

anyOf variant 2.

- Value shape: null. Promotion code used to create this discount. Present only when `source` is `promotion` and a code was used. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.discounts variant 1.[] fields 1.promotion_id

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.discounts variant 1.[] fields 1.promotion_id variant 1

anyOf variant 1: ID of the promotion that supplied this discount. Absent for a manual discount..

- Value shape: string. ID of the promotion that supplied this discount. Absent for a manual discount. ID of the promotion that supplied this discount. Absent for a manual discount. Example: `"promo_01KEZF7C00QQ8EZ74BDYSZ315V"`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.discounts variant 1.[] fields 1.promotion_id variant 2

anyOf variant 2.

- Value shape: null. ID of the promotion that supplied this discount. Absent for a manual discount. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.discounts variant 1.[] fields 1.source

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.discounts variant 1.[] fields 1.source variant 1

anyOf variant 1: Where the discount came from..

- Value shape: string. Where the discount came from. Values: `"manual"`, `"promotion"`, `"plan_change_credit"`, `"proration"`, `"prepaid_delivery"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.discounts variant 1.[] fields 1.source variant 2

anyOf variant 2.

- Value shape: null. Where the discount came from. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.internal_note

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.internal_note variant 1

anyOf variant 1: The backing order's internal note, captured on the invoice. Merchant reads only; buyer reads leave it out..

- Value shape: string. The backing order's internal note, captured on the invoice. Merchant reads only; buyer reads leave it out. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.internal_note variant 2

anyOf variant 2.

- Value shape: null. The backing order's internal note, captured on the invoice. Merchant reads only; buyer reads leave it out. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1

anyOf variant 1: The billed line items, frozen at issue. A draft previews the backing order's lines..

- Value shape: Array of object. The billed line items, frozen at issue. A draft previews the backing order's lines. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 2

anyOf variant 2.

- Value shape: null. The billed line items, frozen at issue. A draft previews the backing order's lines. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `base_subtotal_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | unit_price_money × quantity. |
| `bundle_components` | Optional | Array of [BundleComponentPreviousAttributes](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributes) or null | The items inside a bundle line, as billed. `bundle_components`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1line_items-variant-1-fields-1bundle_components). |
| `bundle_id` | Optional | string or null | The catalog bundle the line was sold from. Absent unless type is bundle. `bundle_id`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1line_items-variant-1-fields-1bundle_id). |
| `categories` | Optional | Array of [CategoryReferencePreviousAttributes](../models/CategoryReferencePreviousAttributes.md#categoryreferencepreviousattributes) or null | The catalog categories of the line's item when it was billed. `categories`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1line_items-variant-1-fields-1categories). |
| `description` | Optional | string or null | Line item description as billed. `description`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1line_items-variant-1-fields-1description). |
| `discount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | This line's share of order and line-item discounts. |
| `image` | Optional | Alternative shapes (see declared variants) | Line item image. `image`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1line_items-variant-1-fields-1image). |
| `invoice_line_item_id` | Optional | string or null | Flint invoice line item ID, stable across draft edits and issue while the backing order line keeps its ID. Credit notes credit lines by this ID. `invoice_line_item_id`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1line_items-variant-1-fields-1invoice_line_item_id). |
| `modifier_total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Total of the line's modifiers. |
| `modifiers` | Optional | Array of [OrderLineItemModifierPreviousAttributes](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributes) or null | The line's modifiers, as billed. `modifiers`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1line_items-variant-1-fields-1modifiers). |
| `name` | Optional | string or null | Line item name as billed. `name`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1line_items-variant-1-fields-1name). |
| `order_id` | Optional | string or null | Order that owns the backing order_line_item_id. `order_id`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1line_items-variant-1-fields-1order_id). |
| `order_line_item_id` | Optional | string or null | The backing order's line item. Tax rows in snapshot.tax_breakdowns reference the line by this ID. `order_line_item_id`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1line_items-variant-1-fields-1order_line_item_id). |
| `product_id` | Optional | string or null | Parent product of the line's variant. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product. `product_id`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1line_items-variant-1-fields-1product_id). |
| `product_type` | Optional | string or null or null | Product classification frozen on this line. Null when the line is unclassified. Custom lines accept physical, digital, service, or fee; catalog lines use the product's type when added. Unclassified non-goods lines keep ACH debit unavailable. Issued invoices retain their frozen classification; void and reissue to change it. Values: `"physical"`, `"service"`, `"fee"`, `"digital"`, `"gift_card"`, `null`. `product_type`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1line_items-variant-1-fields-1product_type). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `selected_options` | Optional | Array of [SelectedProductOptionPreviousAttributes](../models/SelectedProductOptionPreviousAttributes.md#selectedproductoptionpreviousattributes) or null | The product options chosen for the line, as billed. `selected_options`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1line_items-variant-1-fields-1selected_options). |
| `sku` | Optional | string or null | Stock keeping unit as billed. `sku`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1line_items-variant-1-fields-1sku). |
| `subtotal_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | base_subtotal_money + modifier_total_money. For a tax-inclusive price, it includes the tax. |
| `tax_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Tax on this line. Its rows in snapshot.tax_breakdowns give the rate and price_mode. For a tax-inclusive price, the tax is already inside subtotal_money. |
| `total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | What the line bills. For a tax-inclusive price, subtotal_money - discount_money; otherwise subtotal_money - discount_money + tax_money. In both cases the tax-exclusive value is total_money - tax_money. |
| `type` | Optional | string or null | Whether the line was sold from a catalog variant, a bundle, or a custom item. Values: `"variant"`, `"bundle"`, `"custom"`. `type`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1line_items-variant-1-fields-1type). |
| `unit_price_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Price of one unit, before modifiers and discounts. |
| `variant_id` | Optional | string or null | The catalog variant the line was sold from. Absent unless type is variant. `variant_id`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1line_items-variant-1-fields-1variant_id). |

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.bundle_components

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.bundle_components variant 1

anyOf variant 1: The items inside a bundle line, as billed..

- Value shape: Array of [BundleComponentPreviousAttributes](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributes). The items inside a bundle line, as billed. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.bundle_components variant 2

anyOf variant 2.

- Value shape: null. The items inside a bundle line, as billed. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.bundle_components variant 1.[] fields 1

Field definitions: [BundleArchivedMerchantEventDataPreviousAttributes.components variant 1.[] fields 1](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributescomponents-variant-1-fields-1).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.bundle_id

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.bundle_id variant 1

anyOf variant 1: The catalog bundle the line was sold from. Absent unless type is bundle..

- Value shape: string. The catalog bundle the line was sold from. Absent unless type is bundle. The catalog bundle the line was sold from. Absent unless type is bundle. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.bundle_id variant 2

anyOf variant 2.

- Value shape: null. The catalog bundle the line was sold from. Absent unless type is bundle. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.categories

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.categories variant 1

anyOf variant 1: The catalog categories of the line's item when it was billed..

- Value shape: Array of [CategoryReferencePreviousAttributes](../models/CategoryReferencePreviousAttributes.md#categoryreferencepreviousattributes). The catalog categories of the line's item when it was billed. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.categories variant 2

anyOf variant 2.

- Value shape: null. The catalog categories of the line's item when it was billed. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.categories variant 1.[] fields 1

Field definitions: [BundleArchivedMerchantEventDataPreviousAttributes.categories variant 1.[] fields 1](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributescategories-variant-1-fields-1).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.description

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.description variant 1

anyOf variant 1: Line item description as billed..

- Value shape: string. Line item description as billed. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.description variant 2

anyOf variant 2.

- Value shape: null. Line item description as billed. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.image

Line item image.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `alt` | Conditional | string or null | Alternative text describing the image for accessibility. `alt`: [declared alternatives](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributesalt). |
| `height` | Conditional | integer or null | Image height in pixels, when known. `height`: [declared alternatives](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributesheight). |
| `url` | Conditional | string or null | URL of the image. `url`: [declared alternatives](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributesurl). |
| `width` | Conditional | integer or null | Image width in pixels, when known. `width`: [declared alternatives](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributeswidth). |

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.image variant 1

anyOf ImagePreviousAttributes.

- Optional: `alt`, `height`, `url`, `width`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.image variant 2

anyOf variant 2.

- Undeclared: `alt`, `height`, `url`, `width`.
- Value shape: null. Line item image. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.image variant 1.alt

Declared alternatives: [ImageAttachmentPreviousAttributes.alt](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributesalt).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.image variant 1.height

Declared alternatives: [ImageAttachmentPreviousAttributes.height](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributesheight).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.image variant 1.url

Declared alternatives: [ImageAttachmentPreviousAttributes.url](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributesurl).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.image variant 1.width

Declared alternatives: [ImageAttachmentPreviousAttributes.width](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributeswidth).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.invoice_line_item_id

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.invoice_line_item_id variant 1

anyOf variant 1: Flint invoice line item ID, stable across draft edits and issue while the backing order line keeps its ID. Credit notes credit lines by this ID..

- Value shape: string. Flint invoice line item ID, stable across draft edits and issue while the backing order line keeps its ID. Credit notes credit lines by this ID. Flint invoice line item ID, stable across draft edits and issue while the backing order line keeps its ID. Credit notes credit lines by this ID. Example: `"invli_01KEZF7C00H767MAT1DY7ZWSVW"`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.invoice_line_item_id variant 2

anyOf variant 2.

- Value shape: null. Flint invoice line item ID, stable across draft edits and issue while the backing order line keeps its ID. Credit notes credit lines by this ID. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.modifiers

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.modifiers variant 1

anyOf variant 1: The line's modifiers, as billed..

- Value shape: Array of [OrderLineItemModifierPreviousAttributes](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributes). The line's modifiers, as billed. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.modifiers variant 2

anyOf variant 2.

- Value shape: null. The line's modifiers, as billed. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.modifiers variant 1.[] fields 1

Field definitions: [FulfillmentLineItemPreviousAttributes.modifiers variant 1.[] fields 1](../models/FulfillmentLineItemPreviousAttributes.md#fulfillmentlineitempreviousattributesmodifiers-variant-1-fields-1).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.name

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.name variant 1

anyOf variant 1: Line item name as billed..

- Value shape: string. Line item name as billed. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.name variant 2

anyOf variant 2.

- Value shape: null. Line item name as billed. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.order_id

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.order_id variant 1

anyOf variant 1: Order that owns the backing order_line_item_id..

- Value shape: string. Order that owns the backing order_line_item_id. Order that owns the backing order_line_item_id. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.order_id variant 2

anyOf variant 2.

- Value shape: null. Order that owns the backing order_line_item_id. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.order_line_item_id

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.order_line_item_id variant 1

anyOf variant 1: The backing order's line item. Tax rows in snapshot.tax_breakdowns reference the line by this ID..

- Value shape: string. The backing order's line item. Tax rows in snapshot.tax_breakdowns reference the line by this ID. The backing order's line item. Tax rows in snapshot.tax_breakdowns reference the line by this ID. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.order_line_item_id variant 2

anyOf variant 2.

- Value shape: null. The backing order's line item. Tax rows in snapshot.tax_breakdowns reference the line by this ID. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.product_id

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.product_id variant 1

anyOf variant 1: Parent product of the line's variant. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product..

- Value shape: string. Parent product of the line's variant. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product. Parent product of the line's variant. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.product_id variant 2

anyOf variant 2.

- Value shape: null. Parent product of the line's variant. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.product_type

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.product_type variant 1

anyOf variant 1: Product classification frozen on this line. Null when the line is unclassified. Custom lines accept physical, digital, service, or fee; catalog lines use the product's type when added. Unclassified non-goods lines keep ACH debit unavailable. Issued invoices retain their frozen classification; void and reissue to change it..

- Value shape: (string or null). Product classification frozen on this line. Null when the line is unclassified. Custom lines accept physical, digital, service, or fee; catalog lines use the product's type when added. Unclassified non-goods lines keep ACH debit unavailable. Issued invoices retain their frozen classification; void and reissue to change it. Values: `"physical"`, `"service"`, `"fee"`, `"digital"`, `"gift_card"`, `null`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.product_type variant 2

anyOf variant 2.

- Value shape: null. Product classification frozen on this line. Null when the line is unclassified. Custom lines accept physical, digital, service, or fee; catalog lines use the product's type when added. Unclassified non-goods lines keep ACH debit unavailable. Issued invoices retain their frozen classification; void and reissue to change it. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.selected_options

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.selected_options variant 1

anyOf variant 1: The product options chosen for the line, as billed..

- Value shape: Array of [SelectedProductOptionPreviousAttributes](../models/SelectedProductOptionPreviousAttributes.md#selectedproductoptionpreviousattributes). The product options chosen for the line, as billed. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.selected_options variant 2

anyOf variant 2.

- Value shape: null. The product options chosen for the line, as billed. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.selected_options variant 1.[] fields 1

Field definitions: [BundleComponentPreviousAttributes.variant variant 1.selected_options variant 1.[] fields 1](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesvariant-variant-1selected_options-variant-1-fields-1).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.sku

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.sku variant 1

anyOf variant 1: Stock keeping unit as billed..

- Value shape: string. Stock keeping unit as billed. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.sku variant 2

anyOf variant 2.

- Value shape: null. Stock keeping unit as billed. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.type

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.type variant 1

anyOf variant 1: Whether the line was sold from a catalog variant, a bundle, or a custom item..

- Value shape: string. Whether the line was sold from a catalog variant, a bundle, or a custom item. Values: `"variant"`, `"bundle"`, `"custom"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.type variant 2

anyOf variant 2.

- Value shape: null. Whether the line was sold from a catalog variant, a bundle, or a custom item. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.variant_id

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.variant_id variant 1

anyOf variant 1: The catalog variant the line was sold from. Absent unless type is variant..

- Value shape: string. The catalog variant the line was sold from. Absent unless type is variant. The catalog variant the line was sold from. Absent unless type is variant. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.variant_id variant 2

anyOf variant 2.

- Value shape: null. The catalog variant the line was sold from. Absent unless type is variant. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.merchant_display_name

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.merchant_display_name variant 1

anyOf variant 1: Your business name as shown on the invoice. A draft shows your current name; issue freezes it..

- Value shape: string. Your business name as shown on the invoice. A draft shows your current name; issue freezes it. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.merchant_display_name variant 2

anyOf variant 2.

- Value shape: null. Your business name as shown on the invoice. A draft shows your current name; issue freezes it. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.requested_tip

The tip requested on the backing order, frozen at issue. Absent when none was requested.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Conditional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Fixed tip amount, when the tip is set as an amount. |
| `description` | Conditional | string or null | Optional description that stays on the tip for your reporting. `description`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1requested_tip-variant-1description). |
| `name` | Conditional | string or null | Optional name that stays on the tip for your reporting. `name`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1requested_tip-variant-1name). |
| `percent` | Conditional | number or null | Tip percentage in percentage points, such as `18` for 18%, when the tip is set as a percent. `percent`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1requested_tip-variant-1percent). |

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.requested_tip variant 1

anyOf InvoiceTipPreviousAttributes.

- Optional: `amount_money`, `description`, `name`, `percent`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.requested_tip variant 2

anyOf variant 2.

- Undeclared: `amount_money`, `description`, `name`, `percent`.
- Value shape: null. The tip requested on the backing order, frozen at issue. Absent when none was requested. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.requested_tip variant 1.description

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.requested_tip variant 1.description variant 1

anyOf variant 1: Optional description that stays on the tip for your reporting..

- Value shape: string. Optional description that stays on the tip for your reporting. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.requested_tip variant 1.description variant 2

anyOf variant 2.

- Value shape: null. Optional description that stays on the tip for your reporting. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.requested_tip variant 1.name

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.requested_tip variant 1.name variant 1

anyOf variant 1: Optional name that stays on the tip for your reporting..

- Value shape: string. Optional name that stays on the tip for your reporting. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.requested_tip variant 1.name variant 2

anyOf variant 2.

- Value shape: null. Optional name that stays on the tip for your reporting. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.requested_tip variant 1.percent

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.requested_tip variant 1.percent variant 1

anyOf variant 1: Tip percentage in percentage points, such as `18` for 18%, when the tip is set as a percent..

- Value shape: number. Tip percentage in percentage points, such as `18` for 18%, when the tip is set as a percent. Tip percentage in percentage points, such as `18` for 18%, when the tip is set as a percent. multipleOf: `0.0001`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.requested_tip variant 1.percent variant 2

anyOf variant 2.

- Value shape: null. Tip percentage in percentage points, such as `18` for 18%, when the tip is set as a percent. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.seller_tax_identity

Declared alternatives: [CreditNoteIssuedMerchantEventDataPreviousAttributes.seller_tax_identity](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesseller_tax_identity).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_breakdowns

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_breakdowns variant 1

anyOf variant 1: Tax jurisdiction rows for this invoice. A draft previews the backing order's current rows; issue freezes them, and the API, hosted invoice, and PDF share the frozen rows. External tax produces these rows, and so does automatic tax outside the US, one per national or provincial tax. US automatic tax doesn't, so a US automatic-tax invoice reports its tax in pricing_amounts and each line's tax_money. On a newly issued external-tax invoice, rows sum to Invoice.pricing_amounts.tax_money, and rows with price_mode inclusive sum to Invoice.pricing_amounts.inclusive_tax_money. A row's order_line_item_id matches the same field on InvoiceLineItem; order_charge_id names a charge in charges. Always [] when no tax rows apply. Some older external-tax invoices have no frozen rows..

- Value shape: Array of (object and Alternative shapes (see declared variants) and object and Alternative shapes (see declared variants)). Tax jurisdiction rows for this invoice. A draft previews the backing order's current rows; issue freezes them, and the API, hosted invoice, and PDF share the frozen rows. External tax produces these rows, and so does automatic tax outside the US, one per national or provincial tax. US automatic tax doesn't, so a US automatic-tax invoice reports its tax in pricing_amounts and each line's tax_money. On a newly issued external-tax invoice, rows sum to Invoice.pricing_amounts.tax_money, and rows with price_mode inclusive sum to Invoice.pricing_amounts.inclusive_tax_money. A row's order_line_item_id matches the same field on InvoiceLineItem; order_charge_id names a charge in charges. Always [] when no tax rows apply. Some older external-tax invoices have no frozen rows. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_breakdowns variant 2

anyOf variant 2.

- Value shape: null. Tax jurisdiction rows for this invoice. A draft previews the backing order's current rows; issue freezes them, and the API, hosted invoice, and PDF share the frozen rows. External tax produces these rows, and so does automatic tax outside the US, one per national or provincial tax. US automatic tax doesn't, so a US automatic-tax invoice reports its tax in pricing_amounts and each line's tax_money. On a newly issued external-tax invoice, rows sum to Invoice.pricing_amounts.tax_money, and rows with price_mode inclusive sum to Invoice.pricing_amounts.inclusive_tax_money. A row's order_line_item_id matches the same field on InvoiceLineItem; order_charge_id names a charge in charges. Always [] when no tax rows apply. Some older external-tax invoices have no frozen rows. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_breakdowns variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation_type` | Optional | (string or null) | How the tax is figured: a percentage of the taxable amount, or a fixed amount. Values: `"percentage"`, `"flat_amount"`. `calculation_type`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1tax_breakdowns-variant-1-fields-1-variant-1calculation_type), [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1tax_breakdowns-variant-1-fields-1-variant-2calculation_type). |
| `flat_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The fixed tax amount. Present on `flat_amount` rows. |
| `fulfillment_choice_group_id` | Optional | string or null | ID of the delivery choice group whose delivery this row's tax covers. On a line item row, the row taxes the share of the line item that group delivers. On a charge row, it taxes that group's delivery charge. Set only on automatic tax rows outside the US, and only when delivery was chosen from a delivery quote. A delivery charge's row gets it only when the `delivery_charge_tax_basis` setting applied as the row was calculated, and a row frozen by payment or by issuing an invoice keeps the value it had. A delivery charge priced with `taxable_items_share` after its delivery choice is no longer available can carry the ID of the fulfillment that holds the charge instead. Omitted on external tax rows and on every other row. `fulfillment_choice_group_id`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1tax_breakdowns-variant-1-fields-1fulfillment_choice_group_id). |
| `jurisdiction` | Optional | Alternative shapes (see declared variants) | The taxing authority this row's tax is owed to. `jurisdiction`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1tax_breakdowns-variant-1-fields-1jurisdiction). |
| `location_id` | Optional | string or null | ID of the location whose address was the seller origin for this row's tax: the location the goods leave from, or the pickup location. Set only on automatic tax rows outside the US, for goods and charges that a fulfillment sends from one location. Separate shares of a line item can have different origin locations. Omitted when the tax was sourced from the merchant's legal origin, which covers services, goods with no fulfilling location yet, goods whose fulfillments can't be split by location, a charge whose fulfillments leave from more than one location, and every external tax row. `location_id`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1tax_breakdowns-variant-1-fields-1location_id). |
| `order_charge_id` | Optional | string or null | ID of the order charge this row taxes. Absent on rows for a line item or a flat order tax. `order_charge_id`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1tax_breakdowns-variant-1-fields-1order_charge_id). |
| `order_id` | Optional | string or null | ID of the order this tax row belongs to, including the parent of any order_line_item_id or order_charge_id reference. `order_id`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1tax_breakdowns-variant-1-fields-1order_id). |
| `order_line_item_id` | Optional | string or null | ID of the order line item this row taxes. Absent on rows for a charge or a flat order tax. `order_line_item_id`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1tax_breakdowns-variant-1-fields-1order_line_item_id). |
| `percent` | Optional | number or null | Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%. Present on `percentage` rows. `percent`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1tax_breakdowns-variant-1-fields-1percent). |
| `price_mode` | Optional | string or null | Whether the price this row taxes already includes the tax. Values: `"additive"`, `"inclusive"`. `price_mode`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1tax_breakdowns-variant-1-fields-1price_mode). |
| `tax_breakdown_id` | Optional | string or null | ID of this tax row. A refund names it in `tax_breakdown_refunds` to reverse this row's tax. `tax_breakdown_id`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1tax_breakdowns-variant-1-fields-1tax_breakdown_id). |
| `tax_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The tax this row adds up to. Zero when the amount isn't taxable or the customer is tax-exempt. |
| `tax_type` | Optional | string or null | The kind of tax this row collects. Values: `"sales_tax"`, `"use_tax"`, `"retail_delivery_fee"`, `"vat"`, `"gst"`, `"hst"`, `"pst"`, `"qst"`. `tax_type`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1tax_breakdowns-variant-1-fields-1tax_type). |
| `taxability_reason` | Optional | string or null | Why the row's tax is what it is. Values: `"standard_rated"`, `"not_taxable"`, `"customer_exempt"`, `"tax_disabled"`, `"location_required"`, `"calculation_incomplete"`, `"reverse_charge"`. `taxability_reason`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1tax_breakdowns-variant-1-fields-1taxability_reason). |
| `taxable_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The amount this row's tax is based on. On an additive percentage row it is the price, on an inclusive row it is the price minus the tax in it, and on a flat row it is the order's taxable amount. Zero when the amount isn't taxable. |

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_breakdowns variant 1.[] fields 1 variant 1: `calculation_type` = `"percentage"`

anyOf TaxBreakdownPercentagePreviousAttributes.

- Constraints for `calculation_type`: Values: `"percentage"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_breakdowns variant 1.[] fields 1 variant 2: `calculation_type` = `"flat_amount"`

anyOf TaxBreakdownFlatAmountPreviousAttributes.

- Constraints for `calculation_type`: Values: `"flat_amount"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_breakdowns variant 1.[] fields 1 variant 1.calculation_type

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_breakdowns variant 1.[] fields 1 variant 1.calculation_type variant 1

anyOf group 1 variant 1: How the tax is figured: a percentage of the taxable amount, or a fixed amount..

- Value shape: string. How the tax is figured: a percentage of the taxable amount, or a fixed amount. Values: `"percentage"`, `"flat_amount"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_breakdowns variant 1.[] fields 1 variant 1.calculation_type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. How the tax is figured: a percentage of the taxable amount, or a fixed amount. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_breakdowns variant 1.[] fields 1 variant 1.calculation_type variant 3

anyOf group 2 variant 1: How the tax is figured: a percentage of the taxable amount, or a fixed amount..

- Value shape: string. How the tax is figured: a percentage of the taxable amount, or a fixed amount. Values: `"percentage"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_breakdowns variant 1.[] fields 1.fulfillment_choice_group_id

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_breakdowns variant 1.[] fields 1.fulfillment_choice_group_id variant 1

anyOf variant 1: ID of the delivery choice group whose delivery this row's tax covers. On a line item row, the row taxes the share of the line item that group delivers. On a charge row, it taxes that group's delivery charge. Set only on automatic tax rows outside the US, and only when delivery was chosen from a delivery quote. A delivery charge's row gets it only when the `delivery_charge_tax_basis` setting applied as the row was calculated, and a row frozen by payment or by issuing an invoice keeps the value it had. A delivery charge priced with `taxable_items_share` after its delivery choice is no longer available can carry the ID of the fulfillment that holds the charge instead. Omitted on external tax rows and on every other row..

- Value shape: string. ID of the delivery choice group whose delivery this row's tax covers. On a line item row, the row taxes the share of the line item that group delivers. On a charge row, it taxes that group's delivery charge. Set only on automatic tax rows outside the US, and only when delivery was chosen from a delivery quote. A delivery charge's row gets it only when the `delivery_charge_tax_basis` setting applied as the row was calculated, and a row frozen by payment or by issuing an invoice keeps the value it had. A delivery charge priced with `taxable_items_share` after its delivery choice is no longer available can carry the ID of the fulfillment that holds the charge instead. Omitted on external tax rows and on every other row. ID of the delivery choice group whose delivery this row's tax covers. On a line item row, the row taxes the share of the line item that group delivers. On a charge row, it taxes that group's delivery charge. Set only on automatic tax rows outside the US, and only when delivery was chosen from a delivery quote. A delivery charge's row gets it only when the `delivery_charge_tax_basis` setting applied as the row was calculated, and a row frozen by payment or by issuing an invoice keeps the value it had. A delivery charge priced with `taxable_items_share` after its delivery choice is no longer available can carry the ID of the fulfillment that holds the charge instead. Omitted on external tax rows and on every other row. Example: `"dcgrp_01KEZF7C00KYKJQ897HWM86AT8"`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_breakdowns variant 1.[] fields 1.fulfillment_choice_group_id variant 2

anyOf variant 2.

- Value shape: null. ID of the delivery choice group whose delivery this row's tax covers. On a line item row, the row taxes the share of the line item that group delivers. On a charge row, it taxes that group's delivery charge. Set only on automatic tax rows outside the US, and only when delivery was chosen from a delivery quote. A delivery charge's row gets it only when the `delivery_charge_tax_basis` setting applied as the row was calculated, and a row frozen by payment or by issuing an invoice keeps the value it had. A delivery charge priced with `taxable_items_share` after its delivery choice is no longer available can carry the ID of the fulfillment that holds the charge instead. Omitted on external tax rows and on every other row. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_breakdowns variant 1.[] fields 1.jurisdiction

The taxing authority this row's tax is owed to.

Field definitions: [shared fields](#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1charges-variant-1-fields-1tax-variant-1calculation-variant-1components-variant-1-fields-1jurisdiction).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_breakdowns variant 1.[] fields 1.jurisdiction variant 1

anyOf TaxJurisdictionPreviousAttributes.

- Optional: `code`, `country`, `level`, `name`, `state`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_breakdowns variant 1.[] fields 1.jurisdiction variant 2

anyOf variant 2.

- Undeclared: `code`, `country`, `level`, `name`, `state`.
- Value shape: null. The taxing authority this row's tax is owed to. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_breakdowns variant 1.[] fields 1.jurisdiction variant 1.code

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.tax variant 1.calculation variant 1.components variant 1.[] fields 1.jurisdiction variant 1.code](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1charges-variant-1-fields-1tax-variant-1calculation-variant-1components-variant-1-fields-1jurisdiction-variant-1code).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_breakdowns variant 1.[] fields 1.jurisdiction variant 1.country

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.tax variant 1.calculation variant 1.components variant 1.[] fields 1.jurisdiction variant 1.country](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1charges-variant-1-fields-1tax-variant-1calculation-variant-1components-variant-1-fields-1jurisdiction-variant-1country).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_breakdowns variant 1.[] fields 1.jurisdiction variant 1.level

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.tax variant 1.calculation variant 1.components variant 1.[] fields 1.jurisdiction variant 1.level](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1charges-variant-1-fields-1tax-variant-1calculation-variant-1components-variant-1-fields-1jurisdiction-variant-1level).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_breakdowns variant 1.[] fields 1.jurisdiction variant 1.name

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.tax variant 1.calculation variant 1.components variant 1.[] fields 1.jurisdiction variant 1.name](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1charges-variant-1-fields-1tax-variant-1calculation-variant-1components-variant-1-fields-1jurisdiction-variant-1name).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_breakdowns variant 1.[] fields 1.jurisdiction variant 1.state

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.tax variant 1.calculation variant 1.components variant 1.[] fields 1.jurisdiction variant 1.state](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1charges-variant-1-fields-1tax-variant-1calculation-variant-1components-variant-1-fields-1jurisdiction-variant-1state).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_breakdowns variant 1.[] fields 1.location_id

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_breakdowns variant 1.[] fields 1.location_id variant 1

anyOf variant 1: ID of the location whose address was the seller origin for this row's tax: the location the goods leave from, or the pickup location. Set only on automatic tax rows outside the US, for goods and charges that a fulfillment sends from one location. Separate shares of a line item can have different origin locations. Omitted when the tax was sourced from the merchant's legal origin, which covers services, goods with no fulfilling location yet, goods whose fulfillments can't be split by location, a charge whose fulfillments leave from more than one location, and every external tax row..

- Value shape: string. ID of the location whose address was the seller origin for this row's tax: the location the goods leave from, or the pickup location. Set only on automatic tax rows outside the US, for goods and charges that a fulfillment sends from one location. Separate shares of a line item can have different origin locations. Omitted when the tax was sourced from the merchant's legal origin, which covers services, goods with no fulfilling location yet, goods whose fulfillments can't be split by location, a charge whose fulfillments leave from more than one location, and every external tax row. ID of the location whose address was the seller origin for this row's tax: the location the goods leave from, or the pickup location. Set only on automatic tax rows outside the US, for goods and charges that a fulfillment sends from one location. Separate shares of a line item can have different origin locations. Omitted when the tax was sourced from the merchant's legal origin, which covers services, goods with no fulfilling location yet, goods whose fulfillments can't be split by location, a charge whose fulfillments leave from more than one location, and every external tax row. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_breakdowns variant 1.[] fields 1.location_id variant 2

anyOf variant 2.

- Value shape: null. ID of the location whose address was the seller origin for this row's tax: the location the goods leave from, or the pickup location. Set only on automatic tax rows outside the US, for goods and charges that a fulfillment sends from one location. Separate shares of a line item can have different origin locations. Omitted when the tax was sourced from the merchant's legal origin, which covers services, goods with no fulfilling location yet, goods whose fulfillments can't be split by location, a charge whose fulfillments leave from more than one location, and every external tax row. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_breakdowns variant 1.[] fields 1.order_charge_id

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_breakdowns variant 1.[] fields 1.order_charge_id variant 1

anyOf variant 1: ID of the order charge this row taxes. Absent on rows for a line item or a flat order tax..

- Value shape: string. ID of the order charge this row taxes. Absent on rows for a line item or a flat order tax. ID of the order charge this row taxes. Absent on rows for a line item or a flat order tax. Example: `"och_01KEZF7C00XX8AKACP0GHKFWWT"`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_breakdowns variant 1.[] fields 1.order_charge_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order charge this row taxes. Absent on rows for a line item or a flat order tax. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_breakdowns variant 1.[] fields 1.order_id

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_breakdowns variant 1.[] fields 1.order_id variant 1

anyOf variant 1: ID of the order this tax row belongs to, including the parent of any order_line_item_id or order_charge_id reference..

- Value shape: string. ID of the order this tax row belongs to, including the parent of any order_line_item_id or order_charge_id reference. ID of the order this tax row belongs to, including the parent of any order_line_item_id or order_charge_id reference. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_breakdowns variant 1.[] fields 1.order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order this tax row belongs to, including the parent of any order_line_item_id or order_charge_id reference. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_breakdowns variant 1.[] fields 1.order_line_item_id

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_breakdowns variant 1.[] fields 1.order_line_item_id variant 1

anyOf variant 1: ID of the order line item this row taxes. Absent on rows for a charge or a flat order tax..

- Value shape: string. ID of the order line item this row taxes. Absent on rows for a charge or a flat order tax. ID of the order line item this row taxes. Absent on rows for a charge or a flat order tax. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_breakdowns variant 1.[] fields 1.order_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order line item this row taxes. Absent on rows for a charge or a flat order tax. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_breakdowns variant 1.[] fields 1.percent

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_breakdowns variant 1.[] fields 1.percent variant 1

anyOf variant 1: Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%. Present on `percentage` rows..

- Value shape: number. Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%. Present on `percentage` rows. Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%. Present on `percentage` rows. minimum: `0`. maximum: `100`. multipleOf: `0.0001`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_breakdowns variant 1.[] fields 1.percent variant 2

anyOf variant 2.

- Value shape: null. Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%. Present on `percentage` rows. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_breakdowns variant 1.[] fields 1.price_mode

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_breakdowns variant 1.[] fields 1.price_mode variant 1

anyOf variant 1: Whether the price this row taxes already includes the tax..

- Value shape: string. Whether the price this row taxes already includes the tax. Values: `"additive"`, `"inclusive"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_breakdowns variant 1.[] fields 1.price_mode variant 2

anyOf variant 2.

- Value shape: null. Whether the price this row taxes already includes the tax. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_breakdowns variant 1.[] fields 1.tax_breakdown_id

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_breakdowns variant 1.[] fields 1.tax_breakdown_id variant 1

anyOf variant 1: ID of this tax row. A refund names it in `tax_breakdown_refunds` to reverse this row's tax..

- Value shape: string. ID of this tax row. A refund names it in `tax_breakdown_refunds` to reverse this row's tax. ID of this tax row. A refund names it in `tax_breakdown_refunds` to reverse this row's tax. Example: `"txb_01KEZF7C00SHMN8QWCA8PT1HSB"`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_breakdowns variant 1.[] fields 1.tax_breakdown_id variant 2

anyOf variant 2.

- Value shape: null. ID of this tax row. A refund names it in `tax_breakdown_refunds` to reverse this row's tax. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_breakdowns variant 1.[] fields 1.tax_type

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_breakdowns variant 1.[] fields 1.tax_type variant 1

anyOf variant 1: The kind of tax this row collects..

- Value shape: string. The kind of tax this row collects. Values: `"sales_tax"`, `"use_tax"`, `"retail_delivery_fee"`, `"vat"`, `"gst"`, `"hst"`, `"pst"`, `"qst"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_breakdowns variant 1.[] fields 1.tax_type variant 2

anyOf variant 2.

- Value shape: null. The kind of tax this row collects. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_breakdowns variant 1.[] fields 1.taxability_reason

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_breakdowns variant 1.[] fields 1.taxability_reason variant 1

anyOf variant 1: Why the row's tax is what it is..

- Value shape: string. Why the row's tax is what it is. Values: `"standard_rated"`, `"not_taxable"`, `"customer_exempt"`, `"tax_disabled"`, `"location_required"`, `"calculation_incomplete"`, `"reverse_charge"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_breakdowns variant 1.[] fields 1.taxability_reason variant 2

anyOf variant 2.

- Value shape: null. Why the row's tax is what it is. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_breakdowns variant 1.[] fields 1 variant 2.calculation_type

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_breakdowns variant 1.[] fields 1 variant 2.calculation_type variant 1

anyOf group 1 variant 1: How the tax is figured: a percentage of the taxable amount, or a fixed amount..

- Value shape: string. How the tax is figured: a percentage of the taxable amount, or a fixed amount. Values: `"percentage"`, `"flat_amount"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_breakdowns variant 1.[] fields 1 variant 2.calculation_type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. How the tax is figured: a percentage of the taxable amount, or a fixed amount. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_breakdowns variant 1.[] fields 1 variant 2.calculation_type variant 3

anyOf group 2 variant 1: How the tax is figured: a percentage of the taxable amount, or a fixed amount..

- Value shape: string. How the tax is figured: a percentage of the taxable amount, or a fixed amount. Values: `"flat_amount"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_currency_conversions

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_currency_conversions variant 1

anyOf variant 1: VAT stated in the currency of the country that charges it, one entry per currency, frozen at issue. EU member states require their national currency and the UK requires sterling. Each entry gives the converted VAT, the converted taxable amount, and the rate with its source and date. Present for VAT above zero charged by an EU member state or the UK; always [] otherwise, including reverse charge, invoices in that currency already, and invoices issued before conversions were recorded. The invoice PDF prints the same figures..

- Value shape: Array of [TaxCurrencyConversionPreviousAttributes](../models/TaxCurrencyConversionPreviousAttributes.md#taxcurrencyconversionpreviousattributes). VAT stated in the currency of the country that charges it, one entry per currency, frozen at issue. EU member states require their national currency and the UK requires sterling. Each entry gives the converted VAT, the converted taxable amount, and the rate with its source and date. Present for VAT above zero charged by an EU member state or the UK; always [] otherwise, including reverse charge, invoices in that currency already, and invoices issued before conversions were recorded. The invoice PDF prints the same figures. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_currency_conversions variant 2

anyOf variant 2.

- Value shape: null. VAT stated in the currency of the country that charges it, one entry per currency, frozen at issue. EU member states require their national currency and the UK requires sterling. Each entry gives the converted VAT, the converted taxable amount, and the rate with its source and date. Present for VAT above zero charged by an EU member state or the UK; always [] otherwise, including reverse charge, invoices in that currency already, and invoices issued before conversions were recorded. The invoice PDF prints the same figures. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_currency_conversions variant 1.[] fields 1

Field definitions: [CreditNoteIssuedMerchantEventDataPreviousAttributes.tax_currency_conversions variant 1.[] fields 1](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributestax_currency_conversions-variant-1-fields-1).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption

Exemption assessment captured on this invoice. A draft previews the backing order's assessment; issue freezes it. Omitted when no assessment was recorded, including on older invoices. Buyer views omit evidence_reference. An exemption and a reverse charge never apply to the same invoice: when an exemption applies, Flint calculates no tax, so tax_reverse_charge is null.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `certificate_number` | Conditional | string or null | Certificate number recorded at assessment. Omitted when none was recorded. `certificate_number`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1tax_exemption-variant-1certificate_number). |
| `coverage` | Conditional | object and Alternative shapes (see declared variants) or null | Jurisdictions covered by the exemption at assessment. Omitted when no coverage was recorded. `coverage`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1tax_exemption-variant-1coverage). |
| `customer_id` | Conditional | string or null | ID of the customer the exemption was assessed from, when one was linked. `customer_id`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1tax_exemption-variant-1customer_id). |
| `customer_tax_exemption_id` | Conditional | string or null | Customer exemption record used for this assessment. Omitted for blanket flags, order declarations, and older snapshots. `customer_tax_exemption_id`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1tax_exemption-variant-1customer_tax_exemption_id). |
| `end_date` | Conditional | string or null | Last day of the selected record's exemption, inclusive. Omitted when no end date was recorded. `end_date`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1tax_exemption-variant-1end_date). |
| `evidence_reference` | Conditional | string or null | Merchant-only reference to supporting evidence recorded at assessment. Buyer views omit it. Never printed on buyer documents. `evidence_reference`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1tax_exemption-variant-1evidence_reference). |
| `reason` | Conditional | string or null | Exemption reason recorded at assessment. Omitted when no reason was recorded. Values: [13 declared values](BuyerOrderTaxExemptionInput.md#buyerordertaxexemptioninput-reason-values). `reason`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1tax_exemption-variant-1reason). |
| `source` | Conditional | string or null | The source of the tax exemption assessment. Omitted when the source has not been established. Values: `"none"`, `"customer"`, `"order"`. `source`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1tax_exemption-variant-1source). |
| `start_date` | Conditional | string or null | First day of the selected record's exemption, inclusive. Omitted when no date was recorded. `start_date`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1tax_exemption-variant-1start_date). |
| `tax_exempt` | Conditional | boolean or null | Whether an exemption applied to this sale. An exempt sale has zero tax and taxability_reason customer_exempt. `tax_exempt`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1tax_exemption-variant-1tax_exempt). |

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 1

anyOf OrderTaxExemptionPreviousAttributes.

- Optional: `certificate_number`, `coverage`, `customer_id`, `customer_tax_exemption_id`, `end_date`, `evidence_reference`, `reason`, `source`, `start_date`, `tax_exempt`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 2

anyOf variant 2.

- Undeclared: `certificate_number`, `coverage`, `customer_id`, `customer_tax_exemption_id`, `end_date`, `evidence_reference`, `reason`, `source`, `start_date`, `tax_exempt`.
- Value shape: null. Exemption assessment captured on this invoice. A draft previews the backing order's assessment; issue freezes it. Omitted when no assessment was recorded, including on older invoices. Buyer views omit evidence_reference. An exemption and a reverse charge never apply to the same invoice: when an exemption applies, Flint calculates no tax, so tax_reverse_charge is null. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 1.certificate_number

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 1.certificate_number variant 1

anyOf variant 1: Certificate number recorded at assessment. Omitted when none was recorded..

- Value shape: string. Certificate number recorded at assessment. Omitted when none was recorded. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 1.certificate_number variant 2

anyOf variant 2.

- Value shape: null. Certificate number recorded at assessment. Omitted when none was recorded. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 1.coverage

Jurisdictions covered by the exemption at assessment. Omitted when no coverage was recorded.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `country` | Conditional | string or null | Country covered by this exemption. Only US is accepted. Uses ISO 3166-1 alpha-2 country codes. Values: `"US"`. `country`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1tax_exemption-variant-1coverage-variant-1country). |
| `states` | Conditional | Array of string or null | US postal state codes or DC. Required for states and forbidden for all_states. Items values: [51 declared values](CustomerTaxExemptionCoverageInput.md#customertaxexemptioncoverageinput-states--values). `states`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1tax_exemption-variant-1coverage-variant-1states). |
| `type` | Conditional | (string or null) | Choose all_states or states explicitly. Values: `"all_states"`, `"states"`. `type`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1tax_exemption-variant-1coverage-variant-1type), [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1tax_exemption-variant-1coverage-variant-2type). |

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 1.coverage variant 1: `country` = `"US"`, `type` = `"all_states"`

anyOf CustomerTaxExemptionCoveragePreviousAttributes; anyOf CustomerTaxExemptionCoverageAllStatesPreviousAttributes.

- Optional: `country`, `states`, `type`.
- Constraints for `type`: Values: `"all_states"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 1.coverage variant 2: `country` = `"US"`, `type` = `"states"`

anyOf CustomerTaxExemptionCoveragePreviousAttributes; anyOf CustomerTaxExemptionCoverageStatesPreviousAttributes.

- Optional: `country`, `states`, `type`.
- Constraints for `type`: Values: `"states"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 1.coverage variant 3

anyOf variant 2.

- Undeclared: `country`, `states`, `type`.
- Value shape: null. Jurisdictions covered by the exemption at assessment. Omitted when no coverage was recorded. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 1.coverage variant 1.country

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 1.coverage variant 1.country variant 1

anyOf variant 1: Country covered by this exemption. Only US is accepted. Uses ISO 3166-1 alpha-2 country codes..

- Value shape: string. Country covered by this exemption. Only US is accepted. Uses ISO 3166-1 alpha-2 country codes. Country covered by this exemption. Only US is accepted. Uses ISO 3166-1 alpha-2 country codes. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Example: `"US"`. Values: `"US"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 1.coverage variant 1.country variant 2

anyOf variant 2.

- Value shape: null. Country covered by this exemption. Only US is accepted. Uses ISO 3166-1 alpha-2 country codes. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 1.coverage variant 1.states

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 1.coverage variant 1.states variant 1

anyOf variant 1: US postal state codes or DC. Required for states and forbidden for all_states..

- Value shape: Array of string. US postal state codes or DC. Required for states and forbidden for all_states. US postal state codes or DC. Required for states and forbidden for all_states. minItems: `1`. maxItems: `60`. uniqueItems: `true`. Items values: `"AL"`, `"AK"`, `"AZ"`, `"AR"`, `"CA"`, `"CO"`, `"CT"`, `"DE"`, `"DC"`, `"FL"`, `"GA"`, `"HI"`, `"ID"`, `"IL"`, `"IN"`, `"IA"`, `"KS"`, `"KY"`, `"LA"`, `"ME"`, `"MD"`, `"MA"`, `"MI"`, `"MN"`, `"MS"`, `"MO"`, `"MT"`, `"NE"`, `"NV"`, `"NH"`, `"NJ"`, `"NM"`, `"NY"`, `"NC"`, `"ND"`, `"OH"`, `"OK"`, `"OR"`, `"PA"`, `"RI"`, `"SC"`, `"SD"`, `"TN"`, `"TX"`, `"UT"`, `"VT"`, `"VA"`, `"WA"`, `"WV"`, `"WI"`, `"WY"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 1.coverage variant 1.states variant 2

anyOf variant 2.

- Value shape: null. US postal state codes or DC. Required for states and forbidden for all_states. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 1.coverage variant 1.type

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 1.coverage variant 1.type variant 1

anyOf group 1 variant 1: Choose all_states or states explicitly..

- Value shape: string. Choose all_states or states explicitly. Values: `"all_states"`, `"states"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 1.coverage variant 1.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. Choose all_states or states explicitly. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 1.coverage variant 1.type variant 3, 5

anyOf group 2 variant 1: Choose all_states or states explicitly.; anyOf group 3 variant 1.

- Value shape: string. Choose all_states or states explicitly. Values: `"all_states"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 1.coverage variant 2.country

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 1.coverage variant 1.country](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1tax_exemption-variant-1coverage-variant-1country).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 1.coverage variant 2.states

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 1.coverage variant 1.states](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1tax_exemption-variant-1coverage-variant-1states).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 1.coverage variant 2.type

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 1.coverage variant 2.type variant 1

anyOf group 1 variant 1: Choose all_states or states explicitly..

- Value shape: string. Choose all_states or states explicitly. Values: `"all_states"`, `"states"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 1.coverage variant 2.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. Choose all_states or states explicitly. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 1.coverage variant 2.type variant 3, 5

anyOf group 2 variant 1: Choose all_states or states explicitly.; anyOf group 3 variant 1.

- Value shape: string. Choose all_states or states explicitly. Values: `"states"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 1.customer_id

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 1.customer_id variant 1

anyOf variant 1: ID of the customer the exemption was assessed from, when one was linked..

- Value shape: string. ID of the customer the exemption was assessed from, when one was linked. ID of the customer the exemption was assessed from, when one was linked. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 1.customer_id variant 2

anyOf variant 2.

- Value shape: null. ID of the customer the exemption was assessed from, when one was linked. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 1.customer_tax_exemption_id

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 1.customer_tax_exemption_id variant 1

anyOf variant 1: Customer exemption record used for this assessment. Omitted for blanket flags, order declarations, and older snapshots..

- Value shape: string. Customer exemption record used for this assessment. Omitted for blanket flags, order declarations, and older snapshots. Customer exemption record used for this assessment. Omitted for blanket flags, order declarations, and older snapshots. Example: `"ctex_01KEZF7C009N0YTK0NMWP1XZPW"`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 1.customer_tax_exemption_id variant 2

anyOf variant 2.

- Value shape: null. Customer exemption record used for this assessment. Omitted for blanket flags, order declarations, and older snapshots. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 1.end_date

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 1.end_date variant 1

anyOf variant 1: Last day of the selected record's exemption, inclusive. Omitted when no end date was recorded..

- Value shape: string. Last day of the selected record's exemption, inclusive. Omitted when no end date was recorded. Last day of the selected record's exemption, inclusive. Omitted when no end date was recorded. Format: `date`. Example: `"2026-08-02"`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 1.end_date variant 2

anyOf variant 2.

- Value shape: null. Last day of the selected record's exemption, inclusive. Omitted when no end date was recorded. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 1.evidence_reference

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 1.evidence_reference variant 1

anyOf variant 1: Merchant-only reference to supporting evidence recorded at assessment. Buyer views omit it. Never printed on buyer documents..

- Value shape: string. Merchant-only reference to supporting evidence recorded at assessment. Buyer views omit it. Never printed on buyer documents. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 1.evidence_reference variant 2

anyOf variant 2.

- Value shape: null. Merchant-only reference to supporting evidence recorded at assessment. Buyer views omit it. Never printed on buyer documents. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 1.reason

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 1.reason variant 1

anyOf variant 1: Exemption reason recorded at assessment. Omitted when no reason was recorded..

- Value shape: string. Exemption reason recorded at assessment. Omitted when no reason was recorded. Values: `"federal_government"`, `"state_or_local_government"`, `"tribal_government"`, `"foreign_diplomat"`, `"charitable_organization"`, `"religious_organization"`, `"educational_organization"`, `"resale"`, `"agricultural_production"`, `"industrial_production"`, `"direct_pay_permit"`, `"direct_mail"`, `"other"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 1.reason variant 2

anyOf variant 2.

- Value shape: null. Exemption reason recorded at assessment. Omitted when no reason was recorded. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 1.source

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 1.source variant 1

anyOf variant 1: The source of the tax exemption assessment. Omitted when the source has not been established..

- Value shape: string. The source of the tax exemption assessment. Omitted when the source has not been established. Values: `"none"`, `"customer"`, `"order"`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 1.source variant 2

anyOf variant 2.

- Value shape: null. The source of the tax exemption assessment. Omitted when the source has not been established. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 1.start_date

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 1.start_date variant 1

anyOf variant 1: First day of the selected record's exemption, inclusive. Omitted when no date was recorded..

- Value shape: string. First day of the selected record's exemption, inclusive. Omitted when no date was recorded. First day of the selected record's exemption, inclusive. Omitted when no date was recorded. Format: `date`. Example: `"2026-08-02"`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 1.start_date variant 2

anyOf variant 2.

- Value shape: null. First day of the selected record's exemption, inclusive. Omitted when no date was recorded. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 1.tax_exempt

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 1.tax_exempt variant 1

anyOf variant 1: Whether an exemption applied to this sale. An exempt sale has zero tax and taxability_reason customer_exempt..

- Value shape: boolean. Whether an exemption applied to this sale. An exempt sale has zero tax and taxability_reason customer_exempt. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 1.tax_exempt variant 2

anyOf variant 2.

- Value shape: null. Whether an exemption applied to this sale. An exempt sale has zero tax and taxability_reason customer_exempt. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_reverse_charge

The order's reverse charge, frozen when the invoice is issued: the buyer accounts for the tax, and documents print "Reverse charge" with the buyer's tax ID. `null` when no reverse charge applies, including when an exemption applies: Flint calculates no tax for an exempt sale, so the two never appear on the same invoice. Drafts preview the order's current value.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_tax_id` | Conditional | Alternative shapes (see declared variants) or null | The customer's tax ID the reverse charge relied on. Frozen once the order is paid; recalculating tax before payment reads the customer's current tax IDs again. `null` when external tax sent a reverse charge and the customer has no tax ID for that country. `customer_tax_id`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1tax_reverse_charge-variant-1customer_tax_id). |

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_reverse_charge variant 1

anyOf variant 1: The order's reverse charge, frozen when the invoice is issued: the buyer accounts for the tax, and documents print "Reverse charge" with the buyer's tax ID. `null` when no reverse charge applies, including when an exemption applies: Flint calculates no tax for an exempt sale, so the two never appear on the same invoice. Drafts preview the order's current value.; anyOf TaxReverseChargePreviousAttributes.

- Optional: `customer_tax_id`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_reverse_charge variant 2, 3

anyOf variant 1: The order's reverse charge, frozen when the invoice is issued: the buyer accounts for the tax, and documents print "Reverse charge" with the buyer's tax ID. `null` when no reverse charge applies, including when an exemption applies: Flint calculates no tax for an exempt sale, so the two never appear on the same invoice. Drafts preview the order's current value.; anyOf variant 2; anyOf variant 2.

- Undeclared: `customer_tax_id`.
- Value shape: null. The order's reverse charge, frozen when the invoice is issued: the buyer accounts for the tax, and documents print "Reverse charge" with the buyer's tax ID. `null` when no reverse charge applies, including when an exemption applies: Flint calculates no tax for an exempt sale, so the two never appear on the same invoice. Drafts preview the order's current value. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_reverse_charge variant 1.customer_tax_id

The customer's tax ID the reverse charge relied on. Frozen once the order is paid; recalculating tax before payment reads the customer's current tax IDs again. `null` when external tax sent a reverse charge and the customer has no tax ID for that country.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `country` | Conditional | string or null | Country of the tax ID, as entered on the customer. Greek VAT IDs may use EL. `country`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1tax_reverse_charge-variant-1customer_tax_id-variant-1country). |
| `identifier_type` | Conditional | string or null | Type of the tax ID, as entered on the customer. `identifier_type`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1tax_reverse_charge-variant-1customer_tax_id-variant-1identifier_type). |
| `region` | Conditional | string or null or null | Region of the tax ID. `null` when the tax ID has no region. `region`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1tax_reverse_charge-variant-1customer_tax_id-variant-1region). |
| `value` | Conditional | string or null | The tax ID. `value`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1tax_reverse_charge-variant-1customer_tax_id-variant-1value). |

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_reverse_charge variant 1.customer_tax_id variant 1

anyOf variant 1: The customer's tax ID the reverse charge relied on. Frozen once the order is paid; recalculating tax before payment reads the customer's current tax IDs again. `null` when external tax sent a reverse charge and the customer has no tax ID for that country.; anyOf CustomerTaxIDPreviousAttributes.

- Optional: `country`, `identifier_type`, `region`, `value`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_reverse_charge variant 1.customer_tax_id variant 2, 3

anyOf variant 1: The customer's tax ID the reverse charge relied on. Frozen once the order is paid; recalculating tax before payment reads the customer's current tax IDs again. `null` when external tax sent a reverse charge and the customer has no tax ID for that country.; anyOf variant 2; anyOf variant 2.

- Undeclared: `country`, `identifier_type`, `region`, `value`.
- Value shape: null. The customer's tax ID the reverse charge relied on. Frozen once the order is paid; recalculating tax before payment reads the customer's current tax IDs again. `null` when external tax sent a reverse charge and the customer has no tax ID for that country. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_reverse_charge variant 1.customer_tax_id variant 1.country

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_reverse_charge variant 1.customer_tax_id variant 1.country variant 1

anyOf variant 1: Country of the tax ID, as entered on the customer. Greek VAT IDs may use EL..

- Value shape: string. Country of the tax ID, as entered on the customer. Greek VAT IDs may use EL. Country of the tax ID, as entered on the customer. Greek VAT IDs may use EL. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Example: `"US"`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_reverse_charge variant 1.customer_tax_id variant 1.country variant 2

anyOf variant 2.

- Value shape: null. Country of the tax ID, as entered on the customer. Greek VAT IDs may use EL. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_reverse_charge variant 1.customer_tax_id variant 1.identifier_type

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_reverse_charge variant 1.customer_tax_id variant 1.identifier_type variant 1

anyOf variant 1: Type of the tax ID, as entered on the customer..

- Value shape: string. Type of the tax ID, as entered on the customer. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_reverse_charge variant 1.customer_tax_id variant 1.identifier_type variant 2

anyOf variant 2.

- Value shape: null. Type of the tax ID, as entered on the customer. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_reverse_charge variant 1.customer_tax_id variant 1.region

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_reverse_charge variant 1.customer_tax_id variant 1.region variant 1

anyOf variant 1: Region of the tax ID. `null` when the tax ID has no region..

- Value shape: (string or null). Region of the tax ID. `null` when the tax ID has no region. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_reverse_charge variant 1.customer_tax_id variant 1.region variant 2

anyOf variant 2.

- Value shape: null. Region of the tax ID. `null` when the tax ID has no region. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_reverse_charge variant 1.customer_tax_id variant 1.value

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_reverse_charge variant 1.customer_tax_id variant 1.value variant 1

anyOf variant 1: The tax ID..

- Value shape: string. The tax ID. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_reverse_charge variant 1.customer_tax_id variant 1.value variant 2

anyOf variant 2.

- Value shape: null. The tax ID. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.status

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.status](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinvoice-variant-1status).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.subscription_id

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.subscription_id variant 1

anyOf variant 1: The subscription the backing order belongs to, copied when the draft is created and never changed. `null` when the order isn't part of a subscription..

- Value shape: (string or null). The subscription the backing order belongs to, copied when the draft is created and never changed. `null` when the order isn't part of a subscription. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.subscription_id variant 2

anyOf variant 2.

- Value shape: null. The subscription the backing order belongs to, copied when the draft is created and never changed. `null` when the order isn't part of a subscription. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.supported_actions

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice variant 1.supported_actions](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinvoice-variant-1supported_actions).

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

