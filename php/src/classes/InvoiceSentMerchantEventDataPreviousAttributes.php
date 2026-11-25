<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string>|null $cc_emails
 * @property-read string|null $closed_at
 * @property-read \stdClass|null $collection
 * @property-read string|null $collection_block_status
 * @property-read string|null $created_at
 * @property-read ExpandedCustomerSummaryPreviousAttributes|null $customer
 * @property-read string|null $customer_id
 * @property-read string|null $delivery_mode
 * @property-read string|null $due_date
 * @property-read string|null $external_reference_id
 * @property-read string|null $footer
 * @property-read string|null $idempotency_key
 * @property-read string|null $invoice_id
 * @property-read string|null $invoice_number
 * @property-read bool|null $is_overdue
 * @property-read string|null $issued_at
 * @property-read list<InvoiceLateFeePreviousAttributes>|null $late_fees
 * @property-read string|null $memo
 * @property-read string|null $merchant_id
 * @property-read array<array-key, string>|null $metadata
 * @property-read ExpandedOrderSummaryPreviousAttributes|null $order
 * @property-read string|null $order_id
 * @property-read string|null $paid_at
 * @property-read \stdClass|null $payment_due
 * @property-read InvoicePaymentTermsSnapshotPreviousAttributes|null $payment_terms_snapshot
 * @property-read PlatformFeeRulePreviousAttributes|null $platform_fee_rule
 * @property-read string|null $po_number
 * @property-read PricingAmountsPreviousAttributes|null $pricing_amounts
 * @property-read string|null $recipient_email
 * @property-read string|null $reference
 * @property-read string|null $refund_status
 * @property-read bool|null $reminders_paused
 * @property-read string|null $reminders_paused_at
 * @property-read AddressPreviousAttributes|null $remit_to_address
 * @property-read list<InvoiceScheduleEntryPreviousAttributes>|null $schedule_entries
 * @property-read string|null $scheduled_issue_at
 * @property-read string|null $service_date
 * @property-read InvoiceSettlementAmountsPreviousAttributes|null $settlement_amounts
 * @property-read InvoiceSnapshotPreviousAttributes|null $snapshot
 * @property-read string|null $status
 * @property-read string|null $subscription_id
 * @property-read list<string>|null $supported_actions
 * @property-read string|null $timezone
 * @property-read string|null $uncollectible_at
 * @property-read string|null $updated_at
 * @property-read int|null $version
 * @property-read string|null $viewed_at
 * @property-read string|null $voided_at
 * Presence-aware response; omitted optional fields return null. */
