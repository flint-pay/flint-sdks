<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $activity_type
 * @property-read string $checkout_session_id
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $description
 * @property-read string $dispute_id
 * @property-read string $from_dispute_status
 * @property-read string $from_status
 * @property-read string $order_id
 * @property-read string $payment_intent_activity_id
 * @property-read string $refund_id
 * @property-read string $to_dispute_status
 * @property-read string $to_status
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentIntentActivityInput extends Model {
    /** @param array{'activity_type': string, 'checkout_session_id'?: string, 'created_at': string|\DateTimeInterface, 'description': string, 'dispute_id'?: string, 'from_dispute_status'?: string, 'from_status'?: string, 'order_id'?: string, 'payment_intent_activity_id': string, 'refund_id'?: string, 'to_dispute_status'?: string, 'to_status'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentIntentActivityInput')); }
    /** Value enum: "other", "created", "updated", "status_changed", "failed", "canceled", "expired", "refund_created", "refund_status_changed", "dispute_status_changed", "receipt_sent".
     * @return string
     * @throws SdkError When activity_type is omitted; use hasActivityType() or valueOrDefault().
     */
    public function getActivityType(): string { return $this->get('activity_type'); }
    public function hasActivityType(): bool { return $this->has('activity_type'); }
    /** checkout_session_id
     * @return string
     * @throws SdkError When checkout_session_id is omitted; use hasCheckoutSessionId() or valueOrDefault().
     */
    public function getCheckoutSessionId(): string { return $this->get('checkout_session_id'); }
    public function hasCheckoutSessionId(): bool { return $this->has('checkout_session_id'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** description
     * @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** dispute_id
     * @return string
     * @throws SdkError When dispute_id is omitted; use hasDisputeId() or valueOrDefault().
     */
    public function getDisputeId(): string { return $this->get('dispute_id'); }
    public function hasDisputeId(): bool { return $this->has('dispute_id'); }
    /** Value enum: "none", "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented", "other".
     * @return string
     * @throws SdkError When from_dispute_status is omitted; use hasFromDisputeStatus() or valueOrDefault().
     */
    public function getFromDisputeStatus(): string { return $this->get('from_dispute_status'); }
    public function hasFromDisputeStatus(): bool { return $this->has('from_dispute_status'); }
    /** Value enum: "requires_payment_method", "requires_confirmation", "requires_action", "processing", "requires_capture", "canceled", "succeeded", "expired".
     * @return string
     * @throws SdkError When from_status is omitted; use hasFromStatus() or valueOrDefault().
     */
    public function getFromStatus(): string { return $this->get('from_status'); }
    public function hasFromStatus(): bool { return $this->has('from_status'); }
    /** order_id
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** payment_intent_activity_id
     * @return string
     * @throws SdkError When payment_intent_activity_id is omitted; use hasPaymentIntentActivityId() or valueOrDefault().
     */
    public function getPaymentIntentActivityId(): string { return $this->get('payment_intent_activity_id'); }
    public function hasPaymentIntentActivityId(): bool { return $this->has('payment_intent_activity_id'); }
    /** refund_id
     * @return string
     * @throws SdkError When refund_id is omitted; use hasRefundId() or valueOrDefault().
     */
    public function getRefundId(): string { return $this->get('refund_id'); }
    public function hasRefundId(): bool { return $this->has('refund_id'); }
    /** Value enum: "none", "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented", "other".
     * @return string
     * @throws SdkError When to_dispute_status is omitted; use hasToDisputeStatus() or valueOrDefault().
     */
    public function getToDisputeStatus(): string { return $this->get('to_dispute_status'); }
    public function hasToDisputeStatus(): bool { return $this->has('to_dispute_status'); }
    /** Value enum: "requires_payment_method", "requires_confirmation", "requires_action", "processing", "requires_capture", "canceled", "succeeded", "expired".
     * @return string
     * @throws SdkError When to_status is omitted; use hasToStatus() or valueOrDefault().
     */
    public function getToStatus(): string { return $this->get('to_status'); }
    public function hasToStatus(): bool { return $this->has('to_status'); }
}
