<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $completed_at
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $expected_outstanding_money
 * @property-read list<PaymentAttemptGiftCardRedemptionInput|array<array-key, mixed>|\stdClass> $gift_card_redemptions
 * @property-read bool $is_resumable
 * @property-read BuyerPaymentErrorSummaryInput|array<array-key, mixed>|\stdClass $last_payment_error
 * @property-read string $mode
 * @property-read string $order_payment_attempt_id
 * @property-read list<BuyerPaymentAttemptPaymentIntentInput|array<array-key, mixed>|\stdClass> $payment_intents
 * @property-read OrderPaymentAttemptPaymentMethodSaveInput|array<array-key, mixed>|\stdClass $payment_method_save
 * @property-read list<PendingPaymentActionInput|array<array-key, mixed>|\stdClass> $pending_actions
 * @property-read string|\DateTimeInterface $started_at
 * @property-read string $status
 * @property-read string $status_reason
 * Presence-aware input; omitted fields throw when accessed. */
final class BuyerOrderPaymentAttemptInput extends Model {
    /** @param array{'completed_at'?: string|\DateTimeInterface, 'expected_outstanding_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'gift_card_redemptions': list<PaymentAttemptGiftCardRedemptionInput|array<array-key, mixed>|\stdClass>, 'is_resumable': bool, 'last_payment_error'?: BuyerPaymentErrorSummaryInput|array<array-key, mixed>|\stdClass, 'mode': string, 'order_payment_attempt_id': string, 'payment_intents': list<BuyerPaymentAttemptPaymentIntentInput|array<array-key, mixed>|\stdClass>, 'payment_method_save'?: OrderPaymentAttemptPaymentMethodSaveInput|array<array-key, mixed>|\stdClass, 'pending_actions': list<PendingPaymentActionInput|array<array-key, mixed>|\stdClass>, 'started_at'?: string|\DateTimeInterface, 'status': string, 'status_reason'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerOrderPaymentAttemptInput')); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When completed_at is omitted; use hasCompletedAt() or valueOrDefault().
     */
    public function getCompletedAt(): string|\DateTimeInterface { return $this->get('completed_at'); }
    public function hasCompletedAt(): bool { return $this->has('completed_at'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When expected_outstanding_money is omitted; use hasExpectedOutstandingMoney() or valueOrDefault().
     */
    public function getExpectedOutstandingMoney(): mixed { return $this->get('expected_outstanding_money'); }
    public function hasExpectedOutstandingMoney(): bool { return $this->has('expected_outstanding_money'); }
    /**  [] (Value): {@see PaymentAttemptGiftCardRedemptionInput}. A gift card redemption made as part of an order payment attempt, with the amount, tip, and gift card.
     * @return list<PaymentAttemptGiftCardRedemptionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When gift_card_redemptions is omitted; use hasGiftCardRedemptions() or valueOrDefault().
     */
    public function getGiftCardRedemptions(): array { return $this->get('gift_card_redemptions'); }
    public function hasGiftCardRedemptions(): bool { return $this->has('gift_card_redemptions'); }
    /** Whether the attempt can continue through PayOrder with action: resume and this order_payment_attempt_id after any pending client action is complete. If false, check status before starting another payment; the attempt may still be in progress.
     * @return bool
     * @throws SdkError When is_resumable is omitted; use hasIsResumable() or valueOrDefault().
     */
    public function getIsResumable(): bool { return $this->get('is_resumable'); }
    public function hasIsResumable(): bool { return $this->has('is_resumable'); }
    /** The concluded failure of a payment leg that failed this attempt. Absent for non-payment failures. Why a payment attempt failed: a normalized `code`, a message, when it failed, and recovery guidance.
     * @return BuyerPaymentErrorSummaryInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When last_payment_error is omitted; use hasLastPaymentError() or valueOrDefault().
     */
    public function getLastPaymentError(): mixed { return $this->get('last_payment_error'); }
    public function hasLastPaymentError(): bool { return $this->has('last_payment_error'); }
    /** Value enum: "payment", "setup", "settlement".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** order_payment_attempt_id
     * @return string
     * @throws SdkError When order_payment_attempt_id is omitted; use hasOrderPaymentAttemptId() or valueOrDefault().
     */
    public function getOrderPaymentAttemptId(): string { return $this->get('order_payment_attempt_id'); }
    public function hasOrderPaymentAttemptId(): bool { return $this->has('order_payment_attempt_id'); }
    /**  [] (Value): {@see BuyerPaymentAttemptPaymentIntentInput}. The payment intent behind an order payment attempt, with its status, amounts, authorization expiry, and last payment error.
     * @return list<BuyerPaymentAttemptPaymentIntentInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When payment_intents is omitted; use hasPaymentIntents() or valueOrDefault().
     */
    public function getPaymentIntents(): array { return $this->get('payment_intents'); }
    public function hasPaymentIntents(): bool { return $this->has('payment_intents'); }
    /** Set when the pay request sent save_payment_method: true and the attempt paid without saving the payment method. A card typed into checkout and saved has no entry here; read payment_method_save on the checkout session for a card saved with a mobile phone number. What became of the buyer's save_payment_method. The payment does not depend on it.
     * @return OrderPaymentAttemptPaymentMethodSaveInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When payment_method_save is omitted; use hasPaymentMethodSave() or valueOrDefault().
     */
    public function getPaymentMethodSave(): mixed { return $this->get('payment_method_save'); }
    public function hasPaymentMethodSave(): bool { return $this->has('payment_method_save'); }
    /**  [] (Value): {@see PendingPaymentActionInput}. Client-side action required before continuing a payment. Resume an order through PayOrder with order_payment_attempt_id, or continue a standalone PaymentIntent through its confirm endpoint without a replacement credential.
     * @return list<PendingPaymentActionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When pending_actions is omitted; use hasPendingActions() or valueOrDefault().
     */
    public function getPendingActions(): array { return $this->get('pending_actions'); }
    public function hasPendingActions(): bool { return $this->has('pending_actions'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When started_at is omitted; use hasStartedAt() or valueOrDefault().
     */
    public function getStartedAt(): string|\DateTimeInterface { return $this->get('started_at'); }
    public function hasStartedAt(): bool { return $this->has('started_at'); }
    /** Value enum: "processing", "requires_action", "requires_capture", "partially_succeeded", "requires_retry", "finalizing", "succeeded", "failed", "expired", "canceled".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Non-payment reason an attempt failed, was canceled, or expired. Failed attempts with an unmapped non-payment reason report other. Canceled and expired attempts include a reason only when it adds information beyond status. New values may be added. Value enum: "authorization_canceled", "coupon_reservation_failed", "gift_card_hold_acquisition_failed", "invalid_payment_source", "inventory_unavailable", "order_changed_before_payment", "order_payment_customer_mismatch", "other", "payment_authorization_canceled", "payment_authorization_expired", "payment_confirmation_rejected", "payment_link_capacity_claim_failed", "payment_link_capacity_validation_failed", "payment_method_activation_pending", "payment_method_required", "payment_option_not_allowed", "payment_option_unavailable", "payment_source_binding_failed", "payment_source_conflict", "payment_source_not_updatable", "payment_source_ownership_mismatch", "resource_guarantee_failed", "setup_action_unavailable", "setup_hold_acquisition_failed", "setup_result_incomplete", "tip_allocation_sync_failed", "zero_balance_hold_acquisition_failed".
     * @return string
     * @throws SdkError When status_reason is omitted; use hasStatusReason() or valueOrDefault().
     */
    public function getStatusReason(): string { return $this->get('status_reason'); }
    public function hasStatusReason(): bool { return $this->has('status_reason'); }
}
