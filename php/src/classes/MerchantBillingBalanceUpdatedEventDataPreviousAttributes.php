<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributes|null $available_credit_money
 * @property-read string|null $currency
 * @property-read string|null $merchant_billing_balance_id
 * @property-read string|null $observed_at
 * @property-read MoneyValuePreviousAttributes|null $outstanding_money
 * @property-read string|null $past_due_at
 * @property-read MoneyValuePreviousAttributes|null $past_due_money
 * @property-read string|null $payout_hold_at
 * Presence-aware response; omitted optional fields return null. */
final class MerchantBillingBalanceUpdatedEventDataPreviousAttributes extends Model {
    /** @param array{'available_credit_money'?: mixed, 'currency'?: mixed, 'merchant_billing_balance_id'?: mixed, 'observed_at'?: mixed, 'outstanding_money'?: mixed, 'past_due_at'?: mixed, 'past_due_money'?: mixed, 'payout_hold_at'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantBillingBalanceUpdatedEventDataPreviousAttributes')); }
    /** Account credit Flint holds for you that hasn't been applied yet, unsigned. Each application lowers both amounts and records a credit_applied entry. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getAvailableCreditMoney(): MoneyValuePreviousAttributes|null { return $this->get('available_credit_money'); }
    public function hasAvailableCreditMoney(): bool { return $this->has('available_credit_money'); }
    /** ISO 4217 currency code. anyOf[1] (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCurrency(): string|null { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Stable identifier for this billing account and currency balance projection. anyOf[1] (Value): string. Stable identifier for this billing account and currency balance projection. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getMerchantBillingBalanceId(): string|null { return $this->get('merchant_billing_balance_id'); }
    public function hasMerchantBillingBalanceId(): bool { return $this->has('merchant_billing_balance_id'); }
    /** RFC3339 timestamp for the balance snapshot. anyOf[1] (Value): string. RFC3339 timestamp for the balance snapshot. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getObservedAt(): string|null { return $this->get('observed_at'); }
    public function hasObservedAt(): bool { return $this->has('observed_at'); }
    /** What you owe Flint now, unsigned. Available credit isn't subtracted: credit lowers this amount only when Flint applies it, which records a credit_applied entry. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getOutstandingMoney(): MoneyValuePreviousAttributes|null { return $this->get('outstanding_money'); }
    public function hasOutstandingMoney(): bool { return $this->has('outstanding_money'); }
    /** Due date of the oldest unpaid past-due amount, as an RFC 3339 UTC timestamp. Omitted when nothing is past due. anyOf[1] (Value): string. Due date of the oldest unpaid past-due amount, as an RFC 3339 UTC timestamp. Omitted when nothing is past due. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPastDueAt(): string|null { return $this->get('past_due_at'); }
    public function hasPastDueAt(): bool { return $this->has('past_due_at'); }
    /** Amount that is past its due date and still unpaid. Zero when nothing is past due. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getPastDueMoney(): MoneyValuePreviousAttributes|null { return $this->get('past_due_money'); }
    public function hasPastDueMoney(): bool { return $this->has('past_due_money'); }
    /** Time at which Flint holds payouts if the suspendable past-due amount is still unpaid and totals at least 25 major currency units in this currency (25 USD for USD billing), as an RFC 3339 UTC timestamp. Flint attempts collection from the available balance before holding payouts. The hold can begin later than this while a collection is in progress. Payouts are actually held when `readiness.payouts.status_reason` on the Merchant is `billing_suspended`. Omitted when no hold is scheduled, including when suspendable past-due amounts in this currency are below that floor or the only past-due amounts never hold payouts. anyOf[1] (Value): string. Time at which Flint holds payouts if the suspendable past-due amount is still unpaid and totals at least 25 major currency units in this currency (25 USD for USD billing), as an RFC 3339 UTC timestamp. Flint attempts collection from the available balance before holding payouts. The hold can begin later than this while a collection is in progress. Payouts are actually held when `readiness.payouts.status_reason` on the Merchant is `billing_suspended`. Omitted when no hold is scheduled, including when suspendable past-due amounts in this currency are below that floor or the only past-due amounts never hold payouts. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPayoutHoldAt(): string|null { return $this->get('payout_hold_at'); }
    public function hasPayoutHoldAt(): bool { return $this->has('payout_hold_at'); }
}
