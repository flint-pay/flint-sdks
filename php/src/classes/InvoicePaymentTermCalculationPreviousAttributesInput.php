<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $day
 * @property-read int|null $days
 * @property-read string|null $type
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoicePaymentTermCalculationPreviousAttributesInput extends Model {
    /** @param InvoicePaymentTermCalculationOnReceiptPreviousAttributesInput|array<array-key, mixed>|\stdClass|InvoicePaymentTermCalculationNetDaysPreviousAttributesInput|array<array-key, mixed>|\stdClass|InvoicePaymentTermCalculationDaysAfterMonthEndPreviousAttributesInput|array<array-key, mixed>|\stdClass|InvoicePaymentTermCalculationDayOfMonthPreviousAttributesInput|array<array-key, mixed>|\stdClass|InvoicePaymentTermCalculationDayOfNextMonthPreviousAttributesInput|array<array-key, mixed>|\stdClass $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoicePaymentTermCalculationPreviousAttributesInput')); }
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
    /** How issue calculates the invoice's due date in the invoice timezone. Value enum: "on_receipt", "net_days", "day_of_month", "day_of_next_month", "days_after_month_end". anyOf[1] (Value): string. How issue calculates the invoice's due date in the invoice timezone. Value enum: "on_receipt", "net_days", "day_of_month", "day_of_next_month", "days_after_month_end". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): mixed { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
