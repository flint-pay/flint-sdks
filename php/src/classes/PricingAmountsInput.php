<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $charge_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $discount_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $requested_tip_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $subtotal_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $tax_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $total_money
 * Presence-aware input; omitted fields throw when accessed. */
final class PricingAmountsInput extends Model {
    /** @param array{'charge_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'discount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'requested_tip_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'subtotal_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'tax_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'total_money': MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PricingAmountsInput')); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When charge_money is omitted; use hasChargeMoney() or valueOrDefault().
     */
    public function getChargeMoney(): mixed { return $this->get('charge_money'); }
    public function hasChargeMoney(): bool { return $this->has('charge_money'); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When discount_money is omitted; use hasDiscountMoney() or valueOrDefault().
     */
    public function getDiscountMoney(): mixed { return $this->get('discount_money'); }
    public function hasDiscountMoney(): bool { return $this->has('discount_money'); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When requested_tip_money is omitted; use hasRequestedTipMoney() or valueOrDefault().
     */
    public function getRequestedTipMoney(): mixed { return $this->get('requested_tip_money'); }
    public function hasRequestedTipMoney(): bool { return $this->has('requested_tip_money'); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When subtotal_money is omitted; use hasSubtotalMoney() or valueOrDefault().
     */
    public function getSubtotalMoney(): mixed { return $this->get('subtotal_money'); }
    public function hasSubtotalMoney(): bool { return $this->has('subtotal_money'); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tax_money is omitted; use hasTaxMoney() or valueOrDefault().
     */
    public function getTaxMoney(): mixed { return $this->get('tax_money'); }
    public function hasTaxMoney(): bool { return $this->has('tax_money'); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When total_money is omitted; use hasTotalMoney() or valueOrDefault().
     */
    public function getTotalMoney(): mixed { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
}
