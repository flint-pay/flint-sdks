<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $completed_at
 * @property-read string $created_at
 * @property-read string $idempotency_key
 * @property-read ?PaymentErrorSummary $last_payment_error
 * @property-read ?string $order_id
 * @property-read ?string $payment_intent_id
 * @property-read ?string $started_at
 * @property-read string $status
 * @property-read string $subscription_id
 * @property-read string $subscription_payment_retry_id
 * @property-read string $updated_at
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionPaymentRetryCreatedMerchantEventDataObject extends Model {
    /** @param array{'completed_at'?: string, 'created_at': string, 'idempotency_key': string, 'last_payment_error'?: mixed, 'order_id'?: string, 'payment_intent_id'?: string, 'started_at'?: string, 'status': string, 'subscription_id': string, 'subscription_payment_retry_id': string, 'updated_at': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionPaymentRetryCreatedMerchantEventDataObject')); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getCompletedAt(): ?string { return $this->get('completed_at'); }
    public function hasCompletedAt(): bool { return $this->has('completed_at'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The idempotency key sent with the request that created the retry. Repeating the request with the same key returns this retry.
     * @return string
     */
    public function getIdempotencyKey(): string { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** Why the payment failed. Present only when the retry's status is `failed` and a payment attempt was made. A summary of why a payment attempt failed, with a normalized error code, a message, the failure time, and remediation.
     * @return ?PaymentErrorSummary
     */
    public function getLastPaymentError(): ?PaymentErrorSummary { return $this->get('last_payment_error'); }
    public function hasLastPaymentError(): bool { return $this->has('last_payment_error'); }
    /** ID of the renewal order the retry collects. Omitted until Flint records it, which can be after processing starts.
     * @return ?string
     */
    public function getOrderId(): ?string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** The payment intent this retry started. Omitted before charging begins or when no payment intent was created.
     * @return ?string
     */
    public function getPaymentIntentId(): ?string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getStartedAt(): ?string { return $this->get('started_at'); }
    public function hasStartedAt(): bool { return $this->has('started_at'); }
    /** Where the retry is. Each value says what it means. Value enum: "pending", "processing", "succeeded", "failed".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** ID of the past-due subscription whose payment this retry collects.
     * @return string
     */
    public function getSubscriptionId(): string { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /** Unique identifier for this subscription payment retry, prefixed `spr_`.
     * @return string
     */
    public function getSubscriptionPaymentRetryId(): string { return $this->get('subscription_payment_retry_id'); }
    public function hasSubscriptionPaymentRetryId(): bool { return $this->has('subscription_payment_retry_id'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
