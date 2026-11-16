<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<CustomerReceivableBalancePreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $balances
 * @property-read string|\DateTimeInterface|null $observed_at
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomerReceivablesPreviousAttributesInput extends Model {
    /** @param array{'balances'?: list<CustomerReceivableBalancePreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'observed_at'?: string|\DateTimeInterface|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerReceivablesPreviousAttributesInput')); }
    /** One balance per currency in which the customer has an outstanding or overdue amount. Empty when the customer owes nothing. anyOf[1] (Value): Array of {@see CustomerReceivableBalancePreviousAttributesInput}. One balance per currency in which the customer has an outstanding or overdue amount. Empty when the customer owes nothing. anyOf[1][] (Value): {@see CustomerReceivableBalancePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<CustomerReceivableBalancePreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When balances is omitted; use hasBalances() or valueOrDefault().
     */
    public function getBalances(): mixed { return $this->get('balances'); }
    public function hasBalances(): bool { return $this->has('balances'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When observed_at is omitted; use hasObservedAt() or valueOrDefault().
     */
    public function getObservedAt(): mixed { return $this->get('observed_at'); }
    public function hasObservedAt(): bool { return $this->has('observed_at'); }
}
