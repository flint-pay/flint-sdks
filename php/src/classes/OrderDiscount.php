<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $amount_money
 * @property-read MoneyValue $applied_money
 * @property-read ?string $customer_facing_name
 * @property-read ?string $discount_class
 * @property-read list<string> $order_charge_ids
 * @property-read string $order_discount_id
 * @property-read string $order_id
 * @property-read list<string> $order_line_item_ids
 * @property-read ?string $promotion_code
 * @property-read ?string $promotion_id
 * @property-read ?string $source
 * @property-read string $status
 * Presence-aware response; omitted optional fields return null. */
final class OrderDiscount extends Model {
    /** @param array{'amount_money': mixed, 'applied_money': mixed, 'customer_facing_name'?: string, 'discount_class'?: string, 'order_charge_ids': list<string>, 'order_discount_id': string, 'order_id': string, 'order_line_item_ids': list<string>, 'promotion_code'?: string, 'promotion_id'?: string, 'source'?: string, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderDiscount')); }
    /** Shape $ (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getAmountMoney(): MoneyValue { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Shape $ (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getAppliedMoney(): MoneyValue { return $this->get('applied_money'); }
    public function hasAppliedMoney(): bool { return $this->has('applied_money'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getCustomerFacingName(): ?string { return $this->get('customer_facing_name'); }
    public function hasCustomerFacingName(): bool { return $this->has('customer_facing_name'); }
    /** Shape $ (Value): string.  Value enum: "order", "line_item", "service_charge".
     * @return ?string
     */
    public function getDiscountClass(): ?string { return $this->get('discount_class'); }
    public function hasDiscountClass(): bool { return $this->has('discount_class'); }
    /** Shape $ (Value): Array of string. Shape $[] (Value): string.
     * @return list<string>
     */
    public function getOrderChargeIds(): array { return $this->get('order_charge_ids'); }
    public function hasOrderChargeIds(): bool { return $this->has('order_charge_ids'); }
    /** Shape $ (Value): string. Order discount ID. It starts with ad_. Pass it to POST /v1/orders/{order_id}/discounts/remove to remove the discount.
     * @return string
     */
    public function getOrderDiscountId(): string { return $this->get('order_discount_id'); }
    public function hasOrderDiscountId(): bool { return $this->has('order_discount_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Shape $ (Value): Array of string. Shape $[] (Value): string.
     * @return list<string>
     */
    public function getOrderLineItemIds(): array { return $this->get('order_line_item_ids'); }
    public function hasOrderLineItemIds(): bool { return $this->has('order_line_item_ids'); }
    /** Shape $ (Value): string. Promotion code used to create this discount. Present only when source is promotion and a code was used.
     * @return ?string
     */
    public function getPromotionCode(): ?string { return $this->get('promotion_code'); }
    public function hasPromotionCode(): bool { return $this->has('promotion_code'); }
    /** Shape $ (Value): string. Promotion that created this discount. Present only when source is promotion.
     * @return ?string
     */
    public function getPromotionId(): ?string { return $this->get('promotion_id'); }
    public function hasPromotionId(): bool { return $this->has('promotion_id'); }
    /** Shape $ (Value): string.  Value enum: "manual", "promotion", "plan_change_credit".
     * @return ?string
     */
    public function getSource(): ?string { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
    /** Shape $ (Value): string.  Value enum: "pending", "redeemed", "canceled".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
