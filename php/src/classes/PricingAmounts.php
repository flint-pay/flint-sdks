<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $additive_tax_money
 * @property-read MoneyValue $charge_money
 * @property-read MoneyValue $discount_money
 * @property-read MoneyValue $inclusive_tax_money
 * @property-read MoneyValue $requested_tip_money
 * @property-read MoneyValue $subtotal_money
 * @property-read MoneyValue $tax_money
 * @property-read MoneyValue $total_money
 * Presence-aware response; omitted optional fields return null. */
final class PricingAmounts extends Model {
    /** @param array{'additive_tax_money': mixed, 'charge_money': mixed, 'discount_money': mixed, 'inclusive_tax_money': mixed, 'requested_tip_money': mixed, 'subtotal_money': mixed, 'tax_money': mixed, 'total_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PricingAmounts')); }
    /** Tax added on top of prices, included in total_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getAdditiveTaxMoney(): MoneyValue { return $this->get('additive_tax_money'); }
    public function hasAdditiveTaxMoney(): bool { return $this->has('additive_tax_money'); }
    /** Total of the order's service charges after service-charge discounts. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getChargeMoney(): MoneyValue { return $this->get('charge_money'); }
    public function hasChargeMoney(): bool { return $this->has('charge_money'); }
    /** Total of order and line-item discounts. Service-charge discounts, such as free shipping, are not included; they reduce charge_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getDiscountMoney(): MoneyValue { return $this->get('discount_money'); }
    public function hasDiscountMoney(): bool { return $this->has('discount_money'); }
    /** Tax already included in subtotal_money and charge_money. Informational; it is not added again to total_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getInclusiveTaxMoney(): MoneyValue { return $this->get('inclusive_tax_money'); }
    public function hasInclusiveTaxMoney(): bool { return $this->has('inclusive_tax_money'); }
    /** Tip money in the total: the requested tip before payment, and settled tips net of refunds after. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getRequestedTipMoney(): MoneyValue { return $this->get('requested_tip_money'); }
    public function hasRequestedTipMoney(): bool { return $this->has('requested_tip_money'); }
    /** Sum of the line items' subtotal_money: prices with modifiers, before discounts. Lines with tax-inclusive prices include their tax here. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getSubtotalMoney(): MoneyValue { return $this->get('subtotal_money'); }
    public function hasSubtotalMoney(): bool { return $this->has('subtotal_money'); }
    /** Total tax, equal to additive_tax_money + inclusive_tax_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getTaxMoney(): MoneyValue { return $this->get('tax_money'); }
    public function hasTaxMoney(): bool { return $this->has('tax_money'); }
    /** subtotal_money - discount_money + charge_money + additive_tax_money + requested_tip_money, never below zero. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getTotalMoney(): MoneyValue { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
}
