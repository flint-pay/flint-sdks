<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read WebhookEventMerchantBillingInvoiceIssuedDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class WebhookEventMerchantBillingInvoiceIssuedData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEventMerchantBillingInvoiceIssuedData')); }
    /** Shape $ (Value): {@see WebhookEventMerchantBillingInvoiceIssuedDataObject}. A Flint invoice for the merchant's Flint subscription.
     * @return WebhookEventMerchantBillingInvoiceIssuedDataObject
     */
    public function getObject(): WebhookEventMerchantBillingInvoiceIssuedDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
