<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $attempt_number
 * @property-read string|null $completed_at
 * @property-read string|null $delivery_attempt_id
 * @property-read string|null $started_at
 * @property-read string|null $status
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardNotificationDeliveryAttemptPreviousAttributes extends Model {
    /** @param array{'attempt_number'?: mixed, 'completed_at'?: mixed, 'delivery_attempt_id'?: mixed, 'started_at'?: mixed, 'status'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardNotificationDeliveryAttemptPreviousAttributes')); }
    /** Which attempt this is for the notification, starting at 1. anyOf[1] (Value): integer. Which attempt this is for the notification, starting at 1. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getAttemptNumber(): int|null { return $this->get('attempt_number'); }
    public function hasAttemptNumber(): bool { return $this->has('attempt_number'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCompletedAt(): string|null { return $this->get('completed_at'); }
    public function hasCompletedAt(): bool { return $this->has('completed_at'); }
    /** ID of this delivery attempt. anyOf[1] (Value): string. ID of this delivery attempt. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDeliveryAttemptId(): string|null { return $this->get('delivery_attempt_id'); }
    public function hasDeliveryAttemptId(): bool { return $this->has('delivery_attempt_id'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStartedAt(): string|null { return $this->get('started_at'); }
    public function hasStartedAt(): bool { return $this->has('started_at'); }
    /** Where this delivery attempt stands. Value enum: "pending", "sent", "failed", "unconfirmed". anyOf[1] (Value): string. Where this delivery attempt stands. Value enum: "pending", "sent", "failed", "unconfirmed". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
