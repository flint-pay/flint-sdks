<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<CustomerReceivableBalance> $balances
 * @property-read string $observed_at
 * Presence-aware response; omitted optional fields return null. */
final class CustomerReceivables extends Model {
    /** @param array{'balances': list<mixed>, 'observed_at': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerReceivables')); }
    /**  [] (Value): {@see CustomerReceivableBalance}. A customer's outstanding and overdue amounts in one currency.
     * @return list<CustomerReceivableBalance>
     */
    public function getBalances(): array { return $this->get('balances'); }
    public function hasBalances(): bool { return $this->has('balances'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getObservedAt(): string { return $this->get('observed_at'); }
    public function hasObservedAt(): bool { return $this->has('observed_at'); }
}
