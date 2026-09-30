<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $completed_at
 * @property-read string $created_at
 * @property-read SubscriptionPaymentRetryFailure $failure
 * @property-read string $idempotency_key
 * @property-read string $order_id
 * @property-read string $payment_attempt_id
 * @property-read string $started_at
 * @property-read string $status
 * @property-read string $subscription_id
 * @property-read string $subscription_payment_retry_id
 * @property-read string $updated_at
 * Presence-aware response; omitted fields throw when accessed. */
final class SubscriptionPaymentRetry extends Model {
    /** @param array{'completed_at'?: string, 'created_at': string, 'failure'?: mixed, 'idempotency_key': string, 'order_id'?: string, 'payment_attempt_id'?: string, 'started_at'?: string, 'status': string, 'subscription_id': string, 'subscription_payment_retry_id': string, 'updated_at': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionPaymentRetry')); }
    /** @return string
     * @throws SdkError When completed_at is omitted; use hasCompletedAt() or valueOrDefault().
     */
    public function getCompletedAt(): string { return $this->get('completed_at'); }
    public function hasCompletedAt(): bool { return $this->has('completed_at'); }
    /** @return string
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return SubscriptionPaymentRetryFailure
     * @throws SdkError When failure is omitted; use hasFailure() or valueOrDefault().
     */
    public function getFailure(): SubscriptionPaymentRetryFailure { return $this->get('failure'); }
    public function hasFailure(): bool { return $this->has('failure'); }
    /** @return string
     * @throws SdkError When idempotency_key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** @return string
     * @throws SdkError When payment_attempt_id is omitted; use hasPaymentAttemptId() or valueOrDefault().
     */
    public function getPaymentAttemptId(): string { return $this->get('payment_attempt_id'); }
    public function hasPaymentAttemptId(): bool { return $this->has('payment_attempt_id'); }
    /** @return string
     * @throws SdkError When started_at is omitted; use hasStartedAt() or valueOrDefault().
     */
    public function getStartedAt(): string { return $this->get('started_at'); }
    public function hasStartedAt(): bool { return $this->has('started_at'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** @return string
     * @throws SdkError When subscription_id is omitted; use hasSubscriptionId() or valueOrDefault().
     */
    public function getSubscriptionId(): string { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /** @return string
     * @throws SdkError When subscription_payment_retry_id is omitted; use hasSubscriptionPaymentRetryId() or valueOrDefault().
     */
    public function getSubscriptionPaymentRetryId(): string { return $this->get('subscription_payment_retry_id'); }
    public function hasSubscriptionPaymentRetryId(): bool { return $this->has('subscription_payment_retry_id'); }
    /** @return string
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
