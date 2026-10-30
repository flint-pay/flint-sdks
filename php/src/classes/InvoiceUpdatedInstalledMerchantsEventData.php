<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InvoiceUpdatedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class InvoiceUpdatedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceUpdatedInstalledMerchantsEventData')); }
    /** A bill issued to a customer.
     * @return InvoiceUpdatedInstalledMerchantsEventDataObject
     */
    public function getObject(): InvoiceUpdatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
