<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $day
 * @property-read int $days
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoicePaymentTermCalculationDayOfMonthInput extends Model {
    /** @param array{'day': int, 'days'?: int, 'type': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoicePaymentTermCalculationDayOfMonthInput')); }
    /** Shape $ (Value): integer. Day of the month. Later days clamp to the last day of the month. Format: int32. minimum: 1. maximum: 31.
     * @return int
     * @throws SdkError When day is omitted; use hasDay() or valueOrDefault().
     */
    public function getDay(): int { return $this->get('day'); }
    public function hasDay(): bool { return $this->has('day'); }
    /** Shape $ (Value): integer. Format: int32. minimum: 0. maximum: 365.
     * @return int
     * @throws SdkError When days is omitted; use hasDays() or valueOrDefault().
     */
    public function getDays(): int { return $this->get('days'); }
    public function hasDays(): bool { return $this->has('days'); }
    /** Shape $ (Value): string.  Value enum: "day_of_month".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
