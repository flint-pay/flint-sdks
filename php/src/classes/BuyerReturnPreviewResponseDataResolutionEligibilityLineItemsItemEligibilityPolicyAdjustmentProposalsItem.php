<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $adjustment_type
 * @property-read ?int $based_on_quantity
 * @property-read ?BuyerReturnPreviewResponseDataResolutionEligibilityLineItemsItemEligibilityPolicyAdjustmentProposalsItemCalculatedAmountMoney $calculated_amount_money
 * @property-read string $calculation_type
 * @property-read ?BuyerReturnPreviewResponseDataResolutionEligibilityLineItemsItemEligibilityPolicyAdjustmentProposalsItemFlatMoney $flat_money
 * @property-read ?float $percent
 * @property-read string $value_effect
 * Presence-aware response; omitted optional fields return null. */
final class BuyerReturnPreviewResponseDataResolutionEligibilityLineItemsItemEligibilityPolicyAdjustmentProposalsItem extends Model {
    /** @param array{'adjustment_type': string, 'based_on_quantity'?: int, 'calculated_amount_money'?: mixed, 'calculation_type': string, 'flat_money'?: mixed, 'percent'?: float, 'value_effect': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerReturnPreviewResponseDataResolutionEligibilityLineItemsItemEligibilityPolicyAdjustmentProposalsItem')); }
    /** Value enum: "return_shipping_fee", "restocking_fee", "other_fee", "goodwill_credit", "price_correction", "other".
     * @return string
     */
    public function getAdjustmentType(): string { return $this->get('adjustment_type'); }
    public function hasAdjustmentType(): bool { return $this->has('adjustment_type'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return ?int
     */
    public function getBasedOnQuantity(): ?int { return $this->get('based_on_quantity'); }
    public function hasBasedOnQuantity(): bool { return $this->has('based_on_quantity'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?BuyerReturnPreviewResponseDataResolutionEligibilityLineItemsItemEligibilityPolicyAdjustmentProposalsItemCalculatedAmountMoney
     */
    public function getCalculatedAmountMoney(): ?BuyerReturnPreviewResponseDataResolutionEligibilityLineItemsItemEligibilityPolicyAdjustmentProposalsItemCalculatedAmountMoney { return $this->get('calculated_amount_money'); }
    public function hasCalculatedAmountMoney(): bool { return $this->has('calculated_amount_money'); }
    /** Value enum: "flat", "percent".
     * @return string
     */
    public function getCalculationType(): string { return $this->get('calculation_type'); }
    public function hasCalculationType(): bool { return $this->has('calculation_type'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?BuyerReturnPreviewResponseDataResolutionEligibilityLineItemsItemEligibilityPolicyAdjustmentProposalsItemFlatMoney
     */
    public function getFlatMoney(): ?BuyerReturnPreviewResponseDataResolutionEligibilityLineItemsItemEligibilityPolicyAdjustmentProposalsItemFlatMoney { return $this->get('flat_money'); }
    public function hasFlatMoney(): bool { return $this->has('flat_money'); }
    /** Format: double. multipleOf: 0.0001.
     * @return ?float
     */
    public function getPercent(): ?float { return $this->get('percent'); }
    public function hasPercent(): bool { return $this->has('percent'); }
    /** Value enum: "deduction", "credit".
     * @return string
     */
    public function getValueEffect(): string { return $this->get('value_effect'); }
    public function hasValueEffect(): bool { return $this->has('value_effect'); }
}
