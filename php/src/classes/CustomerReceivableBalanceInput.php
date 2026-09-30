<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $currency
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $outstanding_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $overdue_money
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomerReceivableBalanceInput extends Model {
    /** @param array{'currency': string, 'outstanding_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'overdue_money': MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerReceivableBalanceInput')); }
    /** @return string
     * @throws SdkError When currency is omitted; use hasCurrency() or valueOrDefault().
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When outstanding_money is omitted; use hasOutstandingMoney() or valueOrDefault().
     */
    public function getOutstandingMoney(): mixed { return $this->get('outstanding_money'); }
    public function hasOutstandingMoney(): bool { return $this->has('outstanding_money'); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When overdue_money is omitted; use hasOverdueMoney() or valueOrDefault().
     */
    public function getOverdueMoney(): mixed { return $this->get('overdue_money'); }
    public function hasOverdueMoney(): bool { return $this->has('overdue_money'); }
}
