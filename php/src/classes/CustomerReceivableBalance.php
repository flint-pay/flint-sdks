<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $currency
 * @property-read MoneyValue $outstanding_money
 * @property-read MoneyValue $overdue_money
 * Presence-aware response; omitted fields throw when accessed. */
final class CustomerReceivableBalance extends Model {
    /** @param array{'currency': string, 'outstanding_money': mixed, 'overdue_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerReceivableBalance')); }
    /** @return string
     * @throws SdkError When currency is omitted; use hasCurrency() or valueOrDefault().
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** @return MoneyValue
     * @throws SdkError When outstanding_money is omitted; use hasOutstandingMoney() or valueOrDefault().
     */
    public function getOutstandingMoney(): MoneyValue { return $this->get('outstanding_money'); }
    public function hasOutstandingMoney(): bool { return $this->has('outstanding_money'); }
    /** @return MoneyValue
     * @throws SdkError When overdue_money is omitted; use hasOverdueMoney() or valueOrDefault().
     */
    public function getOverdueMoney(): MoneyValue { return $this->get('overdue_money'); }
    public function hasOverdueMoney(): bool { return $this->has('overdue_money'); }
}
