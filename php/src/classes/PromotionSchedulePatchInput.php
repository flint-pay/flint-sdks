<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface|null $ends_at
 * @property-read string|\DateTimeInterface|null $starts_at
 * @property-read string|null $timezone
 * Presence-aware input; omitted fields throw when accessed. */
final class PromotionSchedulePatchInput extends Model {
    /** @param array{'ends_at'?: string|\DateTimeInterface|null, 'starts_at'?: string|\DateTimeInterface|null, 'timezone'?: string|null}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionSchedulePatchInput')); }
    /** Time after which the promotion can no longer apply, as an absolute RFC3339 timestamp. Omission keeps the stored value; null clears it. Format: date-time. minLength: 1.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When ends_at is omitted; use hasEndsAt() or valueOrDefault().
     */
    public function getEndsAt(): string|\DateTimeInterface|null { return $this->get('ends_at'); }
    public function hasEndsAt(): bool { return $this->has('ends_at'); }
    /** Earliest time the promotion can apply, as an absolute RFC3339 timestamp. Omission keeps the stored value; null clears it. Format: date-time. minLength: 1.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When starts_at is omitted; use hasStartsAt() or valueOrDefault().
     */
    public function getStartsAt(): string|\DateTimeInterface|null { return $this->get('starts_at'); }
    public function hasStartsAt(): bool { return $this->has('starts_at'); }
    /** IANA zone the schedule was entered in, used for display. starts_at and ends_at are absolute timestamps, so this does not change when the promotion starts or ends. Send null to clear it. minLength: 1. maxLength: 255.
     * @return string|null
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): string|null { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
}
