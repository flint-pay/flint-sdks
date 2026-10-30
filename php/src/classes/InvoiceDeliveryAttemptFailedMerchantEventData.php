<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InvoiceDeliveryAttemptFailedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class InvoiceDeliveryAttemptFailedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceDeliveryAttemptFailedMerchantEventData')); }
    /** One attempt to deliver an invoice by email, either the original send or a reminder, with its recipients and status.
     * @return InvoiceDeliveryAttemptFailedMerchantEventDataObject
     */
    public function getObject(): InvoiceDeliveryAttemptFailedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
