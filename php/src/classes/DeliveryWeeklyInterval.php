<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $end_minute
 * @property-read int $end_weekday
 * @property-read int $start_minute
 * @property-read int $start_weekday
 * Presence-aware response; omitted fields throw when accessed. */
final class DeliveryWeeklyInterval extends Model {
    /** @param array{'end_minute': int, 'end_weekday': int, 'start_minute': int, 'start_weekday': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryWeeklyInterval')); }
    /** @return int
     * @throws SdkError When end_minute is omitted; use hasEndMinute() or valueOrDefault().
     */
    public function getEndMinute(): int { return $this->get('end_minute'); }
    public function hasEndMinute(): bool { return $this->has('end_minute'); }
    /** @return int
     * @throws SdkError When end_weekday is omitted; use hasEndWeekday() or valueOrDefault().
     */
    public function getEndWeekday(): int { return $this->get('end_weekday'); }
    public function hasEndWeekday(): bool { return $this->has('end_weekday'); }
    /** @return int
     * @throws SdkError When start_minute is omitted; use hasStartMinute() or valueOrDefault().
     */
    public function getStartMinute(): int { return $this->get('start_minute'); }
    public function hasStartMinute(): bool { return $this->has('start_minute'); }
    /** @return int
     * @throws SdkError When start_weekday is omitted; use hasStartWeekday() or valueOrDefault().
     */
    public function getStartWeekday(): int { return $this->get('start_weekday'); }
    public function hasStartWeekday(): bool { return $this->has('start_weekday'); }
}
