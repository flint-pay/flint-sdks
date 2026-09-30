<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<CustomerReceivableBalance> $balances
 * @property-read string $observed_at
 * Presence-aware response; omitted fields throw when accessed. */
final class CustomerReceivables extends Model {
    /** @param array{'balances': list<mixed>, 'observed_at': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerReceivables')); }
    /** @return list<CustomerReceivableBalance>
     * @throws SdkError When balances is omitted; use hasBalances() or valueOrDefault().
     */
    public function getBalances(): array { return $this->get('balances'); }
    public function hasBalances(): bool { return $this->has('balances'); }
    /** @return string
     * @throws SdkError When observed_at is omitted; use hasObservedAt() or valueOrDefault().
     */
    public function getObservedAt(): string { return $this->get('observed_at'); }
    public function hasObservedAt(): bool { return $this->has('observed_at'); }
}
