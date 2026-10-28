<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MeCreateReturnPreviewResponse200DataResolutionEligibilityLineItemsItemModifiersItemMetadata $metadata
 * @property-read string $modifier_group_name
 * @property-read string $name
 * @property-read string $pricing_scope
 * @property-read string $quantity
 * @property-read bool $show_on_fulfillment
 * @property-read bool $show_on_receipt
 * @property-read ?string $text_value
 * @property-read MeCreateReturnPreviewResponse200DataResolutionEligibilityLineItemsItemModifiersItemTotalMoney $total_money
 * @property-read MeCreateReturnPreviewResponse200DataResolutionEligibilityLineItemsItemModifiersItemUnitPriceDeltaMoney $unit_price_delta_money
 * Presence-aware response; omitted optional fields return null. */
final class MeCreateReturnPreviewResponse200DataResolutionEligibilityLineItemsItemModifiersItem extends Model {
    /** @param array{'metadata': object{}, 'modifier_group_name': string, 'name': string, 'pricing_scope': string, 'quantity': string, 'show_on_fulfillment': bool, 'show_on_receipt': bool, 'text_value'?: string, 'total_money': mixed, 'unit_price_delta_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeCreateReturnPreviewResponse200DataResolutionEligibilityLineItemsItemModifiersItem')); }
    /** Shape $ (Value): {@see MeCreateReturnPreviewResponse200DataResolutionEligibilityLineItemsItemModifiersItemMetadata}. maxProperties: 0.
     * @return MeCreateReturnPreviewResponse200DataResolutionEligibilityLineItemsItemModifiersItemMetadata
     */
    public function getMetadata(): MeCreateReturnPreviewResponse200DataResolutionEligibilityLineItemsItemModifiersItemMetadata { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getModifierGroupName(): string { return $this->get('modifier_group_name'); }
    public function hasModifierGroupName(): bool { return $this->has('modifier_group_name'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string.  Value enum: "per_item", "per_line".
     * @return string
     */
    public function getPricingScope(): string { return $this->get('pricing_scope'); }
    public function hasPricingScope(): bool { return $this->has('pricing_scope'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getQuantity(): string { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Shape $ (Value): boolean.
     * @return bool
     */
    public function getShowOnFulfillment(): bool { return $this->get('show_on_fulfillment'); }
    public function hasShowOnFulfillment(): bool { return $this->has('show_on_fulfillment'); }
    /** Shape $ (Value): boolean.
     * @return bool
     */
    public function getShowOnReceipt(): bool { return $this->get('show_on_receipt'); }
    public function hasShowOnReceipt(): bool { return $this->has('show_on_receipt'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getTextValue(): ?string { return $this->get('text_value'); }
    public function hasTextValue(): bool { return $this->has('text_value'); }
    /** Shape $ (Value): {@see MeCreateReturnPreviewResponse200DataResolutionEligibilityLineItemsItemModifiersItemTotalMoney}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MeCreateReturnPreviewResponse200DataResolutionEligibilityLineItemsItemModifiersItemTotalMoney
     */
    public function getTotalMoney(): MeCreateReturnPreviewResponse200DataResolutionEligibilityLineItemsItemModifiersItemTotalMoney { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
    /** Shape $ (Value): {@see MeCreateReturnPreviewResponse200DataResolutionEligibilityLineItemsItemModifiersItemUnitPriceDeltaMoney}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MeCreateReturnPreviewResponse200DataResolutionEligibilityLineItemsItemModifiersItemUnitPriceDeltaMoney
     */
    public function getUnitPriceDeltaMoney(): MeCreateReturnPreviewResponse200DataResolutionEligibilityLineItemsItemModifiersItemUnitPriceDeltaMoney { return $this->get('unit_price_delta_money'); }
    public function hasUnitPriceDeltaMoney(): bool { return $this->has('unit_price_delta_money'); }
}
