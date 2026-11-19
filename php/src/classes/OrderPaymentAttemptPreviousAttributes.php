<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $completed_at
 * @property-read MoneyValuePreviousAttributes|null $expected_outstanding_money
 * @property-read list<PaymentAttemptGiftCardRedemptionPreviousAttributes>|null $gift_card_redemptions
 * @property-read string|null $idempotency_key
 * @property-read bool|null $is_resumable
 * @property-read PaymentErrorSummaryPreviousAttributes|null $last_payment_error
 * @property-read string|null $mode
 * @property-read string|null $order_id
 * @property-read string|null $order_payment_attempt_id
 * @property-read list<PaymentAttemptPaymentIntentPreviousAttributes>|null $payment_intents
 * @property-read OrderPaymentAttemptPaymentMethodSavePreviousAttributes|null $payment_method_save
 * @property-read list<PendingPaymentActionPreviousAttributes>|null $pending_actions
 * @property-read string|null $started_at
 * @property-read string|null $status
 * @property-read string|null $status_reason
 * @property-read list<string>|null $supported_actions
 * Presence-aware response; omitted optional fields return null. */
final class OrderPaymentAttemptPreviousAttributes extends Model {
    /** @param array{'completed_at'?: mixed, 'expected_outstanding_money'?: mixed, 'gift_card_redemptions'?: mixed, 'idempotency_key'?: mixed, 'is_resumable'?: mixed, 'last_payment_error'?: mixed, 'mode'?: mixed, 'order_id'?: mixed, 'order_payment_attempt_id'?: mixed, 'payment_intents'?: mixed, 'payment_method_save'?: mixed, 'pending_actions'?: mixed, 'started_at'?: mixed, 'status'?: mixed, 'status_reason'?: mixed, 'supported_actions'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderPaymentAttemptPreviousAttributes')); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCompletedAt(): string|null { return $this->get('completed_at'); }
    public function hasCompletedAt(): bool { return $this->has('completed_at'); }
    /** The outstanding balance this attempt was started to collect, fixed when it started. For an order that gift cards partly cover, it includes the gift card part. Later changes to the order's balance don't change it, and a resume request that sends `expected_outstanding_money` is compared with this amount. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getExpectedOutstandingMoney(): MoneyValuePreviousAttributes|null { return $this->get('expected_outstanding_money'); }
    public function hasExpectedOutstandingMoney(): bool { return $this->has('expected_outstanding_money'); }
    /** Gift cards this attempt holds or has redeemed, one entry per card. Each amount is reserved while the attempt is open and is taken from the card when the attempt succeeds. A failed or canceled attempt releases it. Empty when no gift card is used. anyOf[1] (Value): Array of {@see PaymentAttemptGiftCardRedemptionPreviousAttributes}. Gift cards this attempt holds or has redeemed, one entry per card. Each amount is reserved while the attempt is open and is taken from the card when the attempt succeeds. A failed or canceled attempt releases it. Empty when no gift card is used. anyOf[1][] (Value): {@see PaymentAttemptGiftCardRedemptionPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<PaymentAttemptGiftCardRedemptionPreviousAttributes>|null
     */
    public function getGiftCardRedemptions(): array|null { return $this->get('gift_card_redemptions'); }
    public function hasGiftCardRedemptions(): bool { return $this->has('gift_card_redemptions'); }
    /** The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. Buyer sessions on routes shared with merchants get `null`. `/v1/me` responses do not include this field. anyOf[1] (Value): string. The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. Buyer sessions on routes shared with merchants get `null`. `/v1/me` responses do not include this field. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getIdempotencyKey(): string|null { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** Whether the attempt can continue through PayOrder with action: resume and this order_payment_attempt_id after any pending client action is complete. If false, check status before starting another payment; the attempt may still be in progress. anyOf[1] (Value): boolean. Whether the attempt can continue through PayOrder with action: resume and this order_payment_attempt_id after any pending client action is complete. If false, check status before starting another payment; the attempt may still be in progress. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getIsResumable(): bool|null { return $this->get('is_resumable'); }
    public function hasIsResumable(): bool { return $this->has('is_resumable'); }
    /** The concluded failure of a payment leg that failed this attempt. Absent for non-payment failures. anyOf[1] (Value): {@see PaymentErrorSummaryPreviousAttributes}. anyOf[2] (Value): null.
     * @return PaymentErrorSummaryPreviousAttributes|null
     */
    public function getLastPaymentError(): PaymentErrorSummaryPreviousAttributes|null { return $this->get('last_payment_error'); }
    public function hasLastPaymentError(): bool { return $this->has('last_payment_error'); }
    /** Whether the attempt collects the order's balance, saves a payment method without charging it, or settles the order without a processor payment. Value enum: "payment", "setup", "settlement". anyOf[1] (Value): string. Whether the attempt collects the order's balance, saves a payment method without charging it, or settles the order without a processor payment. Value enum: "payment", "setup", "settlement". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getMode(): string|null { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** The order this payment attempt collects money for or saves a payment method for. anyOf[1] (Value): string. The order this payment attempt collects money for or saves a payment method for. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderId(): string|null { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Unique identifier for this order payment attempt, prefixed `opat_`. anyOf[1] (Value): string. Unique identifier for this order payment attempt, prefixed `opat_`. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderPaymentAttemptId(): string|null { return $this->get('order_payment_attempt_id'); }
    public function hasOrderPaymentAttemptId(): bool { return $this->has('order_payment_attempt_id'); }
    /** The payment intents this attempt collects through, each with its amount, status, tip, and latest error. Empty for an attempt that collects no processor payment, such as a setup, or an order that gift cards or return credit settle alone. anyOf[1] (Value): Array of {@see PaymentAttemptPaymentIntentPreviousAttributes}. The payment intents this attempt collects through, each with its amount, status, tip, and latest error. Empty for an attempt that collects no processor payment, such as a setup, or an order that gift cards or return credit settle alone. anyOf[1][] (Value): {@see PaymentAttemptPaymentIntentPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<PaymentAttemptPaymentIntentPreviousAttributes>|null
     */
    public function getPaymentIntents(): array|null { return $this->get('payment_intents'); }
    public function hasPaymentIntents(): bool { return $this->has('payment_intents'); }
    /** Reports only a checkout buyer's skipped save when the pay request sent save_payment_method: true and the attempt paid without saving the payment method. A merchant save has no entry here; read payment_source.card.payment_method_id on the payment intent. A card typed into checkout and saved has no entry here; read payment_method_save on the checkout session for a card waiting for confirmation. anyOf[1] (Value): {@see OrderPaymentAttemptPaymentMethodSavePreviousAttributes}. anyOf[2] (Value): null.
     * @return OrderPaymentAttemptPaymentMethodSavePreviousAttributes|null
     */
    public function getPaymentMethodSave(): OrderPaymentAttemptPaymentMethodSavePreviousAttributes|null { return $this->get('payment_method_save'); }
    public function hasPaymentMethodSave(): bool { return $this->has('payment_method_save'); }
    /** Steps the buyer must finish in your client before the attempt can continue, such as authentication. Empty when none is pending. Complete them, then resume the attempt. anyOf[1] (Value): Array of {@see PendingPaymentActionPreviousAttributes}. Steps the buyer must finish in your client before the attempt can continue, such as authentication. Empty when none is pending. Complete them, then resume the attempt. anyOf[1][] (Value): {@see PendingPaymentActionPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<PendingPaymentActionPreviousAttributes>|null
     */
    public function getPendingActions(): array|null { return $this->get('pending_actions'); }
    public function hasPendingActions(): bool { return $this->has('pending_actions'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStartedAt(): string|null { return $this->get('started_at'); }
    public function hasStartedAt(): bool { return $this->has('started_at'); }
    /** Where the attempt is in collecting payment or saving a payment method. `partially_succeeded`, `succeeded`, `failed`, `canceled`, and `expired` are final. Value enum: "processing", "requires_action", "requires_capture", "partially_succeeded", "succeeded", "failed", "expired", "canceled". anyOf[1] (Value): string. Where the attempt is in collecting payment or saving a payment method. `partially_succeeded`, `succeeded`, `failed`, `canceled`, and `expired` are final. Value enum: "processing", "requires_action", "requires_capture", "partially_succeeded", "succeeded", "failed", "expired", "canceled". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Non-payment reason an attempt failed, was canceled, or expired. Failed attempts with an unmapped non-payment reason report other. Canceled and expired attempts include a reason only when it adds information beyond status. New values may be added. Value enum: "authorization_canceled", "canceled_on_reader", "reader_unavailable", "coupon_reservation_failed", "gift_card_hold_acquisition_failed", "invalid_payment_source", "inventory_unavailable", "order_changed_before_payment", "order_payment_customer_mismatch", "other", "payment_authorization_canceled", "payment_authorization_expired", "payment_confirmation_rejected", "payment_link_capacity_claim_failed", "payment_link_capacity_validation_failed", "payment_method_activation_pending", "payment_method_required", "payment_option_not_allowed", "payment_option_unavailable", "payment_returned", "payment_source_binding_failed", "payment_source_conflict", "payment_source_not_updatable", "payment_source_ownership_mismatch", "rate_limit_exceeded", "resource_guarantee_failed", "setup_action_unavailable", "setup_hold_acquisition_failed", "setup_result_incomplete", "tip_allocation_sync_failed", "zero_balance_hold_acquisition_failed". anyOf[1] (Value): string. Non-payment reason an attempt failed, was canceled, or expired. Failed attempts with an unmapped non-payment reason report other. Canceled and expired attempts include a reason only when it adds information beyond status. New values may be added. Value enum: "authorization_canceled", "canceled_on_reader", "reader_unavailable", "coupon_reservation_failed", "gift_card_hold_acquisition_failed", "invalid_payment_source", "inventory_unavailable", "order_changed_before_payment", "order_payment_customer_mismatch", "other", "payment_authorization_canceled", "payment_authorization_expired", "payment_confirmation_rejected", "payment_link_capacity_claim_failed", "payment_link_capacity_validation_failed", "payment_method_activation_pending", "payment_method_required", "payment_option_not_allowed", "payment_option_unavailable", "payment_returned", "payment_source_binding_failed", "payment_source_conflict", "payment_source_not_updatable", "payment_source_ownership_mismatch", "rate_limit_exceeded", "resource_guarantee_failed", "setup_action_unavailable", "setup_hold_acquisition_failed", "setup_result_incomplete", "tip_allocation_sync_failed", "zero_balance_hold_acquisition_failed". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatusReason(): string|null { return $this->get('status_reason'); }
    public function hasStatusReason(): bool { return $this->has('status_reason'); }
    /** Lifecycle actions accepted now. Cancel is available during collection until a payment leg succeeds. Attempts applying their outcome to the order and terminal attempts list no actions. Always present with merchant credentials. [] enum: "cancel". anyOf[1] (Value): Array of string. Lifecycle actions accepted now. Cancel is available during collection until a payment leg succeeds. Attempts applying their outcome to the order and terminal attempts list no actions. Always present with merchant credentials. [] enum: "cancel". anyOf[1][] (Value): string.  Value enum: "cancel". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getSupportedActions(): array|null { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
}
