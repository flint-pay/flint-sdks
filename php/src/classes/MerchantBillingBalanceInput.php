<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $available_credit_money
 * @property-read string $currency
 * @property-read string $merchant_billing_balance_id
 * @property-read string|\DateTimeInterface $observed_at
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $outstanding_money
 * Presence-aware input; omitted fields throw when accessed. */
final class MerchantBillingBalanceInput extends Model {
    /** @param array{'available_credit_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'currency': string, 'merchant_billing_balance_id': string, 'observed_at': string|\DateTimeInterface, 'outstanding_money': MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantBillingBalanceInput')); }
    /** Account credit Flint holds for you that hasn't been applied yet, unsigned. Each application lowers both amounts and records a credit_applied entry. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When available_credit_money is omitted; use hasAvailableCreditMoney() or valueOrDefault().
     */
    public function getAvailableCreditMoney(): mixed { return $this->get('available_credit_money'); }
    public function hasAvailableCreditMoney(): bool { return $this->has('available_credit_money'); }
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * @return string
     * @throws SdkError When currency is omitted; use hasCurrency() or valueOrDefault().
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Stable identifier for this billing account and currency balance projection.
     * @return string
     * @throws SdkError When merchant_billing_balance_id is omitted; use hasMerchantBillingBalanceId() or valueOrDefault().
     */
    public function getMerchantBillingBalanceId(): string { return $this->get('merchant_billing_balance_id'); }
    public function hasMerchantBillingBalanceId(): bool { return $this->has('merchant_billing_balance_id'); }
    /** RFC3339 timestamp for the balance snapshot. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When observed_at is omitted; use hasObservedAt() or valueOrDefault().
     */
    public function getObservedAt(): string|\DateTimeInterface { return $this->get('observed_at'); }
    public function hasObservedAt(): bool { return $this->has('observed_at'); }
    /** What you owe Flint now, unsigned. Available credit isn't subtracted: credit lowers this amount only when Flint applies it, which records a credit_applied entry. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When outstanding_money is omitted; use hasOutstandingMoney() or valueOrDefault().
     */
    public function getOutstandingMoney(): mixed { return $this->get('outstanding_money'); }
    public function hasOutstandingMoney(): bool { return $this->has('outstanding_money'); }
}
