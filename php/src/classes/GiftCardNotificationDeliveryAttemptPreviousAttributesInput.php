<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $attempt_number
 * @property-read string|\DateTimeInterface|null $completed_at
 * @property-read string|null $delivery_attempt_id
 * @property-read string|\DateTimeInterface|null $started_at
 * @property-read string|null $status
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardNotificationDeliveryAttemptPreviousAttributesInput extends Model {
    /** @param array{'attempt_number'?: int|null, 'completed_at'?: string|\DateTimeInterface|null, 'delivery_attempt_id'?: string|null, 'started_at'?: string|\DateTimeInterface|null, 'status'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardNotificationDeliveryAttemptPreviousAttributesInput')); }
    /** Which attempt this is for the notification, starting at 1. anyOf[1] (Value): integer. Which attempt this is for the notification, starting at 1. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When attempt_number is omitted; use hasAttemptNumber() or valueOrDefault().
     */
    public function getAttemptNumber(): mixed { return $this->get('attempt_number'); }
    public function hasAttemptNumber(): bool { return $this->has('attempt_number'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When completed_at is omitted; use hasCompletedAt() or valueOrDefault().
     */
    public function getCompletedAt(): mixed { return $this->get('completed_at'); }
    public function hasCompletedAt(): bool { return $this->has('completed_at'); }
    /** ID of this delivery attempt. anyOf[1] (Value): string. ID of this delivery attempt. Example: "edat_01KEZF7C00AX45366QP3FMY6VH". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When delivery_attempt_id is omitted; use hasDeliveryAttemptId() or valueOrDefault().
     */
    public function getDeliveryAttemptId(): mixed { return $this->get('delivery_attempt_id'); }
    public function hasDeliveryAttemptId(): bool { return $this->has('delivery_attempt_id'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When started_at is omitted; use hasStartedAt() or valueOrDefault().
     */
    public function getStartedAt(): mixed { return $this->get('started_at'); }
    public function hasStartedAt(): bool { return $this->has('started_at'); }
    /** Where this delivery attempt stands. Value enum: "pending", "sent", "failed", "unconfirmed". anyOf[1] (Value): string. Where this delivery attempt stands. Value enum: "pending", "sent", "failed", "unconfirmed". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
