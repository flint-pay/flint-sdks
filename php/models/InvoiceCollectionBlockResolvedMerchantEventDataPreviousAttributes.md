[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `cc_emails` | Optional | Array of string or null | Additional recipients copied on the invoice email and every reminder. `cc_emails`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributescc_emails). |
| `closed_at` | Optional | string or null | When the current closed interval began. Cleared when status returns to open or partially_paid. A direct move between closed statuses preserves this timestamp. `closed_at`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesclosed_at). |
| `collection` | Optional | object and Alternative shapes (see declared variants) or null | How this invoice is collected, resolved when the draft is written. Send this object back when updating its collection policy. `collection`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributescollection). |
| `collection_block_status` | Optional | string or null | Whether collection is blocked. While it is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Values: `"none"`, `"inventory_blocked"`, `"resolved"`. `collection_block_status`: [declared alternatives](../models/ExpandedInvoiceSummaryPreviousAttributes.md#expandedinvoicesummarypreviousattributescollection_block_status). |
| `created_at` | Optional | string or null | When the invoice was created. `created_at`: [declared alternatives](../models/ExpandedInvoiceSummaryPreviousAttributes.md#expandedinvoicesummarypreviousattributescreated_at). |
| `customer` | Optional | [ExpandedCustomerSummaryPreviousAttributes](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributes) or null | Summary of the billed customer. Returned only with expand=customer. Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. `customer`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributescustomer). |
| `customer_id` | Optional | string or null | Customer billed by this invoice. Absent when the invoice has no customer. `customer_id`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributescustomer_id). |
| `delivery_mode` | Optional | string or null | How issue delivered the invoice. Values: `"email"`, `"caller_managed"`. `delivery_mode`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesdelivery_mode). |
| `due_date` | Optional | string or null | Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only after this date ends. Automatic collection runs at the later of issue and the start of this date. With payment terms, issue computes this date from issued_at. Absent when there is no due date. `due_date`: [declared alternatives](../models/ExpandedInvoiceSummaryPreviousAttributes.md#expandedinvoicesummarypreviousattributesdue_date). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Use it as your sync key: it isn't printed on the invoice. `null` when unset. `external_reference_id`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesexternal_reference_id). |
| `footer` | Optional | string or null | Fine print at the bottom of the invoice and PDF. It cannot change after issue. `null` when unset. `footer`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesfooter). |
| `invoice_id` | Optional | string or null | Flint invoice ID. `invoice_id`: [declared alternatives](../models/ExpandedInvoiceSummaryPreviousAttributes.md#expandedinvoicesummarypreviousattributesinvoice_id). |
| `invoice_number` | Optional | string or null | Sequential document number assigned when the invoice is issued. Numbering is per merchant, with test and live mode numbered independently. `invoice_number`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesinvoice_number). |
| `is_overdue` | Optional | boolean or null | Whether the invoice is open or partially_paid and past due with a balance remaining. Without schedule_entries, the due_date has ended in timezone (UTC when absent) and outstanding_money is above zero; with them, at least one entry is overdue. Computed when the invoice is read. `is_overdue`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesis_overdue). |
| `issued_at` | Optional | string or null | When the invoice was issued. Absent on a draft. `issued_at`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesissued_at). |
| `late_fees` | Optional | Array of [InvoiceLateFeePreviousAttributes](../models/InvoiceLateFeePreviousAttributes.md#invoicelatefeepreviousattributes) or null | Late fees assessed on this invoice, each with its paid, waived, written-off, and outstanding amounts. settlement_amounts.late_fee_money is their assessed total minus waivers. `late_fees`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributeslate_fees). |
| `memo` | Optional | string or null | Message to the customer, printed on the invoice and PDF. It cannot change after issue. `null` when unset. `memo`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesmemo). |
| `merchant_id` | Optional | string or null | Merchant that owns this invoice. `merchant_id`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesmerchant_id). |
| `metadata` | Optional | Map of string or null | Caller-owned metadata. `metadata`: [declared alternatives](../models/DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.md#deliverylocationsetarchivedmerchanteventdatapreviousattributesmetadata). |
| `order` | Optional | [ExpandedOrderSummaryPreviousAttributes](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributes) or null | Summary of the backing order. Returned only with expand=order. Present only when `expand` includes `order`; `null` when expanded and there is no related order. `order`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesorder). |
| `order_id` | Optional | string or null | The order this invoice bills. Every invoice has one; quick pay creates it. `order_id`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesorder_id). |
| `paid_at` | Optional | string or null | When the invoice most recently became paid. Cleared when status leaves paid and set again on a later paid transition. `paid_at`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributespaid_at). |
| `payment_due` | Optional | object and Alternative shapes (see declared variants) or null | The resolved due-date policy. Send this object back when updating the draft; payment_terms captures the term's current revision again. `payment_due`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributespayment_due). |
| `payment_terms_snapshot` | Optional | [InvoicePaymentTermsSnapshotPreviousAttributes](../models/InvoicePaymentTermsSnapshotPreviousAttributes.md#invoicepaymenttermssnapshotpreviousattributes) or null | The payment term captured on the draft, with its due date rule and late fee policy. Later changes to the payment term don't affect this invoice. `payment_terms_snapshot`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributespayment_terms_snapshot). |
| `po_number` | Optional | string or null | The buyer's purchase order number, printed on the invoice and PDF. It cannot change after issue. `null` when unset. `po_number`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributespo_number). |
| `pricing_amounts` | Optional | [PricingAmountsPreviousAttributes](../models/PricingAmountsPreviousAttributes.md#pricingamountspreviousattributes) or null | The invoice pricing totals, frozen at issue. A draft previews the backing order. total_money excludes late fees, which are in settlement_amounts.late_fee_money. |
| `recipient_email` | Optional | string or null | Where Flint emails the invoice and its reminders. Email delivery requires it at issue. `null` when unset. `recipient_email`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesrecipient_email). |
| `reference` | Optional | string or null | Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase order number goes in po_number. It cannot change after issue. `null` when unset. `reference`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesreference). |
| `refund_status` | Optional | string or null | How much of the collected money has been refunded. It doesn't change status. Values: `"none"`, `"partially_refunded"`, `"refunded"`. `refund_status`: [declared alternatives](../models/ExpandedInvoiceSummaryPreviousAttributes.md#expandedinvoicesummarypreviousattributesrefund_status). |
| `reminders_paused` | Optional | boolean or null | Whether automatic reminders are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it. `reminders_paused`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesreminders_paused). |
| `reminders_paused_at` | Optional | string or null | When automatic reminders were paused. Absent while reminders are active. `reminders_paused_at`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesreminders_paused_at). |
| `remit_to_address` | Optional | [AddressPreviousAttributes](../models/AddressPreviousAttributes.md#addresspreviousattributes) or null | Where the buyer sends offline payments, shown on the invoice. Defaults to the invoice settings remit-to address. `remit_to_address`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesremit_to_address). |
| `schedule_entries` | Optional | Array of [InvoiceScheduleEntryPreviousAttributes](../models/InvoiceScheduleEntryPreviousAttributes.md#invoicescheduleentrypreviousattributes) or null | The payment schedule, in schedule order. Always [] when the invoice has no schedule and is collected in one balance. `schedule_entries`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesschedule_entries). |
| `scheduled_issue_at` | Optional | string or null | When Flint will issue and deliver this draft. `null` when no issue is scheduled. Cleared when the draft is issued or voided, or when you send null. `scheduled_issue_at`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesscheduled_issue_at). |
| `service_date` | Optional | string or null | The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it as written, without timezone conversion. `null` when unset. `service_date`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributesservice_date). |
| `settlement_amounts` | Optional | [InvoiceSettlementAmountsPreviousAttributes](../models/InvoiceSettlementAmountsPreviousAttributes.md#invoicesettlementamountspreviousattributes) or null | Payments, refunds, write-offs, allocated credit notes, late fees, and the remaining invoice balance. What is still owed: pricing_amounts.total_money + late_fee_money - paid_money - credited_money - written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided invoices; equal to pricing_amounts.total_money on a draft. Refunds and card chargebacks don't change it. Lost bank returns reopen the balance. |
| `snapshot` | Optional | [InvoiceSnapshotPreviousAttributes](../models/InvoiceSnapshotPreviousAttributes.md#invoicesnapshotpreviousattributes) or null | The billing content of the invoice: line items, discounts, charges, tip, and tax. A draft previews the backing order; issue freezes it, and later order changes don't reach an issued invoice. |
| `status` | Optional | string or null | Current invoice status. paid and credited close the current balance and can reopen to open or partially_paid after a payment or credit allocation reversal; invoice.reopened reports that change. An uncollectible invoice accepts manual recovery payments and becomes paid when fully recovered; reversals restore the write-off. voided is final. Refunds change refund_status without reopening the balance. An ACH bank return reverses paid_money and reopens the balance. A lost card chargeback leaves paid_money, the balance, and status unchanged; collecting it again requires a new invoice. Values: `"draft"`, `"open"`, `"partially_paid"`, `"paid"`, `"voided"`, `"uncollectible"`, `"credited"`. `status`: [declared alternatives](../models/ExpandedInvoiceSummaryPreviousAttributes.md#expandedinvoicesummarypreviousattributesstatus). |
| `subscription_id` | Optional | string or null | The subscription the backing order belongs to, copied when the draft is created and never changed. `null` when the order isn't part of a subscription. `subscription_id`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessubscription_id). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. Items values: `"collect"`, `"issue"`, `"mark_uncollectible"`, `"void"`. `supported_actions`: [declared alternatives](../models/ExpandedInvoiceSummaryPreviousAttributes.md#expandedinvoicesummarypreviousattributessupported_actions). |
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
- Constraints for `payment_method_id`: string or null.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.collection variant 2: `mode` = `"automatic"`

anyOf InvoiceCollectionPreviousAttributes; anyOf InvoiceCollectionAutomaticPreviousAttributes.

- Optional: `mode`, `payment_method_id`, `payment_policy`.
- Constraints for `mode`: Values: `"automatic"`.
- Constraints for `payment_method_id`: (string or null).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.collection variant 3: `mode` = `"external"`

anyOf InvoiceCollectionPreviousAttributes; anyOf InvoiceCollectionExternalPreviousAttributes.

- Optional: `mode`, `payment_method_id`, `payment_policy`.
- Constraints for `mode`: Values: `"external"`.
- Constraints for `payment_method_id`: string or null.

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

- Value shape: string. The saved card Flint charges. Present only with automatic. `null` when the draft will use the customer's default card, selected at issue. After issue it is the selected card. The saved card Flint charges. Present only with automatic. `null` when the draft will use the customer's default card, selected at issue. After issue it is the selected card. Example: `"pm_01KEZF7C0034B248TXXE4NXYFZ"`. 

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

- Value shape: string. The saved card Flint charges. Present only with automatic. `null` when the draft will use the customer's default card, selected at issue. After issue it is the selected card. The saved card Flint charges. Present only with automatic. `null` when the draft will use the customer's default card, selected at issue. After issue it is the selected card. Example: `"pm_01KEZF7C0034B248TXXE4NXYFZ"`. 

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

Declared alternatives: [ExpandedInvoiceSummaryPreviousAttributes.collection_block_status](../models/ExpandedInvoiceSummaryPreviousAttributes.md#expandedinvoicesummarypreviousattributescollection_block_status).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.created_at

Declared alternatives: [ExpandedInvoiceSummaryPreviousAttributes.created_at](../models/ExpandedInvoiceSummaryPreviousAttributes.md#expandedinvoicesummarypreviousattributescreated_at).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.customer

Summary of the billed customer. Returned only with expand=customer. Present only when `expand` includes `customer`; `null` when expanded and there is no related customer.

Field definitions: [shared fields](BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributescustomer).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.customer variant 1

anyOf ExpandedCustomerSummaryPreviousAttributes.

- Optional: `created_at`, `customer_id`, `email`, `name`, `phone`, `status`, `updated_at`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.customer variant 2

anyOf variant 2.

- Undeclared: `created_at`, `customer_id`, `email`, `name`, `phone`, `status`, `updated_at`.
- Value shape: null. Summary of the billed customer. Returned only with expand=customer. Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.customer variant 1.created_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.customer variant 1.customer_id

Declared alternatives: [BuyerRefundPreviousAttributes.customer variant 1.customer_id](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributescustomer-variant-1customer_id).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.customer variant 1.email

Declared alternatives: [ExpandedCustomerSummaryPreviousAttributes.email](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributesemail).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.customer variant 1.name

Declared alternatives: [ExpandedCustomerSummaryPreviousAttributes.name](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributesname).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.customer variant 1.phone

Declared alternatives: [ExpandedCustomerSummaryPreviousAttributes.phone](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributesphone).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.customer variant 1.status

Declared alternatives: [ExpandedCustomerSummaryPreviousAttributes.status](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributesstatus).

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

Declared alternatives: [ExpandedInvoiceSummaryPreviousAttributes.due_date](../models/ExpandedInvoiceSummaryPreviousAttributes.md#expandedinvoicesummarypreviousattributesdue_date).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.external_reference_id

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.external_reference_id variant 1

anyOf variant 1: Caller-owned identifier for this resource in an external system. Use it as your sync key: it isn't printed on the invoice. `null` when unset..

- Value shape: string. Caller-owned identifier for this resource in an external system. Use it as your sync key: it isn't printed on the invoice. `null` when unset. Caller-owned identifier for this resource in an external system. Use it as your sync key: it isn't printed on the invoice. `null` when unset. minLength: `1`. maxLength: `255`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.external_reference_id variant 2

anyOf variant 2.

- Value shape: null. Caller-owned identifier for this resource in an external system. Use it as your sync key: it isn't printed on the invoice. `null` when unset. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.footer

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.footer variant 1

anyOf variant 1: Fine print at the bottom of the invoice and PDF. It cannot change after issue. `null` when unset..

- Value shape: string. Fine print at the bottom of the invoice and PDF. It cannot change after issue. `null` when unset. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.footer variant 2

anyOf variant 2.

- Value shape: null. Fine print at the bottom of the invoice and PDF. It cannot change after issue. `null` when unset. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.invoice_id

Declared alternatives: [ExpandedInvoiceSummaryPreviousAttributes.invoice_id](../models/ExpandedInvoiceSummaryPreviousAttributes.md#expandedinvoicesummarypreviousattributesinvoice_id).

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

- Value shape: string. Message to the customer, printed on the invoice and PDF. It cannot change after issue. `null` when unset. 

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

anyOf ExpandedOrderSummaryPreviousAttributes.

- Optional: `buyer_contact`, `closed_at`, `closed_reason`, `created_at`, `customer_id`, `deferred_promotions`, `fulfillment_status`, `governing_delivery_selection_id`, `order_id`, `order_number`, `paid_at`, `payment_intent_ids`, `payment_status`, `pricing_amounts`, `refund_status`, `settlement_amounts`, `status`, `supported_actions`, `updated_at`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.order variant 2

anyOf variant 2.

- Undeclared: `buyer_contact`, `closed_at`, `closed_reason`, `created_at`, `customer_id`, `deferred_promotions`, `fulfillment_status`, `governing_delivery_selection_id`, `order_id`, `order_number`, `paid_at`, `payment_intent_ids`, `payment_status`, `pricing_amounts`, `refund_status`, `settlement_amounts`, `status`, `supported_actions`, `updated_at`.
- Value shape: null. Summary of the backing order. Returned only with expand=order. Present only when `expand` includes `order`; `null` when expanded and there is no related order. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.order variant 1.buyer_contact

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.buyer_contact](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesbuyer_contact).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.order variant 1.closed_at

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.closed_at](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1closed_at).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.order variant 1.closed_reason

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.closed_reason](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesclosed_reason).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.order variant 1.created_at

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.created_at](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1created_at).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.order variant 1.customer_id

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.customer_id](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1customer_id).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.order variant 1.deferred_promotions

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.deferred_promotions](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesdeferred_promotions).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.order variant 1.fulfillment_status

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.fulfillment_status](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesfulfillment_status).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.order variant 1.governing_delivery_selection_id

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.governing_delivery_selection_id](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1governing_delivery_selection_id).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.order variant 1.order_id

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.order_id](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1order_id).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.order variant 1.order_number

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.order_number](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesorder_number).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.order variant 1.paid_at

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.paid_at](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1paid_at).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.order variant 1.payment_intent_ids

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.payment_intent_ids](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1payment_intent_ids).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.order variant 1.payment_status

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.payment_status](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributespayment_status).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.order variant 1.refund_status

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.refund_status](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesrefund_status).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.order variant 1.status

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.status](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesstatus).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.order variant 1.supported_actions

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.supported_actions](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributessupported_actions).

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
| `calculation` | Conditional | object and Alternative shapes (see declared variants) or null | Rule used to calculate the invoice's due date when it is issued. `calculation`: [declared alternatives](../models/InvoicePaymentTermsSnapshotPreviousAttributes.md#invoicepaymenttermssnapshotpreviousattributescalculation). |
| `invoice_payment_term_id` | Conditional | string or null | ID of the payment term captured on this invoice. `invoice_payment_term_id`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributespayment_terms_snapshot-variant-1invoice_payment_term_id). |
| `late_fee_policy` | Conditional | object and Alternative shapes (see declared variants) or null | One-time late fee policy captured with this term. Absent when no late fee policy applies. `late_fee_policy`: [declared alternatives](../models/InvoicePaymentTermsSnapshotPreviousAttributes.md#invoicepaymenttermssnapshotpreviousattributeslate_fee_policy). |
| `name` | Conditional | string or null | Name of the payment term shown on invoices. `name`: [declared alternatives](../models/InvoicePaymentTermsSnapshotPreviousAttributes.md#invoicepaymenttermssnapshotpreviousattributesname). |
| `version` | Conditional | integer or null | Version of the invoice payment term captured in this snapshot. `version`: [declared alternatives](../models/InvoicePaymentTermsSnapshotPreviousAttributes.md#invoicepaymenttermssnapshotpreviousattributesversion). |

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1

anyOf InvoicePaymentTermsSnapshotPreviousAttributes.

- Optional: `calculation`, `invoice_payment_term_id`, `late_fee_policy`, `name`, `version`.

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 2

anyOf variant 2.

- Undeclared: `calculation`, `invoice_payment_term_id`, `late_fee_policy`, `name`, `version`.
- Value shape: null. The payment term captured on the draft, with its due date rule and late fee policy. Later changes to the payment term don't affect this invoice. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.calculation

Declared alternatives: [InvoicePaymentTermsSnapshotPreviousAttributes.calculation](../models/InvoicePaymentTermsSnapshotPreviousAttributes.md#invoicepaymenttermssnapshotpreviousattributescalculation).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.invoice_payment_term_id

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.invoice_payment_term_id variant 1

anyOf variant 1: ID of the payment term captured on this invoice..

- Value shape: string. ID of the payment term captured on this invoice. ID of the payment term captured on this invoice. Example: `"ipt_01KEZF7C0064N1V301BBMQ37R4"`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.invoice_payment_term_id variant 2

anyOf variant 2.

- Value shape: null. ID of the payment term captured on this invoice. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.late_fee_policy

Declared alternatives: [InvoicePaymentTermsSnapshotPreviousAttributes.late_fee_policy](../models/InvoicePaymentTermsSnapshotPreviousAttributes.md#invoicepaymenttermssnapshotpreviousattributeslate_fee_policy).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.name

Declared alternatives: [InvoicePaymentTermsSnapshotPreviousAttributes.name](../models/InvoicePaymentTermsSnapshotPreviousAttributes.md#invoicepaymenttermssnapshotpreviousattributesname).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.payment_terms_snapshot variant 1.version

Declared alternatives: [InvoicePaymentTermsSnapshotPreviousAttributes.version](../models/InvoicePaymentTermsSnapshotPreviousAttributes.md#invoicepaymenttermssnapshotpreviousattributesversion).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.po_number

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.po_number variant 1

anyOf variant 1: The buyer's purchase order number, printed on the invoice and PDF. It cannot change after issue. `null` when unset..

- Value shape: string. The buyer's purchase order number, printed on the invoice and PDF. It cannot change after issue. `null` when unset. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.po_number variant 2

anyOf variant 2.

- Value shape: null. The buyer's purchase order number, printed on the invoice and PDF. It cannot change after issue. `null` when unset. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.recipient_email

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.recipient_email variant 1

anyOf variant 1: Where Flint emails the invoice and its reminders. Email delivery requires it at issue. `null` when unset..

- Value shape: string. Where Flint emails the invoice and its reminders. Email delivery requires it at issue. `null` when unset. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.recipient_email variant 2

anyOf variant 2.

- Value shape: null. Where Flint emails the invoice and its reminders. Email delivery requires it at issue. `null` when unset. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.reference

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.reference variant 1

anyOf variant 1: Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase order number goes in po_number. It cannot change after issue. `null` when unset..

- Value shape: string. Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase order number goes in po_number. It cannot change after issue. `null` when unset. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.reference variant 2

anyOf variant 2.

- Value shape: null. Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase order number goes in po_number. It cannot change after issue. `null` when unset. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.refund_status

Declared alternatives: [ExpandedInvoiceSummaryPreviousAttributes.refund_status](../models/ExpandedInvoiceSummaryPreviousAttributes.md#expandedinvoicesummarypreviousattributesrefund_status).

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

- Value shape: string. When Flint will issue and deliver this draft. `null` when no issue is scheduled. Cleared when the draft is issued or voided, or when you send null. When Flint will issue and deliver this draft. `null` when no issue is scheduled. Cleared when the draft is issued or voided, or when you send null. Format: `date-time`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.scheduled_issue_at variant 2

anyOf variant 2.

- Value shape: null. When Flint will issue and deliver this draft. `null` when no issue is scheduled. Cleared when the draft is issued or voided, or when you send null. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.service_date

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.service_date variant 1

anyOf variant 1: The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it as written, without timezone conversion. `null` when unset..

- Value shape: string. The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it as written, without timezone conversion. `null` when unset. The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it as written, without timezone conversion. `null` when unset. Format: `date`. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.service_date variant 2

anyOf variant 2.

- Value shape: null. The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it as written, without timezone conversion. `null` when unset. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.status

Declared alternatives: [ExpandedInvoiceSummaryPreviousAttributes.status](../models/ExpandedInvoiceSummaryPreviousAttributes.md#expandedinvoicesummarypreviousattributesstatus).

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.subscription_id

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.subscription_id variant 1

anyOf variant 1: The subscription the backing order belongs to, copied when the draft is created and never changed. `null` when the order isn't part of a subscription..

- Value shape: string. The subscription the backing order belongs to, copied when the draft is created and never changed. `null` when the order isn't part of a subscription. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.subscription_id variant 2

anyOf variant 2.

- Value shape: null. The subscription the backing order belongs to, copied when the draft is created and never changed. `null` when the order isn't part of a subscription. 

### InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.supported_actions

Declared alternatives: [ExpandedInvoiceSummaryPreviousAttributes.supported_actions](../models/ExpandedInvoiceSummaryPreviousAttributes.md#expandedinvoicesummarypreviousattributessupported_actions).

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

