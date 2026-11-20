<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $available_quantity
 * @property-read string $name
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $unit_price_money
 * @property-read string $variant_id
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnExchangeVariantInput extends Model {
    /** @param array{'available_quantity'?: int, 'name': string, 'unit_price_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'variant_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnExchangeVariantInput')); }
    /** Available whole units, capped at the eligible return quantity. Omitted when stock is not tracked. Format: int64.
     * @return int
     * @throws SdkError When available_quantity is omitted; use hasAvailableQuantity() or valueOrDefault().
     */
    public function getAvailableQuantity(): int { return $this->get('available_quantity'); }
    public function hasAvailableQuantity(): bool { return $this->has('available_quantity'); }
    /** Name of the alternative variant.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Current unit price from the catalog. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When unit_price_money is omitted; use hasUnitPriceMoney() or valueOrDefault().
     */
    public function getUnitPriceMoney(): mixed { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
    /** Catalog variant ID to send as requested_variant. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     * @return string
     * @throws SdkError When variant_id is omitted; use hasVariantId() or valueOrDefault().
     */
    public function getVariantId(): string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
