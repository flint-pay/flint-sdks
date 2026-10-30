<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $dunning
 * @property-read ?string $fulfillment_updates
 * @property-read ?string $invoices
 * @property-read ?string $order_receipts
 * @property-read ?string $returns
 * @property-read ?string $subscription_lifecycle
 * Presence-aware response; omitted optional fields return null. */
final class CustomerEmailDeliverySettings extends Model {
    /** @param array{'dunning'?: string, 'fulfillment_updates'?: string, 'invoices'?: string, 'order_receipts'?: string, 'returns'?: string, 'subscription_lifecycle'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerEmailDeliverySettings')); }
    /** Value enum: "flint_sends", "merchant_sends".
     * @return ?string
     */
    public function getDunning(): ?string { return $this->get('dunning'); }
    public function hasDunning(): bool { return $this->has('dunning'); }
    /** Value enum: "flint_sends", "merchant_sends".
     * @return ?string
     */
    public function getFulfillmentUpdates(): ?string { return $this->get('fulfillment_updates'); }
    public function hasFulfillmentUpdates(): bool { return $this->has('fulfillment_updates'); }
    /** Value enum: "flint_sends", "merchant_sends".
     * @return ?string
     */
    public function getInvoices(): ?string { return $this->get('invoices'); }
    public function hasInvoices(): bool { return $this->has('invoices'); }
    /** Value enum: "flint_sends", "merchant_sends".
     * @return ?string
     */
    public function getOrderReceipts(): ?string { return $this->get('order_receipts'); }
    public function hasOrderReceipts(): bool { return $this->has('order_receipts'); }
    /** Value enum: "flint_sends", "merchant_sends".
     * @return ?string
     */
    public function getReturns(): ?string { return $this->get('returns'); }
    public function hasReturns(): bool { return $this->has('returns'); }
    /** Value enum: "flint_sends", "merchant_sends".
     * @return ?string
     */
    public function getSubscriptionLifecycle(): ?string { return $this->get('subscription_lifecycle'); }
    public function hasSubscriptionLifecycle(): bool { return $this->has('subscription_lifecycle'); }
}
