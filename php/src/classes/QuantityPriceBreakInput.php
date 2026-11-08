<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $minimum_quantity
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $unit_price_money
 * Presence-aware input; omitted fields throw when accessed. */
final class QuantityPriceBreakInput extends Model {
    /** @param array{'minimum_quantity': int, 'unit_price_money': MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('QuantityPriceBreakInput')); }
    /** Minimum whole-number quantity on one line for this price to apply; fractional quantities are not supported. Must strictly increase between entries. Format: int64. minimum: 2.
     * @return int
     * @throws SdkError When minimum_quantity is omitted; use hasMinimumQuantity() or valueOrDefault().
     */
    public function getMinimumQuantity(): int { return $this->get('minimum_quantity'); }
    public function hasMinimumQuantity(): bool { return $this->has('minimum_quantity'); }
    /** Net unit price in the base unit price's currency. Must be greater than zero and below the preceding price, starting with the base unit price. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When unit_price_money is omitted; use hasUnitPriceMoney() or valueOrDefault().
     */
    public function getUnitPriceMoney(): mixed { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
}
