<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $available_credit_money
 * @property-read string $currency
 * @property-read string $merchant_billing_balance_id
 * @property-read string $observed_at
 * @property-read MoneyValue $outstanding_money
 * @property-read ?string $past_due_at
 * @property-read MoneyValue $past_due_money
 * @property-read ?string $payout_hold_at
 * Presence-aware response; omitted optional fields return null. */
final class MerchantBillingBalanceUpdatedEventDataObject extends Model {
    /** @param array{'available_credit_money': mixed, 'currency': string, 'merchant_billing_balance_id': string, 'observed_at': string, 'outstanding_money': mixed, 'past_due_at'?: string, 'past_due_money': mixed, 'payout_hold_at'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantBillingBalanceUpdatedEventDataObject')); }
    /** Account credit Flint holds for you that hasn't been applied yet, unsigned. Each application lowers both amounts and records a credit_applied entry. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getAvailableCreditMoney(): MoneyValue { return $this->get('available_credit_money'); }
    public function hasAvailableCreditMoney(): bool { return $this->has('available_credit_money'); }
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     * @return string
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Stable identifier for this billing account and currency balance projection.
     * @return string
     */
    public function getMerchantBillingBalanceId(): string { return $this->get('merchant_billing_balance_id'); }
    public function hasMerchantBillingBalanceId(): bool { return $this->has('merchant_billing_balance_id'); }
    /** RFC3339 timestamp for the balance snapshot. Format: date-time.
     * @return string
     */
    public function getObservedAt(): string { return $this->get('observed_at'); }
    public function hasObservedAt(): bool { return $this->has('observed_at'); }
    /** What you owe Flint now, unsigned. Available credit isn't subtracted: credit lowers this amount only when Flint applies it, which records a credit_applied entry. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getOutstandingMoney(): MoneyValue { return $this->get('outstanding_money'); }
    public function hasOutstandingMoney(): bool { return $this->has('outstanding_money'); }
    /** Due date of the oldest unpaid past-due amount, as an RFC 3339 UTC timestamp. Omitted when nothing is past due. Format: date-time.
     * @return ?string
     */
    public function getPastDueAt(): ?string { return $this->get('past_due_at'); }
    public function hasPastDueAt(): bool { return $this->has('past_due_at'); }
    /** Amount that is past its due date and still unpaid. Zero when nothing is past due. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getPastDueMoney(): MoneyValue { return $this->get('past_due_money'); }
    public function hasPastDueMoney(): bool { return $this->has('past_due_money'); }
    /** Time at which Flint holds payouts if the suspendable past-due amount is still unpaid and totals at least 25 major currency units in this currency (25 USD for USD billing), as an RFC 3339 UTC timestamp. Flint attempts collection from the available balance before holding payouts. The hold can begin later than this while a collection is in progress. Payouts are actually held when `readiness.payouts.status_reason` on the Merchant is `billing_suspended`. Omitted when no hold is scheduled, including when suspendable past-due amounts in this currency are below that floor or the only past-due amounts never hold payouts. Format: date-time.
     * @return ?string
     */
    public function getPayoutHoldAt(): ?string { return $this->get('payout_hold_at'); }
    public function hasPayoutHoldAt(): bool { return $this->has('payout_hold_at'); }
}
