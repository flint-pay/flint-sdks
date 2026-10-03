<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $attempt_number
 * @property-read string $completed_at
 * @property-read string $delivery_attempt_id
 * @property-read string $provider_status_code
 * @property-read string $started_at
 * @property-read string $status
 * Presence-aware response; omitted fields throw when accessed. */
final class GiftCardNotificationDeliveryAttempt extends Model {
    /** @param array{'attempt_number': string, 'completed_at'?: string, 'delivery_attempt_id': string, 'provider_status_code'?: string, 'started_at': string, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardNotificationDeliveryAttempt')); }
    /** @return string
     * @throws SdkError When attempt_number is omitted; use hasAttemptNumber() or valueOrDefault().
     */
    public function getAttemptNumber(): string { return $this->get('attempt_number'); }
    public function hasAttemptNumber(): bool { return $this->has('attempt_number'); }
    /** @return string
     * @throws SdkError When completed_at is omitted; use hasCompletedAt() or valueOrDefault().
     */
    public function getCompletedAt(): string { return $this->get('completed_at'); }
    public function hasCompletedAt(): bool { return $this->has('completed_at'); }
    /** @return string
     * @throws SdkError When delivery_attempt_id is omitted; use hasDeliveryAttemptId() or valueOrDefault().
     */
    public function getDeliveryAttemptId(): string { return $this->get('delivery_attempt_id'); }
    public function hasDeliveryAttemptId(): bool { return $this->has('delivery_attempt_id'); }
    /** @return string
     * @throws SdkError When provider_status_code is omitted; use hasProviderStatusCode() or valueOrDefault().
     */
    public function getProviderStatusCode(): string { return $this->get('provider_status_code'); }
    public function hasProviderStatusCode(): bool { return $this->has('provider_status_code'); }
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
}
