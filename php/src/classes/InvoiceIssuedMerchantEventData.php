<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InvoiceIssuedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class InvoiceIssuedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceIssuedMerchantEventData')); }
    /** A bill issued to a customer.
     * @return InvoiceIssuedMerchantEventDataObject
     */
    public function getObject(): InvoiceIssuedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
