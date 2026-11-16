<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributes|null $amount_money
 * @property-read MoneyValuePreviousAttributes|null $applied_money
 * @property-read string|null $customer_facing_name
 * @property-read string|null $discount_class
 * @property-read string|null $promotion_code
 * @property-read string|null $promotion_id
 * @property-read string|null $source
 * Presence-aware response; omitted optional fields return null. */
final class InvoiceDiscountPreviousAttributes extends Model {
    /** @param array{'amount_money'?: mixed, 'applied_money'?: mixed, 'customer_facing_name'?: mixed, 'discount_class'?: mixed, 'promotion_code'?: mixed, 'promotion_id'?: mixed, 'source'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceDiscountPreviousAttributes')); }
    /** Discount amount before limits apply, such as 20% of $100 resolving to $20. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getAmountMoney(): MoneyValuePreviousAttributes|null { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Amount the discount took off. It is less than `amount_money` when a limit applies, such as a discount that would take the order below zero. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getAppliedMoney(): MoneyValuePreviousAttributes|null { return $this->get('applied_money'); }
    public function hasAppliedMoney(): bool { return $this->has('applied_money'); }
    /** Name the buyer sees for the discount. anyOf[1] (Value): string. Name the buyer sees for the discount. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCustomerFacingName(): string|null { return $this->get('customer_facing_name'); }
    public function hasCustomerFacingName(): bool { return $this->has('customer_facing_name'); }
    /** Which part of the order the discount reduces. Value enum: "order", "line_item". anyOf[1] (Value): string. Which part of the order the discount reduces. Value enum: "order", "line_item". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDiscountClass(): string|null { return $this->get('discount_class'); }
    public function hasDiscountClass(): bool { return $this->has('discount_class'); }
    /** Promotion code used to create this discount. Present only when `source` is `promotion` and a code was used. anyOf[1] (Value): string. Promotion code used to create this discount. Present only when `source` is `promotion` and a code was used. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPromotionCode(): string|null { return $this->get('promotion_code'); }
    public function hasPromotionCode(): bool { return $this->has('promotion_code'); }
    /** ID of the promotion that supplied this discount. Absent for a manual discount. anyOf[1] (Value): string. ID of the promotion that supplied this discount. Absent for a manual discount. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPromotionId(): string|null { return $this->get('promotion_id'); }
    public function hasPromotionId(): bool { return $this->has('promotion_id'); }
    /** Where the discount came from. Value enum: "manual", "promotion", "plan_change_credit", "proration", "prepaid_delivery". anyOf[1] (Value): string. Where the discount came from. Value enum: "manual", "promotion", "plan_change_credit", "proration", "prepaid_delivery". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSource(): string|null { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
}
