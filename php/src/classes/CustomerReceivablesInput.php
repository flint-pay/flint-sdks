<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<CustomerReceivableBalanceInput|array<array-key, mixed>|\stdClass> $balances
 * @property-read string|\DateTimeInterface $observed_at
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomerReceivablesInput extends Model {
    /** @param array{'balances': list<CustomerReceivableBalanceInput|array<array-key, mixed>|\stdClass>, 'observed_at': string|\DateTimeInterface, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerReceivablesInput')); }
    /** @return list<CustomerReceivableBalanceInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When balances is omitted; use hasBalances() or valueOrDefault().
     */
    public function getBalances(): array { return $this->get('balances'); }
    public function hasBalances(): bool { return $this->has('balances'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When observed_at is omitted; use hasObservedAt() or valueOrDefault().
     */
    public function getObservedAt(): string|\DateTimeInterface { return $this->get('observed_at'); }
    public function hasObservedAt(): bool { return $this->has('observed_at'); }
}
