<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<CustomerReceivableBalancePreviousAttributes>|null $balances
 * @property-read string|null $observed_at
 * Presence-aware response; omitted optional fields return null. */
final class CustomerReceivablesPreviousAttributes extends Model {
    /** @param array{'balances'?: mixed, 'observed_at'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerReceivablesPreviousAttributes')); }
    /** One balance per currency in which the customer has an outstanding or overdue amount. Empty when the customer owes nothing. anyOf[1] (Value): Array of {@see CustomerReceivableBalancePreviousAttributes}. One balance per currency in which the customer has an outstanding or overdue amount. Empty when the customer owes nothing. anyOf[1][] (Value): {@see CustomerReceivableBalancePreviousAttributes}. anyOf[2] (Value): null.
     * @return list<CustomerReceivableBalancePreviousAttributes>|null
     */
    public function getBalances(): array|null { return $this->get('balances'); }
    public function hasBalances(): bool { return $this->has('balances'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getObservedAt(): string|null { return $this->get('observed_at'); }
    public function hasObservedAt(): bool { return $this->has('observed_at'); }
}
