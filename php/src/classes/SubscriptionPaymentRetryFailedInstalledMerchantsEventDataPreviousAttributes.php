<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $completed_at
 * @property-read string|null $created_at
 * @property-read string|null $idempotency_key
 * @property-read PaymentErrorSummaryPreviousAttributes|null $last_payment_error
 * @property-read string|null $order_id
 * @property-read string|null $payment_intent_id
 * @property-read string|null $started_at
 * @property-read string|null $status
 * @property-read string|null $subscription_id
 * @property-read string|null $subscription_payment_retry_id
 * @property-read string|null $updated_at
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionPaymentRetryFailedInstalledMerchantsEventDataPreviousAttributes extends Model {
    /** @param array{'completed_at'?: mixed, 'created_at'?: mixed, 'idempotency_key'?: mixed, 'last_payment_error'?: mixed, 'order_id'?: mixed, 'payment_intent_id'?: mixed, 'started_at'?: mixed, 'status'?: mixed, 'subscription_id'?: mixed, 'subscription_payment_retry_id'?: mixed, 'updated_at'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionPaymentRetryFailedInstalledMerchantsEventDataPreviousAttributes')); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCompletedAt(): string|null { return $this->get('completed_at'); }
    public function hasCompletedAt(): bool { return $this->has('completed_at'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. Buyer routes return only keys from the buyer's namespace. anyOf[1] (Value): string. The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. Buyer routes return only keys from the buyer's namespace. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getIdempotencyKey(): string|null { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** Why the payment failed. Present only when the retry's status is `failed` and a payment attempt was made. anyOf[1] (Value): {@see PaymentErrorSummaryPreviousAttributes}. anyOf[2] (Value): null.
     * @return PaymentErrorSummaryPreviousAttributes|null
     */
    public function getLastPaymentError(): PaymentErrorSummaryPreviousAttributes|null { return $this->get('last_payment_error'); }
    public function hasLastPaymentError(): bool { return $this->has('last_payment_error'); }
    /** ID of the renewal order the retry collects. Omitted until Flint records it, which can be after processing starts. anyOf[1] (Value): string. ID of the renewal order the retry collects. Omitted until Flint records it, which can be after processing starts. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderId(): string|null { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** The payment intent this retry started. Omitted before charging begins or when no payment intent was created. anyOf[1] (Value): string. The payment intent this retry started. Omitted before charging begins or when no payment intent was created. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPaymentIntentId(): string|null { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStartedAt(): string|null { return $this->get('started_at'); }
    public function hasStartedAt(): bool { return $this->has('started_at'); }
    /** Where the retry is. Each value says what it means. Value enum: "pending", "processing", "succeeded", "failed". anyOf[1] (Value): string. Where the retry is. Each value says what it means. Value enum: "pending", "processing", "succeeded", "failed". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** ID of the past-due subscription whose payment this retry collects. anyOf[1] (Value): string. ID of the past-due subscription whose payment this retry collects. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSubscriptionId(): string|null { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /** Unique identifier for this subscription payment retry, prefixed `spr_`. anyOf[1] (Value): string. Unique identifier for this subscription payment retry, prefixed `spr_`. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSubscriptionPaymentRetryId(): string|null { return $this->get('subscription_payment_retry_id'); }
    public function hasSubscriptionPaymentRetryId(): bool { return $this->has('subscription_payment_retry_id'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
