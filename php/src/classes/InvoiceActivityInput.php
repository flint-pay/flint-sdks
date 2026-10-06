<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $activity_type
 * @property-read string $actor_id
 * @property-read string $actor_type
 * @property-read array{'amount': string, 'currency': string}|object $amount_money
 * @property-read string $channel
 * @property-read string $checkout_session_id
 * @property-read string $collection_block_reason
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'amount': string, 'currency': string}|object $credit_money
 * @property-read string $credit_note_id
 * @property-read string $description
 * @property-read string|\DateTimeInterface $due_at
 * @property-read string $error_code
 * @property-read array{'amount': string, 'currency': string}|object $expected_amount_money
 * @property-read string|\DateTimeInterface $expected_settlement_at
 * @property-read string $invoice_activity_id
 * @property-read string $invoice_delivery_attempt_id
 * @property-read string $invoice_late_fee_id
 * @property-read string $invoice_payment_attempt_id
 * @property-read string $invoice_schedule_entry_id
 * @property-read string $payment_intent_id
 * @property-read string $payment_rail
 * @property-read string $refund_id
 * @property-read string $to_email
 * @property-read array{'amount': string, 'currency': string}|object $written_off_money
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoiceActivityInput extends Model {
    /** @param array{'activity_type': string, 'actor_id'?: string, 'actor_type'?: string, 'amount_money'?: array{'amount': string, 'currency': string}|object, 'channel'?: string, 'checkout_session_id'?: string, 'collection_block_reason'?: string, 'created_at': string|\DateTimeInterface, 'credit_money'?: array{'amount': string, 'currency': string}|object, 'credit_note_id'?: string, 'description': string, 'due_at'?: string|\DateTimeInterface, 'error_code'?: string, 'expected_amount_money'?: array{'amount': string, 'currency': string}|object, 'expected_settlement_at'?: string|\DateTimeInterface, 'invoice_activity_id': string, 'invoice_delivery_attempt_id'?: string, 'invoice_late_fee_id'?: string, 'invoice_payment_attempt_id'?: string, 'invoice_schedule_entry_id'?: string, 'payment_intent_id'?: string, 'payment_rail'?: string, 'refund_id'?: string, 'to_email'?: string, 'written_off_money'?: array{'amount': string, 'currency': string}|object, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceActivityInput')); }
    /** @return string
     * @throws SdkError When activity_type is omitted; use hasActivityType() or valueOrDefault().
     */
    public function getActivityType(): string { return $this->get('activity_type'); }
    public function hasActivityType(): bool { return $this->has('activity_type'); }
    /** @return string
     * @throws SdkError When actor_id is omitted; use hasActorId() or valueOrDefault().
     */
    public function getActorId(): string { return $this->get('actor_id'); }
    public function hasActorId(): bool { return $this->has('actor_id'); }
    /** @return string
     * @throws SdkError When actor_type is omitted; use hasActorType() or valueOrDefault().
     */
    public function getActorType(): string { return $this->get('actor_type'); }
    public function hasActorType(): bool { return $this->has('actor_type'); }
    /** @return array{'amount': string, 'currency': string}|object
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): array|object { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** @return string
     * @throws SdkError When channel is omitted; use hasChannel() or valueOrDefault().
     */
    public function getChannel(): string { return $this->get('channel'); }
    public function hasChannel(): bool { return $this->has('channel'); }
    /** @return string
     * @throws SdkError When checkout_session_id is omitted; use hasCheckoutSessionId() or valueOrDefault().
     */
    public function getCheckoutSessionId(): string { return $this->get('checkout_session_id'); }
    public function hasCheckoutSessionId(): bool { return $this->has('checkout_session_id'); }
    /** @return string
     * @throws SdkError When collection_block_reason is omitted; use hasCollectionBlockReason() or valueOrDefault().
     */
    public function getCollectionBlockReason(): string { return $this->get('collection_block_reason'); }
    public function hasCollectionBlockReason(): bool { return $this->has('collection_block_reason'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return array{'amount': string, 'currency': string}|object
     * @throws SdkError When credit_money is omitted; use hasCreditMoney() or valueOrDefault().
     */
    public function getCreditMoney(): array|object { return $this->get('credit_money'); }
    public function hasCreditMoney(): bool { return $this->has('credit_money'); }
    /** @return string
     * @throws SdkError When credit_note_id is omitted; use hasCreditNoteId() or valueOrDefault().
     */
    public function getCreditNoteId(): string { return $this->get('credit_note_id'); }
    public function hasCreditNoteId(): bool { return $this->has('credit_note_id'); }
    /** @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When due_at is omitted; use hasDueAt() or valueOrDefault().
     */
    public function getDueAt(): string|\DateTimeInterface { return $this->get('due_at'); }
    public function hasDueAt(): bool { return $this->has('due_at'); }
    /** @return string
     * @throws SdkError When error_code is omitted; use hasErrorCode() or valueOrDefault().
     */
    public function getErrorCode(): string { return $this->get('error_code'); }
    public function hasErrorCode(): bool { return $this->has('error_code'); }
    /** @return array{'amount': string, 'currency': string}|object
     * @throws SdkError When expected_amount_money is omitted; use hasExpectedAmountMoney() or valueOrDefault().
     */
    public function getExpectedAmountMoney(): array|object { return $this->get('expected_amount_money'); }
    public function hasExpectedAmountMoney(): bool { return $this->has('expected_amount_money'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When expected_settlement_at is omitted; use hasExpectedSettlementAt() or valueOrDefault().
     */
    public function getExpectedSettlementAt(): string|\DateTimeInterface { return $this->get('expected_settlement_at'); }
    public function hasExpectedSettlementAt(): bool { return $this->has('expected_settlement_at'); }
    /** @return string
     * @throws SdkError When invoice_activity_id is omitted; use hasInvoiceActivityId() or valueOrDefault().
     */
    public function getInvoiceActivityId(): string { return $this->get('invoice_activity_id'); }
    public function hasInvoiceActivityId(): bool { return $this->has('invoice_activity_id'); }
    /** @return string
     * @throws SdkError When invoice_delivery_attempt_id is omitted; use hasInvoiceDeliveryAttemptId() or valueOrDefault().
     */
    public function getInvoiceDeliveryAttemptId(): string { return $this->get('invoice_delivery_attempt_id'); }
    public function hasInvoiceDeliveryAttemptId(): bool { return $this->has('invoice_delivery_attempt_id'); }
    /** @return string
     * @throws SdkError When invoice_late_fee_id is omitted; use hasInvoiceLateFeeId() or valueOrDefault().
     */
    public function getInvoiceLateFeeId(): string { return $this->get('invoice_late_fee_id'); }
    public function hasInvoiceLateFeeId(): bool { return $this->has('invoice_late_fee_id'); }
    /** @return string
     * @throws SdkError When invoice_payment_attempt_id is omitted; use hasInvoicePaymentAttemptId() or valueOrDefault().
     */
    public function getInvoicePaymentAttemptId(): string { return $this->get('invoice_payment_attempt_id'); }
    public function hasInvoicePaymentAttemptId(): bool { return $this->has('invoice_payment_attempt_id'); }
    /** @return string
     * @throws SdkError When invoice_schedule_entry_id is omitted; use hasInvoiceScheduleEntryId() or valueOrDefault().
     */
    public function getInvoiceScheduleEntryId(): string { return $this->get('invoice_schedule_entry_id'); }
    public function hasInvoiceScheduleEntryId(): bool { return $this->has('invoice_schedule_entry_id'); }
    /** @return string
     * @throws SdkError When payment_intent_id is omitted; use hasPaymentIntentId() or valueOrDefault().
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** @return string
     * @throws SdkError When payment_rail is omitted; use hasPaymentRail() or valueOrDefault().
     */
    public function getPaymentRail(): string { return $this->get('payment_rail'); }
    public function hasPaymentRail(): bool { return $this->has('payment_rail'); }
    /** @return string
     * @throws SdkError When refund_id is omitted; use hasRefundId() or valueOrDefault().
     */
    public function getRefundId(): string { return $this->get('refund_id'); }
    public function hasRefundId(): bool { return $this->has('refund_id'); }
    /** @return string
     * @throws SdkError When to_email is omitted; use hasToEmail() or valueOrDefault().
     */
    public function getToEmail(): string { return $this->get('to_email'); }
    public function hasToEmail(): bool { return $this->has('to_email'); }
    /** @return array{'amount': string, 'currency': string}|object
     * @throws SdkError When written_off_money is omitted; use hasWrittenOffMoney() or valueOrDefault().
     */
    public function getWrittenOffMoney(): array|object { return $this->get('written_off_money'); }
    public function hasWrittenOffMoney(): bool { return $this->has('written_off_money'); }
}
