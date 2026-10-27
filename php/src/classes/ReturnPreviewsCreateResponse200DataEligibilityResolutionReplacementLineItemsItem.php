<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $bundle_id
 * @property-read ?string $description
 * @property-read ReturnPreviewsCreateResponse200DataEligibilityResolutionReplacementLineItemsItemDiscountMoney $discount_money
 * @property-read string $name
 * @property-read string $quantity
 * @property-read string $return_replacement_line_item_id
 * @property-read string $return_resolution_id
 * @property-read ?string $sku
 * @property-read ReturnPreviewsCreateResponse200DataEligibilityResolutionReplacementLineItemsItemSubtotalMoney $subtotal_money
 * @property-read ReturnPreviewsCreateResponse200DataEligibilityResolutionReplacementLineItemsItemTaxMoney $tax_money
 * @property-read ReturnPreviewsCreateResponse200DataEligibilityResolutionReplacementLineItemsItemTotalMoney $total_money
 * @property-read ReturnPreviewsCreateResponse200DataEligibilityResolutionReplacementLineItemsItemUnitPriceMoney $unit_price_money
 * @property-read ?string $variant_id
 * Presence-aware response; omitted optional fields return null. */
final class ReturnPreviewsCreateResponse200DataEligibilityResolutionReplacementLineItemsItem extends Model {
    /** @param array{'bundle_id'?: string, 'description'?: string, 'discount_money': mixed, 'name': string, 'quantity': string, 'return_replacement_line_item_id': string, 'return_resolution_id': string, 'sku'?: string, 'subtotal_money': mixed, 'tax_money': mixed, 'total_money': mixed, 'unit_price_money': mixed, 'variant_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnPreviewsCreateResponse200DataEligibilityResolutionReplacementLineItemsItem')); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getBundleId(): ?string { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getDescription(): ?string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Shape $ (Value): {@see ReturnPreviewsCreateResponse200DataEligibilityResolutionReplacementLineItemsItemDiscountMoney}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ReturnPreviewsCreateResponse200DataEligibilityResolutionReplacementLineItemsItemDiscountMoney
     */
    public function getDiscountMoney(): ReturnPreviewsCreateResponse200DataEligibilityResolutionReplacementLineItemsItemDiscountMoney { return $this->get('discount_money'); }
    public function hasDiscountMoney(): bool { return $this->has('discount_money'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getQuantity(): string { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getReturnReplacementLineItemId(): string { return $this->get('return_replacement_line_item_id'); }
    public function hasReturnReplacementLineItemId(): bool { return $this->has('return_replacement_line_item_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getReturnResolutionId(): string { return $this->get('return_resolution_id'); }
    public function hasReturnResolutionId(): bool { return $this->has('return_resolution_id'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getSku(): ?string { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /** Shape $ (Value): {@see ReturnPreviewsCreateResponse200DataEligibilityResolutionReplacementLineItemsItemSubtotalMoney}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ReturnPreviewsCreateResponse200DataEligibilityResolutionReplacementLineItemsItemSubtotalMoney
     */
    public function getSubtotalMoney(): ReturnPreviewsCreateResponse200DataEligibilityResolutionReplacementLineItemsItemSubtotalMoney { return $this->get('subtotal_money'); }
    public function hasSubtotalMoney(): bool { return $this->has('subtotal_money'); }
    /** Shape $ (Value): {@see ReturnPreviewsCreateResponse200DataEligibilityResolutionReplacementLineItemsItemTaxMoney}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ReturnPreviewsCreateResponse200DataEligibilityResolutionReplacementLineItemsItemTaxMoney
     */
    public function getTaxMoney(): ReturnPreviewsCreateResponse200DataEligibilityResolutionReplacementLineItemsItemTaxMoney { return $this->get('tax_money'); }
    public function hasTaxMoney(): bool { return $this->has('tax_money'); }
    /** Shape $ (Value): {@see ReturnPreviewsCreateResponse200DataEligibilityResolutionReplacementLineItemsItemTotalMoney}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ReturnPreviewsCreateResponse200DataEligibilityResolutionReplacementLineItemsItemTotalMoney
     */
    public function getTotalMoney(): ReturnPreviewsCreateResponse200DataEligibilityResolutionReplacementLineItemsItemTotalMoney { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
    /** Shape $ (Value): {@see ReturnPreviewsCreateResponse200DataEligibilityResolutionReplacementLineItemsItemUnitPriceMoney}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ReturnPreviewsCreateResponse200DataEligibilityResolutionReplacementLineItemsItemUnitPriceMoney
     */
    public function getUnitPriceMoney(): ReturnPreviewsCreateResponse200DataEligibilityResolutionReplacementLineItemsItemUnitPriceMoney { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getVariantId(): ?string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
