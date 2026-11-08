<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<PriceListPriceAddition> $additions
 * @property-read PriceList $price_list
 * Presence-aware response; omitted optional fields return null. */
final class CreatePriceListPricesResult extends Model {
    /** @param array{'additions': list<mixed>, 'price_list': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreatePriceListPricesResult')); }
    /** One result for each requested variant price, in request order. [] (Value): {@see PriceListPriceAddition}. Outcome for one requested variant price.
     * @return list<PriceListPriceAddition>
     */
    public function getAdditions(): array { return $this->get('additions'); }
    public function hasAdditions(): bool { return $this->has('additions'); }
    /** The price list after the batch, including its new count and aggregate version. A merchant-only set of variant prices for individual customers or customer segments.
     * @return PriceList
     */
    public function getPriceList(): PriceList { return $this->get('price_list'); }
    public function hasPriceList(): bool { return $this->has('price_list'); }
}
