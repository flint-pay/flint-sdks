<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $amount_money
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $applied_money
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
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderDiscountPreviousAttributesInput extends Model {
    /** @param array{'amount_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'applied_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'customer_facing_name'?: string|null, 'discount_class'?: string|null, 'order_charge_ids'?: list<string>|null, 'order_discount_id'?: string|null, 'order_id'?: string|null, 'order_line_item_ids'?: list<string>|null, 'promotion_code'?: string|null, 'promotion_id'?: string|null, 'source'?: string|null, 'status'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderDiscountPreviousAttributesInput')); }
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
    /** Which part of the order the discount reduces. Value enum: "order", "line_item", "service_charge". anyOf[1] (Value): string. Which part of the order the discount reduces. Value enum: "order", "line_item", "service_charge". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When discount_class is omitted; use hasDiscountClass() or valueOrDefault().
     */
    public function getDiscountClass(): mixed { return $this->get('discount_class'); }
    public function hasDiscountClass(): bool { return $this->has('discount_class'); }
    /** IDs of the charges this discount reduces. anyOf[1] (Value): Array of string. IDs of the charges this discount reduces. anyOf[1][] (Value): string. Example: "och_01KEZF7C00XX8AKACP0GHKFWWT". anyOf[2] (Value): null.
     * @return list<string>|null
     * @throws SdkError When order_charge_ids is omitted; use hasOrderChargeIds() or valueOrDefault().
     */
    public function getOrderChargeIds(): mixed { return $this->get('order_charge_ids'); }
    public function hasOrderChargeIds(): bool { return $this->has('order_charge_ids'); }
    /** Order discount ID. It starts with ad_. Pass it to POST /v1/orders/{order_id}/discounts/remove to remove the discount. anyOf[1] (Value): string. Order discount ID. It starts with ad_. Pass it to POST /v1/orders/{order_id}/discounts/remove to remove the discount. Example: "ad_01KEZF7C00T30DH97GR0A9BF31". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When order_discount_id is omitted; use hasOrderDiscountId() or valueOrDefault().
     */
    public function getOrderDiscountId(): mixed { return $this->get('order_discount_id'); }
    public function hasOrderDiscountId(): bool { return $this->has('order_discount_id'); }
    /** ID of the order the discount applies to. anyOf[1] (Value): string. ID of the order the discount applies to. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): mixed { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** IDs of the order line items this discount applies to. anyOf[1] (Value): Array of string. IDs of the order line items this discount applies to. anyOf[1][] (Value): string. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". anyOf[2] (Value): null.
     * @return list<string>|null
     * @throws SdkError When order_line_item_ids is omitted; use hasOrderLineItemIds() or valueOrDefault().
     */
    public function getOrderLineItemIds(): mixed { return $this->get('order_line_item_ids'); }
    public function hasOrderLineItemIds(): bool { return $this->has('order_line_item_ids'); }
    /** Promotion code used to create this discount. Present only when source is promotion and a code was used. anyOf[1] (Value): string. Promotion code used to create this discount. Present only when source is promotion and a code was used. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When promotion_code is omitted; use hasPromotionCode() or valueOrDefault().
     */
    public function getPromotionCode(): mixed { return $this->get('promotion_code'); }
    public function hasPromotionCode(): bool { return $this->has('promotion_code'); }
    /** Promotion that created this discount. Present only when source is promotion. anyOf[1] (Value): string. Promotion that created this discount. Present only when source is promotion. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V". anyOf[2] (Value): null.
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
    /** Redemption state of the discount. Value enum: "pending", "redeemed", "canceled". anyOf[1] (Value): string. Redemption state of the discount. Value enum: "pending", "redeemed", "canceled". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
