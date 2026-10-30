<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InvoiceOverdueMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class InvoiceOverdueMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceOverdueMerchantEventData')); }
    /** A bill issued to a customer.
     * @return InvoiceOverdueMerchantEventDataObject
     */
    public function getObject(): InvoiceOverdueMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
