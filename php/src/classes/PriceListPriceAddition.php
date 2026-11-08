<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $outcome
 * @property-read PriceListPrice $price_list_price
 * Presence-aware response; omitted optional fields return null. */
final class PriceListPriceAddition extends Model {
    /** @param array{'outcome': string, 'price_list_price': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PriceListPriceAddition')); }
    /** Whether the price was created, returned unchanged, or updated. Value enum: "created", "existing", "updated".
     * @return string
     */
    public function getOutcome(): string { return $this->get('outcome'); }
    public function hasOutcome(): bool { return $this->has('outcome'); }
    /** Price stored for this variant after the request. One variant's base net unit price and quantity schedule within a price list.
     * @return PriceListPrice
     */
    public function getPriceListPrice(): PriceListPrice { return $this->get('price_list_price'); }
    public function hasPriceListPrice(): bool { return $this->has('price_list_price'); }
}
