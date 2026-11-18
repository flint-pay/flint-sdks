[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceCollectionBlockedInstalledMerchantsEventInput

The `invoice.collection_blocked` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/InvoiceCollectionBlockedInstalledMerchantsEventInput.md#invoicecollectionblockedinstalledmerchantseventinputdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"invoice.collection_blocked"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [WebhookInvoiceInput](../models/WebhookInvoiceInput.md#webhookinvoiceinput) | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `public_url`. `object`: [field definitions](../models/InvoiceCollectionBlockedInstalledMerchantsEventInput.md#invoicecollectionblockedinstalledmerchantseventinputdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/InvoiceCollectionBlockedInstalledMerchantsEventInput.md#invoicecollectionblockedinstalledmerchantseventinputdataprevious_attributes). |

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `public_url`.

Field definitions: [shared fields](WebhookInvoiceInput.md#webhookinvoiceinput).

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `cc_emails` | Optional | Array of string or null | Additional recipients copied on the invoice email and every reminder. `cc_emails`: [declared alternatives](../models/InvoiceCollectionBlockedInstalledMerchantsEventInput.md#invoicecollectionblockedinstalledmerchantseventinputdataprevious_attributescc_emails). |
| `closed_at` | Optional | string or null | When the current closed interval began. Cleared when status returns to open or partially_paid. A direct move between closed statuses preserves this timestamp. `closed_at`: [declared alternatives](../models/InvoiceCollectionBlockedInstalledMerchantsEventInput.md#invoicecollectionblockedinstalledmerchantseventinputdataprevious_attributesclosed_at). |
| `collection` | Optional | [InvoiceCollectionPreviousAttributesInput](../models/InvoiceCollectionPreviousAttributesInput.md#invoicecollectionpreviousattributesinput) or null | How this invoice is collected, resolved when the draft is written. Send this object back when updating its collection policy. |
| `collection_block_status` | Optional | string or null | Whether collection is blocked. While it is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Values: `"none"`, `"inventory_blocked"`, `"resolved"`. `collection_block_status`: [declared alternatives](../models/ExpandedInvoiceSummaryPreviousAttributesInput.md#expandedinvoicesummarypreviousattributesinputcollection_block_status). |
| `created_at` | Optional | string or null | When the invoice was created. `created_at`: [declared alternatives](../models/ExpandedInvoiceSummaryPreviousAttributesInput.md#expandedinvoicesummarypreviousattributesinputcreated_at). |
| `customer` | Optional | [ExpandedCustomerSummaryPreviousAttributesInput](../models/ExpandedCustomerSummaryPreviousAttributesInput.md#expandedcustomersummarypreviousattributesinput) or null | Summary of the billed customer. Returned only with expand=customer. Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. |
| `customer_id` | Optional | string or null | Customer billed by this invoice. Absent when the invoice has no customer. `customer_id`: [declared alternatives](../models/InvoiceCollectionBlockedInstalledMerchantsEventInput.md#invoicecollectionblockedinstalledmerchantseventinputdataprevious_attributescustomer_id). |
| `delivery_mode` | Optional | string or null | How issue delivered the invoice. Values: `"email"`, `"caller_managed"`. `delivery_mode`: [declared alternatives](../models/InvoiceCollectionBlockedInstalledMerchantsEventInput.md#invoicecollectionblockedinstalledmerchantseventinputdataprevious_attributesdelivery_mode). |
| `due_date` | Optional | string or null | Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only after this date ends. Automatic collection runs at the later of issue and the start of this date. With payment terms, issue computes this date from issued_at. Absent when there is no due date. `due_date`: [declared alternatives](../models/ExpandedInvoiceSummaryPreviousAttributesInput.md#expandedinvoicesummarypreviousattributesinputdue_date). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Use it as your sync key: it isn't printed on the invoice. `null` when unset. `external_reference_id`: [declared alternatives](../models/InvoiceCollectionBlockedInstalledMerchantsEventInput.md#invoicecollectionblockedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id). |
| `footer` | Optional | string or null | Fine print at the bottom of the invoice and PDF. It cannot change after issue. `null` when unset. `footer`: [declared alternatives](../models/InvoiceCollectionBlockedInstalledMerchantsEventInput.md#invoicecollectionblockedinstalledmerchantseventinputdataprevious_attributesfooter). |
| `invoice_id` | Optional | string or null | Flint invoice ID. `invoice_id`: [declared alternatives](../models/ExpandedInvoiceSummaryPreviousAttributesInput.md#expandedinvoicesummarypreviousattributesinputinvoice_id). |
| `invoice_number` | Optional | string or null | Sequential document number assigned when the invoice is issued. Numbering is per merchant, with test and live mode numbered independently. `invoice_number`: [declared alternatives](../models/InvoiceCollectionBlockedInstalledMerchantsEventInput.md#invoicecollectionblockedinstalledmerchantseventinputdataprevious_attributesinvoice_number). |
| `is_overdue` | Optional | boolean or null | Whether the invoice is open or partially_paid and past due with a balance remaining. Without schedule_entries, the due_date has ended in timezone (UTC when absent) and outstanding_money is above zero; with them, at least one entry is overdue. Computed when the invoice is read. `is_overdue`: [declared alternatives](../models/InvoiceCollectionBlockedInstalledMerchantsEventInput.md#invoicecollectionblockedinstalledmerchantseventinputdataprevious_attributesis_overdue). |
| `issued_at` | Optional | string or null | When the invoice was issued. Absent on a draft. `issued_at`: [declared alternatives](../models/InvoiceCollectionBlockedInstalledMerchantsEventInput.md#invoicecollectionblockedinstalledmerchantseventinputdataprevious_attributesissued_at). |
| `late_fees` | Optional | Array of [InvoiceLateFeePreviousAttributesInput](../models/InvoiceLateFeePreviousAttributesInput.md#invoicelatefeepreviousattributesinput) or null | Late fees assessed on this invoice, each with its paid, waived, written-off, and outstanding amounts. settlement_amounts.late_fee_money is their assessed total minus waivers. `late_fees`: [declared alternatives](../models/InvoiceCollectionBlockedInstalledMerchantsEventInput.md#invoicecollectionblockedinstalledmerchantseventinputdataprevious_attributeslate_fees). |
| `memo` | Optional | string or null | Message to the customer, printed on the invoice and PDF. It cannot change after issue. `null` when unset. `memo`: [declared alternatives](../models/InvoiceCollectionBlockedInstalledMerchantsEventInput.md#invoicecollectionblockedinstalledmerchantseventinputdataprevious_attributesmemo). |
| `merchant_id` | Optional | string or null | Merchant that owns this invoice. `merchant_id`: [declared alternatives](../models/InvoiceCollectionBlockedInstalledMerchantsEventInput.md#invoicecollectionblockedinstalledmerchantseventinputdataprevious_attributesmerchant_id). |
| `metadata` | Optional | [MetadataMapPreviousAttributesInput](../models/MetadataMapPreviousAttributesInput.md#metadatamappreviousattributesinput) or null | Caller-owned metadata. |
| `order` | Optional | [ExpandedOrderSummaryPreviousAttributesInput](../models/ExpandedOrderSummaryPreviousAttributesInput.md#expandedordersummarypreviousattributesinput) or null | Summary of the backing order. Returned only with expand=order. Present only when `expand` includes `order`; `null` when expanded and there is no related order. |
| `order_id` | Optional | string or null | The order this invoice bills. Every invoice has one; quick pay creates it. `order_id`: [declared alternatives](../models/InvoiceCollectionBlockedInstalledMerchantsEventInput.md#invoicecollectionblockedinstalledmerchantseventinputdataprevious_attributesorder_id). |
| `paid_at` | Optional | string or null | When the invoice most recently became paid. Cleared when status leaves paid and set again on a later paid transition. `paid_at`: [declared alternatives](../models/InvoiceCollectionBlockedInstalledMerchantsEventInput.md#invoicecollectionblockedinstalledmerchantseventinputdataprevious_attributespaid_at). |
| `payment_due` | Optional | [InvoicePaymentDuePreviousAttributesInput](../models/InvoicePaymentDuePreviousAttributesInput.md#invoicepaymentduepreviousattributesinput) or null | The resolved due-date policy. Send this object back when updating the draft; payment_terms captures the term's current revision again. |
| `payment_terms_snapshot` | Optional | [InvoicePaymentTermsSnapshotPreviousAttributesInput](../models/InvoicePaymentTermsSnapshotPreviousAttributesInput.md#invoicepaymenttermssnapshotpreviousattributesinput) or null | The payment term captured on the draft, with its due date rule and late fee policy. Later changes to the payment term don't affect this invoice. |
| `po_number` | Optional | string or null | The buyer's purchase order number, printed on the invoice and PDF. It cannot change after issue. `null` when unset. `po_number`: [declared alternatives](../models/InvoiceCollectionBlockedInstalledMerchantsEventInput.md#invoicecollectionblockedinstalledmerchantseventinputdataprevious_attributespo_number). |
| `pricing_amounts` | Optional | [PricingAmountsPreviousAttributesInput](../models/PricingAmountsPreviousAttributesInput.md#pricingamountspreviousattributesinput) or null | The invoice pricing totals, frozen at issue. A draft previews the backing order. total_money excludes late fees, which are in settlement_amounts.late_fee_money. |
| `recipient_email` | Optional | string or null | Where Flint emails the invoice and its reminders. Email delivery requires it at issue. `null` when unset. `recipient_email`: [declared alternatives](../models/InvoiceCollectionBlockedInstalledMerchantsEventInput.md#invoicecollectionblockedinstalledmerchantseventinputdataprevious_attributesrecipient_email). |
| `reference` | Optional | string or null | Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase order number goes in po_number. It cannot change after issue. `null` when unset. `reference`: [declared alternatives](../models/InvoiceCollectionBlockedInstalledMerchantsEventInput.md#invoicecollectionblockedinstalledmerchantseventinputdataprevious_attributesreference). |
| `refund_status` | Optional | string or null | How much of the collected money has been refunded. It doesn't change status. Values: `"none"`, `"partially_refunded"`, `"refunded"`. `refund_status`: [declared alternatives](../models/ExpandedInvoiceSummaryPreviousAttributesInput.md#expandedinvoicesummarypreviousattributesinputrefund_status). |
| `reminders_paused` | Optional | boolean or null | Whether automatic reminders are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it. `reminders_paused`: [declared alternatives](../models/InvoiceCollectionBlockedInstalledMerchantsEventInput.md#invoicecollectionblockedinstalledmerchantseventinputdataprevious_attributesreminders_paused). |
| `reminders_paused_at` | Optional | string or null | When automatic reminders were paused. Absent while reminders are active. `reminders_paused_at`: [declared alternatives](../models/InvoiceCollectionBlockedInstalledMerchantsEventInput.md#invoicecollectionblockedinstalledmerchantseventinputdataprevious_attributesreminders_paused_at). |
| `remit_to_address` | Optional | [AddressPreviousAttributesInput](../models/AddressPreviousAttributesInput.md#addresspreviousattributesinput) or null | Where the buyer sends offline payments, shown on the invoice. Defaults to the invoice settings remit-to address. |
| `schedule_entries` | Optional | Array of [InvoiceScheduleEntryPreviousAttributesInput](../models/InvoiceScheduleEntryPreviousAttributesInput.md#invoicescheduleentrypreviousattributesinput) or null | The payment schedule, in schedule order. Always [] when the invoice has no schedule and is collected in one balance. `schedule_entries`: [declared alternatives](../models/InvoiceCollectionBlockedInstalledMerchantsEventInput.md#invoicecollectionblockedinstalledmerchantseventinputdataprevious_attributesschedule_entries). |
| `scheduled_issue_at` | Optional | string or null | When Flint will issue and deliver this draft. `null` when no issue is scheduled. Cleared when the draft is issued or voided, or when you send null. `scheduled_issue_at`: [declared alternatives](../models/InvoiceCollectionBlockedInstalledMerchantsEventInput.md#invoicecollectionblockedinstalledmerchantseventinputdataprevious_attributesscheduled_issue_at). |
| `service_date` | Optional | string or null | The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it as written, without timezone conversion. `null` when unset. `service_date`: [declared alternatives](../models/InvoiceCollectionBlockedInstalledMerchantsEventInput.md#invoicecollectionblockedinstalledmerchantseventinputdataprevious_attributesservice_date). |
| `settlement_amounts` | Optional | [InvoiceSettlementAmountsPreviousAttributesInput](../models/InvoiceSettlementAmountsPreviousAttributesInput.md#invoicesettlementamountspreviousattributesinput) or null | Payments, refunds, write-offs, allocated credit notes, late fees, and the remaining invoice balance. What is still owed: pricing_amounts.total_money + late_fee_money - paid_money - credited_money - written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided invoices; equal to pricing_amounts.total_money on a draft. Refunds and card chargebacks don't change it. Lost bank returns reopen the balance. |
| `snapshot` | Optional | [InvoiceSnapshotPreviousAttributesInput](../models/InvoiceSnapshotPreviousAttributesInput.md#invoicesnapshotpreviousattributesinput) or null | The billing content of the invoice: line items, discounts, charges, tip, and tax. A draft previews the backing order; issue freezes it, and later order changes don't reach an issued invoice. |
| `status` | Optional | string or null | Current invoice status. paid and credited close the current balance and can reopen to open or partially_paid after a payment or credit allocation reversal; invoice.reopened reports that change. An uncollectible invoice accepts manual recovery payments and becomes paid when fully recovered; reversals restore the write-off. voided is final. Refunds change refund_status without reopening the balance. An ACH bank return reverses paid_money and reopens the balance. A lost card chargeback leaves paid_money, the balance, and status unchanged; collecting it again requires a new invoice. Values: `"draft"`, `"open"`, `"partially_paid"`, `"paid"`, `"voided"`, `"uncollectible"`, `"credited"`. `status`: [declared alternatives](../models/ExpandedInvoiceSummaryPreviousAttributesInput.md#expandedinvoicesummarypreviousattributesinputstatus). |
| `subscription_id` | Optional | string or null | The subscription the backing order belongs to, copied when the draft is created and never changed. `null` when the order isn't part of a subscription. `subscription_id`: [declared alternatives](../models/InvoiceCollectionBlockedInstalledMerchantsEventInput.md#invoicecollectionblockedinstalledmerchantseventinputdataprevious_attributessubscription_id). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. Items values: `"collect"`, `"issue"`, `"mark_uncollectible"`, `"void"`. `supported_actions`: [declared alternatives](../models/ExpandedInvoiceSummaryPreviousAttributesInput.md#expandedinvoicesummarypreviousattributesinputsupported_actions). |
| `timezone` | Optional | string or null | IANA time zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken from the merchant's timezone when the draft is written, or UTC when unset. Later merchant changes do not alter this invoice's calendar. `timezone`: [declared alternatives](../models/InvoiceCollectionBlockedInstalledMerchantsEventInput.md#invoicecollectionblockedinstalledmerchantseventinputdataprevious_attributestimezone). |
| `uncollectible_at` | Optional | string or null | When the invoice was marked uncollectible. `uncollectible_at`: [declared alternatives](../models/InvoiceCollectionBlockedInstalledMerchantsEventInput.md#invoicecollectionblockedinstalledmerchantseventinputdataprevious_attributesuncollectible_at). |
| `updated_at` | Optional | string or null | When the invoice last changed. `updated_at`: [declared alternatives](../models/ExpandedInvoiceSummaryPreviousAttributesInput.md#expandedinvoicesummarypreviousattributesinputupdated_at). |
| `version` | Optional | integer or null | Current invoice version. Send this as expected_version when updating the draft. `version`: [declared alternatives](../models/InvoiceCollectionBlockedInstalledMerchantsEventInput.md#invoicecollectionblockedinstalledmerchantseventinputdataprevious_attributesversion). |
| `viewed_at` | Optional | string or null | When the buyer first opened the invoice through its hosted invoice link. Recorded on a best-effort basis. `viewed_at`: [declared alternatives](../models/InvoiceCollectionBlockedInstalledMerchantsEventInput.md#invoicecollectionblockedinstalledmerchantseventinputdataprevious_attributesviewed_at). |
| `voided_at` | Optional | string or null | When the invoice was voided. `voided_at`: [declared alternatives](../models/InvoiceCollectionBlockedInstalledMerchantsEventInput.md#invoicecollectionblockedinstalledmerchantseventinputdataprevious_attributesvoided_at). |

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.cc_emails

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.cc_emails variant 1

anyOf variant 1: Additional recipients copied on the invoice email and every reminder..

- Value shape: Array of string. Additional recipients copied on the invoice email and every reminder. 

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.cc_emails variant 2

anyOf variant 2.

- Value shape: null. Additional recipients copied on the invoice email and every reminder. 

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.closed_at

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.closed_at variant 1

anyOf variant 1: When the current closed interval began. Cleared when status returns to open or partially_paid. A direct move between closed statuses preserves this timestamp..

- Value shape: string. When the current closed interval began. Cleared when status returns to open or partially_paid. A direct move between closed statuses preserves this timestamp. When the current closed interval began. Cleared when status returns to open or partially_paid. A direct move between closed statuses preserves this timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.closed_at variant 2

anyOf variant 2.

- Value shape: null. When the current closed interval began. Cleared when status returns to open or partially_paid. A direct move between closed statuses preserves this timestamp. 

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.collection_block_status

Declared alternatives: [ExpandedInvoiceSummaryPreviousAttributesInput.collection_block_status](../models/ExpandedInvoiceSummaryPreviousAttributesInput.md#expandedinvoicesummarypreviousattributesinputcollection_block_status).

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.created_at

Declared alternatives: [ExpandedInvoiceSummaryPreviousAttributesInput.created_at](../models/ExpandedInvoiceSummaryPreviousAttributesInput.md#expandedinvoicesummarypreviousattributesinputcreated_at).

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.customer_id

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.customer_id variant 1

anyOf variant 1: Customer billed by this invoice. Absent when the invoice has no customer..

- Value shape: string. Customer billed by this invoice. Absent when the invoice has no customer. Customer billed by this invoice. Absent when the invoice has no customer. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. 

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.customer_id variant 2

anyOf variant 2.

- Value shape: null. Customer billed by this invoice. Absent when the invoice has no customer. 

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.delivery_mode

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.delivery_mode variant 1

anyOf variant 1: How issue delivered the invoice..

- Value shape: string. How issue delivered the invoice. Values: `"email"`, `"caller_managed"`.

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.delivery_mode variant 2

anyOf variant 2.

- Value shape: null. How issue delivered the invoice. 

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.due_date

Declared alternatives: [ExpandedInvoiceSummaryPreviousAttributesInput.due_date](../models/ExpandedInvoiceSummaryPreviousAttributesInput.md#expandedinvoicesummarypreviousattributesinputdue_date).

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id variant 1

anyOf variant 1: Caller-owned identifier for this resource in an external system. Use it as your sync key: it isn't printed on the invoice. `null` when unset..

- Value shape: string. Caller-owned identifier for this resource in an external system. Use it as your sync key: it isn't printed on the invoice. `null` when unset. Caller-owned identifier for this resource in an external system. Use it as your sync key: it isn't printed on the invoice. `null` when unset. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. 

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id variant 2

anyOf variant 2.

- Value shape: null. Caller-owned identifier for this resource in an external system. Use it as your sync key: it isn't printed on the invoice. `null` when unset. 

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.footer

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.footer variant 1

anyOf variant 1: Fine print at the bottom of the invoice and PDF. It cannot change after issue. `null` when unset..

- Value shape: string. Fine print at the bottom of the invoice and PDF. It cannot change after issue. `null` when unset. 

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.footer variant 2

anyOf variant 2.

- Value shape: null. Fine print at the bottom of the invoice and PDF. It cannot change after issue. `null` when unset. 

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.invoice_id

Declared alternatives: [ExpandedInvoiceSummaryPreviousAttributesInput.invoice_id](../models/ExpandedInvoiceSummaryPreviousAttributesInput.md#expandedinvoicesummarypreviousattributesinputinvoice_id).

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.invoice_number

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.invoice_number variant 1

anyOf variant 1: Sequential document number assigned when the invoice is issued. Numbering is per merchant, with test and live mode numbered independently..

- Value shape: string. Sequential document number assigned when the invoice is issued. Numbering is per merchant, with test and live mode numbered independently. 

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.invoice_number variant 2

anyOf variant 2.

- Value shape: null. Sequential document number assigned when the invoice is issued. Numbering is per merchant, with test and live mode numbered independently. 

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.is_overdue

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.is_overdue variant 1

anyOf variant 1: Whether the invoice is open or partially_paid and past due with a balance remaining. Without schedule_entries, the due_date has ended in timezone (UTC when absent) and outstanding_money is above zero; with them, at least one entry is overdue. Computed when the invoice is read..

- Value shape: boolean. Whether the invoice is open or partially_paid and past due with a balance remaining. Without schedule_entries, the due_date has ended in timezone (UTC when absent) and outstanding_money is above zero; with them, at least one entry is overdue. Computed when the invoice is read. 

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.is_overdue variant 2

anyOf variant 2.

- Value shape: null. Whether the invoice is open or partially_paid and past due with a balance remaining. Without schedule_entries, the due_date has ended in timezone (UTC when absent) and outstanding_money is above zero; with them, at least one entry is overdue. Computed when the invoice is read. 

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.issued_at

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.issued_at variant 1

anyOf variant 1: When the invoice was issued. Absent on a draft..

- Value shape: string. When the invoice was issued. Absent on a draft. When the invoice was issued. Absent on a draft. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.issued_at variant 2

anyOf variant 2.

- Value shape: null. When the invoice was issued. Absent on a draft. 

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.late_fees

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.late_fees variant 1

anyOf variant 1: Late fees assessed on this invoice, each with its paid, waived, written-off, and outstanding amounts. settlement_amounts.late_fee_money is their assessed total minus waivers..

- Value shape: Array of [InvoiceLateFeePreviousAttributesInput](../models/InvoiceLateFeePreviousAttributesInput.md#invoicelatefeepreviousattributesinput). Late fees assessed on this invoice, each with its paid, waived, written-off, and outstanding amounts. settlement_amounts.late_fee_money is their assessed total minus waivers. 

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.late_fees variant 2

anyOf variant 2.

- Value shape: null. Late fees assessed on this invoice, each with its paid, waived, written-off, and outstanding amounts. settlement_amounts.late_fee_money is their assessed total minus waivers. 

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.memo

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.memo variant 1

anyOf variant 1: Message to the customer, printed on the invoice and PDF. It cannot change after issue. `null` when unset..

- Value shape: string. Message to the customer, printed on the invoice and PDF. It cannot change after issue. `null` when unset. 

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.memo variant 2

anyOf variant 2.

- Value shape: null. Message to the customer, printed on the invoice and PDF. It cannot change after issue. `null` when unset. 

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.merchant_id

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.merchant_id variant 1

anyOf variant 1: Merchant that owns this invoice..

- Value shape: string. Merchant that owns this invoice. Merchant that owns this invoice. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. 

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.merchant_id variant 2

anyOf variant 2.

- Value shape: null. Merchant that owns this invoice. 

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.order_id

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.order_id variant 1

anyOf variant 1: The order this invoice bills. Every invoice has one; quick pay creates it..

- Value shape: string. The order this invoice bills. Every invoice has one; quick pay creates it. The order this invoice bills. Every invoice has one; quick pay creates it. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.order_id variant 2

anyOf variant 2.

- Value shape: null. The order this invoice bills. Every invoice has one; quick pay creates it. 

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.paid_at

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.paid_at variant 1

anyOf variant 1: When the invoice most recently became paid. Cleared when status leaves paid and set again on a later paid transition..

- Value shape: string. When the invoice most recently became paid. Cleared when status leaves paid and set again on a later paid transition. When the invoice most recently became paid. Cleared when status leaves paid and set again on a later paid transition. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.paid_at variant 2

anyOf variant 2.

- Value shape: null. When the invoice most recently became paid. Cleared when status leaves paid and set again on a later paid transition. 

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.po_number

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.po_number variant 1

anyOf variant 1: The buyer's purchase order number, printed on the invoice and PDF. It cannot change after issue. `null` when unset..

- Value shape: string. The buyer's purchase order number, printed on the invoice and PDF. It cannot change after issue. `null` when unset. 

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.po_number variant 2

anyOf variant 2.

- Value shape: null. The buyer's purchase order number, printed on the invoice and PDF. It cannot change after issue. `null` when unset. 

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.recipient_email

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.recipient_email variant 1

anyOf variant 1: Where Flint emails the invoice and its reminders. Email delivery requires it at issue. `null` when unset..

- Value shape: string. Where Flint emails the invoice and its reminders. Email delivery requires it at issue. `null` when unset. 

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.recipient_email variant 2

anyOf variant 2.

- Value shape: null. Where Flint emails the invoice and its reminders. Email delivery requires it at issue. `null` when unset. 

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.reference

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.reference variant 1

anyOf variant 1: Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase order number goes in po_number. It cannot change after issue. `null` when unset..

- Value shape: string. Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase order number goes in po_number. It cannot change after issue. `null` when unset. 

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.reference variant 2

anyOf variant 2.

- Value shape: null. Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase order number goes in po_number. It cannot change after issue. `null` when unset. 

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.refund_status

Declared alternatives: [ExpandedInvoiceSummaryPreviousAttributesInput.refund_status](../models/ExpandedInvoiceSummaryPreviousAttributesInput.md#expandedinvoicesummarypreviousattributesinputrefund_status).

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.reminders_paused

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.reminders_paused variant 1

anyOf variant 1: Whether automatic reminders are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it..

- Value shape: boolean. Whether automatic reminders are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it. 

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.reminders_paused variant 2

anyOf variant 2.

- Value shape: null. Whether automatic reminders are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it. 

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.reminders_paused_at

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.reminders_paused_at variant 1

anyOf variant 1: When automatic reminders were paused. Absent while reminders are active..

- Value shape: string. When automatic reminders were paused. Absent while reminders are active. When automatic reminders were paused. Absent while reminders are active. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.reminders_paused_at variant 2

anyOf variant 2.

- Value shape: null. When automatic reminders were paused. Absent while reminders are active. 

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.schedule_entries

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.schedule_entries variant 1

anyOf variant 1: The payment schedule, in schedule order. Always [] when the invoice has no schedule and is collected in one balance..

- Value shape: Array of [InvoiceScheduleEntryPreviousAttributesInput](../models/InvoiceScheduleEntryPreviousAttributesInput.md#invoicescheduleentrypreviousattributesinput). The payment schedule, in schedule order. Always [] when the invoice has no schedule and is collected in one balance. 

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.schedule_entries variant 2

anyOf variant 2.

- Value shape: null. The payment schedule, in schedule order. Always [] when the invoice has no schedule and is collected in one balance. 

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.scheduled_issue_at

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.scheduled_issue_at variant 1

anyOf variant 1: When Flint will issue and deliver this draft. `null` when no issue is scheduled. Cleared when the draft is issued or voided, or when you send null..

- Value shape: string. When Flint will issue and deliver this draft. `null` when no issue is scheduled. Cleared when the draft is issued or voided, or when you send null. When Flint will issue and deliver this draft. `null` when no issue is scheduled. Cleared when the draft is issued or voided, or when you send null. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.scheduled_issue_at variant 2

anyOf variant 2.

- Value shape: null. When Flint will issue and deliver this draft. `null` when no issue is scheduled. Cleared when the draft is issued or voided, or when you send null. 

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.service_date

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.service_date variant 1

anyOf variant 1: The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it as written, without timezone conversion. `null` when unset..

- Value shape: string. The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it as written, without timezone conversion. `null` when unset. The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it as written, without timezone conversion. `null` when unset. Format: `date`. Example: `"2026-08-02"`. 

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.service_date variant 2

anyOf variant 2.

- Value shape: null. The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it as written, without timezone conversion. `null` when unset. 

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.status

Declared alternatives: [ExpandedInvoiceSummaryPreviousAttributesInput.status](../models/ExpandedInvoiceSummaryPreviousAttributesInput.md#expandedinvoicesummarypreviousattributesinputstatus).

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.subscription_id

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.subscription_id variant 1

anyOf variant 1: The subscription the backing order belongs to, copied when the draft is created and never changed. `null` when the order isn't part of a subscription..

- Value shape: string. The subscription the backing order belongs to, copied when the draft is created and never changed. `null` when the order isn't part of a subscription. The subscription the backing order belongs to, copied when the draft is created and never changed. `null` when the order isn't part of a subscription. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. 

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.subscription_id variant 2

anyOf variant 2.

- Value shape: null. The subscription the backing order belongs to, copied when the draft is created and never changed. `null` when the order isn't part of a subscription. 

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.supported_actions

Declared alternatives: [ExpandedInvoiceSummaryPreviousAttributesInput.supported_actions](../models/ExpandedInvoiceSummaryPreviousAttributesInput.md#expandedinvoicesummarypreviousattributesinputsupported_actions).

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.timezone

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.timezone variant 1

anyOf variant 1: IANA time zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken from the merchant's timezone when the draft is written, or UTC when unset. Later merchant changes do not alter this invoice's calendar..

- Value shape: string. IANA time zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken from the merchant's timezone when the draft is written, or UTC when unset. Later merchant changes do not alter this invoice's calendar. 

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.timezone variant 2

anyOf variant 2.

- Value shape: null. IANA time zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken from the merchant's timezone when the draft is written, or UTC when unset. Later merchant changes do not alter this invoice's calendar. 

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.uncollectible_at

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.uncollectible_at variant 1

anyOf variant 1: When the invoice was marked uncollectible..

- Value shape: string. When the invoice was marked uncollectible. When the invoice was marked uncollectible. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.uncollectible_at variant 2

anyOf variant 2.

- Value shape: null. When the invoice was marked uncollectible. 

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.updated_at

Declared alternatives: [ExpandedInvoiceSummaryPreviousAttributesInput.updated_at](../models/ExpandedInvoiceSummaryPreviousAttributesInput.md#expandedinvoicesummarypreviousattributesinputupdated_at).

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.version

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.version variant 1

anyOf variant 1: Current invoice version. Send this as expected_version when updating the draft..

- Value shape: integer. Current invoice version. Send this as expected_version when updating the draft. Current invoice version. Send this as expected_version when updating the draft. Format: `int64`. minimum: `1`. 

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.version variant 2

anyOf variant 2.

- Value shape: null. Current invoice version. Send this as expected_version when updating the draft. 

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.viewed_at

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.viewed_at variant 1

anyOf variant 1: When the buyer first opened the invoice through its hosted invoice link. Recorded on a best-effort basis..

- Value shape: string. When the buyer first opened the invoice through its hosted invoice link. Recorded on a best-effort basis. When the buyer first opened the invoice through its hosted invoice link. Recorded on a best-effort basis. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.viewed_at variant 2

anyOf variant 2.

- Value shape: null. When the buyer first opened the invoice through its hosted invoice link. Recorded on a best-effort basis. 

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.voided_at

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.voided_at variant 1

anyOf variant 1: When the invoice was voided..

- Value shape: string. When the invoice was voided. When the invoice was voided. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### InvoiceCollectionBlockedInstalledMerchantsEventInput.data.previous_attributes.voided_at variant 2

anyOf variant 2.

- Value shape: null. When the invoice was voided. 

### InvoiceCollectionBlockedInstalledMerchantsEventInput.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEventInput.source](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource).

