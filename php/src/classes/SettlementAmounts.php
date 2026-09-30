<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read SignedMoney $balance_money
 * @property-read MoneyValue $credit_money
 * @property-read MoneyValue $net_collected_money
 * @property-read MoneyValue $outstanding_money
 * @property-read MoneyValue $paid_money
 * @property-read MoneyValue $refunded_money
 * @property-read MoneyValue $settled_tip_money
 * Presence-aware response; omitted fields throw when accessed. */
final class SettlementAmounts extends Model {
    /** @param array{'balance_money': mixed, 'credit_money': mixed, 'net_collected_money': mixed, 'outstanding_money': mixed, 'paid_money': mixed, 'refunded_money': mixed, 'settled_tip_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SettlementAmounts')); }
    /** @return SignedMoney
     * @throws SdkError When balance_money is omitted; use hasBalanceMoney() or valueOrDefault().
     */
    public function getBalanceMoney(): SignedMoney { return $this->get('balance_money'); }
    public function hasBalanceMoney(): bool { return $this->has('balance_money'); }
    /** @return MoneyValue
     * @throws SdkError When credit_money is omitted; use hasCreditMoney() or valueOrDefault().
     */
    public function getCreditMoney(): MoneyValue { return $this->get('credit_money'); }
    public function hasCreditMoney(): bool { return $this->has('credit_money'); }
    /** @return MoneyValue
     * @throws SdkError When net_collected_money is omitted; use hasNetCollectedMoney() or valueOrDefault().
     */
    public function getNetCollectedMoney(): MoneyValue { return $this->get('net_collected_money'); }
    public function hasNetCollectedMoney(): bool { return $this->has('net_collected_money'); }
    /** @return MoneyValue
     * @throws SdkError When outstanding_money is omitted; use hasOutstandingMoney() or valueOrDefault().
     */
    public function getOutstandingMoney(): MoneyValue { return $this->get('outstanding_money'); }
    public function hasOutstandingMoney(): bool { return $this->has('outstanding_money'); }
    /** @return MoneyValue
     * @throws SdkError When paid_money is omitted; use hasPaidMoney() or valueOrDefault().
     */
    public function getPaidMoney(): MoneyValue { return $this->get('paid_money'); }
    public function hasPaidMoney(): bool { return $this->has('paid_money'); }
    /** @return MoneyValue
     * @throws SdkError When refunded_money is omitted; use hasRefundedMoney() or valueOrDefault().
     */
    public function getRefundedMoney(): MoneyValue { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
    /** @return MoneyValue
     * @throws SdkError When settled_tip_money is omitted; use hasSettledTipMoney() or valueOrDefault().
     */
    public function getSettledTipMoney(): MoneyValue { return $this->get('settled_tip_money'); }
    public function hasSettledTipMoney(): bool { return $this->has('settled_tip_money'); }
}
