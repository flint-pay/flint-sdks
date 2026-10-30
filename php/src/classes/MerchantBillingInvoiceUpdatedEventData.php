<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MerchantBillingInvoiceUpdatedEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class MerchantBillingInvoiceUpdatedEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantBillingInvoiceUpdatedEventData')); }
    /** A Flint invoice for the merchant's Flint subscription.
     * @return MerchantBillingInvoiceUpdatedEventDataObject
     */
    public function getObject(): MerchantBillingInvoiceUpdatedEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
