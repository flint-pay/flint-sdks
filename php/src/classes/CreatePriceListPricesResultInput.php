<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<PriceListPriceAdditionInput|array<array-key, mixed>|\stdClass> $additions
 * @property-read PriceListInput|array<array-key, mixed>|\stdClass $price_list
 * Presence-aware input; omitted fields throw when accessed. */
final class CreatePriceListPricesResultInput extends Model {
    /** @param array{'additions': list<PriceListPriceAdditionInput|array<array-key, mixed>|\stdClass>, 'price_list': PriceListInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreatePriceListPricesResultInput')); }
    /** One result for each requested variant price, in request order. [] (Value): {@see PriceListPriceAdditionInput}. Outcome for one requested variant price.
     * @return list<PriceListPriceAdditionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When additions is omitted; use hasAdditions() or valueOrDefault().
     */
    public function getAdditions(): array { return $this->get('additions'); }
    public function hasAdditions(): bool { return $this->has('additions'); }
    /** The price list after the batch, including its new count and aggregate version. A merchant-only set of variant prices for individual customers or customer segments.
     * @return PriceListInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When price_list is omitted; use hasPriceList() or valueOrDefault().
     */
    public function getPriceList(): mixed { return $this->get('price_list'); }
    public function hasPriceList(): bool { return $this->has('price_list'); }
}
