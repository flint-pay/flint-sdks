<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributes|null $max_unit_price_money
 * @property-read MoneyValuePreviousAttributes|null $min_unit_price_money
 * Presence-aware response; omitted optional fields return null. */
final class ProductPriceRangePreviousAttributes extends Model {
    /** @param array{'max_unit_price_money'?: mixed, 'min_unit_price_money'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ProductPriceRangePreviousAttributes')); }
    /** Highest unit price among the product's active variants. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getMaxUnitPriceMoney(): MoneyValuePreviousAttributes|null { return $this->get('max_unit_price_money'); }
    public function hasMaxUnitPriceMoney(): bool { return $this->has('max_unit_price_money'); }
    /** Lowest unit price among the product's active variants. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getMinUnitPriceMoney(): MoneyValuePreviousAttributes|null { return $this->get('min_unit_price_money'); }
    public function hasMinUnitPriceMoney(): bool { return $this->has('min_unit_price_money'); }
}
