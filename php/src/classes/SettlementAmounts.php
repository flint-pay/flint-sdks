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
 * @property-read MoneyValue $written_off_money
 * Presence-aware response; omitted optional fields return null. */
final class SettlementAmounts extends Model {
    /** @param array{'balance_money': mixed, 'credit_money': mixed, 'net_collected_money': mixed, 'outstanding_money': mixed, 'paid_money': mixed, 'refunded_money': mixed, 'settled_tip_money': mixed, 'written_off_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SettlementAmounts')); }
    /** Shape $ (Value): {@see SignedMoney}. outstanding_money minus credit_money. Negative when the order holds money beyond its total that has not been returned. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return SignedMoney
     */
    public function getBalanceMoney(): SignedMoney { return $this->get('balance_money'); }
    public function hasBalanceMoney(): bool { return $this->has('balance_money'); }
    /** Shape $ (Value): {@see MoneyValue}. Money collected beyond the order total and not yet refunded. Write-offs do not create credit. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getCreditMoney(): MoneyValue { return $this->get('credit_money'); }
    public function hasCreditMoney(): bool { return $this->has('credit_money'); }
    /** Shape $ (Value): {@see MoneyValue}. Payments collected for the order minus money refunded to the buyer. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getNetCollectedMoney(): MoneyValue { return $this->get('net_collected_money'); }
    public function hasNetCollectedMoney(): bool { return $this->has('net_collected_money'); }
    /** Shape $ (Value): {@see MoneyValue}. What is still left to collect: the order total minus paid_money and written_off_money, never below zero. Refunds return money already collected and do not add to it. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getOutstandingMoney(): MoneyValue { return $this->get('outstanding_money'); }
    public function hasOutstandingMoney(): bool { return $this->has('outstanding_money'); }
    /** Shape $ (Value): {@see MoneyValue}. Settled payments and applied return credit. Excludes written-off invoice balances. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getPaidMoney(): MoneyValue { return $this->get('paid_money'); }
    public function hasPaidMoney(): bool { return $this->has('paid_money'); }
    /** Shape $ (Value): {@see MoneyValue}. Money returned to the buyer from what this order collected. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getRefundedMoney(): MoneyValue { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
    /** Shape $ (Value): {@see MoneyValue}. Portion of the collected money settled as tips. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getSettledTipMoney(): MoneyValue { return $this->get('settled_tip_money'); }
    public function hasSettledTipMoney(): bool { return $this->has('settled_tip_money'); }
    /** Shape $ (Value): {@see MoneyValue}. Invoice debt no longer owed. Reduces outstanding_money without increasing paid_money, net_collected_money, or credit_money. Cannot be refunded or used to fund an exchange. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getWrittenOffMoney(): MoneyValue { return $this->get('written_off_money'); }
    public function hasWrittenOffMoney(): bool { return $this->has('written_off_money'); }
}
