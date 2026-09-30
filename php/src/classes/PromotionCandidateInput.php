<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'amount': string, 'currency': string}|object $amount_money
 * @property-read array{'amount': string, 'currency': string}|object $applied_money
 * @property-read PromotionCombinesWithInput|array<array-key, mixed>|\stdClass $combines_with
 * @property-read array{'amount': string, 'currency': string}|object $current_money
 * @property-read string $customer_facing_name
 * @property-read string $discount_class
 * @property-read PromotionExclusivityInput|array<array-key, mixed>|\stdClass $exclusivity
 * @property-read array{'amount': string, 'currency': string}|object $gap_money
 * @property-read list<string> $order_charge_ids
 * @property-read list<string> $order_line_item_ids
 * @property-read string $promotion_code
 * @property-read string $promotion_code_id
 * @property-read string $promotion_decline_reason
 * @property-read string $promotion_id
 * @property-read string $stacking_mode
 * @property-read array{'amount': string, 'currency': string}|object $threshold_money
 * @property-read array{'amount': string, 'currency': string}|object $would_have_applied_money
 * Presence-aware input; omitted fields throw when accessed. */
final class PromotionCandidateInput extends Model {
    /** @param array{'amount_money'?: array{'amount': string, 'currency': string}|object, 'applied_money'?: array{'amount': string, 'currency': string}|object, 'combines_with'?: PromotionCombinesWithInput|array<array-key, mixed>|\stdClass, 'current_money'?: array{'amount': string, 'currency': string}|object, 'customer_facing_name': string, 'discount_class'?: string, 'exclusivity'?: PromotionExclusivityInput|array<array-key, mixed>|\stdClass, 'gap_money'?: array{'amount': string, 'currency': string}|object, 'order_charge_ids'?: list<string>, 'order_line_item_ids'?: list<string>, 'promotion_code'?: string, 'promotion_code_id'?: string, 'promotion_decline_reason'?: string, 'promotion_id': string, 'stacking_mode'?: string, 'threshold_money'?: array{'amount': string, 'currency': string}|object, 'would_have_applied_money'?: array{'amount': string, 'currency': string}|object, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionCandidateInput')); }
    /** @return array{'amount': string, 'currency': string}|object
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): array|object { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** @return array{'amount': string, 'currency': string}|object
     * @throws SdkError When applied_money is omitted; use hasAppliedMoney() or valueOrDefault().
     */
    public function getAppliedMoney(): array|object { return $this->get('applied_money'); }
    public function hasAppliedMoney(): bool { return $this->has('applied_money'); }
    /** @return PromotionCombinesWithInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When combines_with is omitted; use hasCombinesWith() or valueOrDefault().
     */
    public function getCombinesWith(): mixed { return $this->get('combines_with'); }
    public function hasCombinesWith(): bool { return $this->has('combines_with'); }
    /** @return array{'amount': string, 'currency': string}|object
     * @throws SdkError When current_money is omitted; use hasCurrentMoney() or valueOrDefault().
     */
    public function getCurrentMoney(): array|object { return $this->get('current_money'); }
    public function hasCurrentMoney(): bool { return $this->has('current_money'); }
    /** @return string
     * @throws SdkError When customer_facing_name is omitted; use hasCustomerFacingName() or valueOrDefault().
     */
    public function getCustomerFacingName(): string { return $this->get('customer_facing_name'); }
    public function hasCustomerFacingName(): bool { return $this->has('customer_facing_name'); }
    /** @return string
     * @throws SdkError When discount_class is omitted; use hasDiscountClass() or valueOrDefault().
     */
    public function getDiscountClass(): string { return $this->get('discount_class'); }
    public function hasDiscountClass(): bool { return $this->has('discount_class'); }
    /** @return PromotionExclusivityInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When exclusivity is omitted; use hasExclusivity() or valueOrDefault().
     */
    public function getExclusivity(): mixed { return $this->get('exclusivity'); }
    public function hasExclusivity(): bool { return $this->has('exclusivity'); }
    /** @return array{'amount': string, 'currency': string}|object
     * @throws SdkError When gap_money is omitted; use hasGapMoney() or valueOrDefault().
     */
    public function getGapMoney(): array|object { return $this->get('gap_money'); }
    public function hasGapMoney(): bool { return $this->has('gap_money'); }
    /** @return list<string>
     * @throws SdkError When order_charge_ids is omitted; use hasOrderChargeIds() or valueOrDefault().
     */
    public function getOrderChargeIds(): array { return $this->get('order_charge_ids'); }
    public function hasOrderChargeIds(): bool { return $this->has('order_charge_ids'); }
    /** @return list<string>
     * @throws SdkError When order_line_item_ids is omitted; use hasOrderLineItemIds() or valueOrDefault().
     */
    public function getOrderLineItemIds(): array { return $this->get('order_line_item_ids'); }
    public function hasOrderLineItemIds(): bool { return $this->has('order_line_item_ids'); }
    /** @return string
     * @throws SdkError When promotion_code is omitted; use hasPromotionCode() or valueOrDefault().
     */
    public function getPromotionCode(): string { return $this->get('promotion_code'); }
    public function hasPromotionCode(): bool { return $this->has('promotion_code'); }
    /** @return string
     * @throws SdkError When promotion_code_id is omitted; use hasPromotionCodeId() or valueOrDefault().
     */
    public function getPromotionCodeId(): string { return $this->get('promotion_code_id'); }
    public function hasPromotionCodeId(): bool { return $this->has('promotion_code_id'); }
    /** @return string
     * @throws SdkError When promotion_decline_reason is omitted; use hasPromotionDeclineReason() or valueOrDefault().
     */
    public function getPromotionDeclineReason(): string { return $this->get('promotion_decline_reason'); }
    public function hasPromotionDeclineReason(): bool { return $this->has('promotion_decline_reason'); }
    /** @return string
     * @throws SdkError When promotion_id is omitted; use hasPromotionId() or valueOrDefault().
     */
    public function getPromotionId(): string { return $this->get('promotion_id'); }
    public function hasPromotionId(): bool { return $this->has('promotion_id'); }
    /** @return string
     * @throws SdkError When stacking_mode is omitted; use hasStackingMode() or valueOrDefault().
     */
    public function getStackingMode(): string { return $this->get('stacking_mode'); }
    public function hasStackingMode(): bool { return $this->has('stacking_mode'); }
    /** @return array{'amount': string, 'currency': string}|object
     * @throws SdkError When threshold_money is omitted; use hasThresholdMoney() or valueOrDefault().
     */
    public function getThresholdMoney(): array|object { return $this->get('threshold_money'); }
    public function hasThresholdMoney(): bool { return $this->has('threshold_money'); }
    /** @return array{'amount': string, 'currency': string}|object
     * @throws SdkError When would_have_applied_money is omitted; use hasWouldHaveAppliedMoney() or valueOrDefault().
     */
    public function getWouldHaveAppliedMoney(): array|object { return $this->get('would_have_applied_money'); }
    public function hasWouldHaveAppliedMoney(): bool { return $this->has('would_have_applied_money'); }
}
