<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?int $available_quantity
 * @property-read string $name
 * @property-read CreateReturnPreviewResponseDataResolutionEligibilityLineItemsItemExchangeVariantsItemUnitPriceMoney $unit_price_money
 * @property-read string $variant_id
 * Presence-aware response; omitted optional fields return null. */
final class CreateReturnPreviewResponseDataResolutionEligibilityLineItemsItemExchangeVariantsItem extends Model {
    /** @param array{'available_quantity'?: int, 'name': string, 'unit_price_money': mixed, 'variant_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateReturnPreviewResponseDataResolutionEligibilityLineItemsItemExchangeVariantsItem')); }
    /** Available whole units, capped at the eligible return quantity. Omitted when stock is not tracked. Format: int64.
     * @return ?int
     */
    public function getAvailableQuantity(): ?int { return $this->get('available_quantity'); }
    public function hasAvailableQuantity(): bool { return $this->has('available_quantity'); }
    /** Name of the alternative variant.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Current unit price from the catalog. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return CreateReturnPreviewResponseDataResolutionEligibilityLineItemsItemExchangeVariantsItemUnitPriceMoney
     */
    public function getUnitPriceMoney(): CreateReturnPreviewResponseDataResolutionEligibilityLineItemsItemExchangeVariantsItemUnitPriceMoney { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
    /** Catalog variant ID to send as requested_variant.
     * @return string
     */
    public function getVariantId(): string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
