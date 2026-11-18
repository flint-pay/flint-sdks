<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributes|null $amount_money
 * @property-read MoneyValuePreviousAttributes|null $discount_money
 * @property-read string|null $order_charge_id
 * @property-read string|null $order_id
 * @property-read MoneyValuePreviousAttributes|null $subtotal_money
 * @property-read MoneyValuePreviousAttributes|null $tax_money
 * Presence-aware response; omitted optional fields return null. */
final class RefundChargeAllocationPreviousAttributes extends Model {
    /** @param array{'amount_money'?: mixed, 'discount_money'?: mixed, 'order_charge_id'?: mixed, 'order_id'?: mixed, 'subtotal_money'?: mixed, 'tax_money'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RefundChargeAllocationPreviousAttributes')); }
    /** Total returned for this charge, including tax. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getAmountMoney(): MoneyValuePreviousAttributes|null { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Discount allocated to the refunded part of the charge. It does not increase the money returned. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getDiscountMoney(): MoneyValuePreviousAttributes|null { return $this->get('discount_money'); }
    public function hasDiscountMoney(): bool { return $this->has('discount_money'); }
    /** ID of the refunded order charge. anyOf[1] (Value): string. ID of the refunded order charge. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderChargeId(): string|null { return $this->get('order_charge_id'); }
    public function hasOrderChargeId(): bool { return $this->has('order_charge_id'); }
    /** ID of the order containing the refunded charge. anyOf[1] (Value): string. ID of the order containing the refunded charge. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderId(): string|null { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Charge amount returned excluding tax, after discounts. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getSubtotalMoney(): MoneyValuePreviousAttributes|null { return $this->get('subtotal_money'); }
    public function hasSubtotalMoney(): bool { return $this->has('subtotal_money'); }
    /** Tax returned for this charge under automatic or external tax. Included in amount_money. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getTaxMoney(): MoneyValuePreviousAttributes|null { return $this->get('tax_money'); }
    public function hasTaxMoney(): bool { return $this->has('tax_money'); }
}
