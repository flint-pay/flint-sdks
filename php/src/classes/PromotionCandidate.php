<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?MoneyValue $amount_money
 * @property-read ?MoneyValue $applied_money
 * @property-read ?PromotionCombinesWith $combines_with
 * @property-read ?MoneyValue $current_money
 * @property-read string $customer_facing_name
 * @property-read ?string $discount_class
 * @property-read ?PromotionExclusivity $exclusivity
 * @property-read ?MoneyValue $gap_money
 * @property-read ?list<string> $order_charge_ids
 * @property-read ?list<string> $order_line_item_ids
 * @property-read ?string $promotion_code
 * @property-read ?string $promotion_code_id
 * @property-read ?string $promotion_decline_reason
 * @property-read string $promotion_id
 * @property-read ?MoneyValue $threshold_money
 * @property-read ?MoneyValue $would_have_applied_money
 * Presence-aware response; omitted optional fields return null. */
final class PromotionCandidate extends Model {
    /** @param array{'amount_money'?: mixed, 'applied_money'?: mixed, 'combines_with'?: mixed, 'current_money'?: mixed, 'customer_facing_name': string, 'discount_class'?: string, 'exclusivity'?: mixed, 'gap_money'?: mixed, 'order_charge_ids'?: list<string>, 'order_line_item_ids'?: list<string>, 'promotion_code'?: string, 'promotion_code_id'?: string, 'promotion_decline_reason'?: string, 'promotion_id': string, 'threshold_money'?: mixed, 'would_have_applied_money'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionCandidate')); }
    /** Shape $ (Value): {@see MoneyValue}. Calculated discount amount for this promotion candidate before final application, when available. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getAmountMoney(): ?MoneyValue { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Shape $ (Value): {@see MoneyValue}. Discount amount applied to the order for candidates in applied[]. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getAppliedMoney(): ?MoneyValue { return $this->get('applied_money'); }
    public function hasAppliedMoney(): bool { return $this->has('applied_money'); }
    /** Shape $ (Value): {@see PromotionCombinesWith}. Which kinds of discounts a promotion can combine with: line item, order, and service charge discounts.
     * @return ?PromotionCombinesWith
     */
    public function getCombinesWith(): ?PromotionCombinesWith { return $this->get('combines_with'); }
    public function hasCombinesWith(): bool { return $this->has('combines_with'); }
    /** Shape $ (Value): {@see MoneyValue}. Current money amount counted toward threshold_money for available[] candidates. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getCurrentMoney(): ?MoneyValue { return $this->get('current_money'); }
    public function hasCurrentMoney(): bool { return $this->has('current_money'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getCustomerFacingName(): string { return $this->get('customer_facing_name'); }
    public function hasCustomerFacingName(): bool { return $this->has('customer_facing_name'); }
    /** Shape $ (Value): string.  Value enum: "order", "line_item", "service_charge".
     * @return ?string
     */
    public function getDiscountClass(): ?string { return $this->get('discount_class'); }
    public function hasDiscountClass(): bool { return $this->has('discount_class'); }
    /** Shape $ (Value): {@see PromotionExclusivity}. Only one promotion in an exclusivity group continues. See Promotion for the evaluation order.
     * @return ?PromotionExclusivity
     */
    public function getExclusivity(): ?PromotionExclusivity { return $this->get('exclusivity'); }
    public function hasExclusivity(): bool { return $this->has('exclusivity'); }
    /** Shape $ (Value): {@see MoneyValue}. Additional money amount needed to reach threshold_money for available[] candidates. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getGapMoney(): ?MoneyValue { return $this->get('gap_money'); }
    public function hasGapMoney(): bool { return $this->has('gap_money'); }
    /** Shape $ (Value): Array of string. Shape $[] (Value): string.
     * @return ?list<string>
     */
    public function getOrderChargeIds(): ?array { return $this->get('order_charge_ids'); }
    public function hasOrderChargeIds(): bool { return $this->has('order_charge_ids'); }
    /** Shape $ (Value): Array of string. Shape $[] (Value): string.
     * @return ?list<string>
     */
    public function getOrderLineItemIds(): ?array { return $this->get('order_line_item_ids'); }
    public function hasOrderLineItemIds(): bool { return $this->has('order_line_item_ids'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getPromotionCode(): ?string { return $this->get('promotion_code'); }
    public function hasPromotionCode(): bool { return $this->has('promotion_code'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getPromotionCodeId(): ?string { return $this->get('promotion_code_id'); }
    public function hasPromotionCodeId(): bool { return $this->has('promotion_code_id'); }
    /** Shape $ (Value): string.  Value enum: "already_applied", "automatic_disabled", "buy_item_missing", "code_invalid", "code_required", "codes_disabled", "currency_mismatch", "exhausted", "expired", "inactive", "max_promotions_reached", "minimum_not_met", "no_discountable_balance", "not_combinable", "not_eligible", "not_yet_started", "superseded", "superseded_by_better_offer", "superseded_by_higher_priority", "unknown_type".
     * @return ?string
     */
    public function getPromotionDeclineReason(): ?string { return $this->get('promotion_decline_reason'); }
    public function hasPromotionDeclineReason(): bool { return $this->has('promotion_decline_reason'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getPromotionId(): string { return $this->get('promotion_id'); }
    public function hasPromotionId(): bool { return $this->has('promotion_id'); }
    /** Shape $ (Value): {@see MoneyValue}. Minimum money amount required by a threshold rule for available[] candidates. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getThresholdMoney(): ?MoneyValue { return $this->get('threshold_money'); }
    public function hasThresholdMoney(): bool { return $this->has('threshold_money'); }
    /** Shape $ (Value): {@see MoneyValue}. Discount amount this candidate would have applied if it had been eligible and won conflict resolution. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getWouldHaveAppliedMoney(): ?MoneyValue { return $this->get('would_have_applied_money'); }
    public function hasWouldHaveAppliedMoney(): bool { return $this->has('would_have_applied_money'); }
}
