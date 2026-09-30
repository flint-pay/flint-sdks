<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $merchant_subscription_invoice_id
 * @property-read string $type
 * Presence-aware response; omitted fields throw when accessed. */
final class WebhookEventBalanceTransactionCreatedDataRelatedResourceMerchantSubscriptionInvoice extends Model {
    /** @param array{'merchant_subscription_invoice_id': string, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEventBalanceTransactionCreatedDataRelatedResourceMerchantSubscriptionInvoice')); }
    /** @return string
     * @throws SdkError When merchant_subscription_invoice_id is omitted; use hasMerchantSubscriptionInvoiceId() or valueOrDefault().
     */
    public function getMerchantSubscriptionInvoiceId(): string { return $this->get('merchant_subscription_invoice_id'); }
    public function hasMerchantSubscriptionInvoiceId(): bool { return $this->has('merchant_subscription_invoice_id'); }
    /** @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
