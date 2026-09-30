<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $end_minute
 * @property-read int $start_minute
 * @property-read list<string> $weekdays
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryWindowTimeConditionInput extends Model {
    /** @param array{'end_minute'?: int, 'start_minute'?: int, 'weekdays'?: list<string>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryWindowTimeConditionInput')); }
    /** @return int
     * @throws SdkError When end_minute is omitted; use hasEndMinute() or valueOrDefault().
     */
    public function getEndMinute(): int { return $this->get('end_minute'); }
    public function hasEndMinute(): bool { return $this->has('end_minute'); }
    /** @return int
     * @throws SdkError When start_minute is omitted; use hasStartMinute() or valueOrDefault().
     */
    public function getStartMinute(): int { return $this->get('start_minute'); }
    public function hasStartMinute(): bool { return $this->has('start_minute'); }
    /** @return list<string>
     * @throws SdkError When weekdays is omitted; use hasWeekdays() or valueOrDefault().
     */
    public function getWeekdays(): array { return $this->get('weekdays'); }
    public function hasWeekdays(): bool { return $this->has('weekdays'); }
}
