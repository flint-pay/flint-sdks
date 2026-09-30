<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $charge_money
 * @property-read MoneyValue $discount_money
 * @property-read MoneyValue $requested_tip_money
 * @property-read MoneyValue $subtotal_money
 * @property-read MoneyValue $tax_money
 * @property-read MoneyValue $total_money
 * Presence-aware response; omitted fields throw when accessed. */
final class PricingAmounts extends Model {
    /** @param array{'charge_money': mixed, 'discount_money': mixed, 'requested_tip_money': mixed, 'subtotal_money': mixed, 'tax_money': mixed, 'total_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PricingAmounts')); }
    /** @return MoneyValue
     * @throws SdkError When charge_money is omitted; use hasChargeMoney() or valueOrDefault().
     */
    public function getChargeMoney(): MoneyValue { return $this->get('charge_money'); }
    public function hasChargeMoney(): bool { return $this->has('charge_money'); }
    /** @return MoneyValue
     * @throws SdkError When discount_money is omitted; use hasDiscountMoney() or valueOrDefault().
     */
    public function getDiscountMoney(): MoneyValue { return $this->get('discount_money'); }
    public function hasDiscountMoney(): bool { return $this->has('discount_money'); }
    /** @return MoneyValue
     * @throws SdkError When requested_tip_money is omitted; use hasRequestedTipMoney() or valueOrDefault().
     */
    public function getRequestedTipMoney(): MoneyValue { return $this->get('requested_tip_money'); }
    public function hasRequestedTipMoney(): bool { return $this->has('requested_tip_money'); }
    /** @return MoneyValue
     * @throws SdkError When subtotal_money is omitted; use hasSubtotalMoney() or valueOrDefault().
     */
    public function getSubtotalMoney(): MoneyValue { return $this->get('subtotal_money'); }
    public function hasSubtotalMoney(): bool { return $this->has('subtotal_money'); }
    /** @return MoneyValue
     * @throws SdkError When tax_money is omitted; use hasTaxMoney() or valueOrDefault().
     */
    public function getTaxMoney(): MoneyValue { return $this->get('tax_money'); }
    public function hasTaxMoney(): bool { return $this->has('tax_money'); }
    /** @return MoneyValue
     * @throws SdkError When total_money is omitted; use hasTotalMoney() or valueOrDefault().
     */
    public function getTotalMoney(): MoneyValue { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
}
