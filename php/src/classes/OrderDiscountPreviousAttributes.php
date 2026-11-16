<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributes|null $amount_money
 * @property-read MoneyValuePreviousAttributes|null $applied_money
 * @property-read string|null $customer_facing_name
 * @property-read string|null $discount_class
 * @property-read list<string>|null $order_charge_ids
 * @property-read string|null $order_discount_id
 * @property-read string|null $order_id
 * @property-read list<string>|null $order_line_item_ids
 * @property-read string|null $promotion_code
 * @property-read string|null $promotion_id
 * @property-read string|null $source
 * @property-read string|null $status
 * Presence-aware response; omitted optional fields return null. */
final class OrderDiscountPreviousAttributes extends Model {
    /** @param array{'amount_money'?: mixed, 'applied_money'?: mixed, 'customer_facing_name'?: mixed, 'discount_class'?: mixed, 'order_charge_ids'?: mixed, 'order_discount_id'?: mixed, 'order_id'?: mixed, 'order_line_item_ids'?: mixed, 'promotion_code'?: mixed, 'promotion_id'?: mixed, 'source'?: mixed, 'status'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderDiscountPreviousAttributes')); }
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
    /** Which part of the order the discount reduces. Value enum: "order", "line_item", "service_charge". anyOf[1] (Value): string. Which part of the order the discount reduces. Value enum: "order", "line_item", "service_charge". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDiscountClass(): string|null { return $this->get('discount_class'); }
    public function hasDiscountClass(): bool { return $this->has('discount_class'); }
    /** IDs of the charges this discount reduces. anyOf[1] (Value): Array of string. IDs of the charges this discount reduces. anyOf[1][] (Value): string. anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getOrderChargeIds(): array|null { return $this->get('order_charge_ids'); }
    public function hasOrderChargeIds(): bool { return $this->has('order_charge_ids'); }
    /** Order discount ID. It starts with ad_. Pass it to POST /v1/orders/{order_id}/discounts/remove to remove the discount. anyOf[1] (Value): string. Order discount ID. It starts with ad_. Pass it to POST /v1/orders/{order_id}/discounts/remove to remove the discount. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderDiscountId(): string|null { return $this->get('order_discount_id'); }
    public function hasOrderDiscountId(): bool { return $this->has('order_discount_id'); }
    /** ID of the order the discount applies to. anyOf[1] (Value): string. ID of the order the discount applies to. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderId(): string|null { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** IDs of the order line items this discount applies to. anyOf[1] (Value): Array of string. IDs of the order line items this discount applies to. anyOf[1][] (Value): string. anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getOrderLineItemIds(): array|null { return $this->get('order_line_item_ids'); }
    public function hasOrderLineItemIds(): bool { return $this->has('order_line_item_ids'); }
    /** Promotion code used to create this discount. Present only when source is promotion and a code was used. anyOf[1] (Value): string. Promotion code used to create this discount. Present only when source is promotion and a code was used. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPromotionCode(): string|null { return $this->get('promotion_code'); }
    public function hasPromotionCode(): bool { return $this->has('promotion_code'); }
    /** Promotion that created this discount. Present only when source is promotion. anyOf[1] (Value): string. Promotion that created this discount. Present only when source is promotion. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPromotionId(): string|null { return $this->get('promotion_id'); }
    public function hasPromotionId(): bool { return $this->has('promotion_id'); }
    /** Where the discount came from. Value enum: "manual", "promotion", "plan_change_credit", "proration", "prepaid_delivery". anyOf[1] (Value): string. Where the discount came from. Value enum: "manual", "promotion", "plan_change_credit", "proration", "prepaid_delivery". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSource(): string|null { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
    /** Redemption state of the discount. Value enum: "pending", "redeemed", "canceled". anyOf[1] (Value): string. Redemption state of the discount. Value enum: "pending", "redeemed", "canceled". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
