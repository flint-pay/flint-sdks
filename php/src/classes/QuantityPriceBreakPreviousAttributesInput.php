<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $minimum_quantity
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $unit_price_money
 * Presence-aware input; omitted fields throw when accessed. */
final class QuantityPriceBreakPreviousAttributesInput extends Model {
    /** @param array{'minimum_quantity'?: int|null, 'unit_price_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('QuantityPriceBreakPreviousAttributesInput')); }
    /** Minimum whole-number quantity on one line for this price to apply; fractional quantities are not supported. Must strictly increase between entries. anyOf[1] (Value): integer. Minimum whole-number quantity on one line for this price to apply; fractional quantities are not supported. Must strictly increase between entries. Format: int64. minimum: 2. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When minimum_quantity is omitted; use hasMinimumQuantity() or valueOrDefault().
     */
    public function getMinimumQuantity(): mixed { return $this->get('minimum_quantity'); }
    public function hasMinimumQuantity(): bool { return $this->has('minimum_quantity'); }
    /** Net unit price in the base unit price's currency. Must be greater than zero and below the preceding price, starting with the base unit price. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When unit_price_money is omitted; use hasUnitPriceMoney() or valueOrDefault().
     */
    public function getUnitPriceMoney(): mixed { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
}
