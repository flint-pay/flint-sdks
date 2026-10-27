<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $ends_at
 * @property-read ?string $starts_at
 * @property-read ?string $timezone
 * Presence-aware response; omitted optional fields return null. */
final class PromotionSchedule extends Model {
    /** @param array{'ends_at'?: string, 'starts_at'?: string, 'timezone'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionSchedule')); }
    /** Shape $ (Value): string. Time after which the promotion can no longer apply, as an absolute RFC3339 timestamp. Omitted when it has no end time. Format: date-time. minLength: 1.
     * @return ?string
     */
    public function getEndsAt(): ?string { return $this->get('ends_at'); }
    public function hasEndsAt(): bool { return $this->has('ends_at'); }
    /** Shape $ (Value): string. Earliest time the promotion can apply, as an absolute RFC3339 timestamp. Omitted when it has no start time. Format: date-time. minLength: 1.
     * @return ?string
     */
    public function getStartsAt(): ?string { return $this->get('starts_at'); }
    public function hasStartsAt(): bool { return $this->has('starts_at'); }
    /** Shape $ (Value): string. IANA zone the schedule was entered in, used for display. starts_at and ends_at are absolute timestamps, so this does not change when the promotion starts or ends. minLength: 1. maxLength: 255.
     * @return ?string
     */
    public function getTimezone(): ?string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
}
