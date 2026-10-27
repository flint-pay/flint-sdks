<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InvoiceScheduleEntryAmountSpecificationFixedAmountMoney $amount_money
 * @property-read ?float $percent
 * @property-read string $type
 * Presence-aware response; omitted optional fields return null. */
final class InvoiceScheduleEntryAmountSpecificationFixed extends Model {
    /** @param array{'amount_money': mixed, 'percent'?: float, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceScheduleEntryAmountSpecificationFixed')); }
    /** Shape $ (Value): {@see InvoiceScheduleEntryAmountSpecificationFixedAmountMoney}. The amount to collect, in the invoice currency. Required with fixed and not accepted with any other type. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return InvoiceScheduleEntryAmountSpecificationFixedAmountMoney
     */
    public function getAmountMoney(): InvoiceScheduleEntryAmountSpecificationFixedAmountMoney { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Shape $ (Value): number. Percentage of snapshot.pricing_amounts.total_money to collect, greater than 0 and at most 100, with up to four decimal places. Required with percentage and not accepted with any other type. multipleOf: 0.0001.
     * @return ?float
     */
    public function getPercent(): ?float { return $this->get('percent'); }
    public function hasPercent(): bool { return $this->has('percent'); }
    /** Shape $ (Value): string. How the entry's amount is set. Value enum: "fixed".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
