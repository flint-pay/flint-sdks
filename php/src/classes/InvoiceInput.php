<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $cc_emails
 * @property-read string|\DateTimeInterface $closed_at
 * @property-read InvoiceCollectionInput|array<array-key, mixed>|\stdClass $collection
 * @property-read string $collection_block_status
 * @property-read string|\DateTimeInterface $created_at
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $credit_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $currently_due_money
 * @property-read array{'created_at'?: string|\DateTimeInterface, 'customer_id': string, 'email': string|null, 'name': string|null, 'phone': string|null, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null $customer
 * @property-read string $customer_id
 * @property-read string $delivery_mode
 * @property-read string|\DateTimeInterface $due_at
 * @property-read string|null $external_reference_id
 * @property-read string|null $footer
 * @property-read string $invoice_id
 * @property-read string $invoice_number
 * @property-read bool $is_overdue
 * @property-read string|\DateTimeInterface $issued_at
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $late_fee_money
 * @property-read list<InvoiceLateFeeInput|array<array-key, mixed>|\stdClass> $late_fees
 * @property-read string|null $memo
 * @property-read string $merchant_id
 * @property-read array<array-key, string>|\stdClass $metadata
 * @property-read array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'fulfillment_status'?: string, 'order_id': string, 'order_number'?: string, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': SettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null $order
 * @property-read string $order_id
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $outstanding_money
 * @property-read string|\DateTimeInterface $paid_at
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $paid_money
 * @property-read InvoicePaymentDueInput|array<array-key, mixed>|\stdClass $payment_due
 * @property-read InvoicePaymentTermsSnapshotInput|array<array-key, mixed>|\stdClass $payment_terms_snapshot
 * @property-read string|null $po_number
 * @property-read string $public_url
 * @property-read string|null $recipient_email
 * @property-read string|null $reference
 * @property-read string $refund_status
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $refunded_money
 * @property-read bool $reminders_paused
 * @property-read string|\DateTimeInterface $reminders_paused_at
 * @property-read AddressInput|array<array-key, mixed>|\stdClass $remit_to_address
 * @property-read list<InvoiceScheduleEntryInput|array<array-key, mixed>|\stdClass> $schedule_entries
 * @property-read string|\DateTimeInterface|null $scheduled_issue_at
 * @property-read string|null $service_date
 * @property-read InvoiceSnapshotInput|array<array-key, mixed>|\stdClass $snapshot
 * @property-read string $status
 * @property-read string|null $subscription_id
 * @property-read string $timezone
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $total_money
 * @property-read string|\DateTimeInterface $uncollectible_at
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read string $version
 * @property-read string|\DateTimeInterface $viewed_at
 * @property-read string|\DateTimeInterface $voided_at
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $written_off_money
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoiceInput extends Model {
    /** @param array{'cc_emails': list<string>, 'closed_at'?: string|\DateTimeInterface, 'collection': InvoiceCollectionInput|array<array-key, mixed>|\stdClass, 'collection_block_status': string, 'created_at'?: string|\DateTimeInterface, 'credit_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'currently_due_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'customer'?: array{'created_at'?: string|\DateTimeInterface, 'customer_id': string, 'email': string|null, 'name': string|null, 'phone': string|null, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'customer_id'?: string, 'delivery_mode'?: string, 'due_at'?: string|\DateTimeInterface, 'external_reference_id': string|null, 'footer': string|null, 'invoice_id': string, 'invoice_number'?: string, 'is_overdue': bool, 'issued_at'?: string|\DateTimeInterface, 'late_fee_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'late_fees': list<InvoiceLateFeeInput|array<array-key, mixed>|\stdClass>, 'memo': string|null, 'merchant_id': string, 'metadata'?: array<array-key, string>|\stdClass, 'order'?: array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'fulfillment_status'?: string, 'order_id': string, 'order_number'?: string, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': SettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'order_id': string, 'outstanding_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'paid_at'?: string|\DateTimeInterface, 'paid_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'payment_due': InvoicePaymentDueInput|array<array-key, mixed>|\stdClass, 'payment_terms_snapshot'?: InvoicePaymentTermsSnapshotInput|array<array-key, mixed>|\stdClass, 'po_number': string|null, 'public_url'?: string, 'recipient_email': string|null, 'reference': string|null, 'refund_status': string, 'refunded_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'reminders_paused': bool, 'reminders_paused_at'?: string|\DateTimeInterface, 'remit_to_address'?: AddressInput|array<array-key, mixed>|\stdClass, 'schedule_entries': list<InvoiceScheduleEntryInput|array<array-key, mixed>|\stdClass>, 'scheduled_issue_at': string|\DateTimeInterface|null, 'service_date': string|null, 'snapshot'?: InvoiceSnapshotInput|array<array-key, mixed>|\stdClass, 'status': string, 'subscription_id': string|null, 'timezone'?: string, 'total_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'uncollectible_at'?: string|\DateTimeInterface, 'updated_at'?: string|\DateTimeInterface, 'version': string, 'viewed_at'?: string|\DateTimeInterface, 'voided_at'?: string|\DateTimeInterface, 'written_off_money': MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceInput')); }
    /** Shape $ (Value): Array of string. Additional recipients copied on the invoice email and every reminder. Shape $[] (Value): string.
     * @return list<string>
     * @throws SdkError When cc_emails is omitted; use hasCcEmails() or valueOrDefault().
     */
    public function getCcEmails(): array { return $this->get('cc_emails'); }
    public function hasCcEmails(): bool { return $this->has('cc_emails'); }
    /** Shape $ (Value): string. When the current closed interval began. Cleared when status returns to open or partially_paid. A direct move between closed statuses preserves this timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When closed_at is omitted; use hasClosedAt() or valueOrDefault().
     */
    public function getClosedAt(): string|\DateTimeInterface { return $this->get('closed_at'); }
    public function hasClosedAt(): bool { return $this->has('closed_at'); }
    /** Shape $ (Value): {@see InvoiceCollectionInput}. How this invoice is collected, resolved when the draft is written. Send this object back when updating its collection policy. The invoice collection policy resolved at write time. The object can be sent back when updating a draft.
     * @return InvoiceCollectionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When collection is omitted; use hasCollection() or valueOrDefault().
     */
    public function getCollection(): mixed { return $this->get('collection'); }
    public function hasCollection(): bool { return $this->has('collection'); }
    /** Shape $ (Value): string. Whether collection is blocked. While it is inventory_blocked, collection attempts return INVOICE_COLLECTION_BLOCKED. Value enum: "none", "inventory_blocked", "resolved".
     * @return string
     * @throws SdkError When collection_block_status is omitted; use hasCollectionBlockStatus() or valueOrDefault().
     */
    public function getCollectionBlockStatus(): string { return $this->get('collection_block_status'); }
    public function hasCollectionBlockStatus(): bool { return $this->has('collection_block_status'); }
    /** Shape $ (Value): string. When the invoice was created. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Credit note credit allocated to this invoice, minus reversed allocations. Unallocated credit isn't included. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When credit_money is omitted; use hasCreditMoney() or valueOrDefault().
     */
    public function getCreditMoney(): mixed { return $this->get('credit_money'); }
    public function hasCreditMoney(): bool { return $this->has('credit_money'); }
    /** Shape $ (Value): {@see MoneyValueInput}. The part of the balance due now. Without schedule_entries, it equals outstanding_money. With schedule_entries, it is the outstanding amount of the first entry, in schedule order, whose due time has arrived and that still has a balance, or 0 when there is none. It is the amount the next collect call or checkout session charges. To total everything past due, add the outstanding_money of the entries whose status is due or overdue. Always 0 unless the invoice is open or partially_paid. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When currently_due_money is omitted; use hasCurrentlyDueMoney() or valueOrDefault().
     */
    public function getCurrentlyDueMoney(): mixed { return $this->get('currently_due_money'); }
    public function hasCurrentlyDueMoney(): bool { return $this->has('currently_due_money'); }
    /** Shape $ (Value): {@see ExpandedCustomerSummaryInput} or null. Summary of the billed customer. Returned only with expand=customer. Shape $.anyOf[1] (Value): {@see ExpandedCustomerSummaryInput}. A customer's summary fields, returned in place of a customer ID when the customer is expanded. Shape $.anyOf[2] (Value): null.
     * @return array{'created_at'?: string|\DateTimeInterface, 'customer_id': string, 'email': string|null, 'name': string|null, 'phone': string|null, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null
     * @throws SdkError When customer is omitted; use hasCustomer() or valueOrDefault().
     */
    public function getCustomer(): mixed { return $this->get('customer'); }
    public function hasCustomer(): bool { return $this->has('customer'); }
    /** Shape $ (Value): string. Customer billed by this invoice. Absent when the invoice has no customer.
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Shape $ (Value): string. How issue delivered the invoice. Value enum: "email", "caller_managed".
     * @return string
     * @throws SdkError When delivery_mode is omitted; use hasDeliveryMode() or valueOrDefault().
     */
    public function getDeliveryMode(): string { return $this->get('delivery_mode'); }
    public function hasDeliveryMode(): bool { return $this->has('delivery_mode'); }
    /** Shape $ (Value): string. When payment is due. With payment terms, issue sets it from issued_at and the terms, counted in the invoice's timezone. Absent when the invoice has no due date. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When due_at is omitted; use hasDueAt() or valueOrDefault().
     */
    public function getDueAt(): string|\DateTimeInterface { return $this->get('due_at'); }
    public function hasDueAt(): bool { return $this->has('due_at'); }
    /** Shape $ (Value): string or null. Caller-owned identifier for this resource in an external system. Use it as your sync key: it isn't printed on the invoice. null when unset. minLength: 1. maxLength: 255.
     * @return string|null
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): string or null. Fine print at the bottom of the invoice and PDF. It cannot change after issue. null when unset.
     * @return string|null
     * @throws SdkError When footer is omitted; use hasFooter() or valueOrDefault().
     */
    public function getFooter(): string|null { return $this->get('footer'); }
    public function hasFooter(): bool { return $this->has('footer'); }
    /** Shape $ (Value): string. Flint invoice ID.
     * @return string
     * @throws SdkError When invoice_id is omitted; use hasInvoiceId() or valueOrDefault().
     */
    public function getInvoiceId(): string { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** Shape $ (Value): string. Sequential document number assigned when the invoice is issued. Numbering is per merchant, with test and live mode numbered independently.
     * @return string
     * @throws SdkError When invoice_number is omitted; use hasInvoiceNumber() or valueOrDefault().
     */
    public function getInvoiceNumber(): string { return $this->get('invoice_number'); }
    public function hasInvoiceNumber(): bool { return $this->has('invoice_number'); }
    /** Shape $ (Value): boolean. Whether the invoice is open or partially_paid and past due with a balance remaining. Without schedule_entries, due_at has passed and outstanding_money is above zero; with them, at least one entry is overdue. Computed when the invoice is read.
     * @return bool
     * @throws SdkError When is_overdue is omitted; use hasIsOverdue() or valueOrDefault().
     */
    public function getIsOverdue(): bool { return $this->get('is_overdue'); }
    public function hasIsOverdue(): bool { return $this->has('is_overdue'); }
    /** Shape $ (Value): string. When the invoice was issued. Absent on a draft. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When issued_at is omitted; use hasIssuedAt() or valueOrDefault().
     */
    public function getIssuedAt(): string|\DateTimeInterface { return $this->get('issued_at'); }
    public function hasIssuedAt(): bool { return $this->has('issued_at'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Late fees assessed after issue, minus waivers, including amounts since paid or written off. Itemized in late_fees. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When late_fee_money is omitted; use hasLateFeeMoney() or valueOrDefault().
     */
    public function getLateFeeMoney(): mixed { return $this->get('late_fee_money'); }
    public function hasLateFeeMoney(): bool { return $this->has('late_fee_money'); }
    /** Shape $ (Value): Array of {@see InvoiceLateFeeInput}. Late fees assessed on this invoice, each with its paid, waived, written-off, and outstanding amounts. late_fee_money is their assessed total minus waivers. Shape $[] (Value): {@see InvoiceLateFeeInput}. A charge assessed because an invoice payment is overdue.
     * @return list<InvoiceLateFeeInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When late_fees is omitted; use hasLateFees() or valueOrDefault().
     */
    public function getLateFees(): array { return $this->get('late_fees'); }
    public function hasLateFees(): bool { return $this->has('late_fees'); }
    /** Shape $ (Value): string or null. Message to the customer, printed on the invoice and PDF. It cannot change after issue. null when unset.
     * @return string|null
     * @throws SdkError When memo is omitted; use hasMemo() or valueOrDefault().
     */
    public function getMemo(): string|null { return $this->get('memo'); }
    public function hasMemo(): bool { return $this->has('memo'); }
    /** Shape $ (Value): string. Merchant that owns this invoice.
     * @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Shape $ (Value): Map of string. Caller-owned metadata. Shape $.* (Value): string.
     * @return array<array-key, string>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): {@see ExpandedOrderSummaryInput} or null. Summary of the backing order. Returned only with expand=order. Shape $.anyOf[1] (Value): {@see ExpandedOrderSummaryInput}. An order's summary fields, including status, payment and refund status, and pricing and settlement amounts, returned when the order is expanded. Shape $.anyOf[2] (Value): null.
     * @return array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'fulfillment_status'?: string, 'order_id': string, 'order_number'?: string, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': SettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null
     * @throws SdkError When order is omitted; use hasOrder() or valueOrDefault().
     */
    public function getOrder(): mixed { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** Shape $ (Value): string. The order this invoice bills. Every invoice has one; quick pay creates it.
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Shape $ (Value): {@see MoneyValueInput}. What is still owed: total_money + late_fee_money - paid_money - credit_money - written_off_money, never below zero. 0 on paid, credited, uncollectible, and void invoices; equal to total_money on a draft. Refunds don't change it. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When outstanding_money is omitted; use hasOutstandingMoney() or valueOrDefault().
     */
    public function getOutstandingMoney(): mixed { return $this->get('outstanding_money'); }
    public function hasOutstandingMoney(): bool { return $this->has('outstanding_money'); }
    /** Shape $ (Value): string. When the invoice most recently became paid. Cleared when status leaves paid and set again on a later paid transition. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When paid_at is omitted; use hasPaidAt() or valueOrDefault().
     */
    public function getPaidAt(): string|\DateTimeInterface { return $this->get('paid_at'); }
    public function hasPaidAt(): bool { return $this->has('paid_at'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Payments collected toward this invoice, online or as recorded manual payments, minus reversed payments, including payments toward late fees. Never below zero. Refunds don't reduce it; they are in refunded_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When paid_money is omitted; use hasPaidMoney() or valueOrDefault().
     */
    public function getPaidMoney(): mixed { return $this->get('paid_money'); }
    public function hasPaidMoney(): bool { return $this->has('paid_money'); }
    /** Shape $ (Value): {@see InvoicePaymentDueInput}. The resolved due-date policy. Send this object back when updating the draft; payment_terms captures the term's current revision again. The invoice due-date policy resolved at write time. The object can be sent back when updating a draft.
     * @return InvoicePaymentDueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When payment_due is omitted; use hasPaymentDue() or valueOrDefault().
     */
    public function getPaymentDue(): mixed { return $this->get('payment_due'); }
    public function hasPaymentDue(): bool { return $this->has('payment_due'); }
    /** Shape $ (Value): {@see InvoicePaymentTermsSnapshotInput}. The payment term captured on the draft, with its due date rule and late fee policy. Later changes to the payment term don't affect this invoice. The payment terms saved on an invoice: the term's name, version, due date calculation, and late fee policy.
     * @return InvoicePaymentTermsSnapshotInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When payment_terms_snapshot is omitted; use hasPaymentTermsSnapshot() or valueOrDefault().
     */
    public function getPaymentTermsSnapshot(): mixed { return $this->get('payment_terms_snapshot'); }
    public function hasPaymentTermsSnapshot(): bool { return $this->has('payment_terms_snapshot'); }
    /** Shape $ (Value): string or null. The buyer's purchase order number, printed on the invoice and PDF. It cannot change after issue. null when unset.
     * @return string|null
     * @throws SdkError When po_number is omitted; use hasPoNumber() or valueOrDefault().
     */
    public function getPoNumber(): string|null { return $this->get('po_number'); }
    public function hasPoNumber(): bool { return $this->has('po_number'); }
    /** Shape $ (Value): string. The hosted invoice link where the buyer views and pays the invoice. Present after issue on API reads, except a list filtered by idempotency_key; webhook payloads leave it out. regenerate-public-link replaces it. Anyone with the link can open the invoice, so treat it as a secret.
     * @return string
     * @throws SdkError When public_url is omitted; use hasPublicUrl() or valueOrDefault().
     */
    public function getPublicUrl(): string { return $this->get('public_url'); }
    public function hasPublicUrl(): bool { return $this->has('public_url'); }
    /** Shape $ (Value): string or null. Where Flint emails the invoice and its reminders. Email delivery requires it at issue. null when unset.
     * @return string|null
     * @throws SdkError When recipient_email is omitted; use hasRecipientEmail() or valueOrDefault().
     */
    public function getRecipientEmail(): string|null { return $this->get('recipient_email'); }
    public function hasRecipientEmail(): bool { return $this->has('recipient_email'); }
    /** Shape $ (Value): string or null. Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase order number goes in po_number. It cannot change after issue. null when unset.
     * @return string|null
     * @throws SdkError When reference is omitted; use hasReference() or valueOrDefault().
     */
    public function getReference(): string|null { return $this->get('reference'); }
    public function hasReference(): bool { return $this->has('reference'); }
    /** Shape $ (Value): string. How much of the collected money has been refunded. It doesn't change status. Value enum: "none", "partially_refunded", "refunded".
     * @return string
     * @throws SdkError When refund_status is omitted; use hasRefundStatus() or valueOrDefault().
     */
    public function getRefundStatus(): string { return $this->get('refund_status'); }
    public function hasRefundStatus(): bool { return $this->has('refund_status'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Money refunded to the buyer after collection. Refunds don't reopen the balance; refund_status summarizes them. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When refunded_money is omitted; use hasRefundedMoney() or valueOrDefault().
     */
    public function getRefundedMoney(): mixed { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
    /** Shape $ (Value): boolean. Whether automatic reminders are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it.
     * @return bool
     * @throws SdkError When reminders_paused is omitted; use hasRemindersPaused() or valueOrDefault().
     */
    public function getRemindersPaused(): bool { return $this->get('reminders_paused'); }
    public function hasRemindersPaused(): bool { return $this->has('reminders_paused'); }
    /** Shape $ (Value): string. When automatic reminders were paused. Absent while reminders are active. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When reminders_paused_at is omitted; use hasRemindersPausedAt() or valueOrDefault().
     */
    public function getRemindersPausedAt(): string|\DateTimeInterface { return $this->get('reminders_paused_at'); }
    public function hasRemindersPausedAt(): bool { return $this->has('reminders_paused_at'); }
    /** Shape $ (Value): {@see AddressInput}. Where the buyer sends offline payments, shown on the invoice. Defaults to the invoice settings remit-to address. A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients.
     * @return AddressInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When remit_to_address is omitted; use hasRemitToAddress() or valueOrDefault().
     */
    public function getRemitToAddress(): mixed { return $this->get('remit_to_address'); }
    public function hasRemitToAddress(): bool { return $this->has('remit_to_address'); }
    /** Shape $ (Value): Array of {@see InvoiceScheduleEntryInput}. The payment schedule, in schedule order. Always [] when the invoice has no schedule and is collected in one balance. Shape $[] (Value): {@see InvoiceScheduleEntryInput}. One payment on an invoice's payment schedule, such as a deposit, installment, or balance, with its due time, amounts, and status.
     * @return list<InvoiceScheduleEntryInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When schedule_entries is omitted; use hasScheduleEntries() or valueOrDefault().
     */
    public function getScheduleEntries(): array { return $this->get('schedule_entries'); }
    public function hasScheduleEntries(): bool { return $this->has('schedule_entries'); }
    /** Shape $ (Value): string or null. When Flint will issue and deliver this draft. null when no issue is scheduled. Cleared when the draft is issued or voided, or when you send null. Format: date-time.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When scheduled_issue_at is omitted; use hasScheduledIssueAt() or valueOrDefault().
     */
    public function getScheduledIssueAt(): string|\DateTimeInterface|null { return $this->get('scheduled_issue_at'); }
    public function hasScheduledIssueAt(): bool { return $this->has('scheduled_issue_at'); }
    /** Shape $ (Value): string or null. The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it as written, without timezone conversion. null when unset. Format: date.
     * @return string|null
     * @throws SdkError When service_date is omitted; use hasServiceDate() or valueOrDefault().
     */
    public function getServiceDate(): string|null { return $this->get('service_date'); }
    public function hasServiceDate(): bool { return $this->has('service_date'); }
    /** Shape $ (Value): {@see InvoiceSnapshotInput}. The billing content of the invoice: line items, discounts, charges, tip, tax, and totals. A draft previews the backing order; issue freezes it, and later order changes don't reach an issued invoice. A frozen copy of an issued invoice's content, including line items, charges, discounts, tax identities, and pricing amounts.
     * @return InvoiceSnapshotInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When snapshot is omitted; use hasSnapshot() or valueOrDefault().
     */
    public function getSnapshot(): mixed { return $this->get('snapshot'); }
    public function hasSnapshot(): bool { return $this->has('snapshot'); }
    /** Shape $ (Value): string. Current invoice status. paid and credited close the current balance and can reopen to open or partially_paid after a payment or credit allocation reversal; invoice.reopened reports that change. void and uncollectible are final. Refunds change refund_status without reopening the balance. Value enum: "draft", "open", "partially_paid", "paid", "void", "uncollectible", "credited".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string or null. The subscription the backing order belongs to, copied when the draft is created and never changed. null when the order isn't part of a subscription.
     * @return string|null
     * @throws SdkError When subscription_id is omitted; use hasSubscriptionId() or valueOrDefault().
     */
    public function getSubscriptionId(): string|null { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /** Shape $ (Value): string. IANA time zone for the invoice's calendar dates, such as due dates from payment terms and reminder and late fee day counts. At issue, an invoice without one takes the invoice settings timezone.
     * @return string
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
    /** Shape $ (Value): {@see MoneyValueInput}. What the issued invoice bills, equal to snapshot.pricing_amounts.total_money. Fixed at issue; a draft previews the backing order total. Late fees are in late_fee_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When total_money is omitted; use hasTotalMoney() or valueOrDefault().
     */
    public function getTotalMoney(): mixed { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
    /** Shape $ (Value): string. When the invoice was marked uncollectible. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When uncollectible_at is omitted; use hasUncollectibleAt() or valueOrDefault().
     */
    public function getUncollectibleAt(): string|\DateTimeInterface { return $this->get('uncollectible_at'); }
    public function hasUncollectibleAt(): bool { return $this->has('uncollectible_at'); }
    /** Shape $ (Value): string. When the invoice last changed. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): integer string. Current invoice version. Send this as expected_version when updating the draft. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     * @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
    /** Shape $ (Value): string. When the buyer first opened the invoice through its hosted invoice link. Recorded on a best-effort basis. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When viewed_at is omitted; use hasViewedAt() or valueOrDefault().
     */
    public function getViewedAt(): string|\DateTimeInterface { return $this->get('viewed_at'); }
    public function hasViewedAt(): bool { return $this->has('viewed_at'); }
    /** Shape $ (Value): string. When the invoice was voided. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When voided_at is omitted; use hasVoidedAt() or valueOrDefault().
     */
    public function getVoidedAt(): string|\DateTimeInterface { return $this->get('voided_at'); }
    public function hasVoidedAt(): bool { return $this->has('voided_at'); }
    /** Shape $ (Value): {@see MoneyValueInput}. The balance written off when the invoice was marked uncollectible, including unpaid late fees. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When written_off_money is omitted; use hasWrittenOffMoney() or valueOrDefault().
     */
    public function getWrittenOffMoney(): mixed { return $this->get('written_off_money'); }
    public function hasWrittenOffMoney(): bool { return $this->has('written_off_money'); }
}
