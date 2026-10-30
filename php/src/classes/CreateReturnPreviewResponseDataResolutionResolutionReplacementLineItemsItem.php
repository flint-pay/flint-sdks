<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $bundle_id
 * @property-read ?string $description
 * @property-read CreateReturnPreviewResponseDataResolutionResolutionReplacementLineItemsItemDiscountMoney $discount_money
 * @property-read string $name
 * @property-read int $quantity
 * @property-read string $return_replacement_line_item_id
 * @property-read string $return_resolution_id
 * @property-read ?string $sku
 * @property-read CreateReturnPreviewResponseDataResolutionResolutionReplacementLineItemsItemSubtotalMoney $subtotal_money
 * @property-read CreateReturnPreviewResponseDataResolutionResolutionReplacementLineItemsItemTaxMoney $tax_money
 * @property-read CreateReturnPreviewResponseDataResolutionResolutionReplacementLineItemsItemTotalMoney $total_money
 * @property-read CreateReturnPreviewResponseDataResolutionResolutionReplacementLineItemsItemUnitPriceMoney $unit_price_money
 * @property-read ?string $variant_id
 * Presence-aware response; omitted optional fields return null. */
final class CreateReturnPreviewResponseDataResolutionResolutionReplacementLineItemsItem extends Model {
    /** @param array{'bundle_id'?: string, 'description'?: string, 'discount_money': mixed, 'name': string, 'quantity': int, 'return_replacement_line_item_id': string, 'return_resolution_id': string, 'sku'?: string, 'subtotal_money': mixed, 'tax_money': mixed, 'total_money': mixed, 'unit_price_money': mixed, 'variant_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateReturnPreviewResponseDataResolutionResolutionReplacementLineItemsItem')); }
    /** bundle_id
     * @return ?string
     */
    public function getBundleId(): ?string { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** description
     * @return ?string
     */
    public function getDescription(): ?string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return CreateReturnPreviewResponseDataResolutionResolutionReplacementLineItemsItemDiscountMoney
     */
    public function getDiscountMoney(): CreateReturnPreviewResponseDataResolutionResolutionReplacementLineItemsItemDiscountMoney { return $this->get('discount_money'); }
    public function hasDiscountMoney(): bool { return $this->has('discount_money'); }
    /** name
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** return_replacement_line_item_id
     * @return string
     */
    public function getReturnReplacementLineItemId(): string { return $this->get('return_replacement_line_item_id'); }
    public function hasReturnReplacementLineItemId(): bool { return $this->has('return_replacement_line_item_id'); }
    /** return_resolution_id
     * @return string
     */
    public function getReturnResolutionId(): string { return $this->get('return_resolution_id'); }
    public function hasReturnResolutionId(): bool { return $this->has('return_resolution_id'); }
    /** sku
     * @return ?string
     */
    public function getSku(): ?string { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return CreateReturnPreviewResponseDataResolutionResolutionReplacementLineItemsItemSubtotalMoney
     */
    public function getSubtotalMoney(): CreateReturnPreviewResponseDataResolutionResolutionReplacementLineItemsItemSubtotalMoney { return $this->get('subtotal_money'); }
    public function hasSubtotalMoney(): bool { return $this->has('subtotal_money'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return CreateReturnPreviewResponseDataResolutionResolutionReplacementLineItemsItemTaxMoney
     */
    public function getTaxMoney(): CreateReturnPreviewResponseDataResolutionResolutionReplacementLineItemsItemTaxMoney { return $this->get('tax_money'); }
    public function hasTaxMoney(): bool { return $this->has('tax_money'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return CreateReturnPreviewResponseDataResolutionResolutionReplacementLineItemsItemTotalMoney
     */
    public function getTotalMoney(): CreateReturnPreviewResponseDataResolutionResolutionReplacementLineItemsItemTotalMoney { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return CreateReturnPreviewResponseDataResolutionResolutionReplacementLineItemsItemUnitPriceMoney
     */
    public function getUnitPriceMoney(): CreateReturnPreviewResponseDataResolutionResolutionReplacementLineItemsItemUnitPriceMoney { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
    /** variant_id
     * @return ?string
     */
    public function getVariantId(): ?string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
