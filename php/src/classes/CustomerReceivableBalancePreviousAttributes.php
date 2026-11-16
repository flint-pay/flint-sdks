<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $currency
 * @property-read MoneyValuePreviousAttributes|null $outstanding_money
 * @property-read MoneyValuePreviousAttributes|null $overdue_money
 * Presence-aware response; omitted optional fields return null. */
final class CustomerReceivableBalancePreviousAttributes extends Model {
    /** @param array{'currency'?: mixed, 'outstanding_money'?: mixed, 'overdue_money'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerReceivableBalancePreviousAttributes')); }
    /** ISO 4217 currency code. anyOf[1] (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCurrency(): string|null { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Total still owed across the customer's invoices in this currency: invoice totals minus payments applied and balance reductions. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getOutstandingMoney(): MoneyValuePreviousAttributes|null { return $this->get('outstanding_money'); }
    public function hasOutstandingMoney(): bool { return $this->has('outstanding_money'); }
    /** Part of the outstanding amount that is past its due date at `observed_at`. Invoices with a payment schedule count only their past-due installments. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getOverdueMoney(): MoneyValuePreviousAttributes|null { return $this->get('overdue_money'); }
    public function hasOverdueMoney(): bool { return $this->has('overdue_money'); }
}
