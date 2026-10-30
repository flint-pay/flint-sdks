<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InvoiceDeliveryAttemptSentInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class InvoiceDeliveryAttemptSentInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceDeliveryAttemptSentInstalledMerchantsEventData')); }
    /** One attempt to deliver an invoice by email, either the original send or a reminder, with its recipients and status.
     * @return InvoiceDeliveryAttemptSentInstalledMerchantsEventDataObject
     */
    public function getObject(): InvoiceDeliveryAttemptSentInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
