<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InvoiceCollectionBlockedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class InvoiceCollectionBlockedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceCollectionBlockedInstalledMerchantsEventData')); }
    /** A bill issued to a customer.
     * @return InvoiceCollectionBlockedInstalledMerchantsEventDataObject
     */
    public function getObject(): InvoiceCollectionBlockedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
