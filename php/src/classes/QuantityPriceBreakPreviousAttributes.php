<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $minimum_quantity
 * @property-read MoneyValuePreviousAttributes|null $unit_price_money
 * Presence-aware response; omitted optional fields return null. */
final class QuantityPriceBreakPreviousAttributes extends Model {
    /** @param array{'minimum_quantity'?: mixed, 'unit_price_money'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('QuantityPriceBreakPreviousAttributes')); }
    /** Minimum whole-number quantity on one line for this price to apply; fractional quantities are not supported. Must strictly increase between entries. anyOf[1] (Value): integer. Minimum whole-number quantity on one line for this price to apply; fractional quantities are not supported. Must strictly increase between entries. Format: int64. minimum: 2. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getMinimumQuantity(): int|null { return $this->get('minimum_quantity'); }
    public function hasMinimumQuantity(): bool { return $this->has('minimum_quantity'); }
    /** Net unit price in the base unit price's currency. Must be greater than zero and below the preceding price, starting with the base unit price. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getUnitPriceMoney(): MoneyValuePreviousAttributes|null { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
}
