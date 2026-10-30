<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InvoiceReopenedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class InvoiceReopenedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceReopenedInstalledMerchantsEventData')); }
    /** A bill issued to a customer.
     * @return InvoiceReopenedInstalledMerchantsEventDataObject
     */
    public function getObject(): InvoiceReopenedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
