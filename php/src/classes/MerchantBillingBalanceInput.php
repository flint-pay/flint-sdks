<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $available_credit_money
 * @property-read string $merchant_billing_balance_id
 * @property-read string|\DateTimeInterface $observed_at
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $outstanding_money
 * Presence-aware input; omitted fields throw when accessed. */
final class MerchantBillingBalanceInput extends Model {
    /** @param array{'available_credit_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'merchant_billing_balance_id': string, 'observed_at': string|\DateTimeInterface, 'outstanding_money': MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantBillingBalanceInput')); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When available_credit_money is omitted; use hasAvailableCreditMoney() or valueOrDefault().
     */
    public function getAvailableCreditMoney(): mixed { return $this->get('available_credit_money'); }
    public function hasAvailableCreditMoney(): bool { return $this->has('available_credit_money'); }
    /** @return string
     * @throws SdkError When merchant_billing_balance_id is omitted; use hasMerchantBillingBalanceId() or valueOrDefault().
     */
    public function getMerchantBillingBalanceId(): string { return $this->get('merchant_billing_balance_id'); }
    public function hasMerchantBillingBalanceId(): bool { return $this->has('merchant_billing_balance_id'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When observed_at is omitted; use hasObservedAt() or valueOrDefault().
     */
    public function getObservedAt(): string|\DateTimeInterface { return $this->get('observed_at'); }
    public function hasObservedAt(): bool { return $this->has('observed_at'); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When outstanding_money is omitted; use hasOutstandingMoney() or valueOrDefault().
     */
    public function getOutstandingMoney(): mixed { return $this->get('outstanding_money'); }
    public function hasOutstandingMoney(): bool { return $this->has('outstanding_money'); }
}
