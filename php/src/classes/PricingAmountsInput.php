<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $additive_tax_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $charge_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $discount_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $inclusive_tax_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $requested_tip_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $subtotal_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $tax_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $total_money
 * Presence-aware input; omitted fields throw when accessed. */
final class PricingAmountsInput extends Model {
    /** @param array{'additive_tax_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'charge_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'discount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'inclusive_tax_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'requested_tip_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'subtotal_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'tax_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'total_money': MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PricingAmountsInput')); }
    /** Shape $ (Value): {@see MoneyValueInput}. Tax added on top of prices, included in total_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When additive_tax_money is omitted; use hasAdditiveTaxMoney() or valueOrDefault().
     */
    public function getAdditiveTaxMoney(): mixed { return $this->get('additive_tax_money'); }
    public function hasAdditiveTaxMoney(): bool { return $this->has('additive_tax_money'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Total of the order's service charges after service-charge discounts. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When charge_money is omitted; use hasChargeMoney() or valueOrDefault().
     */
    public function getChargeMoney(): mixed { return $this->get('charge_money'); }
    public function hasChargeMoney(): bool { return $this->has('charge_money'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Total of order and line-item discounts. Service-charge discounts, such as free shipping, are not included; they reduce charge_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When discount_money is omitted; use hasDiscountMoney() or valueOrDefault().
     */
    public function getDiscountMoney(): mixed { return $this->get('discount_money'); }
    public function hasDiscountMoney(): bool { return $this->has('discount_money'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Tax already included in subtotal_money and charge_money. Informational; it is not added again to total_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When inclusive_tax_money is omitted; use hasInclusiveTaxMoney() or valueOrDefault().
     */
    public function getInclusiveTaxMoney(): mixed { return $this->get('inclusive_tax_money'); }
    public function hasInclusiveTaxMoney(): bool { return $this->has('inclusive_tax_money'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Tip money in the total: the requested tip before payment, and settled tips net of refunds after. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When requested_tip_money is omitted; use hasRequestedTipMoney() or valueOrDefault().
     */
    public function getRequestedTipMoney(): mixed { return $this->get('requested_tip_money'); }
    public function hasRequestedTipMoney(): bool { return $this->has('requested_tip_money'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Sum of the line items' subtotal_money: prices with modifiers, before discounts. Lines with tax-inclusive prices include their tax here. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When subtotal_money is omitted; use hasSubtotalMoney() or valueOrDefault().
     */
    public function getSubtotalMoney(): mixed { return $this->get('subtotal_money'); }
    public function hasSubtotalMoney(): bool { return $this->has('subtotal_money'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Total tax, equal to additive_tax_money + inclusive_tax_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tax_money is omitted; use hasTaxMoney() or valueOrDefault().
     */
    public function getTaxMoney(): mixed { return $this->get('tax_money'); }
    public function hasTaxMoney(): bool { return $this->has('tax_money'); }
    /** Shape $ (Value): {@see MoneyValueInput}. subtotal_money - discount_money + charge_money + additive_tax_money + requested_tip_money, never below zero. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When total_money is omitted; use hasTotalMoney() or valueOrDefault().
     */
    public function getTotalMoney(): mixed { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
}
