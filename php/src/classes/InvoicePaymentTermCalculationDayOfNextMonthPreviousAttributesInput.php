<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $day
 * @property-read int|null $days
 * @property-read string|null $type
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoicePaymentTermCalculationDayOfNextMonthPreviousAttributesInput extends Model {
    /** @param array{'day'?: int|null, 'days'?: int|null, 'type'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoicePaymentTermCalculationDayOfNextMonthPreviousAttributesInput')); }
    /** Day of the month. Later days clamp to the last day of the month. anyOf[1] (Value): integer. Day of the month. Later days clamp to the last day of the month. Format: int32. minimum: 1. maximum: 31. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When day is omitted; use hasDay() or valueOrDefault().
     */
    public function getDay(): mixed { return $this->get('day'); }
    public function hasDay(): bool { return $this->has('day'); }
    /** Calendar days after issue for net_days, or after the issue month's last day for days_after_month_end. Required only for those types. anyOf[1] (Value): integer. Calendar days after issue for net_days, or after the issue month's last day for days_after_month_end. Required only for those types. Format: int32. minimum: 0. maximum: 365. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When days is omitted; use hasDays() or valueOrDefault().
     */
    public function getDays(): mixed { return $this->get('days'); }
    public function hasDays(): bool { return $this->has('days'); }
    /** How issue calculates the invoice's due date in the invoice timezone. Value enum: "day_of_next_month". anyOf[1] (Value): string. How issue calculates the invoice's due date in the invoice timezone. Value enum: "day_of_next_month". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): mixed { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
