<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InvoiceReminderDueInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class InvoiceReminderDueInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceReminderDueInstalledMerchantsEventData')); }
    /** A bill issued to a customer.
     * @return InvoiceReminderDueInstalledMerchantsEventDataObject
     */
    public function getObject(): InvoiceReminderDueInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
