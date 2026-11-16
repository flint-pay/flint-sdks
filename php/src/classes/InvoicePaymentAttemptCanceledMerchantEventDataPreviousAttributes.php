<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $canceled_at
 * @property-read string|null $cancellation_requested_at
 * @property-read string|null $checkout_session_id
 * @property-read MoneyValue|null $expected_amount_money
 * @property-read string|null $expires_at
 * @property-read string|null $invoice_id
 * @property-read string|null $invoice_payment_attempt_id
 * @property-read string|null $invoice_schedule_entry_id
 * @property-read PaymentErrorSummary|null $last_payment_error
 * @property-read string|null $payment_intent_id
 * @property-read string|null $rail
 * @property-read string|null $settled_at
 * @property-read string|null $started_at
 * @property-read string|null $status
 * @property-read list<string>|null $supported_actions
 * @property-read string|null $updated_at
 * Presence-aware response; omitted optional fields return null. */
final class InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes extends Model {
    /** @param array{'canceled_at'?: mixed, 'cancellation_requested_at'?: mixed, 'checkout_session_id'?: mixed, 'expected_amount_money'?: mixed, 'expires_at'?: mixed, 'invoice_id'?: mixed, 'invoice_payment_attempt_id'?: mixed, 'invoice_schedule_entry_id'?: mixed, 'last_payment_error'?: mixed, 'payment_intent_id'?: mixed, 'rail'?: mixed, 'settled_at'?: mixed, 'started_at'?: mixed, 'status'?: mixed, 'supported_actions'?: mixed, 'updated_at'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoicePaymentAttemptCanceledMerchantEventDataPreviousAttributes')); }
    /** When the attempt was canceled. An attempt canceled with its checkout session before payment started may not have it. anyOf[1] (Value): string. When the attempt was canceled. An attempt canceled with its checkout session before payment started may not have it. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCanceledAt(): string|null { return $this->get('canceled_at'); }
    public function hasCanceledAt(): bool { return $this->has('canceled_at'); }
    /** When cancellation of this attempt was last requested. It stays set when the payment processor refuses the cancellation or the payment settles first, so read status and canceled_at for the outcome. anyOf[1] (Value): string. When cancellation of this attempt was last requested. It stays set when the payment processor refuses the cancellation or the payment settles first, so read status and canceled_at for the outcome. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCancellationRequestedAt(): string|null { return $this->get('cancellation_requested_at'); }
    public function hasCancellationRequestedAt(): bool { return $this->has('cancellation_requested_at'); }
    /** The hosted or headless checkout session the buyer pays through. Absent for automatic charges. anyOf[1] (Value): string. The hosted or headless checkout session the buyer pays through. Absent for automatic charges. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCheckoutSessionId(): string|null { return $this->get('checkout_session_id'); }
    public function hasCheckoutSessionId(): bool { return $this->has('checkout_session_id'); }
    /** The amount this attempt collects: the outstanding balance, or the targeted schedule entry's outstanding amount. anyOf[1] (Value): {@see MoneyValue}. The amount this attempt collects: the outstanding balance, or the targeted schedule entry's outstanding amount. anyOf[2] (Value): null.
     * @return MoneyValue|null
     */
    public function getExpectedAmountMoney(): MoneyValue|null { return $this->get('expected_amount_money'); }
    public function hasExpectedAmountMoney(): bool { return $this->has('expected_amount_money'); }
    /** When a checkout attempt expires, matching its checkout session. Absent for automatic charges. anyOf[1] (Value): string. When a checkout attempt expires, matching its checkout session. Absent for automatic charges. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getExpiresAt(): string|null { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** The invoice this attempt collects. anyOf[1] (Value): string. The invoice this attempt collects. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInvoiceId(): string|null { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** Flint invoice payment attempt ID. anyOf[1] (Value): string. Flint invoice payment attempt ID. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInvoicePaymentAttemptId(): string|null { return $this->get('invoice_payment_attempt_id'); }
    public function hasInvoicePaymentAttemptId(): bool { return $this->has('invoice_payment_attempt_id'); }
    /** The schedule entry this attempt collects. Absent when the attempt collects the invoice balance. anyOf[1] (Value): string. The schedule entry this attempt collects. Absent when the attempt collects the invoice balance. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInvoiceScheduleEntryId(): string|null { return $this->get('invoice_schedule_entry_id'); }
    public function hasInvoiceScheduleEntryId(): bool { return $this->has('invoice_schedule_entry_id'); }
    /** Why the payment failed. Present only when status is failed. anyOf[1] (Value): {@see PaymentErrorSummary}. Why the payment failed. Present only when status is failed. anyOf[2] (Value): null.
     * @return PaymentErrorSummary|null
     */
    public function getLastPaymentError(): PaymentErrorSummary|null { return $this->get('last_payment_error'); }
    public function hasLastPaymentError(): bool { return $this->has('last_payment_error'); }
    /** The payment intent behind this attempt. Absent until payment starts, such as a hosted attempt the buyer hasn't paid yet. anyOf[1] (Value): string. The payment intent behind this attempt. Absent until payment starts, such as a hosted attempt the buyer hasn't paid yet. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPaymentIntentId(): string|null { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** How the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Value enum: "card", "ach_debit". anyOf[1] (Value): string. How the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Value enum: "card", "ach_debit". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getRail(): string|null { return $this->get('rail'); }
    public function hasRail(): bool { return $this->has('rail'); }
    /** When this attempt first settled successfully. Duplicate payment notifications preserve this timestamp. anyOf[1] (Value): string. When this attempt first settled successfully. Duplicate payment notifications preserve this timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSettledAt(): string|null { return $this->get('settled_at'); }
    public function hasSettledAt(): bool { return $this->has('settled_at'); }
    /** When the attempt was created. anyOf[1] (Value): string. When the attempt was created. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStartedAt(): string|null { return $this->get('started_at'); }
    public function hasStartedAt(): bool { return $this->has('started_at'); }
    /** Current payment attempt status. succeeded means this attempt completed successfully, even if the invoice still has an outstanding balance. invoice_payment_attempt.succeeded reports that completion. Value enum: "open", "succeeded", "failed", "canceled", "expired", "processing". anyOf[1] (Value): string. Current payment attempt status. succeeded means this attempt completed successfully, even if the invoice still has an outstanding balance. invoice_payment_attempt.succeeded reports that completion. Value enum: "open", "succeeded", "failed", "canceled", "expired", "processing". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Lifecycle actions accepted now. An open or processing attempt can be canceled; the payment processor can still refuse cancellation. [] enum: "cancel". anyOf[1] (Value): Array of string. Lifecycle actions accepted now. An open or processing attempt can be canceled; the payment processor can still refuse cancellation. [] enum: "cancel". anyOf[1][] (Value): string.  Value enum: "cancel". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getSupportedActions(): array|null { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** When this attempt last changed. Duplicate payment notifications preserve this timestamp. anyOf[1] (Value): string. When this attempt last changed. Duplicate payment notifications preserve this timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
