<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $created_at
 * @property-read string $price_list_id
 * @property-read string $price_list_price_id
 * @property-read string $product_id
 * @property-read list<QuantityPriceBreak> $quantity_price_breaks
 * @property-read MoneyValue $unit_price_money
 * @property-read string $updated_at
 * @property-read string $variant_id
 * @property-read int $version
 * Presence-aware response; omitted optional fields return null. */
final class PriceListPrice extends Model {
    /** @param array{'created_at': string, 'price_list_id': string, 'price_list_price_id': string, 'product_id': string, 'quantity_price_breaks': list<mixed>, 'unit_price_money': mixed, 'updated_at': string, 'variant_id': string, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PriceListPrice')); }
    /** When this price was added, as an RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Identifier of the price list that owns this price.
     * @return string
     */
    public function getPriceListId(): string { return $this->get('price_list_id'); }
    public function hasPriceListId(): bool { return $this->has('price_list_id'); }
    /** Stable identifier of this price within its list. pattern: ^prlp_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     */
    public function getPriceListPriceId(): string { return $this->get('price_list_price_id'); }
    public function hasPriceListPriceId(): bool { return $this->has('price_list_price_id'); }
    /** Identifier of the product that owns this variant.
     * @return string
     */
    public function getProductId(): string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Up to 10 quantity breaks, ordered by increasing minimum_quantity and strictly decreasing unit price. [] means the base price applies at every quantity. maxItems: 10. [] (Value): {@see QuantityPriceBreak}. A net unit price that applies when one catalog line reaches minimum_quantity.
     * @return list<QuantityPriceBreak>
     */
    public function getQuantityPriceBreaks(): array { return $this->get('quantity_price_breaks'); }
    public function hasQuantityPriceBreaks(): bool { return $this->has('quantity_price_breaks'); }
    /** Positive base net unit price in the price list's currency, in the currency's smallest unit. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getUnitPriceMoney(): MoneyValue { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
    /** When this price last changed, as an RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Identifier of the priced product variant. Bundles and gift cards are not supported.
     * @return string
     */
    public function getVariantId(): string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
    /** Version of this variant price and its quantity schedule. No-op writes preserve it. Format: uint64. minimum: 1.
     * @return int
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
