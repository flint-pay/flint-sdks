import type { Address } from './types-0.js';
import type { ExpandedCustomerSummary, ExpandedOrderSummary, DisputesAcceptParams } from './types-24.js';
import type { Invoice, InvoiceCollection } from './types-31.js';
import type { InvoiceLateFee, InvoiceLateFeePolicy } from './types-32.js';
import type { InvoiceScheduleEntry, InvoiceSnapshot } from './types-34.js';
import type { MetadataMap, MerchantWebhookEnvelope } from './types-38.js';
import type { MoneyValue, MoneyValueInput } from './types-39.js';
import type { PartnerWebhookEnvelope } from './types-44.js';
import type { PaymentErrorSummary } from './types-45.js';
import type { ResponseMeta } from './types-54.js';
import type { InputValue } from '../runtime.js';
import type { CreateInvoicePaymentTermRequestInput } from './types-10.js';
import type { UpdateInvoicePaymentTermRequestInput } from './types-67.js';
/**
 * The `invoice.partially_refunded` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type InvoicePartiallyRefundedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `public_url`. object.cc_emails (Required): Array of string. Additional recipients
     * copied on the invoice email and every reminder. object.cc_emails[] (Value): string.
     * object.closed_at (Optional): string. When the current closed interval began. Cleared when
     * status returns to open or partially_paid. A direct move between closed statuses preserves
     * this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.collection
     * (Required): {@link InvoiceCollection}. How this invoice is collected, resolved when the
     * draft is written. Send this object back when updating its collection policy. The invoice
     * collection policy resolved at write time. The object can be sent back when updating a draft.
     * object.collection_block_status (Required): string. Whether collection is blocked. While it
     * is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED with
     * details[0].reason inventory_wait. Value enum: "none", "inventory_blocked", "resolved".
     * object.created_at (Required): string. When the invoice was created. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.credit_money (Required): {@link MoneyValue}. Credit
     * note credit allocated to this invoice, minus reversed allocations. Unallocated credit isn't
     * included. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.currently_due_money (Required): {@link MoneyValue}. The part of the balance due now.
     * Without schedule_entries, it equals outstanding_money. With schedule_entries, it is the
     * outstanding amount of the first entry, in schedule order, whose due date has started and
     * that still has a balance, or 0 when there is none. It is the amount the next collect call or
     * checkout session charges. To total everything overdue, add the outstanding_money of the
     * entries whose status is overdue. Always 0 unless the invoice is open or partially_paid.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.customer (Optional): {@link ExpandedCustomerSummary} or null. Summary of the billed
     * customer. Returned only with expand=customer. Present only when `expand` includes
     * `customer`; `null` when expanded and there is no related customer. object.customer.anyOf[1]
     * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of
     * a customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Optional): string. Customer billed by this invoice. Absent when the
     * invoice has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.delivery_mode
     * (Optional): string. How issue delivered the invoice. Value enum: "email", "caller_managed".
     * object.due_date (Optional): string. Calendar due date in YYYY-MM-DD format, interpreted in
     * timezone (UTC when absent). The outstanding balance becomes overdue only after this date
     * ends. Automatic collection runs at the later of issue and the start of this date. With
     * payment terms, issue computes this date from issued_at. Absent when there is no due date.
     * Format: date. Example: "2026-08-02". object.external_reference_id (Required): string or
     * null. Caller-owned identifier for this resource in an external system. Use it as your sync
     * key: it isn't printed on the invoice. `null` when unset. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842". object.footer (Required): string or null. Fine print at the
     * bottom of the invoice and PDF. It cannot change after issue. `null` when unset.
     * object.invoice_id (Required): string. Flint invoice ID. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.invoice_number (Optional): string. Sequential
     * document number assigned when the invoice is issued. Numbering is per merchant, with test
     * and live mode numbered independently. object.is_overdue (Required): boolean. Whether the
     * invoice is open or partially_paid and past due with a balance remaining. Without
     * schedule_entries, the due_date has ended in timezone (UTC when absent) and outstanding_money
     * is above zero; with them, at least one entry is overdue. Computed when the invoice is read.
     * object.issued_at (Optional): string. When the invoice was issued. Absent on a draft. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.late_fee_money (Required): {@link
     * MoneyValue}. Late fees assessed after issue, minus waivers, including amounts since paid or
     * written off. Itemized in late_fees. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. object.late_fees (Required): Array of {@link InvoiceLateFee}.
     * Late fees assessed on this invoice, each with its paid, waived, written-off, and outstanding
     * amounts. late_fee_money is their assessed total minus waivers. object.late_fees[] (Value):
     * {@link InvoiceLateFee}. A charge assessed because an invoice payment is overdue. object.memo
     * (Required): string or null. Message to the customer, printed on the invoice and PDF. It
     * cannot change after issue. `null` when unset. object.merchant_id (Required): string.
     * Merchant that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata
     * (Optional): {@link MetadataMap}. Caller-owned metadata. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null. Summary
     * of the backing order. Returned only with expand=order. Present only when `expand` includes
     * `order`; `null` when expanded and there is no related order. object.order.anyOf[1] (Value):
     * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Required): string. The order this
     * invoice bills. Every invoice has one; quick pay creates it. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.outstanding_money (Required): {@link MoneyValue}.
     * What is still owed: total_money + late_fee_money - paid_money - credit_money -
     * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
     * invoices; equal to total_money on a draft. Refunds and dispute losses don't change it.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.paid_at (Optional): string. When the invoice most recently became paid. Cleared when
     * status leaves paid and set again on a later paid transition. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.paid_money (Required): {@link MoneyValue}. Payments collected
     * toward this invoice, online or as recorded manual payments, minus reversed payments,
     * including payments toward late fees. Never below zero. Disputes, including losses, don't
     * reduce it. Refunds don't reduce it; they are in refunded_money. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code. object.payment_due (Required): {@link
     * InvoicePaymentDue}. The resolved due-date policy. Send this object back when updating the
     * draft; payment_terms captures the term's current revision again. The invoice due-date policy
     * resolved at write time. The object can be sent back when updating a draft.
     * object.payment_terms_snapshot (Optional): {@link InvoicePaymentTermsSnapshot}. The payment
     * term captured on the draft, with its due date rule and late fee policy. Later changes to the
     * payment term don't affect this invoice. The payment terms saved on an invoice: the term's
     * name, version, due date calculation, and late fee policy. object.po_number (Required):
     * string or null. The buyer's purchase order number, printed on the invoice and PDF. It cannot
     * change after issue. `null` when unset. object.public_url (Optional): string. The hosted
     * invoice link where the buyer views and pays the invoice. Present after issue on API reads,
     * except a list filtered by idempotency_key; webhook payloads leave it out.
     * regenerate-public-link replaces it. Anyone with the link can open the invoice, so treat it
     * as a secret. object.recipient_email (Required): string or null. Where Flint emails the
     * invoice and its reminders. Email delivery requires it at issue. `null` when unset.
     * object.reference (Required): string or null. Your reference for the invoice, printed on the
     * invoice and PDF. The buyer's purchase order number goes in po_number. It cannot change after
     * issue. `null` when unset. object.refund_status (Required): string. How much of the collected
     * money has been refunded. It doesn't change status. Value enum: "none", "partially_refunded",
     * "refunded". object.refunded_money (Required): {@link MoneyValue}. Money refunded to the
     * buyer after collection. Refunds don't reopen the balance; refund_status summarizes them.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.reminders_paused (Required): boolean. Whether automatic reminders are paused. Set
     * reminders_paused on PATCH /v1/invoices/{invoice_id} to change it. object.reminders_paused_at
     * (Optional): string. When automatic reminders were paused. Absent while reminders are active.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.remit_to_address (Optional):
     * {@link Address}. Where the buyer sends offline payments, shown on the invoice. Defaults to
     * the invoice settings remit-to address. A postal address. Every address has country.
     * Addresses Flint checked as complete (customer and saved addresses, merchant, location,
     * invoice, order delivery destination, tax identity, fulfillment recipient and pickup
     * addresses) always have line1 and city, and US ones always have state and postal_code.
     * Delivery quote destinations, buyer locations and postal-code tax locations hold only what
     * was provided, such as postal_code and country. object.schedule_entries (Required): Array of
     * {@link InvoiceScheduleEntry}. The payment schedule, in schedule order. Always [] when the
     * invoice has no schedule and is collected in one balance. object.schedule_entries[] (Value):
     * {@link InvoiceScheduleEntry}. One payment on an invoice's payment schedule, such as a
     * deposit, installment, or balance, with its due time, amounts, and status.
     * object.scheduled_issue_at (Required): string or null. When Flint will issue and deliver this
     * draft. `null` when no issue is scheduled. Cleared when the draft is issued or voided, or
     * when you send null. Format: date-time. Example: "2026-08-02T16:00:00Z". object.service_date
     * (Required): string or null. The calendar date of the billed service, in YYYY-MM-DD format.
     * The invoice and PDF print it as written, without timezone conversion. `null` when unset.
     * Format: date. Example: "2026-08-02". object.snapshot (Optional): {@link InvoiceSnapshot}.
     * The billing content of the invoice: line items, discounts, charges, tip, tax, and totals. A
     * draft previews the backing order; issue freezes it, and later order changes don't reach an
     * issued invoice. A frozen copy of an issued invoice's content, including line items, charges,
     * discounts, tax identities, and pricing amounts. object.status (Required): string. Current
     * invoice status. paid and credited close the current balance and can reopen to open or
     * partially_paid after a payment or credit allocation reversal; invoice.reopened reports that
     * change. An uncollectible invoice accepts manual recovery payments and becomes paid when
     * fully recovered; reversals restore the write-off. voided is final. Refunds change
     * refund_status without reopening the balance. A lost dispute leaves paid_money, the balance,
     * and status unchanged; collecting it again requires a new invoice. Value enum: "draft",
     * "open", "partially_paid", "paid", "voided", "uncollectible", "credited".
     * object.subscription_id (Required): string or null. The subscription the backing order
     * belongs to, copied when the draft is created and never changed. `null` when the order isn't
     * part of a subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". object.supported_actions
     * (Required): Array of string. Lifecycle actions Flint accepts for this resource now, based on
     * stored state. Independent of the caller's permissions; each action still requires its
     * route's scope. Always [] when no action is available. [] enum: "collect", "issue",
     * "mark_uncollectible", "void". object.supported_actions[] (Value): string. Value enum:
     * "collect", "issue", "mark_uncollectible", "void". object.timezone (Optional): string. IANA
     * time zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken from
     * the merchant's timezone when the draft is written, or UTC when unset. Later merchant changes
     * do not alter this invoice's calendar. object.total_money (Required): {@link MoneyValue}.
     * What the issued invoice bills, equal to snapshot.pricing_amounts.total_money. Fixed at
     * issue; a draft previews the backing order total. Late fees are in late_fee_money. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * object.uncollectible_at (Optional): string. When the invoice was marked uncollectible.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.updated_at (Required): string.
     * When the invoice last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Current invoice version. Send this as expected_version
     * when updating the draft. Format: int64. minimum: 1. object.viewed_at (Optional): string.
     * When the buyer first opened the invoice through its hosted invoice link. Recorded on a
     * best-effort basis. Format: date-time. Example: "2026-08-02T16:00:00Z". object.voided_at
     * (Optional): string. When the invoice was voided. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.written_off_money (Required): {@link MoneyValue}. The balance
     * written off when the invoice was marked uncollectible, including unpaid late fees. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `public_url`.
         * cc_emails (Required): Array of string. Additional recipients copied on the invoice email
         * and every reminder. cc_emails[] (Value): string. closed_at (Optional): string. When the
         * current closed interval began. Cleared when status returns to open or partially_paid. A
         * direct move between closed statuses preserves this timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". collection (Required): {@link InvoiceCollection}. How
         * this invoice is collected, resolved when the draft is written. Send this object back
         * when updating its collection policy. The invoice collection policy resolved at write
         * time. The object can be sent back when updating a draft. collection_block_status
         * (Required): string. Whether collection is blocked. While it is inventory_blocked,
         * collection attempts return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait.
         * Value enum: "none", "inventory_blocked", "resolved". created_at (Required): string. When
         * the invoice was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * credit_money (Required): {@link MoneyValue}. Credit note credit allocated to this
         * invoice, minus reversed allocations. Unallocated credit isn't included. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code. currently_due_money
         * (Required): {@link MoneyValue}. The part of the balance due now. Without
         * schedule_entries, it equals outstanding_money. With schedule_entries, it is the
         * outstanding amount of the first entry, in schedule order, whose due date has started and
         * that still has a balance, or 0 when there is none. It is the amount the next collect
         * call or checkout session charges. To total everything overdue, add the outstanding_money
         * of the entries whose status is overdue. Always 0 unless the invoice is open or
         * partially_paid. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. customer (Optional): {@link ExpandedCustomerSummary} or null. Summary of
         * the billed customer. Returned only with expand=customer. Present only when `expand`
         * includes `customer`; `null` when expanded and there is no related customer.
         * customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary fields,
         * returned in place of a customer ID when the customer is expanded. customer.anyOf[2]
         * (Value): null. customer_id (Optional): string. Customer billed by this invoice. Absent
         * when the invoice has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
         * delivery_mode (Optional): string. How issue delivered the invoice. Value enum: "email",
         * "caller_managed". due_date (Optional): string. Calendar due date in YYYY-MM-DD format,
         * interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only
         * after this date ends. Automatic collection runs at the later of issue and the start of
         * this date. With payment terms, issue computes this date from issued_at. Absent when
         * there is no due date. Format: date. Example: "2026-08-02". external_reference_id
         * (Required): string or null. Caller-owned identifier for this resource in an external
         * system. Use it as your sync key: it isn't printed on the invoice. `null` when unset.
         * minLength: 1. maxLength: 255. Example: "warehouse-1842". footer (Required): string or
         * null. Fine print at the bottom of the invoice and PDF. It cannot change after issue.
         * `null` when unset. invoice_id (Required): string. Flint invoice ID. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_number (Optional): string. Sequential document
         * number assigned when the invoice is issued. Numbering is per merchant, with test and
         * live mode numbered independently. is_overdue (Required): boolean. Whether the invoice is
         * open or partially_paid and past due with a balance remaining. Without schedule_entries,
         * the due_date has ended in timezone (UTC when absent) and outstanding_money is above
         * zero; with them, at least one entry is overdue. Computed when the invoice is read.
         * issued_at (Optional): string. When the invoice was issued. Absent on a draft. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". late_fee_money (Required): {@link
         * MoneyValue}. Late fees assessed after issue, minus waivers, including amounts since paid
         * or written off. Itemized in late_fees. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. late_fees (Required): Array of {@link
         * InvoiceLateFee}. Late fees assessed on this invoice, each with its paid, waived,
         * written-off, and outstanding amounts. late_fee_money is their assessed total minus
         * waivers. late_fees[] (Value): {@link InvoiceLateFee}. A charge assessed because an
         * invoice payment is overdue. memo (Required): string or null. Message to the customer,
         * printed on the invoice and PDF. It cannot change after issue. `null` when unset.
         * merchant_id (Required): string. Merchant that owns this invoice. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Caller-owned
         * metadata. Caller-owned key-value data stored on a resource. Keys starting with flint_
         * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput
         * and MetadataPatchInput; maps written before those limits may not satisfy them. order
         * (Optional): {@link ExpandedOrderSummary} or null. Summary of the backing order. Returned
         * only with expand=order. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[2] (Value): null. order_id (Required): string. The order this invoice bills.
         * Every invoice has one; quick pay creates it. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
         * outstanding_money (Required): {@link MoneyValue}. What is still owed: total_money +
         * late_fee_money - paid_money - credit_money - written_off_money, never below zero. 0 on
         * paid, credited, uncollectible, and voided invoices; equal to total_money on a draft.
         * Refunds and dispute losses don't change it. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. paid_at (Optional): string. When the invoice most
         * recently became paid. Cleared when status leaves paid and set again on a later paid
         * transition. Format: date-time. Example: "2026-08-02T16:00:00Z". paid_money (Required):
         * {@link MoneyValue}. Payments collected toward this invoice, online or as recorded manual
         * payments, minus reversed payments, including payments toward late fees. Never below
         * zero. Disputes, including losses, don't reduce it. Refunds don't reduce it; they are in
         * refunded_money. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. payment_due (Required): {@link InvoicePaymentDue}. The resolved due-date
         * policy. Send this object back when updating the draft; payment_terms captures the term's
         * current revision again. The invoice due-date policy resolved at write time. The object
         * can be sent back when updating a draft. payment_terms_snapshot (Optional): {@link
         * InvoicePaymentTermsSnapshot}. The payment term captured on the draft, with its due date
         * rule and late fee policy. Later changes to the payment term don't affect this invoice.
         * The payment terms saved on an invoice: the term's name, version, due date calculation,
         * and late fee policy. po_number (Required): string or null. The buyer's purchase order
         * number, printed on the invoice and PDF. It cannot change after issue. `null` when unset.
         * public_url (Optional): string. The hosted invoice link where the buyer views and pays
         * the invoice. Present after issue on API reads, except a list filtered by
         * idempotency_key; webhook payloads leave it out. regenerate-public-link replaces it.
         * Anyone with the link can open the invoice, so treat it as a secret. recipient_email
         * (Required): string or null. Where Flint emails the invoice and its reminders. Email
         * delivery requires it at issue. `null` when unset. reference (Required): string or null.
         * Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase
         * order number goes in po_number. It cannot change after issue. `null` when unset.
         * refund_status (Required): string. How much of the collected money has been refunded. It
         * doesn't change status. Value enum: "none", "partially_refunded", "refunded".
         * refunded_money (Required): {@link MoneyValue}. Money refunded to the buyer after
         * collection. Refunds don't reopen the balance; refund_status summarizes them. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code.
         * reminders_paused (Required): boolean. Whether automatic reminders are paused. Set
         * reminders_paused on PATCH /v1/invoices/{invoice_id} to change it. reminders_paused_at
         * (Optional): string. When automatic reminders were paused. Absent while reminders are
         * active. Format: date-time. Example: "2026-08-02T16:00:00Z". remit_to_address (Optional):
         * {@link Address}. Where the buyer sends offline payments, shown on the invoice. Defaults
         * to the invoice settings remit-to address. A postal address. Every address has country.
         * Addresses Flint checked as complete (customer and saved addresses, merchant, location,
         * invoice, order delivery destination, tax identity, fulfillment recipient and pickup
         * addresses) always have line1 and city, and US ones always have state and postal_code.
         * Delivery quote destinations, buyer locations and postal-code tax locations hold only
         * what was provided, such as postal_code and country. schedule_entries (Required): Array
         * of {@link InvoiceScheduleEntry}. The payment schedule, in schedule order. Always [] when
         * the invoice has no schedule and is collected in one balance. schedule_entries[] (Value):
         * {@link InvoiceScheduleEntry}. One payment on an invoice's payment schedule, such as a
         * deposit, installment, or balance, with its due time, amounts, and status.
         * scheduled_issue_at (Required): string or null. When Flint will issue and deliver this
         * draft. `null` when no issue is scheduled. Cleared when the draft is issued or voided, or
         * when you send null. Format: date-time. Example: "2026-08-02T16:00:00Z". service_date
         * (Required): string or null. The calendar date of the billed service, in YYYY-MM-DD
         * format. The invoice and PDF print it as written, without timezone conversion. `null`
         * when unset. Format: date. Example: "2026-08-02". snapshot (Optional): {@link
         * InvoiceSnapshot}. The billing content of the invoice: line items, discounts, charges,
         * tip, tax, and totals. A draft previews the backing order; issue freezes it, and later
         * order changes don't reach an issued invoice. A frozen copy of an issued invoice's
         * content, including line items, charges, discounts, tax identities, and pricing amounts.
         * status (Required): string. Current invoice status. paid and credited close the current
         * balance and can reopen to open or partially_paid after a payment or credit allocation
         * reversal; invoice.reopened reports that change. An uncollectible invoice accepts manual
         * recovery payments and becomes paid when fully recovered; reversals restore the
         * write-off. voided is final. Refunds change refund_status without reopening the balance.
         * A lost dispute leaves paid_money, the balance, and status unchanged; collecting it again
         * requires a new invoice. Value enum: "draft", "open", "partially_paid", "paid", "voided",
         * "uncollectible", "credited". subscription_id (Required): string or null. The
         * subscription the backing order belongs to, copied when the draft is created and never
         * changed. `null` when the order isn't part of a subscription. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". supported_actions (Required): Array of string.
         * Lifecycle actions Flint accepts for this resource now, based on stored state.
         * Independent of the caller's permissions; each action still requires its route's scope.
         * Always [] when no action is available. [] enum: "collect", "issue",
         * "mark_uncollectible", "void". supported_actions[] (Value): string. Value enum:
         * "collect", "issue", "mark_uncollectible", "void". timezone (Optional): string. IANA time
         * zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken from
         * the merchant's timezone when the draft is written, or UTC when unset. Later merchant
         * changes do not alter this invoice's calendar. total_money (Required): {@link
         * MoneyValue}. What the issued invoice bills, equal to
         * snapshot.pricing_amounts.total_money. Fixed at issue; a draft previews the backing order
         * total. Late fees are in late_fee_money. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. uncollectible_at (Optional): string. When the
         * invoice was marked uncollectible. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * updated_at (Required): string. When the invoice last changed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Current invoice version.
         * Send this as expected_version when updating the draft. Format: int64. minimum: 1.
         * viewed_at (Optional): string. When the buyer first opened the invoice through its hosted
         * invoice link. Recorded on a best-effort basis. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". voided_at (Optional): string. When the invoice was voided.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". written_off_money (Required): {@link
         * MoneyValue}. The balance written off when the invoice was marked uncollectible,
         * including unpaid late fees. Monetary amount represented as integer minor units plus an
         * ISO 4217 currency code.
         */
        "object": {
            /**
             * Additional recipients copied on the invoice email and every reminder. [] (Value):
             * string.
             */
            "cc_emails": Array<string>;
            /**
             * When the current closed interval began. Cleared when status returns to open or
             * partially_paid. A direct move between closed statuses preserves this timestamp.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "closed_at"?: string;
            /**
             * How this invoice is collected, resolved when the draft is written. Send this object
             * back when updating its collection policy. The invoice collection policy resolved at
             * write time. The object can be sent back when updating a draft.
             */
            "collection": InvoiceCollection;
            /**
             * Whether collection is blocked. While it is inventory_blocked, collection attempts
             * return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum:
             * "none", "inventory_blocked", "resolved".
             */
            "collection_block_status": "none" | "inventory_blocked" | "resolved" | (string & {});
            /** When the invoice was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Credit note credit allocated to this invoice, minus reversed allocations.
             * Unallocated credit isn't included. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "credit_money": MoneyValue;
            /**
             * The part of the balance due now. Without schedule_entries, it equals
             * outstanding_money. With schedule_entries, it is the outstanding amount of the first
             * entry, in schedule order, whose due date has started and that still has a balance,
             * or 0 when there is none. It is the amount the next collect call or checkout session
             * charges. To total everything overdue, add the outstanding_money of the entries whose
             * status is overdue. Always 0 unless the invoice is open or partially_paid. Monetary
             * amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "currently_due_money": MoneyValue;
            /**
             * Summary of the billed customer. Returned only with expand=customer. Present only
             * when `expand` includes `customer`; `null` when expanded and there is no related
             * customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
             * fields, returned in place of a customer ID when the customer is expanded. anyOf[2]
             * (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * Customer billed by this invoice. Absent when the invoice has no customer. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /** How issue delivered the invoice. Value enum: "email", "caller_managed". */
            "delivery_mode"?: "email" | "caller_managed" | (string & {});
            /**
             * Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent).
             * The outstanding balance becomes overdue only after this date ends. Automatic
             * collection runs at the later of issue and the start of this date. With payment
             * terms, issue computes this date from issued_at. Absent when there is no due date.
             * Format: date. Example: "2026-08-02".
             */
            "due_date"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. Use it as your sync
             * key: it isn't printed on the invoice. `null` when unset. minLength: 1. maxLength:
             * 255. Example: "warehouse-1842".
             */
            "external_reference_id": string | null;
            /**
             * Fine print at the bottom of the invoice and PDF. It cannot change after issue.
             * `null` when unset.
             */
            "footer": string | null;
            /** Flint invoice ID. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
            "invoice_id": string;
            /**
             * Sequential document number assigned when the invoice is issued. Numbering is per
             * merchant, with test and live mode numbered independently.
             */
            "invoice_number"?: string;
            /**
             * Whether the invoice is open or partially_paid and past due with a balance remaining.
             * Without schedule_entries, the due_date has ended in timezone (UTC when absent) and
             * outstanding_money is above zero; with them, at least one entry is overdue. Computed
             * when the invoice is read.
             */
            "is_overdue": boolean;
            /**
             * When the invoice was issued. Absent on a draft. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "issued_at"?: string;
            /**
             * Late fees assessed after issue, minus waivers, including amounts since paid or
             * written off. Itemized in late_fees. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "late_fee_money": MoneyValue;
            /**
             * Late fees assessed on this invoice, each with its paid, waived, written-off, and
             * outstanding amounts. late_fee_money is their assessed total minus waivers. []
             * (Value): {@link InvoiceLateFee}. A charge assessed because an invoice payment is
             * overdue.
             */
            "late_fees": Array<InvoiceLateFee>;
            /**
             * Message to the customer, printed on the invoice and PDF. It cannot change after
             * issue. `null` when unset.
             */
            "memo": string | null;
            /** Merchant that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys
             * starting with flint_ are reserved for Flint and are not returned. Writes follow the
             * limits on MetadataInput and MetadataPatchInput; maps written before those limits may
             * not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Summary of the backing order. Returned only with expand=order. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
             * status, payment and refund status, and pricing and settlement amounts, returned when
             * the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * The order this invoice bills. Every invoice has one; quick pay creates it. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string;
            /**
             * What is still owed: total_money + late_fee_money - paid_money - credit_money -
             * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
             * invoices; equal to total_money on a draft. Refunds and dispute losses don't change
             * it. Monetary amount represented as integer minor units plus an ISO 4217 currency
             * code.
             */
            "outstanding_money": MoneyValue;
            /**
             * When the invoice most recently became paid. Cleared when status leaves paid and set
             * again on a later paid transition. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "paid_at"?: string;
            /**
             * Payments collected toward this invoice, online or as recorded manual payments, minus
             * reversed payments, including payments toward late fees. Never below zero. Disputes,
             * including losses, don't reduce it. Refunds don't reduce it; they are in
             * refunded_money. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "paid_money": MoneyValue;
            /**
             * The resolved due-date policy. Send this object back when updating the draft;
             * payment_terms captures the term's current revision again. The invoice due-date
             * policy resolved at write time. The object can be sent back when updating a draft.
             */
            "payment_due": InvoicePaymentDue;
            /**
             * The payment term captured on the draft, with its due date rule and late fee policy.
             * Later changes to the payment term don't affect this invoice. The payment terms saved
             * on an invoice: the term's name, version, due date calculation, and late fee policy.
             */
            "payment_terms_snapshot"?: InvoicePaymentTermsSnapshot;
            /**
             * The buyer's purchase order number, printed on the invoice and PDF. It cannot change
             * after issue. `null` when unset.
             */
            "po_number": string | null;
            /**
             * The hosted invoice link where the buyer views and pays the invoice. Present after
             * issue on API reads, except a list filtered by idempotency_key; webhook payloads
             * leave it out. regenerate-public-link replaces it. Anyone with the link can open the
             * invoice, so treat it as a secret.
             */
            "public_url"?: string;
            /**
             * Where Flint emails the invoice and its reminders. Email delivery requires it at
             * issue. `null` when unset.
             */
            "recipient_email": string | null;
            /**
             * Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase
             * order number goes in po_number. It cannot change after issue. `null` when unset.
             */
            "reference": string | null;
            /**
             * How much of the collected money has been refunded. It doesn't change status. Value
             * enum: "none", "partially_refunded", "refunded".
             */
            "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
            /**
             * Money refunded to the buyer after collection. Refunds don't reopen the balance;
             * refund_status summarizes them. Monetary amount represented as integer minor units
             * plus an ISO 4217 currency code.
             */
            "refunded_money": MoneyValue;
            /**
             * Whether automatic reminders are paused. Set reminders_paused on PATCH
             * /v1/invoices/{invoice_id} to change it.
             */
            "reminders_paused": boolean;
            /**
             * When automatic reminders were paused. Absent while reminders are active. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "reminders_paused_at"?: string;
            /**
             * Where the buyer sends offline payments, shown on the invoice. Defaults to the
             * invoice settings remit-to address. A postal address. Every address has country.
             * Addresses Flint checked as complete (customer and saved addresses, merchant,
             * location, invoice, order delivery destination, tax identity, fulfillment recipient
             * and pickup addresses) always have line1 and city, and US ones always have state and
             * postal_code. Delivery quote destinations, buyer locations and postal-code tax
             * locations hold only what was provided, such as postal_code and country.
             */
            "remit_to_address"?: Address;
            /**
             * The payment schedule, in schedule order. Always [] when the invoice has no schedule
             * and is collected in one balance. [] (Value): {@link InvoiceScheduleEntry}. One
             * payment on an invoice's payment schedule, such as a deposit, installment, or
             * balance, with its due time, amounts, and status.
             */
            "schedule_entries": Array<InvoiceScheduleEntry>;
            /**
             * When Flint will issue and deliver this draft. `null` when no issue is scheduled.
             * Cleared when the draft is issued or voided, or when you send null. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "scheduled_issue_at": string | null;
            /**
             * The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF
             * print it as written, without timezone conversion. `null` when unset. Format: date.
             * Example: "2026-08-02".
             */
            "service_date": string | null;
            /**
             * The billing content of the invoice: line items, discounts, charges, tip, tax, and
             * totals. A draft previews the backing order; issue freezes it, and later order
             * changes don't reach an issued invoice. A frozen copy of an issued invoice's content,
             * including line items, charges, discounts, tax identities, and pricing amounts.
             */
            "snapshot"?: InvoiceSnapshot;
            /**
             * Current invoice status. paid and credited close the current balance and can reopen
             * to open or partially_paid after a payment or credit allocation reversal;
             * invoice.reopened reports that change. An uncollectible invoice accepts manual
             * recovery payments and becomes paid when fully recovered; reversals restore the
             * write-off. voided is final. Refunds change refund_status without reopening the
             * balance. A lost dispute leaves paid_money, the balance, and status unchanged;
             * collecting it again requires a new invoice. Value enum: "draft", "open",
             * "partially_paid", "paid", "voided", "uncollectible", "credited".
             */
            "status": "draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {});
            /**
             * The subscription the backing order belongs to, copied when the draft is created and
             * never changed. `null` when the order isn't part of a subscription. Example:
             * "sub_01KEZF7C00BVRE8YDBXQB74BBM".
             */
            "subscription_id": string | null;
            /**
             * Lifecycle actions Flint accepts for this resource now, based on stored state.
             * Independent of the caller's permissions; each action still requires its route's
             * scope. Always [] when no action is available. [] enum: "collect", "issue",
             * "mark_uncollectible", "void". [] (Value): string. Value enum: "collect", "issue",
             * "mark_uncollectible", "void".
             */
            "supported_actions": Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>;
            /**
             * IANA time zone snapshot for invoice due dates, reminders, and late fee calendar
             * days. Taken from the merchant's timezone when the draft is written, or UTC when
             * unset. Later merchant changes do not alter this invoice's calendar.
             */
            "timezone"?: string;
            /**
             * What the issued invoice bills, equal to snapshot.pricing_amounts.total_money. Fixed
             * at issue; a draft previews the backing order total. Late fees are in late_fee_money.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "total_money": MoneyValue;
            /**
             * When the invoice was marked uncollectible. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "uncollectible_at"?: string;
            /**
             * When the invoice last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Current invoice version. Send this as expected_version when updating the draft.
             * Format: int64. minimum: 1.
             */
            "version": number;
            /**
             * When the buyer first opened the invoice through its hosted invoice link. Recorded on
             * a best-effort basis. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "viewed_at"?: string;
            /** When the invoice was voided. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "voided_at"?: string;
            /**
             * The balance written off when the invoice was marked uncollectible, including unpaid
             * late fees. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "written_off_money": MoneyValue;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Invoice>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "invoice.partially_refunded". */
    "event_type"?: "invoice.partially_refunded";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `invoice.partially_refunded` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type InvoicePartiallyRefundedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `public_url`. object.cc_emails (Required): Array of string. Additional recipients
     * copied on the invoice email and every reminder. object.cc_emails[] (Value): string.
     * object.closed_at (Optional): string. When the current closed interval began. Cleared when
     * status returns to open or partially_paid. A direct move between closed statuses preserves
     * this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.collection
     * (Required): {@link InvoiceCollection}. How this invoice is collected, resolved when the
     * draft is written. Send this object back when updating its collection policy. The invoice
     * collection policy resolved at write time. The object can be sent back when updating a draft.
     * object.collection_block_status (Required): string. Whether collection is blocked. While it
     * is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED with
     * details[0].reason inventory_wait. Value enum: "none", "inventory_blocked", "resolved".
     * object.created_at (Required): string. When the invoice was created. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.credit_money (Required): {@link MoneyValue}. Credit
     * note credit allocated to this invoice, minus reversed allocations. Unallocated credit isn't
     * included. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.currently_due_money (Required): {@link MoneyValue}. The part of the balance due now.
     * Without schedule_entries, it equals outstanding_money. With schedule_entries, it is the
     * outstanding amount of the first entry, in schedule order, whose due date has started and
     * that still has a balance, or 0 when there is none. It is the amount the next collect call or
     * checkout session charges. To total everything overdue, add the outstanding_money of the
     * entries whose status is overdue. Always 0 unless the invoice is open or partially_paid.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.customer (Optional): {@link ExpandedCustomerSummary} or null. Summary of the billed
     * customer. Returned only with expand=customer. Present only when `expand` includes
     * `customer`; `null` when expanded and there is no related customer. object.customer.anyOf[1]
     * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of
     * a customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Optional): string. Customer billed by this invoice. Absent when the
     * invoice has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.delivery_mode
     * (Optional): string. How issue delivered the invoice. Value enum: "email", "caller_managed".
     * object.due_date (Optional): string. Calendar due date in YYYY-MM-DD format, interpreted in
     * timezone (UTC when absent). The outstanding balance becomes overdue only after this date
     * ends. Automatic collection runs at the later of issue and the start of this date. With
     * payment terms, issue computes this date from issued_at. Absent when there is no due date.
     * Format: date. Example: "2026-08-02". object.external_reference_id (Required): string or
     * null. Caller-owned identifier for this resource in an external system. Use it as your sync
     * key: it isn't printed on the invoice. `null` when unset. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842". object.footer (Required): string or null. Fine print at the
     * bottom of the invoice and PDF. It cannot change after issue. `null` when unset.
     * object.invoice_id (Required): string. Flint invoice ID. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.invoice_number (Optional): string. Sequential
     * document number assigned when the invoice is issued. Numbering is per merchant, with test
     * and live mode numbered independently. object.is_overdue (Required): boolean. Whether the
     * invoice is open or partially_paid and past due with a balance remaining. Without
     * schedule_entries, the due_date has ended in timezone (UTC when absent) and outstanding_money
     * is above zero; with them, at least one entry is overdue. Computed when the invoice is read.
     * object.issued_at (Optional): string. When the invoice was issued. Absent on a draft. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.late_fee_money (Required): {@link
     * MoneyValue}. Late fees assessed after issue, minus waivers, including amounts since paid or
     * written off. Itemized in late_fees. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. object.late_fees (Required): Array of {@link InvoiceLateFee}.
     * Late fees assessed on this invoice, each with its paid, waived, written-off, and outstanding
     * amounts. late_fee_money is their assessed total minus waivers. object.late_fees[] (Value):
     * {@link InvoiceLateFee}. A charge assessed because an invoice payment is overdue. object.memo
     * (Required): string or null. Message to the customer, printed on the invoice and PDF. It
     * cannot change after issue. `null` when unset. object.merchant_id (Required): string.
     * Merchant that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata
     * (Optional): {@link MetadataMap}. Caller-owned metadata. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null. Summary
     * of the backing order. Returned only with expand=order. Present only when `expand` includes
     * `order`; `null` when expanded and there is no related order. object.order.anyOf[1] (Value):
     * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Required): string. The order this
     * invoice bills. Every invoice has one; quick pay creates it. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.outstanding_money (Required): {@link MoneyValue}.
     * What is still owed: total_money + late_fee_money - paid_money - credit_money -
     * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
     * invoices; equal to total_money on a draft. Refunds and dispute losses don't change it.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.paid_at (Optional): string. When the invoice most recently became paid. Cleared when
     * status leaves paid and set again on a later paid transition. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.paid_money (Required): {@link MoneyValue}. Payments collected
     * toward this invoice, online or as recorded manual payments, minus reversed payments,
     * including payments toward late fees. Never below zero. Disputes, including losses, don't
     * reduce it. Refunds don't reduce it; they are in refunded_money. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code. object.payment_due (Required): {@link
     * InvoicePaymentDue}. The resolved due-date policy. Send this object back when updating the
     * draft; payment_terms captures the term's current revision again. The invoice due-date policy
     * resolved at write time. The object can be sent back when updating a draft.
     * object.payment_terms_snapshot (Optional): {@link InvoicePaymentTermsSnapshot}. The payment
     * term captured on the draft, with its due date rule and late fee policy. Later changes to the
     * payment term don't affect this invoice. The payment terms saved on an invoice: the term's
     * name, version, due date calculation, and late fee policy. object.po_number (Required):
     * string or null. The buyer's purchase order number, printed on the invoice and PDF. It cannot
     * change after issue. `null` when unset. object.public_url (Optional): string. The hosted
     * invoice link where the buyer views and pays the invoice. Present after issue on API reads,
     * except a list filtered by idempotency_key; webhook payloads leave it out.
     * regenerate-public-link replaces it. Anyone with the link can open the invoice, so treat it
     * as a secret. object.recipient_email (Required): string or null. Where Flint emails the
     * invoice and its reminders. Email delivery requires it at issue. `null` when unset.
     * object.reference (Required): string or null. Your reference for the invoice, printed on the
     * invoice and PDF. The buyer's purchase order number goes in po_number. It cannot change after
     * issue. `null` when unset. object.refund_status (Required): string. How much of the collected
     * money has been refunded. It doesn't change status. Value enum: "none", "partially_refunded",
     * "refunded". object.refunded_money (Required): {@link MoneyValue}. Money refunded to the
     * buyer after collection. Refunds don't reopen the balance; refund_status summarizes them.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.reminders_paused (Required): boolean. Whether automatic reminders are paused. Set
     * reminders_paused on PATCH /v1/invoices/{invoice_id} to change it. object.reminders_paused_at
     * (Optional): string. When automatic reminders were paused. Absent while reminders are active.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.remit_to_address (Optional):
     * {@link Address}. Where the buyer sends offline payments, shown on the invoice. Defaults to
     * the invoice settings remit-to address. A postal address. Every address has country.
     * Addresses Flint checked as complete (customer and saved addresses, merchant, location,
     * invoice, order delivery destination, tax identity, fulfillment recipient and pickup
     * addresses) always have line1 and city, and US ones always have state and postal_code.
     * Delivery quote destinations, buyer locations and postal-code tax locations hold only what
     * was provided, such as postal_code and country. object.schedule_entries (Required): Array of
     * {@link InvoiceScheduleEntry}. The payment schedule, in schedule order. Always [] when the
     * invoice has no schedule and is collected in one balance. object.schedule_entries[] (Value):
     * {@link InvoiceScheduleEntry}. One payment on an invoice's payment schedule, such as a
     * deposit, installment, or balance, with its due time, amounts, and status.
     * object.scheduled_issue_at (Required): string or null. When Flint will issue and deliver this
     * draft. `null` when no issue is scheduled. Cleared when the draft is issued or voided, or
     * when you send null. Format: date-time. Example: "2026-08-02T16:00:00Z". object.service_date
     * (Required): string or null. The calendar date of the billed service, in YYYY-MM-DD format.
     * The invoice and PDF print it as written, without timezone conversion. `null` when unset.
     * Format: date. Example: "2026-08-02". object.snapshot (Optional): {@link InvoiceSnapshot}.
     * The billing content of the invoice: line items, discounts, charges, tip, tax, and totals. A
     * draft previews the backing order; issue freezes it, and later order changes don't reach an
     * issued invoice. A frozen copy of an issued invoice's content, including line items, charges,
     * discounts, tax identities, and pricing amounts. object.status (Required): string. Current
     * invoice status. paid and credited close the current balance and can reopen to open or
     * partially_paid after a payment or credit allocation reversal; invoice.reopened reports that
     * change. An uncollectible invoice accepts manual recovery payments and becomes paid when
     * fully recovered; reversals restore the write-off. voided is final. Refunds change
     * refund_status without reopening the balance. A lost dispute leaves paid_money, the balance,
     * and status unchanged; collecting it again requires a new invoice. Value enum: "draft",
     * "open", "partially_paid", "paid", "voided", "uncollectible", "credited".
     * object.subscription_id (Required): string or null. The subscription the backing order
     * belongs to, copied when the draft is created and never changed. `null` when the order isn't
     * part of a subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". object.supported_actions
     * (Required): Array of string. Lifecycle actions Flint accepts for this resource now, based on
     * stored state. Independent of the caller's permissions; each action still requires its
     * route's scope. Always [] when no action is available. [] enum: "collect", "issue",
     * "mark_uncollectible", "void". object.supported_actions[] (Value): string. Value enum:
     * "collect", "issue", "mark_uncollectible", "void". object.timezone (Optional): string. IANA
     * time zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken from
     * the merchant's timezone when the draft is written, or UTC when unset. Later merchant changes
     * do not alter this invoice's calendar. object.total_money (Required): {@link MoneyValue}.
     * What the issued invoice bills, equal to snapshot.pricing_amounts.total_money. Fixed at
     * issue; a draft previews the backing order total. Late fees are in late_fee_money. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * object.uncollectible_at (Optional): string. When the invoice was marked uncollectible.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.updated_at (Required): string.
     * When the invoice last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Current invoice version. Send this as expected_version
     * when updating the draft. Format: int64. minimum: 1. object.viewed_at (Optional): string.
     * When the buyer first opened the invoice through its hosted invoice link. Recorded on a
     * best-effort basis. Format: date-time. Example: "2026-08-02T16:00:00Z". object.voided_at
     * (Optional): string. When the invoice was voided. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.written_off_money (Required): {@link MoneyValue}. The balance
     * written off when the invoice was marked uncollectible, including unpaid late fees. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `public_url`.
         * cc_emails (Required): Array of string. Additional recipients copied on the invoice email
         * and every reminder. cc_emails[] (Value): string. closed_at (Optional): string. When the
         * current closed interval began. Cleared when status returns to open or partially_paid. A
         * direct move between closed statuses preserves this timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". collection (Required): {@link InvoiceCollection}. How
         * this invoice is collected, resolved when the draft is written. Send this object back
         * when updating its collection policy. The invoice collection policy resolved at write
         * time. The object can be sent back when updating a draft. collection_block_status
         * (Required): string. Whether collection is blocked. While it is inventory_blocked,
         * collection attempts return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait.
         * Value enum: "none", "inventory_blocked", "resolved". created_at (Required): string. When
         * the invoice was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * credit_money (Required): {@link MoneyValue}. Credit note credit allocated to this
         * invoice, minus reversed allocations. Unallocated credit isn't included. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code. currently_due_money
         * (Required): {@link MoneyValue}. The part of the balance due now. Without
         * schedule_entries, it equals outstanding_money. With schedule_entries, it is the
         * outstanding amount of the first entry, in schedule order, whose due date has started and
         * that still has a balance, or 0 when there is none. It is the amount the next collect
         * call or checkout session charges. To total everything overdue, add the outstanding_money
         * of the entries whose status is overdue. Always 0 unless the invoice is open or
         * partially_paid. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. customer (Optional): {@link ExpandedCustomerSummary} or null. Summary of
         * the billed customer. Returned only with expand=customer. Present only when `expand`
         * includes `customer`; `null` when expanded and there is no related customer.
         * customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary fields,
         * returned in place of a customer ID when the customer is expanded. customer.anyOf[2]
         * (Value): null. customer_id (Optional): string. Customer billed by this invoice. Absent
         * when the invoice has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
         * delivery_mode (Optional): string. How issue delivered the invoice. Value enum: "email",
         * "caller_managed". due_date (Optional): string. Calendar due date in YYYY-MM-DD format,
         * interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only
         * after this date ends. Automatic collection runs at the later of issue and the start of
         * this date. With payment terms, issue computes this date from issued_at. Absent when
         * there is no due date. Format: date. Example: "2026-08-02". external_reference_id
         * (Required): string or null. Caller-owned identifier for this resource in an external
         * system. Use it as your sync key: it isn't printed on the invoice. `null` when unset.
         * minLength: 1. maxLength: 255. Example: "warehouse-1842". footer (Required): string or
         * null. Fine print at the bottom of the invoice and PDF. It cannot change after issue.
         * `null` when unset. invoice_id (Required): string. Flint invoice ID. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_number (Optional): string. Sequential document
         * number assigned when the invoice is issued. Numbering is per merchant, with test and
         * live mode numbered independently. is_overdue (Required): boolean. Whether the invoice is
         * open or partially_paid and past due with a balance remaining. Without schedule_entries,
         * the due_date has ended in timezone (UTC when absent) and outstanding_money is above
         * zero; with them, at least one entry is overdue. Computed when the invoice is read.
         * issued_at (Optional): string. When the invoice was issued. Absent on a draft. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". late_fee_money (Required): {@link
         * MoneyValue}. Late fees assessed after issue, minus waivers, including amounts since paid
         * or written off. Itemized in late_fees. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. late_fees (Required): Array of {@link
         * InvoiceLateFee}. Late fees assessed on this invoice, each with its paid, waived,
         * written-off, and outstanding amounts. late_fee_money is their assessed total minus
         * waivers. late_fees[] (Value): {@link InvoiceLateFee}. A charge assessed because an
         * invoice payment is overdue. memo (Required): string or null. Message to the customer,
         * printed on the invoice and PDF. It cannot change after issue. `null` when unset.
         * merchant_id (Required): string. Merchant that owns this invoice. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Caller-owned
         * metadata. Caller-owned key-value data stored on a resource. Keys starting with flint_
         * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput
         * and MetadataPatchInput; maps written before those limits may not satisfy them. order
         * (Optional): {@link ExpandedOrderSummary} or null. Summary of the backing order. Returned
         * only with expand=order. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[2] (Value): null. order_id (Required): string. The order this invoice bills.
         * Every invoice has one; quick pay creates it. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
         * outstanding_money (Required): {@link MoneyValue}. What is still owed: total_money +
         * late_fee_money - paid_money - credit_money - written_off_money, never below zero. 0 on
         * paid, credited, uncollectible, and voided invoices; equal to total_money on a draft.
         * Refunds and dispute losses don't change it. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. paid_at (Optional): string. When the invoice most
         * recently became paid. Cleared when status leaves paid and set again on a later paid
         * transition. Format: date-time. Example: "2026-08-02T16:00:00Z". paid_money (Required):
         * {@link MoneyValue}. Payments collected toward this invoice, online or as recorded manual
         * payments, minus reversed payments, including payments toward late fees. Never below
         * zero. Disputes, including losses, don't reduce it. Refunds don't reduce it; they are in
         * refunded_money. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. payment_due (Required): {@link InvoicePaymentDue}. The resolved due-date
         * policy. Send this object back when updating the draft; payment_terms captures the term's
         * current revision again. The invoice due-date policy resolved at write time. The object
         * can be sent back when updating a draft. payment_terms_snapshot (Optional): {@link
         * InvoicePaymentTermsSnapshot}. The payment term captured on the draft, with its due date
         * rule and late fee policy. Later changes to the payment term don't affect this invoice.
         * The payment terms saved on an invoice: the term's name, version, due date calculation,
         * and late fee policy. po_number (Required): string or null. The buyer's purchase order
         * number, printed on the invoice and PDF. It cannot change after issue. `null` when unset.
         * public_url (Optional): string. The hosted invoice link where the buyer views and pays
         * the invoice. Present after issue on API reads, except a list filtered by
         * idempotency_key; webhook payloads leave it out. regenerate-public-link replaces it.
         * Anyone with the link can open the invoice, so treat it as a secret. recipient_email
         * (Required): string or null. Where Flint emails the invoice and its reminders. Email
         * delivery requires it at issue. `null` when unset. reference (Required): string or null.
         * Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase
         * order number goes in po_number. It cannot change after issue. `null` when unset.
         * refund_status (Required): string. How much of the collected money has been refunded. It
         * doesn't change status. Value enum: "none", "partially_refunded", "refunded".
         * refunded_money (Required): {@link MoneyValue}. Money refunded to the buyer after
         * collection. Refunds don't reopen the balance; refund_status summarizes them. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code.
         * reminders_paused (Required): boolean. Whether automatic reminders are paused. Set
         * reminders_paused on PATCH /v1/invoices/{invoice_id} to change it. reminders_paused_at
         * (Optional): string. When automatic reminders were paused. Absent while reminders are
         * active. Format: date-time. Example: "2026-08-02T16:00:00Z". remit_to_address (Optional):
         * {@link Address}. Where the buyer sends offline payments, shown on the invoice. Defaults
         * to the invoice settings remit-to address. A postal address. Every address has country.
         * Addresses Flint checked as complete (customer and saved addresses, merchant, location,
         * invoice, order delivery destination, tax identity, fulfillment recipient and pickup
         * addresses) always have line1 and city, and US ones always have state and postal_code.
         * Delivery quote destinations, buyer locations and postal-code tax locations hold only
         * what was provided, such as postal_code and country. schedule_entries (Required): Array
         * of {@link InvoiceScheduleEntry}. The payment schedule, in schedule order. Always [] when
         * the invoice has no schedule and is collected in one balance. schedule_entries[] (Value):
         * {@link InvoiceScheduleEntry}. One payment on an invoice's payment schedule, such as a
         * deposit, installment, or balance, with its due time, amounts, and status.
         * scheduled_issue_at (Required): string or null. When Flint will issue and deliver this
         * draft. `null` when no issue is scheduled. Cleared when the draft is issued or voided, or
         * when you send null. Format: date-time. Example: "2026-08-02T16:00:00Z". service_date
         * (Required): string or null. The calendar date of the billed service, in YYYY-MM-DD
         * format. The invoice and PDF print it as written, without timezone conversion. `null`
         * when unset. Format: date. Example: "2026-08-02". snapshot (Optional): {@link
         * InvoiceSnapshot}. The billing content of the invoice: line items, discounts, charges,
         * tip, tax, and totals. A draft previews the backing order; issue freezes it, and later
         * order changes don't reach an issued invoice. A frozen copy of an issued invoice's
         * content, including line items, charges, discounts, tax identities, and pricing amounts.
         * status (Required): string. Current invoice status. paid and credited close the current
         * balance and can reopen to open or partially_paid after a payment or credit allocation
         * reversal; invoice.reopened reports that change. An uncollectible invoice accepts manual
         * recovery payments and becomes paid when fully recovered; reversals restore the
         * write-off. voided is final. Refunds change refund_status without reopening the balance.
         * A lost dispute leaves paid_money, the balance, and status unchanged; collecting it again
         * requires a new invoice. Value enum: "draft", "open", "partially_paid", "paid", "voided",
         * "uncollectible", "credited". subscription_id (Required): string or null. The
         * subscription the backing order belongs to, copied when the draft is created and never
         * changed. `null` when the order isn't part of a subscription. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". supported_actions (Required): Array of string.
         * Lifecycle actions Flint accepts for this resource now, based on stored state.
         * Independent of the caller's permissions; each action still requires its route's scope.
         * Always [] when no action is available. [] enum: "collect", "issue",
         * "mark_uncollectible", "void". supported_actions[] (Value): string. Value enum:
         * "collect", "issue", "mark_uncollectible", "void". timezone (Optional): string. IANA time
         * zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken from
         * the merchant's timezone when the draft is written, or UTC when unset. Later merchant
         * changes do not alter this invoice's calendar. total_money (Required): {@link
         * MoneyValue}. What the issued invoice bills, equal to
         * snapshot.pricing_amounts.total_money. Fixed at issue; a draft previews the backing order
         * total. Late fees are in late_fee_money. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. uncollectible_at (Optional): string. When the
         * invoice was marked uncollectible. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * updated_at (Required): string. When the invoice last changed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Current invoice version.
         * Send this as expected_version when updating the draft. Format: int64. minimum: 1.
         * viewed_at (Optional): string. When the buyer first opened the invoice through its hosted
         * invoice link. Recorded on a best-effort basis. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". voided_at (Optional): string. When the invoice was voided.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". written_off_money (Required): {@link
         * MoneyValue}. The balance written off when the invoice was marked uncollectible,
         * including unpaid late fees. Monetary amount represented as integer minor units plus an
         * ISO 4217 currency code.
         */
        "object": {
            /**
             * Additional recipients copied on the invoice email and every reminder. [] (Value):
             * string.
             */
            "cc_emails": Array<string>;
            /**
             * When the current closed interval began. Cleared when status returns to open or
             * partially_paid. A direct move between closed statuses preserves this timestamp.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "closed_at"?: string;
            /**
             * How this invoice is collected, resolved when the draft is written. Send this object
             * back when updating its collection policy. The invoice collection policy resolved at
             * write time. The object can be sent back when updating a draft.
             */
            "collection": InvoiceCollection;
            /**
             * Whether collection is blocked. While it is inventory_blocked, collection attempts
             * return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum:
             * "none", "inventory_blocked", "resolved".
             */
            "collection_block_status": "none" | "inventory_blocked" | "resolved" | (string & {});
            /** When the invoice was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Credit note credit allocated to this invoice, minus reversed allocations.
             * Unallocated credit isn't included. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "credit_money": MoneyValue;
            /**
             * The part of the balance due now. Without schedule_entries, it equals
             * outstanding_money. With schedule_entries, it is the outstanding amount of the first
             * entry, in schedule order, whose due date has started and that still has a balance,
             * or 0 when there is none. It is the amount the next collect call or checkout session
             * charges. To total everything overdue, add the outstanding_money of the entries whose
             * status is overdue. Always 0 unless the invoice is open or partially_paid. Monetary
             * amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "currently_due_money": MoneyValue;
            /**
             * Summary of the billed customer. Returned only with expand=customer. Present only
             * when `expand` includes `customer`; `null` when expanded and there is no related
             * customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
             * fields, returned in place of a customer ID when the customer is expanded. anyOf[2]
             * (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * Customer billed by this invoice. Absent when the invoice has no customer. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /** How issue delivered the invoice. Value enum: "email", "caller_managed". */
            "delivery_mode"?: "email" | "caller_managed" | (string & {});
            /**
             * Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent).
             * The outstanding balance becomes overdue only after this date ends. Automatic
             * collection runs at the later of issue and the start of this date. With payment
             * terms, issue computes this date from issued_at. Absent when there is no due date.
             * Format: date. Example: "2026-08-02".
             */
            "due_date"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. Use it as your sync
             * key: it isn't printed on the invoice. `null` when unset. minLength: 1. maxLength:
             * 255. Example: "warehouse-1842".
             */
            "external_reference_id": string | null;
            /**
             * Fine print at the bottom of the invoice and PDF. It cannot change after issue.
             * `null` when unset.
             */
            "footer": string | null;
            /** Flint invoice ID. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
            "invoice_id": string;
            /**
             * Sequential document number assigned when the invoice is issued. Numbering is per
             * merchant, with test and live mode numbered independently.
             */
            "invoice_number"?: string;
            /**
             * Whether the invoice is open or partially_paid and past due with a balance remaining.
             * Without schedule_entries, the due_date has ended in timezone (UTC when absent) and
             * outstanding_money is above zero; with them, at least one entry is overdue. Computed
             * when the invoice is read.
             */
            "is_overdue": boolean;
            /**
             * When the invoice was issued. Absent on a draft. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "issued_at"?: string;
            /**
             * Late fees assessed after issue, minus waivers, including amounts since paid or
             * written off. Itemized in late_fees. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "late_fee_money": MoneyValue;
            /**
             * Late fees assessed on this invoice, each with its paid, waived, written-off, and
             * outstanding amounts. late_fee_money is their assessed total minus waivers. []
             * (Value): {@link InvoiceLateFee}. A charge assessed because an invoice payment is
             * overdue.
             */
            "late_fees": Array<InvoiceLateFee>;
            /**
             * Message to the customer, printed on the invoice and PDF. It cannot change after
             * issue. `null` when unset.
             */
            "memo": string | null;
            /** Merchant that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys
             * starting with flint_ are reserved for Flint and are not returned. Writes follow the
             * limits on MetadataInput and MetadataPatchInput; maps written before those limits may
             * not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Summary of the backing order. Returned only with expand=order. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
             * status, payment and refund status, and pricing and settlement amounts, returned when
             * the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * The order this invoice bills. Every invoice has one; quick pay creates it. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string;
            /**
             * What is still owed: total_money + late_fee_money - paid_money - credit_money -
             * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
             * invoices; equal to total_money on a draft. Refunds and dispute losses don't change
             * it. Monetary amount represented as integer minor units plus an ISO 4217 currency
             * code.
             */
            "outstanding_money": MoneyValue;
            /**
             * When the invoice most recently became paid. Cleared when status leaves paid and set
             * again on a later paid transition. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "paid_at"?: string;
            /**
             * Payments collected toward this invoice, online or as recorded manual payments, minus
             * reversed payments, including payments toward late fees. Never below zero. Disputes,
             * including losses, don't reduce it. Refunds don't reduce it; they are in
             * refunded_money. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "paid_money": MoneyValue;
            /**
             * The resolved due-date policy. Send this object back when updating the draft;
             * payment_terms captures the term's current revision again. The invoice due-date
             * policy resolved at write time. The object can be sent back when updating a draft.
             */
            "payment_due": InvoicePaymentDue;
            /**
             * The payment term captured on the draft, with its due date rule and late fee policy.
             * Later changes to the payment term don't affect this invoice. The payment terms saved
             * on an invoice: the term's name, version, due date calculation, and late fee policy.
             */
            "payment_terms_snapshot"?: InvoicePaymentTermsSnapshot;
            /**
             * The buyer's purchase order number, printed on the invoice and PDF. It cannot change
             * after issue. `null` when unset.
             */
            "po_number": string | null;
            /**
             * The hosted invoice link where the buyer views and pays the invoice. Present after
             * issue on API reads, except a list filtered by idempotency_key; webhook payloads
             * leave it out. regenerate-public-link replaces it. Anyone with the link can open the
             * invoice, so treat it as a secret.
             */
            "public_url"?: string;
            /**
             * Where Flint emails the invoice and its reminders. Email delivery requires it at
             * issue. `null` when unset.
             */
            "recipient_email": string | null;
            /**
             * Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase
             * order number goes in po_number. It cannot change after issue. `null` when unset.
             */
            "reference": string | null;
            /**
             * How much of the collected money has been refunded. It doesn't change status. Value
             * enum: "none", "partially_refunded", "refunded".
             */
            "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
            /**
             * Money refunded to the buyer after collection. Refunds don't reopen the balance;
             * refund_status summarizes them. Monetary amount represented as integer minor units
             * plus an ISO 4217 currency code.
             */
            "refunded_money": MoneyValue;
            /**
             * Whether automatic reminders are paused. Set reminders_paused on PATCH
             * /v1/invoices/{invoice_id} to change it.
             */
            "reminders_paused": boolean;
            /**
             * When automatic reminders were paused. Absent while reminders are active. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "reminders_paused_at"?: string;
            /**
             * Where the buyer sends offline payments, shown on the invoice. Defaults to the
             * invoice settings remit-to address. A postal address. Every address has country.
             * Addresses Flint checked as complete (customer and saved addresses, merchant,
             * location, invoice, order delivery destination, tax identity, fulfillment recipient
             * and pickup addresses) always have line1 and city, and US ones always have state and
             * postal_code. Delivery quote destinations, buyer locations and postal-code tax
             * locations hold only what was provided, such as postal_code and country.
             */
            "remit_to_address"?: Address;
            /**
             * The payment schedule, in schedule order. Always [] when the invoice has no schedule
             * and is collected in one balance. [] (Value): {@link InvoiceScheduleEntry}. One
             * payment on an invoice's payment schedule, such as a deposit, installment, or
             * balance, with its due time, amounts, and status.
             */
            "schedule_entries": Array<InvoiceScheduleEntry>;
            /**
             * When Flint will issue and deliver this draft. `null` when no issue is scheduled.
             * Cleared when the draft is issued or voided, or when you send null. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "scheduled_issue_at": string | null;
            /**
             * The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF
             * print it as written, without timezone conversion. `null` when unset. Format: date.
             * Example: "2026-08-02".
             */
            "service_date": string | null;
            /**
             * The billing content of the invoice: line items, discounts, charges, tip, tax, and
             * totals. A draft previews the backing order; issue freezes it, and later order
             * changes don't reach an issued invoice. A frozen copy of an issued invoice's content,
             * including line items, charges, discounts, tax identities, and pricing amounts.
             */
            "snapshot"?: InvoiceSnapshot;
            /**
             * Current invoice status. paid and credited close the current balance and can reopen
             * to open or partially_paid after a payment or credit allocation reversal;
             * invoice.reopened reports that change. An uncollectible invoice accepts manual
             * recovery payments and becomes paid when fully recovered; reversals restore the
             * write-off. voided is final. Refunds change refund_status without reopening the
             * balance. A lost dispute leaves paid_money, the balance, and status unchanged;
             * collecting it again requires a new invoice. Value enum: "draft", "open",
             * "partially_paid", "paid", "voided", "uncollectible", "credited".
             */
            "status": "draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {});
            /**
             * The subscription the backing order belongs to, copied when the draft is created and
             * never changed. `null` when the order isn't part of a subscription. Example:
             * "sub_01KEZF7C00BVRE8YDBXQB74BBM".
             */
            "subscription_id": string | null;
            /**
             * Lifecycle actions Flint accepts for this resource now, based on stored state.
             * Independent of the caller's permissions; each action still requires its route's
             * scope. Always [] when no action is available. [] enum: "collect", "issue",
             * "mark_uncollectible", "void". [] (Value): string. Value enum: "collect", "issue",
             * "mark_uncollectible", "void".
             */
            "supported_actions": Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>;
            /**
             * IANA time zone snapshot for invoice due dates, reminders, and late fee calendar
             * days. Taken from the merchant's timezone when the draft is written, or UTC when
             * unset. Later merchant changes do not alter this invoice's calendar.
             */
            "timezone"?: string;
            /**
             * What the issued invoice bills, equal to snapshot.pricing_amounts.total_money. Fixed
             * at issue; a draft previews the backing order total. Late fees are in late_fee_money.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "total_money": MoneyValue;
            /**
             * When the invoice was marked uncollectible. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "uncollectible_at"?: string;
            /**
             * When the invoice last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Current invoice version. Send this as expected_version when updating the draft.
             * Format: int64. minimum: 1.
             */
            "version": number;
            /**
             * When the buyer first opened the invoice through its hosted invoice link. Recorded on
             * a best-effort basis. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "viewed_at"?: string;
            /** When the invoice was voided. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "voided_at"?: string;
            /**
             * The balance written off when the invoice was marked uncollectible, including unpaid
             * late fees. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "written_off_money": MoneyValue;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Invoice>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "invoice.partially_refunded". */
    "event_type"?: "invoice.partially_refunded";
});
/** An attempt to collect payment for an invoice. */
export type InvoicePaymentAttempt = {
    /**
     * When the attempt was canceled. An attempt canceled with its checkout session before payment
     * started may not have it. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "canceled_at"?: string;
    /**
     * When cancellation of this attempt was last requested. It stays set when the payment
     * processor refuses the cancellation or the payment settles first, so read status and
     * canceled_at for the outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "cancellation_requested_at"?: string;
    /**
     * The hosted or headless checkout session the buyer pays through. Absent for automatic
     * charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     */
    "checkout_session_id"?: string;
    /**
     * The amount this attempt collects: the outstanding balance, or the targeted schedule entry's
     * outstanding amount. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "expected_amount_money": MoneyValue;
    /**
     * When a checkout attempt expires, matching its checkout session. Absent for automatic
     * charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at"?: string;
    /** The invoice this attempt collects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
    "invoice_id": string;
    /** Flint invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX". */
    "invoice_payment_attempt_id": string;
    /**
     * The schedule entry this attempt collects. Absent when the attempt collects the invoice
     * balance. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
     */
    "invoice_schedule_entry_id"?: string;
    /**
     * Why the payment failed. Present only when status is failed. A summary of why a payment
     * attempt failed, with a normalized error code, a message, the failure time, and remediation.
     */
    "last_payment_error"?: PaymentErrorSummary;
    /**
     * The payment intent behind this attempt. Absent until payment starts, such as a hosted
     * attempt the buyer hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: string;
    /**
     * How the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit.
     * Value enum: "card", "ach_debit".
     */
    "rail": "card" | "ach_debit" | (string & {});
    /**
     * When this attempt first settled successfully. Duplicate payment notifications preserve this
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "settled_at"?: string;
    /** When the attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "started_at"?: string;
    /**
     * Current payment attempt status. succeeded means this attempt completed successfully, even if
     * the invoice still has an outstanding balance. invoice_payment_attempt.succeeded reports that
     * completion. Value enum: "open", "succeeded", "failed", "canceled", "expired", "processing".
     */
    "status": "open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {});
    /**
     * When this attempt last changed. Duplicate payment notifications preserve this timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "updated_at": string;
};
export type InvoicePaymentAttemptCanceledEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "canceled_at"?: string;
            "cancellation_requested_at"?: string;
            "checkout_session_id"?: string;
            "expected_amount_money": MoneyValue;
            "expires_at"?: string;
            "invoice_id": string;
            "invoice_payment_attempt_id": string;
            "invoice_schedule_entry_id"?: string;
            "last_payment_error"?: PaymentErrorSummary;
            "payment_intent_id"?: string;
            "rail": "card" | "ach_debit" | (string & {});
            "settled_at"?: string;
            "started_at"?: string;
            "status": "open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {});
            "updated_at": string;
        };
        "previous_attributes"?: Partial<InvoicePaymentAttempt>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "invoice_payment_attempt.canceled";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "canceled_at"?: string;
            "cancellation_requested_at"?: string;
            "checkout_session_id"?: string;
            "expected_amount_money": MoneyValue;
            "expires_at"?: string;
            "invoice_id": string;
            "invoice_payment_attempt_id": string;
            "invoice_schedule_entry_id"?: string;
            "last_payment_error"?: PaymentErrorSummary;
            "payment_intent_id"?: string;
            "rail": "card" | "ach_debit" | (string & {});
            "settled_at"?: string;
            "started_at"?: string;
            "status": "open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {});
            "updated_at": string;
        };
        "previous_attributes"?: Partial<InvoicePaymentAttempt>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "invoice_payment_attempt.canceled";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "invoice_payment_attempt.canceled";
});
/**
 * The `invoice_payment_attempt.canceled` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type InvoicePaymentAttemptCanceledInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.canceled_at (Optional): string. When the attempt was canceled. An
     * attempt canceled with its checkout session before payment started may not have it. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.cancellation_requested_at (Optional):
     * string. When cancellation of this attempt was last requested. It stays set when the payment
     * processor refuses the cancellation or the payment settles first, so read status and
     * canceled_at for the outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.checkout_session_id (Optional): string. The hosted or headless checkout session the
     * buyer pays through. Absent for automatic charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     * object.expected_amount_money (Required): {@link MoneyValue}. The amount this attempt
     * collects: the outstanding balance, or the targeted schedule entry's outstanding amount.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.expires_at (Optional): string. When a checkout attempt expires, matching its checkout
     * session. Absent for automatic charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.invoice_id (Required): string. The invoice this attempt collects. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.invoice_payment_attempt_id (Required): string.
     * Flint invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX".
     * object.invoice_schedule_entry_id (Optional): string. The schedule entry this attempt
     * collects. Absent when the attempt collects the invoice balance. Example:
     * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". object.last_payment_error (Optional): {@link
     * PaymentErrorSummary}. Why the payment failed. Present only when status is failed. A summary
     * of why a payment attempt failed, with a normalized error code, a message, the failure time,
     * and remediation. object.payment_intent_id (Optional): string. The payment intent behind this
     * attempt. Absent until payment starts, such as a hosted attempt the buyer hasn't paid yet.
     * Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.rail (Required): string. How the attempt
     * collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Value enum:
     * "card", "ach_debit". object.settled_at (Optional): string. When this attempt first settled
     * successfully. Duplicate payment notifications preserve this timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.started_at (Optional): string. When the attempt was
     * created. Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required):
     * string. Current payment attempt status. succeeded means this attempt completed successfully,
     * even if the invoice still has an outstanding balance. invoice_payment_attempt.succeeded
     * reports that completion. Value enum: "open", "succeeded", "failed", "canceled", "expired",
     * "processing". object.updated_at (Required): string. When this attempt last changed.
     * Duplicate payment notifications preserve this timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * canceled_at (Optional): string. When the attempt was canceled. An attempt canceled with
         * its checkout session before payment started may not have it. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". cancellation_requested_at (Optional): string. When cancellation
         * of this attempt was last requested. It stays set when the payment processor refuses the
         * cancellation or the payment settles first, so read status and canceled_at for the
         * outcome. Format: date-time. Example: "2026-08-02T16:00:00Z". checkout_session_id
         * (Optional): string. The hosted or headless checkout session the buyer pays through.
         * Absent for automatic charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
         * expected_amount_money (Required): {@link MoneyValue}. The amount this attempt collects:
         * the outstanding balance, or the targeted schedule entry's outstanding amount. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code. expires_at
         * (Optional): string. When a checkout attempt expires, matching its checkout session.
         * Absent for automatic charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * invoice_id (Required): string. The invoice this attempt collects. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_payment_attempt_id (Required): string. Flint
         * invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX".
         * invoice_schedule_entry_id (Optional): string. The schedule entry this attempt collects.
         * Absent when the attempt collects the invoice balance. Example:
         * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". last_payment_error (Optional): {@link
         * PaymentErrorSummary}. Why the payment failed. Present only when status is failed. A
         * summary of why a payment attempt failed, with a normalized error code, a message, the
         * failure time, and remediation. payment_intent_id (Optional): string. The payment intent
         * behind this attempt. Absent until payment starts, such as a hosted attempt the buyer
         * hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". rail (Required): string. How
         * the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit.
         * Value enum: "card", "ach_debit". settled_at (Optional): string. When this attempt first
         * settled successfully. Duplicate payment notifications preserve this timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". started_at (Optional): string. When the
         * attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z". status
         * (Required): string. Current payment attempt status. succeeded means this attempt
         * completed successfully, even if the invoice still has an outstanding balance.
         * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
         * "succeeded", "failed", "canceled", "expired", "processing". updated_at (Required):
         * string. When this attempt last changed. Duplicate payment notifications preserve this
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * When the attempt was canceled. An attempt canceled with its checkout session before
             * payment started may not have it. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "canceled_at"?: string;
            /**
             * When cancellation of this attempt was last requested. It stays set when the payment
             * processor refuses the cancellation or the payment settles first, so read status and
             * canceled_at for the outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "cancellation_requested_at"?: string;
            /**
             * The hosted or headless checkout session the buyer pays through. Absent for automatic
             * charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "checkout_session_id"?: string;
            /**
             * The amount this attempt collects: the outstanding balance, or the targeted schedule
             * entry's outstanding amount. Monetary amount represented as integer minor units plus
             * an ISO 4217 currency code.
             */
            "expected_amount_money": MoneyValue;
            /**
             * When a checkout attempt expires, matching its checkout session. Absent for automatic
             * charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "expires_at"?: string;
            /** The invoice this attempt collects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
            "invoice_id": string;
            /** Flint invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX". */
            "invoice_payment_attempt_id": string;
            /**
             * The schedule entry this attempt collects. Absent when the attempt collects the
             * invoice balance. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
             */
            "invoice_schedule_entry_id"?: string;
            /**
             * Why the payment failed. Present only when status is failed. A summary of why a
             * payment attempt failed, with a normalized error code, a message, the failure time,
             * and remediation.
             */
            "last_payment_error"?: PaymentErrorSummary;
            /**
             * The payment intent behind this attempt. Absent until payment starts, such as a
             * hosted attempt the buyer hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_id"?: string;
            /**
             * How the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH
             * debit. Value enum: "card", "ach_debit".
             */
            "rail": "card" | "ach_debit" | (string & {});
            /**
             * When this attempt first settled successfully. Duplicate payment notifications
             * preserve this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "settled_at"?: string;
            /** When the attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "started_at"?: string;
            /**
             * Current payment attempt status. succeeded means this attempt completed successfully,
             * even if the invoice still has an outstanding balance.
             * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
             * "succeeded", "failed", "canceled", "expired", "processing".
             */
            "status": "open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {});
            /**
             * When this attempt last changed. Duplicate payment notifications preserve this
             * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<InvoicePaymentAttempt>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "invoice_payment_attempt.canceled". */
    "event_type"?: "invoice_payment_attempt.canceled";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `invoice_payment_attempt.canceled` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type InvoicePaymentAttemptCanceledMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.canceled_at (Optional): string. When the attempt was canceled. An
     * attempt canceled with its checkout session before payment started may not have it. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.cancellation_requested_at (Optional):
     * string. When cancellation of this attempt was last requested. It stays set when the payment
     * processor refuses the cancellation or the payment settles first, so read status and
     * canceled_at for the outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.checkout_session_id (Optional): string. The hosted or headless checkout session the
     * buyer pays through. Absent for automatic charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     * object.expected_amount_money (Required): {@link MoneyValue}. The amount this attempt
     * collects: the outstanding balance, or the targeted schedule entry's outstanding amount.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.expires_at (Optional): string. When a checkout attempt expires, matching its checkout
     * session. Absent for automatic charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.invoice_id (Required): string. The invoice this attempt collects. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.invoice_payment_attempt_id (Required): string.
     * Flint invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX".
     * object.invoice_schedule_entry_id (Optional): string. The schedule entry this attempt
     * collects. Absent when the attempt collects the invoice balance. Example:
     * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". object.last_payment_error (Optional): {@link
     * PaymentErrorSummary}. Why the payment failed. Present only when status is failed. A summary
     * of why a payment attempt failed, with a normalized error code, a message, the failure time,
     * and remediation. object.payment_intent_id (Optional): string. The payment intent behind this
     * attempt. Absent until payment starts, such as a hosted attempt the buyer hasn't paid yet.
     * Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.rail (Required): string. How the attempt
     * collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Value enum:
     * "card", "ach_debit". object.settled_at (Optional): string. When this attempt first settled
     * successfully. Duplicate payment notifications preserve this timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.started_at (Optional): string. When the attempt was
     * created. Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required):
     * string. Current payment attempt status. succeeded means this attempt completed successfully,
     * even if the invoice still has an outstanding balance. invoice_payment_attempt.succeeded
     * reports that completion. Value enum: "open", "succeeded", "failed", "canceled", "expired",
     * "processing". object.updated_at (Required): string. When this attempt last changed.
     * Duplicate payment notifications preserve this timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * canceled_at (Optional): string. When the attempt was canceled. An attempt canceled with
         * its checkout session before payment started may not have it. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". cancellation_requested_at (Optional): string. When cancellation
         * of this attempt was last requested. It stays set when the payment processor refuses the
         * cancellation or the payment settles first, so read status and canceled_at for the
         * outcome. Format: date-time. Example: "2026-08-02T16:00:00Z". checkout_session_id
         * (Optional): string. The hosted or headless checkout session the buyer pays through.
         * Absent for automatic charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
         * expected_amount_money (Required): {@link MoneyValue}. The amount this attempt collects:
         * the outstanding balance, or the targeted schedule entry's outstanding amount. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code. expires_at
         * (Optional): string. When a checkout attempt expires, matching its checkout session.
         * Absent for automatic charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * invoice_id (Required): string. The invoice this attempt collects. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_payment_attempt_id (Required): string. Flint
         * invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX".
         * invoice_schedule_entry_id (Optional): string. The schedule entry this attempt collects.
         * Absent when the attempt collects the invoice balance. Example:
         * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". last_payment_error (Optional): {@link
         * PaymentErrorSummary}. Why the payment failed. Present only when status is failed. A
         * summary of why a payment attempt failed, with a normalized error code, a message, the
         * failure time, and remediation. payment_intent_id (Optional): string. The payment intent
         * behind this attempt. Absent until payment starts, such as a hosted attempt the buyer
         * hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". rail (Required): string. How
         * the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit.
         * Value enum: "card", "ach_debit". settled_at (Optional): string. When this attempt first
         * settled successfully. Duplicate payment notifications preserve this timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". started_at (Optional): string. When the
         * attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z". status
         * (Required): string. Current payment attempt status. succeeded means this attempt
         * completed successfully, even if the invoice still has an outstanding balance.
         * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
         * "succeeded", "failed", "canceled", "expired", "processing". updated_at (Required):
         * string. When this attempt last changed. Duplicate payment notifications preserve this
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * When the attempt was canceled. An attempt canceled with its checkout session before
             * payment started may not have it. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "canceled_at"?: string;
            /**
             * When cancellation of this attempt was last requested. It stays set when the payment
             * processor refuses the cancellation or the payment settles first, so read status and
             * canceled_at for the outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "cancellation_requested_at"?: string;
            /**
             * The hosted or headless checkout session the buyer pays through. Absent for automatic
             * charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "checkout_session_id"?: string;
            /**
             * The amount this attempt collects: the outstanding balance, or the targeted schedule
             * entry's outstanding amount. Monetary amount represented as integer minor units plus
             * an ISO 4217 currency code.
             */
            "expected_amount_money": MoneyValue;
            /**
             * When a checkout attempt expires, matching its checkout session. Absent for automatic
             * charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "expires_at"?: string;
            /** The invoice this attempt collects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
            "invoice_id": string;
            /** Flint invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX". */
            "invoice_payment_attempt_id": string;
            /**
             * The schedule entry this attempt collects. Absent when the attempt collects the
             * invoice balance. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
             */
            "invoice_schedule_entry_id"?: string;
            /**
             * Why the payment failed. Present only when status is failed. A summary of why a
             * payment attempt failed, with a normalized error code, a message, the failure time,
             * and remediation.
             */
            "last_payment_error"?: PaymentErrorSummary;
            /**
             * The payment intent behind this attempt. Absent until payment starts, such as a
             * hosted attempt the buyer hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_id"?: string;
            /**
             * How the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH
             * debit. Value enum: "card", "ach_debit".
             */
            "rail": "card" | "ach_debit" | (string & {});
            /**
             * When this attempt first settled successfully. Duplicate payment notifications
             * preserve this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "settled_at"?: string;
            /** When the attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "started_at"?: string;
            /**
             * Current payment attempt status. succeeded means this attempt completed successfully,
             * even if the invoice still has an outstanding balance.
             * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
             * "succeeded", "failed", "canceled", "expired", "processing".
             */
            "status": "open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {});
            /**
             * When this attempt last changed. Duplicate payment notifications preserve this
             * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<InvoicePaymentAttempt>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "invoice_payment_attempt.canceled". */
    "event_type"?: "invoice_payment_attempt.canceled";
});
export type InvoicePaymentAttemptExpiredEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "canceled_at"?: string;
            "cancellation_requested_at"?: string;
            "checkout_session_id"?: string;
            "expected_amount_money": MoneyValue;
            "expires_at"?: string;
            "invoice_id": string;
            "invoice_payment_attempt_id": string;
            "invoice_schedule_entry_id"?: string;
            "last_payment_error"?: PaymentErrorSummary;
            "payment_intent_id"?: string;
            "rail": "card" | "ach_debit" | (string & {});
            "settled_at"?: string;
            "started_at"?: string;
            "status": "open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {});
            "updated_at": string;
        };
        "previous_attributes"?: Partial<InvoicePaymentAttempt>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "invoice_payment_attempt.expired";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "canceled_at"?: string;
            "cancellation_requested_at"?: string;
            "checkout_session_id"?: string;
            "expected_amount_money": MoneyValue;
            "expires_at"?: string;
            "invoice_id": string;
            "invoice_payment_attempt_id": string;
            "invoice_schedule_entry_id"?: string;
            "last_payment_error"?: PaymentErrorSummary;
            "payment_intent_id"?: string;
            "rail": "card" | "ach_debit" | (string & {});
            "settled_at"?: string;
            "started_at"?: string;
            "status": "open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {});
            "updated_at": string;
        };
        "previous_attributes"?: Partial<InvoicePaymentAttempt>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "invoice_payment_attempt.expired";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "invoice_payment_attempt.expired";
});
/**
 * The `invoice_payment_attempt.expired` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type InvoicePaymentAttemptExpiredInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.canceled_at (Optional): string. When the attempt was canceled. An
     * attempt canceled with its checkout session before payment started may not have it. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.cancellation_requested_at (Optional):
     * string. When cancellation of this attempt was last requested. It stays set when the payment
     * processor refuses the cancellation or the payment settles first, so read status and
     * canceled_at for the outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.checkout_session_id (Optional): string. The hosted or headless checkout session the
     * buyer pays through. Absent for automatic charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     * object.expected_amount_money (Required): {@link MoneyValue}. The amount this attempt
     * collects: the outstanding balance, or the targeted schedule entry's outstanding amount.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.expires_at (Optional): string. When a checkout attempt expires, matching its checkout
     * session. Absent for automatic charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.invoice_id (Required): string. The invoice this attempt collects. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.invoice_payment_attempt_id (Required): string.
     * Flint invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX".
     * object.invoice_schedule_entry_id (Optional): string. The schedule entry this attempt
     * collects. Absent when the attempt collects the invoice balance. Example:
     * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". object.last_payment_error (Optional): {@link
     * PaymentErrorSummary}. Why the payment failed. Present only when status is failed. A summary
     * of why a payment attempt failed, with a normalized error code, a message, the failure time,
     * and remediation. object.payment_intent_id (Optional): string. The payment intent behind this
     * attempt. Absent until payment starts, such as a hosted attempt the buyer hasn't paid yet.
     * Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.rail (Required): string. How the attempt
     * collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Value enum:
     * "card", "ach_debit". object.settled_at (Optional): string. When this attempt first settled
     * successfully. Duplicate payment notifications preserve this timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.started_at (Optional): string. When the attempt was
     * created. Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required):
     * string. Current payment attempt status. succeeded means this attempt completed successfully,
     * even if the invoice still has an outstanding balance. invoice_payment_attempt.succeeded
     * reports that completion. Value enum: "open", "succeeded", "failed", "canceled", "expired",
     * "processing". object.updated_at (Required): string. When this attempt last changed.
     * Duplicate payment notifications preserve this timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * canceled_at (Optional): string. When the attempt was canceled. An attempt canceled with
         * its checkout session before payment started may not have it. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". cancellation_requested_at (Optional): string. When cancellation
         * of this attempt was last requested. It stays set when the payment processor refuses the
         * cancellation or the payment settles first, so read status and canceled_at for the
         * outcome. Format: date-time. Example: "2026-08-02T16:00:00Z". checkout_session_id
         * (Optional): string. The hosted or headless checkout session the buyer pays through.
         * Absent for automatic charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
         * expected_amount_money (Required): {@link MoneyValue}. The amount this attempt collects:
         * the outstanding balance, or the targeted schedule entry's outstanding amount. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code. expires_at
         * (Optional): string. When a checkout attempt expires, matching its checkout session.
         * Absent for automatic charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * invoice_id (Required): string. The invoice this attempt collects. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_payment_attempt_id (Required): string. Flint
         * invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX".
         * invoice_schedule_entry_id (Optional): string. The schedule entry this attempt collects.
         * Absent when the attempt collects the invoice balance. Example:
         * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". last_payment_error (Optional): {@link
         * PaymentErrorSummary}. Why the payment failed. Present only when status is failed. A
         * summary of why a payment attempt failed, with a normalized error code, a message, the
         * failure time, and remediation. payment_intent_id (Optional): string. The payment intent
         * behind this attempt. Absent until payment starts, such as a hosted attempt the buyer
         * hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". rail (Required): string. How
         * the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit.
         * Value enum: "card", "ach_debit". settled_at (Optional): string. When this attempt first
         * settled successfully. Duplicate payment notifications preserve this timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". started_at (Optional): string. When the
         * attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z". status
         * (Required): string. Current payment attempt status. succeeded means this attempt
         * completed successfully, even if the invoice still has an outstanding balance.
         * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
         * "succeeded", "failed", "canceled", "expired", "processing". updated_at (Required):
         * string. When this attempt last changed. Duplicate payment notifications preserve this
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * When the attempt was canceled. An attempt canceled with its checkout session before
             * payment started may not have it. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "canceled_at"?: string;
            /**
             * When cancellation of this attempt was last requested. It stays set when the payment
             * processor refuses the cancellation or the payment settles first, so read status and
             * canceled_at for the outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "cancellation_requested_at"?: string;
            /**
             * The hosted or headless checkout session the buyer pays through. Absent for automatic
             * charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "checkout_session_id"?: string;
            /**
             * The amount this attempt collects: the outstanding balance, or the targeted schedule
             * entry's outstanding amount. Monetary amount represented as integer minor units plus
             * an ISO 4217 currency code.
             */
            "expected_amount_money": MoneyValue;
            /**
             * When a checkout attempt expires, matching its checkout session. Absent for automatic
             * charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "expires_at"?: string;
            /** The invoice this attempt collects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
            "invoice_id": string;
            /** Flint invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX". */
            "invoice_payment_attempt_id": string;
            /**
             * The schedule entry this attempt collects. Absent when the attempt collects the
             * invoice balance. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
             */
            "invoice_schedule_entry_id"?: string;
            /**
             * Why the payment failed. Present only when status is failed. A summary of why a
             * payment attempt failed, with a normalized error code, a message, the failure time,
             * and remediation.
             */
            "last_payment_error"?: PaymentErrorSummary;
            /**
             * The payment intent behind this attempt. Absent until payment starts, such as a
             * hosted attempt the buyer hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_id"?: string;
            /**
             * How the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH
             * debit. Value enum: "card", "ach_debit".
             */
            "rail": "card" | "ach_debit" | (string & {});
            /**
             * When this attempt first settled successfully. Duplicate payment notifications
             * preserve this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "settled_at"?: string;
            /** When the attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "started_at"?: string;
            /**
             * Current payment attempt status. succeeded means this attempt completed successfully,
             * even if the invoice still has an outstanding balance.
             * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
             * "succeeded", "failed", "canceled", "expired", "processing".
             */
            "status": "open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {});
            /**
             * When this attempt last changed. Duplicate payment notifications preserve this
             * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<InvoicePaymentAttempt>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "invoice_payment_attempt.expired". */
    "event_type"?: "invoice_payment_attempt.expired";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `invoice_payment_attempt.expired` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type InvoicePaymentAttemptExpiredMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.canceled_at (Optional): string. When the attempt was canceled. An
     * attempt canceled with its checkout session before payment started may not have it. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.cancellation_requested_at (Optional):
     * string. When cancellation of this attempt was last requested. It stays set when the payment
     * processor refuses the cancellation or the payment settles first, so read status and
     * canceled_at for the outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.checkout_session_id (Optional): string. The hosted or headless checkout session the
     * buyer pays through. Absent for automatic charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     * object.expected_amount_money (Required): {@link MoneyValue}. The amount this attempt
     * collects: the outstanding balance, or the targeted schedule entry's outstanding amount.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.expires_at (Optional): string. When a checkout attempt expires, matching its checkout
     * session. Absent for automatic charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.invoice_id (Required): string. The invoice this attempt collects. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.invoice_payment_attempt_id (Required): string.
     * Flint invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX".
     * object.invoice_schedule_entry_id (Optional): string. The schedule entry this attempt
     * collects. Absent when the attempt collects the invoice balance. Example:
     * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". object.last_payment_error (Optional): {@link
     * PaymentErrorSummary}. Why the payment failed. Present only when status is failed. A summary
     * of why a payment attempt failed, with a normalized error code, a message, the failure time,
     * and remediation. object.payment_intent_id (Optional): string. The payment intent behind this
     * attempt. Absent until payment starts, such as a hosted attempt the buyer hasn't paid yet.
     * Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.rail (Required): string. How the attempt
     * collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Value enum:
     * "card", "ach_debit". object.settled_at (Optional): string. When this attempt first settled
     * successfully. Duplicate payment notifications preserve this timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.started_at (Optional): string. When the attempt was
     * created. Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required):
     * string. Current payment attempt status. succeeded means this attempt completed successfully,
     * even if the invoice still has an outstanding balance. invoice_payment_attempt.succeeded
     * reports that completion. Value enum: "open", "succeeded", "failed", "canceled", "expired",
     * "processing". object.updated_at (Required): string. When this attempt last changed.
     * Duplicate payment notifications preserve this timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * canceled_at (Optional): string. When the attempt was canceled. An attempt canceled with
         * its checkout session before payment started may not have it. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". cancellation_requested_at (Optional): string. When cancellation
         * of this attempt was last requested. It stays set when the payment processor refuses the
         * cancellation or the payment settles first, so read status and canceled_at for the
         * outcome. Format: date-time. Example: "2026-08-02T16:00:00Z". checkout_session_id
         * (Optional): string. The hosted or headless checkout session the buyer pays through.
         * Absent for automatic charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
         * expected_amount_money (Required): {@link MoneyValue}. The amount this attempt collects:
         * the outstanding balance, or the targeted schedule entry's outstanding amount. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code. expires_at
         * (Optional): string. When a checkout attempt expires, matching its checkout session.
         * Absent for automatic charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * invoice_id (Required): string. The invoice this attempt collects. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_payment_attempt_id (Required): string. Flint
         * invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX".
         * invoice_schedule_entry_id (Optional): string. The schedule entry this attempt collects.
         * Absent when the attempt collects the invoice balance. Example:
         * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". last_payment_error (Optional): {@link
         * PaymentErrorSummary}. Why the payment failed. Present only when status is failed. A
         * summary of why a payment attempt failed, with a normalized error code, a message, the
         * failure time, and remediation. payment_intent_id (Optional): string. The payment intent
         * behind this attempt. Absent until payment starts, such as a hosted attempt the buyer
         * hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". rail (Required): string. How
         * the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit.
         * Value enum: "card", "ach_debit". settled_at (Optional): string. When this attempt first
         * settled successfully. Duplicate payment notifications preserve this timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". started_at (Optional): string. When the
         * attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z". status
         * (Required): string. Current payment attempt status. succeeded means this attempt
         * completed successfully, even if the invoice still has an outstanding balance.
         * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
         * "succeeded", "failed", "canceled", "expired", "processing". updated_at (Required):
         * string. When this attempt last changed. Duplicate payment notifications preserve this
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * When the attempt was canceled. An attempt canceled with its checkout session before
             * payment started may not have it. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "canceled_at"?: string;
            /**
             * When cancellation of this attempt was last requested. It stays set when the payment
             * processor refuses the cancellation or the payment settles first, so read status and
             * canceled_at for the outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "cancellation_requested_at"?: string;
            /**
             * The hosted or headless checkout session the buyer pays through. Absent for automatic
             * charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "checkout_session_id"?: string;
            /**
             * The amount this attempt collects: the outstanding balance, or the targeted schedule
             * entry's outstanding amount. Monetary amount represented as integer minor units plus
             * an ISO 4217 currency code.
             */
            "expected_amount_money": MoneyValue;
            /**
             * When a checkout attempt expires, matching its checkout session. Absent for automatic
             * charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "expires_at"?: string;
            /** The invoice this attempt collects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
            "invoice_id": string;
            /** Flint invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX". */
            "invoice_payment_attempt_id": string;
            /**
             * The schedule entry this attempt collects. Absent when the attempt collects the
             * invoice balance. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
             */
            "invoice_schedule_entry_id"?: string;
            /**
             * Why the payment failed. Present only when status is failed. A summary of why a
             * payment attempt failed, with a normalized error code, a message, the failure time,
             * and remediation.
             */
            "last_payment_error"?: PaymentErrorSummary;
            /**
             * The payment intent behind this attempt. Absent until payment starts, such as a
             * hosted attempt the buyer hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_id"?: string;
            /**
             * How the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH
             * debit. Value enum: "card", "ach_debit".
             */
            "rail": "card" | "ach_debit" | (string & {});
            /**
             * When this attempt first settled successfully. Duplicate payment notifications
             * preserve this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "settled_at"?: string;
            /** When the attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "started_at"?: string;
            /**
             * Current payment attempt status. succeeded means this attempt completed successfully,
             * even if the invoice still has an outstanding balance.
             * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
             * "succeeded", "failed", "canceled", "expired", "processing".
             */
            "status": "open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {});
            /**
             * When this attempt last changed. Duplicate payment notifications preserve this
             * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<InvoicePaymentAttempt>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "invoice_payment_attempt.expired". */
    "event_type"?: "invoice_payment_attempt.expired";
});
export type InvoicePaymentAttemptFailedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "canceled_at"?: string;
            "cancellation_requested_at"?: string;
            "checkout_session_id"?: string;
            "expected_amount_money": MoneyValue;
            "expires_at"?: string;
            "invoice_id": string;
            "invoice_payment_attempt_id": string;
            "invoice_schedule_entry_id"?: string;
            "last_payment_error"?: PaymentErrorSummary;
            "payment_intent_id"?: string;
            "rail": "card" | "ach_debit" | (string & {});
            "settled_at"?: string;
            "started_at"?: string;
            "status": "open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {});
            "updated_at": string;
        };
        "previous_attributes"?: Partial<InvoicePaymentAttempt>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "invoice_payment_attempt.failed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "canceled_at"?: string;
            "cancellation_requested_at"?: string;
            "checkout_session_id"?: string;
            "expected_amount_money": MoneyValue;
            "expires_at"?: string;
            "invoice_id": string;
            "invoice_payment_attempt_id": string;
            "invoice_schedule_entry_id"?: string;
            "last_payment_error"?: PaymentErrorSummary;
            "payment_intent_id"?: string;
            "rail": "card" | "ach_debit" | (string & {});
            "settled_at"?: string;
            "started_at"?: string;
            "status": "open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {});
            "updated_at": string;
        };
        "previous_attributes"?: Partial<InvoicePaymentAttempt>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "invoice_payment_attempt.failed";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "invoice_payment_attempt.failed";
});
/**
 * The `invoice_payment_attempt.failed` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type InvoicePaymentAttemptFailedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.canceled_at (Optional): string. When the attempt was canceled. An
     * attempt canceled with its checkout session before payment started may not have it. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.cancellation_requested_at (Optional):
     * string. When cancellation of this attempt was last requested. It stays set when the payment
     * processor refuses the cancellation or the payment settles first, so read status and
     * canceled_at for the outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.checkout_session_id (Optional): string. The hosted or headless checkout session the
     * buyer pays through. Absent for automatic charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     * object.expected_amount_money (Required): {@link MoneyValue}. The amount this attempt
     * collects: the outstanding balance, or the targeted schedule entry's outstanding amount.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.expires_at (Optional): string. When a checkout attempt expires, matching its checkout
     * session. Absent for automatic charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.invoice_id (Required): string. The invoice this attempt collects. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.invoice_payment_attempt_id (Required): string.
     * Flint invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX".
     * object.invoice_schedule_entry_id (Optional): string. The schedule entry this attempt
     * collects. Absent when the attempt collects the invoice balance. Example:
     * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". object.last_payment_error (Optional): {@link
     * PaymentErrorSummary}. Why the payment failed. Present only when status is failed. A summary
     * of why a payment attempt failed, with a normalized error code, a message, the failure time,
     * and remediation. object.payment_intent_id (Optional): string. The payment intent behind this
     * attempt. Absent until payment starts, such as a hosted attempt the buyer hasn't paid yet.
     * Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.rail (Required): string. How the attempt
     * collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Value enum:
     * "card", "ach_debit". object.settled_at (Optional): string. When this attempt first settled
     * successfully. Duplicate payment notifications preserve this timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.started_at (Optional): string. When the attempt was
     * created. Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required):
     * string. Current payment attempt status. succeeded means this attempt completed successfully,
     * even if the invoice still has an outstanding balance. invoice_payment_attempt.succeeded
     * reports that completion. Value enum: "open", "succeeded", "failed", "canceled", "expired",
     * "processing". object.updated_at (Required): string. When this attempt last changed.
     * Duplicate payment notifications preserve this timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * canceled_at (Optional): string. When the attempt was canceled. An attempt canceled with
         * its checkout session before payment started may not have it. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". cancellation_requested_at (Optional): string. When cancellation
         * of this attempt was last requested. It stays set when the payment processor refuses the
         * cancellation or the payment settles first, so read status and canceled_at for the
         * outcome. Format: date-time. Example: "2026-08-02T16:00:00Z". checkout_session_id
         * (Optional): string. The hosted or headless checkout session the buyer pays through.
         * Absent for automatic charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
         * expected_amount_money (Required): {@link MoneyValue}. The amount this attempt collects:
         * the outstanding balance, or the targeted schedule entry's outstanding amount. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code. expires_at
         * (Optional): string. When a checkout attempt expires, matching its checkout session.
         * Absent for automatic charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * invoice_id (Required): string. The invoice this attempt collects. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_payment_attempt_id (Required): string. Flint
         * invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX".
         * invoice_schedule_entry_id (Optional): string. The schedule entry this attempt collects.
         * Absent when the attempt collects the invoice balance. Example:
         * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". last_payment_error (Optional): {@link
         * PaymentErrorSummary}. Why the payment failed. Present only when status is failed. A
         * summary of why a payment attempt failed, with a normalized error code, a message, the
         * failure time, and remediation. payment_intent_id (Optional): string. The payment intent
         * behind this attempt. Absent until payment starts, such as a hosted attempt the buyer
         * hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". rail (Required): string. How
         * the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit.
         * Value enum: "card", "ach_debit". settled_at (Optional): string. When this attempt first
         * settled successfully. Duplicate payment notifications preserve this timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". started_at (Optional): string. When the
         * attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z". status
         * (Required): string. Current payment attempt status. succeeded means this attempt
         * completed successfully, even if the invoice still has an outstanding balance.
         * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
         * "succeeded", "failed", "canceled", "expired", "processing". updated_at (Required):
         * string. When this attempt last changed. Duplicate payment notifications preserve this
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * When the attempt was canceled. An attempt canceled with its checkout session before
             * payment started may not have it. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "canceled_at"?: string;
            /**
             * When cancellation of this attempt was last requested. It stays set when the payment
             * processor refuses the cancellation or the payment settles first, so read status and
             * canceled_at for the outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "cancellation_requested_at"?: string;
            /**
             * The hosted or headless checkout session the buyer pays through. Absent for automatic
             * charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "checkout_session_id"?: string;
            /**
             * The amount this attempt collects: the outstanding balance, or the targeted schedule
             * entry's outstanding amount. Monetary amount represented as integer minor units plus
             * an ISO 4217 currency code.
             */
            "expected_amount_money": MoneyValue;
            /**
             * When a checkout attempt expires, matching its checkout session. Absent for automatic
             * charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "expires_at"?: string;
            /** The invoice this attempt collects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
            "invoice_id": string;
            /** Flint invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX". */
            "invoice_payment_attempt_id": string;
            /**
             * The schedule entry this attempt collects. Absent when the attempt collects the
             * invoice balance. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
             */
            "invoice_schedule_entry_id"?: string;
            /**
             * Why the payment failed. Present only when status is failed. A summary of why a
             * payment attempt failed, with a normalized error code, a message, the failure time,
             * and remediation.
             */
            "last_payment_error"?: PaymentErrorSummary;
            /**
             * The payment intent behind this attempt. Absent until payment starts, such as a
             * hosted attempt the buyer hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_id"?: string;
            /**
             * How the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH
             * debit. Value enum: "card", "ach_debit".
             */
            "rail": "card" | "ach_debit" | (string & {});
            /**
             * When this attempt first settled successfully. Duplicate payment notifications
             * preserve this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "settled_at"?: string;
            /** When the attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "started_at"?: string;
            /**
             * Current payment attempt status. succeeded means this attempt completed successfully,
             * even if the invoice still has an outstanding balance.
             * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
             * "succeeded", "failed", "canceled", "expired", "processing".
             */
            "status": "open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {});
            /**
             * When this attempt last changed. Duplicate payment notifications preserve this
             * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<InvoicePaymentAttempt>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "invoice_payment_attempt.failed". */
    "event_type"?: "invoice_payment_attempt.failed";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `invoice_payment_attempt.failed` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type InvoicePaymentAttemptFailedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.canceled_at (Optional): string. When the attempt was canceled. An
     * attempt canceled with its checkout session before payment started may not have it. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.cancellation_requested_at (Optional):
     * string. When cancellation of this attempt was last requested. It stays set when the payment
     * processor refuses the cancellation or the payment settles first, so read status and
     * canceled_at for the outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.checkout_session_id (Optional): string. The hosted or headless checkout session the
     * buyer pays through. Absent for automatic charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     * object.expected_amount_money (Required): {@link MoneyValue}. The amount this attempt
     * collects: the outstanding balance, or the targeted schedule entry's outstanding amount.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.expires_at (Optional): string. When a checkout attempt expires, matching its checkout
     * session. Absent for automatic charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.invoice_id (Required): string. The invoice this attempt collects. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.invoice_payment_attempt_id (Required): string.
     * Flint invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX".
     * object.invoice_schedule_entry_id (Optional): string. The schedule entry this attempt
     * collects. Absent when the attempt collects the invoice balance. Example:
     * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". object.last_payment_error (Optional): {@link
     * PaymentErrorSummary}. Why the payment failed. Present only when status is failed. A summary
     * of why a payment attempt failed, with a normalized error code, a message, the failure time,
     * and remediation. object.payment_intent_id (Optional): string. The payment intent behind this
     * attempt. Absent until payment starts, such as a hosted attempt the buyer hasn't paid yet.
     * Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.rail (Required): string. How the attempt
     * collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Value enum:
     * "card", "ach_debit". object.settled_at (Optional): string. When this attempt first settled
     * successfully. Duplicate payment notifications preserve this timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.started_at (Optional): string. When the attempt was
     * created. Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required):
     * string. Current payment attempt status. succeeded means this attempt completed successfully,
     * even if the invoice still has an outstanding balance. invoice_payment_attempt.succeeded
     * reports that completion. Value enum: "open", "succeeded", "failed", "canceled", "expired",
     * "processing". object.updated_at (Required): string. When this attempt last changed.
     * Duplicate payment notifications preserve this timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * canceled_at (Optional): string. When the attempt was canceled. An attempt canceled with
         * its checkout session before payment started may not have it. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". cancellation_requested_at (Optional): string. When cancellation
         * of this attempt was last requested. It stays set when the payment processor refuses the
         * cancellation or the payment settles first, so read status and canceled_at for the
         * outcome. Format: date-time. Example: "2026-08-02T16:00:00Z". checkout_session_id
         * (Optional): string. The hosted or headless checkout session the buyer pays through.
         * Absent for automatic charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
         * expected_amount_money (Required): {@link MoneyValue}. The amount this attempt collects:
         * the outstanding balance, or the targeted schedule entry's outstanding amount. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code. expires_at
         * (Optional): string. When a checkout attempt expires, matching its checkout session.
         * Absent for automatic charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * invoice_id (Required): string. The invoice this attempt collects. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_payment_attempt_id (Required): string. Flint
         * invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX".
         * invoice_schedule_entry_id (Optional): string. The schedule entry this attempt collects.
         * Absent when the attempt collects the invoice balance. Example:
         * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". last_payment_error (Optional): {@link
         * PaymentErrorSummary}. Why the payment failed. Present only when status is failed. A
         * summary of why a payment attempt failed, with a normalized error code, a message, the
         * failure time, and remediation. payment_intent_id (Optional): string. The payment intent
         * behind this attempt. Absent until payment starts, such as a hosted attempt the buyer
         * hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". rail (Required): string. How
         * the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit.
         * Value enum: "card", "ach_debit". settled_at (Optional): string. When this attempt first
         * settled successfully. Duplicate payment notifications preserve this timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". started_at (Optional): string. When the
         * attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z". status
         * (Required): string. Current payment attempt status. succeeded means this attempt
         * completed successfully, even if the invoice still has an outstanding balance.
         * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
         * "succeeded", "failed", "canceled", "expired", "processing". updated_at (Required):
         * string. When this attempt last changed. Duplicate payment notifications preserve this
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * When the attempt was canceled. An attempt canceled with its checkout session before
             * payment started may not have it. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "canceled_at"?: string;
            /**
             * When cancellation of this attempt was last requested. It stays set when the payment
             * processor refuses the cancellation or the payment settles first, so read status and
             * canceled_at for the outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "cancellation_requested_at"?: string;
            /**
             * The hosted or headless checkout session the buyer pays through. Absent for automatic
             * charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "checkout_session_id"?: string;
            /**
             * The amount this attempt collects: the outstanding balance, or the targeted schedule
             * entry's outstanding amount. Monetary amount represented as integer minor units plus
             * an ISO 4217 currency code.
             */
            "expected_amount_money": MoneyValue;
            /**
             * When a checkout attempt expires, matching its checkout session. Absent for automatic
             * charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "expires_at"?: string;
            /** The invoice this attempt collects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
            "invoice_id": string;
            /** Flint invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX". */
            "invoice_payment_attempt_id": string;
            /**
             * The schedule entry this attempt collects. Absent when the attempt collects the
             * invoice balance. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
             */
            "invoice_schedule_entry_id"?: string;
            /**
             * Why the payment failed. Present only when status is failed. A summary of why a
             * payment attempt failed, with a normalized error code, a message, the failure time,
             * and remediation.
             */
            "last_payment_error"?: PaymentErrorSummary;
            /**
             * The payment intent behind this attempt. Absent until payment starts, such as a
             * hosted attempt the buyer hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_id"?: string;
            /**
             * How the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH
             * debit. Value enum: "card", "ach_debit".
             */
            "rail": "card" | "ach_debit" | (string & {});
            /**
             * When this attempt first settled successfully. Duplicate payment notifications
             * preserve this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "settled_at"?: string;
            /** When the attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "started_at"?: string;
            /**
             * Current payment attempt status. succeeded means this attempt completed successfully,
             * even if the invoice still has an outstanding balance.
             * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
             * "succeeded", "failed", "canceled", "expired", "processing".
             */
            "status": "open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {});
            /**
             * When this attempt last changed. Duplicate payment notifications preserve this
             * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<InvoicePaymentAttempt>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "invoice_payment_attempt.failed". */
    "event_type"?: "invoice_payment_attempt.failed";
});
/** A page of `InvoicePaymentAttempt` objects. */
export type InvoicePaymentAttemptListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * InvoicePaymentAttempt}. An attempt to collect payment for an invoice.
     */
    "data": Array<InvoicePaymentAttempt>;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no
     * next page.
     */
    "next_page_token"?: string;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type InvoicePaymentAttemptProcessingEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "canceled_at"?: string;
            "cancellation_requested_at"?: string;
            "checkout_session_id"?: string;
            "expected_amount_money": MoneyValue;
            "expires_at"?: string;
            "invoice_id": string;
            "invoice_payment_attempt_id": string;
            "invoice_schedule_entry_id"?: string;
            "last_payment_error"?: PaymentErrorSummary;
            "payment_intent_id"?: string;
            "rail": "card" | "ach_debit" | (string & {});
            "settled_at"?: string;
            "started_at"?: string;
            "status": "open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {});
            "updated_at": string;
        };
        "previous_attributes"?: Partial<InvoicePaymentAttempt>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "invoice_payment_attempt.processing";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "canceled_at"?: string;
            "cancellation_requested_at"?: string;
            "checkout_session_id"?: string;
            "expected_amount_money": MoneyValue;
            "expires_at"?: string;
            "invoice_id": string;
            "invoice_payment_attempt_id": string;
            "invoice_schedule_entry_id"?: string;
            "last_payment_error"?: PaymentErrorSummary;
            "payment_intent_id"?: string;
            "rail": "card" | "ach_debit" | (string & {});
            "settled_at"?: string;
            "started_at"?: string;
            "status": "open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {});
            "updated_at": string;
        };
        "previous_attributes"?: Partial<InvoicePaymentAttempt>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "invoice_payment_attempt.processing";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "invoice_payment_attempt.processing";
});
/**
 * The `invoice_payment_attempt.processing` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type InvoicePaymentAttemptProcessingInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.canceled_at (Optional): string. When the attempt was canceled. An
     * attempt canceled with its checkout session before payment started may not have it. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.cancellation_requested_at (Optional):
     * string. When cancellation of this attempt was last requested. It stays set when the payment
     * processor refuses the cancellation or the payment settles first, so read status and
     * canceled_at for the outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.checkout_session_id (Optional): string. The hosted or headless checkout session the
     * buyer pays through. Absent for automatic charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     * object.expected_amount_money (Required): {@link MoneyValue}. The amount this attempt
     * collects: the outstanding balance, or the targeted schedule entry's outstanding amount.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.expires_at (Optional): string. When a checkout attempt expires, matching its checkout
     * session. Absent for automatic charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.invoice_id (Required): string. The invoice this attempt collects. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.invoice_payment_attempt_id (Required): string.
     * Flint invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX".
     * object.invoice_schedule_entry_id (Optional): string. The schedule entry this attempt
     * collects. Absent when the attempt collects the invoice balance. Example:
     * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". object.last_payment_error (Optional): {@link
     * PaymentErrorSummary}. Why the payment failed. Present only when status is failed. A summary
     * of why a payment attempt failed, with a normalized error code, a message, the failure time,
     * and remediation. object.payment_intent_id (Optional): string. The payment intent behind this
     * attempt. Absent until payment starts, such as a hosted attempt the buyer hasn't paid yet.
     * Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.rail (Required): string. How the attempt
     * collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Value enum:
     * "card", "ach_debit". object.settled_at (Optional): string. When this attempt first settled
     * successfully. Duplicate payment notifications preserve this timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.started_at (Optional): string. When the attempt was
     * created. Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required):
     * string. Current payment attempt status. succeeded means this attempt completed successfully,
     * even if the invoice still has an outstanding balance. invoice_payment_attempt.succeeded
     * reports that completion. Value enum: "open", "succeeded", "failed", "canceled", "expired",
     * "processing". object.updated_at (Required): string. When this attempt last changed.
     * Duplicate payment notifications preserve this timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * canceled_at (Optional): string. When the attempt was canceled. An attempt canceled with
         * its checkout session before payment started may not have it. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". cancellation_requested_at (Optional): string. When cancellation
         * of this attempt was last requested. It stays set when the payment processor refuses the
         * cancellation or the payment settles first, so read status and canceled_at for the
         * outcome. Format: date-time. Example: "2026-08-02T16:00:00Z". checkout_session_id
         * (Optional): string. The hosted or headless checkout session the buyer pays through.
         * Absent for automatic charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
         * expected_amount_money (Required): {@link MoneyValue}. The amount this attempt collects:
         * the outstanding balance, or the targeted schedule entry's outstanding amount. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code. expires_at
         * (Optional): string. When a checkout attempt expires, matching its checkout session.
         * Absent for automatic charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * invoice_id (Required): string. The invoice this attempt collects. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_payment_attempt_id (Required): string. Flint
         * invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX".
         * invoice_schedule_entry_id (Optional): string. The schedule entry this attempt collects.
         * Absent when the attempt collects the invoice balance. Example:
         * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". last_payment_error (Optional): {@link
         * PaymentErrorSummary}. Why the payment failed. Present only when status is failed. A
         * summary of why a payment attempt failed, with a normalized error code, a message, the
         * failure time, and remediation. payment_intent_id (Optional): string. The payment intent
         * behind this attempt. Absent until payment starts, such as a hosted attempt the buyer
         * hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". rail (Required): string. How
         * the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit.
         * Value enum: "card", "ach_debit". settled_at (Optional): string. When this attempt first
         * settled successfully. Duplicate payment notifications preserve this timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". started_at (Optional): string. When the
         * attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z". status
         * (Required): string. Current payment attempt status. succeeded means this attempt
         * completed successfully, even if the invoice still has an outstanding balance.
         * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
         * "succeeded", "failed", "canceled", "expired", "processing". updated_at (Required):
         * string. When this attempt last changed. Duplicate payment notifications preserve this
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * When the attempt was canceled. An attempt canceled with its checkout session before
             * payment started may not have it. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "canceled_at"?: string;
            /**
             * When cancellation of this attempt was last requested. It stays set when the payment
             * processor refuses the cancellation or the payment settles first, so read status and
             * canceled_at for the outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "cancellation_requested_at"?: string;
            /**
             * The hosted or headless checkout session the buyer pays through. Absent for automatic
             * charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "checkout_session_id"?: string;
            /**
             * The amount this attempt collects: the outstanding balance, or the targeted schedule
             * entry's outstanding amount. Monetary amount represented as integer minor units plus
             * an ISO 4217 currency code.
             */
            "expected_amount_money": MoneyValue;
            /**
             * When a checkout attempt expires, matching its checkout session. Absent for automatic
             * charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "expires_at"?: string;
            /** The invoice this attempt collects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
            "invoice_id": string;
            /** Flint invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX". */
            "invoice_payment_attempt_id": string;
            /**
             * The schedule entry this attempt collects. Absent when the attempt collects the
             * invoice balance. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
             */
            "invoice_schedule_entry_id"?: string;
            /**
             * Why the payment failed. Present only when status is failed. A summary of why a
             * payment attempt failed, with a normalized error code, a message, the failure time,
             * and remediation.
             */
            "last_payment_error"?: PaymentErrorSummary;
            /**
             * The payment intent behind this attempt. Absent until payment starts, such as a
             * hosted attempt the buyer hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_id"?: string;
            /**
             * How the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH
             * debit. Value enum: "card", "ach_debit".
             */
            "rail": "card" | "ach_debit" | (string & {});
            /**
             * When this attempt first settled successfully. Duplicate payment notifications
             * preserve this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "settled_at"?: string;
            /** When the attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "started_at"?: string;
            /**
             * Current payment attempt status. succeeded means this attempt completed successfully,
             * even if the invoice still has an outstanding balance.
             * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
             * "succeeded", "failed", "canceled", "expired", "processing".
             */
            "status": "open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {});
            /**
             * When this attempt last changed. Duplicate payment notifications preserve this
             * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<InvoicePaymentAttempt>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "invoice_payment_attempt.processing". */
    "event_type"?: "invoice_payment_attempt.processing";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `invoice_payment_attempt.processing` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type InvoicePaymentAttemptProcessingMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.canceled_at (Optional): string. When the attempt was canceled. An
     * attempt canceled with its checkout session before payment started may not have it. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.cancellation_requested_at (Optional):
     * string. When cancellation of this attempt was last requested. It stays set when the payment
     * processor refuses the cancellation or the payment settles first, so read status and
     * canceled_at for the outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.checkout_session_id (Optional): string. The hosted or headless checkout session the
     * buyer pays through. Absent for automatic charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     * object.expected_amount_money (Required): {@link MoneyValue}. The amount this attempt
     * collects: the outstanding balance, or the targeted schedule entry's outstanding amount.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.expires_at (Optional): string. When a checkout attempt expires, matching its checkout
     * session. Absent for automatic charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.invoice_id (Required): string. The invoice this attempt collects. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.invoice_payment_attempt_id (Required): string.
     * Flint invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX".
     * object.invoice_schedule_entry_id (Optional): string. The schedule entry this attempt
     * collects. Absent when the attempt collects the invoice balance. Example:
     * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". object.last_payment_error (Optional): {@link
     * PaymentErrorSummary}. Why the payment failed. Present only when status is failed. A summary
     * of why a payment attempt failed, with a normalized error code, a message, the failure time,
     * and remediation. object.payment_intent_id (Optional): string. The payment intent behind this
     * attempt. Absent until payment starts, such as a hosted attempt the buyer hasn't paid yet.
     * Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.rail (Required): string. How the attempt
     * collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Value enum:
     * "card", "ach_debit". object.settled_at (Optional): string. When this attempt first settled
     * successfully. Duplicate payment notifications preserve this timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.started_at (Optional): string. When the attempt was
     * created. Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required):
     * string. Current payment attempt status. succeeded means this attempt completed successfully,
     * even if the invoice still has an outstanding balance. invoice_payment_attempt.succeeded
     * reports that completion. Value enum: "open", "succeeded", "failed", "canceled", "expired",
     * "processing". object.updated_at (Required): string. When this attempt last changed.
     * Duplicate payment notifications preserve this timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * canceled_at (Optional): string. When the attempt was canceled. An attempt canceled with
         * its checkout session before payment started may not have it. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". cancellation_requested_at (Optional): string. When cancellation
         * of this attempt was last requested. It stays set when the payment processor refuses the
         * cancellation or the payment settles first, so read status and canceled_at for the
         * outcome. Format: date-time. Example: "2026-08-02T16:00:00Z". checkout_session_id
         * (Optional): string. The hosted or headless checkout session the buyer pays through.
         * Absent for automatic charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
         * expected_amount_money (Required): {@link MoneyValue}. The amount this attempt collects:
         * the outstanding balance, or the targeted schedule entry's outstanding amount. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code. expires_at
         * (Optional): string. When a checkout attempt expires, matching its checkout session.
         * Absent for automatic charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * invoice_id (Required): string. The invoice this attempt collects. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_payment_attempt_id (Required): string. Flint
         * invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX".
         * invoice_schedule_entry_id (Optional): string. The schedule entry this attempt collects.
         * Absent when the attempt collects the invoice balance. Example:
         * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". last_payment_error (Optional): {@link
         * PaymentErrorSummary}. Why the payment failed. Present only when status is failed. A
         * summary of why a payment attempt failed, with a normalized error code, a message, the
         * failure time, and remediation. payment_intent_id (Optional): string. The payment intent
         * behind this attempt. Absent until payment starts, such as a hosted attempt the buyer
         * hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". rail (Required): string. How
         * the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit.
         * Value enum: "card", "ach_debit". settled_at (Optional): string. When this attempt first
         * settled successfully. Duplicate payment notifications preserve this timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". started_at (Optional): string. When the
         * attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z". status
         * (Required): string. Current payment attempt status. succeeded means this attempt
         * completed successfully, even if the invoice still has an outstanding balance.
         * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
         * "succeeded", "failed", "canceled", "expired", "processing". updated_at (Required):
         * string. When this attempt last changed. Duplicate payment notifications preserve this
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * When the attempt was canceled. An attempt canceled with its checkout session before
             * payment started may not have it. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "canceled_at"?: string;
            /**
             * When cancellation of this attempt was last requested. It stays set when the payment
             * processor refuses the cancellation or the payment settles first, so read status and
             * canceled_at for the outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "cancellation_requested_at"?: string;
            /**
             * The hosted or headless checkout session the buyer pays through. Absent for automatic
             * charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "checkout_session_id"?: string;
            /**
             * The amount this attempt collects: the outstanding balance, or the targeted schedule
             * entry's outstanding amount. Monetary amount represented as integer minor units plus
             * an ISO 4217 currency code.
             */
            "expected_amount_money": MoneyValue;
            /**
             * When a checkout attempt expires, matching its checkout session. Absent for automatic
             * charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "expires_at"?: string;
            /** The invoice this attempt collects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
            "invoice_id": string;
            /** Flint invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX". */
            "invoice_payment_attempt_id": string;
            /**
             * The schedule entry this attempt collects. Absent when the attempt collects the
             * invoice balance. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
             */
            "invoice_schedule_entry_id"?: string;
            /**
             * Why the payment failed. Present only when status is failed. A summary of why a
             * payment attempt failed, with a normalized error code, a message, the failure time,
             * and remediation.
             */
            "last_payment_error"?: PaymentErrorSummary;
            /**
             * The payment intent behind this attempt. Absent until payment starts, such as a
             * hosted attempt the buyer hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_id"?: string;
            /**
             * How the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH
             * debit. Value enum: "card", "ach_debit".
             */
            "rail": "card" | "ach_debit" | (string & {});
            /**
             * When this attempt first settled successfully. Duplicate payment notifications
             * preserve this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "settled_at"?: string;
            /** When the attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "started_at"?: string;
            /**
             * Current payment attempt status. succeeded means this attempt completed successfully,
             * even if the invoice still has an outstanding balance.
             * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
             * "succeeded", "failed", "canceled", "expired", "processing".
             */
            "status": "open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {});
            /**
             * When this attempt last changed. Duplicate payment notifications preserve this
             * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<InvoicePaymentAttempt>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "invoice_payment_attempt.processing". */
    "event_type"?: "invoice_payment_attempt.processing";
});
/** A response containing `InvoicePaymentAttempt` data. */
export type InvoicePaymentAttemptResponse = {
    /**
     * Resource, collection, or operation result returned by this request. An attempt to collect
     * payment for an invoice.
     */
    "data": InvoicePaymentAttempt;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type InvoicePaymentAttemptSucceededEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "canceled_at"?: string;
            "cancellation_requested_at"?: string;
            "checkout_session_id"?: string;
            "expected_amount_money": MoneyValue;
            "expires_at"?: string;
            "invoice_id": string;
            "invoice_payment_attempt_id": string;
            "invoice_schedule_entry_id"?: string;
            "last_payment_error"?: PaymentErrorSummary;
            "payment_intent_id"?: string;
            "rail": "card" | "ach_debit" | (string & {});
            "settled_at"?: string;
            "started_at"?: string;
            "status": "open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {});
            "updated_at": string;
        };
        "previous_attributes"?: Partial<InvoicePaymentAttempt>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "invoice_payment_attempt.succeeded";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "canceled_at"?: string;
            "cancellation_requested_at"?: string;
            "checkout_session_id"?: string;
            "expected_amount_money": MoneyValue;
            "expires_at"?: string;
            "invoice_id": string;
            "invoice_payment_attempt_id": string;
            "invoice_schedule_entry_id"?: string;
            "last_payment_error"?: PaymentErrorSummary;
            "payment_intent_id"?: string;
            "rail": "card" | "ach_debit" | (string & {});
            "settled_at"?: string;
            "started_at"?: string;
            "status": "open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {});
            "updated_at": string;
        };
        "previous_attributes"?: Partial<InvoicePaymentAttempt>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "invoice_payment_attempt.succeeded";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "invoice_payment_attempt.succeeded";
});
/**
 * The `invoice_payment_attempt.succeeded` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type InvoicePaymentAttemptSucceededInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.canceled_at (Optional): string. When the attempt was canceled. An
     * attempt canceled with its checkout session before payment started may not have it. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.cancellation_requested_at (Optional):
     * string. When cancellation of this attempt was last requested. It stays set when the payment
     * processor refuses the cancellation or the payment settles first, so read status and
     * canceled_at for the outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.checkout_session_id (Optional): string. The hosted or headless checkout session the
     * buyer pays through. Absent for automatic charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     * object.expected_amount_money (Required): {@link MoneyValue}. The amount this attempt
     * collects: the outstanding balance, or the targeted schedule entry's outstanding amount.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.expires_at (Optional): string. When a checkout attempt expires, matching its checkout
     * session. Absent for automatic charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.invoice_id (Required): string. The invoice this attempt collects. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.invoice_payment_attempt_id (Required): string.
     * Flint invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX".
     * object.invoice_schedule_entry_id (Optional): string. The schedule entry this attempt
     * collects. Absent when the attempt collects the invoice balance. Example:
     * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". object.last_payment_error (Optional): {@link
     * PaymentErrorSummary}. Why the payment failed. Present only when status is failed. A summary
     * of why a payment attempt failed, with a normalized error code, a message, the failure time,
     * and remediation. object.payment_intent_id (Optional): string. The payment intent behind this
     * attempt. Absent until payment starts, such as a hosted attempt the buyer hasn't paid yet.
     * Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.rail (Required): string. How the attempt
     * collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Value enum:
     * "card", "ach_debit". object.settled_at (Optional): string. When this attempt first settled
     * successfully. Duplicate payment notifications preserve this timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.started_at (Optional): string. When the attempt was
     * created. Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required):
     * string. Current payment attempt status. succeeded means this attempt completed successfully,
     * even if the invoice still has an outstanding balance. invoice_payment_attempt.succeeded
     * reports that completion. Value enum: "open", "succeeded", "failed", "canceled", "expired",
     * "processing". object.updated_at (Required): string. When this attempt last changed.
     * Duplicate payment notifications preserve this timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * canceled_at (Optional): string. When the attempt was canceled. An attempt canceled with
         * its checkout session before payment started may not have it. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". cancellation_requested_at (Optional): string. When cancellation
         * of this attempt was last requested. It stays set when the payment processor refuses the
         * cancellation or the payment settles first, so read status and canceled_at for the
         * outcome. Format: date-time. Example: "2026-08-02T16:00:00Z". checkout_session_id
         * (Optional): string. The hosted or headless checkout session the buyer pays through.
         * Absent for automatic charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
         * expected_amount_money (Required): {@link MoneyValue}. The amount this attempt collects:
         * the outstanding balance, or the targeted schedule entry's outstanding amount. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code. expires_at
         * (Optional): string. When a checkout attempt expires, matching its checkout session.
         * Absent for automatic charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * invoice_id (Required): string. The invoice this attempt collects. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_payment_attempt_id (Required): string. Flint
         * invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX".
         * invoice_schedule_entry_id (Optional): string. The schedule entry this attempt collects.
         * Absent when the attempt collects the invoice balance. Example:
         * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". last_payment_error (Optional): {@link
         * PaymentErrorSummary}. Why the payment failed. Present only when status is failed. A
         * summary of why a payment attempt failed, with a normalized error code, a message, the
         * failure time, and remediation. payment_intent_id (Optional): string. The payment intent
         * behind this attempt. Absent until payment starts, such as a hosted attempt the buyer
         * hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". rail (Required): string. How
         * the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit.
         * Value enum: "card", "ach_debit". settled_at (Optional): string. When this attempt first
         * settled successfully. Duplicate payment notifications preserve this timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". started_at (Optional): string. When the
         * attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z". status
         * (Required): string. Current payment attempt status. succeeded means this attempt
         * completed successfully, even if the invoice still has an outstanding balance.
         * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
         * "succeeded", "failed", "canceled", "expired", "processing". updated_at (Required):
         * string. When this attempt last changed. Duplicate payment notifications preserve this
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * When the attempt was canceled. An attempt canceled with its checkout session before
             * payment started may not have it. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "canceled_at"?: string;
            /**
             * When cancellation of this attempt was last requested. It stays set when the payment
             * processor refuses the cancellation or the payment settles first, so read status and
             * canceled_at for the outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "cancellation_requested_at"?: string;
            /**
             * The hosted or headless checkout session the buyer pays through. Absent for automatic
             * charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "checkout_session_id"?: string;
            /**
             * The amount this attempt collects: the outstanding balance, or the targeted schedule
             * entry's outstanding amount. Monetary amount represented as integer minor units plus
             * an ISO 4217 currency code.
             */
            "expected_amount_money": MoneyValue;
            /**
             * When a checkout attempt expires, matching its checkout session. Absent for automatic
             * charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "expires_at"?: string;
            /** The invoice this attempt collects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
            "invoice_id": string;
            /** Flint invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX". */
            "invoice_payment_attempt_id": string;
            /**
             * The schedule entry this attempt collects. Absent when the attempt collects the
             * invoice balance. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
             */
            "invoice_schedule_entry_id"?: string;
            /**
             * Why the payment failed. Present only when status is failed. A summary of why a
             * payment attempt failed, with a normalized error code, a message, the failure time,
             * and remediation.
             */
            "last_payment_error"?: PaymentErrorSummary;
            /**
             * The payment intent behind this attempt. Absent until payment starts, such as a
             * hosted attempt the buyer hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_id"?: string;
            /**
             * How the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH
             * debit. Value enum: "card", "ach_debit".
             */
            "rail": "card" | "ach_debit" | (string & {});
            /**
             * When this attempt first settled successfully. Duplicate payment notifications
             * preserve this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "settled_at"?: string;
            /** When the attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "started_at"?: string;
            /**
             * Current payment attempt status. succeeded means this attempt completed successfully,
             * even if the invoice still has an outstanding balance.
             * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
             * "succeeded", "failed", "canceled", "expired", "processing".
             */
            "status": "open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {});
            /**
             * When this attempt last changed. Duplicate payment notifications preserve this
             * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<InvoicePaymentAttempt>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "invoice_payment_attempt.succeeded". */
    "event_type"?: "invoice_payment_attempt.succeeded";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `invoice_payment_attempt.succeeded` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type InvoicePaymentAttemptSucceededMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.canceled_at (Optional): string. When the attempt was canceled. An
     * attempt canceled with its checkout session before payment started may not have it. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.cancellation_requested_at (Optional):
     * string. When cancellation of this attempt was last requested. It stays set when the payment
     * processor refuses the cancellation or the payment settles first, so read status and
     * canceled_at for the outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.checkout_session_id (Optional): string. The hosted or headless checkout session the
     * buyer pays through. Absent for automatic charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     * object.expected_amount_money (Required): {@link MoneyValue}. The amount this attempt
     * collects: the outstanding balance, or the targeted schedule entry's outstanding amount.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.expires_at (Optional): string. When a checkout attempt expires, matching its checkout
     * session. Absent for automatic charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.invoice_id (Required): string. The invoice this attempt collects. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.invoice_payment_attempt_id (Required): string.
     * Flint invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX".
     * object.invoice_schedule_entry_id (Optional): string. The schedule entry this attempt
     * collects. Absent when the attempt collects the invoice balance. Example:
     * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". object.last_payment_error (Optional): {@link
     * PaymentErrorSummary}. Why the payment failed. Present only when status is failed. A summary
     * of why a payment attempt failed, with a normalized error code, a message, the failure time,
     * and remediation. object.payment_intent_id (Optional): string. The payment intent behind this
     * attempt. Absent until payment starts, such as a hosted attempt the buyer hasn't paid yet.
     * Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.rail (Required): string. How the attempt
     * collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Value enum:
     * "card", "ach_debit". object.settled_at (Optional): string. When this attempt first settled
     * successfully. Duplicate payment notifications preserve this timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.started_at (Optional): string. When the attempt was
     * created. Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required):
     * string. Current payment attempt status. succeeded means this attempt completed successfully,
     * even if the invoice still has an outstanding balance. invoice_payment_attempt.succeeded
     * reports that completion. Value enum: "open", "succeeded", "failed", "canceled", "expired",
     * "processing". object.updated_at (Required): string. When this attempt last changed.
     * Duplicate payment notifications preserve this timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * canceled_at (Optional): string. When the attempt was canceled. An attempt canceled with
         * its checkout session before payment started may not have it. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". cancellation_requested_at (Optional): string. When cancellation
         * of this attempt was last requested. It stays set when the payment processor refuses the
         * cancellation or the payment settles first, so read status and canceled_at for the
         * outcome. Format: date-time. Example: "2026-08-02T16:00:00Z". checkout_session_id
         * (Optional): string. The hosted or headless checkout session the buyer pays through.
         * Absent for automatic charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
         * expected_amount_money (Required): {@link MoneyValue}. The amount this attempt collects:
         * the outstanding balance, or the targeted schedule entry's outstanding amount. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code. expires_at
         * (Optional): string. When a checkout attempt expires, matching its checkout session.
         * Absent for automatic charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * invoice_id (Required): string. The invoice this attempt collects. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_payment_attempt_id (Required): string. Flint
         * invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX".
         * invoice_schedule_entry_id (Optional): string. The schedule entry this attempt collects.
         * Absent when the attempt collects the invoice balance. Example:
         * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". last_payment_error (Optional): {@link
         * PaymentErrorSummary}. Why the payment failed. Present only when status is failed. A
         * summary of why a payment attempt failed, with a normalized error code, a message, the
         * failure time, and remediation. payment_intent_id (Optional): string. The payment intent
         * behind this attempt. Absent until payment starts, such as a hosted attempt the buyer
         * hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". rail (Required): string. How
         * the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit.
         * Value enum: "card", "ach_debit". settled_at (Optional): string. When this attempt first
         * settled successfully. Duplicate payment notifications preserve this timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". started_at (Optional): string. When the
         * attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z". status
         * (Required): string. Current payment attempt status. succeeded means this attempt
         * completed successfully, even if the invoice still has an outstanding balance.
         * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
         * "succeeded", "failed", "canceled", "expired", "processing". updated_at (Required):
         * string. When this attempt last changed. Duplicate payment notifications preserve this
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * When the attempt was canceled. An attempt canceled with its checkout session before
             * payment started may not have it. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "canceled_at"?: string;
            /**
             * When cancellation of this attempt was last requested. It stays set when the payment
             * processor refuses the cancellation or the payment settles first, so read status and
             * canceled_at for the outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "cancellation_requested_at"?: string;
            /**
             * The hosted or headless checkout session the buyer pays through. Absent for automatic
             * charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "checkout_session_id"?: string;
            /**
             * The amount this attempt collects: the outstanding balance, or the targeted schedule
             * entry's outstanding amount. Monetary amount represented as integer minor units plus
             * an ISO 4217 currency code.
             */
            "expected_amount_money": MoneyValue;
            /**
             * When a checkout attempt expires, matching its checkout session. Absent for automatic
             * charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "expires_at"?: string;
            /** The invoice this attempt collects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
            "invoice_id": string;
            /** Flint invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX". */
            "invoice_payment_attempt_id": string;
            /**
             * The schedule entry this attempt collects. Absent when the attempt collects the
             * invoice balance. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
             */
            "invoice_schedule_entry_id"?: string;
            /**
             * Why the payment failed. Present only when status is failed. A summary of why a
             * payment attempt failed, with a normalized error code, a message, the failure time,
             * and remediation.
             */
            "last_payment_error"?: PaymentErrorSummary;
            /**
             * The payment intent behind this attempt. Absent until payment starts, such as a
             * hosted attempt the buyer hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_id"?: string;
            /**
             * How the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH
             * debit. Value enum: "card", "ach_debit".
             */
            "rail": "card" | "ach_debit" | (string & {});
            /**
             * When this attempt first settled successfully. Duplicate payment notifications
             * preserve this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "settled_at"?: string;
            /** When the attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "started_at"?: string;
            /**
             * Current payment attempt status. succeeded means this attempt completed successfully,
             * even if the invoice still has an outstanding balance.
             * invoice_payment_attempt.succeeded reports that completion. Value enum: "open",
             * "succeeded", "failed", "canceled", "expired", "processing".
             */
            "status": "open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {});
            /**
             * When this attempt last changed. Duplicate payment notifications preserve this
             * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<InvoicePaymentAttempt>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "invoice_payment_attempt.succeeded". */
    "event_type"?: "invoice_payment_attempt.succeeded";
});
/**
 * The invoice due-date policy resolved at write time. The object can be sent back when updating a
 * draft.
 */
