<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read BuyerReturnPreviewResponseDataResolutionEligibilityPolicyEvaluationLineItemsItemModifiersItemMetadata $metadata
 * @property-read string $modifier_group_name
 * @property-read string $name
 * @property-read string $pricing_scope
 * @property-read int $quantity
 * @property-read bool $show_on_fulfillment
 * @property-read bool $show_on_receipt
 * @property-read ?string $text_value
 * @property-read BuyerReturnPreviewResponseDataResolutionEligibilityPolicyEvaluationLineItemsItemModifiersItemTotalMoney $total_money
 * @property-read BuyerReturnPreviewResponseDataResolutionEligibilityPolicyEvaluationLineItemsItemModifiersItemUnitPriceDeltaMoney $unit_price_delta_money
 * Presence-aware response; omitted optional fields return null. */
final class BuyerReturnPreviewResponseDataResolutionEligibilityPolicyEvaluationLineItemsItemModifiersItem extends Model {
    /** @param array{'metadata': object{}, 'modifier_group_name': string, 'name': string, 'pricing_scope': string, 'quantity': int, 'show_on_fulfillment': bool, 'show_on_receipt': bool, 'text_value'?: string, 'total_money': mixed, 'unit_price_delta_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerReturnPreviewResponseDataResolutionEligibilityPolicyEvaluationLineItemsItemModifiersItem')); }
    /** maxProperties: 0.
     * @return BuyerReturnPreviewResponseDataResolutionEligibilityPolicyEvaluationLineItemsItemModifiersItemMetadata
     */
    public function getMetadata(): BuyerReturnPreviewResponseDataResolutionEligibilityPolicyEvaluationLineItemsItemModifiersItemMetadata { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** modifier_group_name
     * @return string
     */
    public function getModifierGroupName(): string { return $this->get('modifier_group_name'); }
    public function hasModifierGroupName(): bool { return $this->has('modifier_group_name'); }
    /** name
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Value enum: "per_item", "per_line".
     * @return string
     */
    public function getPricingScope(): string { return $this->get('pricing_scope'); }
    public function hasPricingScope(): bool { return $this->has('pricing_scope'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** show_on_fulfillment
     * @return bool
     */
    public function getShowOnFulfillment(): bool { return $this->get('show_on_fulfillment'); }
    public function hasShowOnFulfillment(): bool { return $this->has('show_on_fulfillment'); }
    /** show_on_receipt
     * @return bool
     */
    public function getShowOnReceipt(): bool { return $this->get('show_on_receipt'); }
    public function hasShowOnReceipt(): bool { return $this->has('show_on_receipt'); }
    /** text_value
     * @return ?string
     */
    public function getTextValue(): ?string { return $this->get('text_value'); }
    public function hasTextValue(): bool { return $this->has('text_value'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return BuyerReturnPreviewResponseDataResolutionEligibilityPolicyEvaluationLineItemsItemModifiersItemTotalMoney
     */
    public function getTotalMoney(): BuyerReturnPreviewResponseDataResolutionEligibilityPolicyEvaluationLineItemsItemModifiersItemTotalMoney { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return BuyerReturnPreviewResponseDataResolutionEligibilityPolicyEvaluationLineItemsItemModifiersItemUnitPriceDeltaMoney
     */
    public function getUnitPriceDeltaMoney(): BuyerReturnPreviewResponseDataResolutionEligibilityPolicyEvaluationLineItemsItemModifiersItemUnitPriceDeltaMoney { return $this->get('unit_price_delta_money'); }
    public function hasUnitPriceDeltaMoney(): bool { return $this->has('unit_price_delta_money'); }
}
