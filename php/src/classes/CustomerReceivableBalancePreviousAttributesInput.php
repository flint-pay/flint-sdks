<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $currency
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $outstanding_money
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $overdue_money
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomerReceivableBalancePreviousAttributesInput extends Model {
    /** @param array{'currency'?: string|null, 'outstanding_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'overdue_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerReceivableBalancePreviousAttributesInput')); }
    /** ISO 4217 currency code. anyOf[1] (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When currency is omitted; use hasCurrency() or valueOrDefault().
     */
    public function getCurrency(): mixed { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Total still owed across the customer's invoices in this currency: invoice totals minus payments applied and balance reductions. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When outstanding_money is omitted; use hasOutstandingMoney() or valueOrDefault().
     */
    public function getOutstandingMoney(): mixed { return $this->get('outstanding_money'); }
    public function hasOutstandingMoney(): bool { return $this->has('outstanding_money'); }
    /** Part of the outstanding amount that is past its due date at `observed_at`. Invoices with a payment schedule count only their past-due installments. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When overdue_money is omitted; use hasOverdueMoney() or valueOrDefault().
     */
    public function getOverdueMoney(): mixed { return $this->get('overdue_money'); }
    public function hasOverdueMoney(): bool { return $this->has('overdue_money'); }
}
