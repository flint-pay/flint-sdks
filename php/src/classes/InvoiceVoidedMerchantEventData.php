<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InvoiceVoidedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class InvoiceVoidedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceVoidedMerchantEventData')); }
    /** A bill issued to a customer.
     * @return InvoiceVoidedMerchantEventDataObject
     */
    public function getObject(): InvoiceVoidedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