export type InvoicePaymentDue = ({
    /**
     * Calendar due date in YYYY-MM-DD format, interpreted in the invoice timezone (UTC when
     * absent). Present only with date. The top-level due_date is the effective due date for every
     * type. Format: date. Example: "2026-08-02".
     */
    "due_date"?: string;
    /**
     * The payment term applied, captured in payment_terms_snapshot. Present only with
     * payment_terms. Example: "ipt_01KEZF7C0064N1V301BBMQ37R4".
     */
    "invoice_payment_term_id"?: string;
    /** How the due date was set. Value enum: "none", "date", "payment_terms". */
    "type": "none" | "date" | "payment_terms" | (string & {});
})
    & ((Exclude<InvoicePaymentDueNone & object, readonly unknown[]>)
    | (Exclude<InvoicePaymentDueDate & object, readonly unknown[]>)
    | (Exclude<InvoicePaymentDuePaymentTerms & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `date` variant of `InvoicePaymentDue`. */
export type InvoicePaymentDueDate = ({
    /**
     * Calendar due date in YYYY-MM-DD format, interpreted in the invoice timezone (UTC when
     * absent). Present only with date. The top-level due_date is the effective due date for every
     * type. Format: date. Example: "2026-08-02".
     */
    "due_date": string;
    /**
     * The payment term applied, captured in payment_terms_snapshot. Present only with
     * payment_terms. Example: "ipt_01KEZF7C0064N1V301BBMQ37R4".
     */
    "invoice_payment_term_id"?: string;
    /** How the due date was set. Value enum: "date". */
    "type": "date" | (string & {});
})
    & (({
    /** Value enum: "date". */
    "type"?: "date" | (string & {});
    /**
     * Calendar due date in YYYY-MM-DD format, interpreted in the invoice timezone (UTC when
     * absent). Present only with date. The top-level due_date is the effective due date for every
     * type. Format: date. Example: "2026-08-02".
     */
    "due_date": string;
}));
/** The `customer_default` variant of `InvoicePaymentDueInput`. */
export type InvoicePaymentDueInputCustomerDefault = ({
    /**
     * Calendar due date in YYYY-MM-DD format, interpreted in the invoice timezone (UTC when
     * absent). Required with date and not accepted with any other type. The date must be today or
     * later when creating or updating a draft. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "due_date"?: string;
    /**
     * The active payment term to apply. Required with payment_terms and not accepted with any
     * other type. minLength: 1. Example: "ipt_01KEZF7C0064N1V301BBMQ37R4".
     */
    "invoice_payment_term_id"?: string;
    /**
     * How the due date is set. customer_default and merchant_default resolve when the draft is
     * written, and reads return the resolved type. Sending payment_terms on a draft captures the
     * term's current revision again. Value enum: "customer_default".
     */
    "type": "customer_default" | (string & {});
})
    & (({
    /** Value enum: "customer_default". */
    "type"?: "customer_default" | (string & {});
}));
/** The `customer_default` variant of `InvoicePaymentDueInput`. */
export type InvoicePaymentDueInputCustomerDefaultInput = ({
    /**
     * Calendar due date in YYYY-MM-DD format, interpreted in the invoice timezone (UTC when
     * absent). Required with date and not accepted with any other type. The date must be today or
     * later when creating or updating a draft. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "due_date"?: string;
    /**
     * The active payment term to apply. Required with payment_terms and not accepted with any
     * other type. minLength: 1. Example: "ipt_01KEZF7C0064N1V301BBMQ37R4".
     */
    "invoice_payment_term_id"?: string;
    /**
     * How the due date is set. customer_default and merchant_default resolve when the draft is
     * written, and reads return the resolved type. Sending payment_terms on a draft captures the
     * term's current revision again. Value enum: "customer_default".
     */
    "type": "customer_default";
})
    & (({
    /** Value enum: "customer_default". */
    "type"?: "customer_default";
})
    & (({
    "due_date"?: never;
}) & ({
    "invoice_payment_term_id"?: never;
})));
/** The `date` variant of `InvoicePaymentDueInput`. */
export type InvoicePaymentDueInputDateInput = ({
    /**
     * Calendar due date in YYYY-MM-DD format, interpreted in the invoice timezone (UTC when
     * absent). Required with date and not accepted with any other type. The date must be today or
     * later when creating or updating a draft. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "due_date": string;
    /**
     * The active payment term to apply. Required with payment_terms and not accepted with any
     * other type. minLength: 1. Example: "ipt_01KEZF7C0064N1V301BBMQ37R4".
     */
    "invoice_payment_term_id"?: string;
    /**
     * How the due date is set. customer_default and merchant_default resolve when the draft is
     * written, and reads return the resolved type. Sending payment_terms on a draft captures the
     * term's current revision again. Value enum: "date".
     */
    "type": "date";
})
    & (({
    /** Value enum: "date". */
    "type"?: "date";
    /**
     * Calendar due date in YYYY-MM-DD format, interpreted in the invoice timezone (UTC when
     * absent). Required with date and not accepted with any other type. The date must be today or
     * later when creating or updating a draft. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "due_date": string;
})
    & ({
    "invoice_payment_term_id"?: never;
}));
/** The `merchant_default` variant of `InvoicePaymentDueInput`. */
export type InvoicePaymentDueInputMerchantDefault = ({
    /**
     * Calendar due date in YYYY-MM-DD format, interpreted in the invoice timezone (UTC when
     * absent). Required with date and not accepted with any other type. The date must be today or
     * later when creating or updating a draft. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "due_date"?: string;
    /**
     * The active payment term to apply. Required with payment_terms and not accepted with any
     * other type. minLength: 1. Example: "ipt_01KEZF7C0064N1V301BBMQ37R4".
     */
    "invoice_payment_term_id"?: string;
    /**
     * How the due date is set. customer_default and merchant_default resolve when the draft is
     * written, and reads return the resolved type. Sending payment_terms on a draft captures the
     * term's current revision again. Value enum: "merchant_default".
     */
    "type": "merchant_default" | (string & {});
})
    & (({
    /** Value enum: "merchant_default". */
    "type"?: "merchant_default" | (string & {});
}));
/** The `merchant_default` variant of `InvoicePaymentDueInput`. */
export type InvoicePaymentDueInputMerchantDefaultInput = ({
    /**
     * Calendar due date in YYYY-MM-DD format, interpreted in the invoice timezone (UTC when
     * absent). Required with date and not accepted with any other type. The date must be today or
     * later when creating or updating a draft. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "due_date"?: string;
    /**
     * The active payment term to apply. Required with payment_terms and not accepted with any
     * other type. minLength: 1. Example: "ipt_01KEZF7C0064N1V301BBMQ37R4".
     */
    "invoice_payment_term_id"?: string;
    /**
     * How the due date is set. customer_default and merchant_default resolve when the draft is
     * written, and reads return the resolved type. Sending payment_terms on a draft captures the
     * term's current revision again. Value enum: "merchant_default".
     */
    "type": "merchant_default";
})
    & (({
    /** Value enum: "merchant_default". */
    "type"?: "merchant_default";
})
    & (({
    "due_date"?: never;
}) & ({
    "invoice_payment_term_id"?: never;
})));
/** The `none` variant of `InvoicePaymentDueInput`. */
export type InvoicePaymentDueInputNoneInput = ({
    /**
     * Calendar due date in YYYY-MM-DD format, interpreted in the invoice timezone (UTC when
     * absent). Required with date and not accepted with any other type. The date must be today or
     * later when creating or updating a draft. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "due_date"?: string;
    /**
     * The active payment term to apply. Required with payment_terms and not accepted with any
     * other type. minLength: 1. Example: "ipt_01KEZF7C0064N1V301BBMQ37R4".
     */
    "invoice_payment_term_id"?: string;
    /**
     * How the due date is set. customer_default and merchant_default resolve when the draft is
     * written, and reads return the resolved type. Sending payment_terms on a draft captures the
     * term's current revision again. Value enum: "none".
     */
    "type": "none";
})
    & (({
    /** Value enum: "none". */
    "type"?: "none";
})
    & (({
    "due_date"?: never;
}) & ({
    "invoice_payment_term_id"?: never;
})));
/** The `payment_terms` variant of `InvoicePaymentDueInput`. */
export type InvoicePaymentDueInputPaymentTermsInput = ({
    /**
     * Calendar due date in YYYY-MM-DD format, interpreted in the invoice timezone (UTC when
     * absent). Required with date and not accepted with any other type. The date must be today or
     * later when creating or updating a draft. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "due_date"?: string;
    /**
     * The active payment term to apply. Required with payment_terms and not accepted with any
     * other type. minLength: 1. Example: "ipt_01KEZF7C0064N1V301BBMQ37R4".
     */
    "invoice_payment_term_id": string;
    /**
     * How the due date is set. customer_default and merchant_default resolve when the draft is
     * written, and reads return the resolved type. Sending payment_terms on a draft captures the
     * term's current revision again. Value enum: "payment_terms".
     */
    "type": "payment_terms";
})
    & (({
    /** Value enum: "payment_terms". */
    "type"?: "payment_terms";
    /**
     * The active payment term to apply. Required with payment_terms and not accepted with any
     * other type. minLength: 1. Example: "ipt_01KEZF7C0064N1V301BBMQ37R4".
     */
    "invoice_payment_term_id": string;
})
    & ({
    "due_date"?: never;
}));
/** The `none` variant of `InvoicePaymentDue`. */
export type InvoicePaymentDueNone = ({
    /**
     * Calendar due date in YYYY-MM-DD format, interpreted in the invoice timezone (UTC when
     * absent). Present only with date. The top-level due_date is the effective due date for every
     * type. Format: date. Example: "2026-08-02".
     */
    "due_date"?: string;
    /**
     * The payment term applied, captured in payment_terms_snapshot. Present only with
     * payment_terms. Example: "ipt_01KEZF7C0064N1V301BBMQ37R4".
     */
    "invoice_payment_term_id"?: string;
    /** How the due date was set. Value enum: "none". */
    "type": "none" | (string & {});
})
    & (({
    /** Value enum: "none". */
    "type"?: "none" | (string & {});
}));
/** The `payment_terms` variant of `InvoicePaymentDue`. */
export type InvoicePaymentDuePaymentTerms = ({
    /**
     * Calendar due date in YYYY-MM-DD format, interpreted in the invoice timezone (UTC when
     * absent). Present only with date. The top-level due_date is the effective due date for every
     * type. Format: date. Example: "2026-08-02".
     */
    "due_date"?: string;
    /**
     * The payment term applied, captured in payment_terms_snapshot. Present only with
     * payment_terms. Example: "ipt_01KEZF7C0064N1V301BBMQ37R4".
     */
    "invoice_payment_term_id": string;
    /** How the due date was set. Value enum: "payment_terms". */
    "type": "payment_terms" | (string & {});
})
    & (({
    /** Value enum: "payment_terms". */
    "type"?: "payment_terms" | (string & {});
    /**
     * The payment term applied, captured in payment_terms_snapshot. Present only with
     * payment_terms. Example: "ipt_01KEZF7C0064N1V301BBMQ37R4".
     */
    "invoice_payment_term_id": string;
}));
/**
 * When an invoice is due, used when creating or updating an invoice: no due date, a calendar date,
 * payment terms, or a default.
 */
export type InvoicePaymentDueRequest = ({
    /**
     * Calendar due date in YYYY-MM-DD format, interpreted in the invoice timezone (UTC when
     * absent). Required with date and not accepted with any other type. The date must be today or
     * later when creating or updating a draft. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "due_date"?: string;
    /**
     * The active payment term to apply. Required with payment_terms and not accepted with any
     * other type. minLength: 1. Example: "ipt_01KEZF7C0064N1V301BBMQ37R4".
     */
    "invoice_payment_term_id"?: string;
    /**
     * How the due date is set. customer_default and merchant_default resolve when the draft is
     * written, and reads return the resolved type. Sending payment_terms on a draft captures the
     * term's current revision again. Value enum: "none", "date", "payment_terms",
     * "customer_default", "merchant_default".
     */
    "type": "none" | "date" | "payment_terms" | "customer_default" | "merchant_default" | (string & {});
})
    & ((Exclude<InvoicePaymentDueNone & object, readonly unknown[]>)
    | (Exclude<InvoicePaymentDueDate & object, readonly unknown[]>)
    | (Exclude<InvoicePaymentDuePaymentTerms & object, readonly unknown[]>)
    | (Exclude<InvoicePaymentDueInputCustomerDefault & object, readonly unknown[]>)
    | (Exclude<InvoicePaymentDueInputMerchantDefault & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * When an invoice is due, used when creating or updating an invoice: no due date, a calendar date,
 * payment terms, or a default.
 */
export type InvoicePaymentDueRequestInput = ({
    /**
     * Calendar due date in YYYY-MM-DD format, interpreted in the invoice timezone (UTC when
     * absent). Required with date and not accepted with any other type. The date must be today or
     * later when creating or updating a draft. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "due_date"?: string;
    /**
     * The active payment term to apply. Required with payment_terms and not accepted with any
     * other type. minLength: 1. Example: "ipt_01KEZF7C0064N1V301BBMQ37R4".
     */
    "invoice_payment_term_id"?: string;
    /**
     * How the due date is set. customer_default and merchant_default resolve when the draft is
     * written, and reads return the resolved type. Sending payment_terms on a draft captures the
     * term's current revision again. Value enum: "none", "date", "payment_terms",
     * "customer_default", "merchant_default".
     */
    "type": "none" | "date" | "payment_terms" | "customer_default" | "merchant_default";
})
    & ((Exclude<InvoicePaymentDueInputNoneInput & object, readonly unknown[]>)
    | (Exclude<InvoicePaymentDueInputDateInput & object, readonly unknown[]>)
    | (Exclude<InvoicePaymentDueInputPaymentTermsInput & object, readonly unknown[]>)
    | (Exclude<InvoicePaymentDueInputCustomerDefaultInput & object, readonly unknown[]>)
    | (Exclude<InvoicePaymentDueInputMerchantDefaultInput & object, readonly unknown[]>));
/**
 * Compares two payment options on an invoice and shows the estimated savings from the lower-cost
 * option.
 */
export type InvoicePaymentOptionCostComparison = {
    /**
     * Payment option used as the baseline for estimated_savings_money. Value enum: "card",
     * "apple_pay", "google_pay", "affirm", "ach_debit".
     */
    "compared_with_payment_option": "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | (string & {});
    /**
     * Estimated savings for the merchant, as a positive amount. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "estimated_savings_money": MoneyValue;
    /**
     * Payment option estimated to cost the merchant less for this invoice. Value enum: "card",
     * "apple_pay", "google_pay", "affirm", "ach_debit".
     */
    "lower_cost_payment_option": "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | (string & {});
};
/** The largest invoice total allowed for a payment option. */
export type InvoicePaymentOptionLimit = {
    /**
     * The largest invoice total, in this currency, for which Flint offers the option. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_total_money": MoneyValue;
    /**
     * The payment option this cap applies to. Value enum: "card", "apple_pay", "google_pay",
     * "affirm", "ach_debit".
     */
    "payment_option": "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | (string & {});
};
/** The largest invoice total allowed for a payment option. */
export type InvoicePaymentOptionLimitRequestInput = {
    /**
     * The largest invoice total, in this currency, for which Flint offers the option. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_total_money": MoneyValueInput;
    /**
     * The payment option this cap applies to. Value enum: "card", "apple_pay", "google_pay",
     * "affirm", "ach_debit".
     */
    "payment_option": "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit";
};
/**
 * Which payment options an invoice accepts, any per-option total limits, and whether to show a
 * cost comparison.
 */
export type InvoicePaymentPolicy = {
    /**
     * The payment options the buyer can use on the hosted invoice page. Send at least one.
     * maxItems: 5. uniqueItems: true. [] enum: "card", "apple_pay", "google_pay", "affirm",
     * "ach_debit". [] (Value): string. Value enum: "card", "apple_pay", "google_pay", "affirm",
     * "ach_debit".
     */
    "enabled_payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | (string & {})>;
    /**
     * Caps by payment option and currency. Flint doesn't offer an option when the invoice total in
     * that currency is above its max_total_money. maxItems: 100. [] (Value): {@link
     * InvoicePaymentOptionLimit}. The largest invoice total allowed for a payment option.
     */
    "payment_option_limits"?: Array<InvoicePaymentOptionLimit>;
    /**
     * Whether the buyer's invoice shows the estimated savings of a lower-cost payment option.
     * Requires ach_debit and at least one of card, apple_pay, or google_pay.
     */
    "show_cost_comparison"?: boolean;
};
/**
 * Which payment options an invoice accepts, any per-option total limits, and whether to show a
 * cost comparison.
 */
export type InvoicePaymentPolicyRequestInput = {
    /**
     * The payment options the buyer can use on the hosted invoice page. Send at least one.
     * maxItems: 5. uniqueItems: true. [] enum: "card", "apple_pay", "google_pay", "affirm",
     * "ach_debit". [] (Value): string. Value enum: "card", "apple_pay", "google_pay", "affirm",
     * "ach_debit".
     */
    "enabled_payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit">;
    /**
     * Caps by payment option and currency. Flint doesn't offer an option when the invoice total in
     * that currency is above its max_total_money. maxItems: 100. [] (Value): {@link
     * InvoicePaymentOptionLimitRequestInput}. The largest invoice total allowed for a payment
     * option.
     */
    "payment_option_limits"?: Array<InvoicePaymentOptionLimitRequestInput>;
    /**
     * Whether the buyer's invoice shows the estimated savings of a lower-cost payment option.
     * Requires ach_debit and at least one of card, apple_pay, or google_pay.
     */
    "show_cost_comparison"?: boolean;
};
/** The payment timing agreed for an invoice. */
export type InvoicePaymentTerm = {
    /**
     * Rule used to calculate the invoice's due date when it is issued. How an invoice due date is
     * calculated from payment terms, such as on receipt, net days, or a day of the month.
     */
    "calculation": InvoicePaymentTermCalculation;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * ID of the payment term captured on this invoice. Example: "ipt_01KEZF7C0064N1V301BBMQ37R4".
     */
    "invoice_payment_term_id": string;
    /**
     * One-time late fee policy captured with this term. Absent when no late fee policy applies. A
     * late fee for overdue invoices: a fixed amount or a percentage, a grace period in days, and
     * whether Flint applies it automatically.
     */
    "late_fee_policy"?: InvoiceLateFeePolicy;
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /** Name of the payment term shown on invoices. */
    "name": string;
    /**
     * Whether the term can be selected for new invoices. Archiving preserves terms captured on
     * existing invoices. Value enum: "active", "archived".
     */
    "status": "active" | "archived" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. Format: int32.
     */
    "version": number;
};
/**
 * How an invoice due date is calculated from payment terms, such as on receipt, net days, or a day
 * of the month.
 */
export type InvoicePaymentTermCalculation = ({
    /**
     * Day of the month. Later days clamp to the last day of the month. Format: int32. minimum: 1.
     * maximum: 31.
     */
    "day"?: number;
    /**
     * Calendar days after issue for net_days, or after the issue month's last day for
     * days_after_month_end. Required only for those types. Format: int32. minimum: 0. maximum:
     * 365.
     */
    "days"?: number;
    /**
     * How issue calculates the invoice's due date in the invoice timezone. Value enum:
     * "on_receipt", "net_days", "day_of_month", "day_of_next_month", "days_after_month_end".
     */
    "type": "on_receipt"
        | "net_days"
        | "day_of_month"
        | "day_of_next_month"
        | "days_after_month_end"
        | (string & {});
})
    & ((Exclude<InvoicePaymentTermCalculationOnReceipt & object, readonly unknown[]>)
    | (Exclude<InvoicePaymentTermCalculationNetDays & object, readonly unknown[]>)
    | (Exclude<InvoicePaymentTermCalculationDaysAfterMonthEnd & object, readonly unknown[]>)
    | (Exclude<InvoicePaymentTermCalculationDayOfMonth & object, readonly unknown[]>)
    | (Exclude<InvoicePaymentTermCalculationDayOfNextMonth & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `day_of_month` variant of `InvoicePaymentTermCalculation`. */
export type InvoicePaymentTermCalculationDayOfMonth = ({
    /**
     * Day of the month. Later days clamp to the last day of the month. Format: int32. minimum: 1.
     * maximum: 31.
     */
    "day": number;
    /**
     * Calendar days after issue for net_days, or after the issue month's last day for
     * days_after_month_end. Required only for those types. Format: int32. minimum: 0. maximum:
     * 365.
     */
    "days"?: number;
    /**
     * How issue calculates the invoice's due date in the invoice timezone. Value enum:
     * "day_of_month".
     */
    "type": "day_of_month" | (string & {});
})
    & (({
    /**
     * How issue calculates the invoice's due date in the invoice timezone. Value enum:
     * "day_of_month".
     */
    "type": "day_of_month" | (string & {});
    /**
     * Day of the month. Later days clamp to the last day of the month. Format: int32. minimum: 1.
     * maximum: 31.
     */
    "day": number;
}));
/** The `day_of_month` variant of `InvoicePaymentTermCalculation`. */
export type InvoicePaymentTermCalculationDayOfMonthRequestInput = ({
    /**
     * Day of the month. Later days clamp to the last day of the month. Format: int32. minimum: 1.
     * maximum: 31.
     */
    "day": number;
    /**
     * Calendar days after issue for net_days, or after the issue month's last day for
     * days_after_month_end. Required only for those types. Format: int32. minimum: 0. maximum:
     * 365.
     */
    "days"?: number;
    /**
     * How issue calculates the invoice's due date in the invoice timezone. Value enum:
     * "day_of_month".
     */
    "type": "day_of_month";
})
    & (({
    /**
     * How issue calculates the invoice's due date in the invoice timezone. Value enum:
     * "day_of_month".
     */
    "type": "day_of_month";
    /**
     * Day of the month. Later days clamp to the last day of the month. Format: int32. minimum: 1.
     * maximum: 31.
     */
    "day": number;
})
    & ({
    "days"?: never;
}));
/** The `day_of_next_month` variant of `InvoicePaymentTermCalculation`. */
export type InvoicePaymentTermCalculationDayOfNextMonth = ({
    /**
     * Day of the month. Later days clamp to the last day of the month. Format: int32. minimum: 1.
     * maximum: 31.
     */
    "day": number;
    /**
     * Calendar days after issue for net_days, or after the issue month's last day for
     * days_after_month_end. Required only for those types. Format: int32. minimum: 0. maximum:
     * 365.
     */
    "days"?: number;
    /**
     * How issue calculates the invoice's due date in the invoice timezone. Value enum:
     * "day_of_next_month".
     */
    "type": "day_of_next_month" | (string & {});
})
    & (({
    /**
     * How issue calculates the invoice's due date in the invoice timezone. Value enum:
     * "day_of_next_month".
     */
    "type": "day_of_next_month" | (string & {});
    /**
     * Day of the month. Later days clamp to the last day of the month. Format: int32. minimum: 1.
     * maximum: 31.
     */
    "day": number;
}));
/** The `day_of_next_month` variant of `InvoicePaymentTermCalculation`. */
export type InvoicePaymentTermCalculationDayOfNextMonthRequestInput = ({
    /**
     * Day of the month. Later days clamp to the last day of the month. Format: int32. minimum: 1.
     * maximum: 31.
     */
    "day": number;
    /**
     * Calendar days after issue for net_days, or after the issue month's last day for
     * days_after_month_end. Required only for those types. Format: int32. minimum: 0. maximum:
     * 365.
     */
    "days"?: number;
    /**
     * How issue calculates the invoice's due date in the invoice timezone. Value enum:
     * "day_of_next_month".
     */
    "type": "day_of_next_month";
})
    & (({
    /**
     * How issue calculates the invoice's due date in the invoice timezone. Value enum:
     * "day_of_next_month".
     */
    "type": "day_of_next_month";
    /**
     * Day of the month. Later days clamp to the last day of the month. Format: int32. minimum: 1.
     * maximum: 31.
     */
    "day": number;
})
    & ({
    "days"?: never;
}));
/** The `days_after_month_end` variant of `InvoicePaymentTermCalculation`. */
export type InvoicePaymentTermCalculationDaysAfterMonthEnd = ({
    /**
     * Day of the month. Later days clamp to the last day of the month. Format: int32. minimum: 1.
     * maximum: 31.
     */
    "day"?: number;
    /**
     * Calendar days after issue for net_days, or after the issue month's last day for
     * days_after_month_end. Required only for those types. Format: int32. minimum: 0. maximum:
     * 365.
     */
    "days": number;
    /**
     * How issue calculates the invoice's due date in the invoice timezone. Value enum:
     * "days_after_month_end".
     */
    "type": "days_after_month_end" | (string & {});
})
    & (({
    /**
     * How issue calculates the invoice's due date in the invoice timezone. Value enum:
     * "days_after_month_end".
     */
    "type": "days_after_month_end" | (string & {});
    /**
     * Calendar days after issue for net_days, or after the issue month's last day for
     * days_after_month_end. Required only for those types. Format: int32. minimum: 0. maximum:
     * 365.
     */
    "days": number;
}));
/** The `days_after_month_end` variant of `InvoicePaymentTermCalculation`. */
export type InvoicePaymentTermCalculationDaysAfterMonthEndRequestInput = ({
    /**
     * Day of the month. Later days clamp to the last day of the month. Format: int32. minimum: 1.
     * maximum: 31.
     */
    "day"?: number;
    /**
     * Calendar days after issue for net_days, or after the issue month's last day for
     * days_after_month_end. Required only for those types. Format: int32. minimum: 0. maximum:
     * 365.
     */
    "days": number;
    /**
     * How issue calculates the invoice's due date in the invoice timezone. Value enum:
     * "days_after_month_end".
     */
    "type": "days_after_month_end";
})
    & (({
    /**
     * How issue calculates the invoice's due date in the invoice timezone. Value enum:
     * "days_after_month_end".
     */
    "type": "days_after_month_end";
    /**
     * Calendar days after issue for net_days, or after the issue month's last day for
     * days_after_month_end. Required only for those types. Format: int32. minimum: 0. maximum:
     * 365.
     */
    "days": number;
})
    & ({
    "day"?: never;
}));
/** The `net_days` variant of `InvoicePaymentTermCalculation`. */
export type InvoicePaymentTermCalculationNetDays = ({
    /**
     * Day of the month. Later days clamp to the last day of the month. Format: int32. minimum: 1.
     * maximum: 31.
     */
    "day"?: number;
    /**
     * Calendar days after issue for net_days, or after the issue month's last day for
     * days_after_month_end. Required only for those types. Format: int32. minimum: 0. maximum:
     * 365.
     */
    "days": number;
    /**
     * How issue calculates the invoice's due date in the invoice timezone. Value enum: "net_days".
     */
    "type": "net_days" | (string & {});
})
    & (({
    /**
     * How issue calculates the invoice's due date in the invoice timezone. Value enum: "net_days".
     */
    "type": "net_days" | (string & {});
    /**
     * Calendar days after issue for net_days, or after the issue month's last day for
     * days_after_month_end. Required only for those types. Format: int32. minimum: 0. maximum:
     * 365.
     */
    "days": number;
}));
/** The `net_days` variant of `InvoicePaymentTermCalculation`. */
export type InvoicePaymentTermCalculationNetDaysRequestInput = ({
    /**
     * Day of the month. Later days clamp to the last day of the month. Format: int32. minimum: 1.
     * maximum: 31.
     */
    "day"?: number;
    /**
     * Calendar days after issue for net_days, or after the issue month's last day for
     * days_after_month_end. Required only for those types. Format: int32. minimum: 0. maximum:
     * 365.
     */
    "days": number;
    /**
     * How issue calculates the invoice's due date in the invoice timezone. Value enum: "net_days".
     */
    "type": "net_days";
})
    & (({
    /**
     * How issue calculates the invoice's due date in the invoice timezone. Value enum: "net_days".
     */
    "type": "net_days";
    /**
     * Calendar days after issue for net_days, or after the issue month's last day for
     * days_after_month_end. Required only for those types. Format: int32. minimum: 0. maximum:
     * 365.
     */
    "days": number;
})
    & ({
    "day"?: never;
}));
/** The `on_receipt` variant of `InvoicePaymentTermCalculation`. */
export type InvoicePaymentTermCalculationOnReceipt = ({
    /**
     * Day of the month. Later days clamp to the last day of the month. Format: int32. minimum: 1.
     * maximum: 31.
     */
    "day"?: number;
    /**
     * Calendar days after issue for net_days, or after the issue month's last day for
     * days_after_month_end. Required only for those types. Format: int32. minimum: 0. maximum:
     * 365.
     */
    "days"?: number;
    /**
     * How issue calculates the invoice's due date in the invoice timezone. Value enum:
     * "on_receipt".
     */
    "type": "on_receipt" | (string & {});
})
    & (({
    /**
     * How issue calculates the invoice's due date in the invoice timezone. Value enum:
     * "on_receipt".
     */
    "type": "on_receipt" | (string & {});
}));
/** The `on_receipt` variant of `InvoicePaymentTermCalculation`. */
export type InvoicePaymentTermCalculationOnReceiptRequestInput = ({
    /**
     * Day of the month. Later days clamp to the last day of the month. Format: int32. minimum: 1.
     * maximum: 31.
     */
    "day"?: number;
    /**
     * Calendar days after issue for net_days, or after the issue month's last day for
     * days_after_month_end. Required only for those types. Format: int32. minimum: 0. maximum:
     * 365.
     */
    "days"?: number;
    /**
     * How issue calculates the invoice's due date in the invoice timezone. Value enum:
     * "on_receipt".
     */
    "type": "on_receipt";
})
    & (({
    /**
     * How issue calculates the invoice's due date in the invoice timezone. Value enum:
     * "on_receipt".
     */
    "type": "on_receipt";
})
    & (({
    "days"?: never;
}) & ({
    "day"?: never;
})));
/**
 * How an invoice due date is calculated from payment terms, such as on receipt, net days, or a day
 * of the month.
 */
export type InvoicePaymentTermCalculationRequestInput = ({
    /**
     * Day of the month. Later days clamp to the last day of the month. Format: int32. minimum: 1.
     * maximum: 31.
     */
    "day"?: number;
    /**
     * Calendar days after issue for net_days, or after the issue month's last day for
     * days_after_month_end. Required only for those types. Format: int32. minimum: 0. maximum:
     * 365.
     */
    "days"?: number;
    /**
     * How issue calculates the invoice's due date in the invoice timezone. Value enum:
     * "on_receipt", "net_days", "day_of_month", "day_of_next_month", "days_after_month_end".
     */
    "type": "on_receipt" | "net_days" | "day_of_month" | "day_of_next_month" | "days_after_month_end";
})
    & ((Exclude<InvoicePaymentTermCalculationOnReceiptRequestInput & object, readonly unknown[]>)
    | (Exclude<InvoicePaymentTermCalculationNetDaysRequestInput & object, readonly unknown[]>)
    | (Exclude<InvoicePaymentTermCalculationDaysAfterMonthEndRequestInput & object, readonly unknown[]>)
    | (Exclude<InvoicePaymentTermCalculationDayOfMonthRequestInput & object, readonly unknown[]>)
    | (Exclude<InvoicePaymentTermCalculationDayOfNextMonthRequestInput & object, readonly unknown[]>));
/** A page of `InvoicePaymentTerm` objects. */
export type InvoicePaymentTermListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * InvoicePaymentTerm}. The payment timing agreed for an invoice.
     */
    "data": Array<InvoicePaymentTerm>;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no
     * next page.
     */
    "next_page_token"?: string;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A response containing `InvoicePaymentTerm` data. */
export type InvoicePaymentTermResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The payment timing
     * agreed for an invoice.
     */
    "data": InvoicePaymentTerm;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type InvoicePaymentTermsCreateParams = (InputValue<CreateInvoicePaymentTermRequestInput>)
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type InvoicePaymentTermsDeleteParams = {
    /** Optional version last read by the caller. Format: uint32. minimum: 1. */
    "expected_version"?: InputValue<number>;
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type InvoicePaymentTermsGetParams = DisputesAcceptParams;
export type InvoicePaymentTermsListParams = {
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque, signed next_page_token from the previous response, bound to the list and caller.
     * Omit on the first request. You may change `page_size` between pages. Reuse it with the same
     * endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered,
     * invalid, expired, or mismatched token returns a validation error.
     */
    "page_token"?: InputValue<string>;
    /**
     * Filter by status. Omitted, the list leaves out archived rows; name archived to include them.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "active",
     * "archived". Value enum: "active", "archived". anyOf[1] (Value): Array of string. minItems:
     * 1. [] enum: "active", "archived". anyOf[1][] (Value): string. Value enum: "active",
     * "archived". anyOf[2] (Value): string. Value enum: "active", "archived".
     */
    "status"?: InputValue<("active" | "archived") | readonly ("active" | "archived")[]>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Search across invoice payment term ID, external reference ID, and name. Text fields match
     * any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from
     * the start and need the type prefix, such as ipt_01.
     */
    "query"?: InputValue<string>;
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
/**
 * The payment terms saved on an invoice: the term's name, version, due date calculation, and late
 * fee policy.
 */
export type InvoicePaymentTermsSnapshot = {
    /**
     * Rule used to calculate the invoice's due date when it is issued. How an invoice due date is
     * calculated from payment terms, such as on receipt, net days, or a day of the month.
     */
    "calculation": InvoicePaymentTermCalculation;
    /**
     * ID of the payment term captured on this invoice. Example: "ipt_01KEZF7C0064N1V301BBMQ37R4".
     */
    "invoice_payment_term_id": string;
    /**
     * One-time late fee policy captured with this term. Absent when no late fee policy applies. A
     * late fee for overdue invoices: a fixed amount or a percentage, a grace period in days, and
     * whether Flint applies it automatically.
     */
    "late_fee_policy"?: InvoiceLateFeePolicy;
    /** Name of the payment term shown on invoices. */
    "name": string;
    /** Version of the invoice payment term captured in this snapshot. Format: int32. */
    "version": number;
};
export type InvoicePaymentTermsUpdateParams = (InputValue<UpdateInvoicePaymentTermRequestInput>)
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type InvoiceRefundedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "cc_emails": Array<string>;
            "closed_at"?: string;
            "collection": InvoiceCollection;
            "collection_block_status": "none" | "inventory_blocked" | "resolved" | (string & {});
            "created_at": string;
            "credit_money": MoneyValue;
            "currently_due_money": MoneyValue;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "delivery_mode"?: "email" | "caller_managed" | (string & {});
            "due_date"?: string;
            "external_reference_id": string | null;
            "footer": string | null;
            "invoice_id": string;
            "invoice_number"?: string;
            "is_overdue": boolean;
            "issued_at"?: string;
            "late_fee_money": MoneyValue;
            "late_fees": Array<InvoiceLateFee>;
            "memo": string | null;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "outstanding_money": MoneyValue;
            "paid_at"?: string;
            "paid_money": MoneyValue;
            "payment_due": InvoicePaymentDue;
            "payment_terms_snapshot"?: InvoicePaymentTermsSnapshot;
            "po_number": string | null;
            "public_url"?: string;
            "recipient_email": string | null;
            "reference": string | null;
            "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
            "refunded_money": MoneyValue;
            "reminders_paused": boolean;
            "reminders_paused_at"?: string;
            "remit_to_address"?: Address;
            "schedule_entries": Array<InvoiceScheduleEntry>;
            "scheduled_issue_at": string | null;
            "service_date": string | null;
            "snapshot"?: InvoiceSnapshot;
            "status": "draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {});
            "subscription_id": string | null;
            "supported_actions": Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>;
            "timezone"?: string;
            "total_money": MoneyValue;
            "uncollectible_at"?: string;
            "updated_at": string;
            "version": number;
            "viewed_at"?: string;
            "voided_at"?: string;
            "written_off_money": MoneyValue;
        };
        "previous_attributes"?: Partial<Invoice>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "invoice.refunded";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "cc_emails": Array<string>;
            "closed_at"?: string;
            "collection": InvoiceCollection;
            "collection_block_status": "none" | "inventory_blocked" | "resolved" | (string & {});
            "created_at": string;
            "credit_money": MoneyValue;
            "currently_due_money": MoneyValue;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "delivery_mode"?: "email" | "caller_managed" | (string & {});
            "due_date"?: string;
            "external_reference_id": string | null;
            "footer": string | null;
            "invoice_id": string;
            "invoice_number"?: string;
            "is_overdue": boolean;
            "issued_at"?: string;
            "late_fee_money": MoneyValue;
            "late_fees": Array<InvoiceLateFee>;
            "memo": string | null;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "outstanding_money": MoneyValue;
            "paid_at"?: string;
            "paid_money": MoneyValue;
            "payment_due": InvoicePaymentDue;
            "payment_terms_snapshot"?: InvoicePaymentTermsSnapshot;
            "po_number": string | null;
            "public_url"?: string;
            "recipient_email": string | null;
            "reference": string | null;
            "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
            "refunded_money": MoneyValue;
            "reminders_paused": boolean;
            "reminders_paused_at"?: string;
            "remit_to_address"?: Address;
            "schedule_entries": Array<InvoiceScheduleEntry>;
            "scheduled_issue_at": string | null;
            "service_date": string | null;
            "snapshot"?: InvoiceSnapshot;
            "status": "draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {});
            "subscription_id": string | null;
            "supported_actions": Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>;
            "timezone"?: string;
            "total_money": MoneyValue;
            "uncollectible_at"?: string;
            "updated_at": string;
            "version": number;
            "viewed_at"?: string;
            "voided_at"?: string;
            "written_off_money": MoneyValue;
        };
        "previous_attributes"?: Partial<Invoice>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "invoice.refunded";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "invoice.refunded";
});
/**
 * The `invoice.refunded` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type InvoiceRefundedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `public_url`. object.cc_emails (Required): Array of string. Additional recipients
     * copied on the invoice email and every reminder. object.cc_emails[] (Value): string.
     * object.closed_at (Optional): string. When the current closed interval began. Cleared when
     * status returns to open or partially_paid. A direct move between closed statuses preserves
     * this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.collection
     * (Required): {@link InvoiceCollection}. How this invoice is collected, resolved when the
     * draft is written. Send this object back when updating its collection policy. The invoice
     * collection policy resolved at write time. The object can be sent back when updating a draft.
     * object.collection_block_status (Required): string. Whether collection is blocked. While it
     * is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED with
     * details[0].reason inventory_wait. Value enum: "none", "inventory_blocked", "resolved".
     * object.created_at (Required): string. When the invoice was created. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.credit_money (Required): {@link MoneyValue}. Credit
     * note credit allocated to this invoice, minus reversed allocations. Unallocated credit isn't
     * included. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.currently_due_money (Required): {@link MoneyValue}. The part of the balance due now.
     * Without schedule_entries, it equals outstanding_money. With schedule_entries, it is the
     * outstanding amount of the first entry, in schedule order, whose due date has started and
     * that still has a balance, or 0 when there is none. It is the amount the next collect call or
     * checkout session charges. To total everything overdue, add the outstanding_money of the
     * entries whose status is overdue. Always 0 unless the invoice is open or partially_paid.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.customer (Optional): {@link ExpandedCustomerSummary} or null. Summary of the billed
     * customer. Returned only with expand=customer. Present only when `expand` includes
     * `customer`; `null` when expanded and there is no related customer. object.customer.anyOf[1]
     * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of
     * a customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Optional): string. Customer billed by this invoice. Absent when the
     * invoice has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.delivery_mode
     * (Optional): string. How issue delivered the invoice. Value enum: "email", "caller_managed".
     * object.due_date (Optional): string. Calendar due date in YYYY-MM-DD format, interpreted in
     * timezone (UTC when absent). The outstanding balance becomes overdue only after this date
     * ends. Automatic collection runs at the later of issue and the start of this date. With
     * payment terms, issue computes this date from issued_at. Absent when there is no due date.
     * Format: date. Example: "2026-08-02". object.external_reference_id (Required): string or
     * null. Caller-owned identifier for this resource in an external system. Use it as your sync
     * key: it isn't printed on the invoice. `null` when unset. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842". object.footer (Required): string or null. Fine print at the
     * bottom of the invoice and PDF. It cannot change after issue. `null` when unset.
     * object.invoice_id (Required): string. Flint invoice ID. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.invoice_number (Optional): string. Sequential
     * document number assigned when the invoice is issued. Numbering is per merchant, with test
     * and live mode numbered independently. object.is_overdue (Required): boolean. Whether the
     * invoice is open or partially_paid and past due with a balance remaining. Without
     * schedule_entries, the due_date has ended in timezone (UTC when absent) and outstanding_money
     * is above zero; with them, at least one entry is overdue. Computed when the invoice is read.
     * object.issued_at (Optional): string. When the invoice was issued. Absent on a draft. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.late_fee_money (Required): {@link
     * MoneyValue}. Late fees assessed after issue, minus waivers, including amounts since paid or
     * written off. Itemized in late_fees. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. object.late_fees (Required): Array of {@link InvoiceLateFee}.
     * Late fees assessed on this invoice, each with its paid, waived, written-off, and outstanding
     * amounts. late_fee_money is their assessed total minus waivers. object.late_fees[] (Value):
     * {@link InvoiceLateFee}. A charge assessed because an invoice payment is overdue. object.memo
     * (Required): string or null. Message to the customer, printed on the invoice and PDF. It
     * cannot change after issue. `null` when unset. object.merchant_id (Required): string.
     * Merchant that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata
     * (Optional): {@link MetadataMap}. Caller-owned metadata. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null. Summary
     * of the backing order. Returned only with expand=order. Present only when `expand` includes
     * `order`; `null` when expanded and there is no related order. object.order.anyOf[1] (Value):
     * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Required): string. The order this
     * invoice bills. Every invoice has one; quick pay creates it. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.outstanding_money (Required): {@link MoneyValue}.
     * What is still owed: total_money + late_fee_money - paid_money - credit_money -
     * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
     * invoices; equal to total_money on a draft. Refunds and dispute losses don't change it.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.paid_at (Optional): string. When the invoice most recently became paid. Cleared when
     * status leaves paid and set again on a later paid transition. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.paid_money (Required): {@link MoneyValue}. Payments collected
     * toward this invoice, online or as recorded manual payments, minus reversed payments,
     * including payments toward late fees. Never below zero. Disputes, including losses, don't
     * reduce it. Refunds don't reduce it; they are in refunded_money. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code. object.payment_due (Required): {@link
     * InvoicePaymentDue}. The resolved due-date policy. Send this object back when updating the
     * draft; payment_terms captures the term's current revision again. The invoice due-date policy
     * resolved at write time. The object can be sent back when updating a draft.
     * object.payment_terms_snapshot (Optional): {@link InvoicePaymentTermsSnapshot}. The payment
     * term captured on the draft, with its due date rule and late fee policy. Later changes to the
     * payment term don't affect this invoice. The payment terms saved on an invoice: the term's
     * name, version, due date calculation, and late fee policy. object.po_number (Required):
     * string or null. The buyer's purchase order number, printed on the invoice and PDF. It cannot
     * change after issue. `null` when unset. object.public_url (Optional): string. The hosted
     * invoice link where the buyer views and pays the invoice. Present after issue on API reads,
     * except a list filtered by idempotency_key; webhook payloads leave it out.
     * regenerate-public-link replaces it. Anyone with the link can open the invoice, so treat it
     * as a secret. object.recipient_email (Required): string or null. Where Flint emails the
     * invoice and its reminders. Email delivery requires it at issue. `null` when unset.
     * object.reference (Required): string or null. Your reference for the invoice, printed on the
     * invoice and PDF. The buyer's purchase order number goes in po_number. It cannot change after
     * issue. `null` when unset. object.refund_status (Required): string. How much of the collected
     * money has been refunded. It doesn't change status. Value enum: "none", "partially_refunded",
     * "refunded". object.refunded_money (Required): {@link MoneyValue}. Money refunded to the
     * buyer after collection. Refunds don't reopen the balance; refund_status summarizes them.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.reminders_paused (Required): boolean. Whether automatic reminders are paused. Set
     * reminders_paused on PATCH /v1/invoices/{invoice_id} to change it. object.reminders_paused_at
     * (Optional): string. When automatic reminders were paused. Absent while reminders are active.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.remit_to_address (Optional):
     * {@link Address}. Where the buyer sends offline payments, shown on the invoice. Defaults to
     * the invoice settings remit-to address. A postal address. Every address has country.
     * Addresses Flint checked as complete (customer and saved addresses, merchant, location,
     * invoice, order delivery destination, tax identity, fulfillment recipient and pickup
     * addresses) always have line1 and city, and US ones always have state and postal_code.
     * Delivery quote destinations, buyer locations and postal-code tax locations hold only what
     * was provided, such as postal_code and country. object.schedule_entries (Required): Array of
     * {@link InvoiceScheduleEntry}. The payment schedule, in schedule order. Always [] when the
     * invoice has no schedule and is collected in one balance. object.schedule_entries[] (Value):
     * {@link InvoiceScheduleEntry}. One payment on an invoice's payment schedule, such as a
     * deposit, installment, or balance, with its due time, amounts, and status.
     * object.scheduled_issue_at (Required): string or null. When Flint will issue and deliver this
     * draft. `null` when no issue is scheduled. Cleared when the draft is issued or voided, or
     * when you send null. Format: date-time. Example: "2026-08-02T16:00:00Z". object.service_date
     * (Required): string or null. The calendar date of the billed service, in YYYY-MM-DD format.
     * The invoice and PDF print it as written, without timezone conversion. `null` when unset.
     * Format: date. Example: "2026-08-02". object.snapshot (Optional): {@link InvoiceSnapshot}.
     * The billing content of the invoice: line items, discounts, charges, tip, tax, and totals. A
     * draft previews the backing order; issue freezes it, and later order changes don't reach an
     * issued invoice. A frozen copy of an issued invoice's content, including line items, charges,
     * discounts, tax identities, and pricing amounts. object.status (Required): string. Current
     * invoice status. paid and credited close the current balance and can reopen to open or
     * partially_paid after a payment or credit allocation reversal; invoice.reopened reports that
     * change. An uncollectible invoice accepts manual recovery payments and becomes paid when
     * fully recovered; reversals restore the write-off. voided is final. Refunds change
     * refund_status without reopening the balance. A lost dispute leaves paid_money, the balance,
     * and status unchanged; collecting it again requires a new invoice. Value enum: "draft",
     * "open", "partially_paid", "paid", "voided", "uncollectible", "credited".
     * object.subscription_id (Required): string or null. The subscription the backing order
     * belongs to, copied when the draft is created and never changed. `null` when the order isn't
     * part of a subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". object.supported_actions
     * (Required): Array of string. Lifecycle actions Flint accepts for this resource now, based on
     * stored state. Independent of the caller's permissions; each action still requires its
     * route's scope. Always [] when no action is available. [] enum: "collect", "issue",
     * "mark_uncollectible", "void". object.supported_actions[] (Value): string. Value enum:
     * "collect", "issue", "mark_uncollectible", "void". object.timezone (Optional): string. IANA
     * time zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken from
     * the merchant's timezone when the draft is written, or UTC when unset. Later merchant changes
     * do not alter this invoice's calendar. object.total_money (Required): {@link MoneyValue}.
     * What the issued invoice bills, equal to snapshot.pricing_amounts.total_money. Fixed at
     * issue; a draft previews the backing order total. Late fees are in late_fee_money. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * object.uncollectible_at (Optional): string. When the invoice was marked uncollectible.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.updated_at (Required): string.
     * When the invoice last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Current invoice version. Send this as expected_version
     * when updating the draft. Format: int64. minimum: 1. object.viewed_at (Optional): string.
     * When the buyer first opened the invoice through its hosted invoice link. Recorded on a
     * best-effort basis. Format: date-time. Example: "2026-08-02T16:00:00Z". object.voided_at
     * (Optional): string. When the invoice was voided. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.written_off_money (Required): {@link MoneyValue}. The balance
     * written off when the invoice was marked uncollectible, including unpaid late fees. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `public_url`.
         * cc_emails (Required): Array of string. Additional recipients copied on the invoice email
         * and every reminder. cc_emails[] (Value): string. closed_at (Optional): string. When the
         * current closed interval began. Cleared when status returns to open or partially_paid. A
         * direct move between closed statuses preserves this timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". collection (Required): {@link InvoiceCollection}. How
         * this invoice is collected, resolved when the draft is written. Send this object back
         * when updating its collection policy. The invoice collection policy resolved at write
         * time. The object can be sent back when updating a draft. collection_block_status
         * (Required): string. Whether collection is blocked. While it is inventory_blocked,
         * collection attempts return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait.
         * Value enum: "none", "inventory_blocked", "resolved". created_at (Required): string. When
         * the invoice was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * credit_money (Required): {@link MoneyValue}. Credit note credit allocated to this
         * invoice, minus reversed allocations. Unallocated credit isn't included. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code. currently_due_money
         * (Required): {@link MoneyValue}. The part of the balance due now. Without
         * schedule_entries, it equals outstanding_money. With schedule_entries, it is the
         * outstanding amount of the first entry, in schedule order, whose due date has started and
         * that still has a balance, or 0 when there is none. It is the amount the next collect
         * call or checkout session charges. To total everything overdue, add the outstanding_money
         * of the entries whose status is overdue. Always 0 unless the invoice is open or
         * partially_paid. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. customer (Optional): {@link ExpandedCustomerSummary} or null. Summary of
         * the billed customer. Returned only with expand=customer. Present only when `expand`
         * includes `customer`; `null` when expanded and there is no related customer.
         * customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary fields,
         * returned in place of a customer ID when the customer is expanded. customer.anyOf[2]
         * (Value): null. customer_id (Optional): string. Customer billed by this invoice. Absent
         * when the invoice has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
         * delivery_mode (Optional): string. How issue delivered the invoice. Value enum: "email",
         * "caller_managed". due_date (Optional): string. Calendar due date in YYYY-MM-DD format,
         * interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only
         * after this date ends. Automatic collection runs at the later of issue and the start of
         * this date. With payment terms, issue computes this date from issued_at. Absent when
         * there is no due date. Format: date. Example: "2026-08-02". external_reference_id
         * (Required): string or null. Caller-owned identifier for this resource in an external
         * system. Use it as your sync key: it isn't printed on the invoice. `null` when unset.
         * minLength: 1. maxLength: 255. Example: "warehouse-1842". footer (Required): string or
         * null. Fine print at the bottom of the invoice and PDF. It cannot change after issue.
         * `null` when unset. invoice_id (Required): string. Flint invoice ID. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_number (Optional): string. Sequential document
         * number assigned when the invoice is issued. Numbering is per merchant, with test and
         * live mode numbered independently. is_overdue (Required): boolean. Whether the invoice is
         * open or partially_paid and past due with a balance remaining. Without schedule_entries,
         * the due_date has ended in timezone (UTC when absent) and outstanding_money is above
         * zero; with them, at least one entry is overdue. Computed when the invoice is read.
         * issued_at (Optional): string. When the invoice was issued. Absent on a draft. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". late_fee_money (Required): {@link
         * MoneyValue}. Late fees assessed after issue, minus waivers, including amounts since paid
         * or written off. Itemized in late_fees. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. late_fees (Required): Array of {@link
         * InvoiceLateFee}. Late fees assessed on this invoice, each with its paid, waived,
         * written-off, and outstanding amounts. late_fee_money is their assessed total minus
         * waivers. late_fees[] (Value): {@link InvoiceLateFee}. A charge assessed because an
         * invoice payment is overdue. memo (Required): string or null. Message to the customer,
         * printed on the invoice and PDF. It cannot change after issue. `null` when unset.
         * merchant_id (Required): string. Merchant that owns this invoice. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Caller-owned
         * metadata. Caller-owned key-value data stored on a resource. Keys starting with flint_
         * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput
         * and MetadataPatchInput; maps written before those limits may not satisfy them. order
         * (Optional): {@link ExpandedOrderSummary} or null. Summary of the backing order. Returned
         * only with expand=order. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[2] (Value): null. order_id (Required): string. The order this invoice bills.
         * Every invoice has one; quick pay creates it. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
         * outstanding_money (Required): {@link MoneyValue}. What is still owed: total_money +
         * late_fee_money - paid_money - credit_money - written_off_money, never below zero. 0 on
         * paid, credited, uncollectible, and voided invoices; equal to total_money on a draft.
         * Refunds and dispute losses don't change it. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. paid_at (Optional): string. When the invoice most
         * recently became paid. Cleared when status leaves paid and set again on a later paid
         * transition. Format: date-time. Example: "2026-08-02T16:00:00Z". paid_money (Required):
         * {@link MoneyValue}. Payments collected toward this invoice, online or as recorded manual
         * payments, minus reversed payments, including payments toward late fees. Never below
         * zero. Disputes, including losses, don't reduce it. Refunds don't reduce it; they are in
         * refunded_money. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. payment_due (Required): {@link InvoicePaymentDue}. The resolved due-date
         * policy. Send this object back when updating the draft; payment_terms captures the term's
         * current revision again. The invoice due-date policy resolved at write time. The object
         * can be sent back when updating a draft. payment_terms_snapshot (Optional): {@link
         * InvoicePaymentTermsSnapshot}. The payment term captured on the draft, with its due date
         * rule and late fee policy. Later changes to the payment term don't affect this invoice.
         * The payment terms saved on an invoice: the term's name, version, due date calculation,
         * and late fee policy. po_number (Required): string or null. The buyer's purchase order
         * number, printed on the invoice and PDF. It cannot change after issue. `null` when unset.
         * public_url (Optional): string. The hosted invoice link where the buyer views and pays
         * the invoice. Present after issue on API reads, except a list filtered by
         * idempotency_key; webhook payloads leave it out. regenerate-public-link replaces it.
         * Anyone with the link can open the invoice, so treat it as a secret. recipient_email
         * (Required): string or null. Where Flint emails the invoice and its reminders. Email
         * delivery requires it at issue. `null` when unset. reference (Required): string or null.
         * Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase
         * order number goes in po_number. It cannot change after issue. `null` when unset.
         * refund_status (Required): string. How much of the collected money has been refunded. It
         * doesn't change status. Value enum: "none", "partially_refunded", "refunded".
         * refunded_money (Required): {@link MoneyValue}. Money refunded to the buyer after
         * collection. Refunds don't reopen the balance; refund_status summarizes them. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code.
         * reminders_paused (Required): boolean. Whether automatic reminders are paused. Set
         * reminders_paused on PATCH /v1/invoices/{invoice_id} to change it. reminders_paused_at
         * (Optional): string. When automatic reminders were paused. Absent while reminders are
         * active. Format: date-time. Example: "2026-08-02T16:00:00Z". remit_to_address (Optional):
         * {@link Address}. Where the buyer sends offline payments, shown on the invoice. Defaults
         * to the invoice settings remit-to address. A postal address. Every address has country.
         * Addresses Flint checked as complete (customer and saved addresses, merchant, location,
         * invoice, order delivery destination, tax identity, fulfillment recipient and pickup
         * addresses) always have line1 and city, and US ones always have state and postal_code.
         * Delivery quote destinations, buyer locations and postal-code tax locations hold only
         * what was provided, such as postal_code and country. schedule_entries (Required): Array
         * of {@link InvoiceScheduleEntry}. The payment schedule, in schedule order. Always [] when
         * the invoice has no schedule and is collected in one balance. schedule_entries[] (Value):
         * {@link InvoiceScheduleEntry}. One payment on an invoice's payment schedule, such as a
         * deposit, installment, or balance, with its due time, amounts, and status.
         * scheduled_issue_at (Required): string or null. When Flint will issue and deliver this
         * draft. `null` when no issue is scheduled. Cleared when the draft is issued or voided, or
         * when you send null. Format: date-time. Example: "2026-08-02T16:00:00Z". service_date
         * (Required): string or null. The calendar date of the billed service, in YYYY-MM-DD
         * format. The invoice and PDF print it as written, without timezone conversion. `null`
         * when unset. Format: date. Example: "2026-08-02". snapshot (Optional): {@link
         * InvoiceSnapshot}. The billing content of the invoice: line items, discounts, charges,
         * tip, tax, and totals. A draft previews the backing order; issue freezes it, and later
         * order changes don't reach an issued invoice. A frozen copy of an issued invoice's
         * content, including line items, charges, discounts, tax identities, and pricing amounts.
         * status (Required): string. Current invoice status. paid and credited close the current
         * balance and can reopen to open or partially_paid after a payment or credit allocation
         * reversal; invoice.reopened reports that change. An uncollectible invoice accepts manual
         * recovery payments and becomes paid when fully recovered; reversals restore the
         * write-off. voided is final. Refunds change refund_status without reopening the balance.
         * A lost dispute leaves paid_money, the balance, and status unchanged; collecting it again
         * requires a new invoice. Value enum: "draft", "open", "partially_paid", "paid", "voided",
         * "uncollectible", "credited". subscription_id (Required): string or null. The
         * subscription the backing order belongs to, copied when the draft is created and never
         * changed. `null` when the order isn't part of a subscription. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". supported_actions (Required): Array of string.
         * Lifecycle actions Flint accepts for this resource now, based on stored state.
         * Independent of the caller's permissions; each action still requires its route's scope.
         * Always [] when no action is available. [] enum: "collect", "issue",
         * "mark_uncollectible", "void". supported_actions[] (Value): string. Value enum:
         * "collect", "issue", "mark_uncollectible", "void". timezone (Optional): string. IANA time
         * zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken from
         * the merchant's timezone when the draft is written, or UTC when unset. Later merchant
         * changes do not alter this invoice's calendar. total_money (Required): {@link
         * MoneyValue}. What the issued invoice bills, equal to
         * snapshot.pricing_amounts.total_money. Fixed at issue; a draft previews the backing order
         * total. Late fees are in late_fee_money. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. uncollectible_at (Optional): string. When the
         * invoice was marked uncollectible. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * updated_at (Required): string. When the invoice last changed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Current invoice version.
         * Send this as expected_version when updating the draft. Format: int64. minimum: 1.
         * viewed_at (Optional): string. When the buyer first opened the invoice through its hosted
         * invoice link. Recorded on a best-effort basis. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". voided_at (Optional): string. When the invoice was voided.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". written_off_money (Required): {@link
         * MoneyValue}. The balance written off when the invoice was marked uncollectible,
         * including unpaid late fees. Monetary amount represented as integer minor units plus an
         * ISO 4217 currency code.
         */
        "object": {
            /**
             * Additional recipients copied on the invoice email and every reminder. [] (Value):
             * string.
             */
            "cc_emails": Array<string>;
            /**
             * When the current closed interval began. Cleared when status returns to open or
             * partially_paid. A direct move between closed statuses preserves this timestamp.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "closed_at"?: string;
            /**
             * How this invoice is collected, resolved when the draft is written. Send this object
             * back when updating its collection policy. The invoice collection policy resolved at
             * write time. The object can be sent back when updating a draft.
             */
            "collection": InvoiceCollection;
            /**
             * Whether collection is blocked. While it is inventory_blocked, collection attempts
             * return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum:
             * "none", "inventory_blocked", "resolved".
             */
            "collection_block_status": "none" | "inventory_blocked" | "resolved" | (string & {});
            /** When the invoice was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Credit note credit allocated to this invoice, minus reversed allocations.
             * Unallocated credit isn't included. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "credit_money": MoneyValue;
            /**
             * The part of the balance due now. Without schedule_entries, it equals
             * outstanding_money. With schedule_entries, it is the outstanding amount of the first
             * entry, in schedule order, whose due date has started and that still has a balance,
             * or 0 when there is none. It is the amount the next collect call or checkout session
             * charges. To total everything overdue, add the outstanding_money of the entries whose
             * status is overdue. Always 0 unless the invoice is open or partially_paid. Monetary
             * amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "currently_due_money": MoneyValue;
            /**
             * Summary of the billed customer. Returned only with expand=customer. Present only
             * when `expand` includes `customer`; `null` when expanded and there is no related
             * customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
             * fields, returned in place of a customer ID when the customer is expanded. anyOf[2]
             * (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * Customer billed by this invoice. Absent when the invoice has no customer. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /** How issue delivered the invoice. Value enum: "email", "caller_managed". */
            "delivery_mode"?: "email" | "caller_managed" | (string & {});
            /**
             * Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent).
             * The outstanding balance becomes overdue only after this date ends. Automatic
             * collection runs at the later of issue and the start of this date. With payment
             * terms, issue computes this date from issued_at. Absent when there is no due date.
             * Format: date. Example: "2026-08-02".
             */
            "due_date"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. Use it as your sync
             * key: it isn't printed on the invoice. `null` when unset. minLength: 1. maxLength:
             * 255. Example: "warehouse-1842".
             */
            "external_reference_id": string | null;
            /**
             * Fine print at the bottom of the invoice and PDF. It cannot change after issue.
             * `null` when unset.
             */
            "footer": string | null;
            /** Flint invoice ID. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
            "invoice_id": string;
            /**
             * Sequential document number assigned when the invoice is issued. Numbering is per
             * merchant, with test and live mode numbered independently.
             */
            "invoice_number"?: string;
            /**
             * Whether the invoice is open or partially_paid and past due with a balance remaining.
             * Without schedule_entries, the due_date has ended in timezone (UTC when absent) and
             * outstanding_money is above zero; with them, at least one entry is overdue. Computed
             * when the invoice is read.
             */
            "is_overdue": boolean;
            /**
             * When the invoice was issued. Absent on a draft. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "issued_at"?: string;
            /**
             * Late fees assessed after issue, minus waivers, including amounts since paid or
             * written off. Itemized in late_fees. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "late_fee_money": MoneyValue;
            /**
             * Late fees assessed on this invoice, each with its paid, waived, written-off, and
             * outstanding amounts. late_fee_money is their assessed total minus waivers. []
             * (Value): {@link InvoiceLateFee}. A charge assessed because an invoice payment is
             * overdue.
             */
            "late_fees": Array<InvoiceLateFee>;
            /**
             * Message to the customer, printed on the invoice and PDF. It cannot change after
             * issue. `null` when unset.
             */
            "memo": string | null;
            /** Merchant that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys
             * starting with flint_ are reserved for Flint and are not returned. Writes follow the
             * limits on MetadataInput and MetadataPatchInput; maps written before those limits may
             * not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Summary of the backing order. Returned only with expand=order. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
             * status, payment and refund status, and pricing and settlement amounts, returned when
             * the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * The order this invoice bills. Every invoice has one; quick pay creates it. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string;
            /**
             * What is still owed: total_money + late_fee_money - paid_money - credit_money -
             * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
             * invoices; equal to total_money on a draft. Refunds and dispute losses don't change
             * it. Monetary amount represented as integer minor units plus an ISO 4217 currency
             * code.
             */
            "outstanding_money": MoneyValue;
            /**
             * When the invoice most recently became paid. Cleared when status leaves paid and set
             * again on a later paid transition. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "paid_at"?: string;
            /**
             * Payments collected toward this invoice, online or as recorded manual payments, minus
             * reversed payments, including payments toward late fees. Never below zero. Disputes,
             * including losses, don't reduce it. Refunds don't reduce it; they are in
             * refunded_money. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "paid_money": MoneyValue;
            /**
             * The resolved due-date policy. Send this object back when updating the draft;
             * payment_terms captures the term's current revision again. The invoice due-date
             * policy resolved at write time. The object can be sent back when updating a draft.
             */
            "payment_due": InvoicePaymentDue;
            /**
             * The payment term captured on the draft, with its due date rule and late fee policy.
             * Later changes to the payment term don't affect this invoice. The payment terms saved
             * on an invoice: the term's name, version, due date calculation, and late fee policy.
             */
            "payment_terms_snapshot"?: InvoicePaymentTermsSnapshot;
            /**
             * The buyer's purchase order number, printed on the invoice and PDF. It cannot change
             * after issue. `null` when unset.
             */
            "po_number": string | null;
            /**
             * The hosted invoice link where the buyer views and pays the invoice. Present after
             * issue on API reads, except a list filtered by idempotency_key; webhook payloads
             * leave it out. regenerate-public-link replaces it. Anyone with the link can open the
             * invoice, so treat it as a secret.
             */
            "public_url"?: string;
            /**
             * Where Flint emails the invoice and its reminders. Email delivery requires it at
             * issue. `null` when unset.
             */
            "recipient_email": string | null;
            /**
             * Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase
             * order number goes in po_number. It cannot change after issue. `null` when unset.
             */
            "reference": string | null;
            /**
             * How much of the collected money has been refunded. It doesn't change status. Value
             * enum: "none", "partially_refunded", "refunded".
             */
            "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
            /**
             * Money refunded to the buyer after collection. Refunds don't reopen the balance;
             * refund_status summarizes them. Monetary amount represented as integer minor units
             * plus an ISO 4217 currency code.
             */
            "refunded_money": MoneyValue;
            /**
             * Whether automatic reminders are paused. Set reminders_paused on PATCH
             * /v1/invoices/{invoice_id} to change it.
             */
            "reminders_paused": boolean;
            /**
             * When automatic reminders were paused. Absent while reminders are active. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "reminders_paused_at"?: string;
            /**
             * Where the buyer sends offline payments, shown on the invoice. Defaults to the
             * invoice settings remit-to address. A postal address. Every address has country.
             * Addresses Flint checked as complete (customer and saved addresses, merchant,
             * location, invoice, order delivery destination, tax identity, fulfillment recipient
             * and pickup addresses) always have line1 and city, and US ones always have state and
             * postal_code. Delivery quote destinations, buyer locations and postal-code tax
             * locations hold only what was provided, such as postal_code and country.
             */
            "remit_to_address"?: Address;
            /**
             * The payment schedule, in schedule order. Always [] when the invoice has no schedule
             * and is collected in one balance. [] (Value): {@link InvoiceScheduleEntry}. One
             * payment on an invoice's payment schedule, such as a deposit, installment, or
             * balance, with its due time, amounts, and status.
             */
            "schedule_entries": Array<InvoiceScheduleEntry>;
            /**
             * When Flint will issue and deliver this draft. `null` when no issue is scheduled.
             * Cleared when the draft is issued or voided, or when you send null. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "scheduled_issue_at": string | null;
            /**
             * The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF
             * print it as written, without timezone conversion. `null` when unset. Format: date.
             * Example: "2026-08-02".
             */
            "service_date": string | null;
            /**
             * The billing content of the invoice: line items, discounts, charges, tip, tax, and
             * totals. A draft previews the backing order; issue freezes it, and later order
             * changes don't reach an issued invoice. A frozen copy of an issued invoice's content,
             * including line items, charges, discounts, tax identities, and pricing amounts.
             */
            "snapshot"?: InvoiceSnapshot;
            /**
             * Current invoice status. paid and credited close the current balance and can reopen
             * to open or partially_paid after a payment or credit allocation reversal;
             * invoice.reopened reports that change. An uncollectible invoice accepts manual
             * recovery payments and becomes paid when fully recovered; reversals restore the
             * write-off. voided is final. Refunds change refund_status without reopening the
             * balance. A lost dispute leaves paid_money, the balance, and status unchanged;
             * collecting it again requires a new invoice. Value enum: "draft", "open",
             * "partially_paid", "paid", "voided", "uncollectible", "credited".
             */
            "status": "draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {});
            /**
             * The subscription the backing order belongs to, copied when the draft is created and
             * never changed. `null` when the order isn't part of a subscription. Example:
             * "sub_01KEZF7C00BVRE8YDBXQB74BBM".
             */
            "subscription_id": string | null;
            /**
             * Lifecycle actions Flint accepts for this resource now, based on stored state.
             * Independent of the caller's permissions; each action still requires its route's
             * scope. Always [] when no action is available. [] enum: "collect", "issue",
             * "mark_uncollectible", "void". [] (Value): string. Value enum: "collect", "issue",
             * "mark_uncollectible", "void".
             */
            "supported_actions": Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>;
            /**
             * IANA time zone snapshot for invoice due dates, reminders, and late fee calendar
             * days. Taken from the merchant's timezone when the draft is written, or UTC when
             * unset. Later merchant changes do not alter this invoice's calendar.
             */
            "timezone"?: string;
            /**
             * What the issued invoice bills, equal to snapshot.pricing_amounts.total_money. Fixed
             * at issue; a draft previews the backing order total. Late fees are in late_fee_money.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "total_money": MoneyValue;
            /**
             * When the invoice was marked uncollectible. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "uncollectible_at"?: string;
            /**
             * When the invoice last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Current invoice version. Send this as expected_version when updating the draft.
             * Format: int64. minimum: 1.
             */
            "version": number;
            /**
             * When the buyer first opened the invoice through its hosted invoice link. Recorded on
             * a best-effort basis. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "viewed_at"?: string;
            /** When the invoice was voided. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "voided_at"?: string;
            /**
             * The balance written off when the invoice was marked uncollectible, including unpaid
             * late fees. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "written_off_money": MoneyValue;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Invoice>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "invoice.refunded". */
    "event_type"?: "invoice.refunded";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `invoice.refunded` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type InvoiceRefundedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `public_url`. object.cc_emails (Required): Array of string. Additional recipients
     * copied on the invoice email and every reminder. object.cc_emails[] (Value): string.
     * object.closed_at (Optional): string. When the current closed interval began. Cleared when
     * status returns to open or partially_paid. A direct move between closed statuses preserves
     * this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.collection
     * (Required): {@link InvoiceCollection}. How this invoice is collected, resolved when the
     * draft is written. Send this object back when updating its collection policy. The invoice
     * collection policy resolved at write time. The object can be sent back when updating a draft.
     * object.collection_block_status (Required): string. Whether collection is blocked. While it
     * is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED with
     * details[0].reason inventory_wait. Value enum: "none", "inventory_blocked", "resolved".
     * object.created_at (Required): string. When the invoice was created. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.credit_money (Required): {@link MoneyValue}. Credit
     * note credit allocated to this invoice, minus reversed allocations. Unallocated credit isn't
     * included. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.currently_due_money (Required): {@link MoneyValue}. The part of the balance due now.
     * Without schedule_entries, it equals outstanding_money. With schedule_entries, it is the
     * outstanding amount of the first entry, in schedule order, whose due date has started and
     * that still has a balance, or 0 when there is none. It is the amount the next collect call or
     * checkout session charges. To total everything overdue, add the outstanding_money of the
     * entries whose status is overdue. Always 0 unless the invoice is open or partially_paid.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.customer (Optional): {@link ExpandedCustomerSummary} or null. Summary of the billed
     * customer. Returned only with expand=customer. Present only when `expand` includes
     * `customer`; `null` when expanded and there is no related customer. object.customer.anyOf[1]
     * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of
     * a customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Optional): string. Customer billed by this invoice. Absent when the
     * invoice has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.delivery_mode
     * (Optional): string. How issue delivered the invoice. Value enum: "email", "caller_managed".
     * object.due_date (Optional): string. Calendar due date in YYYY-MM-DD format, interpreted in
     * timezone (UTC when absent). The outstanding balance becomes overdue only after this date
     * ends. Automatic collection runs at the later of issue and the start of this date. With
     * payment terms, issue computes this date from issued_at. Absent when there is no due date.
     * Format: date. Example: "2026-08-02". object.external_reference_id (Required): string or
     * null. Caller-owned identifier for this resource in an external system. Use it as your sync
     * key: it isn't printed on the invoice. `null` when unset. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842". object.footer (Required): string or null. Fine print at the
     * bottom of the invoice and PDF. It cannot change after issue. `null` when unset.
     * object.invoice_id (Required): string. Flint invoice ID. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.invoice_number (Optional): string. Sequential
     * document number assigned when the invoice is issued. Numbering is per merchant, with test
     * and live mode numbered independently. object.is_overdue (Required): boolean. Whether the
     * invoice is open or partially_paid and past due with a balance remaining. Without
     * schedule_entries, the due_date has ended in timezone (UTC when absent) and outstanding_money
     * is above zero; with them, at least one entry is overdue. Computed when the invoice is read.
     * object.issued_at (Optional): string. When the invoice was issued. Absent on a draft. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.late_fee_money (Required): {@link
     * MoneyValue}. Late fees assessed after issue, minus waivers, including amounts since paid or
     * written off. Itemized in late_fees. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. object.late_fees (Required): Array of {@link InvoiceLateFee}.
     * Late fees assessed on this invoice, each with its paid, waived, written-off, and outstanding
     * amounts. late_fee_money is their assessed total minus waivers. object.late_fees[] (Value):
     * {@link InvoiceLateFee}. A charge assessed because an invoice payment is overdue. object.memo
     * (Required): string or null. Message to the customer, printed on the invoice and PDF. It
     * cannot change after issue. `null` when unset. object.merchant_id (Required): string.
     * Merchant that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata
     * (Optional): {@link MetadataMap}. Caller-owned metadata. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null. Summary
     * of the backing order. Returned only with expand=order. Present only when `expand` includes
     * `order`; `null` when expanded and there is no related order. object.order.anyOf[1] (Value):
     * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Required): string. The order this
     * invoice bills. Every invoice has one; quick pay creates it. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.outstanding_money (Required): {@link MoneyValue}.
     * What is still owed: total_money + late_fee_money - paid_money - credit_money -
     * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
     * invoices; equal to total_money on a draft. Refunds and dispute losses don't change it.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.paid_at (Optional): string. When the invoice most recently became paid. Cleared when
     * status leaves paid and set again on a later paid transition. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.paid_money (Required): {@link MoneyValue}. Payments collected
     * toward this invoice, online or as recorded manual payments, minus reversed payments,
     * including payments toward late fees. Never below zero. Disputes, including losses, don't
     * reduce it. Refunds don't reduce it; they are in refunded_money. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code. object.payment_due (Required): {@link
     * InvoicePaymentDue}. The resolved due-date policy. Send this object back when updating the
     * draft; payment_terms captures the term's current revision again. The invoice due-date policy
     * resolved at write time. The object can be sent back when updating a draft.
     * object.payment_terms_snapshot (Optional): {@link InvoicePaymentTermsSnapshot}. The payment
     * term captured on the draft, with its due date rule and late fee policy. Later changes to the
     * payment term don't affect this invoice. The payment terms saved on an invoice: the term's
     * name, version, due date calculation, and late fee policy. object.po_number (Required):
     * string or null. The buyer's purchase order number, printed on the invoice and PDF. It cannot
     * change after issue. `null` when unset. object.public_url (Optional): string. The hosted
     * invoice link where the buyer views and pays the invoice. Present after issue on API reads,
     * except a list filtered by idempotency_key; webhook payloads leave it out.
     * regenerate-public-link replaces it. Anyone with the link can open the invoice, so treat it
     * as a secret. object.recipient_email (Required): string or null. Where Flint emails the
     * invoice and its reminders. Email delivery requires it at issue. `null` when unset.
     * object.reference (Required): string or null. Your reference for the invoice, printed on the
     * invoice and PDF. The buyer's purchase order number goes in po_number. It cannot change after
     * issue. `null` when unset. object.refund_status (Required): string. How much of the collected
     * money has been refunded. It doesn't change status. Value enum: "none", "partially_refunded",
     * "refunded". object.refunded_money (Required): {@link MoneyValue}. Money refunded to the
     * buyer after collection. Refunds don't reopen the balance; refund_status summarizes them.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.reminders_paused (Required): boolean. Whether automatic reminders are paused. Set
     * reminders_paused on PATCH /v1/invoices/{invoice_id} to change it. object.reminders_paused_at
     * (Optional): string. When automatic reminders were paused. Absent while reminders are active.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.remit_to_address (Optional):
     * {@link Address}. Where the buyer sends offline payments, shown on the invoice. Defaults to
     * the invoice settings remit-to address. A postal address. Every address has country.
     * Addresses Flint checked as complete (customer and saved addresses, merchant, location,
     * invoice, order delivery destination, tax identity, fulfillment recipient and pickup
     * addresses) always have line1 and city, and US ones always have state and postal_code.
     * Delivery quote destinations, buyer locations and postal-code tax locations hold only what
     * was provided, such as postal_code and country. object.schedule_entries (Required): Array of
     * {@link InvoiceScheduleEntry}. The payment schedule, in schedule order. Always [] when the
     * invoice has no schedule and is collected in one balance. object.schedule_entries[] (Value):
     * {@link InvoiceScheduleEntry}. One payment on an invoice's payment schedule, such as a
     * deposit, installment, or balance, with its due time, amounts, and status.
     * object.scheduled_issue_at (Required): string or null. When Flint will issue and deliver this
     * draft. `null` when no issue is scheduled. Cleared when the draft is issued or voided, or
     * when you send null. Format: date-time. Example: "2026-08-02T16:00:00Z". object.service_date
     * (Required): string or null. The calendar date of the billed service, in YYYY-MM-DD format.
     * The invoice and PDF print it as written, without timezone conversion. `null` when unset.
     * Format: date. Example: "2026-08-02". object.snapshot (Optional): {@link InvoiceSnapshot}.
     * The billing content of the invoice: line items, discounts, charges, tip, tax, and totals. A
     * draft previews the backing order; issue freezes it, and later order changes don't reach an
     * issued invoice. A frozen copy of an issued invoice's content, including line items, charges,
     * discounts, tax identities, and pricing amounts. object.status (Required): string. Current
     * invoice status. paid and credited close the current balance and can reopen to open or
     * partially_paid after a payment or credit allocation reversal; invoice.reopened reports that
     * change. An uncollectible invoice accepts manual recovery payments and becomes paid when
     * fully recovered; reversals restore the write-off. voided is final. Refunds change
     * refund_status without reopening the balance. A lost dispute leaves paid_money, the balance,
     * and status unchanged; collecting it again requires a new invoice. Value enum: "draft",
     * "open", "partially_paid", "paid", "voided", "uncollectible", "credited".
     * object.subscription_id (Required): string or null. The subscription the backing order
     * belongs to, copied when the draft is created and never changed. `null` when the order isn't
     * part of a subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". object.supported_actions
     * (Required): Array of string. Lifecycle actions Flint accepts for this resource now, based on
     * stored state. Independent of the caller's permissions; each action still requires its
     * route's scope. Always [] when no action is available. [] enum: "collect", "issue",
     * "mark_uncollectible", "void". object.supported_actions[] (Value): string. Value enum:
     * "collect", "issue", "mark_uncollectible", "void". object.timezone (Optional): string. IANA
     * time zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken from
     * the merchant's timezone when the draft is written, or UTC when unset. Later merchant changes
     * do not alter this invoice's calendar. object.total_money (Required): {@link MoneyValue}.
     * What the issued invoice bills, equal to snapshot.pricing_amounts.total_money. Fixed at
     * issue; a draft previews the backing order total. Late fees are in late_fee_money. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * object.uncollectible_at (Optional): string. When the invoice was marked uncollectible.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.updated_at (Required): string.
     * When the invoice last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Current invoice version. Send this as expected_version
     * when updating the draft. Format: int64. minimum: 1. object.viewed_at (Optional): string.
     * When the buyer first opened the invoice through its hosted invoice link. Recorded on a
     * best-effort basis. Format: date-time. Example: "2026-08-02T16:00:00Z". object.voided_at
     * (Optional): string. When the invoice was voided. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.written_off_money (Required): {@link MoneyValue}. The balance
     * written off when the invoice was marked uncollectible, including unpaid late fees. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `public_url`.
         * cc_emails (Required): Array of string. Additional recipients copied on the invoice email
         * and every reminder. cc_emails[] (Value): string. closed_at (Optional): string. When the
         * current closed interval began. Cleared when status returns to open or partially_paid. A
         * direct move between closed statuses preserves this timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". collection (Required): {@link InvoiceCollection}. How
         * this invoice is collected, resolved when the draft is written. Send this object back
         * when updating its collection policy. The invoice collection policy resolved at write
         * time. The object can be sent back when updating a draft. collection_block_status
         * (Required): string. Whether collection is blocked. While it is inventory_blocked,
         * collection attempts return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait.
         * Value enum: "none", "inventory_blocked", "resolved". created_at (Required): string. When
         * the invoice was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * credit_money (Required): {@link MoneyValue}. Credit note credit allocated to this
         * invoice, minus reversed allocations. Unallocated credit isn't included. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code. currently_due_money
         * (Required): {@link MoneyValue}. The part of the balance due now. Without
         * schedule_entries, it equals outstanding_money. With schedule_entries, it is the
         * outstanding amount of the first entry, in schedule order, whose due date has started and
         * that still has a balance, or 0 when there is none. It is the amount the next collect
         * call or checkout session charges. To total everything overdue, add the outstanding_money
         * of the entries whose status is overdue. Always 0 unless the invoice is open or
         * partially_paid. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. customer (Optional): {@link ExpandedCustomerSummary} or null. Summary of
         * the billed customer. Returned only with expand=customer. Present only when `expand`
         * includes `customer`; `null` when expanded and there is no related customer.
         * customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary fields,
         * returned in place of a customer ID when the customer is expanded. customer.anyOf[2]
         * (Value): null. customer_id (Optional): string. Customer billed by this invoice. Absent
         * when the invoice has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
         * delivery_mode (Optional): string. How issue delivered the invoice. Value enum: "email",
         * "caller_managed". due_date (Optional): string. Calendar due date in YYYY-MM-DD format,
         * interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only
         * after this date ends. Automatic collection runs at the later of issue and the start of
         * this date. With payment terms, issue computes this date from issued_at. Absent when
         * there is no due date. Format: date. Example: "2026-08-02". external_reference_id
         * (Required): string or null. Caller-owned identifier for this resource in an external
         * system. Use it as your sync key: it isn't printed on the invoice. `null` when unset.
         * minLength: 1. maxLength: 255. Example: "warehouse-1842". footer (Required): string or
         * null. Fine print at the bottom of the invoice and PDF. It cannot change after issue.
         * `null` when unset. invoice_id (Required): string. Flint invoice ID. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_number (Optional): string. Sequential document
         * number assigned when the invoice is issued. Numbering is per merchant, with test and
         * live mode numbered independently. is_overdue (Required): boolean. Whether the invoice is
         * open or partially_paid and past due with a balance remaining. Without schedule_entries,
         * the due_date has ended in timezone (UTC when absent) and outstanding_money is above
         * zero; with them, at least one entry is overdue. Computed when the invoice is read.
         * issued_at (Optional): string. When the invoice was issued. Absent on a draft. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". late_fee_money (Required): {@link
         * MoneyValue}. Late fees assessed after issue, minus waivers, including amounts since paid
         * or written off. Itemized in late_fees. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. late_fees (Required): Array of {@link
         * InvoiceLateFee}. Late fees assessed on this invoice, each with its paid, waived,
         * written-off, and outstanding amounts. late_fee_money is their assessed total minus
         * waivers. late_fees[] (Value): {@link InvoiceLateFee}. A charge assessed because an
         * invoice payment is overdue. memo (Required): string or null. Message to the customer,
         * printed on the invoice and PDF. It cannot change after issue. `null` when unset.
         * merchant_id (Required): string. Merchant that owns this invoice. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Caller-owned
         * metadata. Caller-owned key-value data stored on a resource. Keys starting with flint_
         * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput
         * and MetadataPatchInput; maps written before those limits may not satisfy them. order
         * (Optional): {@link ExpandedOrderSummary} or null. Summary of the backing order. Returned
         * only with expand=order. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[2] (Value): null. order_id (Required): string. The order this invoice bills.
         * Every invoice has one; quick pay creates it. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
         * outstanding_money (Required): {@link MoneyValue}. What is still owed: total_money +
         * late_fee_money - paid_money - credit_money - written_off_money, never below zero. 0 on
         * paid, credited, uncollectible, and voided invoices; equal to total_money on a draft.
         * Refunds and dispute losses don't change it. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. paid_at (Optional): string. When the invoice most
         * recently became paid. Cleared when status leaves paid and set again on a later paid
         * transition. Format: date-time. Example: "2026-08-02T16:00:00Z". paid_money (Required):
         * {@link MoneyValue}. Payments collected toward this invoice, online or as recorded manual
         * payments, minus reversed payments, including payments toward late fees. Never below
         * zero. Disputes, including losses, don't reduce it. Refunds don't reduce it; they are in
         * refunded_money. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. payment_due (Required): {@link InvoicePaymentDue}. The resolved due-date
         * policy. Send this object back when updating the draft; payment_terms captures the term's
         * current revision again. The invoice due-date policy resolved at write time. The object
         * can be sent back when updating a draft. payment_terms_snapshot (Optional): {@link
         * InvoicePaymentTermsSnapshot}. The payment term captured on the draft, with its due date
         * rule and late fee policy. Later changes to the payment term don't affect this invoice.
         * The payment terms saved on an invoice: the term's name, version, due date calculation,
         * and late fee policy. po_number (Required): string or null. The buyer's purchase order
         * number, printed on the invoice and PDF. It cannot change after issue. `null` when unset.
         * public_url (Optional): string. The hosted invoice link where the buyer views and pays
         * the invoice. Present after issue on API reads, except a list filtered by
         * idempotency_key; webhook payloads leave it out. regenerate-public-link replaces it.
         * Anyone with the link can open the invoice, so treat it as a secret. recipient_email
         * (Required): string or null. Where Flint emails the invoice and its reminders. Email
         * delivery requires it at issue. `null` when unset. reference (Required): string or null.
         * Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase
         * order number goes in po_number. It cannot change after issue. `null` when unset.
         * refund_status (Required): string. How much of the collected money has been refunded. It
         * doesn't change status. Value enum: "none", "partially_refunded", "refunded".
         * refunded_money (Required): {@link MoneyValue}. Money refunded to the buyer after
         * collection. Refunds don't reopen the balance; refund_status summarizes them. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code.
         * reminders_paused (Required): boolean. Whether automatic reminders are paused. Set
         * reminders_paused on PATCH /v1/invoices/{invoice_id} to change it. reminders_paused_at
         * (Optional): string. When automatic reminders were paused. Absent while reminders are
         * active. Format: date-time. Example: "2026-08-02T16:00:00Z". remit_to_address (Optional):
         * {@link Address}. Where the buyer sends offline payments, shown on the invoice. Defaults
         * to the invoice settings remit-to address. A postal address. Every address has country.
         * Addresses Flint checked as complete (customer and saved addresses, merchant, location,
         * invoice, order delivery destination, tax identity, fulfillment recipient and pickup
         * addresses) always have line1 and city, and US ones always have state and postal_code.
         * Delivery quote destinations, buyer locations and postal-code tax locations hold only
         * what was provided, such as postal_code and country. schedule_entries (Required): Array
         * of {@link InvoiceScheduleEntry}. The payment schedule, in schedule order. Always [] when
         * the invoice has no schedule and is collected in one balance. schedule_entries[] (Value):
         * {@link InvoiceScheduleEntry}. One payment on an invoice's payment schedule, such as a
         * deposit, installment, or balance, with its due time, amounts, and status.
         * scheduled_issue_at (Required): string or null. When Flint will issue and deliver this
         * draft. `null` when no issue is scheduled. Cleared when the draft is issued or voided, or
         * when you send null. Format: date-time. Example: "2026-08-02T16:00:00Z". service_date
         * (Required): string or null. The calendar date of the billed service, in YYYY-MM-DD
         * format. The invoice and PDF print it as written, without timezone conversion. `null`
         * when unset. Format: date. Example: "2026-08-02". snapshot (Optional): {@link
         * InvoiceSnapshot}. The billing content of the invoice: line items, discounts, charges,
         * tip, tax, and totals. A draft previews the backing order; issue freezes it, and later
         * order changes don't reach an issued invoice. A frozen copy of an issued invoice's
         * content, including line items, charges, discounts, tax identities, and pricing amounts.
         * status (Required): string. Current invoice status. paid and credited close the current
         * balance and can reopen to open or partially_paid after a payment or credit allocation
         * reversal; invoice.reopened reports that change. An uncollectible invoice accepts manual
         * recovery payments and becomes paid when fully recovered; reversals restore the
         * write-off. voided is final. Refunds change refund_status without reopening the balance.
         * A lost dispute leaves paid_money, the balance, and status unchanged; collecting it again
         * requires a new invoice. Value enum: "draft", "open", "partially_paid", "paid", "voided",
         * "uncollectible", "credited". subscription_id (Required): string or null. The
         * subscription the backing order belongs to, copied when the draft is created and never
         * changed. `null` when the order isn't part of a subscription. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". supported_actions (Required): Array of string.
         * Lifecycle actions Flint accepts for this resource now, based on stored state.
         * Independent of the caller's permissions; each action still requires its route's scope.
         * Always [] when no action is available. [] enum: "collect", "issue",
         * "mark_uncollectible", "void". supported_actions[] (Value): string. Value enum:
         * "collect", "issue", "mark_uncollectible", "void". timezone (Optional): string. IANA time
         * zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken from
         * the merchant's timezone when the draft is written, or UTC when unset. Later merchant
         * changes do not alter this invoice's calendar. total_money (Required): {@link
         * MoneyValue}. What the issued invoice bills, equal to
         * snapshot.pricing_amounts.total_money. Fixed at issue; a draft previews the backing order
         * total. Late fees are in late_fee_money. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. uncollectible_at (Optional): string. When the
         * invoice was marked uncollectible. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * updated_at (Required): string. When the invoice last changed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Current invoice version.
         * Send this as expected_version when updating the draft. Format: int64. minimum: 1.
         * viewed_at (Optional): string. When the buyer first opened the invoice through its hosted
         * invoice link. Recorded on a best-effort basis. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". voided_at (Optional): string. When the invoice was voided.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". written_off_money (Required): {@link
         * MoneyValue}. The balance written off when the invoice was marked uncollectible,
         * including unpaid late fees. Monetary amount represented as integer minor units plus an
         * ISO 4217 currency code.
         */
        "object": {
            /**
             * Additional recipients copied on the invoice email and every reminder. [] (Value):
             * string.
             */
            "cc_emails": Array<string>;
            /**
             * When the current closed interval began. Cleared when status returns to open or
             * partially_paid. A direct move between closed statuses preserves this timestamp.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "closed_at"?: string;
            /**
             * How this invoice is collected, resolved when the draft is written. Send this object
             * back when updating its collection policy. The invoice collection policy resolved at
             * write time. The object can be sent back when updating a draft.
             */
            "collection": InvoiceCollection;
            /**
             * Whether collection is blocked. While it is inventory_blocked, collection attempts
             * return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum:
             * "none", "inventory_blocked", "resolved".
             */
            "collection_block_status": "none" | "inventory_blocked" | "resolved" | (string & {});
            /** When the invoice was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Credit note credit allocated to this invoice, minus reversed allocations.
             * Unallocated credit isn't included. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "credit_money": MoneyValue;
            /**
             * The part of the balance due now. Without schedule_entries, it equals
             * outstanding_money. With schedule_entries, it is the outstanding amount of the first
             * entry, in schedule order, whose due date has started and that still has a balance,
             * or 0 when there is none. It is the amount the next collect call or checkout session
             * charges. To total everything overdue, add the outstanding_money of the entries whose
             * status is overdue. Always 0 unless the invoice is open or partially_paid. Monetary
             * amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "currently_due_money": MoneyValue;
            /**
             * Summary of the billed customer. Returned only with expand=customer. Present only
             * when `expand` includes `customer`; `null` when expanded and there is no related
             * customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
             * fields, returned in place of a customer ID when the customer is expanded. anyOf[2]
             * (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * Customer billed by this invoice. Absent when the invoice has no customer. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /** How issue delivered the invoice. Value enum: "email", "caller_managed". */
            "delivery_mode"?: "email" | "caller_managed" | (string & {});
            /**
             * Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent).
             * The outstanding balance becomes overdue only after this date ends. Automatic
             * collection runs at the later of issue and the start of this date. With payment
             * terms, issue computes this date from issued_at. Absent when there is no due date.
             * Format: date. Example: "2026-08-02".
             */
            "due_date"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. Use it as your sync
             * key: it isn't printed on the invoice. `null` when unset. minLength: 1. maxLength:
             * 255. Example: "warehouse-1842".
             */
            "external_reference_id": string | null;
            /**
             * Fine print at the bottom of the invoice and PDF. It cannot change after issue.
             * `null` when unset.
             */
            "footer": string | null;
            /** Flint invoice ID. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
            "invoice_id": string;
            /**
             * Sequential document number assigned when the invoice is issued. Numbering is per
             * merchant, with test and live mode numbered independently.
             */
            "invoice_number"?: string;
            /**
             * Whether the invoice is open or partially_paid and past due with a balance remaining.
             * Without schedule_entries, the due_date has ended in timezone (UTC when absent) and
             * outstanding_money is above zero; with them, at least one entry is overdue. Computed
             * when the invoice is read.
             */
            "is_overdue": boolean;
            /**
             * When the invoice was issued. Absent on a draft. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "issued_at"?: string;
            /**
             * Late fees assessed after issue, minus waivers, including amounts since paid or
             * written off. Itemized in late_fees. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "late_fee_money": MoneyValue;
            /**
             * Late fees assessed on this invoice, each with its paid, waived, written-off, and
             * outstanding amounts. late_fee_money is their assessed total minus waivers. []
             * (Value): {@link InvoiceLateFee}. A charge assessed because an invoice payment is
             * overdue.
             */
            "late_fees": Array<InvoiceLateFee>;
            /**
             * Message to the customer, printed on the invoice and PDF. It cannot change after
             * issue. `null` when unset.
             */
            "memo": string | null;
            /** Merchant that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys
             * starting with flint_ are reserved for Flint and are not returned. Writes follow the
             * limits on MetadataInput and MetadataPatchInput; maps written before those limits may
             * not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Summary of the backing order. Returned only with expand=order. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
             * status, payment and refund status, and pricing and settlement amounts, returned when
             * the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * The order this invoice bills. Every invoice has one; quick pay creates it. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string;
            /**
             * What is still owed: total_money + late_fee_money - paid_money - credit_money -
             * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
             * invoices; equal to total_money on a draft. Refunds and dispute losses don't change
             * it. Monetary amount represented as integer minor units plus an ISO 4217 currency
             * code.
             */
            "outstanding_money": MoneyValue;
            /**
             * When the invoice most recently became paid. Cleared when status leaves paid and set
             * again on a later paid transition. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "paid_at"?: string;
            /**
             * Payments collected toward this invoice, online or as recorded manual payments, minus
             * reversed payments, including payments toward late fees. Never below zero. Disputes,
             * including losses, don't reduce it. Refunds don't reduce it; they are in
             * refunded_money. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "paid_money": MoneyValue;
            /**
             * The resolved due-date policy. Send this object back when updating the draft;
             * payment_terms captures the term's current revision again. The invoice due-date
             * policy resolved at write time. The object can be sent back when updating a draft.
             */
            "payment_due": InvoicePaymentDue;
            /**
             * The payment term captured on the draft, with its due date rule and late fee policy.
             * Later changes to the payment term don't affect this invoice. The payment terms saved
             * on an invoice: the term's name, version, due date calculation, and late fee policy.
             */
            "payment_terms_snapshot"?: InvoicePaymentTermsSnapshot;
            /**
             * The buyer's purchase order number, printed on the invoice and PDF. It cannot change
             * after issue. `null` when unset.
             */
            "po_number": string | null;
            /**
             * The hosted invoice link where the buyer views and pays the invoice. Present after
             * issue on API reads, except a list filtered by idempotency_key; webhook payloads
             * leave it out. regenerate-public-link replaces it. Anyone with the link can open the
             * invoice, so treat it as a secret.
             */
            "public_url"?: string;
            /**
             * Where Flint emails the invoice and its reminders. Email delivery requires it at
             * issue. `null` when unset.
             */
            "recipient_email": string | null;
            /**
             * Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase
             * order number goes in po_number. It cannot change after issue. `null` when unset.
             */
            "reference": string | null;
            /**
             * How much of the collected money has been refunded. It doesn't change status. Value
             * enum: "none", "partially_refunded", "refunded".
             */
            "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
            /**
             * Money refunded to the buyer after collection. Refunds don't reopen the balance;
             * refund_status summarizes them. Monetary amount represented as integer minor units
             * plus an ISO 4217 currency code.
             */
            "refunded_money": MoneyValue;
            /**
             * Whether automatic reminders are paused. Set reminders_paused on PATCH
             * /v1/invoices/{invoice_id} to change it.
             */
            "reminders_paused": boolean;
            /**
             * When automatic reminders were paused. Absent while reminders are active. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "reminders_paused_at"?: string;
            /**
             * Where the buyer sends offline payments, shown on the invoice. Defaults to the
             * invoice settings remit-to address. A postal address. Every address has country.
             * Addresses Flint checked as complete (customer and saved addresses, merchant,
             * location, invoice, order delivery destination, tax identity, fulfillment recipient
             * and pickup addresses) always have line1 and city, and US ones always have state and
             * postal_code. Delivery quote destinations, buyer locations and postal-code tax
             * locations hold only what was provided, such as postal_code and country.
             */
            "remit_to_address"?: Address;
            /**
             * The payment schedule, in schedule order. Always [] when the invoice has no schedule
             * and is collected in one balance. [] (Value): {@link InvoiceScheduleEntry}. One
             * payment on an invoice's payment schedule, such as a deposit, installment, or
             * balance, with its due time, amounts, and status.
             */
            "schedule_entries": Array<InvoiceScheduleEntry>;
            /**
             * When Flint will issue and deliver this draft. `null` when no issue is scheduled.
             * Cleared when the draft is issued or voided, or when you send null. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "scheduled_issue_at": string | null;
            /**
             * The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF
             * print it as written, without timezone conversion. `null` when unset. Format: date.
             * Example: "2026-08-02".
             */
            "service_date": string | null;
            /**
             * The billing content of the invoice: line items, discounts, charges, tip, tax, and
             * totals. A draft previews the backing order; issue freezes it, and later order
             * changes don't reach an issued invoice. A frozen copy of an issued invoice's content,
             * including line items, charges, discounts, tax identities, and pricing amounts.
             */
            "snapshot"?: InvoiceSnapshot;
            /**
             * Current invoice status. paid and credited close the current balance and can reopen
             * to open or partially_paid after a payment or credit allocation reversal;
             * invoice.reopened reports that change. An uncollectible invoice accepts manual
             * recovery payments and becomes paid when fully recovered; reversals restore the
             * write-off. voided is final. Refunds change refund_status without reopening the
             * balance. A lost dispute leaves paid_money, the balance, and status unchanged;
             * collecting it again requires a new invoice. Value enum: "draft", "open",
             * "partially_paid", "paid", "voided", "uncollectible", "credited".
             */
            "status": "draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {});
            /**
             * The subscription the backing order belongs to, copied when the draft is created and
             * never changed. `null` when the order isn't part of a subscription. Example:
             * "sub_01KEZF7C00BVRE8YDBXQB74BBM".
             */
            "subscription_id": string | null;
            /**
             * Lifecycle actions Flint accepts for this resource now, based on stored state.
             * Independent of the caller's permissions; each action still requires its route's
             * scope. Always [] when no action is available. [] enum: "collect", "issue",
             * "mark_uncollectible", "void". [] (Value): string. Value enum: "collect", "issue",
             * "mark_uncollectible", "void".
             */
            "supported_actions": Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>;
            /**
             * IANA time zone snapshot for invoice due dates, reminders, and late fee calendar
             * days. Taken from the merchant's timezone when the draft is written, or UTC when
             * unset. Later merchant changes do not alter this invoice's calendar.
             */
            "timezone"?: string;
            /**
             * What the issued invoice bills, equal to snapshot.pricing_amounts.total_money. Fixed
             * at issue; a draft previews the backing order total. Late fees are in late_fee_money.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "total_money": MoneyValue;
            /**
             * When the invoice was marked uncollectible. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "uncollectible_at"?: string;
            /**
             * When the invoice last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Current invoice version. Send this as expected_version when updating the draft.
             * Format: int64. minimum: 1.
             */
            "version": number;
            /**
             * When the buyer first opened the invoice through its hosted invoice link. Recorded on
             * a best-effort basis. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "viewed_at"?: string;
            /** When the invoice was voided. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "voided_at"?: string;
            /**
             * The balance written off when the invoice was marked uncollectible, including unpaid
             * late fees. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "written_off_money": MoneyValue;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Invoice>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "invoice.refunded". */
    "event_type"?: "invoice.refunded";
});
export type InvoiceReminderDueEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "cc_emails": Array<string>;
            "closed_at"?: string;
            "collection": InvoiceCollection;
            "collection_block_status": "none" | "inventory_blocked" | "resolved" | (string & {});
            "created_at": string;
            "credit_money": MoneyValue;
            "currently_due_money": MoneyValue;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "delivery_mode"?: "email" | "caller_managed" | (string & {});
            "due_date"?: string;
            "external_reference_id": string | null;
            "footer": string | null;
            "invoice_id": string;
            "invoice_number"?: string;
            "is_overdue": boolean;
            "issued_at"?: string;
            "late_fee_money": MoneyValue;
            "late_fees": Array<InvoiceLateFee>;
            "memo": string | null;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "outstanding_money": MoneyValue;
            "paid_at"?: string;
            "paid_money": MoneyValue;
            "payment_due": InvoicePaymentDue;
            "payment_terms_snapshot"?: InvoicePaymentTermsSnapshot;
            "po_number": string | null;
            "public_url"?: string;
            "recipient_email": string | null;
            "reference": string | null;
            "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
            "refunded_money": MoneyValue;
            "reminders_paused": boolean;
            "reminders_paused_at"?: string;
            "remit_to_address"?: Address;
            "schedule_entries": Array<InvoiceScheduleEntry>;
            "scheduled_issue_at": string | null;
            "service_date": string | null;
            "snapshot"?: InvoiceSnapshot;
            "status": "draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {});
            "subscription_id": string | null;
            "supported_actions": Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>;
            "timezone"?: string;
            "total_money": MoneyValue;
            "uncollectible_at"?: string;
            "updated_at": string;
            "version": number;
            "viewed_at"?: string;
            "voided_at"?: string;
            "written_off_money": MoneyValue;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "invoice.reminder_due";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "cc_emails": Array<string>;
            "closed_at"?: string;
            "collection": InvoiceCollection;
            "collection_block_status": "none" | "inventory_blocked" | "resolved" | (string & {});
            "created_at": string;
            "credit_money": MoneyValue;
            "currently_due_money": MoneyValue;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "delivery_mode"?: "email" | "caller_managed" | (string & {});
            "due_date"?: string;
            "external_reference_id": string | null;
            "footer": string | null;
            "invoice_id": string;
            "invoice_number"?: string;
            "is_overdue": boolean;
            "issued_at"?: string;
            "late_fee_money": MoneyValue;
            "late_fees": Array<InvoiceLateFee>;
            "memo": string | null;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "outstanding_money": MoneyValue;
            "paid_at"?: string;
            "paid_money": MoneyValue;
            "payment_due": InvoicePaymentDue;
            "payment_terms_snapshot"?: InvoicePaymentTermsSnapshot;
            "po_number": string | null;
            "public_url"?: string;
            "recipient_email": string | null;
            "reference": string | null;
            "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
            "refunded_money": MoneyValue;
            "reminders_paused": boolean;
            "reminders_paused_at"?: string;
            "remit_to_address"?: Address;
            "schedule_entries": Array<InvoiceScheduleEntry>;
            "scheduled_issue_at": string | null;
            "service_date": string | null;
            "snapshot"?: InvoiceSnapshot;
            "status": "draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {});
            "subscription_id": string | null;
            "supported_actions": Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>;
            "timezone"?: string;
            "total_money": MoneyValue;
            "uncollectible_at"?: string;
            "updated_at": string;
            "version": number;
            "viewed_at"?: string;
            "voided_at"?: string;
            "written_off_money": MoneyValue;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "invoice.reminder_due";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "invoice.reminder_due";
});
/**
 * The `invoice.reminder_due` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type InvoiceReminderDueInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `public_url`. object.cc_emails (Required): Array of string. Additional recipients
     * copied on the invoice email and every reminder. object.cc_emails[] (Value): string.
     * object.closed_at (Optional): string. When the current closed interval began. Cleared when
     * status returns to open or partially_paid. A direct move between closed statuses preserves
     * this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.collection
     * (Required): {@link InvoiceCollection}. How this invoice is collected, resolved when the
     * draft is written. Send this object back when updating its collection policy. The invoice
     * collection policy resolved at write time. The object can be sent back when updating a draft.
     * object.collection_block_status (Required): string. Whether collection is blocked. While it
     * is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED with
     * details[0].reason inventory_wait. Value enum: "none", "inventory_blocked", "resolved".
     * object.created_at (Required): string. When the invoice was created. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.credit_money (Required): {@link MoneyValue}. Credit
     * note credit allocated to this invoice, minus reversed allocations. Unallocated credit isn't
     * included. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.currently_due_money (Required): {@link MoneyValue}. The part of the balance due now.
     * Without schedule_entries, it equals outstanding_money. With schedule_entries, it is the
     * outstanding amount of the first entry, in schedule order, whose due date has started and
     * that still has a balance, or 0 when there is none. It is the amount the next collect call or
     * checkout session charges. To total everything overdue, add the outstanding_money of the
     * entries whose status is overdue. Always 0 unless the invoice is open or partially_paid.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.customer (Optional): {@link ExpandedCustomerSummary} or null. Summary of the billed
     * customer. Returned only with expand=customer. Present only when `expand` includes
     * `customer`; `null` when expanded and there is no related customer. object.customer.anyOf[1]
     * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of
     * a customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Optional): string. Customer billed by this invoice. Absent when the
     * invoice has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.delivery_mode
     * (Optional): string. How issue delivered the invoice. Value enum: "email", "caller_managed".
     * object.due_date (Optional): string. Calendar due date in YYYY-MM-DD format, interpreted in
     * timezone (UTC when absent). The outstanding balance becomes overdue only after this date
     * ends. Automatic collection runs at the later of issue and the start of this date. With
     * payment terms, issue computes this date from issued_at. Absent when there is no due date.
     * Format: date. Example: "2026-08-02". object.external_reference_id (Required): string or
     * null. Caller-owned identifier for this resource in an external system. Use it as your sync
     * key: it isn't printed on the invoice. `null` when unset. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842". object.footer (Required): string or null. Fine print at the
     * bottom of the invoice and PDF. It cannot change after issue. `null` when unset.
     * object.invoice_id (Required): string. Flint invoice ID. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.invoice_number (Optional): string. Sequential
     * document number assigned when the invoice is issued. Numbering is per merchant, with test
     * and live mode numbered independently. object.is_overdue (Required): boolean. Whether the
     * invoice is open or partially_paid and past due with a balance remaining. Without
     * schedule_entries, the due_date has ended in timezone (UTC when absent) and outstanding_money
     * is above zero; with them, at least one entry is overdue. Computed when the invoice is read.
     * object.issued_at (Optional): string. When the invoice was issued. Absent on a draft. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.late_fee_money (Required): {@link
     * MoneyValue}. Late fees assessed after issue, minus waivers, including amounts since paid or
     * written off. Itemized in late_fees. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. object.late_fees (Required): Array of {@link InvoiceLateFee}.
     * Late fees assessed on this invoice, each with its paid, waived, written-off, and outstanding
     * amounts. late_fee_money is their assessed total minus waivers. object.late_fees[] (Value):
     * {@link InvoiceLateFee}. A charge assessed because an invoice payment is overdue. object.memo
     * (Required): string or null. Message to the customer, printed on the invoice and PDF. It
     * cannot change after issue. `null` when unset. object.merchant_id (Required): string.
     * Merchant that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata
     * (Optional): {@link MetadataMap}. Caller-owned metadata. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null. Summary
     * of the backing order. Returned only with expand=order. Present only when `expand` includes
     * `order`; `null` when expanded and there is no related order. object.order.anyOf[1] (Value):
     * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Required): string. The order this
     * invoice bills. Every invoice has one; quick pay creates it. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.outstanding_money (Required): {@link MoneyValue}.
     * What is still owed: total_money + late_fee_money - paid_money - credit_money -
     * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
     * invoices; equal to total_money on a draft. Refunds and dispute losses don't change it.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.paid_at (Optional): string. When the invoice most recently became paid. Cleared when
     * status leaves paid and set again on a later paid transition. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.paid_money (Required): {@link MoneyValue}. Payments collected
     * toward this invoice, online or as recorded manual payments, minus reversed payments,
     * including payments toward late fees. Never below zero. Disputes, including losses, don't
     * reduce it. Refunds don't reduce it; they are in refunded_money. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code. object.payment_due (Required): {@link
     * InvoicePaymentDue}. The resolved due-date policy. Send this object back when updating the
     * draft; payment_terms captures the term's current revision again. The invoice due-date policy
     * resolved at write time. The object can be sent back when updating a draft.
     * object.payment_terms_snapshot (Optional): {@link InvoicePaymentTermsSnapshot}. The payment
     * term captured on the draft, with its due date rule and late fee policy. Later changes to the
     * payment term don't affect this invoice. The payment terms saved on an invoice: the term's
     * name, version, due date calculation, and late fee policy. object.po_number (Required):
     * string or null. The buyer's purchase order number, printed on the invoice and PDF. It cannot
     * change after issue. `null` when unset. object.public_url (Optional): string. The hosted
     * invoice link where the buyer views and pays the invoice. Present after issue on API reads,
     * except a list filtered by idempotency_key; webhook payloads leave it out.
     * regenerate-public-link replaces it. Anyone with the link can open the invoice, so treat it
     * as a secret. object.recipient_email (Required): string or null. Where Flint emails the
     * invoice and its reminders. Email delivery requires it at issue. `null` when unset.
     * object.reference (Required): string or null. Your reference for the invoice, printed on the
     * invoice and PDF. The buyer's purchase order number goes in po_number. It cannot change after
     * issue. `null` when unset. object.refund_status (Required): string. How much of the collected
     * money has been refunded. It doesn't change status. Value enum: "none", "partially_refunded",
     * "refunded". object.refunded_money (Required): {@link MoneyValue}. Money refunded to the
     * buyer after collection. Refunds don't reopen the balance; refund_status summarizes them.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.reminders_paused (Required): boolean. Whether automatic reminders are paused. Set
     * reminders_paused on PATCH /v1/invoices/{invoice_id} to change it. object.reminders_paused_at
     * (Optional): string. When automatic reminders were paused. Absent while reminders are active.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.remit_to_address (Optional):
     * {@link Address}. Where the buyer sends offline payments, shown on the invoice. Defaults to
     * the invoice settings remit-to address. A postal address. Every address has country.
     * Addresses Flint checked as complete (customer and saved addresses, merchant, location,
     * invoice, order delivery destination, tax identity, fulfillment recipient and pickup
     * addresses) always have line1 and city, and US ones always have state and postal_code.
     * Delivery quote destinations, buyer locations and postal-code tax locations hold only what
     * was provided, such as postal_code and country. object.schedule_entries (Required): Array of
     * {@link InvoiceScheduleEntry}. The payment schedule, in schedule order. Always [] when the
     * invoice has no schedule and is collected in one balance. object.schedule_entries[] (Value):
     * {@link InvoiceScheduleEntry}. One payment on an invoice's payment schedule, such as a
     * deposit, installment, or balance, with its due time, amounts, and status.
     * object.scheduled_issue_at (Required): string or null. When Flint will issue and deliver this
     * draft. `null` when no issue is scheduled. Cleared when the draft is issued or voided, or
     * when you send null. Format: date-time. Example: "2026-08-02T16:00:00Z". object.service_date
     * (Required): string or null. The calendar date of the billed service, in YYYY-MM-DD format.
     * The invoice and PDF print it as written, without timezone conversion. `null` when unset.
     * Format: date. Example: "2026-08-02". object.snapshot (Optional): {@link InvoiceSnapshot}.
     * The billing content of the invoice: line items, discounts, charges, tip, tax, and totals. A
     * draft previews the backing order; issue freezes it, and later order changes don't reach an
     * issued invoice. A frozen copy of an issued invoice's content, including line items, charges,
     * discounts, tax identities, and pricing amounts. object.status (Required): string. Current
     * invoice status. paid and credited close the current balance and can reopen to open or
     * partially_paid after a payment or credit allocation reversal; invoice.reopened reports that
     * change. An uncollectible invoice accepts manual recovery payments and becomes paid when
     * fully recovered; reversals restore the write-off. voided is final. Refunds change
     * refund_status without reopening the balance. A lost dispute leaves paid_money, the balance,
     * and status unchanged; collecting it again requires a new invoice. Value enum: "draft",
     * "open", "partially_paid", "paid", "voided", "uncollectible", "credited".
     * object.subscription_id (Required): string or null. The subscription the backing order
     * belongs to, copied when the draft is created and never changed. `null` when the order isn't
     * part of a subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". object.supported_actions
     * (Required): Array of string. Lifecycle actions Flint accepts for this resource now, based on
     * stored state. Independent of the caller's permissions; each action still requires its
     * route's scope. Always [] when no action is available. [] enum: "collect", "issue",
     * "mark_uncollectible", "void". object.supported_actions[] (Value): string. Value enum:
     * "collect", "issue", "mark_uncollectible", "void". object.timezone (Optional): string. IANA
     * time zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken from
     * the merchant's timezone when the draft is written, or UTC when unset. Later merchant changes
     * do not alter this invoice's calendar. object.total_money (Required): {@link MoneyValue}.
     * What the issued invoice bills, equal to snapshot.pricing_amounts.total_money. Fixed at
     * issue; a draft previews the backing order total. Late fees are in late_fee_money. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * object.uncollectible_at (Optional): string. When the invoice was marked uncollectible.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.updated_at (Required): string.
     * When the invoice last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Current invoice version. Send this as expected_version
     * when updating the draft. Format: int64. minimum: 1. object.viewed_at (Optional): string.
     * When the buyer first opened the invoice through its hosted invoice link. Recorded on a
     * best-effort basis. Format: date-time. Example: "2026-08-02T16:00:00Z". object.voided_at
     * (Optional): string. When the invoice was voided. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.written_off_money (Required): {@link MoneyValue}. The balance
     * written off when the invoice was marked uncollectible, including unpaid late fees. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `public_url`.
         * cc_emails (Required): Array of string. Additional recipients copied on the invoice email
         * and every reminder. cc_emails[] (Value): string. closed_at (Optional): string. When the
         * current closed interval began. Cleared when status returns to open or partially_paid. A
         * direct move between closed statuses preserves this timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". collection (Required): {@link InvoiceCollection}. How
         * this invoice is collected, resolved when the draft is written. Send this object back
         * when updating its collection policy. The invoice collection policy resolved at write
         * time. The object can be sent back when updating a draft. collection_block_status
         * (Required): string. Whether collection is blocked. While it is inventory_blocked,
         * collection attempts return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait.
         * Value enum: "none", "inventory_blocked", "resolved". created_at (Required): string. When
         * the invoice was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * credit_money (Required): {@link MoneyValue}. Credit note credit allocated to this
         * invoice, minus reversed allocations. Unallocated credit isn't included. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code. currently_due_money
         * (Required): {@link MoneyValue}. The part of the balance due now. Without
         * schedule_entries, it equals outstanding_money. With schedule_entries, it is the
         * outstanding amount of the first entry, in schedule order, whose due date has started and
         * that still has a balance, or 0 when there is none. It is the amount the next collect
         * call or checkout session charges. To total everything overdue, add the outstanding_money
         * of the entries whose status is overdue. Always 0 unless the invoice is open or
         * partially_paid. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. customer (Optional): {@link ExpandedCustomerSummary} or null. Summary of
         * the billed customer. Returned only with expand=customer. Present only when `expand`
         * includes `customer`; `null` when expanded and there is no related customer.
         * customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary fields,
         * returned in place of a customer ID when the customer is expanded. customer.anyOf[2]
         * (Value): null. customer_id (Optional): string. Customer billed by this invoice. Absent
         * when the invoice has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
         * delivery_mode (Optional): string. How issue delivered the invoice. Value enum: "email",
         * "caller_managed". due_date (Optional): string. Calendar due date in YYYY-MM-DD format,
         * interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only
         * after this date ends. Automatic collection runs at the later of issue and the start of
         * this date. With payment terms, issue computes this date from issued_at. Absent when
         * there is no due date. Format: date. Example: "2026-08-02". external_reference_id
         * (Required): string or null. Caller-owned identifier for this resource in an external
         * system. Use it as your sync key: it isn't printed on the invoice. `null` when unset.
         * minLength: 1. maxLength: 255. Example: "warehouse-1842". footer (Required): string or
         * null. Fine print at the bottom of the invoice and PDF. It cannot change after issue.
         * `null` when unset. invoice_id (Required): string. Flint invoice ID. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_number (Optional): string. Sequential document
         * number assigned when the invoice is issued. Numbering is per merchant, with test and
         * live mode numbered independently. is_overdue (Required): boolean. Whether the invoice is
         * open or partially_paid and past due with a balance remaining. Without schedule_entries,
         * the due_date has ended in timezone (UTC when absent) and outstanding_money is above
         * zero; with them, at least one entry is overdue. Computed when the invoice is read.
         * issued_at (Optional): string. When the invoice was issued. Absent on a draft. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". late_fee_money (Required): {@link
         * MoneyValue}. Late fees assessed after issue, minus waivers, including amounts since paid
         * or written off. Itemized in late_fees. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. late_fees (Required): Array of {@link
         * InvoiceLateFee}. Late fees assessed on this invoice, each with its paid, waived,
         * written-off, and outstanding amounts. late_fee_money is their assessed total minus
         * waivers. late_fees[] (Value): {@link InvoiceLateFee}. A charge assessed because an
         * invoice payment is overdue. memo (Required): string or null. Message to the customer,
         * printed on the invoice and PDF. It cannot change after issue. `null` when unset.
         * merchant_id (Required): string. Merchant that owns this invoice. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Caller-owned
         * metadata. Caller-owned key-value data stored on a resource. Keys starting with flint_
         * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput
         * and MetadataPatchInput; maps written before those limits may not satisfy them. order
         * (Optional): {@link ExpandedOrderSummary} or null. Summary of the backing order. Returned
         * only with expand=order. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[2] (Value): null. order_id (Required): string. The order this invoice bills.
         * Every invoice has one; quick pay creates it. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
         * outstanding_money (Required): {@link MoneyValue}. What is still owed: total_money +
         * late_fee_money - paid_money - credit_money - written_off_money, never below zero. 0 on
         * paid, credited, uncollectible, and voided invoices; equal to total_money on a draft.
         * Refunds and dispute losses don't change it. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. paid_at (Optional): string. When the invoice most
         * recently became paid. Cleared when status leaves paid and set again on a later paid
         * transition. Format: date-time. Example: "2026-08-02T16:00:00Z". paid_money (Required):
         * {@link MoneyValue}. Payments collected toward this invoice, online or as recorded manual
         * payments, minus reversed payments, including payments toward late fees. Never below
         * zero. Disputes, including losses, don't reduce it. Refunds don't reduce it; they are in
         * refunded_money. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. payment_due (Required): {@link InvoicePaymentDue}. The resolved due-date
         * policy. Send this object back when updating the draft; payment_terms captures the term's
         * current revision again. The invoice due-date policy resolved at write time. The object
         * can be sent back when updating a draft. payment_terms_snapshot (Optional): {@link
         * InvoicePaymentTermsSnapshot}. The payment term captured on the draft, with its due date
         * rule and late fee policy. Later changes to the payment term don't affect this invoice.
         * The payment terms saved on an invoice: the term's name, version, due date calculation,
         * and late fee policy. po_number (Required): string or null. The buyer's purchase order
         * number, printed on the invoice and PDF. It cannot change after issue. `null` when unset.
         * public_url (Optional): string. The hosted invoice link where the buyer views and pays
         * the invoice. Present after issue on API reads, except a list filtered by
         * idempotency_key; webhook payloads leave it out. regenerate-public-link replaces it.
         * Anyone with the link can open the invoice, so treat it as a secret. recipient_email
         * (Required): string or null. Where Flint emails the invoice and its reminders. Email
         * delivery requires it at issue. `null` when unset. reference (Required): string or null.
         * Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase
         * order number goes in po_number. It cannot change after issue. `null` when unset.
         * refund_status (Required): string. How much of the collected money has been refunded. It
         * doesn't change status. Value enum: "none", "partially_refunded", "refunded".
         * refunded_money (Required): {@link MoneyValue}. Money refunded to the buyer after
         * collection. Refunds don't reopen the balance; refund_status summarizes them. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code.
         * reminders_paused (Required): boolean. Whether automatic reminders are paused. Set
         * reminders_paused on PATCH /v1/invoices/{invoice_id} to change it. reminders_paused_at
         * (Optional): string. When automatic reminders were paused. Absent while reminders are
         * active. Format: date-time. Example: "2026-08-02T16:00:00Z". remit_to_address (Optional):
         * {@link Address}. Where the buyer sends offline payments, shown on the invoice. Defaults
         * to the invoice settings remit-to address. A postal address. Every address has country.
         * Addresses Flint checked as complete (customer and saved addresses, merchant, location,
         * invoice, order delivery destination, tax identity, fulfillment recipient and pickup
         * addresses) always have line1 and city, and US ones always have state and postal_code.
         * Delivery quote destinations, buyer locations and postal-code tax locations hold only
         * what was provided, such as postal_code and country. schedule_entries (Required): Array
         * of {@link InvoiceScheduleEntry}. The payment schedule, in schedule order. Always [] when
         * the invoice has no schedule and is collected in one balance. schedule_entries[] (Value):
         * {@link InvoiceScheduleEntry}. One payment on an invoice's payment schedule, such as a
         * deposit, installment, or balance, with its due time, amounts, and status.
         * scheduled_issue_at (Required): string or null. When Flint will issue and deliver this
         * draft. `null` when no issue is scheduled. Cleared when the draft is issued or voided, or
         * when you send null. Format: date-time. Example: "2026-08-02T16:00:00Z". service_date
         * (Required): string or null. The calendar date of the billed service, in YYYY-MM-DD
         * format. The invoice and PDF print it as written, without timezone conversion. `null`
         * when unset. Format: date. Example: "2026-08-02". snapshot (Optional): {@link
         * InvoiceSnapshot}. The billing content of the invoice: line items, discounts, charges,
         * tip, tax, and totals. A draft previews the backing order; issue freezes it, and later
         * order changes don't reach an issued invoice. A frozen copy of an issued invoice's
         * content, including line items, charges, discounts, tax identities, and pricing amounts.
         * status (Required): string. Current invoice status. paid and credited close the current
         * balance and can reopen to open or partially_paid after a payment or credit allocation
         * reversal; invoice.reopened reports that change. An uncollectible invoice accepts manual
         * recovery payments and becomes paid when fully recovered; reversals restore the
         * write-off. voided is final. Refunds change refund_status without reopening the balance.
         * A lost dispute leaves paid_money, the balance, and status unchanged; collecting it again
         * requires a new invoice. Value enum: "draft", "open", "partially_paid", "paid", "voided",
         * "uncollectible", "credited". subscription_id (Required): string or null. The
         * subscription the backing order belongs to, copied when the draft is created and never
         * changed. `null` when the order isn't part of a subscription. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". supported_actions (Required): Array of string.
         * Lifecycle actions Flint accepts for this resource now, based on stored state.
         * Independent of the caller's permissions; each action still requires its route's scope.
         * Always [] when no action is available. [] enum: "collect", "issue",
         * "mark_uncollectible", "void". supported_actions[] (Value): string. Value enum:
         * "collect", "issue", "mark_uncollectible", "void". timezone (Optional): string. IANA time
         * zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken from
         * the merchant's timezone when the draft is written, or UTC when unset. Later merchant
         * changes do not alter this invoice's calendar. total_money (Required): {@link
         * MoneyValue}. What the issued invoice bills, equal to
         * snapshot.pricing_amounts.total_money. Fixed at issue; a draft previews the backing order
         * total. Late fees are in late_fee_money. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. uncollectible_at (Optional): string. When the
         * invoice was marked uncollectible. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * updated_at (Required): string. When the invoice last changed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Current invoice version.
         * Send this as expected_version when updating the draft. Format: int64. minimum: 1.
         * viewed_at (Optional): string. When the buyer first opened the invoice through its hosted
         * invoice link. Recorded on a best-effort basis. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". voided_at (Optional): string. When the invoice was voided.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". written_off_money (Required): {@link
         * MoneyValue}. The balance written off when the invoice was marked uncollectible,
         * including unpaid late fees. Monetary amount represented as integer minor units plus an
         * ISO 4217 currency code.
         */
        "object": {
            /**
             * Additional recipients copied on the invoice email and every reminder. [] (Value):
             * string.
             */
            "cc_emails": Array<string>;
            /**
             * When the current closed interval began. Cleared when status returns to open or
             * partially_paid. A direct move between closed statuses preserves this timestamp.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "closed_at"?: string;
            /**
             * How this invoice is collected, resolved when the draft is written. Send this object
             * back when updating its collection policy. The invoice collection policy resolved at
             * write time. The object can be sent back when updating a draft.
             */
            "collection": InvoiceCollection;
            /**
             * Whether collection is blocked. While it is inventory_blocked, collection attempts
             * return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum:
             * "none", "inventory_blocked", "resolved".
             */
            "collection_block_status": "none" | "inventory_blocked" | "resolved" | (string & {});
            /** When the invoice was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Credit note credit allocated to this invoice, minus reversed allocations.
             * Unallocated credit isn't included. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "credit_money": MoneyValue;
            /**
             * The part of the balance due now. Without schedule_entries, it equals
             * outstanding_money. With schedule_entries, it is the outstanding amount of the first
             * entry, in schedule order, whose due date has started and that still has a balance,
             * or 0 when there is none. It is the amount the next collect call or checkout session
             * charges. To total everything overdue, add the outstanding_money of the entries whose
             * status is overdue. Always 0 unless the invoice is open or partially_paid. Monetary
             * amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "currently_due_money": MoneyValue;
            /**
             * Summary of the billed customer. Returned only with expand=customer. Present only
             * when `expand` includes `customer`; `null` when expanded and there is no related
             * customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
             * fields, returned in place of a customer ID when the customer is expanded. anyOf[2]
             * (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * Customer billed by this invoice. Absent when the invoice has no customer. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /** How issue delivered the invoice. Value enum: "email", "caller_managed". */
            "delivery_mode"?: "email" | "caller_managed" | (string & {});
            /**
             * Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent).
             * The outstanding balance becomes overdue only after this date ends. Automatic
             * collection runs at the later of issue and the start of this date. With payment
             * terms, issue computes this date from issued_at. Absent when there is no due date.
             * Format: date. Example: "2026-08-02".
             */
            "due_date"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. Use it as your sync
             * key: it isn't printed on the invoice. `null` when unset. minLength: 1. maxLength:
             * 255. Example: "warehouse-1842".
             */
            "external_reference_id": string | null;
            /**
             * Fine print at the bottom of the invoice and PDF. It cannot change after issue.
             * `null` when unset.
             */
            "footer": string | null;
            /** Flint invoice ID. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
            "invoice_id": string;
            /**
             * Sequential document number assigned when the invoice is issued. Numbering is per
             * merchant, with test and live mode numbered independently.
             */
            "invoice_number"?: string;
            /**
             * Whether the invoice is open or partially_paid and past due with a balance remaining.
             * Without schedule_entries, the due_date has ended in timezone (UTC when absent) and
             * outstanding_money is above zero; with them, at least one entry is overdue. Computed
             * when the invoice is read.
             */
            "is_overdue": boolean;
            /**
             * When the invoice was issued. Absent on a draft. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "issued_at"?: string;
            /**
             * Late fees assessed after issue, minus waivers, including amounts since paid or
             * written off. Itemized in late_fees. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "late_fee_money": MoneyValue;
            /**
             * Late fees assessed on this invoice, each with its paid, waived, written-off, and
             * outstanding amounts. late_fee_money is their assessed total minus waivers. []
             * (Value): {@link InvoiceLateFee}. A charge assessed because an invoice payment is
             * overdue.
             */
            "late_fees": Array<InvoiceLateFee>;
            /**
             * Message to the customer, printed on the invoice and PDF. It cannot change after
             * issue. `null` when unset.
             */
            "memo": string | null;
            /** Merchant that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys
             * starting with flint_ are reserved for Flint and are not returned. Writes follow the
             * limits on MetadataInput and MetadataPatchInput; maps written before those limits may
             * not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Summary of the backing order. Returned only with expand=order. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
             * status, payment and refund status, and pricing and settlement amounts, returned when
             * the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * The order this invoice bills. Every invoice has one; quick pay creates it. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string;
            /**
             * What is still owed: total_money + late_fee_money - paid_money - credit_money -
             * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
             * invoices; equal to total_money on a draft. Refunds and dispute losses don't change
             * it. Monetary amount represented as integer minor units plus an ISO 4217 currency
             * code.
             */
            "outstanding_money": MoneyValue;
            /**
             * When the invoice most recently became paid. Cleared when status leaves paid and set
             * again on a later paid transition. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "paid_at"?: string;
            /**
             * Payments collected toward this invoice, online or as recorded manual payments, minus
             * reversed payments, including payments toward late fees. Never below zero. Disputes,
             * including losses, don't reduce it. Refunds don't reduce it; they are in
             * refunded_money. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "paid_money": MoneyValue;
            /**
             * The resolved due-date policy. Send this object back when updating the draft;
             * payment_terms captures the term's current revision again. The invoice due-date
             * policy resolved at write time. The object can be sent back when updating a draft.
             */
            "payment_due": InvoicePaymentDue;
            /**
             * The payment term captured on the draft, with its due date rule and late fee policy.
             * Later changes to the payment term don't affect this invoice. The payment terms saved
             * on an invoice: the term's name, version, due date calculation, and late fee policy.
             */
            "payment_terms_snapshot"?: InvoicePaymentTermsSnapshot;
            /**
             * The buyer's purchase order number, printed on the invoice and PDF. It cannot change
             * after issue. `null` when unset.
             */
            "po_number": string | null;
            /**
             * The hosted invoice link where the buyer views and pays the invoice. Present after
             * issue on API reads, except a list filtered by idempotency_key; webhook payloads
             * leave it out. regenerate-public-link replaces it. Anyone with the link can open the
             * invoice, so treat it as a secret.
             */
            "public_url"?: string;
            /**
             * Where Flint emails the invoice and its reminders. Email delivery requires it at
             * issue. `null` when unset.
             */
            "recipient_email": string | null;
            /**
             * Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase
             * order number goes in po_number. It cannot change after issue. `null` when unset.
             */
            "reference": string | null;
            /**
             * How much of the collected money has been refunded. It doesn't change status. Value
             * enum: "none", "partially_refunded", "refunded".
             */
            "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
            /**
             * Money refunded to the buyer after collection. Refunds don't reopen the balance;
             * refund_status summarizes them. Monetary amount represented as integer minor units
             * plus an ISO 4217 currency code.
             */
            "refunded_money": MoneyValue;
            /**
             * Whether automatic reminders are paused. Set reminders_paused on PATCH
             * /v1/invoices/{invoice_id} to change it.
             */
            "reminders_paused": boolean;
            /**
             * When automatic reminders were paused. Absent while reminders are active. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "reminders_paused_at"?: string;
            /**
             * Where the buyer sends offline payments, shown on the invoice. Defaults to the
             * invoice settings remit-to address. A postal address. Every address has country.
             * Addresses Flint checked as complete (customer and saved addresses, merchant,
             * location, invoice, order delivery destination, tax identity, fulfillment recipient
             * and pickup addresses) always have line1 and city, and US ones always have state and
             * postal_code. Delivery quote destinations, buyer locations and postal-code tax
             * locations hold only what was provided, such as postal_code and country.
             */
            "remit_to_address"?: Address;
            /**
             * The payment schedule, in schedule order. Always [] when the invoice has no schedule
             * and is collected in one balance. [] (Value): {@link InvoiceScheduleEntry}. One
             * payment on an invoice's payment schedule, such as a deposit, installment, or
             * balance, with its due time, amounts, and status.
             */
            "schedule_entries": Array<InvoiceScheduleEntry>;
            /**
             * When Flint will issue and deliver this draft. `null` when no issue is scheduled.
             * Cleared when the draft is issued or voided, or when you send null. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "scheduled_issue_at": string | null;
            /**
             * The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF
             * print it as written, without timezone conversion. `null` when unset. Format: date.
             * Example: "2026-08-02".
             */
            "service_date": string | null;
            /**
             * The billing content of the invoice: line items, discounts, charges, tip, tax, and
             * totals. A draft previews the backing order; issue freezes it, and later order
             * changes don't reach an issued invoice. A frozen copy of an issued invoice's content,
             * including line items, charges, discounts, tax identities, and pricing amounts.
             */
            "snapshot"?: InvoiceSnapshot;
            /**
             * Current invoice status. paid and credited close the current balance and can reopen
             * to open or partially_paid after a payment or credit allocation reversal;
             * invoice.reopened reports that change. An uncollectible invoice accepts manual
             * recovery payments and becomes paid when fully recovered; reversals restore the
             * write-off. voided is final. Refunds change refund_status without reopening the
             * balance. A lost dispute leaves paid_money, the balance, and status unchanged;
             * collecting it again requires a new invoice. Value enum: "draft", "open",
             * "partially_paid", "paid", "voided", "uncollectible", "credited".
             */
            "status": "draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {});
            /**
             * The subscription the backing order belongs to, copied when the draft is created and
             * never changed. `null` when the order isn't part of a subscription. Example:
             * "sub_01KEZF7C00BVRE8YDBXQB74BBM".
             */
            "subscription_id": string | null;
            /**
             * Lifecycle actions Flint accepts for this resource now, based on stored state.
             * Independent of the caller's permissions; each action still requires its route's
             * scope. Always [] when no action is available. [] enum: "collect", "issue",
             * "mark_uncollectible", "void". [] (Value): string. Value enum: "collect", "issue",
             * "mark_uncollectible", "void".
             */
            "supported_actions": Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>;
            /**
             * IANA time zone snapshot for invoice due dates, reminders, and late fee calendar
             * days. Taken from the merchant's timezone when the draft is written, or UTC when
             * unset. Later merchant changes do not alter this invoice's calendar.
             */
            "timezone"?: string;
            /**
             * What the issued invoice bills, equal to snapshot.pricing_amounts.total_money. Fixed
             * at issue; a draft previews the backing order total. Late fees are in late_fee_money.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "total_money": MoneyValue;
            /**
             * When the invoice was marked uncollectible. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "uncollectible_at"?: string;
            /**
             * When the invoice last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Current invoice version. Send this as expected_version when updating the draft.
             * Format: int64. minimum: 1.
             */
            "version": number;
            /**
             * When the buyer first opened the invoice through its hosted invoice link. Recorded on
             * a best-effort basis. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "viewed_at"?: string;
            /** When the invoice was voided. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "voided_at"?: string;
            /**
             * The balance written off when the invoice was marked uncollectible, including unpaid
             * late fees. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "written_off_money": MoneyValue;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "invoice.reminder_due". */
    "event_type"?: "invoice.reminder_due";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
