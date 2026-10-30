<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $ends_at
 * @property-read string|\DateTimeInterface $starts_at
 * @property-read string $timezone
 * Presence-aware input; omitted fields throw when accessed. */
final class PromotionScheduleInput extends Model {
    /** @param array{'ends_at'?: string|\DateTimeInterface, 'starts_at'?: string|\DateTimeInterface, 'timezone'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionScheduleInput')); }
    /** Time after which the promotion can no longer apply, as an absolute RFC3339 timestamp. Omitted when it has no end time. Format: date-time. minLength: 1.
     * @return string|\DateTimeInterface
     * @throws SdkError When ends_at is omitted; use hasEndsAt() or valueOrDefault().
     */
    public function getEndsAt(): string|\DateTimeInterface { return $this->get('ends_at'); }
    public function hasEndsAt(): bool { return $this->has('ends_at'); }
    /** Earliest time the promotion can apply, as an absolute RFC3339 timestamp. Omitted when it has no start time. Format: date-time. minLength: 1.
     * @return string|\DateTimeInterface
     * @throws SdkError When starts_at is omitted; use hasStartsAt() or valueOrDefault().
     */
    public function getStartsAt(): string|\DateTimeInterface { return $this->get('starts_at'); }
    public function hasStartsAt(): bool { return $this->has('starts_at'); }
    /** IANA zone the schedule was entered in, used for display. starts_at and ends_at are absolute timestamps, so this does not change when the promotion starts or ends. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
}
