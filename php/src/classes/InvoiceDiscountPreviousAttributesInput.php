<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $amount_money
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $applied_money
 * @property-read string|null $customer_facing_name
 * @property-read string|null $discount_class
 * @property-read string|null $promotion_code
 * @property-read string|null $promotion_id
 * @property-read string|null $source
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoiceDiscountPreviousAttributesInput extends Model {
    /** @param array{'amount_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'applied_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'customer_facing_name'?: string|null, 'discount_class'?: string|null, 'promotion_code'?: string|null, 'promotion_id'?: string|null, 'source'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceDiscountPreviousAttributesInput')); }
    /** Discount amount before limits apply, such as 20% of $100 resolving to $20. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Amount the discount took off. It is less than `amount_money` when a limit applies, such as a discount that would take the order below zero. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When applied_money is omitted; use hasAppliedMoney() or valueOrDefault().
     */
    public function getAppliedMoney(): mixed { return $this->get('applied_money'); }
    public function hasAppliedMoney(): bool { return $this->has('applied_money'); }
    /** Name the buyer sees for the discount. anyOf[1] (Value): string. Name the buyer sees for the discount. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When customer_facing_name is omitted; use hasCustomerFacingName() or valueOrDefault().
     */
    public function getCustomerFacingName(): mixed { return $this->get('customer_facing_name'); }
    public function hasCustomerFacingName(): bool { return $this->has('customer_facing_name'); }
    /** Which part of the order the discount reduces. Value enum: "order", "line_item". anyOf[1] (Value): string. Which part of the order the discount reduces. Value enum: "order", "line_item". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When discount_class is omitted; use hasDiscountClass() or valueOrDefault().
     */
    public function getDiscountClass(): mixed { return $this->get('discount_class'); }
    public function hasDiscountClass(): bool { return $this->has('discount_class'); }
    /** Promotion code used to create this discount. Present only when `source` is `promotion` and a code was used. anyOf[1] (Value): string. Promotion code used to create this discount. Present only when `source` is `promotion` and a code was used. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When promotion_code is omitted; use hasPromotionCode() or valueOrDefault().
     */
    public function getPromotionCode(): mixed { return $this->get('promotion_code'); }
    public function hasPromotionCode(): bool { return $this->has('promotion_code'); }
    /** ID of the promotion that supplied this discount. Absent for a manual discount. anyOf[1] (Value): string. ID of the promotion that supplied this discount. Absent for a manual discount. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When promotion_id is omitted; use hasPromotionId() or valueOrDefault().
     */
    public function getPromotionId(): mixed { return $this->get('promotion_id'); }
    public function hasPromotionId(): bool { return $this->has('promotion_id'); }
    /** Where the discount came from. Value enum: "manual", "promotion", "plan_change_credit", "proration", "prepaid_delivery". anyOf[1] (Value): string. Where the discount came from. Value enum: "manual", "promotion", "plan_change_credit", "proration", "prepaid_delivery". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When source is omitted; use hasSource() or valueOrDefault().
     */
    public function getSource(): mixed { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
}
