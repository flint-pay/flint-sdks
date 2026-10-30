<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InvoicePartiallyPaidInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class InvoicePartiallyPaidInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoicePartiallyPaidInstalledMerchantsEventData')); }
    /** A bill issued to a customer.
     * @return InvoicePartiallyPaidInstalledMerchantsEventDataObject
     */
    public function getObject(): InvoicePartiallyPaidInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
