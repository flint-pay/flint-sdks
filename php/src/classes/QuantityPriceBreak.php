<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $minimum_quantity
 * @property-read MoneyValue $unit_price_money
 * Presence-aware response; omitted optional fields return null. */
final class QuantityPriceBreak extends Model {
    /** @param array{'minimum_quantity': int, 'unit_price_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('QuantityPriceBreak')); }
    /** Minimum whole-number quantity on one line for this price to apply; fractional quantities are not supported. Must strictly increase between entries. Format: int64. minimum: 2.
     * @return int
     */
    public function getMinimumQuantity(): int { return $this->get('minimum_quantity'); }
    public function hasMinimumQuantity(): bool { return $this->has('minimum_quantity'); }
    /** Net unit price in the base unit price's currency. Must be greater than zero and below the preceding price, starting with the base unit price. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getUnitPriceMoney(): MoneyValue { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
}
