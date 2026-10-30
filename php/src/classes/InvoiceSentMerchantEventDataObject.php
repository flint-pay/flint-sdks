<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $cc_emails
 * @property-read ?string $closed_at
 * @property-read InvoiceSentMerchantEventDataObjectCollectionBuyerInitiated|InvoiceSentMerchantEventDataObjectCollectionAutomatic|InvoiceSentMerchantEventDataObjectCollectionExternal|\stdClass $collection
 * @property-read string $collection_block_status
 * @property-read ?string $created_at
 * @property-read MoneyValue $credit_money
 * @property-read MoneyValue $currently_due_money
 * @property-read ExpandedCustomerSummary|null $customer
 * @property-read ?string $customer_id
 * @property-read ?string $delivery_mode
 * @property-read ?string $due_at
 * @property-read string|null $external_reference_id
 * @property-read string|null $footer
 * @property-read string $invoice_id
 * @property-read ?string $invoice_number
 * @property-read bool $is_overdue
 * @property-read ?string $issued_at
 * @property-read MoneyValue $late_fee_money
 * @property-read list<InvoiceLateFee> $late_fees
 * @property-read string|null $memo
 * @property-read string $merchant_id
 * @property-read ?array<array-key, string> $metadata
 * @property-read ExpandedOrderSummary|null $order
 * @property-read string $order_id
 * @property-read MoneyValue $outstanding_money
 * @property-read ?string $paid_at
 * @property-read MoneyValue $paid_money
 * @property-read InvoiceSentMerchantEventDataObjectPaymentDueNone|InvoiceSentMerchantEventDataObjectPaymentDueDate|InvoiceSentMerchantEventDataObjectPaymentDuePaymentTerms|\stdClass $payment_due
 * @property-read ?InvoicePaymentTermsSnapshot $payment_terms_snapshot
 * @property-read string|null $po_number
 * @property-read ?string $public_url
 * @property-read string|null $recipient_email
 * @property-read string|null $reference
 * @property-read string $refund_status
 * @property-read MoneyValue $refunded_money
 * @property-read bool $reminders_paused
 * @property-read ?string $reminders_paused_at
 * @property-read ?Address $remit_to_address
 * @property-read list<InvoiceScheduleEntry> $schedule_entries
 * @property-read string|null $scheduled_issue_at
 * @property-read string|null $service_date
 * @property-read ?InvoiceSnapshot $snapshot
 * @property-read string $status
 * @property-read string|null $subscription_id
 * @property-read ?string $timezone
 * @property-read MoneyValue $total_money
 * @property-read ?string $uncollectible_at
 * @property-read ?string $updated_at
 * @property-read int $version
 * @property-read ?string $viewed_at
 * @property-read ?string $voided_at
 * @property-read MoneyValue $written_off_money
 * Presence-aware response; omitted optional fields return null. */
