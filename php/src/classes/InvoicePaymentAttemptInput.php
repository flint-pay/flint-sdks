<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $canceled_at
 * @property-read string|\DateTimeInterface $cancellation_requested_at
 * @property-read string $checkout_session_id
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $expected_amount_money
 * @property-read string|\DateTimeInterface $expires_at
 * @property-read string $invoice_id
 * @property-read string $invoice_payment_attempt_id
 * @property-read string $invoice_schedule_entry_id
 * @property-read PaymentErrorSummaryInput|array<array-key, mixed>|\stdClass $last_payment_error
 * @property-read string $payment_intent_id
 * @property-read string $rail
 * @property-read string|\DateTimeInterface $settled_at
 * @property-read string|\DateTimeInterface $started_at
 * @property-read string $status
 * @property-read string|\DateTimeInterface $updated_at
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoicePaymentAttemptInput extends Model {
    /** @param array{'canceled_at'?: string|\DateTimeInterface, 'cancellation_requested_at'?: string|\DateTimeInterface, 'checkout_session_id'?: string, 'expected_amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'expires_at'?: string|\DateTimeInterface, 'invoice_id': string, 'invoice_payment_attempt_id': string, 'invoice_schedule_entry_id'?: string, 'last_payment_error'?: PaymentErrorSummaryInput|array<array-key, mixed>|\stdClass, 'payment_intent_id'?: string, 'rail': string, 'settled_at'?: string|\DateTimeInterface, 'started_at'?: string|\DateTimeInterface, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoicePaymentAttemptInput')); }
    /** Shape $ (Value): string. When the attempt was canceled. An attempt canceled with its checkout session before payment started may not have it. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When canceled_at is omitted; use hasCanceledAt() or valueOrDefault().
     */
    public function getCanceledAt(): string|\DateTimeInterface { return $this->get('canceled_at'); }
    public function hasCanceledAt(): bool { return $this->has('canceled_at'); }
    /** Shape $ (Value): string. When cancellation of this attempt was last requested. It stays set when the payment processor refuses the cancellation or the payment settles first, so read status and canceled_at for the outcome. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When cancellation_requested_at is omitted; use hasCancellationRequestedAt() or valueOrDefault().
     */
    public function getCancellationRequestedAt(): string|\DateTimeInterface { return $this->get('cancellation_requested_at'); }
    public function hasCancellationRequestedAt(): bool { return $this->has('cancellation_requested_at'); }
    /** Shape $ (Value): string. The hosted or embedded checkout session the buyer pays through. Absent for automatic charges.
     * @return string
     * @throws SdkError When checkout_session_id is omitted; use hasCheckoutSessionId() or valueOrDefault().
     */
    public function getCheckoutSessionId(): string { return $this->get('checkout_session_id'); }
    public function hasCheckoutSessionId(): bool { return $this->has('checkout_session_id'); }
    /** Shape $ (Value): {@see MoneyValueInput}. The amount this attempt collects: the outstanding balance, or the targeted schedule entry's outstanding amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When expected_amount_money is omitted; use hasExpectedAmountMoney() or valueOrDefault().
     */
    public function getExpectedAmountMoney(): mixed { return $this->get('expected_amount_money'); }
    public function hasExpectedAmountMoney(): bool { return $this->has('expected_amount_money'); }
    /** Shape $ (Value): string. When a checkout attempt expires, matching its checkout session. Absent for automatic charges. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string|\DateTimeInterface { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Shape $ (Value): string. The invoice this attempt collects.
     * @return string
     * @throws SdkError When invoice_id is omitted; use hasInvoiceId() or valueOrDefault().
     */
    public function getInvoiceId(): string { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** Shape $ (Value): string. Flint invoice payment attempt ID.
     * @return string
     * @throws SdkError When invoice_payment_attempt_id is omitted; use hasInvoicePaymentAttemptId() or valueOrDefault().
     */
    public function getInvoicePaymentAttemptId(): string { return $this->get('invoice_payment_attempt_id'); }
    public function hasInvoicePaymentAttemptId(): bool { return $this->has('invoice_payment_attempt_id'); }
    /** Shape $ (Value): string. The schedule entry this attempt collects. Absent when the attempt collects the invoice balance.
     * @return string
     * @throws SdkError When invoice_schedule_entry_id is omitted; use hasInvoiceScheduleEntryId() or valueOrDefault().
     */
    public function getInvoiceScheduleEntryId(): string { return $this->get('invoice_schedule_entry_id'); }
    public function hasInvoiceScheduleEntryId(): bool { return $this->has('invoice_schedule_entry_id'); }
    /** Shape $ (Value): {@see PaymentErrorSummaryInput}. Why the payment failed. Present only when status is failed. A summary of why a payment attempt failed, with a normalized error code, a message, the failure time, and remediation.
     * @return PaymentErrorSummaryInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When last_payment_error is omitted; use hasLastPaymentError() or valueOrDefault().
     */
    public function getLastPaymentError(): mixed { return $this->get('last_payment_error'); }
    public function hasLastPaymentError(): bool { return $this->has('last_payment_error'); }
    /** Shape $ (Value): string. The payment intent behind this attempt. Absent until payment starts, such as a hosted attempt the buyer hasn't paid yet.
     * @return string
     * @throws SdkError When payment_intent_id is omitted; use hasPaymentIntentId() or valueOrDefault().
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** Shape $ (Value): string. How the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Value enum: "card", "ach_debit".
     * @return string
     * @throws SdkError When rail is omitted; use hasRail() or valueOrDefault().
     */
    public function getRail(): string { return $this->get('rail'); }
    public function hasRail(): bool { return $this->has('rail'); }
    /** Shape $ (Value): string. When this attempt first settled successfully. Duplicate payment notifications preserve this timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When settled_at is omitted; use hasSettledAt() or valueOrDefault().
     */
    public function getSettledAt(): string|\DateTimeInterface { return $this->get('settled_at'); }
    public function hasSettledAt(): bool { return $this->has('settled_at'); }
    /** Shape $ (Value): string. When the attempt was created. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When started_at is omitted; use hasStartedAt() or valueOrDefault().
     */
    public function getStartedAt(): string|\DateTimeInterface { return $this->get('started_at'); }
    public function hasStartedAt(): bool { return $this->has('started_at'); }
    /** Shape $ (Value): string. Current payment attempt status. settled means this attempt completed successfully, even if the invoice still has an outstanding balance. invoice_payment_attempt.settled reports that completion. Value enum: "open", "settled", "failed", "canceled", "expired", "processing".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string. When this attempt last changed. Duplicate payment notifications preserve this timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
