<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface|null $completed_at
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $expected_outstanding_money
 * @property-read list<PaymentAttemptGiftCardRedemptionPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $gift_card_redemptions
 * @property-read bool|null $is_resumable
 * @property-read PaymentErrorSummaryPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $last_payment_error
 * @property-read string|null $mode
 * @property-read string|null $order_id
 * @property-read string|null $order_payment_attempt_id
 * @property-read list<PaymentAttemptPaymentIntentPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $payment_intents
 * @property-read OrderPaymentAttemptPaymentMethodSavePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $payment_method_save
 * @property-read list<PendingPaymentActionPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $pending_actions
 * @property-read string|\DateTimeInterface|null $started_at
 * @property-read string|null $status
 * @property-read string|null $status_reason
 * @property-read list<string>|null $supported_actions
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderPaymentAttemptPreviousAttributesInput extends Model {
    /** @param array{'completed_at'?: string|\DateTimeInterface|null, 'expected_outstanding_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'gift_card_redemptions'?: list<PaymentAttemptGiftCardRedemptionPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'is_resumable'?: bool|null, 'last_payment_error'?: PaymentErrorSummaryPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'mode'?: string|null, 'order_id'?: string|null, 'order_payment_attempt_id'?: string|null, 'payment_intents'?: list<PaymentAttemptPaymentIntentPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'payment_method_save'?: OrderPaymentAttemptPaymentMethodSavePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'pending_actions'?: list<PendingPaymentActionPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'started_at'?: string|\DateTimeInterface|null, 'status'?: string|null, 'status_reason'?: string|null, 'supported_actions'?: list<string>|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderPaymentAttemptPreviousAttributesInput')); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When completed_at is omitted; use hasCompletedAt() or valueOrDefault().
     */
    public function getCompletedAt(): mixed { return $this->get('completed_at'); }
    public function hasCompletedAt(): bool { return $this->has('completed_at'); }
    /** The outstanding balance this attempt was started to collect, fixed when it started. For an order that gift cards partly cover, it includes the gift card part. Later changes to the order's balance don't change it, and a resume request that sends `expected_outstanding_money` is compared with this amount. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When expected_outstanding_money is omitted; use hasExpectedOutstandingMoney() or valueOrDefault().
     */
    public function getExpectedOutstandingMoney(): mixed { return $this->get('expected_outstanding_money'); }
    public function hasExpectedOutstandingMoney(): bool { return $this->has('expected_outstanding_money'); }
    /** Gift cards this attempt holds or has redeemed, one entry per card. Each amount is reserved while the attempt is open and is taken from the card when the attempt succeeds. A failed or canceled attempt releases it. Empty when no gift card is used. anyOf[1] (Value): Array of {@see PaymentAttemptGiftCardRedemptionPreviousAttributesInput}. Gift cards this attempt holds or has redeemed, one entry per card. Each amount is reserved while the attempt is open and is taken from the card when the attempt succeeds. A failed or canceled attempt releases it. Empty when no gift card is used. anyOf[1][] (Value): {@see PaymentAttemptGiftCardRedemptionPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<PaymentAttemptGiftCardRedemptionPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When gift_card_redemptions is omitted; use hasGiftCardRedemptions() or valueOrDefault().
     */
    public function getGiftCardRedemptions(): mixed { return $this->get('gift_card_redemptions'); }
    public function hasGiftCardRedemptions(): bool { return $this->has('gift_card_redemptions'); }
    /** Whether the attempt can continue through PayOrder with action: resume and this order_payment_attempt_id after any pending client action is complete. If false, check status before starting another payment; the attempt may still be in progress. anyOf[1] (Value): boolean. Whether the attempt can continue through PayOrder with action: resume and this order_payment_attempt_id after any pending client action is complete. If false, check status before starting another payment; the attempt may still be in progress. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When is_resumable is omitted; use hasIsResumable() or valueOrDefault().
     */
    public function getIsResumable(): mixed { return $this->get('is_resumable'); }
    public function hasIsResumable(): bool { return $this->has('is_resumable'); }
    /** The concluded failure of a payment leg that failed this attempt. Absent for non-payment failures. anyOf[1] (Value): {@see PaymentErrorSummaryPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return PaymentErrorSummaryPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When last_payment_error is omitted; use hasLastPaymentError() or valueOrDefault().
     */
    public function getLastPaymentError(): mixed { return $this->get('last_payment_error'); }
    public function hasLastPaymentError(): bool { return $this->has('last_payment_error'); }
    /** Whether the attempt collects the order's balance, saves a payment method without charging it, or settles the order without a processor payment. Value enum: "payment", "setup", "settlement". anyOf[1] (Value): string. Whether the attempt collects the order's balance, saves a payment method without charging it, or settles the order without a processor payment. Value enum: "payment", "setup", "settlement". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): mixed { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** The order this payment attempt collects money for or saves a payment method for. anyOf[1] (Value): string. The order this payment attempt collects money for or saves a payment method for. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): mixed { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Unique identifier for this order payment attempt, prefixed `opat_`. anyOf[1] (Value): string. Unique identifier for this order payment attempt, prefixed `opat_`. Example: "opat_01KEZF7C00B5PW9F2R8A4YSH5D". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When order_payment_attempt_id is omitted; use hasOrderPaymentAttemptId() or valueOrDefault().
     */
    public function getOrderPaymentAttemptId(): mixed { return $this->get('order_payment_attempt_id'); }
    public function hasOrderPaymentAttemptId(): bool { return $this->has('order_payment_attempt_id'); }
    /** The payment intents this attempt collects through, each with its amount, status, tip, and latest error. Empty for an attempt that collects no processor payment, such as a setup, or an order that gift cards or return credit settle alone. anyOf[1] (Value): Array of {@see PaymentAttemptPaymentIntentPreviousAttributesInput}. The payment intents this attempt collects through, each with its amount, status, tip, and latest error. Empty for an attempt that collects no processor payment, such as a setup, or an order that gift cards or return credit settle alone. anyOf[1][] (Value): {@see PaymentAttemptPaymentIntentPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<PaymentAttemptPaymentIntentPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When payment_intents is omitted; use hasPaymentIntents() or valueOrDefault().
     */
    public function getPaymentIntents(): mixed { return $this->get('payment_intents'); }
    public function hasPaymentIntents(): bool { return $this->has('payment_intents'); }
    /** Reports only a checkout buyer's skipped save when the pay request sent save_payment_method: true and the attempt paid without saving the payment method. A merchant save has no entry here; read payment_source.card.payment_method_id on the payment intent. A card typed into checkout and saved has no entry here; read payment_method_save on the checkout session for a card waiting for confirmation. anyOf[1] (Value): {@see OrderPaymentAttemptPaymentMethodSavePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return OrderPaymentAttemptPaymentMethodSavePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When payment_method_save is omitted; use hasPaymentMethodSave() or valueOrDefault().
     */
    public function getPaymentMethodSave(): mixed { return $this->get('payment_method_save'); }
    public function hasPaymentMethodSave(): bool { return $this->has('payment_method_save'); }
    /** Steps the buyer must finish in your client before the attempt can continue, such as authentication. Empty when none is pending. Complete them, then resume the attempt. anyOf[1] (Value): Array of {@see PendingPaymentActionPreviousAttributesInput}. Steps the buyer must finish in your client before the attempt can continue, such as authentication. Empty when none is pending. Complete them, then resume the attempt. anyOf[1][] (Value): {@see PendingPaymentActionPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<PendingPaymentActionPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When pending_actions is omitted; use hasPendingActions() or valueOrDefault().
     */
    public function getPendingActions(): mixed { return $this->get('pending_actions'); }
    public function hasPendingActions(): bool { return $this->has('pending_actions'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When started_at is omitted; use hasStartedAt() or valueOrDefault().
     */
    public function getStartedAt(): mixed { return $this->get('started_at'); }
    public function hasStartedAt(): bool { return $this->has('started_at'); }
    /** Where the attempt is in collecting payment or saving a payment method. `partially_succeeded`, `succeeded`, `failed`, `canceled`, and `expired` are final. Value enum: "processing", "requires_action", "requires_capture", "partially_succeeded", "succeeded", "failed", "expired", "canceled". anyOf[1] (Value): string. Where the attempt is in collecting payment or saving a payment method. `partially_succeeded`, `succeeded`, `failed`, `canceled`, and `expired` are final. Value enum: "processing", "requires_action", "requires_capture", "partially_succeeded", "succeeded", "failed", "expired", "canceled". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Non-payment reason an attempt failed, was canceled, or expired. Failed attempts with an unmapped non-payment reason report other. Canceled and expired attempts include a reason only when it adds information beyond status. New values may be added. Value enum: "authorization_canceled", "canceled_on_reader", "reader_unavailable", "coupon_reservation_failed", "gift_card_hold_acquisition_failed", "invalid_payment_source", "inventory_unavailable", "order_changed_before_payment", "order_payment_customer_mismatch", "other", "payment_authorization_canceled", "payment_authorization_expired", "payment_confirmation_rejected", "payment_link_capacity_claim_failed", "payment_link_capacity_validation_failed", "payment_method_activation_pending", "payment_method_required", "payment_option_not_allowed", "payment_option_unavailable", "payment_returned", "payment_source_binding_failed", "payment_source_conflict", "payment_source_not_updatable", "payment_source_ownership_mismatch", "resource_guarantee_failed", "setup_action_unavailable", "setup_hold_acquisition_failed", "setup_result_incomplete", "tip_allocation_sync_failed", "zero_balance_hold_acquisition_failed". anyOf[1] (Value): string. Non-payment reason an attempt failed, was canceled, or expired. Failed attempts with an unmapped non-payment reason report other. Canceled and expired attempts include a reason only when it adds information beyond status. New values may be added. Value enum: "authorization_canceled", "canceled_on_reader", "reader_unavailable", "coupon_reservation_failed", "gift_card_hold_acquisition_failed", "invalid_payment_source", "inventory_unavailable", "order_changed_before_payment", "order_payment_customer_mismatch", "other", "payment_authorization_canceled", "payment_authorization_expired", "payment_confirmation_rejected", "payment_link_capacity_claim_failed", "payment_link_capacity_validation_failed", "payment_method_activation_pending", "payment_method_required", "payment_option_not_allowed", "payment_option_unavailable", "payment_returned", "payment_source_binding_failed", "payment_source_conflict", "payment_source_not_updatable", "payment_source_ownership_mismatch", "resource_guarantee_failed", "setup_action_unavailable", "setup_hold_acquisition_failed", "setup_result_incomplete", "tip_allocation_sync_failed", "zero_balance_hold_acquisition_failed". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When status_reason is omitted; use hasStatusReason() or valueOrDefault().
     */
    public function getStatusReason(): mixed { return $this->get('status_reason'); }
    public function hasStatusReason(): bool { return $this->has('status_reason'); }
    /** Lifecycle actions accepted now. Cancel is available during collection until a payment leg succeeds. Attempts applying their outcome to the order and terminal attempts list no actions. Always present with merchant credentials. [] enum: "cancel". anyOf[1] (Value): Array of string. Lifecycle actions accepted now. Cancel is available during collection until a payment leg succeeds. Attempts applying their outcome to the order and terminal attempts list no actions. Always present with merchant credentials. [] enum: "cancel". anyOf[1][] (Value): string.  Value enum: "cancel". anyOf[2] (Value): null.
     * @return list<string>|null
     * @throws SdkError When supported_actions is omitted; use hasSupportedActions() or valueOrDefault().
     */
    public function getSupportedActions(): mixed { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
}
