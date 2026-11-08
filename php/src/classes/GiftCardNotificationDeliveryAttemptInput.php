<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $attempt_number
 * @property-read string|\DateTimeInterface $completed_at
 * @property-read string $delivery_attempt_id
 * @property-read string|\DateTimeInterface $started_at
 * @property-read string $status
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardNotificationDeliveryAttemptInput extends Model {
    /** @param array{'attempt_number': int, 'completed_at'?: string|\DateTimeInterface, 'delivery_attempt_id': string, 'started_at': string|\DateTimeInterface, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardNotificationDeliveryAttemptInput')); }
    /** Which attempt this is for the notification, starting at 1. Format: int64.
     * @return int
     * @throws SdkError When attempt_number is omitted; use hasAttemptNumber() or valueOrDefault().
     */
    public function getAttemptNumber(): int { return $this->get('attempt_number'); }
    public function hasAttemptNumber(): bool { return $this->has('attempt_number'); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When completed_at is omitted; use hasCompletedAt() or valueOrDefault().
     */
    public function getCompletedAt(): string|\DateTimeInterface { return $this->get('completed_at'); }
    public function hasCompletedAt(): bool { return $this->has('completed_at'); }
    /** ID of this delivery attempt. Example: "edat_01KEZF7C00AX45366QP3FMY6VH".
     * @return string
     * @throws SdkError When delivery_attempt_id is omitted; use hasDeliveryAttemptId() or valueOrDefault().
     */
    public function getDeliveryAttemptId(): string { return $this->get('delivery_attempt_id'); }
    public function hasDeliveryAttemptId(): bool { return $this->has('delivery_attempt_id'); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When started_at is omitted; use hasStartedAt() or valueOrDefault().
     */
    public function getStartedAt(): string|\DateTimeInterface { return $this->get('started_at'); }
    public function hasStartedAt(): bool { return $this->has('started_at'); }
    /** Where this delivery attempt stands. Value enum: "pending", "sent", "failed", "unconfirmed".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
