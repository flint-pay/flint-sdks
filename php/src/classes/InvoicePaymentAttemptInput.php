<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $canceled_at
 * @property-read string|\DateTimeInterface $cancellation_requested_at
 * @property-read string $checkout_session_id
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $expected_amount_money
 * @property-read string|\DateTimeInterface $expected_settlement_at
 * @property-read string|\DateTimeInterface $expires_at
 * @property-read string $failure_code
 * @property-read string $failure_message
 * @property-read string $invoice_id
 * @property-read string $invoice_payment_attempt_id
 * @property-read string $invoice_schedule_entry_id
 * @property-read string $payment_intent_id
 * @property-read string $rail
 * @property-read string|\DateTimeInterface $settled_at
 * @property-read string|\DateTimeInterface $started_at
 * @property-read string $status
 * @property-read string|\DateTimeInterface $updated_at
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoicePaymentAttemptInput extends Model {
    /** @param array{'canceled_at'?: string|\DateTimeInterface, 'cancellation_requested_at'?: string|\DateTimeInterface, 'checkout_session_id'?: string, 'expected_amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'expected_settlement_at'?: string|\DateTimeInterface, 'expires_at'?: string|\DateTimeInterface, 'failure_code'?: string, 'failure_message'?: string, 'invoice_id': string, 'invoice_payment_attempt_id': string, 'invoice_schedule_entry_id'?: string, 'payment_intent_id'?: string, 'rail': string, 'settled_at'?: string|\DateTimeInterface, 'started_at'?: string|\DateTimeInterface, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoicePaymentAttemptInput')); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When canceled_at is omitted; use hasCanceledAt() or valueOrDefault().
     */
    public function getCanceledAt(): string|\DateTimeInterface { return $this->get('canceled_at'); }
    public function hasCanceledAt(): bool { return $this->has('canceled_at'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When cancellation_requested_at is omitted; use hasCancellationRequestedAt() or valueOrDefault().
     */
    public function getCancellationRequestedAt(): string|\DateTimeInterface { return $this->get('cancellation_requested_at'); }
    public function hasCancellationRequestedAt(): bool { return $this->has('cancellation_requested_at'); }
    /** @return string
     * @throws SdkError When checkout_session_id is omitted; use hasCheckoutSessionId() or valueOrDefault().
     */
    public function getCheckoutSessionId(): string { return $this->get('checkout_session_id'); }
    public function hasCheckoutSessionId(): bool { return $this->has('checkout_session_id'); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When expected_amount_money is omitted; use hasExpectedAmountMoney() or valueOrDefault().
     */
    public function getExpectedAmountMoney(): mixed { return $this->get('expected_amount_money'); }
    public function hasExpectedAmountMoney(): bool { return $this->has('expected_amount_money'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When expected_settlement_at is omitted; use hasExpectedSettlementAt() or valueOrDefault().
     */
    public function getExpectedSettlementAt(): string|\DateTimeInterface { return $this->get('expected_settlement_at'); }
    public function hasExpectedSettlementAt(): bool { return $this->has('expected_settlement_at'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string|\DateTimeInterface { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** @return string
     * @throws SdkError When failure_code is omitted; use hasFailureCode() or valueOrDefault().
     */
    public function getFailureCode(): string { return $this->get('failure_code'); }
    public function hasFailureCode(): bool { return $this->has('failure_code'); }
    /** @return string
     * @throws SdkError When failure_message is omitted; use hasFailureMessage() or valueOrDefault().
     */
    public function getFailureMessage(): string { return $this->get('failure_message'); }
    public function hasFailureMessage(): bool { return $this->has('failure_message'); }
    /** @return string
     * @throws SdkError When invoice_id is omitted; use hasInvoiceId() or valueOrDefault().
     */
    public function getInvoiceId(): string { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
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
     * @throws SdkError When rail is omitted; use hasRail() or valueOrDefault().
     */
    public function getRail(): string { return $this->get('rail'); }
    public function hasRail(): bool { return $this->has('rail'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When settled_at is omitted; use hasSettledAt() or valueOrDefault().
     */
    public function getSettledAt(): string|\DateTimeInterface { return $this->get('settled_at'); }
    public function hasSettledAt(): bool { return $this->has('settled_at'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When started_at is omitted; use hasStartedAt() or valueOrDefault().
     */
    public function getStartedAt(): string|\DateTimeInterface { return $this->get('started_at'); }
    public function hasStartedAt(): bool { return $this->has('started_at'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