final class InvoiceSentMerchantEventDataObject extends Model {
    /** @param array{'cc_emails': list<string>, 'closed_at'?: string, 'collection': mixed, 'collection_block_status': string, 'created_at'?: string, 'credit_money': mixed, 'currently_due_money': mixed, 'customer'?: mixed, 'customer_id'?: string, 'delivery_mode'?: string, 'due_at'?: string, 'external_reference_id': string|null, 'footer': string|null, 'invoice_id': string, 'invoice_number'?: string, 'is_overdue': bool, 'issued_at'?: string, 'late_fee_money': mixed, 'late_fees': list<mixed>, 'memo': string|null, 'merchant_id': string, 'metadata'?: mixed, 'order'?: mixed, 'order_id': string, 'outstanding_money': mixed, 'paid_at'?: string, 'paid_money': mixed, 'payment_due': mixed, 'payment_terms_snapshot'?: mixed, 'po_number': string|null, 'public_url'?: string, 'recipient_email': string|null, 'reference': string|null, 'refund_status': string, 'refunded_money': mixed, 'reminders_paused': bool, 'reminders_paused_at'?: string, 'remit_to_address'?: mixed, 'schedule_entries': list<mixed>, 'scheduled_issue_at': string|null, 'service_date': string|null, 'snapshot'?: mixed, 'status': string, 'subscription_id': string|null, 'timezone'?: string, 'total_money': mixed, 'uncollectible_at'?: string, 'updated_at'?: string, 'version': int, 'viewed_at'?: string, 'voided_at'?: string, 'written_off_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceSentMerchantEventDataObject')); }
    /** Additional recipients copied on the invoice email and every reminder. [] (Value): string.
     * @return list<string>
     */
    public function getCcEmails(): array { return $this->get('cc_emails'); }
    public function hasCcEmails(): bool { return $this->has('cc_emails'); }
    /** When the current closed interval began. Cleared when status returns to open or partially_paid. A direct move between closed statuses preserves this timestamp. Format: date-time.
     * @return ?string
     */
    public function getClosedAt(): ?string { return $this->get('closed_at'); }
    public function hasClosedAt(): bool { return $this->has('closed_at'); }
    /** How this invoice is collected, resolved when the draft is written. Send this object back when updating its collection policy. The invoice collection policy resolved at write time. The object can be sent back when updating a draft.
     * @return InvoiceSentMerchantEventDataObjectCollectionBuyerInitiated|InvoiceSentMerchantEventDataObjectCollectionAutomatic|InvoiceSentMerchantEventDataObjectCollectionExternal|\stdClass
     */
    public function getCollection(): InvoiceSentMerchantEventDataObjectCollectionBuyerInitiated|InvoiceSentMerchantEventDataObjectCollectionAutomatic|InvoiceSentMerchantEventDataObjectCollectionExternal|\stdClass { return $this->get('collection'); }
    public function hasCollection(): bool { return $this->has('collection'); }
    /** Whether collection is blocked. While it is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum: "none", "inventory_blocked", "resolved".
     * @return string
     */
    public function getCollectionBlockStatus(): string { return $this->get('collection_block_status'); }
    public function hasCollectionBlockStatus(): bool { return $this->has('collection_block_status'); }
    /** When the invoice was created. Format: date-time.
     * @return ?string
     */
    public function getCreatedAt(): ?string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Credit note credit allocated to this invoice, minus reversed allocations. Unallocated credit isn't included. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getCreditMoney(): MoneyValue { return $this->get('credit_money'); }
    public function hasCreditMoney(): bool { return $this->has('credit_money'); }
    /** The part of the balance due now. Without schedule_entries, it equals outstanding_money. With schedule_entries, it is the outstanding amount of the first entry, in schedule order, whose due time has arrived and that still has a balance, or 0 when there is none. It is the amount the next collect call or checkout session charges. To total everything past due, add the outstanding_money of the entries whose status is due or overdue. Always 0 unless the invoice is open or partially_paid. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getCurrentlyDueMoney(): MoneyValue { return $this->get('currently_due_money'); }
    public function hasCurrentlyDueMoney(): bool { return $this->has('currently_due_money'); }
    /** Summary of the billed customer. Returned only with expand=customer. Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. anyOf[1] (Value): {@see ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer ID when the customer is expanded. anyOf[2] (Value): null.
     * @return ExpandedCustomerSummary|null
     */
    public function getCustomer(): ExpandedCustomerSummary|null { return $this->get('customer'); }
    public function hasCustomer(): bool { return $this->has('customer'); }
    /** Customer billed by this invoice. Absent when the invoice has no customer.
     * @return ?string
     */
    public function getCustomerId(): ?string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** How issue delivered the invoice. Value enum: "email", "caller_managed".
     * @return ?string
     */
    public function getDeliveryMode(): ?string { return $this->get('delivery_mode'); }
    public function hasDeliveryMode(): bool { return $this->has('delivery_mode'); }
    /** When payment is due. With payment terms, issue sets it from issued_at and the terms, counted in the invoice's timezone. Absent when the invoice has no due date. Format: date-time.
     * @return ?string
     */
    public function getDueAt(): ?string { return $this->get('due_at'); }
    public function hasDueAt(): bool { return $this->has('due_at'); }
    /** Caller-owned identifier for this resource in an external system. Use it as your sync key: it isn't printed on the invoice. null when unset. minLength: 1. maxLength: 255.
     * @return string|null
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Fine print at the bottom of the invoice and PDF. It cannot change after issue. null when unset.
     * @return string|null
     */
    public function getFooter(): string|null { return $this->get('footer'); }
    public function hasFooter(): bool { return $this->has('footer'); }
    /** Flint invoice ID.
     * @return string
     */
    public function getInvoiceId(): string { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** Sequential document number assigned when the invoice is issued. Numbering is per merchant, with test and live mode numbered independently.
     * @return ?string
     */
    public function getInvoiceNumber(): ?string { return $this->get('invoice_number'); }
    public function hasInvoiceNumber(): bool { return $this->has('invoice_number'); }
    /** Whether the invoice is open or partially_paid and past due with a balance remaining. Without schedule_entries, due_at has passed and outstanding_money is above zero; with them, at least one entry is overdue. Computed when the invoice is read.
     * @return bool
     */
    public function getIsOverdue(): bool { return $this->get('is_overdue'); }
    public function hasIsOverdue(): bool { return $this->has('is_overdue'); }
    /** When the invoice was issued. Absent on a draft. Format: date-time.
     * @return ?string
     */
    public function getIssuedAt(): ?string { return $this->get('issued_at'); }
    public function hasIssuedAt(): bool { return $this->has('issued_at'); }
    /** Late fees assessed after issue, minus waivers, including amounts since paid or written off. Itemized in late_fees. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getLateFeeMoney(): MoneyValue { return $this->get('late_fee_money'); }
    public function hasLateFeeMoney(): bool { return $this->has('late_fee_money'); }
    /** Late fees assessed on this invoice, each with its paid, waived, written-off, and outstanding amounts. late_fee_money is their assessed total minus waivers. [] (Value): {@see InvoiceLateFee}. A charge assessed because an invoice payment is overdue.
     * @return list<InvoiceLateFee>
     */
    public function getLateFees(): array { return $this->get('late_fees'); }
    public function hasLateFees(): bool { return $this->has('late_fees'); }
    /** Message to the customer, printed on the invoice and PDF. It cannot change after issue. null when unset.
     * @return string|null
     */
    public function getMemo(): string|null { return $this->get('memo'); }
    public function hasMemo(): bool { return $this->has('memo'); }
    /** Merchant that owns this invoice.
     * @return string
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * @return ?array<array-key, string>
     */
    public function getMetadata(): ?array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Summary of the backing order. Returned only with expand=order. Present only when `expand` includes `order`; `null` when expanded and there is no related order. anyOf[1] (Value): {@see ExpandedOrderSummary}. An order's summary fields, including status, payment and refund status, and pricing and settlement amounts, returned when the order is expanded. anyOf[2] (Value): null.
     * @return ExpandedOrderSummary|null
     */
    public function getOrder(): ExpandedOrderSummary|null { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** The order this invoice bills. Every invoice has one; quick pay creates it.
     * @return string
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** What is still owed: total_money + late_fee_money - paid_money - credit_money - written_off_money, never below zero. 0 on paid, credited, uncollectible, and void invoices; equal to total_money on a draft. Refunds don't change it. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getOutstandingMoney(): MoneyValue { return $this->get('outstanding_money'); }
    public function hasOutstandingMoney(): bool { return $this->has('outstanding_money'); }
    /** When the invoice most recently became paid. Cleared when status leaves paid and set again on a later paid transition. Format: date-time.
     * @return ?string
     */
    public function getPaidAt(): ?string { return $this->get('paid_at'); }
    public function hasPaidAt(): bool { return $this->has('paid_at'); }
    /** Payments collected toward this invoice, online or as recorded manual payments, minus reversed payments, including payments toward late fees. Never below zero. Refunds don't reduce it; they are in refunded_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getPaidMoney(): MoneyValue { return $this->get('paid_money'); }
    public function hasPaidMoney(): bool { return $this->has('paid_money'); }
    /** The resolved due-date policy. Send this object back when updating the draft; payment_terms captures the term's current revision again. The invoice due-date policy resolved at write time. The object can be sent back when updating a draft.
     * @return InvoiceSentMerchantEventDataObjectPaymentDueNone|InvoiceSentMerchantEventDataObjectPaymentDueDate|InvoiceSentMerchantEventDataObjectPaymentDuePaymentTerms|\stdClass
     */
    public function getPaymentDue(): InvoiceSentMerchantEventDataObjectPaymentDueNone|InvoiceSentMerchantEventDataObjectPaymentDueDate|InvoiceSentMerchantEventDataObjectPaymentDuePaymentTerms|\stdClass { return $this->get('payment_due'); }
    public function hasPaymentDue(): bool { return $this->has('payment_due'); }
    /** The payment term captured on the draft, with its due date rule and late fee policy. Later changes to the payment term don't affect this invoice. The payment terms saved on an invoice: the term's name, version, due date calculation, and late fee policy.
     * @return ?InvoicePaymentTermsSnapshot
     */
    public function getPaymentTermsSnapshot(): ?InvoicePaymentTermsSnapshot { return $this->get('payment_terms_snapshot'); }
    public function hasPaymentTermsSnapshot(): bool { return $this->has('payment_terms_snapshot'); }
    /** The buyer's purchase order number, printed on the invoice and PDF. It cannot change after issue. null when unset.
     * @return string|null
     */
    public function getPoNumber(): string|null { return $this->get('po_number'); }
    public function hasPoNumber(): bool { return $this->has('po_number'); }
    /** The hosted invoice link where the buyer views and pays the invoice. Present after issue on API reads, except a list filtered by idempotency_key; webhook payloads leave it out. regenerate-public-link replaces it. Anyone with the link can open the invoice, so treat it as a secret.
     * @return ?string
     */
    public function getPublicUrl(): ?string { return $this->get('public_url'); }
    public function hasPublicUrl(): bool { return $this->has('public_url'); }
    /** Where Flint emails the invoice and its reminders. Email delivery requires it at issue. null when unset.
     * @return string|null
     */
    public function getRecipientEmail(): string|null { return $this->get('recipient_email'); }
    public function hasRecipientEmail(): bool { return $this->has('recipient_email'); }
    /** Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase order number goes in po_number. It cannot change after issue. null when unset.
     * @return string|null
     */
    public function getReference(): string|null { return $this->get('reference'); }
    public function hasReference(): bool { return $this->has('reference'); }
    /** How much of the collected money has been refunded. It doesn't change status. Value enum: "none", "partially_refunded", "refunded".
     * @return string
     */
    public function getRefundStatus(): string { return $this->get('refund_status'); }
    public function hasRefundStatus(): bool { return $this->has('refund_status'); }
    /** Money refunded to the buyer after collection. Refunds don't reopen the balance; refund_status summarizes them. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getRefundedMoney(): MoneyValue { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
    /** Whether automatic reminders are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it.
     * @return bool
     */
    public function getRemindersPaused(): bool { return $this->get('reminders_paused'); }
    public function hasRemindersPaused(): bool { return $this->has('reminders_paused'); }
    /** When automatic reminders were paused. Absent while reminders are active. Format: date-time.
     * @return ?string
     */
    public function getRemindersPausedAt(): ?string { return $this->get('reminders_paused_at'); }
    public function hasRemindersPausedAt(): bool { return $this->has('reminders_paused_at'); }
    /** Where the buyer sends offline payments, shown on the invoice. Defaults to the invoice settings remit-to address. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country.
     * @return ?Address
     */
    public function getRemitToAddress(): ?Address { return $this->get('remit_to_address'); }
    public function hasRemitToAddress(): bool { return $this->has('remit_to_address'); }
    /** The payment schedule, in schedule order. Always [] when the invoice has no schedule and is collected in one balance. [] (Value): {@see InvoiceScheduleEntry}. One payment on an invoice's payment schedule, such as a deposit, installment, or balance, with its due time, amounts, and status.
     * @return list<InvoiceScheduleEntry>
     */
    public function getScheduleEntries(): array { return $this->get('schedule_entries'); }
    public function hasScheduleEntries(): bool { return $this->has('schedule_entries'); }
    /** When Flint will issue and deliver this draft. null when no issue is scheduled. Cleared when the draft is issued or voided, or when you send null. Format: date-time.
     * @return string|null
     */
    public function getScheduledIssueAt(): string|null { return $this->get('scheduled_issue_at'); }
    public function hasScheduledIssueAt(): bool { return $this->has('scheduled_issue_at'); }
    /** The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it as written, without timezone conversion. null when unset. Format: date.
     * @return string|null
     */
    public function getServiceDate(): string|null { return $this->get('service_date'); }
    public function hasServiceDate(): bool { return $this->has('service_date'); }
    /** The billing content of the invoice: line items, discounts, charges, tip, tax, and totals. A draft previews the backing order; issue freezes it, and later order changes don't reach an issued invoice. A frozen copy of an issued invoice's content, including line items, charges, discounts, tax identities, and pricing amounts.
     * @return ?InvoiceSnapshot
     */
    public function getSnapshot(): ?InvoiceSnapshot { return $this->get('snapshot'); }
    public function hasSnapshot(): bool { return $this->has('snapshot'); }
    /** Current invoice status. paid and credited close the current balance and can reopen to open or partially_paid after a payment or credit allocation reversal; invoice.reopened reports that change. void and uncollectible are final. Refunds change refund_status without reopening the balance. Value enum: "draft", "open", "partially_paid", "paid", "void", "uncollectible", "credited".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** The subscription the backing order belongs to, copied when the draft is created and never changed. null when the order isn't part of a subscription.
     * @return string|null
     */
    public function getSubscriptionId(): string|null { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /** IANA time zone for the invoice's calendar dates, such as due dates from payment terms and reminder and late fee day counts. At issue, an invoice without one takes the invoice settings timezone.
     * @return ?string
     */
    public function getTimezone(): ?string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
    /** What the issued invoice bills, equal to snapshot.pricing_amounts.total_money. Fixed at issue; a draft previews the backing order total. Late fees are in late_fee_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getTotalMoney(): MoneyValue { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
    /** When the invoice was marked uncollectible. Format: date-time.
     * @return ?string
     */
    public function getUncollectibleAt(): ?string { return $this->get('uncollectible_at'); }
    public function hasUncollectibleAt(): bool { return $this->has('uncollectible_at'); }
    /** When the invoice last changed. Format: date-time.
     * @return ?string
     */
    public function getUpdatedAt(): ?string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Current invoice version. Send this as expected_version when updating the draft. Format: int64. minimum: 1.
     * @return int
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
    /** When the buyer first opened the invoice through its hosted invoice link. Recorded on a best-effort basis. Format: date-time.
     * @return ?string
     */
    public function getViewedAt(): ?string { return $this->get('viewed_at'); }
    public function hasViewedAt(): bool { return $this->has('viewed_at'); }
    /** When the invoice was voided. Format: date-time.
     * @return ?string
     */
    public function getVoidedAt(): ?string { return $this->get('voided_at'); }
    public function hasVoidedAt(): bool { return $this->has('voided_at'); }
    /** The balance written off when the invoice was marked uncollectible, including unpaid late fees. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getWrittenOffMoney(): MoneyValue { return $this->get('written_off_money'); }
    public function hasWrittenOffMoney(): bool { return $this->has('written_off_money'); }
}
