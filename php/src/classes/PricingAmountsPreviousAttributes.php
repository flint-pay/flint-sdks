<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributes|null $additive_tax_money
 * @property-read MoneyValuePreviousAttributes|null $charge_money
 * @property-read MoneyValuePreviousAttributes|null $discount_money
 * @property-read MoneyValuePreviousAttributes|null $inclusive_tax_money
 * @property-read MoneyValuePreviousAttributes|null $requested_tip_money
 * @property-read MoneyValuePreviousAttributes|null $subtotal_money
 * @property-read MoneyValuePreviousAttributes|null $tax_money
 * @property-read MoneyValuePreviousAttributes|null $total_money
 * Presence-aware response; omitted optional fields return null. */
final class PricingAmountsPreviousAttributes extends Model {
    /** @param array{'additive_tax_money'?: mixed, 'charge_money'?: mixed, 'discount_money'?: mixed, 'inclusive_tax_money'?: mixed, 'requested_tip_money'?: mixed, 'subtotal_money'?: mixed, 'tax_money'?: mixed, 'total_money'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PricingAmountsPreviousAttributes')); }
    /** Tax added on top of prices, included in total_money. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getAdditiveTaxMoney(): MoneyValuePreviousAttributes|null { return $this->get('additive_tax_money'); }
    public function hasAdditiveTaxMoney(): bool { return $this->has('additive_tax_money'); }
    /** Total of the order's service charges after service-charge discounts. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getChargeMoney(): MoneyValuePreviousAttributes|null { return $this->get('charge_money'); }
    public function hasChargeMoney(): bool { return $this->has('charge_money'); }
    /** Total of order and line-item discounts. Service-charge discounts, such as free shipping, are not included; they reduce charge_money. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getDiscountMoney(): MoneyValuePreviousAttributes|null { return $this->get('discount_money'); }
    public function hasDiscountMoney(): bool { return $this->has('discount_money'); }
    /** Tax already included in subtotal_money and charge_money. Informational; it is not added again to total_money. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getInclusiveTaxMoney(): MoneyValuePreviousAttributes|null { return $this->get('inclusive_tax_money'); }
    public function hasInclusiveTaxMoney(): bool { return $this->has('inclusive_tax_money'); }
    /** Tip money included in the price. After payment, it includes the original settled tip. Each tip reports any refund in its refunded_money field. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getRequestedTipMoney(): MoneyValuePreviousAttributes|null { return $this->get('requested_tip_money'); }
    public function hasRequestedTipMoney(): bool { return $this->has('requested_tip_money'); }
    /** Sum of the line items' subtotal_money: prices with modifiers, before discounts. Lines with tax-inclusive prices include their tax here. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getSubtotalMoney(): MoneyValuePreviousAttributes|null { return $this->get('subtotal_money'); }
    public function hasSubtotalMoney(): bool { return $this->has('subtotal_money'); }
    /** Total tax, equal to additive_tax_money + inclusive_tax_money. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getTaxMoney(): MoneyValuePreviousAttributes|null { return $this->get('tax_money'); }
    public function hasTaxMoney(): bool { return $this->has('tax_money'); }
    /** subtotal_money - discount_money + charge_money + additive_tax_money + requested_tip_money, never below zero. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getTotalMoney(): MoneyValuePreviousAttributes|null { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
}
