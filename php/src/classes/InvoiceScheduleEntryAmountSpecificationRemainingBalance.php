<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?InvoiceScheduleEntryAmountSpecificationRemainingBalanceAmountMoney $amount_money
 * @property-read ?float $percent
 * @property-read string $type
 * Presence-aware response; omitted optional fields return null. */
final class InvoiceScheduleEntryAmountSpecificationRemainingBalance extends Model {
    /** @param array{'amount_money'?: mixed, 'percent'?: float, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceScheduleEntryAmountSpecificationRemainingBalance')); }
    /** Shape $ (Value): {@see InvoiceScheduleEntryAmountSpecificationRemainingBalanceAmountMoney}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?InvoiceScheduleEntryAmountSpecificationRemainingBalanceAmountMoney
     */
    public function getAmountMoney(): ?InvoiceScheduleEntryAmountSpecificationRemainingBalanceAmountMoney { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Shape $ (Value): number. multipleOf: 0.0001.
     * @return ?float
     */
    public function getPercent(): ?float { return $this->get('percent'); }
    public function hasPercent(): bool { return $this->has('percent'); }
    /** Shape $ (Value): string.  Value enum: "remaining_balance".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
