<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $active_subscription_payment_retry_id
 * @property-read int $max_retries
 * @property-read int $remaining_retries
 * Presence-aware response; omitted optional fields return null. */
final class BuyerRetryPaymentActionOptions extends Model {
    /** @param array{'active_subscription_payment_retry_id'?: string, 'max_retries': int, 'remaining_retries': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerRetryPaymentActionOptions')); }
    /** The retry that is pending or processing. Read it with GET /v1/me/subscriptions/{subscription_id}/payment-retries/{subscription_payment_retry_id} until its status is succeeded or failed.
     * @return ?string
     */
    public function getActiveSubscriptionPaymentRetryId(): ?string { return $this->get('active_subscription_payment_retry_id'); }
    public function hasActiveSubscriptionPaymentRetryId(): bool { return $this->has('active_subscription_payment_retry_id'); }
    /** The buyer limit per billing period. Currently 3. Format: int32. minimum: 1.
     * @return int
     */
    public function getMaxRetries(): int { return $this->get('max_retries'); }
    public function hasMaxRetries(): bool { return $this->has('max_retries'); }
    /** Retries left this billing period. Retries the store starts count too. The count starts again when a later billing period becomes past due. Format: int32. minimum: 0. maximum: 3.
     * @return int
     */
    public function getRemainingRetries(): int { return $this->get('remaining_retries'); }
    public function hasRemainingRetries(): bool { return $this->has('remaining_retries'); }
}
