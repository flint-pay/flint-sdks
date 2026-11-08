<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $outcome
 * @property-read PriceListPriceInput|array<array-key, mixed>|\stdClass $price_list_price
 * Presence-aware input; omitted fields throw when accessed. */
final class PriceListPriceAdditionInput extends Model {
    /** @param array{'outcome': string, 'price_list_price': PriceListPriceInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PriceListPriceAdditionInput')); }
    /** Whether the price was created, returned unchanged, or updated. Value enum: "created", "existing", "updated".
     * @return string
     * @throws SdkError When outcome is omitted; use hasOutcome() or valueOrDefault().
     */
    public function getOutcome(): string { return $this->get('outcome'); }
    public function hasOutcome(): bool { return $this->has('outcome'); }
    /** Price stored for this variant after the request. One variant's base net unit price and quantity schedule within a price list.
     * @return PriceListPriceInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When price_list_price is omitted; use hasPriceListPrice() or valueOrDefault().
     */
    public function getPriceListPrice(): mixed { return $this->get('price_list_price'); }
    public function hasPriceListPrice(): bool { return $this->has('price_list_price'); }
}
