<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $ends_at
 * @property-read string|null $starts_at
 * @property-read string|null $timezone
 * Presence-aware response; omitted optional fields return null. */
final class PromotionSchedulePreviousAttributes extends Model {
    /** @param array{'ends_at'?: mixed, 'starts_at'?: mixed, 'timezone'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionSchedulePreviousAttributes')); }
    /** Time after which the promotion can no longer apply, as an absolute RFC3339 timestamp. Omitted when it has no end time. anyOf[1] (Value): string. Time after which the promotion can no longer apply, as an absolute RFC3339 timestamp. Omitted when it has no end time. Format: date-time. minLength: 1. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getEndsAt(): string|null { return $this->get('ends_at'); }
    public function hasEndsAt(): bool { return $this->has('ends_at'); }
    /** Earliest time the promotion can apply, as an absolute RFC3339 timestamp. Omitted when it has no start time. anyOf[1] (Value): string. Earliest time the promotion can apply, as an absolute RFC3339 timestamp. Omitted when it has no start time. Format: date-time. minLength: 1. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStartsAt(): string|null { return $this->get('starts_at'); }
    public function hasStartsAt(): bool { return $this->has('starts_at'); }
    /** IANA zone the schedule was entered in, used for display. starts_at and ends_at are absolute timestamps, so this does not change when the promotion starts or ends. anyOf[1] (Value): string. IANA zone the schedule was entered in, used for display. starts_at and ends_at are absolute timestamps, so this does not change when the promotion starts or ends. minLength: 1. maxLength: 255. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getTimezone(): string|null { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
}
