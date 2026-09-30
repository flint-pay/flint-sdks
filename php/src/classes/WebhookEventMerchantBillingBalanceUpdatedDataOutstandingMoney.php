<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $amount
 * @property-read string $currency
 * Presence-aware response; omitted fields throw when accessed. */
final class WebhookEventMerchantBillingBalanceUpdatedDataOutstandingMoney extends Model {
    /** @param array{'amount': int, 'currency': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEventMerchantBillingBalanceUpdatedDataOutstandingMoney')); }
    /** @return int
     * @throws SdkError When amount is omitted; use hasAmount() or valueOrDefault().
     */
    public function getAmount(): int { return $this->get('amount'); }
    public function hasAmount(): bool { return $this->has('amount'); }
    /** @return string
     * @throws SdkError When currency is omitted; use hasCurrency() or valueOrDefault().
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
}
