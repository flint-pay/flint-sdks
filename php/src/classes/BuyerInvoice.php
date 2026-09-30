<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $cc_emails
 * @property-read string $closed_at
 * @property-read string $collection_block_status
 * @property-read string $created_at
 * @property-read MoneyValue $credit_money
 * @property-read MoneyValue $currently_due_money
 * @property-read ExpandedCustomerSummary|null $customer
 * @property-read string $customer_id
 * @property-read string $due_at
 * @property-read string $footer
 * @property-read string $invoice_id
 * @property-read string $invoice_number
 * @property-read bool $is_overdue
 * @property-read string $issued_at
 * @property-read list<BuyerInvoiceLateFee> $late_fees
 * @property-read string $memo
 * @property-read string $merchant_id
 * @property-read ExpandedOrderSummary|null $order
 * @property-read string $order_id
 * @property-read MoneyValue $outstanding_money
 * @property-read string $paid_at
 * @property-read MoneyValue $paid_money
 * @property-read InvoicePaymentTermsSnapshot $payment_terms_snapshot
 * @property-read string $po_number
 * @property-read string $recipient_email
 * @property-read string $reference
 * @property-read string $refund_status
 * @property-read MoneyValue $refunded_money
 * @property-read Address $remit_to_address
 * @property-read list<InvoiceScheduleEntry> $schedule_entries
 * @property-read string $scheduled_send_at
 * @property-read string $service_at
 * @property-read InvoiceSnapshot $snapshot
 * @property-read string $status
 * @property-read string $timezone
 * @property-read string $updated_at
 * @property-read string $version
 * @property-read string $viewed_at
 * @property-read string $voided_at
 * Presence-aware response; omitted fields throw when accessed. */
