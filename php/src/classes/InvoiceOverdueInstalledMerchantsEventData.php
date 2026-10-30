<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InvoiceOverdueInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class InvoiceOverdueInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceOverdueInstalledMerchantsEventData')); }
    /** A bill issued to a customer.
     * @return InvoiceOverdueInstalledMerchantsEventDataObject
     */
    public function getObject(): InvoiceOverdueInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
