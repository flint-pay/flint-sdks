<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $max_unit_price_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $min_unit_price_money
 * Presence-aware input; omitted fields throw when accessed. */
final class ProductPriceRangeInput extends Model {
    /** @param array{'max_unit_price_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'min_unit_price_money': MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ProductPriceRangeInput')); }
    /** Highest unit price among the product's active variants. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When max_unit_price_money is omitted; use hasMaxUnitPriceMoney() or valueOrDefault().
     */
    public function getMaxUnitPriceMoney(): mixed { return $this->get('max_unit_price_money'); }
    public function hasMaxUnitPriceMoney(): bool { return $this->has('max_unit_price_money'); }
    /** Lowest unit price among the product's active variants. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When min_unit_price_money is omitted; use hasMinUnitPriceMoney() or valueOrDefault().
     */
    public function getMinUnitPriceMoney(): mixed { return $this->get('min_unit_price_money'); }
    public function hasMinUnitPriceMoney(): bool { return $this->has('min_unit_price_money'); }
}
