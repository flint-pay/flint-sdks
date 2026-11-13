[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CollectInvoiceResponse

A response containing `CollectInvoiceResult` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [CollectInvoiceResult](../models/CollectInvoiceResult.md#collectinvoiceresult) | Resource, collection, or operation result returned by this request. The invoice is the primary resource and expected_version target; invoice_payment_attempt records the collection outcome. `data`: [field definitions](../models/CollectInvoiceResponse.md#collectinvoiceresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### CollectInvoiceResponse.data

Resource, collection, or operation result returned by this request. The invoice is the primary resource and expected_version target; invoice_payment_attempt records the collection outcome.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice` | Required | [Invoice](../models/Invoice.md#invoice) | A bill issued to a customer. `invoice`: [field definitions](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoice). |
| `invoice_payment_attempt` | Required | [InvoicePaymentAttempt](../models/InvoicePaymentAttempt.md#invoicepaymentattempt) or null | `invoice_payment_attempt`: [declared alternatives](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoice_payment_attempt). |

### CollectInvoiceResponse.data.invoice

A bill issued to a customer.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `cc_emails` | Required | Array of string | Additional recipients copied on the invoice email and every reminder. |
| `closed_at` | Optional | string | When the current closed interval began. Cleared when status returns to open or partially_paid. A direct move between closed statuses preserves this timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `collection` | Required | object and ([InvoiceCollectionBuyerInitiated](../models/InvoiceCollectionBuyerInitiated.md#invoicecollectionbuyerinitiated) or [InvoiceCollectionAutomatic](../models/InvoiceCollectionAutomatic.md#invoicecollectionautomatic) or [InvoiceCollectionExternal](../models/InvoiceCollectionExternal.md#invoicecollectionexternal)) | How this invoice is collected, resolved when the draft is written. Send this object back when updating its collection policy. The invoice collection policy resolved at write time. The object can be sent back when updating a draft. `collection`: [declared alternatives](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicecollection). |
| `collection_block_status` | Required | string | Whether collection is blocked. While it is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Values: `"none"`, `"inventory_blocked"`, `"resolved"`. |
| `created_at` | Required | string | When the invoice was created. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `credit_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Credit note credit allocated to this invoice, minus reversed allocations. Unallocated credit isn't included. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `currently_due_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The part of the balance due now. Without schedule_entries, it equals outstanding_money. With schedule_entries, it is the outstanding amount of the first entry, in schedule order, whose due date has started and that still has a balance, or 0 when there is none. It is the amount the next collect call or checkout session charges. To total everything overdue, add the outstanding_money of the entries whose status is overdue. Always 0 unless the invoice is open or partially_paid. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `customer` | Optional | [ExpandedCustomerSummary](../models/ExpandedCustomerSummary.md#expandedcustomersummary) or null | Summary of the billed customer. Returned only with expand=customer. Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. `customer`: [declared alternatives](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicecustomer). |
| `customer_id` | Optional | string | Customer billed by this invoice. Absent when the invoice has no customer. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `delivery_mode` | Optional | string | How issue delivered the invoice. Values: `"email"`, `"caller_managed"`. |
| `due_date` | Optional | string | Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only after this date ends. Automatic collection runs at the later of issue and the start of this date. With payment terms, issue computes this date from issued_at. Absent when there is no due date. Format: `date`. Example: `"2026-08-02"`. |
| `external_reference_id` | Required | string or null | Caller-owned identifier for this resource in an external system. Use it as your sync key: it isn't printed on the invoice. `null` when unset. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `footer` | Required | string or null | Fine print at the bottom of the invoice and PDF. It cannot change after issue. `null` when unset. |
| `invoice_id` | Required | string | Flint invoice ID. Example: `"inv_01KEZF7C00A5GEBMWHEAJFSAR4"`. |
| `invoice_number` | Optional | string | Sequential document number assigned when the invoice is issued. Numbering is per merchant, with test and live mode numbered independently. |
| `is_overdue` | Required | boolean | Whether the invoice is open or partially_paid and past due with a balance remaining. Without schedule_entries, the due_date has ended in timezone (UTC when absent) and outstanding_money is above zero; with them, at least one entry is overdue. Computed when the invoice is read. |
| `issued_at` | Optional | string | When the invoice was issued. Absent on a draft. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `late_fee_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Late fees assessed after issue, minus waivers, including amounts since paid or written off. Itemized in late_fees. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `late_fees` | Required | Array of [InvoiceLateFee](../models/InvoiceLateFee.md#invoicelatefee) | Late fees assessed on this invoice, each with its paid, waived, written-off, and outstanding amounts. late_fee_money is their assessed total minus waivers. `late_fees[]`: [field definitions](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicelate_fees). |
| `memo` | Required | string or null | Message to the customer, printed on the invoice and PDF. It cannot change after issue. `null` when unset. |
| `merchant_id` | Required | string | Merchant that owns this invoice. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicemetadata). |
| `order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null | Summary of the backing order. Returned only with expand=order. Present only when `expand` includes `order`; `null` when expanded and there is no related order. `order`: [declared alternatives](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoiceorder). |
| `order_id` | Required | string | The order this invoice bills. Every invoice has one; quick pay creates it. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `outstanding_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | What is still owed: total_money + late_fee_money - paid_money - credit_money - written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided invoices; equal to total_money on a draft. Refunds and dispute losses don't change it. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `paid_at` | Optional | string | When the invoice most recently became paid. Cleared when status leaves paid and set again on a later paid transition. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `paid_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Payments collected toward this invoice, online or as recorded manual payments, minus reversed payments, including payments toward late fees. Never below zero. Disputes, including losses, don't reduce it. Refunds don't reduce it; they are in refunded_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `payment_due` | Required | object and ([InvoicePaymentDueNone](../models/InvoicePaymentDueNone.md#invoicepaymentduenone) or [InvoicePaymentDueDate](../models/InvoicePaymentDueDate.md#invoicepaymentduedate) or [InvoicePaymentDuePaymentTerms](../models/InvoicePaymentDuePaymentTerms.md#invoicepaymentduepaymentterms)) | The resolved due-date policy. Send this object back when updating the draft; payment_terms captures the term's current revision again. The invoice due-date policy resolved at write time. The object can be sent back when updating a draft. `payment_due`: [declared alternatives](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicepayment_due). |
| `payment_terms_snapshot` | Optional | [InvoicePaymentTermsSnapshot](../models/InvoicePaymentTermsSnapshot.md#invoicepaymenttermssnapshot) | The payment term captured on the draft, with its due date rule and late fee policy. Later changes to the payment term don't affect this invoice. The payment terms saved on an invoice: the term's name, version, due date calculation, and late fee policy. `payment_terms_snapshot`: [field definitions](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicepayment_terms_snapshot). |
| `po_number` | Required | string or null | The buyer's purchase order number, printed on the invoice and PDF. It cannot change after issue. `null` when unset. |
| `public_url` | Optional | string | The hosted invoice link where the buyer views and pays the invoice. Present after issue on API reads, except a list filtered by idempotency_key; webhook payloads leave it out. regenerate-public-link replaces it. Anyone with the link can open the invoice, so treat it as a secret. |
| `recipient_email` | Required | string or null | Where Flint emails the invoice and its reminders. Email delivery requires it at issue. `null` when unset. |
| `reference` | Required | string or null | Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase order number goes in po_number. It cannot change after issue. `null` when unset. |
| `refund_status` | Required | string | How much of the collected money has been refunded. It doesn't change status. Values: `"none"`, `"partially_refunded"`, `"refunded"`. |
| `refunded_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Money refunded to the buyer after collection. Refunds don't reopen the balance; refund_status summarizes them. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `reminders_paused` | Required | boolean | Whether automatic reminders are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it. |
| `reminders_paused_at` | Optional | string | When automatic reminders were paused. Absent while reminders are active. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `remit_to_address` | Optional | [Address](../models/Address.md#address) | Where the buyer sends offline payments, shown on the invoice. Defaults to the invoice settings remit-to address. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. `remit_to_address`: [field definitions](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoiceremit_to_address). |
| `schedule_entries` | Required | Array of [InvoiceScheduleEntry](../models/InvoiceScheduleEntry.md#invoicescheduleentry) | The payment schedule, in schedule order. Always [] when the invoice has no schedule and is collected in one balance. `schedule_entries[]`: [field definitions](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoiceschedule_entries). |
| `scheduled_issue_at` | Required | string or null | When Flint will issue and deliver this draft. `null` when no issue is scheduled. Cleared when the draft is issued or voided, or when you send null. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `service_date` | Required | string or null | The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it as written, without timezone conversion. `null` when unset. Format: `date`. Example: `"2026-08-02"`. |
| `snapshot` | Optional | [InvoiceSnapshot](../models/InvoiceSnapshot.md#invoicesnapshot) | The billing content of the invoice: line items, discounts, charges, tip, tax, and totals. A draft previews the backing order; issue freezes it, and later order changes don't reach an issued invoice. A frozen copy of an issued invoice's content, including line items, charges, discounts, tax identities, and pricing amounts. `snapshot`: [field definitions](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshot). |
| `status` | Required | string | Current invoice status. paid and credited close the current balance and can reopen to open or partially_paid after a payment or credit allocation reversal; invoice.reopened reports that change. An uncollectible invoice accepts manual recovery payments and becomes paid when fully recovered; reversals restore the write-off. voided is final. Refunds change refund_status without reopening the balance. A lost dispute leaves paid_money, the balance, and status unchanged; collecting it again requires a new invoice. Values: `"draft"`, `"open"`, `"partially_paid"`, `"paid"`, `"voided"`, `"uncollectible"`, `"credited"`. |
| `subscription_id` | Required | string or null | The subscription the backing order belongs to, copied when the draft is created and never changed. `null` when the order isn't part of a subscription. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. |
| `supported_actions` | Required | Array of string | Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. Items values: `"collect"`, `"issue"`, `"mark_uncollectible"`, `"void"`. |
| `timezone` | Optional | string | IANA time zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken from the merchant's timezone when the draft is written, or UTC when unset. Later merchant changes do not alter this invoice's calendar. |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | What the issued invoice bills, equal to snapshot.pricing_amounts.total_money. Fixed at issue; a draft previews the backing order total. Late fees are in late_fee_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `uncollectible_at` | Optional | string | When the invoice was marked uncollectible. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `updated_at` | Required | string | When the invoice last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Current invoice version. Send this as expected_version when updating the draft. Format: `int64`. minimum: `1`. |
| `viewed_at` | Optional | string | When the buyer first opened the invoice through its hosted invoice link. Recorded on a best-effort basis. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `voided_at` | Optional | string | When the invoice was voided. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `written_off_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The balance written off when the invoice was marked uncollectible, including unpaid late fees. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

### CollectInvoiceResponse.data.invoice.collection

How this invoice is collected, resolved when the draft is written. Send this object back when updating its collection policy. The invoice collection policy resolved at write time. The object can be sent back when updating a draft.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `mode` | Required | string | How the invoice is collected, resolved when the draft was written. Values: `"buyer_initiated"`, `"automatic"`, `"external"`. |
| `payment_method_id` | Conditional | Varies by condition | The saved card Flint charges. Present only with automatic. `null` when the draft will use the customer's default card, selected at issue. After issue it is the selected card. Example: `"pm_01KEZF7C0034B248TXXE4NXYFZ"`. |
| `payment_policy` | Conditional | [InvoicePaymentPolicy](../models/InvoicePaymentPolicy.md#invoicepaymentpolicy) | The payment options the hosted invoice page offers. Present only with buyer_initiated. Which payment options an invoice accepts, any per-option total limits, and whether to show a cost comparison. |

### CollectInvoiceResponse.data.invoice.collection variant 1: `mode` = `"buyer_initiated"`

oneOf with mode: "buyer_initiated": The `buyer_initiated` variant of `InvoiceCollection`..

- Condition: not (present(`payment_method_id`)).
- Required: `payment_policy`.
- Optional: `payment_method_id`.
- Constraints for `mode`: Values: `"buyer_initiated"`.
- Constraints for `payment_method_id`: string or null.

### CollectInvoiceResponse.data.invoice.collection variant 2: `mode` = `"automatic"`

oneOf with mode: "automatic": The `automatic` variant of `InvoiceCollection`..

- Condition: not (present(`payment_policy`)).
- Required: `payment_method_id`.
- Optional: `payment_policy`.
- Constraints for `mode`: Values: `"automatic"`.
- Constraints for `payment_method_id`: (string or null).

### CollectInvoiceResponse.data.invoice.collection variant 3: `mode` = `"external"`

oneOf with mode: "external": The `external` variant of `InvoiceCollection`..

- Condition: not (at least one(present(`payment_method_id`); present(`payment_policy`))).
- Optional: `payment_method_id`, `payment_policy`.
- Constraints for `mode`: Values: `"external"`.
- Constraints for `payment_method_id`: string or null.

### CollectInvoiceResponse.data.invoice.customer

Summary of the billed customer. Returned only with expand=customer. Present only when `expand` includes `customer`; `null` when expanded and there is no related customer.

Field definitions: [shared fields](DisputeResponse.md#disputeresponsedatacustomer).

### CollectInvoiceResponse.data.invoice.customer variant 1

anyOf ExpandedCustomerSummary: A customer's summary fields, returned in place of a customer ID when the customer is expanded..

- Required: `customer_id`, `email`, `name`, `phone`, `status`.
- Optional: `created_at`, `updated_at`.

### CollectInvoiceResponse.data.invoice.customer variant 2

anyOf variant 2.

- Undeclared: `created_at`, `customer_id`, `email`, `name`, `phone`, `status`, `updated_at`.
- Value shape: null. Summary of the billed customer. Returned only with expand=customer. Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. 

### CollectInvoiceResponse.data.invoice.late_fees[]

A charge assessed because an invoice payment is overdue.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The assessed fee: the policy's fixed amount, or its percent of base_outstanding_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `assessed_at` | Required | string | When the fee was assessed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `base_outstanding_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The unpaid balance the fee was calculated from, excluding late fees, captured at assessment. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `invoice_id` | Required | string | Invoice that owns this late fee. Example: `"inv_01KEZF7C00A5GEBMWHEAJFSAR4"`. |
| `invoice_late_fee_id` | Required | string | Flint invoice late fee ID. Example: `"inlf_01KEZF7C00NVR97MBH5AHR4W1X"`. |
| `invoice_schedule_entry_id` | Optional | string | The schedule entry this fee applies to. Absent on an invoice without a schedule, where the fee applies to the whole invoice. Each invoice, or each entry, takes at most one fee, even after a waiver. Example: `"invse_01KEZF7C006JCPQBD8VZ0RNT6R"`. |
| `late_fee_policy` | Required | object and Alternative shapes (see declared variants) or null | The late fee policy from payment_terms_snapshot, copied when the fee was assessed. `null` when no policy was captured. `late_fee_policy`: [declared alternatives](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicelate_feeslate_fee_policy). |
| `outstanding_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | What is still owed on this fee: amount_money - paid_money - waived_money - written_off_money, never below zero. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `paid_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Payments applied to this fee, minus reversed payments. Dispute losses don't reduce it. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `supported_actions` | Required | Array of string | Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. Items values: `"waive"`. |
| `waived_at` | Optional | string | When the fee was waived. Absent unless it was waived. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `waived_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount waived. A waiver removes the fee's whole outstanding amount at that time, so it is less than amount_money when part of the fee was already paid. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `waiver_reason_message` | Optional | string | Why the fee was waived, as given when waiving it. |
| `written_off_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The part of this fee written off when the invoice was marked uncollectible. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

### CollectInvoiceResponse.data.invoice.late_fees[].late_fee_policy

The late fee policy from payment_terms_snapshot, copied when the fee was assessed. `null` when no policy was captured.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Fixed fee in the invoice currency. Required for fixed and omitted for percentage. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `application_mode` | Conditional | string | Whether Flint applies the one-time fee automatically after the grace period. Omission defaults to manual. Frozen when the invoice is issued. Default: `"manual"`. Values: `"manual"`, `"automatic"`. |
| `grace_period_days` | Conditional | integer | Calendar days from the start of due_date in the invoice timezone (UTC when absent) before a late fee is eligible. Never eligible before the due date ends. An on_receipt term requires at least 1 day. Format: `int32`. minimum: `0`. maximum: `365`. |
| `percent` | Conditional | number | Percentage applied to the fee base_outstanding_money. maximum: `100`. exclusiveMinimum: `0`. multipleOf: `0.0001`. |
| `type` | Conditional | string | How the one-time late fee is calculated. Values: `"fixed"`, `"percentage"`. |

### CollectInvoiceResponse.data.invoice.late_fees[].late_fee_policy variant 1: `type` = `"fixed"`

anyOf InvoiceLateFeePolicy: A late fee for overdue invoices: a fixed amount or a percentage, a grace period in days, and whether Flint applies it automatically.; oneOf with type: "fixed": The `fixed` variant of `InvoiceLateFeePolicy`..

- Condition: not (present(`percent`)).
- Required: `amount_money`, `grace_period_days`, `type`.
- Optional: `application_mode`, `percent`.
- Constraints for `type`: Values: `"fixed"`.

### CollectInvoiceResponse.data.invoice.late_fees[].late_fee_policy variant 2: `type` = `"percentage"`

anyOf InvoiceLateFeePolicy: A late fee for overdue invoices: a fixed amount or a percentage, a grace period in days, and whether Flint applies it automatically.; oneOf with type: "percentage": The `percentage` variant of `InvoiceLateFeePolicy`..

- Condition: not (present(`amount_money`)).
- Required: `grace_period_days`, `percent`, `type`.
- Optional: `amount_money`, `application_mode`.
- Constraints for `type`: Values: `"percentage"`.

### CollectInvoiceResponse.data.invoice.late_fees[].late_fee_policy variant 3

anyOf variant 2.

- Undeclared: `amount_money`, `application_mode`, `grace_period_days`, `percent`, `type`.
- Value shape: null. The late fee policy from payment_terms_snapshot, copied when the fee was assessed. `null` when no policy was captured. 

### CollectInvoiceResponse.data.invoice.metadata

Value shape: Map of string. Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. 

### CollectInvoiceResponse.data.invoice.order

Summary of the backing order. Returned only with expand=order. Present only when `expand` includes `order`; `null` when expanded and there is no related order.

Field definitions: [shared fields](DisputeResponse.md#disputeresponsedataorder).

### CollectInvoiceResponse.data.invoice.order variant 1

anyOf ExpandedOrderSummary: An order's summary fields, including status, payment and refund status, and pricing and settlement amounts, returned when the order is expanded..

- Required: `deferred_promotions`, `governing_delivery_selection_id`, `order_id`, `paid_at`, `payment_status`, `pricing_amounts`, `refund_status`, `settlement_amounts`, `status`, `supported_actions`.
- Optional: `buyer_contact`, `closed_at`, `closed_reason`, `created_at`, `customer_id`, `fulfillment_status`, `order_number`, `payment_intent_ids`, `updated_at`.

### CollectInvoiceResponse.data.invoice.order variant 2

anyOf variant 2.

- Undeclared: `buyer_contact`, `closed_at`, `closed_reason`, `created_at`, `customer_id`, `deferred_promotions`, `fulfillment_status`, `governing_delivery_selection_id`, `order_id`, `order_number`, `paid_at`, `payment_intent_ids`, `payment_status`, `pricing_amounts`, `refund_status`, `settlement_amounts`, `status`, `supported_actions`, `updated_at`.
- Value shape: null. Summary of the backing order. Returned only with expand=order. Present only when `expand` includes `order`; `null` when expanded and there is no related order. 

### CollectInvoiceResponse.data.invoice.order variant 1.buyer_contact

Field definitions: [DisputeResponse.data.order variant 1.buyer_contact](../models/DisputeResponse.md#disputeresponsedataorder-variant-1buyer_contact).

### CollectInvoiceResponse.data.invoice.order variant 1.deferred_promotions[]

Field definitions: [DisputeResponse.data.order variant 1.deferred_promotions[]](../models/DisputeResponse.md#disputeresponsedataorder-variant-1deferred_promotions).

### CollectInvoiceResponse.data.invoice.payment_due

The resolved due-date policy. Send this object back when updating the draft; payment_terms captures the term's current revision again. The invoice due-date policy resolved at write time. The object can be sent back when updating a draft.

Field definitions: [shared fields](InvoicePaymentDueInput.md#invoicepaymentdueinput).

### CollectInvoiceResponse.data.invoice.payment_due variant 1: `type` = `"none"`

oneOf with type: "none": The `none` variant of `InvoicePaymentDue`..

- Condition: not (at least one(present(`due_date`); present(`invoice_payment_term_id`))).
- Optional: `due_date`, `invoice_payment_term_id`.
- Constraints for `type`: Values: `"none"`.

### CollectInvoiceResponse.data.invoice.payment_due variant 2: `type` = `"date"`

oneOf with type: "date": The `date` variant of `InvoicePaymentDue`..

- Condition: not (present(`invoice_payment_term_id`)).
- Required: `due_date`.
- Optional: `invoice_payment_term_id`.
- Constraints for `type`: Values: `"date"`.

### CollectInvoiceResponse.data.invoice.payment_due variant 3: `type` = `"payment_terms"`

oneOf with type: "payment_terms": The `payment_terms` variant of `InvoicePaymentDue`..

- Condition: not (present(`due_date`)).
- Required: `invoice_payment_term_id`.
- Optional: `due_date`.
- Constraints for `type`: Values: `"payment_terms"`.

### CollectInvoiceResponse.data.invoice.payment_terms_snapshot

The payment term captured on the draft, with its due date rule and late fee policy. Later changes to the payment term don't affect this invoice. The payment terms saved on an invoice: the term's name, version, due date calculation, and late fee policy.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Required | object and ([InvoicePaymentTermCalculationOnReceipt](../models/InvoicePaymentTermCalculationOnReceipt.md#invoicepaymenttermcalculationonreceipt) or [InvoicePaymentTermCalculationNetDays](../models/InvoicePaymentTermCalculationNetDays.md#invoicepaymenttermcalculationnetdays) or [InvoicePaymentTermCalculationDaysAfterMonthEnd](../models/InvoicePaymentTermCalculationDaysAfterMonthEnd.md#invoicepaymenttermcalculationdaysaftermonthend) or [InvoicePaymentTermCalculationDayOfMonth](../models/InvoicePaymentTermCalculationDayOfMonth.md#invoicepaymenttermcalculationdayofmonth) or [InvoicePaymentTermCalculationDayOfNextMonth](../models/InvoicePaymentTermCalculationDayOfNextMonth.md#invoicepaymenttermcalculationdayofnextmonth)) | Rule used to calculate the invoice's due date when it is issued. How an invoice due date is calculated from payment terms, such as on receipt, net days, or a day of the month. `calculation`: [declared alternatives](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicepayment_terms_snapshotcalculation). |
| `invoice_payment_term_id` | Required | string | ID of the payment term captured on this invoice. Example: `"ipt_01KEZF7C0064N1V301BBMQ37R4"`. |
| `late_fee_policy` | Optional | object and Alternative shapes (see declared variants) | One-time late fee policy captured with this term. Absent when no late fee policy applies. A late fee for overdue invoices: a fixed amount or a percentage, a grace period in days, and whether Flint applies it automatically. `late_fee_policy`: [declared alternatives](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicepayment_terms_snapshotlate_fee_policy). |
| `name` | Required | string | Name of the payment term shown on invoices. |
| `version` | Required | integer | Version of the invoice payment term captured in this snapshot. Format: `int32`. |

### CollectInvoiceResponse.data.invoice.payment_terms_snapshot.calculation

Rule used to calculate the invoice's due date when it is issued. How an invoice due date is calculated from payment terms, such as on receipt, net days, or a day of the month.

Field definitions: [shared fields](InvoicePaymentTermCalculationInput.md#invoicepaymenttermcalculationinput).

### CollectInvoiceResponse.data.invoice.payment_terms_snapshot.calculation variant 1: `type` = `"on_receipt"`

oneOf with type: "on_receipt": The `on_receipt` variant of `InvoicePaymentTermCalculation`..

- Condition: not (at least one(present(`days`); present(`day`))).
- Optional: `day`, `days`.
- Constraints for `type`: Values: `"on_receipt"`.

### CollectInvoiceResponse.data.invoice.payment_terms_snapshot.calculation variant 2: `type` = `"net_days"`

oneOf with type: "net_days": The `net_days` variant of `InvoicePaymentTermCalculation`..

- Condition: not (present(`day`)).
- Required: `days`.
- Optional: `day`.
- Constraints for `type`: Values: `"net_days"`.

### CollectInvoiceResponse.data.invoice.payment_terms_snapshot.calculation variant 3: `type` = `"days_after_month_end"`

oneOf with type: "days_after_month_end": The `days_after_month_end` variant of `InvoicePaymentTermCalculation`..

- Condition: not (present(`day`)).
- Required: `days`.
- Optional: `day`.
- Constraints for `type`: Values: `"days_after_month_end"`.

### CollectInvoiceResponse.data.invoice.payment_terms_snapshot.calculation variant 4: `type` = `"day_of_month"`

oneOf with type: "day_of_month": The `day_of_month` variant of `InvoicePaymentTermCalculation`..

- Condition: not (present(`days`)).
- Required: `day`.
- Optional: `days`.
- Constraints for `type`: Values: `"day_of_month"`.

### CollectInvoiceResponse.data.invoice.payment_terms_snapshot.calculation variant 5: `type` = `"day_of_next_month"`

oneOf with type: "day_of_next_month": The `day_of_next_month` variant of `InvoicePaymentTermCalculation`..

- Condition: not (present(`days`)).
- Required: `day`.
- Optional: `days`.
- Constraints for `type`: Values: `"day_of_next_month"`.

### CollectInvoiceResponse.data.invoice.payment_terms_snapshot.late_fee_policy

One-time late fee policy captured with this term. Absent when no late fee policy applies. A late fee for overdue invoices: a fixed amount or a percentage, a grace period in days, and whether Flint applies it automatically.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Fixed fee in the invoice currency. Required for fixed and omitted for percentage. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `application_mode` | Optional | string | Whether Flint applies the one-time fee automatically after the grace period. Omission defaults to manual. Frozen when the invoice is issued. Default: `"manual"`. Values: `"manual"`, `"automatic"`. |
| `grace_period_days` | Required | integer | Calendar days from the start of due_date in the invoice timezone (UTC when absent) before a late fee is eligible. Never eligible before the due date ends. An on_receipt term requires at least 1 day. Format: `int32`. minimum: `0`. maximum: `365`. |
| `percent` | Conditional | number | Percentage applied to the fee base_outstanding_money. maximum: `100`. exclusiveMinimum: `0`. multipleOf: `0.0001`. |
| `type` | Required | string | How the one-time late fee is calculated. Values: `"fixed"`, `"percentage"`. |

### CollectInvoiceResponse.data.invoice.payment_terms_snapshot.late_fee_policy variant 1: `type` = `"fixed"`

oneOf with type: "fixed": The `fixed` variant of `InvoiceLateFeePolicy`..

- Condition: not (present(`percent`)).
- Required: `amount_money`.
- Optional: `percent`.
- Constraints for `type`: Values: `"fixed"`.

### CollectInvoiceResponse.data.invoice.payment_terms_snapshot.late_fee_policy variant 2: `type` = `"percentage"`

oneOf with type: "percentage": The `percentage` variant of `InvoiceLateFeePolicy`..

- Condition: not (present(`amount_money`)).
- Required: `percent`.
- Optional: `amount_money`.
- Constraints for `type`: Values: `"percentage"`.

### CollectInvoiceResponse.data.invoice.remit_to_address

Where the buyer sends offline payments, shown on the invoice. Defaults to the invoice settings remit-to address. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country.

Field definitions: [shared fields](AddressInput.md#addressinput).

### CollectInvoiceResponse.data.invoice.schedule_entries[]

One payment on an invoice's payment schedule, such as a deposit, installment, or balance, with its due time, amounts, and status.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_specification` | Required | object and Alternative shapes (see declared variants) | How the entry's amount is set: a fixed amount, a percent of the invoice total, or the remaining balance. How much a payment schedule entry collects: a fixed amount, a percentage of the invoice total, or the remaining balance. `amount_specification`: [declared alternatives](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoiceschedule_entriesamount_specification). |
| `credit_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Credit note credit allocated to this entry, minus reversed allocations. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `due` | Required | object and Alternative shapes (see declared variants) | When the entry is due. When a payment schedule entry on an invoice is due: at issue, on a set date, or on the invoice due date. `due`: [declared alternatives](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoiceschedule_entriesdue). |
| `invoice_schedule_entry_id` | Required | string | Flint invoice schedule entry ID. Kept across draft edits that send it back with the entry. Example: `"invse_01KEZF7C006JCPQBD8VZ0RNT6R"`. |
| `kind` | Required | string | The entry's role in the schedule. Values: `"deposit"`, `"installment"`, `"balance"`. |
| `outstanding_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | What is still owed on this entry, including its unpaid late fee, never below zero. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `paid_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Payments applied to this entry, minus reversed payments, including payments toward its late fee. Dispute losses don't reduce it. It can exceed total_money when the entry carries a late fee. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `status` | Required | string | The entry's payment status, computed when the invoice is read. It follows the entry's balance and due time, not the invoice's status. Values: `"pending"`, `"due"`, `"partially_satisfied"`, `"satisfied"`, `"overdue"`. |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The entry's share of the invoice total, resolved from amount_specification against snapshot.pricing_amounts.total_money. Recomputed on draft edits and fixed at issue. Excludes late fees. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `written_off_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The part of this entry written off when the invoice was marked uncollectible, including its unpaid late fee. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

### CollectInvoiceResponse.data.invoice.schedule_entries[].amount_specification

How the entry's amount is set: a fixed amount, a percent of the invoice total, or the remaining balance. How much a payment schedule entry collects: a fixed amount, a percentage of the invoice total, or the remaining balance.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount to collect, in the invoice currency. Required with fixed and not accepted with any other type. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `percent` | Conditional | number | Percentage of snapshot.pricing_amounts.total_money to collect, greater than 0 and at most 100, with up to four decimal places. Required with percentage and not accepted with any other type. multipleOf: `0.0001`. |
| `type` | Required | string | How the entry's amount is set. Values: `"fixed"`, `"percentage"`, `"remaining_balance"`. |

### CollectInvoiceResponse.data.invoice.schedule_entries[].amount_specification variant 1: `type` = `"fixed"`

oneOf with type: "fixed": The `fixed` variant of `InvoiceScheduleAmountSpecification`..

- Condition: not (present(`percent`)).
- Required: `amount_money`.
- Optional: `percent`.
- Constraints for `type`: Values: `"fixed"`.

### CollectInvoiceResponse.data.invoice.schedule_entries[].amount_specification variant 2: `type` = `"percentage"`

oneOf with type: "percentage": The `percentage` variant of `InvoiceScheduleAmountSpecification`..

- Condition: not (present(`amount_money`)).
- Required: `percent`.
- Optional: `amount_money`.
- Constraints for `type`: Values: `"percentage"`.

### CollectInvoiceResponse.data.invoice.schedule_entries[].amount_specification variant 3: `type` = `"remaining_balance"`

oneOf with type: "remaining_balance": The `remaining_balance` variant of `InvoiceScheduleAmountSpecification`..

- Condition: not (at least one(present(`amount_money`); present(`percent`))).
- Optional: `amount_money`, `percent`.
- Constraints for `type`: Values: `"remaining_balance"`.

### CollectInvoiceResponse.data.invoice.schedule_entries[].due

When the entry is due. When a payment schedule entry on an invoice is due: at issue, on a set date, or on the invoice due date.

Field definitions: [shared fields](InvoiceScheduleDueInput.md#invoicescheduledueinput).

### CollectInvoiceResponse.data.invoice.schedule_entries[].due variant 1: `type` = `"at_issue"`

oneOf with type: "at_issue": The `at_issue` variant of `InvoiceScheduleDue`..

- Optional: `due_date`.
- Constraints for `type`: Values: `"at_issue"`.

### CollectInvoiceResponse.data.invoice.schedule_entries[].due variant 2: `type` = `"date"`

oneOf with type: "date": The `date` variant of `InvoiceScheduleDue`..

- Required: `due_date`.
- Constraints for `type`: Values: `"date"`.

### CollectInvoiceResponse.data.invoice.schedule_entries[].due variant 3: `type` = `"invoice_due_date"`

oneOf with type: "invoice_due_date": The `invoice_due_date` variant of `InvoiceScheduleDue`..

- Optional: `due_date`.
- Constraints for `type`: Values: `"invoice_due_date"`.

### CollectInvoiceResponse.data.invoice.snapshot

The billing content of the invoice: line items, discounts, charges, tip, tax, and totals. A draft previews the backing order; issue freezes it, and later order changes don't reach an issued invoice. A frozen copy of an issued invoice's content, including line items, charges, discounts, tax identities, and pricing amounts.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_address` | Optional | [Address](../models/Address.md#address) | Billing address captured on the invoice. Kept after the customer is deleted, because an issued invoice must keep it. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. `billing_address`: [field definitions](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshotbilling_address). |
| `buyer_note` | Optional | string | The backing order's buyer note, captured on the invoice. |
| `buyer_tax_identity` | Required | [TaxIdentity](../models/TaxIdentity.md#taxidentity) or null | Buyer tax identity for this invoice. Drafts preview the customer's current identity. Issue freezes the identity, which later profile edits and customer deletion preserve. `null` when no buyer tax identity is available, including after customer deletion while the invoice is a draft. `buyer_tax_identity`: [declared alternatives](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshotbuyer_tax_identity). |
| `charges` | Optional | Array of [OrderCharge](../models/OrderCharge.md#ordercharge) | The backing order's service charges, frozen at issue. `charges[]`: [field definitions](../models/OrderResponse.md#orderresponsedatacharges). |
| `customer_display_name` | Optional | string | Buyer name captured on the invoice. Kept after the customer is deleted, because an issued invoice must keep it. |
| `customer_email` | Optional | string | Buyer email captured on the invoice. |
| `discounts` | Optional | Array of [InvoiceDiscount](../models/InvoiceDiscount.md#invoicediscount) | The discounts applied to the backing order, frozen at issue. `discounts[]`: [field definitions](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshotdiscounts). |
| `internal_note` | Optional | string | The backing order's internal note, captured on the invoice. Merchant reads only; buyer reads leave it out. |
| `line_items` | Optional | Array of [InvoiceLineItem](../models/InvoiceLineItem.md#invoicelineitem) | The billed line items, frozen at issue. A draft previews the backing order's lines. `line_items[]`: [field definitions](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshotline_items). |
| `merchant_display_name` | Optional | string | Your business name as shown on the invoice. A draft shows your current name; issue freezes it. |
| `pricing_amounts` | Required | [PricingAmounts](../models/PricingAmounts.md#pricingamounts) | The invoice's pricing totals. Its total_money is the invoice total that the top-level total_money reports. The money totals for an order or invoice: subtotal, discounts, charges, tax, requested tip, and total. |
| `requested_tip` | Optional | [InvoiceTip](../models/InvoiceTip.md#invoicetip) | The tip requested on the backing order, frozen at issue. Absent when none was requested. A tip requested on an invoice, set as a fixed amount or a percentage, with an optional name and description. |
| `seller_tax_identity` | Required | [TaxIdentity](../models/TaxIdentity.md#taxidentity) or null | Identity frozen on the source invoice at issue. Later profile edits do not change this document. `null` when no seller tax identity was captured. `seller_tax_identity`: [declared alternatives](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshotseller_tax_identity). |
| `tax_breakdowns` | Required | Array of (object and Alternative shapes (see declared variants)) | Tax jurisdiction rows for this invoice. A draft previews the backing order's current rows; issue freezes them, and the API, hosted invoice, and PDF share the frozen rows. External tax produces these rows. Automatic tax doesn't, so an automatic-tax invoice reports its tax in pricing_amounts and each line's tax_money. On a newly issued external-tax invoice, rows sum to pricing_amounts.tax_money, and rows with price_mode inclusive sum to pricing_amounts.inclusive_tax_money. A row's order_line_item_id matches the same field on InvoiceLineItem; order_charge_id names a charge in charges. Always [] when no tax rows apply. Some older external-tax invoices have no frozen rows. `tax_breakdowns[]`: [declared alternatives](../models/OrderResponse.md#orderresponsedatataxtax_breakdowns). |
| `tax_currency_conversions` | Required | Array of [TaxCurrencyConversion](../models/TaxCurrencyConversion.md#taxcurrencyconversion) | VAT stated in the currency of the country that charges it, one entry per currency, frozen at issue. EU member states require their national currency and the UK requires sterling. Each entry gives the converted VAT, the converted taxable amount, and the rate with its source and date. Present for VAT above zero charged by an EU member state or the UK; always [] otherwise, including reverse charge, invoices in that currency already, and invoices issued before conversions were recorded. The invoice PDF prints the same figures. `tax_currency_conversions[]`: [field definitions](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshottax_currency_conversions). |
| `tax_exemption` | Optional | [OrderTaxExemption](../models/OrderTaxExemption.md#ordertaxexemption) | Exemption assessment captured on this invoice. A draft previews the backing order's assessment; issue freezes it. Omitted when no assessment was recorded, including on older invoices. Buyer views omit evidence_reference. An exemption and a reverse charge never apply to the same invoice: when an exemption applies, Flint calculates no tax, so tax_reverse_charge is null. The exemption assessment recorded for an order or invoice, frozen when tax commits. Fields absent from historical snapshots stay omitted. `tax_exemption`: [field definitions](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshottax_exemption). |
| `tax_reverse_charge` | Optional | [TaxReverseCharge](../models/TaxReverseCharge.md#taxreversecharge) or null | The order's reverse charge, frozen when the invoice is issued: the buyer accounts for the tax, and documents print "Reverse charge" with the buyer's tax ID. `null` when no reverse charge applies, including when an exemption applies: Flint calculates no tax for an exempt sale, so the two never appear on the same invoice. Drafts preview the order's current value. `tax_reverse_charge`: [declared alternatives](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshottax_reverse_charge). |

### CollectInvoiceResponse.data.invoice.snapshot.billing_address

Billing address captured on the invoice. Kept after the customer is deleted, because an issued invoice must keep it. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country.

Field definitions: [shared fields](AddressInput.md#addressinput).

### CollectInvoiceResponse.data.invoice.snapshot.buyer_tax_identity

Buyer tax identity for this invoice. Drafts preview the customer's current identity. Issue freezes the identity, which later profile edits and customer deletion preserve. `null` when no buyer tax identity is available, including after customer deletion while the invoice is a draft.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `legal_name` | Conditional | string or null | The merchant's legal name, printed on invoices and credit notes. `null` when no legal name is set. minLength: `1`. maxLength: `255`. |
| `registered_address` | Conditional | [Address](../models/Address.md#address) or null | The merchant's registered business address, printed on invoices and credit notes. `null` when no address is set. `registered_address`: [declared alternatives](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshotbuyer_tax_identity-variant-1registered_address). |
| `tax_ids` | Conditional | Array of [DocumentTaxID](../models/DocumentTaxID.md#documenttaxid) | Tax IDs printed on invoices and credit notes, in display order. Empty when none are set. maxItems: `20`. `tax_ids[]`: [field definitions](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshotbuyer_tax_identity-variant-1tax_ids). |

### CollectInvoiceResponse.data.invoice.snapshot.buyer_tax_identity variant 1

anyOf TaxIdentity: Merchant-provided legal identity displayed on invoices and credit notes. Flint does not verify IDs. On a customer, automatic tax sends the tax ID for an EU, GB, AU or NZ destination to its tax provider, which can apply a reverse charge; other IDs do not change tax treatment. Tax IDs are an owned collection in display order; replacing the array requires the parent's expected_version. Existing entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add one..

- Required: `legal_name`, `registered_address`, `tax_ids`.

### CollectInvoiceResponse.data.invoice.snapshot.buyer_tax_identity variant 2

anyOf variant 2.

- Undeclared: `legal_name`, `registered_address`, `tax_ids`.
- Value shape: null. Buyer tax identity for this invoice. Drafts preview the customer's current identity. Issue freezes the identity, which later profile edits and customer deletion preserve. `null` when no buyer tax identity is available, including after customer deletion while the invoice is a draft. 

### CollectInvoiceResponse.data.invoice.snapshot.buyer_tax_identity variant 1.registered_address

The merchant's registered business address, printed on invoices and credit notes. `null` when no address is set.

Field definitions: [shared fields](SubscriptionResponse.md#subscriptionresponsedatadeliverydestinationaddress).

### CollectInvoiceResponse.data.invoice.snapshot.buyer_tax_identity variant 1.registered_address variant 1

anyOf Address: A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country..

- Required: `country`.
- Optional: `city`, `line1`, `line2`, `postal_code`, `state`.

### CollectInvoiceResponse.data.invoice.snapshot.buyer_tax_identity variant 1.registered_address variant 2

anyOf variant 2.

- Undeclared: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.
- Value shape: null. The merchant's registered business address, printed on invoices and credit notes. `null` when no address is set. 

### CollectInvoiceResponse.data.invoice.snapshot.buyer_tax_identity variant 1.tax_ids[]

A tax identifier printed on documents, with its country, optional region, identifier type, and value. Flint does not verify the value.

Field definitions: [shared fields](DocumentTaxIDRequestInput.md#documenttaxidrequestinput).

### CollectInvoiceResponse.data.invoice.snapshot.charges[]

Field definitions: [OrderResponse.data.charges[]](../models/OrderResponse.md#orderresponsedatacharges).

### CollectInvoiceResponse.data.invoice.snapshot.discounts[]

A discount applied to an invoice, with its source, the discount amount, the amount actually applied, and any promotion.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Discount amount before limits apply, such as 20% of $100 resolving to $20. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `applied_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount the discount took off. It is less than `amount_money` when a limit applies, such as a discount that would take the order below zero. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `customer_facing_name` | Optional | string | Name the buyer sees for the discount. |
| `discount_class` | Optional | string | Which part of the order the discount reduces. Values: `"order"`, `"line_item"`. |
| `promotion_code` | Optional | string | Promotion code used to create this discount. Present only when `source` is `promotion` and a code was used. |
| `promotion_id` | Optional | string | ID of the promotion that supplied this discount. Absent for a manual discount. Example: `"promo_01KEZF7C00QQ8EZ74BDYSZ315V"`. |
| `source` | Required | string | Where the discount came from. Values: `"manual"`, `"promotion"`, `"plan_change_credit"`, `"proration"`, `"prepaid_delivery"`. |

### CollectInvoiceResponse.data.invoice.snapshot.line_items[]

A line item on an invoice.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `base_subtotal_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | unit_price_money × quantity. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `bundle_components` | Optional | Array of [BundleComponent](../models/BundleComponent.md#bundlecomponent) | The items inside a bundle line, as billed. `bundle_components[]`: [field definitions](../models/OrderResponse.md#orderresponsedataline_itemsbundle_components). |
| `bundle_id` | Optional | string | The catalog bundle the line was sold from. Absent unless type is bundle. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. |
| `categories` | Optional | Array of [CategoryReference](../models/CategoryReference.md#categoryreference) | The catalog categories of the line's item when it was billed. `categories[]`: [field definitions](../models/OrderResponse.md#orderresponsedataline_itemscategories). |
| `description` | Optional | string | Line item description as billed. |
| `discount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | This line's share of order and line-item discounts. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `image` | Optional | [Image](../models/Image.md#image) | Line item image. An image with its URL, size, and alt text. |
| `invoice_line_item_id` | Required | string | Flint invoice line item ID, stable across draft edits and issue while the backing order line keeps its ID. Credit notes credit lines by this ID. Example: `"invli_01KEZF7C00H767MAT1DY7ZWSVW"`. |
| `modifier_total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Total of the line's modifiers. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `modifiers` | Optional | Array of [OrderLineItemModifier](../models/OrderLineItemModifier.md#orderlineitemmodifier) | The line's modifiers, as billed. `modifiers[]`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedataline_itemsmodifiers). |
| `name` | Required | string | Line item name as billed. |
| `order_id` | Required | string | Order that owns the backing order_line_item_id. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `order_line_item_id` | Optional | string | The backing order's line item. Tax rows in snapshot.tax_breakdowns reference the line by this ID. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. |
| `product_id` | Optional | string | Parent product of the line's variant. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `selected_options` | Optional | Array of [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption) | The product options chosen for the line, as billed. `selected_options[]`: [field definitions](../models/OrderResponse.md#orderresponsedataline_itemsbundle_componentsvariantselected_options). |
| `sku` | Optional | string | Stock keeping unit as billed. |
| `subtotal_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | base_subtotal_money + modifier_total_money. For a tax-inclusive price, it includes the tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `tax_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Tax on this line. Its rows in snapshot.tax_breakdowns give the rate and price_mode. For a tax-inclusive price, the tax is already inside subtotal_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | What the line bills. For a tax-inclusive price, subtotal_money - discount_money; otherwise subtotal_money - discount_money + tax_money. In both cases the tax-exclusive value is total_money - tax_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `type` | Required | string | Whether the line was sold from a catalog variant, a bundle, or a custom item. Values: `"variant"`, `"bundle"`, `"custom"`. |
| `unit_price_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Price of one unit, before modifiers and discounts. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `variant_id` | Optional | string | The catalog variant the line was sold from. Absent unless type is variant. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

### CollectInvoiceResponse.data.invoice.snapshot.line_items[].bundle_components[]

Field definitions: [OrderResponse.data.line_items[].bundle_components[]](../models/OrderResponse.md#orderresponsedataline_itemsbundle_components).

### CollectInvoiceResponse.data.invoice.snapshot.line_items[].categories[]

Field definitions: [OrderResponse.data.line_items[].categories[]](../models/OrderResponse.md#orderresponsedataline_itemscategories).

### CollectInvoiceResponse.data.invoice.snapshot.line_items[].modifiers[]

Field definitions: [FulfillmentResponse.data.line_items[].modifiers[]](../models/FulfillmentResponse.md#fulfillmentresponsedataline_itemsmodifiers).

### CollectInvoiceResponse.data.invoice.snapshot.line_items[].selected_options[]

Field definitions: [OrderResponse.data.line_items[].bundle_components[].variant.selected_options[]](../models/OrderResponse.md#orderresponsedataline_itemsbundle_componentsvariantselected_options).

### CollectInvoiceResponse.data.invoice.snapshot.seller_tax_identity

Identity frozen on the source invoice at issue. Later profile edits do not change this document. `null` when no seller tax identity was captured.

Field definitions: [shared fields](#collectinvoiceresponsedatainvoicesnapshotbuyer_tax_identity).

### CollectInvoiceResponse.data.invoice.snapshot.seller_tax_identity variant 1

anyOf TaxIdentity: Merchant-provided legal identity displayed on invoices and credit notes. Flint does not verify IDs. On a customer, automatic tax sends the tax ID for an EU, GB, AU or NZ destination to its tax provider, which can apply a reverse charge; other IDs do not change tax treatment. Tax IDs are an owned collection in display order; replacing the array requires the parent's expected_version. Existing entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add one..

- Required: `legal_name`, `registered_address`, `tax_ids`.

### CollectInvoiceResponse.data.invoice.snapshot.seller_tax_identity variant 2

anyOf variant 2.

- Undeclared: `legal_name`, `registered_address`, `tax_ids`.
- Value shape: null. Identity frozen on the source invoice at issue. Later profile edits do not change this document. `null` when no seller tax identity was captured. 

### CollectInvoiceResponse.data.invoice.snapshot.seller_tax_identity variant 1.registered_address

Declared alternatives: [CollectInvoiceResponse.data.invoice.snapshot.buyer_tax_identity variant 1.registered_address](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshotbuyer_tax_identity-variant-1registered_address).

### CollectInvoiceResponse.data.invoice.snapshot.seller_tax_identity variant 1.tax_ids[]

Field definitions: [CollectInvoiceResponse.data.invoice.snapshot.buyer_tax_identity variant 1.tax_ids[]](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshotbuyer_tax_identity-variant-1tax_ids).

### CollectInvoiceResponse.data.invoice.snapshot.tax_breakdowns[]

Declared alternatives: [OrderResponse.data.tax.tax_breakdowns[]](../models/OrderResponse.md#orderresponsedatataxtax_breakdowns).

### CollectInvoiceResponse.data.invoice.snapshot.tax_currency_conversions[]

VAT on an issued document converted into the currency of the country whose VAT is charged.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency` | Required | string | ISO 4217 code of the currency the VAT is stated in: the euro or the member state's national currency in the EU, sterling in the UK. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `exchange_rate` | Required | number | Units of currency for one unit of the invoice currency, rounded half up to at most 10 decimal places. tax_money and taxable_money are calculated from this value. exclusiveMinimum: `0`. |
| `rate_date` | Required | string | The ECB reference day, or the first day of the month an HMRC rate covers. Format: `date`. Example: `"2026-08-02"`. |
| `rate_source` | Required | string | Who published the rate. Ignore values you don't recognize. Values: `"ecb"`, `"hmrc"`. |
| `tax_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The document's VAT for this currency: VAT summed in the invoice currency, times exchange_rate, rounded half up to the currency's minor units. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `taxable_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount the VAT was charged on, converted the same way. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

### CollectInvoiceResponse.data.invoice.snapshot.tax_exemption

Exemption assessment captured on this invoice. A draft previews the backing order's assessment; issue freezes it. Omitted when no assessment was recorded, including on older invoices. Buyer views omit evidence_reference. An exemption and a reverse charge never apply to the same invoice: when an exemption applies, Flint calculates no tax, so tax_reverse_charge is null. The exemption assessment recorded for an order or invoice, frozen when tax commits. Fields absent from historical snapshots stay omitted.

Field definitions: [shared fields](OrderResponse.md#orderresponsedatataxexemption).

### CollectInvoiceResponse.data.invoice.snapshot.tax_exemption.coverage

Declared alternatives: [OrderResponse.data.tax.exemption.coverage](../models/OrderResponse.md#orderresponsedatataxexemptioncoverage).

### CollectInvoiceResponse.data.invoice.snapshot.tax_reverse_charge

The order's reverse charge, frozen when the invoice is issued: the buyer accounts for the tax, and documents print "Reverse charge" with the buyer's tax ID. `null` when no reverse charge applies, including when an exemption applies: Flint calculates no tax for an exempt sale, so the two never appear on the same invoice. Drafts preview the order's current value.

Field definitions: [shared fields](OrderResponse.md#orderresponsedatataxreverse_charge).

### CollectInvoiceResponse.data.invoice.snapshot.tax_reverse_charge variant 1

anyOf TaxReverseCharge: The buyer accounts for the tax under the reverse charge. Rows that carry it have `taxability_reason` `reverse_charge` and no tax..

- Required: `customer_tax_id`.

### CollectInvoiceResponse.data.invoice.snapshot.tax_reverse_charge variant 2

anyOf variant 2.

- Undeclared: `customer_tax_id`.
- Value shape: null. The order's reverse charge, frozen when the invoice is issued: the buyer accounts for the tax, and documents print "Reverse charge" with the buyer's tax ID. `null` when no reverse charge applies, including when an exemption applies: Flint calculates no tax for an exempt sale, so the two never appear on the same invoice. Drafts preview the order's current value. 

### CollectInvoiceResponse.data.invoice.snapshot.tax_reverse_charge variant 1.customer_tax_id

Declared alternatives: [OrderResponse.data.tax.reverse_charge variant 1.customer_tax_id](../models/OrderResponse.md#orderresponsedatataxreverse_charge-variant-1customer_tax_id).

### CollectInvoiceResponse.data.invoice_payment_attempt

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `canceled_at` | Conditional | string | When the attempt was canceled. An attempt canceled with its checkout session before payment started may not have it. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `cancellation_requested_at` | Conditional | string | When cancellation of this attempt was last requested. It stays set when the payment processor refuses the cancellation or the payment settles first, so read status and canceled_at for the outcome. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `checkout_session_id` | Conditional | string | The hosted or headless checkout session the buyer pays through. Absent for automatic charges. Example: `"cs_01KEZF7C004JRWFW43H037MQRN"`. |
| `expected_amount_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount this attempt collects: the outstanding balance, or the targeted schedule entry's outstanding amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `expires_at` | Conditional | string | When a checkout attempt expires, matching its checkout session. Absent for automatic charges. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `invoice_id` | Conditional | string | The invoice this attempt collects. Example: `"inv_01KEZF7C00A5GEBMWHEAJFSAR4"`. |
| `invoice_payment_attempt_id` | Conditional | string | Flint invoice payment attempt ID. Example: `"invpa_01KEZF7C00PMWEDPAYYEKDTPBX"`. |
| `invoice_schedule_entry_id` | Conditional | string | The schedule entry this attempt collects. Absent when the attempt collects the invoice balance. Example: `"invse_01KEZF7C006JCPQBD8VZ0RNT6R"`. |
| `last_payment_error` | Conditional | [PaymentErrorSummary](../models/PaymentErrorSummary.md#paymenterrorsummary) | Why the payment failed. Present only when status is failed. A summary of why a payment attempt failed, with a normalized error code, a message, the failure time, and remediation. `last_payment_error`: [field definitions](../models/InvoicePaymentAttemptResponse.md#invoicepaymentattemptresponsedatalast_payment_error). |
| `payment_intent_id` | Conditional | string | The payment intent behind this attempt. Absent until payment starts, such as a hosted attempt the buyer hasn't paid yet. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `rail` | Conditional | string | How the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Values: `"card"`, `"ach_debit"`. |
| `settled_at` | Conditional | string | When this attempt first settled successfully. Duplicate payment notifications preserve this timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `started_at` | Conditional | string | When the attempt was created. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `status` | Conditional | string | Current payment attempt status. settled means this attempt completed successfully, even if the invoice still has an outstanding balance. invoice_payment_attempt.settled reports that completion. Values: `"open"`, `"settled"`, `"failed"`, `"canceled"`, `"expired"`, `"processing"`. |
| `updated_at` | Conditional | string | When this attempt last changed. Duplicate payment notifications preserve this timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

### CollectInvoiceResponse.data.invoice_payment_attempt variant 1

anyOf InvoicePaymentAttempt: An attempt to collect payment for an invoice..

- Required: `expected_amount_money`, `invoice_id`, `invoice_payment_attempt_id`, `rail`, `status`, `updated_at`.
- Optional: `canceled_at`, `cancellation_requested_at`, `checkout_session_id`, `expires_at`, `invoice_schedule_entry_id`, `last_payment_error`, `payment_intent_id`, `settled_at`, `started_at`.

### CollectInvoiceResponse.data.invoice_payment_attempt variant 2

anyOf variant 2.

- Undeclared: `canceled_at`, `cancellation_requested_at`, `checkout_session_id`, `expected_amount_money`, `expires_at`, `invoice_id`, `invoice_payment_attempt_id`, `invoice_schedule_entry_id`, `last_payment_error`, `payment_intent_id`, `rail`, `settled_at`, `started_at`, `status`, `updated_at`.
- Value shape: null.  

### CollectInvoiceResponse.data.invoice_payment_attempt variant 1.last_payment_error

Field definitions: [InvoicePaymentAttemptResponse.data.last_payment_error](../models/InvoicePaymentAttemptResponse.md#invoicepaymentattemptresponsedatalast_payment_error).

### CollectInvoiceResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

