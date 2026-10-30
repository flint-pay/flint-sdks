<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InvoicePartiallyRefundedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class InvoicePartiallyRefundedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoicePartiallyRefundedInstalledMerchantsEventData')); }
    /** A bill issued to a customer.
     * @return InvoicePartiallyRefundedInstalledMerchantsEventDataObject
     */
    public function getObject(): InvoicePartiallyRefundedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
