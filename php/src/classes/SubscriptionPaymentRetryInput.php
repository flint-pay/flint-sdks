<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $completed_at
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $idempotency_key
 * @property-read PaymentErrorSummaryInput|array<array-key, mixed>|\stdClass $last_payment_error
 * @property-read string $order_id
 * @property-read string $order_payment_attempt_id
 * @property-read string|\DateTimeInterface $started_at
 * @property-read string $status
 * @property-read string $subscription_id
 * @property-read string $subscription_payment_retry_id
 * @property-read string|\DateTimeInterface $updated_at
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionPaymentRetryInput extends Model {
    /** @param array{'completed_at'?: string|\DateTimeInterface, 'created_at': string|\DateTimeInterface, 'idempotency_key': string, 'last_payment_error'?: PaymentErrorSummaryInput|array<array-key, mixed>|\stdClass, 'order_id'?: string, 'order_payment_attempt_id'?: string, 'started_at'?: string|\DateTimeInterface, 'status': string, 'subscription_id': string, 'subscription_payment_retry_id': string, 'updated_at': string|\DateTimeInterface, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionPaymentRetryInput')); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When completed_at is omitted; use hasCompletedAt() or valueOrDefault().
     */
    public function getCompletedAt(): string|\DateTimeInterface { return $this->get('completed_at'); }
    public function hasCompletedAt(): bool { return $this->has('completed_at'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** idempotency_key
     * @return string
     * @throws SdkError When idempotency_key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** A summary of why a payment attempt failed, with a normalized error code, a message, the failure time, and remediation.
     * @return PaymentErrorSummaryInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When last_payment_error is omitted; use hasLastPaymentError() or valueOrDefault().
     */
    public function getLastPaymentError(): mixed { return $this->get('last_payment_error'); }
    public function hasLastPaymentError(): bool { return $this->has('last_payment_error'); }
    /** order_id
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** order_payment_attempt_id
     * @return string
     * @throws SdkError When order_payment_attempt_id is omitted; use hasOrderPaymentAttemptId() or valueOrDefault().
     */
    public function getOrderPaymentAttemptId(): string { return $this->get('order_payment_attempt_id'); }
    public function hasOrderPaymentAttemptId(): bool { return $this->has('order_payment_attempt_id'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When started_at is omitted; use hasStartedAt() or valueOrDefault().
     */
    public function getStartedAt(): string|\DateTimeInterface { return $this->get('started_at'); }
    public function hasStartedAt(): bool { return $this->has('started_at'); }
    /** Value enum: "pending", "processing", "succeeded", "failed".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** subscription_id
     * @return string
     * @throws SdkError When subscription_id is omitted; use hasSubscriptionId() or valueOrDefault().
     */
    public function getSubscriptionId(): string { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /** subscription_payment_retry_id
     * @return string
     * @throws SdkError When subscription_payment_retry_id is omitted; use hasSubscriptionPaymentRetryId() or valueOrDefault().
     */
    public function getSubscriptionPaymentRetryId(): string { return $this->get('subscription_payment_retry_id'); }
    public function hasSubscriptionPaymentRetryId(): bool { return $this->has('subscription_payment_retry_id'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
