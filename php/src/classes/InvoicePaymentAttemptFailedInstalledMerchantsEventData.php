<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InvoicePaymentAttemptFailedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class InvoicePaymentAttemptFailedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoicePaymentAttemptFailedInstalledMerchantsEventData')); }
    /** An attempt to collect payment for an invoice.
     * @return InvoicePaymentAttemptFailedInstalledMerchantsEventDataObject
     */
    public function getObject(): InvoicePaymentAttemptFailedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
