<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<QuantityPriceBreakRequestInput|array<array-key, mixed>|\stdClass> $quantity_price_breaks
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $unit_price_money
 * @property-read string $variant_id
 * Presence-aware input; omitted fields throw when accessed. */
final class PriceListPriceRequestInput extends Model {
    /** @param array{'quantity_price_breaks'?: list<QuantityPriceBreakRequestInput|array<array-key, mixed>|\stdClass>, 'unit_price_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'variant_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PriceListPriceRequestInput')); }
    /** Complete quantity schedule, up to 10 breaks. Omit or send [] for no quantity breaks. Each price must be lower than the preceding one. maxItems: 10. [] (Value): {@see QuantityPriceBreakRequestInput}. A net unit price that applies when one catalog line reaches minimum_quantity.
     * @return list<QuantityPriceBreakRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When quantity_price_breaks is omitted; use hasQuantityPriceBreaks() or valueOrDefault().
     */
    public function getQuantityPriceBreaks(): array { return $this->get('quantity_price_breaks'); }
    public function hasQuantityPriceBreaks(): bool { return $this->has('quantity_price_breaks'); }
    /** Positive base net unit price, in the price list's currency. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When unit_price_money is omitted; use hasUnitPriceMoney() or valueOrDefault().
     */
    public function getUnitPriceMoney(): mixed { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
    /** Product variant to price. Bundles and gift cards are refused. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     * @return string
     * @throws SdkError When variant_id is omitted; use hasVariantId() or valueOrDefault().
     */
    public function getVariantId(): string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
