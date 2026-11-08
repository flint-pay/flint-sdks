<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $price_list_id
 * @property-read string $price_list_price_id
 * @property-read string $product_id
 * @property-read list<QuantityPriceBreakInput|array<array-key, mixed>|\stdClass> $quantity_price_breaks
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $unit_price_money
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read string $variant_id
 * @property-read int $version
 * Presence-aware input; omitted fields throw when accessed. */
final class PriceListPriceInput extends Model {
    /** @param array{'created_at': string|\DateTimeInterface, 'price_list_id': string, 'price_list_price_id': string, 'product_id': string, 'quantity_price_breaks': list<QuantityPriceBreakInput|array<array-key, mixed>|\stdClass>, 'unit_price_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'updated_at': string|\DateTimeInterface, 'variant_id': string, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PriceListPriceInput')); }
    /** When this price was added, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Identifier of the price list that owns this price. Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
     * @return string
     * @throws SdkError When price_list_id is omitted; use hasPriceListId() or valueOrDefault().
     */
    public function getPriceListId(): string { return $this->get('price_list_id'); }
    public function hasPriceListId(): bool { return $this->has('price_list_id'); }
    /** Stable identifier of this price within its list. pattern: ^prlp_[0-9A-HJKMNP-TV-Z]{26}$. Example: "prlp_01KEZF7C007DQ721A29CDR73DN".
     * @return string
     * @throws SdkError When price_list_price_id is omitted; use hasPriceListPriceId() or valueOrDefault().
     */
    public function getPriceListPriceId(): string { return $this->get('price_list_price_id'); }
    public function hasPriceListPriceId(): bool { return $this->has('price_list_price_id'); }
    /** Identifier of the product that owns this variant. Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
     * @return string
     * @throws SdkError When product_id is omitted; use hasProductId() or valueOrDefault().
     */
    public function getProductId(): string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Up to 10 quantity breaks, ordered by increasing minimum_quantity and strictly decreasing unit price. [] means the base price applies at every quantity. maxItems: 10. [] (Value): {@see QuantityPriceBreakInput}. A net unit price that applies when one catalog line reaches minimum_quantity.
     * @return list<QuantityPriceBreakInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When quantity_price_breaks is omitted; use hasQuantityPriceBreaks() or valueOrDefault().
     */
    public function getQuantityPriceBreaks(): array { return $this->get('quantity_price_breaks'); }
    public function hasQuantityPriceBreaks(): bool { return $this->has('quantity_price_breaks'); }
    /** Positive base net unit price in the price list's currency, in the currency's smallest unit. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When unit_price_money is omitted; use hasUnitPriceMoney() or valueOrDefault().
     */
    public function getUnitPriceMoney(): mixed { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
    /** When this price last changed, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Identifier of the priced product variant. Bundles and gift cards are not supported. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     * @return string
     * @throws SdkError When variant_id is omitted; use hasVariantId() or valueOrDefault().
     */
    public function getVariantId(): string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
    /** Version of this variant price and its quantity schedule. No-op writes preserve it. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
