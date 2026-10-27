<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $amount_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $applied_money
 * @property-read PromotionCombinesWithInput|array<array-key, mixed>|\stdClass $combines_with
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $current_money
 * @property-read string $customer_facing_name
 * @property-read string $discount_class
 * @property-read PromotionExclusivityInput|array<array-key, mixed>|\stdClass $exclusivity
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $gap_money
 * @property-read list<string> $order_charge_ids
 * @property-read list<string> $order_line_item_ids
 * @property-read string $promotion_code
 * @property-read string $promotion_code_id
 * @property-read string $promotion_decline_reason
 * @property-read string $promotion_id
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $threshold_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $would_have_applied_money
 * Presence-aware input; omitted fields throw when accessed. */
final class PromotionCandidateInput extends Model {
    /** @param array{'amount_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'applied_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'combines_with'?: PromotionCombinesWithInput|array<array-key, mixed>|\stdClass, 'current_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'customer_facing_name': string, 'discount_class'?: string, 'exclusivity'?: PromotionExclusivityInput|array<array-key, mixed>|\stdClass, 'gap_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'order_charge_ids'?: list<string>, 'order_line_item_ids'?: list<string>, 'promotion_code'?: string, 'promotion_code_id'?: string, 'promotion_decline_reason'?: string, 'promotion_id': string, 'threshold_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'would_have_applied_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionCandidateInput')); }
    /** Shape $ (Value): {@see MoneyValueInput}. Calculated discount amount for this promotion candidate before final application, when available. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Discount amount applied to the order for candidates in applied[]. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When applied_money is omitted; use hasAppliedMoney() or valueOrDefault().
     */
    public function getAppliedMoney(): mixed { return $this->get('applied_money'); }
    public function hasAppliedMoney(): bool { return $this->has('applied_money'); }
    /** Shape $ (Value): {@see PromotionCombinesWithInput}. Which kinds of discounts a promotion can combine with: line item, order, and service charge discounts.
     * @return PromotionCombinesWithInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When combines_with is omitted; use hasCombinesWith() or valueOrDefault().
     */
    public function getCombinesWith(): mixed { return $this->get('combines_with'); }
    public function hasCombinesWith(): bool { return $this->has('combines_with'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Current money amount counted toward threshold_money for available[] candidates. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When current_money is omitted; use hasCurrentMoney() or valueOrDefault().
     */
    public function getCurrentMoney(): mixed { return $this->get('current_money'); }
    public function hasCurrentMoney(): bool { return $this->has('current_money'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When customer_facing_name is omitted; use hasCustomerFacingName() or valueOrDefault().
     */
    public function getCustomerFacingName(): string { return $this->get('customer_facing_name'); }
    public function hasCustomerFacingName(): bool { return $this->has('customer_facing_name'); }
    /** Shape $ (Value): string.  Value enum: "order", "line_item", "service_charge".
     * @return string
     * @throws SdkError When discount_class is omitted; use hasDiscountClass() or valueOrDefault().
     */
    public function getDiscountClass(): string { return $this->get('discount_class'); }
    public function hasDiscountClass(): bool { return $this->has('discount_class'); }
    /** Shape $ (Value): {@see PromotionExclusivityInput}. Only one promotion in an exclusivity group continues. See Promotion for the evaluation order.
     * @return PromotionExclusivityInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When exclusivity is omitted; use hasExclusivity() or valueOrDefault().
     */
    public function getExclusivity(): mixed { return $this->get('exclusivity'); }
    public function hasExclusivity(): bool { return $this->has('exclusivity'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Additional money amount needed to reach threshold_money for available[] candidates. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When gap_money is omitted; use hasGapMoney() or valueOrDefault().
     */
    public function getGapMoney(): mixed { return $this->get('gap_money'); }
    public function hasGapMoney(): bool { return $this->has('gap_money'); }
    /** Shape $ (Value): Array of string. Shape $[] (Value): string.
     * @return list<string>
     * @throws SdkError When order_charge_ids is omitted; use hasOrderChargeIds() or valueOrDefault().
     */
    public function getOrderChargeIds(): array { return $this->get('order_charge_ids'); }
    public function hasOrderChargeIds(): bool { return $this->has('order_charge_ids'); }
    /** Shape $ (Value): Array of string. Shape $[] (Value): string.
     * @return list<string>
     * @throws SdkError When order_line_item_ids is omitted; use hasOrderLineItemIds() or valueOrDefault().
     */
    public function getOrderLineItemIds(): array { return $this->get('order_line_item_ids'); }
    public function hasOrderLineItemIds(): bool { return $this->has('order_line_item_ids'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When promotion_code is omitted; use hasPromotionCode() or valueOrDefault().
     */
    public function getPromotionCode(): string { return $this->get('promotion_code'); }
    public function hasPromotionCode(): bool { return $this->has('promotion_code'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When promotion_code_id is omitted; use hasPromotionCodeId() or valueOrDefault().
     */
    public function getPromotionCodeId(): string { return $this->get('promotion_code_id'); }
    public function hasPromotionCodeId(): bool { return $this->has('promotion_code_id'); }
    /** Shape $ (Value): string.  Value enum: "already_applied", "automatic_disabled", "buy_item_missing", "code_invalid", "code_required", "codes_disabled", "currency_mismatch", "exhausted", "expired", "inactive", "max_promotions_reached", "minimum_not_met", "no_discountable_balance", "not_combinable", "not_eligible", "not_yet_started", "superseded", "superseded_by_better_offer", "superseded_by_higher_priority", "unknown_type".
     * @return string
     * @throws SdkError When promotion_decline_reason is omitted; use hasPromotionDeclineReason() or valueOrDefault().
     */
    public function getPromotionDeclineReason(): string { return $this->get('promotion_decline_reason'); }
    public function hasPromotionDeclineReason(): bool { return $this->has('promotion_decline_reason'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When promotion_id is omitted; use hasPromotionId() or valueOrDefault().
     */
    public function getPromotionId(): string { return $this->get('promotion_id'); }
    public function hasPromotionId(): bool { return $this->has('promotion_id'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Minimum money amount required by a threshold rule for available[] candidates. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When threshold_money is omitted; use hasThresholdMoney() or valueOrDefault().
     */
    public function getThresholdMoney(): mixed { return $this->get('threshold_money'); }
    public function hasThresholdMoney(): bool { return $this->has('threshold_money'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Discount amount this candidate would have applied if it had been eligible and won conflict resolution. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When would_have_applied_money is omitted; use hasWouldHaveAppliedMoney() or valueOrDefault().
     */
    public function getWouldHaveAppliedMoney(): mixed { return $this->get('would_have_applied_money'); }
    public function hasWouldHaveAppliedMoney(): bool { return $this->has('would_have_applied_money'); }
}
