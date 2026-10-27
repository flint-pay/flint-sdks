<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $available_credit_money
 * @property-read string $currency
 * @property-read string $merchant_billing_balance_id
 * @property-read string $observed_at
 * @property-read MoneyValue $outstanding_money
 * Presence-aware response; omitted optional fields return null. */
final class MerchantBillingBalance extends Model {
    /** @param array{'available_credit_money': mixed, 'currency': string, 'merchant_billing_balance_id': string, 'observed_at': string, 'outstanding_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantBillingBalance')); }
    /** Shape $ (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getAvailableCreditMoney(): MoneyValue { return $this->get('available_credit_money'); }
    public function hasAvailableCreditMoney(): bool { return $this->has('available_credit_money'); }
    /** Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     * @return string
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Shape $ (Value): string. Stable identifier for this billing account and currency balance projection.
     * @return string
     */
    public function getMerchantBillingBalanceId(): string { return $this->get('merchant_billing_balance_id'); }
    public function hasMerchantBillingBalanceId(): bool { return $this->has('merchant_billing_balance_id'); }
    /** Shape $ (Value): string. RFC3339 timestamp for the balance snapshot. Format: date-time.
     * @return string
     */
    public function getObservedAt(): string { return $this->get('observed_at'); }
    public function hasObservedAt(): bool { return $this->has('observed_at'); }
    /** Shape $ (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getOutstandingMoney(): MoneyValue { return $this->get('outstanding_money'); }
    public function hasOutstandingMoney(): bool { return $this->has('outstanding_money'); }
}
