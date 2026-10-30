<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $completed_at
 * @property-read MoneyValue $expected_outstanding_money
 * @property-read list<PaymentAttemptGiftCardRedemption> $gift_card_redemptions
 * @property-read bool $is_resumable
 * @property-read ?PaymentErrorSummary $last_payment_error
 * @property-read string $mode
 * @property-read string $order_payment_attempt_id
 * @property-read list<PaymentAttemptPaymentIntent> $payment_intents
 * @property-read ?OrderPaymentAttemptPaymentMethodSave $payment_method_save
 * @property-read list<PendingPaymentAction> $pending_actions
 * @property-read ?string $started_at
 * @property-read string $status
 * @property-read ?string $status_reason
 * Presence-aware response; omitted optional fields return null. */
final class OrderPaymentAttempt extends Model {
    /** @param array{'completed_at'?: string, 'expected_outstanding_money': mixed, 'gift_card_redemptions': list<mixed>, 'is_resumable': bool, 'last_payment_error'?: mixed, 'mode': string, 'order_payment_attempt_id': string, 'payment_intents': list<mixed>, 'payment_method_save'?: mixed, 'pending_actions': list<mixed>, 'started_at'?: string, 'status': string, 'status_reason'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderPaymentAttempt')); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getCompletedAt(): ?string { return $this->get('completed_at'); }
    public function hasCompletedAt(): bool { return $this->has('completed_at'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getExpectedOutstandingMoney(): MoneyValue { return $this->get('expected_outstanding_money'); }
    public function hasExpectedOutstandingMoney(): bool { return $this->has('expected_outstanding_money'); }
    /**  [] (Value): {@see PaymentAttemptGiftCardRedemption}. A gift card redemption made as part of an order payment attempt, with the amount, tip, and gift card.
     * @return list<PaymentAttemptGiftCardRedemption>
     */
    public function getGiftCardRedemptions(): array { return $this->get('gift_card_redemptions'); }
    public function hasGiftCardRedemptions(): bool { return $this->has('gift_card_redemptions'); }
    /** Whether the attempt can continue through PayOrder with action: resume and this order_payment_attempt_id after any pending client action is complete. If false, check status before starting another payment; the attempt may still be in progress.
     * @return bool
     */
    public function getIsResumable(): bool { return $this->get('is_resumable'); }
    public function hasIsResumable(): bool { return $this->has('is_resumable'); }
    /** The concluded failure of a payment leg that failed this attempt. Absent for non-payment failures. A summary of why a payment attempt failed, with a normalized error code, a message, the failure time, and remediation.
     * @return ?PaymentErrorSummary
     */
    public function getLastPaymentError(): ?PaymentErrorSummary { return $this->get('last_payment_error'); }
    public function hasLastPaymentError(): bool { return $this->has('last_payment_error'); }
    /** Value enum: "payment", "setup", "settlement".
     * @return string
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** order_payment_attempt_id
     * @return string
     */
    public function getOrderPaymentAttemptId(): string { return $this->get('order_payment_attempt_id'); }
    public function hasOrderPaymentAttemptId(): bool { return $this->has('order_payment_attempt_id'); }
    /**  [] (Value): {@see PaymentAttemptPaymentIntent}. A payment intent used as one leg of an order payment attempt, with its amount, status, tip, and latest error.
     * @return list<PaymentAttemptPaymentIntent>
     */
    public function getPaymentIntents(): array { return $this->get('payment_intents'); }
    public function hasPaymentIntents(): bool { return $this->has('payment_intents'); }
    /** Set when the pay request sent save_payment_method: true and the attempt paid without saving the payment method. A card typed into checkout and saved has no entry here; read payment_method_save on the checkout session for a card saved with a mobile phone number. What became of the buyer's save_payment_method. The payment does not depend on it.
     * @return ?OrderPaymentAttemptPaymentMethodSave
     */
    public function getPaymentMethodSave(): ?OrderPaymentAttemptPaymentMethodSave { return $this->get('payment_method_save'); }
    public function hasPaymentMethodSave(): bool { return $this->has('payment_method_save'); }
    /**  [] (Value): {@see PendingPaymentAction}. Client-side action required before continuing a payment. Resume an order through PayOrder with order_payment_attempt_id, or continue a standalone PaymentIntent through its confirm endpoint without a replacement credential.
     * @return list<PendingPaymentAction>
     */
    public function getPendingActions(): array { return $this->get('pending_actions'); }
    public function hasPendingActions(): bool { return $this->has('pending_actions'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getStartedAt(): ?string { return $this->get('started_at'); }
    public function hasStartedAt(): bool { return $this->has('started_at'); }
    /** Value enum: "processing", "requires_action", "requires_capture", "partially_succeeded", "requires_retry", "finalizing", "succeeded", "failed", "expired", "canceled".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Non-payment reason an attempt failed, was canceled, or expired. Failed attempts with an unmapped non-payment reason report other. Canceled and expired attempts include a reason only when it adds information beyond status. New values may be added. Value enum: "authorization_canceled", "coupon_reservation_failed", "gift_card_hold_acquisition_failed", "invalid_payment_source", "inventory_unavailable", "order_changed_before_payment", "order_payment_customer_mismatch", "other", "payment_authorization_canceled", "payment_authorization_expired", "payment_confirmation_rejected", "payment_link_capacity_claim_failed", "payment_link_capacity_validation_failed", "payment_method_activation_pending", "payment_method_required", "payment_option_not_allowed", "payment_option_unavailable", "payment_source_binding_failed", "payment_source_conflict", "payment_source_not_updatable", "payment_source_ownership_mismatch", "resource_guarantee_failed", "setup_action_unavailable", "setup_hold_acquisition_failed", "setup_result_incomplete", "tip_allocation_sync_failed", "zero_balance_hold_acquisition_failed".
     * @return ?string
     */
    public function getStatusReason(): ?string { return $this->get('status_reason'); }
    public function hasStatusReason(): bool { return $this->has('status_reason'); }
}