final class BuyerInvoice extends Model {
    /** @param array{'cc_emails'?: list<string>, 'closed_at'?: string, 'collection_block_status': string, 'created_at'?: string, 'credit_money': object{'amount': string, 'currency': string}, 'currently_due_money': object{'amount': string, 'currency': string}, 'customer'?: mixed, 'customer_id'?: string, 'due_at'?: string, 'footer'?: string, 'invoice_id': string, 'invoice_number'?: string, 'is_overdue': bool, 'issued_at'?: string, 'late_fees': list<mixed>, 'memo'?: string, 'merchant_id': string, 'order'?: mixed, 'order_id': string, 'outstanding_money': object{'amount': string, 'currency': string}, 'paid_at'?: string, 'paid_money': object{'amount': string, 'currency': string}, 'payment_terms_snapshot'?: object{'calculation': mixed, 'invoice_payment_term_id': string, 'late_fee_policy'?: mixed, 'name': string, 'revision': int}, 'po_number'?: string, 'recipient_email'?: string, 'reference'?: string, 'refund_status': string, 'refunded_money': object{'amount': string, 'currency': string}, 'remit_to_address'?: object{'city': string, 'country': string, 'line1': string, 'line2'?: string, 'postal_code': string, 'state': string}, 'schedule_entries'?: list<mixed>, 'scheduled_send_at'?: string, 'service_at'?: string, 'snapshot'?: object{'billing_address'?: mixed, 'buyer_note'?: string, 'buyer_tax_identity'?: mixed, 'charges'?: list<mixed>, 'customer_display_name'?: string, 'customer_email'?: string, 'discounts'?: list<mixed>, 'footer'?: string, 'internal_note'?: string, 'line_items'?: list<mixed>, 'memo'?: string, 'merchant_display_name'?: string, 'pricing_amounts': mixed, 'reference'?: string, 'requested_tip'?: mixed, 'seller_tax_identity'?: mixed, 'service_at'?: string}, 'status': string, 'timezone'?: string, 'updated_at'?: string, 'version': string, 'viewed_at'?: string, 'voided_at'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerInvoice')); }
    /** @return list<string>
     * @throws SdkError When cc_emails is omitted; use hasCcEmails() or valueOrDefault().
     */
    public function getCcEmails(): array { return $this->get('cc_emails'); }
    public function hasCcEmails(): bool { return $this->has('cc_emails'); }
    /** @return string
     * @throws SdkError When closed_at is omitted; use hasClosedAt() or valueOrDefault().
     */
    public function getClosedAt(): string { return $this->get('closed_at'); }
    public function hasClosedAt(): bool { return $this->has('closed_at'); }
    /** @return string
     * @throws SdkError When collection_block_status is omitted; use hasCollectionBlockStatus() or valueOrDefault().
     */
    public function getCollectionBlockStatus(): string { return $this->get('collection_block_status'); }
    public function hasCollectionBlockStatus(): bool { return $this->has('collection_block_status'); }
    /** @return string
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return MoneyValue
     * @throws SdkError When credit_money is omitted; use hasCreditMoney() or valueOrDefault().
     */
    public function getCreditMoney(): MoneyValue { return $this->get('credit_money'); }
    public function hasCreditMoney(): bool { return $this->has('credit_money'); }
    /** @return MoneyValue
     * @throws SdkError When currently_due_money is omitted; use hasCurrentlyDueMoney() or valueOrDefault().
     */
    public function getCurrentlyDueMoney(): MoneyValue { return $this->get('currently_due_money'); }
    public function hasCurrentlyDueMoney(): bool { return $this->has('currently_due_money'); }
    /** @return ExpandedCustomerSummary|null
     * @throws SdkError When customer is omitted; use hasCustomer() or valueOrDefault().
     */
    public function getCustomer(): ExpandedCustomerSummary|null { return $this->get('customer'); }
    public function hasCustomer(): bool { return $this->has('customer'); }
    /** @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** @return string
     * @throws SdkError When due_at is omitted; use hasDueAt() or valueOrDefault().
     */
    public function getDueAt(): string { return $this->get('due_at'); }
    public function hasDueAt(): bool { return $this->has('due_at'); }
    /** @return string
     * @throws SdkError When footer is omitted; use hasFooter() or valueOrDefault().
     */
    public function getFooter(): string { return $this->get('footer'); }
    public function hasFooter(): bool { return $this->has('footer'); }
    /** @return string
     * @throws SdkError When invoice_id is omitted; use hasInvoiceId() or valueOrDefault().
     */
    public function getInvoiceId(): string { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** @return string
     * @throws SdkError When invoice_number is omitted; use hasInvoiceNumber() or valueOrDefault().
     */
    public function getInvoiceNumber(): string { return $this->get('invoice_number'); }
    public function hasInvoiceNumber(): bool { return $this->has('invoice_number'); }
    /** @return bool
     * @throws SdkError When is_overdue is omitted; use hasIsOverdue() or valueOrDefault().
     */
    public function getIsOverdue(): bool { return $this->get('is_overdue'); }
    public function hasIsOverdue(): bool { return $this->has('is_overdue'); }
    /** @return string
     * @throws SdkError When issued_at is omitted; use hasIssuedAt() or valueOrDefault().
     */
    public function getIssuedAt(): string { return $this->get('issued_at'); }
    public function hasIssuedAt(): bool { return $this->has('issued_at'); }
    /** @return list<BuyerInvoiceLateFee>
     * @throws SdkError When late_fees is omitted; use hasLateFees() or valueOrDefault().
     */
    public function getLateFees(): array { return $this->get('late_fees'); }
    public function hasLateFees(): bool { return $this->has('late_fees'); }
    /** @return string
     * @throws SdkError When memo is omitted; use hasMemo() or valueOrDefault().
     */
    public function getMemo(): string { return $this->get('memo'); }
    public function hasMemo(): bool { return $this->has('memo'); }
    /** @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** @return ExpandedOrderSummary|null
     * @throws SdkError When order is omitted; use hasOrder() or valueOrDefault().
     */
    public function getOrder(): ExpandedOrderSummary|null { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** @return MoneyValue
     * @throws SdkError When outstanding_money is omitted; use hasOutstandingMoney() or valueOrDefault().
     */
    public function getOutstandingMoney(): MoneyValue { return $this->get('outstanding_money'); }
    public function hasOutstandingMoney(): bool { return $this->has('outstanding_money'); }
    /** @return string
     * @throws SdkError When paid_at is omitted; use hasPaidAt() or valueOrDefault().
     */
    public function getPaidAt(): string { return $this->get('paid_at'); }
    public function hasPaidAt(): bool { return $this->has('paid_at'); }
    /** @return MoneyValue
     * @throws SdkError When paid_money is omitted; use hasPaidMoney() or valueOrDefault().
     */
    public function getPaidMoney(): MoneyValue { return $this->get('paid_money'); }
    public function hasPaidMoney(): bool { return $this->has('paid_money'); }
    /** @return InvoicePaymentTermsSnapshot
     * @throws SdkError When payment_terms_snapshot is omitted; use hasPaymentTermsSnapshot() or valueOrDefault().
     */
    public function getPaymentTermsSnapshot(): InvoicePaymentTermsSnapshot { return $this->get('payment_terms_snapshot'); }
    public function hasPaymentTermsSnapshot(): bool { return $this->has('payment_terms_snapshot'); }
    /** @return string
     * @throws SdkError When po_number is omitted; use hasPoNumber() or valueOrDefault().
     */
    public function getPoNumber(): string { return $this->get('po_number'); }
    public function hasPoNumber(): bool { return $this->has('po_number'); }
    /** @return string
     * @throws SdkError When recipient_email is omitted; use hasRecipientEmail() or valueOrDefault().
     */
    public function getRecipientEmail(): string { return $this->get('recipient_email'); }
    public function hasRecipientEmail(): bool { return $this->has('recipient_email'); }
    /** @return string
     * @throws SdkError When reference is omitted; use hasReference() or valueOrDefault().
     */
    public function getReference(): string { return $this->get('reference'); }
    public function hasReference(): bool { return $this->has('reference'); }
    /** @return string
     * @throws SdkError When refund_status is omitted; use hasRefundStatus() or valueOrDefault().
     */
    public function getRefundStatus(): string { return $this->get('refund_status'); }
    public function hasRefundStatus(): bool { return $this->has('refund_status'); }
    /** @return MoneyValue
     * @throws SdkError When refunded_money is omitted; use hasRefundedMoney() or valueOrDefault().
     */
    public function getRefundedMoney(): MoneyValue { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
    /** @return Address
     * @throws SdkError When remit_to_address is omitted; use hasRemitToAddress() or valueOrDefault().
     */
    public function getRemitToAddress(): Address { return $this->get('remit_to_address'); }
    public function hasRemitToAddress(): bool { return $this->has('remit_to_address'); }
    /** @return list<InvoiceScheduleEntry>
     * @throws SdkError When schedule_entries is omitted; use hasScheduleEntries() or valueOrDefault().
     */
    public function getScheduleEntries(): array { return $this->get('schedule_entries'); }
    public function hasScheduleEntries(): bool { return $this->has('schedule_entries'); }
    /** @return string
     * @throws SdkError When scheduled_send_at is omitted; use hasScheduledSendAt() or valueOrDefault().
     */
    public function getScheduledSendAt(): string { return $this->get('scheduled_send_at'); }
    public function hasScheduledSendAt(): bool { return $this->has('scheduled_send_at'); }
    /** @return string
     * @throws SdkError When service_at is omitted; use hasServiceAt() or valueOrDefault().
     */
    public function getServiceAt(): string { return $this->get('service_at'); }
    public function hasServiceAt(): bool { return $this->has('service_at'); }
    /** @return InvoiceSnapshot
     * @throws SdkError When snapshot is omitted; use hasSnapshot() or valueOrDefault().
     */
    public function getSnapshot(): InvoiceSnapshot { return $this->get('snapshot'); }
    public function hasSnapshot(): bool { return $this->has('snapshot'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** @return string
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
    /** @return string
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
    /** @return string
     * @throws SdkError When viewed_at is omitted; use hasViewedAt() or valueOrDefault().
     */
    public function getViewedAt(): string { return $this->get('viewed_at'); }
    public function hasViewedAt(): bool { return $this->has('viewed_at'); }
    /** @return string
     * @throws SdkError When voided_at is omitted; use hasVoidedAt() or valueOrDefault().
     */
    public function getVoidedAt(): string { return $this->get('voided_at'); }
    public function hasVoidedAt(): bool { return $this->has('voided_at'); }
}
