<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $amount_money
 * @property-read MoneyValue $applied_money
 * @property-read ?string $customer_facing_name
 * @property-read ?string $discount_class
 * @property-read ?string $promotion_code
 * @property-read ?string $promotion_id
 * @property-read string $source
 * Presence-aware response; omitted optional fields return null. */
final class InvoiceDiscount extends Model {
    /** @param array{'amount_money': mixed, 'applied_money': mixed, 'customer_facing_name'?: string, 'discount_class'?: string, 'promotion_code'?: string, 'promotion_id'?: string, 'source': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceDiscount')); }
    /** Discount amount before limits apply, such as 20% of $100 resolving to $20. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getAmountMoney(): MoneyValue { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Amount the discount took off. It is less than `amount_money` when a limit applies, such as a discount that would take the order below zero. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getAppliedMoney(): MoneyValue { return $this->get('applied_money'); }
    public function hasAppliedMoney(): bool { return $this->has('applied_money'); }
    /** Name the buyer sees for the discount.
     * @return ?string
     */
    public function getCustomerFacingName(): ?string { return $this->get('customer_facing_name'); }
    public function hasCustomerFacingName(): bool { return $this->has('customer_facing_name'); }
    /** Which part of the order the discount reduces. Value enum: "order", "line_item".
     * @return ?string
     */
    public function getDiscountClass(): ?string { return $this->get('discount_class'); }
    public function hasDiscountClass(): bool { return $this->has('discount_class'); }
    /** Promotion code used to create this discount. Present only when `source` is `promotion` and a code was used.
     * @return ?string
     */
    public function getPromotionCode(): ?string { return $this->get('promotion_code'); }
    public function hasPromotionCode(): bool { return $this->has('promotion_code'); }
    /** ID of the promotion that supplied this discount. Absent for a manual discount.
     * @return ?string
     */
    public function getPromotionId(): ?string { return $this->get('promotion_id'); }
    public function hasPromotionId(): bool { return $this->has('promotion_id'); }
    /** Where the discount came from. Value enum: "manual", "promotion", "plan_change_credit", "proration".
     * @return string
     */
    public function getSource(): string { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
}
