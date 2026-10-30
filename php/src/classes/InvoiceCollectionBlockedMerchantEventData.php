<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InvoiceCollectionBlockedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class InvoiceCollectionBlockedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceCollectionBlockedMerchantEventData')); }
    /** A bill issued to a customer.
     * @return InvoiceCollectionBlockedMerchantEventDataObject
     */
    public function getObject(): InvoiceCollectionBlockedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
