<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $canceled_at
 * @property-read ?string $cancellation_requested_at
 * @property-read ?string $checkout_session_id
 * @property-read MoneyValue $expected_amount_money
 * @property-read ?string $expires_at
 * @property-read string $invoice_id
 * @property-read string $invoice_payment_attempt_id
 * @property-read ?string $invoice_schedule_entry_id
 * @property-read ?PaymentErrorSummary $last_payment_error
 * @property-read ?string $payment_intent_id
 * @property-read string $rail
 * @property-read ?string $settled_at
 * @property-read ?string $started_at
 * @property-read string $status
 * @property-read ?string $updated_at
 * Presence-aware response; omitted optional fields return null. */
final class InvoicePaymentAttemptCanceledInstalledMerchantsEventDataObject extends Model {
    /** @param array{'canceled_at'?: string, 'cancellation_requested_at'?: string, 'checkout_session_id'?: string, 'expected_amount_money': mixed, 'expires_at'?: string, 'invoice_id': string, 'invoice_payment_attempt_id': string, 'invoice_schedule_entry_id'?: string, 'last_payment_error'?: mixed, 'payment_intent_id'?: string, 'rail': string, 'settled_at'?: string, 'started_at'?: string, 'status': string, 'updated_at'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoicePaymentAttemptCanceledInstalledMerchantsEventDataObject')); }
    /** When the attempt was canceled. An attempt canceled with its checkout session before payment started may not have it. Format: date-time.
     * @return ?string
     */
    public function getCanceledAt(): ?string { return $this->get('canceled_at'); }
    public function hasCanceledAt(): bool { return $this->has('canceled_at'); }
    /** When cancellation of this attempt was last requested. It stays set when the payment processor refuses the cancellation or the payment settles first, so read status and canceled_at for the outcome. Format: date-time.
     * @return ?string
     */
    public function getCancellationRequestedAt(): ?string { return $this->get('cancellation_requested_at'); }
    public function hasCancellationRequestedAt(): bool { return $this->has('cancellation_requested_at'); }
    /** The hosted or embedded checkout session the buyer pays through. Absent for automatic charges.
     * @return ?string
     */
    public function getCheckoutSessionId(): ?string { return $this->get('checkout_session_id'); }
    public function hasCheckoutSessionId(): bool { return $this->has('checkout_session_id'); }
    /** The amount this attempt collects: the outstanding balance, or the targeted schedule entry's outstanding amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getExpectedAmountMoney(): MoneyValue { return $this->get('expected_amount_money'); }
    public function hasExpectedAmountMoney(): bool { return $this->has('expected_amount_money'); }
    /** When a checkout attempt expires, matching its checkout session. Absent for automatic charges. Format: date-time.
     * @return ?string
     */
    public function getExpiresAt(): ?string { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** The invoice this attempt collects.
     * @return string
     */
    public function getInvoiceId(): string { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** Flint invoice payment attempt ID.
     * @return string
     */
    public function getInvoicePaymentAttemptId(): string { return $this->get('invoice_payment_attempt_id'); }
    public function hasInvoicePaymentAttemptId(): bool { return $this->has('invoice_payment_attempt_id'); }
    /** The schedule entry this attempt collects. Absent when the attempt collects the invoice balance.
     * @return ?string
     */
    public function getInvoiceScheduleEntryId(): ?string { return $this->get('invoice_schedule_entry_id'); }
    public function hasInvoiceScheduleEntryId(): bool { return $this->has('invoice_schedule_entry_id'); }
    /** Why the payment failed. Present only when status is failed. A summary of why a payment attempt failed, with a normalized error code, a message, the failure time, and remediation.
     * @return ?PaymentErrorSummary
     */
    public function getLastPaymentError(): ?PaymentErrorSummary { return $this->get('last_payment_error'); }
    public function hasLastPaymentError(): bool { return $this->has('last_payment_error'); }
    /** The payment intent behind this attempt. Absent until payment starts, such as a hosted attempt the buyer hasn't paid yet.
     * @return ?string
     */
    public function getPaymentIntentId(): ?string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** How the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Value enum: "card", "ach_debit".
     * @return string
     */
    public function getRail(): string { return $this->get('rail'); }
    public function hasRail(): bool { return $this->has('rail'); }
    /** When this attempt first settled successfully. Duplicate payment notifications preserve this timestamp. Format: date-time.
     * @return ?string
     */
    public function getSettledAt(): ?string { return $this->get('settled_at'); }
    public function hasSettledAt(): bool { return $this->has('settled_at'); }
    /** When the attempt was created. Format: date-time.
     * @return ?string
     */
    public function getStartedAt(): ?string { return $this->get('started_at'); }
    public function hasStartedAt(): bool { return $this->has('started_at'); }
    /** Current payment attempt status. settled means this attempt completed successfully, even if the invoice still has an outstanding balance. invoice_payment_attempt.settled reports that completion. Value enum: "open", "settled", "failed", "canceled", "expired", "processing".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** When this attempt last changed. Duplicate payment notifications preserve this timestamp. Format: date-time.
     * @return ?string
     */
    public function getUpdatedAt(): ?string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
