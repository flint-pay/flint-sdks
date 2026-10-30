<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $attempt_number
 * @property-read ?string $completed_at
 * @property-read string $delivery_attempt_id
 * @property-read string $started_at
 * @property-read string $status
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardNotificationDeliveryAttempt extends Model {
    /** @param array{'attempt_number': int, 'completed_at'?: string, 'delivery_attempt_id': string, 'started_at': string, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardNotificationDeliveryAttempt')); }
    /** Format: int64.
     * @return int
     */
    public function getAttemptNumber(): int { return $this->get('attempt_number'); }
    public function hasAttemptNumber(): bool { return $this->has('attempt_number'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getCompletedAt(): ?string { return $this->get('completed_at'); }
    public function hasCompletedAt(): bool { return $this->has('completed_at'); }
    /** delivery_attempt_id
     * @return string
     */
    public function getDeliveryAttemptId(): string { return $this->get('delivery_attempt_id'); }
    public function hasDeliveryAttemptId(): bool { return $this->has('delivery_attempt_id'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getStartedAt(): string { return $this->get('started_at'); }
    public function hasStartedAt(): bool { return $this->has('started_at'); }
    /** Value enum: "started", "sent", "failed", "abandoned".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
