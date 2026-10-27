<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read SignedMoneyInput|array<array-key, mixed>|\stdClass $balance_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $credit_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $net_collected_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $outstanding_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $paid_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $refunded_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $settled_tip_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $written_off_money
 * Presence-aware input; omitted fields throw when accessed. */
final class SettlementAmountsInput extends Model {
    /** @param array{'balance_money': SignedMoneyInput|array<array-key, mixed>|\stdClass, 'credit_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'net_collected_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'outstanding_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'paid_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'refunded_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'settled_tip_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'written_off_money': MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SettlementAmountsInput')); }
    /** Shape $ (Value): {@see SignedMoneyInput}. outstanding_money minus credit_money. Negative when the order holds money beyond its total that has not been returned. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return SignedMoneyInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When balance_money is omitted; use hasBalanceMoney() or valueOrDefault().
     */
    public function getBalanceMoney(): mixed { return $this->get('balance_money'); }
    public function hasBalanceMoney(): bool { return $this->has('balance_money'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Money collected beyond the order total and not yet refunded. Write-offs do not create credit. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When credit_money is omitted; use hasCreditMoney() or valueOrDefault().
     */
    public function getCreditMoney(): mixed { return $this->get('credit_money'); }
    public function hasCreditMoney(): bool { return $this->has('credit_money'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Payments collected for the order minus money refunded to the buyer. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When net_collected_money is omitted; use hasNetCollectedMoney() or valueOrDefault().
     */
    public function getNetCollectedMoney(): mixed { return $this->get('net_collected_money'); }
    public function hasNetCollectedMoney(): bool { return $this->has('net_collected_money'); }
    /** Shape $ (Value): {@see MoneyValueInput}. What is still left to collect: the order total minus paid_money and written_off_money, never below zero. Refunds return money already collected and do not add to it. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When outstanding_money is omitted; use hasOutstandingMoney() or valueOrDefault().
     */
    public function getOutstandingMoney(): mixed { return $this->get('outstanding_money'); }
    public function hasOutstandingMoney(): bool { return $this->has('outstanding_money'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Settled payments and applied return credit. Excludes written-off invoice balances. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When paid_money is omitted; use hasPaidMoney() or valueOrDefault().
     */
    public function getPaidMoney(): mixed { return $this->get('paid_money'); }
    public function hasPaidMoney(): bool { return $this->has('paid_money'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Money returned to the buyer from what this order collected. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When refunded_money is omitted; use hasRefundedMoney() or valueOrDefault().
     */
    public function getRefundedMoney(): mixed { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Portion of the collected money settled as tips. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When settled_tip_money is omitted; use hasSettledTipMoney() or valueOrDefault().
     */
    public function getSettledTipMoney(): mixed { return $this->get('settled_tip_money'); }
    public function hasSettledTipMoney(): bool { return $this->has('settled_tip_money'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Invoice debt no longer owed. Reduces outstanding_money without increasing paid_money, net_collected_money, or credit_money. Cannot be refunded or used to fund an exchange. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When written_off_money is omitted; use hasWrittenOffMoney() or valueOrDefault().
     */
    public function getWrittenOffMoney(): mixed { return $this->get('written_off_money'); }
    public function hasWrittenOffMoney(): bool { return $this->has('written_off_money'); }
}
