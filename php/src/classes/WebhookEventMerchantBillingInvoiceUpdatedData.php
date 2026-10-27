<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read WebhookEventMerchantBillingInvoiceUpdatedDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class WebhookEventMerchantBillingInvoiceUpdatedData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEventMerchantBillingInvoiceUpdatedData')); }
    /** Shape $ (Value): {@see WebhookEventMerchantBillingInvoiceUpdatedDataObject}. A Flint invoice for the merchant's Flint subscription.
     * @return WebhookEventMerchantBillingInvoiceUpdatedDataObject
     */
    public function getObject(): WebhookEventMerchantBillingInvoiceUpdatedDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
