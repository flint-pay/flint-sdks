<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InvoiceCreatedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class InvoiceCreatedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceCreatedInstalledMerchantsEventData')); }
    /** A bill issued to a customer.
     * @return InvoiceCreatedInstalledMerchantsEventDataObject
     */
    public function getObject(): InvoiceCreatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
