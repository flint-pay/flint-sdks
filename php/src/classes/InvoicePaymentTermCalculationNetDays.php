<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?int $day
 * @property-read int $days
 * @property-read string $type
 * Presence-aware response; omitted optional fields return null. */
final class InvoicePaymentTermCalculationNetDays extends Model {
    /** @param array{'day'?: int, 'days': int, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoicePaymentTermCalculationNetDays')); }
    /** Shape $ (Value): integer. Day of the month. Later days clamp to the last day of the month. Format: int32. minimum: 1. maximum: 31.
     * @return ?int
     */
    public function getDay(): ?int { return $this->get('day'); }
    public function hasDay(): bool { return $this->has('day'); }
    /** Shape $ (Value): integer. Format: int32. minimum: 0. maximum: 365.
     * @return int
     */
    public function getDays(): int { return $this->get('days'); }
    public function hasDays(): bool { return $this->has('days'); }
    /** Shape $ (Value): string.  Value enum: "net_days".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
