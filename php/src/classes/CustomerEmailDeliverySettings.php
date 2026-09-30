<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $dunning
 * @property-read string $fulfillment_updates
 * @property-read string $invoices
 * @property-read string $order_receipts
 * @property-read string $returns
 * @property-read string $subscription_lifecycle
 * Presence-aware response; omitted fields throw when accessed. */
final class CustomerEmailDeliverySettings extends Model {
    /** @param array{'dunning'?: string, 'fulfillment_updates'?: string, 'invoices'?: string, 'order_receipts'?: string, 'returns'?: string, 'subscription_lifecycle'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerEmailDeliverySettings')); }
    /** @return string
     * @throws SdkError When dunning is omitted; use hasDunning() or valueOrDefault().
     */
    public function getDunning(): string { return $this->get('dunning'); }
    public function hasDunning(): bool { return $this->has('dunning'); }
    /** @return string
     * @throws SdkError When fulfillment_updates is omitted; use hasFulfillmentUpdates() or valueOrDefault().
     */
    public function getFulfillmentUpdates(): string { return $this->get('fulfillment_updates'); }
    public function hasFulfillmentUpdates(): bool { return $this->has('fulfillment_updates'); }
    /** @return string
     * @throws SdkError When invoices is omitted; use hasInvoices() or valueOrDefault().
     */
    public function getInvoices(): string { return $this->get('invoices'); }
    public function hasInvoices(): bool { return $this->has('invoices'); }
    /** @return string
     * @throws SdkError When order_receipts is omitted; use hasOrderReceipts() or valueOrDefault().
     */
    public function getOrderReceipts(): string { return $this->get('order_receipts'); }
    public function hasOrderReceipts(): bool { return $this->has('order_receipts'); }
    /** @return string
     * @throws SdkError When returns is omitted; use hasReturns() or valueOrDefault().
     */
    public function getReturns(): string { return $this->get('returns'); }
    public function hasReturns(): bool { return $this->has('returns'); }
    /** @return string
     * @throws SdkError When subscription_lifecycle is omitted; use hasSubscriptionLifecycle() or valueOrDefault().
     */
    public function getSubscriptionLifecycle(): string { return $this->get('subscription_lifecycle'); }
    public function hasSubscriptionLifecycle(): bool { return $this->has('subscription_lifecycle'); }
}
