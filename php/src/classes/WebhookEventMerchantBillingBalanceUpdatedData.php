<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read WebhookEventMerchantBillingBalanceUpdatedDataAvailableCreditMoney $available_credit_money
 * @property-read string $merchant_billing_balance_id
 * @property-read string $observed_at
 * @property-read WebhookEventMerchantBillingBalanceUpdatedDataOutstandingMoney $outstanding_money
 * Presence-aware response; omitted fields throw when accessed. */
final class WebhookEventMerchantBillingBalanceUpdatedData extends Model {
    /** @param array{'available_credit_money': object{'amount': int, 'currency': string}, 'merchant_billing_balance_id': string, 'observed_at': string, 'outstanding_money': object{'amount': int, 'currency': string}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEventMerchantBillingBalanceUpdatedData')); }
    /** @return WebhookEventMerchantBillingBalanceUpdatedDataAvailableCreditMoney
     * @throws SdkError When available_credit_money is omitted; use hasAvailableCreditMoney() or valueOrDefault().
     */
    public function getAvailableCreditMoney(): WebhookEventMerchantBillingBalanceUpdatedDataAvailableCreditMoney { return $this->get('available_credit_money'); }
    public function hasAvailableCreditMoney(): bool { return $this->has('available_credit_money'); }
    /** @return string
     * @throws SdkError When merchant_billing_balance_id is omitted; use hasMerchantBillingBalanceId() or valueOrDefault().
     */
    public function getMerchantBillingBalanceId(): string { return $this->get('merchant_billing_balance_id'); }
    public function hasMerchantBillingBalanceId(): bool { return $this->has('merchant_billing_balance_id'); }
    /** @return string
     * @throws SdkError When observed_at is omitted; use hasObservedAt() or valueOrDefault().
     */
    public function getObservedAt(): string { return $this->get('observed_at'); }
    public function hasObservedAt(): bool { return $this->has('observed_at'); }
    /** @return WebhookEventMerchantBillingBalanceUpdatedDataOutstandingMoney
     * @throws SdkError When outstanding_money is omitted; use hasOutstandingMoney() or valueOrDefault().
     */
    public function getOutstandingMoney(): WebhookEventMerchantBillingBalanceUpdatedDataOutstandingMoney { return $this->get('outstanding_money'); }
    public function hasOutstandingMoney(): bool { return $this->has('outstanding_money'); }
}
