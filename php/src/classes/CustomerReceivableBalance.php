<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $currency
 * @property-read MoneyValue $outstanding_money
 * @property-read MoneyValue $overdue_money
 * Presence-aware response; omitted optional fields return null. */
final class CustomerReceivableBalance extends Model {
    /** @param array{'currency': string, 'outstanding_money': mixed, 'overdue_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerReceivableBalance')); }
    /** Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     * @return string
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Shape $ (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getOutstandingMoney(): MoneyValue { return $this->get('outstanding_money'); }
    public function hasOutstandingMoney(): bool { return $this->has('outstanding_money'); }
    /** Shape $ (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getOverdueMoney(): MoneyValue { return $this->get('overdue_money'); }
    public function hasOverdueMoney(): bool { return $this->has('overdue_money'); }
}