final class InvoiceSentMerchantEventDataPreviousAttributes extends Model {
    /** @param array{'cc_emails'?: mixed, 'closed_at'?: mixed, 'collection'?: mixed, 'collection_block_status'?: mixed, 'created_at'?: mixed, 'customer'?: mixed, 'customer_id'?: mixed, 'delivery_mode'?: mixed, 'due_date'?: mixed, 'external_reference_id'?: mixed, 'footer'?: mixed, 'idempotency_key'?: mixed, 'invoice_id'?: mixed, 'invoice_number'?: mixed, 'is_overdue'?: mixed, 'issued_at'?: mixed, 'late_fees'?: mixed, 'memo'?: mixed, 'merchant_id'?: mixed, 'metadata'?: mixed, 'order'?: mixed, 'order_id'?: mixed, 'paid_at'?: mixed, 'payment_due'?: mixed, 'payment_terms_snapshot'?: mixed, 'platform_fee_rule'?: mixed, 'po_number'?: mixed, 'pricing_amounts'?: mixed, 'recipient_email'?: mixed, 'reference'?: mixed, 'refund_status'?: mixed, 'reminders_paused'?: mixed, 'reminders_paused_at'?: mixed, 'remit_to_address'?: mixed, 'schedule_entries'?: mixed, 'scheduled_issue_at'?: mixed, 'service_date'?: mixed, 'settlement_amounts'?: mixed, 'snapshot'?: mixed, 'status'?: mixed, 'subscription_id'?: mixed, 'supported_actions'?: mixed, 'timezone'?: mixed, 'uncollectible_at'?: mixed, 'updated_at'?: mixed, 'version'?: mixed, 'viewed_at'?: mixed, 'voided_at'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceSentMerchantEventDataPreviousAttributes')); }
    /** Additional recipients copied on the invoice email and every reminder. anyOf[1] (Value): Array of string. Additional recipients copied on the invoice email and every reminder. anyOf[1][] (Value): string. anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getCcEmails(): array|null { return $this->get('cc_emails'); }
    public function hasCcEmails(): bool { return $this->has('cc_emails'); }
    /** When the current closed interval began. Cleared when status returns to open or partially_paid. A direct move between closed statuses preserves this timestamp. anyOf[1] (Value): string. When the current closed interval began. Cleared when status returns to open or partially_paid. A direct move between closed statuses preserves this timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getClosedAt(): string|null { return $this->get('closed_at'); }
    public function hasClosedAt(): bool { return $this->has('closed_at'); }
    /** How this invoice is collected, resolved when the draft is written. Send this object back when updating its collection policy. anyOf[1] (Value): {@see InvoiceCollectionPreviousAttributes}. anyOf[2] (Value): null.
     * @return \stdClass|null
     */
    public function getCollection(): \stdClass|null { return $this->get('collection'); }
    public function hasCollection(): bool { return $this->has('collection'); }
    /** Whether collection is blocked. While it is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum: "none", "inventory_blocked", "resolved". anyOf[1] (Value): string. Whether collection is blocked. While it is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum: "none", "inventory_blocked", "resolved". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCollectionBlockStatus(): string|null { return $this->get('collection_block_status'); }
    public function hasCollectionBlockStatus(): bool { return $this->has('collection_block_status'); }
    /** When the invoice was created. anyOf[1] (Value): string. When the invoice was created. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Summary of the billed customer. Returned only with expand=customer. Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. anyOf[1] (Value): {@see ExpandedCustomerSummaryPreviousAttributes}. anyOf[2] (Value): null.
     * @return ExpandedCustomerSummaryPreviousAttributes|null
     */
    public function getCustomer(): ExpandedCustomerSummaryPreviousAttributes|null { return $this->get('customer'); }
    public function hasCustomer(): bool { return $this->has('customer'); }
    /** Customer billed by this invoice. Absent when the invoice has no customer. anyOf[1] (Value): string. Customer billed by this invoice. Absent when the invoice has no customer. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCustomerId(): string|null { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** How issue delivered the invoice. Value enum: "email", "caller_managed". anyOf[1] (Value): string. How issue delivered the invoice. Value enum: "email", "caller_managed". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDeliveryMode(): string|null { return $this->get('delivery_mode'); }
    public function hasDeliveryMode(): bool { return $this->has('delivery_mode'); }
    /** Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only after this date ends. Automatic collection runs at the later of issue and the start of this date. With payment terms, issue computes this date from issued_at. Absent when there is no due date. anyOf[1] (Value): string. Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only after this date ends. Automatic collection runs at the later of issue and the start of this date. With payment terms, issue computes this date from issued_at. Absent when there is no due date. Format: date. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDueDate(): string|null { return $this->get('due_date'); }
    public function hasDueDate(): bool { return $this->has('due_date'); }
    /** Caller-owned identifier for this resource in an external system. Use it as your sync key: it isn't printed on the invoice. `null` when unset. anyOf[1] (Value): string. Caller-owned identifier for this resource in an external system. Use it as your sync key: it isn't printed on the invoice. `null` when unset. minLength: 1. maxLength: 255. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Fine print at the bottom of the invoice and PDF. It cannot change after issue. `null` when unset. anyOf[1] (Value): string. Fine print at the bottom of the invoice and PDF. It cannot change after issue. `null` when unset. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getFooter(): string|null { return $this->get('footer'); }
    public function hasFooter(): bool { return $this->has('footer'); }
    /** The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. Buyer sessions on routes shared with merchants get `null`. `/v1/me` responses do not include this field. anyOf[1] (Value): string. The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. Buyer sessions on routes shared with merchants get `null`. `/v1/me` responses do not include this field. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getIdempotencyKey(): string|null { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** Flint invoice ID. anyOf[1] (Value): string. Flint invoice ID. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInvoiceId(): string|null { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** Sequential document number assigned when the invoice is issued. Numbering is per merchant, with test and live mode numbered independently. anyOf[1] (Value): string. Sequential document number assigned when the invoice is issued. Numbering is per merchant, with test and live mode numbered independently. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInvoiceNumber(): string|null { return $this->get('invoice_number'); }
    public function hasInvoiceNumber(): bool { return $this->has('invoice_number'); }
    /** Whether the invoice is open or partially_paid and past due with a balance remaining. Without schedule_entries, the due_date has ended in timezone (UTC when absent) and outstanding_money is above zero; with them, at least one entry is overdue. Computed when the invoice is read. anyOf[1] (Value): boolean. Whether the invoice is open or partially_paid and past due with a balance remaining. Without schedule_entries, the due_date has ended in timezone (UTC when absent) and outstanding_money is above zero; with them, at least one entry is overdue. Computed when the invoice is read. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getIsOverdue(): bool|null { return $this->get('is_overdue'); }
    public function hasIsOverdue(): bool { return $this->has('is_overdue'); }
    /** When the invoice was issued. Absent on a draft. anyOf[1] (Value): string. When the invoice was issued. Absent on a draft. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getIssuedAt(): string|null { return $this->get('issued_at'); }
    public function hasIssuedAt(): bool { return $this->has('issued_at'); }
    /** Late fees assessed on this invoice, each with its paid, waived, written-off, and outstanding amounts. settlement_amounts.late_fee_money is their assessed total minus waivers. anyOf[1] (Value): Array of {@see InvoiceLateFeePreviousAttributes}. Late fees assessed on this invoice, each with its paid, waived, written-off, and outstanding amounts. settlement_amounts.late_fee_money is their assessed total minus waivers. anyOf[1][] (Value): {@see InvoiceLateFeePreviousAttributes}. anyOf[2] (Value): null.
     * @return list<InvoiceLateFeePreviousAttributes>|null
     */
    public function getLateFees(): array|null { return $this->get('late_fees'); }
    public function hasLateFees(): bool { return $this->has('late_fees'); }
    /** Message to the customer, printed on the invoice and PDF. It cannot change after issue. `null` when unset. anyOf[1] (Value): string. Message to the customer, printed on the invoice and PDF. It cannot change after issue. `null` when unset. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getMemo(): string|null { return $this->get('memo'); }
    public function hasMemo(): bool { return $this->has('memo'); }
    /** Merchant that owns this invoice. anyOf[1] (Value): string. Merchant that owns this invoice. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getMerchantId(): string|null { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Caller-owned metadata. anyOf[1] (Value): {@see MetadataMapPreviousAttributes}. anyOf[2] (Value): null.
     * @return array<array-key, string>|null
     */
    public function getMetadata(): array|null { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Summary of the backing order. Returned only with expand=order. Present only when `expand` includes `order`; `null` when expanded and there is no related order. anyOf[1] (Value): {@see ExpandedOrderSummaryPreviousAttributes}. anyOf[2] (Value): null.
     * @return ExpandedOrderSummaryPreviousAttributes|null
     */
    public function getOrder(): ExpandedOrderSummaryPreviousAttributes|null { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** The order this invoice bills. Every invoice has one; quick pay creates it. anyOf[1] (Value): string. The order this invoice bills. Every invoice has one; quick pay creates it. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderId(): string|null { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** When the invoice most recently became paid. Cleared when status leaves paid and set again on a later paid transition. anyOf[1] (Value): string. When the invoice most recently became paid. Cleared when status leaves paid and set again on a later paid transition. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPaidAt(): string|null { return $this->get('paid_at'); }
    public function hasPaidAt(): bool { return $this->has('paid_at'); }
    /** The resolved due-date policy. Send this object back when updating the draft; payment_terms captures the term's current revision again. anyOf[1] (Value): {@see InvoicePaymentDuePreviousAttributes}. anyOf[2] (Value): null.
     * @return \stdClass|null
     */
    public function getPaymentDue(): \stdClass|null { return $this->get('payment_due'); }
    public function hasPaymentDue(): bool { return $this->has('payment_due'); }
    /** The payment term captured on the draft, with its due date rule and late fee policy. Later changes to the payment term don't affect this invoice. anyOf[1] (Value): {@see InvoicePaymentTermsSnapshotPreviousAttributes}. anyOf[2] (Value): null.
     * @return InvoicePaymentTermsSnapshotPreviousAttributes|null
     */
    public function getPaymentTermsSnapshot(): InvoicePaymentTermsSnapshotPreviousAttributes|null { return $this->get('payment_terms_snapshot'); }
    public function hasPaymentTermsSnapshot(): bool { return $this->has('payment_terms_snapshot'); }
    /** The active rule for payments Flint collects for this invoice. Omitted when no rule is set. anyOf[1] (Value): {@see PlatformFeeRulePreviousAttributes}. anyOf[2] (Value): null.
     * @return PlatformFeeRulePreviousAttributes|null
     */
    public function getPlatformFeeRule(): PlatformFeeRulePreviousAttributes|null { return $this->get('platform_fee_rule'); }
    public function hasPlatformFeeRule(): bool { return $this->has('platform_fee_rule'); }
    /** The buyer's purchase order number, printed on the invoice and PDF. It cannot change after issue. `null` when unset. anyOf[1] (Value): string. The buyer's purchase order number, printed on the invoice and PDF. It cannot change after issue. `null` when unset. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPoNumber(): string|null { return $this->get('po_number'); }
    public function hasPoNumber(): bool { return $this->has('po_number'); }
    /** The invoice pricing totals, frozen at issue. A draft previews the backing order. total_money excludes late fees, which are in settlement_amounts.late_fee_money. anyOf[1] (Value): {@see PricingAmountsPreviousAttributes}. anyOf[2] (Value): null.
     * @return PricingAmountsPreviousAttributes|null
     */
    public function getPricingAmounts(): PricingAmountsPreviousAttributes|null { return $this->get('pricing_amounts'); }
    public function hasPricingAmounts(): bool { return $this->has('pricing_amounts'); }
    /** Where Flint emails the invoice and its reminders. Email delivery requires it at issue. `null` when unset. anyOf[1] (Value): string. Where Flint emails the invoice and its reminders. Email delivery requires it at issue. `null` when unset. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getRecipientEmail(): string|null { return $this->get('recipient_email'); }
    public function hasRecipientEmail(): bool { return $this->has('recipient_email'); }
    /** Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase order number goes in po_number. It cannot change after issue. `null` when unset. anyOf[1] (Value): string. Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase order number goes in po_number. It cannot change after issue. `null` when unset. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReference(): string|null { return $this->get('reference'); }
    public function hasReference(): bool { return $this->has('reference'); }
    /** How much of the collected money has been refunded. It doesn't change status. Value enum: "none", "partially_refunded", "refunded". anyOf[1] (Value): string. How much of the collected money has been refunded. It doesn't change status. Value enum: "none", "partially_refunded", "refunded". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getRefundStatus(): string|null { return $this->get('refund_status'); }
    public function hasRefundStatus(): bool { return $this->has('refund_status'); }
    /** Whether automatic reminders are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it. anyOf[1] (Value): boolean. Whether automatic reminders are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getRemindersPaused(): bool|null { return $this->get('reminders_paused'); }
    public function hasRemindersPaused(): bool { return $this->has('reminders_paused'); }
    /** When automatic reminders were paused. Absent while reminders are active. anyOf[1] (Value): string. When automatic reminders were paused. Absent while reminders are active. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getRemindersPausedAt(): string|null { return $this->get('reminders_paused_at'); }
    public function hasRemindersPausedAt(): bool { return $this->has('reminders_paused_at'); }
    /** Where the buyer sends offline payments, shown on the invoice. Defaults to the invoice settings remit-to address. anyOf[1] (Value): {@see AddressPreviousAttributes}. anyOf[2] (Value): null.
     * @return AddressPreviousAttributes|null
     */
    public function getRemitToAddress(): AddressPreviousAttributes|null { return $this->get('remit_to_address'); }
    public function hasRemitToAddress(): bool { return $this->has('remit_to_address'); }
    /** The payment schedule, in schedule order. Always [] when the invoice has no schedule and is collected in one balance. anyOf[1] (Value): Array of {@see InvoiceScheduleEntryPreviousAttributes}. The payment schedule, in schedule order. Always [] when the invoice has no schedule and is collected in one balance. anyOf[1][] (Value): {@see InvoiceScheduleEntryPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<InvoiceScheduleEntryPreviousAttributes>|null
     */
    public function getScheduleEntries(): array|null { return $this->get('schedule_entries'); }
    public function hasScheduleEntries(): bool { return $this->has('schedule_entries'); }
    /** When Flint will issue and deliver this draft. `null` when no issue is scheduled. Cleared when the draft is issued or voided, or when you send null. anyOf[1] (Value): string. When Flint will issue and deliver this draft. `null` when no issue is scheduled. Cleared when the draft is issued or voided, or when you send null. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getScheduledIssueAt(): string|null { return $this->get('scheduled_issue_at'); }
    public function hasScheduledIssueAt(): bool { return $this->has('scheduled_issue_at'); }
    /** The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it as written, without timezone conversion. `null` when unset. anyOf[1] (Value): string. The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it as written, without timezone conversion. `null` when unset. Format: date. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getServiceDate(): string|null { return $this->get('service_date'); }
    public function hasServiceDate(): bool { return $this->has('service_date'); }
    /** Payments, refunds, write-offs, allocated credit notes, late fees, and the remaining invoice balance. What is still owed: pricing_amounts.total_money + late_fee_money - paid_money - credited_money - written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided invoices; equal to pricing_amounts.total_money on a draft. Refunds and card chargebacks don't change it. Lost bank returns reopen the balance. anyOf[1] (Value): {@see InvoiceSettlementAmountsPreviousAttributes}. anyOf[2] (Value): null.
     * @return InvoiceSettlementAmountsPreviousAttributes|null
     */
    public function getSettlementAmounts(): InvoiceSettlementAmountsPreviousAttributes|null { return $this->get('settlement_amounts'); }
    public function hasSettlementAmounts(): bool { return $this->has('settlement_amounts'); }
    /** The billing content of the invoice: line items, discounts, charges, tip, and tax. A draft previews the backing order; issue freezes it, and later order changes don't reach an issued invoice. anyOf[1] (Value): {@see InvoiceSnapshotPreviousAttributes}. anyOf[2] (Value): null.
     * @return InvoiceSnapshotPreviousAttributes|null
     */
    public function getSnapshot(): InvoiceSnapshotPreviousAttributes|null { return $this->get('snapshot'); }
    public function hasSnapshot(): bool { return $this->has('snapshot'); }
    /** Current invoice status. paid and credited close the current balance and can reopen to open or partially_paid after a payment or credit allocation reversal; invoice.reopened reports that change. An uncollectible invoice accepts manual recovery payments and becomes paid when fully recovered; reversals restore the write-off. voided is final. Refunds change refund_status without reopening the balance. An ACH bank return reverses paid_money and reopens the balance. A lost card chargeback leaves paid_money, the balance, and status unchanged; collecting it again requires a new invoice. Value enum: "draft", "open", "partially_paid", "paid", "voided", "uncollectible", "credited". anyOf[1] (Value): string. Current invoice status. paid and credited close the current balance and can reopen to open or partially_paid after a payment or credit allocation reversal; invoice.reopened reports that change. An uncollectible invoice accepts manual recovery payments and becomes paid when fully recovered; reversals restore the write-off. voided is final. Refunds change refund_status without reopening the balance. An ACH bank return reverses paid_money and reopens the balance. A lost card chargeback leaves paid_money, the balance, and status unchanged; collecting it again requires a new invoice. Value enum: "draft", "open", "partially_paid", "paid", "voided", "uncollectible", "credited". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** The subscription the backing order belongs to, copied when the draft is created and never changed. `null` when the order isn't part of a subscription. anyOf[1] (Value): string. The subscription the backing order belongs to, copied when the draft is created and never changed. `null` when the order isn't part of a subscription. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSubscriptionId(): string|null { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /** Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. [] enum: "collect", "issue", "mark_uncollectible", "void". anyOf[1] (Value): Array of string. Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. [] enum: "collect", "issue", "mark_uncollectible", "void". anyOf[1][] (Value): string.  Value enum: "collect", "issue", "mark_uncollectible", "void". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getSupportedActions(): array|null { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** IANA time zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken from the merchant's timezone when the draft is written, or UTC when unset. Later merchant changes do not alter this invoice's calendar. anyOf[1] (Value): string. IANA time zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken from the merchant's timezone when the draft is written, or UTC when unset. Later merchant changes do not alter this invoice's calendar. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getTimezone(): string|null { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
    /** When the invoice was marked uncollectible. anyOf[1] (Value): string. When the invoice was marked uncollectible. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUncollectibleAt(): string|null { return $this->get('uncollectible_at'); }
    public function hasUncollectibleAt(): bool { return $this->has('uncollectible_at'); }
    /** When the invoice last changed. anyOf[1] (Value): string. When the invoice last changed. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Current invoice version. Send this as expected_version when updating the draft. anyOf[1] (Value): integer. Current invoice version. Send this as expected_version when updating the draft. Format: int64. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getVersion(): int|null { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
    /** When the buyer first opened the invoice through its hosted invoice link. Recorded on a best-effort basis. anyOf[1] (Value): string. When the buyer first opened the invoice through its hosted invoice link. Recorded on a best-effort basis. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getViewedAt(): string|null { return $this->get('viewed_at'); }
    public function hasViewedAt(): bool { return $this->has('viewed_at'); }
    /** When the invoice was voided. anyOf[1] (Value): string. When the invoice was voided. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getVoidedAt(): string|null { return $this->get('voided_at'); }
    public function hasVoidedAt(): bool { return $this->has('voided_at'); }
}
